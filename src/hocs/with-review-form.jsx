import React, {useCallback, useState} from 'react';

import {postReview} from '../helpers/review-helpers';
import {productShape} from '../types/product-types';

import {REVIEW_MOCKS} from '../mocks/review-mocks';

export const withReviewForm = (Component) => {
  const WithReviewForm = ({product, ...props}) => {
    const [reviews, setReviews] = useState(REVIEW_MOCKS);

    const [hasReviewForm, toggleReviewForm] = useState(false);

    const onWriteReviewLinkClick = useCallback((evt) => {
      evt.preventDefault();

      toggleReviewForm(true);
    }, []);

    const onReviewFormClose = useCallback(() => {
      toggleReviewForm(false);
    }, []);

    const onReviewFormSubmit = useCallback((localReview) => {
      toggleReviewForm(false);

      const review = postReview(product.id, localReview);

      setReviews((oldReviews) => [review].concat(oldReviews));
    }, [product.id]);

    return (
      <Component
        product={product}
        reviews={reviews}
        hasReviewForm={hasReviewForm}
        onWriteReviewLinkClick={onWriteReviewLinkClick}
        onReviewFormClose={onReviewFormClose}
        onReviewFormSubmit={onReviewFormSubmit}
        {...props}
      />
    );
  };

  WithReviewForm.propTypes = {
    product: productShape.isRequired,
  };

  WithReviewForm.displayName = `${Component.name}${WithReviewForm.name}`;

  return WithReviewForm;
};
