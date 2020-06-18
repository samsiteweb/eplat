import React, { Component } from "react";
import { PageCard } from "../../../components/pageCard/pagecard.component";
import { Input } from "antd";
import { Steps } from "antd";
import { CustomSelect } from "../../../components/customSelect/customselect.component";
import nig from "../../../assets/svgs/nig.jpg";
import { serviceProviders } from "../../../mockdata/serviceprovider";

import arrowRight from "../../../assets/svgs/arrowRight.svg";
import { CustomBtn } from "../../../components/customBtn/customBtn.component";
import Naira from "../../../assets/svgs/Naira.svg";
import { Select } from "antd";
import { InputNumber } from "antd";
const { Option } = Select;
const { Step } = Steps;
function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(value) {
  console.log("changed", value);
}
const selectBefore = (
  <Select defaultValue='+234' className='select-before'>
    <Option value='+234'>
      <img
        src={nig}
        style={{ height: "20px", width: "25px", paddingRight: "5px" }}
        alt='MTN'
      />
      +234
    </Option>
  </Select>
);

export class BuyDataPage extends Component {
  constructor() {
    super();
    this.state = {
      options: serviceProviders,
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Steps
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
          size='small'
          current={0}
        >
          <Step title='Buy Airtime' description='' />
          <Step title='Confirmation' />
        </Steps>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <PageCard>
            <p>
              Network Operator <span style={{ color: "red" }}>*</span>
            </p>
            <div>
              <CustomSelect
                with='100%'
                size={"large"}
                defaultSelect={"MTN"}
                handleChange={handleChange}
                options={this.state.options}
              ></CustomSelect>

              <div style={{ paddingTop: "10px" }}>
                <p>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </p>
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <Input
                      size='large'
                      addonBefore={selectBefore}
                      placeholder='Enter Phone Number'
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>
                  How much Airtime do you want to buy
                  <span style={{ color: "red" }}>*</span>
                </p>
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <Input
                      style={{ width: "100%" }}
                      placeholder='default size'
                      prefix={
                        <img
                          src={Naira}
                          style={{ height: "12px", width: "12px" }}
                          alt='ddsd'
                        />
                      }
                    />
                    {/*  
                    <Input
                      style={{ width: "100%" }}
                      size='large'
                      defaultValue={1000}
                      prefix={<Naira />}
                      onChange={onChange}
                    /> */}
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Email (optional)
                  <span style={{ color: "red" }}>*</span>
                </p>
                <div style={{ marginBottom: 16 }}>
                  <Input size='large' placeholder='Enter Email' />
                </div>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <CustomBtn text={"Proceed"} icon={arrowRight} />
              </div>
            </div>
          </PageCard>
        </div>
      </div>
    );
  }
}
