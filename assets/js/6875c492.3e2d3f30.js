"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4813],{2722:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(3769),s=n(6223),i=n(3274);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9343:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(5710),s=n(2984),i=n(3274);function r(e){var t=e.items,n=e.component,r=void 0===n?s.A:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3914:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(9474);var a=n(8923),s=n(3769),i=n(5764),r=n(6410),l=n(3802),o=n(233),d=n(3073),g=n(2722),c=n(1510),u=n(9343),h=n(1876),p=n(219),m=n(3274);function x(e){var t,n=(t=(0,i.W)().selectMessage,function(e){return t(e,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=x(e.tag);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:t}),(0,m.jsx)(c.A,{tag:"blog_tags_posts"})]})}function b(e){var t=e.tag,n=e.items,a=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(d.A,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(g.A,{metadata:i})]})}function A(e){return(0,m.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(b,Object.assign({},e))]})}},1876:(e,t,n)=>{n.d(t,{A:()=>h});n(9474);var a=n(8923),s=n(3769),i=n(8031),r=n(3274);function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(3802),c=n(3587);function u(e){var t=e.className;return(0,r.jsx)(c.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(t,g.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(u,Object.assign({},e))]})}}}]);