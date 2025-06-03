import React from "react";
import "../index.css";

import { useState } from "react";

const Task = ({ text }) => {
  const [value, setValue] = useState("Editing task");

  return (
    <>
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{text}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>

      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Editing task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input
          type="text"
          className="edit"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </li>

      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">Active task</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    </>
  );
};

export default Task;
