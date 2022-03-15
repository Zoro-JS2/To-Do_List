import React, { useState, useEffect, useRef } from "react";
import "../App.css";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setCounter(counter + 1);
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 255),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add your new ToDo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
            disabled={input.length > 256}
          />
          <button
            onClick={handleSubmit}
            className="todo-button"
            title="Add Item"
          >
            +
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
