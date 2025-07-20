
# Convención de nombres de ramas

Esta es una documentación que generé para guiarme sobre cómo escribir el nombre de las ramas para este proyecto, para hacerlo de forma clara, consistente y sostenible en el tiempo, siguiendo buenas prácticas que suelen usarse en la industria.


## Formato general

```
<tipo>/<área>/<detalle>
```

Donde:

- `<tipo>`: Tipo de tarea (feature, fix, refactor, chore, etc.)
- `<área>`: Dominio del proyecto (frontend o backend)
- `<detalle>`: Descripción clara y específica de la tarea


## Tipos de rama (`<tipo>`)

| Tipo      | Uso                                                  |
|-----------|------------------------------------------------------|
| `feature` | Nuevas funcionalidades o vistas                      |
| `fix`     | Corrección de errores o bugs                         |
| `refactor`| Reestructuración de código sin cambiar funcionalidad |
| `chore`   | Tareas menores (build, configuración, docs, etc.)    |
| `test`    | Agregar o modificar pruebas                          |
| `hotfix`  | Correcciones urgentes en producción (para `main`)    |


## Áreas del proyecto (`<área>`)

| Área      | Descripción                                                |
|-----------|------------------------------------------------------------|
| `frontend`| Código relacionado al cliente/UI: HTML, CSS, JS, React     |
| `backend` | Código del servidor: API, base de datos, lógica de negocio |


## ✏️ Ejemplos de nombres válidos

### Frontend

```
feature/frontend/static-responsive/login
feature/frontend/react/signup-form
fix/frontend/react/navbar-alignment
refactor/frontend/components/input-field
chore/frontend/assets/favicon-update
```

### Backend

```
feature/backend/api/auth
feature/backend/api/users
fix/backend/api/token-expiry
refactor/backend/models/user-schema
chore/backend/env/example-update
```

