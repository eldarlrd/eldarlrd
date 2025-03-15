"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[9599],{1089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>D,frontMatter:()=>j,metadata:()=>r,toc:()=>N});const r=JSON.parse('{"id":"web-dev/index","title":"\ud83d\udd78\ufe0f Web Dev","description":"Here you\'ll find a compilation of interesting and useful technologies that I\'ve collected over the years while studying and working.","source":"@site/docs/web-dev/index.mdx","sourceDirName":"web-dev","slug":"/web-dev/","permalink":"/eldarlrd/web-dev/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"docs","permalink":"/eldarlrd/tags/docs"}],"version":"current","frontMatter":{"tags":["docs"],"keywords":["docs"],"image":"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},"sidebar":"docs","next":{"title":"\u26a1 JavaScript","permalink":"/eldarlrd/web-dev/javascript"}}');var o=n(5105),i=n(3881),s=(n(8101),n(3526)),a=n(6279),l=n(1740),c=n(6889),d=n(7956),u=n(1711),m=n(5325);const h={cardContainer:"cardContainer_moOi",cardTitle:"cardTitle_gOP6",cardDescription:"cardDescription_oXPe"};function f(e){var t=e.href,n=e.children;return(0,o.jsx)(l.A,{href:t,className:(0,s.A)("card padding--lg",h.cardContainer),children:n})}function p(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return(0,o.jsxs)(f,{href:t,children:[(0,o.jsxs)(m.A,{as:"h2",className:(0,s.A)("text--truncate",h.cardTitle),title:r,children:[n," ",r]}),i&&(0,o.jsx)("p",{className:(0,s.A)("text--truncate",h.cardDescription),title:i,children:i})]})}function g(e){var t,n,r=e.item,i=(0,a.Nr)(r),s=(n=(0,c.W)().selectMessage,function(e){return n(e,(0,u.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return i?(0,o.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:s(r.items.length)}):null}function v(e){var t,n,r=e.item,i=(0,d.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a.cC)(null!=(t=r.docId)?t:void 0);return(0,o.jsx)(p,{href:r.href,icon:i,title:r.label,description:null!=(n=r.description)?n:null==s?void 0:s.description})}function x(e){var t=e.item;switch(t.type){case"link":return(0,o.jsx)(v,{item:t});case"category":return(0,o.jsx)(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function w(e){var t=e.className,n=(0,a.$S)();return(0,o.jsx)(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return(0,o.jsx)(w,Object.assign({},e));var r=(0,a.d1)(t);return(0,o.jsx)("section",{className:(0,s.A)("row",n),children:r.map((function(e,t){return(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(x,{item:e})},t)}))})}const j={tags:["docs"],keywords:["docs"],image:"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},y="\ud83d\udd78\ufe0f Web Dev",k={},N=[];function C(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\ufe0f-web-dev",children:"\ud83d\udd78\ufe0f Web Dev"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Here you'll find a compilation of interesting and useful technologies that I've collected over the years while studying and working."})}),"\n",(0,o.jsx)(t.p,{children:"Deprecated entries have been omitted during writing and the rest are being checked for relevancy to the best of my abilities, however, some might become no longer relevant and would've to be verified again."}),"\n",(0,o.jsx)(b,{})]})}function D(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(C,{...e})}):C(e)}},3881:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(8101);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},6889:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(8101),o=n(1588),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var a={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,o.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:s(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),a}var t,n}),[e])}function c(){var e=l();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}}}}]);