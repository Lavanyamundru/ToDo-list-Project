import { ADDTODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO , UPDATE_CHECKBOX} from "../types";
export const addTodo = (payload: any) => {
  return {
    type: ADDTODO,
    payload,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export const removeTodo = (payload: any) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const handleEditSubmit = (payload: any) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
export const handleCheckbox=(payload:any)=>{
  return{
      type: UPDATE_CHECKBOX,
      payload
  }
}
