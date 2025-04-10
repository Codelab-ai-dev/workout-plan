import type { SavedWorkout, WorkoutPlan } from "./types"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// Guardar una rutina en Supabase
export async function saveWorkout(name: string, plan: WorkoutPlan): Promise<SavedWorkout> {
  // Primero obtener el usuario actual
  const supabase = createClientComponentClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('Usuario no autenticado')
  }

  const { data, error } = await supabase
    .from('workouts')
    .insert({
      name,
      plan,
      user_id: user.id
    })
    .select()
    .single()

  if (error) {
    console.error('Error saving workout:', error)
    throw new Error('Error al guardar la rutina')
  }

  return {
    id: data.id,
    name: data.name,
    plan: data.plan as WorkoutPlan,
  }
}

// Obtener todas las rutinas guardadas
export async function getSavedWorkouts(): Promise<SavedWorkout[]> {
  const supabase = createClientComponentClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return []
  }

  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .order('created_at', { ascending: false })
    .eq('user_id', user.id)

  if (error) {
    console.error('Error fetching workouts:', error)
    return []
  }

  return data.map(workout => ({
    id: workout.id,
    name: workout.name,
    plan: workout.plan as WorkoutPlan,
  }))
}

// Obtener una rutina específica por ID
export async function getWorkoutById(id: string): Promise<SavedWorkout | null> {
  const supabase = createClientComponentClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return null
  }

  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (error) {
    console.error('Error fetching workout:', error)
    return null
  }

  return {
    id: data.id,
    name: data.name,
    plan: data.plan as WorkoutPlan,
  }
}

// Eliminar una rutina
export async function deleteWorkout(id: string): Promise<boolean> {
  const supabase = createClientComponentClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return false
  }

  const { error } = await supabase
    .from('workouts')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)

  if (error) {
    console.error('Error deleting workout:', error)
    return false
  }

  return true
}
