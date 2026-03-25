# TEELAB API

API REST para gestionar un catálogo de camisetas y comandas.

## Cómo arrancar

npm i
npm run dev


El servidor se ejecuta en `http://localhost:3000`.

## Endpoints

### Camisetas

#### `GET /camisetas`

Devuelve el catálogo de camisetas. Todos los parámetros son opcionales.

**Query params de filtrado:**

| Param   | Ejemplo            | Descripción                          |
|---------|--------------------|--------------------------------------|
| `talla` | `?talla=S`         | Filtra por talla                     |
| `color` | `?color=negro`     | Filtra por color                     |
| `tag`   | `?tag=nuevo`       | Filtra por tag                       |
| `q`     | `?q=clasica`       | Busca en nombre o descripción        |

**Query params de ordenación:**

| Param  | Valores                                              |
|--------|------------------------------------------------------|
| `sort` | `precio_asc`, `precio_desc`, `nombre_asc`, `nombre_desc` |

Si se envía un valor de `sort` no reconocido, devuelve `404` con `{ error: "Camiseta no encontrada" }`.


#### `GET /camisetas/:id`

Devuelve una camiseta por su ID. Si no existe, devuelve `404`.

### Comandas

#### `GET /comandas`

Devuelve todas las comandas.

#### `POST /comandas`

Crea una nueva comanda.

**Body (JSON):**

{
  "cliente": {
    "nombre": "Juan",
    "email": "juan@email.com"
  },
  "items": [
    {
      "camisetaId": 1,
      "talla": "M",
      "color": "negro",
      "cantidad": 2
    }
  ]
}


**Validaciones:**
-  nombre: mínimo 2 caracteres
- email: debe contener "@"
- items: al menos 1 elemento
- cantidad: entero >= 1
- camisetaId, talla y color deben existir en el catálogo
