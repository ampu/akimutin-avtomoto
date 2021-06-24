import React, {useEffect, useState} from 'react';

export const withIntervalRerender = (Component, timeout) => {
  const WithIntervalRerender = (props) => {

    const [, setRenderRevision] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setRenderRevision((previousRenderRevision) => previousRenderRevision + 1);
      }, timeout);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
      <Component {...props}/>
    );
  };

  WithIntervalRerender.displayName = `${Component.name}${WithIntervalRerender.name}`;

  return WithIntervalRerender;
};
