import React, {useCallback, useState} from 'react';
import {clamp} from 'lodash';

import {productShape} from '../types/product-types';

export const withActiveImage = (Component) => {
  const WithActiveImage = ({product, ...props}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const lastImageIndex = product.thumbnails.length - 1;

    const onBackArrowClick = useCallback(() => {
      setActiveImageIndex((previousActiveImageIndex) => (
        clamp(previousActiveImageIndex - 1, 0, lastImageIndex)
      ));
    }, [lastImageIndex]);

    const onNextArrowClick = useCallback(() => {
      setActiveImageIndex((previousActiveImageIndex) => (
        clamp(previousActiveImageIndex + 1, 0, lastImageIndex)
      ));
    }, [lastImageIndex]);

    return (
      <Component
        product={product}
        activeImageIndex={activeImageIndex}
        isBackArrowEnabled={activeImageIndex !== 0}
        onBackArrowClick={onBackArrowClick}
        isNextArrowEnabled={activeImageIndex !== lastImageIndex}
        onNextArrowClick={onNextArrowClick}
        {...props}
      />
    );
  };

  WithActiveImage.propTypes = {
    product: productShape,
  };

  WithActiveImage.displayName = `${Component.name}${WithActiveImage.name}`;

  return WithActiveImage;
};
