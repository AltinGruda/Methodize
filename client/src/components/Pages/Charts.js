import React, { useContext, useEffect, useState } from "react";
import TopNavBarTask from "../NavigationBar/TopNavBarTask";
import PopOutTaskDetails from "../PopOutMenu/PopOutTaskDetails";
import AddTaskPopOutTaskPage from "../PopOutMenu/AddTaskPopOutTaskPage";
import BarChart from "./BarChart";
import { Context as TaskContext } from "../../context/store/TaskStore";

const Charts = () => {
  const [taskState, taskdispatch] = useContext(TaskContext);
  const numTask = taskState.tasks.filter((task) => task.completed === true);
  const numTaskNotCompleted = taskState.tasks.filter((task) => task.completed === false);

  const [taskData, setTaskData] = useState({
    labels: ["", ""],
    datasets: [
      {
        label: "Tasks Completed",
        data: [numTask.length],
        backgroundColor: [
          "rgba(75,192,192,1)"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Tasks Not Completed",
        data: [numTaskNotCompleted.length],
        backgroundColor: [
          "#ecf0f1"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  })
  return (
    <>
    <TopNavBarTask />
    <div className="tasks-container">
        <div className="tasks-container-header">
          <div className="tasks-inner-container">
            <div style={{ width: 700 }}>
              <BarChart taskData={taskData} />
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Charts;
