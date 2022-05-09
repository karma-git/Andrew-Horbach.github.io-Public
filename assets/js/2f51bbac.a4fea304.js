"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3900],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=n,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return i?r.createElement(y,l(l({ref:t},u),{},{components:i})):r.createElement(y,l({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6392:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=i(7462),n=i(3366),a=(i(7294),i(3905)),l=["components"],o={id:"9-simplicity.md",title:"Chapter 9.  Simplicity",sidebar_position:9},c="Chapter 9.  Simplicity",p={unversionedId:"SRE/sre-book-1/9-simplicity.md",id:"SRE/sre-book-1/9-simplicity.md",title:"Chapter 9.  Simplicity",description:'"The price of reliability is the pursuit of the utmost simplicity." (C.A.R. Hoare, Turing Award lecture)',source:"@site/docs/SRE/sre-book-1/9-simplicity.md",sourceDirName:"SRE/sre-book-1",slug:"/SRE/sre-book-1/9-simplicity.md",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/9-simplicity.md",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/sre-book-1/9-simplicity.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"9-simplicity.md",title:"Chapter 9.  Simplicity",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Chapter 8.  Release Engineering",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/8-release-engineering"}},u=[{value:"The Virtue of Boring (\u0441\u043a\u0443\u0447\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u043a \u0434\u043e\u0431\u0440\u043e\u0434\u0435\u0442\u0435\u043b\u044c)",id:"the-virtue-of-boring-\u0441\u043a\u0443\u0447\u043d\u043e\u0441\u0442\u044c-\u043a\u0430\u043a-\u0434\u043e\u0431\u0440\u043e\u0434\u0435\u0442\u0435\u043b\u044c",children:[],level:3},{value:"I Won\u2019t Give Up My Code!",id:"i-wont-give-up-my-code",children:[],level:2},{value:"Minimal APIs",id:"minimal-apis",children:[],level:2},{value:"Modularity",id:"modularity",children:[],level:2},{value:"Release Simplicity",id:"release-simplicity",children:[],level:2},{value:"Key Insights",id:"key-insights",children:[],level:2}],s={toc:u};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chapter-9--simplicity"},"Chapter 9.  Simplicity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"The price of reliability is the pursuit of the utmost simplicity."')," (C.A.R. Hoare, Turing Award lecture)"),(0,a.kt)("p",null,"\u0421\u043e\u0444\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u0435\u043d \u043b\u0438\u0448\u044c \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u0435\u0433\u043e \u043a\u043e\u0434 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f (\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0438) \u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f (\u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438)."),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0430\u0447\u0430 SRE - ",(0,a.kt)("strong",{parentName:"p"},"\u0431\u0430\u043b\u0430\u043d\u0441 \u043c\u0435\u0436\u0434\u0443 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c\u044e \u0438 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e")),(0,a.kt)("h3",{id:"the-virtue-of-boring-\u0441\u043a\u0443\u0447\u043d\u043e\u0441\u0442\u044c-\u043a\u0430\u043a-\u0434\u043e\u0431\u0440\u043e\u0434\u0435\u0442\u0435\u043b\u044c"},"The Virtue of Boring (\u0441\u043a\u0443\u0447\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u043a \u0434\u043e\u0431\u0440\u043e\u0434\u0435\u0442\u0435\u043b\u044c)"),(0,a.kt)("h2",{id:"i-wont-give-up-my-code"},"I Won\u2019t Give Up My Code!"),(0,a.kt)("p",null,"\u041d\u0435\u043b\u044c\u0437\u044f \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u043a\u043e\u0434\u0443, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u0440\u0430\u0437\u0443\u043c\u043d\u043e \u043e\u0442\u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0442\u044c."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"\u0427\u0442\u043e \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u043a\u043e\u0434 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c?"'),(0,a.kt)("li",{parentName:"ul"},'"\u041f\u043e\u0447\u0435\u043c\u0443 \u0431\u044b \u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435 \u0437\u0430\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c?"'),(0,a.kt)("li",{parentName:"ul"},'"\u041f\u043e\u0447\u0435\u043c\u0443 \u0431\u044b \u043d\u0430\u043c \u043d\u0435 \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u0444\u043b\u0430\u0433\u043e\u043c \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435?"')),(0,a.kt)("p",null,"\u041e\u0442\u0432\u0435\u0442 - VCS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0440\u0435\u0432\u044c\u044e \u043d\u0443\u0436\u043d\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u043a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0431\u0438\u0437\u043d\u0435\u0441-\u0446\u0435\u043b\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043c\u0435\u0440\u0442\u0432\u044b\u0439 \u043a\u043e\u0434."),(0,a.kt)("li",{parentName:"ul"},"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0445 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c \u0440\u0430\u0437\u0431\u0443\u0445\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 (DRY, helm \u0438 etc.)")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u041f\u041e, \u0442\u043e \u0441\u043a\u0443\u0447\u043d\u043e\u0441\u0442\u044c (\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435) - \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u043e. \u041d\u0430\u043c \u043d\u0435 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0448 \u0441\u0444\u043e\u0442 \u0431\u044b\u043b \u0441\u043f\u043e\u043d\u0442\u0430\u043d\u043d\u044b\u043c \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u043c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u043f\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044e \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e \u0440\u0435\u0448\u0430\u043b \u0431\u0438\u0437\u043d\u0435\u0441 \u0437\u0430\u0434\u0430\u0447\u0438."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438 \u043e\u0442 \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0435 \u0434\u0430\u0432\u0430\u043b \u043f\u043e\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u0432\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0437\u0430\u0433\u0430\u0434\u043e\u043a. \u0421\u044e\u0440\u043f\u0440\u0438\u0437\u044b \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d\u0435 - \u0437\u043b\u0435\u0439\u0448\u0438\u0435 \u0432\u0440\u0430\u0433\u0438 SRE"')," (\u0420\u043e\u0431\u0435\u0440\u0442 \u041c\u0443\u0442)"),(0,a.kt)("h2",{id:"minimal-apis"},"Minimal APIs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u0443\u0436\u0435 \u043d\u0435\u0447\u0435\u0433\u043e \u043f\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044c, \u043d\u043e \u043a\u043e\u0433\u0434\u0430 \u0443\u0436\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043d\u044f\u0442\u044c"')," (\u0410\u043d\u0442\u0443\u0430\u043d \u0434\u0435 \u0421\u0435\u043d\u0442-\u042d\u043a\u0437\u044e\u043f\u0435\u0440\u0438)"),(0,a.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c API \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u043e\u0432\u043d\u043e \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u043c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b. \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 API \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u043c \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,a.kt)("h2",{id:"modularity"},"Modularity"),(0,a.kt)("p",null,"DRY / \u041e\u041e\u041f - \u044d\u0442\u043e \u043d\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u044d\u0442\u043e \u0432\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e \u0438 \u043a \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c. \u0425\u043e\u0440\u043e\u0448\u043e \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043c\u0435\u0435\u0442 \u0447\u0435\u0442\u043a\u0443\u044e \u0446\u0435\u043b\u044c."),(0,a.kt)("p",null,"\u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u0438 \u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 -> \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"),(0,a.kt)("h2",{id:"release-simplicity"},"Release Simplicity"),(0,a.kt)("p",null,"\u0412 \u0440\u0435\u043b\u0438\u0437\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0442\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0449\u0435 \u043e\u0442\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0431\u0430\u0433\u0438."),(0,a.kt)("h2",{id:"key-insights"},"Key Insights"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u0434\u0435\u044f: \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u041f\u041e - \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438"))))}m.isMDXComponent=!0}}]);