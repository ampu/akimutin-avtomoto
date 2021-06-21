import React from 'react';
import {NavLink, Switch, generatePath, Route} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductTabSpecifications} from './product-tab-specifications';
import {ProductTabContacts} from './product-tab-contacts';
import {ProductTabReviews} from './product-tab-reviews';

const ProductTabs = ({product}) => {
  return (
    <div className="product-tabs">
      <ul className="product-tabs__controls">
        <li>
          <NavLink
            exact to={generatePath(LocalPath.PRODUCT_SPECIFICATIONS, product)}
            className="product-tabs__control"
          >
            Характеристики
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to={generatePath(LocalPath.PRODUCT_REVIEWS, product)}
            className="product-tabs__control"
          >
            Отзывы
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to={generatePath(LocalPath.PRODUCT_CONTACTS, product)}
            className="product-tabs__control"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path={generatePath(LocalPath.PRODUCT_SPECIFICATIONS, product)}>
          <ProductTabSpecifications specifications={product.specifications}/>
        </Route>
        <Route exact path={generatePath(LocalPath.PRODUCT_REVIEWS, product)}>
          <ProductTabReviews product={product}/>
        </Route>
        <Route exact path={generatePath(LocalPath.PRODUCT_CONTACTS, product)}>
          <ProductTabContacts/>
        </Route>
      </Switch>
    </div>
  );
};

ProductTabs.propTypes = {
  product: productShape.isRequired,
};

export {ProductTabs};
