import { ADDTODO } from "../types";

interface initialStateCloud {
  todo_list: any;
}

const initialState: initialStateCloud = {
  todo_list: [],
};

const homeReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todo_list: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
