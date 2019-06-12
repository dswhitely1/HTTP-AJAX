import styled, {css} from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  ${props => props.Card && css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
`}
  ${props => props.Navigation && css`
    display: flex;
    align-items: center;
    
    h1 {
      width: 650px;
    }
`}
`;

export default Container;