import React from 'react';
import {Link} from 'react-router-dom';
import getClassName from 'classnames';

import {RoutePath} from '../../constants/route-path';
import {productShape} from '../../types/product-types';

const ProductInformation = ({product}) => {
  return (
    <section className="product-information">
      <h1 className="product-information__title page-title">Марпех 11</h1>

      <ul className="product-information__features">
        {product.features.map((feature) => {
          const className = getClassName({
            [`product-information__features-item`]: true,
            [`product-information__features-item--{feature.key}`]: true,
          });
          return (
            <li key={feature.key} className={className}>{feature.value}</li>
          );
        })}
      </ul>

      <p className="product-information__prices">
        <span className="product-information__price">{product.price}</span>
        <span className="product-information__old-price">{product.oldPrice}</span>
      </p>

      <Link className="product-information__buy-car-button" to={RoutePath.BUY_CAR}>
        Оставить заявку
      </Link>

      <Link className="product-information__loan-car-button" to={RoutePath.LOAN_CAR}>
        В кредит от {product.creditPrice}
      </Link>
    </section>
  );
};

ProductInformation.propTypes = {
  product: productShape.isRequired,
};

export {ProductInformation};
