"use client"
import Image from 'next/image';
import '../../scss/components/nav.scss';
import '../../scss/components/navbar-toggler.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
              <Link href="/" className='d-lg-none'>
                <div className='navbar_brand_container'>
                  <Image src="/logo.png" alt="logo" width={424} height={190} className='brand_logo' />
                </div>
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Línea Hogar
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/domestica/acrilico">Acrilico</Link></li>
                      <li><Link className="dropdown-item" href="/domestica/inox">Inox</Link></li>
                      <li><Link className="dropdown-item" href="/domestica/vitro">Vitro</Link></li>
                      <li><Link className="dropdown-item" href="/domestica/touch">Touch</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/industrial">Línea Industrial</Link>
                  </li>
                  <li className='d-none d-lg-block'>
                    <Link href="#">
                      <div className='navbar_brand_container'>
                        <Image src="/logo.png" alt="logo" width={424} height={190} className='brand_logo' />
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/servicios">Servicios</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/nosotros">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>



  )
}

export default NavBar