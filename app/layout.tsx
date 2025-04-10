import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthButton } from "@/components/auth-button"
import { ThemeLogo } from "@/components/theme-logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GymRoutine AI - Crea rutinas de gimnasio personalizadas",
  description: "Aplicación para crear rutinas de gimnasio personalizadas según tus objetivos, nivel y preferencias",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="border-b p-4">
              <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                  <ThemeLogo />
                  <h1 className="text-2xl font-bold">GymRoutine AI</h1>
                </div>
                <div className="flex gap-4 items-center">
                  <AuthButton />
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'