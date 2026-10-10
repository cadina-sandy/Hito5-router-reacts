import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";


function Cart() {
  // Estado del carrito.
  const [cart, setCart] = useState(pizzaCart);


  // Aumentar la cantidad.
  function aumentarCantidad(id) {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  }


  // Disminuir la cantidad y eliminar si llega a cero.
  function disminuirCantidad(id) {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  }


  // Total del pedido.
  const total = cart.reduce(
    (acumulado, pizza) => acumulado + pizza.price * pizza.count,
    0
  );


  return (
    <section className="cart">
      <h1>Detalles del pedido:</h1>
      <p>Revisa aqui tus pizzas.</p>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      {/* Pizzas del carrito. */}
      <div className="cart-items">
        {cart.map((pizza) => (
          <article className="cart-row" key={pizza.id}>
            <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
            <h2>{pizza.name}</h2>

            <span>${pizza.price.toLocaleString("es-CL")}</span>

            <div className="quantity-controls">
              <button
                type="button"
                className="minus-button"
                aria-label={`Disminuir cantidad de ${pizza.name}`}
                onClick={() => disminuirCantidad(pizza.id)}
              >
                −
              </button>

              <span aria-label={`Cantidad de ${pizza.name}`}>{pizza.count}</span>

              <button
                type="button"
                className="plus-button"
                aria-label={`Aumentar cantidad de ${pizza.name}`}
                onClick={() => aumentarCantidad(pizza.id)}
              >
                +
              </button>
            </div>
          </article>
        ))}
      </div>

      <h2 aria-live="polite">Total: ${total.toLocaleString("es-CL")}</h2>

      {/* Botón sin acción por ahora. */}
      <button type="button" className="dark-button">Pagar</button>
      <p className="payment-note">El pago estara disponible próximamente.</p>
    </section>
  );
}


export default Cart;
