import './styles/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavbarScreen = () => {
  const [click, setClick] = useState(0);

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top'>
        <div className='container'>
          <Link className='navbar-brand fs-1' to='/'>
            <span className='color-gray fw-bold'>Pre</span>
            <span class='color-green fw-bold'>Dictiva</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item m-3 fs-4 d-flex color-gray justify-content-center align-items-center'>
                <Link
                  onClick={() => setClick(0)}
                  className={`${
                    click === 0 ? 'active nav-link py-0 rounded-pill px-4' : ''
                  } nav-link py-0 rounded-pill px-4`}
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item m-3 fs-4 d-flex color-gray justify-content-center align-items-center'>
                <Link
                  onClick={() => setClick(1)}
                  className={`${
                    click === 1 ? 'active nav-link py-0 rounded-pill px-4' : ''
                  } nav-link py-0 rounded-pill px-4`}
                  to='/estadisticas'
                >
                  Estad&iacute;sticas
                </Link>
              </li>
              <li className='nav-item m-3 fs-4 d-flex color-gray justify-content-center align-items-center'>
                <Link
                  onClick={() => setClick(2)}
                  className={`${
                    click === 2 ? 'active nav-link py-0 rounded-pill px-4' : ''
                  } nav-link py-0 rounded-pill px-4`}
                  to='/actividades'
                >
                  Actividad
                </Link>
              </li>
              <li className='nav-item m-3 fs-4 d-flex color-gray justify-content-center align-items-center'>
                <Link
                  onClick={() => setClick(3)}
                  className={`${
                    click === 3 ? 'active nav-link py-0 rounded-pill px-4' : ''
                  } nav-link py-0 rounded-pill px-4`}
                  to='/contacto'
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarScreen;
