"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[447],{1073:(e,t,a)=>{a.d(t,{A:()=>i});a(8101);var n=a(3526),r=a(1740),s=a(5105);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,l=e.isNext;return(0,s.jsxs)(r.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,s.jsx)("div",{className:"pagination-nav__label",children:a})]})}},1195:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>k,Ki:()=>C,kJ:()=>x,x:()=>l,e7:()=>u,J_:()=>f,Gx:()=>N});var n=a(8101),r=a(9579),s=a(8437),i=a(5105);function l(){var e,t=(0,s.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}var o=n.createContext(null);function c(e){var t=e.children,a=e.content,r=e.isBlogPostPage,s=function(e){var t=e.content,a=e.isBlogPostPage;return(0,n.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==r&&r});return(0,i.jsx)(o.Provider,{value:s,children:t})}function u(){var e=(0,n.useContext)(o);if(null===e)throw new r.dV("BlogPostProvider");return e}var d=a(759),h=a(1588),m=function(e){return new Date(e).toISOString()};function g(e){var t=e.map(p);return{author:1===t.length?t[0]:t}}function v(e,t,a){return e?{image:(n={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a},r=n.imageUrl,s=n.caption,{"@type":"ImageObject","@id":r,url:r,contentUrl:r,caption:s})}:{};var n,r,s}function x(e){var t=(0,h.A)().siteConfig,a=(0,d.hH)().withBaseUrl,n=e.metadata,r=n.blogDescription,s=n.blogTitle,i=n.permalink,l=""+t.url+i;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:s,description:r,blogPost:e.items.map((function(e){return function(e,t,a){var n,r,s=e.assets,i=e.frontMatter,l=e.metadata,o=l.date,c=l.title,u=l.description,d=l.lastUpdatedAt,h=null!=(n=s.image)?n:i.image,x=null!=(r=i.keywords)?r:[],f=""+t.url+l.permalink,p=d?m(d):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:c,name:c,description:u,datePublished:o},p?{dateModified:p}:{},g(l.authors),v(h,a,c),x?{keywords:x}:{})}(e.content,t,a)}))}}function f(){var e,t,a=l(),n=u(),r=n.assets,s=n.metadata,i=(0,h.A)().siteConfig,o=(0,d.hH)().withBaseUrl,c=s.date,x=s.title,f=s.description,p=s.frontMatter,j=s.lastUpdatedAt,b=null!=(e=r.image)?e:p.image,w=null!=(t=p.keywords)?t:[],A=j?m(j):void 0,N=""+i.url+s.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:x,name:x,description:f,datePublished:c},A?{dateModified:A}:{},g(s.authors),v(b,o,x),w?{keywords:w}:{},{isPartOf:{"@type":"Blog","@id":""+i.url+a.blogBasePath,name:a.blogTitle}})}function p(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}var j=a(5234),b=a(1740),w=a(6034),A=a(577);function N(e){var t=(0,j.zy)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,A.ys)(e.permalink,t))}(e,t)}))}),[e,t])}function C(e){var t=(0,w.$z)(e,(function(e){return""+new Date(e.date).getFullYear()})),a=Object.entries(t);return a.reverse(),a}function k(e){var t=e.items,a=e.ulClassName,n=e.liClassName,r=e.linkClassName,s=e.linkActiveClassName;return(0,i.jsx)("ul",{className:a,children:t.map((function(e){return(0,i.jsx)("li",{className:n,children:(0,i.jsx)(b.A,{isNavLink:!0,to:e.permalink,className:r,activeClassName:s,children:e.title})},e.permalink)}))})}},2275:(e,t,a)=>{a.d(t,{A:()=>l});a(8101);var n=a(3526),r=a(1740);const s={tag:"tag_h4Zf",tagRegular:"tagRegular_cByV",tagWithCount:"tagWithCount_xAlE"};var i=a(5105);function l(e){var t=e.permalink,a=e.label,l=e.count,o=e.description;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,n.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},2650:(e,t,a)=>{a.d(t,{A:()=>X});var n=a(8101),r=a(3526),s=a(1195),i=a(5105);function l(e){var t=e.children,a=e.className;return(0,i.jsx)("article",{className:a,children:t})}var o=a(1740);const c={title:"title_jK2B"};function u(e){var t=e.className,a=(0,s.e7)(),n=a.metadata,l=a.isBlogPostPage,u=n.permalink,d=n.title,h=l?"h1":"h2";return(0,i.jsx)(h,{className:(0,r.A)(c.title,t),children:l?d:(0,i.jsx)(o.A,{to:u,children:d})})}var d=a(1711),h=a(6889),m=a(698);const g={container:"container_a5fk"};function v(e){var t,a=e.readingTime,n=(t=(0,h.W)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,i.jsx)(i.Fragment,{children:n(a)})}function x(e){var t=e.date,a=e.formattedDate;return(0,i.jsx)("time",{dateTime:t,children:a})}function f(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function p(e){var t,a=e.className,n=(0,s.e7)().metadata,l=n.date,o=n.readingTime,c=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,r.A)(g.container,"margin-vert--md",a),children:[(0,i.jsx)(x,{date:l,formattedDate:(t=l,c.format(new Date(t)))}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(v,{readingTime:o})]})]})}const j="githubSvg_jFiI";const b="xSvg_aIVy";const w=function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e,{children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,i.jsx)("path",{d:"M3.6 9h16.8"}),(0,i.jsx)("path",{d:"M3.6 15h16.8"}),(0,i.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,i.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]}))};const A="instagramSvg_iq7f";const N="threadsSvg__LhP";const C={authorSocials:"authorSocials_GShP",authorSocialLink:"authorSocialLink_FO40",authorSocialIcon:"authorSocialIcon_o1KH"};var k={twitter:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid"},e,{children:(0,i.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})}))},label:"Twitter"},github:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 250",preserveAspectRatio:"xMidYMid",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,r.A)(e.className,j),children:(0,i.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})}))},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,i.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]}))},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256"},e,{children:(0,i.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})}))},label:"LinkedIn"},x:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,r.A)(e.className,b),children:(0,i.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})}))},label:"X"},bluesky:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 226"},e,{children:(0,i.jsx)("path",{fill:"#1185FE",d:"M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"})}))},label:"Bluesky"},instagram:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,r.A)(e.className,A),children:(0,i.jsx)("path",{d:"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"})}))},label:"Instagram"},threads:{Icon:function(e){return(0,i.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Threads",viewBox:"0 0 192 192",width:"1em",fill:"none",height:"1em",style:{"--dark":"#000","--light":"#fff"}},e,{className:(0,r.A)(e.className,N),children:(0,i.jsx)("path",{d:"M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 95.932L13 96v.067c.224 28.617 6.882 51.447 19.788 67.854C47.292 182.358 68.882 191.806 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.189 18.963-18.945 18.392-42.692 12.142-57.27-4.484-10.454-13.033-18.945-24.723-24.553ZM98.44 129.507c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.114 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.58 28.713-23.802 29.274Z"})}))},label:"Threads"},mastodon:{Icon:function(e){var t=(0,n.useId)();return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 61 65",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{fill:"url(#"+t+")",d:"M60.754 14.39C59.814 7.406 53.727 1.903 46.512.836 45.294.656 40.682 0 29.997 0h-.08C19.23 0 16.938.656 15.72.836 8.705 1.873 2.299 6.82.745 13.886c-.748 3.48-.828 7.338-.689 10.877.198 5.075.237 10.142.697 15.197a71.482 71.482 0 0 0 1.664 9.968c1.477 6.056 7.458 11.096 13.317 13.152a35.718 35.718 0 0 0 19.484 1.028 28.365 28.365 0 0 0 2.107-.576c1.572-.5 3.413-1.057 4.766-2.038a.154.154 0 0 0 .062-.118v-4.899a.146.146 0 0 0-.055-.111.145.145 0 0 0-.122-.028 54 54 0 0 1-12.644 1.478c-7.328 0-9.298-3.478-9.863-4.925a15.258 15.258 0 0 1-.857-3.882.142.142 0 0 1 .178-.145 52.976 52.976 0 0 0 12.437 1.477c1.007 0 2.012 0 3.02-.026 4.213-.119 8.654-.334 12.8-1.144.103-.02.206-.038.295-.065 6.539-1.255 12.762-5.196 13.394-15.176.024-.393.083-4.115.083-4.523.003-1.386.446-9.829-.065-15.017Z"}),(0,i.jsx)("path",{fill:"#fff",d:"M50.394 22.237v17.35H43.52V22.749c0-3.545-1.478-5.353-4.483-5.353-3.303 0-4.958 2.139-4.958 6.364v9.217h-6.835V23.76c0-4.225-1.657-6.364-4.96-6.364-2.988 0-4.48 1.808-4.48 5.353v16.84H10.93V22.237c0-3.545.905-6.362 2.715-8.45 1.868-2.082 4.317-3.152 7.358-3.152 3.519 0 6.178 1.354 7.951 4.057l1.711 2.871 1.714-2.871c1.773-2.704 4.432-4.056 7.945-4.056 3.038 0 5.487 1.069 7.36 3.152 1.81 2.085 2.712 4.902 2.71 8.449Z"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:t,x1:30.5,x2:30.5,y1:0,y2:65,gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#6364FF"}),(0,i.jsx)("stop",{offset:1,stopColor:"#563ACC"})]})})]}))},label:"Mastodon"},youtube:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 256 180",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e,{children:[(0,i.jsx)("path",{d:"M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z",fill:"red"}),(0,i.jsx)("path",{fill:"#FFF",d:"m102.421 128.06 66.328-38.418-66.328-38.418z"})]}))},label:"YouTube"},twitch:{Icon:function(e){return(0,i.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 2400 2800",width:"1em",height:"1em"},e,{children:[(0,i.jsx)("path",{d:"m2200 1300-400 400h-400l-350 350v-350H600V200h1600z",fill:"#fff"}),(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:"M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z",fill:"#9146ff"}),(0,i.jsx)("path",{d:"M1700 550h200v600h-200zM1150 550h200v600h-200z",fill:"#9146ff"})]})]}))},label:"Twitch"}};function M(e){var t,a,n=e.platform,s=e.link,l=null!=(a=k[t=n])?a:{Icon:w,label:t},c=l.Icon,u=l.label;return(0,i.jsx)(o.A,{className:C.authorSocialLink,href:s,title:u,children:(0,i.jsx)(c,{className:(0,r.A)(C.authorSocialLink)})})}function _(e){var t,a=e.author,n=Object.entries(null!=(t=a.socials)?t:{});return(0,i.jsx)("div",{className:C.authorSocials,children:n.map((function(e){var t=e[0],a=e[1];return(0,i.jsx)(M,{platform:t,link:a},t)}))})}var y=a(5325);const P={authorImage:"authorImage_Shja","author-as-h1":"author-as-h1_vXdn","author-as-h2":"author-as-h2_kUzv",authorDetails:"authorDetails_P69G",authorName:"authorName_bHhj",authorTitle:"authorTitle_Bfp5",authorBlogPostCount:"authorBlogPostCount_R4y5"};function O(e){return e.href?(0,i.jsx)(o.A,Object.assign({},e)):(0,i.jsx)(i.Fragment,{children:e.children})}function B(e){var t=e.title;return(0,i.jsx)("small",{className:P.authorTitle,title:t,children:t})}function I(e){var t=e.name,a=e.as;return a?(0,i.jsx)(y.A,{as:a,className:P.authorName,children:t}):(0,i.jsx)("span",{className:P.authorName,children:t})}function L(e){var t=e.count;return(0,i.jsx)("span",{className:(0,r.A)(P.authorBlogPostCount),children:t})}function T(e){var t=e.as,a=e.author,n=e.className,s=e.count,l=a.name,o=a.title,c=a.url,u=a.imageURL,d=a.email,h=a.page,m=(null==h?void 0:h.permalink)||c||d&&"mailto:"+d||void 0;return(0,i.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",n,P["author-as-"+t]),children:[u&&(0,i.jsx)(O,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:(0,r.A)("avatar__photo",P.authorImage),src:u,alt:l})}),(l||o)&&(0,i.jsxs)("div",{className:(0,r.A)("avatar__intro",P.authorDetails),children:[(0,i.jsxs)("div",{className:"avatar__name",children:[l&&(0,i.jsx)(O,{href:m,children:(0,i.jsx)(I,{name:l,as:t})}),void 0!==s&&(0,i.jsx)(L,{count:s})]}),!!o&&(0,i.jsx)(B,{title:o}),(0,i.jsx)(_,{author:a})]})]})}const U={authorCol:"authorCol_PhGh",imageOnlyAuthorRow:"imageOnlyAuthorRow_MQ0h",imageOnlyAuthorCol:"imageOnlyAuthorCol_tKZz"};function R(e){var t=e.className,a=(0,s.e7)(),n=a.metadata.authors,l=a.assets;if(0===n.length)return null;var o=n.every((function(e){return!e.name})),c=1===n.length;return(0,i.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?U.imageOnlyAuthorRow:"row",t),children:n.map((function(e,t){var a;return(0,i.jsx)("div",{className:(0,r.A)(!o&&(c?"col col--12":"col col--6"),o?U.imageOnlyAuthorCol:U.authorCol),children:(0,i.jsx)(T,{author:Object.assign({},e,{imageURL:null!=(a=l.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function F(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(u,{}),(0,i.jsx)(p,{}),(0,i.jsx)(R,{})]})}var Z=a(4776),H=a(5271);function S(e){var t=e.children,a=e.className,n=(0,s.e7)().isBlogPostPage;return(0,i.jsx)("div",{id:n?Z.LU:void 0,className:(0,r.A)("markdown",a),children:(0,i.jsx)(H.A,{children:t})})}var z=a(8775),G=a(6027),V=a(6709),E=a(6338),D=["blogPostTitle"];function Y(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function K(e){var t=e.blogPostTitle,a=(0,E.A)(e,D);return(0,i.jsx)(o.A,Object.assign({"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,i.jsx)(Y,{})}))}function W(){var e=(0,s.e7)(),t=e.metadata,a=e.isBlogPostPage,n=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,u=t.lastUpdatedBy,d=t.lastUpdatedAt,h=!a&&c,m=n.length>0;if(!(m||h||o))return null;if(a){var g=!!(o||d||u);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,r.A)("row","margin-top--sm",z.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(V.A,{tags:n})})}),g&&(0,i.jsx)(G.A,{className:(0,r.A)("margin-top--sm",z.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:u})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,r.A)("col",{"col--9":h}),children:(0,i.jsx)(V.A,{tags:n})}),h&&(0,i.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(K,{blogPostTitle:l,to:t.permalink})})]})}function X(e){var t=e.children,a=e.className,n=(0,s.e7)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,i.jsxs)(l,{className:(0,r.A)(n,a),children:[(0,i.jsx)(F,{}),(0,i.jsx)(S,{children:t}),(0,i.jsx)(W,{})]})}},3948:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(6338),r=a(8101),s=a(3526),i=a(3621),l=a(2933),o=a(1711),c=a(1195),u=a(1254),d=a(5325),h=a(5105);function m(e){var t=e.year,a=e.yearGroupHeadingClassName,n=e.children;return(0,h.jsxs)("div",{role:"group",children:[(0,h.jsx)(d.A,{as:"h3",className:a,children:t}),n]})}function g(e){var t=e.items,a=e.yearGroupHeadingClassName,n=e.ListComponent;if((0,u.p)().blog.sidebar.groupByYear){var r=(0,c.Ki)(t);return(0,h.jsx)(h.Fragment,{children:r.map((function(e){var t=e[0],r=e[1];return(0,h.jsx)(m,{year:t,yearGroupHeadingClassName:a,children:(0,h.jsx)(n,{items:r})},t)}))})}return(0,h.jsx)(n,{items:t})}const v=(0,r.memo)(g),x="sidebar_DezA",f="sidebarItemTitle_y0b5",p="sidebarItemList_tEwt",j="sidebarItem_Zye1",b="sidebarItemLink_Rf7E",w="sidebarItemLinkActive_lyis",A="yearGroupHeading_jPGC";var N=function(e){var t=e.items;return(0,h.jsx)(c.OU,{items:t,ulClassName:(0,s.A)(p,"clean-list"),liClassName:j,linkClassName:b,linkActiveClassName:w})};function C(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,s.A)(x,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,s.A)(f,"margin-bottom--md"),children:t.title}),(0,h.jsx)(v,{items:a,ListComponent:N,yearGroupHeadingClassName:A})]})})}const k=(0,r.memo)(C);var M=a(8896);const _="yearGroupHeading_Kna8";var y=function(e){var t=e.items;return(0,h.jsx)(c.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function P(e){var t=e.sidebar,a=(0,c.Gx)(t.items);return(0,h.jsx)(v,{items:a,ListComponent:y,yearGroupHeadingClassName:_})}function O(e){return(0,h.jsx)(M.GX,{component:P,props:e})}const B=(0,r.memo)(O);function I(e){var t=e.sidebar,a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,h.jsx)(B,{sidebar:t}):(0,h.jsx)(k,{sidebar:t}):null}var L=["sidebar","toc","children"];function T(e){var t=e.sidebar,a=e.toc,r=e.children,l=(0,n.A)(e,L),o=t&&t.items.length>0;return(0,h.jsx)(i.A,Object.assign({},l,{children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(I,{sidebar:t}),(0,h.jsx)("main",{className:(0,s.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})}))}},6709:(e,t,a)=>{a.d(t,{A:()=>o});a(8101);var n=a(3526),r=a(1711),s=a(2275);const i={tags:"tags_KKSV",tag:"tag_VFQP"};var l=a(5105);function o(e){var t=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((function(e){return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))})]})}},6889:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(8101),r=a(1588),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,r.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=a.select(t),s=a.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(a,t,e)}}}}}]);