import React from 'react'

import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import TabList from './Tabs.js';

import store from './store'

render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" component={TabList} />
        </Switch>
      </BrowserRouter>

      {/* <TabList /> */}
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );


// ReactDOM.render(
//      <TabList/>,
//     document.getElementById('root')
// )

