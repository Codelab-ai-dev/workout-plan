"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

type AuthMode = "login" | "register"

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('Intentando autenticar con:', { email, mode })
      if (mode === "register") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        toast({
          title: "Registro exitoso",
          description: "Por favor, verifica tu correo electrónico",
        })
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        console.log('Resultado de inicio de sesión:', { error, session: data.session })
        if (error) throw error
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido de vuelta",
        })
        // Redirigir a la página principal después del inicio de sesión exitoso
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.error("Error de autenticación:", error)
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
      console.log('Error detallado:', errorMessage)
      toast({
        title: "Error",
        description: mode === "register" 
          ? "Error al registrar usuario" 
          : "Credenciales inválidas",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Cargando..." : mode === "register" ? "Registrarse" : "Iniciar sesión"}
      </Button>
      <Button
        type="button"
        variant="link"
        className="w-full"
        onClick={() => setMode(mode === "register" ? "login" : "register")}
      >
        {mode === "register"
          ? "¿Ya tienes cuenta? Inicia sesión"
          : "¿No tienes cuenta? Regístrate"}
      </Button>
    </form>
  )
}
