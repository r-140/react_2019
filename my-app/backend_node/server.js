import { StaticRouter } from 'react-router-dom';
import { getLoadableState } from 'loadable-components/server';

import configureStore from './store';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import App from '../shared/app';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require("./db/dbtool");

var api = express.Router();

app.use('/assets', express.static('./dist'));

// todo move rest endpoints to separate file
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// todo add select by id, select by type
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.get('*', async (req, res) => {
  const store = configureStore();
  const context = {};
  // const { styleManager, theme } = createStyleManager();

  const appWithRouter = (
      // <MuiThemeProvider styleManager={styleManager} theme={theme}>
          <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                  <App />
              </StaticRouter>
          </Provider>
      // </MuiThemeProvider>
  );

  

  if (context.url) {
      res.redirect(context.url);
      return;
  }
  let loadableState = {};

  store.runSaga(sagas).done.then(() => {
      const helmet = Helmet.renderStatic();
      res.status(200).write(renderHeader(helmet));

      const preloadedState = store.getState();
      const css = styleManager.sheetsToString();

      const htmlSteam = renderToNodeStream(appWithRouter);
      htmlSteam.pipe(res, { end: false });
      htmlSteam.on('end', () => {
          res.write(renderFooter(css, loadableState, preloadedState));
          return res.send();
      });
  });

  // Trigger sagas for component to run
    // https://github.com/yelouafi/redux-saga/issues/255#issuecomment-210275959
    loadableState = await getLoadableState(appWithRouter);

    // Dispatch a close event so sagas stop listening after they're resolved
    store.close();


});



api.get('/assets', db.getAssets)

api.get('/assets/:filter', db.getAssetsByFilter)

api.get('/assets/asset/:id', db.getAssetById)

api.get('/domains', db.getDomains)

api.get('/domains2', db.getDomains2)

api.get('/languages', db.getLanguages)

api.get('/workflows', db.getWorkflows)

api.get('/assettypes', db.getAssetTypes)



app.use('/api', api);

app.listen(63145);


