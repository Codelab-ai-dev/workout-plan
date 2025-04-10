import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Crear el cliente de Supabase con la request actual
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  try {
    // Intentar obtener la sesión y actualizar las cookies de autenticación
    const { data: { session } } = await supabase.auth.getSession()

    // Lista de rutas públicas que no requieren autenticación
    const publicRoutes = [
      '/_next',
      '/favicon.ico',
      '/api/auth',
      '/auth'
    ]

    // Verificar si la ruta actual es pública
    const isPublicRoute = publicRoutes.some(route => 
      request.nextUrl.pathname.startsWith(route)
    )

    // Si hay sesión y el usuario está en /auth, redirigir a /
    if (session && request.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Si no hay sesión y no es una ruta pública
    if (!session && !isPublicRoute) {
      // Si es una ruta de API, devolver 401
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'No autorizado. Debes iniciar sesión.' },
          { status: 401 }
        )
      }
      // Redirigir a la página de autenticación
      return NextResponse.redirect(new URL('/auth', request.url))
    }

    return res
  } catch (error) {
    console.error('Error en el middleware:', error)
    return res
  }
}

// Configurar las rutas que queremos proteger (todas excepto las públicas)
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
