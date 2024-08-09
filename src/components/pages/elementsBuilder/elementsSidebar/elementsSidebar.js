'use client';
import { Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Module from "./module/module";
import {
  EzyAudio,
  EzyBoard,
  EzyBulletList,
  EzyDownload,
  EzyFormDoc,
  EzyGoal,
  EzyImage,
  EzyLink,
  EzyLiveCam,
  EzyPDF,
  EzyPPT,
  EzyPlay,
  EzyQuizMath,
  EzyTarget,
  EzyText,
  EzyTracking,
  EzyUserProfile,
} from "@/components/icons/Icons";
import { usePathname } from "next/navigation";

const ElementsSidebar = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className="bg-white py-8 px-4 min-w-[326px] h-[calc(100vh-3.5rem)] overflow-y-auto">
        {/* title */}
        <h3 className="text-2xl font-semibold mb-6">Elements</h3>
        {/* Search bar */}
        <div className="mb-4">
          <Input placeholder="Search" size="large" prefix={<CiSearch />} />
        </div>
        {/* Modules */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-5">
          {/* Text Module */}
          <Module
            icon={<EzyText />}
            title="Text"
            href="/elements-builder/text-module"
            
          />
          {/* Image Module */}
          <Module
            icon={<EzyImage />}
            title="Image"
            href="/elements-builder/image-module"
          />
          {/* Video Module */}
          <Module
            icon={<EzyPlay />}
            title="Video"
            href="/elements-builder/video-module"
          />
          {/* Audio Module */}
          <Module
            icon={<EzyAudio />}
            title="Audio"
            href="/elements-builder/audio-module"
          />
          {/* PDF Module */}
          <Module
            icon={<EzyPDF />}
            title="PDF"
            href="/elements-builder/pdf-module"
          />
          {/* PPT Module */}
          <Module
            icon={<EzyPPT />}
            title="PPT"
            href="/elements-builder/ppt-module"
          />
          {/* Embed Module */}
          <Module
            icon={<EzyLink />}
            title="Embed"
            href="/elements-builder/embed-module"
          />
          {/* Live Module */}
          <Module
            icon={<EzyLiveCam />}
            title="Live"
            href="/elements-builder/live-module"
          />
          {/* Download Module */}
          <Module
            icon={<EzyDownload />}
            title="Download"
            href="/elements-builder/download-module"
          />
          {/* Task Module */}
          <Module
            icon={<EzyBulletList />}
            title="Task"
            href="/elements-builder/task-module"
          />
          {/* Form Module */}
          <Module
            icon={<EzyFormDoc />}
            title="Form"
            href="/elements-builder/form-module"
          />
          {/* Quiz Module */}
          <Module
            icon={<EzyQuizMath />}
            title="Quiz"
            href="/elements-builder/quiz-module"
          />
          {/* Assignment Module */}
          <Module
            icon={<EzyUserProfile />}
            title="Assignment"
            href="/elements-builder/assignment-module"
          />
          {/* Goal Module */}
          <Module
            icon={<EzyGoal />}
            title="Goal"
            href="/elements-builder/goal-module"
          />
          {/* Tracking Module */}
          <Module
            icon={<EzyTracking />}
            title="Tracking"
            href="/elements-builder/tracking-module"
          />
          {/* Habits Module */}
          <Module
            icon={<EzyTarget />}
            title="Habits"
            href="/elements-builder/habits-module"
          />
          {/* Kanban Module */}
          <Module
            icon={<EzyBoard />}
            title="Kanban"
            href="/elements-builder/kanban-module"
          />
        </div>
      </div>
    </>
  );
};

export default ElementsSidebar;
