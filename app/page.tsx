"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import WorkoutForm from "@/components/workout-form"
import WorkoutDisplay from "@/components/workout-display"
import SavedWorkouts from "@/components/saved-workouts"
import type { UserProfile, WorkoutPlan, SavedWorkout } from "@/lib/types"
import { generateWorkoutPlan } from "@/lib/workout-generator"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthRequired } from "@/components/auth-required"
import { ThemeLogo } from "@/components/theme-logo"

export default function Home() {
  const { toast } = useToast()
  const [currentPlan, setCurrentPlan] = useState<WorkoutPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("create")

  const handleFormSubmit = async (profile: UserProfile) => {
    setIsGenerating(true)

    try {
      // Generar la rutina usando ChatGPT
      const plan = await generateWorkoutPlan(profile)
      setCurrentPlan(plan)
    } catch (error: any) {
      console.error("Error generating workout plan:", error)
      // Mostrar un mensaje de error al usuario
      toast({
        title: "Error",
        description: error.message === 'Debes iniciar sesión para generar rutinas'
          ? error.message
          : "Hubo un error al generar el plan de entrenamiento. Por favor intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleReset = () => {
    setCurrentPlan(null)
  }

  const handleSelectSavedWorkout = (workout: SavedWorkout) => {
    setCurrentPlan(workout.plan)
    setActiveTab("create")
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <AuthRequired>
        <div className="container mx-auto px-4 relative">
          <div className="absolute right-4 top-0 flex items-center gap-4">
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-center">
            <ThemeLogo />
            <h1 className="text-4xl font-bold text-center mb-2">GymRoutine AI</h1>
          </div>
          <p className="text-center text-muted-foreground mb-8">Crea rutinas de gimnasio personalizadas en segundos</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="create">Crear rutina</TabsTrigger>
            <TabsTrigger value="saved">Rutinas guardadas</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            {!currentPlan ? (
              <WorkoutForm onSubmit={handleFormSubmit} isLoading={isGenerating} />
            ) : (
              <WorkoutDisplay plan={currentPlan} onReset={handleReset} />
            )}
          </TabsContent>

          <TabsContent value="saved">
            <SavedWorkouts onSelect={handleSelectSavedWorkout} />
          </TabsContent>
        </Tabs>
        </div>
      </AuthRequired>
    </main>
  )
}
