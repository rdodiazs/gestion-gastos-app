
# Flujo de trabajo en Git.

Esta documentación la generé para guiarme sobre cómo escribir el nombre de las ramas así como los mensajes de commit en este proyecto, para hacerlo de forma clara, consistente y sostenible en el tiempo, siguiendo buenas prácticas que suelen usarse en la industria.

## Convención de nombres de ramas

### Formato general

```
<tipo>/<área>/<detalle>
```

Donde:

- `<tipo>`: Tipo de tarea (feature, fix, refactor, chore, etc.)
- `<área>`: Dominio del proyecto (frontend o backend)
- `<detalle>`: Descripción clara y específica de la tarea


### Tipos de rama (`<tipo>`)

| Tipo      | Uso                                                  |
|-----------|------------------------------------------------------|
| `feature` | Nuevas funcionalidades o vistas                      |
| `fix`     | Corrección de errores o bugs                         |
| `refactor`| Reestructuración de código sin cambiar funcionalidad |
| `chore`   | Tareas menores (build, configuración, docs, etc.)    |
| `test`    | Agregar o modificar pruebas                          |
| `hotfix`  | Correcciones urgentes en producción (para `main`)    |


### Áreas del proyecto (`<área>`)

| Área      | Descripción                                                |
|-----------|------------------------------------------------------------|
| `frontend`| Código relacionado al cliente/UI: HTML, CSS, JS, React     |
| `backend` | Código del servidor: API, base de datos, lógica de negocio |


### Ejemplos de nombres válidos

#### Frontend.

```
feature/frontend/static-responsive/login
feature/frontend/react/signup-form
fix/frontend/react/navbar-alignment
refactor/frontend/components/input-field
chore/frontend/assets/favicon-update
```

#### Backend.

```
feature/backend/api/auth
feature/backend/api/users
fix/backend/api/token-expiry
refactor/backend/models/user-schema
chore/backend/env/example-update
```

## Convención de mensajes de commit.

### Estructura de los mensajes.

Debe seguir el siguiente formato:

```
<tipo>(<área opcional>): <resumen del cambio>

<descripción opcional más detallada>
```

### Explicación.

| Parte     | Ejemplo                      | Descripción                                                                 |
| --------- | ---------------------------- | --------------------------------------------------------------------------- |
| `<tipo>`  | `feat`, `fix`, `refactor`    | Tipo de cambio (siguiendo convención tipo `Conventional Commits`)           |
| `<área>`  | `login`, `api`, `form`, etc. | Parte afectada (opcional pero útil)                                         |
| `resumen` | "Agrega formulario de login" | Voz activa, 50 caracteres máx                                               |
| `cuerpo`  | Más contexto si hace falta   | Detalla decisiones, motivación o consecuencias (72 caracteres máx por línea)|


