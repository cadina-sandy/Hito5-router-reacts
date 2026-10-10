import React from "react";


function CardPizza({ name, price, ingredients, img }) {
  return (
    <article className="pizza-card">
      <img src={img} alt={`Pizza ${name}`} />

      <div className="card-content">
        <h2>Pizza {name}</h2>
        <p>Ingredientes:</p>

        {/* Cada ingrediente tiene su propio elemento de lista. */}
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <h3>Precio: ${price.toLocaleString("es-CL")}</h3>

        {/* El botón Añadir queda solo como presentación en este hito. */}
        <div className="card-buttons">
          <button type="button" className="dark-button">Añadir 🛒</button>
        </div>
      </div>
    </article>
  );
}


export default CardPizza;
