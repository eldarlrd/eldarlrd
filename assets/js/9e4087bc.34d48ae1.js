"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[2711],{3072:(e,r,a)=>{a.d(r,{i:()=>n});var t=a(442);function n(e){void 0===e&&(e={});var r=(0,t.A)().i18n.currentLocale,a=function(){var e=(0,t.A)().i18n,r=e.currentLocale;return e.localeConfigs[r].calendar}();return new Intl.DateTimeFormat(r,Object.assign({calendar:a},e))}},4994:(e,r,a)=>{a.r(r),a.d(r,{default:()=>m});a(8101);var t=a(70),n=a(4750),i=a(4939),s=a(3072),c=a(7552),l=a(9405),d=a(5105);function o(e){var r=e.year,a=e.posts,n=(0,s.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{as:"h3",id:r,children:r}),(0,d.jsx)("ul",{children:a.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)(t.A,{to:e.metadata.permalink,children:[(r=e.metadata.date,n.format(new Date(r)))," - ",e.metadata.title]})},e.metadata.date);var r}))})]})}function h(e){var r=e.years;return(0,d.jsx)("section",{className:"margin-vert--lg",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:r.map((function(e,r){return(0,d.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,d.jsx)(o,Object.assign({},e))},r)}))})})})}function m(e){var r,a,t=e.archive,s=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(r=t.blogPosts,a=r.reduce((function(e,r){var a,t=r.metadata.date.split("-")[0],n=null!=(a=e.get(t))?a:[];return e.set(t,[r].concat(n))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.be,{title:s,description:o}),(0,d.jsxs)(c.A,{children:[(0,d.jsx)("header",{className:"hero hero--primary",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(l.A,{as:"h1",className:"hero__title",children:s}),(0,d.jsx)("p",{className:"hero__subtitle",children:o})]})}),(0,d.jsx)("main",{children:m.length>0&&(0,d.jsx)(h,{years:m})})]})]})}}}]);