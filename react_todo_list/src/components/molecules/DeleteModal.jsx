import React from "react";
import styled from "styled-components";

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <SOverlay>
        <SModal>
          <p>本当に削除しますか？</p>
          <SButtons>
            <SButton onClick={onConfirm}>OK</SButton>
            <SButton onClick={onCancel}>キャンセル</SButton>
          </SButtons>
        </SModal>
      </SOverlay>
    </div>
  );
};

const SOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const SModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background: white;
  padding: 24px;
  width: 400px;
  height: 100px;
  margin: 100px auto;
  border-radius: 8px;
`;

const SButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  & button:first-child {
    background-color: #ff4d4f;
    color: white;
    border: none;
  }
`;

const SButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export default DeleteModal;
