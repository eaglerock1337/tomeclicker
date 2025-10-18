import"../chunks/DsnmJJEf.js";import{i as $e}from"../chunks/Bvw1GPGt.js";import{i as Ft,a as Dt,c as Rt,d as Ot,n as qt,b as Bt,s as B,e as P,o as Ht,f as Xt}from"../chunks/DzOk3YHX.js";import{w as X,x as Re,v as Be,h as n,N as Gt,y as Kt,H as Wt,z as nt,A as Oe,B as Te,K as Le,a9 as Yt,aC as Jt,D as Ue,G as Zt,F as je,az as mt,ap as st,C as bt,aQ as le,a0 as ot,a8 as Qt,I as lt,J as _t,aU as ea,aV as Ke,ag as ze,aW as ta,aX as aa,am as ra,aY as sa,ay as la,aZ as ia,S as yt,a_ as na,E as oa,a$ as ca,aB as da,au as va,aP as xt,b0 as ua,b1 as fa,aq as ga,b2 as pa,b3 as ha,b4 as ma,U as ba,b5 as _a,b6 as ya,b7 as xa,b8 as ka,b9 as $a,ba as wa,bb as kt,aO as Sa,e as w,a5 as $t,bc as Ma,p as we,l as G,n as c,o as d,q as g,t as he,i as T,a as x,m as Se,bd as Ea,c as W,f as R,aS as La,be as Ca,bf as tt,Q as D,bg as wt,aT as We,ah as pe,bh as Ta,bi as Na}from"../chunks/hgk8NPT6.js";import{p as ee,l as se,s as ce,i as J}from"../chunks/COlMwlpH.js";function Aa(r,t){return t}function ja(r,t,e){for(var a=r.items,s=[],l=t.length,i=0;i<l;i++)sa(t[i].e,s,!0);var o=l>0&&s.length===0&&e!==null;if(o){var f=e.parentNode;la(f),f.append(e),a.clear(),xe(r,t[0].prev,t[l-1].next)}ia(s,()=>{for(var v=0;v<l;v++){var m=t[v];o||(a.delete(m.k),xe(r,m.prev,m.next)),ze(m.e,!o)}})}function St(r,t,e,a,s,l=null){var i=r,o={flags:t,items:new Map,first:null};X&&Re();var f=null,v=!1,m=new Map,$=Gt(()=>{var h=e();return st(h)?h:h==null?[]:mt(h)}),u,y;function p(){Ua(y,u,o,m,i,s,t,a,e),l!==null&&(u.length===0?f?lt(f):f=Ue(()=>l(i)):f!==null&&_t(f,()=>{f=null}))}Be(()=>{y??=yt,u=n($);var h=u.length;if(v&&h===0)return;v=h===0;let M=!1;if(X){var N=Kt(i)===Wt;N!==(h===0)&&(i=nt(),Oe(i),Te(!1),M=!0)}if(X){for(var E=null,k,b=0;b<h;b++){if(Le.nodeType===Yt&&Le.data===Jt){i=Le,M=!0,Te(!1);break}var F=u[b],_=a(F,b);k=at(Le,o,E,null,F,_,b,s,t,e),o.items.set(_,k),E=k}h>0&&Oe(nt())}if(X)h===0&&l&&(f=Ue(()=>l(i)));else if(Zt()){var S=new Set,C=je;for(b=0;b<h;b+=1){F=u[b],_=a(F,b);var I=o.items.get(_)??m.get(_);I?Mt(I,F,b):(k=at(null,o,null,null,F,_,b,s,t,e,!0),m.set(_,k)),S.add(_)}for(const[U,V]of o.items)S.has(U)||C.skipped_effects.add(V.e);C.add_callback(p)}else p();M&&Te(!0),n($)}),X&&(i=Le)}function Ua(r,t,e,a,s,l,i,o,f){var v=t.length,m=e.items,$=e.first,u=$,y,p=null,h=[],M=[],N,E,k,b;for(b=0;b<v;b+=1){if(N=t[b],E=o(N,b),k=m.get(E),k===void 0){var F=a.get(E);if(F!==void 0){a.delete(E),m.set(E,F);var _=p?p.next:u;xe(e,p,F),xe(e,F,_),Ye(F,_,s),p=F}else{var S=u?u.e.nodes_start:s;p=at(S,e,p,p===null?e.first:p.next,N,E,b,l,i,f)}m.set(E,p),h=[],M=[],u=p.next;continue}if(Mt(k,N,b),(k.e.f&Ke)!==0&&lt(k.e),k!==u){if(y!==void 0&&y.has(k)){if(h.length<M.length){var C=M[0],I;p=C.prev;var U=h[0],V=h[h.length-1];for(I=0;I<h.length;I+=1)Ye(h[I],C,s);for(I=0;I<M.length;I+=1)y.delete(M[I]);xe(e,U.prev,V.next),xe(e,p,U),xe(e,V,C),u=C,p=V,b-=1,h=[],M=[]}else y.delete(k),Ye(k,u,s),xe(e,k.prev,k.next),xe(e,k,p===null?e.first:p.next),xe(e,p,k),p=k;continue}for(h=[],M=[];u!==null&&u.k!==E;)(u.e.f&Ke)===0&&(y??=new Set).add(u),M.push(u),u=u.next;if(u===null)continue;k=u}h.push(k),p=k,u=k.next}if(u!==null||y!==void 0){for(var H=y===void 0?[]:mt(y);u!==null;)(u.e.f&Ke)===0&&H.push(u),u=u.next;var Z=H.length;if(Z>0){var te=null;ja(e,H,te)}}r.first=e.first&&e.first.e,r.last=p&&p.e;for(var ae of a.values())ze(ae.e);a.clear()}function Mt(r,t,e,a){Qt(r.v,t),r.i=e}function at(r,t,e,a,s,l,i,o,f,v,m){var $=(f&ta)!==0,u=(f&aa)===0,y=$?u?le(s,!1,!1):ot(s):s,p=(f&ea)===0?i:ot(i),h={i:p,v:y,k:l,a:null,e:null,prev:e,next:a};try{if(r===null){var M=document.createDocumentFragment();M.append(r=bt())}return h.e=Ue(()=>o(r,y,p,v),X),h.e.prev=e&&e.e,h.e.next=a&&a.e,e===null?m||(t.first=h):(e.next=h,e.e.next=h.e),a!==null&&(a.prev=h,a.e.prev=h.e),h}finally{}}function Ye(r,t,e){for(var a=r.next?r.next.e.nodes_start:e,s=t?t.e.nodes_start:e,l=r.e.nodes_start;l!==null&&l!==a;){var i=ra(l);s.before(l),l=i}}function xe(r,t,e){t===null?r.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function ie(r,t,e,a,s){X&&Re();var l=t.$$slots?.[e],i=!1;l===!0&&(l=t.children,i=!0),l===void 0||l(r,i?()=>a:a)}function za(r,t,e,a,s,l){let i=X;X&&Re();var o,f,v=null;X&&Le.nodeType===na&&(v=Le,Re());var m=X?Le:r,$;Be(()=>{const u=t()||null;var y=ca;u!==o&&($&&(u===null?_t($,()=>{$=null,f=null}):u===f?lt($):ze($)),u&&u!==f&&($=Ue(()=>{if(v=X?v:document.createElementNS(y,u),da(v,v),a){X&&Ft(u)&&v.append(document.createComment(""));var p=X?va(v):v.appendChild(bt());X&&(p===null?Te(!1):Oe(p)),a(v,p)}yt.nodes_end=v,m.before(v)})),o=u,o&&(f=o))},oa),i&&(Te(!0),Oe(m))}function Pa(r,t){var e=void 0,a;Be(()=>{e!==(e=t())&&(a&&(ze(a),a=null),e&&(a=Ue(()=>{xt(()=>e(r))})))})}function Et(r){var t,e,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(e=Et(r[t]))&&(a&&(a+=" "),a+=e)}else for(e in r)r[e]&&(a&&(a+=" "),a+=e);return a}function Ia(){for(var r,t,e=0,a="",s=arguments.length;e<s;e++)(r=arguments[e])&&(t=Et(r))&&(a&&(a+=" "),a+=t);return a}function Va(r){return typeof r=="object"?Ia(r):r??""}const ct=[...` 	
\r\f \v\uFEFF`];function Fa(r,t,e){var a=r==null?"":""+r;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var l=s.length,i=0;(i=a.indexOf(s,i))>=0;){var o=i+l;(i===0||ct.includes(a[i-1]))&&(o===a.length||ct.includes(a[o]))?a=(i===0?"":a.substring(0,i))+a.substring(o+1):i=o}}return a===""?null:a}function dt(r,t=!1){var e=t?" !important;":";",a="";for(var s in r){var l=r[s];l!=null&&l!==""&&(a+=" "+s+": "+l+e)}return a}function Je(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Da(r,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,i=0,o=!1,f=[];a&&f.push(...Object.keys(a).map(Je)),s&&f.push(...Object.keys(s).map(Je));var v=0,m=-1;const h=r.length;for(var $=0;$<h;$++){var u=r[$];if(o?u==="/"&&r[$-1]==="*"&&(o=!1):l?l===u&&(l=!1):u==="/"&&r[$+1]==="*"?o=!0:u==='"'||u==="'"?l=u:u==="("?i++:u===")"&&i--,!o&&l===!1&&i===0){if(u===":"&&m===-1)m=$;else if(u===";"||$===h-1){if(m!==-1){var y=Je(r.substring(v,m).trim());if(!f.includes(y)){u!==";"&&$++;var p=r.substring(v,$).trim();e+=" "+p+";"}}v=$+1,m=-1}}}}return a&&(e+=dt(a)),s&&(e+=dt(s,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function ue(r,t,e,a,s,l){var i=r.__className;if(X||i!==e||i===void 0){var o=Fa(e,a,l);(!X||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):t?r.className=o:r.setAttribute("class",o)),r.__className=e}else if(l&&s!==l)for(var f in l){var v=!!l[f];(s==null||v!==!!s[f])&&r.classList.toggle(f,v)}return l}function Ze(r,t={},e,a){for(var s in e){var l=e[s];t[s]!==l&&(e[s]==null?r.style.removeProperty(s):r.style.setProperty(s,l,a))}}function Ra(r,t,e,a){var s=r.__style;if(X||s!==t){var l=Da(t,a);(!X||l!==r.getAttribute("style"))&&(l==null?r.removeAttribute("style"):r.style.cssText=l),r.__style=t}else a&&(Array.isArray(a)?(Ze(r,e?.[0],a[0]),Ze(r,e?.[1],a[1],"important")):Ze(r,e,a));return a}function rt(r,t,e=!1){if(r.multiple){if(t==null)return;if(!st(t))return ua();for(var a of r.options)a.selected=t.includes(vt(a));return}for(a of r.options){var s=vt(a);if(fa(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(r.selectedIndex=-1)}function Oa(r){var t=new MutationObserver(()=>{rt(r,r.__value)});t.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ga(()=>{t.disconnect()})}function vt(r){return"__value"in r?r.__value:r.value}const Ve=Symbol("class"),Fe=Symbol("style"),Lt=Symbol("is custom element"),Ct=Symbol("is html");function Tt(r){if(X){var t=!1,e=()=>{if(!t){if(t=!0,r.hasAttribute("value")){var a=r.value;qe(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var s=r.checked;qe(r,"checked",null),r.checked=s}}};r.__on_r=e,_a(e),ya()}}function qa(r,t){t?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function qe(r,t,e,a){var s=Nt(r);X&&(s[t]=r.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&r.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(r[$a]=e),e==null?r.removeAttribute(t):typeof e!="string"&&At(r).includes(t)?r[t]=e:r.setAttribute(t,e))}function Ba(r,t,e,a,s=!1,l=!1){if(X&&s&&r.tagName==="INPUT"){var i=r,o=i.type==="checkbox"?"defaultChecked":"defaultValue";o in e||Tt(i)}var f=Nt(r),v=f[Lt],m=!f[Ct];let $=X&&v;$&&Te(!1);var u=t||{},y=r.tagName==="OPTION";for(var p in t)p in e||(e[p]=null);e.class?e.class=Va(e.class):e[Ve]&&(e.class=null),e[Fe]&&(e.style??=null);var h=At(r);for(const _ in e){let S=e[_];if(y&&_==="value"&&S==null){r.value=r.__value="",u[_]=S;continue}if(_==="class"){var M=r.namespaceURI==="http://www.w3.org/1999/xhtml";ue(r,M,S,a,t?.[Ve],e[Ve]),u[_]=S,u[Ve]=e[Ve];continue}if(_==="style"){Ra(r,S,t?.[Fe],e[Fe]),u[_]=S,u[Fe]=e[Fe];continue}var N=u[_];if(!(S===N&&!(S===void 0&&r.hasAttribute(_)))){u[_]=S;var E=_[0]+_[1];if(E!=="$$")if(E==="on"){const C={},I="$$"+_;let U=_.slice(2);var k=Bt(U);if(Dt(U)&&(U=U.slice(0,-7),C.capture=!0),!k&&N){if(S!=null)continue;r.removeEventListener(U,u[I],C),u[I]=null}if(S!=null)if(k)r[`__${U}`]=S,Ot([U]);else{let V=function(H){u[_].call(this,H)};u[I]=Rt(U,r,V,C)}else k&&(r[`__${U}`]=void 0)}else if(_==="style")qe(r,_,S);else if(_==="autofocus")ma(r,!!S);else if(!v&&(_==="__value"||_==="value"&&S!=null))r.value=r.__value=S;else if(_==="selected"&&y)qa(r,S);else{var b=_;m||(b=qt(b));var F=b==="defaultValue"||b==="defaultChecked";if(S==null&&!v&&!F)if(f[_]=null,b==="value"||b==="checked"){let C=r;const I=t===void 0;if(b==="value"){let U=C.defaultValue;C.removeAttribute(b),C.defaultValue=U,C.value=C.__value=I?U:null}else{let U=C.defaultChecked;C.removeAttribute(b),C.defaultChecked=U,C.checked=I?U:!1}}else r.removeAttribute(_);else F||h.includes(b)&&(v||typeof S!="string")?(r[b]=S,b in f&&(f[b]=ba)):typeof S!="function"&&qe(r,b,S)}}}return $&&Te(!0),u}function ut(r,t,e=[],a=[],s,l=!1,i=!1){pa(e,a,o=>{var f=void 0,v={},m=r.nodeName==="SELECT",$=!1;if(Be(()=>{var y=t(...o.map(n)),p=Ba(r,f,y,s,l,i);$&&m&&"value"in y&&rt(r,y.value);for(let M of Object.getOwnPropertySymbols(v))y[M]||ze(v[M]);for(let M of Object.getOwnPropertySymbols(y)){var h=y[M];M.description===ha&&(!f||h!==f[M])&&(v[M]&&ze(v[M]),v[M]=Ue(()=>Pa(r,()=>h))),p[M]=h}f=p}),m){var u=r;xt(()=>{rt(u,f.value,!0),Oa(u)})}$=!0})}function Nt(r){return r.__attributes??={[Lt]:r.nodeName.includes("-"),[Ct]:r.namespaceURI===xa}}var ft=new Map;function At(r){var t=r.getAttribute("is")||r.nodeName,e=ft.get(t);if(e)return e;ft.set(t,e=[]);for(var a,s=r,l=Element.prototype;l!==s;){a=wa(s);for(var i in a)a[i].set&&e.push(i);s=ka(s)}return e}function Ha(r,t,e=t){var a=new WeakSet;kt(r,"input",async s=>{var l=s?r.defaultValue:r.value;if(l=Qe(r)?et(l):l,e(l),je!==null&&a.add(je),await Sa(),l!==(l=t())){var i=r.selectionStart,o=r.selectionEnd;r.value=l??"",o!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(o,r.value.length))}}),(X&&r.defaultValue!==r.value||w(t)==null&&r.value)&&(e(Qe(r)?et(r.value):r.value),je!==null&&a.add(je)),$t(()=>{var s=t();if(r===document.activeElement){var l=Ma??je;if(a.has(l))return}Qe(r)&&s===et(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Xa(r,t,e=t){kt(r,"change",a=>{var s=a?r.defaultChecked:r.checked;e(s)}),(X&&r.defaultChecked!==r.checked||w(t)==null)&&e(r.checked),$t(()=>{var a=t();r.checked=!!a})}function Qe(r){var t=r.type;return t==="number"||t==="range"}function et(r){return r===""?null:+r}function Ga(r){return function(...t){var e=t[0];return e.stopPropagation(),r?.apply(this,t)}}function Ka(r,t){var e=r.$$events?.[t.type],a=st(e)?e.slice():e==null?[]:[e];for(var s of a)s.call(this,t)}const jt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#08725dff",red:"#cc6300ff",yellow:"#b8860bff"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#1aefc4ff",red:"#ffa047ff",yellow:"#ffd700ff"}},graphite:{name:"graphite",displayName:"Graphite",light:{bg:"#d5d3d9ff",altBg:"#b6b3bdff",text:"#1e1c21ff",blue:"#4a5568ff",red:"#c14b1fff",green:"#406354ff",yellow:"#d69e2eff"},dark:{bg:"#28262cff",altBg:"#1e1c21ff",text:"#cbc8d0ff",blue:"#8bb5e8ff",red:"#e27750ff",green:"#6b9e88ff",yellow:"#f7dc6fff"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#4d6b4d",red:"#b8302f",yellow:"#d6a82e"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#7d9d7d",red:"#e27777",yellow:"#f7dc6f"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#5b8c5b",red:"#a84d3d",yellow:"#c9a843"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#8cc58c",red:"#d77a6a",yellow:"#f5d66e"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#4a90e2",green:"#52c41a",red:"#f5222d",yellow:"#faad14"},dark:{bg:"#1a1d21",altBg:"#0d0f12",text:"#f8f9fa",blue:"#74b3ff",green:"#73d13d",red:"#ff5566",yellow:"#ffc53d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#6b7d5a",red:"#a85a3d",yellow:"#d6a843"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#9bb083",red:"#d8876a",yellow:"#f5d66e"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#e0e6ed",altBg:"#c7d1dd",text:"#0a0e14",blue:"#3b7ea1",green:"#4d9b4d",red:"#c14b4b",yellow:"#d69e2e"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#6bb4d1",green:"#7dd17d",red:"#e27777",yellow:"#f7dc6f"}}};function gt(r){return r in jt}class Wa{darkmode;theme;constructor(t="prussian-blue",e=!0){this.darkmode=e,this.theme=gt(t)?t:"prussian-blue"}getTheme(){const t=this.darkmode?"dark":"light";return`${this.theme}-${t}`}setTheme(t){return gt(t)?(this.theme=t,!0):!1}toggleDarkMode(){this.darkmode=!this.darkmode}getAvailableThemes(){return Object.keys(jt)}}class Ya{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="transcendent-focus"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades["transcendent-focus"];t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,t.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="transcendent-focus"?e.baseCost*Math.pow(100,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let l=0;l<e.length;l++)s+=String.fromCharCode(e.charCodeAt(l)^a.charCodeAt(l%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),l=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:l,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const l=this.decryptSave(e.data);a=JSON.parse(l)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const l=this.importSave(decodeURIComponent(s));return l.success?!0:(console.error("Failed to load save from cookies:",l.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t)}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(t){const e=this.importSave(t);return e.success?!0:(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){this.saveToLocalStorage(),this.saveToCookies()}hardReset(t=!0){const e=t?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=e,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var Ja=G('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div></header>');function Za(r,t){we(t,!1);let e=ee(t,"game",8);$e();var a=Ja(),s=c(a),l=c(s),i=c(l);d(l);var o=g(l,2),f=c(o);d(o),d(s),d(a),he(v=>{B(i,`EXP: ${v??""}`),B(f,`Level: ${T(e()),w(()=>e().level)??""}`)},[()=>(T(e()),w(()=>Math.floor(e().exp).toLocaleString()))]),x(r,a),Se()}/**
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
 */const Qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var er=Ea("<svg><!><!></svg>");function de(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]),a=se(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);we(t,!1);let s=ee(t,"name",8,void 0),l=ee(t,"color",8,"currentColor"),i=ee(t,"size",8,24),o=ee(t,"strokeWidth",8,2),f=ee(t,"absoluteStrokeWidth",8,!1),v=ee(t,"iconNode",24,()=>[]);const m=(...p)=>p.filter((h,M,N)=>!!h&&N.indexOf(h)===M).join(" ");$e();var $=er();ut($,(p,h)=>({...Qa,...a,width:i(),height:i(),stroke:l(),"stroke-width":p,class:h}),[()=>(T(f()),T(o()),T(i()),w(()=>f()?Number(o())*24/Number(i()):o())),()=>(T(s()),T(e),w(()=>m("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var u=c($);St(u,1,v,Aa,(p,h)=>{var M=La(()=>Ca(n(h),2));let N=()=>n(M)[0],E=()=>n(M)[1];var k=W(),b=R(k);za(b,N,!0,(F,_)=>{ut(F,()=>({...E()}))}),x(p,k)});var y=g(u);ie(y,t,"default",{}),d($),x(r,$),Se()}function tr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];de(r,ce({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function ar(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];de(r,ce({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function pt(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];de(r,ce({name:"download"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function rr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];de(r,ce({name:"info"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function Ut(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];de(r,ce({name:"mouse-pointer"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function zt(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];de(r,ce({name:"save"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function sr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];de(r,ce({name:"settings"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function lr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];de(r,ce({name:"square-pen"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function ir(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];de(r,ce({name:"toggle-left"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function nr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];de(r,ce({name:"toggle-right"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function or(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];de(r,ce({name:"trash-2"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function cr(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];de(r,ce({name:"trending-up"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function De(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];de(r,ce({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}function ht(r,t){const e=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];de(r,ce({name:"upload"},()=>e,{get iconNode(){return a},children:(s,l)=>{var i=W(),o=R(i);ie(o,t,"default",{}),x(s,i)},$$slots:{default:!0}}))}var dr=G('<button class="svelte-igdjqh"><p><!></p></button>'),vr=G('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function ur(r,t){we(t,!1);let e=ee(t,"game",12);$e();var a=vr(),s=c(a),l=c(s),i=c(l,!0);d(l),d(s);var o=g(s,2),f=c(o),v=c(f);let m;var $=c(v);Ut($,{size:24}),d(v),d(f);var u=g(f,2);{var y=A=>{var j=dr(),K=c(j);let O;var Y=c(K);cr(Y,{size:24}),d(K),d(j),he(q=>O=ue(K,1,"svelte-igdjqh",null,O,q),[()=>({red:e().menu==="upgrades"})]),P("click",j,()=>e(e().menu="upgrades",!0)),x(A,j)};J(u,A=>{T(e()),w(()=>e().showUpgrades())&&A(y)})}var p=g(u,2),h=c(p);let M;var N=c(h);lr(N,{size:24}),d(h),d(p);var E=g(p,2),k=c(E);let b;var F=c(k);ar(F,{size:24}),d(k),d(E);var _=g(E,2),S=c(_);let C;var I=c(S);zt(I,{size:24}),d(S),d(_);var U=g(_,2),V=c(U);let H;var Z=c(V);sr(Z,{size:24}),d(V),d(U);var te=g(U,2),ae=c(te);let be;var z=c(ae);rr(z,{size:24}),d(ae),d(te),d(o),d(a),he((A,j,K,O,Y,q)=>{B(i,(T(e()),w(()=>e().menu))),m=ue(v,1,"svelte-igdjqh",null,m,A),M=ue(h,1,"svelte-igdjqh",null,M,j),b=ue(k,1,"svelte-igdjqh",null,b,K),C=ue(S,1,"svelte-igdjqh",null,C,O),H=ue(V,1,"svelte-igdjqh",null,H,Y),be=ue(ae,1,"svelte-igdjqh",null,be,q)},[()=>({red:e().menu==="practice"}),()=>({red:e().menu==="story"}),()=>({red:e().menu==="help"}),()=>({red:e().menu==="saves"}),()=>({red:e().menu==="settings"}),()=>({red:e().menu==="about"})]),P("click",f,()=>e(e().menu="practice",!0)),P("click",p,()=>e(e().menu="story",!0)),P("click",E,()=>e(e().menu="help",!0)),P("click",_,()=>e(e().menu="saves",!0)),P("click",U,()=>e(e().menu="settings",!0)),P("click",te,()=>e(e().menu="about",!0)),x(r,a),Se()}var fr=G('<div class="thebutton svelte-ylrqw9"><button class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div>');function gr(r,t){we(t,!1);let e=ee(t,"config",12),a=ee(t,"game",12);function s(){if(!a())return;const m=a().getClickValue();a().addExp(m),a(a())}e(e()),$e();var l=fr(),i=c(l),o=c(i),f=c(o);Ut(f,{size:48});var v=g(f,2,!0);d(o),d(i),d(l),he(m=>B(v,m),[()=>(T(a()),w(()=>a()?a().updateClickText():"Loading..."))]),P("click",i,s),x(r,l),Se()}var pr=G('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button>'),hr=G('<h2 class="svelte-xd3x4d"> </h2> <p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p> <button class="purchase-btn svelte-xd3x4d"><!></button>',1),mr=G('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),br=G('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><div class="special-buttons svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button></div> <!></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function _r(r,t){we(t,!1);const e=le(),a=le();let s=ee(t,"game",12);ee(t,"config",8);let l=le(null);function i(z){D(l,z)}function o(){n(l)&&s().purchaseUpgrade(n(l).id)&&(D(l,s().upgrades[n(l).id]),s(s()),s().autoSave())}function f(z){return z.toLocaleString()}function v(){s().levelUp()&&(s(s()),s().autoSave())}tt(()=>T(s()),()=>{D(e,Object.values(s().upgrades).filter(z=>z.id!=="transcendent-focus"))}),tt(()=>T(s()),()=>{D(a,s().upgrades["transcendent-focus"])}),wt(),$e();var m=br(),$=g(c(m),2),u=c($),y=c(u),p=c(y);let h;var M=g(c(p),2),N=c(M);d(M);var E=g(M,2),k=c(E);d(E),d(p);var b=g(p,2);let F;var _=c(b),S=c(_,!0);d(_);var C=g(_,2),I=c(C);d(C);var U=g(C,2),V=c(U);d(U),d(b),d(y);var H=g(y,2);St(H,1,()=>n(e),z=>z.id,(z,A)=>{var j=pr();let K;var O=c(j),Y=c(O,!0);d(O);var q=g(O,2),me=c(q);d(q);var re=g(q,2),_e=c(re);d(re),d(j),he((ne,Me)=>{K=ue(j,1,"upgrade-btn svelte-xd3x4d",null,K,ne),B(Y,(n(A),w(()=>n(A).name))),B(me,`Level ${n(A),w(()=>n(A).currentLevel)??""}/${n(A),w(()=>n(A).maxLevel)??""}`),B(_e,`${Me??""} EXP`)},[()=>({selected:n(l)?.id===n(A).id,affordable:s().canAffordUpgrade(n(A).id),maxed:n(A).currentLevel>=n(A).maxLevel}),()=>(T(s()),n(A),w(()=>f(s().getUpgradeCost(n(A).id))))]),P("click",j,()=>i(n(A))),x(z,j)}),d(u);var Z=g(u,2),te=c(Z);{var ae=z=>{var A=hr(),j=R(A),K=c(j,!0);d(j);var O=g(j,2),Y=c(O,!0);d(O);var q=g(O,2),me=g(c(q));d(q);var re=g(q,2),_e=g(c(re));d(re);var ne=g(re,2),Me=g(c(ne));d(ne);var fe=g(ne,2),Pe=c(fe);{var Ce=ve=>{var oe=We("MAX LEVEL");x(ve,oe)},Ne=ve=>{var oe=W(),He=R(oe);{var Xe=L=>{var Q=We("CANNOT AFFORD");x(L,Q)},Ge=L=>{var Q=We("PURCHASE");x(L,Q)};J(He,L=>{T(s()),n(l),w(()=>!s().canAffordUpgrade(n(l).id))?L(Xe):L(Ge,!1)},!0)}x(ve,oe)};J(Pe,ve=>{n(l),w(()=>n(l).currentLevel>=n(l).maxLevel)?ve(Ce):ve(Ne,!1)})}d(fe),he((ve,oe)=>{B(K,(n(l),w(()=>n(l).name))),B(Y,(n(l),w(()=>n(l).description))),B(me,` ${n(l),w(()=>n(l).effect)??""}`),B(_e,` ${ve??""} EXP`),B(Me,` ${n(l),w(()=>n(l).currentLevel)??""}/${n(l),w(()=>n(l).maxLevel)??""}`),fe.disabled=oe},[()=>(T(s()),n(l),w(()=>f(s().getUpgradeCost(n(l).id)))),()=>(T(s()),n(l),w(()=>!s().canPurchaseUpgrade(n(l).id)))]),P("click",fe,o),x(z,A)},be=z=>{var A=mr();x(z,A)};J(te,z=>{n(l)?z(ae):z(be,!1)})}d(Z),d($),d(m),he((z,A,j,K,O)=>{h=ue(p,1,"special-upgrade-btn svelte-xd3x4d",null,h,z),p.disabled=A,B(N,`Level ${T(s()),w(()=>s().level)??""} → ${T(s()),w(()=>s().level+1)??""}`),B(k,`${j??""} EXP`),F=ue(b,1,"special-upgrade-btn svelte-xd3x4d",null,F,K),b.disabled=(n(a),w(()=>n(a).currentLevel>=n(a).maxLevel)),B(S,(n(a),w(()=>n(a).name))),B(I,`Level ${n(a),w(()=>n(a).currentLevel)??""}/${n(a),w(()=>n(a).maxLevel)??""}`),B(V,`${O??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(T(s()),w(()=>!s().canLevelUp())),()=>(T(s()),w(()=>f(s().getLevelUpCost()))),()=>({selected:n(l)?.id===n(a).id,affordable:s().canAffordUpgrade(n(a).id),maxed:n(a).currentLevel>=n(a).maxLevel}),()=>(T(s()),n(a),w(()=>f(s().getUpgradeCost(n(a).id))))]),P("click",p,v),P("click",b,()=>i(n(a))),x(r,m),Se()}var yr=G("<div><!> </div>"),xr=G('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),kr=G('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function $r(r,t){we(t,!1);let e=ee(t,"game",12),a=ee(t,"config",12),s=le(""),l=le(""),i=le("success"),o=le(!1),f=le(!1);function v(L,Q,ge=3e3){D(l,L),D(i,Q),D(o,!0),setTimeout(()=>{D(o,!1)},ge)}function m(){try{const L=e().exportSave(!0);navigator.clipboard.writeText(L),u(L,"tomeclicker-save-encrypted.json"),v("Encrypted save exported and copied to clipboard!","success")}catch{v("Failed to export save","error")}}function $(){try{const L=e().exportSave(!1);navigator.clipboard.writeText(L),u(L,"tomeclicker-save-unencrypted.json"),v("Unencrypted save exported (not leaderboard eligible)","warning")}catch{v("Failed to export save","error")}}function u(L,Q){const ge=new Blob([L],{type:"application/json"}),ke=URL.createObjectURL(ge),ye=document.createElement("a");ye.href=ke,ye.download=Q,document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),URL.revokeObjectURL(ke)}function y(){if(!n(s).trim()){v("Please paste save data first","error");return}const L=e().importSave(n(s).trim());L.success?(v(L.warning||"Save imported successfully!",L.warning?"warning":"success"),D(s,""),e(e()),e().autoSave()):v(L.error||"Failed to import save","error")}function p(){try{e().autoSave(),v("Game saved to browser storage!","success")}catch{v("Failed to save game","error")}}function h(){try{const L=e().loadFromLocalStorage(),Q=L?!1:e().loadFromCookies();L||Q?(v(`Game loaded from ${L?"localStorage":"cookies"}!`,"success"),e(e())):v("No save found in browser storage","warning")}catch{v("Failed to load game","error")}}function M(){D(f,!0)}function N(){D(f,!1)}function E(){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),D(f,!1),v("Game has been completely reset!","success")}catch{v("Failed to reset game","error")}}setInterval(()=>{e().autoSave()},3e4),a(a()),$e();var k=kr(),b=g(c(k),2);{var F=L=>{var Q=yr(),ge=c(Q);{var ke=Ee=>{tr(Ee,{size:20})},ye=Ee=>{var it=W(),Pt=R(it);{var It=Ae=>{De(Ae,{size:20})},Vt=Ae=>{De(Ae,{size:20})};J(Pt,Ae=>{n(i)==="warning"?Ae(It):Ae(Vt,!1)},!0)}x(Ee,it)};J(ge,Ee=>{n(i)==="success"?Ee(ke):Ee(ye,!1)})}var Ie=g(ge);d(Q),he(()=>{ue(Q,1,`message ${n(i)??""}`,"svelte-rfjmb6"),B(Ie,` ${n(l)??""}`)}),x(L,Q)};J(b,L=>{n(o)&&L(F)})}var _=g(b,2),S=c(_),C=g(c(S),4),I=c(C),U=c(I);zt(U,{size:20}),pe(),d(I);var V=g(I,2),H=c(V);ht(H,{size:20}),pe(),d(V),d(C),d(S);var Z=g(S,2),te=g(c(Z),4),ae=c(te),be=c(ae);pt(be,{size:20}),pe(),d(ae);var z=g(ae,2),A=c(z);pt(A,{size:20}),pe(),d(z),d(te),pe(2),d(Z);var j=g(Z,2),K=g(c(j),4);Ta(K);var O=g(K,2),Y=c(O);ht(Y,{size:20}),pe(),d(O),d(j);var q=g(j,2),me=g(c(q),2),re=c(me),_e=g(c(re));d(re);var ne=g(re,2),Me=g(c(ne));d(ne);var fe=g(ne,2),Pe=g(c(fe));d(fe);var Ce=g(fe,2),Ne=g(c(Ce));d(Ce),d(me),d(q);var ve=g(q,2),oe=g(c(ve),4),He=c(oe);De(He,{size:20}),pe(),d(oe),d(ve),d(_);var Xe=g(_,2);{var Ge=L=>{var Q=xr(),ge=c(Q),ke=g(c(ge),8),ye=c(ke),Ie=g(ye,2),Ee=c(Ie);De(Ee,{size:20}),pe(),d(Ie),d(ke),d(ge),d(Q),P("click",ye,N),P("click",Ie,E),x(L,Q)};J(Xe,L=>{n(f)&&L(Ge)})}d(k),he((L,Q,ge,ke)=>{O.disabled=L,B(_e,` ${T(e()),w(()=>e().saveIntegrity)??""}`),B(Me,` ${Q??""}`),B(Pe,` ${ge??""}`),B(Ne,` ${ke??""}`)},[()=>(n(s),w(()=>!n(s).trim())),()=>(T(e()),w(()=>new Date(e().lastValidation).toLocaleString())),()=>(T(e()),w(()=>e().exp.toLocaleString())),()=>(T(e()),w(()=>e().lifetimeExp.toLocaleString()))]),P("click",I,p),P("click",V,h),P("click",ae,m),P("click",z,$),Ha(K,()=>n(s),L=>D(s,L)),P("click",O,y),P("click",oe,M),x(r,k),Se()}var wr=G('<div class="modal-body svelte-mt7s6l"><p class="svelte-mt7s6l"><strong class="svelte-mt7s6l">WARNING:</strong> This will permanently delete all progress!</p> <p class="svelte-mt7s6l">You will lose:</p> <ul class="svelte-mt7s6l"><li class="svelte-mt7s6l"> </li> <li class="svelte-mt7s6l"> </li> <li class="svelte-mt7s6l">All purchased upgrades</li> <li class="svelte-mt7s6l">All saved games</li></ul> <div class="checkbox-container svelte-mt7s6l"><label class="svelte-mt7s6l"><input type="checkbox" class="svelte-mt7s6l"/> </label></div></div> <div class="modal-footer svelte-mt7s6l"><button class="cancel-button svelte-mt7s6l">Cancel</button> <button class="danger-button svelte-mt7s6l">Continue to Confirmation</button></div>',1),Sr=G('<div class="modal-body svelte-mt7s6l"><p class="svelte-mt7s6l"><strong class="svelte-mt7s6l">FINAL CONFIRMATION</strong></p> <p class="svelte-mt7s6l">Are you absolutely sure you want to reset everything?</p> <p class="final-warning svelte-mt7s6l">This action cannot be undone!</p></div> <div class="modal-footer svelte-mt7s6l"><button class="cancel-button svelte-mt7s6l">Cancel</button> <button class="danger-button-final svelte-mt7s6l">Yes, Delete Everything</button></div>',1),Mr=G('<div class="modal-overlay svelte-mt7s6l" role="button" tabindex="0"><div class="modal svelte-mt7s6l" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-header svelte-mt7s6l"><!> <h2 class="svelte-mt7s6l">Hard Reset Confirmation</h2></div> <!></div></div>'),Er=G('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <p class="svelte-mt7s6l"> </p> <h2 class="svelte-mt7s6l">test buttons</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">EXP</button> <button class="svelte-mt7s6l">Tick</button> <button class="svelte-mt7s6l">100EXP</button></div> <h2 class="svelte-mt7s6l">game settings</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">Dark Mode</button> <!></div> <h2 class="svelte-mt7s6l">danger zone</h2> <div class="container svelte-mt7s6l"><button class="danger-button svelte-mt7s6l"><!> Hard Reset</button></div> <!></div>');function Lr(r,t){we(t,!1);let e=ee(t,"config",12),a=ee(t,"game",12),s=le(!1),l=le(!0),i=le(0);function o(){D(s,!0),D(i,1)}function f(){n(i)===1?D(i,2):n(i)===2&&(a().hardReset(n(l)),D(s,!1),D(i,0),typeof window<"u"&&window.location.reload())}function v(){D(s,!1),D(i,0),D(l,!0)}$e();var m=Er(),$=g(c(m),2),u=c($);d($);var y=g($,4),p=c(y),h=g(p,2),M=g(h,2);d(y);var N=g(y,4),E=c(N),k=g(E,2);{var b=V=>{nr(V,{size:48})},F=V=>{ir(V,{size:48})};J(k,V=>{T(e()),w(()=>e().darkmode)?V(b):V(F,!1)})}d(N);var _=g(N,4),S=c(_),C=c(S);or(C,{size:20,style:"vertical-align: middle; margin-right: 5px;"}),pe(),d(S),d(_);var I=g(_,2);{var U=V=>{var H=Mr(),Z=c(H),te=c(Z),ae=c(te);De(ae,{size:32,color:"#ff6b6b"}),pe(2),d(te);var be=g(te,2);{var z=j=>{var K=wr(),O=R(K),Y=g(c(O),4),q=c(Y),me=c(q);d(q);var re=g(q,2),_e=c(re);d(re),pe(4),d(Y);var ne=g(Y,2),Me=c(ne),fe=c(Me);Tt(fe);var Pe=g(fe);d(Me),d(ne),d(O);var Ce=g(O,2),Ne=c(Ce),ve=g(Ne,2);d(Ce),he(oe=>{B(me,`All EXP (${oe??""} lifetime EXP)`),B(_e,`Your current level (${T(a()),w(()=>a().level)??""})`),B(Pe,` Keep player name (${T(a()),w(()=>a().name)??""})`)},[()=>(T(a()),w(()=>a().lifetimeExp.toFixed(2)))]),Xa(fe,()=>n(l),oe=>D(l,oe)),P("click",Ne,v),P("click",ve,f),x(j,K)},A=j=>{var K=W(),O=R(K);{var Y=q=>{var me=Sr(),re=g(R(me),2),_e=c(re),ne=g(_e,2);d(re),P("click",_e,v),P("click",ne,f),x(q,me)};J(O,q=>{n(i)===2&&q(Y)},!0)}x(j,K)};J(be,j=>{n(i)===1?j(z):j(A,!1)})}d(Z),d(H),P("click",Z,Ga(function(j){Ka.call(this,t,j)})),P("click",H,v),P("keydown",H,j=>j.key==="Escape"&&v()),x(V,H)};J(I,V=>{n(s)&&V(U)})}d(m),he(()=>B(u,`EXP: ${T(a()),w(()=>a().exp)??""} Tick: ${T(a()),w(()=>a().tick)??""} Level: ${T(a()),w(()=>a().level)??""}`)),P("click",p,()=>{a(a().exp++,!0)}),P("click",h,()=>{a(a().tick++,!0)}),P("click",M,()=>{a(a().exp+=100,!0)}),P("click",E,()=>{e(e().darkmode=!e().darkmode,!0)}),P("click",S,o),x(r,m),Se()}var Cr=G(`<div class="story svelte-1wes0v7"><div class="scrollbox svelte-1wes0v7"><h1 class="svelte-1wes0v7">storyline</h1> <ol><li class="svelte-1wes0v7">This is a chapter</li> <li class="svelte-1wes0v7">This is another chapter</li> <li class="svelte-1wes0v7">Revenge of the chapter</li> <li class="svelte-1wes0v7">Hey look, it's a chapter!</li> <li class="svelte-1wes0v7">In Soviet Russia, chapter reads you</li> <li class="svelte-1wes0v7">Chapter Revisited</li> <li class="svelte-1wes0v7">YOLO, so here's a chapter</li> <li class="svelte-1wes0v7">The chapter to end all chapters</li> <li class="svelte-1wes0v7">The final chapter</li></ol> <h2>more stuff</h2> <ul><li class="svelte-1wes0v7">The extra chapter</li> <li class="svelte-1wes0v7">This is another extra chapter</li> <li class="svelte-1wes0v7">The extended chapter</li> <li class="svelte-1wes0v7">The uncut chapter</li> <li class="svelte-1wes0v7">The chapter to not screw everything up</li> <li class="svelte-1wes0v7">Babbitaboopi</li></ul></div></div>`);function Tr(r,t){let e=ee(t,"game",12);e(e());var a=Cr();x(r,a)}var Nr=G('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),Ar=G('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),jr=G("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),Ur=G('<div class="view svelte-1l6ze8i"><!></div>');function zr(r,t){we(t,!1);let e=ee(t,"config",12),a=ee(t,"game",12);$e();var s=Ur(),l=c(s);{var i=f=>{gr(f,{get config(){return e()},set config(v){e(v)},get game(){return a()},set game(v){a(v)},$$legacy:!0})},o=f=>{var v=W(),m=R(v);{var $=y=>{_r(y,{get config(){return e()},set config(p){e(p)},get game(){return a()},set game(p){a(p)},$$legacy:!0})},u=y=>{var p=W(),h=R(p);{var M=E=>{$r(E,{get config(){return e()},set config(k){e(k)},get game(){return a()},set game(k){a(k)},$$legacy:!0})},N=E=>{var k=W(),b=R(k);{var F=S=>{Tr(S,{get game(){return a()},set game(C){a(C)},$$legacy:!0})},_=S=>{var C=W(),I=R(C);{var U=H=>{Lr(H,{get config(){return e()},set config(Z){e(Z)},get game(){return a()},set game(Z){a(Z)},$$legacy:!0})},V=H=>{var Z=W(),te=R(Z);{var ae=z=>{var A=Nr();x(z,A)},be=z=>{var A=W(),j=R(A);{var K=Y=>{var q=Ar();x(Y,q)},O=Y=>{var q=jr();x(Y,q)};J(j,Y=>{a()?Y(O,!1):Y(K)},!0)}x(z,A)};J(te,z=>{T(a()),w(()=>a()&&a().menu==="about")?z(ae):z(be,!1)},!0)}x(H,Z)};J(I,H=>{T(a()),w(()=>a()&&a().menu==="settings")?H(U):H(V,!1)},!0)}x(S,C)};J(b,S=>{T(a()),w(()=>a()&&a().menu==="story")?S(F):S(_,!1)},!0)}x(E,k)};J(h,E=>{T(a()),w(()=>a()&&a().menu==="saves")?E(M):E(N,!1)},!0)}x(y,p)};J(m,y=>{T(a()),w(()=>a()&&a().menu==="upgrades")?y($):y(u,!1)},!0)}x(f,v)};J(l,f=>{T(a()),w(()=>a()&&a().menu==="practice")?f(i):f(o,!1)})}d(s),x(r,s),Se()}var Pr=G('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Ir=G('<footer class="footer svelte-1uha8ag"><!></footer>'),Vr=G('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),Fr=G('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),Dr=G("<div><!></div>");function Xr(r,t){we(t,!1);let e=le(new Wa("prussian-blue",!0)),a=le();Ht(()=>{D(a,new Ya),setTimeout(()=>{n(a)&&(n(a).loadFromLocalStorage()||n(a).loadFromCookies(),D(a,n(a)))},100);const v=setInterval(()=>{n(a)&&n(a).autoSave()},15e3);return()=>{clearInterval(v)}});let s=le("");tt(()=>n(e),()=>{D(s,n(e).getTheme())}),wt(),$e();var l=Dr();Xt(v=>{var m=Pr();Na.title="TomeClicker",pe(6),x(v,m)});var i=c(l);{var o=v=>{var m=Vr(),$=R(m);{var u=N=>{Za(N,{get game(){return n(a)},set game(E){D(a,E)},$$legacy:!0})};J($,N=>{n(a),w(()=>n(a).showHeader())&&N(u)})}var y=g($,2),p=c(y);zr(p,{get game(){return n(a)},set game(N){D(a,N)},get config(){return n(e)},set config(N){D(e,N)},$$legacy:!0}),d(y);var h=g(y,2);{var M=N=>{var E=Ir(),k=c(E);ur(k,{get game(){return n(a)},set game(b){D(a,b)},$$legacy:!0}),d(E),x(N,E)};J(h,N=>{n(a),w(()=>n(a).showMenu())&&N(M)})}x(v,m)},f=v=>{var m=Fr();x(v,m)};J(i,v=>{n(a)?v(o):v(f,!1)})}d(l),he(()=>ue(l,1,`app ${n(s)??""}`,"svelte-1uha8ag")),x(r,l),Se()}export{Xr as component};
