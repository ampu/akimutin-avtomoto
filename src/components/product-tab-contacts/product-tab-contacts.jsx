import React from 'react';

import {OfficeMap} from './office-map';

const ProductTabContacts = () => {
  return (
    <section className="product-tab-contacts">
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

export {ProductTabContacts};
