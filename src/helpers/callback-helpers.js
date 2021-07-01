/**
 * @param {number} timeout
 * @return {{schedule: Function, runImmediately: Function}}
 */
const createThrottlingHelper = (timeout) => {
  const state = {
    callback: null,
    timeoutId: null,
  };

  const invokeCallback = () => {
    state.timeoutId = null;

    const callback = state.callback;
    state.callback = null;

    callback();
  };

  return {
    schedule(callback) {
      state.callback = callback;

      if (!state.timeoutId) {
        state.timeoutId = setTimeout(invokeCallback, timeout);
      }
    },
    runImmediately(callback) {
      state.callback = callback;

      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }

      invokeCallback();
    }
  };
};

export {createThrottlingHelper};
