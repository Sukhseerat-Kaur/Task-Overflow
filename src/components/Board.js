import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Card from "./Card";
import Editable from "./Editable";

const Board = () => {
  return (
    <div className="w-1/4 h-full max-h-full flex flex-col">
      <header className="mx-4 text-orange flex justify-between">
        <div className="text-lg w-max">
          To Do <span className="text-gray-400 m-2">1</span>
        </div>

        <IoEllipsisHorizontalSharp size="1.5em" className="cursor-pointer" />
      </header>
      <div className="custom-scrollbar bg-yellow-100 p-3 rounded-lg flex flex-col gap-4 h-full overflow-y-auto flex-1">
        <Card />
        <Card />
        <Editable
          text="+ Add Card"
          placeholder="Add title..."
          callingComponent="board"
        />
      </div>
    </div>
  );
};

export default Board;
