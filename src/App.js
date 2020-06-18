import React, { Component } from "react";
import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { VerticalCards } from "./components/verticalCards/verticalCards.component";
import { DiscriptionComponent } from "./components/discription/discription.component";
import { PartnersComponent } from "./components/partners/partners.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DealsComponent } from "./components/deals/deals.component";
import { InsurancePage } from "./pages/insurancePage/insurance.component";
import { UtilityPage } from "./pages/utilities/utilities.component";
import { BuyDataPage } from "./pages/utilities/buyData/buydata.component";
import { Route } from "react-router-dom";

const LandingPage = () => (
  <div className='bodyContainer'>
    <BannerComponent></BannerComponent>
    <div style={{ marginTop: "15px" }}>
      <VerticalCards />
    </div>
    <DealsComponent style={{ marginTop: "15px" }} />
    <DealsComponent style={{ marginTop: "15px" }} />
    <DealsComponent style={{ marginTop: "15px" }} />
    <DiscriptionComponent />
    <PartnersComponent />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div style={{ padding: "20px" }}>
          <Route exact path='/insurance' component={InsurancePage} />
          <Route exact path='/' component={LandingPage} />
          {/* <Route exact path='/util' component={UtilityPage} /> */}
          <Route exact path='/buydata' component={BuyDataPage} />
        </div>

        {/* <InsurancePage /> */}

        <FooterComponent />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Button type="primary">Button</Button>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
