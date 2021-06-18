import React from 'react';

import {Logo} from './logo';
import {PrimaryNavigation} from './primary-navigation';

const Header = () => {
  return (
    <nav>
      <Logo/>
      <PrimaryNavigation/>
    </nav>
  );
};

export {Header};
