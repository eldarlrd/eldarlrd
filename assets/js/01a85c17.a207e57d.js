"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[8209],{9308:(e,a,t)=>{t.d(a,{A:()=>A});var r=t(8595),s=t(9474),i=t(8923),n=t(9380),l=t(6304),c=t(257),d=t(7557),o=t(241),m=t(8076);function u(e){var a=(0,o.zy)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,a){return!(e.unlisted&&!(0,m.ys)(e.permalink,a))}(e,a)}))}),[e,a])}const b={sidebar:"sidebar_Y7OX",sidebarItemTitle:"sidebarItemTitle_ZG7M",sidebarItemList:"sidebarItemList_fAse",sidebarItem:"sidebarItem_lzRO",sidebarItemLink:"sidebarItemLink_kRVq",sidebarItemLinkActive:"sidebarItemLinkActive_SGcl"};var g=t(3274);function h(e){var a=e.sidebar,t=u(a.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.A)(b.sidebar,"thin-scrollbar"),"aria-label":(0,d.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.A)(b.sidebarItemTitle,"margin-bottom--md"),children:a.title}),(0,g.jsx)("ul",{className:(0,i.A)(b.sidebarItemList,"clean-list"),children:t.map((function(e){return(0,g.jsx)("li",{className:b.sidebarItem,children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=t(5091);function j(e){var a=u(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:a.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,g.jsx)(v.GX,{component:j,props:e})}function f(e){var a=e.sidebar,t=(0,l.l)();return null!=a&&a.items.length?"mobile"===t?(0,g.jsx)(p,{sidebar:a}):(0,g.jsx)(h,{sidebar:a}):null}var x=["sidebar","toc","children"];function A(e){var a=e.sidebar,t=e.toc,s=e.children,l=(0,r.A)(e,x),c=a&&a.items.length>0;return(0,g.jsx)(n.A,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:a}),(0,g.jsx)("main",{className:(0,i.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})}))}},6730:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});t(9474);var r=t(8923),s=t(5933),i=t(105),n=t(9678),l=t(9308),c=t(6319),d=t(9197),o=t(5097),m=t(3274);function u(e){var a=e.tags,t=e.sidebar,u=(0,s.b)();return(0,m.jsxs)(i.e3,{className:(0,r.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,m.jsx)(i.be,{title:u}),(0,m.jsx)(d.A,{tag:"blog_tags_list"}),(0,m.jsxs)(l.A,{sidebar:t,children:[(0,m.jsx)(o.A,{as:"h1",children:u}),(0,m.jsx)(c.A,{tags:a})]})]})}},7395:(e,a,t)=>{t.d(a,{A:()=>l});t(9474);var r=t(8923),s=t(257);const i={tag:"tag_rayf",tagRegular:"tagRegular_HsGv",tagWithCount:"tagWithCount_lNl6"};var n=t(3274);function l(e){var a=e.permalink,t=e.label,l=e.count;return(0,n.jsxs)(s.A,{href:a,className:(0,r.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}},6319:(e,a,t)=>{t.d(a,{A:()=>d});t(9474);var r=t(5933),s=t(7395),i=t(5097);const n={tag:"tag_PWKY"};var l=t(3274);function c(e){var a=e.letterEntry;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.A,{as:"h2",id:a.letter,children:a.letter}),(0,l.jsx)("ul",{className:"padding--none",children:a.tags.map((function(e){return(0,l.jsx)("li",{className:n.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))}),(0,l.jsx)("hr",{})]})}function d(e){var a=e.tags,t=(0,r.Q)(a);return(0,l.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,l.jsx)(c,{letterEntry:e},e.letter)}))})}},5933:(e,a,t)=>{t.d(a,{Q:()=>i,b:()=>s});var r=t(7557),s=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function i(e){var a={};return Object.values(e).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e.label);null!=a[t]||(a[t]=[]),a[t].push(e)})),Object.entries(a).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,a){return e.label.localeCompare(a.label)}))}}))}}}]);