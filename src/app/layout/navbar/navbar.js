import '../../scss/components/nav.scss';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Linea Hogar
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/domestica/acrilico">Acrilico</a></li>
                      <li><a className="dropdown-item" href="/domestica/inox">Inox</a></li>
                      <li><a className="dropdown-item" href="/domestica/touch">Touch</a></li>
                      <li><a className="dropdown-item" href="/domestica/vitro">Vitro</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/nosotros">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </>


  )
}

export default NavBar