# GymRoutine AI 🏋️‍♂️

GymRoutine AI es una aplicación web moderna que genera rutinas de ejercicio personalizadas utilizando inteligencia artificial. La aplicación está construida con Next.js 13, Supabase para autenticación y almacenamiento, y la API de OpenAI para generar rutinas inteligentes.

## Características ✨

- **Autenticación de Usuarios**: Sistema completo de registro e inicio de sesión con email/contraseña
- **Generación de Rutinas**: Creación de rutinas personalizadas basadas en:
  - Nivel de condición física
  - Objetivos específicos
  - Frecuencia de entrenamiento
  - Equipo disponible
  - Preferencias de ejercicios
  - Restricciones físicas
- **Guardado de Rutinas**: Capacidad para guardar y acceder a rutinas anteriores
- **Consejos Personalizados**: Recomendaciones de:
  - Nutrición
  - Descanso
  - Progresión
- **Diseño Responsivo**: Interfaz adaptable a cualquier dispositivo
- **Modo Oscuro/Claro**: Soporte para temas de interfaz

## Tecnologías Utilizadas 🛠️

- **Frontend**:
  - Next.js 13 (App Router)
  - React
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui
  - next-themes

- **Backend**:
  - Supabase (Autenticación y Base de datos)
  - OpenAI API (Generación de rutinas)

## Configuración Local 🚀

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd workout-plan
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env.local` con:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   OPENAI_API_KEY=tu_clave_api_de_openai
   ```

4. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abre la aplicación**:
   Visita `http://localhost:3000` en tu navegador.

## Estructura del Proyecto 📁

```
workout-plan/
├── app/                # Rutas y páginas de Next.js
├── components/         # Componentes React reutilizables
├── lib/               # Utilidades y servicios
├── public/            # Archivos estáticos
└── types/             # Definiciones de tipos TypeScript
```

## Características de Seguridad 🔒

- Autenticación segura con Supabase
- Protección de rutas mediante middleware
- Variables de entorno para credenciales sensibles
- Row Level Security (RLS) en Supabase

## Contribuir 🤝

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia 📄

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
