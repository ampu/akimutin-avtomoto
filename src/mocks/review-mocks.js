import dayjs from 'dayjs';

import {serializeDateTime} from '../helpers/review-helpers';

export const REVIEW_MOCKS = [
  {
    id: `1`,
    productId: `1`,
    isRecommended: true,
    rating: 5,
    author: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    createdAt: serializeDateTime(dayjs().subtract(1, `minute`)),
  },
  {
    id: `2`,
    productId: `1`,
    isRecommended: true,
    rating: 3,
    author: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantages: ` Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    createdAt: serializeDateTime(dayjs().subtract(1, `minute`)),
  },
];
