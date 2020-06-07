import React, { useState } from "react";
import "./App.css";

function Topack({ topack, index, completeTopack, removeTopack }) {
  return (
    <div
      className="topack"
      style={{ textDecoration: topack.isCompleted ? "line-through" : "" }}
    >
      {topack.text}

      <div>
        <button onClick={() => completeTopack(index)}>Complete</button>
        <button onClick={() => removeTopack(index)}>x</button>
      </div>
    </div>
  );
}

function TopackForm({ addTopack }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTopack(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTopacks] = useState([
    {
      text: "Shoes",
      isCompleted: false
    },
    {
      text: "Slippers",
      isCompleted: false
    },
    {
      text: "Sunglasses",
      isCompleted: false
    },
    {
      text: "Charger",
      isCompleted: false
    }
  ]);

  const addTopack= text => {
    const newTopacks = [...todos, { text }];
    setTopacks(newTopacks);
  };

  const completeTopack = index => {
    const newTopacks = [...todos];
    newTopacks[index].isCompleted = true;
    setTopacks(newTopacks);
  };

  const removeTopack = index => {
    const newTopacks = [...todos];
    newTopacks.splice(index, 1);
    setTopacks(newTopacks);
  };

  return (
    <div className="app">
      <div className="topack-list">
        {todos.map((topack, index) => (
          <Topack
            key={index}
            index={index}
            topack={topack}
            completeTopack={completeTopack}
            removeTopack={removeTopack}
          />
        ))}
        <TopackForm addTopack={addTopack} />
      </div>
    </div>
  );
}

export default App