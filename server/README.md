
# API Reference

Para inicializar el proyecto utilzar el siguiente script:
```
npm run dev
```

## Ruta de productos

```
  http://localhost:8080
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/api/products` | `GET` | `Devuelve todos los productos` |
| `/api/products/:id` | `GET` | `Si existe devuelve un producto` |
| `/api/products` | `POST` | `Crea un producto` |
| `/api/products/:id` | `PUT` | `actualiza un producto, acepta cualquier valor, ver ejemplos al final del readme` |
| `/api/products/:id` | `DELETE` | `Elimina el prodcuto de la lista` |

### Ejemplos /api/products

**ejemplo GET /api/products**
```
http://localhost:8080/api/products
```
**ejemplo de GET /api/products/:id**
```
http://localhost:8080/api/products/e8o362kclljf
```
**ejemplo POST /api/products**

Pasar por Header ----> key = admin , value = true
```
http://localhost:8080/api/products

{
    "name": "Objeto de prueba",
    "price": 19900,
    "img": "https://imagenes.newcomputers.ar/webp.php?src=/fotos/SOLOCAST.JPG&alto=210&ancho=264",
    "description": "Microfono Gamer con el mejor sonido",
    "stock": 50
}

```

**ejemplo PUT /api/products/:id**

Pasar por Header ----> key = admin , value = true

se puede pasar cualquiera de los siguientes argumentos, y se van a modificar.

No es obligatorio pasar el objeto completo,
se puede pasar solo los argumentos que se quieran modificar

```
http://localhost:8080/api/products/e8o362kclljf

{
    "name": "Objeto de prueba",
    "price": 19900,
    "img": "https://imagenes.newcomputers.ar/webp.php?src=/fotos/SOLOCAST.JPG&alto=210&ancho=264",
    "description": "Microfono Gamer con el mejor sonido",
    "stock": 50
}
```
**ejemplo DELETE /api/products/:id**

Pasar por Header ----> key = admin , value = true
```
http://localhost:8080/api/products/e8o362kclljf
```

## **Ruta de carritos**

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/api/cart/:id/products` | `GET` | `Devuelve carrito si existe` |
| `/api/cart` | `POST` | `Crea y devuelve un carrito vacio` |
| `/api/cart/:id/products` | `POST` | `Carga productos al carrito` |
| `/api/cart/:id` | `DELETE` | `Elimina el carrito` |
| `/api/cart/:id/products/:idProd` | `DELETE` | `Elimina un prodcuto del carrito` |

### Ejemplos /api/cart

**ejemplo GET /api/cart/:id/products**
```
http://localhost:8080/api/cart/cart-4qo2qi5gbos/products
```

**ejemplo POST /api/cart**
```
http://localhost:8080/api/cart
```

**ejemplo POST /api/cart/:id/products**
```
http://localhost:8080/api/cart/cart-08gpq1otgl76/products

{
    "newProducts":[
        {"id":"hq4b2o3e47e"},
        {"id":"e8o362kclljf"}
    ]
}

Esta ruta no acepta duplicados
```
**ejemplo DELETE /api/cart/:id**
```
http://localhost:8080/api/cart/cart-4qo2qi5gbos
```
**ejemplo DELETE /api/cart/:id/products/:idProd**
```
http://localhost:8080/api/cart/cart-4qo2qi5gbos/products/hq4b2o3e47e
```