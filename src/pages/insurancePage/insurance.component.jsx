import React, { Component } from "react";
import wave from "../../assets/svgs/wave.svg";
import back from "../../assets/svgs/back.png";
import { Row, Col } from "antd";

import "./insurance.styles.css";
export class InsurancePage extends Component {
  render() {
    return (
      <div
        style={{
          height: "800px",
          backgroundImage: `url(${wave})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div
          id='bottom'
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div className='navCards'></div>
          <div className='navCards'></div>
          <div className='navCards'></div>
        </div>
      </div>

      // <div

      // >
      //   <div>
      //     <div>

      //     </div>
      //   </div>
      // </div>
    );
  }
}
