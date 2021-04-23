import React, { useEffect, useRef, useState } from "react";

import { Container, Image } from "./styles";

function ChampionThumb({ src, onClick }) {
  const imageRef = useRef();
  const [error, setError] = useState(false);

  return (
    <Container onClick={onClick} type="button">
      <Image ref={imageRef} src={src} />
    </Container>
  );
}

export default ChampionThumb;
