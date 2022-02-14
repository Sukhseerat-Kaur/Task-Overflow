import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import Label from "./Label";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../actions/cardActions";
import Modal from "./Modal";

const Card = ({ cardData, boardIndex, cardIndex, provided }) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="bg-yellow-50 flex flex-col gap-4 p-4 rounded-lg"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setShowModal(true)}
      >
        <header className="flex w-full">
          <div className="flex flex-1 gap-2 flex-wrap">
            {cardData?.labels?.map((label, index) => (
              <Label key={index} labelData={label} showClose={false} />
            ))}
          </div>
          <div className="relative">
            <IoEllipsisHorizontalSharp
              size="1.3rem"
              className={
                isHover
                  ? "cursor-pointer opacity-100 transition-opacity"
                  : "cursor-pointer opacity-0 transition-opacity"
              }
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(true);
              }}
            />
            {showDropdown && (
              <Dropdown
                onClose={() => setShowDropdown(false)}
                handleOnClick={() =>
                  dispatch(deleteCard(cardIndex, boardIndex))
                }
              >
                <p>Delete</p>
              </Dropdown>
            )}
          </div>
        </header>

        <div>{cardData?.title}</div>

        <footer className="flex justify-between mt-4 text-gray-500 font-medium">
          {cardData.date && (
            <span className="flex items-center w-max">
              <BsCalendarDate className="inline-block" />
              <span className="text-sm">&nbsp;{cardData?.date}</span>
            </span>
          )}
          <span className="flex items-center w-max">
            <FiCheckSquare className="inline-block" />
            <span className="text-sm">&nbsp;1/3</span>
          </span>
        </footer>
      </div>
      {showModal && (
        <Modal
          onCloseModal={() => {
            setShowModal(false);
          }}
          cardData={cardData}
          cardIndex={cardIndex}
          boardIndex={boardIndex}
        />
      )}
    </>
  );
};

export default Card;
