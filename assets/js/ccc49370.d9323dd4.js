"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[3249],{5055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(9474);var a=t(8923),i=t(6293),r=t(2308),s=t(1572),l=t(446),o=t(7214),c=t(355),d=t(177),u=t(3274);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,Object.assign({},t,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,u.jsx)(d.A,Object.assign({},n,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function v(){var e,n=(0,s.e)(),t=n.assets,a=n.metadata,r=a.title,l=a.description,o=a.date,c=a.tags,d=a.authors,m=a.frontMatter,v=m.keywords,f=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(i.be,{title:r,description:l,keywords:v,image:f,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var f=t(9929),g=t(4844);function h(e){var n=e.sidebar,t=e.children,a=(0,s.e)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,v=i.frontMatter,h=i.unlisted,p=v.hide_table_of_contents,x=v.toc_min_heading_level,b=v.toc_max_heading_level;return(0,u.jsxs)(l.A,{sidebar:n,toc:!p&&r.length>0?(0,u.jsx)(f.A,{toc:r,minHeadingLevel:x,maxHeadingLevel:b}):void 0,children:[h&&(0,u.jsx)(g.A,{}),(0,u.jsx)(o.A,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function p(e){var n=e.content;return(0,u.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(v,{}),(0,u.jsx)(h,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},9929:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8595),i=(t(9474),t(8923)),r=t(2786);const s={tableOfContents:"tableOfContents_fD6m",docItemContainer:"docItemContainer_zQXe"};var l=t(3274),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(r.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},2786:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(8595),i=t(9474),r=t(579),s=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.A)(e,s);t>=0?n[t].children.push(r):i.push(r)})),i}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,s=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(1119),f=t(3274);function g(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,f.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(g);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,a.A)(e,p),j=(0,r.p)(),L=null!=g?g:j.tableOfContents.minHeadingLevel,A=null!=x?x:j.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:A});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:A}}),[d,v,L,A])),(0,f.jsx)(h,Object.assign({toc:N,className:s,linkClassName:d},b))}},4844:(e,n,t)=>{t.d(n,{A:()=>v});t(9474);var a=t(8923),i=t(355),r=t(6629),s=t(3274);function l(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(2308),u=t(3788);function m(e){var n=e.className;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(l,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function v(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,Object.assign({},e))]})}}}]);