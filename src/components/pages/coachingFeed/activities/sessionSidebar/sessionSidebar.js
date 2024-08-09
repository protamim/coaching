import { Button, Collapse, Divider } from "antd";
import { GoPlus } from "react-icons/go";
import {
  RiArrowRightSFill,
  RiDeleteBin7Line,
  RiEdit2Line,
} from "react-icons/ri";
import AddSession from "./addSession";

const SessionSidebar = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="min-h-52">
        {/* title */}
        <h4 className="pb-1 text-base font-medium">UI/UX Design Learning</h4>
        <Divider className="mt-2 mb-6" />
        <div className="mb-12">
          <Collapse
            className="bg-[--ezyGray50]"
            bordered={false}
            items={items}
            expandIcon={({ isActive }) => (
              <RiArrowRightSFill
                style={isActive ? { rotate: "90deg" } : null}
                className="!text-xl"
              />
            )}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>

        <div className="absolute bottom-2 left-0 z-10 w-full px-4">
          {/* Add Button */}
          <AddSession />
        </div>
      </div>
    </>
  );
};

export default SessionSidebar;
const items = [
  {
    key: "1",
    label: (
      <div className="flex items-center justify-between transition-all ease-in-out duration-300 group">
        <p className="text-base font-medium">Sessions</p>
        <div className="hidden items-center gap-x-1 transition-all ease-in-out duration-300 group-hover:flex">
          <span className="bg-gray-200 p-1 rounded-full">
            <RiDeleteBin7Line />
          </span>
          <span className="p-1 rounded-full">
            <RiEdit2Line />
          </span>
        </div>
      </div>
    ),
    children: (
      <>
        <div className="border-l border-gray-200 ml-2">
          {/* week 1 */}
          <div className="bg-transparent h-9 py-2 px-3 rounded-lg flex items-center justify-between transition-all ease-in-out duration-300 group hover:bg-[--ezyGray100] ml-2">
            <p className="text-sm font-medium">Week 1</p>
            <div className="hidden items-center gap-x-1 transition-all ease-in-out duration-300 group-hover:flex">
              <span className="bg-gray-200 p-1 rounded-full">
                <RiDeleteBin7Line />
              </span>
              <span className="p-1 rounded-full">
                <RiEdit2Line />
              </span>
            </div>
          </div>
          {/* week 2 */}
          <div className="bg-transparent h-9 py-2 px-3 rounded-lg flex items-center justify-between transition-all ease-in-out duration-300 group hover:bg-[--ezyGray100] ml-2">
            <p className="text-sm font-medium">Week 2</p>
            <div className="hidden items-center gap-x-1 transition-all ease-in-out duration-300 group-hover:flex">
              <span className="bg-gray-200 p-1 rounded-full">
                <RiDeleteBin7Line />
              </span>
              <span className="p-1 rounded-full">
                <RiEdit2Line />
              </span>
            </div>
          </div>
          {/* week 3 */}
          <div className="bg-transparent h-9 py-2 px-3 rounded-lg flex items-center justify-between transition-all ease-in-out duration-300 group hover:bg-[--ezyGray100] ml-2">
            <p className="text-sm font-medium">Week 3</p>
            <div className="hidden items-center gap-x-1 transition-all ease-in-out duration-300 group-hover:flex">
              <span className="bg-gray-200 p-1 rounded-full">
                <RiDeleteBin7Line />
              </span>
              <span className="p-1 rounded-full">
                <RiEdit2Line />
              </span>
            </div>
          </div>
          {/* week 4 */}
          <div className="bg-transparent h-9 py-2 px-3 rounded-lg flex items-center justify-between transition-all ease-in-out duration-300 group hover:bg-[--ezyGray100] ml-2">
            <p className="text-sm font-medium">Week 4</p>
            <div className="hidden items-center gap-x-1 transition-all ease-in-out duration-300 group-hover:flex">
              <span className="bg-gray-200 p-1 rounded-full">
                <RiDeleteBin7Line />
              </span>
              <span className="p-1 rounded-full">
                <RiEdit2Line />
              </span>
            </div>
          </div>
        </div>
      </>
    ),
  },
];
