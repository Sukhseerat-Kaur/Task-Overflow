import { useState } from "react";
const Editable = ({
  text,
  addBtnText,
  placeholder,
  onSubmitHandler,
  callingComponent,
  btnColor,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div
      className={
        showEdit
          ? "w-full flex justify-center border-2 border-yellow-300 py-6 rounded-lg transition-all"
          : "w-full flex justify-center transition-all"
      }
    >
      {showEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (onSubmitHandler) onSubmitHandler();
          }}
          className="w-3/4 flex justify-center flex-col gap-3"
        >
          <input
            autoFocus
            type="text"
            required
            placeholder={placeholder || "Enter Item"}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-md h-9 p-2 focus:outline-blue focus:border-transparent"
          />
          <div className="flex items-center w-full justify-center gap-5 text-gray-100">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-sm"
            >
              {addBtnText || "Add"}
            </button>
            <button
              className="px-3 py-1 rounded-sm bg-red-700 hover:bg-red-800"
              onClick={() => setShowEdit(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <p
          className="cursor-pointer bg-orange py-2 px-4 text-xl font-medium rounded-2xl flex items-center justify-center w-3/4 text-gray-100 hover:bg-orangeDark"
          style={{ backgroundColor: btnColor ? btnColor : "" }}
          onClick={() => setShowEdit(true)}
        >
          {text || "+ Add Card"}
        </p>
      )}
    </div>
  );
};

export default Editable;
