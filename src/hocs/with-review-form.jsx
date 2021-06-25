import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {productShape} from '../types/product-types';
import {reviewsType} from '../types/review-types';
import {selectReviews} from '../store/reviews/reviews-selectors';
import {addLocalReview} from '../store/reviews/reviews-operations';

export const withReviewForm = (Component) => {
  const WithReviewForm = ({product, reviews, onAddReview, ...props}) => {
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

      onAddReview(product.id, localReview);
    }, [onAddReview, product.id]);

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
    reviews: reviewsType,
    onAddReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    reviews: selectReviews(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onAddReview(productId, localReview) {
      dispatch(addLocalReview(productId, localReview));
    },
  });

  WithReviewForm.displayName = `${Component.name}${WithReviewForm.name}`;

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};
