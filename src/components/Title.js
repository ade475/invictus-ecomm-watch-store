import React from 'react';

export const Title = (name, title) => {
  return (
    <div class='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1 class='text-capitalze font-weight-bold'>
          {name} <strong className='text-blue'>{title}</strong>
        </h1>
      </div>
    </div>
  );
};
