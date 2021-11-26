import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import Label from "./Label";
import { useState } from "react";

const Card = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="bg-yellow-50 flex flex-col gap-4 p-4 rounded-lg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <header className="flex w-full">
        <div className="flex flex-1 gap-2 flex-wrap">
          <Label text="a" color="red" close={false} />
          <Label text="jb" color="green" close={false} />
          <Label text="jb" color="green" close={false} />
          <Label text="jb" color="green" close={false} />
          <Label text="jb" color="green" close={false} />
          <Label text="jb" color="green" close={true} />
        </div>
        <IoEllipsisHorizontalSharp
          size="1.3rem"
          className={
            isHover
              ? "justify-self-end cursor-pointer opacity-100 transition-opacity"
              : "justify-self-end cursor-pointer opacity-0 transition-opacity"
          }
        />
      </header>

      <div>title</div>

      <footer className="flex justify-between mt-4 text-gray-500 font-medium">
        <span className="flex items-center w-max">
          <BsCalendarDate className="inline-block" />
          <span className="text-sm">&nbsp;26 Nov</span>
        </span>
        <span className="flex items-center w-max">
          <FiCheckSquare className="inline-block" />
          <span className="text-sm">&nbsp;1/3</span>
        </span>
      </footer>
    </div>
  );
};

export default Card;
