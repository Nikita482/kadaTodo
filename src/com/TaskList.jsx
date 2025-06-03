import React from "react";
import "../index.css";

import Task from "./Task";

const TaskList = () => {
  return (
    <>
      <ul className="todo-list">
        <Task text="Completed task" time="created 17 seconds ago" />
      </ul>
    </>
  );
};

export default TaskList;
