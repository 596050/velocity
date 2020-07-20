import React from "react";

import { Label, StyledTextArea, TextAreaWrapper } from "./TextArea.styles";

const TextArea = ({
  id,
  rows,
  label,
  value,
  name,
  onBlur,
  onChange,
  placeholder,
  onFocus
}) => {
  return (
    <TextAreaWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextArea
        id={id}
        rows={rows}
        value={value === null ? undefined : value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </TextAreaWrapper>
  );
};

export default TextArea;
