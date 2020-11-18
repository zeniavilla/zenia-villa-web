import React from "react";
import ReactDOM from "react-dom";

// Components
import About from './about/about';
import Home from './home/home';
import TopNavigation from './top-navigation/top-navigation';
import Contact from './contact/contact';
import Footer from "./footer/footer";

import './index.scss';
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
