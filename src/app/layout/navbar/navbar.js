"use client"
import Image from 'next/image';
import '../../scss/components/nav.scss';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtenemos la posición actual del scroll
      const scrollPosition = window.scrollY;

      // Verificamos si la posición del scroll es mayor que 2px
      if (scrollPosition > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregamos un listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="container-fluid">
              <a href="#" className='d-lg-none'>
                <div className='navbar_brand_container'>
                  <Image src="/logo.png" alt="logo" width={424} height={190} className='brand_logo' />
                </div>
              </a>
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
                      Línea Hogar
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/domestica/acrilico">Acrilico</a></li>
                      <li><a className="dropdown-item" href="/domestica/inox">Inox</a></li>
                      <li><a className="dropdown-item" href="/domestica/touch">Touch</a></li>
                      <li><a className="dropdown-item" href="/domestica/vitro">Vitro</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/nosotros">Línea Industrial</a>
                  </li>
                  <li className='d-none d-lg-block'>
                    <a href="#">
                      <div className='navbar_brand_container'>
                        <Image src="/logo.png" alt="logo" width={424} height={190} className='brand_logo' />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/nosotros">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/nosotros">Servicios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>



  )
}

export default NavBar