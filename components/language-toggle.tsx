"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = React.useState("ru")

  const changeLang = (lang: string) => {
    setCurrentLang(lang)
    // В реальном приложении здесь будет логика смены языка
    // router.push(`/${lang}${router.pathname}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Сменить язык</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLang("ru")}>Русский</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang("en")}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

