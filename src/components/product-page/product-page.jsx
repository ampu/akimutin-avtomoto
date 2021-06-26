import React from 'react';

import {productShape} from '../../types/product-types';

import {Header} from '../header/header';
import {ProductSliderWithActiveImage as ProductSlider} from './product-slider';
import {ProductInformation} from './product-information';
import {ProductTabsWithActiveTab as ProductTabs} from './product-tabs';
import {Footer} from '../footer/footer';

import {PRODUCT_MOCK} from '../../mocks/product-mock';

const ProductPage = ({product = PRODUCT_MOCK}) => {
  return <>
    <Header/>
    <main className="product-page">
      <ProductInformation product={product}/>
      <ProductSlider product={product}/>
      <ProductTabs product={product}/>
    </main>
    <Footer/>
  </>;
};

ProductPage.propTypes = {
  product: productShape,
};

export {ProductPage};
