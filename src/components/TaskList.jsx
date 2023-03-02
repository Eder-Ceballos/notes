import TasksCard from "./TasksCard";
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-2xl text-center font-bold">
        No hay tareas aun
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TasksCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
