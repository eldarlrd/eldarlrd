"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[4359],{618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(6070),r=t(5296);const a={authors:{name:"Eldar Pashazade",title:"Front End Developer",url:"https://eldarlrd.github.io",image_url:"https://github.com/eldarlrd.png",email:"eldarlrd@pm.me"},tags:["computer-science","math"],keywords:["computer-science","math"],image:"https://miro.medium.com/v2/resize:fit:825/1*iQkFjNn02oogc2Yv27-pyQ.png"},s="\ud83d\udcc8 Big O",o={permalink:"/eldarlrd/blog/2024/07/19/big-o",source:"@site/blog/2024-07-19-big-o.md",title:"\ud83d\udcc8 Big O",description:"On a mathematical tool used to calculate time complexity in software algorithms.",date:"2024-07-19T00:00:00.000Z",tags:[{inline:!0,label:"computer-science",permalink:"/eldarlrd/blog/tags/computer-science"},{inline:!0,label:"math",permalink:"/eldarlrd/blog/tags/math"}],readingTime:3.02,hasTruncateMarker:!0,authors:[{name:"Eldar Pashazade",title:"Front End Developer",url:"https://eldarlrd.github.io",image_url:"https://github.com/eldarlrd.png",email:"eldarlrd@pm.me",imageURL:"https://github.com/eldarlrd.png",key:null,page:null}],frontMatter:{authors:{name:"Eldar Pashazade",title:"Front End Developer",url:"https://eldarlrd.github.io",image_url:"https://github.com/eldarlrd.png",email:"eldarlrd@pm.me",imageURL:"https://github.com/eldarlrd.png"},tags:["computer-science","math"],keywords:["computer-science","math"],image:"https://miro.medium.com/v2/resize:fit:825/1*iQkFjNn02oogc2Yv27-pyQ.png"},unlisted:!1,nextItem:{title:"\ud83d\udd11 Licenses",permalink:"/eldarlrd/blog/2023/08/23/licenses"}},l={authorsImageUrls:[void 0]},c=[{value:"Complexity",id:"complexity",level:3},{value:"O(1) Constant Time",id:"o1-constant-time",level:3},{value:"O(n) Linear Time",id:"on-linear-time",level:3},{value:"O(log n) Logarithmic Time",id:"olog-n-logarithmic-time",level:3},{value:"O(n\xb2) Quadratic Time",id:"on-quadratic-time",level:3},{value:"O(2\u207f) Exponential Time",id:"o2\u207f-exponential-time",level:3},{value:"O(n!) Factorial Time",id:"on-factorial-time",level:3}];function m(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"On a mathematical tool used to calculate time complexity in software algorithms."})}),"\n",(0,i.jsxs)(n.p,{children:["Also known as ",(0,i.jsx)(n.em,{children:"Landau's notation,"})," it allows for measuring the speed of a given function based on the specifics of its implementation, where O is the rate of growth of the function, standing for its order of approximation. This effectively allows for easier comparison of the implementations, ultimately making it possible to deliver an optimal solution for a given problem."]}),"\n",(0,i.jsx)(n.h3,{id:"complexity",children:"Complexity"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://web.mit.edu/16.070/www/lecture/big_o.pdf",children:"Big O notation"})," measures the complexity of an algorithm by measuring the input to output execution rate. This rate takes into account programming concepts and elements such as loops and conditional statements."]}),"\n",(0,i.jsx)(n.p,{children:"In general, the fewer elements you have, the faster the execution rate and, thus, the simpler the notation. For Big O, many time complexities exist; however, these six are considered to be the main ones and are encountered most commonly:"}),"\n",(0,i.jsx)("span",{className:"text--center",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart",children:(0,i.jsx)(n.img,{src:"https://miro.medium.com/v2/resize:fit:720/format:webp/0*VcwxCIytalgxqvGA.png",alt:"A colored line chart",title:"Big O performance comparison"})})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(1)"})," Constant Time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(n)"})," Linear Time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(log n)"})," Logarithmic Time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(n\xb2)"})," Quadratic Time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(2\u207f)"})," Exponential Time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"O(n!)"})," Factorial Time"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As can be seen from the chart, time complexities differ in performance, and thus, the goal is to optimize the implementation to be as simple as possible."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"JavaScript"})," is used for the appropriate examples."]}),"\n",(0,i.jsx)(n.h3,{id:"o1-constant-time",children:"O(1) Constant Time"}),"\n",(0,i.jsx)(n.p,{children:"Constant time algorithms are independent of the input and therefore always execute with the exact same speed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Check if a number is even or odd.'",children:"const isEven = n => n % 2 === 0;\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's because this function has only a single execution step."}),"\n",(0,i.jsx)(n.h3,{id:"on-linear-time",children:"O(n) Linear Time"}),"\n",(0,i.jsx)(n.p,{children:"Linear time algorithms are linearly dependent on the input. As in, as the input increases in size, so does the number of execution steps required."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Sum all the values in an array.'",children:"const sumArray = n => n.reduce((sum, value) => sum + value, 0);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"olog-n-logarithmic-time",children:"O(log n) Logarithmic Time"}),"\n",(0,i.jsx)(n.p,{children:"Logarithmic time algorithms are dependent on the logarithm of the input, meaning that the execution steps decrease as the input size increases."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Searching through a binary search tree.'",children:"const searchBST = (node, n) => {\n  if (!node || node.value === n) return node;\n  return n < node.value ? searchBST(node.left, n) : searchBST(node.right, n);\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"on-quadratic-time",children:"O(n\xb2) Quadratic Time"}),"\n",(0,i.jsx)(n.p,{children:"Quadratic time algorithms double in their execution steps. This commonly happens due to operations such as nested loops."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Checking for duplicate elements in an array.'",children:"const hasDuplicates = n => {\n  for (const i in n)\n    for (const j in n)\n      if (i !== j && n[i] === n[j]) return true;\n  return false;\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"o2\u207f-exponential-time",children:"O(2\u207f) Exponential Time"}),"\n",(0,i.jsx)(n.p,{children:"Exponential time algorithms increase in execution steps exponentially depending on the size of the input. This often happens with recursive functions, a classic example of which is shown below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Find the nth Fibonacci number.'",children:"const fibonacci = n => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"on-factorial-time",children:"O(n!) Factorial Time"}),"\n",(0,i.jsx)(n.p,{children:"Factorial time algorithms have execution steps that grow factorially with the size of the input. This results in the worst performance possible."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title='Generate all permutations of an array.'",children:"const permuteArray = n => {\n  const result = [];\n\n  const permutate = (currArr, remainArr) => {\n    if (remainArr.length === 0) result.push(currArr);\n    else\n      for (let i = 0; i < remainArr.length; i++)\n        permutate(\n          [...currArr, remainArr[i]],\n          [...remainArr.slice(0, i), ...remainArr.slice(i + 1)]\n        );\n  };\n\n  permutate([], n);\n  return result;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"This concludes a brief explanation of the mathematical concept of Big O notation and its implications in software development."}),"\n",(0,i.jsx)(n.p,{children:"Happy Coding!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(758);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);