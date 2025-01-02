"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

const interests = [
  { id: "web", label: "Web Development", icon: "🌐" },
  { id: "mobile", label: "Mobile Development", icon: "📱" },
  { id: "data", label: "Data Science", icon: "📊" },
  { id: "ai", label: "AI & Machine Learning", icon: "🤖" },
  { id: "cloud", label: "Cloud Computing", icon: "☁️" },
  { id: "security", label: "Cybersecurity", icon: "🔒" },
  { id: "design", label: "UI/UX Design", icon: "🎨" },
  { id: "devops", label: "DevOps", icon: "⚙️" }
]

export default function InterestSelection() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {interests.map((interest) => (
          <button
            key={interest.id}
            onClick={() => toggleInterest(interest.id)}
            className={cn(
              "p-4 rounded-lg border text-center transition-all duration-200",
              selectedInterests.includes(interest.id)
                ? "bg-purple-50 border-purple-600 text-purple-600"
                : "bg-white border-gray-200 hover:border-purple-300"
            )}
          >
            <div className="text-2xl mb-2">{interest.icon}</div>
            <div className="font-medium">{interest.label}</div>
          </button>
        ))}
      </div>

      <Button
        className="w-full"
        disabled={selectedInterests.length === 0}
      >
        Continue
      </Button>
    </div>
  )
}