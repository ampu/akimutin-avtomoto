import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {productType} from '../../types/product-types';

const ProductTabSpecifications = ({className, specifications}) => {
  return (
    <section className={getClassName(`product-tab-specifications`, className)}>
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
  className: PropTypes.string,
  specifications: productType.specifications,
};

export {ProductTabSpecifications};
