import './styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid flex-grow-1'>
      <div className='row justify-content-center h-100 position-relative overflow-hidden'>
        <p className='col-4 position-absolute bg-green text-white tag text-center fs-3 py-2'>
          2022
        </p>
        <div className='col-6 position-absolute triangle color-div'></div>
        <div className='col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
          <img
            src='/fifa-world-cup-2022-mascot-laeeb-seeklogo.com (1).svg'
            alt=''
            height='300'
            width='300'
          />
          <Link
            to='/votaciones'
            className='link-color text-white text-decoration-none shadow py-3 px-5 rounded-pill fs-4'
          >
            Posible ganador
          </Link>
        </div>
        <div className='col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
          <img
            src='/fifa-world-cup-2022-mascot-laeeb-seeklogo.com.svg'
            alt=''
            height='300'
            width='300'
          />
          <Link
            to='/actividades'
            className='link-color text-white text-decoration-none shadow py-3 px-5 rounded-pill fs-4'
          >
            Juego del dia
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
