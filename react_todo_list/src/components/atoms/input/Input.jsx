import React from "react";
import styled from "styled-components";

const Input = ({ placeholder = "", value, onChange }) => {
  return <SInput placeholder={placeholder} value={value} onChange={onChange} />;
};

const SInput = styled.input`
  flex: 1;
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem 0 0 0.25rem; /* 左側だけ丸める */
  font-style: italic; /* fst-italic */
`;

export default Input;
