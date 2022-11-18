import './styles/estadisticas.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Estadisticas = () => {
  const [votos, setVotos] = useState([]);

  const getVotos = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios('http://localhost:4000/api/v1/votes', options);
    setVotos(data);
    console.log(votos);
  };

  useEffect(() => {
    getVotos();
  }, []);

  return (
    <div className='container-fluid flex-grow-1'>
      <div className='row justify-content-center h-100 position-relative overflow-hidden'>
        <div className='col-6 position-absolute bg-green transform-div'></div>
        <div className='col-5 d-flex flex-column  pt-4 ps-5'>
          <img
            src='/fifa-world-cup-2022-mascot-laeeb-seeklogo.com (1).svg'
            alt=''
            height='150px'
            width='150px'
            className='rounded-circle mt-4 ms-3'
          />
          <p className='fs-1 color-gray mb-0'>Qatar 2022</p>
        </div>
        <div className='col-5 pt-4 ps-0 pe-0 '>
          <div className='mb-0 mt-5 texto-color py-1 text-white px-1 fs-3'>
            <p className=''>Datos Estadísticos</p>
          </div>
          <div className='table-responsive'>
            <table className='table table-bordered shadow'>
              {votos.map((voto) => (
                <tr className='bg-white' key={voto?._id}>
                  <td className='text-nowrap'>{voto?.champion}</td>
                  <td className='text-nowrap'>1</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
