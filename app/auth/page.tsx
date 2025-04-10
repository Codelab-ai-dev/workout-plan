"use client"

import { AuthForm } from "@/components/auth-form"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">GymRoutine AI</h1>
          <p className="text-muted-foreground">
            Inicia sesión para acceder a tus rutinas personalizadas
          </p>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
