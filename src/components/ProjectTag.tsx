"use client";
import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-primary border-primary"
    : "text-gray-400 border-transparent hover:text-gray-200";
  return (
    <button
      className={`${buttonStyles} font-medium py-4 border-b-2 cursor-pointer text-base leading-6`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
