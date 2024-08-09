import { IoMdMore } from "react-icons/io";

const NoteBookContent = () => {
  return (
    <>
      <div className="space-y-4">
        {/* item 1 */}
        <div className="bg-[var(--ezyGray100)] p-3 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-base">Morning Exercise</h5>
            <button className="text-lg">
              <IoMdMore />
            </button>
          </div>
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">20 Feb 2024</p>
            <p className="font-medium text-sm">06: 30am</p>
          </div>
        </div>
        {/* item 2 */}
        <div className="bg-[var(--ezyGray100)] p-3 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="font-medium text-base">Morning Exercise</h5>
            <button className="text-lg">
              <IoMdMore />
            </button>
          </div>
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">20 Feb 2024</p>
            <p className="font-medium text-sm">06: 30am</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteBookContent;
