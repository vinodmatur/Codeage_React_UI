import React from 'react';
import error from '../assets/images/error.svg';

const ErrorPage = ({ message = 'Something went wrong' }) => {
  return (
    <div className='error-page'>
      <img src={error} alt='error' />
      <div>{message}</div>
    </div>
  );
};

export default ErrorPage;
