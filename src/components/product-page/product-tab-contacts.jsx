import React from 'react';

import mapImage from '../../images/map.png';

const ProductTabContacts = () => {
  return (
    <div className="product-tab-contacts">
      <dl className="product-tab-contacts__list">
        <dt className="product-tab-contacts__list-item-key">
          Адрес
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          Санкт-Петербург, набережная реки Карповки, дом 5
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          Режим работы
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          Ежедневно, с 10:00 до 21:00
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          Телефон
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          8 (800) 333-55-99
        </dd>

        <dt className="product-tab-contacts__list-item-key">
          E-mail
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          info@avto-moto.ru
        </dd>
      </dl>

      <div className="product-tab-contacts__map">
        <img src={mapImage} alt="Санкт-Петербург, набережная реки Карповки, дом 5" width="431" height="271"/>
      </div>
    </div>
  );
};

export {ProductTabContacts};
