import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: auto;
  width: 90%;
  height: 100%;
  max-width: ${({ width }) => width};
  position: relative;
`;
