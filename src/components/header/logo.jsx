import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import getClassName from 'classnames';

import {RoutePath} from '../../constants/route-path';
import logoImage from '../../images/logo.svg';

const Logo = ({className}) => {
  return (
    <NavLink exact to={RoutePath.INDEX} className={getClassName(`logo`, className)}>
      <img
        className="logo__image"
        src={logoImage}
        alt="Логотип «Avto Moto»"
        width="134" height="55"
      />
    </NavLink>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export {Logo};
