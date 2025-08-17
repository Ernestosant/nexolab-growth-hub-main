# Configuración del Formulario de Contacto

## Descripción
El formulario de contacto utiliza EmailJS para enviar correos electrónicos directamente desde el frontend sin necesidad de un servidor backend.

## Configuración

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita
2. Confirma tu email y accede al dashboard

### 2. Configurar el servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. Anota el **Service ID** que se genera

### 3. Crear plantilla de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Diseña tu plantilla usando las siguientes variables:
   - `{{title}}` - Título del email
   - `{{name}}` - Nombre del remitente
   - `{{email}}` - Email del remitente
   - `{{company}}` - Empresa del remitente
   - `{{service}}` - Servicio de interés
   - `{{message}}` - Mensaje del remitente
   - `{{time}}` - Fecha y hora del envío
4. Anota el **Template ID** que se genera

### 4. Obtener la clave pública
1. Ve a "Account" > "General"
2. En la sección "API Keys", encontrarás tu **Public Key**

### 5. Configurar variables de entorno
1. Copia el archivo `.env.example` a `.env.local`
2. Completa las variables con tus credenciales de EmailJS:
   ```
   VITE_EMAILJS_PUBLIC_KEY=tu_clave_publica_aqui
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   ```

### 6. Ejemplo de plantilla EmailJS
```html
<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <h2>Nuevo mensaje de contacto desde NexoLab</h2>
    
    <p><strong>Fecha:</strong> {{time}}</p>
    <p><strong>Nombre:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Empresa:</strong> {{company}}</p>
    <p><strong>Servicio de interés:</strong> {{service}}</p>
    
    <h3>Mensaje:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>Este mensaje fue enviado desde el formulario de contacto de NexoLab Growth Hub</em></p>
</body>
</html>
```

## Características implementadas

- ✅ Validación de formulario con Zod
- ✅ Manejo de estado de carga
- ✅ Notificaciones toast para éxito y errores
- ✅ Manejo de errores específicos de EmailJS
- ✅ Deshabilitación del formulario durante envío
- ✅ Reset automático del formulario después del envío exitoso
- ✅ Responsive design
- ✅ Accesibilidad mejorada

## Personalización

### Cambiar el email de destino
En el archivo `src/components/ContactSection.tsx`, modifica las líneas:
```typescript
to_email: "sales@thotlabs.tech", // Cambia por tu email
recipient: "sales@thotlabs.tech" // Cambia por tu email
```

### Personalizar los servicios disponibles
En el mismo archivo, modifica el select de servicios:
```typescript
<option value="Tu Servicio">Tu Servicio</option>
```

### Personalizar las notificaciones
Las notificaciones se configuran al final del componente ContactSection en el componente `<Toaster>`.

## Solución de problemas

### Error: "Template not found"
- Verifica que el `VITE_EMAILJS_TEMPLATE_ID` sea correcto
- Asegúrate de que la plantilla esté publicada en EmailJS

### Error: "Service not found"
- Verifica que el `VITE_EMAILJS_SERVICE_ID` sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Public key invalid"
- Verifica que el `VITE_EMAILJS_PUBLIC_KEY` sea correcto
- Regenera la clave pública si es necesario

### Los emails no llegan
- Verifica que el servicio de email esté correctamente configurado
- Revisa la carpeta de spam
- Verifica que el email de destino sea válido
