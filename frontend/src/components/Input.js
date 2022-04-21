import React from 'react';

const Input = ({ label, name, type = 'text', value, callback }) => (
  <label htmlFor={ name }>
    { label }
    <input
      name={ name }
      type={ type }
      value={ value }
      onChange={ callback }
      data-testid={ `${name}-input` }
    />
  </label>
);

export default Input;
