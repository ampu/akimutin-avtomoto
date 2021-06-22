import PropTypes from 'prop-types';

/**
 * @typedef {Object} LocalReview
 * @property {number} rating
 * @property {string} author
 * @property {string} advantages
 * @property {string} disadvantages
 * @property {string} comment
 */

const reviewShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  advantages: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
});

const reviewsType = PropTypes.arrayOf(reviewShape.isRequired).isRequired;

export {
  reviewShape,
  reviewsType,
};
