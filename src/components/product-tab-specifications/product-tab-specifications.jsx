import React, {Fragment} from 'react';

import {productType} from '../../types/product-types';

const ProductTabSpecifications = ({specifications}) => {
  return (
    <section className="product-tab-specifications">
      <h2 className="visually-hidden">Характеристики</h2>
      <dl>
        {specifications.map((specification) => (
          <Fragment key={specification.key}>
            <dt>{specification.key}</dt>
            <dd>{specification.value}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};

ProductTabSpecifications.propTypes = {
  specifications: productType.specifications,
};

export {ProductTabSpecifications};
