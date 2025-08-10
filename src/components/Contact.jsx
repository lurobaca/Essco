export default function Contact(){
  return (
    <section id="contacto" className="section alt">
      <div className="container">
        <h2>Contacto</h2>
        <div className="grid two">
          <form className="contact-form" action="https://formspree.io/f/xayzgbjn" method="POST">
            <label>Nombre
              <input name="nombre" required />
            </label>
            <label>Email
              <input type="email" name="email" required />
            </label>
            <label>Mensaje
              <textarea name="mensaje" rows="4" required></textarea>
            </label>
            <button className="btn primary" type="submit">Enviar</button>
            <p className="form-note">También podés escribir a <a href="mailto:contacto@essco.cr">contacto@essco.cr</a></p>
          </form>
          <div>
            <div className="info">
              <p><strong>Email:</strong> contacto@essco.cr</p>
              <p><strong>Ubicación:</strong> Costa Rica</p>
              <p><strong>Horario:</strong> Lun–Vie 9:00–18:00</p>
            </div>
            <div className="map-embed">
              <iframe title="Mapa Costa Rica" loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.0%2C7.8%2C-82.4%2C11.3&layer=mapnik">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
