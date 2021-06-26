import React from 'react';
import {Link} from 'react-router-dom';

import {LocalPath} from '../../constants/local-path';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

const NotFoundPage = () => {
  return <>
    <Header/>
    <main className="not-found-page">
      <h1>Страница не найдена</h1>
      <Link to={LocalPath.INDEX}>Вернуться на главную страницу</Link>
    </main>
    <Footer/>
  </>;
};

export {NotFoundPage};
