import styled, {css} from 'styled-components';

const Card = styled.div`
  width: 200px;
  border-radius: 15px;
  box-shadow: 1px 1px #222222;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  text-align: center;
  padding: 1.5rem;
  margin: 2rem;
  
  h4 {
  border-bottom: 1px solid lightgray;
  padding-bottom: 1rem;
  
  }  
 

`;

export default Card;