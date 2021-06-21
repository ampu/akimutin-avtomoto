export const LocalPath = {
  INDEX: `/`,

  PRODUCTS: `/products`,
  CONTACTS: `/contacts`,
  SERVICES: `/services`,
  VACANCIES: `/vacancies`,

  CORPORATE_CLIENTS: `/corporate-clients`,
  CLIENTS: `/clients`,
  CAR_RENT: `/car-rent`,
  CARSHARING: `/carsharing`,
  SELLING_CAR: `/selling-car`,
  TRADE_IN: `/trade-in`,
  TEST_DRIVE: `/test-drive`,

  BUY_CAR: `/buy-car`,
  LOAN_CAR: `/loan-car`,

  PRODUCT: `/`,
  PRODUCT_SPECIFICATIONS: `/`,
  PRODUCT_REVIEWS: `/product/:id/reviews`,
  PRODUCT_CONTACTS: `/product/:id/contacts`,

  PRODUCT_REVIEW_WRITE: `/product/:id/write-review`,
  PRODUCT_REVIEW_POST: `/product/:id/review`,
  PRODUCT_REVIEW_RESPONSE: `/product/:productId/response-review/:id`,
};

export const PRODUCT_PATHS = [
  LocalPath.PRODUCT,
  LocalPath.PRODUCT_SPECIFICATIONS,
  LocalPath.PRODUCT_REVIEWS,
  LocalPath.PRODUCT_CONTACTS,
];
