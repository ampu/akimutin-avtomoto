import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {LocalPath} from '../../constants/local-path';
import logoImage from '../../images/logo.svg';

const Logo = ({className}) => {
  return (
    <NavLink exact to={LocalPath.INDEX} className={getClassName(`logo`, className)}>
      <img src={logoImage} alt="Логотип «Avto Moto»" width="134" height="55"/>
    </NavLink>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export {Logo};
