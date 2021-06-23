import {useRef, useEffect} from 'react';

const useMountedRef = () => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, [isMountedRef]);

  return isMountedRef;
};

export {useMountedRef};
