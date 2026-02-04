import { useState } from "react";
import "./index.css";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteTargetIndex, setDeleteTargetIndex] = useState(null);

  // const [completeCount, setCompleteCount] = useState(0);
  // const [inCompleteCount, setIncompleteCount] = useState(todoList.length);

  const completeCount = todoList.filter((t) => t.checked).length;

  const inCompleteCount = todoList.length - completeCount;

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = { text: todoText, checked: false };
    const newTodos = [...todoList, newTodo];
    setTodoList(newTodos);
    setTodoText("");
    // setIncompleteCount(inCompleteCount + 1);
  };

  // const onClickEdit = () => {
  //   const
  // };

  // if (targetTodo.checked) {
  //   setCompleteCount((prev) => {
  //     return prev - 1;
  //   });
  // } else {
  //   setIncompleteCount((prev) => {
  //     return prev - 1;
  //   });
  // }

  // const handleCheckboxChange = (e) => {
  //   if (e.target.checked) {
  //     setCompleteCount(completeCount + 1);
  //     setIncompleteCount(inCompleteCount - 1);
  //   } else {
  //     setCompleteCount(completeCount - 1);
  //     setIncompleteCouえt(inCompleteCount + 1);
  //   }

  const handleCheckboxChange = (index) => {
    const newTodos = [...todoList];
    newTodos[index].checked = !newTodos[index].checked;
    setTodoList(newTodos);
  };

  const onClickEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const onClickSave = (index) => {
    const newTodos = [...todoList];
    newTodos[index].text = editText;
    setTodoList(newTodos);
    setEditIndex(-1);
  };

  const onClickDelete = (index) => {
    const newTodos = [...todoList];
    const targetTodo = newTodos[index];
    console.log("削除するタスク:", targetTodo);
    console.log("checkedの値は?:", targetTodo.checked);
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  const onClickOpenModal = (index) => {
    setDeleteTargetIndex(index);
    setIsOpenModal(true);
  };

  const onClickModalDelete = () => {
    onClickDelete(deleteTargetIndex);
    setIsOpenModal(false);
    setDeleteTargetIndex(null);
  };

  return (
    <>
      <div className="todo-card">
        <div className="card-body">
          <div className="input-group">
            <input
              className="form-input"
              placeholder="タスクを入力してください"
              value={todoText}
              onChange={onChangeTodoText}
            />
            <button className="btn-save" onClick={onClickAdd}>
              保存
            </button>
          </div>
        </div>
        <div className="todo-count">
          <span>
            全てのタスク：{todoList.length} 完了済み：{completeCount} 未完了：
            {inCompleteCount}
          </span>
        </div>

        <div className="todo-list-area">
          <ul>
            {todoList.map((todo, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <div className="edit-area">
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-form"
                    />
                    <button onClick={() => onClickSave(index)}>保存</button>
                  </div>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <p>{todo.text}</p>
                    <div className="edit-delete-buttons">
                      <button
                        onClick={() => {
                          onClickEdit(index, todo.text);
                        }}
                      >
                        編集
                      </button>
                      <button
                        onClick={() => {
                          onClickOpenModal(index);
                        }}
                      >
                        削除
                      </button>
                    </div>

                    {isOpenModal && (
                      <div className="overlay">
                        <div className="modal">
                          <p>本当に削除しますか？</p>
                          <div className="buttons">
                            <button onClick={() => onClickModalDelete(index)}>
                              OK
                            </button>
                            <button onClick={() => setIsOpenModal(false)}>
                              キャンセル
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
