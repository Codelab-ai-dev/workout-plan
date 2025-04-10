import { OpenAI } from 'openai';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { UserProfile, WorkoutPlan } from '@/lib/types';

export const dynamic = 'force-dynamic';

const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY no está configurada en las variables de entorno');
  }
  return new OpenAI({ apiKey });
};

export async function POST(request: Request) {
  const cookieStore = cookies();
  
  try {
    // Verificar autenticación
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      console.log('No se encontró sesión activa');
      return NextResponse.json(
        { error: 'No autorizado. Debes iniciar sesión.' },
        { status: 401 }
      );
    }

    console.log('Sesión activa encontrada:', session.user.email);
    const userProfile: UserProfile = await request.json();
    
    const prompt = `Genera una rutina de ejercicios personalizada con el siguiente formato JSON:
{
  "days": [
    {
      "title": "string",
      "description": "string",
      "duration": "string",
      "intensity": "string",
      "exercises": [
        {
          "name": "string",
          "sets": number,
          "reps": "string",
          "rest": "string"
        }
      ],
      "tips": "string"
    }
  ],
  "generalTips": {
    "nutrition": ["string"],
    "rest": ["string"],
    "progression": ["string"]
  }
}

Para una persona con las siguientes características:
- Nivel: ${userProfile.nivel}
- Objetivo: ${userProfile.objetivo}
- Frecuencia semanal: ${userProfile.frecuencia_semanal} días
- Equipo disponible: ${userProfile.equipo}
- Restricciones: ${userProfile.restricciones || 'ninguna'}
- Preferencias: ${userProfile.preferencias.join(', ') || 'ninguna'}

Instrucciones específicas:
1. Los ejercicios deben ser apropiados para el nivel indicado
2. La rutina debe distribuirse en ${userProfile.frecuencia_semanal} días
3. Incluir tiempos de descanso entre series
4. Proporcionar consejos de nutrición específicos para el objetivo
5. Incluir consejos generales de descanso y recuperación
6. Proporcionar consejos específicos de progresión según el objetivo
7. Los nombres de los ejercicios deben estar en español
8. Proporcionar una descripción clara de cada día de entrenamiento
9. Incluir la duración estimada de cada sesión
10. Especificar la intensidad recomendada

La respuesta debe ser un JSON válido que siga exactamente la estructura proporcionada.`;

    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Eres un experto entrenador personal especializado en crear rutinas de ejercicio personalizadas."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No se recibió respuesta de ChatGPT');
    }
    const workoutPlan = JSON.parse(content) as WorkoutPlan;
    
    return NextResponse.json({
      ...workoutPlan,
      userProfile,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error generating workout plan:', error);
    console.error('API Key:', process.env.OPENAI_API_KEY ? 'Present' : 'Missing');
    return NextResponse.json(
      { 
        error: 'Error al generar el plan de entrenamiento',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
