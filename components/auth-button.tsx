"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { LogIn, LogOut } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AuthForm } from "./auth-form"

export function AuthButton() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <LogIn className="mr-2 h-4 w-4" />
            Iniciar sesión
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Autenticación</DialogTitle>
            <DialogDescription>
              Inicia sesión o crea una cuenta para guardar tus rutinas.
            </DialogDescription>
          </DialogHeader>
          <AuthForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Button onClick={() => signOut()} variant="outline">
      <LogOut className="mr-2 h-4 w-4" />
      Cerrar sesión
    </Button>
  )
}
