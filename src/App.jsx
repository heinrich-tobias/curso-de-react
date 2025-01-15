import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     { method: "GET" }
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   setTasks(data);
    // };
    //fetchTasks();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="bg-slate-400 w-96 h-auto rounded-lg p-6 space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <br />
        <AddTask onTaskAdd={onTaskAdd} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
