import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Switch, generatePath, Route} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductTabSpecifications} from '../product-tab-specifications/product-tab-specifications';
import {ProductTabContacts} from '../product-tab-contacts/product-tab-contacts';
import {ProductTabReviewsWithReviewForm as ProductTabReviews} from '../product-tab-reviews/product-tab-reviews';
import {withActiveTab} from '../../hocs/with-active-tab';

const ProductTabs = ({product, tabs}) => {
  return (
    <div className="product-tabs">
      <ul className="product-tabs__controls">
        {tabs.map((tab) => (
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
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const ProductTabsWithActiveTab = withActiveTab(ProductTabs);

export {ProductTabs, ProductTabsWithActiveTab};
