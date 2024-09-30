"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[9599],{5763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>j,default:()=>N,frontMatter:()=>b,metadata:()=>y,toc:()=>C});var r=n(6070),o=n(1100),i=(n(758),n(3526)),s=n(236),a=n(6484),c=n(13),l=n(8508),d=n(5857),u=n(9808);const h={cardContainer:"cardContainer_sUhM",cardTitle:"cardTitle_pe4y",cardDescription:"cardDescription_aYht"};function m(e){var t=e.href,n=e.children;return(0,r.jsx)(a.A,{href:t,className:(0,i.A)("card padding--lg",h.cardContainer),children:n})}function p(e){var t=e.href,n=e.icon,o=e.title,s=e.description;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.A,{as:"h2",className:(0,i.A)("text--truncate",h.cardTitle),title:o,children:[n," ",o]}),s&&(0,r.jsx)("p",{className:(0,i.A)("text--truncate",h.cardDescription),title:s,children:s})]})}function f(e){var t,n,o=e.item,i=(0,s.Nr)(o),a=(n=(0,c.W)().selectMessage,function(e){return n(e,(0,d.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return i?(0,r.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:o.label,description:null!=(t=o.description)?t:a(o.items.length)}):null}function g(e){var t,n,o=e.item,i=(0,l.A)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.cC)(null!=(t=o.docId)?t:void 0);return(0,r.jsx)(p,{href:o.href,icon:i,title:o.label,description:null!=(n=o.description)?n:null==a?void 0:a.description})}function v(e){var t=e.item;switch(t.type){case"link":return(0,r.jsx)(g,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,n=(0,s.$S)();return(0,r.jsx)(w,{items:n.items,className:t})}function w(e){var t=e.items,n=e.className;if(!t)return(0,r.jsx)(x,Object.assign({},e));var o=(0,s.d1)(t);return(0,r.jsx)("section",{className:(0,i.A)("row",n),children:o.map((function(e,t){return(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(v,{item:e})},t)}))})}const b={tags:["docs"],keywords:["docs"],image:"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},j="\ud83d\udd78\ufe0f Web Dev",y={id:"web-dev/index",title:"\ud83d\udd78\ufe0f Web Dev",description:"Here you'll find a compilation of interesting and useful technologies that I've collected over the years while studying and working.",source:"@site/docs/web-dev/index.mdx",sourceDirName:"web-dev",slug:"/web-dev/",permalink:"/eldarlrd/web-dev/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docs",permalink:"/eldarlrd/tags/docs"}],version:"current",frontMatter:{tags:["docs"],keywords:["docs"],image:"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},sidebar:"docs",next:{title:"\u26a1 JavaScript",permalink:"/eldarlrd/web-dev/javascript"}},k={},C=[];function D(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\ufe0f-web-dev",children:"\ud83d\udd78\ufe0f Web Dev"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Here you'll find a compilation of interesting and useful technologies that I've collected over the years while studying and working."})}),"\n",(0,r.jsx)(t.p,{children:"Deprecated entries have been omitted during writing and the rest are being checked for relevancy to the best of my abilities, however, some might become no longer relevant and would've to be verified again."}),"\n",(0,r.jsx)(w,{})]})}function N(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(D,{...e})}):D(e)}},13:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(758),o=n(4924),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var a={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,o.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:s(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),a}var t,n}),[e])}function l(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}}},1100:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(758);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);