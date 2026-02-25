import React from "react";
import styled from "styled-components";
import EditDeleteButtons from "./EditDeleteButtons";
import EditInput from "../atoms/input/editInput";

const TodoItems = ({
  todo,
  editId,
  editText,
  setEditText,
  onUpdate,
  onStartEdit,
  onCheck,
  onOpenModal,
}) => {
  const isEditing = editId === todo.id;

  return (
    <SLi>
      {isEditing ? (
        <SEditArea>
          <EditInput
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onUpdate(todo.id)}>保存</button>
        </SEditArea>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => onCheck(todo.id)}
          />
          <SP>{todo.text}</SP>
          <EditDeleteButtons
            todo={todo}
            onClickStartEdit={onStartEdit}
            onClickOpenModal={onOpenModal}
          />
        </>
      )}
    </SLi>
  );
};

const SEditArea = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  gap: 8px;
`;

const SLi = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 7px;
  border-bottom: 1px solid #eee;
`;

const SP = styled.p`
  margin: 0 10px;
  flex: 1;
  text-align: left;
`;

export default TodoItems;
