"use client";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

import Link from "next/link";
import { useState } from "react";
import AddCoachingModal from "@/components/ui/addCoaching";
import { Button, Form } from "antd";
import { EzyFilter, EzyTarget } from "@/components/icons/Icons";
import { CoachingFilter } from "@/components/pages/coaching";
import AddFilter from "@/components/pages/coaching/optionbar/addFilter";

const MainContent = () => {
  const [coachList, setCoachList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log(values);
        setIsModalOpen(false);
        const newList = [...coachList, values];
        setCoachList(newList);
      })
      .catch((info) => {
        console.log("validate failed", info);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      <AddCoachingModal
        form={form}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
      {/* TOP AREA START */}
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-2xl font-medium">Coaching</h5>
        <button
          onClick={showModal}
          className="border border-gray-300 rounded-xl px-6 py-2 bg-[var(--ezyPrimary)] text-white"
        >
          Add Coaching
        </button>
      </div>
      {/* TOP AREA END */}

      {/* OPTION BAR START */}
      <div className="flex flex-col gap-y-7 items-start mb-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-x-6">
          {/* Filter Buttons */}
          <div className="bg-[#F9FAFB] rounded-xl p-1 max-w-max border border-[#e4e5e6]">
            <CoachingFilter />
          </div>
          {/* add filter */}
          <AddFilter />
        </div>
        {/* search field */}
        <div className="relative w-[320px] h-10 md:w-[240px] lg:w-[330px]">
          <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2 z-10" />
          <input
            type="search"
            placeholder="Search"
            className="absolute h-full w-full border border-gray-300 outline-none pl-7 rounded-xl"
          />
        </div>
      </div>
      {/* OPTION BAR END */}

      {/* DATA TABLE START */}
      <div className="max-w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <table className="w-full rounded-tl-lg rounded-tr-lg">
          <thead className="w-full bg-[#F2F4F7] h-14 rounded-tl-lg rounded-tr-lg text-gray-500">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Coaching Name</th>
              <th>Short Description</th>
              <th>Coaching type</th>
              <th>Member</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coachList.length >= 1 &&
              coachList.map((list, i) => (
                <tr key={i} className="text-center border-b border-gray-100">
                  <td className="px-2 py-5">
                    <input type="checkbox" />
                  </td>
                  <td className="px-2 py-5">
                    {i < 9 && "0"}
                    {i + 1}
                  </td>
                  <td className="px-2 py-5">
                    <Link
                      href="/coaching-feed"
                      className="transition-all ease-in-out duration-300 hover:underline hover:opacity-90"
                    >
                      {list?.coachingName}
                    </Link>
                  </td>
                  <td className="px-2 py-5">{list?.description}</td>
                  <td className="px-2 py-5">{list?.type}</td>
                  <td className="px-2 py-5">
                    {Math.floor(Math.random() * 58)}
                  </td>
                  <td className="px-2 py-5">
                    <SlOptions className="mx-auto" />
                  </td>
                  
                </tr>
              ))}


            {/* EMPTY DATA PANEL START */}
            {coachList.length < 1 && (
              <>
                <tr>
                  <td colSpan={'20'}>
                    <div className="flex items-center justify-center flex-col gap-y-7 mt-20">
                      <span className="text-8xl text-[var(--ezyGray400)]">
                        <EzyTarget />
                      </span>
                      <h6 className="text-base font-medium">
                        There was no coaching created yet
                      </h6>
                      <Button onClick={showModal} type="default">
                        <span className="text-base font-medium">
                          Add Coaching
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              </>
            )}
            {/* EMPTY DATA PANEL END */}
          </tbody>
        </table>
      </div>
      {/* DATA TABLE END */}
    </>
  );
};

export default MainContent;
