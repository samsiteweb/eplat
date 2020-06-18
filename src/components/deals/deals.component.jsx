import React from "react";
import deals from "./deals.png";
import "./deals.styles.css";
export const DealsComponent = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className='tabContainer'>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className='tabTitleContainer'>
            <div className='tabTitleLine'></div>
            <div className='tabTitle'>
              <b>TOP SELLING PRODUCTS</b>
            </div>
          </div>
          <div
            style={{ justifySelf: "flex-end" }}
            className='tabSelectorContainer'
          >
            <div className='tabSelector'>NEW PRODUCTS</div>
            <div className={`tabSelectorActive`}>FEATURED</div>
            <div className='tabSelector'>BEST SELLER</div>
            <div className='tabSelector'> DISCOUNTED PRODUCTS</div>
          </div>
        </div>
      </div>
      <div>
        <div className='tabPanContainer'>
          <div>
            <img src={deals} alt='deals' />
          </div>
          <div>
            <img src={deals} alt='deals' />
          </div>
          <div>
            <img src={deals} alt='deals' />
          </div>
          <div>
            <img src={deals} alt='deals' />
          </div>
          <div>
            <img src={deals} alt='deals' />
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <img src={deals} alt='deals' />
    // </div>

    // <Tabs
    //   style={{ textAlign: "right" }}
    //   defaultActiveKey='1'
    //   onChange={callback}
    // >
    //   <TabPane tab='Tab 1' key='1'>
    //     Content of Tab Pane 1
    //   </TabPane>
    //   <TabPane tab='Tab 2' key='2'>
    //     Content of Tab Pane 2
    //   </TabPane>
    //   <TabPane tab='Tab 3' key='3'>
    //     Content of Tab Pane 3
    //   </TabPane>
    // </Tabs>
  );
};
