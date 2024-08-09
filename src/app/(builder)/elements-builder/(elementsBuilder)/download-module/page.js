import { EzyUpload } from "@/components/icons/Icons";
import { Button, Divider, Form, Input, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";

const DownloadModulePage = () => {
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <div>
          <h4 className="text-2xl font-medium">Download</h4>
          <Divider />
          {/* Form */}
          <div>
            <Form layout="vertical" size="large">
              {/* name */}
              <FormItem label="Name">
                <Input placeholder="Download name" />
              </FormItem>
              {/* description */}
              <FormItem label="Description">
                <TextArea
                  placeholder="Enter a description..."
                  className="!min-h-32"
                />
              </FormItem>
              {/* upload */}
              <FormItem>
                <div className="mb-2">
                  <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
                    <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                      <EzyUpload />
                    </span>
                    <div className="text-center">
                      <Upload>
                        <Link href="#" className="text-[var(--ezyPrimary)]">
                         Upload
                        </Link>
                      </Upload>
                      <p>
                        only zip file
                      </p>
                    </div>
                  </div>
                </div>
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

export default DownloadModulePage;
