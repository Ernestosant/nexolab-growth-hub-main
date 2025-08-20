import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const inputDir = './public';
  const outputDir = './public/optimized';
  
  // Crear directorio de salida si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const imagePath = path.join(inputDir, 'kkroto66.png');
  
  if (!fs.existsSync(imagePath)) {
    console.error('❌ Imagen kkroto66.png no encontrada en /public');
    return;
  }

  console.log('🚀 Iniciando optimización de imágenes...');
  
  try {
    // Generar versión WebP optimizada
    await sharp(imagePath)
      .resize(1920, 1080, { 
        fit: 'cover',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(path.join(outputDir, 'kkroto66-optimized.webp'));
    
    console.log('✅ WebP generado: kkroto66-optimized.webp');

    // Generar versión JPEG como fallback
    await sharp(imagePath)
      .resize(1920, 1080, { 
        fit: 'cover',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.join(outputDir, 'kkroto66-optimized.jpg'));
    
    console.log('✅ JPEG generado: kkroto66-optimized.jpg');

    // Generar versiones responsivas
    const sizes = [
      { width: 768, suffix: 'mobile' },
      { width: 1024, suffix: 'tablet' },
      { width: 1920, suffix: 'desktop' }
    ];

    for (const size of sizes) {
      // WebP responsive
      await sharp(imagePath)
        .resize(size.width, Math.floor(size.width * 0.56), { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80,
          effort: 6
        })
        .toFile(path.join(outputDir, `kkroto66-${size.suffix}.webp`));
      
      // JPEG responsive
      await sharp(imagePath)
        .resize(size.width, Math.floor(size.width * 0.56), { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(path.join(outputDir, `kkroto66-${size.suffix}.jpg`));
      
      console.log(`✅ Versiones responsive generadas: ${size.suffix}`);
    }

    // Mostrar estadísticas de tamaño
    const originalStats = fs.statSync(imagePath);
    const webpStats = fs.statSync(path.join(outputDir, 'kkroto66-optimized.webp'));
    const jpegStats = fs.statSync(path.join(outputDir, 'kkroto66-optimized.jpg'));

    console.log('\n📊 Estadísticas de optimización:');
    console.log(`Original PNG: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized WebP: ${(webpStats.size / 1024 / 1024).toFixed(2)} MB (${((1 - webpStats.size / originalStats.size) * 100).toFixed(1)}% reducción)`);
    console.log(`Optimized JPEG: ${(jpegStats.size / 1024 / 1024).toFixed(2)} MB (${((1 - jpegStats.size / originalStats.size) * 100).toFixed(1)}% reducción)`);

  } catch (error) {
    console.error('❌ Error durante la optimización:', error);
  }
}

// Ejecutar la función
optimizeImages();
