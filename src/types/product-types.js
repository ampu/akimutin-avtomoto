import PropTypes from 'prop-types';

export const productShape = PropTypes.shape({
  isNewModel: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});
