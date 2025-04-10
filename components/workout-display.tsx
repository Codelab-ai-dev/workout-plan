"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Heart, Clock, Zap, Save, Share, Printer } from "lucide-react"
import WorkoutDayCard from "./workout-day"
import type { WorkoutPlan } from "@/lib/types"
import { saveWorkout } from "@/lib/storage-service"
import { useToast } from "@/hooks/use-toast"

interface WorkoutDisplayProps {
  plan: WorkoutPlan
  onReset: () => void
}

export default function WorkoutDisplay({ plan, onReset }: WorkoutDisplayProps) {
  const [workoutName, setWorkoutName] = useState(
    `Rutina ${plan.userProfile.objetivo} - ${new Date().toLocaleDateString()}`,
  )
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await saveWorkout(workoutName, plan)
      toast({
        title: "Rutina guardada",
        description: "Tu rutina ha sido guardada correctamente",
      })
    } catch (error: any) {
      console.error('Error saving workout:', error)
      toast({
        title: "Error al guardar",
        description: error.message === 'Usuario no autenticado'
          ? "Debes iniciar sesión para guardar rutinas"
          : "No se pudo guardar la rutina",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Plan de Entrenamiento</h1>
          <p className="text-muted-foreground">
            Diseñado para {plan.userProfile.objetivo} | Nivel {plan.userProfile.nivel}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onReset}>
            Crear nueva rutina
          </Button>
        </div>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="workout-name">Nombre de la rutina</Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="workout-name"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </div>
        </div>
        <div className="flex gap-2 self-end">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline">
            <Share className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>

      <Tabs defaultValue={`day1`} className="mb-8">
        <TabsList className="grid" style={{ gridTemplateColumns: `repeat(${plan.days.length}, 1fr)` }}>
          {plan.days.map((_, index) => (
            <TabsTrigger key={index} value={`day${index + 1}`}>
              Día {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {plan.days.map((day, index) => (
          <TabsContent key={index} value={`day${index + 1}`}>
            <WorkoutDayCard day={day} />
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recomendaciones Generales</CardTitle>
          <CardDescription>Para maximizar tus resultados</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Progresión</h3>
              <div className="text-sm text-muted-foreground mt-1">
                {Array.isArray(plan.generalTips.progression) ? (
                  <ul className="space-y-1">
                    {plan.generalTips.progression.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{plan.generalTips.progression}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Nutrición</h3>
              <div className="text-sm text-muted-foreground mt-1">
                {Array.isArray(plan.generalTips.nutrition) ? (
                  <ul className="space-y-1">
                    {plan.generalTips.nutrition.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{plan.generalTips.nutrition}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Descanso</h3>
              <div className="text-sm text-muted-foreground mt-1">
                {Array.isArray(plan.generalTips.rest) ? (
                  <ul className="space-y-1">
                    {plan.generalTips.rest.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{plan.generalTips.rest}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Consejos adicionales</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Recuerda que la consistencia es clave. Sigue esta rutina durante 8-12 semanas antes de hacer cambios
                significativos. Escucha a tu cuerpo y ajusta la intensidad según sea necesario.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
