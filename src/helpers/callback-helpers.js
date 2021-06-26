/**
 * @param {number} timeout
 * @return {{schedule: Function}}
 */
const createThrottlingHelper = (timeout) => {
  const state = {
    callback: null,
  };

  const invokeCallback = () => {
    const callback = state.callback;
    state.callback = null;

    callback();
  };

  return {
    schedule(callback) {
      const scheduled = !!state.callback;
      state.callback = callback;

      if (!scheduled) {
        setTimeout(invokeCallback, timeout);
      }
    },
  };
};

export {createThrottlingHelper};
