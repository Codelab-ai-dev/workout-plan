import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Dumbbell } from "lucide-react"
import type { WorkoutDay } from "@/lib/types"

interface WorkoutDayCardProps {
  day: WorkoutDay
}

export default function WorkoutDayCard({ day }: WorkoutDayCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{day.title}</CardTitle>
        <CardDescription>{day.description}</CardDescription>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{day.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Intensidad: {day.intensity}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Ejercicio</th>
                <th className="text-center py-2 font-medium">Series</th>
                <th className="text-center py-2 font-medium">Reps</th>
                <th className="text-center py-2 font-medium">Descanso</th>
              </tr>
            </thead>
            <tbody>
              {day.exercises.map((exercise, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3">{exercise.name}</td>
                  <td className="text-center py-3">{exercise.sets}</td>
                  <td className="text-center py-3">{exercise.reps}</td>
                  <td className="text-center py-3">{exercise.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm">
            <span className="font-medium">Consejo del día:</span> {day.tips}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
