import React, {Fragment} from 'react';

import {productType} from '../../types/product-types';

const ProductTabSpecifications = ({specifications}) => {
  return (
    <section className="product-tab-specifications">
      <h2 className="visually-hidden">Характеристики</h2>

      <dl className="product-tab-specifications__list">
        {specifications.map((specification) => {
          return (
            <Fragment key={specification.key}>
              <dt className="product-tab-specifications__key">{specification.key}</dt>
              <dd className="product-tab-specifications__value">{specification.value}</dd>
            </Fragment>
          );
        })}
      </dl>
    </section>
  );
};

ProductTabSpecifications.propTypes = {
  specifications: productType.specifications,
};

export {ProductTabSpecifications};
