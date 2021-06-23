import {DEFAULT_LOCAL_REVIEW, REVIEW_FORM_STORAGE_KEY} from '../constants/constants';

class LocalReviewStorage {
  /**
   * @param {Storage} storage
   * @param {string} key
   */
  constructor(storage, key) {
    this._storage = storage;
    this._key = key;
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

  setItem(localReview) {
    try {
      this._storage.setItem(this._key, JSON.stringify(localReview));
      return true;
    } catch (_error) {
      return false;
    }
  }
}

export const localReviewStorage = new LocalReviewStorage(localStorage, REVIEW_FORM_STORAGE_KEY);
