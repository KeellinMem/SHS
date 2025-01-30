"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function AddGuideButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const addGuideMutation = useMutation({
    mutationFn: async (newGuide) => {
      const response = await fetch("/api/guides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGuide),
      })
      if (!response.ok) {
        throw new Error("Failed to create guide")
      }
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries("guides")
      toast({
        title: "Гайд добавлен",
        description: "Ваш гайд успешно добавлен.",
      })
      setIsOpen(false)
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить гайд. Попробуйте еще раз.",
        variant: "destructive",
      })
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newGuide = Object.fromEntries(formData)
    addGuideMutation.mutate(newGuide)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="mr-2 h-4 w-4" /> Добавить гайд
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить новый гайд</DialogTitle>
          <DialogDescription>
            Заполните форму для создания нового гайда. Нажмите Сохранить, когда закончите.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Название гайда</Label>
            <Input id="title" name="title" placeholder="Введите название гайда" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea id="description" name="description" placeholder="Краткое описание гайда" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Input id="category" name="category" placeholder="Например: Для новичков, Продвинутые, Нации" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Теги</Label>
            <Input id="tags" name="tags" placeholder="Введите теги через запятую" />
          </div>
          <Button type="submit" className="w-full" disabled={addGuideMutation.isLoading}>
            {addGuideMutation.isLoading ? "Сохранение..." : "Сохранить"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

