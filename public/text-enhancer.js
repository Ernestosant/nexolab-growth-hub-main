// Script para modificar las clases de texto en Services.tsx
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar la clase text-enhanced-contrast a los elementos con text-muted-foreground en modo oscuro
  if (document.documentElement.classList.contains('dark')) {
    // Seleccionar todos los elementos con la clase text-muted-foreground
    const mutedElements = document.querySelectorAll('.text-muted-foreground');
    
    // Añadir la clase text-enhanced-contrast a cada uno
    mutedElements.forEach(element => {
      element.classList.add('text-enhanced-contrast');
    });
  }
});
