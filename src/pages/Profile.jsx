function Profile() {
  // Por ahora el correo y el botón son estáticos, como permite la pauta.
  return (
    <section className="form-card">
      <h1>Mi perfil</h1>
      <p>Email: sandy@cadin.com</p>
      <button type="button" className="primary-button">Cerrar sesión</button>
    </section>
  );
}

export default Profile;
