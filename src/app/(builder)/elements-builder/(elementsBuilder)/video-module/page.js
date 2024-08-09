"use client";
import { EzyYouTube } from "@/components/icons/Icons";
import { EzyTabs } from "@/components/ui/ezyTabs";
import { Button, Divider, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const VideoModulePage = () => {
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <h4 className="text-2xl font-medium">Video</h4>
        <Divider />
        {/* Form */}
        <div>
          <Form layout="vertical" size="large">
            {/* Name */}
            <FormItem label="Name">
              <Input placeholder="Enter your name" />
            </FormItem>
            {/* Description */}
            <FormItem label="Description">
              <TextArea
                placeholder="Enter a description..."
                className="!min-h-32"
              />
            </FormItem>
            {/* video layout */}
            <div>
              <h5 className="text-base font-medium">Layout</h5>
              <div className="py-5 px-0">
                {/* tabs */}
                <EzyTabs data={data} />
              </div>
            </div>
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
    </>
  );
};

export default VideoModulePage;

const data = [
  {
    key: "1",
    label: <EzyYouTube />,
    content: (
      <>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <EzyYouTube />
        <EzyYouTube />
      </>
    ),
    content: (
      <>
        {/* Video 1 */}
        <h6 className="text-xl font-medium text-black mb-2">Video 1</h6>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
        {/* Video 2 */}
        <h6 className="text-xl font-medium text-black mb-2">Video 2</h6>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <EzyYouTube />
        <EzyYouTube />
        <EzyYouTube />
      </>
    ),
    content: (
      <>
        {/* Video 1 */}
        <h6 className="text-xl font-medium text-black mb-2">Video 1</h6>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
        {/* Video 2 */}
        <h6 className="text-xl font-medium text-black mb-2">Video 2</h6>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
        {/* Video 3 */}
        <h6 className="text-xl font-medium text-black mb-2">Video 3</h6>
        <FormItem label="Video Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        <FormItem label="Video URL">
          <Input type="url" placeholder="Enter your URL" />
        </FormItem>
      </>
    ),
  },
];
