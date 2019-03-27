import React from 'react'

import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import TabList from './Tabs.js';

import store from './store'
import Tab2Content from './tabs/tab2/Tab2Content.js';

render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" component={TabList} />
          <Route path="/assets" component={Tab2Content} />
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

