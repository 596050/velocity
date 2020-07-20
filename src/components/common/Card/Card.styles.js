import styled from "styled-components";

export const StyledCard = styled.div`
  padding: ${({ theme, padding }) => padding || theme.spacers.size32};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colours.foreground};
  border: 1px solid ${({ theme }) => theme.colours.baseLight};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
