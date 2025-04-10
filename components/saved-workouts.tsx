"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Eye } from "lucide-react"
import type { SavedWorkout } from "@/lib/types"
import { getSavedWorkouts, deleteWorkout } from "@/lib/storage-service"
import { useToast } from "@/hooks/use-toast"

interface SavedWorkoutsProps {
  onSelect: (workout: SavedWorkout) => void
}

export default function SavedWorkouts({ onSelect }: SavedWorkoutsProps) {
  const [workouts, setWorkouts] = useState<SavedWorkout[]>([])
  const [isClient, setIsClient] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsClient(true)
    const loadWorkouts = async () => {
      try {
        const savedWorkouts = await getSavedWorkouts()
        setWorkouts(savedWorkouts || [])
      } catch (error) {
        console.error('Error loading workouts:', error)
        toast({
          title: "Error",
          description: "No se pudieron cargar las rutinas guardadas",
          variant: "destructive",
        })
        setWorkouts([])
      }
    }
    loadWorkouts()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id)
      setWorkouts(workouts.filter((workout) => workout.id !== id))
      toast({
        title: "Rutina eliminada",
        description: "La rutina ha sido eliminada correctamente",
      })
    } catch (error) {
      console.error('Error deleting workout:', error)
      toast({
        title: "Error",
        description: "No se pudo eliminar la rutina",
        variant: "destructive",
      })
    }
  }

  if (!isClient) {
    return <div>Cargando rutinas guardadas...</div>
  }

  if (workouts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Rutinas guardadas</CardTitle>
          <CardDescription>No tienes rutinas guardadas</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">Crea una nueva rutina para guardarla aquí</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rutinas guardadas</CardTitle>
        <CardDescription>Tus rutinas personalizadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workouts.map((workout) => (
            <div key={workout.id} className="flex items-center justify-between p-4 border rounded-md">
              <div>
                <h3 className="font-medium">{workout.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(workout.plan.createdAt).toLocaleDateString()} |{workout.plan.userProfile.objetivo} |
                  {workout.plan.days.length} días
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => onSelect(workout)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleDelete(workout.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
