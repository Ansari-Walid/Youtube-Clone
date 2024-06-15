import React from "react";

const LeftNavMenuItem = ({ text, icon, event, className }) => {
  return (
    <div
      className={
        "text-white text-m h-10 cursor-pointer flex items-center px-3 mb-[2px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={event}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
