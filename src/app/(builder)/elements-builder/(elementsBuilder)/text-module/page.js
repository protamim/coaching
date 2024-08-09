import {
  EzyNumberList,
  EzyWritingBold,
  EzyWritingBullet,
  EzyWritingH1,
  EzyWritingH2,
  EzyWritingImage,
  EzyWritingItalic,
  EzyWritingLink,
  EzyWritingQuote,
} from "@/components/icons/Icons";
import { Button, Divider, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const TextPage = () => {
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Text</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large">
              <FormItem label="Name">
                <Input placeholder="Enter your name" />
              </FormItem>
              <FormItem label="Description (Optional)">
                <TextArea placeholder="Enter a description..." className="!min-h-20" />
              </FormItem>
              <FormItem label="Content">
                {/* Writing Options */}
                <div className="flex items-center gap-x-1 text-[32px] mb-2 text-[var(--ezyGray400)]">
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingBold />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingItalic />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingH1 />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingH2 />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingQuote />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingLink />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingImage />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyWritingBullet />
                  </button>
                  <button className="transition-all ease-in-out duration-300 hover:bg-[var(--ezyGray200)] hover:text-black hover:rounded-md">
                    <EzyNumberList />
                  </button>
                </div>
                <TextArea placeholder="Enter a description..." className="!min-h-32" />
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

export default TextPage;
