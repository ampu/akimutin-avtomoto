import React, {useCallback, useState} from 'react';
import {Link, generatePath} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';

import {ProductReview} from './product-review';
import {ProductReviewForm} from './product-review-form';

import {REVIEW_MOCKS} from '../../mocks/review-mocks';

const ProductTabReviews = ({product}) => {
  const reviews = REVIEW_MOCKS;
  const isEmpty = reviews.length === 0;

  const [hasReviewForm, toggleReviewForm] = useState(false);

  const onWriteReviewLinkClick = (evt) => {
    evt.preventDefault();

    toggleReviewForm(true);
  };

  const onReviewFormClose = useCallback(() => {
    toggleReviewForm(false);
  }, []);

  return (
    <div className="product-tab-reviews">
      <Link
        to={generatePath(LocalPath.PRODUCT_REVIEW_WRITE, product)}
        className="product-tab-reviews__write-review-link"
        onClick={onWriteReviewLinkClick}
      >
        Оставить отзыв
      </Link>
      {hasReviewForm && (
        <ProductReviewForm product={product} onClose={onReviewFormClose}/>
      )}

      {isEmpty && (
        <p className="product-tab-reviews__empty">Никто ещё не оставил отзыв на «{product.title}».</p>
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
    </div>
  );
};

ProductTabReviews.propTypes = {
  product: productShape.isRequired,
};

export {ProductTabReviews};
