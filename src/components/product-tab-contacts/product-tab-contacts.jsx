import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {OfficeMap} from './office-map';

const ProductTabContacts = ({className}) => {
  return (
    <section className={getClassName(`product-tab-contacts`, className)}>
      <h2 className="visually-hidden">Контакты</h2>

      <dl>
        <dt>Адрес</dt>
        <dd>
          Санкт-Петербург,<br/>
          набережная реки Карповки, дом 5
        </dd>

        <dt>Режим работы</dt>
        <dd>
          Ежедневно, с 10:00 до 21:00
        </dd>

        <dt>Телефон</dt>
        <dd>
          <a href="tel:+78003335599">8 (800) 333-55-99</a>
        </dd>

        <dt>E-mail</dt>
        <dd>
          <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </dd>
      </dl>

      <OfficeMap/>
    </section>
  );
};

ProductTabContacts.propTypes = {
  className: PropTypes.string,
};

export {ProductTabContacts};
