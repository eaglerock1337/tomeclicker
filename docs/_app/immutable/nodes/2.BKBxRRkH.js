import"../chunks/DsnmJJEf.js";import{i as Oe}from"../chunks/Cd55SYnr.js";import{i as Sa,a as Ma,c as wa,d as dt,n as $a,b as Ca,s as C,e as ge,o as Aa,f as La}from"../chunks/Bl-oD2Vi.js";import{w as de,x as ot,aU as Ea,aV as Ta,aW as Ua,v as ct,C as gt,D as Xe,F as Re,G as Yt,K as qe,U as Kt,J as Nt,h as r,N as rt,y as ja,H as Da,z as qt,A as lt,B as Be,a9 as Na,aC as Ia,az as Wt,ap as Jt,aQ as pe,a0 as Ot,a8 as Vt,I as It,aX as ht,aY as Ct,ag as Ze,aZ as mt,a_ as za,am as Pa,a$ as qa,ay as Oa,b0 as Va,S as Qt,au as Zt,b1 as ea,a7 as Ra,b2 as Fa,b3 as Ba,E as Ha,b4 as Xa,aB as Ga,aP as zt,b5 as Ya,b6 as Ka,ar as Wa,b7 as ta,b8 as Ja,b9 as Qa,ba as Za,bb as es,bc as ts,bd as as,be as ss,bf as is,bg as rs,aO as ls,e as c,a5 as ns,bh as os,p as Ae,l as z,n,o as l,q as d,aS as Pt,t as J,a as f,m as Le,bi as vs,i as S,c as se,f as Q,bj as ds,bk as we,Q as ie,bl as Ye,aR as Fe,aT as me,ah as ue,bm as cs,bn as us,a1 as aa,bo as fs}from"../chunks/BGLDHNfr.js";import{i as I,l as xe,p as _e,s as $e}from"../chunks/BxTBcEuA.js";function ps(i,t,e){de&&ot();var a=i,s=Kt,o,v,u=null,b=Ea()?Ta:Ua;function p(){o&&Nt(o),u!==null&&(u.lastChild.remove(),a.before(u),u=null),o=v}ct(()=>{if(b(s,s=t())){var _=a,x=Yt();x&&(u=document.createDocumentFragment(),u.append(_=gt())),v=Xe(()=>e(_)),x?Re.add_callback(p):p()}}),de&&(a=qe)}function vt(i,t){return t}function gs(i,t,e){for(var a=i.items,s=[],o=t.length,v=0;v<o;v++)qa(t[v].e,s,!0);var u=o>0&&s.length===0&&e!==null;if(u){var b=e.parentNode;Oa(b),b.append(e),a.clear(),ze(i,t[0].prev,t[o-1].next)}Va(s,()=>{for(var p=0;p<o;p++){var _=t[p];u||(a.delete(_.k),ze(i,_.prev,_.next)),Ze(_.e,!u)}})}function Ge(i,t,e,a,s,o=null){var v=i,u={flags:t,items:new Map,first:null},b=(t&ea)!==0;if(b){var p=i;v=de?lt(Zt(p)):p.appendChild(gt())}de&&ot();var _=null,x=!1,h=new Map,$=rt(()=>{var T=e();return Jt(T)?T:T==null?[]:Wt(T)}),g,M;function y(){hs(M,g,u,h,v,s,t,a,e),o!==null&&(g.length===0?_?It(_):_=Xe(()=>o(v)):_!==null&&Nt(_,()=>{_=null}))}ct(()=>{M??=Qt,g=r($);var T=g.length;if(x&&T===0)return;x=T===0;let A=!1;if(de){var X=ja(v)===Da;X!==(T===0)&&(v=qt(),lt(v),Be(!1),A=!0)}if(de){for(var U=null,O,m=0;m<T;m++){if(qe.nodeType===Na&&qe.data===Ia){v=qe,A=!0,Be(!1);break}var w=g[m],D=a(w,m);O=Dt(qe,u,U,null,w,D,m,s,t,e),u.items.set(D,O),U=O}T>0&&lt(qt())}if(de)T===0&&o&&(_=Xe(()=>o(v)));else if(Yt()){var W=new Set,j=Re;for(m=0;m<T;m+=1){w=g[m],D=a(w,m);var V=u.items.get(D)??h.get(D);V?(t&(mt|ht))!==0&&sa(V,w,m,t):(O=Dt(null,u,null,null,w,D,m,s,t,e,!0),h.set(D,O)),W.add(D)}for(const[R,le]of u.items)W.has(R)||j.skipped_effects.add(le.e);j.add_callback(y)}else y();A&&Be(!0),r($)}),de&&(v=qe)}function hs(i,t,e,a,s,o,v,u,b){var p=(v&Fa)!==0,_=(v&(mt|ht))!==0,x=t.length,h=e.items,$=e.first,g=$,M,y=null,T,A=[],X=[],U,O,m,w;if(p)for(w=0;w<x;w+=1)U=t[w],O=u(U,w),m=h.get(O),m!==void 0&&(m.a?.measure(),(T??=new Set).add(m));for(w=0;w<x;w+=1){if(U=t[w],O=u(U,w),m=h.get(O),m===void 0){var D=a.get(O);if(D!==void 0){a.delete(O),h.set(O,D);var W=y?y.next:g;ze(e,y,D),ze(e,D,W),At(D,W,s),y=D}else{var j=g?g.e.nodes_start:s;y=Dt(j,e,y,y===null?e.first:y.next,U,O,w,o,v,b)}h.set(O,y),A=[],X=[],g=y.next;continue}if(_&&sa(m,U,w,v),(m.e.f&Ct)!==0&&(It(m.e),p&&(m.a?.unfix(),(T??=new Set).delete(m))),m!==g){if(M!==void 0&&M.has(m)){if(A.length<X.length){var V=X[0],R;y=V.prev;var le=A[0],G=A[A.length-1];for(R=0;R<A.length;R+=1)At(A[R],V,s);for(R=0;R<X.length;R+=1)M.delete(X[R]);ze(e,le.prev,G.next),ze(e,y,le),ze(e,G,V),g=V,y=G,w-=1,A=[],X=[]}else M.delete(m),At(m,g,s),ze(e,m.prev,m.next),ze(e,m,y===null?e.first:y.next),ze(e,y,m),y=m;continue}for(A=[],X=[];g!==null&&g.k!==O;)(g.e.f&Ct)===0&&(M??=new Set).add(g),X.push(g),g=g.next;if(g===null)continue;m=g}A.push(m),y=m,g=m.next}if(g!==null||M!==void 0){for(var q=M===void 0?[]:Wt(M);g!==null;)(g.e.f&Ct)===0&&q.push(g),g=g.next;var F=q.length;if(F>0){var N=(v&ea)!==0&&x===0?s:null;if(p){for(w=0;w<F;w+=1)q[w].a?.measure();for(w=0;w<F;w+=1)q[w].a?.fix()}gs(e,q,N)}}p&&Ra(()=>{if(T!==void 0)for(m of T)m.a?.apply()}),i.first=e.first&&e.first.e,i.last=y&&y.e;for(var k of a.values())Ze(k.e);a.clear()}function sa(i,t,e,a){(a&mt)!==0&&Vt(i.v,t),(a&ht)!==0?Vt(i.i,e):i.i=e}function Dt(i,t,e,a,s,o,v,u,b,p,_){var x=(b&mt)!==0,h=(b&za)===0,$=x?h?pe(s,!1,!1):Ot(s):s,g=(b&ht)===0?v:Ot(v),M={i:g,v:$,k:o,a:null,e:null,prev:e,next:a};try{if(i===null){var y=document.createDocumentFragment();y.append(i=gt())}return M.e=Xe(()=>u(i,$,g,p),de),M.e.prev=e&&e.e,M.e.next=a&&a.e,e===null?_||(t.first=M):(e.next=M,e.e.next=M.e),a!==null&&(a.prev=M,a.e.prev=M.e),M}finally{}}function At(i,t,e){for(var a=i.next?i.next.e.nodes_start:e,s=t?t.e.nodes_start:e,o=i.e.nodes_start;o!==null&&o!==a;){var v=Pa(o);s.before(o),o=v}}function ze(i,t,e){t===null?i.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function Se(i,t,e,a,s){de&&ot();var o=t.$$slots?.[e],v=!1;o===!0&&(o=t.children,v=!0),o===void 0||o(i,v?()=>a:a)}function ms(i,t,e,a,s,o){let v=de;de&&ot();var u,b,p=null;de&&qe.nodeType===Ba&&(p=qe,ot());var _=de?qe:i,x;ct(()=>{const h=t()||null;var $=Xa;h!==u&&(x&&(h===null?Nt(x,()=>{x=null,b=null}):h===b?It(x):Ze(x)),h&&h!==b&&(x=Xe(()=>{if(p=de?p:document.createElementNS($,h),Ga(p,p),a){de&&Sa(h)&&p.append(document.createComment(""));var g=de?Zt(p):p.appendChild(gt());de&&(g===null?Be(!1):lt(g)),a(p,g)}Qt.nodes_end=p,_.before(p)})),u=h,u&&(b=u))},Ha),v&&(Be(!0),lt(_))}function _s(i,t){var e=void 0,a;ct(()=>{e!==(e=t())&&(a&&(Ze(a),a=null),e&&(a=Xe(()=>{zt(()=>e(i))})))})}function ia(i){var t,e,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(t=0;t<s;t++)i[t]&&(e=ia(i[t]))&&(a&&(a+=" "),a+=e)}else for(e in i)i[e]&&(a&&(a+=" "),a+=e);return a}function bs(){for(var i,t,e=0,a="",s=arguments.length;e<s;e++)(i=arguments[e])&&(t=ia(i))&&(a&&(a+=" "),a+=t);return a}function xs(i){return typeof i=="object"?bs(i):i??""}const Rt=[...` 	
\r\f \v\uFEFF`];function ys(i,t,e){var a=i==null?"":""+i;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var o=s.length,v=0;(v=a.indexOf(s,v))>=0;){var u=v+o;(v===0||Rt.includes(a[v-1]))&&(u===a.length||Rt.includes(a[u]))?a=(v===0?"":a.substring(0,v))+a.substring(u+1):v=u}}return a===""?null:a}function Ft(i,t=!1){var e=t?" !important;":";",a="";for(var s in i){var o=i[s];o!=null&&o!==""&&(a+=" "+s+": "+o+e)}return a}function Lt(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function ks(i,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,v=0,u=!1,b=[];a&&b.push(...Object.keys(a).map(Lt)),s&&b.push(...Object.keys(s).map(Lt));var p=0,_=-1;const M=i.length;for(var x=0;x<M;x++){var h=i[x];if(u?h==="/"&&i[x-1]==="*"&&(u=!1):o?o===h&&(o=!1):h==="/"&&i[x+1]==="*"?u=!0:h==='"'||h==="'"?o=h:h==="("?v++:h===")"&&v--,!u&&o===!1&&v===0){if(h===":"&&_===-1)_=x;else if(h===";"||x===M-1){if(_!==-1){var $=Lt(i.substring(p,_).trim());if(!b.includes($)){h!==";"&&x++;var g=i.substring(p,x).trim();e+=" "+g+";"}}p=x+1,_=-1}}}}return a&&(e+=Ft(a)),s&&(e+=Ft(s,!0)),e=e.trim(),e===""?null:e}return i==null?null:String(i)}function ve(i,t,e,a,s,o){var v=i.__className;if(de||v!==e||v===void 0){var u=ys(e,a,o);(!de||u!==i.getAttribute("class"))&&(u==null?i.removeAttribute("class"):t?i.className=u:i.setAttribute("class",u)),i.__className=e}else if(o&&s!==o)for(var b in o){var p=!!o[b];(s==null||p!==!!s[b])&&i.classList.toggle(b,p)}return o}function Et(i,t={},e,a){for(var s in e){var o=e[s];t[s]!==o&&(e[s]==null?i.style.removeProperty(s):i.style.setProperty(s,o,a))}}function _t(i,t,e,a){var s=i.__style;if(de||s!==t){var o=ks(t,a);(!de||o!==i.getAttribute("style"))&&(o==null?i.removeAttribute("style"):i.style.cssText=o),i.__style=t}else a&&(Array.isArray(a)?(Et(i,e?.[0],a[0]),Et(i,e?.[1],a[1],"important")):Et(i,e,a));return a}function pt(i,t,e=!1){if(i.multiple){if(t==null)return;if(!Jt(t))return Ya();for(var a of i.options)a.selected=t.includes(nt(a));return}for(a of i.options){var s=nt(a);if(Ka(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(i.selectedIndex=-1)}function ra(i){var t=new MutationObserver(()=>{pt(i,i.__value)});t.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wa(()=>{t.disconnect()})}function la(i,t,e=t){var a=!0;ta(i,"change",s=>{var o=s?"[selected]":":checked",v;if(i.multiple)v=[].map.call(i.querySelectorAll(o),nt);else{var u=i.querySelector(o)??i.querySelector("option:not([disabled])");v=u&&nt(u)}e(v)}),zt(()=>{var s=t();if(pt(i,s,a),a&&s===void 0){var o=i.querySelector(":checked");o!==null&&(s=nt(o),e(s))}i.__value=s,a=!1}),ra(i)}function nt(i){return"__value"in i?i.__value:i.value}const st=Symbol("class"),it=Symbol("style"),na=Symbol("is custom element"),oa=Symbol("is html");function Ss(i){if(de){var t=!1,e=()=>{if(!t){if(t=!0,i.hasAttribute("value")){var a=i.value;He(i,"value",null),i.value=a}if(i.hasAttribute("checked")){var s=i.checked;He(i,"checked",null),i.checked=s}}};i.__on_r=e,es(e),ts()}}function Ms(i,t){t?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function He(i,t,e,a){var s=va(i);de&&(s[t]=i.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&i.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(i[is]=e),e==null?i.removeAttribute(t):typeof e!="string"&&da(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function ws(i,t,e,a,s=!1,o=!1){if(de&&s&&i.tagName==="INPUT"){var v=i,u=v.type==="checkbox"?"defaultChecked":"defaultValue";u in e||Ss(v)}var b=va(i),p=b[na],_=!b[oa];let x=de&&p;x&&Be(!1);var h=t||{},$=i.tagName==="OPTION";for(var g in t)g in e||(e[g]=null);e.class?e.class=xs(e.class):e[st]&&(e.class=null),e[it]&&(e.style??=null);var M=da(i);for(const m in e){let w=e[m];if($&&m==="value"&&w==null){i.value=i.__value="",h[m]=w;continue}if(m==="class"){var y=i.namespaceURI==="http://www.w3.org/1999/xhtml";ve(i,y,w,a,t?.[st],e[st]),h[m]=w,h[st]=e[st];continue}if(m==="style"){_t(i,w,t?.[it],e[it]),h[m]=w,h[it]=e[it];continue}var T=h[m];if(!(w===T&&!(w===void 0&&i.hasAttribute(m)))){h[m]=w;var A=m[0]+m[1];if(A!=="$$")if(A==="on"){const D={},W="$$"+m;let j=m.slice(2);var X=Ca(j);if(Ma(j)&&(j=j.slice(0,-7),D.capture=!0),!X&&T){if(w!=null)continue;i.removeEventListener(j,h[W],D),h[W]=null}if(w!=null)if(X)i[`__${j}`]=w,dt([j]);else{let V=function(R){h[m].call(this,R)};h[W]=wa(j,i,V,D)}else X&&(i[`__${j}`]=void 0)}else if(m==="style")He(i,m,w);else if(m==="autofocus")Za(i,!!w);else if(!p&&(m==="__value"||m==="value"&&w!=null))i.value=i.__value=w;else if(m==="selected"&&$)Ms(i,w);else{var U=m;_||(U=$a(U));var O=U==="defaultValue"||U==="defaultChecked";if(w==null&&!p&&!O)if(b[m]=null,U==="value"||U==="checked"){let D=i;const W=t===void 0;if(U==="value"){let j=D.defaultValue;D.removeAttribute(U),D.defaultValue=j,D.value=D.__value=W?j:null}else{let j=D.defaultChecked;D.removeAttribute(U),D.defaultChecked=j,D.checked=W?j:!1}}else i.removeAttribute(m);else O||M.includes(U)&&(p||typeof w!="string")?(i[U]=w,U in b&&(b[U]=Kt)):typeof w!="function"&&He(i,U,w)}}}return x&&Be(!0),h}function Bt(i,t,e=[],a=[],s,o=!1,v=!1){Ja(e,a,u=>{var b=void 0,p={},_=i.nodeName==="SELECT",x=!1;if(ct(()=>{var $=t(...u.map(r)),g=ws(i,b,$,s,o,v);x&&_&&"value"in $&&pt(i,$.value);for(let y of Object.getOwnPropertySymbols(p))$[y]||Ze(p[y]);for(let y of Object.getOwnPropertySymbols($)){var M=$[y];y.description===Qa&&(!b||M!==b[y])&&(p[y]&&Ze(p[y]),p[y]=Xe(()=>_s(i,()=>M))),g[y]=M}b=g}),_){var h=i;zt(()=>{pt(h,b.value,!0),ra(h)})}x=!0})}function va(i){return i.__attributes??={[na]:i.nodeName.includes("-"),[oa]:i.namespaceURI===as}}var Ht=new Map;function da(i){var t=i.getAttribute("is")||i.nodeName,e=Ht.get(t);if(e)return e;Ht.set(t,e=[]);for(var a,s=i,o=Element.prototype;o!==s;){a=rs(s);for(var v in a)a[v].set&&e.push(v);s=ss(s)}return e}function $s(i,t,e=t){var a=new WeakSet;ta(i,"input",async s=>{var o=s?i.defaultValue:i.value;if(o=Tt(i)?Ut(o):o,e(o),Re!==null&&a.add(Re),await ls(),o!==(o=t())){var v=i.selectionStart,u=i.selectionEnd;i.value=o??"",u!==null&&(i.selectionStart=v,i.selectionEnd=Math.min(u,i.value.length))}}),(de&&i.defaultValue!==i.value||c(t)==null&&i.value)&&(e(Tt(i)?Ut(i.value):i.value),Re!==null&&a.add(Re)),ns(()=>{var s=t();if(i===document.activeElement){var o=os??Re;if(a.has(o))return}Tt(i)&&s===Ut(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function Tt(i){var t=i.type;return t==="number"||t==="range"}function Ut(i){return i===""?null:+i}const bt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function Cs(){return Object.keys(bt)}function As(i){return bt[i]?.displayName||i}function jt(i){return i in bt}class Ls{displayMode;theme;constructor(t="prussian-blue",e="system"){this.displayMode=e,this.theme=jt(t)?t:"prussian-blue"}getTheme(){const t=this.getEffectiveShade();return`${this.theme}-${t}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(t){return jt(t)?(this.theme=t,!0):!1}setDisplayMode(t){this.displayMode=t}getAvailableThemes(){return Object.keys(bt)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(t){this.displayMode=t?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t={theme:this.theme,displayMode:this.displayMode};localStorage.setItem("tomeclicker_config",JSON.stringify(t))}catch(t){console.error("Failed to save config to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_config");if(t){const e=JSON.parse(t);return e.theme&&jt(e.theme)&&(this.theme=e.theme),e.displayMode&&(this.displayMode=e.displayMode),!0}return!1}catch(t){return console.error("Error loading config from localStorage:",t),!1}}}class Es{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;critChance;critDamage;upgrades;saveIntegrity;lastValidation;_validationKey;stats;trainingActions;meditationActions;idleExpRate;adventureModeUnlocked;meditationUnlocked;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="discipline"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,t.currentLevel)),this.recalculateIdleExpRate()}recalculateIdleExpRate(){this.idleExpRate=0;for(const e of Object.values(this.upgrades))e.effectType==="idleExp"&&(this.idleExpRate+=e.effectValue*e.currentLevel);const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.idleExpRate*=Math.pow(5,t.currentLevel)),this.recalculateCritStats()}recalculateCritStats(){this.critChance=0,this.critDamage=.5;for(const t of Object.values(this.upgrades))t.effectType==="critChance"?this.critChance+=t.effectValue*t.currentLevel:t.effectType==="critDamage"&&(this.critDamage+=t.effectValue*t.currentLevel)}getTrainingSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingSpeed"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getTrainingCostMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingCost"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getOsmosisExpBonus(){let t=0;for(const e of Object.values(this.upgrades))e.effectType==="osmosisExp"&&(t+=e.effectValue*e.currentLevel);return t}getGlobalIdleSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="globalIdleSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getOsmosisSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="osmosisSpeed"&&(t+=e.effectValue*e.currentLevel);return t}getStatLevelCost(t){const e=this.stats[t];return Math.floor(100*Math.pow(1.5,e-1))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}migrateTrainingActions(t){const e=this.initializeTrainingActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}migrateMeditationActions(t){const e=this.initializeMeditationActions();for(const a in e)t[a]&&(e[a].progress=t[a].progress,e[a].isActive=t[a].isActive,e[a].lastUpdate=t[a].lastUpdate,t[a].completed!==void 0&&(e[a].completed=t[a].completed));return e}initializeUpgrades(){return{"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields exponentially greater rewards",effect:"+100% EXP per click per level",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1,minLevel:1},"critical-insight":{id:"critical-insight",name:"Critical Insight",description:"Moments of clarity grant bursts of understanding",effect:"+0.5% crit chance per level",baseCost:250,costMultiplier:1.75,maxLevel:50,currentLevel:0,effectType:"critChance",effectValue:.005,minLevel:1},"devastating-critique":{id:"devastating-critique",name:"Devastating Critique",description:"Critical insights become increasingly profound",effect:"+5% crit damage per level",baseCost:500,costMultiplier:2,maxLevel:50,currentLevel:0,effectType:"critDamage",effectValue:.05,minLevel:1},"osmotic-absorption":{id:"osmotic-absorption",name:"Deep Contemplation",description:"Thoughtful reflection yields greater insights",effect:"+1 EXP per rumination level",baseCost:100,costMultiplier:1.18,maxLevel:100,currentLevel:0,effectType:"osmosisExp",effectValue:1,minLevel:2},"flow-state":{id:"flow-state",name:"Flow State",description:"Enter a state of effortless focus",effect:"+2% rumination speed per level",baseCost:300,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"osmosisSpeed",effectValue:.02,minLevel:2},"temporal-mastery":{id:"temporal-mastery",name:"Temporal Mastery",description:"Bend time itself to your will (affects ALL idle actions)",effect:"+5% global idle speed per level",baseCost:500,costMultiplier:1.25,maxLevel:100,currentLevel:0,effectType:"globalIdleSpeed",effectValue:.05,minLevel:2},"efficient-training":{id:"efficient-training",name:"Efficient Training",description:"Complete training exercises faster",effect:"-10% training time per level",baseCost:1e4,costMultiplier:1.3,maxLevel:10,currentLevel:0,effectType:"trainingSpeed",effectValue:.1,minLevel:3},"cost-reduction":{id:"cost-reduction",name:"Cost Reduction",description:"Training requires less EXP to start",effect:"-20% training cost per level",baseCost:15e3,costMultiplier:1.35,maxLevel:5,currentLevel:0,effectType:"trainingCost",effectValue:.2,minLevel:3},discipline:{id:"discipline",name:"Discipline",description:"Unified focus accelerates all progress",effect:"5x all EXP gain per level",baseCost:1e3,costMultiplier:100,maxLevel:10,currentLevel:0,effectType:"clickMultiplier",effectValue:5,minLevel:1}}}initializeTrainingActions(){return{"practice-osmosis":{id:"practice-osmosis",name:"Ruminate",description:"Learn through observation and reflection",progress:0,baseDuration:15e3,duration:15e3,expCost:0,isActive:!1,lastUpdate:Date.now()},"train-strength":{id:"train-strength",name:"Lift Heavy Objects",description:"Build raw physical power",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"strength"},"train-dexterity":{id:"train-dexterity",name:"Practice Quick Movements",description:"Improve agility and reflexes",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"dexterity"},"train-intelligence":{id:"train-intelligence",name:"Study Ancient Texts",description:"Expand knowledge and understanding",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"intelligence"},"train-wisdom":{id:"train-wisdom",name:"Meditate on Meaning",description:"Deepen insight and awareness",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"wisdom"}}}initializeMeditationActions(){return{"meditate-future":{id:"meditate-future",name:"Meditate on Your Future",description:"Unlock the path to adventure",progress:0,baseDuration:6e4,duration:6e4,expCost:50,isActive:!1,lastUpdate:Date.now(),oneTime:!0,completed:!1},disassociate:{id:"disassociate",name:"Disassociate",description:"Take a mental health day. Increases offline progress time.",progress:0,baseDuration:3e4,duration:3e4,expCost:100,isActive:!1,lastUpdate:Date.now(),oneTime:!1}}}startIdleAction(t,e){const a=t[e];if(!a||a.oneTime&&a.completed)return!1;for(const s of Object.values(t))s.isActive&&(s.isActive=!1,s.progress=0);if(a.isActive=!0,a.progress=0,a.lastUpdate=Date.now(),e==="practice-osmosis"){const s=this.getOsmosisSpeedMultiplier(),o=this.getGlobalIdleSpeedMultiplier(),v=s*o;a.duration=Math.floor(a.baseDuration/v)}else if(a.trainsStat){const s=this.getTrainingSpeedMultiplier(),o=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration*s/o)}else{const s=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration/s)}return!0}updateIdleActions(){const t=Date.now();for(const e of Object.values(this.trainingActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeTrainingAction(e.id)}for(const e of Object.values(this.meditationActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeMeditationAction(e.id)}}completeTrainingAction(t){const e=this.trainingActions[t];if(!(!e||!e.isActive)){if(t==="practice-osmosis"){const s=this.getOsmosisExpBonus();this.addExp(10+s),e.progress=0,e.lastUpdate=Date.now();return}if(e.trainsStat){const a=e.trainsStat,s=this.getStatLevelCost(a);let o=10;Math.random()<this.critChance&&(o=Math.floor(o*1.5)),this.addExp(o),this.exp>=s?(this.exp-=s,this.stats[a]++,e.progress=0,e.lastUpdate=Date.now()):(e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}}}completeMeditationAction(t){const e=this.meditationActions[t];!e||!e.isActive||(t==="meditate-future"&&(this.adventureModeUnlocked=!0,e.completed=!0),e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}stopIdleAction(t,e){const a=t[e];a&&(a.isActive=!1,a.progress=0,a.lastUpdate=Date.now())}showTraining(){return this.level>=2}showStats(){return this.level>=3}showMeditation(){return this.stats.strength>=5&&this.stats.dexterity>=5&&this.stats.intelligence>=5&&this.stats.wisdom>=5}showAdventure(){return this.adventureModeUnlocked}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="discipline"?e.baseCost*Math.pow(e.costMultiplier,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let o=0;o<e.length;o++)s+=String.fromCharCode(e.charCodeAt(o)^a.charCodeAt(o%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,critChance:this.critChance,critDamage:this.critDamage,upgrades:this.upgrades,stats:this.stats,trainingActions:this.trainingActions,meditationActions:this.meditationActions,idleExpRate:this.idleExpRate,adventureModeUnlocked:this.adventureModeUnlocked,meditationUnlocked:this.meditationUnlocked,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),o=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:o,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const o=this.decryptSave(e.data);a=JSON.parse(o)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.critChance=a.critChance||0,this.critDamage=a.critDamage||.5,this.stats=a.stats||{strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=a.trainingActions?this.migrateTrainingActions(a.trainingActions):this.initializeTrainingActions(),this.meditationActions=a.meditationActions?this.migrateMeditationActions(a.meditationActions):this.initializeMeditationActions(),this.idleExpRate=a.idleExpRate||0,this.adventureModeUnlocked=a.adventureModeUnlocked||!1,this.meditationUnlocked=a.meditationUnlocked||!1,this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const o=this.importSave(decodeURIComponent(s));return o.success?!0:(console.error("Failed to load save from cookies:",o.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t)}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(t){const e=this.importSave(t);return e.success?!0:(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){this.saveToLocalStorage()}hardReset(t=!0){const e=t?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=e,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=0,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var Ts=z('<div class="progress-container svelte-1xm1ks6"><div></div></div>'),Us=z('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function js(i,t){Ae(t,!0);const e=Pt(()=>{if(t.game.level<2)return null;const x=t.game.exp;let h=1/0,$=!1;const g=t.game.getLevelUpCost();g<h&&(h=g,$=x>=g);const M=t.game.upgrades.discipline;if(M&&M.currentLevel<M.maxLevel){const y=t.game.getUpgradeCost("discipline");y<h&&(h=y,$=x>=y)}return h===1/0?null:{progress:Math.min(x/h,1),canAfford:$}});var a=Us(),s=n(a),o=n(s),v=n(o);l(o);var u=d(o,2),b=n(u);l(u),l(s);var p=d(s,2);{var _=x=>{var h=Ts(),$=n(h);let g;l(h),J(M=>{g=ve($,1,"progress-bar svelte-1xm1ks6",null,g,M),_t($,`width: ${r(e).progress*100}%`)},[()=>({full:r(e).canAfford})]),f(x,h)};I(p,x=>{r(e)&&x(_)})}l(a),J(x=>{C(v,`EXP: ${x??""}`),C(b,`Level: ${t.game.level??""}`)},[()=>Math.floor(t.game.exp).toLocaleString()]),f(i,a),Le()}/**
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
 */const Ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ns=vs("<svg><!><!></svg>");function Ce(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]),a=xe(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ae(t,!1);let s=_e(t,"name",8,void 0),o=_e(t,"color",8,"currentColor"),v=_e(t,"size",8,24),u=_e(t,"strokeWidth",8,2),b=_e(t,"absoluteStrokeWidth",8,!1),p=_e(t,"iconNode",24,()=>[]);const _=(...g)=>g.filter((M,y,T)=>!!M&&T.indexOf(M)===y).join(" ");Oe();var x=Ns();Bt(x,(g,M)=>({...Ds,...a,width:v(),height:v(),stroke:o(),"stroke-width":g,class:M}),[()=>(S(b()),S(u()),S(v()),c(()=>b()?Number(u())*24/Number(v()):u())),()=>(S(s()),S(e),c(()=>_("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var h=n(x);Ge(h,1,p,vt,(g,M)=>{var y=Pt(()=>ds(r(M),2));let T=()=>r(y)[0],A=()=>r(y)[1];var X=se(),U=Q(X);ms(U,T,!0,(O,m)=>{Bt(O,()=>({...A()}))}),f(g,X)});var $=d(h);Se($,t,"default",{}),l(x),f(i,x),Le()}function Is(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];Ce(i,$e({name:"brain"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function zs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];Ce(i,$e({name:"chart-column"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Ps(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];Ce(i,$e({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function qs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];Ce(i,$e({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Os(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];Ce(i,$e({name:"compass"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Xt(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ce(i,$e({name:"download"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Vs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];Ce(i,$e({name:"dumbbell"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Rs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];Ce(i,$e({name:"info"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ca(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];Ce(i,$e({name:"mouse-pointer"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ua(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ce(i,$e({name:"save"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Fs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ce(i,$e({name:"settings"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Bs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];Ce(i,$e({name:"square-pen"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Hs(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Ce(i,$e({name:"trending-up"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ft(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];Ce(i,$e({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Gt(i,t){const e=xe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];Ce(i,$e({name:"upload"},()=>e,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,t,"default",{}),f(s,v)},$$slots:{default:!0}}))}var Xs=z('<button class="svelte-igdjqh"><p><!></p></button>'),Gs=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ys=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ks=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ws=z('<button class="svelte-igdjqh"><p><!></p></button>'),Js=z('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <!> <!> <!> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function Qs(i,t){Ae(t,!1);const e=pe();let a=_e(t,"game",12);we(()=>S(a()),()=>{ie(e,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(K=>a().canAffordUpgrade(K.id))))}),Ye(),Oe();var s=Js(),o=n(s),v=n(o),u=n(v,!0);l(v),l(o);var b=d(o,2),p=n(b),_=n(p);let x;var h=n(_);ca(h,{size:24}),l(_),l(p);var $=d(p,2);{var g=K=>{var ee=Xs(),B=n(ee);let ae;var L=n(B);Hs(L,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&r(e)})]),ge("click",ee,()=>a(a().menu="upgrades",!0)),f(K,ee)};I($,K=>{S(a()),c(()=>a().showUpgrades())&&K(g)})}var M=d($,2);{var y=K=>{var ee=Gs(),B=n(ee);let ae;var L=n(B);Vs(L,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="training"})]),ge("click",ee,()=>a(a().menu="training",!0)),f(K,ee)};I(M,K=>{S(a()),c(()=>a().showTraining())&&K(y)})}var T=d(M,2);{var A=K=>{var ee=Ys(),B=n(ee);let ae;var L=n(B);zs(L,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="stats"})]),ge("click",ee,()=>a(a().menu="stats",!0)),f(K,ee)};I(T,K=>{S(a()),c(()=>a().showStats())&&K(A)})}var X=d(T,2);{var U=K=>{var ee=Ks(),B=n(ee);let ae;var L=n(B);Is(L,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="meditation"})]),ge("click",ee,()=>a(a().menu="meditation",!0)),f(K,ee)};I(X,K=>{S(a()),c(()=>a().showMeditation())&&K(U)})}var O=d(X,2);{var m=K=>{var ee=Ws(),B=n(ee);let ae;var L=n(B);Os(L,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="adventure"})]),ge("click",ee,()=>a(a().menu="adventure",!0)),f(K,ee)};I(O,K=>{S(a()),c(()=>a().showAdventure())&&K(m)})}var w=d(O,2),D=n(w);let W;var j=n(D);Bs(j,{size:24}),l(D),l(w);var V=d(w,2),R=n(V);let le;var G=n(R);qs(G,{size:24}),l(R),l(V);var q=d(V,2),F=n(q);let N;var k=n(F);ua(k,{size:24}),l(F),l(q);var E=d(q,2),Y=n(E);let te;var re=n(Y);Fs(re,{size:24}),l(Y),l(E);var ne=d(E,2),H=n(ne);let Z;var ce=n(H);Rs(ce,{size:24}),l(H),l(ne),l(b),l(s),J((K,ee,B,ae,L,P)=>{C(u,(S(a()),c(()=>a().menu))),x=ve(_,1,"svelte-igdjqh",null,x,K),W=ve(D,1,"svelte-igdjqh",null,W,ee),le=ve(R,1,"svelte-igdjqh",null,le,B),N=ve(F,1,"svelte-igdjqh",null,N,ae),te=ve(Y,1,"svelte-igdjqh",null,te,L),Z=ve(H,1,"svelte-igdjqh",null,Z,P)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),ge("click",p,()=>a(a().menu="practice",!0)),ge("click",w,()=>a(a().menu="story",!0)),ge("click",V,()=>a(a().menu="help",!0)),ge("click",q,()=>a(a().menu="saves",!0)),ge("click",E,()=>a(a().menu="settings",!0)),ge("click",ne,()=>a(a().menu="about",!0)),f(i,s),Le()}var Zs=z('<div class="crit-text svelte-ylrqw9">CRIT!</div>'),ei=z('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><!> <div class="item svelte-ylrqw9"><!><br class="svelte-ylrqw9"/> </div></button></div></div>');function ti(i,t){Ae(t,!0);let e=_e(t,"game",15),a=Pt(()=>e()?e().updateClickText():"Loading..."),s=Fe(!1);function o(){if(!e())return;let g=e().getClickValue();Math.random()<e().critChance&&(g*=1+e().critDamage,ie(s,!0),setTimeout(()=>ie(s,!1),300)),e().addExp(g),e(e())}var v=ei(),u=n(v),b=n(u);b.__click=o,b.__touchstart=o;var p=n(b);{var _=g=>{var M=Zs();f(g,M)};I(p,g=>{r(s)&&g(_)})}var x=d(p,2),h=n(x);ca(h,{size:48});var $=d(h,2,!0);l(x),l(b),l(u),l(v),J(()=>C($,r(a))),f(i,v),Le()}dt(["click","touchstart"]);var ai=z('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),si=z('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),ii=z('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),ri=z('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function li(i,t){Ae(t,!1);const e=pe(),a=pe();let s=_e(t,"game",8),o=_e(t,"config",8),v=pe(null);function u(N){ie(v,N)}function b(){r(v)&&s().purchaseUpgrade(r(v).id)&&(ie(v,s().upgrades[r(v).id]),s().autoSave())}function p(N){return N.toLocaleString()}function _(){s().levelUp()&&s().autoSave()}o(),we(()=>S(s()),()=>{ie(e,Object.values(s().upgrades).filter(N=>!N.minLevel||N.minLevel<=s().level).filter(N=>N.id!=="discipline"))}),we(()=>S(s()),()=>{ie(a,s().upgrades.discipline)}),Ye(),Oe();var x=ri(),h=d(n(x),2),$=n(h),g=n($);let M;var y=d(n(g),2),T=n(y);l(y);var A=d(y,2),X=n(A);l(A),l(g);var U=d(g,2);let O;var m=n(U),w=n(m,!0);l(m);var D=d(m,2),W=n(D);l(D);var j=d(D,2),V=n(j);l(j),l(U);var R=d(U,2);Ge(R,1,()=>r(e),N=>N.id,(N,k)=>{var E=ai();let Y;var te=n(E),re=n(te,!0);l(te);var ne=d(te,2),H=n(ne);l(ne);var Z=d(ne,2),ce=n(Z);l(Z);var K=d(Z,2),ee=n(K);{var B=L=>{var P=me();J(oe=>C(P,`+${oe??""}% click EXP per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(L,P)},ae=L=>{var P=se(),oe=Q(P);{var be=fe=>{var he=me();J(ke=>C(he,`+${ke??""}% crit chance per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(1)))]),f(fe,he)},ye=fe=>{var he=se(),ke=Q(he);{var Ue=Me=>{var De=me();J(Ne=>C(De,`+${Ne??""}% crit damage per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Me,De)},je=Me=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{var Ie=me();J(()=>C(Ie,`+${r(k),c(()=>r(k).effectValue)??""} rumination EXP per level`)),f(Ee,Ie)},xt=Ee=>{var Ie=se(),yt=Q(Ie);{var kt=Te=>{var Pe=me();J(Mt=>C(Pe,`+${Mt??""}% rumination speed per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Te,Pe)},St=Te=>{var Pe=se(),Mt=Q(Pe);{var fa=Ke=>{var et=me();J(wt=>C(et,`+${wt??""}% all idle speed per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Ke,et)},pa=Ke=>{var et=se(),wt=Q(et);{var ga=We=>{var tt=me();J(()=>C(tt,`+${r(k),c(()=>r(k).effectValue)??""} idle EXP/s per level`)),f(We,tt)},ha=We=>{var tt=se(),ma=Q(tt);{var _a=Je=>{var at=me();J($t=>C(at,`-${$t??""}% training time per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Je,at)},ba=Je=>{var at=se(),$t=Q(at);{var xa=Qe=>{var ut=me();J(ka=>C(ut,`-${ka??""}% training cost per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Qe,ut)},ya=Qe=>{var ut=me("Enhanced efficiency");f(Qe,ut)};I($t,Qe=>{r(k),c(()=>r(k).effectType==="trainingCost")?Qe(xa):Qe(ya,!1)},!0)}f(Je,at)};I(ma,Je=>{r(k),c(()=>r(k).effectType==="trainingSpeed")?Je(_a):Je(ba,!1)},!0)}f(We,tt)};I(wt,We=>{r(k),c(()=>r(k).effectType==="idleExp")?We(ga):We(ha,!1)},!0)}f(Ke,et)};I(Mt,Ke=>{r(k),c(()=>r(k).effectType==="globalIdleSpeed")?Ke(fa):Ke(pa,!1)},!0)}f(Te,Pe)};I(yt,Te=>{r(k),c(()=>r(k).effectType==="osmosisSpeed")?Te(kt):Te(St,!1)},!0)}f(Ee,Ie)};I(Ne,Ee=>{r(k),c(()=>r(k).effectType==="osmosisExp")?Ee(Ve):Ee(xt,!1)},!0)}f(Me,De)};I(ke,Me=>{r(k),c(()=>r(k).effectType==="critDamage")?Me(Ue):Me(je,!1)},!0)}f(fe,he)};I(oe,fe=>{r(k),c(()=>r(k).effectType==="critChance")?fe(be):fe(ye,!1)},!0)}f(L,P)};I(ee,L=>{r(k),c(()=>r(k).effectType==="clickMultiplier")?L(B):L(ae,!1)})}l(K),l(E),J((L,P,oe)=>{Y=ve(E,1,"upgrade-btn svelte-xd3x4d",null,Y,L),He(E,"aria-label",`Select ${r(k),c(()=>r(k).name)??""} upgrade. Level ${r(k),c(()=>r(k).currentLevel)??""} of ${r(k),c(()=>r(k).maxLevel)??""}. Cost: ${P??""} EXP`),C(re,(r(k),c(()=>r(k).name))),C(H,`Level ${r(k),c(()=>r(k).currentLevel)??""}/${r(k),c(()=>r(k).maxLevel)??""}`),C(ce,`${oe??""} EXP`)},[()=>({selected:r(v)?.id===r(k).id,affordable:s().canAffordUpgrade(r(k).id),maxed:r(k).currentLevel>=r(k).maxLevel}),()=>(S(s()),r(k),c(()=>p(s().getUpgradeCost(r(k).id)))),()=>(S(s()),r(k),c(()=>p(s().getUpgradeCost(r(k).id))))]),ge("click",E,()=>u(r(k))),f(N,E)}),ue(2),l($);var le=d($,2),G=n(le);{var q=N=>{var k=si(),E=Q(k),Y=n(E),te=n(Y,!0);l(Y);var re=d(Y,2);l(E);var ne=d(E,2),H=n(ne),Z=n(H),ce=n(Z,!0);l(Z);var K=d(Z,2),ee=d(n(K));l(K);var B=d(K,2),ae=d(n(B));l(B);var L=d(B,2),P=d(n(L));l(L),l(H);var oe=d(H,2),be=n(oe),ye=n(be);{var fe=ke=>{var Ue=me("MAX LEVEL");f(ke,Ue)},he=ke=>{var Ue=se(),je=Q(Ue);{var Me=Ne=>{var Ve=me("CANNOT AFFORD");f(Ne,Ve)},De=Ne=>{var Ve=me("PURCHASE");f(Ne,Ve)};I(je,Ne=>{S(s()),r(v),c(()=>!s().canAffordUpgrade(r(v).id))?Ne(Me):Ne(De,!1)},!0)}f(ke,Ue)};I(ye,ke=>{r(v),c(()=>r(v).currentLevel>=r(v).maxLevel)?ke(fe):ke(he,!1)})}l(be),l(oe),l(ne),J((ke,Ue)=>{C(te,(r(v),c(()=>r(v).name))),C(ce,(r(v),c(()=>r(v).description))),C(ee,` ${r(v),c(()=>r(v).effect)??""}`),C(ae,` ${ke??""} EXP`),C(P,` ${r(v),c(()=>r(v).currentLevel)??""}/${r(v),c(()=>r(v).maxLevel)??""}`),be.disabled=Ue},[()=>(S(s()),r(v),c(()=>p(s().getUpgradeCost(r(v).id)))),()=>(S(s()),r(v),c(()=>!s().canPurchaseUpgrade(r(v).id)))]),ge("click",re,()=>ie(v,null)),ge("click",be,b),f(N,k)},F=N=>{var k=ii();f(N,k)};I(G,N=>{r(v)?N(q):N(F,!1)})}l(le),l(h),l(x),J((N,k,E,Y,te,re,ne)=>{M=ve(g,1,"upgrade-btn special-btn svelte-xd3x4d",null,M,N),g.disabled=k,He(g,"aria-label",`Level up from ${S(s()),c(()=>s().level)??""} to ${S(s()),c(()=>s().level+1)??""}. Cost: ${E??""} EXP`),C(T,`Level ${S(s()),c(()=>s().level)??""} → ${S(s()),c(()=>s().level+1)??""}`),C(X,`${Y??""} EXP`),O=ve(U,1,"upgrade-btn special-btn svelte-xd3x4d",null,O,te),U.disabled=(r(a),c(()=>r(a).currentLevel>=r(a).maxLevel)),He(U,"aria-label",`Select ${r(a),c(()=>r(a).name)??""} upgrade. Level ${r(a),c(()=>r(a).currentLevel)??""} of ${r(a),c(()=>r(a).maxLevel)??""}. Cost: ${re??""} EXP`),C(w,(r(a),c(()=>r(a).name))),C(W,`Level ${r(a),c(()=>r(a).currentLevel)??""}/${r(a),c(()=>r(a).maxLevel)??""}`),C(V,`${ne??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(S(s()),c(()=>!s().canLevelUp())),()=>(S(s()),c(()=>p(s().getLevelUpCost()))),()=>(S(s()),c(()=>p(s().getLevelUpCost()))),()=>({selected:r(v)?.id===r(a).id,affordable:s().canAffordUpgrade(r(a).id),maxed:r(a).currentLevel>=r(a).maxLevel}),()=>(S(s()),r(a),c(()=>p(s().getUpgradeCost(r(a).id)))),()=>(S(s()),r(a),c(()=>p(s().getUpgradeCost(r(a).id))))]),ge("click",g,_),ge("click",U,()=>u(r(a))),f(i,x),Le()}var ni=z('<div class="stat-level svelte-iba83u"> </div>'),oi=z("<div> </div>"),vi=z('<div class="cost free svelte-iba83u">Free</div>'),di=z('<div class="progress-container svelte-iba83u"><div class="progress-bar svelte-iba83u"></div> <div class="progress-text svelte-iba83u"> </div></div>'),ci=z('<button><div class="action-header svelte-iba83u"><div class="action-name svelte-iba83u"> </div> <!></div> <div class="action-description svelte-iba83u"> </div> <div class="action-info svelte-iba83u"><!> <div class="reward svelte-iba83u">+10 EXP</div></div> <!></button>'),ui=z('<div class="training-container svelte-iba83u"><h2 class="svelte-iba83u">Training</h2> <div class="actions-grid svelte-iba83u"></div></div>');function fi(i,t){Ae(t,!1);const e=pe();let a=_e(t,"game",12);function s(p){a().startIdleAction(a().trainingActions,p),a(a())}function o(p){return p.id==="practice-osmosis"?0:p.trainsStat?a().getStatLevelCost(p.trainsStat):0}function v(p){return p.id==="practice-osmosis"?!0:p.trainsStat?a().exp>=a().getStatLevelCost(p.trainsStat):!0}we(()=>S(a()),()=>{ie(e,Object.values(a().trainingActions).filter(p=>p.id==="practice-osmosis"?a().level>=2:p.trainsStat?a().level>=3:!1))}),Ye(),Oe();var u=ui(),b=d(n(u),2);Ge(b,5,()=>r(e),p=>p.id,(p,_)=>{const x=rt(()=>(r(_),c(()=>r(_).isActive))),h=rt(()=>(r(_),c(()=>v(r(_))))),$=rt(()=>(r(_),c(()=>o(r(_))))),g=rt(()=>(S(r(x)),r(_),c(()=>r(x)?r(_).progress:0)));var M=ci();let y;var T=n(M),A=n(T),X=n(A,!0);l(A);var U=d(A,2);{var O=G=>{var q=ni(),F=n(q);l(q),J(N=>C(F,`${N??""}: ${S(a()),r(_),c(()=>a().stats[r(_).trainsStat])??""}`),[()=>(r(_),c(()=>r(_).trainsStat.toUpperCase()))]),f(G,q)};I(U,G=>{r(_),c(()=>r(_).trainsStat)&&G(O)})}l(T);var m=d(T,2),w=n(m,!0);l(m);var D=d(m,2),W=n(D);{var j=G=>{var q=oi();let F;var N=n(q);l(q),J(k=>{F=ve(q,1,"cost svelte-iba83u",null,F,k),C(N,`Cost: ${r($)??""} EXP`)},[()=>({"cannot-afford":!r(h)})]),f(G,q)},V=G=>{var q=vi();f(G,q)};I(W,G=>{r($)>0?G(j):G(V,!1)})}ue(2),l(D);var R=d(D,2);{var le=G=>{var q=di(),F=n(q),N=d(F,2),k=n(N);l(N),l(q),J((E,Y)=>{_t(F,`width: ${E??""}%`),C(k,`${Y??""}%`)},[()=>(S(r(g)),c(()=>Math.min(r(g)*100,100))),()=>(S(r(g)),c(()=>Math.floor(Math.min(r(g)*100,100))))]),f(G,q)};I(R,G=>{r(x)&&G(le)})}l(M),J(G=>{y=ve(M,1,"action-card svelte-iba83u",null,y,G),M.disabled=r(x),C(X,(r(_),c(()=>r(_).name))),C(w,(r(_),c(()=>r(_).description)))},[()=>({active:r(x),blocked:!r(h)&&!r(x)})]),ge("click",M,()=>s(r(_).id)),f(p,M)}),l(b),l(u),f(i,u),Le()}var pi=z('<div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Combat Stats</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Strength</div> <div class="stat-value strength svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Physical power and damage</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Dexterity</div> <div class="stat-value dexterity svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Agility and precision</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Intelligence</div> <div class="stat-value intelligence svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Knowledge and magic</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Wisdom</div> <div class="stat-value wisdom svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Insight and awareness</div></div></div></div>'),gi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Idle EXP</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Passive EXP gain</div></div>'),hi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Speed</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base duration</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Cost</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base cost</div></div>',1),mi=z('<div class="upgrade-item svelte-1i5r50h"><span class="upgrade-name svelte-1i5r50h"> </span> <span class="upgrade-level svelte-1i5r50h"> </span></div>'),_i=z('<p class="no-upgrades svelte-1i5r50h">No upgrades purchased yet</p>'),bi=z('<div class="stats-container svelte-1i5r50h"><h2 class="svelte-1i5r50h">Player Stats</h2> <p class="description svelte-1i5r50h">View your progression and statistics</p> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">General</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Name</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Level</div> <div class="stat-value level svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Current EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Lifetime EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div></div></div> <!> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Progress Rates</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Click Value</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">EXP per click</div></div> <!> <!></div></div> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Upgrades Owned</h3> <div class="upgrades-list svelte-1i5r50h"><!> <!></div></div></div>');function xi(i,t){Ae(t,!1);let e=_e(t,"game",8);function a(E){return E>=1e12?(E/1e12).toFixed(2)+"T":E>=1e9?(E/1e9).toFixed(2)+"B":E>=1e6?(E/1e6).toFixed(2)+"M":E>=1e3?(E/1e3).toFixed(2)+"K":E.toFixed(2)}Oe();var s=bi(),o=d(n(s),4),v=d(n(o),2),u=n(v),b=d(n(u),2),p=n(b,!0);l(b),l(u);var _=d(u,2),x=d(n(_),2),h=n(x,!0);l(x),l(_);var $=d(_,2),g=d(n($),2),M=n(g,!0);l(g),l($);var y=d($,2),T=d(n(y),2),A=n(T,!0);l(T),l(y),l(v),l(o);var X=d(o,2);{var U=E=>{var Y=pi(),te=d(n(Y),2),re=n(te),ne=d(n(re),2),H=n(ne,!0);l(ne),ue(2),l(re);var Z=d(re,2),ce=d(n(Z),2),K=n(ce,!0);l(ce),ue(2),l(Z);var ee=d(Z,2),B=d(n(ee),2),ae=n(B,!0);l(B),ue(2),l(ee);var L=d(ee,2),P=d(n(L),2),oe=n(P,!0);l(P),ue(2),l(L),l(te),l(Y),J(()=>{C(H,(S(e()),c(()=>e().stats.strength))),C(K,(S(e()),c(()=>e().stats.dexterity))),C(ae,(S(e()),c(()=>e().stats.intelligence))),C(oe,(S(e()),c(()=>e().stats.wisdom)))}),f(E,Y)};I(X,E=>{S(e()),c(()=>e().level>=3)&&E(U)})}var O=d(X,2),m=d(n(O),2),w=n(m),D=d(n(w),2),W=n(D,!0);l(D),ue(2),l(w);var j=d(w,2);{var V=E=>{var Y=gi(),te=d(n(Y),2),re=n(te);l(te),ue(2),l(Y),J(ne=>C(re,`${ne??""}/s`),[()=>(S(e()),c(()=>a(e().idleExpRate)))]),f(E,Y)};I(j,E=>{S(e()),c(()=>e().idleExpRate>0)&&E(V)})}var R=d(j,2);{var le=E=>{var Y=hi(),te=Q(Y),re=d(n(te),2),ne=n(re);l(re),ue(2),l(te);var H=d(te,2),Z=d(n(H),2),ce=n(Z);l(Z),ue(2),l(H),J((K,ee)=>{C(ne,`${K??""}%`),C(ce,`${ee??""}%`)},[()=>(S(e()),c(()=>(e().getTrainingSpeedMultiplier()*100).toFixed(0))),()=>(S(e()),c(()=>(e().getTrainingCostMultiplier()*100).toFixed(0)))]),f(E,Y)};I(R,E=>{S(e()),c(()=>e().level>=3)&&E(le)})}l(m),l(O);var G=d(O,2),q=d(n(G),2),F=n(q);Ge(F,1,()=>(S(e()),c(()=>Object.values(e().upgrades).filter(E=>E.currentLevel>0))),vt,(E,Y)=>{var te=mi(),re=n(te),ne=n(re,!0);l(re);var H=d(re,2),Z=n(H);l(H),l(te),J(()=>{C(ne,(r(Y),c(()=>r(Y).name))),C(Z,`Level ${r(Y),c(()=>r(Y).currentLevel)??""}`)}),f(E,te)});var N=d(F,2);{var k=E=>{var Y=_i();f(E,Y)};I(N,E=>{S(e()),c(()=>Object.values(e().upgrades).filter(Y=>Y.currentLevel>0).length===0)&&E(k)})}l(q),l(G),l(s),J((E,Y,te)=>{C(p,(S(e()),c(()=>e().name))),C(h,(S(e()),c(()=>e().level))),C(M,E),C(A,Y),C(W,te)},[()=>(S(e()),c(()=>a(e().exp))),()=>(S(e()),c(()=>a(e().lifetimeExp))),()=>(S(e()),c(()=>a(e().getClickValue())))]),f(i,s),Le()}var yi=z('<div class="no-actions svelte-x40p30"><p class="svelte-x40p30">You have completed all available meditations.</p> <p class="hint svelte-x40p30">More will be unlocked as you progress through the game.</p></div>'),ki=z("<option> <!></option>"),Si=z('<span class="cannot-afford svelte-x40p30"> </span>'),Mi=z('<p class="one-time-notice svelte-x40p30"><em>This meditation can only be completed once.</em></p>'),wi=z('<div class="progress-container svelte-x40p30"><div class="progress-bar svelte-x40p30"></div> <div class="progress-text svelte-x40p30"> </div></div>'),$i=z('<button class="stop-button svelte-x40p30">Stop Meditating</button>'),Ci=z('<button class="start-button svelte-x40p30">Begin Meditation</button>'),Ai=z('<div class="action-info svelte-x40p30"><h3 class="svelte-x40p30"> </h3> <p class="svelte-x40p30"> </p> <p class="cost svelte-x40p30">Cost: <strong> </strong> <!></p> <p class="svelte-x40p30"> </p> <!></div> <!> <div class="action-buttons svelte-x40p30"><!></div>',1),Li=z('<div class="completed-item svelte-x40p30"><span class="completed-name svelte-x40p30"> </span> <span class="completed-badge svelte-x40p30">✓ Complete</span></div>'),Ei=z('<div class="completed-section svelte-x40p30"><h3 class="svelte-x40p30">Completed Meditations</h3> <div class="completed-list svelte-x40p30"></div></div>'),Ti=z('<div class="meditation-area svelte-x40p30"><div class="meditation-selector svelte-x40p30"><label for="meditation-select" class="svelte-x40p30">Choose Meditation:</label> <select id="meditation-select" class="svelte-x40p30"></select></div> <!></div> <!>',1),Ui=z('<div class="meditation-container svelte-x40p30"><h2 class="svelte-x40p30">Meditation</h2> <p class="description svelte-x40p30">Meditate on the mysteries of the Tomes</p> <!></div>');function ji(i,t){Ae(t,!1);const e=pe(),a=pe(),s=pe(),o=pe(),v=pe(),u=pe();let b=_e(t,"game",12),p=pe("meditate-future");function _(){b().startIdleAction(b().meditationActions,r(p))&&b(b())}function x(){b().stopIdleAction(b().meditationActions,r(p)),b(b())}we(()=>S(b()),()=>{ie(e,Object.values(b().meditationActions).filter(y=>!y.oneTime||!y.completed))}),we(()=>(S(b()),r(p)),()=>{ie(a,b().meditationActions[r(p)])}),we(()=>r(a),()=>{ie(s,r(a)?.isActive||!1)}),we(()=>r(a),()=>{ie(o,r(a)?.progress||0)}),we(()=>(r(a),S(b())),()=>{ie(v,r(a)?b().exp>=r(a).expCost:!1)}),we(()=>r(a),()=>{ie(u,r(a)?.oneTime&&r(a)?.completed)}),Ye(),Oe();var h=Ui(),$=d(n(h),4);{var g=y=>{var T=yi();f(y,T)},M=y=>{var T=Ti(),A=Q(T),X=n(A),U=d(n(X),2);J(()=>{r(p),cs(()=>{r(s),r(e)})}),Ge(U,5,()=>r(e),vt,(W,j)=>{var V=ki(),R=n(V),le=d(R);{var G=F=>{var N=me("(One-time)");f(F,N)};I(le,F=>{r(j),c(()=>r(j).oneTime)&&F(G)})}l(V);var q={};J(()=>{C(R,`${r(j),c(()=>r(j).name)??""} `),q!==(q=(r(j),c(()=>r(j).id)))&&(V.value=(V.__value=(r(j),c(()=>r(j).id)))??"")}),f(W,V)}),l(U),l(X);var O=d(X,2);{var m=W=>{var j=Ai(),V=Q(j),R=n(V),le=n(R,!0);l(R);var G=d(R,2),q=n(G,!0);l(G);var F=d(G,2),N=d(n(F)),k=n(N);l(N);var E=d(N,2);{var Y=L=>{var P=Si(),oe=n(P);l(P),J(()=>C(oe,`(need ${r(a),S(b()),c(()=>r(a).expCost-b().exp)??""} more)`)),f(L,P)};I(E,L=>{r(v)||L(Y)})}l(F);var te=d(F,2),re=n(te);l(te);var ne=d(te,2);{var H=L=>{var P=Mi();f(L,P)};I(ne,L=>{r(a),c(()=>r(a).oneTime)&&L(H)})}l(V);var Z=d(V,2);{var ce=L=>{var P=wi(),oe=n(P),be=d(oe,2),ye=n(be);l(be),l(P),J((fe,he)=>{_t(oe,`width: ${fe??""}%`),C(ye,`${he??""}%`)},[()=>(r(o),c(()=>Math.min(r(o)*100,100))),()=>(r(o),c(()=>Math.floor(Math.min(r(o)*100,100))))]),f(L,P)};I(Z,L=>{r(s)&&L(ce)})}var K=d(Z,2),ee=n(K);{var B=L=>{var P=$i();ge("click",P,x),f(L,P)},ae=L=>{var P=Ci();J(()=>P.disabled=!r(v)),ge("click",P,_),f(L,P)};I(ee,L=>{r(s)?L(B):L(ae,!1)})}l(K),J(L=>{C(le,(r(a),c(()=>r(a).name))),C(q,(r(a),c(()=>r(a).description))),C(k,`${r(a),c(()=>r(a).expCost)??""} EXP`),C(re,`Duration: ${L??""}s`)},[()=>(r(a),c(()=>(r(a).duration/1e3).toFixed(1)))]),f(W,j)};I(O,W=>{r(a)&&!r(u)&&W(m)})}l(A);var w=d(A,2);{var D=W=>{var j=Ei(),V=d(n(j),2);Ge(V,5,()=>(S(b()),c(()=>Object.values(b().meditationActions).filter(R=>R.oneTime&&R.completed))),vt,(R,le)=>{var G=Li(),q=n(G),F=n(q,!0);l(q),ue(2),l(G),J(()=>C(F,(r(le),c(()=>r(le).name)))),f(R,G)}),l(V),l(j),f(W,j)};I(w,W=>{S(b()),c(()=>Object.values(b().meditationActions).some(j=>j.oneTime&&j.completed))&&W(D)})}J(()=>U.disabled=r(s)),la(U,()=>r(p),W=>ie(p,W)),f(y,T)};I($,y=>{r(e),c(()=>r(e).length===0)?y(g):y(M,!1)})}l(h),f(i,h),Le()}var Di=z(`<div class="meditation-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Your stats are sufficient. Complete the "Meditate on Your Future" meditation to
                                unlock Adventure Mode.</em></p></div>`),Ni=z('<div class="training-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Visit the Training page to improve your stats.</em></p></div>'),Ii=z(`<div class="locked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode</h2> <p class="locked-message svelte-gg7su4">The path to adventure is not yet clear. You must train your stats and meditate to unlock
                this path.</p> <div class="requirements-section svelte-gg7su4"><h3 class="svelte-gg7su4">Requirements</h3> <div class="requirements-grid svelte-gg7su4"><div><span class="requirement-label svelte-gg7su4">Strength:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Dexterity:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Intelligence:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Wisdom:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div></div> <!></div></div>`),zi=z(`<div class="unlocked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode Unlocked!</h2> <div class="demo-message svelte-gg7su4"><h3 class="svelte-gg7su4">Congratulations!</h3> <p class="svelte-gg7su4">You've unlocked everything in the current demo of TomeClicker.</p> <div class="demo-stats svelte-gg7su4"><p class="svelte-gg7su4">Your journey so far:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li></ul></div> <div class="coming-soon svelte-gg7su4"><h3 class="svelte-gg7su4">Coming Soon</h3> <p class="svelte-gg7su4">Future updates will include:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4">Adventure zones with unique challenges</li> <li class="svelte-gg7su4">Equipment and loot systems</li> <li class="svelte-gg7su4">More meditation techniques</li> <li class="svelte-gg7su4">Tome discovery and magic systems</li> <li class="svelte-gg7su4">Story progression and world-building</li></ul></div> <p class="thank-you svelte-gg7su4">Thank you for playing! Keep an eye on <a href="https://github.com/eaglerock/tomeclicker" target="_blank" class="svelte-gg7su4">GitHub</a> for updates.</p></div></div>`),Pi=z('<div class="adventure-container svelte-gg7su4"><!></div>');function qi(i,t){Ae(t,!1);const e=pe(),a=pe();let s=_e(t,"game",8);we(()=>S(s()),()=>{ie(e,s().adventureModeUnlocked)}),we(()=>S(s()),()=>{ie(a,s().stats.strength>=5&&s().stats.dexterity>=5&&s().stats.intelligence>=5&&s().stats.wisdom>=5)}),Ye(),Oe();var o=Pi(),v=n(o);{var u=p=>{var _=Ii(),x=d(n(_),4),h=d(n(x),2),$=n(h);let g;var M=d(n($),2),y=n(M),T=d(y);{var A=H=>{var Z=me("✓");f(H,Z)};I(T,H=>{S(s()),c(()=>s().stats.strength>=5)&&H(A)})}l(M),l($);var X=d($,2);let U;var O=d(n(X),2),m=n(O),w=d(m);{var D=H=>{var Z=me("✓");f(H,Z)};I(w,H=>{S(s()),c(()=>s().stats.dexterity>=5)&&H(D)})}l(O),l(X);var W=d(X,2);let j;var V=d(n(W),2),R=n(V),le=d(R);{var G=H=>{var Z=me("✓");f(H,Z)};I(le,H=>{S(s()),c(()=>s().stats.intelligence>=5)&&H(G)})}l(V),l(W);var q=d(W,2);let F;var N=d(n(q),2),k=n(N),E=d(k);{var Y=H=>{var Z=me("✓");f(H,Z)};I(E,H=>{S(s()),c(()=>s().stats.wisdom>=5)&&H(Y)})}l(N),l(q),l(h);var te=d(h,2);{var re=H=>{var Z=Di();f(H,Z)},ne=H=>{var Z=Ni();f(H,Z)};I(te,H=>{r(a)?H(re):H(ne,!1)})}l(x),l(_),J((H,Z,ce,K)=>{g=ve($,1,"requirement-item svelte-gg7su4",null,g,H),C(y,`${S(s()),c(()=>s().stats.strength)??""} / 5 `),U=ve(X,1,"requirement-item svelte-gg7su4",null,U,Z),C(m,`${S(s()),c(()=>s().stats.dexterity)??""} / 5 `),j=ve(W,1,"requirement-item svelte-gg7su4",null,j,ce),C(R,`${S(s()),c(()=>s().stats.intelligence)??""} / 5 `),F=ve(q,1,"requirement-item svelte-gg7su4",null,F,K),C(k,`${S(s()),c(()=>s().stats.wisdom)??""} / 5 `)},[()=>({met:s().stats.strength>=5}),()=>({met:s().stats.dexterity>=5}),()=>({met:s().stats.intelligence>=5}),()=>({met:s().stats.wisdom>=5})]),f(p,_)},b=p=>{var _=zi(),x=d(n(_),2),h=d(n(x),4),$=d(n(h),2),g=n($),M=n(g);l(g);var y=d(g,2),T=n(y);l(y);var A=d(y,2),X=n(A);l(A);var U=d(A,2),O=n(U);l(U),l($),l(h),ue(4),l(x),l(_),J((m,w,D)=>{C(M,`Level ${S(s()),c(()=>s().level)??""} adventurer`),C(T,`${m??""} lifetime EXP earned`),C(X,`${w??""} upgrades purchased`),C(O,`All stats trained to ${D??""}+`)},[()=>(S(s()),c(()=>s().lifetimeExp.toFixed(0))),()=>(S(s()),c(()=>Object.values(s().upgrades).filter(m=>m.currentLevel>0).length)),()=>(S(s()),c(()=>Math.min(...Object.values(s().stats))))]),f(p,_)};I(v,p=>{r(e)?p(b,!1):p(u)})}l(o),f(i,o),Le()}function Oi(i,t,e,a){try{const s=t().exportSave(!0);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function Vi(i,t,e,a){try{const s=t().exportSave(!1);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Ri(i,t,e,a){if(!r(t).trim()){e("Please paste save data first","error");return}const s=a().importSave(r(t).trim());s.success?(e(s.warning||"Save imported successfully!",s.warning?"warning":"success"),ie(t,""),a(a()),a().autoSave()):e(s.error||"Failed to import save","error")}function Fi(i,t,e){try{t().autoSave(),e("Game saved to browser storage!","success")}catch{e("Failed to save game","error")}}function Bi(i,t,e){try{const a=t().loadFromLocalStorage(),s=a?!1:t().loadFromCookies();a||s?(e(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),t(t())):e("No save found in browser storage","warning")}catch{e("Failed to load game","error")}}function Hi(i,t){ie(t,!0)}function Xi(i,t){ie(t,!1)}function Gi(i,t,e,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),t(t().name="A Stranger",!0),t(t().exp=0,!0),t(t().lifetimeExp=0,!0),t(t().level=1,!0),t(t().tick=0,!0),t(t().menu="practice",!0),t(t().clickMultiplier=1,!0),t(t().upgrades=t().initializeUpgrades(),!0),t(t().saveIntegrity="valid",!0),t(t().lastValidation=Date.now(),!0),t().recalculateClickMultiplier(),t(t()),ie(e,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Yi=z("<div><!> </div>"),Ki=z('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),Wi=z('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function Ji(i,t){Ae(t,!0);let e=_e(t,"game",15),a=Fe(""),s=Fe(""),o=Fe("success"),v=Fe(!1),u=Fe(!1);function b(B,ae,L=3e3){ie(s,B,!0),ie(o,ae,!0),ie(v,!0),setTimeout(()=>{ie(v,!1)},L)}function p(B,ae){const L=new Blob([B],{type:"application/json"}),P=URL.createObjectURL(L),oe=document.createElement("a");oe.href=P,oe.download=ae,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(P)}setInterval(()=>{e().autoSave()},3e4);var _=Wi(),x=d(n(_),2);{var h=B=>{var ae=Yi(),L=n(ae);{var P=ye=>{Ps(ye,{size:20})},oe=ye=>{var fe=se(),he=Q(fe);{var ke=je=>{ft(je,{size:20})},Ue=je=>{ft(je,{size:20})};I(he,je=>{r(o)==="warning"?je(ke):je(Ue,!1)},!0)}f(ye,fe)};I(L,ye=>{r(o)==="success"?ye(P):ye(oe,!1)})}var be=d(L);l(ae),J(()=>{ve(ae,1,`message ${r(o)??""}`,"svelte-rfjmb6"),C(be,` ${r(s)??""}`)}),f(B,ae)};I(x,B=>{r(v)&&B(h)})}var $=d(x,2),g=n($),M=d(n(g),4),y=n(M);y.__click=[Fi,e,b];var T=n(y);ua(T,{size:20}),ue(),l(y);var A=d(y,2);A.__click=[Bi,e,b];var X=n(A);Gt(X,{size:20}),ue(),l(A),l(M),l(g);var U=d(g,2),O=d(n(U),4),m=n(O);m.__click=[Oi,e,p,b];var w=n(m);Xt(w,{size:20}),ue(),l(m);var D=d(m,2);D.__click=[Vi,e,p,b];var W=n(D);Xt(W,{size:20}),ue(),l(D),l(O),ue(2),l(U);var j=d(U,2),V=d(n(j),4);us(V);var R=d(V,2);R.__click=[Ri,a,b,e];var le=n(R);Gt(le,{size:20}),ue(),l(R),l(j);var G=d(j,2),q=d(n(G),2),F=n(q),N=d(n(F));l(F);var k=d(F,2),E=d(n(k));l(k);var Y=d(k,2),te=d(n(Y));l(Y);var re=d(Y,2),ne=d(n(re));l(re),l(q),l(G);var H=d(G,2),Z=d(n(H),4);Z.__click=[Hi,u];var ce=n(Z);ft(ce,{size:20}),ue(),l(Z),l(H),l($);var K=d($,2);{var ee=B=>{var ae=Ki(),L=n(ae),P=d(n(L),8),oe=n(P);oe.__click=[Xi,u];var be=d(oe,2);be.__click=[Gi,e,u,b];var ye=n(be);ft(ye,{size:20}),ue(),l(be),l(P),l(L),l(ae),f(B,ae)};I(K,B=>{r(u)&&B(ee)})}l(_),J((B,ae,L,P)=>{R.disabled=B,C(N,` ${e().saveIntegrity??""}`),C(E,` ${ae??""}`),C(te,` ${L??""}`),C(ne,` ${P??""}`)},[()=>!r(a).trim(),()=>new Date(e().lastValidation).toLocaleString(),()=>e().exp.toLocaleString(),()=>e().lifetimeExp.toLocaleString()]),$s(V,()=>r(a),B=>ie(a,B)),f(i,_),Le()}dt(["click"]);var Qi=z("<option> </option>"),Zi=(i,t)=>{t().setDisplayMode("light"),t(t())},er=(i,t)=>{t().setDisplayMode("system"),t(t())},tr=(i,t)=>{t().setDisplayMode("dark"),t(t())},ar=z('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function sr(i,t){Ae(t,!0);let e=_e(t,"config",15);const a=Cs();var s=ar(),o=d(n(s),2),v=n(o),u=d(n(v),2),b=n(u),p=d(n(b),2),_=n(p,!0);l(p),l(b);var x=d(b,2),h=d(n(x),2),$=n(h,!0);l(h),l(x);var g=d(x,2),M=d(n(g),2),y=n(M,!0);l(M),l(g);var T=d(g,2),A=d(n(T),2),X=n(A,!0);l(A),l(T),l(u),l(v);var U=d(v,2),O=d(n(U),2),m=d(n(O),2);Ge(m,21,()=>a,vt,(q,F)=>{var N=Qi(),k=n(N,!0);l(N);var E={};J(Y=>{C(k,Y),E!==(E=r(F))&&(N.value=(N.__value=r(F))??"")},[()=>As(r(F))]),f(q,N)}),l(m),l(O);var w=d(O,2),D=d(n(w),2),W=n(D);let j;W.__click=[Zi,e];var V=d(W,2);let R;V.__click=[er,e];var le=d(V,2);let G;le.__click=[tr,e],l(D),l(w),l(U),l(o),l(s),J((q,F,N,k,E)=>{C(_,t.game.name),C($,t.game.level),C(y,q),C(X,F),j=ve(W,1,"mode-btn svelte-mt7s6l",null,j,N),R=ve(V,1,"mode-btn svelte-mt7s6l",null,R,k),G=ve(le,1,"mode-btn svelte-mt7s6l",null,G,E)},[()=>Math.floor(t.game.exp).toLocaleString(),()=>Math.floor(t.game.lifetimeExp).toLocaleString(),()=>({active:e().displayMode==="light"}),()=>({active:e().displayMode==="system"}),()=>({active:e().displayMode==="dark"})]),la(m,()=>e().theme,q=>e(e().theme=q,!0)),f(i,s),Le()}dt(["click"]);function ir(i,t,e){r(t)<e&&aa(t)}function rr(i,t){r(t)>1&&aa(t,-1)}var lr=z('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function nr(i,t){Ae(t,!0);let e=Fe(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var o=lr(),v=n(o),u=n(v),b=n(u),p=n(b);p.__click=[rr,e];var _=d(p,2),x=n(_),h=n(x);l(x);var $=d(x,2),g=n($);l($),l(_);var M=d(_,2);M.__click=[ir,e,a],l(b);var y=d(b,2),T=n(y),A=n(T,!0);l(T),l(y),l(u),l(v),l(o),J(()=>{p.disabled=r(e)===1,C(h,`Chapter ${r(e)??""}`),C(g,`(${r(e)??""}/9)`),M.disabled=r(e)===a,C(A,s[r(e)-1])}),f(i,o),Le()}dt(["click"]);var or=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),vr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),dr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),cr=z("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),ur=z('<div class="view svelte-1l6ze8i"><!></div>');function fr(i,t){Ae(t,!1);const e=pe();let a=_e(t,"config",12),s=_e(t,"game",12);we(()=>S(s()),()=>{ie(e,s()?.menu)}),Ye(),Oe();var o=ur(),v=n(o);ps(v,()=>r(e),u=>{var b=se(),p=Q(b);{var _=h=>{ti(h,{get config(){return a()},set config($){a($)},get game(){return s()},set game($){s($)},$$legacy:!0})},x=h=>{var $=se(),g=Q($);{var M=T=>{li(T,{get config(){return a()},set config(A){a(A)},get game(){return s()},set game(A){s(A)},$$legacy:!0})},y=T=>{var A=se(),X=Q(A);{var U=m=>{fi(m,{get game(){return s()},set game(w){s(w)},$$legacy:!0})},O=m=>{var w=se(),D=Q(w);{var W=V=>{xi(V,{get game(){return s()},set game(R){s(R)},$$legacy:!0})},j=V=>{var R=se(),le=Q(R);{var G=F=>{ji(F,{get game(){return s()},set game(N){s(N)},$$legacy:!0})},q=F=>{var N=se(),k=Q(N);{var E=te=>{qi(te,{get game(){return s()},set game(re){s(re)},$$legacy:!0})},Y=te=>{var re=se(),ne=Q(re);{var H=ce=>{Ji(ce,{get config(){return a()},set config(K){a(K)},get game(){return s()},set game(K){s(K)},$$legacy:!0})},Z=ce=>{var K=se(),ee=Q(K);{var B=L=>{nr(L,{get game(){return s()},set game(P){s(P)},$$legacy:!0})},ae=L=>{var P=se(),oe=Q(P);{var be=fe=>{sr(fe,{get config(){return a()},set config(he){a(he)},get game(){return s()},set game(he){s(he)},$$legacy:!0})},ye=fe=>{var he=se(),ke=Q(he);{var Ue=Me=>{var De=or();f(Me,De)},je=Me=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{var Ie=vr();f(Ee,Ie)},xt=Ee=>{var Ie=se(),yt=Q(Ie);{var kt=Te=>{var Pe=dr();f(Te,Pe)},St=Te=>{var Pe=cr();f(Te,Pe)};I(yt,Te=>{s()?Te(St,!1):Te(kt)},!0)}f(Ee,Ie)};I(Ne,Ee=>{S(s()),c(()=>s()&&s().menu==="about")?Ee(Ve):Ee(xt,!1)},!0)}f(Me,De)};I(ke,Me=>{S(s()),c(()=>s()&&s().menu==="help")?Me(Ue):Me(je,!1)},!0)}f(fe,he)};I(oe,fe=>{S(s()),c(()=>s()&&s().menu==="settings")?fe(be):fe(ye,!1)},!0)}f(L,P)};I(ee,L=>{S(s()),c(()=>s()&&s().menu==="story")?L(B):L(ae,!1)},!0)}f(ce,K)};I(ne,ce=>{S(s()),c(()=>s()&&s().menu==="saves")?ce(H):ce(Z,!1)},!0)}f(te,re)};I(k,te=>{S(s()),c(()=>s()&&s().menu==="adventure")?te(E):te(Y,!1)},!0)}f(F,N)};I(le,F=>{S(s()),c(()=>s()&&s().menu==="meditation")?F(G):F(q,!1)},!0)}f(V,R)};I(D,V=>{S(s()),c(()=>s()&&s().menu==="stats")?V(W):V(j,!1)},!0)}f(m,w)};I(X,m=>{S(s()),c(()=>s()&&s().menu==="training")?m(U):m(O,!1)},!0)}f(T,A)};I(g,T=>{S(s()),c(()=>s()&&s().menu==="upgrades")?T(M):T(y,!1)},!0)}f(h,$)};I(p,h=>{S(s()),c(()=>s()&&s().menu==="practice")?h(_):h(x,!1)})}f(u,b)}),l(o),f(i,o),Le()}var pr=z('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta property="og:type" content="website"/> <meta property="og:title" content="TomeClicker"/> <meta property="og:image" content="https://tomeclicker.marks.dev/og-image.png"/> <meta property="og:description" content="An incremental that grows on you."/> <meta name="description" content="An incremental that grows on you."/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),gr=z('<footer class="footer svelte-1uha8ag"><!></footer>'),hr=z('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),mr=z('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),_r=z("<div><!></div>");function Mr(i,t){Ae(t,!1);const e=pe();let a=pe(new Ls("prussian-blue","system")),s=pe(!1),o=pe();Aa(()=>{if(r(a).loadFromLocalStorage(),ie(s,!0),ie(a,r(a)),window.matchMedia){const h=window.matchMedia("(prefers-color-scheme: dark)"),$=()=>{r(a).displayMode==="system"&&ie(a,r(a))};h.addEventListener?h.addEventListener("change",$):h.addListener($)}ie(o,new Es),setTimeout(()=>{r(o)&&(r(o).loadFromLocalStorage()||r(o).loadFromCookies(),ie(o,r(o)))},100);const _=setInterval(()=>{r(o)&&r(o).autoSave()},15e3),x=setInterval(()=>{r(o)&&(r(o).updateIdleActions(),r(o).idleExpRate>0&&r(o).addExp(r(o).idleExpRate/10),ie(o,r(o)))},100);return()=>{clearInterval(_),clearInterval(x)}}),we(()=>r(a),()=>{ie(e,r(a)?r(a).getTheme():"")}),we(()=>(r(a),r(s)),()=>{r(a)&&r(s)&&typeof localStorage<"u"&&(r(a).theme,r(a).displayMode,r(a).saveToLocalStorage())}),Ye(),Oe();var v=_r();La(_=>{var x=pr();fs.title="TomeClicker",ue(16),f(_,x)});var u=n(v);{var b=_=>{var x=hr(),h=Q(x);{var $=A=>{js(A,{get game(){return r(o)}})};I(h,A=>{r(o),c(()=>r(o).showHeader())&&A($)})}var g=d(h,2),M=n(g);fr(M,{get game(){return r(o)},set game(A){ie(o,A)},get config(){return r(a)},set config(A){ie(a,A)},$$legacy:!0}),l(g);var y=d(g,2);{var T=A=>{var X=gr(),U=n(X);Qs(U,{get game(){return r(o)},set game(O){ie(o,O)},$$legacy:!0}),l(X),f(A,X)};I(y,A=>{r(o),c(()=>r(o).showMenu())&&A(T)})}f(_,x)},p=_=>{var x=mr();f(_,x)};I(u,_=>{r(o)?_(b):_(p,!1)})}l(v),J(()=>ve(v,1,`app ${r(e)??""}`,"svelte-1uha8ag")),f(i,v),Le()}export{Mr as component};
