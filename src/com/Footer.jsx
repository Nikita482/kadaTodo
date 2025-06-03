import React from "react";
import "../index.css";

import TasksFilter from "./TasksFilter";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <TasksFilter />
      </footer>
    </>
  );
};

export default Footer;
