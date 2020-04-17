import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from './containers/App';
import ContactUs from './containers/ContactUs';
import Shop from './containers/Shop';
import Events from './containers/Events';
import BaseLayout from "./containers/BaseLayout";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shop" component={Shop} />
        <Route path="/contactUs" component={ContactUs}  />
        <Route path="/schedule" component={Events} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));