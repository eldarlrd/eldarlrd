"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[9048],{6406:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(758),i=n(3526),o=n(4893),r=n(1106),s=n(343),l=n(6946),c=n(8019),d=n(1953),u=n(6415);const m={backToTopButton:"backToTopButton_NEHj",backToTopButtonShow:"backToTopButtonShow_b__N"};var b=n(6070);function h(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],o=n[1],r=(0,a.useRef)(!1),s=(0,d.gk)(),l=s.startScroll,c=s.cancelScroll;return(0,d.Mq)((function(e,n){var a=e.scrollY,i=null==n?void 0:n.scrollY;i&&(r.current?r.current=!1:a>=i?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,b.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",r.G.common.backToTopButton,m.backToTopButton,t&&m.backToTopButtonShow),type:"button",onClick:n})}var p=n(3666),x=n(5557),v=n(7996),f=n(2769),j=n(4775);function g(e){return(0,b.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const _="collapseSidebarButton_dY2S",A="collapseSidebarButtonIcon_MzoI";function C(e){var t=e.onClick;return(0,b.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",_),onClick:t,children:(0,b.jsx)(g,{className:A})})}var k=n(7222),S=n(8957),T=n(5025),N=Symbol("EmptyContext"),I=a.createContext(N);function y(e){var t=e.children,n=(0,a.useState)(null),i=n[0],o=n[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,b.jsx)(I.Provider,{value:r,children:t})}var B=n(9761),w=n(9128),L=n(7026),E=n(5619),M=["item","onItemClick","activePath","level","index"];function H(e){var t=e.collapsed,n=e.categoryLabel,a=e.onClick;return(0,b.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function G(e){var t=e.item,n=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,S.A)(e,M),u=t.items,m=t.label,h=t.collapsible,p=t.className,x=t.href,v=(0,f.p)().docs.sidebar.autoCollapseCategories,j=function(e){var t=(0,E.A)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.Nr)(e):void 0}),[e,t])}(t),g=(0,s.w8)(t,o),_=(0,w.ys)(x,o),A=(0,B.u)({initialState:function(){return!!h&&(!g&&t.collapsed)}}),C=A.collapsed,k=A.setCollapsed,y=function(){var e=(0,a.useContext)(I);if(e===N)throw new T.dV("DocSidebarItemsExpandedStateProvider");return e}(),G=y.expandedItem,P=y.setExpandedItem,O=function(e){void 0===e&&(e=!C),P(e?null:c),k(e)};return function(e){var t=e.isActive,n=e.collapsed,i=e.updateCollapsed,o=(0,T.ZC)(t);(0,a.useEffect)((function(){t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:g,collapsed:C,updateCollapsed:O}),(0,a.useEffect)((function(){h&&null!=G&&G!==c&&v&&k(!0)}),[h,G,c,k,v]),(0,b.jsxs)("li",{className:(0,i.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},p),children:[(0,b.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(L.A,Object.assign({className:(0,i.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":g}),onClick:h?function(e){null==n||n(t),x?O(!1):(e.preventDefault(),O())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!C:void 0,href:h?null!=j?j:"#":j},d,{children:m})),x&&h&&(0,b.jsx)(H,{collapsed:C,categoryLabel:m,onClick:function(e){e.preventDefault(),O()}})]}),(0,b.jsx)(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,b.jsx)(K,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:l+1})})]})}var P=n(7546),O=n(2975);const R="menuExternalLink_ESgX";var W=["item","onItemClick","activePath","level","index"];function D(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,S.A)(e,W)),c=t.href,d=t.label,u=t.className,m=t.autoAddBaseUrl,h=(0,s.w8)(t,a),p=(0,P.A)(c);return(0,b.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,b.jsxs)(L.A,Object.assign({className:(0,i.A)("menu__link",!p&&R,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:c},p&&{onClick:n?function(){return n(t)}:void 0},l,{children:[d,!p&&(0,b.jsx)(O.A,{})]}))},d)}const z="menuHtmlItem_Baq9";function V(e){var t=e.item,n=e.level,a=e.index,o=t.value,s=t.defaultStyle,l=t.className;return(0,b.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),s&&[z,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var Y=["item"];function F(e){var t=e.item,n=(0,S.A)(e,Y);switch(t.type){case"category":return(0,b.jsx)(G,Object.assign({item:t},n));case"html":return(0,b.jsx)(V,Object.assign({item:t},n));default:return(0,b.jsx)(D,Object.assign({item:t},n))}}var U=["items"];function q(e){var t=e.items,n=(0,S.A)(e,U),a=(0,s.Y)(t,n.activePath);return(0,b.jsx)(y,{children:a.map((function(e,t){return(0,b.jsx)(F,Object.assign({item:e,index:t},n),t)}))})}const K=(0,a.memo)(q),X="menu_wYBk",Z="menuWithAnnouncementBar__Y0l";function $(e){var t=e.path,n=e.sidebar,o=e.className,s=function(){var e=(0,k.M)().isActive,t=(0,a.useState)(e),n=t[0],i=t[1];return(0,d.Mq)((function(t){var n=t.scrollY;e&&i(0===n)}),[e]),e&&n}();return(0,b.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",X,s&&Z,o),children:(0,b.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:n,activePath:t,level:1})})})}const J="sidebar_rSS8",Q="sidebarWithHideableNavbar_DbMG",ee="sidebarHidden_GSt7",te="sidebarLogo_amjz";function ne(e){var t=e.path,n=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,f.p)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,b.jsxs)("div",{className:(0,i.A)(J,s&&Q,o&&ee),children:[s&&(0,b.jsx)(j.A,{tabIndex:-1,className:te}),(0,b.jsx)($,{path:t,sidebar:n}),l&&(0,b.jsx)(C,{onClick:a})]})}const ae=a.memo(ne);var ie=n(8359),oe=n(9716),re=function(e){var t=e.sidebar,n=e.path,a=(0,oe.M)();return(0,b.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function se(e){return(0,b.jsx)(ie.GX,{component:re,props:e})}const le=a.memo(se);function ce(e){var t=(0,v.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(ae,Object.assign({},e)),a&&(0,b.jsx)(le,Object.assign({},e))]})}const de={expandButton:"expandButton_G20n",expandButtonIcon:"expandButtonIcon_L9HC"};function ue(e){var t=e.toggleSidebar;return(0,b.jsx)("div",{className:de.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(g,{className:de.expandButtonIcon})})}const me={docSidebarContainer:"docSidebarContainer_ukft",docSidebarContainerHidden:"docSidebarContainerHidden_x6uP",sidebarViewport:"sidebarViewport_wheT"};function be(e){var t,n=e.children,i=(0,l.t)();return(0,b.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,x.zy)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),!c&&(0,p.O)()&&d(!0),o((function(e){return!e}))}),[o,c]);return(0,b.jsx)("aside",{className:(0,i.A)(r.G.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&d(!0)},children:(0,b.jsx)(be,{children:(0,b.jsxs)("div",{className:(0,i.A)(me.sidebarViewport,c&&me.sidebarViewportHidden),children:[(0,b.jsx)(ce,{sidebar:t,path:s,onCollapse:u,isHidden:c}),c&&(0,b.jsx)(ue,{toggleSidebar:u})]})})})}const pe={docMainContainer:"docMainContainer_tuar",docMainContainerEnhanced:"docMainContainerEnhanced_V3jH",docItemWrapperEnhanced:"docItemWrapperEnhanced_zOzk"};function xe(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,l.t)();return(0,b.jsx)("main",{className:(0,i.A)(pe.docMainContainer,(t||!a)&&pe.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced),children:n})})}const ve={docRoot:"docRoot__BAI",docsWrapper:"docsWrapper_K1Uy"};function fe(e){var t=e.children,n=(0,l.t)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,b.jsxs)("div",{className:ve.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:ve.docRoot,children:[n&&(0,b.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,b.jsx)(xe,{hiddenSidebarContainer:o,children:t})]})]})}var je=n(2061);function ge(e){var t=(0,s.B5)(e);if(!t)return(0,b.jsx)(je.A,{});var n=t.docElement,a=t.sidebarName,c=t.sidebarItems;return(0,b.jsx)(o.e3,{className:(0,i.A)(r.G.page.docsDocPage),children:(0,b.jsx)(l.V,{name:a,items:c,children:(0,b.jsx)(fe,{children:n})})})}},2061:(e,t,n)=>{n.d(t,{A:()=>s});n(758);var a=n(3526),i=n(8019),o=n(292),r=n(6070);function s(e){var t=e.className;return(0,r.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);