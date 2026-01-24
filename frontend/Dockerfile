FROM node:25-alpine3.22

WORKDIR /app

COPY package*.json ./

RUN npm install

# Se copia el resto del contenido de esta carpeta a la del contenedor ('/app')
COPY . .

# Puerto por defecto dado por Vite
EXPOSE 5173

# Ejecucion de script para comando 'vite'
CMD ["npm", "run", "dev"]