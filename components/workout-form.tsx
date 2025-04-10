"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import type { UserProfile } from "@/lib/types"

interface WorkoutFormProps {
  onSubmit: (profile: UserProfile) => void
  isLoading?: boolean
}

export default function WorkoutForm({ onSubmit, isLoading = false }: WorkoutFormProps) {
  const [formData, setFormData] = useState<UserProfile>({
    edad: 30,
    peso: 70,
    sexo: "masculino",
    nivel: "intermedio",
    objetivo: "ganar masa muscular",
    frecuencia_semanal: 3,
    equipo: "gimnasio completo",
    restricciones: "",
    preferencias: [],
  })

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        return { ...prev, preferencias: [...prev.preferencias, preference] }
      } else {
        return { ...prev, preferencias: prev.preferencias.filter((p) => p !== preference) }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Crea tu rutina personalizada</CardTitle>
          <CardDescription>Completa el formulario para generar una rutina adaptada a tus necesidades</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="edad">Edad</Label>
              <Input
                id="edad"
                type="number"
                min={16}
                max={80}
                value={formData.edad}
                onChange={(e) => handleChange("edad", Number.parseInt(e.target.value))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="peso">Peso (kg)</Label>
              <Input
                id="peso"
                type="number"
                min={30}
                max={200}
                step={0.1}
                value={formData.peso}
                onChange={(e) => handleChange("peso", Number.parseFloat(e.target.value))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Sexo</Label>
              <RadioGroup
                value={formData.sexo}
                onValueChange={(value) => handleChange("sexo", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="masculino" />
                  <Label htmlFor="masculino">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="femenino" id="femenino" />
                  <Label htmlFor="femenino">Femenino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="otro" id="otro" />
                  <Label htmlFor="otro">Otro</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nivel">Nivel de condición física</Label>
              <Select value={formData.nivel} onValueChange={(value) => handleChange("nivel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objetivo">Objetivo principal</Label>
              <Select value={formData.objetivo} onValueChange={(value) => handleChange("objetivo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="perder peso">Perder peso</SelectItem>
                  <SelectItem value="ganar masa muscular">Ganar masa muscular</SelectItem>
                  <SelectItem value="mejorar fuerza">Mejorar fuerza</SelectItem>
                  <SelectItem value="mejorar resistencia">Mejorar resistencia</SelectItem>
                  <SelectItem value="tonificar">Tonificar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="frecuencia">Frecuencia semanal: {formData.frecuencia_semanal} días</Label>
              <Slider
                id="frecuencia"
                min={1}
                max={7}
                step={1}
                value={[formData.frecuencia_semanal]}
                onValueChange={(value) => handleChange("frecuencia_semanal", value[0])}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="equipo">Equipo disponible</Label>
              <Select value={formData.equipo} onValueChange={(value) => handleChange("equipo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el equipo disponible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo peso corporal">Solo peso corporal</SelectItem>
                  <SelectItem value="mancuernas">Mancuernas</SelectItem>
                  <SelectItem value="gimnasio completo">Gimnasio completo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="restricciones">Lesiones o restricciones físicas</Label>
              <Textarea
                id="restricciones"
                placeholder="Describe cualquier lesión o restricción física que debamos considerar"
                value={formData.restricciones}
                onChange={(e) => handleChange("restricciones", e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Preferencias de entrenamiento</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "pesas",
                  "cardio",
                  "hiit",
                  "fuerza",
                  "yoga",
                  "funcional",
                  "crossfit",
                  "calistenia",
                  "pliometria",
                  "isometricos",
                  "movilidad",
                  "estiramientos"
                ].map((pref) => (
                  <div key={pref} className="flex items-center space-x-2">
                    <Checkbox
                      id={`pref-${pref}`}
                      checked={formData.preferencias.includes(pref)}
                      onCheckedChange={(checked) => handlePreferenceChange(pref, checked as boolean)}
                    />
                    <Label htmlFor={`pref-${pref}`} className="capitalize">
                      {pref}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Generando rutina..." : "Generar rutina"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
