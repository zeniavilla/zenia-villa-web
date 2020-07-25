import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Components
import App from "./App";
import About from './about/about';
import TopNavigation from './top-navigation/top-navigation';
import Contact from './contact/contact';
import Footer from "./footer/footer";

const routing = (
  <Router>
    <div>
      <TopNavigation></TopNavigation>
      <div className="body">
        <Route exact path="/" component={App}></Route>
        <Route path="/about-me" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
      <Footer></Footer>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById("root"));
