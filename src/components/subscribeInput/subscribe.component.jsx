import React from "react";
import "./subscribe.styles.css";
import { MailOutlined } from "@ant-design/icons";

export const SubscribeComponent = () => {
  return (
    <div className='subField'>
      <span
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <MailOutlined />
        </div>

        <input
          style={{ width: "70%", padding: "5px" }}
          placeholder='Enter Email Address'
          className='subInput'
        />
        <button className='subRipple'>Subscribe</button>
      </span>
    </div>
  );
};
