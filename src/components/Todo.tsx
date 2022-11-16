import React, { Component } from "react";
export default class Todo extends Component {
  render() {
    return (
      <>
        <div>
          <input type="text" name="Enter details" />
          <button>Add </button>
        </div>

        <div>
          <button>Delete </button>
        </div>
      </>
    );
  }
}
