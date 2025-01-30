import { NextResponse } from "next/server"

// Здесь должно быть подключение к вашей базе данных
// import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, category, tags } = body

    // Здесь должна быть логика сохранения гайда в базу данных
    // const newGuide = await db.guide.create({ data: { title, description, category, tags } })

    // Имитация задержки сервера
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Имитация ответа сервера
    const newGuide = { id: Date.now(), title, description, category, tags, createdAt: new Date().toISOString() }

    return NextResponse.json(newGuide, { status: 201 })
  } catch (error) {
    console.error("Failed to create guide:", error)
    return NextResponse.json({ error: "Failed to create guide" }, { status: 500 })
  }
}

