import styled from "styled-components";

export const StyledButton = styled.button`
  transition: opacity 0.1s ease-out, border-color 0.1s ease-out,
    background-color 0.1s ease-out;
  border-radius: ${({ theme }) => theme.display.borderRadius};
  padding-right: ${({ theme }) => theme.spacers.size16};
  padding-left: ${({ theme }) => theme.spacers.size16};
  height: ${({ theme }) => theme.display.inputHeight};

  font-size: ${({ theme }) => theme.typography.fontSizes.size16};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colours.primary};

  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonPrimary = styled(StyledButton)`
  color: white;
  background-color: ${({ theme }) => theme.colours.primary};
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colours.hover};
    background-color: ${({ theme }) => theme.colours.hover};
  }

  &:active {
    border-color: ${({ theme }) => theme.colours.pressed};
    background-color: ${({ theme }) => theme.colours.pressed};
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colours.baseLight};
    background-color: ${({ theme }) => theme.colours.baseLight};
  }
`;
