import"../chunks/DsnmJJEf.js";import{i as _e}from"../chunks/Bvw1GPGt.js";import{i as Pt,a as It,c as Ft,d as Vt,n as Dt,b as Ot,s as O,e as F,o as qt,f as Bt}from"../chunks/DzOk3YHX.js";import{w as V,x as Ve,v as qe,h as o,N as Rt,y as Ht,H as Xt,z as it,A as De,B as Le,K as Se,a9 as Gt,aC as Wt,D as Te,G as Jt,F as Ce,az as ht,ap as mt,C as bt,aQ as ce,a0 as nt,a8 as Kt,I as st,J as _t,aU as Yt,aV as We,ag as Ne,aW as Zt,aX as Qt,am as ea,aY as ta,ay as aa,aZ as ra,S as yt,a_ as sa,E as la,a$ as ia,aB as na,au as oa,aP as xt,b0 as ca,b1 as da,aq as va,b2 as ua,b3 as fa,b4 as ga,U as pa,b5 as ha,b6 as ma,b7 as ba,b8 as _a,b9 as ya,ba as xa,bb as ka,aO as $a,e as S,a5 as wa,bc as Sa,p as ye,l as B,n as v,o as u,q as h,t as ve,i as T,a as w,m as xe,bd as La,c as q,f as D,aS as Ea,be as Ma,bf as tt,Q as X,bg as kt,aT as Je,ah as be,bh as Ca,bi as Ta}from"../chunks/hgk8NPT6.js";import{p as Y,l as te,s as le,i as K}from"../chunks/COlMwlpH.js";function Na(r,t){return t}function Aa(r,t,e){for(var a=r.items,s=[],l=t.length,i=0;i<l;i++)ta(t[i].e,s,!0);var n=l>0&&s.length===0&&e!==null;if(n){var f=e.parentNode;aa(f),f.append(e),a.clear(),pe(r,t[0].prev,t[l-1].next)}ra(s,()=>{for(var d=0;d<l;d++){var m=t[d];n||(a.delete(m.k),pe(r,m.prev,m.next)),Ne(m.e,!n)}})}function $t(r,t,e,a,s,l=null){var i=r,n={flags:t,items:new Map,first:null};V&&Ve();var f=null,d=!1,m=new Map,k=Rt(()=>{var p=e();return mt(p)?p:p==null?[]:ht(p)}),c,x;function g(){ja(x,c,n,m,i,s,t,a,e),l!==null&&(c.length===0?f?st(f):f=Te(()=>l(i)):f!==null&&_t(f,()=>{f=null}))}qe(()=>{x??=yt,c=o(k);var p=c.length;if(d&&p===0)return;d=p===0;let _=!1;if(V){var N=Ht(i)===Xt;N!==(p===0)&&(i=it(),De(i),Le(!1),_=!0)}if(V){for(var M=null,$,b=0;b<p;b++){if(Se.nodeType===Gt&&Se.data===Wt){i=Se,_=!0,Le(!1);break}var P=c[b],y=a(P,b);$=at(Se,n,M,null,P,y,b,s,t,e),n.items.set(y,$),M=$}p>0&&De(it())}if(V)p===0&&l&&(f=Te(()=>l(i)));else if(Jt()){var L=new Set,C=Ce;for(b=0;b<p;b+=1){P=c[b],y=a(P,b);var z=n.items.get(y)??m.get(y);z?wt(z,P,b):($=at(null,n,null,null,P,y,b,s,t,e,!0),m.set(y,$)),L.add(y)}for(const[j,G]of n.items)L.has(j)||C.skipped_effects.add(G.e);C.add_callback(g)}else g();_&&Le(!0),o(k)}),V&&(i=Se)}function ja(r,t,e,a,s,l,i,n,f){var d=t.length,m=e.items,k=e.first,c=k,x,g=null,p=[],_=[],N,M,$,b;for(b=0;b<d;b+=1){if(N=t[b],M=n(N,b),$=m.get(M),$===void 0){var P=a.get(M);if(P!==void 0){a.delete(M),m.set(M,P);var y=g?g.next:c;pe(e,g,P),pe(e,P,y),Ke(P,y,s),g=P}else{var L=c?c.e.nodes_start:s;g=at(L,e,g,g===null?e.first:g.next,N,M,b,l,i,f)}m.set(M,g),p=[],_=[],c=g.next;continue}if(wt($,N,b),($.e.f&We)!==0&&st($.e),$!==c){if(x!==void 0&&x.has($)){if(p.length<_.length){var C=_[0],z;g=C.prev;var j=p[0],G=p[p.length-1];for(z=0;z<p.length;z+=1)Ke(p[z],C,s);for(z=0;z<_.length;z+=1)x.delete(_[z]);pe(e,j.prev,G.next),pe(e,g,j),pe(e,G,C),c=C,g=G,b-=1,p=[],_=[]}else x.delete($),Ke($,c,s),pe(e,$.prev,$.next),pe(e,$,g===null?e.first:g.next),pe(e,g,$),g=$;continue}for(p=[],_=[];c!==null&&c.k!==M;)(c.e.f&We)===0&&(x??=new Set).add(c),_.push(c),c=c.next;if(c===null)continue;$=c}p.push($),g=$,c=$.next}if(c!==null||x!==void 0){for(var W=x===void 0?[]:ht(x);c!==null;)(c.e.f&We)===0&&W.push(c),c=c.next;var Q=W.length;if(Q>0){var ne=null;Aa(e,W,ne)}}r.first=e.first&&e.first.e,r.last=g&&g.e;for(var ae of a.values())Ne(ae.e);a.clear()}function wt(r,t,e,a){Kt(r.v,t),r.i=e}function at(r,t,e,a,s,l,i,n,f,d,m){var k=(f&Zt)!==0,c=(f&Qt)===0,x=k?c?ce(s,!1,!1):nt(s):s,g=(f&Yt)===0?i:nt(i),p={i:g,v:x,k:l,a:null,e:null,prev:e,next:a};try{if(r===null){var _=document.createDocumentFragment();_.append(r=bt())}return p.e=Te(()=>n(r,x,g,d),V),p.e.prev=e&&e.e,p.e.next=a&&a.e,e===null?m||(t.first=p):(e.next=p,e.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function Ke(r,t,e){for(var a=r.next?r.next.e.nodes_start:e,s=t?t.e.nodes_start:e,l=r.e.nodes_start;l!==null&&l!==a;){var i=ea(l);s.before(l),l=i}}function pe(r,t,e){t===null?r.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function re(r,t,e,a,s){V&&Ve();var l=t.$$slots?.[e],i=!1;l===!0&&(l=t.children,i=!0),l===void 0||l(r,i?()=>a:a)}function Ua(r,t,e,a,s,l){let i=V;V&&Ve();var n,f,d=null;V&&Se.nodeType===sa&&(d=Se,Ve());var m=V?Se:r,k;qe(()=>{const c=t()||null;var x=ia;c!==n&&(k&&(c===null?_t(k,()=>{k=null,f=null}):c===f?st(k):Ne(k)),c&&c!==f&&(k=Te(()=>{if(d=V?d:document.createElementNS(x,c),na(d,d),a){V&&Pt(c)&&d.append(document.createComment(""));var g=V?oa(d):d.appendChild(bt());V&&(g===null?Le(!1):De(g)),a(d,g)}yt.nodes_end=d,m.before(d)})),n=c,n&&(f=n))},la),i&&(Le(!0),De(m))}function za(r,t){var e=void 0,a;qe(()=>{e!==(e=t())&&(a&&(Ne(a),a=null),e&&(a=Te(()=>{xt(()=>e(r))})))})}function St(r){var t,e,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(e=St(r[t]))&&(a&&(a+=" "),a+=e)}else for(e in r)r[e]&&(a&&(a+=" "),a+=e);return a}function Pa(){for(var r,t,e=0,a="",s=arguments.length;e<s;e++)(r=arguments[e])&&(t=St(r))&&(a&&(a+=" "),a+=t);return a}function Ia(r){return typeof r=="object"?Pa(r):r??""}const ot=[...` 	
\r\f \v\uFEFF`];function Fa(r,t,e){var a=r==null?"":""+r;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var l=s.length,i=0;(i=a.indexOf(s,i))>=0;){var n=i+l;(i===0||ot.includes(a[i-1]))&&(n===a.length||ot.includes(a[n]))?a=(i===0?"":a.substring(0,i))+a.substring(n+1):i=n}}return a===""?null:a}function ct(r,t=!1){var e=t?" !important;":";",a="";for(var s in r){var l=r[s];l!=null&&l!==""&&(a+=" "+s+": "+l+e)}return a}function Ye(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Va(r,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,i=0,n=!1,f=[];a&&f.push(...Object.keys(a).map(Ye)),s&&f.push(...Object.keys(s).map(Ye));var d=0,m=-1;const p=r.length;for(var k=0;k<p;k++){var c=r[k];if(n?c==="/"&&r[k-1]==="*"&&(n=!1):l?l===c&&(l=!1):c==="/"&&r[k+1]==="*"?n=!0:c==='"'||c==="'"?l=c:c==="("?i++:c===")"&&i--,!n&&l===!1&&i===0){if(c===":"&&m===-1)m=k;else if(c===";"||k===p-1){if(m!==-1){var x=Ye(r.substring(d,m).trim());if(!f.includes(x)){c!==";"&&k++;var g=r.substring(d,k).trim();e+=" "+g+";"}}d=k+1,m=-1}}}}return a&&(e+=ct(a)),s&&(e+=ct(s,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function se(r,t,e,a,s,l){var i=r.__className;if(V||i!==e||i===void 0){var n=Fa(e,a,l);(!V||n!==r.getAttribute("class"))&&(n==null?r.removeAttribute("class"):t?r.className=n:r.setAttribute("class",n)),r.__className=e}else if(l&&s!==l)for(var f in l){var d=!!l[f];(s==null||d!==!!s[f])&&r.classList.toggle(f,d)}return l}function Ze(r,t={},e,a){for(var s in e){var l=e[s];t[s]!==l&&(e[s]==null?r.style.removeProperty(s):r.style.setProperty(s,l,a))}}function Da(r,t,e,a){var s=r.__style;if(V||s!==t){var l=Va(t,a);(!V||l!==r.getAttribute("style"))&&(l==null?r.removeAttribute("style"):r.style.cssText=l),r.__style=t}else a&&(Array.isArray(a)?(Ze(r,e?.[0],a[0]),Ze(r,e?.[1],a[1],"important")):Ze(r,e,a));return a}function rt(r,t,e=!1){if(r.multiple){if(t==null)return;if(!mt(t))return ca();for(var a of r.options)a.selected=t.includes(dt(a));return}for(a of r.options){var s=dt(a);if(da(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(r.selectedIndex=-1)}function Oa(r){var t=new MutationObserver(()=>{rt(r,r.__value)});t.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),va(()=>{t.disconnect()})}function dt(r){return"__value"in r?r.__value:r.value}const ze=Symbol("class"),Pe=Symbol("style"),Lt=Symbol("is custom element"),Et=Symbol("is html");function qa(r){if(V){var t=!1,e=()=>{if(!t){if(t=!0,r.hasAttribute("value")){var a=r.value;Oe(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var s=r.checked;Oe(r,"checked",null),r.checked=s}}};r.__on_r=e,ha(e),ma()}}function Ba(r,t){t?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Oe(r,t,e,a){var s=Mt(r);V&&(s[t]=r.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&r.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(r[ya]=e),e==null?r.removeAttribute(t):typeof e!="string"&&Ct(r).includes(t)?r[t]=e:r.setAttribute(t,e))}function Ra(r,t,e,a,s=!1,l=!1){if(V&&s&&r.tagName==="INPUT"){var i=r,n=i.type==="checkbox"?"defaultChecked":"defaultValue";n in e||qa(i)}var f=Mt(r),d=f[Lt],m=!f[Et];let k=V&&d;k&&Le(!1);var c=t||{},x=r.tagName==="OPTION";for(var g in t)g in e||(e[g]=null);e.class?e.class=Ia(e.class):e[ze]&&(e.class=null),e[Pe]&&(e.style??=null);var p=Ct(r);for(const y in e){let L=e[y];if(x&&y==="value"&&L==null){r.value=r.__value="",c[y]=L;continue}if(y==="class"){var _=r.namespaceURI==="http://www.w3.org/1999/xhtml";se(r,_,L,a,t?.[ze],e[ze]),c[y]=L,c[ze]=e[ze];continue}if(y==="style"){Da(r,L,t?.[Pe],e[Pe]),c[y]=L,c[Pe]=e[Pe];continue}var N=c[y];if(!(L===N&&!(L===void 0&&r.hasAttribute(y)))){c[y]=L;var M=y[0]+y[1];if(M!=="$$")if(M==="on"){const C={},z="$$"+y;let j=y.slice(2);var $=Ot(j);if(It(j)&&(j=j.slice(0,-7),C.capture=!0),!$&&N){if(L!=null)continue;r.removeEventListener(j,c[z],C),c[z]=null}if(L!=null)if($)r[`__${j}`]=L,Vt([j]);else{let G=function(W){c[y].call(this,W)};c[z]=Ft(j,r,G,C)}else $&&(r[`__${j}`]=void 0)}else if(y==="style")Oe(r,y,L);else if(y==="autofocus")ga(r,!!L);else if(!d&&(y==="__value"||y==="value"&&L!=null))r.value=r.__value=L;else if(y==="selected"&&x)Ba(r,L);else{var b=y;m||(b=Dt(b));var P=b==="defaultValue"||b==="defaultChecked";if(L==null&&!d&&!P)if(f[y]=null,b==="value"||b==="checked"){let C=r;const z=t===void 0;if(b==="value"){let j=C.defaultValue;C.removeAttribute(b),C.defaultValue=j,C.value=C.__value=z?j:null}else{let j=C.defaultChecked;C.removeAttribute(b),C.defaultChecked=j,C.checked=z?j:!1}}else r.removeAttribute(y);else P||p.includes(b)&&(d||typeof L!="string")?(r[b]=L,b in f&&(f[b]=pa)):typeof L!="function"&&Oe(r,b,L)}}}return k&&Le(!0),c}function vt(r,t,e=[],a=[],s,l=!1,i=!1){ua(e,a,n=>{var f=void 0,d={},m=r.nodeName==="SELECT",k=!1;if(qe(()=>{var x=t(...n.map(o)),g=Ra(r,f,x,s,l,i);k&&m&&"value"in x&&rt(r,x.value);for(let _ of Object.getOwnPropertySymbols(d))x[_]||Ne(d[_]);for(let _ of Object.getOwnPropertySymbols(x)){var p=x[_];_.description===fa&&(!f||p!==f[_])&&(d[_]&&Ne(d[_]),d[_]=Te(()=>za(r,()=>p))),g[_]=p}f=g}),m){var c=r;xt(()=>{rt(c,f.value,!0),Oa(c)})}k=!0})}function Mt(r){return r.__attributes??={[Lt]:r.nodeName.includes("-"),[Et]:r.namespaceURI===ba}}var ut=new Map;function Ct(r){var t=r.getAttribute("is")||r.nodeName,e=ut.get(t);if(e)return e;ut.set(t,e=[]);for(var a,s=r,l=Element.prototype;l!==s;){a=xa(s);for(var i in a)a[i].set&&e.push(i);s=_a(s)}return e}function Ha(r,t,e=t){var a=new WeakSet;ka(r,"input",async s=>{var l=s?r.defaultValue:r.value;if(l=Qe(r)?et(l):l,e(l),Ce!==null&&a.add(Ce),await $a(),l!==(l=t())){var i=r.selectionStart,n=r.selectionEnd;r.value=l??"",n!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(n,r.value.length))}}),(V&&r.defaultValue!==r.value||S(t)==null&&r.value)&&(e(Qe(r)?et(r.value):r.value),Ce!==null&&a.add(Ce)),wa(()=>{var s=t();if(r===document.activeElement){var l=Sa??Ce;if(a.has(l))return}Qe(r)&&s===et(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Qe(r){var t=r.type;return t==="number"||t==="range"}function et(r){return r===""?null:+r}const Tt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#08725dff",red:"#cc6300ff",yellow:"#b8860bff"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#1aefc4ff",red:"#ffa047ff",yellow:"#ffd700ff"}},graphite:{name:"graphite",displayName:"Graphite",light:{bg:"#d5d3d9ff",altBg:"#b6b3bdff",text:"#1e1c21ff",blue:"#4a5568ff",red:"#c14b1fff",green:"#406354ff",yellow:"#d69e2eff"},dark:{bg:"#28262cff",altBg:"#1e1c21ff",text:"#cbc8d0ff",blue:"#8bb5e8ff",red:"#e27750ff",green:"#6b9e88ff",yellow:"#f7dc6fff"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#4d6b4d",red:"#b8302f",yellow:"#d6a82e"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#7d9d7d",red:"#e27777",yellow:"#f7dc6f"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#5b8c5b",red:"#a84d3d",yellow:"#c9a843"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#8cc58c",red:"#d77a6a",yellow:"#f5d66e"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#4a90e2",green:"#52c41a",red:"#f5222d",yellow:"#faad14"},dark:{bg:"#1a1d21",altBg:"#0d0f12",text:"#f8f9fa",blue:"#74b3ff",green:"#73d13d",red:"#ff5566",yellow:"#ffc53d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#6b7d5a",red:"#a85a3d",yellow:"#d6a843"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#9bb083",red:"#d8876a",yellow:"#f5d66e"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#e0e6ed",altBg:"#c7d1dd",text:"#0a0e14",blue:"#3b7ea1",green:"#4d9b4d",red:"#c14b4b",yellow:"#d69e2e"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#6bb4d1",green:"#7dd17d",red:"#e27777",yellow:"#f7dc6f"}}};function ft(r){return r in Tt}class Xa{darkmode;theme;constructor(t="prussian-blue",e=!0){this.darkmode=e,this.theme=ft(t)?t:"prussian-blue"}getTheme(){const t=this.darkmode?"dark":"light";return`${this.theme}-${t}`}setTheme(t){return ft(t)?(this.theme=t,!0):!1}toggleDarkMode(){this.darkmode=!this.darkmode}getAvailableThemes(){return Object.keys(Tt)}}class Ga{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="transcendent-focus"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades["transcendent-focus"];t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,t.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="transcendent-focus"?e.baseCost*Math.pow(100,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let l=0;l<e.length;l++)s+=String.fromCharCode(e.charCodeAt(l)^a.charCodeAt(l%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),l=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:l,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const l=this.decryptSave(e.data);a=JSON.parse(l)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const l=this.importSave(decodeURIComponent(s));return l.success?!0:(console.error("Failed to load save from cookies:",l.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t),console.log("✅ Saved to localStorage")}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(console.log("Loading from localStorage:",t?"Found data":"No data"),t){const e=this.importSave(t);return e.success?(console.log("✅ Loaded from localStorage successfully"),!0):(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){console.log("AutoSave triggered - Current state:",{exp:this.exp,lifetimeExp:this.lifetimeExp}),this.saveToLocalStorage(),this.saveToCookies()}}var Wa=B('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div></header>');function Ja(r,t){ye(t,!1);let e=Y(t,"game",8);_e();var a=Wa(),s=v(a),l=v(s),i=v(l);u(l);var n=h(l,2),f=v(n);u(n),u(s),u(a),ve(d=>{O(i,`EXP: ${d??""}`),O(f,`Level: ${T(e()),S(()=>e().level)??""}`)},[()=>(T(e()),S(()=>Math.floor(e().exp).toLocaleString()))]),w(r,a),xe()}/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ya=La("<svg><!><!></svg>");function ie(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]),a=te(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ye(t,!1);let s=Y(t,"name",8,void 0),l=Y(t,"color",8,"currentColor"),i=Y(t,"size",8,24),n=Y(t,"strokeWidth",8,2),f=Y(t,"absoluteStrokeWidth",8,!1),d=Y(t,"iconNode",24,()=>[]);const m=(...g)=>g.filter((p,_,N)=>!!p&&N.indexOf(p)===_).join(" ");_e();var k=Ya();vt(k,(g,p)=>({...Ka,...a,width:i(),height:i(),stroke:l(),"stroke-width":g,class:p}),[()=>(T(f()),T(n()),T(i()),S(()=>f()?Number(n())*24/Number(i()):n())),()=>(T(s()),T(e),S(()=>m("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var c=v(k);$t(c,1,d,Na,(g,p)=>{var _=Ea(()=>Ma(o(p),2));let N=()=>o(_)[0],M=()=>o(_)[1];var $=q(),b=D($);Ua(b,N,!0,(P,y)=>{vt(P,()=>({...M()}))}),w(g,$)});var x=h(c);re(x,t,"default",{}),u(k),w(r,k),xe()}function Za(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ie(r,le({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Qa(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ie(r,le({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function gt(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ie(r,le({name:"download"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function er(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ie(r,le({name:"info"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Nt(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];ie(r,le({name:"mouse-pointer"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function At(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ie(r,le({name:"save"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function tr(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ie(r,le({name:"settings"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function ar(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ie(r,le({name:"square-pen"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function rr(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];ie(r,le({name:"toggle-left"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function sr(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];ie(r,le({name:"toggle-right"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function lr(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ie(r,le({name:"trending-up"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function Fe(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ie(r,le({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}function pt(r,t){const e=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];ie(r,le({name:"upload"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=q(),n=D(i);re(n,t,"default",{}),w(s,i)},$$slots:{default:!0}}))}var ir=B('<button class="svelte-igdjqh"><p><!></p></button>'),nr=B('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function or(r,t){ye(t,!1);let e=Y(t,"game",12);_e();var a=nr(),s=v(a),l=v(s),i=v(l,!0);u(l),u(s);var n=h(s,2),f=v(n),d=v(f);let m;var k=v(d);Nt(k,{size:24}),u(d),u(f);var c=h(f,2);{var x=A=>{var I=ir(),Z=v(I);let R;var ee=v(Z);lr(ee,{size:24}),u(Z),u(I),ve(J=>R=se(Z,1,"svelte-igdjqh",null,R,J),[()=>({red:e().menu==="upgrades"})]),F("click",I,()=>e(e().menu="upgrades",!0)),w(A,I)};K(c,A=>{T(e()),S(()=>e().showUpgrades())&&A(x)})}var g=h(c,2),p=v(g);let _;var N=v(p);ar(N,{size:24}),u(p),u(g);var M=h(g,2),$=v(M);let b;var P=v($);Qa(P,{size:24}),u($),u(M);var y=h(M,2),L=v(y);let C;var z=v(L);At(z,{size:24}),u(L),u(y);var j=h(y,2),G=v(j);let W;var Q=v(G);tr(Q,{size:24}),u(G),u(j);var ne=h(j,2),ae=v(ne);let ke;var U=v(ae);er(U,{size:24}),u(ae),u(ne),u(n),u(a),ve((A,I,Z,R,ee,J)=>{O(i,(T(e()),S(()=>e().menu))),m=se(d,1,"svelte-igdjqh",null,m,A),_=se(p,1,"svelte-igdjqh",null,_,I),b=se($,1,"svelte-igdjqh",null,b,Z),C=se(L,1,"svelte-igdjqh",null,C,R),W=se(G,1,"svelte-igdjqh",null,W,ee),ke=se(ae,1,"svelte-igdjqh",null,ke,J)},[()=>({red:e().menu==="practice"}),()=>({red:e().menu==="story"}),()=>({red:e().menu==="help"}),()=>({red:e().menu==="saves"}),()=>({red:e().menu==="settings"}),()=>({red:e().menu==="about"})]),F("click",f,()=>e(e().menu="practice",!0)),F("click",g,()=>e(e().menu="story",!0)),F("click",M,()=>e(e().menu="help",!0)),F("click",y,()=>e(e().menu="saves",!0)),F("click",j,()=>e(e().menu="settings",!0)),F("click",ne,()=>e(e().menu="about",!0)),w(r,a),xe()}var cr=B('<div class="thebutton svelte-ylrqw9"><button class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div>');function dr(r,t){ye(t,!1);let e=Y(t,"config",12),a=Y(t,"game",12);function s(){if(!a())return;const m=a().getClickValue();a().addExp(m),a(a())}e(e()),_e();var l=cr(),i=v(l),n=v(i),f=v(n);Nt(f,{size:48});var d=h(f,2,!0);u(n),u(i),u(l),ve(m=>O(d,m),[()=>(T(a()),S(()=>a()?a().updateClickText():"Loading..."))]),F("click",i,s),w(r,l),xe()}var vr=B('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button>'),ur=B('<h2 class="svelte-xd3x4d"> </h2> <p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p> <button class="purchase-btn svelte-xd3x4d"><!></button>',1),fr=B('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),gr=B('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><div class="special-buttons svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button></div> <!></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function pr(r,t){ye(t,!1);const e=ce(),a=ce();let s=Y(t,"game",12);Y(t,"config",8);let l=ce(null);function i(U){X(l,U)}function n(){o(l)&&s().purchaseUpgrade(o(l).id)&&(X(l,s().upgrades[o(l).id]),s(s()),s().autoSave())}function f(U){return U.toLocaleString()}function d(){s().levelUp()&&(s(s()),s().autoSave())}tt(()=>T(s()),()=>{X(e,Object.values(s().upgrades).filter(U=>U.id!=="transcendent-focus"))}),tt(()=>T(s()),()=>{X(a,s().upgrades["transcendent-focus"])}),kt(),_e();var m=gr(),k=h(v(m),2),c=v(k),x=v(c),g=v(x);let p;var _=h(v(g),2),N=v(_);u(_);var M=h(_,2),$=v(M);u(M),u(g);var b=h(g,2);let P;var y=v(b),L=v(y,!0);u(y);var C=h(y,2),z=v(C);u(C);var j=h(C,2),G=v(j);u(j),u(b),u(x);var W=h(x,2);$t(W,1,()=>o(e),U=>U.id,(U,A)=>{var I=vr();let Z;var R=v(I),ee=v(R,!0);u(R);var J=h(R,2),Ee=v(J);u(J);var ue=h(J,2),Ae=v(ue);u(ue),u(I),ve((he,je)=>{Z=se(I,1,"upgrade-btn svelte-xd3x4d",null,Z,he),O(ee,(o(A),S(()=>o(A).name))),O(Ee,`Level ${o(A),S(()=>o(A).currentLevel)??""}/${o(A),S(()=>o(A).maxLevel)??""}`),O(Ae,`${je??""} EXP`)},[()=>({selected:o(l)?.id===o(A).id,affordable:s().canAffordUpgrade(o(A).id),maxed:o(A).currentLevel>=o(A).maxLevel}),()=>(T(s()),o(A),S(()=>f(s().getUpgradeCost(o(A).id))))]),F("click",I,()=>i(o(A))),w(U,I)}),u(c);var Q=h(c,2),ne=v(Q);{var ae=U=>{var A=ur(),I=D(A),Z=v(I,!0);u(I);var R=h(I,2),ee=v(R,!0);u(R);var J=h(R,2),Ee=h(v(J));u(J);var ue=h(J,2),Ae=h(v(ue));u(ue);var he=h(ue,2),je=h(v(he));u(he);var $e=h(he,2),Be=v($e);{var Ie=de=>{var fe=Je("MAX LEVEL");w(de,fe)},Re=de=>{var fe=q(),He=D(fe);{var Xe=E=>{var H=Je("CANNOT AFFORD");w(E,H)},Ge=E=>{var H=Je("PURCHASE");w(E,H)};K(He,E=>{T(s()),o(l),S(()=>!s().canAffordUpgrade(o(l).id))?E(Xe):E(Ge,!1)},!0)}w(de,fe)};K(Be,de=>{o(l),S(()=>o(l).currentLevel>=o(l).maxLevel)?de(Ie):de(Re,!1)})}u($e),ve((de,fe)=>{O(Z,(o(l),S(()=>o(l).name))),O(ee,(o(l),S(()=>o(l).description))),O(Ee,` ${o(l),S(()=>o(l).effect)??""}`),O(Ae,` ${de??""} EXP`),O(je,` ${o(l),S(()=>o(l).currentLevel)??""}/${o(l),S(()=>o(l).maxLevel)??""}`),$e.disabled=fe},[()=>(T(s()),o(l),S(()=>f(s().getUpgradeCost(o(l).id)))),()=>(T(s()),o(l),S(()=>!s().canPurchaseUpgrade(o(l).id)))]),F("click",$e,n),w(U,A)},ke=U=>{var A=fr();w(U,A)};K(ne,U=>{o(l)?U(ae):U(ke,!1)})}u(Q),u(k),u(m),ve((U,A,I,Z,R)=>{p=se(g,1,"special-upgrade-btn svelte-xd3x4d",null,p,U),g.disabled=A,O(N,`Level ${T(s()),S(()=>s().level)??""} → ${T(s()),S(()=>s().level+1)??""}`),O($,`${I??""} EXP`),P=se(b,1,"special-upgrade-btn svelte-xd3x4d",null,P,Z),b.disabled=(o(a),S(()=>o(a).currentLevel>=o(a).maxLevel)),O(L,(o(a),S(()=>o(a).name))),O(z,`Level ${o(a),S(()=>o(a).currentLevel)??""}/${o(a),S(()=>o(a).maxLevel)??""}`),O(G,`${R??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(T(s()),S(()=>!s().canLevelUp())),()=>(T(s()),S(()=>f(s().getLevelUpCost()))),()=>({selected:o(l)?.id===o(a).id,affordable:s().canAffordUpgrade(o(a).id),maxed:o(a).currentLevel>=o(a).maxLevel}),()=>(T(s()),o(a),S(()=>f(s().getUpgradeCost(o(a).id))))]),F("click",g,d),F("click",b,()=>i(o(a))),w(r,m),xe()}var hr=B("<div><!> </div>"),mr=B('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),br=B('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function _r(r,t){ye(t,!1);let e=Y(t,"game",12),a=Y(t,"config",12),s=ce(""),l=ce(""),i=ce("success"),n=ce(!1),f=ce(!1);function d(E,H,oe=3e3){X(l,E),X(i,H),X(n,!0),setTimeout(()=>{X(n,!1)},oe)}function m(){try{const E=e().exportSave(!0);navigator.clipboard.writeText(E),c(E,"tomeclicker-save-encrypted.json"),d("Encrypted save exported and copied to clipboard!","success")}catch{d("Failed to export save","error")}}function k(){try{const E=e().exportSave(!1);navigator.clipboard.writeText(E),c(E,"tomeclicker-save-unencrypted.json"),d("Unencrypted save exported (not leaderboard eligible)","warning")}catch{d("Failed to export save","error")}}function c(E,H){const oe=new Blob([E],{type:"application/json"}),me=URL.createObjectURL(oe),ge=document.createElement("a");ge.href=me,ge.download=H,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(me)}function x(){if(!o(s).trim()){d("Please paste save data first","error");return}const E=e().importSave(o(s).trim());E.success?(d(E.warning||"Save imported successfully!",E.warning?"warning":"success"),X(s,""),e(e()),e().autoSave()):d(E.error||"Failed to import save","error")}function g(){try{e().autoSave(),d("Game saved to browser storage!","success")}catch{d("Failed to save game","error")}}function p(){try{const E=e().loadFromLocalStorage(),H=E?!1:e().loadFromCookies();E||H?(d(`Game loaded from ${E?"localStorage":"cookies"}!`,"success"),e(e())):d("No save found in browser storage","warning")}catch{d("Failed to load game","error")}}function _(){X(f,!0)}function N(){X(f,!1)}function M(){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),X(f,!1),d("Game has been completely reset!","success")}catch{d("Failed to reset game","error")}}setInterval(()=>{e().autoSave()},3e4),a(a()),_e();var $=br(),b=h(v($),2);{var P=E=>{var H=hr(),oe=v(H);{var me=we=>{Za(we,{size:20})},ge=we=>{var lt=q(),jt=D(lt);{var Ut=Me=>{Fe(Me,{size:20})},zt=Me=>{Fe(Me,{size:20})};K(jt,Me=>{o(i)==="warning"?Me(Ut):Me(zt,!1)},!0)}w(we,lt)};K(oe,we=>{o(i)==="success"?we(me):we(ge,!1)})}var Ue=h(oe);u(H),ve(()=>{se(H,1,`message ${o(i)??""}`,"svelte-rfjmb6"),O(Ue,` ${o(l)??""}`)}),w(E,H)};K(b,E=>{o(n)&&E(P)})}var y=h(b,2),L=v(y),C=h(v(L),4),z=v(C),j=v(z);At(j,{size:20}),be(),u(z);var G=h(z,2),W=v(G);pt(W,{size:20}),be(),u(G),u(C),u(L);var Q=h(L,2),ne=h(v(Q),4),ae=v(ne),ke=v(ae);gt(ke,{size:20}),be(),u(ae);var U=h(ae,2),A=v(U);gt(A,{size:20}),be(),u(U),u(ne),be(2),u(Q);var I=h(Q,2),Z=h(v(I),4);Ca(Z);var R=h(Z,2),ee=v(R);pt(ee,{size:20}),be(),u(R),u(I);var J=h(I,2),Ee=h(v(J),2),ue=v(Ee),Ae=h(v(ue));u(ue);var he=h(ue,2),je=h(v(he));u(he);var $e=h(he,2),Be=h(v($e));u($e);var Ie=h($e,2),Re=h(v(Ie));u(Ie),u(Ee),u(J);var de=h(J,2),fe=h(v(de),4),He=v(fe);Fe(He,{size:20}),be(),u(fe),u(de),u(y);var Xe=h(y,2);{var Ge=E=>{var H=mr(),oe=v(H),me=h(v(oe),8),ge=v(me),Ue=h(ge,2),we=v(Ue);Fe(we,{size:20}),be(),u(Ue),u(me),u(oe),u(H),F("click",ge,N),F("click",Ue,M),w(E,H)};K(Xe,E=>{o(f)&&E(Ge)})}u($),ve((E,H,oe,me)=>{R.disabled=E,O(Ae,` ${T(e()),S(()=>e().saveIntegrity)??""}`),O(je,` ${H??""}`),O(Be,` ${oe??""}`),O(Re,` ${me??""}`)},[()=>(o(s),S(()=>!o(s).trim())),()=>(T(e()),S(()=>new Date(e().lastValidation).toLocaleString())),()=>(T(e()),S(()=>e().exp.toLocaleString())),()=>(T(e()),S(()=>e().lifetimeExp.toLocaleString()))]),F("click",z,g),F("click",G,p),F("click",ae,m),F("click",U,k),Ha(Z,()=>o(s),E=>X(s,E)),F("click",R,x),F("click",fe,_),w(r,$),xe()}var yr=B('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <p> </p> <h2 class="svelte-mt7s6l">test buttons</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">EXP</button> <button class="svelte-mt7s6l">Tick</button> <button class="svelte-mt7s6l">100EXP</button></div> <h2 class="svelte-mt7s6l">game settings</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">Dark Mode</button> <!></div></div>');function xr(r,t){ye(t,!1);let e=Y(t,"config",12),a=Y(t,"game",12);_e();var s=yr(),l=h(v(s),2),i=v(l);u(l);var n=h(l,4),f=v(n),d=h(f,2),m=h(d,2);u(n);var k=h(n,4),c=v(k),x=h(c,2);{var g=_=>{sr(_,{size:48})},p=_=>{rr(_,{size:48})};K(x,_=>{T(e()),S(()=>e().darkmode)?_(g):_(p,!1)})}u(k),u(s),ve(()=>O(i,`EXP: ${T(a()),S(()=>a().exp)??""} Tick: ${T(a()),S(()=>a().tick)??""} Level: ${T(a()),S(()=>a().level)??""}`)),F("click",f,()=>{a(a().exp++,!0)}),F("click",d,()=>{a(a().tick++,!0)}),F("click",m,()=>{a(a().exp+=100,!0)}),F("click",c,()=>{e(e().darkmode=!e().darkmode,!0)}),w(r,s),xe()}var kr=B(`<div class="story svelte-1wes0v7"><div class="scrollbox svelte-1wes0v7"><h1 class="svelte-1wes0v7">storyline</h1> <ol><li class="svelte-1wes0v7">This is a chapter</li> <li class="svelte-1wes0v7">This is another chapter</li> <li class="svelte-1wes0v7">Revenge of the chapter</li> <li class="svelte-1wes0v7">Hey look, it's a chapter!</li> <li class="svelte-1wes0v7">In Soviet Russia, chapter reads you</li> <li class="svelte-1wes0v7">Chapter Revisited</li> <li class="svelte-1wes0v7">YOLO, so here's a chapter</li> <li class="svelte-1wes0v7">The chapter to end all chapters</li> <li class="svelte-1wes0v7">The final chapter</li></ol> <h2>more stuff</h2> <ul><li class="svelte-1wes0v7">The extra chapter</li> <li class="svelte-1wes0v7">This is another extra chapter</li> <li class="svelte-1wes0v7">The extended chapter</li> <li class="svelte-1wes0v7">The uncut chapter</li> <li class="svelte-1wes0v7">The chapter to not screw everything up</li> <li class="svelte-1wes0v7">Babbitaboopi</li></ul></div></div>`);function $r(r,t){let e=Y(t,"game",12);e(e());var a=kr();w(r,a)}var wr=B('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),Sr=B('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Lr=B("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),Er=B('<div class="view svelte-1l6ze8i"><!></div>');function Mr(r,t){ye(t,!1);let e=Y(t,"config",12),a=Y(t,"game",12);_e();var s=Er(),l=v(s);{var i=f=>{dr(f,{get config(){return e()},set config(d){e(d)},get game(){return a()},set game(d){a(d)},$$legacy:!0})},n=f=>{var d=q(),m=D(d);{var k=x=>{pr(x,{get config(){return e()},set config(g){e(g)},get game(){return a()},set game(g){a(g)},$$legacy:!0})},c=x=>{var g=q(),p=D(g);{var _=M=>{_r(M,{get config(){return e()},set config($){e($)},get game(){return a()},set game($){a($)},$$legacy:!0})},N=M=>{var $=q(),b=D($);{var P=L=>{$r(L,{get game(){return a()},set game(C){a(C)},$$legacy:!0})},y=L=>{var C=q(),z=D(C);{var j=W=>{xr(W,{get config(){return e()},set config(Q){e(Q)},get game(){return a()},set game(Q){a(Q)},$$legacy:!0})},G=W=>{var Q=q(),ne=D(Q);{var ae=U=>{var A=wr();w(U,A)},ke=U=>{var A=q(),I=D(A);{var Z=ee=>{var J=Sr();w(ee,J)},R=ee=>{var J=Lr();w(ee,J)};K(I,ee=>{a()?ee(R,!1):ee(Z)},!0)}w(U,A)};K(ne,U=>{T(a()),S(()=>a()&&a().menu==="about")?U(ae):U(ke,!1)},!0)}w(W,Q)};K(z,W=>{T(a()),S(()=>a()&&a().menu==="settings")?W(j):W(G,!1)},!0)}w(L,C)};K(b,L=>{T(a()),S(()=>a()&&a().menu==="story")?L(P):L(y,!1)},!0)}w(M,$)};K(p,M=>{T(a()),S(()=>a()&&a().menu==="saves")?M(_):M(N,!1)},!0)}w(x,g)};K(m,x=>{T(a()),S(()=>a()&&a().menu==="upgrades")?x(k):x(c,!1)},!0)}w(f,d)};K(l,f=>{T(a()),S(()=>a()&&a().menu==="practice")?f(i):f(n,!1)})}u(s),w(r,s),xe()}var Cr=B('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Tr=B('<footer class="footer svelte-1uha8ag"><!></footer>'),Nr=B('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),Ar=B('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),jr=B("<div><!></div>");function Vr(r,t){ye(t,!1);let e=ce(new Xa("prussian-blue",!0)),a=ce();qt(()=>{X(a,new Ga),setTimeout(()=>{o(a)&&(console.log("🔄 Attempting to load saved data..."),o(a).loadFromLocalStorage()?console.log("✅ Game loaded from localStorage"):(console.log("📱 LocalStorage failed, trying cookies..."),o(a).loadFromCookies()),console.log("🎮 Final game state after load attempt:",{exp:o(a).exp,lifetimeExp:o(a).lifetimeExp}),X(a,o(a)))},100);const d=setInterval(()=>{o(a)&&o(a).autoSave()},15e3);return()=>{clearInterval(d)}});let s=ce("");tt(()=>o(e),()=>{X(s,o(e).getTheme())}),kt(),_e();var l=jr();Bt(d=>{var m=Cr();Ta.title="TomeClicker",be(6),w(d,m)});var i=v(l);{var n=d=>{var m=Nr(),k=D(m);{var c=N=>{Ja(N,{get game(){return o(a)},set game(M){X(a,M)},$$legacy:!0})};K(k,N=>{o(a),S(()=>o(a).showHeader())&&N(c)})}var x=h(k,2),g=v(x);Mr(g,{get game(){return o(a)},set game(N){X(a,N)},get config(){return o(e)},set config(N){X(e,N)},$$legacy:!0}),u(x);var p=h(x,2);{var _=N=>{var M=Tr(),$=v(M);or($,{get game(){return o(a)},set game(b){X(a,b)},$$legacy:!0}),u(M),w(N,M)};K(p,N=>{o(a),S(()=>o(a).showMenu())&&N(_)})}w(d,m)},f=d=>{var m=Ar();w(d,m)};K(i,d=>{o(a)?d(n):d(f,!1)})}u(l),ve(()=>se(l,1,`app ${o(s)??""}`,"svelte-1uha8ag")),w(r,l),xe()}export{Vr as component};
