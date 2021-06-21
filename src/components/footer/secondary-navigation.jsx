import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';

const SecondaryNavigation = ({className}) => {
  return (
    <ul className={getClassName(`secondary-navigation`, className)}>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.CORPORATE_CLIENTS}>Корпоративным клиентам</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.CLIENTS}>Клиентам</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.CAR_RENT}>Аренда авто</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.CARSHARING}>Каршеринг</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.SELLING_CAR}>Как продать авто</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.TRADE_IN}>Trade-in</NavLink>
      </li>
      <li className="secondary-navigation__item">
        <NavLink className="page-link" exact to={LocalPath.TEST_DRIVE}>Test drive</NavLink>
      </li>
    </ul>
  );
};

SecondaryNavigation.propTypes = {
  className: PropTypes.string,
};

export {SecondaryNavigation};
