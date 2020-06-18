import React from "react";
import { Row, Col } from "antd";
import "./partners.styles.css";

import Uba from "./svgs/Uba.svg";
import Access from "./svgs/Access.svg";
import Airforce from "./svgs/Airforce.svg";
import Bet9ja from "./svgs/Bet9ja.svg";
import Betking from "./svgs/Betking.svg";
import Chicken from "./svgs/Chicken.svg";
import Danaair from "./svgs/Danaair.svg";
import Domi from "./svgs/Domi.svg";
import Ecobank from "./svgs/Ecobank.svg";
import Essenza from "./svgs/Essenza.svg";
import Game from "./svgs/Game.svg";
import Genesis from "./svgs/Genesis.svg";
import Huawei from "./svgs/Huawei.svg";
import Ibm from "./svgs/Ibm.svg";
import Mansard from "./svgs/Mansard.svg";
import Microsoft from "./svgs/Microsoft.svg";
import Nairabet from "./svgs/Nairabet.svg";
import Olam from "./svgs/Olam.svg";
import Ovh from "./svgs/Ovh.svg";
import Shoprite from "./svgs/Shoprite.svg";
import Sicap from "./svgs/Sicap.svg";
import Spar from "./svgs/Spar.svg";

import Wapic from "./svgs/Wapic.svg";
import Law from "./svgs/Law.svg";

export const PartnersComponent = () => {
  return (
    <div className='partnerContainer'>
      <Row style={{ height: "100%", padding: "30px" }}>
        <Col span={4}>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <span>
                Partner with <br />
              </span>

              <div style={{ paddingTop: "10px" }}>
                <p>
                  <b>top brands </b>
                </p>
              </div>
            </div>

            <div className='partnerBtn'>
              <span className='partnerBtnLabel'>More Partners</span>
            </div>
          </div>
        </Col>
        <Col span={20}>
          <Row>
            <Col className='partnerSvg'>
              <img src={Shoprite} alt='' />
              <img src={Huawei} alt='' />
              <img src={Ovh} alt='' />
              <img src={Nairabet} alt='' />
              <img src={Access} alt='' />
              <img src={Mansard} alt='' />
            </Col>
          </Row>
          <Row>
            <Col className='partnerSvg'>
              <img src={Game} alt='' />
              <img src={Ibm} alt='' />
              <img src={Sicap} alt='' />
              <img src={Betking} alt='' />
              <img src={Ecobank} alt='' />
              <img src={Law} alt='' />
            </Col>
          </Row>
          <Row>
            <Col className='partnerSvg'>
              <img src={Spar} alt='' />
              <img src={Microsoft} alt='' />
              <img src={Olam} alt='' />
              <img src={Bet9ja} alt='' />
              <img src={Airforce} alt='' />
              <img src={Wapic} alt='' />
            </Col>
          </Row>
          <Row>
            <Col className='partnerSvg'>
              <img src={Domi} alt='' />
              <img src={Chicken} alt='' />
              <img src={Essenza} alt='' />
              <img src={Genesis} alt='' />
              <img src={Uba} alt='' />
              <img src={Danaair} alt='' />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
