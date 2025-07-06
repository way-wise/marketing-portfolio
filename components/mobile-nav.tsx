"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import CategoryNav from "./category-nav"

interface MobileNavProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function MobileNav({ activeCategory, onCategoryChange }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category)
    closeMenu()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  // Don't render if not mobile
  if (!isMobile) {
    return null
  }

  return (
    <div className="block">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={handleOverlayClick}
        >
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Categories</h3>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <CategoryNav
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryClick}
                variant="mobile"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 