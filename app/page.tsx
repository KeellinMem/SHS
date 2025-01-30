import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Добро пожаловать в{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SynapseHub
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Ваша платформа для мультиплеерных игр Hearts of Iron IV, гайдов и общения с сообществом
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/sessions">Найти игру</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/guides">Смотреть гайды</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Users className="h-14 w-14 text-orange-500" />
              <CardTitle>Активные сессии</CardTitle>
              <CardDescription>Присоединяйтесь к играм или создавайте свои</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Открытых сессий</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpen className="h-14 w-14 text-orange-500" />
              <CardTitle>Гайды</CardTitle>
              <CardDescription>Учитесь у лучших игроков сообщества</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Доступных гайдов</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-14 w-14 text-orange-500" />
              <CardTitle>Активные игроки</CardTitle>
              <CardDescription>Присоединяйтесь к растущему сообществу</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Игроков онлайн</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

