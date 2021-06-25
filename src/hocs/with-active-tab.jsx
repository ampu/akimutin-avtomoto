import React, {useCallback} from 'react';
import {generatePath, matchPath, useHistory} from 'react-router-dom';

import {LocalPath} from '../constants/local-path';
import {KeyboardKey} from '../constants/keyboard-key';
import {productShape} from '../types/product-types';
import {useKeyDownStack} from '../hooks/use-keydown-stack';

const TABS = [
  {
    key: `specifications`,
    path: LocalPath.PRODUCT_SPECIFICATIONS,
    title: `Характеристики`,
  },
  {
    key: `reviews`,
    path: LocalPath.PRODUCT_REVIEWS,
    title: `Отзывы`,
  },
  {
    key: `contacts`,
    path: LocalPath.PRODUCT_CONTACTS,
    title: `Контакты`,
  },
];

export const withActiveTab = (Component) => {
  const WithActiveTab = ({product, ...props}) => {
    const history = useHistory();

    const onDocumentKeyDown = useCallback((evt) => {
      if (evt.key === KeyboardKey.TAB) {
        evt.preventDefault();
        evt.stopPropagation();

        const isBackward = evt.shiftKey;

        const activeTabIndex = TABS.findIndex((tab) => matchPath(history.location.pathname, {
          path: tab.path,
          exact: true,
        }));

        const nextTabOffset = activeTabIndex + (isBackward ? (TABS.length - 1) : 1);
        const nextTab = TABS[nextTabOffset % TABS.length];

        history.push(generatePath(nextTab.path, product));
      }
    }, [product, history]);

    useKeyDownStack(onDocumentKeyDown);

    return (
      <Component
        product={product}
        tabs={TABS}
        {...props}
      />
    );
  };

  WithActiveTab.propTypes = {
    product: productShape,
  };

  WithActiveTab.displayName = `${Component.name}${WithActiveTab.name}`;

  return WithActiveTab;
};
