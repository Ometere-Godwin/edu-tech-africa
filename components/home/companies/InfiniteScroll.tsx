"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteScrollProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const speeds = {
  slow: 50,
  normal: 35,
  fast: 20
}

export function InfiniteScroll({ 
  children, 
  direction = "left",
  speed = "normal",
  className 
}: InfiniteScrollProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = direction === "left" 
          ? prev - 1 
          : prev + 1
        return newPosition
      })
    }, speeds[speed])

    return () => clearInterval(interval)
  }, [direction, speed])

  return (
    <div className="overflow-hidden">
      <div 
        className={cn("flex whitespace-nowrap", className)}
        style={{ 
          transform: `translateX(${scrollPosition}px)`,
        }}
      >
        {children}
        {children} {/* Duplicate content for seamless loop */}
      </div>
    </div>
  )
}