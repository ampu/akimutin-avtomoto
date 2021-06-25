import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {Domain} from './domain';
import {reviewsReducer} from './reviews/reviews-reducer';
import {INITIAL_REVIEWS_STATE} from './reviews/reviews-state';

const rootReducer = combineReducers({
  [Domain.REVIEWS]: reviewsReducer,
});

const initialState = {
  [Domain.REVIEWS]: INITIAL_REVIEWS_STATE,
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
