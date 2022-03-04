import React from "react";

const Edit = (props) => {
  return (
    <div className="edit-box">
      <textarea
        className="editTask"
        value={props.edited}
        onChange={props.handleEditChange}
        placeholder="Edit Task"
      ></textarea>
      <button
        className="saveTask"
        onClick={() => props.saveTask(props.editID)}
        disabled={props.edited.length === 0}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
