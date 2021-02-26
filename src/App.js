import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CarouselContent from "./components/carouselcontent/Carousel";
import LogIn from "./components/header/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LogIn}></Route>
        </Switch>
        
      </Router>

      <CarouselContent />

      <Footer />
    </div>
  );
}


export default App;
