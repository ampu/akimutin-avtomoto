import React from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {reviewsType} from '../../types/review-types';

import {ProductReviewWithIntervalRerender as ProductReview} from './product-review';
import {ProductReviewFormWithState as ProductReviewForm} from './product-review-form';
import {withReviewForm} from '../../hocs/with-review-form';

const ProductTabReviews = ({
  className,
  product,
  reviews,
  hasReviewForm,
  onWriteReviewLinkClick,
  onReviewFormClose,
  onReviewFormSubmit,
}) => {
  const isEmpty = reviews.length === 0;

  return (
    <section className={getClassName(`product-tab-reviews`, className)}>
      <h2 className="visually-hidden">Отзывы</h2>

      <Link
        to={generatePath(LocalPath.PRODUCT_REVIEW_WRITE, product)}
        className="product-tab-reviews__write-review-link"
        onClick={onWriteReviewLinkClick}
      >
        Оставить отзыв
      </Link>

      {hasReviewForm && (
        <ProductReviewForm
          product={product}
          onClose={onReviewFormClose}
          onSubmit={onReviewFormSubmit}
        />
      )}

      {isEmpty && (
        <p className="product-tab-reviews__empty">
          Никто ещё не оставил отзыв на «{product.title}».
        </p>
      )}
      {!isEmpty && (
        <ul className="product-tab-reviews__list">
          {reviews.map((review) => (
            <li key={review.id} className="product-tab-reviews__list-item">
              <ProductReview review={review}/>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

ProductTabReviews.propTypes = {
  className: PropTypes.string,
  product: productShape.isRequired,
  reviews: reviewsType,
  hasReviewForm: PropTypes.bool.isRequired,
  onWriteReviewLinkClick: PropTypes.func.isRequired,
  onReviewFormClose: PropTypes.func.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
};

const ProductTabReviewsWithReviewForm = withReviewForm(ProductTabReviews);

export {ProductTabReviews, ProductTabReviewsWithReviewForm};
