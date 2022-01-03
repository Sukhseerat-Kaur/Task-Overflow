import React, { useEffect, useRef } from "react";

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (dropdownRef && !dropdownRef.current?.contains(e.target)) {
      if (props.onClose) props.onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      className="absolute top-full right-0 bg-blue-900 py-2 px-6 text-gray-100 cursor-pointer shadow-md rounded-sm"
      ref={dropdownRef}
      onClick={props.handleOnClick}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
