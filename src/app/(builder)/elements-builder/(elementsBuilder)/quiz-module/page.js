"use client";
import { EzyInfoMenu, EzyPlus } from "@/components/icons/Icons";
import { QuestionField } from "@/components/pages/elementsBuilder";
import { Button, Checkbox, Form, Input, Radio, Select, Switch } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const QuizModulePage = () => {
  const [selected, setSelected] = useState("questions");
  const [question, setQuestion] = useState([]);
  const [questionField, setQuestionField] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    const newQuestion = [...question, values];
    setQuestion(newQuestion);
  };

  const handleQuestionFieldAdd = () => {
    const duplicateField = [
      ...questionField,
      `Question ${questionField.length + 1}`,
    ];
    setQuestionField(duplicateField);
  };

  const onFinishSetting = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="relative bg-white pb-6 px-12 rounded-xl max-w-screen-sm overflow-y-auto h-[calc(100vh-7rem)] min-h-96 mt-14 ml-4 lg:ml-8 xl:ml-28 2xl:ml-36">
        {/* QUIZ TOP BAR START - BUTTON */}
        <div className="flex items-center justify-between border-b pt-6 pb-4 mb-6 sticky top-0 z-40 left-0 w-full bg-white">
          <h4 className="text-2xl font-medium">Quiz</h4>
          {/* nav button */}
          <div className="bg-[var(--ezyGray50)] py-1 px-2 flex items-center gap-x-2 rounded-lg">
            <button
              onClick={() => setSelected("questions")}
              className={`py-1 px-2 rounded-lg transition-all ease-in-out duration-300 ${
                selected === "questions"
                  ? "bg-white text-black"
                  : "bg-transparent text-[var(--ezyGray400)]"
              }`}
            >
              Questions
            </button>
            <button
              onClick={() => setSelected("settings")}
              className={`py-1 px-2 rounded-lg transition-all ease-in-out duration-300 ${
                selected === "settings"
                  ? "bg-white text-black"
                  : "bg-transparent text-[var(--ezyGray400)]"
              }`}
            >
              Settings
            </button>
          </div>
        </div>
        {/* QUIZ TOP BAR END - BUTTON */}

        {/* QUIZ MAIN AREA START */}
        <div className="">
          {/* QUESTIONS AREA START */}
          {selected === "questions" && (
            <div className="">
              {/* QUESTION PREVIEW AFTER ADDED START */}
              <div className="mb-10 space-y-8">
                {question.map((qst, i) => (
                  <div
                    key={i}
                    className="bg-[var(--ezyGray100)] py-3 px-6 rounded-lg space-y-4"
                  >
                    {/* top */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium">Question {i + 1}</h4>
                      <button
                        type="button"
                        className="text-xl font-medium transition-all ease-in-out duration-300 hover:opacity-75"
                      >
                        <EzyInfoMenu />
                      </button>
                    </div>
                    {/* question */}
                    <h4>{qst.description}</h4>
                    {/* Response */}
                    <div>
                      <h4 className="text-sm mb-2">Response</h4>
                      <ul>
                        <li>{qst?.option1}</li>
                        <li>{qst?.option2}</li>
                        <li>{qst?.option3}</li>
                        <li>{qst?.option4}</li>
                        <li>{qst?.option5}</li>
                        <li>{qst?.option6}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              {/* QUESTION PREVIEW AFTER ADDED END*/}

              {/* MULTI CHOICE FORM START */}
              <Form layout="vertical" onFinish={onFinish}>
                {/* Question Field */}
                <QuestionField index="1" />
                {/* Add Question Button */}
                <div className="mt-5">
                  <Button
                    onClick={handleQuestionFieldAdd}
                    htmlType="button"
                    icon={<EzyPlus className="text-xl" />}
                    type="default"
                    className="w-full flex items-center justify-center text-[var(--ezyPrimary)]"
                  >
                    Add Question
                  </Button>
                </div>
                {/* Save Button */}
                <div className="flex items-center justify-end mt-10 bg-white">
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </div>
              </Form>
              {/* MULTI CHOICE FORM END */}

              {/* Add Question - QUESTION FIELD DUPLICATE */}
              <div className="space-y-10 mt-10">
                {questionField.map((_, i) => (
                  <div key={i}>
                    <Form layout="vertical" onFinish={onFinish}>
                      <QuestionField index={i + 2} />
                      {/* Save Button */}
                      <div className="flex items-center justify-end mt-10 bg-white">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </div>
                    </Form>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* QUESTIONS AREA END */}

          {/* SETTING AREA START */}
          {selected === "settings" && (
            <div className="">
              <Form layout="vertical" onFinish={onFinishSetting}>
                {/* name */}
                <FormItem label="Name" rules={[{ required: true }]}>
                  <Input placeholder="name" />
                </FormItem>
                {/* Description */}
                <FormItem label="Description" rules={[{ required: true }]}>
                  <TextArea
                    placeholder="Enter a description..."
                    className="!min-h-32"
                  />
                </FormItem>
                {/* marking */}
                <div className="flex flex-col gap-y-2 mb-8">
                  <div className="flex items-center gap-x-3">
                    <Switch defaultChecked />
                    <p className="text-base font-medium">
                      Allow partial marking
                    </p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <Switch />
                    <p className="text-base font-medium">
                      Allow negative marking
                    </p>
                  </div>
                </div>
                {/* Choose one */}
                <FormItem label="Please Choose one">
                  <Radio.Group defaultValue={"soonAns"}>
                    <Radio value="ansEnd">Show answer at the end</Radio>
                    <Radio value="soonAns">
                      Show answer as soon as answered
                    </Radio>
                    <Radio value="retakeAns">
                      Show answer after all the retake is taken
                    </Radio>
                  </Radio.Group>
                </FormItem>
                {/* Passing score */}
                <FormItem label="Passing score">
                  <Input placeholder="Passing score" />
                </FormItem>
                {/* Number of retakes */}
                <FormItem label="Number of retakes">
                  <Input type="number" placeholder="1" />
                  <Checkbox className="mt-3">
                    Shuffle option in each retake
                  </Checkbox>
                </FormItem>
                {/* Quiz time */}
                <FormItem label="Quiz time">
                  <Input type="number" placeholder="0" />
                </FormItem>
                {/* Time limit per question */}
                <FormItem label="Time limit per question">
                  <Input type="number" placeholder="0" />
                </FormItem>
                {/* Save */}
                <div className="text-end ">
                  <Button htmlType="submit" type="primary">
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {/* SETTING AREA END */}
        </div>
        {/* QUIZ MAIN AREA END */}
      </div>
    </>
  );
};

export default QuizModulePage;
