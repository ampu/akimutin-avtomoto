import React, {useState} from 'react';
import getClassName from 'classnames';
import {clamp} from 'lodash';

import {productShape} from '../../types/product-types';

const ProductSlider = ({product}) => {
  const lastImageIndex = product.thumbnails.length - 1;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onPreviousArrowClick = () => {
    setActiveImageIndex((previousActiveImageIndex) => (
      clamp(previousActiveImageIndex - 1, 0, lastImageIndex)
    ));
  };

  const onNextArrowClick = () => {
    setActiveImageIndex((previousActiveImageIndex) => (
      clamp(previousActiveImageIndex + 1, 0, lastImageIndex)
    ));
  };

  const onThumbnailButtonClick = (evt) => {
    setActiveImageIndex(+evt.currentTarget.dataset.thumbnailIndex);
  };

  const activeImageContainerClassName = getClassName({
    [`product-slider__active-image-container`]: true,
    [`product-slider__active-image-container--new-model`]: true,
  });

  const previousArrowClassName = getClassName({
    [`product-slider__arrow-button`]: true,
    [`product-slider__arrow-button--previous`]: true,
  });

  const nextArrowPathClassName = getClassName({
    [`product-slider__arrow-button`]: true,
    [`product-slider__arrow-button--next`]: true,
  });

  return (
    <div className="product-slider">
      <figure className={activeImageContainerClassName}>
        <img
          className="product-slider__active-image"
          src={product.images[activeImageIndex]}
          alt={`Изображение ${product.title}`}
          width="600" height="375"
        />
      </figure>

      <div className="product-slider__controls">
        <button type="button"
          className={previousArrowClassName}
          aria-label={`Выбрать предыдущее изображение ${product.title}`}
          onClick={onPreviousArrowClick}
          disabled={activeImageIndex === 0}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513"/>
          </svg>
        </button>

        <button type="button"
          className={nextArrowPathClassName}
          aria-label={`Выбрать следующее изображение ${product.title}`}
          onClick={onNextArrowClick}
          disabled={activeImageIndex === lastImageIndex}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513"/>
          </svg>
        </button>

        <ul className="product-slider__thumbnails">
          {product.thumbnails.map((thumbnail, thumbnailIndex) => (
            <li key={thumbnail} className="product-slider__thumbnails-item">
              <button
                type="button"
                className="product-slider__thumbnail-button"
                aria-label={`Выбрать изображение ${product.title} №${thumbnailIndex + 1}`}
                onClick={onThumbnailButtonClick}
                data-thumbnail-index={thumbnailIndex}
                disabled={activeImageIndex === thumbnailIndex}
              >
                <img
                  className="product-slider__thumbnail-image"
                  src={thumbnail}
                  alt={`Превью ${product.title} №${thumbnailIndex + 1}`}
                  width="128" height="80"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  product: productShape.isRequired,
};

export {ProductSlider};
