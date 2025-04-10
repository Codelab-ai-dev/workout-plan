import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Heart, Clock, BarChart3, Zap } from "lucide-react"

export default function WorkoutPlan() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Plan de Entrenamiento Semanal</h1>
      <p className="text-muted-foreground mb-8 text-center">
        Diseñado para ganancia de masa muscular | Nivel intermedio
      </p>

      <Tabs defaultValue="day1">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="day1">Día 1</TabsTrigger>
          <TabsTrigger value="day2">Día 2</TabsTrigger>
          <TabsTrigger value="day3">Día 3</TabsTrigger>
          <TabsTrigger value="day4">Día 4</TabsTrigger>
          <TabsTrigger value="day5">Día 5</TabsTrigger>
        </TabsList>

        <TabsContent value="day1">
          <WorkoutDay
            title="Día 1: Pecho y Tríceps"
            description="Enfoque en desarrollo de pecho y tríceps con ejercicios compuestos y aislados"
            duration="60-75 minutos"
            intensity="Alta"
            exercises={[
              { name: "Press de banca plano con barra", sets: 4, reps: "8-10", rest: "90-120 seg" },
              { name: "Press inclinado con mancuernas", sets: 3, reps: "10-12", rest: "90 seg" },
              { name: "Aperturas en máquina", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Fondos en paralelas", sets: 3, reps: "10-12", rest: "90 seg" },
              { name: "Extensiones de tríceps con polea", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Press francés con mancuerna", sets: 3, reps: "12-15", rest: "60 seg" },
            ]}
            tips="Comienza con los ejercicios compuestos cuando estás más fresco. Aumenta el peso gradualmente en cada serie hasta alcanzar tu serie más pesada."
          />
        </TabsContent>

        <TabsContent value="day2">
          <WorkoutDay
            title="Día 2: Espalda y Bíceps"
            description="Desarrollo de espalda ancha y fuerte con trabajo complementario de bíceps"
            duration="60-75 minutos"
            intensity="Alta"
            exercises={[
              { name: "Dominadas (con peso si es posible)", sets: 4, reps: "8-10", rest: "90-120 seg" },
              { name: "Remo con barra", sets: 4, reps: "8-10", rest: "90 seg" },
              { name: "Remo en máquina", sets: 3, reps: "10-12", rest: "90 seg" },
              { name: "Pullover con polea", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Curl con barra", sets: 3, reps: "10-12", rest: "60 seg" },
              { name: "Curl martillo con mancuernas", sets: 3, reps: "12-15", rest: "60 seg" },
            ]}
            tips="Enfócate en la conexión mente-músculo, especialmente en los ejercicios de espalda. Asegúrate de sentir el trabajo en los músculos objetivo."
          />
        </TabsContent>

        <TabsContent value="day3">
          <WorkoutDay
            title="Día 3: Piernas"
            description="Entrenamiento completo de tren inferior para desarrollo muscular equilibrado"
            duration="65-80 minutos"
            intensity="Muy alta"
            exercises={[
              { name: "Sentadillas con barra", sets: 4, reps: "8-10", rest: "120 seg" },
              { name: "Prensa de piernas", sets: 4, reps: "10-12", rest: "90 seg" },
              { name: "Extensiones de cuádriceps", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Curl femoral acostado", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Elevaciones de pantorrilla de pie", sets: 4, reps: "15-20", rest: "60 seg" },
              { name: "Peso muerto rumano", sets: 3, reps: "10-12", rest: "90 seg" },
            ]}
            tips="No escatimes en el entrenamiento de piernas, es fundamental para el crecimiento muscular general y la producción de hormonas anabólicas."
          />
        </TabsContent>

        <TabsContent value="day4">
          <WorkoutDay
            title="Día 4: Hombros y Trapecios"
            description="Desarrollo de hombros anchos y definidos con énfasis en todas las cabezas del deltoides"
            duration="55-70 minutos"
            intensity="Alta"
            exercises={[
              { name: "Press militar con barra", sets: 4, reps: "8-10", rest: "90 seg" },
              { name: "Elevaciones laterales", sets: 4, reps: "12-15", rest: "60 seg" },
              { name: "Elevaciones frontales con mancuernas", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Pájaro con mancuernas (deltoides posterior)", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Encogimientos con barra", sets: 4, reps: "12-15", rest: "60 seg" },
              { name: "Face pull", sets: 3, reps: "15-20", rest: "60 seg" },
            ]}
            tips="Mantén un estricto control en los ejercicios de hombros para evitar usar impulso. La técnica es crucial para el desarrollo y para prevenir lesiones."
          />
        </TabsContent>

        <TabsContent value="day5">
          <WorkoutDay
            title="Día 5: Brazos y Abdominales"
            description="Trabajo específico para bíceps, tríceps y core"
            duration="50-65 minutos"
            intensity="Media-Alta"
            exercises={[
              { name: "Curl con barra EZ", sets: 4, reps: "10-12", rest: "60 seg" },
              { name: "Curl de predicador", sets: 3, reps: "10-12", rest: "60 seg" },
              { name: "Extensiones de tríceps con polea alta", sets: 4, reps: "10-12", rest: "60 seg" },
              { name: "Extensiones de tríceps con mancuerna sobre la cabeza", sets: 3, reps: "12-15", rest: "60 seg" },
              { name: "Crunch en máquina", sets: 3, reps: "15-20", rest: "45 seg" },
              { name: "Plancha", sets: 3, reps: "30-60 seg", rest: "45 seg" },
              { name: "Russian twist", sets: 3, reps: "20-30", rest: "45 seg" },
            ]}
            tips="Este día es ideal para trabajar en detalles y puntos débiles. Concéntrate en la contracción máxima y en técnicas de intensificación como series descendentes."
          />
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recomendaciones Generales</CardTitle>
          <CardDescription>Para maximizar tus resultados de ganancia muscular</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Progresión</h3>
              <p className="text-sm text-muted-foreground">
                Aumenta el peso o las repeticiones cada 1-2 semanas. Busca progresar en cada ejercicio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Nutrición</h3>
              <p className="text-sm text-muted-foreground">
                Consume un superávit calórico de 300-500 calorías. Asegura 1.8-2g de proteína por kg de peso corporal.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Descanso</h3>
              <p className="text-sm text-muted-foreground">
                Duerme 7-8 horas diarias. Permite 48-72 horas de recuperación entre entrenamientos del mismo grupo
                muscular.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Técnica</h3>
              <p className="text-sm text-muted-foreground">
                Prioriza la ejecución correcta sobre el peso. Controla la fase excéntrica (bajada) durante 2-3 segundos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function WorkoutDay({ title, description, duration, intensity, exercises, tips }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Intensidad: {intensity}</span>
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
              {exercises.map((exercise, index) => (
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
            <span className="font-medium">Consejo del día:</span> {tips}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
