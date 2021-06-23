import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import getClassName from 'classnames';

import {reviewShape} from '../../types/review-types';
import {humanizeAsDurationFromNow, humanizeRating} from '../../helpers/review-helpers';
import {LocalPath} from '../../constants/local-path';
import {useIntervalRerender} from '../../hooks/use-interval-rerender';

const RERENDER_TIMEOUT = 60 * 1000;

const ProductReview = ({review}) => {
  useIntervalRerender(RERENDER_TIMEOUT);

  const ratingClassName = getClassName({
    [`product-review__rating`]: true,
    [`product-review__rating--stars-1`]: review.rating === 1,
    [`product-review__rating--stars-2`]: review.rating === 2,
    [`product-review__rating--stars-3`]: review.rating === 3,
    [`product-review__rating--stars-4`]: review.rating === 4,
    [`product-review__rating--stars-5`]: review.rating === 5,
  });

  return (
    <div className="product-review">
      <strong className="product-review__author">{review.author}</strong>

      <dl className="product-review__text-container">
        {review.advantages && <>
          <dt className="product-review__text-key product-review__text-key--advantages">Достоинства</dt>
          <dd className="product-review__text-value product-review__text-value--advantages">{review.advantages}</dd>
        </>}

        {review.disadvantages && <>
          <dt className="product-review__text-key product-review__text-key--disadvantages">Недостатки</dt>
          <dd className="product-review__text-value product-review__text-value--disadvantages">{review.disadvantages}</dd>
        </>}

        <dt className="product-review__text-key">Комментарий</dt>
        <dd className="product-review__text-value">{review.comment}</dd>
      </dl>

      <span className={ratingClassName}>
        {humanizeRating(review.rating)}
      </span>

      <span className="product-review__created-at">
        {humanizeAsDurationFromNow(review.createdAt)}
      </span>

      <Link
        to={generatePath(LocalPath.PRODUCT_REVIEW_RESPONSE, review)}
        className="product-review__response"
      >
        Ответить
      </Link>
    </div>
  );
};

ProductReview.propTypes = {
  review: reviewShape.isRequired,
};

export {ProductReview};
