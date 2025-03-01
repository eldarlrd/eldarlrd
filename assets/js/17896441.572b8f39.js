"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[8401],{126:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});t(8101);var a=t(4750),i=t(6188),s=t(5105);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1083:(e,n,t)=>{t.d(n,{A:()=>l});t(8101);var a=t(3526),i=t(70);const s={tag:"tag_t1AI",tagRegular:"tagRegular_H9jY",tagWithCount:"tagWithCount_ggpi"};var r=t(5105);function l(e){var n=e.permalink,t=e.label,l=e.count,o=e.description;return(0,r.jsxs)(i.A,{href:n,title:o,className:(0,a.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[t,l&&(0,r.jsx)("span",{children:l})]})}},1481:(e,n,t)=>{t.r(n),t.d(n,{default:()=>re});var a=t(8101),i=t(4939),s=t(8918),r=t(5105),l=a.createContext(null);function o(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:t,children:n})}function c(){var e=(0,a.useContext)(l);if(null===e)throw new s.dV("DocProvider");return e}function d(){var e,n=c(),t=n.metadata,a=n.frontMatter,s=n.assets;return(0,r.jsx)(i.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=s.image)?e:a.image})}var u=t(3526),m=t(947),v=t(4750),h=t(4557);function b(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(h.A,Object.assign({},n,{subLabel:(0,r.jsx)(v.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(h.A,Object.assign({},t,{subLabel:(0,r.jsx)(v.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function x(){var e=c().metadata;return(0,r.jsx)(b,{previous:e.previous,next:e.next})}var g=t(442),f=t(70),p=t(873),j=t(3969),A=t(1353),N=t(4136);var L={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){var n=L[e.versionMetadata.banner];return(0,r.jsx)(n,Object.assign({},e))}function _(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,r.jsx)(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(f.A,{to:t,onClick:a,children:(0,r.jsx)(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){var n,t=e.className,a=e.versionMetadata,i=(0,g.A)().siteConfig.title,s=(0,p.vT)({failfast:!0}).pluginId,l=(0,A.g1)(s).savePreferredVersionName,o=(0,p.HW)(s),c=o.latestDocSuggestion,d=o.latestVersionSuggestion,m=null!=c?c:(n=d).docs.find((function(e){return e.id===n.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(C,{siteTitle:i,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(_,{versionLabel:d.label,to:m.path,onClick:function(){return l(d.name)}})})]})}function k(e){var n=e.className,t=(0,N.r)();return t.banner?(0,r.jsx)(T,{className:n,versionMetadata:t}):null}function H(e){var n=e.className,t=(0,N.r)();return t.badge?(0,r.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var y=t(5261),M=t(5668);function O(){var e=c().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,i=e.tags,s=i.length>0,l=!!(n||t||a);return s||l?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[s&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(y.A,{tags:i})})}),l&&(0,r.jsx)(M.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var I=t(3116),B=t(6006),w=t(5860);const E={tocCollapsibleButton:"tocCollapsibleButton_DTVd",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_NnyM"};var V=["collapsed"];function R(e){var n=e.collapsed,t=(0,w.A)(e,V);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!n&&E.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const G={tocCollapsible:"tocCollapsible_oFRK",tocCollapsibleContent:"tocCollapsibleContent_KreQ",tocCollapsibleExpanded:"tocCollapsibleExpanded_fr1V"};function S(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,I.u)({initialState:!0}),l=s.collapsed,o=s.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(G.tocCollapsible,!l&&G.tocCollapsibleExpanded,t),children:[(0,r.jsx)(R,{collapsed:l,onClick:o}),(0,r.jsx)(I.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(B.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:i})})]})}const U={tocMobile:"tocMobile_uhLS"};function F(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(S,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,U.tocMobile)})}var D=t(7629);function P(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(D.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var z=t(9405),W=t(9222);function q(e){var n,t,a,i,s=e.children,l=(n=c(),t=n.metadata,a=n.frontMatter,i=n.contentTitle,a.hide_title||void 0!==i?null:t.title);return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(z.A,{as:"h1",children:l})}),(0,r.jsx)(W.A,{children:s})]})}var K=t(8141),Y=t(4655),Q=t(1913);function J(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const X={breadcrumbHomeIcon:"breadcrumbHomeIcon_NUbi"};function Z(){var e=(0,Q.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(f.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(J,{className:X.breadcrumbHomeIcon})})})}const $={breadcrumbsContainer:"breadcrumbsContainer_OFGn"};function ee(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,r.jsx)(f.A,{className:a,href:t,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:n})}):(0,r.jsx)("span",{className:a,children:n})}function ne(e){var n=e.children,t=e.active,a=e.index,i=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function te(){var e=(0,K.OF)(),n=(0,Y.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,r.jsx)(Z,{}),e.map((function(n,t){var a=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,r.jsx)(ne,{active:a,index:t,addMicrodata:!!i,children:(0,r.jsx)(ee,{href:i,isLast:a,children:n.label})},t)}))]})}):null}var ae=t(9770);const ie={docItemContainer:"docItemContainer_xe0D",docItemCol:"docItemCol_HGtd"};function se(e){var n,t,a,i,s,l,o=e.children,d=(n=c(),t=n.frontMatter,a=n.toc,i=(0,m.l)(),s=t.hide_table_of_contents,l=!s&&a.length>0,{hidden:s,mobile:l?(0,r.jsx)(F,{}):void 0,desktop:!l||"desktop"!==i&&"ssr"!==i?void 0:(0,r.jsx)(P,{})}),v=c().metadata;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&ie.docItemCol),children:[(0,r.jsx)(ae.A,{metadata:v}),(0,r.jsx)(k,{}),(0,r.jsxs)("div",{className:ie.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(te,{}),(0,r.jsx)(H,{}),d.mobile,(0,r.jsx)(q,{children:o}),(0,r.jsx)(O,{})]}),(0,r.jsx)(x,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function re(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(i.e3,{className:n,children:[(0,r.jsx)(d,{}),(0,r.jsx)(se,{children:(0,r.jsx)(t,{})})]})})}},4557:(e,n,t)=>{t.d(n,{A:()=>r});t(8101);var a=t(3526),i=t(70),s=t(5105);function r(e){var n=e.permalink,t=e.title,r=e.subLabel,l=e.isNext;return(0,s.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},5261:(e,n,t)=>{t.d(n,{A:()=>o});t(8101);var a=t(3526),i=t(4750),s=t(1083);const r={tags:"tags_as3q",tag:"tag_xTKL"};var l=t(5105);function o(e){var n=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))})]})}},6006:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(5860),i=t(8101),s=t(5944),r=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,a.A)(e,r);t>=0?n[t].children.push(s):i.push(s)})),i}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,s=e.find((function(e){return c(e).top>=i}));return s?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(s))?s:null!=(a=e[e.indexOf(s)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,s.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,s=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(70),h=t(5105);function b(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,h.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(b,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const x=i.memo(b);var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function f(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,a.A)(e,g),j=(0,s.p)(),A=null!=b?b:j.tableOfContents.minHeadingLevel,N=null!=f?f:j.tableOfContents.maxHeadingLevel,L=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:N});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:A,maxHeadingLevel:N}}),[d,v,A,N])),(0,h.jsx)(x,Object.assign({toc:L,className:r,linkClassName:d},p))}},6253:(e,n,t)=>{t.d(n,{A:()=>c});t(8101);var a=t(3526),i=t(126),s=t(3969),r=t(8303),l=t(5105);function o(e){var n=e.className;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,Object.assign({},e))]})}},7629:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(5860),i=(t(8101),t(3526)),s=t(6006);const r={tableOfContents:"tableOfContents_VxNl",docItemContainer:"docItemContainer_Tjk9"};var l=t(5105),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},9770:(e,n,t)=>{t.d(n,{A:()=>d});t(8101);var a=t(3526),i=t(126),s=t(3969),r=t(8303),l=t(5105);function o(e){var n=e.className;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(n,s.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=t(6253);function d(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}}}]);