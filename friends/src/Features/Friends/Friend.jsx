import React from 'react';
import PropTypes from 'prop-types';

const Friend = ({friend}) => {
  const {name,age,email} = friend;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};

Friend.propTypes = {
  props: PropTypes.shape( {
    name : PropTypes.string,
    age  : PropTypes.number,
    email: PropTypes.string
  })
};

export default Friend;
