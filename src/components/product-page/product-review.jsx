import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import getClassName from 'classnames';

import {reviewShape} from '../../types/reviews-type';
import {formatStars, humanizeAsDurationFromNow} from '../../helpers/review-helpers';
import {LocalPath} from '../../constants/local-path';

const ProductReview = ({review}) => {
  const ratingClassName = getClassName({
    [`product-review__rating`]: true,
    [`product-review__rating--recommended`]: review.isRecommended,
  });

  return (
    <div className="product-review">
      <strong className="product-review__author">{review.author}</strong>

      <dl className="product-review__text-container">
        <dt className="product-review__text-key product-review__text-key--advantages">Достоинства</dt>
        <dd className="product-review__text-value product-review__text-value--advantages">{review.advantages}</dd>

        <dt className="product-review__text-key product-review__text-key--disadvantages">Недостатки</dt>
        <dd className="product-review__text-value product-review__text-value--disadvantages">{review.disadvantages}</dd>

        <dt className="product-review__text-key">Комментарий</dt>
        <dd className="product-review__text-value">{review.comment}</dd>
      </dl>

      <span className={ratingClassName}>
        <span className="visually-hidden1">{review.rating} {formatStars(review.rating)}</span>
      </span>

      <span className="product-review__created-at">{humanizeAsDurationFromNow(review.createdAt)}</span>

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
