import React, { useState } from "react";
import {
  addTodo,
  deleteAll,
  handleEditSubmit,
  removeTodo,
  handleCheckbox,
} from "../redux/actions/Homeactions";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { width } from "@mui/system";

const Input = styled.input`
  height: 35px;
  margin-left: 40px;
`;
const H3 = styled.h3`
  height: 35px;
  margin-left: 40px;
  color: black;
`;


const Todolis = () => {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  const [editItemId, setEditItemId] = useState("");
const [checked,setChecked]=useState(false);
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const changeHandler = (event: any) => {
    setTodoInput(event.target.value);
  };

  const todo_list = useSelector((state: RootState) => state.home);

  const onClickAdd = () => {
    const newTodoObj = {
      id: todo_list.length,
      todoItem: todoInput,
      isSelected: false,
    };

    dispatch(addTodo(newTodoObj) as any);
    setTodoInput("");
  };

  const handleEditClick = (todo: any) => {
    setEditFormVisibility(true);
    setTodoInput(todo.todoItem);
    setEditItemId(todo.id);
  };

  const OnCheckboxClicked = (todo: any) => {
 setChecked(!checked)
dispatch(handleCheckbox({ ...todo, isSelected: !todo.isSelected }) as any);
  };

  const onClickUpdate = () => {
   
    const editdata = todo_list.filter((each: any) => each.id == editItemId);
    const editedObj = {
      id: editItemId,
      todoItem: todoInput,
      isSelected:editdata.isSelected
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
          onClick={onClickAdd}
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
          <ul key={each.id} >
            <input
              type="checkbox"
              value={each.isSelected}
              onChange={() => OnCheckboxClicked(each)}
            />
            <li  style={{background:each.isSelected?"grey":"",width: "fit-content"}}>{each.todoItem }</li>
            {/* <button type="button" onClick={() => handleEditClick(each)}>
              Edit
            </button> */}
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              type="button"
              onClick={() => handleEditClick(each)}
              style={{background:each.isSelected?"grey":""}}
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
              onClick={() => onClickDelete(each.id) }
              style={{background:each.isSelected?"grey":""}}
            >
              Delete
            </Button>
          </ul>
        ))}
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          type="button"
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default Todolis;
