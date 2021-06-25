import {ActionType} from '../../constants/action-type';
import {INITIAL_REVIEWS_STATE} from './reviews-state';

import {doAddReview} from './reviews-actions';

export const reviewsReducer = (state = INITIAL_REVIEWS_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return doAddReview(state, action.payload);
  }
  return state;
};
