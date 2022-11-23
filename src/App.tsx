import { useState } from "react";
import { Form } from "../src/components/Form";
import { Todolis } from "./components/Todolis";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/actions/Homeactions";

function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const Form = useSelector((state) => state.Homereducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // editTodo state
  const [editTodo, setEditTodo] = useState("");

  // this function will trigger when someone clicks the edit icon
  const handleEditClick = (Form: any) => {
    setEditFormVisibility(true);
    setEditTodo(Form);
  };

  // back button click
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div className="wrapper">
      <br></br>
      <h1>TODO-APP USING REACT-REDUX</h1>
      <Todolis
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Form
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {Todolis.length > 1 && (
        <button onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
