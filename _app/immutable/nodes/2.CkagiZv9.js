import"../chunks/DsnmJJEf.js";import{i as Oe}from"../chunks/Cd55SYnr.js";import{i as wa,a as Ca,c as Aa,d as ct,n as La,b as Ea,s as C,e as he,o as Ta,f as Ua}from"../chunks/Bl-oD2Vi.js";import{w as ce,x as ot,aU as ja,aV as Na,aW as Da,v as dt,C as mt,D as Xe,F as Re,G as Wt,K as qe,U as Jt,J as zt,h as r,N as rt,y as Ia,H as za,z as Vt,A as lt,B as Be,a9 as Pa,aC as qa,az as Qt,ap as Zt,aQ as pe,a0 as Rt,a8 as Ft,I as Pt,aX as _t,aY as Lt,ag as Ze,aZ as bt,a_ as Oa,am as Va,a$ as Ra,ay as Fa,b0 as Ba,S as ea,au as ta,b1 as aa,a7 as Ha,b2 as Xa,b3 as Ga,E as Ya,b4 as Ka,aB as Wa,aP as qt,b5 as Ja,b6 as Qa,ar as Za,b7 as sa,b8 as es,b9 as ts,ba as as,bb as ss,bc as is,bd as rs,be as ls,bf as ns,bg as os,aO as vs,e as u,a5 as cs,bh as ds,p as Ae,l as z,n,o as l,q as c,aS as Ot,t as J,a as f,m as Le,bi as us,i as M,c as se,f as Q,bj as fs,bk as Ce,Q as ie,bl as Ye,aR as Fe,aT as be,ah as de,bm as ps,bn as gs,a1 as ia,bo as hs}from"../chunks/BGLDHNfr.js";import{i as I,l as ge,p as xe,s as ye}from"../chunks/BxTBcEuA.js";import{v as ms}from"../chunks/Dv4xJnkW.js";function _s(i,t,e){ce&&ot();var a=i,s=Jt,v,o,d=null,_=ja()?Na:Da;function p(){v&&zt(v),d!==null&&(d.lastChild.remove(),a.before(d),d=null),v=o}dt(()=>{if(_(s,s=t())){var b=a,x=Wt();x&&(d=document.createDocumentFragment(),d.append(b=mt())),o=Xe(()=>e(b)),x?Re.add_callback(p):p()}}),ce&&(a=qe)}function vt(i,t){return t}function bs(i,t,e){for(var a=i.items,s=[],v=t.length,o=0;o<v;o++)Ra(t[o].e,s,!0);var d=v>0&&s.length===0&&e!==null;if(d){var _=e.parentNode;Fa(_),_.append(e),a.clear(),ze(i,t[0].prev,t[v-1].next)}Ba(s,()=>{for(var p=0;p<v;p++){var b=t[p];d||(a.delete(b.k),ze(i,b.prev,b.next)),Ze(b.e,!d)}})}function Ge(i,t,e,a,s,v=null){var o=i,d={flags:t,items:new Map,first:null},_=(t&aa)!==0;if(_){var p=i;o=ce?lt(ta(p)):p.appendChild(mt())}ce&&ot();var b=null,x=!1,g=new Map,w=rt(()=>{var E=e();return Zt(E)?E:E==null?[]:Qt(E)}),h,$;function y(){xs($,h,d,g,o,s,t,a,e),v!==null&&(h.length===0?b?Pt(b):b=Xe(()=>v(o)):b!==null&&zt(b,()=>{b=null}))}dt(()=>{$??=ea,h=r(w);var E=h.length;if(x&&E===0)return;x=E===0;let A=!1;if(ce){var V=Ia(o)===za;V!==(E===0)&&(o=Vt(),lt(o),Be(!1),A=!0)}if(ce){for(var T=null,q,m=0;m<E;m++){if(qe.nodeType===Pa&&qe.data===qa){o=qe,A=!0,Be(!1);break}var S=h[m],N=a(S,m);q=It(qe,d,T,null,S,N,m,s,t,e),d.items.set(N,q),T=q}E>0&&lt(Vt())}if(ce)E===0&&v&&(b=Xe(()=>v(o)));else if(Wt()){var X=new Set,j=Re;for(m=0;m<E;m+=1){S=h[m],N=a(S,m);var R=d.items.get(N)??g.get(N);R?(t&(bt|_t))!==0&&ra(R,S,m,t):(q=It(null,d,null,null,S,N,m,s,t,e,!0),g.set(N,q)),X.add(N)}for(const[F,le]of d.items)X.has(F)||j.skipped_effects.add(le.e);j.add_callback(y)}else y();A&&Be(!0),r(w)}),ce&&(o=qe)}function xs(i,t,e,a,s,v,o,d,_){var p=(o&Xa)!==0,b=(o&(bt|_t))!==0,x=t.length,g=e.items,w=e.first,h=w,$,y=null,E,A=[],V=[],T,q,m,S;if(p)for(S=0;S<x;S+=1)T=t[S],q=d(T,S),m=g.get(q),m!==void 0&&(m.a?.measure(),(E??=new Set).add(m));for(S=0;S<x;S+=1){if(T=t[S],q=d(T,S),m=g.get(q),m===void 0){var N=a.get(q);if(N!==void 0){a.delete(q),g.set(q,N);var X=y?y.next:h;ze(e,y,N),ze(e,N,X),Et(N,X,s),y=N}else{var j=h?h.e.nodes_start:s;y=It(j,e,y,y===null?e.first:y.next,T,q,S,v,o,_)}g.set(q,y),A=[],V=[],h=y.next;continue}if(b&&ra(m,T,S,o),(m.e.f&Lt)!==0&&(Pt(m.e),p&&(m.a?.unfix(),(E??=new Set).delete(m))),m!==h){if($!==void 0&&$.has(m)){if(A.length<V.length){var R=V[0],F;y=R.prev;var le=A[0],Y=A[A.length-1];for(F=0;F<A.length;F+=1)Et(A[F],R,s);for(F=0;F<V.length;F+=1)$.delete(V[F]);ze(e,le.prev,Y.next),ze(e,y,le),ze(e,Y,R),h=R,y=Y,S-=1,A=[],V=[]}else $.delete(m),Et(m,h,s),ze(e,m.prev,m.next),ze(e,m,y===null?e.first:y.next),ze(e,y,m),y=m;continue}for(A=[],V=[];h!==null&&h.k!==q;)(h.e.f&Lt)===0&&($??=new Set).add(h),V.push(h),h=h.next;if(h===null)continue;m=h}A.push(m),y=m,h=m.next}if(h!==null||$!==void 0){for(var O=$===void 0?[]:Qt($);h!==null;)(h.e.f&Lt)===0&&O.push(h),h=h.next;var B=O.length;if(B>0){var D=(o&aa)!==0&&x===0?s:null;if(p){for(S=0;S<B;S+=1)O[S].a?.measure();for(S=0;S<B;S+=1)O[S].a?.fix()}bs(e,O,D)}}p&&Ha(()=>{if(E!==void 0)for(m of E)m.a?.apply()}),i.first=e.first&&e.first.e,i.last=y&&y.e;for(var k of a.values())Ze(k.e);a.clear()}function ra(i,t,e,a){(a&bt)!==0&&Ft(i.v,t),(a&_t)!==0?Ft(i.i,e):i.i=e}function It(i,t,e,a,s,v,o,d,_,p,b){var x=(_&bt)!==0,g=(_&Oa)===0,w=x?g?pe(s,!1,!1):Rt(s):s,h=(_&_t)===0?o:Rt(o),$={i:h,v:w,k:v,a:null,e:null,prev:e,next:a};try{if(i===null){var y=document.createDocumentFragment();y.append(i=mt())}return $.e=Xe(()=>d(i,w,h,p),ce),$.e.prev=e&&e.e,$.e.next=a&&a.e,e===null?b||(t.first=$):(e.next=$,e.e.next=$.e),a!==null&&(a.prev=$,a.e.prev=$.e),$}finally{}}function Et(i,t,e){for(var a=i.next?i.next.e.nodes_start:e,s=t?t.e.nodes_start:e,v=i.e.nodes_start;v!==null&&v!==a;){var o=Va(v);s.before(v),v=o}}function ze(i,t,e){t===null?i.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function me(i,t,e,a,s){ce&&ot();var v=t.$$slots?.[e],o=!1;v===!0&&(v=t.children,o=!0),v===void 0||v(i,o?()=>a:a)}function ys(i,t,e,a,s,v){let o=ce;ce&&ot();var d,_,p=null;ce&&qe.nodeType===Ga&&(p=qe,ot());var b=ce?qe:i,x;dt(()=>{const g=t()||null;var w=Ka;g!==d&&(x&&(g===null?zt(x,()=>{x=null,_=null}):g===_?Pt(x):Ze(x)),g&&g!==_&&(x=Xe(()=>{if(p=ce?p:document.createElementNS(w,g),Wa(p,p),a){ce&&wa(g)&&p.append(document.createComment(""));var h=ce?ta(p):p.appendChild(mt());ce&&(h===null?Be(!1):lt(h)),a(p,h)}ea.nodes_end=p,b.before(p)})),d=g,d&&(_=d))},Ya),o&&(Be(!0),lt(b))}function ks(i,t){var e=void 0,a;dt(()=>{e!==(e=t())&&(a&&(Ze(a),a=null),e&&(a=Xe(()=>{qt(()=>e(i))})))})}function la(i){var t,e,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(t=0;t<s;t++)i[t]&&(e=la(i[t]))&&(a&&(a+=" "),a+=e)}else for(e in i)i[e]&&(a&&(a+=" "),a+=e);return a}function $s(){for(var i,t,e=0,a="",s=arguments.length;e<s;e++)(i=arguments[e])&&(t=la(i))&&(a&&(a+=" "),a+=t);return a}function Ss(i){return typeof i=="object"?$s(i):i??""}const Bt=[...` 	
\r\f \v\uFEFF`];function Ms(i,t,e){var a=i==null?"":""+i;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var v=s.length,o=0;(o=a.indexOf(s,o))>=0;){var d=o+v;(o===0||Bt.includes(a[o-1]))&&(d===a.length||Bt.includes(a[d]))?a=(o===0?"":a.substring(0,o))+a.substring(d+1):o=d}}return a===""?null:a}function Ht(i,t=!1){var e=t?" !important;":";",a="";for(var s in i){var v=i[s];v!=null&&v!==""&&(a+=" "+s+": "+v+e)}return a}function Tt(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function ws(i,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var v=!1,o=0,d=!1,_=[];a&&_.push(...Object.keys(a).map(Tt)),s&&_.push(...Object.keys(s).map(Tt));var p=0,b=-1;const $=i.length;for(var x=0;x<$;x++){var g=i[x];if(d?g==="/"&&i[x-1]==="*"&&(d=!1):v?v===g&&(v=!1):g==="/"&&i[x+1]==="*"?d=!0:g==='"'||g==="'"?v=g:g==="("?o++:g===")"&&o--,!d&&v===!1&&o===0){if(g===":"&&b===-1)b=x;else if(g===";"||x===$-1){if(b!==-1){var w=Tt(i.substring(p,b).trim());if(!_.includes(w)){g!==";"&&x++;var h=i.substring(p,x).trim();e+=" "+h+";"}}p=x+1,b=-1}}}}return a&&(e+=Ht(a)),s&&(e+=Ht(s,!0)),e=e.trim(),e===""?null:e}return i==null?null:String(i)}function ve(i,t,e,a,s,v){var o=i.__className;if(ce||o!==e||o===void 0){var d=Ms(e,a,v);(!ce||d!==i.getAttribute("class"))&&(d==null?i.removeAttribute("class"):t?i.className=d:i.setAttribute("class",d)),i.__className=e}else if(v&&s!==v)for(var _ in v){var p=!!v[_];(s==null||p!==!!s[_])&&i.classList.toggle(_,p)}return v}function Ut(i,t={},e,a){for(var s in e){var v=e[s];t[s]!==v&&(e[s]==null?i.style.removeProperty(s):i.style.setProperty(s,v,a))}}function xt(i,t,e,a){var s=i.__style;if(ce||s!==t){var v=ws(t,a);(!ce||v!==i.getAttribute("style"))&&(v==null?i.removeAttribute("style"):i.style.cssText=v),i.__style=t}else a&&(Array.isArray(a)?(Ut(i,e?.[0],a[0]),Ut(i,e?.[1],a[1],"important")):Ut(i,e,a));return a}function ht(i,t,e=!1){if(i.multiple){if(t==null)return;if(!Zt(t))return Ja();for(var a of i.options)a.selected=t.includes(nt(a));return}for(a of i.options){var s=nt(a);if(Qa(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(i.selectedIndex=-1)}function na(i){var t=new MutationObserver(()=>{ht(i,i.__value)});t.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Za(()=>{t.disconnect()})}function oa(i,t,e=t){var a=!0;sa(i,"change",s=>{var v=s?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(v),nt);else{var d=i.querySelector(v)??i.querySelector("option:not([disabled])");o=d&&nt(d)}e(o)}),qt(()=>{var s=t();if(ht(i,s,a),a&&s===void 0){var v=i.querySelector(":checked");v!==null&&(s=nt(v),e(s))}i.__value=s,a=!1}),na(i)}function nt(i){return"__value"in i?i.__value:i.value}const st=Symbol("class"),it=Symbol("style"),va=Symbol("is custom element"),ca=Symbol("is html");function Cs(i){if(ce){var t=!1,e=()=>{if(!t){if(t=!0,i.hasAttribute("value")){var a=i.value;He(i,"value",null),i.value=a}if(i.hasAttribute("checked")){var s=i.checked;He(i,"checked",null),i.checked=s}}};i.__on_r=e,ss(e),is()}}function As(i,t){t?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function He(i,t,e,a){var s=da(i);ce&&(s[t]=i.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&i.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(i[ns]=e),e==null?i.removeAttribute(t):typeof e!="string"&&ua(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function Ls(i,t,e,a,s=!1,v=!1){if(ce&&s&&i.tagName==="INPUT"){var o=i,d=o.type==="checkbox"?"defaultChecked":"defaultValue";d in e||Cs(o)}var _=da(i),p=_[va],b=!_[ca];let x=ce&&p;x&&Be(!1);var g=t||{},w=i.tagName==="OPTION";for(var h in t)h in e||(e[h]=null);e.class?e.class=Ss(e.class):e[st]&&(e.class=null),e[it]&&(e.style??=null);var $=ua(i);for(const m in e){let S=e[m];if(w&&m==="value"&&S==null){i.value=i.__value="",g[m]=S;continue}if(m==="class"){var y=i.namespaceURI==="http://www.w3.org/1999/xhtml";ve(i,y,S,a,t?.[st],e[st]),g[m]=S,g[st]=e[st];continue}if(m==="style"){xt(i,S,t?.[it],e[it]),g[m]=S,g[it]=e[it];continue}var E=g[m];if(!(S===E&&!(S===void 0&&i.hasAttribute(m)))){g[m]=S;var A=m[0]+m[1];if(A!=="$$")if(A==="on"){const N={},X="$$"+m;let j=m.slice(2);var V=Ea(j);if(Ca(j)&&(j=j.slice(0,-7),N.capture=!0),!V&&E){if(S!=null)continue;i.removeEventListener(j,g[X],N),g[X]=null}if(S!=null)if(V)i[`__${j}`]=S,ct([j]);else{let R=function(F){g[m].call(this,F)};g[X]=Aa(j,i,R,N)}else V&&(i[`__${j}`]=void 0)}else if(m==="style")He(i,m,S);else if(m==="autofocus")as(i,!!S);else if(!p&&(m==="__value"||m==="value"&&S!=null))i.value=i.__value=S;else if(m==="selected"&&w)As(i,S);else{var T=m;b||(T=La(T));var q=T==="defaultValue"||T==="defaultChecked";if(S==null&&!p&&!q)if(_[m]=null,T==="value"||T==="checked"){let N=i;const X=t===void 0;if(T==="value"){let j=N.defaultValue;N.removeAttribute(T),N.defaultValue=j,N.value=N.__value=X?j:null}else{let j=N.defaultChecked;N.removeAttribute(T),N.defaultChecked=j,N.checked=X?j:!1}}else i.removeAttribute(m);else q||$.includes(T)&&(p||typeof S!="string")?(i[T]=S,T in _&&(_[T]=Jt)):typeof S!="function"&&He(i,T,S)}}}return x&&Be(!0),g}function Xt(i,t,e=[],a=[],s,v=!1,o=!1){es(e,a,d=>{var _=void 0,p={},b=i.nodeName==="SELECT",x=!1;if(dt(()=>{var w=t(...d.map(r)),h=Ls(i,_,w,s,v,o);x&&b&&"value"in w&&ht(i,w.value);for(let y of Object.getOwnPropertySymbols(p))w[y]||Ze(p[y]);for(let y of Object.getOwnPropertySymbols(w)){var $=w[y];y.description===ts&&(!_||$!==_[y])&&(p[y]&&Ze(p[y]),p[y]=Xe(()=>ks(i,()=>$))),h[y]=$}_=h}),b){var g=i;qt(()=>{ht(g,_.value,!0),na(g)})}x=!0})}function da(i){return i.__attributes??={[va]:i.nodeName.includes("-"),[ca]:i.namespaceURI===rs}}var Gt=new Map;function ua(i){var t=i.getAttribute("is")||i.nodeName,e=Gt.get(t);if(e)return e;Gt.set(t,e=[]);for(var a,s=i,v=Element.prototype;v!==s;){a=os(s);for(var o in a)a[o].set&&e.push(o);s=ls(s)}return e}function Es(i,t,e=t){var a=new WeakSet;sa(i,"input",async s=>{var v=s?i.defaultValue:i.value;if(v=jt(i)?Nt(v):v,e(v),Re!==null&&a.add(Re),await vs(),v!==(v=t())){var o=i.selectionStart,d=i.selectionEnd;i.value=v??"",d!==null&&(i.selectionStart=o,i.selectionEnd=Math.min(d,i.value.length))}}),(ce&&i.defaultValue!==i.value||u(t)==null&&i.value)&&(e(jt(i)?Nt(i.value):i.value),Re!==null&&a.add(Re)),cs(()=>{var s=t();if(i===document.activeElement){var v=ds??Re;if(a.has(v))return}jt(i)&&s===Nt(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function jt(i){var t=i.type;return t==="number"||t==="range"}function Nt(i){return i===""?null:+i}const yt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function Ts(){return Object.keys(yt)}function Us(i){return yt[i]?.displayName||i}function Dt(i){return i in yt}class js{displayMode;theme;constructor(t="prussian-blue",e="system"){this.displayMode=e,this.theme=Dt(t)?t:"prussian-blue"}getTheme(){const t=this.getEffectiveShade();return`${this.theme}-${t}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(t){return Dt(t)?(this.theme=t,!0):!1}setDisplayMode(t){this.displayMode=t}getAvailableThemes(){return Object.keys(yt)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(t){this.displayMode=t?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t={theme:this.theme,displayMode:this.displayMode};localStorage.setItem("tomeclicker_config",JSON.stringify(t))}catch(t){console.error("Failed to save config to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_config");if(t){const e=JSON.parse(t);return e.theme&&Dt(e.theme)&&(this.theme=e.theme),e.displayMode&&(this.displayMode=e.displayMode),!0}return!1}catch(t){return console.error("Error loading config from localStorage:",t),!1}}}class Ns{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;critChance;critDamage;upgrades;saveIntegrity;lastValidation;_validationKey;stats;trainingActions;meditationActions;idleExpRate;adventureModeUnlocked;meditationUnlocked;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="discipline"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,t.currentLevel)),this.recalculateIdleExpRate()}recalculateIdleExpRate(){this.idleExpRate=0;for(const e of Object.values(this.upgrades))e.effectType==="idleExp"&&(this.idleExpRate+=e.effectValue*e.currentLevel);const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.idleExpRate*=Math.pow(5,t.currentLevel)),this.recalculateCritStats()}recalculateCritStats(){this.critChance=0,this.critDamage=.5;for(const t of Object.values(this.upgrades))t.effectType==="critChance"?this.critChance+=t.effectValue*t.currentLevel:t.effectType==="critDamage"&&(this.critDamage+=t.effectValue*t.currentLevel)}getTrainingSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingSpeed"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getTrainingCostMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingCost"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getOsmosisExpBonus(){let t=0;for(const e of Object.values(this.upgrades))e.effectType==="osmosisExp"&&(t+=e.effectValue*e.currentLevel);return t}getGlobalIdleSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="globalIdleSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getOsmosisSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="osmosisSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getStatLevelCost(t){const e=this.stats[t];return Math.floor(100*Math.pow(1.5,e-1))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}migrateTrainingActions(t){const e=this.initializeTrainingActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}migrateMeditationActions(t){const e=this.initializeMeditationActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}initializeUpgrades(){return{"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields exponentially greater rewards",effect:"+100% EXP per click per level",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1,minLevel:1},"critical-insight":{id:"critical-insight",name:"Critical Insight",description:"Moments of clarity grant bursts of understanding",effect:"+0.5% crit chance per level",baseCost:250,costMultiplier:1.75,maxLevel:50,currentLevel:0,effectType:"critChance",effectValue:.005,minLevel:1},"devastating-critique":{id:"devastating-critique",name:"Devastating Critique",description:"Critical insights become increasingly profound",effect:"+5% crit damage per level",baseCost:500,costMultiplier:2,maxLevel:50,currentLevel:0,effectType:"critDamage",effectValue:.05,minLevel:1},"osmotic-absorption":{id:"osmotic-absorption",name:"Deep Contemplation",description:"Thoughtful reflection yields greater insights",effect:"+1 EXP per rumination level",baseCost:100,costMultiplier:1.18,maxLevel:100,currentLevel:0,effectType:"osmosisExp",effectValue:1,minLevel:2},"flow-state":{id:"flow-state",name:"Flow State",description:"Enter a state of effortless focus",effect:"+2% rumination speed per level",baseCost:300,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"osmosisSpeed",effectValue:.02,minLevel:2},"temporal-mastery":{id:"temporal-mastery",name:"Temporal Mastery",description:"Bend time itself to your will (affects ALL idle actions)",effect:"+5% global idle speed per level",baseCost:500,costMultiplier:1.25,maxLevel:100,currentLevel:0,effectType:"globalIdleSpeed",effectValue:.05,minLevel:2},"efficient-training":{id:"efficient-training",name:"Efficient Training",description:"Complete training exercises faster",effect:"-10% training time per level",baseCost:1e4,costMultiplier:1.3,maxLevel:10,currentLevel:0,effectType:"trainingSpeed",effectValue:.1,minLevel:3},"cost-reduction":{id:"cost-reduction",name:"Cost Reduction",description:"Training requires less EXP to start",effect:"-20% training cost per level",baseCost:15e3,costMultiplier:1.35,maxLevel:5,currentLevel:0,effectType:"trainingCost",effectValue:.2,minLevel:3},discipline:{id:"discipline",name:"Discipline",description:"Unified focus accelerates all progress",effect:"5x all EXP gain per level",baseCost:1e3,costMultiplier:100,maxLevel:10,currentLevel:0,effectType:"clickMultiplier",effectValue:5,minLevel:1}}}initializeTrainingActions(){return{"practice-osmosis":{id:"practice-osmosis",name:"Ruminate",description:"Learn through observation and reflection",progress:0,baseDuration:15e3,duration:15e3,expCost:0,isActive:!1,lastUpdate:Date.now()},"train-strength":{id:"train-strength",name:"Lift Heavy Objects",description:"Build raw physical power",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"strength"},"train-dexterity":{id:"train-dexterity",name:"Practice Quick Movements",description:"Improve agility and reflexes",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"dexterity"},"train-intelligence":{id:"train-intelligence",name:"Study Ancient Texts",description:"Expand knowledge and understanding",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"intelligence"},"train-wisdom":{id:"train-wisdom",name:"Meditate on Meaning",description:"Deepen insight and awareness",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"wisdom"}}}initializeMeditationActions(){return{"meditate-future":{id:"meditate-future",name:"Meditate on Your Future",description:"Unlock the path to adventure",progress:0,baseDuration:6e4,duration:6e4,expCost:50,isActive:!1,lastUpdate:Date.now(),oneTime:!0,completed:!1},disassociate:{id:"disassociate",name:"Disassociate",description:"Take a mental health day. Increases offline progress time.",progress:0,baseDuration:3e4,duration:3e4,expCost:100,isActive:!1,lastUpdate:Date.now(),oneTime:!1}}}startIdleAction(t,e){const a=t[e];if(!a||a.oneTime&&a.completed)return!1;for(const s of Object.values(t))s.isActive&&(s.isActive=!1,s.progress=0);if(a.isActive=!0,a.progress=0,a.lastUpdate=Date.now(),e==="practice-osmosis"){const s=this.getOsmosisSpeedMultiplier(),v=this.getGlobalIdleSpeedMultiplier(),o=s*v;a.duration=Math.floor(a.baseDuration/o)}else if(a.trainsStat){const s=this.getTrainingSpeedMultiplier(),v=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration*s/v)}else{const s=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration/s)}return!0}updateIdleActions(){const t=Date.now();for(const e of Object.values(this.trainingActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeTrainingAction(e.id)}for(const e of Object.values(this.meditationActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeMeditationAction(e.id)}}completeTrainingAction(t){const e=this.trainingActions[t];if(!(!e||!e.isActive)){if(t==="practice-osmosis"){const s=this.getOsmosisExpBonus();this.addExp(10+s),e.progress=0,e.lastUpdate=Date.now();return}if(e.trainsStat){const a=e.trainsStat,s=this.getStatLevelCost(a);let v=10;Math.random()<this.critChance&&(v=Math.floor(v*1.5)),this.addExp(v),this.exp>=s?(this.exp-=s,this.stats[a]++,e.progress=0,e.lastUpdate=Date.now()):(e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}}}completeMeditationAction(t){const e=this.meditationActions[t];!e||!e.isActive||(t==="meditate-future"&&(this.adventureModeUnlocked=!0,e.completed=!0),e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}stopIdleAction(t,e){const a=t[e];a&&(a.isActive=!1,a.progress=0,a.lastUpdate=Date.now())}showTraining(){return this.level>=2}showStats(){return this.level>=3}showMeditation(){return this.stats.strength>=5&&this.stats.dexterity>=5&&this.stats.intelligence>=5&&this.stats.wisdom>=5}showAdventure(){return this.adventureModeUnlocked}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="discipline"?e.baseCost*Math.pow(e.costMultiplier,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let v=0;v<e.length;v++)s+=String.fromCharCode(e.charCodeAt(v)^a.charCodeAt(v%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,critChance:this.critChance,critDamage:this.critDamage,upgrades:this.upgrades,stats:this.stats,trainingActions:this.trainingActions,meditationActions:this.meditationActions,idleExpRate:this.idleExpRate,adventureModeUnlocked:this.adventureModeUnlocked,meditationUnlocked:this.meditationUnlocked,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),v=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:v,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const v=this.decryptSave(e.data);a=JSON.parse(v)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.critChance=a.critChance||0,this.critDamage=a.critDamage||.5,this.stats=a.stats||{strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=a.trainingActions?this.migrateTrainingActions(a.trainingActions):this.initializeTrainingActions(),this.meditationActions=a.meditationActions?this.migrateMeditationActions(a.meditationActions):this.initializeMeditationActions(),this.idleExpRate=a.idleExpRate||0,this.adventureModeUnlocked=a.adventureModeUnlocked||!1,this.meditationUnlocked=a.meditationUnlocked||!1,this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const v=this.importSave(decodeURIComponent(s));return v.success?!0:(console.error("Failed to load save from cookies:",v.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t)}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(t){const e=this.importSave(t);return e.success?!0:(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){this.saveToLocalStorage()}hardReset(t=!0){const e=t?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=e,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var Ds=z('<div class="progress-container svelte-1xm1ks6"><div></div></div>'),Is=z('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function zs(i,t){Ae(t,!0);const e=Ot(()=>{if(t.game.level<2)return null;const x=t.game.exp;let g=1/0,w=!1;const h=t.game.getLevelUpCost();h<g&&(g=h,w=x>=h);const $=t.game.upgrades.discipline;if($&&$.currentLevel<$.maxLevel){const y=t.game.getUpgradeCost("discipline");y<g&&(g=y,w=x>=y)}return g===1/0?null:{progress:Math.min(x/g,1),canAfford:w}});var a=Is(),s=n(a),v=n(s),o=n(v);l(v);var d=c(v,2),_=n(d);l(d),l(s);var p=c(s,2);{var b=x=>{var g=Ds(),w=n(g);let h;l(g),J($=>{h=ve(w,1,"progress-bar svelte-1xm1ks6",null,h,$),xt(w,`width: ${r(e).progress*100}%`)},[()=>({full:r(e).canAfford})]),f(x,g)};I(p,x=>{r(e)&&x(b)})}l(a),J(x=>{C(o,`EXP: ${x??""}`),C(_,`Level: ${t.game.level??""}`)},[()=>Math.floor(t.game.exp).toLocaleString()]),f(i,a),Le()}/**
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
 */const Ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var qs=us("<svg><!><!></svg>");function ke(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]),a=ge(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ae(t,!1);let s=xe(t,"name",8,void 0),v=xe(t,"color",8,"currentColor"),o=xe(t,"size",8,24),d=xe(t,"strokeWidth",8,2),_=xe(t,"absoluteStrokeWidth",8,!1),p=xe(t,"iconNode",24,()=>[]);const b=(...h)=>h.filter(($,y,E)=>!!$&&E.indexOf($)===y).join(" ");Oe();var x=qs();Xt(x,(h,$)=>({...Ps,...a,width:o(),height:o(),stroke:v(),"stroke-width":h,class:$}),[()=>(M(_()),M(d()),M(o()),u(()=>_()?Number(d())*24/Number(o()):d())),()=>(M(s()),M(e),u(()=>b("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var g=n(x);Ge(g,1,p,vt,(h,$)=>{var y=Ot(()=>fs(r($),2));let E=()=>r(y)[0],A=()=>r(y)[1];var V=se(),T=Q(V);ys(T,E,!0,(q,m)=>{Xt(q,()=>({...A()}))}),f(h,V)});var w=c(g);me(w,t,"default",{}),l(x),f(i,x),Le()}function Os(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];ke(i,ye({name:"brain"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Vs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];ke(i,ye({name:"chart-column"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Rs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ke(i,ye({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Fs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ke(i,ye({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Bs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];ke(i,ye({name:"compass"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Yt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ke(i,ye({name:"download"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Hs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ke(i,ye({name:"external-link"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Xs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ke(i,ye({name:"save"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Gs(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ke(i,ye({name:"settings"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Ys(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ke(i,ye({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}function Kt(i,t){const e=ge(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];ke(i,ye({name:"upload"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=se(),d=Q(o);me(d,t,"default",{}),f(s,o)},$$slots:{default:!0}}))}var Ws=z('<button class="svelte-igdjqh"><p><!></p></button>'),Js=z('<button class="svelte-igdjqh"><p><!></p></button>'),Qs=z('<button class="svelte-igdjqh"><p><!></p></button>'),Zs=z('<button class="svelte-igdjqh"><p><!></p></button>'),ei=z('<button class="svelte-igdjqh"><p><!></p></button>'),ti=z('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <!> <!> <!> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function ai(i,t){Ae(t,!1);const e=pe();let a=xe(t,"game",12);Ce(()=>M(a()),()=>{ie(e,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(W=>a().canAffordUpgrade(W.id))))}),Ye(),Oe();var s=ti(),v=n(s),o=n(v),d=n(o,!0);l(o),l(v);var _=c(v,2),p=n(_),b=n(p);let x;var g=n(b);pa(g,{size:24}),l(b),l(p);var w=c(p,2);{var h=W=>{var ee=Ws(),H=n(ee);let ae;var L=n(H);Ks(L,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&r(e)})]),he("click",ee,()=>a(a().menu="upgrades",!0)),f(W,ee)};I(w,W=>{M(a()),u(()=>a().showUpgrades())&&W(h)})}var $=c(w,2);{var y=W=>{var ee=Js(),H=n(ee);let ae;var L=n(H);Hs(L,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="training"})]),he("click",ee,()=>a(a().menu="training",!0)),f(W,ee)};I($,W=>{M(a()),u(()=>a().showTraining())&&W(y)})}var E=c($,2);{var A=W=>{var ee=Qs(),H=n(ee);let ae;var L=n(H);Vs(L,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="stats"})]),he("click",ee,()=>a(a().menu="stats",!0)),f(W,ee)};I(E,W=>{M(a()),u(()=>a().showStats())&&W(A)})}var V=c(E,2);{var T=W=>{var ee=Zs(),H=n(ee);let ae;var L=n(H);Os(L,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="meditation"})]),he("click",ee,()=>a(a().menu="meditation",!0)),f(W,ee)};I(V,W=>{M(a()),u(()=>a().showMeditation())&&W(T)})}var q=c(V,2);{var m=W=>{var ee=ei(),H=n(ee);let ae;var L=n(H);Bs(L,{size:24}),l(H),l(ee),J(P=>ae=ve(H,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="adventure"})]),he("click",ee,()=>a(a().menu="adventure",!0)),f(W,ee)};I(q,W=>{M(a()),u(()=>a().showAdventure())&&W(m)})}var S=c(q,2),N=n(S);let X;var j=n(N);Ys(j,{size:24}),l(N),l(S);var R=c(S,2),F=n(R);let le;var Y=n(F);Fs(Y,{size:24}),l(F),l(R);var O=c(R,2),B=n(O);let D;var k=n(B);ga(k,{size:24}),l(B),l(O);var U=c(O,2),K=n(U);let te;var re=n(K);Gs(re,{size:24}),l(K),l(U);var ne=c(U,2),G=n(ne);let Z;var ue=n(G);fa(ue,{size:24}),l(G),l(ne),l(_),l(s),J((W,ee,H,ae,L,P)=>{C(d,(M(a()),u(()=>a().menu))),x=ve(b,1,"svelte-igdjqh",null,x,W),X=ve(N,1,"svelte-igdjqh",null,X,ee),le=ve(F,1,"svelte-igdjqh",null,le,H),D=ve(B,1,"svelte-igdjqh",null,D,ae),te=ve(K,1,"svelte-igdjqh",null,te,L),Z=ve(G,1,"svelte-igdjqh",null,Z,P)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),he("click",p,()=>a(a().menu="practice",!0)),he("click",S,()=>a(a().menu="story",!0)),he("click",R,()=>a(a().menu="help",!0)),he("click",O,()=>a(a().menu="saves",!0)),he("click",U,()=>a(a().menu="settings",!0)),he("click",ne,()=>a(a().menu="about",!0)),f(i,s),Le()}var si=z('<div class="crit-text svelte-ylrqw9">CRIT!</div>'),ii=z('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><!> <div class="item svelte-ylrqw9"><!><br class="svelte-ylrqw9"/> </div></button></div></div>');function ri(i,t){Ae(t,!0);let e=xe(t,"game",15),a=Ot(()=>e()?e().updateClickText():"Loading..."),s=Fe(!1);function v(){if(!e())return;let h=e().getClickValue();Math.random()<e().critChance&&(h*=1+e().critDamage,ie(s,!0),setTimeout(()=>ie(s,!1),300)),e().addExp(h),e(e())}var o=ii(),d=n(o),_=n(d);_.__click=v,_.__touchstart=v;var p=n(_);{var b=h=>{var $=si();f(h,$)};I(p,h=>{r(s)&&h(b)})}var x=c(p,2),g=n(x);pa(g,{size:48});var w=c(g,2,!0);l(x),l(_),l(d),l(o),J(()=>C(w,r(a))),f(i,o),Le()}ct(["click","touchstart"]);var li=z('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),ni=z('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),oi=z('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),vi=z('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function ci(i,t){Ae(t,!1);const e=pe(),a=pe();let s=xe(t,"game",8),v=xe(t,"config",8),o=pe(null);function d(D){ie(o,D)}function _(){r(o)&&s().purchaseUpgrade(r(o).id)&&(ie(o,s().upgrades[r(o).id]),s().autoSave())}function p(D){return D.toLocaleString()}function b(){s().levelUp()&&s().autoSave()}v(),Ce(()=>M(s()),()=>{ie(e,Object.values(s().upgrades).filter(D=>!D.minLevel||D.minLevel<=s().level).filter(D=>D.id!=="discipline"))}),Ce(()=>M(s()),()=>{ie(a,s().upgrades.discipline)}),Ye(),Oe();var x=vi(),g=c(n(x),2),w=n(g),h=n(w);let $;var y=c(n(h),2),E=n(y);l(y);var A=c(y,2),V=n(A);l(A),l(h);var T=c(h,2);let q;var m=n(T),S=n(m,!0);l(m);var N=c(m,2),X=n(N);l(N);var j=c(N,2),R=n(j);l(j),l(T);var F=c(T,2);Ge(F,1,()=>r(e),D=>D.id,(D,k)=>{var U=li();let K;var te=n(U),re=n(te,!0);l(te);var ne=c(te,2),G=n(ne);l(ne);var Z=c(ne,2),ue=n(Z);l(Z);var W=c(Z,2),ee=n(W);{var H=L=>{var P=be();J(oe=>C(P,`+${oe??""}% click EXP per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(L,P)},ae=L=>{var P=se(),oe=Q(P);{var $e=fe=>{var _e=be();J(Me=>C(_e,`+${Me??""}% crit chance per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(1)))]),f(fe,_e)},Se=fe=>{var _e=se(),Me=Q(_e);{var Ue=we=>{var Ne=be();J(De=>C(Ne,`+${De??""}% crit damage per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(we,Ne)},je=we=>{var Ne=se(),De=Q(Ne);{var Ve=Ee=>{var Ie=be();J(()=>C(Ie,`+${r(k),u(()=>r(k).effectValue)??""} rumination EXP per level`)),f(Ee,Ie)},kt=Ee=>{var Ie=se(),$t=Q(Ie);{var St=Te=>{var Pe=be();J(wt=>C(Pe,`+${wt??""}% rumination speed per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Te,Pe)},Mt=Te=>{var Pe=se(),wt=Q(Pe);{var ha=Ke=>{var et=be();J(Ct=>C(et,`+${Ct??""}% all idle speed per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Ke,et)},ma=Ke=>{var et=se(),Ct=Q(et);{var _a=We=>{var tt=be();J(()=>C(tt,`+${r(k),u(()=>r(k).effectValue)??""} idle EXP/s per level`)),f(We,tt)},ba=We=>{var tt=se(),xa=Q(tt);{var ya=Je=>{var at=be();J(At=>C(at,`-${At??""}% training time per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Je,at)},ka=Je=>{var at=se(),At=Q(at);{var $a=Qe=>{var ut=be();J(Ma=>C(ut,`-${Ma??""}% training cost per level`),[()=>(r(k),u(()=>(r(k).effectValue*100).toFixed(0)))]),f(Qe,ut)},Sa=Qe=>{var ut=be("Enhanced efficiency");f(Qe,ut)};I(At,Qe=>{r(k),u(()=>r(k).effectType==="trainingCost")?Qe($a):Qe(Sa,!1)},!0)}f(Je,at)};I(xa,Je=>{r(k),u(()=>r(k).effectType==="trainingSpeed")?Je(ya):Je(ka,!1)},!0)}f(We,tt)};I(Ct,We=>{r(k),u(()=>r(k).effectType==="idleExp")?We(_a):We(ba,!1)},!0)}f(Ke,et)};I(wt,Ke=>{r(k),u(()=>r(k).effectType==="globalIdleSpeed")?Ke(ha):Ke(ma,!1)},!0)}f(Te,Pe)};I($t,Te=>{r(k),u(()=>r(k).effectType==="osmosisSpeed")?Te(St):Te(Mt,!1)},!0)}f(Ee,Ie)};I(De,Ee=>{r(k),u(()=>r(k).effectType==="osmosisExp")?Ee(Ve):Ee(kt,!1)},!0)}f(we,Ne)};I(Me,we=>{r(k),u(()=>r(k).effectType==="critDamage")?we(Ue):we(je,!1)},!0)}f(fe,_e)};I(oe,fe=>{r(k),u(()=>r(k).effectType==="critChance")?fe($e):fe(Se,!1)},!0)}f(L,P)};I(ee,L=>{r(k),u(()=>r(k).effectType==="clickMultiplier")?L(H):L(ae,!1)})}l(W),l(U),J((L,P,oe)=>{K=ve(U,1,"upgrade-btn svelte-xd3x4d",null,K,L),He(U,"aria-label",`Select ${r(k),u(()=>r(k).name)??""} upgrade. Level ${r(k),u(()=>r(k).currentLevel)??""} of ${r(k),u(()=>r(k).maxLevel)??""}. Cost: ${P??""} EXP`),C(re,(r(k),u(()=>r(k).name))),C(G,`Level ${r(k),u(()=>r(k).currentLevel)??""}/${r(k),u(()=>r(k).maxLevel)??""}`),C(ue,`${oe??""} EXP`)},[()=>({selected:r(o)?.id===r(k).id,affordable:s().canAffordUpgrade(r(k).id),maxed:r(k).currentLevel>=r(k).maxLevel}),()=>(M(s()),r(k),u(()=>p(s().getUpgradeCost(r(k).id)))),()=>(M(s()),r(k),u(()=>p(s().getUpgradeCost(r(k).id))))]),he("click",U,()=>d(r(k))),f(D,U)}),de(2),l(w);var le=c(w,2),Y=n(le);{var O=D=>{var k=ni(),U=Q(k),K=n(U),te=n(K,!0);l(K);var re=c(K,2);l(U);var ne=c(U,2),G=n(ne),Z=n(G),ue=n(Z,!0);l(Z);var W=c(Z,2),ee=c(n(W));l(W);var H=c(W,2),ae=c(n(H));l(H);var L=c(H,2),P=c(n(L));l(L),l(G);var oe=c(G,2),$e=n(oe),Se=n($e);{var fe=Me=>{var Ue=be("MAX LEVEL");f(Me,Ue)},_e=Me=>{var Ue=se(),je=Q(Ue);{var we=De=>{var Ve=be("CANNOT AFFORD");f(De,Ve)},Ne=De=>{var Ve=be("PURCHASE");f(De,Ve)};I(je,De=>{M(s()),r(o),u(()=>!s().canAffordUpgrade(r(o).id))?De(we):De(Ne,!1)},!0)}f(Me,Ue)};I(Se,Me=>{r(o),u(()=>r(o).currentLevel>=r(o).maxLevel)?Me(fe):Me(_e,!1)})}l($e),l(oe),l(ne),J((Me,Ue)=>{C(te,(r(o),u(()=>r(o).name))),C(ue,(r(o),u(()=>r(o).description))),C(ee,` ${r(o),u(()=>r(o).effect)??""}`),C(ae,` ${Me??""} EXP`),C(P,` ${r(o),u(()=>r(o).currentLevel)??""}/${r(o),u(()=>r(o).maxLevel)??""}`),$e.disabled=Ue},[()=>(M(s()),r(o),u(()=>p(s().getUpgradeCost(r(o).id)))),()=>(M(s()),r(o),u(()=>!s().canPurchaseUpgrade(r(o).id)))]),he("click",re,()=>ie(o,null)),he("click",$e,_),f(D,k)},B=D=>{var k=oi();f(D,k)};I(Y,D=>{r(o)?D(O):D(B,!1)})}l(le),l(g),l(x),J((D,k,U,K,te,re,ne)=>{$=ve(h,1,"upgrade-btn special-btn svelte-xd3x4d",null,$,D),h.disabled=k,He(h,"aria-label",`Level up from ${M(s()),u(()=>s().level)??""} to ${M(s()),u(()=>s().level+1)??""}. Cost: ${U??""} EXP`),C(E,`Level ${M(s()),u(()=>s().level)??""} → ${M(s()),u(()=>s().level+1)??""}`),C(V,`${K??""} EXP`),q=ve(T,1,"upgrade-btn special-btn svelte-xd3x4d",null,q,te),T.disabled=(r(a),u(()=>r(a).currentLevel>=r(a).maxLevel)),He(T,"aria-label",`Select ${r(a),u(()=>r(a).name)??""} upgrade. Level ${r(a),u(()=>r(a).currentLevel)??""} of ${r(a),u(()=>r(a).maxLevel)??""}. Cost: ${re??""} EXP`),C(S,(r(a),u(()=>r(a).name))),C(X,`Level ${r(a),u(()=>r(a).currentLevel)??""}/${r(a),u(()=>r(a).maxLevel)??""}`),C(R,`${ne??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(M(s()),u(()=>!s().canLevelUp())),()=>(M(s()),u(()=>p(s().getLevelUpCost()))),()=>(M(s()),u(()=>p(s().getLevelUpCost()))),()=>({selected:r(o)?.id===r(a).id,affordable:s().canAffordUpgrade(r(a).id),maxed:r(a).currentLevel>=r(a).maxLevel}),()=>(M(s()),r(a),u(()=>p(s().getUpgradeCost(r(a).id)))),()=>(M(s()),r(a),u(()=>p(s().getUpgradeCost(r(a).id))))]),he("click",h,b),he("click",T,()=>d(r(a))),f(i,x),Le()}var di=z('<div class="stat-level svelte-iba83u"> </div>'),ui=z("<div> </div>"),fi=z('<div class="cost free svelte-iba83u">Free</div>'),pi=z('<div class="progress-container svelte-iba83u"><div class="progress-bar svelte-iba83u"></div> <div class="progress-text svelte-iba83u"> </div></div>'),gi=z('<button><div class="action-header svelte-iba83u"><div class="action-name svelte-iba83u"> </div> <!></div> <div class="action-description svelte-iba83u"> </div> <div class="action-info svelte-iba83u"><!> <div class="reward svelte-iba83u">+10 EXP</div></div> <!></button>'),hi=z('<div class="training-container svelte-iba83u"><h2 class="svelte-iba83u">Training</h2> <div class="actions-grid svelte-iba83u"></div></div>');function mi(i,t){Ae(t,!1);const e=pe();let a=xe(t,"game",12);function s(p){a().startIdleAction(a().trainingActions,p),a(a())}function v(p){return p.id==="practice-osmosis"?0:p.trainsStat?a().getStatLevelCost(p.trainsStat):0}function o(p){return p.id==="practice-osmosis"?!0:p.trainsStat?a().exp>=a().getStatLevelCost(p.trainsStat):!0}Ce(()=>M(a()),()=>{ie(e,Object.values(a().trainingActions).filter(p=>p.id==="practice-osmosis"?a().level>=2:p.trainsStat?a().level>=3:!1))}),Ye(),Oe();var d=hi(),_=c(n(d),2);Ge(_,5,()=>r(e),p=>p.id,(p,b)=>{const x=rt(()=>(r(b),u(()=>r(b).isActive))),g=rt(()=>(r(b),u(()=>o(r(b))))),w=rt(()=>(r(b),u(()=>v(r(b))))),h=rt(()=>(M(r(x)),r(b),u(()=>r(x)?r(b).progress:0)));var $=gi();let y;var E=n($),A=n(E),V=n(A,!0);l(A);var T=c(A,2);{var q=Y=>{var O=di(),B=n(O);l(O),J(D=>C(B,`${D??""}: ${M(a()),r(b),u(()=>a().stats[r(b).trainsStat])??""}`),[()=>(r(b),u(()=>r(b).trainsStat.toUpperCase()))]),f(Y,O)};I(T,Y=>{r(b),u(()=>r(b).trainsStat)&&Y(q)})}l(E);var m=c(E,2),S=n(m,!0);l(m);var N=c(m,2),X=n(N);{var j=Y=>{var O=ui();let B;var D=n(O);l(O),J(k=>{B=ve(O,1,"cost svelte-iba83u",null,B,k),C(D,`Cost: ${r(w)??""} EXP`)},[()=>({"cannot-afford":!r(g)})]),f(Y,O)},R=Y=>{var O=fi();f(Y,O)};I(X,Y=>{r(w)>0?Y(j):Y(R,!1)})}de(2),l(N);var F=c(N,2);{var le=Y=>{var O=pi(),B=n(O),D=c(B,2),k=n(D);l(D),l(O),J((U,K)=>{xt(B,`width: ${U??""}%`),C(k,`${K??""}%`)},[()=>(M(r(h)),u(()=>Math.min(r(h)*100,100))),()=>(M(r(h)),u(()=>Math.floor(Math.min(r(h)*100,100))))]),f(Y,O)};I(F,Y=>{r(x)&&Y(le)})}l($),J(Y=>{y=ve($,1,"action-card svelte-iba83u",null,y,Y),$.disabled=r(x),C(V,(r(b),u(()=>r(b).name))),C(S,(r(b),u(()=>r(b).description)))},[()=>({active:r(x),blocked:!r(g)&&!r(x)})]),he("click",$,()=>s(r(b).id)),f(p,$)}),l(_),l(d),f(i,d),Le()}var _i=z('<div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Combat Stats</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Strength</div> <div class="stat-value strength svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Physical power and damage</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Dexterity</div> <div class="stat-value dexterity svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Agility and precision</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Intelligence</div> <div class="stat-value intelligence svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Knowledge and magic</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Wisdom</div> <div class="stat-value wisdom svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Insight and awareness</div></div></div></div>'),bi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Idle EXP</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Passive EXP gain</div></div>'),xi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Speed</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base duration</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Cost</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base cost</div></div>',1),yi=z('<div class="upgrade-item svelte-1i5r50h"><span class="upgrade-name svelte-1i5r50h"> </span> <span class="upgrade-level svelte-1i5r50h"> </span></div>'),ki=z('<p class="no-upgrades svelte-1i5r50h">No upgrades purchased yet</p>'),$i=z('<div class="stats-container svelte-1i5r50h"><h2 class="svelte-1i5r50h">Player Stats</h2> <p class="description svelte-1i5r50h">View your progression and statistics</p> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">General</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Name</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Level</div> <div class="stat-value level svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Current EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Lifetime EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div></div></div> <!> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Progress Rates</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Click Value</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">EXP per click</div></div> <!> <!></div></div> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Upgrades Owned</h3> <div class="upgrades-list svelte-1i5r50h"><!> <!></div></div></div>');function Si(i,t){Ae(t,!1);let e=xe(t,"game",8);function a(U){return U>=1e12?(U/1e12).toFixed(2)+"T":U>=1e9?(U/1e9).toFixed(2)+"B":U>=1e6?(U/1e6).toFixed(2)+"M":U>=1e3?(U/1e3).toFixed(2)+"K":U.toFixed(2)}Oe();var s=$i(),v=c(n(s),4),o=c(n(v),2),d=n(o),_=c(n(d),2),p=n(_,!0);l(_),l(d);var b=c(d,2),x=c(n(b),2),g=n(x,!0);l(x),l(b);var w=c(b,2),h=c(n(w),2),$=n(h,!0);l(h),l(w);var y=c(w,2),E=c(n(y),2),A=n(E,!0);l(E),l(y),l(o),l(v);var V=c(v,2);{var T=U=>{var K=_i(),te=c(n(K),2),re=n(te),ne=c(n(re),2),G=n(ne,!0);l(ne),de(2),l(re);var Z=c(re,2),ue=c(n(Z),2),W=n(ue,!0);l(ue),de(2),l(Z);var ee=c(Z,2),H=c(n(ee),2),ae=n(H,!0);l(H),de(2),l(ee);var L=c(ee,2),P=c(n(L),2),oe=n(P,!0);l(P),de(2),l(L),l(te),l(K),J(()=>{C(G,(M(e()),u(()=>e().stats.strength))),C(W,(M(e()),u(()=>e().stats.dexterity))),C(ae,(M(e()),u(()=>e().stats.intelligence))),C(oe,(M(e()),u(()=>e().stats.wisdom)))}),f(U,K)};I(V,U=>{M(e()),u(()=>e().level>=3)&&U(T)})}var q=c(V,2),m=c(n(q),2),S=n(m),N=c(n(S),2),X=n(N,!0);l(N),de(2),l(S);var j=c(S,2);{var R=U=>{var K=bi(),te=c(n(K),2),re=n(te);l(te),de(2),l(K),J(ne=>C(re,`${ne??""}/s`),[()=>(M(e()),u(()=>a(e().idleExpRate)))]),f(U,K)};I(j,U=>{M(e()),u(()=>e().idleExpRate>0)&&U(R)})}var F=c(j,2);{var le=U=>{var K=xi(),te=Q(K),re=c(n(te),2),ne=n(re);l(re),de(2),l(te);var G=c(te,2),Z=c(n(G),2),ue=n(Z);l(Z),de(2),l(G),J((W,ee)=>{C(ne,`${W??""}%`),C(ue,`${ee??""}%`)},[()=>(M(e()),u(()=>(e().getTrainingSpeedMultiplier()*100).toFixed(0))),()=>(M(e()),u(()=>(e().getTrainingCostMultiplier()*100).toFixed(0)))]),f(U,K)};I(F,U=>{M(e()),u(()=>e().level>=3)&&U(le)})}l(m),l(q);var Y=c(q,2),O=c(n(Y),2),B=n(O);Ge(B,1,()=>(M(e()),u(()=>Object.values(e().upgrades).filter(U=>U.currentLevel>0))),vt,(U,K)=>{var te=yi(),re=n(te),ne=n(re,!0);l(re);var G=c(re,2),Z=n(G);l(G),l(te),J(()=>{C(ne,(r(K),u(()=>r(K).name))),C(Z,`Level ${r(K),u(()=>r(K).currentLevel)??""}`)}),f(U,te)});var D=c(B,2);{var k=U=>{var K=ki();f(U,K)};I(D,U=>{M(e()),u(()=>Object.values(e().upgrades).filter(K=>K.currentLevel>0).length===0)&&U(k)})}l(O),l(Y),l(s),J((U,K,te)=>{C(p,(M(e()),u(()=>e().name))),C(g,(M(e()),u(()=>e().level))),C($,U),C(A,K),C(X,te)},[()=>(M(e()),u(()=>a(e().exp))),()=>(M(e()),u(()=>a(e().lifetimeExp))),()=>(M(e()),u(()=>a(e().getClickValue())))]),f(i,s),Le()}var Mi=z('<div class="no-actions svelte-x40p30"><p class="svelte-x40p30">You have completed all available meditations.</p> <p class="hint svelte-x40p30">More will be unlocked as you progress through the game.</p></div>'),wi=z("<option> <!></option>"),Ci=z('<span class="cannot-afford svelte-x40p30"> </span>'),Ai=z('<p class="one-time-notice svelte-x40p30"><em>This meditation can only be completed once.</em></p>'),Li=z('<div class="progress-container svelte-x40p30"><div class="progress-bar svelte-x40p30"></div> <div class="progress-text svelte-x40p30"> </div></div>'),Ei=z('<button class="stop-button svelte-x40p30">Stop Meditating</button>'),Ti=z('<button class="start-button svelte-x40p30">Begin Meditation</button>'),Ui=z('<div class="action-info svelte-x40p30"><h3 class="svelte-x40p30"> </h3> <p class="svelte-x40p30"> </p> <p class="cost svelte-x40p30">Cost: <strong> </strong> <!></p> <p class="svelte-x40p30"> </p> <!></div> <!> <div class="action-buttons svelte-x40p30"><!></div>',1),ji=z('<div class="completed-item svelte-x40p30"><span class="completed-name svelte-x40p30"> </span> <span class="completed-badge svelte-x40p30">✓ Complete</span></div>'),Ni=z('<div class="completed-section svelte-x40p30"><h3 class="svelte-x40p30">Completed Meditations</h3> <div class="completed-list svelte-x40p30"></div></div>'),Di=z('<div class="meditation-area svelte-x40p30"><div class="meditation-selector svelte-x40p30"><label for="meditation-select" class="svelte-x40p30">Choose Meditation:</label> <select id="meditation-select" class="svelte-x40p30"></select></div> <!></div> <!>',1),Ii=z('<div class="meditation-container svelte-x40p30"><h2 class="svelte-x40p30">Meditation</h2> <p class="description svelte-x40p30">Meditate on the mysteries of the Tomes</p> <!></div>');function zi(i,t){Ae(t,!1);const e=pe(),a=pe(),s=pe(),v=pe(),o=pe(),d=pe();let _=xe(t,"game",12),p=pe("meditate-future");function b(){_().startIdleAction(_().meditationActions,r(p))&&_(_())}function x(){_().stopIdleAction(_().meditationActions,r(p)),_(_())}Ce(()=>M(_()),()=>{ie(e,Object.values(_().meditationActions).filter(y=>!y.oneTime||!y.completed))}),Ce(()=>(M(_()),r(p)),()=>{ie(a,_().meditationActions[r(p)])}),Ce(()=>r(a),()=>{ie(s,r(a)?.isActive||!1)}),Ce(()=>r(a),()=>{ie(v,r(a)?.progress||0)}),Ce(()=>(r(a),M(_())),()=>{ie(o,r(a)?_().exp>=r(a).expCost:!1)}),Ce(()=>r(a),()=>{ie(d,r(a)?.oneTime&&r(a)?.completed)}),Ye(),Oe();var g=Ii(),w=c(n(g),4);{var h=y=>{var E=Mi();f(y,E)},$=y=>{var E=Di(),A=Q(E),V=n(A),T=c(n(V),2);J(()=>{r(p),ps(()=>{r(s),r(e)})}),Ge(T,5,()=>r(e),vt,(X,j)=>{var R=wi(),F=n(R),le=c(F);{var Y=B=>{var D=be("(One-time)");f(B,D)};I(le,B=>{r(j),u(()=>r(j).oneTime)&&B(Y)})}l(R);var O={};J(()=>{C(F,`${r(j),u(()=>r(j).name)??""} `),O!==(O=(r(j),u(()=>r(j).id)))&&(R.value=(R.__value=(r(j),u(()=>r(j).id)))??"")}),f(X,R)}),l(T),l(V);var q=c(V,2);{var m=X=>{var j=Ui(),R=Q(j),F=n(R),le=n(F,!0);l(F);var Y=c(F,2),O=n(Y,!0);l(Y);var B=c(Y,2),D=c(n(B)),k=n(D);l(D);var U=c(D,2);{var K=L=>{var P=Ci(),oe=n(P);l(P),J(()=>C(oe,`(need ${r(a),M(_()),u(()=>r(a).expCost-_().exp)??""} more)`)),f(L,P)};I(U,L=>{r(o)||L(K)})}l(B);var te=c(B,2),re=n(te);l(te);var ne=c(te,2);{var G=L=>{var P=Ai();f(L,P)};I(ne,L=>{r(a),u(()=>r(a).oneTime)&&L(G)})}l(R);var Z=c(R,2);{var ue=L=>{var P=Li(),oe=n(P),$e=c(oe,2),Se=n($e);l($e),l(P),J((fe,_e)=>{xt(oe,`width: ${fe??""}%`),C(Se,`${_e??""}%`)},[()=>(r(v),u(()=>Math.min(r(v)*100,100))),()=>(r(v),u(()=>Math.floor(Math.min(r(v)*100,100))))]),f(L,P)};I(Z,L=>{r(s)&&L(ue)})}var W=c(Z,2),ee=n(W);{var H=L=>{var P=Ei();he("click",P,x),f(L,P)},ae=L=>{var P=Ti();J(()=>P.disabled=!r(o)),he("click",P,b),f(L,P)};I(ee,L=>{r(s)?L(H):L(ae,!1)})}l(W),J(L=>{C(le,(r(a),u(()=>r(a).name))),C(O,(r(a),u(()=>r(a).description))),C(k,`${r(a),u(()=>r(a).expCost)??""} EXP`),C(re,`Duration: ${L??""}s`)},[()=>(r(a),u(()=>(r(a).duration/1e3).toFixed(1)))]),f(X,j)};I(q,X=>{r(a)&&!r(d)&&X(m)})}l(A);var S=c(A,2);{var N=X=>{var j=Ni(),R=c(n(j),2);Ge(R,5,()=>(M(_()),u(()=>Object.values(_().meditationActions).filter(F=>F.oneTime&&F.completed))),vt,(F,le)=>{var Y=ji(),O=n(Y),B=n(O,!0);l(O),de(2),l(Y),J(()=>C(B,(r(le),u(()=>r(le).name)))),f(F,Y)}),l(R),l(j),f(X,j)};I(S,X=>{M(_()),u(()=>Object.values(_().meditationActions).some(j=>j.oneTime&&j.completed))&&X(N)})}J(()=>T.disabled=r(s)),oa(T,()=>r(p),X=>ie(p,X)),f(y,E)};I(w,y=>{r(e),u(()=>r(e).length===0)?y(h):y($,!1)})}l(g),f(i,g),Le()}var Pi=z(`<div class="meditation-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Your stats are sufficient. Complete the "Meditate on Your Future" meditation to
                                unlock Adventure Mode.</em></p></div>`),qi=z('<div class="training-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Visit the Training page to improve your stats.</em></p></div>'),Oi=z(`<div class="locked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode</h2> <p class="locked-message svelte-gg7su4">The path to adventure is not yet clear. You must train your stats and meditate to unlock
                this path.</p> <div class="requirements-section svelte-gg7su4"><h3 class="svelte-gg7su4">Requirements</h3> <div class="requirements-grid svelte-gg7su4"><div><span class="requirement-label svelte-gg7su4">Strength:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Dexterity:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Intelligence:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Wisdom:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div></div> <!></div></div>`),Vi=z(`<div class="unlocked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode Unlocked!</h2> <div class="demo-message svelte-gg7su4"><h3 class="svelte-gg7su4">Congratulations!</h3> <p class="svelte-gg7su4">You've unlocked everything in the current demo of TomeClicker.</p> <div class="demo-stats svelte-gg7su4"><p class="svelte-gg7su4">Your journey so far:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li></ul></div> <div class="coming-soon svelte-gg7su4"><h3 class="svelte-gg7su4">Coming Soon</h3> <p class="svelte-gg7su4">Future updates will include:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4">Adventure zones with unique challenges</li> <li class="svelte-gg7su4">Equipment and loot systems</li> <li class="svelte-gg7su4">More meditation techniques</li> <li class="svelte-gg7su4">Tome discovery and magic systems</li> <li class="svelte-gg7su4">Story progression and world-building</li></ul></div> <p class="thank-you svelte-gg7su4">Thank you for playing! Keep an eye on <a href="https://github.com/eaglerock/tomeclicker" target="_blank" class="svelte-gg7su4">GitHub</a> for updates.</p></div></div>`),Ri=z('<div class="adventure-container svelte-gg7su4"><!></div>');function Fi(i,t){Ae(t,!1);const e=pe(),a=pe();let s=xe(t,"game",8);Ce(()=>M(s()),()=>{ie(e,s().adventureModeUnlocked)}),Ce(()=>M(s()),()=>{ie(a,s().stats.strength>=5&&s().stats.dexterity>=5&&s().stats.intelligence>=5&&s().stats.wisdom>=5)}),Ye(),Oe();var v=Ri(),o=n(v);{var d=p=>{var b=Oi(),x=c(n(b),4),g=c(n(x),2),w=n(g);let h;var $=c(n(w),2),y=n($),E=c(y);{var A=G=>{var Z=be("✓");f(G,Z)};I(E,G=>{M(s()),u(()=>s().stats.strength>=5)&&G(A)})}l($),l(w);var V=c(w,2);let T;var q=c(n(V),2),m=n(q),S=c(m);{var N=G=>{var Z=be("✓");f(G,Z)};I(S,G=>{M(s()),u(()=>s().stats.dexterity>=5)&&G(N)})}l(q),l(V);var X=c(V,2);let j;var R=c(n(X),2),F=n(R),le=c(F);{var Y=G=>{var Z=be("✓");f(G,Z)};I(le,G=>{M(s()),u(()=>s().stats.intelligence>=5)&&G(Y)})}l(R),l(X);var O=c(X,2);let B;var D=c(n(O),2),k=n(D),U=c(k);{var K=G=>{var Z=be("✓");f(G,Z)};I(U,G=>{M(s()),u(()=>s().stats.wisdom>=5)&&G(K)})}l(D),l(O),l(g);var te=c(g,2);{var re=G=>{var Z=Pi();f(G,Z)},ne=G=>{var Z=qi();f(G,Z)};I(te,G=>{r(a)?G(re):G(ne,!1)})}l(x),l(b),J((G,Z,ue,W)=>{h=ve(w,1,"requirement-item svelte-gg7su4",null,h,G),C(y,`${M(s()),u(()=>s().stats.strength)??""} / 5 `),T=ve(V,1,"requirement-item svelte-gg7su4",null,T,Z),C(m,`${M(s()),u(()=>s().stats.dexterity)??""} / 5 `),j=ve(X,1,"requirement-item svelte-gg7su4",null,j,ue),C(F,`${M(s()),u(()=>s().stats.intelligence)??""} / 5 `),B=ve(O,1,"requirement-item svelte-gg7su4",null,B,W),C(k,`${M(s()),u(()=>s().stats.wisdom)??""} / 5 `)},[()=>({met:s().stats.strength>=5}),()=>({met:s().stats.dexterity>=5}),()=>({met:s().stats.intelligence>=5}),()=>({met:s().stats.wisdom>=5})]),f(p,b)},_=p=>{var b=Vi(),x=c(n(b),2),g=c(n(x),4),w=c(n(g),2),h=n(w),$=n(h);l(h);var y=c(h,2),E=n(y);l(y);var A=c(y,2),V=n(A);l(A);var T=c(A,2),q=n(T);l(T),l(w),l(g),de(4),l(x),l(b),J((m,S,N)=>{C($,`Level ${M(s()),u(()=>s().level)??""} adventurer`),C(E,`${m??""} lifetime EXP earned`),C(V,`${S??""} upgrades purchased`),C(q,`All stats trained to ${N??""}+`)},[()=>(M(s()),u(()=>s().lifetimeExp.toFixed(0))),()=>(M(s()),u(()=>Object.values(s().upgrades).filter(m=>m.currentLevel>0).length)),()=>(M(s()),u(()=>Math.min(...Object.values(s().stats))))]),f(p,b)};I(o,p=>{r(e)?p(_,!1):p(d)})}l(v),f(i,v),Le()}function Bi(i,t,e,a){try{const s=t().exportSave(!0);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function Hi(i,t,e,a){try{const s=t().exportSave(!1);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Xi(i,t,e,a){if(!r(t).trim()){e("Please paste save data first","error");return}const s=a().importSave(r(t).trim());s.success?(e(s.warning||"Save imported successfully!",s.warning?"warning":"success"),ie(t,""),a(a()),a().autoSave()):e(s.error||"Failed to import save","error")}function Gi(i,t,e){try{t().autoSave(),e("Game saved to browser storage!","success")}catch{e("Failed to save game","error")}}function Yi(i,t,e){try{const a=t().loadFromLocalStorage(),s=a?!1:t().loadFromCookies();a||s?(e(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),t(t())):e("No save found in browser storage","warning")}catch{e("Failed to load game","error")}}function Ki(i,t){ie(t,!0)}function Wi(i,t){ie(t,!1)}function Ji(i,t,e,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),t(t().name="A Stranger",!0),t(t().exp=0,!0),t(t().lifetimeExp=0,!0),t(t().level=1,!0),t(t().tick=0,!0),t(t().menu="practice",!0),t(t().clickMultiplier=1,!0),t(t().upgrades=t().initializeUpgrades(),!0),t(t().saveIntegrity="valid",!0),t(t().lastValidation=Date.now(),!0),t().recalculateClickMultiplier(),t(t()),ie(e,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Qi=z("<div><!> </div>"),Zi=z('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),er=z('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function tr(i,t){Ae(t,!0);let e=xe(t,"game",15),a=Fe(""),s=Fe(""),v=Fe("success"),o=Fe(!1),d=Fe(!1);function _(H,ae,L=3e3){ie(s,H,!0),ie(v,ae,!0),ie(o,!0),setTimeout(()=>{ie(o,!1)},L)}function p(H,ae){const L=new Blob([H],{type:"application/json"}),P=URL.createObjectURL(L),oe=document.createElement("a");oe.href=P,oe.download=ae,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(P)}setInterval(()=>{e().autoSave()},3e4);var b=er(),x=c(n(b),2);{var g=H=>{var ae=Qi(),L=n(ae);{var P=Se=>{Rs(Se,{size:20})},oe=Se=>{var fe=se(),_e=Q(fe);{var Me=je=>{gt(je,{size:20})},Ue=je=>{gt(je,{size:20})};I(_e,je=>{r(v)==="warning"?je(Me):je(Ue,!1)},!0)}f(Se,fe)};I(L,Se=>{r(v)==="success"?Se(P):Se(oe,!1)})}var $e=c(L);l(ae),J(()=>{ve(ae,1,`message ${r(v)??""}`,"svelte-rfjmb6"),C($e,` ${r(s)??""}`)}),f(H,ae)};I(x,H=>{r(o)&&H(g)})}var w=c(x,2),h=n(w),$=c(n(h),4),y=n($);y.__click=[Gi,e,_];var E=n(y);ga(E,{size:20}),de(),l(y);var A=c(y,2);A.__click=[Yi,e,_];var V=n(A);Kt(V,{size:20}),de(),l(A),l($),l(h);var T=c(h,2),q=c(n(T),4),m=n(q);m.__click=[Bi,e,p,_];var S=n(m);Yt(S,{size:20}),de(),l(m);var N=c(m,2);N.__click=[Hi,e,p,_];var X=n(N);Yt(X,{size:20}),de(),l(N),l(q),de(2),l(T);var j=c(T,2),R=c(n(j),4);gs(R);var F=c(R,2);F.__click=[Xi,a,_,e];var le=n(F);Kt(le,{size:20}),de(),l(F),l(j);var Y=c(j,2),O=c(n(Y),2),B=n(O),D=c(n(B));l(B);var k=c(B,2),U=c(n(k));l(k);var K=c(k,2),te=c(n(K));l(K);var re=c(K,2),ne=c(n(re));l(re),l(O),l(Y);var G=c(Y,2),Z=c(n(G),4);Z.__click=[Ki,d];var ue=n(Z);gt(ue,{size:20}),de(),l(Z),l(G),l(w);var W=c(w,2);{var ee=H=>{var ae=Zi(),L=n(ae),P=c(n(L),8),oe=n(P);oe.__click=[Wi,d];var $e=c(oe,2);$e.__click=[Ji,e,d,_];var Se=n($e);gt(Se,{size:20}),de(),l($e),l(P),l(L),l(ae),f(H,ae)};I(W,H=>{r(d)&&H(ee)})}l(b),J((H,ae,L,P)=>{F.disabled=H,C(D,` ${e().saveIntegrity??""}`),C(U,` ${ae??""}`),C(te,` ${L??""}`),C(ne,` ${P??""}`)},[()=>!r(a).trim(),()=>new Date(e().lastValidation).toLocaleString(),()=>e().exp.toLocaleString(),()=>e().lifetimeExp.toLocaleString()]),Es(R,()=>r(a),H=>ie(a,H)),f(i,b),Le()}ct(["click"]);var ar=z("<option> </option>"),sr=(i,t)=>{t().setDisplayMode("light"),t(t())},ir=(i,t)=>{t().setDisplayMode("system"),t(t())},rr=(i,t)=>{t().setDisplayMode("dark"),t(t())},lr=z('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function nr(i,t){Ae(t,!0);let e=xe(t,"config",15);const a=Ts();var s=lr(),v=c(n(s),2),o=n(v),d=c(n(o),2),_=n(d),p=c(n(_),2),b=n(p,!0);l(p),l(_);var x=c(_,2),g=c(n(x),2),w=n(g,!0);l(g),l(x);var h=c(x,2),$=c(n(h),2),y=n($,!0);l($),l(h);var E=c(h,2),A=c(n(E),2),V=n(A,!0);l(A),l(E),l(d),l(o);var T=c(o,2),q=c(n(T),2),m=c(n(q),2);Ge(m,21,()=>a,vt,(O,B)=>{var D=ar(),k=n(D,!0);l(D);var U={};J(K=>{C(k,K),U!==(U=r(B))&&(D.value=(D.__value=r(B))??"")},[()=>Us(r(B))]),f(O,D)}),l(m),l(q);var S=c(q,2),N=c(n(S),2),X=n(N);let j;X.__click=[sr,e];var R=c(X,2);let F;R.__click=[ir,e];var le=c(R,2);let Y;le.__click=[rr,e],l(N),l(S),l(T),l(v),l(s),J((O,B,D,k,U)=>{C(b,t.game.name),C(w,t.game.level),C(y,O),C(V,B),j=ve(X,1,"mode-btn svelte-mt7s6l",null,j,D),F=ve(R,1,"mode-btn svelte-mt7s6l",null,F,k),Y=ve(le,1,"mode-btn svelte-mt7s6l",null,Y,U)},[()=>Math.floor(t.game.exp).toLocaleString(),()=>Math.floor(t.game.lifetimeExp).toLocaleString(),()=>({active:e().displayMode==="light"}),()=>({active:e().displayMode==="system"}),()=>({active:e().displayMode==="dark"})]),oa(m,()=>e().theme,O=>e(e().theme=O,!0)),f(i,s),Le()}ct(["click"]);function or(i,t,e){r(t)<e&&ia(t)}function vr(i,t){r(t)>1&&ia(t,-1)}var cr=z('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function dr(i,t){Ae(t,!0);let e=Fe(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var v=cr(),o=n(v),d=n(o),_=n(d),p=n(_);p.__click=[vr,e];var b=c(p,2),x=n(b),g=n(x);l(x);var w=c(x,2),h=n(w);l(w),l(b);var $=c(b,2);$.__click=[or,e,a],l(_);var y=c(_,2),E=n(y),A=n(E,!0);l(E),l(y),l(d),l(o),l(v),J(()=>{p.disabled=r(e)===1,C(g,`Chapter ${r(e)??""}`),C(h,`(${r(e)??""}/9)`),$.disabled=r(e)===a,C(A,s[r(e)-1])}),f(i,v),Le()}ct(["click"]);var ur=z(`<div class="about svelte-12a8euv"><h1 class="svelte-12a8euv">about</h1> <div class="about-content svelte-12a8euv"><section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><!> <h2 class="svelte-12a8euv">TomeClicker</h2></div> <div class="section-body svelte-12a8euv"><p class="tagline svelte-12a8euv">An incremental RPG clicker game that grows on you.</p> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">Version:</span> <span class="info-value svelte-12a8euv"> </span></div> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">License:</span> <span class="info-value svelte-12a8euv">BSD 3-Clause</span></div> <div class="info-row svelte-12a8euv"><span class="info-label svelte-12a8euv">Hosting:</span> <span class="info-value svelte-12a8euv"><a href="https://marks.dev/#/hlc" target="_blank" rel="noopener noreferrer" class="inline-link svelte-12a8euv">Happy Little Cloud</a></span></div></div></section> <section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><!> <h2 class="svelte-12a8euv">Links</h2></div> <div class="section-body svelte-12a8euv"><a href="https://github.com/eaglerock1337/tomeclicker" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">GitHub Repository</span> <!></a> <a href="https://tomeclicker.marks.dev" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">Production Site</span> <!></a> <a href="https://tomeclicker-dev.marks.dev" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">Preview Site (GitHub Pages)</span> <!></a> <a href="https://marks.dev" target="_blank" rel="noopener noreferrer" class="link-item svelte-12a8euv"><!> <span class="svelte-12a8euv">EagleRock's Website</span> <!></a></div></section> <section class="about-section svelte-12a8euv"><div class="section-header svelte-12a8euv"><h2 class="svelte-12a8euv">Credits</h2></div> <div class="section-body svelte-12a8euv"><p class="credits-text svelte-12a8euv">Created by EagleRock with inspiration from classic incremental games like Cookie Clicker, Antimatter Dimensions, NGU Idle, Idling to Rule the Gods, Grimoire, and countless others in the genre.					

					Also inspired by <a href="https://hlc.marks.dev/" target="_blank" rel="noopener noreferrer" class="inline-link svelte-12a8euv">Bob Ross</a> and the joy of happy little accidents.</p> <p class="credits-text svelte-12a8euv">Open source and built using SvelteKit and the Boi Squad.</p></div></section></div></div>`);function fr(i,t){Ae(t,!0);var e=ur(),a=c(n(e),2),s=n(a),v=n(s),o=n(v);fa(o,{size:24}),de(2),l(v);var d=c(v,2),_=c(n(d),2),p=c(n(_),2),b=n(p,!0);l(p),l(_),de(4),l(d),l(s);var x=c(s,2),g=n(x),w=n(g);pt(w,{size:24}),de(2),l(g);var h=c(g,2),$=n(h),y=n($);Xs(y,{size:20});var E=c(y,4);ft(E,{size:16,class:"external-icon"}),l($);var A=c($,2),V=n(A);pt(V,{size:20});var T=c(V,4);ft(T,{size:16,class:"external-icon"}),l(A);var q=c(A,2),m=n(q);pt(m,{size:20});var S=c(m,4);ft(S,{size:16,class:"external-icon"}),l(q);var N=c(q,2),X=n(N);pt(X,{size:20});var j=c(X,4);ft(j,{size:16,class:"external-icon"}),l(N),l(h),l(x),de(2),l(a),l(e),J(()=>C(b,ms)),f(i,e),Le()}var pr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),gr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),hr=z("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),mr=z('<div class="view svelte-1l6ze8i"><!></div>');function _r(i,t){Ae(t,!1);const e=pe();let a=xe(t,"config",12),s=xe(t,"game",12);Ce(()=>M(s()),()=>{ie(e,s()?.menu)}),Ye(),Oe();var v=mr(),o=n(v);_s(o,()=>r(e),d=>{var _=se(),p=Q(_);{var b=g=>{ri(g,{get config(){return a()},set config(w){a(w)},get game(){return s()},set game(w){s(w)},$$legacy:!0})},x=g=>{var w=se(),h=Q(w);{var $=E=>{ci(E,{get config(){return a()},set config(A){a(A)},get game(){return s()},set game(A){s(A)},$$legacy:!0})},y=E=>{var A=se(),V=Q(A);{var T=m=>{mi(m,{get game(){return s()},set game(S){s(S)},$$legacy:!0})},q=m=>{var S=se(),N=Q(S);{var X=R=>{Si(R,{get game(){return s()},set game(F){s(F)},$$legacy:!0})},j=R=>{var F=se(),le=Q(F);{var Y=B=>{zi(B,{get game(){return s()},set game(D){s(D)},$$legacy:!0})},O=B=>{var D=se(),k=Q(D);{var U=te=>{Fi(te,{get game(){return s()},set game(re){s(re)},$$legacy:!0})},K=te=>{var re=se(),ne=Q(re);{var G=ue=>{tr(ue,{get config(){return a()},set config(W){a(W)},get game(){return s()},set game(W){s(W)},$$legacy:!0})},Z=ue=>{var W=se(),ee=Q(W);{var H=L=>{dr(L,{get game(){return s()},set game(P){s(P)},$$legacy:!0})},ae=L=>{var P=se(),oe=Q(P);{var $e=fe=>{nr(fe,{get config(){return a()},set config(_e){a(_e)},get game(){return s()},set game(_e){s(_e)},$$legacy:!0})},Se=fe=>{var _e=se(),Me=Q(_e);{var Ue=we=>{var Ne=pr();f(we,Ne)},je=we=>{var Ne=se(),De=Q(Ne);{var Ve=Ee=>{fr(Ee,{get config(){return a()},set config(Ie){a(Ie)},get game(){return s()},set game(Ie){s(Ie)},$$legacy:!0})},kt=Ee=>{var Ie=se(),$t=Q(Ie);{var St=Te=>{var Pe=gr();f(Te,Pe)},Mt=Te=>{var Pe=hr();f(Te,Pe)};I($t,Te=>{s()?Te(Mt,!1):Te(St)},!0)}f(Ee,Ie)};I(De,Ee=>{M(s()),u(()=>s()&&s().menu==="about")?Ee(Ve):Ee(kt,!1)},!0)}f(we,Ne)};I(Me,we=>{M(s()),u(()=>s()&&s().menu==="help")?we(Ue):we(je,!1)},!0)}f(fe,_e)};I(oe,fe=>{M(s()),u(()=>s()&&s().menu==="settings")?fe($e):fe(Se,!1)},!0)}f(L,P)};I(ee,L=>{M(s()),u(()=>s()&&s().menu==="story")?L(H):L(ae,!1)},!0)}f(ue,W)};I(ne,ue=>{M(s()),u(()=>s()&&s().menu==="saves")?ue(G):ue(Z,!1)},!0)}f(te,re)};I(k,te=>{M(s()),u(()=>s()&&s().menu==="adventure")?te(U):te(K,!1)},!0)}f(B,D)};I(le,B=>{M(s()),u(()=>s()&&s().menu==="meditation")?B(Y):B(O,!1)},!0)}f(R,F)};I(N,R=>{M(s()),u(()=>s()&&s().menu==="stats")?R(X):R(j,!1)},!0)}f(m,S)};I(V,m=>{M(s()),u(()=>s()&&s().menu==="training")?m(T):m(q,!1)},!0)}f(E,A)};I(h,E=>{M(s()),u(()=>s()&&s().menu==="upgrades")?E($):E(y,!1)},!0)}f(g,w)};I(p,g=>{M(s()),u(()=>s()&&s().menu==="practice")?g(b):g(x,!1)})}f(d,_)}),l(v),f(i,v),Le()}var br=z('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta property="og:type" content="website"/> <meta property="og:title" content="TomeClicker"/> <meta property="og:image" content="https://tomeclicker.marks.dev/og-image.png"/> <meta property="og:description" content="An incremental RPG clicker game that grows on you."/> <meta name="description" content="An incremental RPG clicker game that grows on you."/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),xr=z('<footer class="footer svelte-1uha8ag"><!></footer>'),yr=z('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),kr=z('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),$r=z("<div><!></div>");function Er(i,t){Ae(t,!1);const e=pe();let a=pe(new js("prussian-blue","system")),s=pe(!1),v=pe();Ta(()=>{if(r(a).loadFromLocalStorage(),ie(s,!0),ie(a,r(a)),window.matchMedia){const g=window.matchMedia("(prefers-color-scheme: dark)"),w=()=>{r(a).displayMode==="system"&&ie(a,r(a))};g.addEventListener?g.addEventListener("change",w):g.addListener(w)}ie(v,new Ns),setTimeout(()=>{r(v)&&(r(v).loadFromLocalStorage()||r(v).loadFromCookies(),ie(v,r(v)))},100);const b=setInterval(()=>{r(v)&&r(v).autoSave()},15e3),x=setInterval(()=>{r(v)&&(r(v).updateIdleActions(),r(v).idleExpRate>0&&r(v).addExp(r(v).idleExpRate/10),ie(v,r(v)))},100);return()=>{clearInterval(b),clearInterval(x)}}),Ce(()=>r(a),()=>{ie(e,r(a)?r(a).getTheme():"")}),Ce(()=>(r(a),r(s)),()=>{r(a)&&r(s)&&typeof localStorage<"u"&&(r(a).theme,r(a).displayMode,r(a).saveToLocalStorage())}),Ye(),Oe();var o=$r();Ua(b=>{var x=br();hs.title="TomeClicker",de(16),f(b,x)});var d=n(o);{var _=b=>{var x=yr(),g=Q(x);{var w=A=>{zs(A,{get game(){return r(v)}})};I(g,A=>{r(v),u(()=>r(v).showHeader())&&A(w)})}var h=c(g,2),$=n(h);_r($,{get game(){return r(v)},set game(A){ie(v,A)},get config(){return r(a)},set config(A){ie(a,A)},$$legacy:!0}),l(h);var y=c(h,2);{var E=A=>{var V=xr(),T=n(V);ai(T,{get game(){return r(v)},set game(q){ie(v,q)},$$legacy:!0}),l(V),f(A,V)};I(y,A=>{r(v),u(()=>r(v).showMenu())&&A(E)})}f(b,x)},p=b=>{var x=kr();f(b,x)};I(d,b=>{r(v)?b(_):b(p,!1)})}l(o),J(()=>ve(o,1,`app ${r(e)??""}`,"svelte-1uha8ag")),f(i,o),Le()}export{Er as component};
