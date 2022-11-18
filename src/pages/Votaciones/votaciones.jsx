import { useState } from 'react';
import axios from 'axios';

const Votaciones = () => {
  const [vote, setVote] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // data is sent to the DB
      const { data } = await axios.post('http://localhost:4000/api/v1/vote', {
        champion: vote,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        </div>
        <div className='col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center gap-4'>
          <h1>Elige al Posible Ganador del Mundial</h1>
          <form className='d-flex flex-column gap-3' onSubmit={submitHandler}>
            <input
              className='border border-success rounded'
              type='text'
              onChange={(e) => setVote(e.target.value)}
            />
            <button className='link-color text-white text-decoration-none shadow py-3 px-5 rounded-pill fs-4'>
              Votar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Votaciones;
