import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Shield, BookOpen, Users } from "lucide-react"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">SynapseHub</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/sessions" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <Users className="h-4 w-4" />
              <span>Мультиплеер</span>
            </Link>
            <Link href="/guides" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <BookOpen className="h-4 w-4" />
              <span>Гайды</span>
            </Link>
            <Link href="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <Shield className="h-4 w-4" />
              <span>Профиль</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ModeToggle />
            <Button variant="secondary" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

