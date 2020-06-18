import React, { Component } from "react";
import "./header.styles.css";
import logo from "../../assets/svgs/logo.svg";
import favourite from "../../assets/svgs/favourite.svg";
import { Badge } from "antd";
import caretdown from "../../assets/svgs/caretdown.svg";
import cartBasket from "../../assets/svgs/cartBasket.svg";
import { SearchBar } from "../searchbar/searchbar.component";

import person from "../../assets/svgs/person.svg";
import { Row, Col } from "antd";
export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Row className='headerContainer'>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 4, order: 1 }}
            lg={{ span: 5, order: 1 }}
            xl={{ span: 5, order: 1 }}
          >
            <img src={logo} alt='logo' className='logoResponsive' />
          </Col>
          <Col
            xs={{ span: 24, order: 3 }}
            sm={{ span: 24, order: 3 }}
            md={{ span: 10, order: 2 }}
            lg={{ span: 11, order: 2 }}
            xl={{ span: 11, order: 2 }}
          >
            <SearchBar></SearchBar>
          </Col>
          <Col
            xs={{ span: 24, order: 3 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 10, order: 2 }}
            lg={{ span: 8, order: 3 }}
            xl={{ span: 8, order: 3 }}
          >
            <Row justify='center'>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <div style={{ paddingRight: 15 }}>
                  <Badge count={3} showZero>
                    <div className='circleBtn'>
                      <img src={favourite} alt='favourite' />
                    </div>
                  </Badge>
                </div>
                <div style={{ paddingRight: 40 }}>
                  <Badge count={8} showZero>
                    <div className='circleBtn2'>
                      <img src={cartBasket} alt='cartBasket' />
                    </div>
                  </Badge>
                </div>

                <div style={{ paddingRight: 15 }}>
                  Hello, <b>Guest</b>
                </div>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <div className='circleBtn3'>
                    <img src={person} alt='person' />
                  </div>
                  <img
                    style={{ paddingLeft: "5px" }}
                    src={caretdown}
                    alt='caretdown'
                  />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
