import React from "react";
import "../index.css";

import Task from "./Task";

const TaskList = () => {
  return (
    <>
      <ul className="todo-list">
        <Task text="Completed task" />
      </ul>
    </>
  );
};

export default TaskList;
