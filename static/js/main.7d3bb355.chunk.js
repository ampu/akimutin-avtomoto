(this.webpackJsonpakimutin_avtomoto=this.webpackJsonpakimutin_avtomoto||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a(19),s=a.n(i),r=a(3),n=a(4),l=a(8),o=a.n(l),d="/",j="/products",u="/contacts",m="/services",b="/vacancies",h="/corporate-clients",x="/clients",O="/car-rent",p="/carsharing",g="/selling-car",_="/trade-in",v="/test-drive",N="/test-drive",f="/test-drive",k=a.p+"static/media/logo.28d1aa68.svg",y=a(0),w=function(e){var t=e.className;return Object(y.jsx)(r.c,{exact:!0,to:d,className:o()("logo",t),children:Object(y.jsx)("img",{className:"logo__image",src:k,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabAvto Moto\xbb",width:"134",height:"55"})})},q=function(e){var t=e.className;return Object(y.jsxs)("ul",{className:o()("primary-navigation",t),children:[Object(y.jsx)("li",{className:"primary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:j,children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"})}),Object(y.jsx)("li",{className:"primary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:u,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(y.jsx)("li",{className:"primary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:m,children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(y.jsx)("li",{className:"primary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:b,children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"})})]})},R=function(){return Object(y.jsx)("header",{className:"header",children:Object(y.jsxs)("nav",{className:"header__navigation",children:[Object(y.jsx)(w,{className:"header__logo"}),Object(y.jsx)(q,{className:"header__primary-navigation"})]})})},M=a(10),P=a(21),F=a(16),L=a(2),T=a.n(L),C=T.a.shape({key:T.a.string.isRequired,value:T.a.string.isRequired}),S=T.a.shape({key:T.a.string.isRequired,value:T.a.string.isRequired}),B=(T.a.shape({isNewModel:T.a.bool.isRequired,title:T.a.string.isRequired,price:T.a.number.isRequired,oldPrice:T.a.number.isRequired,creditPrice:T.a.number.isRequired,thumbnails:T.a.arrayOf(T.a.string.isRequired).isRequired,images:T.a.arrayOf(T.a.string.isRequired).isRequired,features:T.a.arrayOf(C.isRequired).isRequired,specifications:T.a.arrayOf(S.isRequired).isRequired}),function(e){var t,a,i,s=e.product,r=s.thumbnails.length-1,n=Object(c.useState)(0),l=Object(P.a)(n,2),d=l[0],j=l[1],u=function(e){j(+e.currentTarget.dataset.thumbnailIndex)},m=o()((t={},Object(M.a)(t,"product-slider__active-image-container",!0),Object(M.a)(t,"product-slider__active-image-container--new-model",!0),t)),b=o()((a={},Object(M.a)(a,"product-slider__arrow-button",!0),Object(M.a)(a,"product-slider__arrow-button--previous",!0),a)),h=o()((i={},Object(M.a)(i,"product-slider__arrow-button",!0),Object(M.a)(i,"product-slider__arrow-button--next",!0),i));return Object(y.jsxs)("div",{className:"product-slider",children:[Object(y.jsx)("figure",{className:m,children:Object(y.jsx)("img",{className:"product-slider__active-image",src:s.images[d],alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(s.title),width:"600",height:"375"})}),Object(y.jsxs)("div",{className:"product-slider__controls",children:[Object(y.jsx)("button",{type:"button",className:b,"aria-label":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(s.title),onClick:function(){j((function(e){return Object(F.clamp)(e-1,0,r)}))},disabled:0===d,children:Object(y.jsx)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513"})})}),Object(y.jsx)("button",{type:"button",className:h,"aria-label":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(s.title),onClick:function(){j((function(e){return Object(F.clamp)(e+1,0,r)}))},disabled:d===r,children:Object(y.jsx)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(y.jsx)("path",{d:"M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513"})})}),Object(y.jsx)("ul",{className:"product-slider__thumbnails",children:s.thumbnails.map((function(e,t){return Object(y.jsx)("li",{className:"product-slider__thumbnails-item",children:Object(y.jsx)("button",{type:"button",className:"product-slider__thumbnail-button","aria-label":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(s.title," \u2116").concat(t+1),onClick:u,"data-thumbnail-index":t,disabled:d===t,children:Object(y.jsx)("img",{className:"product-slider__thumbnail-image",src:e,alt:"\u041f\u0440\u0435\u0432\u044c\u044e ".concat(s.title," \u2116").concat(t+1),width:"128",height:"80"})})},e)}))})]})]})}),J=function(e){var t=e.product;return Object(y.jsxs)("section",{className:"product-information",children:[Object(y.jsx)("h1",{className:"product-information__title page-title",children:"\u041c\u0430\u0440\u043f\u0435\u0445 11"}),Object(y.jsx)("ul",{className:"product-information__features",children:t.features.map((function(e){var t,a=o()((t={},Object(M.a)(t,"product-information__features-item",!0),Object(M.a)(t,"product-information__features-item--{feature.key}",!0),t));return Object(y.jsx)("li",{className:a,children:e.value},e.key)}))}),Object(y.jsxs)("p",{className:"product-information__prices",children:[Object(y.jsx)("span",{className:"product-information__price",children:t.price}),Object(y.jsx)("span",{className:"product-information__old-price",children:t.oldPrice})]}),Object(y.jsx)(r.b,{className:"product-information__buy-car-button",to:N,children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(y.jsxs)(r.b,{className:"product-information__loan-car-button",to:f,children:["\u0412 \u043a\u0440\u0435\u0434\u0438\u0442 \u043e\u0442 ",t.creditPrice]})]})},A=function(){return Object(y.jsx)(y.Fragment,{children:"ProductTabSpecifications"})},I=function(){return Object(y.jsx)(y.Fragment,{children:"ProductTabContacts"})},z=function(){return Object(y.jsx)(y.Fragment,{children:"ProductTabReviews"})},D=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),Object(y.jsx)("li",{children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),Object(y.jsx)("li",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(A,{})}),Object(y.jsx)("li",{children:Object(y.jsx)(z,{})}),Object(y.jsx)("li",{children:Object(y.jsx)(I,{})})]})]})},E=function(e){var t=e.className;return Object(y.jsxs)("ul",{className:o()("secondary-navigation",t),children:[Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:h,children:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:x,children:"\u041a\u043b\u0438\u0435\u043d\u0442\u0430\u043c"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:O,children:"\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:p,children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:g,children:"\u041a\u0430\u043a \u043f\u0440\u043e\u0434\u0430\u0442\u044c \u0430\u0432\u0442\u043e"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:_,children:"Trade-in"})}),Object(y.jsx)("li",{className:"secondary-navigation__item",children:Object(y.jsx)(r.c,{className:"page-link",exact:!0,to:v,children:"Test drive"})})]})},G=function(){return Object(y.jsx)("div",{className:"footer",children:Object(y.jsx)(E,{className:"footer__container"})})},H={isNewModel:!0,title:"\u041c\u0430\u0440\u043f\u0435\u0445 11",price:23e5,oldPrice:24e5,creditPrice:11e3,thumbnails:["/akimutin_avtomoto/products/slider-small-1.jpg","/akimutin_avtomoto/products/slider-small-2.jpg","/akimutin_avtomoto/products/slider-small-3.jpg"],images:["/akimutin_avtomoto/products/slider-big-1.jpg","/akimutin_avtomoto/products/slider-big-2.jpg","/akimutin_avtomoto/products/slider-big-3.jpg"],features:[{key:"engine-type-gasoline",value:"\u0431\u0435\u043d\u0437\u0438\u043d"},{key:"transmission-manual",value:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430"},{key:"horsepower",value:"100 \u043b.\u0441."},{key:"engine-capacity",value:"1.4 \u043b"}],specifications:[{key:"\u0422\u0440\u0430\u043d\u0441\u043c\u0438\u0441\u0441\u0438\u044f",value:"\u0420\u043e\u0431\u043e\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f"},{key:"\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043b.\u0441.",value:"249"},{key:"\u0422\u0438\u043f \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f",value:"\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0432\u044b\u0439"},{key:"\u041f\u0440\u0438\u0432\u043e\u0434",value:"\u041f\u043e\u043b\u043d\u044b\u0439"},{key:"\u041e\u0431\u044a\u0435\u043c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043b",value:"2.4"},{key:"\u041c\u0430\u043a\u0441. \u043a\u0440\u0443\u0442\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442",value:"370/4500"},{key:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u043e\u0432",value:"4"}]},K=function(){var e=H;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(R,{}),Object(y.jsxs)("main",{className:"page-main page-main--product-page",children:[Object(y.jsx)(B,{product:e}),Object(y.jsx)(J,{product:e}),Object(y.jsx)(D,{product:e})]}),Object(y.jsx)(G,{})]})},Q=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(R,{}),Object(y.jsxs)("main",{className:"page-main page-main--not-found-page",children:[Object(y.jsx)("h1",{className:"page-title",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(y.jsx)(r.b,{className:"page-link",to:d,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]}),Object(y.jsx)(G,{})]})},U=function(){return Object(y.jsxs)(n.c,{children:[Object(y.jsx)(n.a,{exact:!0,path:d,children:Object(y.jsx)(K,{})}),Object(y.jsx)(n.a,{children:Object(y.jsx)(Q,{})})]})};a(32);s.a.render(Object(y.jsx)(c.StrictMode,{children:Object(y.jsx)(r.a,{children:Object(y.jsx)(U,{})})}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d3bb355.chunk.js.map