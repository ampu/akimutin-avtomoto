import {useEffect, useRef} from 'react';

const BOUNCE_ANIMATION_TIMEOUT = 600;

export const useBounce = () => {
  const isBounceRef = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      isBounceRef.current = false;
    }, BOUNCE_ANIMATION_TIMEOUT);
  }, []);

  return isBounceRef.current;
};
