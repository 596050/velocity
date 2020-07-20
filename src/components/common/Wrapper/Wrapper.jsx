import React from "react";
import { withTheme } from "styled-components";
import { StyledDiv } from "./Wrapper.styles";

const Wrapper = ({
  size = "extraLarge",
  children,
  theme,
  isFullHeight = true
}) => {
  const wrapperSizeMap = {
    extraLarge: theme.wrappers.extraLarge
  };
  return (
    <StyledDiv width={wrapperSizeMap[size]} isFullHeight={isFullHeight}>
      {children}
    </StyledDiv>
  );
};

export default withTheme(Wrapper);
