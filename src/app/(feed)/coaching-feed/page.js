"use client";
import { feedCover, feedLogo } from "@/assets";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { CoachingTab } from "@/components/pages/coachingFeed";

const CoachingFeed = () => {
  return (
    <>
      {/* Coaching Profile */}
      <div className="px-4 pb-6 pt-4 bg-white">
        {/* feed cover */}
        <div className="w-full shadow-sm relative before:absolute before:h-full before:w-full before:bg-[rgba(0,0,0,0.14)] before:top-0 before:left-0 before:z-[1]">
          <Image
            src={feedCover}
            width="1320"
            height="420"
            alt="feed cover"
            className="h-[287px] object-cover object-center"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-8 md:pl-8">
          {/* Feed logo */}
          <div className="bg-white max-w-max p-1 rounded-full -translate-y-10 z-10">
            <Image
              src={feedLogo}
              width={240}
              height={110}
              alt="feed logo"
              className="rounded-full w-32 h-32"
            />
          </div>
          {/* Profile */}
          <div className="flex -mt-4 md:mt-3 items-center justify-between pb-3 border-b flex-1">
            {/* coach info */}
            <div className="space-y-2">
              <h4 className="text-xl md:text-3xl font-medium md:leading-[45px]">
                UI/UX Design Learning
              </h4>
              <p className="text-base font-medium">20/30 Members</p>
            </div>
            {/* search bar */}
            <div>
              <Input
                size="large"
                placeholder="Search"
                prefix={<CiSearch className="text-xl" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div>
        <CoachingTab />
      </div>
    </>
  );
};

export default CoachingFeed;
