import React, { useState } from "react";
import { FiType } from "react-icons/fi";
import { BsTextParagraph, BsCalendar2Date, BsTag } from "react-icons/bs";
import Label from "../Label";

const Modal = ({ onClose, cardData }) => {
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
    desc: cardData?.desc,
    date: cardData?.date,
    labels: cardData?.labels,
    tasks: cardData?.tasks ? cardData.tasks : [],
  });

  const [activeColor, setActiveColor] = useState("");
  const [labelName, setLabelName] = useState("");

  console.log(data);

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

  return (
    <div
      className="modal-bg fixed top-0 left-0 h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
      onClick={(e) => (onClose ? onClose() : "")}
    >
      <div
        className="modal bg-yellow-100 rounded-lg overflow-y-auto p-6 w-1/3"
        style={{ maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-box flex flex-col gap-5">
          {/* <InfoBox
            infoHeading={"Title"}
            data={data}
            setData={setData}
            propertyName="title"
          >
            <FiType size="1.5em" />
          </InfoBox> */}

          <div className="title-info-box flex flex-col gap-1">
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

          <div className="desc-info-box flex flex-col gap-1">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-9 justify-center">
                <BsTextParagraph size="1.5em" />
              </span>
              <span className="text-2xl"> Description</span>
            </div>
            <textarea
              rows="2"
              name="desc"
              value={data?.desc}
              placeholder="Add task description"
              onChange={onChangeData}
              className="bg-yellow-50 min-h-max p-3 rounded border-2 border-yellow-300 focus:outline-blue focus:border-transparent"
            />
          </div>

          <div className="date-info-box flex flex-col gap-1">
            <div className="info-heading flex items-center">
              <span className="inline-flex w-10 justify-center">
                <BsCalendar2Date size="1.5em" />
              </span>
              <span className="text-2xl"> Date</span>
            </div>
            <input
              type="date"
              name="date"
              value={new Date(data?.date).toISOString().substr(0, 10)}
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
            <div className="info-data flex flex-col gap-3">
              <div className="labels flex gap-3 flex-wrap">
                {data?.labels?.map((labelObj, idx) => {
                  return (
                    <Label key={idx} labelData={labelObj} showClose={true} />
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
