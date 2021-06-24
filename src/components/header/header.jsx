import React from 'react';

import {Logo} from './logo';
import {PrimaryNavigation} from './primary-navigation';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__container">
        <Logo className="header__logo"/>
        <PrimaryNavigation className="header__primary-navigation"/>
      </nav>
    </header>
  );
};

export {Header};
