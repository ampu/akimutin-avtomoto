import {DEFAULT_LOCAL_REVIEW, REVIEW_STORAGE_KEY, REVIEW_STORAGE_THROTTLING_TIMEOUT} from '../constants/constants';
import {createThrottlingHelper} from './callback-helpers';

class LocalReviewStorage {
  /**
   * @param {Storage} storage
   * @param {string} key
   */
  constructor(storage, key) {
    this._storage = storage;
    this._key = key;
    this._throllingHelper = createThrottlingHelper(REVIEW_STORAGE_THROTTLING_TIMEOUT);
  }

  /**
   * @param {LocalReview} defaultValue
   * @return {LocalReview}
   */
  getItem(defaultValue = DEFAULT_LOCAL_REVIEW) {
    try {
      return JSON.parse(this._storage.getItem(this._key)) || defaultValue;
    } catch (_error) {
      return defaultValue;
    }
  }

  /**
   * @param {LocalReview} localReview
   * @return {boolean}
   */
  setItem(localReview) {
    try {
      this._storage.setItem(this._key, JSON.stringify(localReview));
      return true;
    } catch (_error) {
      return false;
    }
  }

  /**
   * @param {LocalReview} localReview
   */
  setItemWithThrottling(localReview) {
    this._throllingHelper.schedule(() => {
      this.setItem(localReview);
    });
  }
}

export const localReviewStorage = new LocalReviewStorage(localStorage, REVIEW_STORAGE_KEY);
