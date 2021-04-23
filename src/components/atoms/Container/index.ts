import styled from "styled-components";

import { CONTAINER_MAX_WIDTH } from "~/styles/constants";

const Container = styled.div`
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 10px;
`;

export default Container;
