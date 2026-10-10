import { pizzas } from "../data/pizzas";

function Pizza() {
  // La ruta pide p001; en el archivo local su id está en mayúsculas.
  const pizza = pizzas.find((pizza) => pizza.id === "P001");

  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <article className="pizza-card pizza-detail">
      {/* La foto ilustrativa está guardada dentro del proyecto. */}
      <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
      <div className="card-content">
        <h1>Pizza {pizza.name}</h1>

        {/* desc contiene la descripción guardada en pizzas.js. */}
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
