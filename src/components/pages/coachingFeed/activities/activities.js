import SessionSidebar from "./sessionSidebar/sessionSidebar";
import AddElements from "./addElements/addElements";
import NoteBook from "./noteBook/noteBook";

const Activities = () => {
  return (
    <>
      <div className="flex flex-col gap-y-7 lg:flex-row items-start lg:gap-x-5 min-h-[50vh]">
        {/* Session side bar */}
        <div className="bg-white rounded-xl lg:w-[248px] py-4 px-3 h-auto self-stretch relative">
          <SessionSidebar />
        </div>
        {/* Add Elements */}
        <div className="w-full lg:flex-1 lg:mb-14">
          <AddElements />
        </div>
        {/* Note Book */}
        <div className="mb-10 overflow-hidden w-full lg:w-[264px] p-3 rounded-lg bg-white lg:mr-8">
         <NoteBook />
        </div>
      </div>
    </>
  );
};

export default Activities;
