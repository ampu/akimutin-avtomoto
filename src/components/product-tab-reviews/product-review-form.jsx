import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';
import getClassName from 'classnames';
import {range} from 'lodash';
import FocusTrap from 'focus-trap-react';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {localReviewShape} from '../../types/review-types';
import {formatStars} from '../../helpers/review-helpers';
import {withReviewFormState} from '../../hocs/with-review-form-state';

const RATING_CONSTRAINT = {
  min: 1,
  max: 5,
};

const ProductReviewForm = ({
  product, localReview,
  hasBounceAnimation,
  isRejected, authorError, commentError,
  onFormSubmit, onCloseButtonClick, onContainerMouseDown,
  authorInputRef, commentInputRef,
  onAuthorInputChange,
  onRatingInputChange,
  onAdvantagesInputChange,
  onDisadvantagesInputChange,
  onCommentInputChange,
}) => {
  const formClassName = getClassName({
    [`bounce`]: hasBounceAnimation,
    [`shake`]: isRejected,
  });

  const authorInputClassName = getClassName({
    [`product-review-form__input`]: true,
    [`product-review-form__input--required`]: true,
    [`product-review-form__input--error`]: !!authorError,
  });

  const commentInputClassName = getClassName({
    [`product-review-form__input`]: true,
    [`product-review-form__input--required`]: true,
    [`product-review-form__input--error`]: !!commentError,
  });

  return (
    <FocusTrap>
      <section className="product-review-form" onMouseDown={onContainerMouseDown}>
        <form
          className={formClassName}
          method="post"
          action={generatePath(LocalPath.PRODUCT_REVIEW_POST, product)}
          onSubmit={onFormSubmit}
        >
          <h2>Оставить отзыв</h2>

          <button
            type="button"
            className="product-review-form__close-button"
            onClick={onCloseButtonClick}
          >
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z"
                fill="#9f9e9e"
              />
            </svg>
            <span className="visually-hidden">Закрыть</span>
          </button>

          <label className="product-review-form__author">
            {authorError && <span className="product-review-form__error-message">{authorError}</span>}
            <input
              ref={authorInputRef}
              type="text"
              className={authorInputClassName}
              name="author"
              placeholder="Имя"
              value={localReview.author}
              onChange={onAuthorInputChange}
              autoFocus
            />
          </label>

          <div className="product-review-form__rating">
            <fieldset>
              <legend>Оцените товар:</legend>

              {range(RATING_CONSTRAINT.min, RATING_CONSTRAINT.max + 1).map((value) => {
                const ratingId = `product-review-form-rating-${value}`;

                return (
                  <Fragment key={ratingId}>
                    <input
                      type="radio"
                      id={ratingId}
                      className="visually-hidden"
                      name="rating"
                      value={value}
                      checked={localReview.rating === value}
                      onChange={onRatingInputChange}
                    />
                    <label htmlFor={ratingId}>
                      <svg width="27" height="28" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z"
                          fill="#d12136"/>
                      </svg>
                      <span className="visually-hidden">{value} {formatStars(value)}</span>
                    </label>
                  </Fragment>
                );
              })}
            </fieldset>
          </div>

          <label className="product-review-form__advantages">
            <input
              type="text"
              className="product-review-form__input"
              name="advantages"
              placeholder="Достоинства"
              value={localReview.advantages}
              onChange={onAdvantagesInputChange}
            />
          </label>

          <label className="product-review-form__disadvantages">
            <input
              type="text"
              className="product-review-form__input"
              name="disadvantages"
              placeholder="Недостатки"
              value={localReview.disadvantages}
              onChange={onDisadvantagesInputChange}
            />
          </label>

          <label className="product-review-form__comment">
            {commentError && <span className="product-review-form__error-message">{commentError}</span>}
            <textarea
              ref={commentInputRef}
              className={commentInputClassName}
              name="comment"
              placeholder="Комментарий"
              value={localReview.comment}
              onChange={onCommentInputChange}
            />
          </label>

          <button type="submit">Оставить отзыв</button>
        </form>
      </section>
    </FocusTrap>
  );
};

ProductReviewForm.propTypes = {
  product: productShape.isRequired,
  localReview: localReviewShape.isRequired,
  hasBounceAnimation: PropTypes.bool.isRequired,
  isRejected: PropTypes.bool.isRequired,
  authorError: PropTypes.string.isRequired,
  commentError: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  onContainerMouseDown: PropTypes.func.isRequired,
  authorInputRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLInputElement),
  }).isRequired,
  commentInputRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLTextAreaElement),
  }).isRequired,
  onAuthorInputChange: PropTypes.func.isRequired,
  onRatingInputChange: PropTypes.func.isRequired,
  onAdvantagesInputChange: PropTypes.func.isRequired,
  onDisadvantagesInputChange: PropTypes.func.isRequired,
  onCommentInputChange: PropTypes.func.isRequired,
};

const ProductReviewFormWithState = withReviewFormState(ProductReviewForm);

export {ProductReviewForm, ProductReviewFormWithState};
