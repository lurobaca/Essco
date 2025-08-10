export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Un mundo con menos clicks</h1>
          <p>En ESSCO simplificamos tus procesos con tecnología clara, segura y escalable.</p>
          <div className="cta-row">
            <a href="#servicios" className="btn primary">Ver servicios</a>
            <a href="#contacto" className="btn">Contáctanos</a>
          </div>
          <ul className="badges">
            <li>Integraciones .NET & Azure</li>
            <li>CI/CD con Azure DevOps</li>
            <li>Factura Electrónica CR v4.4</li>
          </ul>
        </div>
        <div className="hero-illus">
          <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop" alt="Tecnología eficiente" />
        </div>
      </div>
    </section>
  )
}
