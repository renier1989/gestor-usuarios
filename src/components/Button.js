import React from "react";

function Button({ children }) {
  return (
    <div className="flex items-center justify-center">
      <button className="transition duration-500 ease-in-out bg-[#2185D0] rounded-lg text-white py-2 px-4 font-semibold cursor-pointer text-lg hover:bg-[#1678c2]  w-[50%] flex items-center justify-center">
        {children}
      </button>
    </div>
  );
}

export default Button;
