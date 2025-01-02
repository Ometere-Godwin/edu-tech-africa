"use client"

import { Check } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface StepCardProps {
  title: string
  description: string
  icon: React.ReactNode
  isCompleted?: boolean
  isActive?: boolean
  onClick?: () => void
}

export default function StepCard({
  title,
  description,
  icon,
  isCompleted = false,
  isActive = false,
  onClick
}: StepCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-6 rounded-lg border transition-all duration-200",
        isActive && "ring-2 ring-purple-600 border-purple-600",
        isCompleted ? "bg-purple-50 border-purple-200" : "bg-white border-gray-200",
        "hover:border-purple-300"
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "rounded-full p-2",
          isCompleted ? "bg-purple-600" : "bg-gray-100"
        )}>
          {isCompleted ? (
            <Check className="h-6 w-6 text-white" />
          ) : (
            <div className={cn(
              "h-6 w-6",
              isActive ? "text-purple-600" : "text-gray-500"
            )}>
              {icon}
            </div>
          )}
        </div>
        <div>
          <h3 className={cn(
            "font-semibold mb-1",
            isActive ? "text-purple-600" : "text-gray-900"
          )}>
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  )
}