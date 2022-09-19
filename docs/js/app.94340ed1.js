(function(){"use strict";var e={140:function(e,n,t){var r=t(242),a=t(658),o=t(396),i=t(139);const s={class:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"},u={class:"mb-auto"},c={class:"nav nav-masthead justify-content-center float-md-end"},l=(0,o.Uk)("Home"),d={href:"https://www.linkedin.com/in/hendrikbraasch/",class:"nav-link",target:"_parent"},f={class:"mt-auto text-white-50"},h={class:"sm-12 column"},m={class:"header-top row"};function b(e,n,t,r,a,b){const g=(0,o.up)("router-link"),p=(0,o.up)("router-view"),v=(0,o.up)("SelectLocale");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("header",u,[(0,o._)("nav",c,[(0,o.Wm)(g,{to:"/",class:"nav-link"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(g,{to:"/about",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.$t("message.about")),1)])),_:1}),(0,o._)("a",d,(0,i.zw)(e.$t("message.contact")),1)])]),(0,o.Wm)(p),(0,o._)("footer",f,[(0,o._)("div",h,[(0,o._)("div",m,[(0,o.Wm)(v)])]),(0,o._)("p",null,(0,i.zw)(a.currentYear),1)])])}const g={class:"nav nav-masthead justify-content-center"},p=["value","onClick"];function v(e,n,t,r,a,s){return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("ul",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.langs,((n,t)=>((0,o.wg)(),(0,o.iD)("li",{key:`lang-${t}`,value:n.short,class:"nav-link",onClick:t=>e.$i18n.locale=n.short},(0,i.zw)(n.full),9,p)))),128))])])}var w={name:"SelectLocale",data(){return{langs:[{full:"English",short:"en"},{full:"Deutsch",short:"de"}]}}},k=t(89);const y=(0,k.Z)(w,[["render",v]]);var _=y,O={data(){return{currentYear:2020}},mounted(){this.currentYear=this.getCurrentYear()},methods:{getCurrentYear(){const e=new Date;return e.getFullYear()}},components:{SelectLocale:_}};const j=(0,k.Z)(O,[["render",b]]);var M=j,P=t(483);const T={class:"px-3"},C=(0,o._)("h1",null," Hendrik Braasch ",-1),E={class:"lead"},S={class:"lead"},L={href:"https://www.linkedin.com/in/hendrikbraasch/",class:"btn btn-lg btn-secondary fw-bold border-white bg-white"};function x(e,n,t,r,a,s){return(0,o.wg)(),(0,o.iD)("main",T,[C,(0,o._)("p",E,(0,i.zw)(e.$t("message.thatsMe")),1),(0,o._)("p",S,[(0,o._)("a",L,(0,i.zw)(e.$t("message.findMeOnLinkedin")),1)])])}var A={name:"HomeView",components:{},data(){return{currentYear:2020}}};const D=(0,k.Z)(A,[["render",x]]);var Y=D;const z=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return t.e(443).then(t.bind(t,49))}}],H=(0,P.p7)({history:(0,P.r5)(),routes:z});var I=H;const N={en:{message:{about:"About Me",contact:"Contact Me",findMeOnLinkedin:"Find Me On Linkedin",thatsMe:"I am software engineer, tech enthusiast and father from Christchurch, New Zealand.",aboutMeTitle:"About Hendrik Braasch",aboutParagraphOne:"I am a strategic thinker who can break complex data,\n      issues and challenges into easily understandable parts for stakeholders and\n      use this knowledge to create well-rounded web and software applications.",aboutParagraphTwo:"I have a natural understanding of structures,\n      processes and software tools and am not afraid to\n      challenge the status quo and bring in new ideas and solutions\n      while aligning with company values."}},de:{message:{about:"Über mich",contact:"Kontakt",findMeOnLinkedin:"Zu meinem Linkedin Profil",thatsMe:"Ich bin ein Technologie begeisterter Software Entwickler und Vater aus Christchurch, Neuseeland.",aboutMeTitle:"Über Hendrik Braasch",aboutParagraphOne:"Ich bin ein erfahrener Software Entwickler mit einem Hintergrund im Kundenservice.\n      Mein Schwerpunkt liegt in der Planung, Entwicklung und Integration von REST APIs.",aboutParagraphTwo:"Durch meinen mehrjährigen Auslandsaufenthalt in Neuseeland verfüge ich über tiefgreifende \n      Erfahrungen im Umgang mit anderen Kulturen und ausgezeichnete, verhandlungssichere Englischkenntnisse. \n      Arbeiten in internationalen Teams ist daher für mich kein Problem, sondern erstrebenswert."}}},$=(0,a.o)({locale:"en",fallbackLocale:"de",messages:N});(0,r.ri)(M).use(I).use($).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.28e0497d.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="hendrik_braasch_website:";t.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=r),e[r]=[a];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,r){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=e[n]=[t,r]}));r.push(a[2]=o);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(u)var l=u(t)}for(n&&n(r);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},r=self["webpackChunkhendrik_braasch_website"]=self["webpackChunkhendrik_braasch_website"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(140)}));r=t.O(r)})();
//# sourceMappingURL=app.94340ed1.js.map