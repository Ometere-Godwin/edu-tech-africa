"use client"

import { cn } from "@/lib/utils"

interface CompanyLogoProps {
  name: string
  logo: string
  className?: string
}

export function CompanyLogo({ name, logo, className }: CompanyLogoProps) {
  return (
    <div className={cn(
      "flex items-center justify-center px-8 transition-all duration-300",
      "grayscale hover:grayscale-0 hover:scale-110",
      className
    )}>
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-8 md:h-12 object-contain"
      />
    </div>
  )
}