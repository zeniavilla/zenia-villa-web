import React from "react";
import ReactDOM from "react-dom";

// Components
import About from './components/about/about';
import Home from './components/home/home';
import TopNavigation from './components/top-navigation/top-navigation';
import Contact from './components/contact/contact';
import Footer from "./components/footer/footer";

import './styles/global.scss';
import { Toolbar } from "@material-ui/core";

const routing = (
  <div>
    <TopNavigation></TopNavigation>
    <Toolbar />
    <div className="body">
      <Home />
      <About />
      <Contact />
    </div>
    <Footer></Footer>
  </div>
)
ReactDOM.render(routing, document.getElementById("root"));
