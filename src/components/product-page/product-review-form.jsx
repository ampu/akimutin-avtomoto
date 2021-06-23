import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';
import getClassName from 'classnames';
import {range} from 'lodash';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {formatStars} from '../../helpers/review-helpers';
import {useMountedRef} from '../../hooks/use-mounted-ref';
import {DEFAULT_LOCAL_REVIEW} from '../../constants/constants';
import {localReviewStorage} from '../../helpers/local-review-storage';

const ErrorMessage = {
  NONE: ``,
  REQUIRED: `Пожалуйста, заполните поле`,
};

const RATING_CONSTRAINT = {
  min: 1,
  max: 5,
};

const ProductReviewForm = ({product, onClose, onSubmit}) => {
  const isMountedRef = useMountedRef();
  const [localReview, setLocalReview] = useState(DEFAULT_LOCAL_REVIEW);
  const [isRejected, setRejected] = useState(false);
  const [authorError, setAuthorError] = useState(ErrorMessage.NONE);
  const [commentError, setCommentError] = useState(ErrorMessage.NONE);

  useEffect(() => {
    setLocalReview(localReviewStorage.getItem());
  }, []);

  useEffect(() => {
    localReviewStorage.setItem(localReview);
  }, [localReview]);

  useEffect(() => {
    document.body.classList.add(`page-body--modal`);

    return () => {
      document.body.classList.remove(`page-body--modal`);
    };
  }, []);

  const onContainerMouseDown = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const onCloseButtonClick = () => {
    onClose();
  };

  useEffect(() => {
    const onDocumentKeyDown = (evt) => {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        evt.stopPropagation();

        onClose();
      }
    };

    document.addEventListener(`keydown`, onDocumentKeyDown);

    return () => {
      document.removeEventListener(`keydown`, onDocumentKeyDown);
    };
  }, [onClose]);

  const onAuthorInputChange = (evt) => {
    const author = evt.target.value || DEFAULT_LOCAL_REVIEW.author;

    setLocalReview((previousLocalReview) => ({
      ...previousLocalReview,
      author,
    }));

    if (authorError === ErrorMessage.REQUIRED && evt.target.value) {
      setAuthorError(ErrorMessage.NONE);
    }
  };

  const onAdvantagesInputChange = (evt) => {
    const advantages = evt.target.value || DEFAULT_LOCAL_REVIEW.advantages;

    setLocalReview((previousLocalReview) => ({
      ...previousLocalReview,
      advantages,
    }));
  };

  const onDisadvantagesInputChange = (evt) => {
    const disadvantages = evt.target.value || DEFAULT_LOCAL_REVIEW.disadvantages;

    setLocalReview((previousLocalReview) => ({
      ...previousLocalReview,
      disadvantages,
    }));
  };

  const onRatingInputChange = (evt) => {
    const rating = +evt.target.value || DEFAULT_LOCAL_REVIEW.rating;

    setLocalReview((previousLocalReview) => ({
      ...previousLocalReview,
      rating,
    }));
  };

  const onCommentInputChange = (evt) => {
    const comment = evt.target.value || DEFAULT_LOCAL_REVIEW.comment;

    setLocalReview((previousLocalReview) => ({
      ...previousLocalReview,
      comment,
    }));

    if (commentError === ErrorMessage.REQUIRED && evt.target.value) {
      setCommentError(ErrorMessage.NONE);
    }
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setRejected(false);

    setTimeout(() => {
      if (!isMountedRef.current) {
        return;
      }
      let isValid = true;

      if (!localReview.author) {
        isValid = false;
        setAuthorError(ErrorMessage.REQUIRED);
      }

      if (!localReview.comment) {
        isValid = false;
        setCommentError(ErrorMessage.REQUIRED);
      }

      if (!isValid) {
        setRejected(true);
        return;
      }

      onSubmit(localReview);
    });
  };

  const formClassName = getClassName({
    [`product-review-form__form`]: true,
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
    <section className="product-review-form" onMouseDown={onContainerMouseDown}>
      <form
        className={formClassName}
        method="post"
        action={generatePath(LocalPath.PRODUCT_REVIEW_POST, product)}
        onSubmit={onFormSubmit}
      >
        <h2 className="product-review-form__title">Оставить отзыв</h2>

        <button
          type="button"
          className="product-review-form__close-button"
          onClick={onCloseButtonClick}
        >
          <span className="visually-hidden">Закрыть</span>
        </button>

        <label className="product-review-form__author">
          {authorError && <span className="product-review-form__error-message">{authorError}</span>}
          <input
            type="text"
            className={authorInputClassName}
            name="author"
            placeholder="Имя"
            value={localReview.author}
            onChange={onAuthorInputChange}
            autoFocus
          />
        </label>

        <div className="product-review-form__rating-container">
          <fieldset className="product-review-form__rating">
            <legend className="product-review-form__rating-legend">
              Оцените товар:
            </legend>

            <input className="visually-hidden" type="radio" name="rating" value="0" checked={localReview.rating === 0} disabled/>

            {range(RATING_CONSTRAINT.min, RATING_CONSTRAINT.max + 1).map((value) => {
              const ratingId = `product-review-form-rating-${value}`;

              return (
                <Fragment key={ratingId}>
                  <label htmlFor={ratingId}>
                    <span className="visually-hidden">{value} {formatStars(value)}</span>
                  </label>
                  <input
                    type="radio"
                    id={ratingId}
                    className="visually-hidden"
                    name="rating"
                    value={value}
                    checked={localReview.rating === value}
                    onChange={onRatingInputChange}
                  />
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
            className={commentInputClassName}
            name="comment"
            placeholder="Комментарий"
            value={localReview.comment}
            onChange={onCommentInputChange}
          />
        </label>

        <button className="product-review-form__submit-button" type="submit">
          Оставить отзыв
        </button>
      </form>
    </section>
  );
};

ProductReviewForm.propTypes = {
  product: productShape.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {ProductReviewForm};
