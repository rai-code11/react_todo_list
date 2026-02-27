import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const PrimaryButton = ({ children, onClick }) => {
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #0d6efd;
`;

export default PrimaryButton;
