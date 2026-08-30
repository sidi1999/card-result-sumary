import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// El parámetro ({ command }) debe ir exactamente así entre paréntesis
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/card-result-sumary/', // Reemplaza 'nombre-de-tu-repo' por el nombre real de tu repositorio en GitHub
  }
})