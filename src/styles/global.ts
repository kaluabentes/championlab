import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyled = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyled;
