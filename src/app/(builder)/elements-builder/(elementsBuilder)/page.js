import { EzyTarget } from "@/components/icons/Icons";

const BuilderPage = () => {
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm h-96 flex items-center justify-center mt-14 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div className="flex items-center justify-center flex-col gap-y-3">
          <span className="text-8xl text-[#98A2B3]">
            <EzyTarget />
          </span>
          <h6 className="text-center text-xl font-medium">
            Drag & drop element or select elements for create coaching module
          </h6>
        </div>
      </div>
    </>
  );
};

export default BuilderPage;
