import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {ProductPage} from '../product-page/product-page';
import {NotFoundPage} from '../not-found-page/not-found-page';

import {RoutePath} from '../../constants/route-path';

const App = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.INDEX}>
        <ProductPage/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  );
};

export {App};
