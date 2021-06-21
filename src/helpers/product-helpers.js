const moneyFormat = new Intl.NumberFormat(`ru`, {
  maximumFractionDigits: 0,
  useGrouping: true,
});

/**
 * @param {number} amount
 * @return {string}
 */
const formatMoney = (amount) => {
  return moneyFormat.format(amount);
};

export {
  formatMoney,
};
