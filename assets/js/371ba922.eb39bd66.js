"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7663],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},Highlight:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"nana-sre",title:"What is SRE",sidebar_position:1},s="Site Reliability Engineering (SRE)",p={unversionedId:"SRE/sre-videos/nana-sre",id:"SRE/sre-videos/nana-sre",title:"What is SRE",description:"<span",source:"@site/docs/SRE/sre-videos/1-nana-sre.md",sourceDirName:"SRE/sre-videos",slug:"/SRE/sre-videos/nana-sre",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/nana-sre",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/sre-videos/1-nana-sre.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"nana-sre",title:"What is SRE",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OTUS observability notebook",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/1-otus-observability"},next:{title:"\u041f\u0443\u0442\u044c \u0432 SRE",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-videos/slurm-way-in-sre"}},u=[{value:"Why was there a need for SRE?",id:"why-was-there-a-need-for-sre",children:[],level:2},{value:"What is SRE? - Official Definition",id:"what-is-sre---official-definition",children:[],level:2},{value:"What is system reliability and why it&#39;s important?",id:"what-is-system-reliability-and-why-its-important",children:[],level:2},{value:"How to make systems reliable?",id:"how-to-make-systems-reliable",children:[],level:2},{value:"SRE in Practice: SLA &amp; Error Budget",id:"sre-in-practice-sla--error-budget",children:[],level:2},{value:"SRE Tasks and Responsibilities",id:"sre-tasks-and-responsibilities",children:[],level:2}],m=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:u,Highlight:m};function c(e){var t,n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"site-reliability-engineering-sre"},"Site Reliability Engineering (SRE)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"sre")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Hope is not a strategy"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/nana-janashia/"},"Nana Janashia")),(0,i.kt)("div",{class:"video-wrapper"},(0,i.kt)("iframe",((t={height:"540",frameborder:"0",allowfullscreen:!0,width:"100%",src:"https://www.youtube.com/embed/OnK4IKgLl24"}).frameborder="0",t.allowfullscreen=!0,t))),(0,i.kt)("h2",{id:"why-was-there-a-need-for-sre"},"Why was there a need for SRE?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dev"),"elopers - \u0445\u043e\u0442\u044f\u0442 \u0432\u044b\u043a\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0440\u0435\u043b\u0438\u0437\u044b, ",(0,i.kt)("strong",{parentName:"p"},"Op"),"eration",(0,i.kt)("strong",{parentName:"p"},"s")," - \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438. \u0418\u0445 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432 \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0435\u0448\u0438\u0442\u044c ",(0,i.kt)("strong",{parentName:"p"},"DevOps"),"."),(0,i.kt)("p",null,"\u041d\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u0442\u044b\u043a\u043e\u0432\u043a\u0430:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"DevOps")," - \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0435\u043d\u0430 \u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0430 \u043d\u0435 \u043f\u0440\u043e \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435\u0442\u0443 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u043e\u043b\u0438 \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c.")),(0,i.kt)("h2",{id:"what-is-sre---official-definition"},"What is SRE? - Official Definition"),(0,i.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"SRE")," - \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c \u043e\u043f\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u043a \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435, \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c.",(0,i.kt)("h2",{id:"what-is-system-reliability-and-why-its-important"},"What is system reliability and why it's important?"),(0,i.kt)("p",null,'\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 "',(0,i.kt)("strong",{parentName:"p"},"system"),'", \u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0431\u043e\u0442\u044f\u0442\u0441\u044f SRE -> Whole Deployment Environment:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"infrastructure: servers,cloud,virtualization,networks,databases"),(0,i.kt)("li",{parentName:"ul"},"applications and services")),(0,i.kt)("p",null,'\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 "',(0,i.kt)("strong",{parentName:"p"},"Reliable"),'" services -> \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b (gmail,youtube) \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u0434\u043a\u043e \u0431\u044b\u0432\u0430\u044e\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u044e\u0442 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c, \u043e\u043d\u0438 \u0437\u0430\u043c\u0435\u0447\u0430\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b - \u0430 \u044d\u0442\u043e \u0447\u0440\u0435\u0432\u0430\u0442\u043e \u043f\u043e\u0442\u0435\u0440\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u043f\u0440\u0438\u0431\u044b\u043b\u0438")),(0,i.kt)("h2",{id:"how-to-make-systems-reliable"},"How to make systems reliable?"),(0,i.kt)("p",null,"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0439? \u0418\u0437\u0431\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0435 \u043d\u0435\u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0439 -> \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0443\u043a\u0442\u0443\u0440\u044b"),(0,i.kt)("li",{parentName:"ul"},"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b (k8s)"),(0,i.kt)("li",{parentName:"ul"},"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439")),(0,i.kt)("p",null,"\u041a\u0430\u0436\u0435\u0442\u0441\u044f \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u043b\u0438\u0448\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SRE")," \u043f\u0440\u0438\u0437\u0432\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0438 \u0431\u044e\u0440\u043e\u043a\u0440\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),(0,i.kt)("h2",{id:"sre-in-practice-sla--error-budget"},"SRE in Practice: SLA & Error Budget"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Service Level Agreement (SLA)")," - \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u043c \u0443\u0441\u043b\u0443\u0433 \u0438 \u0435\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u043e \u0442\u043e\u043c \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0430\u0434\u0435\u0436\u0435\u043d."),(0,i.kt)("p",null,"Availability / Errors = %, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 9-\u043e\u043a \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/High_availability"},"SLA table")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Availability %"),(0,i.kt)("th",{parentName:"tr",align:null},"Downtime per year"),(0,i.kt)("th",{parentName:"tr",align:null},"Downtime per quarter"),(0,i.kt)("th",{parentName:"tr",align:null},"Downtime per month"),(0,i.kt)("th",{parentName:"tr",align:null},"Downtime per week"),(0,i.kt)("th",{parentName:"tr",align:null},"Downtime per day (24 hours)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'99% ("two nines")'),(0,i.kt)("td",{parentName:"tr",align:null},"3.65 days"),(0,i.kt)("td",{parentName:"tr",align:null},"21.9 hours"),(0,i.kt)("td",{parentName:"tr",align:null},"7.31 hours"),(0,i.kt)("td",{parentName:"tr",align:null},"1.68 hours"),(0,i.kt)("td",{parentName:"tr",align:null},"14.40 minutes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'99.9% ("three nines")'),(0,i.kt)("td",{parentName:"tr",align:null},"8.77 hours"),(0,i.kt)("td",{parentName:"tr",align:null},"2.19 hours"),(0,i.kt)("td",{parentName:"tr",align:null},"43.83 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"10.08 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"1.44 minutes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'99.99% ("four nines")'),(0,i.kt)("td",{parentName:"tr",align:null},"52.60 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"13.15 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"4.38 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"1.01 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"8.64 seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'99.999% ("five nines")'),(0,i.kt)("td",{parentName:"tr",align:null},"5.26 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"1.31 minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"26.30 seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"6.05 seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"864.00 milliseconds")))),(0,i.kt)("p",null,"\u041c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Availability (\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u0430\u0443\u043d\u0442\u0430\u0439\u043c\u0430)"),(0,i.kt)("li",{parentName:"ul"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e http \u043e\u0448\u0438\u0431\u043e\u043a - SLA 99 % - 1_000_000 requests per week -> 990_000 - not 5xx"),(0,i.kt)("li",{parentName:"ul"},"Latency"),(0,i.kt)("li",{parentName:"ul"},"... etc")),(0,i.kt)("p",null,"SLA \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0431\u0438\u0437\u043d\u0435\u0441 + \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u044b \u0432\u043c\u0435\u0441\u0442\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0432 SLA - \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u0444\u0438\u0447\u0430\u043c\u0438, \u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u0435\u0440\u043d\u0435\u043c\u0441\u044f \u0432 SLA. \u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0443\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0440\u0435\u043b\u0438\u0437\u043e\u0432."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error Budget")," - \u044d\u0442\u043e \u0442\u0435 10_000 5\u0425\u0425 \u043e\u0448\u0438\u0431\u043e\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0441\u043b\u043e\u0432\u0438\u0442\u044c \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e, \u0438\u043b\u0438 N \u043c\u0438\u043d\u0443\u0442 \u0434\u0430\u0443\u043d\u0442\u0430\u0439\u043c\u0430. \u0418\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 \u0440\u0438\u0441\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0443\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0445\u0430\u043e\u0441 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u043d\u0433."),(0,i.kt)("h2",{id:"sre-tasks-and-responsibilities"},"SRE Tasks and Responsibilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automation"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u043b\u0438\u0437\u0430 \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u0435\u0442\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 SLA"),(0,i.kt)("li",{parentName:"ul"},"Observability - Monitoring, Logging, Alerting"),(0,i.kt)("li",{parentName:"ul"},"Hight Availability"),(0,i.kt)("li",{parentName:"ul"},"Reliability"),(0,i.kt)("li",{parentName:"ul"},"Self Healing")),(0,i.kt)("p",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0446\u0435\u043b\u044c - \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u0440\u0430\u0434\u0438\u0443\u0441 \u043f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. ",(0,i.kt)("strong",{parentName:"p"},"Outage")," - \u044d\u0442\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 -> ",(0,i.kt)("strong",{parentName:"p"},"blameless postmortem"),"."))}c.isMDXComponent=!0}}]);