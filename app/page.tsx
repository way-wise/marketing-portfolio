"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import CategoryNav from "@/components/category-nav";
import MobileNav from "@/components/mobile-nav";
import PortfolioCard from "@/components/portfolio-card";
import { portfolioItems } from "@/lib/portfolio-data";
import Image from "next/image";
import { sectionInfo } from "@/lib/portfolio-data";

type SectionKey = keyof typeof sectionInfo;

export default function Home() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("backend");
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({
    backend: null,
    mobile: null,
    frontend: null,
    nocode: null,
    api: null,
  });

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Handle URL parameters for highlighting specific cards
  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      // Support multiple IDs separated by commas
      const ids = idParam.split(",");
      setHighlightedIds(ids);

      // If there's at least one ID, set the active category to the first highlighted item's category
      if (ids.length > 0) {
        const firstItem = portfolioItems.find((item) => item.id === ids[0]);
        if (firstItem) {
          setActiveCategory(firstItem.category);

          // Use a ref to track if we've already scrolled to avoid infinite loops
          const timer = setTimeout(() => {
            if (sectionRefs.current[firstItem.category]) {
              sectionRefs.current[firstItem.category]?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }, 500);

          return () => clearTimeout(timer);
        }
      }
    }
  }, [searchParams]); // Only depend on searchParams

  const scrollToCategory = (category: string) => {
    // Don't update state here, just scroll
    if (sectionRefs.current[category]) {
      sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Use setTimeout to ensure the state update completes before scrolling
    setTimeout(() => {
      scrollToCategory(category);
    }, 0);
  };

  // Group portfolio items by category
  const itemsByCategory = portfolioItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof portfolioItems>);

  // Get unique categories
  const categories = Object.keys(itemsByCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
        <div className="flex flex-col gap-1 items-center justify-between bg-orange-500 px-4 md:px-20 py-4">
          <h2 className="text-white font-bold leading-none text-lg md:text-2xl text-center">Our Digital Marketing Dynamic Portfolio</h2>
          <a href="mailto:support@waywisetech.com" className="text-black font-bold text-sm block">support@waywisetech.com</a>
        </div>
        <div className="flex items-center justify-between sticky top-0 z-50 bg-gray-50 px-4 md:px-20 py-4">
          <div className="flex flex-col items-end gap-1">
            <Image src="/wwt_logo.png" alt="Logo" width={250} height={200} />
            <p className="text-sm -mb-0.5 font-bold text-gray-900">A California Innovation Company</p>
          </div>
          {/* <div>
            <h2 className="text-orange-600 font-bold leading-none" style={{ fontSize: "26px" }}>Our Digital Marketing Dynamic Portfolio</h2>
            <a href="mailto:support@waywisetech.com" className="text-black font-bold text-sm mt-2 block">support@waywisetech.com</a>
          </div> */}
          
          {/* Desktop Navigation */}
          {isDesktop && (
            <div className="max-w-4xl py-5">
              <CategoryNav
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          )}

          {/* Mobile Navigation */}
          <MobileNav
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>


      {/* Portfolio Sections - One for each category */}
      {categories.map((category) => (
        <section
          key={category}
          ref={(el) => {
            sectionRefs.current[category] = el as HTMLDivElement | null;
          }}
          className="py-[120px] px-4 bg-white border-b-4 border-gray-200 last:border-0"
          id={`section-${category}`}
        >
          <div className="px-2 md:px-16">
            <div className="flex flex-col items-center gap-1 mb-[32px] md:!mb-[70px]">
              <h2 className="text-3xl md:text-5xl font-semibold text-center capitalize">
                {sectionInfo[category as SectionKey]?.title || `${category} Projects`}
              </h2>
              <p className="text-lg md:text-2xl font-semibold text-gray-800 text-center">
                {sectionInfo[category as SectionKey]?.description || "Explore my work in this category."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {itemsByCategory[category].map((item, index) => (
                <PortfolioCard
                  key={item.id + index}
                  item={item}
                  isHighlighted={highlightedIds.includes(item.id)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Our Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Showcasing my development journey
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-300 transition-colors"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
