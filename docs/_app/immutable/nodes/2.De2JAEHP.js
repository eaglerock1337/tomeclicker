import"../chunks/DsnmJJEf.js";import{i as Oe}from"../chunks/Cd55SYnr.js";import{i as wa,a as Ca,c as Aa,d as ct,n as La,b as Ea,s as C,e as he,o as Ta,f as Ua}from"../chunks/Bl-oD2Vi.js";import{w as ce,x as ot,aU as ja,aV as Da,aW as Na,v as dt,C as mt,D as Xe,F as Re,G as Wt,K as qe,U as Jt,J as It,h as r,N as rt,y as za,H as Ia,z as Vt,A as lt,B as Be,a9 as Pa,aC as qa,az as Qt,ap as Zt,aQ as pe,a0 as Rt,a8 as Ft,I as Pt,aX as _t,aY as Lt,ag as Ze,aZ as bt,a_ as Oa,am as Va,a$ as Ra,ay as Fa,b0 as Ba,S as ea,au as ta,b1 as aa,a7 as Ha,b2 as Xa,b3 as Ga,E as Ka,b4 as Ya,aB as Wa,aP as qt,b5 as Ja,b6 as Qa,ar as Za,b7 as sa,b8 as es,b9 as ts,ba as as,bb as ss,bc as is,bd as rs,be as ls,bf as ns,bg as os,aO as vs,e as u,a5 as cs,bh as ds,p as Ae,l as I,n,o as l,q as c,aS as Ot,t as J,a as f,m as Le,bi as us,i as M,c as se,f as Q,bj as fs,bk as Ce,Q as ie,bl as Ke,aR as Fe,aT as be,ah as de,bm as ps,bn as gs,a1 as ia,bo as hs}from"../chunks/BGLDHNfr.js";import{i as z,l as ge,p as xe,s as ye}from"../chunks/BxTBcEuA.js";function ms(i,t,e){ce&&ot();var a=i,s=Jt,v,o,d=null,b=ja()?Da:Na;function p(){v&&It(v),d!==null&&(d.lastChild.remove(),a.before(d),d=null),v=o}dt(()=>{if(b(s,s=t())){var m=a,x=Wt();x&&(d=document.createDocumentFragment(),d.append(m=mt())),o=Xe(()=>e(m)),x?Re.add_callback(p):p()}}),ce&&(a=qe)}function vt(i,t){return t}function _s(i,t,e){for(var a=i.items,s=[],v=t.length,o=0;o<v;o++)Ra(t[o].e,s,!0);var d=v>0&&s.length===0&&e!==null;if(d){var b=e.parentNode;Fa(b),b.append(e),a.clear(),Ie(i,t[0].prev,t[v-1].next)}Ba(s,()=>{for(var p=0;p<v;p++){var m=t[p];d||(a.delete(m.k),Ie(i,m.prev,m.next)),Ze(m.e,!d)}})}function Ge(i,t,e,a,s,v=null){var o=i,d={flags:t,items:new Map,first:null},b=(t&aa)!==0;if(b){var p=i;o=ce?lt(ta(p)):p.appendChild(mt())}ce&&ot();var m=null,x=!1,h=new Map,w=rt(()=>{var L=e();return Zt(L)?L:L==null?[]:Qt(L)}),g,$;function y(){bs($,g,d,h,o,s,t,a,e),v!==null&&(g.length===0?m?Pt(m):m=Xe(()=>v(o)):m!==null&&It(m,()=>{m=null}))}dt(()=>{$??=ea,g=r(w);var L=g.length;if(x&&L===0)return;x=L===0;let A=!1;if(ce){var R=za(o)===Ia;R!==(L===0)&&(o=Vt(),lt(o),Be(!1),A=!0)}if(ce){for(var E=null,q,_=0;_<L;_++){if(qe.nodeType===Pa&&qe.data===qa){o=qe,A=!0,Be(!1);break}var S=g[_],j=a(S,_);q=zt(qe,d,E,null,S,j,_,s,t,e),d.items.set(j,q),E=q}L>0&&lt(Vt())}if(ce)L===0&&v&&(m=Xe(()=>v(o)));else if(Wt()){var G=new Set,D=Re;for(_=0;_<L;_+=1){S=g[_],j=a(S,_);var V=d.items.get(j)??h.get(j);V?(t&(bt|_t))!==0&&ra(V,S,_,t):(q=zt(null,d,null,null,S,j,_,s,t,e,!0),h.set(j,q)),G.add(j)}for(const[F,le]of d.items)G.has(F)||D.skipped_effects.add(le.e);D.add_callback(y)}else y();A&&Be(!0),r(w)}),ce&&(o=qe)}function bs(i,t,e,a,s,v,o,d,b){var p=(o&Xa)!==0,m=(o&(bt|_t))!==0,x=t.length,h=e.items,w=e.first,g=w,$,y=null,L,A=[],R=[],E,q,_,S;if(p)for(S=0;S<x;S+=1)E=t[S],q=d(E,S),_=h.get(q),_!==void 0&&(_.a?.measure(),(L??=new Set).add(_));for(S=0;S<x;S+=1){if(E=t[S],q=d(E,S),_=h.get(q),_===void 0){var j=a.get(q);if(j!==void 0){a.delete(q),h.set(q,j);var G=y?y.next:g;Ie(e,y,j),Ie(e,j,G),Et(j,G,s),y=j}else{var D=g?g.e.nodes_start:s;y=zt(D,e,y,y===null?e.first:y.next,E,q,S,v,o,b)}h.set(q,y),A=[],R=[],g=y.next;continue}if(m&&ra(_,E,S,o),(_.e.f&Lt)!==0&&(Pt(_.e),p&&(_.a?.unfix(),(L??=new Set).delete(_))),_!==g){if($!==void 0&&$.has(_)){if(A.length<R.length){var V=R[0],F;y=V.prev;var le=A[0],K=A[A.length-1];for(F=0;F<A.length;F+=1)Et(A[F],V,s);for(F=0;F<R.length;F+=1)$.delete(R[F]);Ie(e,le.prev,K.next),Ie(e,y,le),Ie(e,K,V),g=V,y=K,S-=1,A=[],R=[]}else $.delete(_),Et(_,g,s),Ie(e,_.prev,_.next),Ie(e,_,y===null?e.first:y.next),Ie(e,y,_),y=_;continue}for(A=[],R=[];g!==null&&g.k!==q;)(g.e.f&Lt)===0&&($??=new Set).add(g),R.push(g),g=g.next;if(g===null)continue;_=g}A.push(_),y=_,g=_.next}if(g!==null||$!==void 0){for(var O=$===void 0?[]:Qt($);g!==null;)(g.e.f&Lt)===0&&O.push(g),g=g.next;var B=O.length;if(B>0){var N=(o&aa)!==0&&x===0?s:null;if(p){for(S=0;S<B;S+=1)O[S].a?.measure();for(S=0;S<B;S+=1)O[S].a?.fix()}_s(e,O,N)}}p&&Ha(()=>{if(L!==void 0)for(_ of L)_.a?.apply()}),i.first=e.first&&e.first.e,i.last=y&&y.e;for(var k of a.values())Ze(k.e);a.clear()}function ra(i,t,e,a){(a&bt)!==0&&Ft(i.v,t),(a&_t)!==0?Ft(i.i,e):i.i=e}function zt(i,t,e,a,s,v,o,d,b,p,m){var x=(b&bt)!==0,h=(b&Oa)===0,w=x?h?pe(s,!1,!1):Rt(s):s,g=(b&_t)===0?o:Rt(o),$={i:g,v:w,k:v,a:null,e:null,prev:e,next:a};try{if(i===null){var y=document.createDocumentFragment();y.append(i=mt())}return $.e=Xe(()=>d(i,w,g,p),ce),$.e.prev=e&&e.e,$.e.next=a&&a.e,e===null?m||(t.first=$):(e.next=$,e.e.next=$.e),a!==null&&(a.prev=$,a.e.prev=$.e),$}finally{}}function Et(i,t,e){for(var a=i.next?i.next.e.nodes_start:e,s=t?t.e.nodes_start:e,v=i.e.nodes_start;v!==null&&v!==a;){var o=Va(v);s.before(v),v=o}}function Ie(i,t,e){t===null?i.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function me(i,t,e,a,s){ce&&ot();var v=t.$$slots?.[e],o=!1;v===!0&&(v=t.children,o=!0),v===void 0||v(i,o?()=>a:a)}function xs(i,t,e,a,s,v){let o=ce;ce&&ot();var d,b,p=null;ce&&qe.nodeType===Ga&&(p=qe,ot());var m=ce?qe:i,x;dt(()=>{const h=t()||null;var w=Ya;h!==d&&(x&&(h===null?It(x,()=>{x=null,b=null}):h===b?Pt(x):Ze(x)),h&&h!==b&&(x=Xe(()=>{if(p=ce?p:document.createElementNS(w,h),Wa(p,p),a){ce&&wa(h)&&p.append(document.createComment(""));var g=ce?ta(p):p.appendChild(mt());ce&&(g===null?Be(!1):lt(g)),a(p,g)}ea.nodes_end=p,m.before(p)})),d=h,d&&(b=d))},Ka),o&&(Be(!0),lt(m))}function ys(i,t){var e=void 0,a;dt(()=>{e!==(e=t())&&(a&&(Ze(a),a=null),e&&(a=Xe(()=>{qt(()=>e(i))})))})}function la(i){var t,e,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(t=0;t<s;t++)i[t]&&(e=la(i[t]))&&(a&&(a+=" "),a+=e)}else for(e in i)i[e]&&(a&&(a+=" "),a+=e);return a}function ks(){for(var i,t,e=0,a="",s=arguments.length;e<s;e++)(i=arguments[e])&&(t=la(i))&&(a&&(a+=" "),a+=t);return a}function $s(i){return typeof i=="object"?ks(i):i??""}const Bt=[...` 	
\r\f \v\uFEFF`];function Ss(i,t,e){var a=i==null?"":""+i;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var v=s.length,o=0;(o=a.indexOf(s,o))>=0;){var d=o+v;(o===0||Bt.includes(a[o-1]))&&(d===a.length||Bt.includes(a[d]))?a=(o===0?"":a.substring(0,o))+a.substring(d+1):o=d}}return a===""?null:a}function Ht(i,t=!1){var e=t?" !important;":";",a="";for(var s in i){var v=i[s];v!=null&&v!==""&&(a+=" "+s+": "+v+e)}return a}function Tt(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function Ms(i,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var v=!1,o=0,d=!1,b=[];a&&b.push(...Object.keys(a).map(Tt)),s&&b.push(...Object.keys(s).map(Tt));var p=0,m=-1;const $=i.length;for(var x=0;x<$;x++){var h=i[x];if(d?h==="/"&&i[x-1]==="*"&&(d=!1):v?v===h&&(v=!1):h==="/"&&i[x+1]==="*"?d=!0:h==='"'||h==="'"?v=h:h==="("?o++:h===")"&&o--,!d&&v===!1&&o===0){if(h===":"&&m===-1)m=x;else if(h===";"||x===$-1){if(m!==-1){var w=Tt(i.substring(p,m).trim());if(!b.includes(w)){h!==";"&&x++;var g=i.substring(p,x).trim();e+=" "+g+";"}}p=x+1,m=-1}}}}return a&&(e+=Ht(a)),s&&(e+=Ht(s,!0)),e=e.trim(),e===""?null:e}return i==null?null:String(i)}function ve(i,t,e,a,s,v){var o=i.__className;if(ce||o!==e||o===void 0){var d=Ss(e,a,v);(!ce||d!==i.getAttribute("class"))&&(d==null?i.removeAttribute("class"):t?i.className=d:i.setAttribute("class",d)),i.__className=e}else if(v&&s!==v)for(var b in v){var p=!!v[b];(s==null||p!==!!s[b])&&i.classList.toggle(b,p)}return v}function Ut(i,t={},e,a){for(var s in e){var v=e[s];t[s]!==v&&(e[s]==null?i.style.removeProperty(s):i.style.setProperty(s,v,a))}}function xt(i,t,e,a){var s=i.__style;if(ce||s!==t){var v=Ms(t,a);(!ce||v!==i.getAttribute("style"))&&(v==null?i.removeAttribute("style"):i.style.cssText=v),i.__style=t}else a&&(Array.isArray(a)?(Ut(i,e?.[0],a[0]),Ut(i,e?.[1],a[1],"important")):Ut(i,e,a));return a}function ht(i,t,e=!1){if(i.multiple){if(t==null)return;if(!Zt(t))return Ja();for(var a of i.options)a.selected=t.includes(nt(a));return}for(a of i.options){var s=nt(a);if(Qa(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(i.selectedIndex=-1)}function na(i){var t=new MutationObserver(()=>{ht(i,i.__value)});t.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Za(()=>{t.disconnect()})}function oa(i,t,e=t){var a=!0;sa(i,"change",s=>{var v=s?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(v),nt);else{var d=i.querySelector(v)??i.querySelector("option:not([disabled])");o=d&&nt(d)}e(o)}),qt(()=>{var s=t();if(ht(i,s,a),a&&s===void 0){var v=i.querySelector(":checked");v!==null&&(s=nt(v),e(s))}i.__value=s,a=!1}),na(i)}function nt(i){return"__value"in i?i.__value:i.value}const st=Symbol("class"),it=Symbol("style"),va=Symbol("is custom element"),ca=Symbol("is html");function ws(i){if(ce){var t=!1,e=()=>{if(!t){if(t=!0,i.hasAttribute("value")){var a=i.value;He(i,"value",null),i.value=a}if(i.hasAttribute("checked")){var s=i.checked;He(i,"checked",null),i.checked=s}}};i.__on_r=e,ss(e),is()}}function Cs(i,t){t?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function He(i,t,e,a){var s=da(i);ce&&(s[t]=i.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&i.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(i[ns]=e),e==null?i.removeAttribute(t):typeof e!="string"&&ua(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function As(i,t,e,a,s=!1,v=!1){if(ce&&s&&i.tagName==="INPUT"){var o=i,d=o.type==="checkbox"?"defaultChecked":"defaultValue";d in e||ws(o)}var b=da(i),p=b[va],m=!b[ca];let x=ce&&p;x&&Be(!1);var h=t||{},w=i.tagName==="OPTION";for(var g in t)g in e||(e[g]=null);e.class?e.class=$s(e.class):e[st]&&(e.class=null),e[it]&&(e.style??=null);var $=ua(i);for(const _ in e){let S=e[_];if(w&&_==="value"&&S==null){i.value=i.__value="",h[_]=S;continue}if(_==="class"){var y=i.namespaceURI==="http://www.w3.org/1999/xhtml";ve(i,y,S,a,t?.[st],e[st]),h[_]=S,h[st]=e[st];continue}if(_==="style"){xt(i,S,t?.[it],e[it]),h[_]=S,h[it]=e[it];continue}var L=h[_];if(!(S===L&&!(S===void 0&&i.hasAttribute(_)))){h[_]=S;var A=_[0]+_[1];if(A!=="$$")if(A==="on"){const j={},G="$$"+_;let D=_.slice(2);var R=Ea(D);if(Ca(D)&&(D=D.slice(0,-7),j.capture=!0),!R&&L){if(S!=null)continue;i.removeEventListener(D,h[G],j),h[G]=null}if(S!=null)if(R)i[`__${D}`]=S,ct([D]);else{let V=function(F){h[_].call(this,F)};h[G]=Aa(D,i,V,j)}else R&&(i[`__${D}`]=void 0)}else if(_==="style")He(i,_,S);else if(_==="autofocus")as(i,!!S);else if(!p&&(_==="__value"||_==="value"&&S!=null))i.value=i.__value=S;else if(_==="selected"&&w)Cs(i,S);else{var E=_;m||(E=La(E));var q=E==="defaultValue"||E==="defaultChecked";if(S==null&&!p&&!q)if(b[_]=null,E==="value"||E==="checked"){let j=i;const G=t===void 0;if(E==="value"){let D=j.defaultValue;j.removeAttribute(E),j.defaultValue=D,j.value=j.__value=G?D:null}else{let D=j.defaultChecked;j.removeAttribute(E),j.defaultChecked=D,j.checked=G?D:!1}}else i.removeAttribute(_);else q||$.includes(E)&&(p||typeof S!="string")?(i[E]=S,E in b&&(b[E]=Jt)):typeof S!="function"&&He(i,E,S)}}}return x&&Be(!0),h}function Xt(i,t,e=[],a=[],s,v=!1,o=!1){es(e,a,d=>{var b=void 0,p={},m=i.nodeName==="SELECT",x=!1;if(dt(()=>{var w=t(...d.map(r)),g=As(i,b,w,s,v,o);x&&m&&"value"in w&&ht(i,w.value);for(let y of Object.getOwnPropertySymbols(p))w[y]||Ze(p[y]);for(let y of Object.getOwnPropertySymbols(w)){var $=w[y];y.description===ts&&(!b||$!==b[y])&&(p[y]&&Ze(p[y]),p[y]=Xe(()=>ys(i,()=>$))),g[y]=$}b=g}),m){var h=i;qt(()=>{ht(h,b.value,!0),na(h)})}x=!0})}function da(i){return i.__attributes??={[va]:i.nodeName.includes("-"),[ca]:i.namespaceURI===rs}}var Gt=new Map;function ua(i){var t=i.getAttribute("is")||i.nodeName,e=Gt.get(t);if(e)return e;Gt.set(t,e=[]);for(var a,s=i,v=Element.prototype;v!==s;){a=os(s);for(var o in a)a[o].set&&e.push(o);s=ls(s)}return e}function Ls(i,t,e=t){var a=new WeakSet;sa(i,"input",async s=>{var v=s?i.defaultValue:i.value;if(v=jt(i)?Dt(v):v,e(v),Re!==null&&a.add(Re),await vs(),v!==(v=t())){var o=i.selectionStart,d=i.selectionEnd;i.value=v??"",d!==null&&(i.selectionStart=o,i.selectionEnd=Math.min(d,i.value.length))}}),(ce&&i.defaultValue!==i.value||u(t)==null&&i.value)&&(e(jt(i)?Dt(i.value):i.value),Re!==null&&a.add(Re)),cs(()=>{var s=t();if(i===document.activeElement){var v=ds??Re;if(a.has(v))return}jt(i)&&s===Dt(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function jt(i){var t=i.type;return t==="number"||t==="range"}function Dt(i){return i===""?null:+i}const yt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function Es(){return Object.keys(yt)}function Ts(i){return yt[i]?.displayName||i}function Nt(i){return i in yt}class Us{displayMode;theme;constructor(t="prussian-blue",e="system"){this.displayMode=e,this.theme=Nt(t)?t:"prussian-blue"}getTheme(){const t=this.getEffectiveShade();return`${this.theme}-${t}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(t){return Nt(t)?(this.theme=t,!0):!1}setDisplayMode(t){this.displayMode=t}getAvailableThemes(){return Object.keys(yt)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(t){this.displayMode=t?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t={theme:this.theme,displayMode:this.displayMode};localStorage.setItem("tomeclicker_config",JSON.stringify(t))}catch(t){console.error("Failed to save config to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_config");if(t){const e=JSON.parse(t);return e.theme&&Nt(e.theme)&&(this.theme=e.theme),e.displayMode&&(this.displayMode=e.displayMode),!0}return!1}catch(t){return console.error("Error loading config from localStorage:",t),!1}}}class js{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;critChance;critDamage;upgrades;saveIntegrity;lastValidation;_validationKey;stats;trainingActions;meditationActions;idleExpRate;adventureModeUnlocked;meditationUnlocked;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="discipline"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,t.currentLevel)),this.recalculateIdleExpRate()}recalculateIdleExpRate(){this.idleExpRate=0;for(const e of Object.values(this.upgrades))e.effectType==="idleExp"&&(this.idleExpRate+=e.effectValue*e.currentLevel);const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.idleExpRate*=Math.pow(5,t.currentLevel)),this.recalculateCritStats()}recalculateCritStats(){this.critChance=0,this.critDamage=.5;for(const t of Object.values(this.upgrades))t.effectType==="critChance"?this.critChance+=t.effectValue*t.currentLevel:t.effectType==="critDamage"&&(this.critDamage+=t.effectValue*t.currentLevel)}getTrainingSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingSpeed"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getTrainingCostMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingCost"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getOsmosisExpBonus(){let t=0;for(const e of Object.values(this.upgrades))e.effectType==="osmosisExp"&&(t+=e.effectValue*e.currentLevel);return t}getGlobalIdleSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="globalIdleSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getOsmosisSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="osmosisSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getStatLevelCost(t){const e=this.stats[t];return Math.floor(100*Math.pow(1.5,e-1))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}migrateTrainingActions(t){const e=this.initializeTrainingActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}migrateMeditationActions(t){const e=this.initializeMeditationActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}initializeUpgrades(){return{"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields exponentially greater rewards",effect:"+100% EXP per click per level",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1,minLevel:1},"critical-insight":{id:"critical-insight",name:"Critical Insight",description:"Moments of clarity grant bursts of understanding",effect:"+0.5% crit chance per level",baseCost:250,costMultiplier:1.75,maxLevel:50,currentLevel:0,effectType:"critChance",effectValue:.005,minLevel:1},"devastating-critique":{id:"devastating-critique",name:"Devastating Critique",description:"Critical insights become increasingly profound",effect:"+5% crit damage per level",baseCost:500,costMultiplier:2,maxLevel:50,currentLevel:0,effectType:"critDamage",effectValue:.05,minLevel:1},"osmotic-absorption":{id:"osmotic-absorption",name:"Deep Contemplation",description:"Thoughtful reflection yields greater insights",effect:"+1 EXP per rumination level",baseCost:100,costMultiplier:1.18,maxLevel:100,currentLevel:0,effectType:"osmosisExp",effectValue:1,minLevel:2},"flow-state":{id:"flow-state",name:"Flow State",description:"Enter a state of effortless focus",effect:"+2% rumination speed per level",baseCost:300,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"osmosisSpeed",effectValue:.02,minLevel:2},"temporal-mastery":{id:"temporal-mastery",name:"Temporal Mastery",description:"Bend time itself to your will (affects ALL idle actions)",effect:"+5% global idle speed per level",baseCost:500,costMultiplier:1.25,maxLevel:100,currentLevel:0,effectType:"globalIdleSpeed",effectValue:.05,minLevel:2},"efficient-training":{id:"efficient-training",name:"Efficient Training",description:"Complete training exercises faster",effect:"-10% training time per level",baseCost:1e4,costMultiplier:1.3,maxLevel:10,currentLevel:0,effectType:"trainingSpeed",effectValue:.1,minLevel:3},"cost-reduction":{id:"cost-reduction",name:"Cost Reduction",description:"Training requires less EXP to start",effect:"-20% training cost per level",baseCost:15e3,costMultiplier:1.35,maxLevel:5,currentLevel:0,effectType:"trainingCost",effectValue:.2,minLevel:3},discipline:{id:"discipline",name:"Discipline",description:"Unified focus accelerates all progress",effect:"5x all EXP gain per level",baseCost:1e3,costMultiplier:100,maxLevel:10,currentLevel:0,effectType:"clickMultiplier",effectValue:5,minLevel:1}}}initializeTrainingActions(){return{"practice-osmosis":{id:"practice-osmosis",name:"Ruminate",description:"Learn through observation and reflection",progress:0,baseDuration:15e3,duration:15e3,expCost:0,isActive:!1,lastUpdate:Date.now()},"train-strength":{id:"train-strength",name:"Lift Heavy Objects",description:"Build raw physical power",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"strength"},"train-dexterity":{id:"train-dexterity",name:"Practice Quick Movements",description:"Improve agility and reflexes",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"dexterity"},"train-intelligence":{id:"train-intelligence",name:"Study Ancient Texts",description:"Expand knowledge and understanding",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"intelligence"},"train-wisdom":{id:"train-wisdom",name:"Meditate on Meaning",description:"Deepen insight and awareness",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"wisdom"}}}initializeMeditationActions(){return{"meditate-future":{id:"meditate-future",name:"Meditate on Your Future",description:"Unlock the path to adventure",progress:0,baseDuration:6e4,duration:6e4,expCost:50,isActive:!1,lastUpdate:Date.now(),oneTime:!0,completed:!1},disassociate:{id:"disassociate",name:"Disassociate",description:"Take a mental health day. Increases offline progress time.",progress:0,baseDuration:3e4,duration:3e4,expCost:100,isActive:!1,lastUpdate:Date.now(),oneTime:!1}}}startIdleAction(t,e){const a=t[e];if(!a||a.oneTime&&a.completed)return!1;for(const s of Object.values(t))s.isActive&&(s.isActive=!1,s.progress=0);if(a.isActive=!0,a.progress=0,a.lastUpdate=Date.now(),e==="practice-osmosis"){const s=this.getOsmosisSpeedMultiplier(),v=this.getGlobalIdleSpeedMultiplier(),o=s*v;a.duration=Math.floor(a.baseDuration/o)}else if(a.trainsStat){const s=this.getTrainingSpeedMultiplier(),v=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration*s/v)}else{const s=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration/s)}return!0}updateIdleActions(){const t=Date.now();for(const e of Object.values(this.trainingActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeTrainingAction(e.id)}for(const e of Object.values(this.meditationActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeMeditationAction(e.id)}}completeTrainingAction(t){const e=this.trainingActions[t];if(!(!e||!e.isActive)){if(t==="practice-osmosis"){const s=this.getOsmosisExpBonus();this.addExp(10+s),e.progress=0,e.lastUpdate=Date.now();return}if(e.trainsStat){const a=e.trainsStat,s=this.getStatLevelCost(a);let v=10;Math.random()<this.critChance&&(v=Math.floor(v*1.5)),this.addExp(v),this.exp>=s?(this.exp-=s,this.stats[a]++,e.progress=0,e.lastUpdate=Date.now()):(e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}}}completeMeditationAction(t){const e=this.meditationActions[t];!e||!e.isActive||(t==="meditate-future"&&(this.adventureModeUnlocked=!0,e.completed=!0),e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}stopIdleAction(t,e){const a=t[e];a&&(a.isActive=!1,a.progress=0,a.lastUpdate=Date.now())}showTraining(){return this.level>=2}showStats(){return this.level>=3}showMeditation(){return this.stats.strength>=5&&this.stats.dexterity>=5&&this.stats.intelligence>=5&&this.stats.wisdom>=5}showAdventure(){return this.adventureModeUnlocked}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="discipline"?e.baseCost*Math.pow(e.costMultiplier,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let v=0;v<e.length;v++)s+=String.fromCharCode(e.charCodeAt(v)^a.charCodeAt(v%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,critChance:this.critChance,critDamage:this.critDamage,upgrades:this.upgrades,stats:this.stats,trainingActions:this.trainingActions,meditationActions:this.meditationActions,idleExpRate:this.idleExpRate,adventureModeUnlocked:this.adventureModeUnlocked,meditationUnlocked:this.meditationUnlocked,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),v=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:v,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const v=this.decryptSave(e.data);a=JSON.parse(v)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.critChance=a.critChance||0,this.critDamage=a.critDamage||.5,this.stats=a.stats||{strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=a.trainingActions?this.migrateTrainingActions(a.trainingActions):this.initializeTrainingActions(),this.meditationActions=a.meditationActions?this.migrateMeditationActions(a.meditationActions):this.initializeMeditationActions(),this.idleExpRate=a.idleExpRate||0,this.adventureModeUnlocked=a.adventureModeUnlocked||!1,this.meditationUnlocked=a.meditationUnlocked||!1,this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const v=this.importSave(decodeURIComponent(s));return v.success?!0:(console.error("Failed to load save from cookies:",v.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t)}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(t){const e=this.importSave(t);return e.success?!0:(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){this.saveToLocalStorage()}hardReset(t=!0){const e=t?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=e,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var Ds=I('<div class="progress-container svelte-1xm1ks6"><div></div></div>'),Ns=I('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function zs(i,t){Ae(t,!0);const e=Ot(()=>{if(t.game.level<2)return null;const x=t.game.exp;let h=1/0,w=!1;const g=t.game.getLevelUpCost();g<h&&(h=g,w=x>=g);const $=t.game.upgrades.discipline;if($&&$.currentLevel<$.maxLevel){const y=t.game.getUpgradeCost("discipline");y<h&&(h=y,w=x>=y)}return h===1/0?null:{progress:Math.min(x/h,1),canAfford:w}});var a=Ns(),s=n(a),v=n(s),o=n(v);l(v);var d=c(v,2),b=n(d);l(d),l(s);var p=c(s,2);{var m=x=>{var h=Ds(),w=n(h);let g;l(h),J($=>{g=ve(w,1,"progress-bar svelte-1xm1ks6",null,g,$),xt(w,`width: ${r(e).progress*100}%`)},[()=>({full:r(e).canAfford})]),f(x,h)};z(p,x=>{r(e)&&x(m)})}l(a),J(x=>{C(o,`EXP: ${x??""}`),C(b,`Level: ${t.game.level??""}`)},[()=>Math.floor(t.game.exp).toLocaleString()]),f(i,a),Le()}/**
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
 */const Is={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ps=us("<svg><!><!></svg>");function ke(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]),a=ge(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ae(t,!1);let s=xe(t,"name",8,void 0),v=xe(t,"color",8,"currentColor"),o=xe(t,"size",8,24),d=xe(t,"strokeWidth",8,2),b=xe(t,"absoluteStrokeWidth",8,!1),p=xe(t,"iconNode",24,()=>[]);const m=(...g)=>g.filter(($,y,L)=>!!$&&L.indexOf($)===y).join(" ");Oe();var x=Ps();Xt(x,(g,$)=>({...Is,...a,width:o(),height:o(),stroke:v(),"stroke-width":g,class:$}),[()=>(M(b()),M(d()),M(o()),u(()=>b()?Number(d())*24/Number(o()):d())),()=>(M(s()),M(e),u(()=>m("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var h=n(x);Ge(h,1,p,vt,(g,$)=>{var y=Ot(()=>fs(r($),2));let L=()=>r(y)[0],A=()=>r(y)[1];var R=se(),E=Q(R);xs(E,L,!0,(q,_)=>{Xt(q,()=>({...A()}))}),f(g,R)});var w=c(h);me(w,t,"default",{}),l(x),f(i,x),Le()}function qs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];ke(i,ye({name:"brain"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Os(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];ke(i,ye({name:"chart-column"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Vs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ke(i,ye({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Rs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ke(i,ye({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Fs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];ke(i,ye({name:"compass"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Kt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ke(i,ye({name:"download"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Bs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];ke(i,ye({name:"dumbbell"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function ft(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ke(i,ye({name:"external-link"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Hs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ke(i,ye({name:"github"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function pt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ke(i,ye({name:"globe"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function fa(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ke(i,ye({name:"info"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function pa(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];ke(i,ye({name:"mouse-pointer"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function ga(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ke(i,ye({name:"save"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Xs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ke(i,ye({name:"settings"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Gs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ke(i,ye({name:"square-pen"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Ks(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ke(i,ye({name:"trending-up"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function gt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ke(i,ye({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Yt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];ke(i,ye({name:"upload"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}var Ys=I('<button class="svelte-igdjqh"><p><!></p></button>'),Ws=I('<button class="svelte-igdjqh"><p><!></p></button>'),Js=I('<button class="svelte-igdjqh"><p><!></p></button>'),Qs=I('<button class="svelte-igdjqh"><p><!></p></button>'),Zs=I('<button class="svelte-igdjqh"><p><!></p></button>'),ei=I('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <!> <!> <!> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function ti(i,t){Ae(t,!1);const e=pe();let a=xe(t,"game",12);Ce(()=>M(a()),()=>{ie(e,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(W=>a().canAffordUpgrade(W.id))))}),Ke(),Oe();var s=ei(),v=n(s),o=n(v),d=n(o,!0);l(o),l(v);var b=c(v,2),p=n(b),m=n(p);let x;var h=n(m);pa(h,{size:24}),l(m),l(p);var w=c(p,2);{var g=W=>{var ee=Ys(),H=n(ee);let ae;var T=n(H);Ks(T,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&r(e)})]),he("click",ee,()=>a(a().menu="upgrades",!0)),f(W,ee)};z(w,W=>{M(a()),u(()=>a().showUpgrades())&&W(g)})}var $=c(w,2);{var y=W=>{var ee=Ws(),H=n(ee);let ae;var T=n(H);Bs(T,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="training"})]),he("click",ee,()=>a(a().menu="training",!0)),f(W,ee)};z($,W=>{M(a()),u(()=>a().showTraining())&&W(y)})}var L=c($,2);{var A=W=>{var ee=Js(),H=n(ee);let ae;var T=n(H);Os(T,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="stats"})]),he("click",ee,()=>a(a().menu="stats",!0)),f(W,ee)};z(L,W=>{M(a()),u(()=>a().showStats())&&W(A)})}var R=c(L,2);{var E=W=>{var ee=Qs(),H=n(ee);let ae;var T=n(H);qs(T,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="meditation"})]),he("click",ee,()=>a(a().menu="meditation",!0)),f(W,ee)};z(R,W=>{M(a()),u(()=>a().showMeditation())&&W(E)})}var q=c(R,2);{var _=W=>{var ee=Zs(),H=n(ee);let ae;var T=n(H);Fs(T,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="adventure"})]),he("click",ee,()=>a(a().menu="adventure",!0)),f(W,ee)};z(q,W=>{M(a()),u(()=>a().showAdventure())&&W(_)})}var S=c(q,2),j=n(S);let G;var D=n(j);Gs(D,{size:24}),l(j),l(S);var V=c(S,2),F=n(V);let le;var K=n(F);Rs(K,{size:24}),l(F),l(V);var O=c(V,2),B=n(O);let N;var k=n(B);ga(k,{size:24}),l(B),l(O);var U=c(O,2),Y=n(U);let te;var re=n(Y);Xs(re,{size:24}),l(Y),l(U);var ne=c(U,2),X=n(ne);let Z;var ue=n(X);fa(ue,{size:24}),l(X),l(ne),l(b),l(s),J((W,ee,H,ae,T,P)=>{C(d,(M(a()),u(()=>a().menu))),x=ve(m,1,"svelte-igdjqh",null,x,W),G=ve(j,1,"svelte-igdjqh",null,G,ee),le=ve(F,1,"svelte-igdjqh",null,le,H),N=ve(B,1,"svelte-igdjqh",null,N,ae),te=ve(Y,1,"svelte-igdjqh",null,te,T),Z=ve(X,1,"svelte-igdjqh",null,Z,P)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),he("click",p,()=>a(a().menu="practice",!0)),he("click",S,()=>a(a().menu="story",!0)),he("click",V,()=>a(a().menu="help",!0)),he("click",O,()=>a(a().menu="saves",!0)),he("click",U,()=>a(a().menu="settings",!0)),he("click",ne,()=>a(a().menu="about",!0)),f(i,s),Le()}var ai=I('<div class="crit-text svelte-ylrqw9">CRIT!</div>'),si=I('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><!> <div class="item svelte-ylrqw9"><!><br class="svelte-ylrqw9"/> </div></button></div></div>');function ii(i,t){Ae(t,!0);let e=xe(t,"game",15),a=Ot(()=>e()?e().updateClickText():"Loading..."),s=Fe(!1);function v(){if(!e())return;let g=e().getClickValue();Math.random()<e().critChance&&(g*=1+e().critDamage,ie(s,!0),setTimeout(()=>ie(s,!1),300)),e().addExp(g),e(e())}var o=si(),d=n(o),b=n(d);b.__click=v,b.__touchstart=v;var p=n(b);{var m=g=>{var $=ai();f(g,$)};z(p,g=>{r(s)&&g(m)})}var x=c(p,2),h=n(x);pa(h,{size:48});var w=c(h,2,!0);l(x),l(b),l(d),l(o),J(()=>C(w,r(a))),f(i,o),Le()}ct(["click","touchstart"]);var ri=I('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),li=I('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),ni=I('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),oi=I('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function vi(i,t){Ae(t,!1);const e=pe(),a=pe();let s=xe(t,"game",8),v=xe(t,"config",8),o=pe(null);function d(N){ie(o,N)}function b(){r(o)&&s().purchaseUpgrade(r(o).id)&&(ie(o,s().upgrades[r(o).id]),s().autoSave())}function p(N){return N.toLocaleString()}function m(){s().levelUp()&&s().autoSave()}v(),Ce(()=>M(s()),()=>{ie(e,Object.values(s().upgrades).filter(N=>!N.minLevel||N.minLevel<=s().level).filter(N=>N.id!=="discipline"))}),Ce(()=>M(s()),()=>{ie(a,s().upgrades.discipline)}),Ke(),Oe();var x=oi(),h=c(n(x),2),w=n(h),g=n(w);let $;var y=c(n(g),2),L=n(y);l(y);var A=c(y,2),R=n(A);l(A),l(g);var E=c(g,2);let q;var _=n(E),S=n(_,!0);l(_);var j=c(_,2),G=n(j);l(j);var D=c(j,2),V=n(D);l(D),l(E);var F=c(E,2);Ge(F,1,()=>r(e),N=>N.id,(N,k)=>{var U=ri();let Y;var te=n(U),re=n(te,!0);l(te);var ne=c(te,2),X=n(ne);l(ne);var Z=c(ne,2),ue=n(Z);l(Z);var W=c(Z,2),ee=n(W);{var H=T=>{var P=be();J(oe=>C(P,`+${oe??""}% click EXP per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(T,P)},ae=T=>{var P=se(),oe=Q(P);{var $e=fe=>{var _e=be();J(Me=>C(_e,`+${Me??""}% crit chance per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(1)))]),f(fe,_e)},Se=fe=>{var _e=se(),Me=Q(_e);{var Ue=we=>{var De=be();J(Ne=>C(De,`+${Ne??""}% crit damage per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(we,De)},je=we=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{var ze=be();J(()=>C(ze,`+${r(k),u(()=>r(k).effectValue)??""} rumination EXP per level`)),f(Ee,ze)},kt=Ee=>{var ze=se(),$t=Q(ze);{var St=Te=>{var Pe=be();J(wt=>C(Pe,`+${wt??""}% rumination speed per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Te,Pe)},Mt=Te=>{var Pe=se(),wt=Q(Pe);{var ha=Ye=>{var et=be();J(Ct=>C(et,`+${Ct??""}% all idle speed per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Ye,et)},ma=Ye=>{var et=se(),Ct=Q(et);{var _a=We=>{var tt=be();J(()=>C(tt,`+${r(k),u(()=>r(k).effectValue)??""} idle EXP/s per level`)),f(We,tt)},ba=We=>{var tt=se(),xa=Q(tt);{var ya=Je=>{var at=be();J(At=>C(at,`-${At??""}% training time per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Je,at)},ka=Je=>{var at=se(),At=Q(at);{var $a=Qe=>{var ut=be();J(Ma=>C(ut,`-${Ma??""}% training cost per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Qe,ut)},Sa=Qe=>{var ut=be("Enhanced efficiency");f(Qe,ut)};z(At,Qe=>{r(k),u(()=>r(k).effectType==="trainingCost")?Qe($a):Qe(Sa,!1)},!0)}f(Je,at)};z(xa,Je=>{r(k),u(()=>r(k).effectType==="trainingSpeed")?Je(ya):Je(ka,!1)},!0)}f(We,tt)};z(Ct,We=>{r(k),u(()=>r(k).effectType==="idleExp")?We(_a):We(ba,!1)},!0)}f(Ye,et)};z(wt,Ye=>{r(k),u(()=>r(k).effectType==="globalIdleSpeed")?Ye(ha):Ye(ma,!1)},!0)}f(Te,Pe)};z($t,Te=>{r(k),u(()=>r(k).effectType==="osmosisSpeed")?Te(St):Te(Mt,!1)},!0)}f(Ee,ze)};z(Ne,Ee=>{r(k),u(()=>r(k).effectType==="osmosisExp")?Ee(Ve):Ee(kt,!1)},!0)}f(we,De)};z(Me,we=>{r(k),u(()=>r(k).effectType==="critDamage")?we(Ue):we(je,!1)},!0)}f(fe,_e)};z(oe,fe=>{r(k),u(()=>r(k).effectType==="critChance")?fe($e):fe(Se,!1)},!0)}f(T,P)};z(ee,T=>{r(k),u(()=>r(k).effectType==="clickMultiplier")?T(H):T(ae,!1)})}l(W),l(U),J((T,P,oe)=>{Y=ve(U,1,"upgrade-btn svelte-xd3x4d",null,Y,T),He(U,"aria-label",`Select ${r(k),u(()=>r(k).name)??""} upgrade. Level ${r(k),u(()=>r(k).currentLevel)??""} of ${r(k),u(()=>r(k).maxLevel)??""}. Cost: ${P??""} EXP`),C(re,(r(k),u(()=>r(k).name))),C(X,`Level ${r(k),u(()=>r(k).currentLevel)??""}/${r(k),u(()=>r(k).maxLevel)??""}`),C(ue,`${oe??""} EXP`)},[()=>({selected:r(o)?.id===r(k).id,affordable:s().canAffordUpgrade(r(k).id),maxed:r(k).currentLevel>=r(k).maxLevel}),()=>(M(s()),r(k),u(()=>p(s().getUpgradeCost(r(k).id)))),()=>(M(s()),r(k),u(()=>p(s().getUpgradeCost(r(k).id))))]),he("click",U,()=>d(r(k))),f(N,U)}),de(2),l(w);var le=c(w,2),K=n(le);{var O=N=>{var k=li(),U=Q(k),Y=n(U),te=n(Y,!0);l(Y);var re=c(Y,2);l(U);var ne=c(U,2),X=n(ne),Z=n(X),ue=n(Z,!0);l(Z);var W=c(Z,2),ee=c(n(W));l(W);var H=c(W,2),ae=c(n(H));l(H);var T=c(H,2),P=c(n(T));l(T),l(X);var oe=c(X,2),$e=n(oe),Se=n($e);{var fe=Me=>{var Ue=be("MAX LEVEL");f(Me,Ue)},_e=Me=>{var Ue=se(),je=Q(Ue);{var we=Ne=>{var Ve=be("CANNOT AFFORD");f(Ne,Ve)},De=Ne=>{var Ve=be("PURCHASE");f(Ne,Ve)};z(je,Ne=>{M(s()),r(o),u(()=>!s().canAffordUpgrade(r(o).id))?Ne(we):Ne(De,!1)},!0)}f(Me,Ue)};z(Se,Me=>{r(o),u(()=>r(o).currentLevel>=r(o).maxLevel)?Me(fe):Me(_e,!1)})}l($e),l(oe),l(ne),J((Me,Ue)=>{C(te,(r(o),u(()=>r(o).name))),C(ue,(r(o),u(()=>r(o).description))),C(ee,` ${r(o),u(()=>r(o).effect)??""}`),C(ae,` ${Me??""} EXP`),C(P,` ${r(o),u(()=>r(o).currentLevel)??""}/${r(o),u(()=>r(o).maxLevel)??""}`),$e.disabled=Ue},[()=>(M(s()),r(o),u(()=>p(s().getUpgradeCost(r(o).id)))),()=>(M(s()),r(o),u(()=>!s().canPurchaseUpgrade(r(o).id)))]),he("click",re,()=>ie(o,null)),he("click",$e,b),f(N,k)},B=N=>{var k=ni();f(N,k)};z(K,N=>{r(o)?N(O):N(B,!1)})}l(le),l(h),l(x),J((N,k,U,Y,te,re,ne)=>{$=ve(g,1,"upgrade-btn special-btn svelte-xd3x4d",null,$,N),g.disabled=k,He(g,"aria-label",`Level up from ${M(s()),u(()=>s().level)??""} to ${M(s()),u(()=>s().level+1)??""}. Cost: ${U??""} EXP`),C(L,`Level ${M(s()),u(()=>s().level)??""} → ${M(s()),u(()=>s().level+1)??""}`),C(R,`${Y??""} EXP`),q=ve(E,1,"upgrade-btn special-btn svelte-xd3x4d",null,q,te),E.disabled=(r(a),u(()=>r(a).currentLevel>=r(a).maxLevel)),He(E,"aria-label",`Select ${r(a),u(()=>r(a).name)??""} upgrade. Level ${r(a),u(()=>r(a).currentLevel)??""} of ${r(a),u(()=>r(a).maxLevel)??""}. Cost: ${re??""} EXP`),C(S,(r(a),u(()=>r(a).name))),C(G,`Level ${r(a),u(()=>r(a).currentLevel)??""}/${r(a),u(()=>r(a).maxLevel)??""}`),C(V,`${ne??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(M(s()),u(()=>!s().canLevelUp())),()=>(M(s()),u(()=>p(s().getLevelUpCost()))),()=>(M(s()),u(()=>p(s().getLevelUpCost()))),()=>({selected:r(o)?.id===r(a).id,affordable:s().canAffordUpgrade(r(a).id),maxed:r(a).currentLevel>=r(a).maxLevel}),()=>(M(s()),r(a),u(()=>p(s().getUpgradeCost(r(a).id)))),()=>(M(s()),r(a),u(()=>p(s().getUpgradeCost(r(a).id))))]),he("click",g,m),he("click",E,()=>d(r(a))),f(i,x),Le()}var ci=I('<div class="stat-level svelte-iba83u"> </div>'),di=I("<div> </div>"),ui=I('<div class="cost free svelte-iba83u">Free</div>'),fi=I('<div class="progress-container svelte-iba83u"><div class="progress-bar svelte-iba83u"></div> <div class="progress-text svelte-iba83u"> </div></div>'),pi=I('<button><div class="action-header svelte-iba83u"><div class="action-name svelte-iba83u"> </div> <!></div> <div class="action-description svelte-iba83u"> </div> <div class="action-info svelte-iba83u"><!> <div class="reward svelte-iba83u">+10 EXP</div></div> <!></button>'),gi=I('<div class="training-container svelte-iba83u"><h2 class="svelte-iba83u">Training</h2> <div class="actions-grid svelte-iba83u"></div></div>');function hi(i,t){Ae(t,!1);const e=pe();let a=xe(t,"game",12);function s(p){a().startIdleAction(a().trainingActions,p),a(a())}function v(p){return p.id==="practice-osmosis"?0:p.trainsStat?a().getStatLevelCost(p.trainsStat):0}function o(p){return p.id==="practice-osmosis"?!0:p.trainsStat?a().exp>=a().getStatLevelCost(p.trainsStat):!0}Ce(()=>M(a()),()=>{ie(e,Object.values(a().trainingActions).filter(p=>p.id==="practice-osmosis"?a().level>=2:p.trainsStat?a().level>=3:!1))}),Ke(),Oe();var d=gi(),b=c(n(d),2);Ge(b,5,()=>r(e),p=>p.id,(p,m)=>{const x=rt(()=>(r(m),u(()=>r(m).isActive))),h=rt(()=>(r(m),u(()=>o(r(m))))),w=rt(()=>(r(m),u(()=>v(r(m))))),g=rt(()=>(M(r(x)),r(m),u(()=>r(x)?r(m).progress:0)));var $=pi();let y;var L=n($),A=n(L),R=n(A,!0);l(A);var E=c(A,2);{var q=K=>{var O=ci(),B=n(O);l(O),J(N=>C(B,`${N??""}: ${M(a()),r(m),u(()=>a().stats[r(m).trainsStat])??""}`),[()=>(r(m),u(()=>r(m).trainsStat.toUpperCase()))]),f(K,O)};z(E,K=>{r(m),u(()=>r(m).trainsStat)&&K(q)})}l(L);var _=c(L,2),S=n(_,!0);l(_);var j=c(_,2),G=n(j);{var D=K=>{var O=di();let B;var N=n(O);l(O),J(k=>{B=ve(O,1,"cost svelte-iba83u",null,B,k),C(N,`Cost: ${r(w)??""} EXP`)},[()=>({"cannot-afford":!r(h)})]),f(K,O)},V=K=>{var O=ui();f(K,O)};z(G,K=>{r(w)>0?K(D):K(V,!1)})}de(2),l(j);var F=c(j,2);{var le=K=>{var O=fi(),B=n(O),N=c(B,2),k=n(N);l(N),l(O),J((U,Y)=>{xt(B,`width: ${U??""}%`),C(k,`${Y??""}%`)},[()=>(M(r(g)),u(()=>Math.min(r(g)*100,100))),()=>(M(r(g)),u(()=>Math.floor(Math.min(r(g)*100,100))))]),f(K,O)};z(F,K=>{r(x)&&K(le)})}l($),J(K=>{y=ve($,1,"action-card svelte-iba83u",null,y,K),$.disabled=r(x),C(R,(r(m),u(()=>r(m).name))),C(S,(r(m),u(()=>r(m).description)))},[()=>({active:r(x),blocked:!r(h)&&!r(x)})]),he("click",$,()=>s(r(m).id)),f(p,$)}),l(b),l(d),f(i,d),Le()}var mi=I('<div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Combat Stats</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Strength</div> <div class="stat-value strength svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Physical power and damage</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Dexterity</div> <div class="stat-value dexterity svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Agility and precision</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Intelligence</div> <div class="stat-value intelligence svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Knowledge and magic</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Wisdom</div> <div class="stat-value wisdom svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Insight and awareness</div></div></div></div>'),_i=I('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Idle EXP</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Passive EXP gain</div></div>'),bi=I('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Speed</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base duration</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Cost</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base cost</div></div>',1),xi=I('<div class="upgrade-item svelte-1i5r50h"><span class="upgrade-name svelte-1i5r50h"> </span> <span class="upgrade-level svelte-1i5r50h"> </span></div>'),yi=I('<p class="no-upgrades svelte-1i5r50h">No upgrades purchased yet</p>'),ki=I('<div class="stats-container svelte-1i5r50h"><h2 class="svelte-1i5r50h">Player Stats</h2> <p class="description svelte-1i5r50h">View your progression and statistics</p> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">General</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Name</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Level</div> <div class="stat-value level svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Current EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Lifetime EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div></div></div> <!> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Progress Rates</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Click Value</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">EXP per click</div></div> <!> <!></div></div> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Upgrades Owned</h3> <div class="upgrades-list svelte-1i5r50h"><!> <!></div></div></div>');function $i(i,t){Ae(t,!1);let e=xe(t,"game",8);function a(U){return U>=1e12?(U/1e12).toFixed(2)+"T":U>=1e9?(U/1e9).toFixed(2)+"B":U>=1e6?(U/1e6).toFixed(2)+"M":U>=1e3?(U/1e3).toFixed(2)+"K":U.toFixed(2)}Oe();var s=ki(),v=c(n(s),4),o=c(n(v),2),d=n(o),b=c(n(d),2),p=n(b,!0);l(b),l(d);var m=c(d,2),x=c(n(m),2),h=n(x,!0);l(x),l(m);var w=c(m,2),g=c(n(w),2),$=n(g,!0);l(g),l(w);var y=c(w,2),L=c(n(y),2),A=n(L,!0);l(L),l(y),l(o),l(v);var R=c(v,2);{var E=U=>{var Y=mi(),te=c(n(Y),2),re=n(te),ne=c(n(re),2),X=n(ne,!0);l(ne),de(2),l(re);var Z=c(re,2),ue=c(n(Z),2),W=n(ue,!0);l(ue),de(2),l(Z);var ee=c(Z,2),H=c(n(ee),2),ae=n(H,!0);l(H),de(2),l(ee);var T=c(ee,2),P=c(n(T),2),oe=n(P,!0);l(P),de(2),l(T),l(te),l(Y),J(()=>{C(X,(M(e()),u(()=>e().stats.strength))),C(W,(M(e()),u(()=>e().stats.dexterity))),C(ae,(M(e()),u(()=>e().stats.intelligence))),C(oe,(M(e()),u(()=>e().stats.wisdom)))}),f(U,Y)};z(R,U=>{M(e()),u(()=>e().level>=3)&&U(E)})}var q=c(R,2),_=c(n(q),2),S=n(_),j=c(n(S),2),G=n(j,!0);l(j),de(2),l(S);var D=c(S,2);{var V=U=>{var Y=_i(),te=c(n(Y),2),re=n(te);l(te),de(2),l(Y),J(ne=>C(re,`${ne??""}/s`),[()=>(M(e()),u(()=>a(e().idleExpRate)))]),f(U,Y)};z(D,U=>{M(e()),u(()=>e().idleExpRate>0)&&U(V)})}var F=c(D,2);{var le=U=>{var Y=bi(),te=Q(Y),re=c(n(te),2),ne=n(re);l(re),de(2),l(te);var X=c(te,2),Z=c(n(X),2),ue=n(Z);l(Z),de(2),l(X),J((W,ee)=>{C(ne,`${W??""}%`),C(ue,`${ee??""}%`)},[()=>(M(e()),u(()=>(e().getTrainingSpeedMultiplier()*100).toFixed(0))),()=>(M(e()),u(()=>(e().getTrainingCostMultiplier()*100).toFixed(0)))]),f(U,Y)};z(F,U=>{M(e()),u(()=>e().level>=3)&&U(le)})}l(_),l(q);var K=c(q,2),O=c(n(K),2),B=n(O);Ge(B,1,()=>(M(e()),u(()=>Object.values(e().upgrades).filter(U=>U.currentLevel>0))),vt,(U,Y)=>{var te=xi(),re=n(te),ne=n(re,!0);l(re);var X=c(re,2),Z=n(X);l(X),l(te),J(()=>{C(ne,(r(Y),u(()=>r(Y).name))),C(Z,`Level ${r(Y),u(()=>r(Y).currentLevel)??""}`)}),f(U,te)});var N=c(B,2);{var k=U=>{var Y=yi();f(U,Y)};z(N,U=>{M(e()),u(()=>Object.values(e().upgrades).filter(Y=>Y.currentLevel>0).length===0)&&U(k)})}l(O),l(K),l(s),J((U,Y,te)=>{C(p,(M(e()),u(()=>e().name))),C(h,(M(e()),u(()=>e().level))),C($,U),C(A,Y),C(G,te)},[()=>(M(e()),u(()=>a(e().exp))),()=>(M(e()),u(()=>a(e().lifetimeExp))),()=>(M(e()),u(()=>a(e().getClickValue())))]),f(i,s),Le()}var Si=I('<div class="no-actions svelte-x40p30"><p class="svelte-x40p30">You have completed all available meditations.</p> <p class="hint svelte-x40p30">More will be unlocked as you progress through the game.</p></div>'),Mi=I("<option> <!></option>"),wi=I('<span class="cannot-afford svelte-x40p30"> </span>'),Ci=I('<p class="one-time-notice svelte-x40p30"><em>This meditation can only be completed once.</em></p>'),Ai=I('<div class="progress-container svelte-x40p30"><div class="progress-bar svelte-x40p30"></div> <div class="progress-text svelte-x40p30"> </div></div>'),Li=I('<button class="stop-button svelte-x40p30">Stop Meditating</button>'),Ei=I('<button class="start-button svelte-x40p30">Begin Meditation</button>'),Ti=I('<div class="action-info svelte-x40p30"><h3 class="svelte-x40p30"> </h3> <p class="svelte-x40p30"> </p> <p class="cost svelte-x40p30">Cost: <strong> </strong> <!></p> <p class="svelte-x40p30"> </p> <!></div> <!> <div class="action-buttons svelte-x40p30"><!></div>',1),Ui=I('<div class="completed-item svelte-x40p30"><span class="completed-name svelte-x40p30"> </span> <span class="completed-badge svelte-x40p30">✓ Complete</span></div>'),ji=I('<div class="completed-section svelte-x40p30"><h3 class="svelte-x40p30">Completed Meditations</h3> <div class="completed-list svelte-x40p30"></div></div>'),Di=I('<div class="meditation-area svelte-x40p30"><div class="meditation-selector svelte-x40p30"><label for="meditation-select" class="svelte-x40p30">Choose Meditation:</label> <select id="meditation-select" class="svelte-x40p30"></select></div> <!></div> <!>',1),Ni=I('<div class="meditation-container svelte-x40p30"><h2 class="svelte-x40p30">Meditation</h2> <p class="description svelte-x40p30">Meditate on the mysteries of the Tomes</p> <!></div>');function zi(i,t){Ae(t,!1);const e=pe(),a=pe(),s=pe(),v=pe(),o=pe(),d=pe();let b=xe(t,"game",12),p=pe("meditate-future");function m(){b().startIdleAction(b().meditationActions,r(p))&&b(b())}function x(){b().stopIdleAction(b().meditationActions,r(p)),b(b())}Ce(()=>M(b()),()=>{ie(e,Object.values(b().meditationActions).filter(y=>!y.oneTime||!y.completed))}),Ce(()=>(M(b()),r(p)),()=>{ie(a,b().meditationActions[r(p)])}),Ce(()=>r(a),()=>{ie(s,r(a)?.isActive||!1)}),Ce(()=>r(a),()=>{ie(v,r(a)?.progress||0)}),Ce(()=>(r(a),M(b())),()=>{ie(o,r(a)?b().exp>=r(a).expCost:!1)}),Ce(()=>r(a),()=>{ie(d,r(a)?.oneTime&&r(a)?.completed)}),Ke(),Oe();var h=Ni(),w=c(n(h),4);{var g=y=>{var L=Si();f(y,L)},$=y=>{var L=Di(),A=Q(L),R=n(A),E=c(n(R),2);J(()=>{r(p),ps(()=>{r(s),r(e)})}),Ge(E,5,()=>r(e),vt,(G,D)=>{var V=Mi(),F=n(V),le=c(F);{var K=B=>{var N=be("(One-time)");f(B,N)};z(le,B=>{r(D),u(()=>r(D).oneTime)&&B(K)})}l(V);var O={};J(()=>{C(F,`${r(D),u(()=>r(D).name)??""} `),O!==(O=(r(D),u(()=>r(D).id)))&&(V.value=(V.__value=(r(D),u(()=>r(D).id)))??"")}),f(G,V)}),l(E),l(R);var q=c(R,2);{var _=G=>{var D=Ti(),V=Q(D),F=n(V),le=n(F,!0);l(F);var K=c(F,2),O=n(K,!0);l(K);var B=c(K,2),N=c(n(B)),k=n(N);l(N);var U=c(N,2);{var Y=T=>{var P=wi(),oe=n(P);l(P),J(()=>C(oe,`(need ${r(a),M(b()),u(()=>r(a).expCost-b().exp)??""} more)`)),f(T,P)};z(U,T=>{r(o)||T(Y)})}l(B);var te=c(B,2),re=n(te);l(te);var ne=c(te,2);{var X=T=>{var P=Ci();f(T,P)};z(ne,T=>{r(a),u(()=>r(a).oneTime)&&T(X)})}l(V);var Z=c(V,2);{var ue=T=>{var P=Ai(),oe=n(P),$e=c(oe,2),Se=n($e);l($e),l(P),J((fe,_e)=>{xt(oe,`width: ${fe??""}%`),C(Se,`${_e??""}%`)},[()=>(r(v),u(()=>Math.min(r(v)*100,100))),()=>(r(v),u(()=>Math.floor(Math.min(r(v)*100,100))))]),f(T,P)};z(Z,T=>{r(s)&&T(ue)})}var W=c(Z,2),ee=n(W);{var H=T=>{var P=Li();he("click",P,x),f(T,P)},ae=T=>{var P=Ei();J(()=>P.disabled=!r(o)),he("click",P,m),f(T,P)};z(ee,T=>{r(s)?T(H):T(ae,!1)})}l(W),J(T=>{C(le,(r(a),u(()=>r(a).name))),C(O,(r(a),u(()=>r(a).description))),C(k,`${r(a),u(()=>r(a).expCost)??""} EXP`),C(re,`Duration: ${T??""}s`)},[()=>(r(a),u(()=>(r(a).duration/1e3).toFixed(1)))]),f(G,D)};z(q,G=>{r(a)&&!r(d)&&G(_)})}l(A);var S=c(A,2);{var j=G=>{var D=ji(),V=c(n(D),2);Ge(V,5,()=>(M(b()),u(()=>Object.values(b().meditationActions).filter(F=>F.oneTime&&F.completed))),vt,(F,le)=>{var K=Ui(),O=n(K),B=n(O,!0);l(O),de(2),l(K),J(()=>C(B,(r(le),u(()=>r(le).name)))),f(F,K)}),l(V),l(D),f(G,D)};z(S,G=>{M(b()),u(()=>Object.values(b().meditationActions).some(D=>D.oneTime&&D.completed))&&G(j)})}J(()=>E.disabled=r(s)),oa(E,()=>r(p),G=>ie(p,G)),f(y,L)};z(w,y=>{r(e),u(()=>r(e).length===0)?y(g):y($,!1)})}l(h),f(i,h),Le()}var Ii=I(`<div class="meditation-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Your stats are sufficient. Complete the "Meditate on Your Future" meditation to
                                unlock Adventure Mode.</em></p></div>`),Pi=I('<div class="training-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Visit the Training page to improve your stats.</em></p></div>'),qi=I(`<div class="locked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode</h2> <p class="locked-message svelte-gg7su4">The path to adventure is not yet clear. You must train your stats and meditate to unlock
                this path.</p> <div class="requirements-section svelte-gg7su4"><h3 class="svelte-gg7su4">Requirements</h3> <div class="requirements-grid svelte-gg7su4"><div><span class="requirement-label svelte-gg7su4">Strength:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Dexterity:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Intelligence:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Wisdom:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div></div> <!></div></div>`),Oi=I(`<div class="unlocked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode Unlocked!</h2> <div class="demo-message svelte-gg7su4"><h3 class="svelte-gg7su4">Congratulations!</h3> <p class="svelte-gg7su4">You've unlocked everything in the current demo of TomeClicker.</p> <div class="demo-stats svelte-gg7su4"><p class="svelte-gg7su4">Your journey so far:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li></ul></div> <div class="coming-soon svelte-gg7su4"><h3 class="svelte-gg7su4">Coming Soon</h3> <p class="svelte-gg7su4">Future updates will include:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4">Adventure zones with unique challenges</li> <li class="svelte-gg7su4">Equipment and loot systems</li> <li class="svelte-gg7su4">More meditation techniques</li> <li class="svelte-gg7su4">Tome discovery and magic systems</li> <li class="svelte-gg7su4">Story progression and world-building</li></ul></div> <p class="thank-you svelte-gg7su4">Thank you for playing! Keep an eye on <a href="https://github.com/eaglerock/tomeclicker" target="_blank" class="svelte-gg7su4">GitHub</a> for updates.</p></div></div>`),Vi=I('<div class="adventure-container svelte-gg7su4"><!></div>');function Ri(i,t){Ae(t,!1);const e=pe(),a=pe();let s=xe(t,"game",8);Ce(()=>M(s()),()=>{ie(e,s().adventureModeUnlocked)}),Ce(()=>M(s()),()=>{ie(a,s().stats.strength>=5&&s().stats.dexterity>=5&&s().stats.intelligence>=5&&s().stats.wisdom>=5)}),Ke(),Oe();var v=Vi(),o=n(v);{var d=p=>{var m=qi(),x=c(n(m),4),h=c(n(x),2),w=n(h);let g;var $=c(n(w),2),y=n($),L=c(y);{var A=X=>{var Z=be("✓");f(X,Z)};z(L,X=>{M(s()),u(()=>s().stats.strength>=5)&&X(A)})}l($),l(w);var R=c(w,2);let E;var q=c(n(R),2),_=n(q),S=c(_);{var j=X=>{var Z=be("✓");f(X,Z)};z(S,X=>{M(s()),u(()=>s().stats.dexterity>=5)&&X(j)})}l(q),l(R);var G=c(R,2);let D;var V=c(n(G),2),F=n(V),le=c(F);{var K=X=>{var Z=be("✓");f(X,Z)};z(le,X=>{M(s()),u(()=>s().stats.intelligence>=5)&&X(K)})}l(V),l(G);var O=c(G,2);let B;var N=c(n(O),2),k=n(N),U=c(k);{var Y=X=>{var Z=be("✓");f(X,Z)};z(U,X=>{M(s()),u(()=>s().stats.wisdom>=5)&&X(Y)})}l(N),l(O),l(h);var te=c(h,2);{var re=X=>{var Z=Ii();f(X,Z)},ne=X=>{var Z=Pi();f(X,Z)};z(te,X=>{r(a)?X(re):X(ne,!1)})}l(x),l(m),J((X,Z,ue,W)=>{g=ve(w,1,"requirement-item svelte-gg7su4",null,g,X),C(y,`${M(s()),u(()=>s().stats.strength)??""} / 5 `),E=ve(R,1,"requirement-item svelte-gg7su4",null,E,Z),C(_,`${M(s()),u(()=>s().stats.dexterity)??""} / 5 `),D=ve(G,1,"requirement-item svelte-gg7su4",null,D,ue),C(F,`${M(s()),u(()=>s().stats.intelligence)??""} / 5 `),B=ve(O,1,"requirement-item svelte-gg7su4",null,B,W),C(k,`${M(s()),u(()=>s().stats.wisdom)??""} / 5 `)},[()=>({met:s().stats.strength>=5}),()=>({met:s().stats.dexterity>=5}),()=>({met:s().stats.intelligence>=5}),()=>({met:s().stats.wisdom>=5})]),f(p,m)},b=p=>{var m=Oi(),x=c(n(m),2),h=c(n(x),4),w=c(n(h),2),g=n(w),$=n(g);l(g);var y=c(g,2),L=n(y);l(y);var A=c(y,2),R=n(A);l(A);var E=c(A,2),q=n(E);l(E),l(w),l(h),de(4),l(x),l(m),J((_,S,j)=>{C($,`Level ${M(s()),u(()=>s().level)??""} adventurer`),C(L,`${_??""} lifetime EXP earned`),C(R,`${S??""} upgrades purchased`),C(q,`All stats trained to ${j??""}+`)},[()=>(M(s()),u(()=>s().lifetimeExp.toFixed(0))),()=>(M(s()),u(()=>Object.values(s().upgrades).filter(_=>_.currentLevel>0).length)),()=>(M(s()),u(()=>Math.min(...Object.values(s().stats))))]),f(p,m)};z(o,p=>{r(e)?p(b,!1):p(d)})}l(v),f(i,v),Le()}function Fi(i,t,e,a){try{const s=t().exportSave(!0);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function Bi(i,t,e,a){try{const s=t().exportSave(!1);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Hi(i,t,e,a){if(!r(t).trim()){e("Please paste save data first","error");return}const s=a().importSave(r(t).trim());s.success?(e(s.warning||"Save imported successfully!",s.warning?"warning":"success"),ie(t,""),a(a()),a().autoSave()):e(s.error||"Failed to import save","error")}function Xi(i,t,e){try{t().autoSave(),e("Game saved to browser storage!","success")}catch{e("Failed to save game","error")}}function Gi(i,t,e){try{const a=t().loadFromLocalStorage(),s=a?!1:t().loadFromCookies();a||s?(e(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),t(t())):e("No save found in browser storage","warning")}catch{e("Failed to load game","error")}}function Ki(i,t){ie(t,!0)}function Yi(i,t){ie(t,!1)}function Wi(i,t,e,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),t(t().name="A Stranger",!0),t(t().exp=0,!0),t(t().lifetimeExp=0,!0),t(t().level=1,!0),t(t().tick=0,!0),t(t().menu="practice",!0),t(t().clickMultiplier=1,!0),t(t().upgrades=t().initializeUpgrades(),!0),t(t().saveIntegrity="valid",!0),t(t().lastValidation=Date.now(),!0),t().recalculateClickMultiplier(),t(t()),ie(e,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Ji=I("<div><!> </div>"),Qi=I('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),Zi=I('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function er(i,t){Ae(t,!0);let e=xe(t,"game",15),a=Fe(""),s=Fe(""),v=Fe("success"),o=Fe(!1),d=Fe(!1);function b(H,ae,T=3e3){ie(s,H,!0),ie(v,ae,!0),ie(o,!0),setTimeout(()=>{ie(o,!1)},T)}function p(H,ae){const T=new Blob([H],{type:"application/json"}),P=URL.createObjectURL(T),oe=document.createElement("a");oe.href=P,oe.download=ae,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(P)}setInterval(()=>{e().autoSave()},3e4);var m=Zi(),x=c(n(m),2);{var h=H=>{var ae=Ji(),T=n(ae);{var P=Se=>{Vs(Se,{size:20})},oe=Se=>{var fe=se(),_e=Q(fe);{var Me=je=>{gt(je,{size:20})},Ue=je=>{gt(je,{size:20})};z(_e,je=>{r(v)==="warning"?je(Me):je(Ue,!1)},!0)}f(Se,fe)};z(T,Se=>{r(v)==="success"?Se(P):Se(oe,!1)})}var $e=c(T);l(ae),J(()=>{ve(ae,1,`message ${r(v)??""}`,"svelte-rfjmb6"),C($e,` ${r(s)??""}`)}),f(H,ae)};z(x,H=>{r(o)&&H(h)})}var w=c(x,2),g=n(w),$=c(n(g),4),y=n($);y.__click=[Xi,e,b];var L=n(y);ga(L,{size:20}),de(),l(y);var A=c(y,2);A.__click=[Gi,e,b];var R=n(A);Yt(R,{size:20}),de(),l(A),l($),l(g);var E=c(g,2),q=c(n(E),4),_=n(q);_.__click=[Fi,e,p,b];var S=n(_);Kt(S,{size:20}),de(),l(_);var j=c(_,2);j.__click=[Bi,e,p,b];var G=n(j);Kt(G,{size:20}),de(),l(j),l(q),de(2),l(E);var D=c(E,2),V=c(n(D),4);gs(V);var F=c(V,2);F.__click=[Hi,a,b,e];var le=n(F);Yt(le,{size:20}),de(),l(F),l(D);var K=c(D,2),O=c(n(K),2),B=n(O),N=c(n(B));l(B);var k=c(B,2),U=c(n(k));l(k);var Y=c(k,2),te=c(n(Y));l(Y);var re=c(Y,2),ne=c(n(re));l(re),l(O),l(K);var X=c(K,2),Z=c(n(X),4);Z.__click=[Ki,d];var ue=n(Z);gt(ue,{size:20}),de(),l(Z),l(X),l(w);var W=c(w,2);{var ee=H=>{var ae=Qi(),T=n(ae),P=c(n(T),8),oe=n(P);oe.__click=[Yi,d];var $e=c(oe,2);$e.__click=[Wi,e,d,b];var Se=n($e);gt(Se,{size:20}),de(),l($e),l(P),l(T),l(ae),f(H,ae)};z(W,H=>{r(d)&&H(ee)})}l(m),J((H,ae,T,P)=>{F.disabled=H,C(N,` ${e().saveIntegrity??""}`),C(U,` ${ae??""}`),C(te,` ${T??""}`),C(ne,` ${P??""}`)},[()=>!r(a).trim(),()=>new Date(e().lastValidation).toLocaleString(),()=>e().exp.toLocaleString(),()=>e().lifetimeExp.toLocaleString()]),Ls(V,()=>r(a),H=>ie(a,H)),f(i,m),Le()}ct(["click"]);var tr=I("<option> </option>"),ar=(i,t)=>{t().setDisplayMode("light"),t(t())},sr=(i,t)=>{t().setDisplayMode("system"),t(t())},ir=(i,t)=>{t().setDisplayMode("dark"),t(t())},rr=I('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function lr(i,t){Ae(t,!0);let e=xe(t,"config",15);const a=Es();var s=rr(),v=c(n(s),2),o=n(v),d=c(n(o),2),b=n(d),p=c(n(b),2),m=n(p,!0);l(p),l(b);var x=c(b,2),h=c(n(x),2),w=n(h,!0);l(h),l(x);var g=c(x,2),$=c(n(g),2),y=n($,!0);l($),l(g);var L=c(g,2),A=c(n(L),2),R=n(A,!0);l(A),l(L),l(d),l(o);var E=c(o,2),q=c(n(E),2),_=c(n(q),2);Ge(_,21,()=>a,vt,(O,B)=>{var N=tr(),k=n(N,!0);l(N);var U={};J(Y=>{C(k,Y),U!==(U=r(B))&&(N.value=(N.__value=r(B))??"")},[()=>Ts(r(B))]),f(O,N)}),l(_),l(q);var S=c(q,2),j=c(n(S),2),G=n(j);let D;G.__click=[ar,e];var V=c(G,2);let F;V.__click=[sr,e];var le=c(V,2);let K;le.__click=[ir,e],l(j),l(S),l(E),l(v),l(s),J((O,B,N,k,U)=>{C(m,t.game.name),C(w,t.game.level),C(y,O),C(R,B),D=ve(G,1,"mode-btn svelte-mt7s6l",null,D,N),F=ve(V,1,"mode-btn svelte-mt7s6l",null,F,k),K=ve(le,1,"mode-btn svelte-mt7s6l",null,K,U)},[()=>Math.floor(t.game.exp).toLocaleString(),()=>Math.floor(t.game.lifetimeExp).toLocaleString(),()=>({active:e().displayMode==="light"}),()=>({active:e().displayMode==="system"}),()=>({active:e().displayMode==="dark"})]),oa(_,()=>e().theme,O=>e(e().theme=O,!0)),f(i,s),Le()}ct(["click"]);function nr(i,t,e){r(t)<e&&ia(t)}function or(i,t){r(t)>1&&ia(t,-1)}var vr=I('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function cr(i,t){Ae(t,!0);let e=Fe(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var v=vr(),o=n(v),d=n(o),b=n(d),p=n(b);p.__click=[or,e];var m=c(p,2),x=n(m),h=n(x);l(x);var w=c(x,2),g=n(w);l(w),l(m);var $=c(m,2);$.__click=[nr,e,a],l(b);var y=c(b,2),L=n(y),A=n(L,!0);l(L),l(y),l(d),l(o),l(v),J(()=>{p.disabled=r(e)===1,C(h,`Chapter ${r(e)??""}`),C(g,`(${r(e)??""}/9)`),$.disabled=r(e)===a,C(A,s[r(e)-1])}),f(i,v),Le()}ct(["click"]);var dr=I(`<div class="about svelte-12a8euv"><h1 class="svelte-12a8euv">about</h1> <div class="about-content svelte-12a8euv"><section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><!> <h2 class="svelte-12a8euv">TomeClicker</h2></div> <div class="section-body svelte-12a8euv"><p class="tagline svelte-12a8euv">An incremental RPG clicker game where you click to gain experience, level up, train
					stats, adventure through zones, and eventually discover the secrets of magical tomes.</p> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">Version:</span> <span class="info-value svelte-12a8euv"></span></div> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">License:</span> <span class="info-value svelte-12a8euv">BSD 3-Clause</span></div> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">Built with:</span> <span class="info-value svelte-12a8euv">SvelteKit</span></div></div></section> <section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><!> <h2 class="svelte-12a8euv">Links</h2></div> <div class="section-body svelte-12a8euv"><a href="https://github.com/eagle-rock/tomeclicker" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">GitHub Repository</span> <!></a> <a href="https://eagle-rock.github.io/tomeclicker" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">Preview (GitHub Pages)</span> <!></a> <a href="https://tomeclicker.marks.dev" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">Production Site</span> <!></a> <a href="https://marks.dev" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">Developer Site</span> <!></a></div></section> <section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><h2 class="svelte-12a8euv">Credits</h2></div> <div class="section-body svelte-12a8euv"><p class="credits-text svelte-12a8euv">Created by EagleRock with inspiration from Bob Ross and the joy of happy little
					accidents.</p> <p class="credits-text svelte-12a8euv">Open source and built using SvelteKit, TypeScript, and CSS custom properties.</p></div></section></div></div>`);function ur(i,t){Ae(t,!0);var e=dr(),a=c(n(e),2),s=n(a),v=n(s),o=n(v);fa(o,{size:24}),de(2),l(v);var d=c(v,2),b=c(n(d),2),p=c(n(b),2);p.textContent="0.1.0",l(b),de(4),l(d),l(s);var m=c(s,2),x=n(m),h=n(x);pt(h,{size:24}),de(2),l(x);var w=c(x,2),g=n(w),$=n(g);Hs($,{size:20});var y=c($,4);ft(y,{size:16,class:"external-icon"}),l(g);var L=c(g,2),A=n(L);pt(A,{size:20});var R=c(A,4);ft(R,{size:16,class:"external-icon"}),l(L);var E=c(L,2),q=n(E);pt(q,{size:20});var _=c(q,4);ft(_,{size:16,class:"external-icon"}),l(E);var S=c(E,2),j=n(S);pt(j,{size:20});var G=c(j,4);ft(G,{size:16,class:"external-icon"}),l(S),l(w),l(m),de(2),l(a),l(e),f(i,e),Le()}var fr=I('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),pr=I('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),gr=I("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),hr=I('<div class="view svelte-1l6ze8i"><!></div>');function mr(i,t){Ae(t,!1);const e=pe();let a=xe(t,"config",12),s=xe(t,"game",12);Ce(()=>M(s()),()=>{ie(e,s()?.menu)}),Ke(),Oe();var v=hr(),o=n(v);ms(o,()=>r(e),d=>{var b=se(),p=Q(b);{var m=h=>{ii(h,{get config(){return a()},set config(w){a(w)},get game(){return s()},set game(w){s(w)},$$legacy:!0})},x=h=>{var w=se(),g=Q(w);{var $=L=>{vi(L,{get config(){return a()},set config(A){a(A)},get game(){return s()},set game(A){s(A)},$$legacy:!0})},y=L=>{var A=se(),R=Q(A);{var E=_=>{hi(_,{get game(){return s()},set game(S){s(S)},$$legacy:!0})},q=_=>{var S=se(),j=Q(S);{var G=V=>{$i(V,{get game(){return s()},set game(F){s(F)},$$legacy:!0})},D=V=>{var F=se(),le=Q(F);{var K=B=>{zi(B,{get game(){return s()},set game(N){s(N)},$$legacy:!0})},O=B=>{var N=se(),k=Q(N);{var U=te=>{Ri(te,{get game(){return s()},set game(re){s(re)},$$legacy:!0})},Y=te=>{var re=se(),ne=Q(re);{var X=ue=>{er(ue,{get config(){return a()},set config(W){a(W)},get game(){return s()},set game(W){s(W)},$$legacy:!0})},Z=ue=>{var W=se(),ee=Q(W);{var H=T=>{cr(T,{get game(){return s()},set game(P){s(P)},$$legacy:!0})},ae=T=>{var P=se(),oe=Q(P);{var $e=fe=>{lr(fe,{get config(){return a()},set config(_e){a(_e)},get game(){return s()},set game(_e){s(_e)},$$legacy:!0})},Se=fe=>{var _e=se(),Me=Q(_e);{var Ue=we=>{var De=fr();f(we,De)},je=we=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{ur(Ee,{get config(){return a()},set config(ze){a(ze)},get game(){return s()},set game(ze){s(ze)},$$legacy:!0})},kt=Ee=>{var ze=se(),$t=Q(ze);{var St=Te=>{var Pe=pr();f(Te,Pe)},Mt=Te=>{var Pe=gr();f(Te,Pe)};z($t,Te=>{s()?Te(Mt,!1):Te(St)},!0)}f(Ee,ze)};z(Ne,Ee=>{M(s()),u(()=>s()&&s().menu==="about")?Ee(Ve):Ee(kt,!1)},!0)}f(we,De)};z(Me,we=>{M(s()),u(()=>s()&&s().menu==="help")?we(Ue):we(je,!1)},!0)}f(fe,_e)};z(oe,fe=>{M(s()),u(()=>s()&&s().menu==="settings")?fe($e):fe(Se,!1)},!0)}f(T,P)};z(ee,T=>{M(s()),u(()=>s()&&s().menu==="story")?T(H):T(ae,!1)},!0)}f(ue,W)};z(ne,ue=>{M(s()),u(()=>s()&&s().menu==="saves")?ue(X):ue(Z,!1)},!0)}f(te,re)};z(k,te=>{M(s()),u(()=>s()&&s().menu==="adventure")?te(U):te(Y,!1)},!0)}f(B,N)};z(le,B=>{M(s()),u(()=>s()&&s().menu==="meditation")?B(K):B(O,!1)},!0)}f(V,F)};z(j,V=>{M(s()),u(()=>s()&&s().menu==="stats")?V(G):V(D,!1)},!0)}f(_,S)};z(R,_=>{M(s()),u(()=>s()&&s().menu==="training")?_(E):_(q,!1)},!0)}f(L,A)};z(g,L=>{M(s()),u(()=>s()&&s().menu==="upgrades")?L($):L(y,!1)},!0)}f(h,w)};z(p,h=>{M(s()),u(()=>s()&&s().menu==="practice")?h(m):h(x,!1)})}f(d,b)}),l(v),f(i,v),Le()}var _r=I('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta property="og:type" content="website"/> <meta property="og:title" content="TomeClicker"/> <meta property="og:image" content="https://tomeclicker.marks.dev/og-image.png"/> <meta property="og:description" content="An incremental that grows on you."/> <meta name="description" content="An incremental that grows on you."/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),br=I('<footer class="footer svelte-1uha8ag"><!></footer>'),xr=I('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),yr=I('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),kr=I("<div><!></div>");function Ar(i,t){Ae(t,!1);const e=pe();let a=pe(new Us("prussian-blue","system")),s=pe(!1),v=pe();Ta(()=>{if(r(a).loadFromLocalStorage(),ie(s,!0),ie(a,r(a)),window.matchMedia){const h=window.matchMedia("(prefers-color-scheme: dark)"),w=()=>{r(a).displayMode==="system"&&ie(a,r(a))};h.addEventListener?h.addEventListener("change",w):h.addListener(w)}ie(v,new js),setTimeout(()=>{r(v)&&(r(v).loadFromLocalStorage()||r(v).loadFromCookies(),ie(v,r(v)))},100);const m=setInterval(()=>{r(v)&&r(v).autoSave()},15e3),x=setInterval(()=>{r(v)&&(r(v).updateIdleActions(),r(v).idleExpRate>0&&r(v).addExp(r(v).idleExpRate/10),ie(v,r(v)))},100);return()=>{clearInterval(m),clearInterval(x)}}),Ce(()=>r(a),()=>{ie(e,r(a)?r(a).getTheme():"")}),Ce(()=>(r(a),r(s)),()=>{r(a)&&r(s)&&typeof localStorage<"u"&&(r(a).theme,r(a).displayMode,r(a).saveToLocalStorage())}),Ke(),Oe();var o=kr();Ua(m=>{var x=_r();hs.title="TomeClicker",de(16),f(m,x)});var d=n(o);{var b=m=>{var x=xr(),h=Q(x);{var w=A=>{zs(A,{get game(){return r(v)}})};z(h,A=>{r(v),u(()=>r(v).showHeader())&&A(w)})}var g=c(h,2),$=n(g);mr($,{get game(){return r(v)},set game(A){ie(v,A)},get config(){return r(a)},set config(A){ie(a,A)},$$legacy:!0}),l(g);var y=c(g,2);{var L=A=>{var R=br(),E=n(R);ti(E,{get game(){return r(v)},set game(q){ie(v,q)},$$legacy:!0}),l(R),f(A,R)};z(y,A=>{r(v),u(()=>r(v).showMenu())&&A(L)})}f(m,x)},p=m=>{var x=yr();f(m,x)};z(d,m=>{r(v)?m(b):m(p,!1)})}l(o),J(()=>ve(o,1,`app ${r(e)??""}`,"svelte-1uha8ag")),f(i,o),Le()}export{Ar as component};
