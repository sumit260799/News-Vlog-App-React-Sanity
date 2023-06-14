import React from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./components/home/Homepages";
import SinglePage from "./components/singlePage/SinglePage";
import PopularPage from "./components/home/mainContent/popular/PopularPage";
import SingleFood from "./components/home/mainContent/FoodPost/SingleFood";
import SingleSocial from "./components/home/mainContent/social/SingleSocial";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepages />} />
        <Route path="/SinglePage/:id" exact element={<SinglePage />} />
        <Route path="/PopularPage/:id" exact element={<PopularPage />} />
        <Route path="/SingleFood/:id" exact element={<SingleFood />} />
        <Route path="/SingleSocial/:id" exact element={<SingleSocial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
