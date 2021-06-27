import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';

import mapJpeg from '../../images/map.jpg';
import mapWebp from '../../images/map.webp';
import mapPinImage from '../../images/map-pin.svg';

const Description = {
  MAP: `Карта офиса Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5.`,
  PIN: `Офис Avto Moto по адресу Санкт-Петербург, набережная реки Карповки, дом 5.`,
};

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
    hintContent: Description.PIN,
    balloonContent: Description.PIN,
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
    <div className="office-map">
      <picture>
        <source type="image/webp" srcSet={mapWebp}/>
        <img
          className="office-map__map-image"
          src={mapJpeg}
          width="431"
          height="271"
          alt={Description.MAP}
        />
      </picture>

      <img
        className="office-map__pin-image"
        src={mapPinImage}
        width="32"
        height="40"
        alt={Description.PIN}
      />

      <YMaps>
        <Map {...MAP_PROPS}>
          <Placemark {...PLACEMARK_PROPS}/>
        </Map>
      </YMaps>
    </div>
  );
};

export {OfficeMap};
