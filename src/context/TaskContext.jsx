import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
