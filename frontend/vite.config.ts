import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Este subobject 'server' debe agregarse para que el servidor
  // de Vite funcione desde Docker hacia nuestro navegador
  // Para mas info, revisar:
  // - https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l
  // - https://medium.com/@tomas.ew88/recently-i-was-setting-up-docker-to-work-with-a-vite-project-and-also-an-express-server-ab65456e64d5
  // - https://vite.dev/config/server-options
  server: {
      host: true,
      port: 5173,
      // La opcion 'watch' definido con 'usePolling: true' es para que los cambios en los
      // archivos se muestren en el navegador al usar Docker en Windows (con WSL2).
      // Se debe tener en cuenta que esta opcion sobreexige un poco la CPU. Otra opcion es llevar
      // el proyecto a una carpeta de WSL2 para no tener que usar esta opcion.
      watch: {
          usePolling: true
      },
  },
})
