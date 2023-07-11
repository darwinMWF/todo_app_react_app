import { useState, useReducer } from "react";

import TaskList from "./taklist";
import AddTask from "./addtask";

const listtaskReducer = (tasks, action) => {
  // action--> dispatch
  if (action.type === "add") {
    return [
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ];
  } else if (action.type === "change") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "delete") {
    return tasks.filter((t) => t.id !== action.taskId);
  }
};

const NewApp = () => {
  //   const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(listtaskReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "change",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      taskId: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default NewApp;
