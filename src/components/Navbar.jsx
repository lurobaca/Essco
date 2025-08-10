export default function Navbar(){
  const toggle = () => document.getElementById('nav').classList.toggle('open')
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">
          <img src="/logo.svg" alt="ESSCO" className="logo" />
          <span>ESSCO</span>
        </a>
        <nav className="nav" id="nav">
          <a href="#servicios">Servicios</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="menu-btn" onClick={toggle} aria-label="Abrir menú">☰</button>
      </div>
    </header>
  )
}
