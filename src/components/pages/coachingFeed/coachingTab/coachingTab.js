import { Tabs } from "antd";
import Activities from "../activities/activities";
import './style.css'

const CoachingTab = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Tabs
        size="large"
        animated={true}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default CoachingTab;

const items = [
  {
    key: "1",
    label: "Activities",
    children: <Activities />,
  },
  {
    key: "2",
    label: "Coaching",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Library",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Calendar",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Kanban",
    children: "Content of Tab Pane 3",
  },
];
