import React from "react";
import styled from "styled-components";
import Input from "../atoms/input/Input";
import PrimaryButton from "../atoms/button/PrimaryButton";

const AddTaskInput = ({ todoText, onChangeTodoText, onClickAdd }) => {
  return (
    <SInputGroup>
      <Input
        placeholder="タスクを入力してください"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <PrimaryButton onClick={onClickAdd}>保存</PrimaryButton>
    </SInputGroup>
  );
};

const SInputGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export default AddTaskInput;
