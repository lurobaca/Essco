export default function Services(){
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2>Servicios</h2>
        <div className="grid cards">
          <article className="card">
            <h3>Desarrollo Web</h3>
            <p>Aplicaciones en .NET/ASP.NET, APIs seguras y dashboards modernos.</p>
            <ul>
              <li>ASP.NET MVC / .NET 8</li>
              <li>SQL Server & optimización</li>
              <li>Frontend responsivo</li>
            </ul>
          </article>
          <article className="card">
            <h3>DevOps & Cloud</h3>
            <p>Automatizamos despliegues y monitoreo para que tu equipo gane velocidad.</p>
            <ul>
              <li>Azure DevOps Pipelines</li>
              <li>IIS / Windows Server</li>
              <li>GitHub Actions</li>
            </ul>
          </article>
          <article className="card">
            <h3>Factura Electrónica CR</h3>
            <p>Implementación 4.4, firmas, validaciones FE y notas de crédito/débito.</p>
            <ul>
              <li>XSD → clases .NET</li>
              <li>Validaciones FE44</li>
              <li>Soporte & auditoría</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
