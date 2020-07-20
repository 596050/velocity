import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  z-index: 10;
  top: ${({ offset }) => offset};

  width: 100%;
  height: ${({ theme }) => theme.spacers.size64};
  border-bottom: 1px solid ${({ theme }) => theme.colours.baseLight};
  background-color: ${({ theme }) => theme.colours.foreground};
  padding: ${({ theme }) => theme.spacers.size8};
`;

export const NavBarInner = styled(Flex)`
  width: 90%;
  height: 100%;
  margin: auto;
  max-width: ${({ theme }) => theme.wrappers.largeWrapper};
`;

export const ContentPadding = styled.div`
  height: ${({ theme }) => theme.spacers.size64};
`;
