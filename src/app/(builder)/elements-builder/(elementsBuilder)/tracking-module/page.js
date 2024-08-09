"use client";
import { Button, Divider, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
const TrackingModulePage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Create Tracking</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large" onFinish={onFinish}>
              {/* name */}
              <FormItem label="Name" name="tracking" rules={[{ required: true }]}>
                <Input placeholder="Tracking name" />
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

export default TrackingModulePage;
