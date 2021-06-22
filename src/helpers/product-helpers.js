const moneyFormat = new Intl.NumberFormat(`ru`, {maximumFractionDigits: 0});

/**
 * @param {number} amount
 * @return {string}
 */
const formatMoney = (amount) => {
  return moneyFormat.format(amount);
};

const addSpecialMillionSeparator = (formattedMoney) => {
  return formattedMoney.replace(/^(\d+)\u00a0(\d+\u00a0\d+)$/, `$1\u00a0\u00a0$2`);
};

export {
  formatMoney,
  addSpecialMillionSeparator,
};
