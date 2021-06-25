import {Domain} from '../domain';

export const selectReviews = (state) => state[Domain.REVIEWS].reviews;
