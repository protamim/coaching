"use client";
import { useState } from "react";

const CoachingFilter = () => {
  const [isActive, setIsActive] = useState("All");
  const handleClick = (current) => {
    setIsActive(current);
  };

  return (
    <>
      <button
        onClick={() => handleClick("All")}
        className={`${
          isActive === 'All' ? "bg-white text-black" : "bg-transparent text-[var(--ezyGray500)]"
        } rounded-md py-2 px-3 text-base font-medium transition-all ease-in-out duration-300`}
      >
        All
      </button>
      <button
        onClick={() => handleClick("Group")}
        className={`${
          isActive === 'Group' ? "bg-white text-black" : "bg-transparent text-[var(--ezyGray500)]"
        } rounded-md py-2 px-3 text-base font-medium transition-all ease-in-out duration-300`}
      >
        Group
      </button>
      <button
        onClick={() => handleClick("Individual")}
        className={`${
          isActive === 'Individual' ? "bg-white text-black" : "bg-transparent text-[var(--ezyGray500)]"
        } rounded-md py-2 px-3 text-base font-medium transition-all ease-in-out duration-300`}
      >
        Individual
      </button>
    </>
  );
};

export default CoachingFilter;
