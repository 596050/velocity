import React from "react";
import { Flex } from "@rebass/grid";

import { ContentPadding, NavBar, NavBarInner } from "./Navigation.styles";

const Navigation = ({ left, right, offset = "0", children }) => (
  <nav>
    <NavBar offset={offset}>
      <NavBarInner
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Flex>{left}</Flex>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {children}
        </Flex>
        <Flex>{right}</Flex>
      </NavBarInner>
    </NavBar>
    <ContentPadding />
  </nav>
);

export default Navigation;
