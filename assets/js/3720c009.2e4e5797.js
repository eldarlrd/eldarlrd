"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4787],{2060:(t,e,a)=>{a.d(e,{A:()=>i});a(6672);var r=a(3526),n=a(7255);const s={tag:"tag_fkP4",tagRegular:"tagRegular_UwzZ",tagWithCount:"tagWithCount_FSDM"};var l=a(3420);function i(t){var e=t.permalink,a=t.label,i=t.count,c=t.description;return(0,l.jsxs)(n.A,{href:e,title:c,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},4e3:(t,e,a)=>{a.d(e,{A:()=>u});a(6672);var r=a(9037),n=a(2060),s=a(4218);const l={tag:"tag_VEXj"};var i=a(3420);function c(t){var e=t.letterEntry;return(0,i.jsxs)("article",{children:[(0,i.jsx)(s.A,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((function(t){return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,Object.assign({},t))},t.permalink)}))}),(0,i.jsx)("hr",{})]})}function u(t){var e=t.tags,a=(0,r.Q)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:a.map((function(t){return(0,i.jsx)(c,{letterEntry:t},t.letter)}))})}},5392:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(6672);var r=a(3526),n=a(1890),s=a(1614),l=a(9037),i=a(4e3),c=a(8429),u=a(4218),g=a(3420);function o(t){var e=t.title;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.be,{title:e}),(0,g.jsx)(c.A,{tag:"doc_tags_list"})]})}function d(t){var e=t.tags,a=t.title;return(0,g.jsx)(n.e3,{className:(0,r.A)(s.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(u.A,{as:"h1",children:a}),(0,g.jsx)(i.A,{tags:e})]})})})})}function h(t){var e=(0,l.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,Object.assign({},t,{title:e})),(0,g.jsx)(d,Object.assign({},t,{title:e}))]})}},9037:(t,e,a)=>{a.d(e,{Q:()=>s,b:()=>n});var r=a(6048),n=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function s(t){var e={};return Object.values(t).forEach((function(t){var a=function(t){return t[0].toUpperCase()}(t.label);null!=e[a]||(e[a]=[]),e[a].push(t)})),Object.entries(e).sort((function(t,e){var a=t[0],r=e[0];return a.localeCompare(r)})).map((function(t){return{letter:t[0],tags:t[1].sort((function(t,e){return t.label.localeCompare(e.label)}))}}))}}}]);