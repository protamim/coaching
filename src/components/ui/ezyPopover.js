import { EzyClose, EzyFilter } from "../icons/Icons";

export const EzyPopover = () => {
  return (
    <>
      <div className="relative">
        <TriggerButton>Click me</TriggerButton>
        <PopoverContentWrapper>
          <PopoverHeader>
            <h5>Add Filter</h5>
            <PopoverCloseButton></PopoverCloseButton>
          </PopoverHeader>
        </PopoverContentWrapper>
      </div>
    </>
  );
};

export const TriggerButton = ({ children }) => {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-x-3 border border-gray-300 rounded-xl py-3 px-5 text-[var(--ezyGray500)]"
      >
        {children}
      </button>
    </>
  );
};
export const PopoverContentWrapper = ({ children }) => {
  return (
    <>
      <div
        className={`${
          open ? "scale-100" : "scale-0"
        } absolute left-0 top-[110%] bg-white shadow-xl py-4 px-3 rounded-lg border bordr-[var(--ezyGray400)] max-w-max transition-transform ease-in-out duration-100`}
      >
        {children}
      </div>
    </>
  );
};

export const PopoverHeader = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">{children}</div>
    </>
  );
};

export const PopoverCloseButton = ({ children }) => {
  return (
    <>
      <button
        onClick={() => setOpen(false)}
        className="p-1 rounded-md transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray100)]"
      >
        { children }
      </button>
    </>
  );
};
