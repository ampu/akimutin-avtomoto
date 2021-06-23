import React, {useEffect} from 'react';
import {NavLink, Switch, generatePath, Route, useHistory, matchPath} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductTabSpecifications} from './product-tab-specifications';
import {ProductTabContacts} from './product-tab-contacts';
import {ProductTabReviews} from './product-tab-reviews';

const TABS = [
  {
    path: LocalPath.PRODUCT_SPECIFICATIONS,
    title: `Характеристики`,
  },
  {
    path: LocalPath.PRODUCT_REVIEWS,
    title: `Отзывы`,
  },
  {
    path: LocalPath.PRODUCT_CONTACTS,
    title: `Контакты`,
  },
];

const ProductTabs = ({product}) => {
  const history = useHistory();

  useEffect(() => {
    const onDocumentKeyDown = (evt) => {
      if (evt.key === `Tab`) {
        evt.preventDefault();
        evt.stopPropagation();

        const activeTabIndex = TABS.findIndex((tab) => matchPath(history.location.pathname, {
          path: tab.path,
          exact: true,
        }));

        const nextTab = TABS[(activeTabIndex + 1) % TABS.length];

        history.push(generatePath(nextTab.path, product));
      }
    };

    document.addEventListener(`keydown`, onDocumentKeyDown);

    return () => {
      document.removeEventListener(`keydown`, onDocumentKeyDown);
    };
  }, [product, history]);

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
