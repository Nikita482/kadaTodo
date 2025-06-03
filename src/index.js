import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import NewTaskForm from "./com/NewTaskForm";
import TaskList from "./com/TaskList";
import Footer from "./com/Footer";

const App = () => {
  return (
    <div className="todoapp">
      <NewTaskForm />
      <TaskList />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
