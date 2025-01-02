"use client"

import { usePathname } from "next/navigation"

export function useActivePath() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }

  return isActive
}