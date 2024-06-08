"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[3249],{6511:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(758);var a=t(3526),i=t(635),r=t(6535),l=t(3675),o=t(4450),s=t(8161),c=t(727),d=t(5275),u=t(6070);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,Object.assign({},t,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,u.jsx)(d.A,Object.assign({},n,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function g(){var e,n=(0,l.e)(),t=n.assets,a=n.metadata,r=a.title,o=a.description,s=a.date,c=a.tags,d=a.authors,m=a.frontMatter,g=m.keywords,v=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(i.be,{title:r,description:o,keywords:g,image:v,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var v=t(9384),f=t(2247);function h(){var e=(0,f.J)();return(0,u.jsx)(v.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(7627),b=t(6936);function x(e){var n=e.sidebar,t=e.children,a=(0,l.e)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,g=i.frontMatter,v=i.unlisted,f=g.hide_table_of_contents,h=g.toc_min_heading_level,x=g.toc_max_heading_level;return(0,u.jsxs)(o.A,{sidebar:n,toc:!f&&r.length>0?(0,u.jsx)(p.A,{toc:r,minHeadingLevel:h,maxHeadingLevel:x}):void 0,children:[v&&(0,u.jsx)(b.A,{}),(0,u.jsx)(s.A,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function j(e){var n=e.content;return(0,u.jsx)(l.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(h,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},7627:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(4032),i=(t(758),t(3526)),r=t(9828);const l={tableOfContents:"tableOfContents_s1Ka",docItemContainer:"docItemContainer_Bvkx"};var o=t(6070),s=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,s);return(0,o.jsx)("div",{className:(0,i.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(r.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},9828:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(4032),i=t(758),r=t(8966),l=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.A)(e,l);t>=0?n[t].children.push(r):i.push(r)})),i}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,l=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=d(o,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var g=t(6674),v=t(6070);function f(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,v.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(g.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const h=i.memo(f);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var n=e.toc,t=e.className,l=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,f=e.minHeadingLevel,b=e.maxHeadingLevel,x=(0,a.A)(e,p),j=(0,r.p)(),A=null!=f?f:j.tableOfContents.minHeadingLevel,L=null!=b?b:j.tableOfContents.maxHeadingLevel,k=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:L});return m((0,i.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:A,maxHeadingLevel:L}}),[d,g,A,L])),(0,v.jsx)(h,Object.assign({toc:k,className:l,linkClassName:d},x))}},6936:(e,n,t)=>{t.d(n,{A:()=>g});t(758);var a=t(3526),i=t(727),r=t(9384),l=t(6070);function o(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(r.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(6535),u=t(6850);function m(e){var n=e.className;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(s,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,Object.assign({},e))]})}},2247:(e,n,t)=>{t.d(n,{k:()=>d,J:()=>u});var a=t(845),i=t(2982),r=t(9727);var l=t(3675),o=function(e){return new Date(e).toISOString()};function s(e){var n=e.map(m);return{author:1===n.length?n[0]:n}}function c(e,n,t){return e?{image:(a={imageUrl:n(e,{absolute:!0}),caption:"title image for the blog post: "+t},i=a.imageUrl,r=a.caption,{"@type":"ImageObject","@id":i,url:i,contentUrl:i,caption:r})}:{};var a,i,r}function d(e){var n=(0,i.A)().siteConfig,t=(0,a.hH)().withBaseUrl,r=e.metadata,l=r.blogDescription,d=r.blogTitle,u=r.permalink,m=""+n.url+u;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:d,description:l,blogPost:e.items.map((function(e){return function(e,n,t){var a,i,r=e.assets,l=e.frontMatter,d=e.metadata,u=d.date,m=d.title,g=d.description,v=d.lastUpdatedAt,f=null!=(a=r.image)?a:l.image,h=null!=(i=l.keywords)?i:[],p=""+n.url+d.permalink,b=v?o(v):void 0;return Object.assign({"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:m,name:m,description:g,datePublished:u},b?{dateModified:b}:{},s(d.authors),c(f,t,m),h?{keywords:h}:{})}(e.content,n,t)}))}}function u(){var e,n,t=function(){var e,n=(0,r.A)(),t=null==n||null==(e=n.data)?void 0:e.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),d=(0,l.e)(),u=d.assets,m=d.metadata,g=(0,i.A)().siteConfig,v=(0,a.hH)().withBaseUrl,f=m.date,h=m.title,p=m.description,b=m.frontMatter,x=m.lastUpdatedAt,j=null!=(e=u.image)?e:b.image,A=null!=(n=b.keywords)?n:[],L=x?o(x):void 0,k=""+g.url+m.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:h,name:h,description:p,datePublished:f},L?{dateModified:L}:{},s(m.authors),c(j,v,h),A?{keywords:A}:{},{isPartOf:{"@type":"Blog","@id":""+g.url+t.blogBasePath,name:t.blogTitle}})}function m(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}}}]);