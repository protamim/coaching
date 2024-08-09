"use client";
import { ConfigProvider } from "antd";

const AntConfigProvider = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '"Figtree", sans-serif',
            fontWeightStrong: "500",
          },
          components: {
            Radio: {
              fontSize: "1rem",
            },
            Button: {
              colorPrimaryBg: "#6662ff",
            },
            Form: {
              labelFontSize: "1rem",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};

export default AntConfigProvider;
