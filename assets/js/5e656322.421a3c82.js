"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[9599],{7067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>C,frontMatter:()=>w,metadata:()=>j,toc:()=>k});var r=n(3274),i=n(4824),o=(n(9474),n(8923)),s=n(8958),c=n(1119),a=n(861),d=n(355),l=n(8265);const u={cardContainer:"cardContainer_fH7P",cardTitle:"cardTitle_UxqA",cardDescription:"cardDescription_vkpZ"};function h(e){var t=e.href,n=e.children;return(0,r.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function m(e){var t=e.href,n=e.icon,i=e.title,s=e.description;return(0,r.jsxs)(h,{href:t,children:[(0,r.jsxs)(l.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){var t,n=e.item,i=(0,s.Nr)(n);return i?(0,r.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,d.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){var t,n,i=e.item,o=(0,a.A)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,s.cC)(null!=(t=i.docId)?t:void 0);return(0,r.jsx)(m,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==c?void 0:c.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,r.jsx)(f,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.className,n=(0,s.$S)();return(0,r.jsx)(x,{items:n.items,className:t})}function x(e){var t=e.items,n=e.className;if(!t)return(0,r.jsx)(v,Object.assign({},e));var i=(0,s.d1)(t);return(0,r.jsx)("section",{className:(0,o.A)("row",n),children:i.map((function(e,t){return(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t)}))})}const w={tags:["docs"],keywords:["docs"],image:"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},b="\ud83d\udd78\ufe0f Web Dev",j={id:"web-dev/index",title:"\ud83d\udd78\ufe0f Web Dev",description:"Here you'll find a compilation of interesting and useful technologies that I've collected over the years while studying and working.",source:"@site/docs/web-dev/index.mdx",sourceDirName:"web-dev",slug:"/web-dev/",permalink:"/eldarlrd/web-dev/",draft:!1,unlisted:!1,tags:[{label:"docs",permalink:"/eldarlrd/tags/docs"}],version:"current",frontMatter:{tags:["docs"],keywords:["docs"],image:"https://torontocreatives.com/wp-content/uploads/2017/08/map-of-the-internet.jpg"},sidebar:"docs",next:{title:"\u26a1 JavaScript",permalink:"/eldarlrd/web-dev/javascript"}},y={},k=[];function N(e){const t={h1:"h1",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\ufe0f-web-dev",children:"\ud83d\udd78\ufe0f Web Dev"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Here you'll find a compilation of interesting and useful technologies that I've collected over the years while studying and working."})}),"\n",(0,r.jsx)(t.p,{children:"Deprecated entries have been omitted during writing and the rest are being checked for relevancy to the best of my abilities, however, some might become no longer relevant and would've to be verified again."}),"\n",(0,r.jsx)(x,{})]})}function C(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},4824:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(9474);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);