import { ADDTODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO } from "../types";

const todo = {
  id: 1,
  todoItem: "todoInput",
};
const initialState: typeof todo[] = [];
const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADDTODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
      
    case REMOVE_TODO:
      const filteredTodos = state.filter(
        (todo: any) => todo.id !== action.payload
      );
      return filteredTodos;

    case UPDATE_TODO:
      let data = action.payload;

      const updatedArray: typeof todo[] = [];
      state.map((item: any) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todoItem = data.todoItem;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    
    default:
      return state;
  }

  
};

export default homeReducer;
