"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4787],{8182:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(9474);var r=a(8923),n=a(6410),s=a(3802),l=a(1025),i=a(2080),c=a(4947),u=a(5222),g=a(3274);function o(t){var e=t.title;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.be,{title:e}),(0,g.jsx)(c.A,{tag:"doc_tags_list"})]})}function d(t){var e=t.tags,a=t.title;return(0,g.jsx)(n.e3,{className:(0,r.A)(s.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(u.A,{as:"h1",children:a}),(0,g.jsx)(i.A,{tags:e})]})})})})}function h(t){var e=(0,l.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,Object.assign({},t,{title:e})),(0,g.jsx)(d,Object.assign({},t,{title:e}))]})}},4808:(t,e,a)=>{a.d(e,{A:()=>i});a(9474);var r=a(8923),n=a(233);const s={tag:"tag_OoiX",tagRegular:"tagRegular_qHMb",tagWithCount:"tagWithCount_KKGh"};var l=a(3274);function i(t){var e=t.permalink,a=t.label,i=t.count;return(0,l.jsxs)(n.A,{href:e,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},2080:(t,e,a)=>{a.d(e,{A:()=>u});a(9474);var r=a(1025),n=a(4808),s=a(5222);const l={tag:"tag_YKHk"};var i=a(3274);function c(t){var e=t.letterEntry;return(0,i.jsxs)("article",{children:[(0,i.jsx)(s.A,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((function(t){return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,Object.assign({},t))},t.permalink)}))}),(0,i.jsx)("hr",{})]})}function u(t){var e=t.tags,a=(0,r.Q)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:a.map((function(t){return(0,i.jsx)(c,{letterEntry:t},t.letter)}))})}},1025:(t,e,a)=>{a.d(e,{Q:()=>s,b:()=>n});var r=a(3769),n=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function s(t){var e={};return Object.values(t).forEach((function(t){var a=function(t){return t[0].toUpperCase()}(t.label);null!=e[a]||(e[a]=[]),e[a].push(t)})),Object.entries(e).sort((function(t,e){var a=t[0],r=e[0];return a.localeCompare(r)})).map((function(t){return{letter:t[0],tags:t[1].sort((function(t,e){return t.label.localeCompare(e.label)}))}}))}}}]);