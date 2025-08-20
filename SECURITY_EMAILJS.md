# 🔒 Configuración de Seguridad EmailJS - thotlabs

## Medidas de Seguridad Implementadas

### 1. **Restricciones de Dominio**
✅ **Configurado en EmailJS Dashboard**
- Solo dominios autorizados pueden enviar emails
- Dominios permitidos: `thotlabs.com`, `www.thotlabs.com`, `localhost`

### 2. **Rate Limiting**
✅ **Implementado en Frontend**
- 30 segundos mínimo entre envíos
- Límite de 100 emails por día (configurado en EmailJS)

### 3. **Validaciones Anti-Bot**
✅ **Honeypot Field**
- Campo invisible que detecta bots automáticos
- Bloquea envíos si el campo está completado

### 4. **Sanitización de Datos**
✅ **Límites de caracteres**
- Nombre: máximo 100 caracteres
- Email: máximo 254 caracteres  
- Empresa: máximo 100 caracteres
- Servicio: máximo 50 caracteres
- Mensaje: máximo 1000 caracteres

### 5. **Filtros Anti-Spam**
✅ **Detección de contenido sospechoso**
- Palabras prohibidas (spam keywords)
- URLs múltiples
- Texto en mayúsculas excesivo
- Caracteres repetidos

### 6. **Validación de Email Estricta**
✅ **RFC 5322 compliant**
- Valida formato de email estricto
- Bloquea dominios de email temporal
- Previene emails falsos

## Configuración Adicional Recomendada

### En EmailJS Dashboard:

1. **Account → Security**
   - ✅ Configurar dominios permitidos
   - ✅ Activar CAPTCHA si es necesario
   - ✅ Configurar notificaciones de uso

2. **Account → Usage**
   - ✅ Límite diario: 100 emails
   - ✅ Límite por hora: 20 emails
   - ✅ Activar alertas de uso excesivo

3. **Templates**
   - ✅ Variables fijas y controladas
   - ✅ Sin variables dinámicas peligrosas
   - ✅ Plantilla con formato HTML seguro

## Variables de Entorno

```env
# Estas variables son visibles en el frontend (por diseño de Vite)
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_SERVICE_ID=tu_service_id  
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
```

⚠️ **Nota de Seguridad**: Las variables con prefijo `VITE_` son públicas y visibles en el navegador. EmailJS está diseñado para esto, pero asegúrate de:

1. Configurar restricciones de dominio
2. Limitar el rate limiting
3. Usar plantillas controladas
4. Monitorear el uso

## Para Mayor Seguridad (Futuro)

### Opción Backend API:
```
Frontend → Tu API Backend → EmailJS/Nodemailer → Email
```

**Ventajas**:
- Claves completamente ocultas
- Rate limiting server-side
- Validaciones más robustas
- Logs de seguridad
- Control total del flujo

## Monitoreo

1. **Revisa regularmente** el dashboard de EmailJS
2. **Vigila el uso** diario/mensual
3. **Comprueba logs** de errores
4. **Actualiza dominios** permitidos cuando cambies hosting

## Testing de Seguridad

### Pruebas Recomendadas:

1. **Honeypot**: Completar campo invisible
2. **Rate Limiting**: Enviar múltiples formularios rápidamente  
3. **Contenido Spam**: Probar con palabras prohibidas
4. **Emails Falsos**: Probar con emails temporales
5. **Dominio No Autorizado**: Probar desde otro dominio

✅ **¡Tu formulario está ahora mucho más seguro!** 🔒
