import {nanoid as generateId} from 'nanoid';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

const RATING_TO_STAR_NOUN = {
  1: `звезда`,
  2: `звезды`,
  3: `звезды`,
  4: `звезды`,
  default: `звёзд`,
};

const RECOMMENDED_RATING_THRESHOLD = 3;

/**
 * @param {string} datetime
 * @return {string}
 */
const humanizeAsDurationFromNow = (datetime) => {
  return dayjs.duration(dayjs(datetime).diff(dayjs()))
    .humanize(true)
    .replace(/^([а-я]+ назад)$/, `1 $1`);
};

const serializeDateTime = (datetime) => {
  return dayjs(datetime).toDate().toISOString();
};

const formatStars = (rating) => {
  return RATING_TO_STAR_NOUN[rating] || RATING_TO_STAR_NOUN.default;
};

const humanizeRating = (rating) => {
  return rating >= RECOMMENDED_RATING_THRESHOLD ? `Советует` : `Не рекомендует`;
};

/**
 * @param {HTMLFormElement} form
 * @return {LocalReview}
 */
const deserializeLocalReview = (form) => {
  const data = new FormData(form);

  return {
    rating: +data.get(`rating`) || 0,
    author: data.get(`author`) || ``,
    advantages: data.get(`advantages`) || ``,
    disadvantages: data.get(`disadvantages`) || ``,
    comment: data.get(`comment`) || ``,
  };
};

const postReview = (productId, localReview) => {
  return {
    id: generateId(),
    productId,
    ...localReview,
    createdAt: serializeDateTime(new Date()),
  };
};

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale(`ru`);

export {
  humanizeAsDurationFromNow,
  serializeDateTime,
  formatStars,
  humanizeRating,
  deserializeLocalReview,
  postReview,
};
