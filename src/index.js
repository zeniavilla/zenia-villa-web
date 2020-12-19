import React from "react";
import ReactDOM from "react-dom";

// Components
import About from './components/about/about';
// import Home from './components/home/home';
import TopNavigation from './components/top-navigation/top-navigation';
import Contact from './components/contact/contact';
import Footer from "./components/footer/footer";

import './styles/global.scss';
import {Route, BrowserRouter as Router} from "react-router-dom";

const routing = (
  <Router>
    <div>
      <TopNavigation></TopNavigation>
      <div className="body">
        <Route exact path="/" component={About}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        {/* <Home />
        <About />
        <Contact /> */}
      </div>
      <Footer></Footer>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById("root"));
