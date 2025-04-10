export interface UserProfile {
  edad: number
  peso: number
  sexo: "masculino" | "femenino" | "otro"
  nivel: "principiante" | "intermedio" | "avanzado"
  objetivo: "perder peso" | "ganar masa muscular" | "mejorar fuerza" | "mejorar resistencia" | "tonificar"
  frecuencia_semanal: number
  equipo: "solo peso corporal" | "mancuernas" | "gimnasio completo"
  restricciones: string
  preferencias: string[]
}

export interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
}

export interface WorkoutDay {
  title: string
  description: string
  duration: string
  intensity: string
  exercises: Exercise[]
  tips: string
}

export interface WorkoutPlan {
  userProfile: UserProfile
  days: WorkoutDay[]
  generalTips: {
    nutrition: string[]
    rest: string[]
    progression: string[]
  }
  createdAt: string
}

export interface SavedWorkout {
  id: string
  name: string
  plan: WorkoutPlan
}
