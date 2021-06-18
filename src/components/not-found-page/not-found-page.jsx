import React from 'react';
import {Link} from 'react-router-dom';

import {RoutePath} from '../../constants/route-path';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

const NotFoundPage = () => {
  return <>
    <Header/>
    <main className="page-main page-main--not-found">
      <h1 className="page-title">Страница не найдена</h1>
      <Link className="page-link" to={RoutePath.INDEX}>Вернуться на главную страницу</Link>
    </main>
    <Footer/>
  </>;
};

export {NotFoundPage};