import React, { useState } from "react";
import { FiType, FiCheckSquare } from "react-icons/fi";
import { BsTextParagraph, BsCalendar2Date, BsTag } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Label from "../Label";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/cardActions";

const Modal = ({ onCloseModal, cardData, cardIndex, boardIndex }) => {
  const dispatch = useDispatch();

  const colors = [
    "red",
    "#4fcc25",
    "#1ebffa",
    "#9975bd",
    "#cf61a1",
    "green",
    "#240959",
  ];

  const [data, setData] = useState({
    id: cardData?.id,
    title: cardData?.title,
    desc: cardData?.desc ? cardData?.desc : "",
    date: cardData?.date,
    labels: cardData?.labels ? cardData?.labels : [],
    tasks: cardData?.tasks ? cardData.tasks : [],
  });

  const [activeColor, setActiveColor] = useState("red");
  const [labelName, setLabelName] = useState("");
  const [taskName, setTaskName] = useState("");

  console.log("cardData", cardData);

  const onChangeData = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addLabel = () => {
    if (!labelName) return;
    const labelObj = {
      text: labelName,
      color: activeColor,
    };

    setData({ ...data, labels: [...data.labels, labelObj] });
    setLabelName("");
  };

  const deleteLabel = (labelIndex) => {
    let newLabels = [...data.labels];
    newLabels.splice(labelIndex, 1);
    setData({ ...data, labels: newLabels });
  };

  const addTask = () => {
    if (!taskName) return;
    const taskObj = {
      id: data?.tasks.length + Math.floor(Math.random() * 1000 + 1),
      taskName: taskName,
      completed: false,
    };
    setData({ ...data, tasks: [...data.tasks, taskObj] });
    setTaskName("");
  };

  const markTaskCompleted = (taskIndex) => {
    let newTasks = [...data.tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setData({ ...data, tasks: newTasks });
  };

  const deleteTask = (taskIndex) => {
    let newTasks = [...data.tasks];
    newTasks.splice(taskIndex, 1);
    setData({ ...data, tasks: newTasks });
  };

  const calculateProgressPercentage = () => {
    if (data?.tasks.length === 0) return "0";
    const numTotalTasks = data?.tasks?.length;
    const numCompletedTasks = data?.tasks?.filter(
      (task) => task.completed
    )?.length;

    return (numCompletedTasks / numTotalTasks) * 100 + "";
  };

  const onSubmitHandler = () => {
    dispatch(updateCard(cardIndex, boardIndex, data));
    onCloseModal();
  };

  return (
    <div
      className="modal-bg fixed top-0 left-0 h-screen w-full flex justify-center items-center ease-linear duration-300"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
      onClick={(e) => (onCloseModal ? onCloseModal() : "")}
    >
      <div
        className="modal custom-scrollbar bg-yellow-100 rounded-lg overflow-y-auto p-6 w-1/3"
        style={{ maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-box flex flex-col gap-4">
          <div className="title-info-box flex flex-col">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-9 justify-center">
                <FiType size="1.5em" />
              </span>
              <span className="text-2xl"> Title</span>
            </div>
            <input
              type="text"
              name="title"
              value={data?.title}
              placeholder="Enter task title"
              onChange={onChangeData}
              className="bg-yellow-50 h-9 w-1/2 p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
            />
          </div>

          <div className="desc-info-box flex flex-col">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-9 justify-center">
                <BsTextParagraph size="1.5em" />
              </span>
              <span className="text-2xl"> Description</span>
            </div>
            <textarea
              rows="1"
              name="desc"
              value={data?.desc}
              placeholder="Add task description"
              onChange={onChangeData}
              className="bg-yellow-50 min-h-max p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
            />
          </div>

          <div className="date-info-box flex flex-col">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-10 justify-center">
                <BsCalendar2Date size="1.5em" />
              </span>
              <span className="text-2xl"> Date</span>
            </div>
            <input
              type="date"
              name="date"
              value={
                data?.date
                  ? new Date(data?.date).toISOString().substr(0, 10)
                  : ""
              }
              onChange={onChangeData}
              className="bg-yellow-50 h-9 w-1/2 p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
            />
          </div>

          <div className="labels-info-box flex flex-col gap-2">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-10 justify-center">
                <BsTag size="1.5em" />
              </span>
              <span className="text-2xl"> Labels</span>
            </div>
            <div className="info-data flex flex-col gap-2">
              <div className="labels flex gap-3 flex-wrap">
                {data?.labels?.map((labelObj, idx) => {
                  return (
                    <Label
                      key={idx}
                      labelData={labelObj}
                      showClose={true}
                      onDelete={() => deleteLabel(idx)}
                    />
                  );
                })}
              </div>
              <div className="colors flex gap-5">
                {colors.map((color, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{ backgroundColor: color }}
                      className={
                        color === activeColor
                          ? "h-6 w-6 rounded-full cursor-pointer border-4 border-yellow-300 ease-linear duration-200"
                          : "h-6 w-6 rounded-full cursor-pointer ease-linear duration-200"
                      }
                      onClick={() => setActiveColor(color)}
                    />
                  );
                })}
              </div>
              <div className="label-input flex gap-2 h-9">
                <input
                  type="text"
                  name="labelName"
                  value={labelName}
                  placeholder="Enter Label..."
                  onChange={(e) => setLabelName(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") addLabel();
                  }}
                  className="bg-yellow-50 h-full w-1/2 p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
                />

                <button
                  onClick={addLabel}
                  className="bg-orange py-2 px-4 flex items-center justify-center text-gray-100 hover:bg-orangeDark h-fit rounded w-fit"
                >
                  Add Label
                </button>
              </div>
            </div>
          </div>

          <div className="tasks-info-box flex flex-col gap-1">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-9 justify-center">
                <FiCheckSquare size="1.5em" />
              </span>
              <span className="text-2xl"> Tasks</span>
            </div>
            <div className="progress-bar w-full h-3 rounded-2xl border border-orange">
              <div
                className="progress bg-orange h-full rounded-2xl ease-linear duration-300"
                style={{ width: calculateProgressPercentage() + "%" }}
              />
            </div>
            <div className="task-list flex flex-col">
              {data?.tasks.map((taskObj, idx) => {
                return (
                  <div key={idx} className="task flex items-center gap-2 p-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      defaultChecked={taskObj.completed}
                      onChange={() => markTaskCompleted(idx)}
                    />
                    <p className="flex-1">{taskObj.taskName}</p>
                    <span>
                      <FaTrash
                        className="cursor-pointer text-orange"
                        onClick={() => deleteTask(idx)}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="task-input flex gap-2 h-9">
              <input
                type="text"
                name="taskName"
                value={taskName}
                placeholder="Enter Task..."
                onChange={(e) => setTaskName(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") addTask();
                }}
                className="bg-yellow-50 h-full w-1/2 p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
              />

              <button
                onClick={addTask}
                className="bg-orange py-2 px-4 flex items-center justify-center text-gray-100 hover:bg-orangeDark h-fit rounded w-fit"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            onClick={onSubmitHandler}
            className="bg-blue-800 hover:bg-blue-900 py-1 px-2 flex items-center justify-center text-gray-100 h-fit rounded w-fit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
