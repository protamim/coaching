"use client";
import { Button, Divider, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const CoachingSettings = () => {
  const { Option } = Select;
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="bg-white py-10 px-12 rounded-xl w-auto md:min-w-[680px]">
        {/* top bar */}
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-medium">Coaching Settings</h5>
          <p className="text-xl font-normal text-[var(--ezyGray500)]">
            Check and update your Coaching settings.
          </p>
        </div>
        <Divider />
        {/* Form area */}
        <div>
          <Form layout="vertical" onFinish={onSubmit}>
            {/* Coaching Name */}
            <FormItem
              label="Coaching name"
              name="coachingName"
              rules={[{ required: true }]}
            >
              <Input placeholder="UI/UX Design Learning" />
            </FormItem>
            {/* Coaching Owner */}
            <FormItem label="Coaching Owner" name="coachingOwner" rules={[{ required: true }]}>
              <Select defaultValue='Sadek'>
                <Option value="Sadek">Sadek</Option>
                <Option value="HKM Sadek Hossain">HKM Sadek Hossain</Option>
              </Select>
            </FormItem>
            {/* Notes */}
            <FormItem label="Notes" name="notes" rules={[{ required: true }]}>
              <TextArea
                className="!min-h-32"
                placeholder="Enter a description..."
              />
            </FormItem>
            {/* Form Footer */}
            <FormItem>
              <div className="flex gap-x-4 justify-end">
                <Button type="default" htmlType="button">
                  <span className="text-sm font-medium">Cancel</span>
                </Button>
                <Button type="primary" htmlType="submit">
                  <span className="text-sm font-medium">Save Changes</span>
                </Button>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CoachingSettings;
