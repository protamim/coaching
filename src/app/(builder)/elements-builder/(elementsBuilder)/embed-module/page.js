"use client";
import { Button, Divider, Form, Input, Radio, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const EmbedModulePage = () => {
  const [value, setValue] = useState("iframe");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Embed</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large">
              {/* name */}
              <FormItem label="Name">
                <Input placeholder="Embed name" />
              </FormItem>
              {/* description */}
              <FormItem label="Description">
                <TextArea
                  placeholder="Enter a description..."
                  className="!min-h-32"
                />
              </FormItem>
              {/* Embed Type */}
              <FormItem label="Embed Type">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value="iframe">Iframe</Radio>
                  <Radio value="html">HTML</Radio>
                </Radio.Group>
              </FormItem>
              {/* iframe */}
              {value === "iframe" && (
                <FormItem label="Embedded Link">
                  <TextArea
                    placeholder="Paste embedded link..."
                    className="!min-h-32"
                  />
                </FormItem>
              )}
              {/* HTML */}
              {value === "html" && (
                <FormItem label="Embedded HTML">
                  <TextArea
                    placeholder="Write your HTML..."
                    className="!min-h-32"
                  />
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

export default EmbedModulePage;
