import React from 'react';
import {Link} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {addSpecialMillionSeparator, formatMoney} from '../../helpers/product-helpers';

const ProductInformation = ({product}) => {
  return (
    <section className="product-information">
      <h1>Марпех 11</h1>

      <ul className="product-information__features">
        {product.features.map((feature) => {
          const className = getClassName({
            [`product-information__features-item`]: true,
            [`product-information__features-item--${feature.key}`]: true,
          });
          return (
            <li key={feature.key} className={className}>{feature.value}</li>
          );
        })}
      </ul>

      <p className="product-information__prices">
        <strong>{formatMoney(product.price)}&nbsp;₽</strong>
        <span>{addSpecialMillionSeparator(formatMoney(product.oldPrice))}&nbsp;₽</span>
      </p>

      <Link className="product-information__buy-car-button" to={LocalPath.BUY_CAR}>
        Оставить заявку
      </Link>

      <Link className="product-information__loan-car-button" to={LocalPath.LOAN_CAR}>
        В кредит от {formatMoney(product.creditPrice)}&nbsp;₽
      </Link>
    </section>
  );
};

ProductInformation.propTypes = {
  product: productShape.isRequired,
};

export {ProductInformation};
