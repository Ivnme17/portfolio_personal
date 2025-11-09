# Guía para dar de alta tu portfolio en Google Search Console

## ✅ Archivos creados

He preparado los siguientes archivos para SEO:

1. **`public/robots.txt`** - Permite que Google rastree tu sitio
2. **`public/sitemap.xml`** - Mapa de tu sitio para indexación
3. **`src/index.html`** - Meta tags mejorados para SEO

## 📝 Pasos a seguir

### 1. Actualizar las URLs con tu dominio de Vercel

Antes de desplegar, reemplaza `https://tu-dominio.vercel.app` con tu URL real de Vercel en:
- `public/robots.txt` (línea 4)
- `public/sitemap.xml` (línea 4)
- `src/index.html` (línea 24)

### 2. Desplegar en Vercel

```bash
npm run build
```

Luego sube los cambios a tu repositorio Git y Vercel desplegará automáticamente, o usa:

```bash
vercel --prod
```

### 3. Verificar tu sitio en Google Search Console

#### Opción A: Verificación por HTML (Recomendada)

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz clic en "Agregar propiedad"
3. Selecciona "Prefijo de URL" e ingresa tu URL de Vercel
4. Elige el método "Etiqueta HTML"
5. Google te dará un meta tag como:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```
6. Copia ese meta tag y agrégalo en `src/index.html` dentro de `<head>`
7. Vuelve a desplegar en Vercel
8. Regresa a Google Search Console y haz clic en "Verificar"

#### Opción B: Verificación por archivo HTML

1. Google te proporcionará un archivo HTML (ej: `google1234567890.html`)
2. Descárgalo y colócalo en la carpeta `public/`
3. Vuelve a desplegar en Vercel
4. Regresa a Google Search Console y haz clic en "Verificar"

#### Opción C: Verificación por DNS (Si tienes dominio propio)

1. Sigue las instrucciones de Google para agregar un registro TXT a tu DNS
2. Espera a que se propague (puede tardar unas horas)
3. Verifica en Google Search Console

### 4. Enviar el Sitemap

Una vez verificado:

1. En el menú lateral de Google Search Console, ve a **"Sitemaps"**
2. Ingresa: `sitemap.xml`
3. Haz clic en "Enviar"

### 5. Solicitar indexación

1. Ve a **"Inspección de URLs"** en el menú lateral
2. Ingresa tu URL principal
3. Si no está indexada, haz clic en **"Solicitar indexación"**

## 🔍 Verificar que todo funciona

Después de desplegar, verifica que estos archivos sean accesibles:

- `https://tu-dominio.vercel.app/robots.txt`
- `https://tu-dominio.vercel.app/sitemap.xml`

## ⏱️ Tiempos de espera

- La verificación es instantánea
- La indexación puede tardar de 1 a 7 días
- Puedes ver el progreso en Google Search Console

## 📊 Próximos pasos (Opcional)

1. **Google Analytics** - Para rastrear visitas
2. **Schema.org markup** - Para mejor SEO
3. **Actualizar sitemap** - Cuando agregues más páginas
4. **Performance monitoring** - Usar Google PageSpeed Insights

## ❓ Problemas comunes

**No se muestra robots.txt o sitemap.xml:**
- Verifica que los archivos estén en `public/`
- Haz un build limpio: `rm -rf dist && npm run build`
- Redespliega en Vercel

**Google no verifica mi sitio:**
- Asegúrate de que el meta tag esté correctamente copiado
- Limpia caché del navegador
- Espera 24 horas y reintenta

**Mi sitio no aparece en Google:**
- La indexación toma tiempo (1-7 días)
- Verifica que robots.txt permita el rastreo
- Asegúrate de haber enviado el sitemap
