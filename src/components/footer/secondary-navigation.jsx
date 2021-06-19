import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {RoutePath} from '../../constants/route-path';

const SecondaryNavigation = ({className}) => {
  return (
    <ul className={getClassName(`secondary-navigation`, className)}>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.CORPORATE_CLIENTS}>Корпоративным клиентам</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.CLIENTS}>Клиентам</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.CAR_RENT}>Аренда авто</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.CARSHARING}>Каршеринг</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.SELLING_CAR}>Как продать авто</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.TRADE_IN}>Trade-in</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.TEST_DRIVE}>Test drive</NavLink>
      </li>
    </ul>
  );
};

SecondaryNavigation.propTypes = {
  className: PropTypes.string,
};

export {SecondaryNavigation};
