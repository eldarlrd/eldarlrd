"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4279],{3788:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(9474),a=t(3274);function s(e){var n,t=function(e){var n=i.Children.toArray(e),t=n.find((function(e){return i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),s=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(e.children),s=t.mdxAdmonitionTitle,r=t.rest,l=null!=(n=e.title)?n:s;return Object.assign({},e,l&&{title:l},{children:r})}var r=t(8923),l=t(355),o=t(2308);const c={admonition:"admonition_oaUM",admonitionHeading:"admonitionHeading_Devb",admonitionIcon:"admonitionIcon_fysg",admonitionContent:"admonitionContent_kE7S"};function d(e){var n=e.type,t=e.className,i=e.children;return(0,a.jsx)("div",{className:(0,r.A)(o.G.common.admonition,o.G.common.admonitionType(n),c.admonition,t),children:i})}function u(e){var n=e.icon,t=e.title;return(0,a.jsxs)("div",{className:c.admonitionHeading,children:[(0,a.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function h(e){var n=e.children;return n?(0,a.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){var n=e.type,t=e.icon,i=e.title,s=e.children,r=e.className;return(0,a.jsxs)(d,{type:n,className:r,children:[(0,a.jsx)(u,{title:i,icon:t}),(0,a.jsx)(h,{children:s})]})}function g(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var f={icon:(0,a.jsx)(g,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,a.jsx)(m,Object.assign({},f,e,{className:(0,r.A)("alert alert--secondary",e.className),children:e.children}))}function x(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var v={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,a.jsx)(m,Object.assign({},v,e,{className:(0,r.A)("alert alert--success",e.className),children:e.children}))}function b(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var A={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,a.jsx)(m,Object.assign({},A,e,{className:(0,r.A)("alert alert--info",e.className),children:e.children}))}function w(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var T={icon:(0,a.jsx)(w,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function O(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var y={icon:(0,a.jsx)(O,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var z={icon:(0,a.jsx)(w,{}),title:(0,a.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var C={note:j,tip:p,info:N,warning:function(e){return(0,a.jsx)(m,Object.assign({},T,e,{className:(0,r.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,a.jsx)(m,Object.assign({},y,e,{className:(0,r.A)("alert alert--danger",e.className),children:e.children}))}},M={secondary:function(e){return(0,a.jsx)(j,Object.assign({title:"secondary"},e))},important:function(e){return(0,a.jsx)(N,Object.assign({title:"important"},e))},success:function(e){return(0,a.jsx)(p,Object.assign({title:"success"},e))},caution:function(e){return(0,a.jsx)(m,Object.assign({},z,e,{className:(0,r.A)("alert alert--warning",e.className),children:e.children}))}};const F=Object.assign({},C,M);function k(e){var n,t=s(e),i=(n=t.type,F[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),F.info));return(0,a.jsx)(i,Object.assign({},t))}},652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(9474);var i=t(8923),a=t(1119),s=t(9614),r=t(6293),l=t(2308),o=t(355),c=t(2332),d=t(4844),u=t(8265),h=t(3274);function m(e){var n,t=(n=(0,s.W)().selectMessage,function(e){return n(e,(0,o.T)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))});return(0,o.T)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(e.tag.count),tagName:e.tag.label})}function g(e){var n=e.doc;return(0,h.jsxs)("article",{className:"margin-vert--lg",children:[(0,h.jsx)(a.A,{to:n.permalink,children:(0,h.jsx)(u.A,{as:"h2",children:n.title})}),n.description&&(0,h.jsx)("p",{children:n.description})]})}function f(e){var n=e.title;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:n}),(0,h.jsx)(c.A,{tag:"doc_tag_doc_list"})]})}function j(e){var n=e.tag,t=e.title;return(0,h.jsx)(r.e3,{className:(0,i.A)(l.G.page.docsTagDocListPage),children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("main",{className:"col col--8 col--offset-2",children:[n.unlisted&&(0,h.jsx)(d.A,{}),(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(u.A,{as:"h1",children:t}),(0,h.jsx)(a.A,{href:n.allTagsPath,children:(0,h.jsx)(o.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,h.jsx)("section",{className:"margin-vert--lg",children:n.items.map((function(e){return(0,h.jsx)(g,{doc:e},e.id)}))})]})})})})}function x(e){var n=m(e);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,Object.assign({},e,{title:n})),(0,h.jsx)(j,Object.assign({},e,{title:n}))]})}},4844:(e,n,t)=>{t.d(n,{A:()=>m});t(9474);var i=t(8923),a=t(355),s=t(6629),r=t(3274);function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(2308),u=t(3788);function h(e){var n=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(h,Object.assign({},e))]})}},9614:(e,n,t)=>{t.d(n,{W:()=>c});var i=t(9474),a=t(5991),s=["zero","one","two","few","many","other"];function r(e){return s.filter((function(n){return e.includes(n)}))}var l={locale:"en",pluralForms:r(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,a.A)().i18n.currentLocale;return(0,i.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:r(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(i){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+i.message+"\n"),l}var n,t}),[e])}function c(){var e=o();return{selectMessage:function(n,t){return function(e,n,t){var i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+i.length+": "+e);var a=t.select(n),s=t.pluralForms.indexOf(a);return i[Math.min(s,i.length-1)]}(t,n,e)}}}}}]);