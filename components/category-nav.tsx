"use client"

import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const categories = [
  { id: "seo", label: "SEO" },
  { id: "google ads", label: "Google Ads" },
  { id: "meta ads", label: "Meta Ads" },
  { id: "blog article", label: "Blog Article" },
  { id: "digital branding", label: "Digital Branding" },
  { id: "social media", label: "Social Media" },
]

interface CategoryNavProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      onCategoryChange(categoryParam)
    }
  }, [searchParams, onCategoryChange])

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("category", category)
    router.push(`?${params.toString()}`)
    onCategoryChange(category)
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "seo":
        return "from-emerald-400 to-teal-600"
      case "google ads":
        return "from-purple-400 to-indigo-600"
      case "meta ads":
        return "from-rose-400 to-pink-600"
      case "blog article":
        return "from-amber-400 to-orange-600"
      case "digital branding":
        return "from-cyan-400 to-blue-600"
      case "social media":
        return "from-orange-400 to-orange-600"
      default:
        return "from-gray-700 to-gray-900"
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            "px-6 py-3 rounded-full font-medium transition-all",
            activeCategory === category.id
              ? "text-white shadow-lg bg-gradient-to-r"
              : "bg-white text-gray-700 hover:bg-gray-100",
            activeCategory === category.id && getCategoryGradient(category.id),
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
