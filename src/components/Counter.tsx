import React, { useState } from "react";
import { homeActions } from "../redux/actions/Home.actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";

const Counter = () => {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");

  const { todo_list } = useSelector((state: RootState) => state.home);

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
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />

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

export default Counter;
