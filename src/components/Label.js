import { FiX } from "react-icons/fi";

const Label = ({ labelData, showClose }) => {
  return (
    <div
      className="inline-flex justify-center items-center w-max px-2 rounded-2xl text-gray-100"
      style={{ backgroundColor: labelData?.color }}
    >
      {labelData?.text}
      {showClose && <FiX size="0.9rem" className="ml-2 cursor-pointer" />}
    </div>
  );
};

export default Label;
