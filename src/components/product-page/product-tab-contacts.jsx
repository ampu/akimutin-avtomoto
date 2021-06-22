import React, {useEffect} from 'react';

import mapImage from '../../images/map.png';
import mapPinImage from '../../images/map-pin.svg';

const MAP_CONFIG = {
  center: [59.968137, 30.316272],
  zoom: 16,
};

const PLACEMARK_MESSAGES = {
  hintContent: `Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5`,
  balloonContent: `Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5`,
};

const PLACEMARK_CONFIG = {
  iconLayout: `default#image`,
  iconImageHref: mapPinImage,
  iconImageSize: [34, 42],
  iconImageOffset: [-17, -42],
};

const ProductTabContacts = () => {
  useEffect(() => {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(`map`, MAP_CONFIG);
      const placemark = new window.ymaps.Placemark(map.getCenter(), PLACEMARK_MESSAGES, PLACEMARK_CONFIG);
      map.geoObjects.add(placemark);
    });
  }, []);

  return (
    <div className="product-tab-contacts">
      <dl className="product-tab-contacts__list">
        <dt className="product-tab-contacts__list-item-key">
          Адрес
        </dt>
        <dd className="product-tab-contacts__list-item-value">
          Санкт-Петербург,<br/>
          набережная реки Карповки, дом 5
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

      <div id="map" className="product-tab-contacts__map">
        <img className="product-tab-contacts__map-image" src={mapImage} width="431" height="271" alt="Карта офиса Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5"/>
        <img className="product-tab-contacts__map-pin" src={mapPinImage} width="32" height="40" alt="Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5"/>
      </div>
    </div>
  );
};

export {ProductTabContacts};
