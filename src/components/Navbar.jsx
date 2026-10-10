import { Link } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <span className="brand">🍕 Pizzería Mamma Mía</span>
      {/* Link cambia de página sin recargar el sitio. */}
      <nav aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/register">Registro</Link>
        <Link to="/login">Ingresar</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/404">404</Link>
        <Link to="/cart">🛒 Total: $0</Link>
      </nav>
    </header>
  );
}

export default Navbar;
