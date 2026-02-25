import React from "react";
import styled from "styled-components";
import AddTaskInput from "../molecules/addTaskInput";

const CardBody = ({ todoText, onChangeTodoText, onClickAdd }) => {
  return (
    <SAddTaskInput>
      <AddTaskInput
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
    </SAddTaskInput>
  );
};

const SAddTaskInput = styled.div`
  padding: 1rem;
`;

export default CardBody;
