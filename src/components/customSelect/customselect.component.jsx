import React from "react";
import "./customselect.styles.css";
import { Select } from "antd";
const { Option } = Select;
export const CustomSelect = ({
  size,
  width = "100%",
  handleChange,
  defaultSelect,
  options,
}) => {
  return (
    <Select
      style={{ width: width }}
      size={size}
      defaultValue={defaultSelect}
      onChange={handleChange}
    >
      {options.map((option) => (
        <Option value={option.value}>
          <img
            src={option.src}
            style={{
              height: "20px",
              width: "25px",
              paddingRight: "5px",
            }}
            alt={Option.title}
          />
          {option.title}
        </Option>
      ))}
    </Select>
  );
};
