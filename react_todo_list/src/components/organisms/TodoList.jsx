import React from "react";
import TodoItems from "../molecules/TodoItems";
import styled from "styled-components";

const TodoList = ({ todoList, ...others }) => {
  return (
    <STodoListArea>
      <SUl>
        {todoList.map((todo) => (
          <TodoItems key={todo.id} todo={todo} {...others} />
        ))}
      </SUl>
    </STodoListArea>
  );
};

const STodoListArea = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const SUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export default TodoList;
