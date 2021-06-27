import React from 'react';
import {NavLink} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';

const SECONDARY_NAVIGATION_LINKS = [
  {path: LocalPath.CORPORATE_CLIENTS, title: `Корпоративным клиентам`},
  {path: LocalPath.CLIENTS, title: `Клиентам`},
  {path: LocalPath.CAR_RENT, title: `Аренда авто`},
  {path: LocalPath.CARSHARING, title: `Каршеринг`},
  {path: LocalPath.SELLING_CAR, title: `Как продать авто`},
  {path: LocalPath.TRADE_IN, title: `Trade-in`},
  {path: LocalPath.TEST_DRIVE, title: `Test drive`},
];

const SecondaryNavigation = () => {
  return (
    <ul className="secondary-navigation">
      {SECONDARY_NAVIGATION_LINKS.map((link) => (
        <li key={link.path}>
          <NavLink exact to={link.path}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export {SecondaryNavigation};
