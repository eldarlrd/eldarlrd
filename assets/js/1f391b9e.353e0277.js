"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[6061],{7075:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});t(758);var a=t(3526),i=t(4591),l=t(4348),r=t(6285),s=t(4473),c=t(7177),o=t(7710),d=t(7220);const u={mdxPageWrapper:"mdxPageWrapper_k0e0"};var m=t(6070);function v(e){var n,t=e.content,v=t.metadata,f=v.title,g=v.editUrl,h=v.description,x=v.frontMatter,p=v.unlisted,j=v.lastUpdatedBy,A=v.lastUpdatedAt,L=t.assets,N=x.keywords,C=x.wrapperClassName,b=x.hide_table_of_contents,H=null!=(n=L.image)?n:x.image,k=!!(g||A||j);return(0,m.jsx)(i.e3,{className:(0,a.A)(null!=C?C:l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,m.jsxs)(r.A,{children:[(0,m.jsx)(i.be,{title:f,description:h,keywords:N,image:H}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.A)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.A)("col",!b&&"col--8"),children:[p&&(0,m.jsx)(o.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(s.A,{children:(0,m.jsx)(t,{})})}),k&&(0,m.jsx)(d.A,{className:(0,a.A)("margin-top--sm",l.G.pages.pageFooterEditMetaRow),editUrl:g,lastUpdatedAt:A,lastUpdatedBy:j})]}),!b&&t.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.A,{toc:t.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}},7177:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(7166),i=(t(758),t(3526)),l=t(6349);const r={tableOfContents:"tableOfContents_Zy6o",docItemContainer:"docItemContainer_gSJS"};var s=t(6070),c=["className"],o="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,c);return(0,s.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(l.A,Object.assign({},t,{linkClassName:o,linkActiveClassName:d}))})}},6349:(e,n,t)=>{t.d(n,{A:()=>p});var a=t(7166),i=t(758),l=t(2043),r=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,a.A)(e,r);t>=0?n[t].children.push(l):i.push(l)})),i}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function o(e){var n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,l=e.find((function(e){return o(e).top>=i}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,l.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,l=e.minHeadingLevel,r=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=d(s,{anchorTopOffset:t.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===o)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var v=t(6545),f=t(6070);function g(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(g);var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,p=e.maxHeadingLevel,j=(0,a.A)(e,x),A=(0,l.p)(),L=null!=g?g:A.tableOfContents.minHeadingLevel,N=null!=p?p:A.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:N});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:N}}),[d,v,L,N])),(0,f.jsx)(h,Object.assign({toc:C,className:r,linkClassName:d},j))}},7710:(e,n,t)=>{t.d(n,{A:()=>v});t(758);var a=t(3526),i=t(4583),l=t(8999),r=t(6070);function s(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(l.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(4348),u=t(1648);function m(e){var n=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(c,{})})}function v(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(m,Object.assign({},e))]})}}}]);