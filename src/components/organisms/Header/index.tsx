import React from "react";
import Container from "~/components/atoms/Container";
import { OuterContainer } from "./styles";

function Header({ children }) {
  return (
    <OuterContainer>
      <Container>{children}</Container>
    </OuterContainer>
  );
}

export default Header;
