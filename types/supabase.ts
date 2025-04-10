import type { WorkoutPlan } from '@/lib/types'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      workouts: {
        Row: {
          id: string
          created_at: string
          name: string
          plan: WorkoutPlan
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          plan: WorkoutPlan
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          plan?: WorkoutPlan
          user_id?: string | null
        }
      }
    }
  }
}
