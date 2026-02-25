import React from "react";
import styled from "styled-components";

const EditInput = ({ value, onChange }) => {
  return <SEditInput value={value} onChange={onChange} />;
};

const SEditInput = styled.input`
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default EditInput;
