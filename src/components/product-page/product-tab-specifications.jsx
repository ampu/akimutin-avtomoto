import React, {Fragment} from 'react';

import {productType} from '../../types/product-types';

const ProductTabSpecifications = ({specifications}) => {
  return (
    <dl className="product-tab-specifications">
      {specifications.map((specification) => {
        return (
          <Fragment key={specification.key}>
            <dt className="product-tab-specifications__key">{specification.key}</dt>
            <dd className="product-tab-specifications__value">{specification.value}</dd>
          </Fragment>
        );
      })}
    </dl>
  );
};

ProductTabSpecifications.propTypes = {
  specifications: productType.specifications,
};

export {ProductTabSpecifications};
