import React, {useCallback, useRef, useState} from 'react';
import {clamp} from 'lodash';

import {productShape} from '../types/product-types';

export const withActiveImage = (Component) => {
  const WithActiveImage = ({product, ...props}) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const touchRef = useRef();

    const lastImageIndex = product.thumbnails.length - 1;

    const activatePreviousImage = useCallback(() => {
      setActiveImageIndex((previousActiveImageIndex) => (
        clamp(previousActiveImageIndex - 1, 0, lastImageIndex)
      ));
    }, [lastImageIndex]);

    const activateNextImage = useCallback(() => {
      setActiveImageIndex((previousActiveImageIndex) => (
        clamp(previousActiveImageIndex + 1, 0, lastImageIndex)
      ));
    }, [lastImageIndex]);

    const onBackArrowClick = useCallback(() => {
      activatePreviousImage();
    }, [activatePreviousImage]);

    const onNextArrowClick = useCallback(() => {
      activateNextImage();
    }, [activateNextImage]);

    const onActiveImageTouchStart = useCallback((evt) => {
      evt.preventDefault();

      touchRef.current = {
        startX: evt.targetTouches[0].clientX,
        endX: evt.targetTouches[0].clientX,
      };
    }, []);

    const onActiveImageTouchMove = useCallback((evt) => {
      evt.preventDefault();

      touchRef.current.endX = evt.targetTouches[0].clientX;
    }, []);

    const onActiveImageTouchEnd = useCallback((evt) => {
      evt.preventDefault();

      const distance = touchRef.current.endX - touchRef.current.startX;

      if (distance < 0) {
        activateNextImage();
      } else if (distance > 0) {
        activatePreviousImage();
      }

      touchRef.current = undefined;
    }, [activateNextImage, activatePreviousImage]);

    return (
      <Component
        product={product}
        activeImageIndex={activeImageIndex}
        isBackArrowEnabled={activeImageIndex !== 0}
        onBackArrowClick={onBackArrowClick}
        isNextArrowEnabled={activeImageIndex !== lastImageIndex}
        onNextArrowClick={onNextArrowClick}
        onActiveImageTouchStart={onActiveImageTouchStart}
        onActiveImageTouchMove={onActiveImageTouchMove}
        onActiveImageTouchEnd={onActiveImageTouchEnd}
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
