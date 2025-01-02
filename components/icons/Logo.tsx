"use client"

import { Code2 } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Code2 className="h-8 w-8 text-purple-600" />
      <span className="font-bold text-xl text-purple-600">TechEdu Africa</span>
    </div>
  )
}