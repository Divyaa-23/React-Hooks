import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
//lazy initialization
  const getInitialTasks = () => {
    const initialTasks = localStorage.getItem("toDoList")
      ? JSON.parse(localStorage.getItem("toDoList"))
      : [];
    return initialTasks;
  };
  const [item, setItem] = useState("");   //lazy initialization
 

/*   const [toDoList, setToDo] = useState([]); */
const [toDoList, setToDo] = useState(getInitialTasks);

  const addItem = () => {
    setToDo([...toDoList, item]);
    setItem("");
  };
  const removeItems = (event) => {
    let temp = toDoList;
    let index = event.target.dataset.index;
    temp.splice(index, 1);
    setToDo([...temp]);
  };

/*   useEffect(() => {
    if (
      localStorage.getItem("toDoList") !== null &&
      localStorage.getItem("toDoList") !== ""
    ) {
      console.log("comment");
      console.log(JSON.parse(localStorage.getItem("toDoList")));
      setToDo(JSON.parse(localStorage.getItem("toDoList")));
    }
  }, []); */
  useEffect(() => {
    if (toDoList.length > 0) {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  }, [toDoList]);

  return (
    <div>
      <h1>You have {toDoList.length} items</h1>
      <h2>List Items:</h2>
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>
            {item}
            <button data-index={index} onClick={removeItems}>
              Done
            </button>
          </li>
        ))}
      </ul>
      <input onChange={(e) => setItem(e.target.value)} value={item} />

      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
