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
import Popup from "./Popup";

const Input = styled.input`
  height: 30px;
  margin-left: 400px;
  width: 350px;
  margin-top: 50px;
`;
const H3 = styled.h3`
  height: 35px;
  margin-left: 40px;
  color: black;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
`;
const Div = styled.div`
  margin-left: 400px;
  margin-top: 40px;
  font-size: 20px;
  border: 1px solid black;
  width: 480px;
  height: 35px;
  border-radius: 5px;
  height: 70px;
  font-size: 20px;
`;
const Input1 = styled.input`
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 50px;
`;
const Divcontainer = styled.div`
  background-color: rgb(255, 245, 238);
  width: 1280px;
  height: 38rem;
  margin-top: -32px;
`;
const Todolis = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editdata, setEditdata] = useState({});
  const [todoInput, setTodoInput] = useState("");
  const [editItemId, setEditItemId] = useState("");
  const [checked, setChecked] = useState(false);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [description, setDescription] = useState("");

  // const changeHandler = (event: any) => {
  //   setTodoInput(event.target.value);
  // };

  const todo_list = useSelector((state: RootState) => state.home);

  const handleEditClick = (todo: any) => {
    setEditdata(todo);
    setModalOpen(true);
    setEditFormVisibility(true);
    setTodoInput(todo.todoItem);
    setEditItemId(todo.id);
    setDescription(todo.description)
    
  };

  const OnCheckboxClicked = (todo: any) => {
    setChecked(!checked);
    dispatch(handleCheckbox({ ...todo, isSelected: !todo.isSelected }) as any);
  };

  const onClickDelete = (id: any) => {
    dispatch(removeTodo(id) as any);
  };
  return (
    <>
      <Divcontainer>
        <H3>Todo List</H3>
        <Input type="text" placeholder="click on Button to fill the data" />
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => setModalOpen(true)}
          style={{ width: 130, background: "grey", height: 30 }}
        >
          Add Task
        </Button>

        <div>
          {todo_list.map((each: any) => (
            <Div
              key={each.id}
              style={{
                background: each.isSelected ? "#646464" : "",
              }}
            >
              <Input1
                type="checkbox"
                value={each.isSelected}
                onChange={() => OnCheckboxClicked(each)}
              />
              <div
                style={{
                  width: "fit-content",
                  marginLeft: 45,
                  marginTop: -25,
                }}
              >
                {each.todoItem}
                <div>{each.description}</div>
              </div>

              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                type="button"
                onClick={() => handleEditClick(each)}
                sx={{
                  mt: -7,
                  ml: 33,
                  height: 25,
                  color: "black",
                  border: "black",
                }}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                type="button"
                onClick={() => onClickDelete(each.id)}
                sx={{
                  float: "right",
                  mt: -3,
                  height: 25,
                  color: "black",
                  border: "black",
                }}
              >
                Delete
              </Button>
            </Div>
          ))}
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            type="button"
            onClick={() => dispatch(deleteAll())}
            sx={{
              width: 500,
              background: "rgb(255,245,238)",
              mt: 10,
              ml: 50,
              height: 30,
              color: "black",
              border: 1,
            }}
          >
            Delete All
          </Button>
          {modalOpen ? (
            <Popup setModalOpen={setModalOpen} editdata={editdata} />
          ) : (
            ""
          )}
        </div>
      </Divcontainer>
    </>
  );
};

export default Todolis;
