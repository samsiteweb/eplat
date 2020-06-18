import React from "react";

import "./search.styles.css";
import caret from "../../assets/svgs/caret.svg";
import line from "../../assets/svgs/line.svg";
import { SearchOutlined } from "@ant-design/icons";
export const SearchBar = () => {
  return (
    <div className='searchField'>
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
          <span style={{ padding: "5px" }}> All </span>{" "}
          <img style={{ paddingRight: "15px" }} src={caret} alt='caret' />
          <img src={line} alt='line' />
        </div>

        <input
          style={{ width: "100%", padding: "5px" }}
          placeholder='What are you looking for...'
          className='searchInput'
        />
        <button className='ripple'>
          <SearchOutlined style={{ paddingRight: "10px" }} /> Search
        </button>

        {/* <div className='ripple'>
          <div className='SearchBtn'>
            <div className='SearchBtnContent'>
              <SearchOutlined style={{ padding: "10px" }} /> Search
            </div>
          </div>
        </div> */}
      </span>
    </div>
  );
};
