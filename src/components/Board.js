import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Card from "./Card";
import Dropdown from "./Dropdown";
import Editable from "./Editable";
import { useState } from "react";

const Board = ({ boardData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="w-1/4 min-w-1/4 h-full max-h-full flex flex-col gap-3">
      <header className="mx-4 text-orange flex justify-between">
        <div className="text-lg w-max">
          {boardData?.title}{" "}
          <span className="text-gray-400 m-2">{boardData?.cards.length}</span>
        </div>

        <div className="relative">
          <IoEllipsisHorizontalSharp
            size="1.5em"
            className="cursor-pointer"
            onClick={() => setShowDropdown(true)}
          />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <p>Delete</p>
            </Dropdown>
          )}
        </div>
      </header>
      <div className="custom-scrollbar bg-yellow-100 p-3 rounded-lg flex flex-col gap-4 h-full overflow-y-auto flex-1">
        {boardData?.cards.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Add task title..."
          callingComponent="board"
        />
      </div>
    </div>
  );
};

export default Board;
