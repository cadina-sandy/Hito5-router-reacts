# Hito 5 - Pizzería Mamma Mía

Continuación del Hito 4 para agregar navegación con React Router.

## Ejecutar

Desde esta carpeta:

```bash
npm install
npm run dev
```

Home y Pizza conservan las consultas del Hito 4. Para ver las pizzas, también debe estar encendido el backend de apoyo en http://localhost:5000. En la carpeta del backend se ejecuta `npm install` y luego `npm start`.

## Rutas

- `/`: Home, listado de pizzas.
- `/register`: Register, formulario de registro.
- `/login`: Login, formulario de ingreso.
- `/cart`: Cart, carrito.
- `/pizza/p001`: Pizza, detalle de p001.
- `/profile`: Profile, correo de ejemplo y botón de cerrar sesión estáticos.
- `/404`: NotFound, página de error con enlace al inicio.
- Cualquier otra dirección también muestra NotFound.

Las páginas están en `src/pages`. El menú y el pie de página se mantienen en `src/components`. El menú usa Link y el total lleva a `/cart`. La ruta de pizza se puede abrir escribiendo `/pizza/p001` en el navegador; no se incluye en el menú, según la pauta.

## Comentarios del trabajo

- Se envolvió App con BrowserRouter para habilitar las rutas.
- Se cambió el nombre Registro por Register para coincidir con la pauta.
- Al mover Home a pages, se ajustaron sus importaciones de Inicio y CardPizza.
- La configuración heredada tenía la base `/Hito4-APis-reacts/`. Se cambió a `/` para usar las direcciones del Hito 5.
- El primer intento de instalación no pudo conectarse al registro de npm por una restricción de red del entorno.

El perfil es estático. Se mantienen las funciones del carrito y los formularios anteriores; no se agregó autenticación ni pago. El total del menú conserva el valor estático del Hito 4.

Para comprobar la compilación:

```bash
npm run build
```

## Revisión

La compilación terminó correctamente. Se revisaron las siete rutas, una dirección inexistente, el enlace de regreso al inicio, el enlace al carrito y sus cantidades. Home y Pizza cargaron los datos del backend. No aparecieron errores de JavaScript durante la prueba.
