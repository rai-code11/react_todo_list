import React from "react";

const EditDeleteButtons = ({ onClickStartEdit, onClickOpenModal, todo }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickStartEdit(todo.id, todo.text);
        }}
      >
        編集
      </button>
      <button
        onClick={() => {
          onClickOpenModal(todo.id);
        }}
      >
        削除
      </button>
    </div>
  );
};

export default EditDeleteButtons;
