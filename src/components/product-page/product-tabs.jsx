import React from 'react';

import {ProductTabSpecifications} from './product-tab-specifications';
import {ProductTabContacts} from './product-tab-contacts';
import {ProductTabReviews} from './product-tab-reviews';

const ProductTabs = () => {
  return <>
    <ul>
      <li>Характеристики</li>
      <li>Отзывы</li>
      <li>Контакты</li>
    </ul>
    <ul>
      <li>
        <ProductTabSpecifications/>
      </li>
      <li>
        <ProductTabReviews/>
      </li>
      <li>
        <ProductTabContacts/>
      </li>
    </ul>
  </>;
};

export {ProductTabs};
