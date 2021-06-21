import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {ProductPage} from '../product-page/product-page';
import {NotFoundPage} from '../not-found-page/not-found-page';

import {PRODUCT_PATHS} from '../../constants/local-path';

const App = () => {
  return (
    <Switch>
      <Route exact path={PRODUCT_PATHS}>
        <ProductPage/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  );
};

export {App};
