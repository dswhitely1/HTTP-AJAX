import React from 'react';
import styled from 'styled-components';
import Container from '../../App/styles/Container';
import Button from '../../App/styles/Button';

const Navigation = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #222222;
  color: #fbf7f5;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Navbar = () => {
  return (
    <Navigation>
      <Container Navigation>
        <h1>Don's Friends</h1>
        <Button clickMe>New Friend</Button>
      </Container>
    </Navigation>
  );
};

export default Navbar;
