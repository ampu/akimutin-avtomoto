import React from 'react';

import {Header} from '../header/header';
import {ProductSlider} from './product-slider';
import {ProductInformation} from './product-information';
import {ProductTabs} from './product-tabs';
import {Footer} from '../footer/footer';

const ProductPage = () => {
  return <>
    <Header/>
    <main className="page-main page-main--not-found">
      <ProductSlider/>
      <ProductInformation/>
      <ProductTabs/>
    </main>
    <Footer/>
  </>;
};

export {ProductPage};
