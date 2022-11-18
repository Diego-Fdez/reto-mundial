import React from 'react';

const Contacto = () => {
  return (
    <div className='container-fluid flex-grow-1'>
      <div className='row justify-content-center h-100 position-relative overflow-hidden'>
        <div className='col-9 position-absolute bg-green h-100 triangle color-div'></div>
        <p className='col-4 position-absolute bg-green text-white tag-invert text-center fs-3 py-2'>
          Qatar 2022
        </p>
        <div className='col-3 d-none d-lg-flex justify-content-center pt-4'>
          <img
            src='/fifa-world-cup-2022-mascot-laeeb-seeklogo.com.svg'
            alt=''
            height='400'
            width='400'
          />
        </div>
        <form className='col-8 col-lg-4 offset-lg-2 d-flex flex-column justify-content-center align-items-center'>
          <div className='mb-3 w-100'>
            <input
              type='email'
              className='form-control fs-5'
              placeholder='Email:'
            />
          </div>
          <div className='mb-3 w-100'>
            <input
              type='email'
              className='form-control fs-5'
              placeholder='Asunto:'
            />
          </div>
          <div className='mb-3 w-100'>
            <textarea
              class='form-control fs-5'
              rows='10'
              placeholder='Texto'
            ></textarea>
          </div>
          <div className='mb-3 w-100'>
            <input
              type='submit'
              value='Enviar'
              className='bg-green btn text-white rounded-pill py-1 px-4 fs-4 shadow-sm text-center'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
