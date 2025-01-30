"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GuidesFilters() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("popular")

  return (
    <div className="space-y-6 bg-secondary/10 p-6 rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="search">Поиск</Label>
        <Input
          id="search"
          placeholder="Название, автор или теги..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Категория</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginners">Для новичков</SelectItem>
            <SelectItem value="advanced">Продвинутые</SelectItem>
            <SelectItem value="nations">Нации</SelectItem>
            <SelectItem value="mods">Моды</SelectItem>
            <SelectItem value="strategies">Стратегии</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sort">Сортировка</Label>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger id="sort">
            <SelectValue placeholder="Выберите сортировку" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Самые популярные</SelectItem>
            <SelectItem value="rating">Лучшие по рейтингу</SelectItem>
            <SelectItem value="recent">Свежие</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full">Применить фильтры</Button>
    </div>
  )
}

