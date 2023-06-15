import React from "react";
import "./assets/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/properties/:id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
