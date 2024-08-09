"use client";
import NoteBookTop from "./noteBookTop";
import { Divider } from "antd";
import NoteBookContent from "./noteBookContent";
import { useState } from "react";

const NoteBook = () => {
  const [isExpandNote, setIsExpandNote] = useState(false);
  return (
    <>
      {/* top */}
      <NoteBookTop setIsExpandNote={setIsExpandNote} isExpandNote={isExpandNote} />
      <div className={`${isExpandNote ? 'h-full block' : 'h-0 hidden'} transition-all ease-in-out duration-300`}>
        <Divider className="my-4" />
        {/* cards */}
        <NoteBookContent />
      </div>
    </>
  );
};

export default NoteBook;
