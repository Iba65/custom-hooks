export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...initialState, action.payload];
    case "REMOVE_TODO":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Ok_TODO":
      return initialState.map((todo) => {
        return {
          id: todo.id,
          description: todo.description,
          done: !todo.done ? todo.id === action.payload : todo.done,
        };
      });
    default:
      return initialState;
  }
};
