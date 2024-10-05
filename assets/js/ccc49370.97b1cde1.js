"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[3249],{8214:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});t(758);var a=t(3526),i=t(4893),r=t(1106),s=t(4441),l=t(9476),o=t(1357),c=t(8019),d=t(976),u=t(6070);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,Object.assign({},t,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})})),n&&(0,u.jsx)(d.A,Object.assign({},n,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0}))]})}function v(){var e,n=(0,s.e7)(),t=n.assets,a=n.metadata,r=a.title,l=a.description,o=a.date,c=a.tags,d=a.authors,m=a.frontMatter,v=m.keywords,f=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(i.be,{title:r,description:l,keywords:v,image:f,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var f=t(3752);function g(){var e=(0,s.J_)();return(0,u.jsx)(f.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var h=t(4260),p=t(6555);function x(e){var n=e.sidebar,t=e.children,a=(0,s.e7)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,v=i.frontMatter,f=v.hide_table_of_contents,g=v.toc_min_heading_level,x=v.toc_max_heading_level;return(0,u.jsxs)(l.A,{sidebar:n,toc:!f&&r.length>0?(0,u.jsx)(h.A,{toc:r,minHeadingLevel:g,maxHeadingLevel:x}):void 0,children:[(0,u.jsx)(p.A,{metadata:i}),(0,u.jsx)(o.A,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function b(e){var n=e.content;return(0,u.jsx)(s.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(v,{}),(0,u.jsx)(g,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},8948:(e,n,t)=>{t.d(n,{A:()=>c});t(758);var a=t(3526),i=t(9407),r=t(1106),s=t(2739),l=t(6070);function o(e){var n=e.className;return(0,l.jsx)(s.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(n,r.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,Object.assign({},e))]})}},6555:(e,n,t)=>{t.d(n,{A:()=>d});t(758);var a=t(3526),i=t(9407),r=t(1106),s=t(2739),l=t(6070);function o(e){var n=e.className;return(0,l.jsx)(s.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(n,r.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=t(8948);function d(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},4260:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8957),i=(t(758),t(3526)),r=t(5305);const s={tableOfContents:"tableOfContents_KioK",docItemContainer:"docItemContainer_PgvW"};var l=t(6070),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(r.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},5305:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(8957),i=t(758),r=t(2769),s=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.A)(e,s);t>=0?n[t].children.push(r):i.push(r)})),i}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,s=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(7026),f=t(6070);function g(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(g);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,a.A)(e,p),j=(0,r.p)(),A=null!=g?g:j.tableOfContents.minHeadingLevel,L=null!=x?x:j.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:L});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:A,maxHeadingLevel:L}}),[d,v,A,L])),(0,f.jsx)(h,Object.assign({toc:N,className:s,linkClassName:d},b))}},9407:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>s,TT:()=>d,Uh:()=>l,Yh:()=>c});t(758);var a=t(8019),i=t(3752),r=t(6070);function s(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);