"use client";
import { EzyClose, EzyFilter } from "@/components/icons/Icons";
import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Option } from "antd/es/mentions";
import { useState } from "react";

const AddFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-x-3 border border-gray-300 rounded-xl py-3 px-5 text-[var(--ezyGray500)]"
        >
          <span>
            <EzyFilter />
          </span>
          <span>Add Filter</span>
        </button>
        {/* Display after click */}
        <div
          className={`${
            open ? "scale-100" : "scale-0"
          } absolute left-0 top-[110%] bg-white shadow-xl py-4 px-3 rounded-lg border bordr-[var(--ezyGray400)] max-w-max transition-transform ease-in-out duration-100`}
        >
          {/* Top */}
          <div className="flex items-center justify-between mb-3">
            {/* title */}
            <h6>Add Filter</h6>
            {/* Close button */}
            <button onClick={() => setOpen(false)} className="p-1 rounded-md transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray100)]">
              <EzyClose />
            </button>
          </div>
          {/* main content */}
          <div className="flex items-center gap-x-3 w-full">
            <Form className="flex items-center gap-x-4">
              {/* select field */}
              <FormItem name="select" className="w-36">
                <Select defaultValue="title">
                  <Option value="title">Title</Option>
                  <Option value="something">Something</Option>
                </Select>
              </FormItem>
              {/* select based field */}
              <FormItem name="title" className="w-40">
                <Input  placeholder="Text..." />
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilter;
