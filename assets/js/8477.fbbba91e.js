"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[8477],{921:(e,a,t)=>{t.d(a,{A:()=>A});var r=t(2601),n=t(758),s=t(3526),i=t(6398),l=t(4542),o=t(977),c=t(5235),d=t(5557),m=t(1098);function u(e){var a=(0,d.zy)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,a){return!(e.unlisted&&!(0,m.ys)(e.permalink,a))}(e,a)}))}),[e,a])}const g={sidebar:"sidebar_rsVK",sidebarItemTitle:"sidebarItemTitle_OyLv",sidebarItemList:"sidebarItemList_GgSF",sidebarItem:"sidebarItem_ZmQi",sidebarItemLink:"sidebarItemLink_mly3",sidebarItemLinkActive:"sidebarItemLinkActive_lYGI"};var h=t(6070);function v(e){var a=e.sidebar,t=u(a.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,s.A)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,s.A)(g.sidebarItemTitle,"margin-bottom--md"),children:a.title}),(0,h.jsx)("ul",{className:(0,s.A)(g.sidebarItemList,"clean-list"),children:t.map((function(e){return(0,h.jsx)("li",{className:g.sidebarItem,children:(0,h.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var x=t(5765);function f(e){var a=u(e.sidebar.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((function(e){return(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function j(e){return(0,h.jsx)(x.GX,{component:f,props:e})}function b(e){var a=e.sidebar,t=(0,l.l)();return null!=a&&a.items.length?"mobile"===t?(0,h.jsx)(j,{sidebar:a}):(0,h.jsx)(v,{sidebar:a}):null}var p=["sidebar","toc","children"];function A(e){var a=e.sidebar,t=e.toc,n=e.children,l=(0,r.A)(e,p),o=a&&a.items.length>0;return(0,h.jsx)(i.A,Object.assign({},l,{children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:a}),(0,h.jsx)("main",{className:(0,s.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:n}),t&&(0,h.jsx)("div",{className:"col col--2",children:t})]})})}))}},6828:(e,a,t)=>{t.d(a,{A:()=>O});t(758);var r=t(3526),n=t(5776),s=t(6070);function i(e){var a=e.children,t=e.className;return(0,s.jsx)("article",{className:t,children:a})}var l=t(977);const o={title:"title_rsWp"};function c(e){var a=e.className,t=(0,n.e)(),i=t.metadata,c=t.isBlogPostPage,d=i.permalink,m=i.title,u=c?"h1":"h2";return(0,s.jsx)(u,{className:(0,r.A)(o.title,a),children:c?m:(0,s.jsx)(l.A,{to:d,children:m})})}var d=t(5235),m=t(8210),u=t(2293);const g={container:"container_fJZi"};function h(e){var a,t=e.readingTime,r=(a=(0,m.W)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,s.jsx)(s.Fragment,{children:r(t)})}function v(e){var a=e.date,t=e.formattedDate;return(0,s.jsx)("time",{dateTime:a,children:t})}function x(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function f(e){var a,t=e.className,i=(0,n.e)().metadata,l=i.date,o=i.readingTime,c=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.A)(g.container,"margin-vert--md",t),children:[(0,s.jsx)(v,{date:l,formattedDate:(a=l,c.format(new Date(a)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(h,{readingTime:o})]})]})}function j(e){return e.href?(0,s.jsx)(l.A,Object.assign({},e)):(0,s.jsx)(s.Fragment,{children:e.children})}function b(e){var a=e.author,t=e.className,n=a.name,i=a.title,l=a.url,o=a.imageURL,c=a.email,d=l||c&&"mailto:"+c||void 0;return(0,s.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",t),children:[o&&(0,s.jsx)(j,{href:d,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,s.jsxs)("div",{className:"avatar__intro",children:[(0,s.jsx)("div",{className:"avatar__name",children:(0,s.jsx)(j,{href:d,children:(0,s.jsx)("span",{children:n})})}),i&&(0,s.jsx)("small",{className:"avatar__subtitle",children:i})]})]})}const p={authorCol:"authorCol_oOiV",imageOnlyAuthorRow:"imageOnlyAuthorRow_eidk",imageOnlyAuthorCol:"imageOnlyAuthorCol_Llkc"};function A(e){var a=e.className,t=(0,n.e)(),i=t.metadata.authors,l=t.assets;if(0===i.length)return null;var o=i.every((function(e){return!e.name}));return(0,s.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?p.imageOnlyAuthorRow:"row",a),children:i.map((function(e,a){var t;return(0,s.jsx)("div",{className:(0,r.A)(!o&&"col col--6",o?p.imageOnlyAuthorCol:p.authorCol),children:(0,s.jsx)(b,{author:Object.assign({},e,{imageURL:null!=(t=l.authorsImageUrls[a])?t:e.imageURL})})},a)}))})}function N(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(f,{}),(0,s.jsx)(A,{})]})}var _=t(5785),k=t(7511);function P(e){var a=e.children,t=e.className,i=(0,n.e)().isBlogPostPage;return(0,s.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,r.A)("markdown",t),children:(0,s.jsx)(k.A,{children:a})})}var T=t(9960),I=t(5458),w=t(4516),L=t(2601),y=["blogPostTitle"];function C(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function R(e){var a=e.blogPostTitle,t=(0,L.A)(e,y);return(0,s.jsx)(l.A,Object.assign({"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},t,{children:(0,s.jsx)(C,{})}))}function F(){var e=(0,n.e)(),a=e.metadata,t=e.isBlogPostPage,i=a.tags,l=a.title,o=a.editUrl,c=a.hasTruncateMarker,d=a.lastUpdatedBy,m=a.lastUpdatedAt,u=!t&&c,g=i.length>0;if(!(g||u||o))return null;if(t){var h=!!(o||m||d);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,s.jsx)("div",{className:(0,r.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(w.A,{tags:i})})}),h&&(0,s.jsx)(I.A,{className:(0,r.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:m,lastUpdatedBy:d})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,s.jsx)("div",{className:(0,r.A)("col",{"col--9":u}),children:(0,s.jsx)(w.A,{tags:i})}),u&&(0,s.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":g}),children:(0,s.jsx)(R,{blogPostTitle:l,to:a.permalink})})]})}function O(e){var a=e.children,t=e.className,l=(0,n.e)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,s.jsxs)(i,{className:(0,r.A)(l,t),children:[(0,s.jsx)(N,{}),(0,s.jsx)(P,{children:a}),(0,s.jsx)(F,{})]})}},460:(e,a,t)=>{t.d(a,{A:()=>i});t(758);var r=t(3526),n=t(977),s=t(6070);function i(e){var a=e.permalink,t=e.title,i=e.subLabel,l=e.isNext;return(0,s.jsxs)(n.A,{className:(0,r.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:a,children:[i&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},5784:(e,a,t)=>{t.d(a,{A:()=>l});t(758);var r=t(3526),n=t(977);const s={tag:"tag_iTEv",tagRegular:"tagRegular_eeQ6",tagWithCount:"tagWithCount_t_pJ"};var i=t(6070);function l(e){var a=e.permalink,t=e.label,l=e.count,o=e.description;return(0,i.jsxs)(n.A,{href:a,title:o,className:(0,r.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[t,l&&(0,i.jsx)("span",{children:l})]})}},4516:(e,a,t)=>{t.d(a,{A:()=>o});t(758);var r=t(3526),n=t(5235),s=t(5784);const i={tags:"tags_J5Xz",tag:"tag_NSPI"};var l=t(6070);function o(e){var a=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,r.A)(i.tags,"padding--none","margin-left--sm"),children:a.map((function(e){return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))})]})}},5776:(e,a,t)=>{t.d(a,{e:()=>o,i:()=>l});var r=t(758),n=t(7274),s=t(6070),i=r.createContext(null);function l(e){var a=e.children,t=e.content,n=e.isBlogPostPage,l=function(e){var a=e.content,t=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:a.metadata,frontMatter:a.frontMatter,assets:a.assets,toc:a.toc,isBlogPostPage:t}}),[a,t])}({content:t,isBlogPostPage:void 0!==n&&n});return(0,s.jsx)(i.Provider,{value:l,children:a})}function o(){var e=(0,r.useContext)(i);if(null===e)throw new n.dV("BlogPostProvider");return e}},8210:(e,a,t)=>{t.d(a,{W:()=>c});var r=t(758),n=t(2477),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(a){return e.includes(a)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return a=e,t=new Intl.PluralRules(a),{locale:a,pluralForms:i(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),l}var a,t}),[e])}function c(){var e=o();return{selectMessage:function(a,t){return function(e,a,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=t.select(a),s=t.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(t,a,e)}}}}}]);