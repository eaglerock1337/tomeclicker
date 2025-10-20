import"../chunks/DsnmJJEf.js";import{i as Ge}from"../chunks/BMhqCjiF.js";import{i as Gt,a as Kt,c as Wt,d as Ke,n as Jt,b as Yt,s as U,e as he,o as Qt,f as Zt}from"../chunks/Boo9GOCe.js";import{w as q,x as He,aU as ea,aV as ta,aW as aa,v as We,C as Qe,D as ze,F as je,G as Mt,K as Ee,U as Et,J as dt,h as n,N as ra,y as sa,H as ia,z as ht,A as Re,B as Ie,a9 as la,aC as na,az as Ct,ap as Tt,aQ as Ce,a0 as mt,a8 as _t,I as ut,aX as Ze,aY as st,ag as qe,aZ as et,a_ as oa,am as ca,a$ as va,ay as da,b0 as ua,S as At,au as Nt,b1 as Ut,a7 as fa,b2 as pa,b3 as ga,E as ha,b4 as ma,aB as _a,aP as ft,b5 as ba,b6 as ya,ar as xa,b7 as jt,b8 as ka,b9 as Sa,ba as wa,bb as La,bc as $a,bd as Ma,be as Ea,bf as Ca,bg as Ta,aO as Aa,e as L,a5 as Na,bh as Ua,p as Le,l as B,n as c,o,q as p,aS as pt,t as re,a as k,m as $e,bi as ja,i as I,c as H,f as F,bj as Ia,bk as Xe,Q as J,bl as tt,aT as Ue,ah as Se,aR as Ve,bm as Pa,a1 as It,bn as za}from"../chunks/Bd7guJkQ.js";import{i as W,l as ue,p as ce,s as be}from"../chunks/BRTTB1Vv.js";function Da(r,e,t){q&&He();var a=r,s=Et,l,i,v=null,m=ea()?ta:aa;function d(){l&&dt(l),v!==null&&(v.lastChild.remove(),a.before(v),v=null),l=i}We(()=>{if(m(s,s=e())){var b=a,g=Mt();g&&(v=document.createDocumentFragment(),v.append(b=Qe())),i=ze(()=>t(b)),g?je.add_callback(d):d()}}),q&&(a=Ee)}function Pt(r,e){return e}function Va(r,e,t){for(var a=r.items,s=[],l=e.length,i=0;i<l;i++)va(e[i].e,s,!0);var v=l>0&&s.length===0&&t!==null;if(v){var m=t.parentNode;da(m),m.append(t),a.clear(),we(r,e[0].prev,e[l-1].next)}ua(s,()=>{for(var d=0;d<l;d++){var b=e[d];v||(a.delete(b.k),we(r,b.prev,b.next)),qe(b.e,!v)}})}function gt(r,e,t,a,s,l=null){var i=r,v={flags:e,items:new Map,first:null},m=(e&Ut)!==0;if(m){var d=r;i=q?Re(Nt(d)):d.appendChild(Qe())}q&&He();var b=null,g=!1,f=new Map,$=ra(()=>{var S=t();return Tt(S)?S:S==null?[]:Ct(S)}),h,x;function y(){qa(x,h,v,f,i,s,e,a,t),l!==null&&(h.length===0?b?ut(b):b=ze(()=>l(i)):b!==null&&dt(b,()=>{b=null}))}We(()=>{x??=At,h=n($);var S=h.length;if(g&&S===0)return;g=S===0;let C=!1;if(q){var j=sa(i)===ia;j!==(S===0)&&(i=ht(),Re(i),Ie(!1),C=!0)}if(q){for(var M=null,A,u=0;u<S;u++){if(Ee.nodeType===la&&Ee.data===na){i=Ee,C=!0,Ie(!1);break}var _=h[u],E=a(_,u);A=vt(Ee,v,M,null,_,E,u,s,e,t),v.items.set(E,A),M=A}S>0&&Re(ht())}if(q)S===0&&l&&(b=ze(()=>l(i)));else if(Mt()){var R=new Set,N=je;for(u=0;u<S;u+=1){_=h[u],E=a(_,u);var P=v.items.get(E)??f.get(E);P?(e&(et|Ze))!==0&&zt(P,_,u,e):(A=vt(null,v,null,null,_,E,u,s,e,t,!0),f.set(E,A)),R.add(E)}for(const[z,ae]of v.items)R.has(z)||N.skipped_effects.add(ae.e);N.add_callback(y)}else y();C&&Ie(!0),n($)}),q&&(i=Ee)}function qa(r,e,t,a,s,l,i,v,m){var d=(i&pa)!==0,b=(i&(et|Ze))!==0,g=e.length,f=t.items,$=t.first,h=$,x,y=null,S,C=[],j=[],M,A,u,_;if(d)for(_=0;_<g;_+=1)M=e[_],A=v(M,_),u=f.get(A),u!==void 0&&(u.a?.measure(),(S??=new Set).add(u));for(_=0;_<g;_+=1){if(M=e[_],A=v(M,_),u=f.get(A),u===void 0){var E=a.get(A);if(E!==void 0){a.delete(A),f.set(A,E);var R=y?y.next:h;we(t,y,E),we(t,E,R),it(E,R,s),y=E}else{var N=h?h.e.nodes_start:s;y=vt(N,t,y,y===null?t.first:y.next,M,A,_,l,i,m)}f.set(A,y),C=[],j=[],h=y.next;continue}if(b&&zt(u,M,_,i),(u.e.f&st)!==0&&(ut(u.e),d&&(u.a?.unfix(),(S??=new Set).delete(u))),u!==h){if(x!==void 0&&x.has(u)){if(C.length<j.length){var P=j[0],z;y=P.prev;var ae=C[0],se=C[C.length-1];for(z=0;z<C.length;z+=1)it(C[z],P,s);for(z=0;z<j.length;z+=1)x.delete(j[z]);we(t,ae.prev,se.next),we(t,y,ae),we(t,se,P),h=P,y=se,_-=1,C=[],j=[]}else x.delete(u),it(u,h,s),we(t,u.prev,u.next),we(t,u,y===null?t.first:y.next),we(t,y,u),y=u;continue}for(C=[],j=[];h!==null&&h.k!==A;)(h.e.f&st)===0&&(x??=new Set).add(h),j.push(h),h=h.next;if(h===null)continue;u=h}C.push(u),y=u,h=u.next}if(h!==null||x!==void 0){for(var Y=x===void 0?[]:Ct(x);h!==null;)(h.e.f&st)===0&&Y.push(h),h=h.next;var O=Y.length;if(O>0){var T=(i&Ut)!==0&&g===0?s:null;if(d){for(_=0;_<O;_+=1)Y[_].a?.measure();for(_=0;_<O;_+=1)Y[_].a?.fix()}Va(t,Y,T)}}d&&fa(()=>{if(S!==void 0)for(u of S)u.a?.apply()}),r.first=t.first&&t.first.e,r.last=y&&y.e;for(var w of a.values())qe(w.e);a.clear()}function zt(r,e,t,a){(a&et)!==0&&_t(r.v,e),(a&Ze)!==0?_t(r.i,t):r.i=t}function vt(r,e,t,a,s,l,i,v,m,d,b){var g=(m&et)!==0,f=(m&oa)===0,$=g?f?Ce(s,!1,!1):mt(s):s,h=(m&Ze)===0?i:mt(i),x={i:h,v:$,k:l,a:null,e:null,prev:t,next:a};try{if(r===null){var y=document.createDocumentFragment();y.append(r=Qe())}return x.e=ze(()=>v(r,$,h,d),q),x.e.prev=t&&t.e,x.e.next=a&&a.e,t===null?b||(e.first=x):(t.next=x,t.e.next=x.e),a!==null&&(a.prev=x,a.e.prev=x.e),x}finally{}}function it(r,e,t){for(var a=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,l=r.e.nodes_start;l!==null&&l!==a;){var i=ca(l);s.before(l),l=i}}function we(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function me(r,e,t,a,s){q&&He();var l=e.$$slots?.[t],i=!1;l===!0&&(l=e.children,i=!0),l===void 0||l(r,i?()=>a:a)}function Oa(r,e,t,a,s,l){let i=q;q&&He();var v,m,d=null;q&&Ee.nodeType===ga&&(d=Ee,He());var b=q?Ee:r,g;We(()=>{const f=e()||null;var $=ma;f!==v&&(g&&(f===null?dt(g,()=>{g=null,m=null}):f===m?ut(g):qe(g)),f&&f!==m&&(g=ze(()=>{if(d=q?d:document.createElementNS($,f),_a(d,d),a){q&&Gt(f)&&d.append(document.createComment(""));var h=q?Nt(d):d.appendChild(Qe());q&&(h===null?Ie(!1):Re(h)),a(d,h)}At.nodes_end=d,b.before(d)})),v=f,v&&(m=v))},ha),i&&(Ie(!0),Re(b))}function Fa(r,e){var t=void 0,a;We(()=>{t!==(t=e())&&(a&&(qe(a),a=null),t&&(a=ze(()=>{ft(()=>t(r))})))})}function Dt(r){var e,t,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=Dt(r[e]))&&(a&&(a+=" "),a+=t)}else for(t in r)r[t]&&(a&&(a+=" "),a+=t);return a}function Ra(){for(var r,e,t=0,a="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=Dt(r))&&(a&&(a+=" "),a+=e);return a}function Ba(r){return typeof r=="object"?Ra(r):r??""}const bt=[...` 	
\r\f \v\uFEFF`];function Ha(r,e,t){var a=r==null?"":""+r;if(e&&(a=a?a+" "+e:e),t){for(var s in t)if(t[s])a=a?a+" "+s:s;else if(a.length)for(var l=s.length,i=0;(i=a.indexOf(s,i))>=0;){var v=i+l;(i===0||bt.includes(a[i-1]))&&(v===a.length||bt.includes(a[v]))?a=(i===0?"":a.substring(0,i))+a.substring(v+1):i=v}}return a===""?null:a}function yt(r,e=!1){var t=e?" !important;":";",a="";for(var s in r){var l=r[s];l!=null&&l!==""&&(a+=" "+s+": "+l+t)}return a}function lt(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Xa(r,e){if(e){var t="",a,s;if(Array.isArray(e)?(a=e[0],s=e[1]):a=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,i=0,v=!1,m=[];a&&m.push(...Object.keys(a).map(lt)),s&&m.push(...Object.keys(s).map(lt));var d=0,b=-1;const x=r.length;for(var g=0;g<x;g++){var f=r[g];if(v?f==="/"&&r[g-1]==="*"&&(v=!1):l?l===f&&(l=!1):f==="/"&&r[g+1]==="*"?v=!0:f==='"'||f==="'"?l=f:f==="("?i++:f===")"&&i--,!v&&l===!1&&i===0){if(f===":"&&b===-1)b=g;else if(f===";"||g===x-1){if(b!==-1){var $=lt(r.substring(d,b).trim());if(!m.includes($)){f!==";"&&g++;var h=r.substring(d,g).trim();t+=" "+h+";"}}d=g+1,b=-1}}}}return a&&(t+=yt(a)),s&&(t+=yt(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function le(r,e,t,a,s,l){var i=r.__className;if(q||i!==t||i===void 0){var v=Ha(t,a,l);(!q||v!==r.getAttribute("class"))&&(v==null?r.removeAttribute("class"):e?r.className=v:r.setAttribute("class",v)),r.__className=t}else if(l&&s!==l)for(var m in l){var d=!!l[m];(s==null||d!==!!s[m])&&r.classList.toggle(m,d)}return l}function nt(r,e={},t,a){for(var s in t){var l=t[s];e[s]!==l&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,l,a))}}function Vt(r,e,t,a){var s=r.__style;if(q||s!==e){var l=Xa(e,a);(!q||l!==r.getAttribute("style"))&&(l==null?r.removeAttribute("style"):r.style.cssText=l),r.__style=e}else a&&(Array.isArray(a)?(nt(r,t?.[0],a[0]),nt(r,t?.[1],a[1],"important")):nt(r,t,a));return a}function Ye(r,e,t=!1){if(r.multiple){if(e==null)return;if(!Tt(e))return ba();for(var a of r.options)a.selected=e.includes(Be(a));return}for(a of r.options){var s=Be(a);if(ya(s,e)){a.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function qt(r){var e=new MutationObserver(()=>{Ye(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),xa(()=>{e.disconnect()})}function Ga(r,e,t=e){var a=!0;jt(r,"change",s=>{var l=s?"[selected]":":checked",i;if(r.multiple)i=[].map.call(r.querySelectorAll(l),Be);else{var v=r.querySelector(l)??r.querySelector("option:not([disabled])");i=v&&Be(v)}t(i)}),ft(()=>{var s=e();if(Ye(r,s,a),a&&s===void 0){var l=r.querySelector(":checked");l!==null&&(s=Be(l),t(s))}r.__value=s,a=!1}),qt(r)}function Be(r){return"__value"in r?r.__value:r.value}const Oe=Symbol("class"),Fe=Symbol("style"),Ot=Symbol("is custom element"),Ft=Symbol("is html");function Ka(r){if(q){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var a=r.value;Pe(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var s=r.checked;Pe(r,"checked",null),r.checked=s}}};r.__on_r=t,La(t),$a()}}function Wa(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Pe(r,e,t,a){var s=Rt(r);q&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[Ca]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Bt(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Ja(r,e,t,a,s=!1,l=!1){if(q&&s&&r.tagName==="INPUT"){var i=r,v=i.type==="checkbox"?"defaultChecked":"defaultValue";v in t||Ka(i)}var m=Rt(r),d=m[Ot],b=!m[Ft];let g=q&&d;g&&Ie(!1);var f=e||{},$=r.tagName==="OPTION";for(var h in e)h in t||(t[h]=null);t.class?t.class=Ba(t.class):t[Oe]&&(t.class=null),t[Fe]&&(t.style??=null);var x=Bt(r);for(const u in t){let _=t[u];if($&&u==="value"&&_==null){r.value=r.__value="",f[u]=_;continue}if(u==="class"){var y=r.namespaceURI==="http://www.w3.org/1999/xhtml";le(r,y,_,a,e?.[Oe],t[Oe]),f[u]=_,f[Oe]=t[Oe];continue}if(u==="style"){Vt(r,_,e?.[Fe],t[Fe]),f[u]=_,f[Fe]=t[Fe];continue}var S=f[u];if(!(_===S&&!(_===void 0&&r.hasAttribute(u)))){f[u]=_;var C=u[0]+u[1];if(C!=="$$")if(C==="on"){const E={},R="$$"+u;let N=u.slice(2);var j=Yt(N);if(Kt(N)&&(N=N.slice(0,-7),E.capture=!0),!j&&S){if(_!=null)continue;r.removeEventListener(N,f[R],E),f[R]=null}if(_!=null)if(j)r[`__${N}`]=_,Ke([N]);else{let P=function(z){f[u].call(this,z)};f[R]=Wt(N,r,P,E)}else j&&(r[`__${N}`]=void 0)}else if(u==="style")Pe(r,u,_);else if(u==="autofocus")wa(r,!!_);else if(!d&&(u==="__value"||u==="value"&&_!=null))r.value=r.__value=_;else if(u==="selected"&&$)Wa(r,_);else{var M=u;b||(M=Jt(M));var A=M==="defaultValue"||M==="defaultChecked";if(_==null&&!d&&!A)if(m[u]=null,M==="value"||M==="checked"){let E=r;const R=e===void 0;if(M==="value"){let N=E.defaultValue;E.removeAttribute(M),E.defaultValue=N,E.value=E.__value=R?N:null}else{let N=E.defaultChecked;E.removeAttribute(M),E.defaultChecked=N,E.checked=R?N:!1}}else r.removeAttribute(u);else A||x.includes(M)&&(d||typeof _!="string")?(r[M]=_,M in m&&(m[M]=Et)):typeof _!="function"&&Pe(r,M,_)}}}return g&&Ie(!0),f}function xt(r,e,t=[],a=[],s,l=!1,i=!1){ka(t,a,v=>{var m=void 0,d={},b=r.nodeName==="SELECT",g=!1;if(We(()=>{var $=e(...v.map(n)),h=Ja(r,m,$,s,l,i);g&&b&&"value"in $&&Ye(r,$.value);for(let y of Object.getOwnPropertySymbols(d))$[y]||qe(d[y]);for(let y of Object.getOwnPropertySymbols($)){var x=$[y];y.description===Sa&&(!m||x!==m[y])&&(d[y]&&qe(d[y]),d[y]=ze(()=>Fa(r,()=>x))),h[y]=x}m=h}),b){var f=r;ft(()=>{Ye(f,m.value,!0),qt(f)})}g=!0})}function Rt(r){return r.__attributes??={[Ot]:r.nodeName.includes("-"),[Ft]:r.namespaceURI===Ma}}var kt=new Map;function Bt(r){var e=r.getAttribute("is")||r.nodeName,t=kt.get(e);if(t)return t;kt.set(e,t=[]);for(var a,s=r,l=Element.prototype;l!==s;){a=Ta(s);for(var i in a)a[i].set&&t.push(i);s=Ea(s)}return t}function Ya(r,e,t=e){var a=new WeakSet;jt(r,"input",async s=>{var l=s?r.defaultValue:r.value;if(l=ot(r)?ct(l):l,t(l),je!==null&&a.add(je),await Aa(),l!==(l=e())){var i=r.selectionStart,v=r.selectionEnd;r.value=l??"",v!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(v,r.value.length))}}),(q&&r.defaultValue!==r.value||L(e)==null&&r.value)&&(t(ot(r)?ct(r.value):r.value),je!==null&&a.add(je)),Na(()=>{var s=e();if(r===document.activeElement){var l=Ua??je;if(a.has(l))return}ot(r)&&s===ct(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function ot(r){var e=r.type;return e==="number"||e==="range"}function ct(r){return r===""?null:+r}const at={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function Qa(){return Object.keys(at)}function Za(r){return at[r]?.displayName||r}function St(r){return r in at}class er{displayMode;theme;constructor(e="prussian-blue",t="system"){this.displayMode=t,this.theme=St(e)?e:"prussian-blue"}getTheme(){const e=this.getEffectiveShade();return`${this.theme}-${e}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(e){return St(e)?(this.theme=e,!0):!1}setDisplayMode(e){this.displayMode=e}getAvailableThemes(){return Object.keys(at)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(e){this.displayMode=e?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}}class tr{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&t.id!=="transcendent-focus"&&(this.clickMultiplier+=t.effectValue*t.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const e=this.upgrades["transcendent-focus"];e&&e.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,e.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const e of Object.values(this.upgrades))if(this.canPurchaseUpgrade(e.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(e){const t=this.initializeUpgrades();for(const a in t)e[a]&&(t[a].currentLevel=e[a].currentLevel);this.upgrades=t}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&(e+=t.effectValue*t.currentLevel);return e}markIntegrityViolation(e){this.saveIntegrity=`compromised-${e}-${Date.now()}`,console.warn(`Game integrity violation detected: ${e}`)}addExp(e){this.exp+=e,this.lifetimeExp+=e}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(e){const t=this.upgrades[e];return t?e==="transcendent-focus"?t.baseCost*Math.pow(100,t.currentLevel):Math.floor(t.baseCost*Math.pow(t.costMultiplier,t.currentLevel)):0}canAffordUpgrade(e){const t=this.getUpgradeCost(e);return this.exp>=t}canPurchaseUpgrade(e){const t=this.upgrades[e];return t?this.canAffordUpgrade(e)&&t.currentLevel<t.maxLevel:!1}purchaseUpgrade(e){if(!this.canPurchaseUpgrade(e))return!1;const t=this.upgrades[e],a=this.getUpgradeCost(e);return this.exp-=a,t.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(e){let t=0;for(let a=0;a<e.length;a++){const s=e.charCodeAt(a);t=(t<<5)-t+s,t=t&t}return t.toString(36)+this._validationKey}encryptSave(e){const t="tomeclicker-save-key";let a="";for(let s=0;s<e.length;s++)a+=String.fromCharCode(e.charCodeAt(s)^t.charCodeAt(s%t.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(e){try{let t;typeof atob>"u"?t=Buffer.from(e,"base64").toString():t=atob(e);const a="tomeclicker-save-key";let s="";for(let l=0;l<t.length;l++)s+=String.fromCharCode(t.charCodeAt(l)^a.charCodeAt(l%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(e=!0){const t={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(t);if(e){const s=this.generateSaveHash(a),l=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:l,hash:s,version:"0.1.0"})}else return JSON.stringify({...t,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(e){try{const t=JSON.parse(e);let a,s="";if(t.encrypted===!1)a=t,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(t.encrypted===!0){const l=this.decryptSave(t.data);a=JSON.parse(l)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(t){return{success:!1,error:`Failed to import save: ${t}`}}}validateSaveData(e){return typeof e.name=="string"&&typeof e.exp=="number"&&typeof e.lifetimeExp=="number"&&(typeof e.level=="number"||e.level===void 0)&&typeof e.clickMultiplier=="number"&&typeof e.upgrades=="object"&&e.exp<=e.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const e=this.exportSave(!0),t=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(e)}; expires=${t}; path=/; SameSite=Lax`}catch(e){console.error("Failed to save to cookies:",e)}}loadFromCookies(){if(typeof document>"u")return!1;try{const e=document.cookie.split(";");for(const t of e){const[a,s]=t.trim().split("=");if(a==="tomeclicker_save"&&s){const l=this.importSave(decodeURIComponent(s));return l.success?!0:(console.error("Failed to load save from cookies:",l.error),!1)}}return!1}catch(e){return console.error("Error loading from cookies:",e),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const e=this.exportSave(!0);localStorage.setItem("tomeclicker_save",e)}catch(e){console.error("Failed to save to localStorage:",e)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const e=localStorage.getItem("tomeclicker_save");if(e){const t=this.importSave(e);return t.success?!0:(console.error("Failed to load save from localStorage:",t.error),!1)}return!1}catch(e){return console.error("Error loading from localStorage:",e),!1}}autoSave(){this.saveToLocalStorage(),this.saveToCookies()}hardReset(e=!0){const t=e?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=t,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var ar=B('<div class="progress-container svelte-1xm1ks6"><div class="progress-bar svelte-1xm1ks6"></div></div>'),rr=B('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function sr(r,e){Le(e,!0);const t=pt(()=>{if(e.game.level<2)return null;e.game.exp;const g=e.game.lifetimeExp,f=e.game.level;return g<50?{progress:g/50}:f<3?{progress:f/3}:f<5?{progress:f/5}:f<7?{progress:f/7}:f<10?{progress:f/10}:null});var a=rr(),s=c(a),l=c(s),i=c(l);o(l);var v=p(l,2),m=c(v);o(v),o(s);var d=p(s,2);{var b=g=>{var f=ar(),$=c(f);o(f),re(()=>Vt($,`width: ${n(t).progress*100}%`)),k(g,f)};W(d,g=>{n(t)&&g(b)})}o(a),re(g=>{U(i,`EXP: ${g??""}`),U(m,`Level: ${e.game.level??""}`)},[()=>Math.floor(e.game.exp).toLocaleString()]),k(r,a),$e()}/**
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
 */const ir={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var lr=ja("<svg><!><!></svg>");function ye(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]),a=ue(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Le(e,!1);let s=ce(e,"name",8,void 0),l=ce(e,"color",8,"currentColor"),i=ce(e,"size",8,24),v=ce(e,"strokeWidth",8,2),m=ce(e,"absoluteStrokeWidth",8,!1),d=ce(e,"iconNode",24,()=>[]);const b=(...h)=>h.filter((x,y,S)=>!!x&&S.indexOf(x)===y).join(" ");Ge();var g=lr();xt(g,(h,x)=>({...ir,...a,width:i(),height:i(),stroke:l(),"stroke-width":h,class:x}),[()=>(I(m()),I(v()),I(i()),L(()=>m()?Number(v())*24/Number(i()):v())),()=>(I(s()),I(t),L(()=>b("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var f=c(g);gt(f,1,d,Pt,(h,x)=>{var y=pt(()=>Ia(n(x),2));let S=()=>n(y)[0],C=()=>n(y)[1];var j=H(),M=F(j);Oa(M,S,!0,(A,u)=>{xt(A,()=>({...C()}))}),k(h,j)});var $=p(f);me($,e,"default",{}),o(g),k(r,g),$e()}function nr(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ye(r,be({name:"circle-check-big"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function or(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ye(r,be({name:"circle-question-mark"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function wt(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ye(r,be({name:"download"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function cr(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ye(r,be({name:"info"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function Ht(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];ye(r,be({name:"mouse-pointer"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function Xt(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ye(r,be({name:"save"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function vr(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ye(r,be({name:"settings"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function dr(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ye(r,be({name:"square-pen"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function ur(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ye(r,be({name:"trending-up"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function Je(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ye(r,be({name:"triangle-alert"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}function Lt(r,e){const t=ue(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];ye(r,be({name:"upload"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=H(),v=F(i);me(v,e,"default",{}),k(s,i)},$$slots:{default:!0}}))}var fr=B('<button class="svelte-igdjqh"><p><!></p></button>'),pr=B('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function gr(r,e){Le(e,!1);const t=Ce();let a=ce(e,"game",12);Xe(()=>I(a()),()=>{J(t,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(V=>a().canAffordUpgrade(V.id))))}),tt(),Ge();var s=pr(),l=c(s),i=c(l),v=c(i,!0);o(i),o(l);var m=p(l,2),d=c(m),b=c(d);let g;var f=c(b);Ht(f,{size:24}),o(b),o(d);var $=p(d,2);{var h=V=>{var X=fr(),Q=c(X);let te;var ie=c(Q);ur(ie,{size:24}),o(Q),o(X),re(ne=>te=le(Q,1,"svelte-igdjqh",null,te,ne),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&n(t)})]),he("click",X,()=>a(a().menu="upgrades",!0)),k(V,X)};W($,V=>{I(a()),L(()=>a().showUpgrades())&&V(h)})}var x=p($,2),y=c(x);let S;var C=c(y);dr(C,{size:24}),o(y),o(x);var j=p(x,2),M=c(j);let A;var u=c(M);or(u,{size:24}),o(M),o(j);var _=p(j,2),E=c(_);let R;var N=c(E);Xt(N,{size:24}),o(E),o(_);var P=p(_,2),z=c(P);let ae;var se=c(z);vr(se,{size:24}),o(z),o(P);var Y=p(P,2),O=c(Y);let T;var w=c(O);cr(w,{size:24}),o(O),o(Y),o(m),o(s),re((V,X,Q,te,ie,ne)=>{U(v,(I(a()),L(()=>a().menu))),g=le(b,1,"svelte-igdjqh",null,g,V),S=le(y,1,"svelte-igdjqh",null,S,X),A=le(M,1,"svelte-igdjqh",null,A,Q),R=le(E,1,"svelte-igdjqh",null,R,te),ae=le(z,1,"svelte-igdjqh",null,ae,ie),T=le(O,1,"svelte-igdjqh",null,T,ne)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),he("click",d,()=>a(a().menu="practice",!0)),he("click",x,()=>a(a().menu="story",!0)),he("click",j,()=>a(a().menu="help",!0)),he("click",_,()=>a(a().menu="saves",!0)),he("click",P,()=>a(a().menu="settings",!0)),he("click",Y,()=>a(a().menu="about",!0)),k(r,s),$e()}function $t(r,e){if(!e())return;const t=e().getClickValue();e().addExp(t),e(e())}var hr=B('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div></div>');function mr(r,e){Le(e,!0);let t=ce(e,"game",15),a=pt(()=>t()?t().updateClickText():"Loading...");var s=hr(),l=c(s),i=c(l);i.__click=[$t,t],i.__touchstart=[$t,t];var v=c(i),m=c(v);Ht(m,{size:48});var d=p(m,2,!0);o(v),o(i),o(l),o(s),re(()=>U(d,n(a))),k(r,s),$e()}Ke(["click","touchstart"]);var _r=B('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),br=B('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),yr=B('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),xr=B('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function kr(r,e){Le(e,!1);const t=Ce(),a=Ce();let s=ce(e,"game",8),l=ce(e,"config",8),i=Ce(null);function v(T){J(i,T)}function m(){n(i)&&s().purchaseUpgrade(n(i).id)&&(J(i,s().upgrades[n(i).id]),s().autoSave())}function d(T){return T.toLocaleString()}function b(){s().levelUp()&&s().autoSave()}l(),Xe(()=>I(s()),()=>{J(t,Object.values(s().upgrades).filter(T=>T.id!=="transcendent-focus"))}),Xe(()=>I(s()),()=>{J(a,s().upgrades["transcendent-focus"])}),tt(),Ge();var g=xr(),f=p(c(g),2),$=c(f),h=c($);let x;var y=p(c(h),2),S=c(y);o(y);var C=p(y,2),j=c(C);o(C),o(h);var M=p(h,2);let A;var u=c(M),_=c(u,!0);o(u);var E=p(u,2),R=c(E);o(E);var N=p(E,2),P=c(N);o(N),o(M);var z=p(M,2);gt(z,1,()=>n(t),T=>T.id,(T,w)=>{var V=_r();let X;var Q=c(V),te=c(Q,!0);o(Q);var ie=p(Q,2),ne=c(ie);o(ie);var ve=p(ie,2),fe=c(ve);o(ve);var de=p(ve,2),Ne=c(de);{var G=D=>{var K=Ue();re(ee=>U(K,`+${ee??""}% click value per level`),[()=>(n(w),L(()=>(n(w).effectValue*100).toFixed(0)))]),k(D,K)},Z=D=>{var K=H(),ee=F(K);{var pe=_e=>{var Me=Ue();re(oe=>U(Me,`+${oe??""}% all EXP per level`),[()=>(n(w),L(()=>(n(w).effectValue*100).toFixed(0)))]),k(_e,Me)},ge=_e=>{var Me=H(),oe=F(Me);{var xe=Te=>{var De=Ue();re(Ae=>U(De,`+${Ae??""}% click value per level`),[()=>(n(w),L(()=>(n(w).effectValue*100).toFixed(0)))]),k(Te,De)},ke=Te=>{var De=Ue("Enhanced efficiency");k(Te,De)};W(oe,Te=>{n(w),L(()=>n(w).effectType==="clickMultiplier")?Te(xe):Te(ke,!1)},!0)}k(_e,Me)};W(ee,_e=>{n(w),L(()=>n(w).id==="deep-meditation")?_e(pe):_e(ge,!1)},!0)}k(D,K)};W(Ne,D=>{n(w),L(()=>n(w).id==="faster-clicking")?D(G):D(Z,!1)})}o(de),o(V),re((D,K,ee)=>{X=le(V,1,"upgrade-btn svelte-xd3x4d",null,X,D),Pe(V,"aria-label",`Select ${n(w),L(()=>n(w).name)??""} upgrade. Level ${n(w),L(()=>n(w).currentLevel)??""} of ${n(w),L(()=>n(w).maxLevel)??""}. Cost: ${K??""} EXP`),U(te,(n(w),L(()=>n(w).name))),U(ne,`Level ${n(w),L(()=>n(w).currentLevel)??""}/${n(w),L(()=>n(w).maxLevel)??""}`),U(fe,`${ee??""} EXP`)},[()=>({selected:n(i)?.id===n(w).id,affordable:s().canAffordUpgrade(n(w).id),maxed:n(w).currentLevel>=n(w).maxLevel}),()=>(I(s()),n(w),L(()=>d(s().getUpgradeCost(n(w).id)))),()=>(I(s()),n(w),L(()=>d(s().getUpgradeCost(n(w).id))))]),he("click",V,()=>v(n(w))),k(T,V)}),Se(2),o($);var ae=p($,2),se=c(ae);{var Y=T=>{var w=br(),V=F(w),X=c(V),Q=c(X,!0);o(X);var te=p(X,2);o(V);var ie=p(V,2),ne=c(ie),ve=c(ne),fe=c(ve,!0);o(ve);var de=p(ve,2),Ne=p(c(de));o(de);var G=p(de,2),Z=p(c(G));o(G);var D=p(G,2),K=p(c(D));o(D),o(ne);var ee=p(ne,2),pe=c(ee),ge=c(pe);{var _e=oe=>{var xe=Ue("MAX LEVEL");k(oe,xe)},Me=oe=>{var xe=H(),ke=F(xe);{var Te=Ae=>{var rt=Ue("CANNOT AFFORD");k(Ae,rt)},De=Ae=>{var rt=Ue("PURCHASE");k(Ae,rt)};W(ke,Ae=>{I(s()),n(i),L(()=>!s().canAffordUpgrade(n(i).id))?Ae(Te):Ae(De,!1)},!0)}k(oe,xe)};W(ge,oe=>{n(i),L(()=>n(i).currentLevel>=n(i).maxLevel)?oe(_e):oe(Me,!1)})}o(pe),o(ee),o(ie),re((oe,xe)=>{U(Q,(n(i),L(()=>n(i).name))),U(fe,(n(i),L(()=>n(i).description))),U(Ne,` ${n(i),L(()=>n(i).effect)??""}`),U(Z,` ${oe??""} EXP`),U(K,` ${n(i),L(()=>n(i).currentLevel)??""}/${n(i),L(()=>n(i).maxLevel)??""}`),pe.disabled=xe},[()=>(I(s()),n(i),L(()=>d(s().getUpgradeCost(n(i).id)))),()=>(I(s()),n(i),L(()=>!s().canPurchaseUpgrade(n(i).id)))]),he("click",te,()=>J(i,null)),he("click",pe,m),k(T,w)},O=T=>{var w=yr();k(T,w)};W(se,T=>{n(i)?T(Y):T(O,!1)})}o(ae),o(f),o(g),re((T,w,V,X,Q,te,ie)=>{x=le(h,1,"upgrade-btn special-btn svelte-xd3x4d",null,x,T),h.disabled=w,Pe(h,"aria-label",`Level up from ${I(s()),L(()=>s().level)??""} to ${I(s()),L(()=>s().level+1)??""}. Cost: ${V??""} EXP`),U(S,`Level ${I(s()),L(()=>s().level)??""} → ${I(s()),L(()=>s().level+1)??""}`),U(j,`${X??""} EXP`),A=le(M,1,"upgrade-btn special-btn svelte-xd3x4d",null,A,Q),M.disabled=(n(a),L(()=>n(a).currentLevel>=n(a).maxLevel)),Pe(M,"aria-label",`Select ${n(a),L(()=>n(a).name)??""} upgrade. Level ${n(a),L(()=>n(a).currentLevel)??""} of ${n(a),L(()=>n(a).maxLevel)??""}. Cost: ${te??""} EXP`),U(_,(n(a),L(()=>n(a).name))),U(R,`Level ${n(a),L(()=>n(a).currentLevel)??""}/${n(a),L(()=>n(a).maxLevel)??""}`),U(P,`${ie??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(I(s()),L(()=>!s().canLevelUp())),()=>(I(s()),L(()=>d(s().getLevelUpCost()))),()=>(I(s()),L(()=>d(s().getLevelUpCost()))),()=>({selected:n(i)?.id===n(a).id,affordable:s().canAffordUpgrade(n(a).id),maxed:n(a).currentLevel>=n(a).maxLevel}),()=>(I(s()),n(a),L(()=>d(s().getUpgradeCost(n(a).id)))),()=>(I(s()),n(a),L(()=>d(s().getUpgradeCost(n(a).id))))]),he("click",h,b),he("click",M,()=>v(n(a))),k(r,g),$e()}function Sr(r,e,t,a){try{const s=e().exportSave(!0);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function wr(r,e,t,a){try{const s=e().exportSave(!1);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Lr(r,e,t,a){if(!n(e).trim()){t("Please paste save data first","error");return}const s=a().importSave(n(e).trim());s.success?(t(s.warning||"Save imported successfully!",s.warning?"warning":"success"),J(e,""),a(a()),a().autoSave()):t(s.error||"Failed to import save","error")}function $r(r,e,t){try{e().autoSave(),t("Game saved to browser storage!","success")}catch{t("Failed to save game","error")}}function Mr(r,e,t){try{const a=e().loadFromLocalStorage(),s=a?!1:e().loadFromCookies();a||s?(t(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),e(e())):t("No save found in browser storage","warning")}catch{t("Failed to load game","error")}}function Er(r,e){J(e,!0)}function Cr(r,e){J(e,!1)}function Tr(r,e,t,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),J(t,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Ar=B("<div><!> </div>"),Nr=B('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),Ur=B('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function jr(r,e){Le(e,!0);let t=ce(e,"game",15),a=Ve(""),s=Ve(""),l=Ve("success"),i=Ve(!1),v=Ve(!1);function m(G,Z,D=3e3){J(s,G,!0),J(l,Z,!0),J(i,!0),setTimeout(()=>{J(i,!1)},D)}function d(G,Z){const D=new Blob([G],{type:"application/json"}),K=URL.createObjectURL(D),ee=document.createElement("a");ee.href=K,ee.download=Z,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(K)}setInterval(()=>{t().autoSave()},3e4);var b=Ur(),g=p(c(b),2);{var f=G=>{var Z=Ar(),D=c(Z);{var K=ge=>{nr(ge,{size:20})},ee=ge=>{var _e=H(),Me=F(_e);{var oe=ke=>{Je(ke,{size:20})},xe=ke=>{Je(ke,{size:20})};W(Me,ke=>{n(l)==="warning"?ke(oe):ke(xe,!1)},!0)}k(ge,_e)};W(D,ge=>{n(l)==="success"?ge(K):ge(ee,!1)})}var pe=p(D);o(Z),re(()=>{le(Z,1,`message ${n(l)??""}`,"svelte-rfjmb6"),U(pe,` ${n(s)??""}`)}),k(G,Z)};W(g,G=>{n(i)&&G(f)})}var $=p(g,2),h=c($),x=p(c(h),4),y=c(x);y.__click=[$r,t,m];var S=c(y);Xt(S,{size:20}),Se(),o(y);var C=p(y,2);C.__click=[Mr,t,m];var j=c(C);Lt(j,{size:20}),Se(),o(C),o(x),o(h);var M=p(h,2),A=p(c(M),4),u=c(A);u.__click=[Sr,t,d,m];var _=c(u);wt(_,{size:20}),Se(),o(u);var E=p(u,2);E.__click=[wr,t,d,m];var R=c(E);wt(R,{size:20}),Se(),o(E),o(A),Se(2),o(M);var N=p(M,2),P=p(c(N),4);Pa(P);var z=p(P,2);z.__click=[Lr,a,m,t];var ae=c(z);Lt(ae,{size:20}),Se(),o(z),o(N);var se=p(N,2),Y=p(c(se),2),O=c(Y),T=p(c(O));o(O);var w=p(O,2),V=p(c(w));o(w);var X=p(w,2),Q=p(c(X));o(X);var te=p(X,2),ie=p(c(te));o(te),o(Y),o(se);var ne=p(se,2),ve=p(c(ne),4);ve.__click=[Er,v];var fe=c(ve);Je(fe,{size:20}),Se(),o(ve),o(ne),o($);var de=p($,2);{var Ne=G=>{var Z=Nr(),D=c(Z),K=p(c(D),8),ee=c(K);ee.__click=[Cr,v];var pe=p(ee,2);pe.__click=[Tr,t,v,m];var ge=c(pe);Je(ge,{size:20}),Se(),o(pe),o(K),o(D),o(Z),k(G,Z)};W(de,G=>{n(v)&&G(Ne)})}o(b),re((G,Z,D,K)=>{z.disabled=G,U(T,` ${t().saveIntegrity??""}`),U(V,` ${Z??""}`),U(Q,` ${D??""}`),U(ie,` ${K??""}`)},[()=>!n(a).trim(),()=>new Date(t().lastValidation).toLocaleString(),()=>t().exp.toLocaleString(),()=>t().lifetimeExp.toLocaleString()]),Ya(P,()=>n(a),G=>J(a,G)),k(r,b),$e()}Ke(["click"]);var Ir=B("<option> </option>"),Pr=(r,e)=>{e().setDisplayMode("light"),e(e())},zr=(r,e)=>{e().setDisplayMode("system"),e(e())},Dr=(r,e)=>{e().setDisplayMode("dark"),e(e())},Vr=B('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function qr(r,e){Le(e,!0);let t=ce(e,"config",15);const a=Qa();var s=Vr(),l=p(c(s),2),i=c(l),v=p(c(i),2),m=c(v),d=p(c(m),2),b=c(d,!0);o(d),o(m);var g=p(m,2),f=p(c(g),2),$=c(f,!0);o(f),o(g);var h=p(g,2),x=p(c(h),2),y=c(x,!0);o(x),o(h);var S=p(h,2),C=p(c(S),2),j=c(C,!0);o(C),o(S),o(v),o(i);var M=p(i,2),A=p(c(M),2),u=p(c(A),2);gt(u,21,()=>a,Pt,(Y,O)=>{var T=Ir(),w=c(T,!0);o(T);var V={};re(X=>{U(w,X),V!==(V=n(O))&&(T.value=(T.__value=n(O))??"")},[()=>Za(n(O))]),k(Y,T)}),o(u),o(A);var _=p(A,2),E=p(c(_),2),R=c(E);let N;R.__click=[Pr,t];var P=p(R,2);let z;P.__click=[zr,t];var ae=p(P,2);let se;ae.__click=[Dr,t],o(E),o(_),o(M),o(l),o(s),re((Y,O,T,w,V)=>{U(b,e.game.name),U($,e.game.level),U(y,Y),U(j,O),N=le(R,1,"mode-btn svelte-mt7s6l",null,N,T),z=le(P,1,"mode-btn svelte-mt7s6l",null,z,w),se=le(ae,1,"mode-btn svelte-mt7s6l",null,se,V)},[()=>Math.floor(e.game.exp).toLocaleString(),()=>Math.floor(e.game.lifetimeExp).toLocaleString(),()=>({active:t().displayMode==="light"}),()=>({active:t().displayMode==="system"}),()=>({active:t().displayMode==="dark"})]),Ga(u,()=>t().theme,Y=>t(t().theme=Y,!0)),k(r,s),$e()}Ke(["click"]);function Or(r,e,t){n(e)<t&&It(e)}function Fr(r,e){n(e)>1&&It(e,-1)}var Rr=B('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function Br(r,e){Le(e,!0);let t=Ve(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var l=Rr(),i=c(l),v=c(i),m=c(v),d=c(m);d.__click=[Fr,t];var b=p(d,2),g=c(b),f=c(g);o(g);var $=p(g,2),h=c($);o($),o(b);var x=p(b,2);x.__click=[Or,t,a],o(m);var y=p(m,2),S=c(y),C=c(S,!0);o(S),o(y),o(v),o(i),o(l),re(()=>{d.disabled=n(t)===1,U(f,`Chapter ${n(t)??""}`),U(h,`(${n(t)??""}/9)`),x.disabled=n(t)===a,U(C,s[n(t)-1])}),k(r,l),$e()}Ke(["click"]);var Hr=B('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),Xr=B('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),Gr=B('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Kr=B("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),Wr=B('<div class="view svelte-1l6ze8i"><!></div>');function Jr(r,e){Le(e,!1);const t=Ce();let a=ce(e,"config",12),s=ce(e,"game",12);Xe(()=>I(s()),()=>{J(t,s()?.menu)}),tt(),Ge();var l=Wr(),i=c(l);Da(i,()=>n(t),v=>{var m=H(),d=F(m);{var b=f=>{mr(f,{get config(){return a()},set config($){a($)},get game(){return s()},set game($){s($)},$$legacy:!0})},g=f=>{var $=H(),h=F($);{var x=S=>{kr(S,{get config(){return a()},set config(C){a(C)},get game(){return s()},set game(C){s(C)},$$legacy:!0})},y=S=>{var C=H(),j=F(C);{var M=u=>{jr(u,{get config(){return a()},set config(_){a(_)},get game(){return s()},set game(_){s(_)},$$legacy:!0})},A=u=>{var _=H(),E=F(_);{var R=P=>{Br(P,{get game(){return s()},set game(z){s(z)},$$legacy:!0})},N=P=>{var z=H(),ae=F(z);{var se=O=>{qr(O,{get config(){return a()},set config(T){a(T)},get game(){return s()},set game(T){s(T)},$$legacy:!0})},Y=O=>{var T=H(),w=F(T);{var V=Q=>{var te=Hr();k(Q,te)},X=Q=>{var te=H(),ie=F(te);{var ne=fe=>{var de=Xr();k(fe,de)},ve=fe=>{var de=H(),Ne=F(de);{var G=D=>{var K=Gr();k(D,K)},Z=D=>{var K=Kr();k(D,K)};W(Ne,D=>{s()?D(Z,!1):D(G)},!0)}k(fe,de)};W(ie,fe=>{I(s()),L(()=>s()&&s().menu==="about")?fe(ne):fe(ve,!1)},!0)}k(Q,te)};W(w,Q=>{I(s()),L(()=>s()&&s().menu==="help")?Q(V):Q(X,!1)},!0)}k(O,T)};W(ae,O=>{I(s()),L(()=>s()&&s().menu==="settings")?O(se):O(Y,!1)},!0)}k(P,z)};W(E,P=>{I(s()),L(()=>s()&&s().menu==="story")?P(R):P(N,!1)},!0)}k(u,_)};W(j,u=>{I(s()),L(()=>s()&&s().menu==="saves")?u(M):u(A,!1)},!0)}k(S,C)};W(h,S=>{I(s()),L(()=>s()&&s().menu==="upgrades")?S(x):S(y,!1)},!0)}k(f,$)};W(d,f=>{I(s()),L(()=>s()&&s().menu==="practice")?f(b):f(g,!1)})}k(v,m)}),o(l),k(r,l),$e()}var Yr=B('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Qr=B('<footer class="footer svelte-1uha8ag"><!></footer>'),Zr=B('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),es=B('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),ts=B("<div><!></div>");function ns(r,e){Le(e,!1);const t=Ce();let a=Ce(new er("prussian-blue","system")),s=Ce();Qt(()=>{if(window.matchMedia){const b=window.matchMedia("(prefers-color-scheme: dark)"),g=()=>{n(a).displayMode==="system"&&J(a,n(a))};b.addEventListener?b.addEventListener("change",g):b.addListener(g)}J(s,new tr),setTimeout(()=>{n(s)&&(n(s).loadFromLocalStorage()||n(s).loadFromCookies(),J(s,n(s)))},100);const d=setInterval(()=>{n(s)&&n(s).autoSave()},15e3);return()=>{clearInterval(d)}}),Xe(()=>n(a),()=>{J(t,n(a)?n(a).getTheme():"")}),tt(),Ge();var l=ts();Zt(d=>{var b=Yr();za.title="TomeClicker",Se(6),k(d,b)});var i=c(l);{var v=d=>{var b=Zr(),g=F(b);{var f=S=>{sr(S,{get game(){return n(s)}})};W(g,S=>{n(s),L(()=>n(s).showHeader())&&S(f)})}var $=p(g,2),h=c($);Jr(h,{get game(){return n(s)},set game(S){J(s,S)},get config(){return n(a)},set config(S){J(a,S)},$$legacy:!0}),o($);var x=p($,2);{var y=S=>{var C=Qr(),j=c(C);gr(j,{get game(){return n(s)},set game(M){J(s,M)},$$legacy:!0}),o(C),k(S,C)};W(x,S=>{n(s),L(()=>n(s).showMenu())&&S(y)})}k(d,b)},m=d=>{var b=es();k(d,b)};W(i,d=>{n(s)?d(v):d(m,!1)})}o(l),re(()=>le(l,1,`app ${n(t)??""}`,"svelte-1uha8ag")),k(r,l),$e()}export{ns as component};
