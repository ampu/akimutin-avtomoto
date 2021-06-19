import React from 'react';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {RoutePath} from '../../constants/route-path';
import PropTypes from 'prop-types';

const PrimaryNavigation = ({className}) => {
  return (
    <ul className={getClassName(`primary-navigation`, className)}>
      <li className="primary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.PRODUCTS}>Автомобили</NavLink>
      </li>
      <li className="primary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.CONTACTS}>Контакты</NavLink>
      </li>
      <li className="primary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.SERVICES}>Услуги</NavLink>
      </li>
      <li className="primary-navigation__item">
        <NavLink className="page-link" exact to={RoutePath.VACANCIES}>Вакансии</NavLink>
      </li>
    </ul>
  );
};

PrimaryNavigation.propTypes = {
  className: PropTypes.string,
};

export {PrimaryNavigation};
