# Web Profesional Moderna 🚀

Una página web de nivel profesional, súper decorativa, altamente visual y moderna, pensada para destacar a primera vista.

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5 semántico
- **Estilos**: CSS3
- **Interactividad**: JavaScript vanilla
- **Tipografías**: Google Fonts

La versión ejecutable está en `public/`. No necesita Node.js, React ni un proceso de compilación.

## ✨ Características

- 🎨 Dark Mode sofisticado con gradientes y bordes iluminados (glowing borders)
- 🌈 Paleta de colores: Fondo oscuro (#0b0c10), texto blanco/gris claro y acentos en púrpura eléctrico y neón azul
- ✨ Elementos decorativos:
  - Malla de fondo animada (Background Grid)
  - Partículas suaves con gradientes animados
  - Tarjetas con efecto de cristal (Glassmorphism)
  - Micro-animaciones al hacer scroll (fade-in, slide-up)
  - Hover states interactivos en botones y tarjetas
- 📱 Totalmente Responsive (móviles, tablets y escritorio)
- 🎭 Animaciones fluidas con Framer Motion

## 📑 Estructura de la Página

1. **Hero Section**: Encabezado llamativo con título de gran impacto visual, subtítulo, botones CTA interactivos y fondo dinámico
2. **Bento Grid**: Servicios/características organizados en una cuadrícula decorativa
3. **Testimonios Interactivos**: Galería con testimonios de clientes con efectos de selección
4. **Footer**: Pie de página elegante con redes sociales y enlaces útiles

## 📂 Estructura del Proyecto

```
web-profesional-moderna/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y Tailwind
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   ├── BackgroundGrid.tsx   # Fondo animado con grid y gradientes
│   │   ├── BentoGrid.tsx        # Grid de servicios/características
│   │   ├── Footer.tsx           # Footer elegante
│   │   ├── GlassCard.tsx        # Componente de tarjeta con efecto glass
│   │   ├── Hero.tsx             # Sección hero principal
│   │   ├── Testimonials.tsx     # Sección de testimonios interactiva
│   │   └── ui/
│   │       └── button.tsx        # Componente de botón personalizado
│   └── lib/
│       └── utils.ts             # Utilidades (cn function)
├── public/                      # Archivos estáticos
├── package.json                 # Dependencias del proyecto
├── tsconfig.json               # Configuración de TypeScript
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── postcss.config.js           # Configuración de PostCSS
├── next.config.js              # Configuración de Next.js
└── README.md                   # Este archivo
```

## 🚀 Cómo Ejecutar el Proyecto Localmente

### Prerrequisitos

- Un navegador web

### Pasos de Instalación

1. **Abrir el sitio**:
   ```bash
   # Abre public/index.html en tu navegador
   ```

2. **Opcional: servirlo localmente** (recomendado para probar rutas):
   ```bash
   python -m http.server 8080 --directory public
   ```

3. **Abrir el navegador**: visita [http://localhost:8080](http://localhost:8080).

### Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 🌐 Despliegue en Vercel

### Método 1: A través de Vercel CLI (Recomendado)

1. **Instalar Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Iniciar sesión en Vercel**:
   ```bash
   vercel login
   ```

3. **Desplegar el proyecto**:
   ```bash
   cd web-profesional-moderna
   vercel
   ```

4. **Seguir las instrucciones**:
   - Vercel te preguntará si quieres configurar el proyecto
   - Selecciona "Yes" para configurar
   - Elige las configuraciones sugeridas (presiona Enter para aceptar los defaults)
   - Tu sitio estará desplegado en unos segundos

### Método 2: A través de GitHub (Automatizado)

1. **Inicializar git en el proyecto**:
   ```bash
   cd web-profesional-moderna
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crear un repositorio en GitHub**:
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio
   - Sigue las instrucciones para conectar tu repositorio local

3. **Conectar con Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Configura el proyecto (framework detectado automáticamente: Next.js)
   - Haz clic en "Deploy"

4. **Despliegue automático**:
   - Cada vez que hagas push a tu repositorio, Vercel desplegará automáticamente tu sitio

### Configuración Adicional para Vercel

El proyecto ya incluye la configuración necesaria para Vercel en `next.config.js`. No necesitas configuración adicional.

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.ts` para modificar la paleta de colores:

```typescript
colors: {
  background: "#0b0c10",  // Color de fondo
  primary: {
    DEFAULT: "#8b5cf6",   // Color primario (púrpura)
    // ...
  },
  secondary: {
    DEFAULT: "#06b6d4",   // Color secundario (cyan)
    // ...
  },
  // ...
}
```

### Modificar Contenido

- **Hero Section**: Edita `src/components/Hero.tsx`
- **Servicios**: Modifica el array `features` en `src/components/BentoGrid.tsx`
- **Testimonios**: Edita el array `testimonials` en `src/components/Testimonials.tsx`
- **Footer**: Modifica `src/components/Footer.tsx`

### Añadir Nuevas Animaciones

Los componentes usan Framer Motion. Puedes añadir nuevas animaciones modificando las propiedades `motion`:

```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Tu contenido
</motion.div>
```

## 📱 Responsividad

El proyecto está completamente optimizado para todos los dispositivos:

- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Escritorio**: > 1024px

Las clases de Tailwind con prefijos `md:`, `lg:`, etc., manejan la responsividad automáticamente.

## 🔧 Troubleshooting

### Error: "Module not found"
Asegúrate de haber instalado todas las dependencias:
```bash
npm install
```

### Error: "Port 3000 is already in use"
Cambia el puerto en el script de desarrollo o usa:
```bash
npm run dev -- -p 3001
```

### Las animaciones no funcionan
Verifica que Framer Motion esté instalado correctamente:
```bash
npm install framer-motion
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o pull request.

## 📞 Contacto

Para preguntas o soporte, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando Next.js, Tailwind CSS y Framer Motion
