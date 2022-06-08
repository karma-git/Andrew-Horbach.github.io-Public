"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2602],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3956:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],o={id:"8-release-engineering",title:"Chapter 8.  Release Engineering",sidebar_position:8},c="Chapter 8.  Release Engineering",s={unversionedId:"SRE/sre-book-1/8-release-engineering",id:"SRE/sre-book-1/8-release-engineering",title:"Chapter 8.  Release Engineering",description:"- Machine: A piece of hardware (or perhaps a VM)",source:"@site/docs/SRE/sre-book-1/8-release-engineering.md",sourceDirName:"SRE/sre-book-1",slug:"/SRE/sre-book-1/8-release-engineering",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/8-release-engineering",editUrl:"https://github.com/karma-git/Andrew-Horbach.github.io-Public/blob/master/docs/docs/SRE/sre-book-1/8-release-engineering.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"8-release-engineering",title:"Chapter 8.  Release Engineering",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Chapter 7.  The Evolution of Automation at Google",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/7-automation"},next:{title:"Chapter 9.  Simplicity",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/9-simplicity.md"}},p=[{value:"Build",id:"build",children:[],level:2},{value:"Packages - MPM",id:"packages---mpm",children:[],level:2},{value:"Rapid",id:"rapid",children:[],level:2},{value:"Deployment",id:"deployment",children:[],level:2},{value:"Key Insights",id:"key-insights",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chapter-8--release-engineering"},"Chapter 8.  Release Engineering"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Machine: A piece of hardware (or perhaps a VM)"),(0,a.kt)("li",{parentName:"ul"},"Server: A piece of software that implements a\nservice")),(0,a.kt)("p",null,"\u0413\u0440\u0430\u0434\u0430\u0446\u0438\u044f: machine in rack-unit,rack,row,cluster(logical),dc,campus(eg. availability zone)"),(0,a.kt)("p",null,"\u0421\u0435\u0442\u044c: Jupiter(\u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u043a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u043e\u0432 \u0441 bandwidth ~1.3 \u041f\u0431/\u0441)."),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Blaze - \u044d\u0442\u043e \u0430\u043b\u0438\u0430\u0441 \u0434\u043b\u044f ",(0,a.kt)("a",{parentName:"p",href:"https://bazel.build/start/bazel-intro"},"Bazel")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 `BUILD` "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bazel"},'package(default_visibility = ["//visibility:public"])\n\ncc_library(\n    name = "hello-lib",\n    srcs = ["hello-lib.cc"],\n    hdrs = ["hello-lib.h"],\n)\n\ncc_binary(\n    name = "hello-world",\n    srcs = ["hello-world.cc"],\n    deps = [":hello-lib"],\n)\n\ncc_test(\n    name = "hello-success_test",\n    srcs = ["hello-world.cc"],\n    deps = [":hello-lib"],\n)\n\ncc_test(\n    name = "hello-fail_test",\n    srcs = ["hello-fail.cc"],\n    deps = [":hello-lib"],\n)\n\nfilegroup(\n    name = "srcs",\n    srcs = glob(["**"]),\n)\n'))),(0,a.kt)("h2",{id:"packages---mpm"},"Packages - MPM"),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Midas (MPM) - \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 google."),(0,a.kt)("p",null,"\u0410\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u044b \u0442\u0435\u0433\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432\u0435\u0440\u0441\u0438\u0435\u0439 \u0440\u0435\u043b\u0438\u0437\u0430 \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (dev, canary, production)"),(0,a.kt)("h2",{id:"rapid"},"Rapid"),(0,a.kt)("p",null,"\u041c\u0435\u0441\u0442\u043d\u044b\u0439 CI/CD \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/sre/sre-book/p8-rapid.png",alt:"rapid"})),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Rapid \u0432 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043f\u0440\u0438 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 (push on green) \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0435\u043b\u0438\u0437 \u0432 production \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,"\u0412 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f Sisyphus - \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u043d\u0430 python \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u0431 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0438."),(0,a.kt)("h2",{id:"key-insights"},"Key Insights"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Symlinks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://usenix.org/conference/ures14west/summit-program/presentation/dickson"},"How Embracing Continuous Release Reduced Change Complexity"),", USENIX Release Engineering Summit West 2014, ","[Dic14]","\n-",(0,a.kt)("a",{parentName:"li",href:"https://www.usenix.org/conference/ucms13/summit-program/presentation/mcnutt"}," Maintaining Consistency in a Massively Parallel Environment"),", USENIX Configura\u2010 tion Management Summit 2013, ","[McN13]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RNMjYV_UsQ8"},"The 10 Commandments of Release Engineering"),", 2nd International Workshop on Release Engineering 2014, ","[McN14b]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.usenix.org/conference/lisa14/conference-program/presentation/mcnutt"},"Distributing Software in a Massively Parallel Environment"),", LISA 2014, ","[McN14c]"))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Empty"))))}m.isMDXComponent=!0}}]);