import"../chunks/DsnmJJEf.js";import{i as Ge}from"../chunks/BMhqCjiF.js";import{i as Gt,a as Kt,c as Wt,d as Ke,n as Jt,b as Yt,s as A,e as _e,o as Zt,f as Qt}from"../chunks/Boo9GOCe.js";import{w as q,x as He,aU as ea,aV as ta,aW as aa,v as We,C as Ze,D as ze,F as Ue,G as Ct,K as Ce,U as Et,J as ut,h as n,N as ra,y as sa,H as ia,z as mt,A as Re,B as je,a9 as la,aC as na,az as Mt,ap as Tt,aQ as Ee,a0 as _t,a8 as bt,I as ft,aX as Qe,aY as it,ag as De,aZ as et,a_ as oa,am as ca,a$ as va,ay as da,b0 as ua,S as At,au as Nt,b1 as Ut,a7 as fa,b2 as pa,b3 as ga,E as ha,b4 as ma,aB as _a,aP as pt,b5 as ba,b6 as xa,ar as ya,b7 as jt,b8 as ka,b9 as $a,ba as Sa,bb as wa,bc as La,bd as Ca,be as Ea,bf as Ma,bg as Ta,aO as Aa,e as L,a5 as Na,bh as Ua,p as $e,l as H,n as c,o,q as p,aS as gt,t as re,a as $,m as Se,bi as ja,i as z,c as B,f as D,bj as Pa,bk as Xe,Q as W,bl as tt,aT as Ne,ah as ye,aR as qe,bm as za,a1 as Pt,bn as Ia}from"../chunks/Bd7guJkQ.js";import{i as G,l as ce,p as ue,s as he}from"../chunks/BRTTB1Vv.js";function Va(r,e,t){q&&He();var a=r,s=Et,l,i,v=null,_=ea()?ta:aa;function d(){l&&ut(l),v!==null&&(v.lastChild.remove(),a.before(v),v=null),l=i}We(()=>{if(_(s,s=e())){var x=a,g=Ct();g&&(v=document.createDocumentFragment(),v.append(x=Ze())),i=ze(()=>t(x)),g?Ue.add_callback(d):d()}}),q&&(a=Ce)}function zt(r,e){return e}function qa(r,e,t){for(var a=r.items,s=[],l=e.length,i=0;i<l;i++)va(e[i].e,s,!0);var v=l>0&&s.length===0&&t!==null;if(v){var _=t.parentNode;da(_),_.append(t),a.clear(),ke(r,e[0].prev,e[l-1].next)}ua(s,()=>{for(var d=0;d<l;d++){var x=e[d];v||(a.delete(x.k),ke(r,x.prev,x.next)),De(x.e,!v)}})}function ht(r,e,t,a,s,l=null){var i=r,v={flags:e,items:new Map,first:null},_=(e&Ut)!==0;if(_){var d=r;i=q?Re(Nt(d)):d.appendChild(Ze())}q&&He();var x=null,g=!1,f=new Map,w=ra(()=>{var k=t();return Tt(k)?k:k==null?[]:Mt(k)}),m,y;function b(){Da(y,m,v,f,i,s,e,a,t),l!==null&&(m.length===0?x?ft(x):x=ze(()=>l(i)):x!==null&&ut(x,()=>{x=null}))}We(()=>{y??=At,m=n(w);var k=m.length;if(g&&k===0)return;g=k===0;let E=!1;if(q){var N=sa(i)===ia;N!==(k===0)&&(i=mt(),Re(i),je(!1),E=!0)}if(q){for(var M=null,T,u=0;u<k;u++){if(Ce.nodeType===la&&Ce.data===na){i=Ce,E=!0,je(!1);break}var h=m[u],C=a(h,u);T=dt(Ce,v,M,null,h,C,u,s,e,t),v.items.set(C,T),M=T}k>0&&Re(mt())}if(q)k===0&&l&&(x=ze(()=>l(i)));else if(Ct()){var O=new Set,U=Ue;for(u=0;u<k;u+=1){h=m[u],C=a(h,u);var I=v.items.get(C)??f.get(C);I?(e&(et|Qe))!==0&&It(I,h,u,e):(T=dt(null,v,null,null,h,C,u,s,e,t,!0),f.set(C,T)),O.add(C)}for(const[j,ie]of v.items)O.has(j)||U.skipped_effects.add(ie.e);U.add_callback(b)}else b();E&&je(!0),n(w)}),q&&(i=Ce)}function Da(r,e,t,a,s,l,i,v,_){var d=(i&pa)!==0,x=(i&(et|Qe))!==0,g=e.length,f=t.items,w=t.first,m=w,y,b=null,k,E=[],N=[],M,T,u,h;if(d)for(h=0;h<g;h+=1)M=e[h],T=v(M,h),u=f.get(T),u!==void 0&&(u.a?.measure(),(k??=new Set).add(u));for(h=0;h<g;h+=1){if(M=e[h],T=v(M,h),u=f.get(T),u===void 0){var C=a.get(T);if(C!==void 0){a.delete(T),f.set(T,C);var O=b?b.next:m;ke(t,b,C),ke(t,C,O),lt(C,O,s),b=C}else{var U=m?m.e.nodes_start:s;b=dt(U,t,b,b===null?t.first:b.next,M,T,h,l,i,_)}f.set(T,b),E=[],N=[],m=b.next;continue}if(x&&It(u,M,h,i),(u.e.f&it)!==0&&(ft(u.e),d&&(u.a?.unfix(),(k??=new Set).delete(u))),u!==m){if(y!==void 0&&y.has(u)){if(E.length<N.length){var I=N[0],j;b=I.prev;var ie=E[0],V=E[E.length-1];for(j=0;j<E.length;j+=1)lt(E[j],I,s);for(j=0;j<N.length;j+=1)y.delete(N[j]);ke(t,ie.prev,V.next),ke(t,b,ie),ke(t,V,I),m=I,b=V,h-=1,E=[],N=[]}else y.delete(u),lt(u,m,s),ke(t,u.prev,u.next),ke(t,u,b===null?t.first:b.next),ke(t,b,u),b=u;continue}for(E=[],N=[];m!==null&&m.k!==T;)(m.e.f&it)===0&&(y??=new Set).add(m),N.push(m),m=m.next;if(m===null)continue;u=m}E.push(u),b=u,m=u.next}if(m!==null||y!==void 0){for(var K=y===void 0?[]:Mt(y);m!==null;)(m.e.f&it)===0&&K.push(m),m=m.next;var F=K.length;if(F>0){var te=(i&Ut)!==0&&g===0?s:null;if(d){for(h=0;h<F;h+=1)K[h].a?.measure();for(h=0;h<F;h+=1)K[h].a?.fix()}qa(t,K,te)}}d&&fa(()=>{if(k!==void 0)for(u of k)u.a?.apply()}),r.first=t.first&&t.first.e,r.last=b&&b.e;for(var P of a.values())De(P.e);a.clear()}function It(r,e,t,a){(a&et)!==0&&bt(r.v,e),(a&Qe)!==0?bt(r.i,t):r.i=t}function dt(r,e,t,a,s,l,i,v,_,d,x){var g=(_&et)!==0,f=(_&oa)===0,w=g?f?Ee(s,!1,!1):_t(s):s,m=(_&Qe)===0?i:_t(i),y={i:m,v:w,k:l,a:null,e:null,prev:t,next:a};try{if(r===null){var b=document.createDocumentFragment();b.append(r=Ze())}return y.e=ze(()=>v(r,w,m,d),q),y.e.prev=t&&t.e,y.e.next=a&&a.e,t===null?x||(e.first=y):(t.next=y,t.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function lt(r,e,t){for(var a=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,l=r.e.nodes_start;l!==null&&l!==a;){var i=ca(l);s.before(l),l=i}}function ke(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function fe(r,e,t,a,s){q&&He();var l=e.$$slots?.[t],i=!1;l===!0&&(l=e.children,i=!0),l===void 0||l(r,i?()=>a:a)}function Oa(r,e,t,a,s,l){let i=q;q&&He();var v,_,d=null;q&&Ce.nodeType===ga&&(d=Ce,He());var x=q?Ce:r,g;We(()=>{const f=e()||null;var w=ma;f!==v&&(g&&(f===null?ut(g,()=>{g=null,_=null}):f===_?ft(g):De(g)),f&&f!==_&&(g=ze(()=>{if(d=q?d:document.createElementNS(w,f),_a(d,d),a){q&&Gt(f)&&d.append(document.createComment(""));var m=q?Nt(d):d.appendChild(Ze());q&&(m===null?je(!1):Re(m)),a(d,m)}At.nodes_end=d,x.before(d)})),v=f,v&&(_=v))},ha),i&&(je(!0),Re(x))}function Fa(r,e){var t=void 0,a;We(()=>{t!==(t=e())&&(a&&(De(a),a=null),t&&(a=ze(()=>{pt(()=>t(r))})))})}function Vt(r){var e,t,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(e=0;e<s;e++)r[e]&&(t=Vt(r[e]))&&(a&&(a+=" "),a+=t)}else for(t in r)r[t]&&(a&&(a+=" "),a+=t);return a}function Ra(){for(var r,e,t=0,a="",s=arguments.length;t<s;t++)(r=arguments[t])&&(e=Vt(r))&&(a&&(a+=" "),a+=e);return a}function Ba(r){return typeof r=="object"?Ra(r):r??""}const xt=[...` 	
\r\f \v\uFEFF`];function Ha(r,e,t){var a=r==null?"":""+r;if(e&&(a=a?a+" "+e:e),t){for(var s in t)if(t[s])a=a?a+" "+s:s;else if(a.length)for(var l=s.length,i=0;(i=a.indexOf(s,i))>=0;){var v=i+l;(i===0||xt.includes(a[i-1]))&&(v===a.length||xt.includes(a[v]))?a=(i===0?"":a.substring(0,i))+a.substring(v+1):i=v}}return a===""?null:a}function yt(r,e=!1){var t=e?" !important;":";",a="";for(var s in r){var l=r[s];l!=null&&l!==""&&(a+=" "+s+": "+l+t)}return a}function nt(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Xa(r,e){if(e){var t="",a,s;if(Array.isArray(e)?(a=e[0],s=e[1]):a=e,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,i=0,v=!1,_=[];a&&_.push(...Object.keys(a).map(nt)),s&&_.push(...Object.keys(s).map(nt));var d=0,x=-1;const y=r.length;for(var g=0;g<y;g++){var f=r[g];if(v?f==="/"&&r[g-1]==="*"&&(v=!1):l?l===f&&(l=!1):f==="/"&&r[g+1]==="*"?v=!0:f==='"'||f==="'"?l=f:f==="("?i++:f===")"&&i--,!v&&l===!1&&i===0){if(f===":"&&x===-1)x=g;else if(f===";"||g===y-1){if(x!==-1){var w=nt(r.substring(d,x).trim());if(!_.includes(w)){f!==";"&&g++;var m=r.substring(d,g).trim();t+=" "+m+";"}}d=g+1,x=-1}}}}return a&&(t+=yt(a)),s&&(t+=yt(s,!0)),t=t.trim(),t===""?null:t}return r==null?null:String(r)}function ge(r,e,t,a,s,l){var i=r.__className;if(q||i!==t||i===void 0){var v=Ha(t,a,l);(!q||v!==r.getAttribute("class"))&&(v==null?r.removeAttribute("class"):e?r.className=v:r.setAttribute("class",v)),r.__className=t}else if(l&&s!==l)for(var _ in l){var d=!!l[_];(s==null||d!==!!s[_])&&r.classList.toggle(_,d)}return l}function ot(r,e={},t,a){for(var s in t){var l=t[s];e[s]!==l&&(t[s]==null?r.style.removeProperty(s):r.style.setProperty(s,l,a))}}function qt(r,e,t,a){var s=r.__style;if(q||s!==e){var l=Xa(e,a);(!q||l!==r.getAttribute("style"))&&(l==null?r.removeAttribute("style"):r.style.cssText=l),r.__style=e}else a&&(Array.isArray(a)?(ot(r,t?.[0],a[0]),ot(r,t?.[1],a[1],"important")):ot(r,t,a));return a}function Ye(r,e,t=!1){if(r.multiple){if(e==null)return;if(!Tt(e))return ba();for(var a of r.options)a.selected=e.includes(Be(a));return}for(a of r.options){var s=Be(a);if(xa(s,e)){a.selected=!0;return}}(!t||e!==void 0)&&(r.selectedIndex=-1)}function Dt(r){var e=new MutationObserver(()=>{Ye(r,r.__value)});e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ya(()=>{e.disconnect()})}function Ga(r,e,t=e){var a=!0;jt(r,"change",s=>{var l=s?"[selected]":":checked",i;if(r.multiple)i=[].map.call(r.querySelectorAll(l),Be);else{var v=r.querySelector(l)??r.querySelector("option:not([disabled])");i=v&&Be(v)}t(i)}),pt(()=>{var s=e();if(Ye(r,s,a),a&&s===void 0){var l=r.querySelector(":checked");l!==null&&(s=Be(l),t(s))}r.__value=s,a=!1}),Dt(r)}function Be(r){return"__value"in r?r.__value:r.value}const Oe=Symbol("class"),Fe=Symbol("style"),Ot=Symbol("is custom element"),Ft=Symbol("is html");function Ka(r){if(q){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var a=r.value;Pe(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var s=r.checked;Pe(r,"checked",null),r.checked=s}}};r.__on_r=t,wa(t),La()}}function Wa(r,e){e?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Pe(r,e,t,a){var s=Rt(r);q&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(r[Ma]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Bt(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Ja(r,e,t,a,s=!1,l=!1){if(q&&s&&r.tagName==="INPUT"){var i=r,v=i.type==="checkbox"?"defaultChecked":"defaultValue";v in t||Ka(i)}var _=Rt(r),d=_[Ot],x=!_[Ft];let g=q&&d;g&&je(!1);var f=e||{},w=r.tagName==="OPTION";for(var m in e)m in t||(t[m]=null);t.class?t.class=Ba(t.class):t[Oe]&&(t.class=null),t[Fe]&&(t.style??=null);var y=Bt(r);for(const u in t){let h=t[u];if(w&&u==="value"&&h==null){r.value=r.__value="",f[u]=h;continue}if(u==="class"){var b=r.namespaceURI==="http://www.w3.org/1999/xhtml";ge(r,b,h,a,e?.[Oe],t[Oe]),f[u]=h,f[Oe]=t[Oe];continue}if(u==="style"){qt(r,h,e?.[Fe],t[Fe]),f[u]=h,f[Fe]=t[Fe];continue}var k=f[u];if(!(h===k&&!(h===void 0&&r.hasAttribute(u)))){f[u]=h;var E=u[0]+u[1];if(E!=="$$")if(E==="on"){const C={},O="$$"+u;let U=u.slice(2);var N=Yt(U);if(Kt(U)&&(U=U.slice(0,-7),C.capture=!0),!N&&k){if(h!=null)continue;r.removeEventListener(U,f[O],C),f[O]=null}if(h!=null)if(N)r[`__${U}`]=h,Ke([U]);else{let I=function(j){f[u].call(this,j)};f[O]=Wt(U,r,I,C)}else N&&(r[`__${U}`]=void 0)}else if(u==="style")Pe(r,u,h);else if(u==="autofocus")Sa(r,!!h);else if(!d&&(u==="__value"||u==="value"&&h!=null))r.value=r.__value=h;else if(u==="selected"&&w)Wa(r,h);else{var M=u;x||(M=Jt(M));var T=M==="defaultValue"||M==="defaultChecked";if(h==null&&!d&&!T)if(_[u]=null,M==="value"||M==="checked"){let C=r;const O=e===void 0;if(M==="value"){let U=C.defaultValue;C.removeAttribute(M),C.defaultValue=U,C.value=C.__value=O?U:null}else{let U=C.defaultChecked;C.removeAttribute(M),C.defaultChecked=U,C.checked=O?U:!1}}else r.removeAttribute(u);else T||y.includes(M)&&(d||typeof h!="string")?(r[M]=h,M in _&&(_[M]=Et)):typeof h!="function"&&Pe(r,M,h)}}}return g&&je(!0),f}function kt(r,e,t=[],a=[],s,l=!1,i=!1){ka(t,a,v=>{var _=void 0,d={},x=r.nodeName==="SELECT",g=!1;if(We(()=>{var w=e(...v.map(n)),m=Ja(r,_,w,s,l,i);g&&x&&"value"in w&&Ye(r,w.value);for(let b of Object.getOwnPropertySymbols(d))w[b]||De(d[b]);for(let b of Object.getOwnPropertySymbols(w)){var y=w[b];b.description===$a&&(!_||y!==_[b])&&(d[b]&&De(d[b]),d[b]=ze(()=>Fa(r,()=>y))),m[b]=y}_=m}),x){var f=r;pt(()=>{Ye(f,_.value,!0),Dt(f)})}g=!0})}function Rt(r){return r.__attributes??={[Ot]:r.nodeName.includes("-"),[Ft]:r.namespaceURI===Ca}}var $t=new Map;function Bt(r){var e=r.getAttribute("is")||r.nodeName,t=$t.get(e);if(t)return t;$t.set(e,t=[]);for(var a,s=r,l=Element.prototype;l!==s;){a=Ta(s);for(var i in a)a[i].set&&t.push(i);s=Ea(s)}return t}function Ya(r,e,t=e){var a=new WeakSet;jt(r,"input",async s=>{var l=s?r.defaultValue:r.value;if(l=ct(r)?vt(l):l,t(l),Ue!==null&&a.add(Ue),await Aa(),l!==(l=e())){var i=r.selectionStart,v=r.selectionEnd;r.value=l??"",v!==null&&(r.selectionStart=i,r.selectionEnd=Math.min(v,r.value.length))}}),(q&&r.defaultValue!==r.value||L(e)==null&&r.value)&&(t(ct(r)?vt(r.value):r.value),Ue!==null&&a.add(Ue)),Na(()=>{var s=e();if(r===document.activeElement){var l=Ua??Ue;if(a.has(l))return}ct(r)&&s===vt(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function ct(r){var e=r.type;return e==="number"||e==="range"}function vt(r){return r===""?null:+r}const at={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#08725dff",red:"#cc6300ff",yellow:"#b8860bff"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#1aefc4ff",red:"#ffa047ff",yellow:"#ffd700ff"}},graphite:{name:"graphite",displayName:"Graphite",light:{bg:"#d5d3d9ff",altBg:"#b6b3bdff",text:"#1e1c21ff",blue:"#4a5568ff",red:"#c14b1fff",green:"#406354ff",yellow:"#d69e2eff"},dark:{bg:"#28262cff",altBg:"#1e1c21ff",text:"#cbc8d0ff",blue:"#8bb5e8ff",red:"#e27750ff",green:"#6b9e88ff",yellow:"#f7dc6fff"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#4d6b4d",red:"#b8302f",yellow:"#d6a82e"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#7d9d7d",red:"#e27777",yellow:"#f7dc6f"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#5b8c5b",red:"#a84d3d",yellow:"#c9a843"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#8cc58c",red:"#d77a6a",yellow:"#f5d66e"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#4a90e2",green:"#52c41a",red:"#f5222d",yellow:"#faad14"},dark:{bg:"#1a1d21",altBg:"#0d0f12",text:"#f8f9fa",blue:"#74b3ff",green:"#73d13d",red:"#ff5566",yellow:"#ffc53d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#6b7d5a",red:"#a85a3d",yellow:"#d6a843"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#9bb083",red:"#d8876a",yellow:"#f5d66e"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#e0e6ed",altBg:"#c7d1dd",text:"#0a0e14",blue:"#3b7ea1",green:"#4d9b4d",red:"#c14b4b",yellow:"#d69e2e"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#6bb4d1",green:"#7dd17d",red:"#e27777",yellow:"#f7dc6f"}}};function Za(){return Object.keys(at)}function Qa(r){return at[r]?.displayName||r}function St(r){return r in at}class er{darkmode;theme;constructor(e="prussian-blue",t=!0){this.darkmode=t,this.theme=St(e)?e:"prussian-blue"}getTheme(){const e=this.darkmode?"dark":"light";return`${this.theme}-${e}`}setTheme(e){return St(e)?(this.theme=e,!0):!1}toggleDarkMode(){this.darkmode=!this.darkmode}getAvailableThemes(){return Object.keys(at)}}class tr{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&t.id!=="transcendent-focus"&&(this.clickMultiplier+=t.effectValue*t.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const e=this.upgrades["transcendent-focus"];e&&e.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,e.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const e of Object.values(this.upgrades))if(this.canPurchaseUpgrade(e.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(e){const t=this.initializeUpgrades();for(const a in t)e[a]&&(t[a].currentLevel=e[a].currentLevel);this.upgrades=t}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&(e+=t.effectValue*t.currentLevel);return e}markIntegrityViolation(e){this.saveIntegrity=`compromised-${e}-${Date.now()}`,console.warn(`Game integrity violation detected: ${e}`)}addExp(e){this.exp+=e,this.lifetimeExp+=e}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(e){const t=this.upgrades[e];return t?e==="transcendent-focus"?t.baseCost*Math.pow(100,t.currentLevel):Math.floor(t.baseCost*Math.pow(t.costMultiplier,t.currentLevel)):0}canAffordUpgrade(e){const t=this.getUpgradeCost(e);return this.exp>=t}canPurchaseUpgrade(e){const t=this.upgrades[e];return t?this.canAffordUpgrade(e)&&t.currentLevel<t.maxLevel:!1}purchaseUpgrade(e){if(!this.canPurchaseUpgrade(e))return!1;const t=this.upgrades[e],a=this.getUpgradeCost(e);return this.exp-=a,t.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(e){let t=0;for(let a=0;a<e.length;a++){const s=e.charCodeAt(a);t=(t<<5)-t+s,t=t&t}return t.toString(36)+this._validationKey}encryptSave(e){const t="tomeclicker-save-key";let a="";for(let s=0;s<e.length;s++)a+=String.fromCharCode(e.charCodeAt(s)^t.charCodeAt(s%t.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(e){try{let t;typeof atob>"u"?t=Buffer.from(e,"base64").toString():t=atob(e);const a="tomeclicker-save-key";let s="";for(let l=0;l<t.length;l++)s+=String.fromCharCode(t.charCodeAt(l)^a.charCodeAt(l%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(e=!0){const t={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(t);if(e){const s=this.generateSaveHash(a),l=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:l,hash:s,version:"0.1.0"})}else return JSON.stringify({...t,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(e){try{const t=JSON.parse(e);let a,s="";if(t.encrypted===!1)a=t,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(t.encrypted===!0){const l=this.decryptSave(t.data);a=JSON.parse(l)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(t){return{success:!1,error:`Failed to import save: ${t}`}}}validateSaveData(e){return typeof e.name=="string"&&typeof e.exp=="number"&&typeof e.lifetimeExp=="number"&&(typeof e.level=="number"||e.level===void 0)&&typeof e.clickMultiplier=="number"&&typeof e.upgrades=="object"&&e.exp<=e.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const e=this.exportSave(!0),t=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(e)}; expires=${t}; path=/; SameSite=Lax`}catch(e){console.error("Failed to save to cookies:",e)}}loadFromCookies(){if(typeof document>"u")return!1;try{const e=document.cookie.split(";");for(const t of e){const[a,s]=t.trim().split("=");if(a==="tomeclicker_save"&&s){const l=this.importSave(decodeURIComponent(s));return l.success?!0:(console.error("Failed to load save from cookies:",l.error),!1)}}return!1}catch(e){return console.error("Error loading from cookies:",e),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const e=this.exportSave(!0);localStorage.setItem("tomeclicker_save",e)}catch(e){console.error("Failed to save to localStorage:",e)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const e=localStorage.getItem("tomeclicker_save");if(e){const t=this.importSave(e);return t.success?!0:(console.error("Failed to load save from localStorage:",t.error),!1)}return!1}catch(e){return console.error("Error loading from localStorage:",e),!1}}autoSave(){this.saveToLocalStorage(),this.saveToCookies()}hardReset(e=!0){const t=e?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=t,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var ar=H('<div class="progress-container svelte-1xm1ks6"><div class="progress-bar svelte-1xm1ks6"></div></div>'),rr=H('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function sr(r,e){$e(e,!0);const t=gt(()=>{if(e.game.level<2)return null;e.game.exp;const g=e.game.lifetimeExp,f=e.game.level;return g<50?{progress:g/50}:f<3?{progress:f/3}:f<5?{progress:f/5}:f<7?{progress:f/7}:f<10?{progress:f/10}:null});var a=rr(),s=c(a),l=c(s),i=c(l);o(l);var v=p(l,2),_=c(v);o(v),o(s);var d=p(s,2);{var x=g=>{var f=ar(),w=c(f);o(f),re(()=>qt(w,`width: ${n(t).progress*100}%`)),$(g,f)};G(d,g=>{n(t)&&g(x)})}o(a),re(g=>{A(i,`EXP: ${g??""}`),A(_,`Level: ${e.game.level??""}`)},[()=>Math.floor(e.game.exp).toLocaleString()]),$(r,a),Se()}/**
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
 */const ir={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var lr=ja("<svg><!><!></svg>");function me(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]),a=ce(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);$e(e,!1);let s=ue(e,"name",8,void 0),l=ue(e,"color",8,"currentColor"),i=ue(e,"size",8,24),v=ue(e,"strokeWidth",8,2),_=ue(e,"absoluteStrokeWidth",8,!1),d=ue(e,"iconNode",24,()=>[]);const x=(...m)=>m.filter((y,b,k)=>!!y&&k.indexOf(y)===b).join(" ");Ge();var g=lr();kt(g,(m,y)=>({...ir,...a,width:i(),height:i(),stroke:l(),"stroke-width":m,class:y}),[()=>(z(_()),z(v()),z(i()),L(()=>_()?Number(v())*24/Number(i()):v())),()=>(z(s()),z(t),L(()=>x("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var f=c(g);ht(f,1,d,zt,(m,y)=>{var b=gt(()=>Pa(n(y),2));let k=()=>n(b)[0],E=()=>n(b)[1];var N=B(),M=D(N);Oa(M,k,!0,(T,u)=>{kt(T,()=>({...E()}))}),$(m,N)});var w=p(f);fe(w,e,"default",{}),o(g),$(r,g),Se()}function nr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(r,he({name:"circle-check-big"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function or(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];me(r,he({name:"circle-question-mark"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function wt(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];me(r,he({name:"download"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function cr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];me(r,he({name:"info"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function Ht(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];me(r,he({name:"mouse-pointer"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function Xt(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(r,he({name:"save"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function vr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];me(r,he({name:"settings"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function dr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(r,he({name:"square-pen"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function ur(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];me(r,he({name:"toggle-left"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function fr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];me(r,he({name:"toggle-right"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function pr(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];me(r,he({name:"trending-up"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function Je(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(r,he({name:"triangle-alert"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}function Lt(r,e){const t=ce(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];me(r,he({name:"upload"},()=>t,{get iconNode(){return a},children:(s,l)=>{var i=B(),v=D(i);fe(v,e,"default",{}),$(s,i)},$$slots:{default:!0}}))}var gr=H('<button class="svelte-igdjqh"><p><!></p></button>'),hr=H('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function mr(r,e){$e(e,!1);const t=Ee();let a=ue(e,"game",12);Xe(()=>z(a()),()=>{W(t,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(S=>a().canAffordUpgrade(S.id))))}),tt(),Ge();var s=hr(),l=c(s),i=c(l),v=c(i,!0);o(i),o(l);var _=p(l,2),d=c(_),x=c(d);let g;var f=c(x);Ht(f,{size:24}),o(x),o(d);var w=p(d,2);{var m=S=>{var R=gr(),X=c(R);let Y;var pe=c(X);pr(pe,{size:24}),o(X),o(R),re(ae=>Y=ge(X,1,"svelte-igdjqh",null,Y,ae),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&n(t)})]),_e("click",R,()=>a(a().menu="upgrades",!0)),$(S,R)};G(w,S=>{z(a()),L(()=>a().showUpgrades())&&S(m)})}var y=p(w,2),b=c(y);let k;var E=c(b);dr(E,{size:24}),o(b),o(y);var N=p(y,2),M=c(N);let T;var u=c(M);or(u,{size:24}),o(M),o(N);var h=p(N,2),C=c(h);let O;var U=c(C);Xt(U,{size:24}),o(C),o(h);var I=p(h,2),j=c(I);let ie;var V=c(j);vr(V,{size:24}),o(j),o(I);var K=p(I,2),F=c(K);let te;var P=c(F);cr(P,{size:24}),o(F),o(K),o(_),o(s),re((S,R,X,Y,pe,ae)=>{A(v,(z(a()),L(()=>a().menu))),g=ge(x,1,"svelte-igdjqh",null,g,S),k=ge(b,1,"svelte-igdjqh",null,k,R),T=ge(M,1,"svelte-igdjqh",null,T,X),O=ge(C,1,"svelte-igdjqh",null,O,Y),ie=ge(j,1,"svelte-igdjqh",null,ie,pe),te=ge(F,1,"svelte-igdjqh",null,te,ae)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),_e("click",d,()=>a(a().menu="practice",!0)),_e("click",y,()=>a(a().menu="story",!0)),_e("click",N,()=>a(a().menu="help",!0)),_e("click",h,()=>a(a().menu="saves",!0)),_e("click",I,()=>a(a().menu="settings",!0)),_e("click",K,()=>a(a().menu="about",!0)),$(r,s),Se()}function _r(r,e){if(!e())return;const t=e().getClickValue();e().addExp(t),e(e())}var br=H('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div></div>');function xr(r,e){$e(e,!0);let t=ue(e,"game",15),a=gt(()=>t()?t().updateClickText():"Loading...");var s=br(),l=c(s),i=c(l);i.__click=[_r,t];var v=c(i),_=c(v);Ht(_,{size:48});var d=p(_,2,!0);o(v),o(i),o(l),o(s),re(()=>A(d,n(a))),$(r,s),Se()}Ke(["click"]);var yr=H('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),kr=H('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),$r=H('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),Sr=H('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><div class="special-buttons svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button></div> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function wr(r,e){$e(e,!1);const t=Ee(),a=Ee();let s=ue(e,"game",8),l=ue(e,"config",8),i=Ee(null);function v(P){W(i,P)}function _(){n(i)&&s().purchaseUpgrade(n(i).id)&&(W(i,s().upgrades[n(i).id]),s().autoSave())}function d(P){return P.toLocaleString()}function x(){s().levelUp()&&s().autoSave()}l(),Xe(()=>z(s()),()=>{W(t,Object.values(s().upgrades).filter(P=>P.id!=="transcendent-focus"))}),Xe(()=>z(s()),()=>{W(a,s().upgrades["transcendent-focus"])}),tt(),Ge();var g=Sr(),f=p(c(g),2),w=c(f),m=c(w),y=c(m);let b;var k=p(c(y),2),E=c(k);o(k);var N=p(k,2),M=c(N);o(N),o(y);var T=p(y,2);let u;var h=c(T),C=c(h,!0);o(h);var O=p(h,2),U=c(O);o(O);var I=p(O,2),j=c(I);o(I),o(T),o(m);var ie=p(m,2);ht(ie,1,()=>n(t),P=>P.id,(P,S)=>{var R=yr();let X;var Y=c(R),pe=c(Y,!0);o(Y);var ae=p(Y,2),be=c(ae);o(ae);var se=p(ae,2),we=c(se);o(se);var Me=p(se,2),ee=c(Me);{var Z=J=>{var Q=Ne();re(ve=>A(Q,`+${ve??""}% click value per level`),[()=>(n(S),L(()=>(n(S).effectValue*100).toFixed(0)))]),$(J,Q)},le=J=>{var Q=B(),ve=D(Q);{var ne=xe=>{var Le=Ne();re(de=>A(Le,`+${de??""}% all EXP per level`),[()=>(n(S),L(()=>(n(S).effectValue*100).toFixed(0)))]),$(xe,Le)},Ie=xe=>{var Le=B(),de=D(Le);{var oe=Te=>{var Ve=Ne();re(Ae=>A(Ve,`+${Ae??""}% click value per level`),[()=>(n(S),L(()=>(n(S).effectValue*100).toFixed(0)))]),$(Te,Ve)},rt=Te=>{var Ve=Ne("Enhanced efficiency");$(Te,Ve)};G(de,Te=>{n(S),L(()=>n(S).effectType==="clickMultiplier")?Te(oe):Te(rt,!1)},!0)}$(xe,Le)};G(ve,xe=>{n(S),L(()=>n(S).id==="deep-meditation")?xe(ne):xe(Ie,!1)},!0)}$(J,Q)};G(ee,J=>{n(S),L(()=>n(S).id==="faster-clicking")?J(Z):J(le,!1)})}o(Me),o(R),re((J,Q,ve)=>{X=ge(R,1,"upgrade-btn svelte-xd3x4d",null,X,J),Pe(R,"aria-label",`Select ${n(S),L(()=>n(S).name)??""} upgrade. Level ${n(S),L(()=>n(S).currentLevel)??""} of ${n(S),L(()=>n(S).maxLevel)??""}. Cost: ${Q??""} EXP`),A(pe,(n(S),L(()=>n(S).name))),A(be,`Level ${n(S),L(()=>n(S).currentLevel)??""}/${n(S),L(()=>n(S).maxLevel)??""}`),A(we,`${ve??""} EXP`)},[()=>({selected:n(i)?.id===n(S).id,affordable:s().canAffordUpgrade(n(S).id),maxed:n(S).currentLevel>=n(S).maxLevel}),()=>(z(s()),n(S),L(()=>d(s().getUpgradeCost(n(S).id)))),()=>(z(s()),n(S),L(()=>d(s().getUpgradeCost(n(S).id))))]),_e("click",R,()=>v(n(S))),$(P,R)}),ye(2),o(w);var V=p(w,2),K=c(V);{var F=P=>{var S=kr(),R=D(S),X=c(R),Y=c(X,!0);o(X);var pe=p(X,2);o(R);var ae=p(R,2),be=c(ae),se=c(be),we=c(se,!0);o(se);var Me=p(se,2),ee=p(c(Me));o(Me);var Z=p(Me,2),le=p(c(Z));o(Z);var J=p(Z,2),Q=p(c(J));o(J),o(be);var ve=p(be,2),ne=c(ve),Ie=c(ne);{var xe=de=>{var oe=Ne("MAX LEVEL");$(de,oe)},Le=de=>{var oe=B(),rt=D(oe);{var Te=Ae=>{var st=Ne("CANNOT AFFORD");$(Ae,st)},Ve=Ae=>{var st=Ne("PURCHASE");$(Ae,st)};G(rt,Ae=>{z(s()),n(i),L(()=>!s().canAffordUpgrade(n(i).id))?Ae(Te):Ae(Ve,!1)},!0)}$(de,oe)};G(Ie,de=>{n(i),L(()=>n(i).currentLevel>=n(i).maxLevel)?de(xe):de(Le,!1)})}o(ne),o(ve),o(ae),re((de,oe)=>{A(Y,(n(i),L(()=>n(i).name))),A(we,(n(i),L(()=>n(i).description))),A(ee,` ${n(i),L(()=>n(i).effect)??""}`),A(le,` ${de??""} EXP`),A(Q,` ${n(i),L(()=>n(i).currentLevel)??""}/${n(i),L(()=>n(i).maxLevel)??""}`),ne.disabled=oe},[()=>(z(s()),n(i),L(()=>d(s().getUpgradeCost(n(i).id)))),()=>(z(s()),n(i),L(()=>!s().canPurchaseUpgrade(n(i).id)))]),_e("click",pe,()=>W(i,null)),_e("click",ne,_),$(P,S)},te=P=>{var S=$r();$(P,S)};G(K,P=>{n(i)?P(F):P(te,!1)})}o(V),o(f),o(g),re((P,S,R,X,Y,pe,ae)=>{b=ge(y,1,"special-upgrade-btn svelte-xd3x4d",null,b,P),y.disabled=S,Pe(y,"aria-label",`Level up from ${z(s()),L(()=>s().level)??""} to ${z(s()),L(()=>s().level+1)??""}. Cost: ${R??""} EXP`),A(E,`Level ${z(s()),L(()=>s().level)??""} → ${z(s()),L(()=>s().level+1)??""}`),A(M,`${X??""} EXP`),u=ge(T,1,"special-upgrade-btn svelte-xd3x4d",null,u,Y),T.disabled=(n(a),L(()=>n(a).currentLevel>=n(a).maxLevel)),Pe(T,"aria-label",`Select ${n(a),L(()=>n(a).name)??""} upgrade. Level ${n(a),L(()=>n(a).currentLevel)??""} of ${n(a),L(()=>n(a).maxLevel)??""}. Cost: ${pe??""} EXP`),A(C,(n(a),L(()=>n(a).name))),A(U,`Level ${n(a),L(()=>n(a).currentLevel)??""}/${n(a),L(()=>n(a).maxLevel)??""}`),A(j,`${ae??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(z(s()),L(()=>!s().canLevelUp())),()=>(z(s()),L(()=>d(s().getLevelUpCost()))),()=>(z(s()),L(()=>d(s().getLevelUpCost()))),()=>({selected:n(i)?.id===n(a).id,affordable:s().canAffordUpgrade(n(a).id),maxed:n(a).currentLevel>=n(a).maxLevel}),()=>(z(s()),n(a),L(()=>d(s().getUpgradeCost(n(a).id)))),()=>(z(s()),n(a),L(()=>d(s().getUpgradeCost(n(a).id))))]),_e("click",y,x),_e("click",T,()=>v(n(a))),$(r,g),Se()}function Lr(r,e,t,a){try{const s=e().exportSave(!0);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function Cr(r,e,t,a){try{const s=e().exportSave(!1);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Er(r,e,t,a){if(!n(e).trim()){t("Please paste save data first","error");return}const s=a().importSave(n(e).trim());s.success?(t(s.warning||"Save imported successfully!",s.warning?"warning":"success"),W(e,""),a(a()),a().autoSave()):t(s.error||"Failed to import save","error")}function Mr(r,e,t){try{e().autoSave(),t("Game saved to browser storage!","success")}catch{t("Failed to save game","error")}}function Tr(r,e,t){try{const a=e().loadFromLocalStorage(),s=a?!1:e().loadFromCookies();a||s?(t(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),e(e())):t("No save found in browser storage","warning")}catch{t("Failed to load game","error")}}function Ar(r,e){W(e,!0)}function Nr(r,e){W(e,!1)}function Ur(r,e,t,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),W(t,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var jr=H("<div><!> </div>"),Pr=H('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),zr=H('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function Ir(r,e){$e(e,!0);let t=ue(e,"game",15),a=qe(""),s=qe(""),l=qe("success"),i=qe(!1),v=qe(!1);function _(ee,Z,le=3e3){W(s,ee,!0),W(l,Z,!0),W(i,!0),setTimeout(()=>{W(i,!1)},le)}function d(ee,Z){const le=new Blob([ee],{type:"application/json"}),J=URL.createObjectURL(le),Q=document.createElement("a");Q.href=J,Q.download=Z,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(J)}setInterval(()=>{t().autoSave()},3e4);var x=zr(),g=p(c(x),2);{var f=ee=>{var Z=jr(),le=c(Z);{var J=ne=>{nr(ne,{size:20})},Q=ne=>{var Ie=B(),xe=D(Ie);{var Le=oe=>{Je(oe,{size:20})},de=oe=>{Je(oe,{size:20})};G(xe,oe=>{n(l)==="warning"?oe(Le):oe(de,!1)},!0)}$(ne,Ie)};G(le,ne=>{n(l)==="success"?ne(J):ne(Q,!1)})}var ve=p(le);o(Z),re(()=>{ge(Z,1,`message ${n(l)??""}`,"svelte-rfjmb6"),A(ve,` ${n(s)??""}`)}),$(ee,Z)};G(g,ee=>{n(i)&&ee(f)})}var w=p(g,2),m=c(w),y=p(c(m),4),b=c(y);b.__click=[Mr,t,_];var k=c(b);Xt(k,{size:20}),ye(),o(b);var E=p(b,2);E.__click=[Tr,t,_];var N=c(E);Lt(N,{size:20}),ye(),o(E),o(y),o(m);var M=p(m,2),T=p(c(M),4),u=c(T);u.__click=[Lr,t,d,_];var h=c(u);wt(h,{size:20}),ye(),o(u);var C=p(u,2);C.__click=[Cr,t,d,_];var O=c(C);wt(O,{size:20}),ye(),o(C),o(T),ye(2),o(M);var U=p(M,2),I=p(c(U),4);za(I);var j=p(I,2);j.__click=[Er,a,_,t];var ie=c(j);Lt(ie,{size:20}),ye(),o(j),o(U);var V=p(U,2),K=p(c(V),2),F=c(K),te=p(c(F));o(F);var P=p(F,2),S=p(c(P));o(P);var R=p(P,2),X=p(c(R));o(R);var Y=p(R,2),pe=p(c(Y));o(Y),o(K),o(V);var ae=p(V,2),be=p(c(ae),4);be.__click=[Ar,v];var se=c(be);Je(se,{size:20}),ye(),o(be),o(ae),o(w);var we=p(w,2);{var Me=ee=>{var Z=Pr(),le=c(Z),J=p(c(le),8),Q=c(J);Q.__click=[Nr,v];var ve=p(Q,2);ve.__click=[Ur,t,v,_];var ne=c(ve);Je(ne,{size:20}),ye(),o(ve),o(J),o(le),o(Z),$(ee,Z)};G(we,ee=>{n(v)&&ee(Me)})}o(x),re((ee,Z,le,J)=>{j.disabled=ee,A(te,` ${t().saveIntegrity??""}`),A(S,` ${Z??""}`),A(X,` ${le??""}`),A(pe,` ${J??""}`)},[()=>!n(a).trim(),()=>new Date(t().lastValidation).toLocaleString(),()=>t().exp.toLocaleString(),()=>t().lifetimeExp.toLocaleString()]),Ya(I,()=>n(a),ee=>W(a,ee)),$(r,x),Se()}Ke(["click"]);var Vr=H("<option> </option>"),qr=(r,e)=>{e(e().darkmode=!e().darkmode,!0)},Dr=H('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="darkmode-toggle" class="svelte-mt7s6l">Dark Mode</label> <button id="darkmode-toggle" class="toggle-button svelte-mt7s6l"><!> <span class="toggle-label svelte-mt7s6l"> </span></button></div></section></div></div>');function Or(r,e){$e(e,!0);let t=ue(e,"config",15);const a=Za();var s=Dr(),l=p(c(s),2),i=c(l),v=p(c(i),2),_=c(v),d=p(c(_),2),x=c(d,!0);o(d),o(_);var g=p(_,2),f=p(c(g),2),w=c(f,!0);o(f),o(g);var m=p(g,2),y=p(c(m),2),b=c(y,!0);o(y),o(m);var k=p(m,2),E=p(c(k),2),N=c(E,!0);o(E),o(k),o(v),o(i);var M=p(i,2),T=p(c(M),2),u=p(c(T),2);ht(u,21,()=>a,zt,(V,K)=>{var F=Vr(),te=c(F,!0);o(F);var P={};re(S=>{A(te,S),P!==(P=n(K))&&(F.value=(F.__value=n(K))??"")},[()=>Qa(n(K))]),$(V,F)}),o(u),o(T);var h=p(T,2),C=p(c(h),2);C.__click=[qr,t];var O=c(C);{var U=V=>{fr(V,{size:32})},I=V=>{ur(V,{size:32})};G(O,V=>{t().darkmode?V(U):V(I,!1)})}var j=p(O,2),ie=c(j,!0);o(j),o(C),o(h),o(M),o(l),o(s),re((V,K)=>{A(x,e.game.name),A(w,e.game.level),A(b,V),A(N,K),A(ie,t().darkmode?"On":"Off")},[()=>Math.floor(e.game.exp).toLocaleString(),()=>Math.floor(e.game.lifetimeExp).toLocaleString()]),Ga(u,()=>t().theme,V=>t(t().theme=V,!0)),$(r,s),Se()}Ke(["click"]);function Fr(r,e,t){n(e)<t&&Pt(e)}function Rr(r,e){n(e)>1&&Pt(e,-1)}var Br=H('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function Hr(r,e){$e(e,!0);let t=qe(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var l=Br(),i=c(l),v=c(i),_=c(v),d=c(_);d.__click=[Rr,t];var x=p(d,2),g=c(x),f=c(g);o(g);var w=p(g,2),m=c(w);o(w),o(x);var y=p(x,2);y.__click=[Fr,t,a],o(_);var b=p(_,2),k=c(b),E=c(k,!0);o(k),o(b),o(v),o(i),o(l),re(()=>{d.disabled=n(t)===1,A(f,`Chapter ${n(t)??""}`),A(m,`(${n(t)??""}/9)`),y.disabled=n(t)===a,A(E,s[n(t)-1])}),$(r,l),Se()}Ke(["click"]);var Xr=H('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),Gr=H('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Kr=H("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),Wr=H('<div class="view svelte-1l6ze8i"><!></div>');function Jr(r,e){$e(e,!1);const t=Ee();let a=ue(e,"config",12),s=ue(e,"game",12);Xe(()=>z(s()),()=>{W(t,s()?.menu)}),tt(),Ge();var l=Wr(),i=c(l);Va(i,()=>n(t),v=>{var _=B(),d=D(_);{var x=f=>{xr(f,{get config(){return a()},set config(w){a(w)},get game(){return s()},set game(w){s(w)},$$legacy:!0})},g=f=>{var w=B(),m=D(w);{var y=k=>{wr(k,{get config(){return a()},set config(E){a(E)},get game(){return s()},set game(E){s(E)},$$legacy:!0})},b=k=>{var E=B(),N=D(E);{var M=u=>{Ir(u,{get config(){return a()},set config(h){a(h)},get game(){return s()},set game(h){s(h)},$$legacy:!0})},T=u=>{var h=B(),C=D(h);{var O=I=>{Hr(I,{get game(){return s()},set game(j){s(j)},$$legacy:!0})},U=I=>{var j=B(),ie=D(j);{var V=F=>{Or(F,{get config(){return a()},set config(te){a(te)},get game(){return s()},set game(te){s(te)},$$legacy:!0})},K=F=>{var te=B(),P=D(te);{var S=X=>{var Y=Xr();$(X,Y)},R=X=>{var Y=B(),pe=D(Y);{var ae=se=>{var we=Gr();$(se,we)},be=se=>{var we=Kr();$(se,we)};G(pe,se=>{s()?se(be,!1):se(ae)},!0)}$(X,Y)};G(P,X=>{z(s()),L(()=>s()&&s().menu==="about")?X(S):X(R,!1)},!0)}$(F,te)};G(ie,F=>{z(s()),L(()=>s()&&s().menu==="settings")?F(V):F(K,!1)},!0)}$(I,j)};G(C,I=>{z(s()),L(()=>s()&&s().menu==="story")?I(O):I(U,!1)},!0)}$(u,h)};G(N,u=>{z(s()),L(()=>s()&&s().menu==="saves")?u(M):u(T,!1)},!0)}$(k,E)};G(m,k=>{z(s()),L(()=>s()&&s().menu==="upgrades")?k(y):k(b,!1)},!0)}$(f,w)};G(d,f=>{z(s()),L(()=>s()&&s().menu==="practice")?f(x):f(g,!1)})}$(v,_)}),o(l),$(r,l),Se()}var Yr=H('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Zr=H('<footer class="footer svelte-1uha8ag"><!></footer>'),Qr=H('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),es=H('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),ts=H("<div><!></div>");function ns(r,e){$e(e,!1);const t=Ee();let a=Ee(new er("prussian-blue",!0)),s=Ee();Zt(()=>{W(s,new tr),setTimeout(()=>{n(s)&&(n(s).loadFromLocalStorage()||n(s).loadFromCookies(),W(s,n(s)))},100);const d=setInterval(()=>{n(s)&&n(s).autoSave()},15e3);return()=>{clearInterval(d)}}),Xe(()=>n(a),()=>{W(t,n(a)?n(a).getTheme():"")}),tt(),Ge();var l=ts();Qt(d=>{var x=Yr();Ia.title="TomeClicker",ye(6),$(d,x)});var i=c(l);{var v=d=>{var x=Qr(),g=D(x);{var f=k=>{sr(k,{get game(){return n(s)}})};G(g,k=>{n(s),L(()=>n(s).showHeader())&&k(f)})}var w=p(g,2),m=c(w);Jr(m,{get game(){return n(s)},set game(k){W(s,k)},get config(){return n(a)},set config(k){W(a,k)},$$legacy:!0}),o(w);var y=p(w,2);{var b=k=>{var E=Zr(),N=c(E);mr(N,{get game(){return n(s)},set game(M){W(s,M)},$$legacy:!0}),o(E),$(k,E)};G(y,k=>{n(s),L(()=>n(s).showMenu())&&k(b)})}$(d,x)},_=d=>{var x=es();$(d,x)};G(i,d=>{n(s)?d(v):d(_,!1)})}o(l),re(()=>ge(l,1,`app ${n(t)??""}`,"svelte-1uha8ag")),$(r,l),Se()}export{ns as component};
