import React from "react";
import * as S from "./styles"

const TextInput = ({ children, icon: Icon, ...props }) => {
  return (
    <S.Container>
      {Icon && <Icon />}
      <input {...props}>{children}</input>
    </S.Container>
  );
};

export default TextInput;
