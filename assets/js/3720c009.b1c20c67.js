"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4787],{2184:(t,e,a)=>{a.d(e,{A:()=>u});a(8101);var r=a(6766),n=a(6276),s=a(6730);const l={tag:"tag_hdXW"};var i=a(5105);function c(t){var e=t.letterEntry;return(0,i.jsxs)("article",{children:[(0,i.jsx)(s.A,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((function(t){return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,Object.assign({},t))},t.permalink)}))}),(0,i.jsx)("hr",{})]})}function u(t){var e=t.tags,a=(0,r.Q)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:a.map((function(t){return(0,i.jsx)(c,{letterEntry:t},t.letter)}))})}},4632:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(8101);var r=a(3526),n=a(8219),s=a(8913),l=a(6766),i=a(2184),c=a(5173),u=a(6730),o=a(5105);function g(t){var e=t.title;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.be,{title:e}),(0,o.jsx)(c.A,{tag:"doc_tags_list"})]})}function d(t){var e=t.tags,a=t.title;return(0,o.jsx)(n.e3,{className:(0,r.A)(s.G.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(u.A,{as:"h1",children:a}),(0,o.jsx)(i.A,{tags:e})]})})})})}function h(t){var e=(0,l.b)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,Object.assign({},t,{title:e})),(0,o.jsx)(d,Object.assign({},t,{title:e}))]})}},6276:(t,e,a)=>{a.d(e,{A:()=>i});a(8101);var r=a(3526),n=a(3239);const s={tag:"tag_RRqE",tagRegular:"tagRegular_VLEC",tagWithCount:"tagWithCount_oSar"};var l=a(5105);function i(t){var e=t.permalink,a=t.label,i=t.count,c=t.description;return(0,l.jsxs)(n.A,{href:e,title:c,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},6766:(t,e,a)=>{a.d(e,{Q:()=>s,b:()=>n});var r=a(9463),n=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function s(t){var e={};return Object.values(t).forEach((function(t){var a=function(t){return t[0].toUpperCase()}(t.label);null!=e[a]||(e[a]=[]),e[a].push(t)})),Object.entries(e).sort((function(t,e){var a=t[0],r=e[0];return a.localeCompare(r)})).map((function(t){return{letter:t[0],tags:t[1].sort((function(t,e){return t.label.localeCompare(e.label)}))}}))}}}]);