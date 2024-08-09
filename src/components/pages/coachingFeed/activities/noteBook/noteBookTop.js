"use client";
import { EzyArrowDropDown } from "@/components/icons/Icons";
import { GoPlus } from "react-icons/go";

const NoteBookTop = ({ setIsExpandNote, isExpandNote }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpandNote(!isExpandNote)}
          className="text-xl font-semibold"
        >
          <EzyArrowDropDown className={`${isExpandNote ? 'rotate-0' : "-rotate-90"}`} />
        </button>
        <h6 className="text-base font-semibold">Note Book</h6>
        {/* Add note button */}
        <button className="p-2 border rounded-lg">
          <GoPlus className="text-base" />
        </button>
      </div>
    </>
  );
};

export default NoteBookTop;
