import { rem } from "polished";
import styled, { css } from "styled-components";

export const commonControlStyles = css`
  transition: all 0.1s ease-in-out;

  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;
  background-color: ${({ theme }) => theme.colours.foreground};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  border: 1px solid ${({ theme }) => theme.colours.baseLight};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.typography.fontSizes.size16};
  padding: ${rem(11)} 1rem;
  line-height: ${rem(26)};
  width: 100%;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colours.baseMid};
  }

  /* For IE this declaration needs to be separate */
  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colours.baseMid};
  }

  &:focus,
  &:active:not(:disabled):not(.error) {
    border-color: ${({ theme }) => theme.colours.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colours.baseExtraLight};
    color: ${({ theme }) => theme.colours.baseMid};
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colours.base};
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizes.size14};
  line-height: ${({ theme }) => theme.typography.lineHeightSmall};
  margin-bottom: ${({ theme }) => theme.spacers.size4};
`;

export const TextAreaWrapper = styled.div`
  & p {
    margin: 0;
    margin-top: ${rem(-4)};
  }
  &.error textarea {
    border-color: ${({ theme }) => theme.colours.danger};
  }
`;

export const StyledTextArea = styled.textarea`
  ${commonControlStyles}
  resize: none;
`;
