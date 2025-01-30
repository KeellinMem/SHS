"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Eye, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GuideCard({ guide }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    // Здесь будет логика отправки лайка на сервер
  }

  return (
    <motion.div
      className="bg-secondary/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/guides/${guide.id}`}>
        <Image
          src={guide.thumbnail || "/placeholder.svg"}
          alt={guide.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-200">
            {guide.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{guide.author}</span>
            <span>{new Date(guide.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
      <div className="px-4 py-2 bg-secondary/20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" /> {guide.views}
          </span>
          <motion.button
            className={`flex items-center ${isLiked ? "text-red-500" : ""}`}
            onClick={handleLike}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-4 h-4 mr-1" /> {guide.likes + (isLiked ? 1 : 0)}
          </motion.button>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-yellow-500" />
          <span>{guide.rating.toFixed(1)}</span>
        </div>
      </div>
    </motion.div>
  )
}

