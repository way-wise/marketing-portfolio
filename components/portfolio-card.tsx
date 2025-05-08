"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/lib/portfolio-data";
import useEmblaCarousel from "embla-carousel-react";

interface PortfolioCardProps {
  item: PortfolioItem;
  isHighlighted: boolean;
}

export default function PortfolioCard({
  item,
  isHighlighted,
}: PortfolioCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi?.on("select", onSelect);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "backend":
        return "bg-emerald-500";
      case "mobile":
        return "bg-purple-500";
      case "frontend":
        return "bg-rose-500";
      case "nocode":
        return "bg-amber-500";
      case "api":
        return "bg-cyan-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "backend":
        return "from-emerald-400 to-teal-600";
      case "mobile":
        return "from-purple-400 to-indigo-600";
      case "frontend":
        return "from-rose-400 to-pink-600";
      case "nocode":
        return "from-amber-400 to-orange-600";
      case "api":
        return "from-cyan-400 to-blue-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div
      className={cn(
        "group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white shadow-md p-0 max-w-[400px]",
        {
          [`outline outline-2 outline-offset-2 outline-orange-500`]: isHighlighted,
        }
      )}
      style={{maxWidth: "400px"}}
    >
      <div
        className={cn(
          "relative z-10 h-full overflow-hidden rounded-xl",
          {
            "outline outline-2 outline-offset-2 bg-orange-500 text-white outline-orange-500": isHighlighted
          }
        )}
      >
        <div className="relative group-hover:scale-105 transition-transform duration-500">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {item.images && item.images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={image}
                    alt={`${item.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-96 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollPrev}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollNext}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          {item.images && item.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    selectedIndex === index ? "bg-white scale-125" : "bg-white/50"
                  )}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          )}

          <span
            className={cn(
              "absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-medium",
              getCategoryColor(item.category)
            )}
          >
            {item.highlightKeyword}
          </span>
        </div>

        <div className="p-6">
          <Link href={`/project/${item.id}`} className="block">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>{" "}
          </Link>
          <p className="text-gray-600 mb-4">{item.description}</p>
          {/* <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div> */}
        </div>

        {/* <div className="px-6 pb-6 flex justify-between">
          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}

          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="mr-1" />
              <span>Source Code</span>
            </a>
          )}
        </div> */}
       
      </div>
    </div>
  );
}
