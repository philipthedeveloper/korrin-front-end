import React from "react";

const SmallButton = ({ text }) => {
  return (
    <button className="cursor-pointer p-3 min-w-[150px] max-w-fit block bg-mainColor text-white text-[16px] font-bold rounded-[4px] shadow-md">
      {text}
    </button>
  );
};

const LargeButton = ({ text }) => {
  return (
    <button className="cursor-pointer p-3 min-w-[120px] sm:min-w-[250px] max-w-fit block bg-mainColor text-white text-[16px] font-bold rounded-[4px] shadow-md">
      {text}
    </button>
  );
};

export { SmallButton, LargeButton };
