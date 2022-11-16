import { ADDTODO } from "../types";

const addTodo = (data: any) => {
  return (dispatch: any) => {
    try {
      dispatch({
        type: ADDTODO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// const subCount = (data: any) => {
//   return (dispatch: any) => {
//     try {
//       dispatch({
//         type: ADDTODO,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const homeActions = {
  addTodo,
};
