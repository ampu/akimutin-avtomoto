import React from 'react';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import PropTypes from 'prop-types';

const PrimaryNavigation = ({className}) => {
  return (
    <ul className={getClassName(`primary-navigation`, className)}>
      <li>
        <NavLink exact to={LocalPath.PRODUCTS}>Автомобили</NavLink>
      </li>
      <li>
        <NavLink exact to={LocalPath.CONTACTS}>Контакты</NavLink>
      </li>
      <li>
        <NavLink exact to={LocalPath.SERVICES}>Услуги</NavLink>
      </li>
      <li>
        <NavLink exact to={LocalPath.VACANCIES}>Вакансии</NavLink>
      </li>
    </ul>
  );
};

PrimaryNavigation.propTypes = {
  className: PropTypes.string,
};

export {PrimaryNavigation};
