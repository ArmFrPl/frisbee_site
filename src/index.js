import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import BaseLayout from "./Components/BaseLayout/BaseLayout";

import App from './Components/App';
import ContactUs from './Components/About/ContactUs';
import About from './Components/About/About';
import AboutUs from './Components/About/AboutUs';
import Teams from './Components/About/Teams';
import Tournaments from './Components/Events/Tournaments';
import Camps from './Components/Events/Camps';
import LearnToPlay from './Components/Events/LearnToPlay';
import Shop from './Components/Shop/Shop';


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