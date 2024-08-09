"use client";
import { EzyImage, EzyUpload, EzyYouTube } from "@/components/icons/Icons";
import { EzyTabs } from "@/components/ui/ezyTabs";
import { Button, Divider, Form, Input, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";

const ImageModulePage = () => {
  return (
    <>
      <div className="bg-white py-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        <h4 className="text-2xl font-medium">Image</h4>
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
            {/* Image layout */}
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

export default ImageModulePage;

const data = [
  {
    key: "1",
    label: <EzyImage />,
    content: (
      <>
        <FormItem label="Image Title">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        {/* image upload */}
        <div className="mb-2">
          <h6 className="mb-3 text-base font-medium">Upload Image</h6>
          <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
            <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
              <EzyUpload />
            </span>
            <div className="text-center">
              <Upload>
                <Link href="#" className="text-[var(--ezyPrimary)]">
                  Click to upload
                </Link>
              </Upload>
              <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
        </div>
        {/* Image Concept */}
        <FormItem label="Image Concept">
          <Input placeholder="Enter your tittle" />
        </FormItem>
        {/* Link */}
        <FormItem label="Link">
          <Input placeholder="https://" />
        </FormItem>
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <EzyImage />
        <EzyImage />
      </>
    ),
    content: (
      <>
        {/* Image 1 */}
        <div className="mb-4">
          <h6 className="text-xl font-medium text-black mb-2">Image 1</h6>
          <FormItem label="Image Title">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* image upload */}
          <div className="mb-2">
            <h6 className="mb-3 text-base font-medium">Upload Image</h6>
            <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
              <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                <EzyUpload />
              </span>
              <div className="text-center">
                <Upload>
                  <Link href="#" className="text-[var(--ezyPrimary)]">
                    Click to upload
                  </Link>
                </Upload>
                <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
          {/* Image Concept */}
          <FormItem label="Image Concept">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* Link */}
          <FormItem label="Link">
            <Input placeholder="https://" />
          </FormItem>
        </div>
        {/* Image 2 */}
        <div className="mb-4">
          <h6 className="text-xl font-medium text-black mb-2">Image 2</h6>
          <FormItem label="Image Title">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* image upload */}
          <div className="mb-2">
            <h6 className="mb-3 text-base font-medium">Upload Image</h6>
            <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
              <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                <EzyUpload />
              </span>
              <div className="text-center">
                <Upload>
                  <Link href="#" className="text-[var(--ezyPrimary)]">
                    Click to upload
                  </Link>
                </Upload>
                <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
          {/* Image Concept */}
          <FormItem label="Image Concept">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* Link */}
          <FormItem label="Link">
            <Input placeholder="https://" />
          </FormItem>
        </div>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <EzyImage />
        <EzyImage />
        <EzyImage />
      </>
    ),
    content: (
      <>
        {/* Image 1 */}
        <div className="mb-4">
          <h6 className="text-xl font-medium text-black mb-2">Image 1</h6>
          <FormItem label="Image Title">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* image upload */}
          <div className="mb-2">
            <h6 className="mb-3 text-base font-medium">Upload Image</h6>
            <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
              <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                <EzyUpload />
              </span>
              <div className="text-center">
                <Upload>
                  <Link href="#" className="text-[var(--ezyPrimary)]">
                    Click to upload
                  </Link>
                </Upload>
                <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
          {/* Image Concept */}
          <FormItem label="Image Concept">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* Link */}
          <FormItem label="Link">
            <Input placeholder="https://" />
          </FormItem>
        </div>
        {/* Image 2 */}
        <div className="mb-4">
          <h6 className="text-xl font-medium text-black mb-2">Image 2</h6>
          <FormItem label="Image Title">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* image upload */}
          <div className="mb-2">
            <h6 className="mb-3 text-base font-medium">Upload Image</h6>
            <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
              <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                <EzyUpload />
              </span>
              <div className="text-center">
                <Upload>
                  <Link href="#" className="text-[var(--ezyPrimary)]">
                    Click to upload
                  </Link>
                </Upload>
                <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
          {/* Image Concept */}
          <FormItem label="Image Concept">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* Link */}
          <FormItem label="Link">
            <Input placeholder="https://" />
          </FormItem>
        </div>
        {/* Image 3 */}
        <div className="mb-4">
          <h6 className="text-xl font-medium text-black mb-2">Image 3</h6>
          <FormItem label="Image Title">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* image upload */}
          <div className="mb-2">
            <h6 className="mb-3 text-base font-medium">Upload Image</h6>
            <div className="border border-[var(--ezyGray250)] rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-y-2">
              <span className="text-2xl p-2 rounded-lg border border-[var(--ezyGray250)]">
                <EzyUpload />
              </span>
              <div className="text-center">
                <Upload>
                  <Link href="#" className="text-[var(--ezyPrimary)]">
                    Click to upload
                  </Link>
                </Upload>
                <p>or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>
          {/* Image Concept */}
          <FormItem label="Image Concept">
            <Input placeholder="Enter your tittle" />
          </FormItem>
          {/* Link */}
          <FormItem label="Link">
            <Input placeholder="https://" />
          </FormItem>
        </div>
      </>
    ),
  },
];
