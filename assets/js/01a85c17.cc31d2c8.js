"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[8209],{446:(e,a,t)=>{t.d(a,{A:()=>A});var r=t(8595),s=t(9474),i=t(8923),n=t(5364),l=t(6194),c=t(1119),o=t(355),d=t(241),m=t(2366);function u(e){var a=(0,d.zy)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,a){return!(e.unlisted&&!(0,m.ys)(e.permalink,a))}(e,a)}))}),[e,a])}const b={sidebar:"sidebar_lBUU",sidebarItemTitle:"sidebarItemTitle_mo1j",sidebarItemList:"sidebarItemList_o9km",sidebarItem:"sidebarItem_eHw5",sidebarItemLink:"sidebarItemLink_mVwO",sidebarItemLinkActive:"sidebarItemLinkActive_wzL7"};var g=t(3274);function h(e){var a=e.sidebar,t=u(a.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.A)(b.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.A)(b.sidebarItemTitle,"margin-bottom--md"),children:a.title}),(0,g.jsx)("ul",{className:(0,i.A)(b.sidebarItemList,"clean-list"),children:t.map((function(e){return(0,g.jsx)("li",{className:b.sidebarItem,children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=t(6193);function j(e){var a=u(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:a.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,g.jsx)(v.GX,{component:j,props:e})}function f(e){var a=e.sidebar,t=(0,l.l)();return null!=a&&a.items.length?"mobile"===t?(0,g.jsx)(p,{sidebar:a}):(0,g.jsx)(h,{sidebar:a}):null}var x=["sidebar","toc","children"];function A(e){var a=e.sidebar,t=e.toc,s=e.children,l=(0,r.A)(e,x),c=a&&a.items.length>0;return(0,g.jsx)(n.A,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:a}),(0,g.jsx)("main",{className:(0,i.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})}))}},9531:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});t(9474);var r=t(8923),s=t(8635),i=t(6293),n=t(2308),l=t(446),c=t(1505),o=t(2332),d=t(8265),m=t(3274);function u(e){var a=e.tags,t=e.sidebar,u=(0,s.b)();return(0,m.jsxs)(i.e3,{className:(0,r.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,m.jsx)(i.be,{title:u}),(0,m.jsx)(o.A,{tag:"blog_tags_list"}),(0,m.jsxs)(l.A,{sidebar:t,children:[(0,m.jsx)(d.A,{as:"h1",children:u}),(0,m.jsx)(c.A,{tags:a})]})]})}},8711:(e,a,t)=>{t.d(a,{A:()=>l});t(9474);var r=t(8923),s=t(1119);const i={tag:"tag_rwuC",tagRegular:"tagRegular_e5DC",tagWithCount:"tagWithCount_S4YT"};var n=t(3274);function l(e){var a=e.permalink,t=e.label,l=e.count;return(0,n.jsxs)(s.A,{href:a,className:(0,r.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}},1505:(e,a,t)=>{t.d(a,{A:()=>o});t(9474);var r=t(8635),s=t(8711),i=t(8265);const n={tag:"tag_q2ug"};var l=t(3274);function c(e){var a=e.letterEntry;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.A,{as:"h2",id:a.letter,children:a.letter}),(0,l.jsx)("ul",{className:"padding--none",children:a.tags.map((function(e){return(0,l.jsx)("li",{className:n.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))}),(0,l.jsx)("hr",{})]})}function o(e){var a=e.tags,t=(0,r.Q)(a);return(0,l.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,l.jsx)(c,{letterEntry:e},e.letter)}))})}},8635:(e,a,t)=>{t.d(a,{Q:()=>i,b:()=>s});var r=t(355),s=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function i(e){var a={};return Object.values(e).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e.label);null!=a[t]||(a[t]=[]),a[t].push(e)})),Object.entries(a).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,a){return e.label.localeCompare(a.label)}))}}))}}}]);