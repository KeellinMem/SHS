"use client"

import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import GuideCard from "./GuideCard"

// Имитация функции fetchGuides
async function fetchGuides() {
  // Имитация задержки загрузки
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Возвращаем тестовые данные
  return [
    {
      id: 1,
      title: "Основы экономики в HOI4",
      description: "Узнайте, как эффективно построить вашу страну.",
      thumbnail: "/placeholder.svg",
      views: 1500,
      likes: 320,
      rating: 4.5,
      author: "StrategyMaster",
      date: "2025-01-15",
      tags: ["Экономика", "Для новичков"],
    },
    // Добавьте больше объектов гайдов здесь
  ]
}

export default function GuidesGrid() {
  const {
    data: guides,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["guides"],
    queryFn: fetchGuides,
  })

  if (isLoading) return <div>Загрузка гайдов...</div>
  if (error) return <div>Ошибка загрузки гайдов</div>

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </motion.div>
  )
}

