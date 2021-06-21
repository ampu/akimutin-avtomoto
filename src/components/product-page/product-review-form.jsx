import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {deserializeReview} from '../../helpers/review-helpers';

const ErrorMessage = {
  REQUIRED: `Пожалуйста, заполните поле`,
};

const ProductReviewForm = ({product, onClose}) => {
  const formRef = useRef(null);
  const [authorError, setAuthorError] = useState(``);
  const [commentError, setCommentError] = useState(``);

  const onContainerClick = (evt) => {
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

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const review = deserializeReview(formRef.current);
    let isValid = true;

    if (!review.author) {
      isValid = false;
      setAuthorError(ErrorMessage.REQUIRED);
    }

    if (!review.comment) {
      isValid = false;
      setCommentError(ErrorMessage.REQUIRED);
    }

    if (isValid) {
      onClose();
    }
  };

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
    <section className="product-review-form" onClick={onContainerClick}>
      <form
        ref={formRef}
        className="product-review-form__form"
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
          <input type="text" className={authorInputClassName} name="author" placeholder="Имя"/>
        </label>

        <fieldset className="product-review-form__rating">
          <legend className="product-review-form__rating-legend">
            Оцените товар:
          </legend>

          <label>
            <input className="product-review-form__input--rating" type="checkbox" name="rating" value="1"/>
            <span className="product-review-form__rating-icon"/>
          </label>
          <label>
            <input className="product-review-form__rating-input" type="checkbox" name="rating" value="2"/>
            <span className="product-review-form__rating-icon"/>
          </label>
          <label>
            <input className="product-review-form__rating-input" type="checkbox" name="rating" value="3"/>
            <span className="product-review-form__rating-icon"/>
          </label>
          <label>
            <input className="product-review-form__rating-input" type="checkbox" name="rating" value="4"/>
            <span className="product-review-form__rating-icon"/>
          </label>
          <label>
            <input className="product-review-form__rating-input" type="checkbox" name="rating" value="5"/>
            <span className="product-review-form__rating-icon"/>
          </label>
        </fieldset>

        <label className="product-review-form__advantages">
          <input type="text" className="product-review-form__input" name="advantages" placeholder="Достоинства"/>
        </label>

        <label className="product-review-form__disadvantages">
          <input type="text" className="product-review-form__input" name="disadvantages" placeholder="Недостатки"/>
        </label>

        <label className="product-review-form__comment">
          {commentError && <span className="product-review-form__error-message">{commentError}</span>}
          <textarea
            className={commentInputClassName}
            name="comment"
            placeholder="Комментарий"
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
};

export {ProductReviewForm};
