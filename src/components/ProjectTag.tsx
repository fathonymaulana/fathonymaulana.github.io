import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-emerald-800 border-emerald-800"
    : "text-gray-500 bg-transparent border-gray-300";
  return (
    <button
      className={`${buttonStyles} gap-2 px-8 py-2 text-base border-2 rounded-full hover:bg-emerald-800 text-gray-500 hover:text-white flex items-center justify-center cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
