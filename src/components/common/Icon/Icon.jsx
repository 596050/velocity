import React from "react";

import { Icons } from "./Icon.helpers";

const Icon = ({ name, width, height }) => {
  const SelectedIcon = Icons[name];
  return (
    <img src={SelectedIcon} alt={name} width={width} height={height}></img>
  );
};

export default Icon;
