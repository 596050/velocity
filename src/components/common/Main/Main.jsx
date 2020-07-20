import React from "react";
import { withTheme } from "styled-components";
import { Box } from "@rebass/grid";

const Main = ({ children, theme }) => {
  return (
    <Box
      as="main"
      pt={theme.spacers.size64}
      pb={`calc(${theme.spacers.size80} + ${theme.spacers.size48})`}
    >
      {children}
    </Box>
  );
};

export default withTheme(Main);
