# Tracking de Google Analytics - Botones CTA de WhatsApp

## Descripción

Este proyecto incluye tracking automático de Google Analytics para todos los botones CTA (Call to Action) que enlazan a WhatsApp.

## Funcionalidad

### Eventos Trackeados

- **Categoría**: `whatsapp_cta`
- **Acción**: `click`
- **Labels**: Identifican la ubicación específica del botón

### Ubicaciones de Botones Trackeados

1. **Hero Section** (`hero_section`)

   - Ubicación: Sección principal de la página
   - Texto: "¡Empezá tu Presskit!"

2. **CTA Section** (`cta_section`)

   - Ubicación: Sección de llamada a la acción
   - Texto: "CONTACTANOS"

3. **Premium Plan** (`premium_plan`)
   - Ubicación: Plan Premium en la sección de planes
   - Texto: "HABLEMOS"

## Implementación Técnica

### Archivos Modificados

1. **`lib/gtag.ts`**

   - Agregada función `event()` para eventos personalizados
   - Agregada función `trackWhatsAppClick()` específica para WhatsApp

2. **`components/Buttons/DefaultButton.tsx`**

   - Agregada prop `trackingLabel`
   - Detección automática de enlaces de WhatsApp
   - Tracking automático al hacer click

3. **`components/LandingLink/LandingLink.tsx`**
   - Agregada prop `trackingLabel`
   - Detección automática de enlaces de WhatsApp
   - Tracking automático al hacer click

### Cómo Usar

Para agregar tracking a un nuevo botón CTA de WhatsApp:

```tsx
// Con DefaultButton
<DefaultButton
  href={whatsappLink}
  trackingLabel="mi_seccion"
>
  Mi Botón
</DefaultButton>

// Con LandingLink
<LandingLink
  href={whatsappLink}
  trackingLabel="mi_seccion"
>
  <DefaultButton>Mi Botón</DefaultButton>
</LandingLink>
```

## Visualización en Google Analytics

Los eventos aparecerán en Google Analytics bajo:

- **Eventos** > **Eventos personalizados**
- **Categoría**: `whatsapp_cta`
- **Acción**: `click`
- **Etiqueta**: Ubicación específica del botón

## Configuración

El tracking está configurado automáticamente y no requiere configuración adicional. Solo asegúrate de que:

1. El `GA_MEASUREMENT_ID` esté configurado en `lib/gtag.ts`
2. El componente `ExternalTags` esté incluido en el layout
3. El componente `Analytics` esté incluido en el layout
