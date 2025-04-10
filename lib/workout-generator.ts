import type { UserProfile, WorkoutPlan, WorkoutDay } from "./types"

type Exercise = {
  name: string
  sets: number
  reps: string
  rest: string
}

type Level = 'principiante' | 'intermedio' | 'avanzado'
type MuscleGroup = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms' | 'core'

type ExerciseTemplate = {
  [key in MuscleGroup]: {
    [key in Level]: Exercise[]
  }
}

// Plantillas de ejercicios por grupo muscular y nivel
const exerciseTemplates: ExerciseTemplate = {
  chest: {
    principiante: [
      { name: "Push-ups", sets: 3, reps: "8-12", rest: "60 seg" },
      { name: "Chest press en máquina", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Aperturas con mancuernas", sets: 2, reps: "12-15", rest: "60 seg" },
    ],
    intermedio: [
      { name: "Press de banca plano con barra", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Press inclinado con mancuernas", sets: 3, reps: "10-12", rest: "90 seg" },
      { name: "Aperturas en máquina", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Fondos en paralelas", sets: 3, reps: "10-12", rest: "90 seg" },
    ],
    avanzado: [
      { name: "Press de banca plano con barra", sets: 5, reps: "6-8", rest: "120 seg" },
      { name: "Press inclinado con barra", sets: 4, reps: "8-10", rest: "120 seg" },
      { name: "Aperturas con poleas", sets: 3, reps: "10-12", rest: "90 seg" },
      { name: "Fondos en paralelas lastrados", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Press declinado", sets: 3, reps: "8-10", rest: "90 seg" },
    ],
  },
  back: {
    principiante: [
      { name: "Remo en máquina", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Jalones al pecho", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Remo con mancuerna a una mano", sets: 2, reps: "12-15", rest: "60 seg" },
    ],
    intermedio: [
      { name: "Dominadas asistidas", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Remo con barra", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Remo en máquina", sets: 3, reps: "10-12", rest: "90 seg" },
      { name: "Pullover con polea", sets: 3, reps: "12-15", rest: "60 seg" },
    ],
    avanzado: [
      { name: "Dominadas lastradas", sets: 4, reps: "6-8", rest: "120 seg" },
      { name: "Remo con barra T", sets: 4, reps: "8-10", rest: "120 seg" },
      { name: "Remo Pendlay", sets: 3, reps: "8-10", rest: "90 seg" },
      { name: "Pullover con mancuerna", sets: 3, reps: "10-12", rest: "90 seg" },
      { name: "Jalones al pecho agarre cerrado", sets: 3, reps: "10-12", rest: "90 seg" },
    ],
  },
  legs: {
    principiante: [
      { name: "Sentadillas con peso corporal", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Prensa de piernas", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Extensiones de cuádriceps", sets: 2, reps: "12-15", rest: "60 seg" },
      { name: "Curl femoral sentado", sets: 2, reps: "12-15", rest: "60 seg" },
    ],
    intermedio: [
      { name: "Sentadillas con barra", sets: 4, reps: "8-10", rest: "120 seg" },
      { name: "Prensa de piernas", sets: 4, reps: "10-12", rest: "90 seg" },
      { name: "Extensiones de cuádriceps", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Curl femoral acostado", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Elevaciones de pantorrilla de pie", sets: 4, reps: "15-20", rest: "60 seg" },
    ],
    avanzado: [
      { name: "Sentadillas con barra", sets: 5, reps: "6-8", rest: "180 seg" },
      { name: "Peso muerto", sets: 4, reps: "6-8", rest: "180 seg" },
      { name: "Hack squat", sets: 3, reps: "8-10", rest: "120 seg" },
      { name: "Extensiones de cuádriceps", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Curl femoral acostado", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Elevaciones de pantorrilla de pie", sets: 4, reps: "15-20", rest: "60 seg" },
    ],
  },
  shoulders: {
    principiante: [
      { name: "Press militar en máquina", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Elevaciones laterales", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Elevaciones frontales", sets: 2, reps: "12-15", rest: "60 seg" },
    ],
    intermedio: [
      { name: "Press militar con mancuernas", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Elevaciones laterales", sets: 4, reps: "12-15", rest: "60 seg" },
      { name: "Elevaciones frontales con mancuernas", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Pájaro con mancuernas", sets: 3, reps: "12-15", rest: "60 seg" },
    ],
    avanzado: [
      { name: "Press militar con barra", sets: 5, reps: "6-8", rest: "120 seg" },
      { name: "Press Arnold", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Elevaciones laterales", sets: 4, reps: "12-15", rest: "60 seg" },
      { name: "Face pull", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Encogimientos con barra", sets: 4, reps: "12-15", rest: "60 seg" },
    ],
  },
  arms: {
    principiante: [
      { name: "Curl con mancuernas", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Extensiones de tríceps con polea", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Curl martillo", sets: 2, reps: "12-15", rest: "60 seg" },
    ],
    intermedio: [
      { name: "Curl con barra", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Curl martillo con mancuernas", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Extensiones de tríceps con polea", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Press francés con mancuerna", sets: 3, reps: "12-15", rest: "60 seg" },
    ],
    avanzado: [
      { name: "Curl con barra EZ", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Curl de predicador", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Curl concentrado", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Extensiones de tríceps con polea alta", sets: 4, reps: "10-12", rest: "60 seg" },
      { name: "Fondos para tríceps", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Press francés con barra EZ", sets: 3, reps: "10-12", rest: "60 seg" },
    ],
  },
  core: {
    principiante: [
      { name: "Crunch básico", sets: 3, reps: "15-20", rest: "45 seg" },
      { name: "Plancha", sets: 3, reps: "20-30 seg", rest: "45 seg" },
      { name: "Elevaciones de piernas", sets: 2, reps: "12-15", rest: "45 seg" },
    ],
    intermedio: [
      { name: "Crunch en máquina", sets: 3, reps: "15-20", rest: "45 seg" },
      { name: "Plancha", sets: 3, reps: "30-60 seg", rest: "45 seg" },
      { name: "Russian twist", sets: 3, reps: "20-30", rest: "45 seg" },
      { name: "Mountain climbers", sets: 3, reps: "20 por lado", rest: "45 seg" },
    ],
    avanzado: [
      { name: "Rollout con rueda", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Dragon flag", sets: 3, reps: "8-12", rest: "60 seg" },
      { name: "Windshield wipers", sets: 3, reps: "10-15 por lado", rest: "60 seg" },
      { name: "Hanging leg raises", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Plancha con peso", sets: 3, reps: "30-60 seg", rest: "60 seg" },
    ],
  },
}

// Plantillas de consejos generales
const generalTipsTemplates = {
  nutrition: {
    "perder peso": [
      "Mantén un déficit calórico de 300-500 calorías diarias",
      "Consume 1.8-2g de proteína por kg de peso corporal",
      "Prioriza alimentos integrales y evita procesados",
      "Aumenta la ingesta de fibra y vegetales para mayor saciedad",
      "Hidrátate adecuadamente (mínimo 3 litros de agua al día)",
    ],
    "ganar masa muscular": [
      "Mantén un superávit calórico moderado (300-500 calorías extra al día)",
      "Consume 1.8-2.2g de proteína por kg de peso corporal",
      "Distribuye la ingesta de proteínas en 4-5 comidas diarias",
      "Asegura una ingesta adecuada de carbohidratos (3-5g/kg)",
      "No descuides las grasas saludables (0.8-1g/kg)",
    ],
    "mejorar fuerza": [
      "Consume suficientes calorías para mantener o aumentar ligeramente el peso",
      "Prioriza la ingesta de proteínas (1.6-2g/kg)",
      "Asegura una buena ingesta de carbohidratos antes y después del entrenamiento",
      "Considera la suplementación con creatina (5g diarios)",
      "Mantén una buena hidratación para optimizar el rendimiento",
    ],
    "mejorar resistencia": [
      "Ajusta la ingesta calórica según la intensidad de tus entrenamientos",
      "Prioriza carbohidratos complejos para energía sostenida",
      "Consume proteínas suficientes para recuperación (1.4-1.8g/kg)",
      "Hidrátate adecuadamente antes, durante y después del ejercicio",
      "Considera electrolitos para entrenamientos de larga duración",
    ],
    tonificar: [
      "Mantén un ligero déficit calórico o equilibrio según tu composición actual",
      "Asegura una ingesta adecuada de proteínas (1.6-2g/kg)",
      "Distribuye los macronutrientes de forma equilibrada",
      "Prioriza alimentos integrales y minimiza procesados",
      "Mantén una buena hidratación para optimizar el metabolismo",
    ],
  },
  rest: [
    "Duerme 7-8 horas diarias para optimizar la recuperación",
    "Permite 48-72 horas de recuperación entre entrenamientos del mismo grupo muscular",
    "Considera técnicas de recuperación activa como estiramientos o yoga en días de descanso",
    "Escucha a tu cuerpo y toma días adicionales de descanso si es necesario",
    "La calidad del sueño es tan importante como la cantidad",
  ],
  progression: [
    "Aumenta el peso cuando puedas completar el rango superior de repeticiones con buena técnica",
    "Considera ciclos de 4-6 semanas seguidos de una semana de descarga",
    "Lleva un registro de tus entrenamientos para asegurar la progresión",
    "Varía algunos ejercicios cada 6-8 semanas para evitar estancamientos",
    "La progresión no siempre significa más peso; también puede ser más repeticiones, mejor técnica o menos descanso",
  ],
}

// Función para generar un día de entrenamiento
function generateWorkoutDay(dayNumber: number, userProfile: UserProfile, muscleGroups: MuscleGroup[]): WorkoutDay {
  const { nivel } = userProfile as { nivel: Level }
  const exercises: Exercise[] = []

  let title = ""
  let description = ""
  let intensity = ""

  // Configurar título y descripción según los grupos musculares
  if (muscleGroups.includes("chest")) {
    title = `Día ${dayNumber}: Pecho`
    description = "Enfoque en desarrollo de pecho con ejercicios compuestos y aislados"
    intensity = "Alta"
  } else if (muscleGroups.includes("back")) {
    title = `Día ${dayNumber}: Espalda`
    description = "Desarrollo de espalda ancha y fuerte"
    intensity = "Alta"
  } else if (muscleGroups.includes("legs")) {
    title = `Día ${dayNumber}: Piernas`
    description = "Entrenamiento completo de tren inferior para desarrollo muscular equilibrado"
    intensity = muscleGroups.length > 1 ? "Muy alta" : "Alta"
  } else if (muscleGroups.includes("shoulders")) {
    title = `Día ${dayNumber}: Hombros`
    description = "Desarrollo de hombros anchos y definidos con énfasis en todas las cabezas del deltoides"
    intensity = "Media-Alta"
  } else if (muscleGroups.includes("arms")) {
    title = `Día ${dayNumber}: Brazos`
    description = "Trabajo específico para brazos"
    intensity = "Media-Alta"
  } else if (muscleGroups.includes("core")) {
    title = `Día ${dayNumber}: Core`
    description = "Fortalecimiento del núcleo para mejorar estabilidad y definición"
    intensity = "Media"
  }

  // Si hay múltiples grupos musculares, ajustar título
  if (muscleGroups.length > 2) {
    title = `Día ${dayNumber}: Entrenamiento Completo`
    description = "Rutina completa que trabaja múltiples grupos musculares en una sesión"
    intensity = "Alta"
  }

  // Añadir ejercicios según los grupos musculares
  for (const group of muscleGroups) {
    if (exerciseTemplates[group] && exerciseTemplates[group][nivel]) {
      // Tomar todos los ejercicios para nivel principiante, 70% para intermedio, 50% para avanzado
      // para evitar sesiones demasiado largas
      const groupExercises = [...exerciseTemplates[group][nivel]]

      if (nivel === "intermedio" && muscleGroups.length > 1) {
        const numToTake = Math.ceil(groupExercises.length * 0.7)
        exercises.push(...groupExercises.slice(0, numToTake))
      } else if (nivel === "avanzado" && muscleGroups.length > 1) {
        const numToTake = Math.ceil(groupExercises.length * 0.5)
        exercises.push(...groupExercises.slice(0, numToTake))
      } else {
        exercises.push(...groupExercises)
      }
    }
  }

  // Limitar el número total de ejercicios para que la sesión no sea demasiado larga
  const maxExercises: Record<Level, number> = {
    principiante: 6,
    intermedio: 8,
    avanzado: 10,
  }

  if (exercises.length > maxExercises[nivel]) {
    exercises.splice(maxExercises[nivel])
  }

  // Generar consejos según el objetivo
  let tips = ""
  const objetivo = userProfile.objetivo as keyof typeof generalTipsTemplates.nutrition
  switch (objetivo) {
    case "perder peso":
      tips =
        "Mantén los descansos cortos (30-60 segundos) para aumentar el gasto calórico y mantén un ritmo constante durante toda la sesión."
      break
    case "ganar masa muscular":
      tips =
        "Enfócate en la conexión mente-músculo y en levantar pesos desafiantes. Aumenta el peso gradualmente en cada serie hasta alcanzar tu serie más pesada."
      break
    case "mejorar fuerza":
      tips =
        "Prioriza la técnica perfecta y concéntrate en movimientos explosivos en la fase concéntrica. Descansa lo suficiente entre series para recuperar la fuerza."
      break
    case "mejorar resistencia":
      tips =
        "Mantén un ritmo constante y reduce los descansos entre series. Considera técnicas como superseries o circuitos para aumentar la intensidad cardiovascular."
      break
    case "tonificar":
      tips =
        "Combina pesos moderados con un alto control en cada repetición. Mantén la tensión muscular durante todo el movimiento y minimiza los descansos."
      break
  }

  // Estimar duración según nivel y número de ejercicios
  let duration = ""
  const exerciseCount = exercises.length
  if (nivel === "principiante") {
    duration = `${45 + exerciseCount * 5}-${50 + exerciseCount * 5} minutos`
  } else if (nivel === "intermedio") {
    duration = `${50 + exerciseCount * 5}-${60 + exerciseCount * 5} minutos`
  } else {
    duration = `${60 + exerciseCount * 5}-${70 + exerciseCount * 5} minutos`
  }

  return {
    title,
    description,
    duration,
    intensity,
    exercises,
    tips,
  }
}

// Función principal para generar un plan de entrenamiento
export async function generateWorkoutPlan(userProfile: UserProfile): Promise<WorkoutPlan> {
  try {
    // Intentar generar el plan usando ChatGPT
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/generate-workout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Importante para enviar las cookies de autenticación
      body: JSON.stringify(userProfile),
    });

    if (response.status === 401) {
      throw new Error('Debes iniciar sesión para generar rutinas')
    }

    if (!response.ok) {
      throw new Error('Error al generar el plan de entrenamiento con ChatGPT');
    }

    const data = await response.json();
    return data as WorkoutPlan;
  } catch (error) {
    console.warn('Fallback to template-based generation:', error);
    
    // Si falla ChatGPT, usar la generación basada en plantillas
    const days = [];
    const frecuencia = userProfile.frecuencia_semanal;

    // Distribuir grupos musculares según la frecuencia
    const muscleGroups: MuscleGroup[] = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];
    
    for (let i = 0; i < frecuencia; i++) {
      const dayGroups = i === frecuencia - 1 
        ? muscleGroups.slice(i * 2) 
        : muscleGroups.slice(i * 2, (i + 1) * 2);
      
      days.push(generateWorkoutDay(i + 1, userProfile, dayGroups));
    }

    // Consejos de progresión basados en el objetivo
    const progressionTips = {
      'perder peso': [
        'Aumenta gradualmente la intensidad de los ejercicios cardiovasculares',
        'Incrementa el número de repeticiones antes de aumentar el peso',
        'Reduce los tiempos de descanso entre series conforme mejora tu resistencia',
      ],
      'ganar masa muscular': [
        'Aumenta el peso cuando puedas completar todas las series con buena forma',
        'Mantén un registro de los pesos y repeticiones para asegurar la progresión',
        'Varía los ejercicios cada 4-6 semanas para evitar estancamientos',
      ],
      'mejorar fuerza': [
        'Incrementa el peso gradualmente manteniendo la técnica correcta',
        'Enfocáte en ejercicios compuestos con pesos pesados',
        'Alterna entre semanas de alta y baja intensidad',
      ],
      'mejorar resistencia': [
        'Aumenta progresivamente la duración de las sesiones',
        'Reduce gradualmente los tiempos de descanso',
        'Incorpora intervalos de alta intensidad',
      ],
      'tonificar': [
        'Incrementa la intensidad manteniendo rangos de repetición moderados',
        'Combina ejercicios de peso con ejercicios de resistencia',
        'Ajusta la dieta según tus progresos',
      ],
    };

    return {
      days,
      generalTips: {
        nutrition: generalTipsTemplates.nutrition[userProfile.objetivo] || [],
        rest: generalTipsTemplates.rest,
        progression: progressionTips[userProfile.objetivo as keyof typeof progressionTips] || [],
      },
      userProfile,
      createdAt: new Date().toISOString(),
    };
  }
}
