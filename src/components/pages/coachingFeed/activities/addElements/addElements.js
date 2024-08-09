import { videoThumb } from "@/assets";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { IoMdMore } from "react-icons/io";

const AddElements = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Add box */}
        <div className="bg-white px-4 py-6 rounded-2xl flex items-center justify-between">
          <div className="space-y-1">
            <h5 className="font-normal text-base">Design Principal</h5>
            <h3 className="text-lg font-semibold">Lesson 1</h3>
          </div>
          <div>
            <Button
              className="flex items-center justify-center"
              icon={<GoPlus />}
              type="default"
              href="/elements-builder"
            >
              Add Elements
            </Button>
          </div>
        </div>
        {/* variant field */}
        <div className="bg-white pb-4 rounded-xl">
          {/* top */}
          <div className="bg-[--ezyPrimary] h-12 py-2 px-4 flex items-center justify-between rounded-t-xl text-white">
            <h5 className="text-lg font-semibold">
              There are many variations{" "}
            </h5>
            <span className="text-xl transition-all ease-in-out duration-300 hover:opacity-60 hover:cursor-pointer">
              <IoMdMore />
            </span>
          </div>
          {/* text input field */}
          <div className="p-4">
            <TextArea
              style={{ border: "none", outline: "none" }}
              autoSize
              placeholder="Write some text..."
            />
          </div>
        </div>
        {/* Video lession card */}
        <div className="bg-white rounded-xl group">
          {/* top */}
          <div className="bg-[--ezyPrimary] h-12 py-2 px-4 flex items-center justify-between rounded-t-xl text-white">
            <h5 className="text-lg font-semibold">Lesson 1 Video</h5>
            <span className="text-xl transition-all ease-in-out duration-300 hover:opacity-60 hover:cursor-pointer">
              <IoMdMore />
            </span>
          </div>
          {/* Video */}
          <div className="p-4">
            <div className="relative h-[300px]">
              <Image
                width={1060}
                height={782}
                alt="video thumbnail"
                src={videoThumb}
                className="h-full w-full object-cover object-center rounded-xl"
              />
              <span className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.28)] rounded-xl">
                <button className="p-5 border border-white rounded-full absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-300 hover:border-[--ezyPrimaryHover] hover:bg-[--ezyPrimaryHover]">
                  <FaPlay className="text-xl font-semibold text-white" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddElements;
