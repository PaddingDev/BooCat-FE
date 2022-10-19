import{o as a,c as i,F as x,p as P,a as I,b as r,$ as U,d as N,r as k,e as E,u as y,w as C,v as W,f as K,g as L,h as g,i as G,t as h,n as V,j as A,k as F,l as H,m as J,q as O,s as S,x as Z,S as Q,y as D,z as X,A as Y,B as ee}from"./vendor.b3556d17.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const te="modulepreload",oe=function(n){return"/"+n},R={},M=function(t,o,c){return!o||o.length===0?t():Promise.all(o.map(e=>{if(e=oe(e),e in R)return;R[e]=!0;const s=e.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${d}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":te,s||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),s)return new Promise(($,_)=>{l.addEventListener("load",$),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())};const b=(n,t)=>{const o=n.__vccOpts||n;for(const[c,e]of t)o[c]=e;return o},ne={},j=n=>(P("data-v-4e26788f"),n=n(),I(),n),se=j(()=>r("div",{class:"loader",m:"x-auto t-8"},null,-1)),re=j(()=>r("div",{class:"text-3xl font-semibold",m:"x-auto t-8 b-4"},[r("p",{"mx-auto":""}," Loading... ")],-1));function ae(n,t){return a(),i(x,null,[se,re],64)}const ce=b(ne,[["render",ae],["__scopeId","data-v-4e26788f"]]);async function ie(n,t){try{return await le(n,t,11e3)}catch(o){let c="Unknown";typeof o=="string"?c=o:o instanceof Error&&(c=o.message),c.startsWith("The user aborted a request.")&&(c="Timeout");const e={};return typeof t=="string"?e[t]={success:!1,err:{msg:c,source:"front end requester"}}:t.forEach(s=>{s!=="a"&&(e[s]={success:!1,err:{msg:c,source:"front end requester"}})}),e}}async function le(n,t,o){const c=new AbortController,e=setTimeout(()=>c.abort(),o),s=await U("https://api.boocat.org/api/AllBooks",{method:"GET",params:{name:n,provider:t},parseResponse:JSON.parse,signal:c.signal});return clearTimeout(e),s}const v={a:{name:"All",background:"#FFFFFF",text:"#000000"},z:{name:"Z-Library",background:"#0089A7",text:"#FFFFFF"},g:{name:"Library Genesis",background:"#A00000",text:"#FFFFFF"},m:{name:"Mem of The World",background:"#CB1B45",text:"#FFFFFF"},o:{name:"Open Library",background:"#EFBB24",text:"#FFFFFF"},b:{name:"Online Books Page",background:"#1B813E",text:"#FFFFFF"}},ue=n=>(P("data-v-bfaca22c"),n=n(),I(),n),de={m:"x-auto b-4"},_e={class:"flex-col md:flex-row md:space-x-4"},fe=["id","value"],pe=["for"],me={class:"items-baseline flex-row space-x-3"},he=["onKeydown"],ye={key:1,class:"md:flex-row md:space-x-4"},ve={italic:""},ge={class:"md:flex-row md:space-x-2"},xe={key:0,class:"badge"},be={key:1,class:"badge"},ke=["href"],Fe={key:0,italic:""},$e=ue(()=>r("br",null,null,-1)),we=N({__name:"index",setup(n){function t(_,f){return _.length>f?`${_.slice(0,f).join(", ")}, etc.`:_.join(", ")}function o(_){const f=v[_];return f?`background: ${f.background}; color: ${f.text};`:""}let c=k();const e=k();let s=k(!1);const d=k("a");let l=k(!1);async function $(){s.value=!0;let _=d.value;l.value=d.value==="a",d.value==="a"&&(_=Object.keys(v)),c.value=await ie(e.value,_),s.value=!1}return(_,f)=>{const z=ce;return a(),i(x,null,[r("div",de,[r("div",_e,[(a(!0),i(x,null,E(y(v),(p,u)=>(a(),i("div",{key:u,block:""},[C(r("input",{id:u,"onUpdate:modelValue":f[0]||(f[0]=w=>d.value=w),type:"radio",value:u},null,8,fe),[[G,d.value]]),r("label",{for:u,class:"mr-1"},"\xA0"+h(p.name),9,pe)]))),128))]),r("div",me,[C(r("input",{"onUpdate:modelValue":f[1]||(f[1]=p=>e.value=p),placeholder:"Search...",border:"light-800 2",class:"p-2 my-4 rounded-lg w-full",type:"search",onKeydown:K($,["enter"])},null,40,he),[[W,e.value]]),r("button",{class:"bg-dark-800 text-light-500 rounded-md h-11 px-4",onClick:$}," Search ")])]),s.value?(a(),L(z,{key:0})):g("",!0),c.value?(a(),i("div",ye,[(a(!0),i(x,null,E(c.value,(p,u)=>{var w,B,T;return a(),i(x,null,[p.success?(a(),i("div",{key:`${u}-ok`,class:V(["md:flex-col space-y-4",l.value?"md:w-1/4":""])},[l.value?(a(),i("p",{key:y(v)[u].name,style:A(o(u)),class:"boo-round"},h(y(v)[u].name)+" ("+h(p.books===void 0?0:p.books.length)+") ",5)):g("",!0),(a(!0),i(x,null,E(p.books,m=>(a(),i("div",{key:m.url},[r("div",ge,[m.fileType?(a(),i("span",xe,h(m.fileType),1)):g("",!0),m.fileSize?(a(),i("span",be,h(m.fileSize),1)):g("",!0)]),r("a",{href:m.url,target:"_blank"},[F(h(m.name)+" ",1),m.authors&&m.authors.length?(a(),i("span",Fe,[$e,F(" "+h(l.value?`by ${t(m.authors,3)}`:`by ${m.authors.join(", ")}`),1)])):g("",!0)],8,ke)]))),128))],2)):(a(),i("div",{key:`${u}-err`,class:V(["flex-col space-y-4",l.value?"md:w-1/4":""])},[(a(),i("p",{key:y(v)[u].name,style:A(o(u)),class:"boo-round"},h(y(v)[u].name)+" (-1) ",5)),r("p",ve," Error: "+h((w=p.err)==null?void 0:w.msg)+" "+h((B=p.err)!=null&&B.source?`from ${(T=p.err)==null?void 0:T.source}`:""),1)],2))],64)}),256))])):g("",!0)],64)}}});const Se=b(we,[["__scopeId","data-v-bfaca22c"]]),Ce=()=>M(()=>import("./about.8e7e3e6a.js"),["assets/about.8e7e3e6a.js","assets/vendor.b3556d17.js"]),Ee=()=>M(()=>import("./_...all_.89a5b470.js"),["assets/_...all_.89a5b470.js","assets/vendor.b3556d17.js"]),Le=[{name:"index",path:"/",component:Se,props:!0},{name:"about",path:"/about",component:Ce,props:!0},{name:"all",path:"/:all(.*)*",component:Ee,props:!0}],Be={},Te={m:"x-auto y-8",text:"center"},Ve=r("br",null,null,-1),Ae=r("a",{href:"https://padding.dev"},"Padding.DEV",-1),Oe=r("a",{underline:"",href:"https://boocat.org/about"},"About BooCat",-1);function Re(n,t){return a(),i("footer",Te,[F(" Made with \u2764\uFE0F, Vue.js & .NET 6"),Ve,F(" Proudly to be a product of "),Ae,F(" Copyright \xA9 BooCat 2022.\xA0 "),Oe])}const Pe=b(Be,[["render",Re]]),Ie={"carbon:moon":""},Ne={"carbon:sun":""},De=N({__name:"ModeSwitch",setup(n){const t=H(),o=J(t);return(c,e)=>(a(),i("a",{role:"button",title:"Switch Color Mode",onClick:e[0]||(e[0]=s=>y(o)())},[C(r("div",Ie,null,512),[[O,y(t)]]),C(r("div",Ne,null,512),[[O,!y(t)]])]))}}),Me={},je={m:"x-auto y-4","font-semibold":""},qe={flex:"col"},ze={flex:"row"},Ue=r("a",{href:"/"},[r("div",{text:"3xl"},"BooCat")],-1),We=r("div",{text:"xl"}," Search Engine ",-1);function Ke(n,t){const o=De;return a(),i("header",je,[r("div",qe,[r("div",ze,[Ue,S(o)]),We])])}const Ge=b(Me,[["render",Ke]]),He={},Je={"mx-4":""};function Ze(n,t){const o=Ge,c=D("RouterView"),e=Pe;return a(),i("div",Je,[S(o),(a(),L(Q,null,{default:Z(()=>[S(c)]),_:1})),S(e)])}const Qe=b(He,[["render",Ze]]),Xe={default:Qe};function Ye(n){return n.map(t=>{var o;return{path:t.path,component:Xe[((o=t.meta)==null?void 0:o.layout)||"default"],children:[{...t,path:""}]}})}const et={};function tt(n,t){const o=D("RouterView");return a(),L(o)}const ot=b(et,[["render",tt]]);const q=X(ot),nt=Ye(Le),st=Y({history:ee("/"),routes:nt});q.use(st);q.mount("#app");
