import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';
import { Styles } from './Styles';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Styles}
`;

export default GlobalStyle;