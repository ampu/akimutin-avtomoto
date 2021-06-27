import thumbnailImage1 from '../images/slider-small-1.jpg';
import thumbnailImage2 from '../images/slider-small-2.jpg';
import thumbnailImage3 from '../images/slider-small-3.jpg';

import image1 from '../images/slider-big-1.jpg';
import image2 from '../images/slider-big-2.jpg';
import image3 from '../images/slider-big-3.jpg';

export const PRODUCT_MOCK = {
  id: `1`,
  isNewModel: true,
  title: `Марпех 11`,
  price: 2300000,
  oldPrice: 2400000,
  creditPrice: 11000,
  thumbnails: [thumbnailImage1, thumbnailImage2, thumbnailImage3],
  images: [image1, image2, image3],
  features: [
    {key: `engine-type-gasoline`, value: `бензин`},
    {key: `transmission-manual`, value: `механика`},
    {key: `horsepower`, value: `100 л.с.`},
    {key: `engine-capacity`, value: `1.4 л`},
  ],
  specifications: [
    {key: `Трансмиссия`, value: `Роботизированная`},
    {key: `Мощность двигателя, л.с.`, value: `249`},
    {key: `Тип двигателя`, value: `Бензиновый`},
    {key: `Привод`, value: `Полный`},
    {key: `Объем двигателя, л`, value: `2.4`},
    {key: `Макс. крутящий момент`, value: `370/4500`},
    {key: `Количество цилиндров`, value: `4`},
  ],
};
