(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4764],{6924:(e,n,t)=>{"use strict";t.d(n,{A:()=>T});var s=t(9474),r=t(3274);function o(e){var n,t=function(e){var n=s.Children.toArray(e),t=n.find((function(e){return s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),o=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:o.length>0?(0,r.jsx)(r.Fragment,{children:o}):null}}(e.children),o=t.mdxAdmonitionTitle,a=t.rest,c=null!=(n=e.title)?n:o;return Object.assign({},e,c&&{title:c},{children:a})}var a=t(8923),c=t(3770),i=t(8340);const l={admonition:"admonition_NcZE",admonitionHeading:"admonitionHeading_G2c5",admonitionIcon:"admonitionIcon_VsX5",admonitionContent:"admonitionContent_dFdN"};function u(e){var n=e.type,t=e.className,s=e.children;return(0,r.jsx)("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(n),l.admonition,t),children:s})}function d(e){var n=e.icon,t=e.title;return(0,r.jsxs)("div",{className:l.admonitionHeading,children:[(0,r.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){var n=e.children;return n?(0,r.jsx)("div",{className:l.admonitionContent,children:n}):null}function f(e){var n=e.type,t=e.icon,s=e.title,o=e.children,a=e.className;return(0,r.jsxs)(u,{type:n,className:a,children:[(0,r.jsx)(d,{title:s,icon:t}),(0,r.jsx)(m,{children:o})]})}function h(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var p={icon:(0,r.jsx)(h,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,r.jsx)(f,Object.assign({},p,e,{className:(0,a.A)("alert alert--secondary",e.className),children:e.children}))}function j(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var v={icon:(0,r.jsx)(j,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,r.jsx)(f,Object.assign({},v,e,{className:(0,a.A)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var N={icon:(0,r.jsx)(x,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,r.jsx)(f,Object.assign({},N,e,{className:(0,a.A)("alert alert--info",e.className),children:e.children}))}function k(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var B={icon:(0,r.jsx)(k,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var A={icon:(0,r.jsx)(C,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var w={icon:(0,r.jsx)(k,{}),title:(0,r.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var O={note:g,tip:b,info:y,warning:function(e){return(0,r.jsx)(f,Object.assign({},B,e,{className:(0,a.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,r.jsx)(f,Object.assign({},A,e,{className:(0,a.A)("alert alert--danger",e.className),children:e.children}))}},E={secondary:function(e){return(0,r.jsx)(g,Object.assign({title:"secondary"},e))},important:function(e){return(0,r.jsx)(y,Object.assign({title:"important"},e))},success:function(e){return(0,r.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,r.jsx)(f,Object.assign({},w,e,{className:(0,a.A)("alert alert--warning",e.className),children:e.children}))}};const L=Object.assign({},O,E);function T(e){var n,t=o(e),s=(n=t.type,L[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),L.info));return(0,r.jsx)(s,Object.assign({},t))}},4764:(e,n,t)=>{"use strict";t.d(n,{A:()=>fe});var s=t(9474),r=t(2333),o=t(6045),a=t(2693),c=t(6158),i=t(8923),l=t(7612),u=t(3491);function d(){var e=(0,u.p)().prism,n=(0,l.G)().colorMode,t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var m=t(8340),f=t(5936),h=t(4809),p=t.n(h),g=(0,f.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),j=(0,f.A)(/\{([\d,-]+)\}/,{range:1}),v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b=Object.assign({},v,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),x=Object.keys(v);function N(e,n){var t=e.map((function(e){var t=b[e],s=t.start,r=t.end;return"(?:"+s+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function y(e,n){var t=e.replace(/\n$/,""),s=n.language,r=n.magicComments,o=n.metastring;if(o&&j.test(o)){var a=o.match(j).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=r[0].className,i=p()(a).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:t}}if(void 0===s)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],n);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],n);case"html":return N(["js","jsBlock","html"],n);case"python":case"py":case"bash":return N(["bash"],n);case"markdown":case"md":return N(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return N(["tex"],n);case"lua":case"haskell":case"sql":return N(["lua"],n);case"wasm":return N(["wasm"],n);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],n);case"vbnet":return N(["vbnet","rem"],n);case"batch":return N(["rem"],n);case"basic":return N(["rem","f90"],n);case"fsharp":return N(["js","ml"],n);case"ocaml":case"sml":return N(["ml"],n);case"fortran":return N(["f90"],n);case"cobol":return N(["cobol"],n);default:return N(x,n)}}(s,r),u=t.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),f=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),h=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),g=0;g<u.length;){var v=u[g].match(l);if(v){var b=v.slice(1).find((function(e){return void 0!==e}));m[b]?d[m[b]].range+=g+",":f[b]?d[f[b]].start=g:h[b]&&(d[h[b]].range+=d[h[b]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}t=u.join("\n");var y={};return Object.entries(d).forEach((function(e){var n=e[0],t=e[1].range;p()(t).forEach((function(e){null!=y[e]||(y[e]=[]),y[e].push(n)}))})),{lineClassNames:y,code:t}}const k={codeBlockContainer:"codeBlockContainer_njHS"};var B=t(3274),C=["as"];function A(e){var n=e.as,t=(0,a.A)(e,C),s=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var s=e[0],r=e[1],o=n[s];o&&"string"==typeof r&&(t[o]=r)})),t}(d());return(0,B.jsx)(n,Object.assign({},t,{style:s,className:(0,i.A)(t.className,k.codeBlockContainer,m.G.common.codeBlock)}))}const w={codeBlockContent:"codeBlockContent_CGXv",codeBlockTitle:"codeBlockTitle_WJ_A",codeBlock:"codeBlock_wNzS",codeBlockStandalone:"codeBlockStandalone_TZv9",codeBlockLines:"codeBlockLines_zLl8",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_BsgG",buttonGroup:"buttonGroup_sd9J"};function O(e){var n=e.children,t=e.className;return(0,B.jsx)(A,{as:"pre",tabIndex:0,className:(0,i.A)(w.codeBlockStandalone,"thin-scrollbar",t),children:(0,B.jsx)("code",{className:w.codeBlockLines,children:n})})}var E=t(8106),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,n){var t=(0,s.useState)(),r=t[0],o=t[1],a=(0,s.useCallback)((function(){var n;o(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((function(){a()}),[a]),function(e,n,t){void 0===t&&(t=L);var r=(0,E._q)(n),o=(0,E.Be)(t);(0,s.useEffect)((function(){var n=new MutationObserver(r);return e&&n.observe(e,o),function(){return n.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=t(369);const z={codeLine:"codeLine_Kb6u",codeLineNumber:"codeLineNumber_lkRU",codeLineContent:"codeLineContent_Ej2I"};function S(e){var n=e.line,t=e.classNames,s=e.showLineNumbers,r=e.getLineProps,o=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var a=r({line:n,className:(0,i.A)(t,s&&z.codeLine)}),c=n.map((function(e,n){return(0,B.jsx)("span",Object.assign({},o({token:e,key:n})),n)}));return(0,B.jsxs)("span",Object.assign({},a,{children:[s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{className:z.codeLineNumber}),(0,B.jsx)("span",{className:z.codeLineContent,children:c})]}):c,(0,B.jsx)("br",{})]}))}var I=t(3770);function H(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function M(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const R={copyButtonCopied:"copyButtonCopied_E4jT",copyButtonIcons:"copyButtonIcons_FXTV",copyButtonIcon:"copyButtonIcon_uXDm",copyButtonSuccessIcon:"copyButtonSuccessIcon__vtV"};function V(e){var n=e.code,t=e.className,r=(0,s.useState)(!1),o=r[0],a=r[1],c=(0,s.useRef)(void 0),l=(0,s.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,s=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);s.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(l){}r.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(n),a(!0),c.current=window.setTimeout((function(){a(!1)}),1e3)}),[n]);return(0,s.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),(0,B.jsx)("button",{type:"button","aria-label":o?(0,I.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",t,R.copyButton,o&&R.copyButtonCopied),onClick:l,children:(0,B.jsxs)("span",{className:R.copyButtonIcons,"aria-hidden":"true",children:[(0,B.jsx)(H,{className:R.copyButtonIcon}),(0,B.jsx)(M,{className:R.copyButtonSuccessIcon})]})})}function W(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const D={wordWrapButtonIcon:"wordWrapButtonIcon_FyVY",wordWrapButtonEnabled:"wordWrapButtonEnabled_ymTK"};function G(e){var n=e.className,t=e.onClick,s=e.isEnabled,r=(0,I.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,B.jsx)("button",{type:"button",onClick:t,className:(0,i.A)("clean-btn",n,s&&D.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,B.jsx)(W,{className:D.wordWrapButtonIcon,"aria-hidden":"true"})})}function F(e){var n,t,r,o,a,c,l,m,f,h,p,j=e.children,v=e.className,b=void 0===v?"":v,x=e.metastring,N=e.title,k=e.showLineNumbers,C=e.language,O=(0,u.p)().prism,E=O.defaultLanguage,L=O.magicComments,z=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=C?C:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:E),I=d(),H=(r=(0,s.useState)(!1),o=r[0],a=r[1],c=(0,s.useState)(!1),l=c[0],m=c[1],f=(0,s.useRef)(null),h=(0,s.useCallback)((function(){var e=f.current.querySelector("code");o?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),a((function(e){return!e}))}),[f,o]),p=(0,s.useCallback)((function(){var e=f.current,n=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(n)}),[f]),T(f,p),(0,s.useEffect)((function(){p()}),[o,p]),(0,s.useEffect)((function(){return window.addEventListener("resize",p,{passive:!0}),function(){window.removeEventListener("resize",p)}}),[p]),{codeBlockRef:f,isEnabled:o,isCodeScrollable:l,toggle:h}),M=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(g))?void 0:t.groups.title)?n:""}(x)||N,R=y(j,{metastring:x,language:z,magicComments:L}),W=R.lineClassNames,D=R.code,F=null!=k?k:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(x);return(0,B.jsxs)(A,{as:"div",className:(0,i.A)(b,z&&!b.includes("language-"+z)&&"language-"+z),children:[M&&(0,B.jsx)("div",{className:w.codeBlockTitle,children:M}),(0,B.jsxs)("div",{className:w.codeBlockContent,children:[(0,B.jsx)(_.f4,{theme:I,code:D,language:null!=z?z:"text",children:function(e){var n=e.className,t=e.style,s=e.tokens,r=e.getLineProps,o=e.getTokenProps;return(0,B.jsx)("pre",{tabIndex:0,ref:H.codeBlockRef,className:(0,i.A)(n,w.codeBlock,"thin-scrollbar"),style:t,children:(0,B.jsx)("code",{className:(0,i.A)(w.codeBlockLines,F&&w.codeBlockLinesWithNumbering),children:s.map((function(e,n){return(0,B.jsx)(S,{line:e,getLineProps:r,getTokenProps:o,classNames:W[n],showLineNumbers:F},n)}))})})}}),(0,B.jsxs)("div",{className:w.buttonGroup,children:[(H.isEnabled||H.isCodeScrollable)&&(0,B.jsx)(G,{className:w.codeButton,onClick:function(){return H.toggle()},isEnabled:H.isEnabled}),(0,B.jsx)(V,{className:w.codeButton,code:D})]})]})]})}var P=["children"];function Z(e){var n=e.children,t=(0,a.A)(e,P),r=(0,c.A)(),o=function(e){return s.Children.toArray(e).some((function(e){return(0,s.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),i="string"==typeof o?F:O;return(0,B.jsx)(i,Object.assign({},t,{children:o}),String(r))}function q(e){return(0,B.jsx)("code",Object.assign({},e))}var X=t(7575);var $=t(2305),U=t(5911);const J={details:"details_wL_c",isBrowser:"isBrowser_jNzI",collapsibleContent:"collapsibleContent_ZH8u"};var K=["summary","children"];function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function Q(e,n){return!!e&&(e===n||Q(e.parentElement,n))}function ee(e){var n=e.summary,t=e.children,r=(0,a.A)(e,K);(0,$.A)().collectAnchor(r.id);var o=(0,c.A)(),l=(0,s.useRef)(null),u=(0,U.u)({initialState:!r.open}),d=u.collapsed,m=u.setCollapsed,f=(0,s.useState)(r.open),h=f[0],p=f[1],g=s.isValidElement(n)?n:(0,B.jsx)("summary",{children:null!=n?n:"Details"});return(0,B.jsxs)("details",Object.assign({},r,{ref:l,open:h,"data-collapsed":d,className:(0,i.A)(J.details,o&&J.isBrowser,r.className),onMouseDown:function(e){Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Y(n)&&Q(n,l.current)&&(e.preventDefault(),d?(m(!1),p(!0)):m(!0))},children:[g,(0,B.jsx)(U.N,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),p(!e)},children:(0,B.jsx)("div",{className:J.collapsibleContent,children:t})})]}))}const ne={details:"details_FdZD"};var te="alert alert--info";function se(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,B.jsx)(ee,Object.assign({},n,{className:(0,i.A)(te,ne.details,n.className)}))}function re(e){var n=s.Children.toArray(e.children),t=n.find((function(e){return s.isValidElement(e)&&"summary"===e.type})),r=(0,B.jsx)(B.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,B.jsx)(se,Object.assign({},e,{summary:t,children:r}))}var oe=t(8498);function ae(e){return(0,B.jsx)(oe.A,Object.assign({},e))}const ce={containsTaskList:"containsTaskList_nzTB"};function ie(e){if(void 0!==e)return(0,i.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&ce.containsTaskList)}const le={img:"img_W6QZ"};var ue=t(6924),de=t(1039);const me={Head:o.A,details:re,Details:re,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,B.jsx)(q,Object.assign({},e)):(0,B.jsx)(Z,Object.assign({},e))},a:function(e){return(0,B.jsx)(X.A,Object.assign({},e))},pre:function(e){return(0,B.jsx)(B.Fragment,{children:e.children})},ul:function(e){return(0,B.jsx)("ul",Object.assign({},e,{className:ie(e.className)}))},li:function(e){return(0,$.A)().collectAnchor(e.id),(0,B.jsx)("li",Object.assign({},e))},img:function(e){return(0,B.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,i.A)(n,le.img))}));var n},h1:function(e){return(0,B.jsx)(ae,Object.assign({as:"h1"},e))},h2:function(e){return(0,B.jsx)(ae,Object.assign({as:"h2"},e))},h3:function(e){return(0,B.jsx)(ae,Object.assign({as:"h3"},e))},h4:function(e){return(0,B.jsx)(ae,Object.assign({as:"h4"},e))},h5:function(e){return(0,B.jsx)(ae,Object.assign({as:"h5"},e))},h6:function(e){return(0,B.jsx)(ae,Object.assign({as:"h6"},e))},admonition:ue.A,mermaid:de.A};function fe(e){var n=e.children;return(0,B.jsx)(r.x,{components:me,children:n})}},4809:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,r,o]=n;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let n=s;n!==o;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},2333:(e,n,t)=>{"use strict";t.d(n,{R:()=>a,x:()=>c});var s=t(9474);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);