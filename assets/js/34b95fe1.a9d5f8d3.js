"use strict";(self.webpackChunkeldarlrd=self.webpackChunkeldarlrd||[]).push([[2546],{7115:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/07/19/big-o","metadata":{"permalink":"/eldarlrd/blog/2024/07/19/big-o","source":"@site/blog/2024-07-19-big-o.md","title":"\ud83d\udcc8 Big O","description":"On a mathematical tool used to calculate time complexity in software algorithms.","date":"2024-07-19T00:00:00.000Z","tags":[{"inline":true,"label":"computer-science","permalink":"/eldarlrd/blog/tags/computer-science"},{"inline":true,"label":"math","permalink":"/eldarlrd/blog/tags/math"}],"readingTime":3.02,"hasTruncateMarker":true,"authors":[{"name":"Eldar Pashazade","title":"Front End Developer","url":"https://eldarlrd.github.io","image_url":"https://github.com/eldarlrd.png","email":"eldarlrd@pm.me","imageURL":"https://github.com/eldarlrd.png","socials":{},"key":null,"page":null}],"frontMatter":{"authors":{"name":"Eldar Pashazade","title":"Front End Developer","url":"https://eldarlrd.github.io","image_url":"https://github.com/eldarlrd.png","email":"eldarlrd@pm.me","imageURL":"https://github.com/eldarlrd.png"},"tags":["computer-science","math"],"keywords":["computer-science","math"],"image":"https://miro.medium.com/v2/resize:fit:825/1*iQkFjNn02oogc2Yv27-pyQ.png"},"unlisted":false,"nextItem":{"title":"\ud83d\udd11 Licenses","permalink":"/eldarlrd/blog/2023/08/23/licenses"}},"content":"**On a mathematical tool used to calculate time complexity in software algorithms.**\\n\\nAlso known as *Landau\'s notation,* it allows for measuring the speed of a given function based on the specifics of its implementation, where O is the rate of growth of the function, standing for its order of approximation. This effectively allows for easier comparison of the implementations, ultimately making it possible to deliver an optimal solution for a given problem.\\n\\n\x3c!-- truncate --\x3e\\n\\n### Complexity\\n[Big O notation](https://web.mit.edu/16.070/www/lecture/big_o.pdf) measures the complexity of an algorithm by measuring the input to output execution rate. This rate takes into account programming concepts and elements such as loops and conditional statements.\\n\\nIn general, the fewer elements you have, the faster the execution rate and, thus, the simpler the notation. For Big O, many time complexities exist; however, these six are considered to be the main ones and are encountered most commonly:\\n\\n<span className=\'text--center\'>\\n  [![A colored line chart](https://miro.medium.com/v2/resize:fit:720/format:webp/0*VcwxCIytalgxqvGA.png \'Big O performance comparison\')](https://freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart)\\n</span>\\n\\n- **O(1)** Constant Time\\n- **O(n)** Linear Time\\n- **O(log n)** Logarithmic Time\\n- **O(n\xb2)** Quadratic Time\\n- **O(2\u207f)** Exponential Time\\n- **O(n!)** Factorial Time\\n\\nAs can be seen from the chart, time complexities differ in performance, and thus, the goal is to optimize the implementation to be as simple as possible.\\n\\n[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is used for the appropriate examples.\\n\\n### O(1) Constant Time\\nConstant time algorithms are independent of the input and therefore always execute with the exact same speed.\\n\\n```javascript title=\'Check if a number is even or odd.\'\\nconst isEven = n => n % 2 === 0;\\n```\\n\\nThat\'s because this function has only a single execution step.\\n\\n### O(n) Linear Time\\nLinear time algorithms are linearly dependent on the input. As in, as the input increases in size, so does the number of execution steps required.\\n\\n```javascript title=\'Sum all the values in an array.\'\\nconst sumArray = n => n.reduce((sum, value) => sum + value, 0);\\n```\\n\\n### O(log n) Logarithmic Time\\nLogarithmic time algorithms are dependent on the logarithm of the input, meaning that the execution steps decrease as the input size increases.\\n\\n```javascript title=\'Searching through a binary search tree.\'\\nconst searchBST = (node, n) => {\\n  if (!node || node.value === n) return node;\\n  return n < node.value ? searchBST(node.left, n) : searchBST(node.right, n);\\n};\\n```\\n\\n### O(n\xb2) Quadratic Time\\nQuadratic time algorithms double in their execution steps. This commonly happens due to operations such as nested loops.\\n\\n```javascript title=\'Checking for duplicate elements in an array.\'\\nconst hasDuplicates = n => {\\n  for (const i in n)\\n    for (const j in n)\\n      if (i !== j && n[i] === n[j]) return true;\\n  return false;\\n};\\n```\\n\\n### O(2\u207f) Exponential Time\\nExponential time algorithms increase in execution steps exponentially depending on the size of the input. This often happens with recursive functions, a classic example of which is shown below.\\n\\n```javascript title=\'Find the nth Fibonacci number.\'\\nconst fibonacci = n => {\\n  if (n <= 1) return n;\\n  return fibonacci(n - 1) + fibonacci(n - 2);\\n};\\n```\\n\\n### O(n!) Factorial Time\\nFactorial time algorithms have execution steps that grow factorially with the size of the input. This results in the worst performance possible.\\n\\n```javascript title=\'Generate all permutations of an array.\'\\nconst permuteArray = n => {\\n  const result = [];\\n\\n  const permutate = (currArr, remainArr) => {\\n    if (remainArr.length === 0) result.push(currArr);\\n    else\\n      for (let i = 0; i < remainArr.length; i++)\\n        permutate(\\n          [...currArr, remainArr[i]],\\n          [...remainArr.slice(0, i), ...remainArr.slice(i + 1)]\\n        );\\n  };\\n\\n  permutate([], n);\\n  return result;\\n};\\n```\\n\\nThis concludes a brief explanation of the mathematical concept of Big O notation and its implications in software development.\\n\\nHappy Coding!"},{"id":"/2023/08/23/licenses","metadata":{"permalink":"/eldarlrd/blog/2023/08/23/licenses","source":"@site/blog/2023-08-23-licenses.md","title":"\ud83d\udd11 Licenses","description":"A brief explanation of copyright, trademarks, patents, and software licenses from a historical perspective and the open source movement.","date":"2023-08-23T00:00:00.000Z","tags":[{"inline":true,"label":"open-source","permalink":"/eldarlrd/blog/tags/open-source"},{"inline":true,"label":"free-software","permalink":"/eldarlrd/blog/tags/free-software"},{"inline":true,"label":"foss","permalink":"/eldarlrd/blog/tags/foss"}],"readingTime":4.93,"hasTruncateMarker":true,"authors":[{"name":"Eldar Pashazade","title":"Front End Developer","url":"https://eldarlrd.github.io","image_url":"https://github.com/eldarlrd.png","email":"eldarlrd@pm.me","imageURL":"https://github.com/eldarlrd.png","socials":{},"key":null,"page":null}],"frontMatter":{"authors":{"name":"Eldar Pashazade","title":"Front End Developer","url":"https://eldarlrd.github.io","image_url":"https://github.com/eldarlrd.png","email":"eldarlrd@pm.me","imageURL":"https://github.com/eldarlrd.png"},"tags":["open-source","free-software","foss"],"keywords":["open-source","free-software","foss"],"image":"https://i0.wp.com/opensource.org/wp-content/uploads/2009/06/OSI_Standard_Logo_600X780.png"},"unlisted":false,"prevItem":{"title":"\ud83d\udcc8 Big O","permalink":"/eldarlrd/blog/2024/07/19/big-o"}},"content":"**A brief explanation of copyright, trademarks, patents, and software licenses from a historical perspective and the open source movement.**\\n\\nIn 1886, ten European countries convened in *Berne, Switzerland,* to sign the legal principles on the protection of the rights of artists, architects, and the common man. This was done primarily to counter the companies of the time that would steal a foreign artist\'s work, modify it, and then resell it under their own brand for profit. Prior to this convention, combating such behavior would require the artist to explicitly state copyright and then go on to personally defend it in court.\\n\\n\x3c!-- truncate --\x3e\\n\\n### Copyright\\nAfter the [Berne Convention,](https://wipo.int/treaties/en/ip/berne) copyright was automatically asserted as soon as the work was created. As in, as soon as artistic work is made, it is already copyrighted by the creator, and thus it\'ll be protected. This work includes anything like text, images, architecture, hardware, etc. The convention has now been ratified in nearly all countries in the world.\\n\\nBut then, why do we keep seeing \xa9, (c), and \\"Copyright\\" notices everywhere? There are two reasons.\\n\\nFirst, the U.S. did not ratify the convention [until 1989,](https://copyright.gov/title17/92appk.pdf) but instead they opted to make explicit copyright assertions easier by creating the \xa9 sign and requiring its presence on any work of art alongside the name of the artist and the date of production. Because of this, until ratification, artists were required to put \xa9 on the work for it to be considered copyrighted.\\n\\nSecond, the reason why artists and companies insist on using the \xa9, (c), and/or \\"Copyright\\" is because explicit statements make it easier to defend the copyright in court.\\n\\nWhy (c)? Because typical typewriters don\'t have the \xa9 sign, it\'d get approximated to (c).\\n\\nAll copyrights, trademarks, and patents are recognized by all the members of the convention. The word \\"Copyright\\" must always be written in English.\\n\\n### Trademark\\nTrademarks, often indicated with \u2122, are a way of registering a brand name, logo, slogan, etc. so that the product can have an official signature of being genuine. Coca-Cola is a trademarked brand name; one can\'t release their own product under that name to lure potential customers into buying their product instead. Trademarks have to be renewed with the body that issued them.\\n\\nRegistered trademarks carry the \xae symbol, which signifies that the trademark has been [officially registered](https://uspto.gov/sites/default/files/trademarks/law/Trademark_Statutes.pdf) by the appropriate state office. It, too, is sometimes approximated to (r).\\n\\n### Patents\\nPatents are a way of registering an invention by publishing the schematics for it publicly and, in return, getting a 20 year grant [enforced by the state](https://uspto.gov/web/offices/pac/mpep/consolidated_laws.pdf) to be the sole producer of the given invention. It\'s meant to reward and incentivize inventions by giving the innovator a headstart so that they can capitalize on their idea and make a profit. However, after 20 years, the patent expires and cannot be renewed. Meaning every other interested body can now produce the same invention themselves using the public schematics.\\n\\n### Software Licenses\\nIf one desires to share the right to modify, publish, or resell work, they have to provide a license. They\'re a lease given by the copyright holder that allows some other body to interact with the work in the capacity that is provided in the license. It\'s recommended that one use officially registered licenses and not create their own, since said licenses have already likely been defended in court.\\n\\nThere are many different types of licenses for various categories of work, Software is considered to be *text material* and has its own commonly used set of [open source licenses.](https://opensource.org/licenses)\\n\\n<span className=\'text--center\'>\\n  [![A colored pie chart](https://miro.medium.com/v2/resize:fit:720/format:webp/1*veAZORAsRKvXWCjlHA_nuA.png \'2015 GitHub statistics for license use\')](https://github.blog/2015-03-09-open-source-license-usage-on-github-com)\\n</span>\\n\\nThe most popular license now is the permissive [MIT License,](https://mit-license.org) which allows anyone to copy, modify, and republish work as well as use it as a part of proprietary software for profit. This is the license that companies like to work with since it allows them to use the program with the fewest strings attached.\\n\\nAnother common open source license is the [Apache 2.0 License,](https://apache.org/licenses/LICENSE-2.0.html) which is quite similar but more elaborate in its wording. A similar [ISC License](https://isc.org/licenses) is used by default for npm packages.\\n\\nThere are also more restrictive licenses, like the ones made by the [Free Software Foundation.](https://fsf.org) The Linux kernel is licensed under [GPLv2,](https://gnu.org/licenses/old-licenses/gpl-2.0.html) and many more recent programs are licensed under [GPLv3.](https://gnu.org/licenses/gpl-3.0.html) Another license of the same family, [LGPLv3,](https://gnu.org/licenses/lgpl-3.0.html) is used for various software libraries. [AGPLv3](https://gnu.org/licenses/agpl-3.0.html) additionally covers software that\'s *shared over networks* like websites.\\n\\nYet another popular family of licenses includes the [BSD 3-Clause License](https://opensource.org/license/BSD-3-clause) and the more permissive [BSD 2-Clause License.](https://opensource.org/license/bsd-2-clause)\\n\\nThe less elaborate [Unlicense](https://opensource.org/license/unlicense) and the meme [Do What the F*** You Want To Public License](http://wtfpl.net/about) are about as permissive as one can get.\\n\\nA couple of useful tools to help pick a license most suitable for one\'s software are [Choose a License](https://choosealicense.com) and the [License Selector.](https://ufal.github.io/public-license-selector)\\n\\n### Licensing Process\\nPublicizing the software source code alone *does not suffice to make it truly open source.* The code in such an instance is only free to observe but cannot be freely worked on.\\n\\nTo make the code open, it has to be licensed. This can be done in [various ways,](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) by either including the license as a text file at the root of the project and/or putting explicit notices as comments at the top of the files.\\n\\nSome licenses allow modification of their clauses and notices, while others do not.\\n\\nWhen you specify the license used, it\'s recommended to use the official [SPDX identifier.](https://spdx.org/licenses) Apache 2.0 would be specified as \\"Apache-2.0\\".\\n\\nAn example [license notice](https://jsdoc.app/tags-license.html) in a JavaScript file as instructed by JSDoc.\\n\\nThe license file may get separated from the source code; however, with appropriate notices, the licensing is more explicit and permanent.\\n\\nHopefully this has been an insightful dive into the topic of copyright and licensing, helping you pick a license for your next project.\\n\\nHappy Coding!"}]}}')}}]);