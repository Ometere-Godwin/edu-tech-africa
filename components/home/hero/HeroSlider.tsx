"use client"

import { useState, useEffect } from "react"
import HeroSlide from "./HeroSlide"
import SlideIndicator from "./SlideIndicator"
import { slides } from "./slideData"

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
        <HeroSlide
          key={slide.id}
          {...slide}
          isActive={index === currentSlide}
        />
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <SlideIndicator
            key={index}
            index={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}