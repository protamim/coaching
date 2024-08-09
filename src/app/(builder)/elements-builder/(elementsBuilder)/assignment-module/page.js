"use client";
import { EzyUpload } from "@/components/icons/Icons";
import { Button, Checkbox, Divider, Form, Input, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import { useState } from "react";
const AssignmentModulePage = () => {
  const [points, setPoints] = useState(false);

  const pointsChange = (e) => {
    const isChecked = e.target.checked;
    setPoints(isChecked);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Assignment</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large" onFinish={onFinish}>
              {/* name */}
              <FormItem
                label="Name"
                name="assignmentName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Assignment name" />
              </FormItem>
              {/* description */}
              <FormItem
                label="Description"
                name="description"
                rules={[{ required: true }]}
              >
                <TextArea
                  placeholder="Enter a description..."
                  className="!min-h-32"
                />
              </FormItem>
              {/* upload any type file */}
              <FormItem name="file" rules={[{ required: true }]}>
                <div className="mb-2">
                  <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
                    <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                      <EzyUpload />
                    </span>
                    <div className="text-center">
                      <Upload className="text-base">
                        <Link href="#" className="text-[var(--ezyPrimary)]">
                          Upload
                        </Link>{" "}
                        Any type of file
                      </Upload>
                    </div>
                  </div>
                </div>
              </FormItem>
              {/* Checkbox */}
              <FormItem>
                <Checkbox onChange={pointsChange}>
                  <p className="text-base font-medium">
                    Allow add points for this assignment
                  </p>
                </Checkbox>
              </FormItem>
              {/* Put the assignment points */}
              {points && (
                <FormItem
                  name="point"
                  label="Put the assignment points"
                  className="transition-all ease-in-out duration-300"
                  rules={[{ required: true }]}
                >
                  <Input type="number" placeholder="0" />
                </FormItem>
              )}

              {/* buttons */}
              <FormItem>
                <div className="flex items-center justify-end gap-x-4">
                  <Button htmlType="button">Cancel</Button>
                  <Button htmlType="submit" type="primary">
                    Create
                  </Button>
                </div>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentModulePage;
