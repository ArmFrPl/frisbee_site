import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import BaseLayout from "./lang_en/Components/BaseLayout/BaseLayout";

import App from './lang_en/Components/App';
import ContactUs from './lang_en/Components/About/ContactUs/ContactUs';
import AboutUlt from './lang_en/Components/About/AboutUlt/AboutUlt';
import AboutUs from './lang_en/Components/About/AboutUs';
import Teams from './lang_en/Components/About/Teams/Teams';
import Tournaments from './lang_en/Components/Events/Tournaments';
import Camps from './lang_en/Components/Events/Camps';
import LearnToPlay from './lang_en/Components/Events/LearnToPlay';
import Shop from './lang_en/Components/Shop/Shop';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contactUs" component={ContactUs}  />
        <Route path="/aboutUlt" component={AboutUlt} />
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