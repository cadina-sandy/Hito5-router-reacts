import Inicio from "../components/Inicio";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

function Home() {
  // Usamos los datos locales para mostrar las pizzas sin un servidor.
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
