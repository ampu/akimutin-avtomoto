import {useEffect, useState} from 'react';

const useIntervalRerender = (timeout) => {
  const [, setRenderRevision] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderRevision((previousRenderRevision) => previousRenderRevision + 1);
    }, timeout);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeout]);
};

export {useIntervalRerender};
