"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[2711],{8166:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});a(9474);var s=a(1119),t=a(355),i=a(6293),n=a(5364),c=a(8265),l=a(3274);function d(e){var r=e.year,a=e.posts;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:a.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)}))})]})}function h(e){var r=e.years;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map((function(e,r){return(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,Object.assign({},e))},r)}))})})})}function o(e){var r,a,s=e.archive,d=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(r=s.blogPosts,a=r.reduce((function(e,r){var a,s=r.metadata.date.split("-")[0],t=null!=(a=e.get(s))?a:[];return e.set(s,[r].concat(t))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:d,description:o}),(0,l.jsxs)(n.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.A,{as:"h1",className:"hero__title",children:d}),(0,l.jsx)("p",{className:"hero__subtitle",children:o})]})}),(0,l.jsx)("main",{children:m.length>0&&(0,l.jsx)(h,{years:m})})]})]})}}}]);