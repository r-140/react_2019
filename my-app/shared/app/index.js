import React from 'react'

// import { render } from "react-dom";
// import { Provider } from "react-redux";
import {  Switch, Route } from 'react-router-dom';


import TabList from './Tabs.js/index.js';

// import store from './store'
import Tab2Content from './tabs/tab2/Tab2Content.js';
import { AssetDetailInfo } from './tabs/tab2/content/AssetDetailInfo.js';
import { AssetFeatures } from './tabs/tab2/content/AssetFeatures.js';

const App = () => (
// render(
//     <Provider store={store}>
//       <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route exact path="/" component={Tab2Content} />
          <Route exact path="/assets" component={Tab2Content} />
          <Route exact path="/assets/:id" component={AssetDetailInfo} />
          <Route path="/assets/features/:id" component={AssetFeatures} />
        </Switch>
    //   </BrowserRouter>

    // </Provider>,
    // document.getElementById("root")
  );
  export default App;

