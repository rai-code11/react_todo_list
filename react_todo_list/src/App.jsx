import "./index.css";

import PrimaryButton from "./components/atoms/button/PrimaryButton";
import AddTaskInput from "./components/molecules/addTaskInput";
import CardBody from "./components/organisms/CardBody";
import TodoCounter from "./components/molecules/TodoCounter";
import EditDeleteButtons from "./components/molecules/EditDeleteButtons";
import EditInput from "./components/atoms/input/editInput";
import DeleteModal from "./components/molecules/DeleteModal";
import TodoList from "./components/organisms/TodoList";
import useTodo from "./hooks/useTodo";

function App() {
  const {
    todoText,
    todoList,
    editId,
    editText,
    setEditText,
    isOpenModal,
    completeCount,
    inCompleteCount,
    setIsOpenModal,
    onChangeTodoText,
    onClickAdd,
    handleCheckboxChange,
    onClickStartEdit,
    onClickUpdateTodo,
    onClickOpenModal,
    onClickDeleteAndModalDelete,
  } = useTodo();

  return (
    <>
      <div className="todo-card">
        <CardBody
          todoText={todoText}
          onChangeTodoText={onChangeTodoText}
          onClickAdd={onClickAdd}
        />
        <TodoCounter
          todoList={todoList}
          completeCount={completeCount}
          inCompleteCount={inCompleteCount}
        ></TodoCounter>

        <TodoList
          todoList={todoList}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          onUpdate={onClickUpdateTodo}
          onStartEdit={onClickStartEdit}
          onCheck={handleCheckboxChange}
          onOpenModal={onClickOpenModal}
        />

        {isOpenModal && (
          <DeleteModal
            onConfirm={onClickDeleteAndModalDelete}
            onCancel={() => setIsOpenModal(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
