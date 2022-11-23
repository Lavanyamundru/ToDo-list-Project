import React, { useState } from "react";
import { homeActions } from "../../../../src/redux/actions/Homeactions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../src/redux/reducers/rootReducer";

const Todolis = () => {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");

  const { todo_list } = useSelector((state: RootState) => state.home);
  const changeHandler = (e: any) => {
    setTodoInput(e.target.value);
  };

  const onClickAdd = () => {
    const newTodoObj = {
      id: todo_list.length,
      todoItem: todoInput,
    };

    const newArray = [...todo_list, newTodoObj];
    dispatch(homeActions.addTodo(newArray) as any);
  };

  const onClickDelete = (id: any) => {
    const filteredTodoList = todo_list.filter((each: any) => each.id !== id);
    dispatch(homeActions.addTodo(filteredTodoList) as any);
  };
  return (
    <div>
      <input value={todoInput} onChange={changeHandler} />

      <button type="button" onClick={onClickAdd}>
        Add
      </button>
      <div>
        <h1>Todo list</h1>

        {todo_list.map((each: any) => (
          <ul>
            <li>{each.todoItem}</li>
            <button type="button" onClick={() => onClickDelete(each.id)}>
              Delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todolis;
