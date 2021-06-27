import React from 'react';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import PropTypes from 'prop-types';

const PRIMARY_NAVIGATION_LINKS = [
  {path: LocalPath.PRODUCTS, title: `Автомобили`},
  {path: LocalPath.CONTACTS, title: `Контакты`},
  {path: LocalPath.SERVICES, title: `Услуги`},
  {path: LocalPath.VACANCIES, title: `Вакансии`},
];

const PrimaryNavigation = ({className}) => {
  return (
    <ul className={getClassName(`primary-navigation`, className)}>
      {PRIMARY_NAVIGATION_LINKS.map((link) => (
        <li key={link.path}>
          <NavLink exact to={link.path}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

PrimaryNavigation.propTypes = {
  className: PropTypes.string,
};

export {PrimaryNavigation};
