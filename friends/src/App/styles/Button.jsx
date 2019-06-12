import styled, {css} from 'styled-components';

const Button = styled.button`
  width: 75px;
  height: 25px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  
  ${props => props.danger && css`
    background-color: #670700;
    color: white;
    &:hover {
      background-color: white;
      color: #670700;
    }
`}
  ${props => props.success && css`
    background-color: teal;
    color: white;
    &:hover {
      background-color: white;
      color: teal;
    }
`}
`;

export default Button;