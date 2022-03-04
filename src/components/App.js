import React, { useState } from "react";
import "./../styles/App.css";
import Edit from "./Edit";
import Input from "./Input";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [edited, setEdited] = useState("");
  const [editID, setEditID] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.length === 0) {
      return;
    }
    setItems((item) => {
      return [...item, input];
    });
    setInput("");
  };

  const editTask = (index) => {
    setIsEdit(true);
    let eID = 0;
    items.filter((item, id) => {
      if (id === index) {
        setEditID(id);
        eID = id;
      }
      return editID;
    });

    setEdited(items[eID]);
  };

  const handleEditChange = (e) => {
    setEdited(e.target.value);
  };

  const saveTask = (index) => {
    setIsEdit(false);
    setEdited("");

    setItems((old) => old.map((item, id) => (id === index ? edited : item)));
  };

  const removeTask = (index) => {
    const updatedItems = items.filter((item, id) => {
      return id !== index;
    });

    setItems(updatedItems);
  };

  return (
    <div id="main">
      {isEdit ? (
        <Edit
          handleEditChange={handleEditChange}
          edited={edited}
          saveTask={saveTask}
          editID={editID}
        />
      ) : (
        <>
          <Input input={input} handleChange={handleChange} addTask={addTask} />
          <ol>
            {items.map((item, index) => (
              <li className="list" key={index}>
                {item}
                {
                  <div className="ab">
                    <button className="edit" onClick={() => editTask(index)}>
                      Edit
                    </button>{" "}
                    <button
                      className="delete"
                      onClick={() => removeTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                }
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default App;
