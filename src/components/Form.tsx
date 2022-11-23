import React, { useState } from "react";
import {
  addTodo,
  handleEditSubmit,
  removeTodo,
} from "../redux/actions/Homeactions";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";

const Input = styled.input`
  height: 35px;
  margin-left: 40px;
  
`;
const H3 = styled.h3`
  height: 35px;
  margin-left: 40px;
  color:black;
`;

const Todolis = () => {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  const [editItemId, setEditItemId] = useState("");
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const changeHandler = (event: any) => {
    setTodoInput(event.target.value);
  };

  const todo_list = useSelector((state: RootState) => state.home);

  const onClickAdd = () => {
    const newTodoObj = {
      id: todo_list.length,
      todoItem: todoInput,
    };

    dispatch(addTodo(newTodoObj) as any);
    setTodoInput("");
  };

  const handleEditClick = (todo: any) => {
    setEditFormVisibility(true);
    setTodoInput(todo.todoItem);
    setEditItemId(todo.id);
  };

  const onClickUpdate = () => {
    const editedObj = {
      id: editItemId,
      todoItem: todoInput,
    };
    dispatch(handleEditSubmit(editedObj));
    setEditFormVisibility(false);
    setEditItemId("");
    setTodoInput("");
  };

  const onClickDelete = (id: any) => {
    dispatch(removeTodo(id) as any);
  };
  return (
    <div>
      <H3>Todo list</H3>
      <Input value={todoInput} onChange={changeHandler} />

      {!editFormVisibility ? (
        // <button type="button" onClick={onClickAdd}>
        //   Add
        // </button>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={onClickAdd }
         
        >
          Add
        </Button>
      ) : (
        // <button type="button" onClick={onClickUpdate}>
        //   Update
        // </button>
        <Button
          variant="contained"
          color="inherit"
          type="button"
          onClick={onClickUpdate}
          
        >
          Update
        </Button>
      )}

      <div>
        {todo_list.map((each: any) => (
          <ul key={each.id}>
            <li>{each.todoItem}</li>
            {/* <button type="button" onClick={() => handleEditClick(each)}>
              Edit
            </button> */}
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              type="button"
              onClick={() => handleEditClick(each)}
            >
              Edit
            </Button>
            {/* <button type="button" onClick={() => onClickDelete(each.id)}>
              Delete
            </button> */}
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              type="button"
              onClick={() => onClickDelete(each.id)}
              >
              Delete
            </Button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todolis;
