import React, {useCallback} from 'react';
import {NavLink, Switch, generatePath, Route, useHistory, matchPath} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductTabSpecifications} from './product-tab-specifications';
import {ProductTabContacts} from './product-tab-contacts';
import {ProductTabReviews} from './product-tab-reviews';
import {useKeyDownStack} from '../../hooks/use-keydown-stack';

const TABS = [
  {
    key: `specifications`,
    path: LocalPath.PRODUCT_SPECIFICATIONS,
    title: `Характеристики`,
  },
  {
    key: `reviews`,
    path: LocalPath.PRODUCT_REVIEWS,
    title: `Отзывы`,
  },
  {
    key: `contacts`,
    path: LocalPath.PRODUCT_CONTACTS,
    title: `Контакты`,
  },
];

const ProductTabs = ({product}) => {
  const history = useHistory();

  const onDocumentKeyDown = useCallback((evt) => {
    if (evt.key === `Tab`) {
      evt.preventDefault();
      evt.stopPropagation();

      const activeTabIndex = TABS.findIndex((tab) => matchPath(history.location.pathname, {
        path: tab.path,
        exact: true,
      }));

      const nextTabOffset = activeTabIndex + (evt.shiftKey ? (TABS.length - 1) : 1);
      const nextTab = TABS[nextTabOffset % TABS.length];

      history.push(generatePath(nextTab.path, product));
    }
  }, [product, history]);

  useKeyDownStack(onDocumentKeyDown);

  return (
    <div className="product-tabs">
      <ul className="product-tabs__controls">
        {TABS.map((tab) => (
          <li key={tab.key}>
            <NavLink
              exact to={generatePath(tab.path, product)}
              className="product-tabs__control"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
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
