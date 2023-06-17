import React from "react";
import "./assets/scss/style.scss";
import { Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

const App = () => {
  return (
    <div className='App'>
      <>
        <Route exact path='/' component={LandingPage} />
        <Route path='/properties/:id' component={DetailsPage} />
      </>
    </div>
  );
};

export default App;
