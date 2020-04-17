import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import BaseLayout from "./containers/BaseLayout/BaseLayout";

import App from './containers/App';
import ContactUs from './containers/About/ContactUs';
import About from './containers/About/About';
import AboutUs from './containers/About/AboutUs';
import Teams from './containers/About/Teams';
import Tournaments from './containers/Events/Tournaments';
import Camps from './containers/Events/Camps';
import LearnToPlay from './containers/Events/LearnToPlay';
import Shop from './containers/Shop/Shop';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contactUs" component={ContactUs}  />
        <Route path="/about" component={About} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/teams" component={Teams} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/camps" component={Camps} />
        <Route path="/learnToPlay" component={LearnToPlay} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));