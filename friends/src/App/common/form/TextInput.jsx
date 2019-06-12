import React from 'react';

const TextInput = ( {label, type, placeholder, name} ) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name}  />
    </>
  );
};

export default TextInput;
