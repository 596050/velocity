import React from "react";

import { ButtonPrimary } from "./Button.styles";

const Button = ({
  id,
  disabled,
  type = "button",
  onClick,
  children,
  ...rest
}) => {
  return (
    <ButtonPrimary
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonPrimary>
  );
};

export default Button;
