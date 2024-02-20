"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[8401],{6618:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(9474),s=n(2335),i=n(8106),r=n(3274),l=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:n,children:t})}function d(){var e=(0,a.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function c(){var e,t=d(),n=t.metadata,a=t.frontMatter,i=t.assets;return(0,r.jsx)(s.be,{title:n.title,description:n.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=n(8923),m=n(2322),h=n(3770),v=n(3841);function b(e){var t=e.previous,n=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(v.A,Object.assign({},t,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(v.A,Object.assign({},n,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function p(){var e=d().metadata;return(0,r.jsx)(b,{previous:e.previous,next:e.next})}var x=n(9439),g=n(7575),f=n(1265),j=n(8340),A=n(6946),N=n(6741);var L={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){var t=L[e.versionMetadata.banner];return(0,r.jsx)(t,Object.assign({},e))}function _(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{to:n,onClick:a,children:(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){var t,n=e.className,a=e.versionMetadata,s=(0,x.A)().siteConfig.title,i=(0,f.vT)({failfast:!0}).pluginId,l=(0,A.g1)(i).savePreferredVersionName,o=(0,f.HW)(i),d=o.latestDocSuggestion,c=o.latestVersionSuggestion,m=null!=d?d:(t=c).docs.find((function(e){return e.id===t.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.A)(n,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(C,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(_,{versionLabel:c.label,to:m.path,onClick:function(){return l(c.name)}})})]})}function T(e){var t=e.className,n=(0,N.r)();return n.banner?(0,r.jsx)(k,{className:t,versionMetadata:n}):null}function H(e){var t=e.className,n=(0,N.r)();return n.badge?(0,r.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return(0,r.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function y(e){var t=e.lastUpdatedBy;return(0,r.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function w(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,r.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,r.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,r.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var M=n(9041),B=n(5925);const O={lastUpdated:"lastUpdated_NP7R"};function E(e){return(0,r.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(B.A,Object.assign({},e))})})}function I(e){var t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(M.A,{editUrl:t})}),(0,r.jsx)("div",{className:(0,u.A)("col",O.lastUpdated),children:(n||a)&&(0,r.jsx)(w,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function S(){var e=d().metadata,t=e.editUrl,n=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,i=e.tags,l=i.length>0,o=!!(t||n||s);return l||o?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,r.jsx)(E,{tags:i}),o&&(0,r.jsx)(I,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var R=n(5911),G=n(3388),P=n(2693);const V={tocCollapsibleButton:"tocCollapsibleButton_sZpk",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_pBiN"};var D=["collapsed"];function z(e){var t=e.collapsed,n=(0,P.A)(e,D);return(0,r.jsx)("button",Object.assign({type:"button"},n,{className:(0,u.A)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const F={tocCollapsible:"tocCollapsible_dwFa",tocCollapsibleContent:"tocCollapsibleContent_B2E3",tocCollapsibleExpanded:"tocCollapsibleExpanded_dv9o"};function q(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,R.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(F.tocCollapsible,!l&&F.tocCollapsibleExpanded,n),children:[(0,r.jsx)(z,{collapsed:l,onClick:o}),(0,r.jsx)(R.N,{lazy:!0,className:F.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(G.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const W={tocMobile:"tocMobile_SCea"};function Q(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(q,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,W.tocMobile)})}var Y=n(1981);function Z(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(Y.A,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var J=n(5453),K=n(4681);function X(e){var t,n,a,s,i=e.children,l=(t=d(),n=t.metadata,a=t.frontMatter,s=t.contentTitle,a.hide_title||void 0!==s?null:n.title);return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(J.A,{as:"h1",children:l})}),(0,r.jsx)(K.A,{children:i})]})}var $=n(6154),ee=n(4270),te=n(4444);function ne(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_TgSh"};function se(){var e=(0,te.A)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(ne,{className:ae.breadcrumbHomeIcon})})})}const ie={breadcrumbsContainer:"breadcrumbsContainer_Qt4T"};function re(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,r.jsx)(g.A,{className:a,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:a,children:t})}function le(e){var t=e.children,n=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function oe(){var e=(0,$.OF)(),t=(0,ee.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(se,{}),e.map((function(t,n){var a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(le,{active:a,index:n,addMicrodata:!!s,children:(0,r.jsx)(re,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var de=n(69);const ce={docItemContainer:"docItemContainer_zBRl",docItemCol:"docItemCol_d5tY"};function ue(e){var t,n,a,s,i,l,o=e.children,c=(t=d(),n=t.frontMatter,a=t.toc,s=(0,m.l)(),i=n.hide_table_of_contents,l=!i&&a.length>0,{hidden:i,mobile:l?(0,r.jsx)(Q,{}):void 0,desktop:!l||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(Z,{})}),h=d().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!c.hidden&&ce.docItemCol),children:[h&&(0,r.jsx)(de.A,{}),(0,r.jsx)(T,{}),(0,r.jsxs)("div",{className:ce.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(oe,{}),(0,r.jsx)(H,{}),c.mobile,(0,r.jsx)(X,{children:o}),(0,r.jsx)(S,{})]}),(0,r.jsx)(p,{})]})]}),c.desktop&&(0,r.jsx)("div",{className:"col col--3",children:c.desktop})]})}function me(e){var t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(s.e3,{className:t,children:[(0,r.jsx)(c,{}),(0,r.jsx)(ue,{children:(0,r.jsx)(n,{})})]})})}},9041:(e,t,n)=>{n.d(t,{A:()=>m});n(9474);var a=n(3770),s=n(8340),i=n(7575),r=n(2693),l=n(8923);const o={iconEdit:"iconEdit_cNyq"};var d=n(3274),c=["className"];function u(e){var t=e.className,n=(0,r.A)(e,c);return(0,d.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(o.iconEdit,t),"aria-hidden":"true"},n,{children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var t=e.editUrl;return(0,d.jsxs)(i.A,{to:t,className:s.G.common.editThisPage,children:[(0,d.jsx)(u,{}),(0,d.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},3841:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(8923),s=n(7575),i=n(3274);function r(e){var t=e.permalink,n=e.title,r=e.subLabel,l=e.isNext;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},1981:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(2693),s=(n(9474),n(8923)),i=n(3388);const r={tableOfContents:"tableOfContents_yh0Q",docItemContainer:"docItemContainer_ntNq"};var l=n(3274),o=["className"],d="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,s.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(i.A,Object.assign({},n,{linkClassName:d,linkActiveClassName:c}))})}},3388:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(2693),s=n(9474),i=n(3491),r=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var s=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.A)(e,r);n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function c(e,t){var n,a,s=t.anchorTopOffset,i=e.find((function(e){return d(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,s.useRef)(0),t=(0,i.p)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,s.useRef)(void 0),n=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],s=t;s<=n;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:n.current}),d=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var h=n(7575),v=n(3274);function b(e){var t=e.toc,n=e.className,a=e.linkClassName,s=e.isChild;return t.length?(0,v.jsx)("ul",{className:s?void 0:n,children:t.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(h.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(b,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const p=s.memo(b);var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,c=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,h=void 0===u?void 0:u,b=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,a.A)(e,x),j=(0,i.p)(),A=null!=b?b:j.tableOfContents.minHeadingLevel,N=null!=g?g:j.tableOfContents.maxHeadingLevel,L=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:A,maxHeadingLevel:N});return m((0,s.useMemo)((function(){if(c&&h)return{linkClassName:c,linkActiveClassName:h,minHeadingLevel:A,maxHeadingLevel:N}}),[c,h,A,N])),(0,v.jsx)(p,Object.assign({toc:L,className:r,linkClassName:c},f))}},2471:(e,t,n)=>{n.d(t,{A:()=>l});n(9474);var a=n(8923),s=n(7575);const i={tag:"tag_YtoR",tagRegular:"tagRegular_ozL8",tagWithCount:"tagWithCount_UNEd"};var r=n(3274);function l(e){var t=e.permalink,n=e.label,l=e.count;return(0,r.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},5925:(e,t,n)=>{n.d(t,{A:()=>o});n(9474);var a=n(8923),s=n(3770),i=n(2471);const r={tags:"tags_MLz7",tag:"tag_qjkn"};var l=n(3274);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,n=e.permalink;return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},69:(e,t,n)=>{n.d(t,{A:()=>h});n(9474);var a=n(8923),s=n(3770),i=n(6045),r=n(3274);function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=n(8340),u=n(5301);function m(e){var t=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(t,c.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,Object.assign({},e))]})}}}]);