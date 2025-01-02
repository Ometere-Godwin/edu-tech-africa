"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Master the Art of Modern Technology",
    subtitle: "Learn from industry experts and build real-world projects",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
    gradient: "from-purple-500/50"
  },
  {
    id: 2,
    title: "Build Your Future in Tech",
    subtitle: "Join a community of passionate learners and innovators",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    gradient: "from-indigo-500/50"
  },
  {
    id: 3,
    title: "Learn at Your Own Pace",
    subtitle: "Access world-class education from anywhere, anytime",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop",
    gradient: "from-blue-500/50"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r",
            slide.gradient,
            "to-transparent"
          )} />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="purple" size="lg" className="text-lg">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
                  View Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  )
}