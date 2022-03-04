import React from "react";

const Input = (props) => {
  if (props.isEdit) {
  } else {
    return (
      <div className="input">
        <textarea
          id="task"
          placeholder="Add Task"
          value={props.input}
          onChange={props.handleChange}
        ></textarea>
        <button id="btn" onClick={props.addTask}>
          +
        </button>
      </div>
    );
  }
};

export default Input;
