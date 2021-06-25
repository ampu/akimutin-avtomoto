import {postReview} from '../../helpers/review-helpers';
import {addReview} from './reviews-actions';

/**
 * @param {string} productId
 * @param {LocalReview} localReview
 * @return {(function(*): Promise<void>)}
 */
export const addLocalReview = (productId, localReview) => async (dispatch) => {
  const review = postReview(productId, localReview);

  dispatch(addReview(review));
};
