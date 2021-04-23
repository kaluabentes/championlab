import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyled = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyled;
