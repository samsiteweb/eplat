import React from "react";
import { Row, Col } from "antd";
import banner3 from "../../assets/svgs/banner3.png";
import banner from "../../assets/svgs/bannar.png";
import banner2 from "../../assets/svgs/bannar.png";
import ImageGallery from "react-image-gallery";

import "./banner.styles.css";

const images = [
  {
    original: banner,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: banner2,
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

export const BannerComponent = () => {
  return (
    <Row style={{ paddingTop: "10px" }}>
      <Col xs={24} sm={24} md={24} lg={17} xl={17}>
        <div>
          <ImageGallery
            showBullets={true}
            showNav={false}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            items={images}
          />
        </div>
      </Col>
      <Col style={{ padding: "5px" }} xs={24} sm={24} md={24} lg={7} xl={7}>
        <Row gutter={[10, 10]}>
          <Col xs={12} sm={12} md={12} lg={24} xl={24}>
            <div>
              <img
                className='img2'
                width='auto'
                src={banner3}
                alt='bigbannerholder'
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={24} xl={24}>
            <div>
              <img
                className='img2'
                width='auto'
                src={banner3}
                alt='bigbannerholder'
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
