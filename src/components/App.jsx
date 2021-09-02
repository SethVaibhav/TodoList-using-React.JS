import React, { useState } from "react";

function App() {
  const [InputText, setInput] = useState("");
  const [items, setItems] = useState([]);
  function handleText(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }
  function handleItems() {
    setItems((prev) => {
      return [...prev, InputText];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleText} value={InputText} />
        <button onClick={handleItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
