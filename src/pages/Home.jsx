import { useEffect, useState } from "react";
import Inicio from "../components/Inicio";
import CardPizza from "../components/CardPizza";


function Home() {
  // Comenzamos sin pizzas. setPizzas guardará los datos que entregue la API.
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // useEffect hace la consulta cuando Home aparece en pantalla.
  useEffect(() => {
    // Permite cancelar la petición si salimos del componente antes de recibir los datos.
    const controlador = new AbortController();

    async function cargarPizzas() {
      try {
        // fetch pide las pizzas al backend.
        // Respaldo: antes usamos http://localhost:5001/api/pizzas porque 5000 estaba ocupado.
        // Ahora usamos el puerto 5000 del enunciado, ya disponible.
        const respuesta = await fetch("http://localhost:5000/api/pizzas", {
          signal: controlador.signal,
        });

        // fetch no lanza un error automáticamente ante respuestas como 404 o 500.
        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener las pizzas.");
        }

        // Convertimos el JSON en un arreglo y lo guardamos para actualizar la pantalla.
        const datos = await respuesta.json();
        setPizzas(datos);
      } catch (error) {
        // Una cancelación al salir de Home no es un error que debamos mostrar.
        if (error.name !== "AbortError") {
          setError("No pudimos cargar las pizzas. Revisa que el backend esté encendido.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarPizzas();
    return () => controlador.abort();
    // [] evita repetir la consulta cada vez que se actualiza el estado del componente.
  }, []);

  return (
    <section className="home">
      <Inicio />

      {/* Mientras esperamos la respuesta, mostramos un mensaje en lugar de tarjetas vacías. */}
      {cargando && <p role="status">Cargando pizzas...</p>}
      {error && <p role="alert">{error}</p>}

      {/* map crea una tarjeta por cada pizza recibida desde la API. */}
      <section className="pizza-grid" aria-label="Nuestras pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </section>
    </section>
  );
}


export default Home;
