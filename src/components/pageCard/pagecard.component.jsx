import React from "react";

import "./pagecard.styles.css";
export const PageCard = (props) => {
  return (
    <div className='pageCard'>
      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ width: "100%" }}>{props.children}</div>
      </div>
    </div>
  );
};
