import React from "react";
import "./verticalCards.styles.css";
import bank from "../../assets/svgs/bank.svg";
import retail from "../../assets/svgs/retail.svg";
import utilities from "../../assets/svgs/utilities.svg";
import others from "../../assets/svgs/others.svg";
import logistics from "../../assets/svgs/logistics.svg";
import { Row, Col } from "antd";

export const VerticalCards = () => {
  return (
    <div>
      <Row>
        <Col className='verticalContainer'>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={bank} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Financial Services</b>
            </div>
          </div>

          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={retail} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Retail Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={logistics} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Logistics Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={utilities} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Utilities</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={retail} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Retail Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={logistics} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Logistics Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={utilities} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Utilities</b>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='verticalContainer'>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={bank} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Financial Services</b>
            </div>
          </div>

          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={retail} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Retail Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={logistics} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Logistics Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={utilities} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Utilities</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={retail} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Retail Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={logistics} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Logistics Services</b>
            </div>
          </div>
          <div className='verticalCards'>
            <div width='50%' style={{ paddingRight: "10px" }}>
              <img src={others} alt='bank' />
            </div>
            <div style={{ width: "50%" }}>
              <b>Others</b>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
