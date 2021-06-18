import React from 'react';

import {ProductTabFeatures} from './product-tab-features';
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
        <ProductTabFeatures/>
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
