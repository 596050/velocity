import React from "react";

import { StyledCard } from "./Card.styles";

const Card = ({ id, padding, children }) => {
  return (
    <StyledCard id={id} padding={padding}>
      {children}
    </StyledCard>
  );
};

export default Card;
