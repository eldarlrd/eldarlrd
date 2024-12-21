"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4111],{7679:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>k,Ki:()=>_,kJ:()=>x,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>w});var r=a(8101),n=a(8489),s=a(7959),i=a(5105);function l(){var e,t=(0,s.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}var o=r.createContext(null);function c(e){var t=e.children,a=e.content,n=e.isBlogPostPage,s=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return(0,i.jsx)(o.Provider,{value:s,children:t})}function u(){var e=(0,r.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var m=a(3429),d=a(6030),h=function(e){return new Date(e).toISOString()};function g(e){var t=e.map(p);return{author:1===t.length?t[0]:t}}function v(e,t,a){return e?{image:(r={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a},n=r.imageUrl,s=r.caption,{"@type":"ImageObject","@id":n,url:n,contentUrl:n,caption:s})}:{};var r,n,s}function x(e){var t=(0,d.A)().siteConfig,a=(0,m.hH)().withBaseUrl,r=e.metadata,n=r.blogDescription,s=r.blogTitle,i=r.permalink,l=""+t.url+i;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:s,description:n,blogPost:e.items.map((function(e){return function(e,t,a){var r,n,s=e.assets,i=e.frontMatter,l=e.metadata,o=l.date,c=l.title,u=l.description,m=l.lastUpdatedAt,d=null!=(r=s.image)?r:i.image,x=null!=(n=i.keywords)?n:[],f=""+t.url+l.permalink,p=m?h(m):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:c,name:c,description:u,datePublished:o},p?{dateModified:p}:{},g(l.authors),v(d,a,c),x?{keywords:x}:{})}(e.content,t,a)}))}}function f(){var e,t,a=l(),r=u(),n=r.assets,s=r.metadata,i=(0,d.A)().siteConfig,o=(0,m.hH)().withBaseUrl,c=s.date,x=s.title,f=s.description,p=s.frontMatter,j=s.lastUpdatedAt,b=null!=(e=n.image)?e:p.image,N=null!=(t=p.keywords)?t:[],A=j?h(j):void 0,w=""+i.url+s.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":w,mainEntityOfPage:w,url:w,headline:x,name:x,description:f,datePublished:c},A?{dateModified:A}:{},g(s.authors),v(b,o,x),N?{keywords:N}:{},{isPartOf:{"@type":"Blog","@id":""+i.url+a.blogBasePath,name:a.blogTitle}})}function p(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}var j=a(5234),b=a(1514),N=a(1145),A=a(4890);function w(e){var t=(0,j.zy)().pathname;return(0,r.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,A.ys)(e.permalink,t))}(e,t)}))}),[e,t])}function _(e){var t=(0,N.$z)(e,(function(e){return""+new Date(e.date).getFullYear()})),a=Object.entries(t);return a.reverse(),a}function k(e){var t=e.items,a=e.ulClassName,r=e.liClassName,n=e.linkClassName,s=e.linkActiveClassName;return(0,i.jsx)("ul",{className:a,children:t.map((function(e){return(0,i.jsx)("li",{className:r,children:(0,i.jsx)(b.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:s,children:e.title})},e.permalink)}))})}},8596:(e,t,a)=>{a.d(t,{A:()=>I});var r=a(5045),n=a(8101),s=a(3526),i=a(1118),l=a(2526),o=a(593),c=a(7679),u=a(8159),m=a(1051),d=a(5105);function h(e){var t=e.year,a=e.yearGroupHeadingClassName,r=e.children;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(m.A,{as:"h3",className:a,children:t}),r]})}function g(e){var t=e.items,a=e.yearGroupHeadingClassName,r=e.ListComponent;if((0,u.p)().blog.sidebar.groupByYear){var n=(0,c.Ki)(t);return(0,d.jsx)(d.Fragment,{children:n.map((function(e){var t=e[0],n=e[1];return(0,d.jsx)(h,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(r,{items:n})},t)}))})}return(0,d.jsx)(r,{items:t})}const v=(0,n.memo)(g),x="sidebar_K20b",f="sidebarItemTitle_iPzi",p="sidebarItemList_fjHH",j="sidebarItem__5ql",b="sidebarItemLink_hYxM",N="sidebarItemLinkActive_G6VV",A="yearGroupHeading_sgWT";var w=function(e){var t=e.items;return(0,d.jsx)(c.OU,{items:t,ulClassName:(0,s.A)(p,"clean-list"),liClassName:j,linkClassName:b,linkActiveClassName:N})};function _(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,s.A)(x,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,s.A)(f,"margin-bottom--md"),children:t.title}),(0,d.jsx)(v,{items:a,ListComponent:w,yearGroupHeadingClassName:A})]})})}const k=(0,n.memo)(_);var C=a(8421);const M="yearGroupHeading_iryR";var y=function(e){var t=e.items;return(0,d.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function P(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,d.jsx)(v,{items:a,ListComponent:y,yearGroupHeadingClassName:M})}function O(e){return(0,d.jsx)(C.GX,{component:P,props:e})}const L=(0,n.memo)(O);function B(e){var t=e.sidebar,a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,d.jsx)(L,{sidebar:t}):(0,d.jsx)(k,{sidebar:t}):null}var T=["sidebar","toc","children"];function I(e){var t=e.sidebar,a=e.toc,n=e.children,l=(0,r.A)(e,T),o=t&&t.items.length>0;return(0,d.jsx)(i.A,Object.assign({},l,{children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(B,{sidebar:t}),(0,d.jsx)("main",{className:(0,s.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:n}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})}))}},5366:(e,t,a)=>{a.d(t,{A:()=>W});a(8101);var r=a(3526),n=a(7679),s=a(5105);function i(e){var t=e.children,a=e.className;return(0,s.jsx)("article",{className:a,children:t})}var l=a(1514);const o={title:"title_PLk9"};function c(e){var t=e.className,a=(0,n.e7)(),i=a.metadata,c=a.isBlogPostPage,u=i.permalink,m=i.title,d=c?"h1":"h2";return(0,s.jsx)(d,{className:(0,r.A)(o.title,t),children:c?m:(0,s.jsx)(l.A,{to:u,children:m})})}var u=a(593),m=a(6194),d=a(9413);const h={container:"container_rIeI"};function g(e){var t,a=e.readingTime,r=(t=(0,m.W)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,s.jsx)(s.Fragment,{children:r(a)})}function v(e){var t=e.date,a=e.formattedDate;return(0,s.jsx)("time",{dateTime:t,children:a})}function x(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function f(e){var t,a=e.className,i=(0,n.e7)().metadata,l=i.date,o=i.readingTime,c=(0,d.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.A)(h.container,"margin-vert--md",a),children:[(0,s.jsx)(v,{date:l,formattedDate:(t=l,c.format(new Date(t)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(g,{readingTime:o})]})]})}const p="githubSvg_XzfP";const j="xSvg_qpQ3";const b=function(e){return(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e,{children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,s.jsx)("path",{d:"M3.6 9h16.8"}),(0,s.jsx)("path",{d:"M3.6 15h16.8"}),(0,s.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,s.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}))},N={authorSocials:"authorSocials_Cbjo",authorSocialLink:"authorSocialLink_P269",authorSocialIcon:"authorSocialIcon_a8pD"};var A={twitter:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e,{children:(0,s.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}))},label:"Twitter"},github:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 256 250",width:"1em",height:"1em"},e,{className:(0,r.A)(e.className,p),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,s.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}))},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e,{children:[(0,s.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,s.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}))},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e,{children:(0,s.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}))},label:"LinkedIn"},x:{Icon:function(e){return(0,s.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227"},e,{className:(0,r.A)(e.className,j),style:{"--dark":"#000","--light":"#fff"},children:(0,s.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}))},label:"X"}};function w(e){var t,a,n=e.platform,i=e.link,o=null!=(a=A[t=n])?a:{Icon:b,label:t},c=o.Icon,u=o.label;return(0,s.jsx)(l.A,{className:N.authorSocialLink,href:i,title:u,children:(0,s.jsx)(c,{className:(0,r.A)(N.authorSocialLink)})})}function _(e){var t,a=e.author,r=Object.entries(null!=(t=a.socials)?t:{});return(0,s.jsx)("div",{className:N.authorSocials,children:r.map((function(e){var t=e[0],a=e[1];return(0,s.jsx)(w,{platform:t,link:a},t)}))})}var k=a(1051);const C={authorImage:"authorImage_ujH4","author-as-h1":"author-as-h1_sCMp","author-as-h2":"author-as-h2_mWj3",authorDetails:"authorDetails_yXOr",authorName:"authorName_wRQw",authorTitle:"authorTitle_mBhQ",authorBlogPostCount:"authorBlogPostCount_jafN"};function M(e){return e.href?(0,s.jsx)(l.A,Object.assign({},e)):(0,s.jsx)(s.Fragment,{children:e.children})}function y(e){var t=e.title;return(0,s.jsx)("small",{className:C.authorTitle,title:t,children:t})}function P(e){var t=e.name,a=e.as;return a?(0,s.jsx)(k.A,{as:a,className:C.authorName,children:t}):(0,s.jsx)("span",{className:C.authorName,children:t})}function O(e){var t=e.count;return(0,s.jsx)("span",{className:(0,r.A)(C.authorBlogPostCount),children:t})}function L(e){var t=e.as,a=e.author,n=e.className,i=e.count,l=a.name,o=a.title,c=a.url,u=a.imageURL,m=a.email,d=a.page,h=(null==d?void 0:d.permalink)||c||m&&"mailto:"+m||void 0;return(0,s.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",n,C["author-as-"+t]),children:[u&&(0,s.jsx)(M,{href:h,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:(0,r.A)("avatar__photo",C.authorImage),src:u,alt:l})}),(l||o)&&(0,s.jsxs)("div",{className:(0,r.A)("avatar__intro",C.authorDetails),children:[(0,s.jsxs)("div",{className:"avatar__name",children:[l&&(0,s.jsx)(M,{href:h,children:(0,s.jsx)(P,{name:l,as:t})}),void 0!==i&&(0,s.jsx)(O,{count:i})]}),!!o&&(0,s.jsx)(y,{title:o}),(0,s.jsx)(_,{author:a})]})]})}const B={authorCol:"authorCol_AtzV",imageOnlyAuthorRow:"imageOnlyAuthorRow_fLYn",imageOnlyAuthorCol:"imageOnlyAuthorCol_DoHi"};function T(e){var t=e.className,a=(0,n.e7)(),i=a.metadata.authors,l=a.assets;if(0===i.length)return null;var o=i.every((function(e){return!e.name})),c=1===i.length;return(0,s.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?B.imageOnlyAuthorRow:"row",t),children:i.map((function(e,t){var a;return(0,s.jsx)("div",{className:(0,r.A)(!o&&(c?"col col--12":"col col--6"),o?B.imageOnlyAuthorCol:B.authorCol),children:(0,s.jsx)(L,{author:Object.assign({},e,{imageURL:null!=(a=l.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function I(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(f,{}),(0,s.jsx)(T,{})]})}var U=a(6283),R=a(1978);function H(e){var t=e.children,a=e.className,i=(0,n.e7)().isBlogPostPage;return(0,s.jsx)("div",{id:i?U.LU:void 0,className:(0,r.A)("markdown",a),children:(0,s.jsx)(R.A,{children:t})})}var F=a(2504),z=a(9332),G=a(9435),D=a(5045),S=["blogPostTitle"];function Z(){return(0,s.jsx)("b",{children:(0,s.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function V(e){var t=e.blogPostTitle,a=(0,D.A)(e,S);return(0,s.jsx)(l.A,Object.assign({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,s.jsx)(Z,{})}))}function E(){var e=(0,n.e7)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,u=t.lastUpdatedBy,m=t.lastUpdatedAt,d=!a&&c,h=i.length>0;if(!(h||d||o))return null;if(a){var g=!!(o||m||u);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,s.jsx)("div",{className:(0,r.A)("row","margin-top--sm",F.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(G.A,{tags:i})})}),g&&(0,s.jsx)(z.A,{className:(0,r.A)("margin-top--sm",F.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:m,lastUpdatedBy:u})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,s.jsx)("div",{className:(0,r.A)("col",{"col--9":d}),children:(0,s.jsx)(G.A,{tags:i})}),d&&(0,s.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":h}),children:(0,s.jsx)(V,{blogPostTitle:l,to:t.permalink})})]})}function W(e){var t=e.children,a=e.className,l=(0,n.e7)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,s.jsxs)(i,{className:(0,r.A)(l,a),children:[(0,s.jsx)(I,{}),(0,s.jsx)(H,{children:t}),(0,s.jsx)(E,{})]})}},9483:(e,t,a)=>{a.d(t,{A:()=>i});a(8101);var r=a(3526),n=a(1514),s=a(5105);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,l=e.isNext;return(0,s.jsxs)(n.A,{className:(0,r.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,s.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3273:(e,t,a)=>{a.d(t,{A:()=>l});a(8101);var r=a(3526),n=a(1514);const s={tag:"tag_yKsm",tagRegular:"tagRegular_K0DB",tagWithCount:"tagWithCount_V8uI"};var i=a(5105);function l(e){var t=e.permalink,a=e.label,l=e.count,o=e.description;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,r.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},9435:(e,t,a)=>{a.d(t,{A:()=>o});a(8101);var r=a(3526),n=a(593),s=a(3273);const i={tags:"tags_zHDe",tag:"tag_qaCh"};var l=a(5105);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,r.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((function(e){return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))})]})}},6194:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(8101),n=a(6030),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),l}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),s=a.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(a,t,e)}}}}}]);