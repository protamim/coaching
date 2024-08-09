'use client';
import { Button, Divider, Form, Input, Select, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const LiveVideoModulePage = () => {
  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return <span>Please select session type</span>;
  };
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Live</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large">
              {/* name */}
              <FormItem label="Name">
                <Input placeholder="Live name" />
              </FormItem>
              {/* description */}
              <FormItem label="Description">
                <TextArea
                  placeholder="Enter a description..."
                  className="!min-h-32"
                />
              </FormItem>
              {/* upload PDF */}
              <FormItem label="Live lesson type">
                <Select
                  labelRender={labelRender}
                  defaultValue="1"
                  style={{
                    width: "100%",
                  }}
                  options={[
                    {
                      label: "Screen only",
                      value: "Screen Only",
                    },
                    {
                      label: "Screen with Face",
                      value: "Screen with Face",
                    },
                    {
                      label: "Video camera",
                      value: "Video camera",
                    },
                    {
                      label: "Live screen",
                      value: "Live screen",
                    },
                  ]}
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

export default LiveVideoModulePage;
