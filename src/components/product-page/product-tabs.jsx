import React from 'react';
import {NavLink, Route, generatePath} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductTabSpecifications} from '../product-tab-specifications/product-tab-specifications';
import {ProductTabContacts} from '../product-tab-contacts/product-tab-contacts';
import {ProductTabReviewsWithReviewForm as ProductTabReviews} from '../product-tab-reviews/product-tab-reviews';

const TABS = [
  {
    path: LocalPath.PRODUCT_SPECIFICATIONS,
    title: `Характеристики`,
    component: ProductTabSpecifications,
    onCreateProps: (product) => ({
      specifications: product.specifications,
    }),
  },
  {
    path: LocalPath.PRODUCT_REVIEWS,
    title: `Отзывы`,
    component: ProductTabReviews,
    onCreateProps: (product) => ({
      product,
    }),
  },
  {
    path: LocalPath.PRODUCT_CONTACTS,
    title: `Контакты`,
    component: ProductTabContacts,
    onCreateProps: () => ({}),
  },
];

const ProductTabs = ({product}) => {
  const onLinkFocus = (evt) => {
    evt.target.click();
  };

  return (
    <ul className="product-tabs">
      {TABS.map((tab) => (
        <li key={tab.path} className="product-tabs__tab-item">
          <NavLink
            className="product-tabs__tab-link"
            exact to={generatePath(tab.path, product)}
            onFocus={onLinkFocus}
          >
            {tab.title}
          </NavLink>
          <Route exact path={tab.path}>
            <tab.component
              className="product-tabs__tab-content"
              {...tab.onCreateProps(product)}
            />
          </Route>
        </li>
      ))}
    </ul>
  );
};

ProductTabs.propTypes = {
  product: productShape.isRequired,
};

export {ProductTabs};
