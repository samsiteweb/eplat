import React from "react";
import "./customBtn.styles.css";
export const CustomBtn = ({ icon, text }) => {
  return (
    <div
      style={{ width: "100%" }}
      className={["customBtn", "ripple"].join(" ")}
    >
      {text}
      <img src={icon} style={{ paddingLeft: "10px" }} alt='arrowleft' />
    </div>
  );
};
