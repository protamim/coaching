"use client";
import { EzyDelete, EzyOptionDrag, EzyPlus } from "@/components/icons/Icons";
import { Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const QuestionField = (props) => {
  const [option, setOption] = useState(["Option 1"]);
  const { index } = props;
  const onChangeSelect = (values) => {
    console.log(values);
  };
  const handleOption = () => {
    const newOption = [...option, `Option ${option.length + 1}`];
    setOption(newOption);
  };

  const handleDeleteOption = (current) => {
    const deleteThis = option?.filter(opt=> opt !== current);
    setOption(deleteThis);
  };

  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return (
      <span className="text-sm text-[var(--ezyGray500)]">Multiple Choice</span>
    );
  };

  return (
    <>
      <div className="bg-[var(--ezyGray100)] py-3 px-6 rounded-lg">
        {/* Question top */}
        <FormItem>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Question {index}</h4>
            <div className="max-w-max">
              <Select
                onChange={onChangeSelect}
                labelRender={labelRender}
                defaultValue="1"
                style={{
                  width: "100%",
                }}
                options={[
                  {
                    label: "Single Choice",
                    value: "Single Choice",
                  },
                  {
                    label: "Multiple Choice",
                    value: "Multiple Choice",
                  },
                ]}
              />
            </div>
          </div>
        </FormItem>
        {/* Description */}
        <FormItem name="description" rules={[{ required: true }]}>
          <TextArea
            placeholder="Enter a description..."
            className="!min-h-32 placeholder:text-base placeholder:text-[var(--ezyGray500)]"
          />
        </FormItem>
        {/* Form List */}
        <div>
          <h5 className="text-base font-medium mb-4">Response</h5>
          {/* Option */}
          {option.map((opt, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-x-5 mb-4"
            >
              <button className="text-xl cursor-move">
                <EzyOptionDrag />
              </button>
              <FormItem
                name={`option${i + 1}`}
                className="w-full mb-0"
                rules={[{ required: true }]}
              >
                <Input required={true} placeholder={opt} />
              </FormItem>
              <button
                onClick={() => handleDeleteOption(opt)}
                type="button"
                className="text-xl"
              >
                <EzyDelete />
              </button>
            </div>
          ))}
          {/* Add Option Button */}
          <button
            type="button"
            onClick={handleOption}
            className="flex items-center gap-x-1 text-[var(--ezyPrimary)] transition-all ease-in-out duration-300 hover:opacity-85"
          >
            <span className="text-xl">
              <EzyPlus />
            </span>
            <p className="text-sm font-medium">Add Option</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionField;
