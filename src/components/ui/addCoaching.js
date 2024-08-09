"use client";
import { Divider, Form, Input, Modal, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import { RiImageAddLine } from "react-icons/ri";

const AddCoachingModal = ({ handleCancel, handleOk, isModalOpen, form}) => {
  
  return (
    <>
      <Modal
        title="Add New Coaching"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
      >
        <Form form={form} layout="vertical">
          <div className="flex flex-col gap-y-8">
            <div className="space-y-7 md:w-1/2">
              {/* coaching name */}
              <Form.Item
                label="Coaching Name"
                name="coachingName"
                rules={[
                  {
                    required: true,
                    message: "Please input the name of coaching!",
                  },
                ]}
              >
                <Input placeholder="Enter your coaching name" />
              </Form.Item>
              {/* coaching type */}
              <Form.Item
                label="Coaching Type"
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Please select a type!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Individual">Individual</Radio>
                  <Radio value="Group">Group</Radio>
                </Radio.Group>
              </Form.Item>
              {/* Short Description */}
              <Form.Item
                name="description"
                label="Short Description"
                rules={[
                  {
                    required: true,
                    message: "Please write a short description",
                  },
                ]}
              >
                <TextArea
                  placeholder="Enter a description..."
                  style={{ height: "130px" }}
                />
              </Form.Item>
            </div>

            {/* Features image */}
            <div className="flex flex-col gap-y-4">
              <label>Features image</label>
              <div className="flex items-center gap-x-4">
                <span className="p-4 bg-gray-200 rounded-full">
                  <RiImageAddLine className="text-2xl" />
                </span>
                <div className="border border-gray-300 rounded-lg w-full py-4 px-5">
                  <p className="text-center">
                    <Link href="#" className="text-blue-600">
                      Click to upload
                    </Link>{" "}
                    or drag and drop <br /> SVG, PNG, JPG or GIF (max.
                    800x400px)
                  </p>
                </div>
              </div>
            </div>
            {/* Add Banner */}
            <div className="flex flex-col gap-y-4">
              <label>Add Banner</label>
              <div className="flex items-center gap-x-4">
                <span className="p-4 bg-gray-200 rounded-full">
                  <RiImageAddLine className="text-2xl" />
                </span>
                <div className="border border-gray-300 rounded-lg w-full py-4 px-5">
                  <p className="text-center">
                    <Link href="#" className="text-blue-600">
                      Click to upload
                    </Link>{" "}
                    or drag and drop <br /> SVG, PNG, JPG or GIF (max.
                    800x400px)
                  </p>
                </div>
              </div>
            </div>
            {/* type */}
            <div className="flex items-center gap-x-5">
              <Radio.Group>
                <Radio value="paid">Paid</Radio>
                <Radio value="free">Free</Radio>
              </Radio.Group>
            </div>
            <Divider />
            {/* status */}
            <div>
              <Radio.Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                <Radio value="status" className="text-2xl">
                  Status
                </Radio>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
                <Radio value="hidden">Hidden</Radio>{" "}
              </Radio.Group>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddCoachingModal;
