import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';

import mapImage from '../../images/map.png';
import mapPinImage from '../../images/map-pin.svg';

const MAP_PROPS = {
  state: {
    center: [59.967137, 30.323272],
    zoom: 14,
  },
  width: `100%`,
  height: `100%`,
};

const PLACEMARK_PROPS = {
  geometry: [59.968137, 30.316272],
  modules: [`geoObject.addon.balloon`, `geoObject.addon.hint`],
  properties: {
    hintContent: `Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5`,
    balloonContent: `Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5`,
  },
  options: {
    iconLayout: `default#image`,
    iconImageHref: mapPinImage,
    iconImageSize: [34, 42],
    iconImageOffset: [-17, -42],
  },
};

const OfficeMap = () => {
  return (
    <div className="office-map__map">
      <img className="office-map__map-image" src={mapImage} width="431" height="271" alt="Карта офиса Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5"/>
      <img className="office-map__map-pin" src={mapPinImage} width="32" height="40" alt="Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5"/>

      <YMaps>
        <Map {...MAP_PROPS}>
          <Placemark {...PLACEMARK_PROPS}/>
        </Map>
      </YMaps>
    </div>
  );
};

export {OfficeMap};
