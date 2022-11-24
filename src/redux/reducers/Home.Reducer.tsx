import {
  ADDTODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_TODO,
  UPDATE_CHECKBOX,
} from "../types";

const todo = {
  id: 1,
  todoItem: "todoInput",
  completed: "completed",
  isSelected: false,
  description: "",
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
const result: any = state.map((item: any) => {
        if (item.id === data.id) {
          return { ...item,todoItem:data.todoItem ,description:data.description};
        }
        return item;
      });
      console.log(state);
      return result;


    case UPDATE_CHECKBOX:
      let dataa = action.payload;

      const res: any = state.map((item: any) => {
        if (item.id === dataa.id) {
          return { ...item, isSelected: dataa.isSelected };
        }
        return item;
      });
      console.log(state);
      return res;

    default:
      return state;
  }
};

export default homeReducer;
