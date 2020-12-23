import React from "react";
import ReactDOM from "react-dom";

// Components
import About from './components/about/about';
import TopNavigation from './components/top-navigation/top-navigation';
import Contact from './components/contact/contact';
import Footer from "./components/footer/footer";

import './styles/global.scss';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Resume from "./components/resume/resume";
import {ThemeProvider} from "@material-ui/core";
import theme from './theme';

const routing = (
  <Router>
    <ThemeProvider theme={theme}>
      <TopNavigation />
      <div className="body">
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </div>
      <Footer />
    </ThemeProvider>
  </Router>
)
ReactDOM.render(routing, document.getElementById("root"));
