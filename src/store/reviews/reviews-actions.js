import {ActionType} from '../../constants/action-type';

const addReview = (review) => ({type: ActionType.ADD_REVIEW, payload: review});
const doAddReview = (state, review) => ({
  ...state,
  reviews: [review].concat(state.reviews),
});

export {
  addReview, doAddReview,
};
