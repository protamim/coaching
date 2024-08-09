"use client";
import { useState } from "react";

export const EzyTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data[0].key);
  const firstItem = data[0];
  const lastItem = data[data.length - 1];
  return (
    <>
      <div>
        {/* tab nav */}
        <div className={`flex items-center mb-6 rounded-lg h-14`}>
          {/* Tab Button 1 */}
          {data?.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentTab(item.key)}
              className={`w-full flex items-center justify-center border-t border-r border-b border-l-0 border-[var(--ezyGray400)] h-full transition-all ease-in-out duration-300 ${
                currentTab === item.key
                  ? "bg-[var(--ezyPrimary)]"
                  : "bg-transparent"
              } ${
                firstItem.key === item.key
                  ? "rounded-tl-lg rounded-bl-lg !border-l"
                  : "rounded-none"
              } ${
                lastItem.key === item.key
                  ? "rounded-tr-lg rounded-br-lg"
                  : "rounded-none"
              }
            `}
            >
              <span
                className=" text-4xl flex items-center gap-x-1"
                style={
                  currentTab === item.key
                    ? { color: `white` }
                    : { color: `var(--ezyGray400)` }
                }
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {/* Tab Panel */}
        <div className="bg-white">
          {/* tab items */}
          {data?.map((item) => currentTab === item.key && item.content)}
        </div>
      </div>
    </>
  );
};
