import React from "react";
import { Row, Col } from "antd";
import "./footer.styles.css";
import logoWhite from "../../assets/svgs/logoWhite.svg";
import { SubscribeComponent } from "../subscribeInput/subscribe.component";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import calltwo from "../../assets/svgs/calltwo.svg";
import appstore from "../../assets/svgs/appstore.jpg";
import google_play from "../../assets/svgs/google_play.jpg";
export const FooterComponent = () => {
  return (
    <div className='footer'>
      <Row style={{ padding: "20px 20px 0px 20px" }}>
        <Col span={24}>
          <Row>
            <Col span={6}>
              <img src={logoWhite} alt='logowhite' />
            </Col>
            <Col span={10}>
              <p style={{ color: "white", fontSize: "12px" }}>
                <b>NEW TO SMARTSHOP?</b>
              </p>
              <p style={{ color: "white", fontSize: "12px" }}>
                Subscribe to our newsletter to get updates on our top deals!
              </p>
              <SubscribeComponent />
            </Col>
            <Col span={8}>
              <p style={{ color: "white", fontSize: "12px" }}>
                <b>DOWNLOAD SMARTSHOP NOW</b>
              </p>
              <img
                width='150px'
                style={{ paddingRight: "10px" }}
                src={appstore}
                alt='appstore'
              />
              <img width='150px' src={google_play} alt='appstore' />
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col span={4}>
              <div className='col'>
                <div className='footerHeaderLink'>ABOUT SMARTSHOP</div>
                <div>
                  <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Our Blog</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={3}>
              <div className='col'>
                <div className='footerHeaderLink'>PAYMENT</div>
                <div>
                  <ul>
                    <li>Wallet</li>
                    <li>Unified payment</li>
                    <li>Visa</li>
                    <li>Verve</li>
                    <li>Mastercard</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={5}>
              <div className='col'>
                <div className='footerHeaderLink'>
                  MAKE MONEY WITH SMARTSHOP
                </div>
                <div>
                  <ul>
                    <li>Sell on SmartShop</li>
                    <li>Become an Affiliate Partner</li>
                    <li>Become a Logistics Service</li>
                    <li>Become a Sales Consultant</li>
                    <li>Become a Vendor Service Provider</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className='col'>
                <div className='footerHeaderLink'>MORE INFO</div>
                <div>
                  <ul>
                    <li>Site Map</li>
                    <li>Track My Order</li>
                    <li>Authentic Items Policy</li>
                    <li>Privacy Policy</li>
                    <li>Stay Safe</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={8} className='col'>
              <div className='footerHeaderLink'>CONNECT WITH US</div>
              <div className='socialLinks'>
                <div className='socials'>
                  <img src={facebook} alt='facebookLogo' />
                </div>
                <div className='socials'>
                  <img src={twitter} alt='facebookLogo' />
                </div>
                <div className='socials'>
                  <img src={calltwo} alt='calltwo' />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={24} className='eFooter'>
          <div>
            <hr className='footerLine' />
          </div>
          <div className='footerText'>
            <p>&copy; 2020 eConnect NetPower Limited. All Rights Reserved</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
