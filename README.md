# Portafolio de Matías Villalobos

Sitio web estático construido únicamente con HTML, CSS y JavaScript.

## Estructura

- `public/index.html`: página de inicio.
- `public/portafolio/index.html`: galería de proyectos y contacto.
- `public/cv/index.html`: currículum imprimible.
- `public/styles.css` y `public/script.js`: estilos y comportamiento del inicio.
- `public/cv/styles.css` y `public/cv/script.js`: estilos y comportamiento del CV.

## Ejecutar

Puedes abrir `public/index.html` directamente en el navegador. Para probarlo con un servidor local, ejecuta desde la raíz:

```bash
python -m http.server 8080 --directory public
```

Después visita `http://localhost:8080/`.

No requiere Node.js, npm, React, Next.js ni compilación.

## Vercel

El archivo `vercel.json` configura Vercel para publicar directamente la carpeta `public/` sin ejecutar una compilación. Después de subir los cambios a GitHub, Vercel desplegará el sitio automáticamente.

En **Project Settings > Build and Deployment**, deja vacío **Build Command**. Si aparece `npm run vercel-build`, elimínalo y vuelve a desplegar.
