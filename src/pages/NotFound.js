import React from 'react';
import PageNotFoundSvg from '../assets/images/pageNotFound.svg';

const PageNotFound = ({ message = 'The requested page does not exist.' }) => {
  return (
    <div className='error-page'>
      <img src={PageNotFoundSvg} alt='page not found' />
      <div>{message}</div>
    </div>
  );
};

export default PageNotFound;
