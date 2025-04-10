"use client"

import { useTheme } from "next-themes"

export function ThemeLogo() {
  const { theme } = useTheme()
  
  return (
    <img
      src={theme === "dark" ? "/logow.png" : "/logo.png"}
      alt="GymRoutine AI Logo"
      className="w-20"
    />
  )
}
