"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface HeroSlideProps {
  title: string
  subtitle: string
  image: string
  gradient: string
  isActive: boolean
}

export default function HeroSlide({ 
  title, 
  subtitle, 
  image, 
  gradient,
  isActive 
}: HeroSlideProps) {
  const router = useRouter()

  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        isActive ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r",
        gradient,
        "to-transparent"
      )} />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="purple" 
              size="lg" 
              className="text-lg"
              onClick={() => router.push('/get-started')}
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() => router.push('/courses')}
            >
              View Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}