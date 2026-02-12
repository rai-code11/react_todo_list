import { useState } from "react";
import "./index.css";
import { v4 as uuid } from "uuid";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editText, setEditText] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const completeCount = todoList.filter((t) => t.checked).length;

  const inCompleteCount = todoList.length - completeCount;

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const id = uuid();

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = { text: todoText, checked: false, id: id };
    const newTodos = [...todoList, newTodo];
    setTodoList(newTodos);
    setTodoText("");
  };

  const handleCheckboxChange = (id) => {
    const newTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    );
    setTodoList(newTodos);
  };

  const onClickStartEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const onClickUpdateTodo = (id) => {
    const newTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo,
    );
    setTodoList(newTodos);
    setEditId(-1);
  };

  const onClickOpenModal = (id) => {
    setDeleteTargetId(id);
    setIsOpenModal(true);
  };

  const onClickDeleteAndModalDelete = (setDeleteTargetId) => {
    const newTodos = todoList.filter((todo) => todo.id !== deleteTargetId);
    console.log(newTodos);
    setTodoList(newTodos);
    console.log(deleteTargetId);
    setIsOpenModal(false);
    setDeleteTargetId(null);
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
            {todoList.map((todo) => (
              <li key={todo.id}>
                {editId === todo.id ? (
                  <div className="edit-area">
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-form"
                    />
                    <button onClick={() => onClickUpdateTodo(todo.id)}>
                      保存
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleCheckboxChange(todo.id)}
                    />
                    <p>{todo.text}</p>
                    <div className="edit-delete-buttons">
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

                    {isOpenModal && (
                      <div className="overlay">
                        <div className="modal">
                          <p>本当に削除しますか？</p>
                          <div className="buttons">
                            <button
                              onClick={() =>
                                onClickDeleteAndModalDelete(setDeleteTargetId)
                              }
                            >
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

export default App;
