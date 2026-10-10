import { useEffect, useState } from "react";

function Pizza() {
  // Esta consulta devuelve UNA pizza (un objeto), por eso comenzamos con null y no con [].
  const [pizza, setPizza] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Al mostrar el componente, pedimos el detalle de la pizza p001.
  useEffect(() => {
    const controlador = new AbortController();

    async function cargarPizza() {
      try {
        // El id queda fijo en este hito.
        // Respaldo: antes usamos http://localhost:5001/api/pizzas/p001 porque 5000 estaba ocupado.
        // Ahora usamos el puerto 5000 del enunciado, ya disponible.
        const respuesta = await fetch("http://localhost:5000/api/pizzas/p001", {
          signal: controlador.signal,
        });

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la pizza.");
        }

        // Convertimos la respuesta JSON y guardamos el objeto para mostrar sus propiedades.
        const datos = await respuesta.json();
        setPizza(datos);
      } catch (error) {
        // Cancelar la consulta al salir del componente no requiere mostrar un aviso.
        if (error.name !== "AbortError") {
          setError("No pudimos cargar la pizza. Revisa que el backend esté encendido.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarPizza();
    // Limpiamos la petición pendiente si el componente deja de mostrarse.
    return () => controlador.abort();
  }, []); // El arreglo vacío evita consultar otra vez por cada actualización del estado.

  // Estos retornos evitan intentar leer pizza.name mientras pizza todavía es null.
  if (cargando) return <p role="status">Cargando pizza...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <article className="pizza-card pizza-detail">
      {/* Respaldo de la primera versión: la imagen externa no cargó en la revisión.
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
          Corrección: intentamos la imagen de la API y, si falla, usamos la foto local.
          La foto local es ilustrativa y no una foto específica de esta pizza. */}
      <img
        src={pizza.img}
        alt={`Pizza ${pizza.name}`}
        onError={(evento) => {
          const imagen = evento.currentTarget;
          // Esta marca evita repetir el reemplazo si también falla la foto local.
          if (imagen.dataset.respaldo) return;
          imagen.dataset.respaldo = "true";
          imagen.alt = "Pizza ilustrativa (imagen de respaldo)";
          imagen.src = `${import.meta.env.BASE_URL}images/pizza.jpg`;
        }}
      />
      <div className="card-content">
        <h1>Pizza {pizza.name}</h1>

        {/* La API llama desc a la descripción de la pizza. */}
        <p className="pizza-description">{pizza.desc}</p>

        <h2>Ingredientes</h2>
        <ul>
          {pizza.ingredients.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        {/* El formato es-CL muestra el separador de miles: 5950 se ve como 5.950. */}
        <h2>Precio: ${pizza.price.toLocaleString("es-CL")}</h2>
        {/* El desafío pide mostrar el botón; su funcionalidad queda para otro paso. */}
        <button type="button" className="dark-button">Añadir 🛒</button>
      </div>
    </article>
  );
}

export default Pizza;
