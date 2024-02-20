"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4813],{7360:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(3770),s=n(3841),i=n(3274);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},4621:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var a=n(2852),s=n(4979),i=n(3274);function r(e){var t=e.items,n=e.component,r=void 0===n?s.A:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5316:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(9474);var a=n(8923),s=n(3770),i=n(9134),r=n(2335),l=n(8340),o=n(7575),d=n(3630),g=n(7360),c=n(828),u=n(4621),h=n(69),p=n(5453),m=n(3274);function x(e){var t,n=(t=(0,i.W)().selectMessage,function(e){return t(e,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=x(e.tag);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:t}),(0,m.jsx)(c.A,{tag:"blog_tags_posts"})]})}function b(e){var t=e.tag,n=e.items,a=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(d.A,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(g.A,{metadata:i})]})}function A(e){return(0,m.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(b,Object.assign({},e))]})}},69:(e,t,n)=>{n.d(t,{A:()=>h});n(9474);var a=n(8923),s=n(3770),i=n(6045),r=n(3274);function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(8340),c=n(5301);function u(e){var t=e.className;return(0,r.jsx)(c.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(t,g.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(u,Object.assign({},e))]})}}}]);