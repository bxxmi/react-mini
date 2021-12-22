import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonTemplate>{children}</ButtonTemplate>;
};

const ButtonTemplate = styled.button`
  width: 90px;
  height: 40px;
  border: 3px solid #ed214c;
  color: #ed214c;
  border-radius: 10px;
  font-size: 14px;
  &:hover {
    background-color: #ed214c;
    color: white;
  }
`;

export default Button;
