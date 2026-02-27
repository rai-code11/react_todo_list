import React from "react";
import styled from "styled-components";

const TodoCounter = ({ todoList, completeCount, inCompleteCount }) => {
  return (
    <STodoCounter>
      <span>
        全てのタスク：{todoList.length} 完了済み：{completeCount} 未完了：
        {inCompleteCount}
      </span>
    </STodoCounter>
  );
};

const STodoCounter = styled.div`
  border-top: 1px solid #dee2e6;
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* small */
  color: #6c757d; /* text-secondary */
`;

export default TodoCounter;
