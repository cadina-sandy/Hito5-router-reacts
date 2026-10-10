# 🍕 Hito 5 de Pizzería Mamma Mía - React Router

Proyecto realizado para el desafío **Hito 5 - Pizzería Mamma Mía**, continuando el Hito 4 para agregar navegación entre páginas con React Router.

## 🚀 Deploy

[Ver sitio web en GitHub Pages](https://cadina-sandy.github.io/Hito5-router-reacts/)

GitHub Actions compila el proyecto con Vite y publica el resultado en Pages al subir cambios a `main`. Las rutas publicadas comienzan con `/Hito5-router-reacts/`.

Home y Pizza utilizan el backend del Hito 4 en `http://localhost:5000`. GitHub Pages publica el frontend, pero no ejecuta ese backend.

## 📝 Descripción

La aplicación permite navegar entre el inicio, registro, ingreso, carrito y perfil sin recargar la página. También incluye el detalle de una pizza y una página 404 para las direcciones que no existen.

Se conservan los estilos y componentes de los hitos anteriores, con comentarios básicos en español para explicar los cambios.

## ✨ Funcionalidades

- Navegar con los enlaces del Navbar usando `Link`.
- Abrir el carrito desde el botón del total.
- Mostrar el listado de pizzas y el detalle de `p001` desde la API.
- Conservar los formularios de registro e ingreso con sus validaciones.
- Aumentar y disminuir cantidades en el carrito y calcular el total.
- Mostrar el perfil con el correo `sandy@cadin.com` y un botón de cerrar sesión estático.
- Mostrar una página 404 con una pizza hecha en CSS y un enlace para volver al inicio.

El total del menú es estático. Los botones Añadir, Pagar y Cerrar sesión no realizan acciones todavía.

## 🛠️ Tecnologías utilizadas

- HTML5, CSS3 y JavaScript.
- React y React Router.
- Vite.
- Fetch API para consultar el backend de apoyo.

## 📁 Estructura del proyecto

```text
Hito5-router-reacts/
├── public/images/pizza.jpg
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Inicio.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizza.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   ├── data/pizzas.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Cómo funciona

En `main.jsx`, `BrowserRouter` permite utilizar las rutas. En `App.jsx`, `Routes` y `Route` indican qué página mostrar según la dirección. El Navbar y el Footer se mantienen visibles.

| Ruta | Página |
| --- | --- |
| `/` | Home: listado de pizzas |
| `/register` | Register: formulario de registro |
| `/login` | Login: formulario de ingreso |
| `/cart` | Cart: carrito de compras |
| `/pizza/p001` | Pizza: detalle de la pizza p001 |
| `/profile` | Profile: perfil estático |
| `/404` | NotFound: página no encontrada |
| Cualquier otra ruta | NotFound |

La ruta `/pizza/p001` se abre directamente desde la dirección del navegador; no se incluye en el Navbar, como permite la pauta.

## 💻 Ejecutar el proyecto

En la carpeta del proyecto, instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

Para cargar las pizzas, abrir otra terminal en la carpeta del backend de apoyo del Hito 4 y ejecutar:

```bash
npm install
npm start
```

El backend debe funcionar en `http://localhost:5000`. Se mantiene por separado y no está incluido en este repositorio.

Para compilar el frontend:

```bash
npm run build
```

## ⬆️ Subida del proyecto

El código está en la rama `main`. Las carpetas `node_modules` y `dist` se excluyen del repositorio.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito5-router-reacts)

## 👩‍💻 Autora

**Sandy Cadin**
