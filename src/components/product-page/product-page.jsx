import React from 'react';

import {Header} from '../header/header';
import {ProductSlider} from './product-slider';
import {ProductInformation} from './product-information';
import {ProductTabs} from './product-tabs';
import {Footer} from '../footer/footer';

import {PRODUCT_MOCK} from '../../mocks/product-mock';

const ProductPage = () => {
  const product = PRODUCT_MOCK;

  return <>
    <Header/>
    <main className="page-main page-main--product-page">
      <ProductSlider product={product}/>
      <ProductInformation product={product}/>
      <ProductTabs product={product}/>
    </main>
    <Footer/>
  </>;
};

export {ProductPage};
