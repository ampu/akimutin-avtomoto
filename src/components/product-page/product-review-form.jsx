import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import {productShape} from '../../types/product-types';
import {deserializeLocalReview} from '../../helpers/review-helpers';

const ErrorMessage = {
  NONE: ``,
  REQUIRED: `Пожалуйста, заполните поле`,
};

const ProductReviewForm = ({product, onClose, onSubmit}) => {
  const formRef = useRef(null);
  const [authorError, setAuthorError] = useState(ErrorMessage.NONE);
  const [commentError, setCommentError] = useState(ErrorMessage.NONE);

  const onContainerClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const onCloseButtonClick = () => {
    onClose();
  };

  useEffect(() => {
    document.body.classList.add(`page-body--modal`);

    return () => {
      document.body.classList.remove(`page-body--modal`);
    };
  }, []);

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
    if (authorError === ErrorMessage.REQUIRED && evt.target.value) {
      setAuthorError(ErrorMessage.NONE);
    }
  };

  const onCommentInputChange = (evt) => {
    if (commentError === ErrorMessage.REQUIRED && evt.target.value) {
      setCommentError(ErrorMessage.NONE);
    }
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const localReview = deserializeLocalReview(formRef.current);
    let isValid = true;

    if (!localReview.author) {
      isValid = false;
      setAuthorError(ErrorMessage.REQUIRED);
    }

    if (!localReview.comment) {
      isValid = false;
      setCommentError(ErrorMessage.REQUIRED);
    }

    if (isValid) {
      onSubmit(localReview);
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
          <input
            type="text"
            className={authorInputClassName}
            name="author"
            placeholder="Имя"
            onChange={onAuthorInputChange}
          />
        </label>

        <div className="product-review-form__rating-container">
          <fieldset className="product-review-form__rating">
            <legend className="product-review-form__rating-legend">
              Оцените товар:
            </legend>

            <input className="visually-hidden" type="radio" name="rating" value="0" defaultChecked disabled/>

            <label htmlFor="product-review-form-rating-1">
              <span className="visually-hidden">1 звезда</span>
            </label>
            <input id="product-review-form-rating-1" className="visually-hidden" type="radio" name="rating" value="1"/>

            <label htmlFor="product-review-form-rating-2">
              <span className="visually-hidden">2 звезды</span>
            </label>
            <input id="product-review-form-rating-2" className="visually-hidden" type="radio" name="rating" value="2"/>

            <label htmlFor="product-review-form-rating-3">
              <span className="visually-hidden">3 звезды</span>
            </label>
            <input id="product-review-form-rating-3" className="visually-hidden" type="radio" name="rating" value="3"/>

            <label htmlFor="product-review-form-rating-4">
              <span className="visually-hidden">4 звезды</span>
            </label>
            <input id="product-review-form-rating-4" className="visually-hidden" type="radio" name="rating" value="4"/>

            <label htmlFor="product-review-form-rating-5">
              <span className="visually-hidden">5 звёзд</span>
            </label>
            <input id="product-review-form-rating-5" className="visually-hidden" type="radio" name="rating" value="5"/>
          </fieldset>
        </div>

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
