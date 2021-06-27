import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import {DEFAULT_LOCAL_REVIEW} from '../constants/constants';
import {MouseButton} from '../constants/mouse-button';
import {KeyboardKey} from '../constants/keyboard-key';
import {localReviewStorage} from '../helpers/local-review-storage';
import {useMountedRef} from '../hooks/use-mounted-ref';
import {useKeyDownStack} from '../hooks/use-keydown-stack';
import {useBounce} from '../hooks/use-bounce';

const ErrorMessage = {
  NONE: ``,
  REQUIRED: `Пожалуйста, заполните поле`,
};

export const withReviewFormState = (Component) => {
  const WithReviewFormState = ({
    onClose,
    onSubmit,
    ...props
  }) => {
    const hasBounceAnimation = useBounce();
    const isMountedRef = useMountedRef();

    const authorInputRef = useRef(null);
    const commentInputRef = useRef(null);

    const [localReview, setLocalReview] = useState(DEFAULT_LOCAL_REVIEW);
    const [isRejected, setRejected] = useState(false);
    const [authorError, setAuthorError] = useState(ErrorMessage.NONE);
    const [commentError, setCommentError] = useState(ErrorMessage.NONE);

    useEffect(() => {
      setLocalReview(localReviewStorage.getItem());
    }, []);

    useEffect(() => {
      localReviewStorage.setItemWithThrottling(localReview);
    }, [localReview]);

    useEffect(() => {
      document.body.classList.add(`page-body--modal`);

      return () => {
        document.body.classList.remove(`page-body--modal`);
      };
    }, []);

    const onContainerMouseDown = (evt) => {
      if (evt.button === MouseButton.LEFT && evt.target === evt.currentTarget) {
        onClose();
      }
    };

    const onDocumentKeyDown = useCallback((evt) => {
      if (evt.key === KeyboardKey.ESCAPE) {
        evt.preventDefault();
        evt.stopPropagation();

        onClose();
      }
    }, [onClose]);

    useKeyDownStack(onDocumentKeyDown);

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
        let focusInputRef = null;

        if (!localReview.author) {
          isValid = false;
          if (!focusInputRef) {
            focusInputRef = authorInputRef;
          }
          setAuthorError(ErrorMessage.REQUIRED);
        }

        if (!localReview.comment) {
          isValid = false;
          if (!focusInputRef) {
            focusInputRef = commentInputRef;
          }
          setCommentError(ErrorMessage.REQUIRED);
        }

        if (focusInputRef) {
          focusInputRef.current.focus();
        }

        if (!isValid) {
          setRejected(true);
          return;
        }

        onSubmit(localReview);
      });
    };

    return (
      <Component
        localReview={localReview}

        hasBounceAnimation={hasBounceAnimation}
        isRejected={isRejected}

        authorError={authorError}
        commentError={commentError}

        onFormSubmit={onFormSubmit}
        onCloseButtonClick={onClose}
        onContainerMouseDown={onContainerMouseDown}

        authorInputRef={authorInputRef}
        commentInputRef={commentInputRef}

        onAuthorInputChange={onAuthorInputChange}
        onRatingInputChange={onRatingInputChange}
        onAdvantagesInputChange={onAdvantagesInputChange}
        onDisadvantagesInputChange={onDisadvantagesInputChange}
        onCommentInputChange={onCommentInputChange}
        {...props}
      />
    );
  };

  WithReviewFormState.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  WithReviewFormState.displayName = `${Component.name}${WithReviewFormState.name}`;

  return WithReviewFormState;
};
