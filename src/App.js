import Button from "./components/Button";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import data from "./data/data.json";
import Form from "./components/Form";
import Item from "./components/Item";

function App() {
  const [tasks, setTasks] = useState(data);
  useEffect(() => {
    console.log("App component rerendered");
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
