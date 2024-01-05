import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodos = () => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  }, [todoState]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };
    todoDispatch(action);
  };

  const handleRemoveTodo = (id) => {
    todoDispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const handleTodoOk = (id) => {
    todoDispatch({
      type: "Ok_TODO",
      payload: id,
    });
  };

  const todosCount = () => {
    return todoState.length;
  };
  const pendingTodosCount = () => {
    return todoState.filter((t) => t.done === false).length;
  };
  return {
    todoState,
    handleNewTodo,
    handleRemoveTodo,
    handleTodoOk,
    todosCount,
    pendingTodosCount,
  };
};
