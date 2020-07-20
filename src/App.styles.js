import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  height: 100%;
  font-size: ${({ theme }) => theme.typography.fontSizes.size16};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  margin: 0 ${({ theme }) => theme.spacers.size16};
`;
