"use client";
import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

const AddSession = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        icon={<GoPlus className="text-xl" />}
        className="w-full flex items-center justify-center gap-x-0"
        onClick={showModal}
      >
        Add a new sessions
      </Button>

      {/* Modal */}
      <Modal
        title="Add new sessions"
        open={isModalOpen}
        onOk={handleOk}
        okText="Create"
        onCancel={handleCancel}
        centered
      >
        <Form layout="vertical">
          <FormItem label="Session Name">
            <Input placeholder="Enter a name" />
          </FormItem>
        </Form>
      </Modal>
    </>
  );
};

export default AddSession;
