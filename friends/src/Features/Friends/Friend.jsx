import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../App/styles/Card';
import Button from '../../App/styles/Button';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1rem;
`;

const Friend = ({friend}) => {
  const {name,age,email} = friend;
  return (
    <Card>
      <h4>{name}</h4>
      <p>{`Age: ${age}`}</p>
      <p>Email:</p>
      <p>{email}</p>
      <ButtonContainer>
      <Button success>Edit</Button>
      <Button danger>Delete</Button>
      </ButtonContainer>
    </Card>
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
