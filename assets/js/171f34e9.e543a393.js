"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2477],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=i,b=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4162:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={id:"0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",sidebar_position:1},l=void 0,u={unversionedId:"SRE/0-sre-cheatsheet",id:"SRE/0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",description:"- SLO, SLI, SLA, Error Budget",source:"@site/docs/SRE/0-sre-cheatsheet.md",sourceDirName:"SRE",slug:"/SRE/0-sre-cheatsheet",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/0-sre-cheatsheet",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/0-sre-cheatsheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"0-sre-cheatsheet",title:"Site Reliability Engineering (SRE) CheatSheet",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang",permalink:"/Andrew-Horbach.github.io-Public/docs/ProgrammingLanguages/go/go-init"},next:{title:"What is SRE",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/nana-sre"}},s=[{value:"RPO, RTO",id:"rpo-rto",children:[],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SLO, SLI, SLA, Error Budget"),(0,a.kt)("li",{parentName:"ul"},"Observability"),(0,a.kt)("li",{parentName:"ul"},"HA, Reliability"),(0,a.kt)("li",{parentName:"ul"},"Automation, Toil"),(0,a.kt)("li",{parentName:"ul"},"RTO, RPO")),(0,a.kt)("h2",{id:"rpo-rto"},"RPO, RTO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RPO - Recovery Point Objective = DATA LOSS - ",(0,a.kt)("strong",{parentName:"li"},"\u0412\u0440\u0435\u043c\u044f")," - \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u043f\u0440\u0438 Disaster. ",(0,a.kt)("em",{parentName:"li"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 2 \u0447\u0430\u0441\u0430")),(0,a.kt)("li",{parentName:"ul"},"RTO - Recovery Time Objective = DOWNTIME - ",(0,a.kt)("strong",{parentName:"li"},"\u0412\u0440\u0435\u043c\u044f")," - \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0437\u044c\u043c\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u0438 Disater. ",(0,a.kt)("em",{parentName:"li"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 12 \u0447\u0430\u0441\u043e\u0432."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/sre/RTO%2CRPO-schema.png",alt:"img"})))}m.isMDXComponent=!0}}]);