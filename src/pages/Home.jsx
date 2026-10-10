import Inicio from "../components/Inicio";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

function Home() {
  // En el Hito 4 cargábamos las pizzas del backend con fetch y useEffect.
  // Para este Hito 5 quitamos esa consulta y usamos el arreglo de pizzas.js.
  // Así conservamos las tarjetas y el diseño, pero Pages funciona sin encender el backend.
  return (
    <section className="home">
      <Inicio />

      {/* map crea una tarjeta por cada pizza del archivo local. */}
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
