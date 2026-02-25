import { useState } from "react";
import { v4 as uuid } from "uuid";

const useTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editText, setEditText] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const completeCount = todoList.filter((t) => t.checked).length;

  const inCompleteCount = todoList.length - completeCount;

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const id = uuid();
    if (todoText === "") return;
    const newTodo = { text: todoText, checked: false, id };
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

  const onClickDeleteAndModalDelete = () => {
    const newTodos = todoList.filter((todo) => todo.id !== deleteTargetId);
    console.log(newTodos);
    setTodoList(newTodos);
    console.log(deleteTargetId);
    setIsOpenModal(false);
    setDeleteTargetId(null);
  };

  return {
    todoText,
    todoList,
    editId,
    editText,
    isOpenModal,
    completeCount,
    inCompleteCount,
    setEditText,
    onChangeTodoText,
    onClickAdd,
    handleCheckboxChange,
    onClickStartEdit,
    onClickUpdateTodo,
    onClickOpenModal,
    onClickDeleteAndModalDelete,
  };
};

export default useTodo;
