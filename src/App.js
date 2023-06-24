import React from "react";
import "./assets/scss/style.scss";
import { Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

const App = () => {
  return (
    <div className='App'>
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/properties/:id' component={DetailsPage} />
        <Route path='/checkout' component={Checkout} />
      </>
    </div>
  );
};

export default App;
