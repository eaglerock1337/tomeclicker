import"../chunks/DsnmJJEf.js";import{i as Pe}from"../chunks/Cd55SYnr.js";import{i as sa,a as ia,c as ra,d as tt,n as la,b as na,s as M,e as me,o as oa,f as va}from"../chunks/Bl-oD2Vi.js";import{w as ce,x as et,aU as da,aV as ca,aW as ua,v as at,C as rt,D as Fe,F as Oe,G as Dt,K as ze,U as zt,J as yt,h as r,N as fa,y as pa,H as ga,z as St,A as Qe,B as Ve,a9 as ha,aC as ma,az as Pt,ap as qt,aQ as ge,a0 as At,a8 as Lt,I as kt,aX as lt,aY as ft,ag as We,aZ as nt,a_ as _a,am as ba,a$ as xa,ay as ya,b0 as ka,S as Ot,au as Vt,b1 as Rt,a7 as $a,b2 as Ma,b3 as wa,E as Sa,b4 as Aa,aB as La,aP as $t,b5 as Ea,b6 as Ca,ar as Ta,b7 as Ft,b8 as Ua,b9 as ja,ba as Na,bb as Ia,bc as Da,bd as za,be as Pa,bf as qa,bg as Oa,aO as Va,e as u,a5 as Ra,bh as Fa,p as Ee,l as N,n,o as l,q as d,aS as Mt,t as ee,a as p,m as Ce,bi as Ba,i as y,c as ne,f as se,bj as Ha,bk as be,Q as ae,bl as He,aT as Ue,ah as _e,bm as Bt,aR as Ye,bn as Xa,a1 as Ht,bo as Ya}from"../chunks/BGLDHNfr.js";import{i as q,l as ye,p as xe,s as we}from"../chunks/BxTBcEuA.js";function Wa(i,t,e){ce&&et();var a=i,s=zt,v,o,c=null,h=da()?ca:ua;function m(){v&&yt(v),c!==null&&(c.lastChild.remove(),a.before(c),c=null),v=o}at(()=>{if(h(s,s=t())){var k=a,_=Dt();_&&(c=document.createDocumentFragment(),c.append(k=rt())),o=Fe(()=>e(k)),_?Oe.add_callback(m):m()}}),ce&&(a=ze)}function Ge(i,t){return t}function Ga(i,t,e){for(var a=i.items,s=[],v=t.length,o=0;o<v;o++)xa(t[o].e,s,!0);var c=v>0&&s.length===0&&e!==null;if(c){var h=e.parentNode;ya(h),h.append(e),a.clear(),Ie(i,t[0].prev,t[v-1].next)}ka(s,()=>{for(var m=0;m<v;m++){var k=t[m];c||(a.delete(k.k),Ie(i,k.prev,k.next)),We(k.e,!c)}})}function Be(i,t,e,a,s,v=null){var o=i,c={flags:t,items:new Map,first:null},h=(t&Rt)!==0;if(h){var m=i;o=ce?Qe(Vt(m)):m.appendChild(rt())}ce&&et();var k=null,_=!1,f=new Map,w=fa(()=>{var j=e();return qt(j)?j:j==null?[]:Pt(j)}),b,A;function x(){Ka(A,b,c,f,o,s,t,a,e),v!==null&&(b.length===0?k?kt(k):k=Fe(()=>v(o)):k!==null&&yt(k,()=>{k=null}))}at(()=>{A??=Ot,b=r(w);var j=b.length;if(_&&j===0)return;_=j===0;let E=!1;if(ce){var Y=pa(o)===ga;Y!==(j===0)&&(o=St(),Qe(o),Ve(!1),E=!0)}if(ce){for(var T=null,O,g=0;g<j;g++){if(ze.nodeType===ha&&ze.data===ma){o=ze,E=!0,Ve(!1);break}var $=b[g],I=a($,g);O=xt(ze,c,T,null,$,I,g,s,t,e),c.items.set(I,O),T=O}j>0&&Qe(St())}if(ce)j===0&&v&&(k=Fe(()=>v(o)));else if(Dt()){var G=new Set,U=Oe;for(g=0;g<j;g+=1){$=b[g],I=a($,g);var P=c.items.get(I)??f.get(I);P?(t&(nt|lt))!==0&&Xt(P,$,g,t):(O=xt(null,c,null,null,$,I,g,s,t,e,!0),f.set(I,O)),G.add(I)}for(const[H,ve]of c.items)G.has(H)||U.skipped_effects.add(ve.e);U.add_callback(x)}else x();E&&Ve(!0),r(w)}),ce&&(o=ze)}function Ka(i,t,e,a,s,v,o,c,h){var m=(o&Ma)!==0,k=(o&(nt|lt))!==0,_=t.length,f=e.items,w=e.first,b=w,A,x=null,j,E=[],Y=[],T,O,g,$;if(m)for($=0;$<_;$+=1)T=t[$],O=c(T,$),g=f.get(O),g!==void 0&&(g.a?.measure(),(j??=new Set).add(g));for($=0;$<_;$+=1){if(T=t[$],O=c(T,$),g=f.get(O),g===void 0){var I=a.get(O);if(I!==void 0){a.delete(O),f.set(O,I);var G=x?x.next:b;Ie(e,x,I),Ie(e,I,G),pt(I,G,s),x=I}else{var U=b?b.e.nodes_start:s;x=xt(U,e,x,x===null?e.first:x.next,T,O,$,v,o,h)}f.set(O,x),E=[],Y=[],b=x.next;continue}if(k&&Xt(g,T,$,o),(g.e.f&ft)!==0&&(kt(g.e),m&&(g.a?.unfix(),(j??=new Set).delete(g))),g!==b){if(A!==void 0&&A.has(g)){if(E.length<Y.length){var P=Y[0],H;x=P.prev;var ve=E[0],te=E[E.length-1];for(H=0;H<E.length;H+=1)pt(E[H],P,s);for(H=0;H<Y.length;H+=1)A.delete(Y[H]);Ie(e,ve.prev,te.next),Ie(e,x,ve),Ie(e,te,P),b=P,x=te,$-=1,E=[],Y=[]}else A.delete(g),pt(g,b,s),Ie(e,g.prev,g.next),Ie(e,g,x===null?e.first:x.next),Ie(e,x,g),x=g;continue}for(E=[],Y=[];b!==null&&b.k!==O;)(b.e.f&ft)===0&&(A??=new Set).add(b),Y.push(b),b=b.next;if(b===null)continue;g=b}E.push(g),x=g,b=g.next}if(b!==null||A!==void 0){for(var F=A===void 0?[]:Pt(A);b!==null;)(b.e.f&ft)===0&&F.push(b),b=b.next;var V=F.length;if(V>0){var D=(o&Rt)!==0&&_===0?s:null;if(m){for($=0;$<V;$+=1)F[$].a?.measure();for($=0;$<V;$+=1)F[$].a?.fix()}Ga(e,F,D)}}m&&$a(()=>{if(j!==void 0)for(g of j)g.a?.apply()}),i.first=e.first&&e.first.e,i.last=x&&x.e;for(var S of a.values())We(S.e);a.clear()}function Xt(i,t,e,a){(a&nt)!==0&&Lt(i.v,t),(a&lt)!==0?Lt(i.i,e):i.i=e}function xt(i,t,e,a,s,v,o,c,h,m,k){var _=(h&nt)!==0,f=(h&_a)===0,w=_?f?ge(s,!1,!1):At(s):s,b=(h&lt)===0?o:At(o),A={i:b,v:w,k:v,a:null,e:null,prev:e,next:a};try{if(i===null){var x=document.createDocumentFragment();x.append(i=rt())}return A.e=Fe(()=>c(i,w,b,m),ce),A.e.prev=e&&e.e,A.e.next=a&&a.e,e===null?k||(t.first=A):(e.next=A,e.e.next=A.e),a!==null&&(a.prev=A,a.e.prev=A.e),A}finally{}}function pt(i,t,e){for(var a=i.next?i.next.e.nodes_start:e,s=t?t.e.nodes_start:e,v=i.e.nodes_start;v!==null&&v!==a;){var o=ba(v);s.before(v),v=o}}function Ie(i,t,e){t===null?i.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function $e(i,t,e,a,s){ce&&et();var v=t.$$slots?.[e],o=!1;v===!0&&(v=t.children,o=!0),v===void 0||v(i,o?()=>a:a)}function Ja(i,t,e,a,s,v){let o=ce;ce&&et();var c,h,m=null;ce&&ze.nodeType===wa&&(m=ze,et());var k=ce?ze:i,_;at(()=>{const f=t()||null;var w=Aa;f!==c&&(_&&(f===null?yt(_,()=>{_=null,h=null}):f===h?kt(_):We(_)),f&&f!==h&&(_=Fe(()=>{if(m=ce?m:document.createElementNS(w,f),La(m,m),a){ce&&sa(f)&&m.append(document.createComment(""));var b=ce?Vt(m):m.appendChild(rt());ce&&(b===null?Ve(!1):Qe(b)),a(m,b)}Ot.nodes_end=m,k.before(m)})),c=f,c&&(h=c))},Sa),o&&(Ve(!0),Qe(k))}function Qa(i,t){var e=void 0,a;at(()=>{e!==(e=t())&&(a&&(We(a),a=null),e&&(a=Fe(()=>{$t(()=>e(i))})))})}function Yt(i){var t,e,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(t=0;t<s;t++)i[t]&&(e=Yt(i[t]))&&(a&&(a+=" "),a+=e)}else for(e in i)i[e]&&(a&&(a+=" "),a+=e);return a}function Za(){for(var i,t,e=0,a="",s=arguments.length;e<s;e++)(i=arguments[e])&&(t=Yt(i))&&(a&&(a+=" "),a+=t);return a}function es(i){return typeof i=="object"?Za(i):i??""}const Et=[...` 	
\r\f \v\uFEFF`];function ts(i,t,e){var a=i==null?"":""+i;if(t&&(a=a?a+" "+t:t),e){for(var s in e)if(e[s])a=a?a+" "+s:s;else if(a.length)for(var v=s.length,o=0;(o=a.indexOf(s,o))>=0;){var c=o+v;(o===0||Et.includes(a[o-1]))&&(c===a.length||Et.includes(a[c]))?a=(o===0?"":a.substring(0,o))+a.substring(c+1):o=c}}return a===""?null:a}function Ct(i,t=!1){var e=t?" !important;":";",a="";for(var s in i){var v=i[s];v!=null&&v!==""&&(a+=" "+s+": "+v+e)}return a}function gt(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function as(i,t){if(t){var e="",a,s;if(Array.isArray(t)?(a=t[0],s=t[1]):a=t,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var v=!1,o=0,c=!1,h=[];a&&h.push(...Object.keys(a).map(gt)),s&&h.push(...Object.keys(s).map(gt));var m=0,k=-1;const A=i.length;for(var _=0;_<A;_++){var f=i[_];if(c?f==="/"&&i[_-1]==="*"&&(c=!1):v?v===f&&(v=!1):f==="/"&&i[_+1]==="*"?c=!0:f==='"'||f==="'"?v=f:f==="("?o++:f===")"&&o--,!c&&v===!1&&o===0){if(f===":"&&k===-1)k=_;else if(f===";"||_===A-1){if(k!==-1){var w=gt(i.substring(m,k).trim());if(!h.includes(w)){f!==";"&&_++;var b=i.substring(m,_).trim();e+=" "+b+";"}}m=_+1,k=-1}}}}return a&&(e+=Ct(a)),s&&(e+=Ct(s,!0)),e=e.trim(),e===""?null:e}return i==null?null:String(i)}function pe(i,t,e,a,s,v){var o=i.__className;if(ce||o!==e||o===void 0){var c=ts(e,a,v);(!ce||c!==i.getAttribute("class"))&&(c==null?i.removeAttribute("class"):t?i.className=c:i.setAttribute("class",c)),i.__className=e}else if(v&&s!==v)for(var h in v){var m=!!v[h];(s==null||m!==!!s[h])&&i.classList.toggle(h,m)}return v}function ht(i,t={},e,a){for(var s in e){var v=e[s];t[s]!==v&&(e[s]==null?i.style.removeProperty(s):i.style.setProperty(s,v,a))}}function ot(i,t,e,a){var s=i.__style;if(ce||s!==t){var v=as(t,a);(!ce||v!==i.getAttribute("style"))&&(v==null?i.removeAttribute("style"):i.style.cssText=v),i.__style=t}else a&&(Array.isArray(a)?(ht(i,e?.[0],a[0]),ht(i,e?.[1],a[1],"important")):ht(i,e,a));return a}function it(i,t,e=!1){if(i.multiple){if(t==null)return;if(!qt(t))return Ea();for(var a of i.options)a.selected=t.includes(Ze(a));return}for(a of i.options){var s=Ze(a);if(Ca(s,t)){a.selected=!0;return}}(!e||t!==void 0)&&(i.selectedIndex=-1)}function Wt(i){var t=new MutationObserver(()=>{it(i,i.__value)});t.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ta(()=>{t.disconnect()})}function wt(i,t,e=t){var a=!0;Ft(i,"change",s=>{var v=s?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(v),Ze);else{var c=i.querySelector(v)??i.querySelector("option:not([disabled])");o=c&&Ze(c)}e(o)}),$t(()=>{var s=t();if(it(i,s,a),a&&s===void 0){var v=i.querySelector(":checked");v!==null&&(s=Ze(v),e(s))}i.__value=s,a=!1}),Wt(i)}function Ze(i){return"__value"in i?i.__value:i.value}const Ke=Symbol("class"),Je=Symbol("style"),Gt=Symbol("is custom element"),Kt=Symbol("is html");function ss(i){if(ce){var t=!1,e=()=>{if(!t){if(t=!0,i.hasAttribute("value")){var a=i.value;Re(i,"value",null),i.value=a}if(i.hasAttribute("checked")){var s=i.checked;Re(i,"checked",null),i.checked=s}}};i.__on_r=e,Ia(e),Da()}}function is(i,t){t?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function Re(i,t,e,a){var s=Jt(i);ce&&(s[t]=i.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&i.nodeName==="LINK")||s[t]!==(s[t]=e)&&(t==="loading"&&(i[qa]=e),e==null?i.removeAttribute(t):typeof e!="string"&&Qt(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function rs(i,t,e,a,s=!1,v=!1){if(ce&&s&&i.tagName==="INPUT"){var o=i,c=o.type==="checkbox"?"defaultChecked":"defaultValue";c in e||ss(o)}var h=Jt(i),m=h[Gt],k=!h[Kt];let _=ce&&m;_&&Ve(!1);var f=t||{},w=i.tagName==="OPTION";for(var b in t)b in e||(e[b]=null);e.class?e.class=es(e.class):e[Ke]&&(e.class=null),e[Je]&&(e.style??=null);var A=Qt(i);for(const g in e){let $=e[g];if(w&&g==="value"&&$==null){i.value=i.__value="",f[g]=$;continue}if(g==="class"){var x=i.namespaceURI==="http://www.w3.org/1999/xhtml";pe(i,x,$,a,t?.[Ke],e[Ke]),f[g]=$,f[Ke]=e[Ke];continue}if(g==="style"){ot(i,$,t?.[Je],e[Je]),f[g]=$,f[Je]=e[Je];continue}var j=f[g];if(!($===j&&!($===void 0&&i.hasAttribute(g)))){f[g]=$;var E=g[0]+g[1];if(E!=="$$")if(E==="on"){const I={},G="$$"+g;let U=g.slice(2);var Y=na(U);if(ia(U)&&(U=U.slice(0,-7),I.capture=!0),!Y&&j){if($!=null)continue;i.removeEventListener(U,f[G],I),f[G]=null}if($!=null)if(Y)i[`__${U}`]=$,tt([U]);else{let P=function(H){f[g].call(this,H)};f[G]=ra(U,i,P,I)}else Y&&(i[`__${U}`]=void 0)}else if(g==="style")Re(i,g,$);else if(g==="autofocus")Na(i,!!$);else if(!m&&(g==="__value"||g==="value"&&$!=null))i.value=i.__value=$;else if(g==="selected"&&w)is(i,$);else{var T=g;k||(T=la(T));var O=T==="defaultValue"||T==="defaultChecked";if($==null&&!m&&!O)if(h[g]=null,T==="value"||T==="checked"){let I=i;const G=t===void 0;if(T==="value"){let U=I.defaultValue;I.removeAttribute(T),I.defaultValue=U,I.value=I.__value=G?U:null}else{let U=I.defaultChecked;I.removeAttribute(T),I.defaultChecked=U,I.checked=G?U:!1}}else i.removeAttribute(g);else O||A.includes(T)&&(m||typeof $!="string")?(i[T]=$,T in h&&(h[T]=zt)):typeof $!="function"&&Re(i,T,$)}}}return _&&Ve(!0),f}function Tt(i,t,e=[],a=[],s,v=!1,o=!1){Ua(e,a,c=>{var h=void 0,m={},k=i.nodeName==="SELECT",_=!1;if(at(()=>{var w=t(...c.map(r)),b=rs(i,h,w,s,v,o);_&&k&&"value"in w&&it(i,w.value);for(let x of Object.getOwnPropertySymbols(m))w[x]||We(m[x]);for(let x of Object.getOwnPropertySymbols(w)){var A=w[x];x.description===ja&&(!h||A!==h[x])&&(m[x]&&We(m[x]),m[x]=Fe(()=>Qa(i,()=>A))),b[x]=A}h=b}),k){var f=i;$t(()=>{it(f,h.value,!0),Wt(f)})}_=!0})}function Jt(i){return i.__attributes??={[Gt]:i.nodeName.includes("-"),[Kt]:i.namespaceURI===za}}var Ut=new Map;function Qt(i){var t=i.getAttribute("is")||i.nodeName,e=Ut.get(t);if(e)return e;Ut.set(t,e=[]);for(var a,s=i,v=Element.prototype;v!==s;){a=Oa(s);for(var o in a)a[o].set&&e.push(o);s=Pa(s)}return e}function ls(i,t,e=t){var a=new WeakSet;Ft(i,"input",async s=>{var v=s?i.defaultValue:i.value;if(v=mt(i)?_t(v):v,e(v),Oe!==null&&a.add(Oe),await Va(),v!==(v=t())){var o=i.selectionStart,c=i.selectionEnd;i.value=v??"",c!==null&&(i.selectionStart=o,i.selectionEnd=Math.min(c,i.value.length))}}),(ce&&i.defaultValue!==i.value||u(t)==null&&i.value)&&(e(mt(i)?_t(i.value):i.value),Oe!==null&&a.add(Oe)),Ra(()=>{var s=t();if(i===document.activeElement){var v=Fa??Oe;if(a.has(v))return}mt(i)&&s===_t(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function mt(i){var t=i.type;return t==="number"||t==="range"}function _t(i){return i===""?null:+i}const vt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function ns(){return Object.keys(vt)}function os(i){return vt[i]?.displayName||i}function bt(i){return i in vt}class vs{displayMode;theme;constructor(t="prussian-blue",e="system"){this.displayMode=e,this.theme=bt(t)?t:"prussian-blue"}getTheme(){const t=this.getEffectiveShade();return`${this.theme}-${t}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(t){return bt(t)?(this.theme=t,!0):!1}setDisplayMode(t){this.displayMode=t}getAvailableThemes(){return Object.keys(vt)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(t){this.displayMode=t?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t={theme:this.theme,displayMode:this.displayMode};localStorage.setItem("tomeclicker_config",JSON.stringify(t))}catch(t){console.error("Failed to save config to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_config");if(t){const e=JSON.parse(t);return e.theme&&bt(e.theme)&&(this.theme=e.theme),e.displayMode&&(this.displayMode=e.displayMode),!0}return!1}catch(t){return console.error("Error loading config from localStorage:",t),!1}}}class ds{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;stats;trainingActions;meditationActions;idleExpRate;adventureModeUnlocked;meditationUnlocked;constructor(t){this.name=t||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="discipline"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.clickMultiplier*=Math.pow(2,t.currentLevel)),this.recalculateIdleExpRate()}recalculateIdleExpRate(){this.idleExpRate=0;for(const e of Object.values(this.upgrades))e.effectType==="idleExp"&&(this.idleExpRate+=e.effectValue*e.currentLevel);const t=this.upgrades.discipline;t&&t.currentLevel>0&&(this.idleExpRate*=Math.pow(2,t.currentLevel))}getTrainingSpeedMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingSpeed"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}getTrainingCostMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="trainingCost"&&(t*=Math.pow(1-e.effectValue,e.currentLevel));return t}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const t of Object.values(this.upgrades))if(this.canPurchaseUpgrade(t.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(t){const e=this.initializeUpgrades();for(const a in e)t[a]&&(e[a].currentLevel=t[a].currentLevel);this.upgrades=e}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5,minLevel:1},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1,minLevel:1},"passive-learning":{id:"passive-learning",name:"Passive Learning",description:"Gain insight even when not practicing",effect:"+1 EXP per second",baseCost:5e3,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"idleExp",effectValue:1,minLevel:2},"ambient-wisdom":{id:"ambient-wisdom",name:"Ambient Wisdom",description:"Experience accumulates naturally over time",effect:"+5 EXP per second",baseCost:1e5,costMultiplier:1.25,maxLevel:50,currentLevel:0,effectType:"idleExp",effectValue:5,minLevel:2},"efficient-training":{id:"efficient-training",name:"Efficient Training",description:"Complete training exercises faster",effect:"-10% training time",baseCost:1e4,costMultiplier:1.3,maxLevel:10,currentLevel:0,effectType:"trainingSpeed",effectValue:.1,minLevel:3},"cost-reduction":{id:"cost-reduction",name:"Cost Reduction",description:"Training requires less EXP to start",effect:"-20% training cost",baseCost:15e3,costMultiplier:1.35,maxLevel:5,currentLevel:0,effectType:"trainingCost",effectValue:.2,minLevel:3},discipline:{id:"discipline",name:"Discipline",description:"Unified focus accelerates all progress",effect:"2x all EXP gain",baseCost:1e3,costMultiplier:100,maxLevel:10,currentLevel:0,effectType:"clickMultiplier",effectValue:2,minLevel:1}}}initializeTrainingActions(){return{"train-strength":{id:"train-strength",name:"Lift Heavy Objects",description:"Build raw physical power",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"strength"},"train-dexterity":{id:"train-dexterity",name:"Practice Quick Movements",description:"Improve agility and reflexes",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"dexterity"},"train-intelligence":{id:"train-intelligence",name:"Study Ancient Texts",description:"Expand knowledge and understanding",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"intelligence"},"train-wisdom":{id:"train-wisdom",name:"Meditate on Meaning",description:"Deepen insight and awareness",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"wisdom"}}}initializeMeditationActions(){return{"meditate-future":{id:"meditate-future",name:"Meditate on Your Future",description:"Unlock the path to adventure",progress:0,baseDuration:6e4,duration:6e4,expCost:50,isActive:!1,lastUpdate:Date.now(),oneTime:!0,completed:!1},disassociate:{id:"disassociate",name:"Disassociate",description:"Take a mental health day. Increases offline progress time.",progress:0,baseDuration:3e4,duration:3e4,expCost:100,isActive:!1,lastUpdate:Date.now(),oneTime:!1}}}startIdleAction(t,e){const a=t[e];if(!a||a.oneTime&&a.completed)return!1;let s=a.expCost;return a.trainsStat&&(s=Math.floor(a.expCost*this.getTrainingCostMultiplier())),this.exp<s?!1:(this.exp-=s,a.isActive=!0,a.progress=0,a.lastUpdate=Date.now(),a.trainsStat&&(a.duration=Math.floor(a.baseDuration*this.getTrainingSpeedMultiplier())),!0)}updateIdleActions(){const t=Date.now();for(const e of Object.values(this.trainingActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeTrainingAction(e.id)}for(const e of Object.values(this.meditationActions))if(e.isActive){const a=t-e.lastUpdate;e.progress+=a/e.duration,e.lastUpdate=t,e.progress>=1&&this.completeMeditationAction(e.id)}}completeTrainingAction(t){const e=this.trainingActions[t];!e||!e.isActive||(e.trainsStat&&this.stats[e.trainsStat]++,e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}completeMeditationAction(t){const e=this.meditationActions[t];!e||!e.isActive||(t==="meditate-future"&&(this.adventureModeUnlocked=!0,e.completed=!0),e.isActive=!1,e.progress=0,e.lastUpdate=Date.now())}stopIdleAction(t,e){const a=t[e];a&&(a.isActive=!1,a.progress=0,a.lastUpdate=Date.now())}showTraining(){return this.level>=3}showStats(){return this.level>=3}showMeditation(){return this.stats.strength>=5&&this.stats.dexterity>=5&&this.stats.intelligence>=5&&this.stats.wisdom>=5}showAdventure(){return this.adventureModeUnlocked}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let t=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(t+=e.effectValue*e.currentLevel);return t}markIntegrityViolation(t){this.saveIntegrity=`compromised-${t}-${Date.now()}`,console.warn(`Game integrity violation detected: ${t}`)}addExp(t){this.exp+=t,this.lifetimeExp+=t}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(t){const e=this.upgrades[t];return e?t==="discipline"?e.baseCost*Math.pow(e.costMultiplier,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return this.exp>=e}canPurchaseUpgrade(t){const e=this.upgrades[t];return e?this.canAffordUpgrade(t)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(t){if(!this.canPurchaseUpgrade(t))return!1;const e=this.upgrades[t],a=this.getUpgradeCost(t);return this.exp-=a,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(t){let e=0;for(let a=0;a<t.length;a++){const s=t.charCodeAt(a);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(t){const e="tomeclicker-save-key";let a="";for(let s=0;s<t.length;s++)a+=String.fromCharCode(t.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(t){try{let e;typeof atob>"u"?e=Buffer.from(t,"base64").toString():e=atob(t);const a="tomeclicker-save-key";let s="";for(let v=0;v<e.length;v++)s+=String.fromCharCode(e.charCodeAt(v)^a.charCodeAt(v%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(t=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,stats:this.stats,trainingActions:this.trainingActions,meditationActions:this.meditationActions,idleExpRate:this.idleExpRate,adventureModeUnlocked:this.adventureModeUnlocked,meditationUnlocked:this.meditationUnlocked,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(e);if(t){const s=this.generateSaveHash(a),v=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:v,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(t){try{const e=JSON.parse(t);let a,s="";if(e.encrypted===!1)a=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const v=this.decryptSave(e.data);a=JSON.parse(v)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.stats=a.stats||{strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=a.trainingActions||this.initializeTrainingActions(),this.meditationActions=a.meditationActions||this.initializeMeditationActions(),this.idleExpRate=a.idleExpRate||0,this.adventureModeUnlocked=a.adventureModeUnlocked||!1,this.meditationUnlocked=a.meditationUnlocked||!1,this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(t){return typeof t.name=="string"&&typeof t.exp=="number"&&typeof t.lifetimeExp=="number"&&(typeof t.level=="number"||t.level===void 0)&&typeof t.clickMultiplier=="number"&&typeof t.upgrades=="object"&&t.exp<=t.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const t=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(t)}; expires=${e}; path=/; SameSite=Lax`}catch(t){console.error("Failed to save to cookies:",t)}}loadFromCookies(){if(typeof document>"u")return!1;try{const t=document.cookie.split(";");for(const e of t){const[a,s]=e.trim().split("=");if(a==="tomeclicker_save"&&s){const v=this.importSave(decodeURIComponent(s));return v.success?!0:(console.error("Failed to load save from cookies:",v.error),!1)}}return!1}catch(t){return console.error("Error loading from cookies:",t),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const t=this.exportSave(!0);localStorage.setItem("tomeclicker_save",t)}catch(t){console.error("Failed to save to localStorage:",t)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const t=localStorage.getItem("tomeclicker_save");if(t){const e=this.importSave(t);return e.success?!0:(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(t){return console.error("Error loading from localStorage:",t),!1}}autoSave(){this.saveToLocalStorage()}hardReset(t=!0){const e=t?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=e,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var cs=N('<div class="progress-container svelte-1xm1ks6"><div class="progress-bar svelte-1xm1ks6"></div></div>'),us=N('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function fs(i,t){Ee(t,!0);const e=Mt(()=>{if(t.game.level<2)return null;t.game.exp;const _=t.game.lifetimeExp,f=t.game.level;return _<50?{progress:_/50}:f<3?{progress:f/3}:f<5?{progress:f/5}:f<7?{progress:f/7}:f<10?{progress:f/10}:null});var a=us(),s=n(a),v=n(s),o=n(v);l(v);var c=d(v,2),h=n(c);l(c),l(s);var m=d(s,2);{var k=_=>{var f=cs(),w=n(f);l(f),ee(()=>ot(w,`width: ${r(e).progress*100}%`)),p(_,f)};q(m,_=>{r(e)&&_(k)})}l(a),ee(_=>{M(o,`EXP: ${_??""}`),M(h,`Level: ${t.game.level??""}`)},[()=>Math.floor(t.game.exp).toLocaleString()]),p(i,a),Ce()}/**
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
 */const ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var gs=Ba("<svg><!><!></svg>");function Se(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]),a=ye(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ee(t,!1);let s=xe(t,"name",8,void 0),v=xe(t,"color",8,"currentColor"),o=xe(t,"size",8,24),c=xe(t,"strokeWidth",8,2),h=xe(t,"absoluteStrokeWidth",8,!1),m=xe(t,"iconNode",24,()=>[]);const k=(...b)=>b.filter((A,x,j)=>!!A&&j.indexOf(A)===x).join(" ");Pe();var _=gs();Tt(_,(b,A)=>({...ps,...a,width:o(),height:o(),stroke:v(),"stroke-width":b,class:A}),[()=>(y(h()),y(c()),y(o()),u(()=>h()?Number(c())*24/Number(o()):c())),()=>(y(s()),y(e),u(()=>k("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var f=n(_);Be(f,1,m,Ge,(b,A)=>{var x=Mt(()=>Ha(r(A),2));let j=()=>r(x)[0],E=()=>r(x)[1];var Y=ne(),T=se(Y);Ja(T,j,!0,(O,g)=>{Tt(O,()=>({...E()}))}),p(b,Y)});var w=d(f);$e(w,t,"default",{}),l(_),p(i,_),Ce()}function hs(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];Se(i,we({name:"brain"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function ms(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];Se(i,we({name:"chart-column"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function _s(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];Se(i,we({name:"circle-check-big"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function bs(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];Se(i,we({name:"circle-question-mark"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function xs(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];Se(i,we({name:"compass"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function jt(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Se(i,we({name:"download"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function ys(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];Se(i,we({name:"dumbbell"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function ks(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];Se(i,we({name:"info"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function Zt(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];Se(i,we({name:"mouse-pointer"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function ea(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Se(i,we({name:"save"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function $s(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Se(i,we({name:"settings"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function Ms(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];Se(i,we({name:"square-pen"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function ws(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Se(i,we({name:"trending-up"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function st(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];Se(i,we({name:"triangle-alert"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}function Nt(i,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];Se(i,we({name:"upload"},()=>e,{get iconNode(){return a},children:(s,v)=>{var o=ne(),c=se(o);$e(c,t,"default",{}),p(s,o)},$$slots:{default:!0}}))}var Ss=N('<button class="svelte-igdjqh"><p><!></p></button>'),As=N('<button class="svelte-igdjqh"><p><!></p></button>'),Ls=N('<button class="svelte-igdjqh"><p><!></p></button>'),Es=N('<button class="svelte-igdjqh"><p><!></p></button>'),Cs=N('<button class="svelte-igdjqh"><p><!></p></button>'),Ts=N('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <!> <!> <!> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function Us(i,t){Ee(t,!1);const e=ge();let a=xe(t,"game",12);be(()=>y(a()),()=>{ae(e,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(X=>a().canAffordUpgrade(X.id))))}),He(),Pe();var s=Ts(),v=n(s),o=n(v),c=n(o,!0);l(o),l(v);var h=d(v,2),m=n(h),k=n(m);let _;var f=n(k);Zt(f,{size:24}),l(k),l(m);var w=d(m,2);{var b=X=>{var J=Ss(),R=n(J);let Z;var L=n(R);ws(L,{size:24}),l(R),l(J),ee(z=>Z=pe(R,1,"svelte-igdjqh",null,Z,z),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&r(e)})]),me("click",J,()=>a(a().menu="upgrades",!0)),p(X,J)};q(w,X=>{y(a()),u(()=>a().showUpgrades())&&X(b)})}var A=d(w,2);{var x=X=>{var J=As(),R=n(J);let Z;var L=n(R);ys(L,{size:24}),l(R),l(J),ee(z=>Z=pe(R,1,"svelte-igdjqh",null,Z,z),[()=>({red:a().menu==="training"})]),me("click",J,()=>a(a().menu="training",!0)),p(X,J)};q(A,X=>{y(a()),u(()=>a().showTraining())&&X(x)})}var j=d(A,2);{var E=X=>{var J=Ls(),R=n(J);let Z;var L=n(R);ms(L,{size:24}),l(R),l(J),ee(z=>Z=pe(R,1,"svelte-igdjqh",null,Z,z),[()=>({red:a().menu==="stats"})]),me("click",J,()=>a(a().menu="stats",!0)),p(X,J)};q(j,X=>{y(a()),u(()=>a().showStats())&&X(E)})}var Y=d(j,2);{var T=X=>{var J=Es(),R=n(J);let Z;var L=n(R);hs(L,{size:24}),l(R),l(J),ee(z=>Z=pe(R,1,"svelte-igdjqh",null,Z,z),[()=>({red:a().menu==="meditation"})]),me("click",J,()=>a(a().menu="meditation",!0)),p(X,J)};q(Y,X=>{y(a()),u(()=>a().showMeditation())&&X(T)})}var O=d(Y,2);{var g=X=>{var J=Cs(),R=n(J);let Z;var L=n(R);xs(L,{size:24}),l(R),l(J),ee(z=>Z=pe(R,1,"svelte-igdjqh",null,Z,z),[()=>({red:a().menu==="adventure"})]),me("click",J,()=>a(a().menu="adventure",!0)),p(X,J)};q(O,X=>{y(a()),u(()=>a().showAdventure())&&X(g)})}var $=d(O,2),I=n($);let G;var U=n(I);Ms(U,{size:24}),l(I),l($);var P=d($,2),H=n(P);let ve;var te=n(H);bs(te,{size:24}),l(H),l(P);var F=d(P,2),V=n(F);let D;var S=n(V);ea(S,{size:24}),l(V),l(F);var C=d(F,2),W=n(C);let K;var ie=n(W);$s(ie,{size:24}),l(W),l(C);var oe=d(C,2),B=n(oe);let Q;var ue=n(B);ks(ue,{size:24}),l(B),l(oe),l(h),l(s),ee((X,J,R,Z,L,z)=>{M(c,(y(a()),u(()=>a().menu))),_=pe(k,1,"svelte-igdjqh",null,_,X),G=pe(I,1,"svelte-igdjqh",null,G,J),ve=pe(H,1,"svelte-igdjqh",null,ve,R),D=pe(V,1,"svelte-igdjqh",null,D,Z),K=pe(W,1,"svelte-igdjqh",null,K,L),Q=pe(B,1,"svelte-igdjqh",null,Q,z)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),me("click",m,()=>a(a().menu="practice",!0)),me("click",$,()=>a(a().menu="story",!0)),me("click",P,()=>a(a().menu="help",!0)),me("click",F,()=>a(a().menu="saves",!0)),me("click",C,()=>a(a().menu="settings",!0)),me("click",oe,()=>a(a().menu="about",!0)),p(i,s),Ce()}function It(i,t){if(!t())return;const e=t().getClickValue();t().addExp(e),t(t())}var js=N('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points" class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div></div>');function Ns(i,t){Ee(t,!0);let e=xe(t,"game",15),a=Mt(()=>e()?e().updateClickText():"Loading...");var s=js(),v=n(s),o=n(v);o.__click=[It,e],o.__touchstart=[It,e];var c=n(o),h=n(c);Zt(h,{size:48});var m=d(h,2,!0);l(c),l(o),l(v),l(s),ee(()=>M(m,r(a))),p(i,s),Ce()}tt(["click","touchstart"]);var Is=N('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),Ds=N('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),zs=N('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),Ps=N('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function qs(i,t){Ee(t,!1);const e=ge(),a=ge();let s=xe(t,"game",8),v=xe(t,"config",8),o=ge(null);function c(D){ae(o,D)}function h(){r(o)&&s().purchaseUpgrade(r(o).id)&&(ae(o,s().upgrades[r(o).id]),s().autoSave())}function m(D){return D.toLocaleString()}function k(){s().levelUp()&&s().autoSave()}v(),be(()=>y(s()),()=>{ae(e,Object.values(s().upgrades).filter(D=>!D.minLevel||D.minLevel<=s().level).filter(D=>D.id!=="discipline"))}),be(()=>y(s()),()=>{ae(a,s().upgrades.discipline)}),He(),Pe();var _=Ps(),f=d(n(_),2),w=n(f),b=n(w);let A;var x=d(n(b),2),j=n(x);l(x);var E=d(x,2),Y=n(E);l(E),l(b);var T=d(b,2);let O;var g=n(T),$=n(g,!0);l(g);var I=d(g,2),G=n(I);l(I);var U=d(I,2),P=n(U);l(U),l(T);var H=d(T,2);Be(H,1,()=>r(e),D=>D.id,(D,S)=>{var C=Is();let W;var K=n(C),ie=n(K,!0);l(K);var oe=d(K,2),B=n(oe);l(oe);var Q=d(oe,2),ue=n(Q);l(Q);var X=d(Q,2),J=n(X);{var R=L=>{var z=Ue();ee(de=>M(z,`+${de??""}% click EXP per level`),[()=>(r(S),u(()=>(r(S).effectValue*100).toFixed(0)))]),p(L,z)},Z=L=>{var z=ne(),de=se(z);{var re=fe=>{var he=Ue();ee(()=>M(he,`+${r(S),u(()=>r(S).effectValue)??""} idle EXP/s per level`)),p(fe,he)},le=fe=>{var he=ne(),ke=se(he);{var Ae=Me=>{var je=Ue();ee(Ne=>M(je,`-${Ne??""}% training time per level`),[()=>(r(S),u(()=>(r(S).effectValue*100).toFixed(0)))]),p(Me,je)},Le=Me=>{var je=ne(),Ne=se(je);{var qe=Te=>{var De=Ue();ee(ct=>M(De,`-${ct??""}% training cost per level`),[()=>(r(S),u(()=>(r(S).effectValue*100).toFixed(0)))]),p(Te,De)},dt=Te=>{var De=Ue("Enhanced efficiency");p(Te,De)};q(Ne,Te=>{r(S),u(()=>r(S).effectType==="trainingCost")?Te(qe):Te(dt,!1)},!0)}p(Me,je)};q(ke,Me=>{r(S),u(()=>r(S).effectType==="trainingSpeed")?Me(Ae):Me(Le,!1)},!0)}p(fe,he)};q(de,fe=>{r(S),u(()=>r(S).effectType==="idleExp")?fe(re):fe(le,!1)},!0)}p(L,z)};q(J,L=>{r(S),u(()=>r(S).effectType==="clickMultiplier")?L(R):L(Z,!1)})}l(X),l(C),ee((L,z,de)=>{W=pe(C,1,"upgrade-btn svelte-xd3x4d",null,W,L),Re(C,"aria-label",`Select ${r(S),u(()=>r(S).name)??""} upgrade. Level ${r(S),u(()=>r(S).currentLevel)??""} of ${r(S),u(()=>r(S).maxLevel)??""}. Cost: ${z??""} EXP`),M(ie,(r(S),u(()=>r(S).name))),M(B,`Level ${r(S),u(()=>r(S).currentLevel)??""}/${r(S),u(()=>r(S).maxLevel)??""}`),M(ue,`${de??""} EXP`)},[()=>({selected:r(o)?.id===r(S).id,affordable:s().canAffordUpgrade(r(S).id),maxed:r(S).currentLevel>=r(S).maxLevel}),()=>(y(s()),r(S),u(()=>m(s().getUpgradeCost(r(S).id)))),()=>(y(s()),r(S),u(()=>m(s().getUpgradeCost(r(S).id))))]),me("click",C,()=>c(r(S))),p(D,C)}),_e(2),l(w);var ve=d(w,2),te=n(ve);{var F=D=>{var S=Ds(),C=se(S),W=n(C),K=n(W,!0);l(W);var ie=d(W,2);l(C);var oe=d(C,2),B=n(oe),Q=n(B),ue=n(Q,!0);l(Q);var X=d(Q,2),J=d(n(X));l(X);var R=d(X,2),Z=d(n(R));l(R);var L=d(R,2),z=d(n(L));l(L),l(B);var de=d(B,2),re=n(de),le=n(re);{var fe=ke=>{var Ae=Ue("MAX LEVEL");p(ke,Ae)},he=ke=>{var Ae=ne(),Le=se(Ae);{var Me=Ne=>{var qe=Ue("CANNOT AFFORD");p(Ne,qe)},je=Ne=>{var qe=Ue("PURCHASE");p(Ne,qe)};q(Le,Ne=>{y(s()),r(o),u(()=>!s().canAffordUpgrade(r(o).id))?Ne(Me):Ne(je,!1)},!0)}p(ke,Ae)};q(le,ke=>{r(o),u(()=>r(o).currentLevel>=r(o).maxLevel)?ke(fe):ke(he,!1)})}l(re),l(de),l(oe),ee((ke,Ae)=>{M(K,(r(o),u(()=>r(o).name))),M(ue,(r(o),u(()=>r(o).description))),M(J,` ${r(o),u(()=>r(o).effect)??""}`),M(Z,` ${ke??""} EXP`),M(z,` ${r(o),u(()=>r(o).currentLevel)??""}/${r(o),u(()=>r(o).maxLevel)??""}`),re.disabled=Ae},[()=>(y(s()),r(o),u(()=>m(s().getUpgradeCost(r(o).id)))),()=>(y(s()),r(o),u(()=>!s().canPurchaseUpgrade(r(o).id)))]),me("click",ie,()=>ae(o,null)),me("click",re,h),p(D,S)},V=D=>{var S=zs();p(D,S)};q(te,D=>{r(o)?D(F):D(V,!1)})}l(ve),l(f),l(_),ee((D,S,C,W,K,ie,oe)=>{A=pe(b,1,"upgrade-btn special-btn svelte-xd3x4d",null,A,D),b.disabled=S,Re(b,"aria-label",`Level up from ${y(s()),u(()=>s().level)??""} to ${y(s()),u(()=>s().level+1)??""}. Cost: ${C??""} EXP`),M(j,`Level ${y(s()),u(()=>s().level)??""} → ${y(s()),u(()=>s().level+1)??""}`),M(Y,`${W??""} EXP`),O=pe(T,1,"upgrade-btn special-btn svelte-xd3x4d",null,O,K),T.disabled=(r(a),u(()=>r(a).currentLevel>=r(a).maxLevel)),Re(T,"aria-label",`Select ${r(a),u(()=>r(a).name)??""} upgrade. Level ${r(a),u(()=>r(a).currentLevel)??""} of ${r(a),u(()=>r(a).maxLevel)??""}. Cost: ${ie??""} EXP`),M($,(r(a),u(()=>r(a).name))),M(G,`Level ${r(a),u(()=>r(a).currentLevel)??""}/${r(a),u(()=>r(a).maxLevel)??""}`),M(P,`${oe??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(y(s()),u(()=>!s().canLevelUp())),()=>(y(s()),u(()=>m(s().getLevelUpCost()))),()=>(y(s()),u(()=>m(s().getLevelUpCost()))),()=>({selected:r(o)?.id===r(a).id,affordable:s().canAffordUpgrade(r(a).id),maxed:r(a).currentLevel>=r(a).maxLevel}),()=>(y(s()),r(a),u(()=>m(s().getUpgradeCost(r(a).id)))),()=>(y(s()),r(a),u(()=>m(s().getUpgradeCost(r(a).id))))]),me("click",b,k),me("click",T,()=>c(r(a))),p(i,_),Ce()}var Os=N("<option> </option>"),Vs=N('<span class="cannot-afford svelte-iba83u"> </span>'),Rs=N('<div class="progress-container svelte-iba83u"><div class="progress-bar svelte-iba83u"></div> <div class="progress-text svelte-iba83u"> </div></div>'),Fs=N('<button class="stop-button svelte-iba83u">Stop Training</button>'),Bs=N('<button class="start-button svelte-iba83u">Start Training</button>'),Hs=N('<div class="action-info svelte-iba83u"><h3 class="svelte-iba83u"> </h3> <p class="svelte-iba83u"> </p> <p class="cost svelte-iba83u">Cost: <strong> </strong> <!></p> <p class="svelte-iba83u"> </p></div> <!> <div class="action-buttons svelte-iba83u"><!></div>',1),Xs=N('<div class="training-container svelte-iba83u"><h2 class="svelte-iba83u">Training</h2> <p class="description svelte-iba83u">Train your stats to prepare for adventure</p> <div class="training-area svelte-iba83u"><div class="stats-display svelte-iba83u"><div class="stat-item svelte-iba83u"><span class="stat-label svelte-iba83u">Strength:</span> <span class="stat-value svelte-iba83u"> </span></div> <div class="stat-item svelte-iba83u"><span class="stat-label svelte-iba83u">Dexterity:</span> <span class="stat-value svelte-iba83u"> </span></div> <div class="stat-item svelte-iba83u"><span class="stat-label svelte-iba83u">Intelligence:</span> <span class="stat-value svelte-iba83u"> </span></div> <div class="stat-item svelte-iba83u"><span class="stat-label svelte-iba83u">Wisdom:</span> <span class="stat-value svelte-iba83u"> </span></div></div> <div class="training-selector svelte-iba83u"><label for="training-select" class="svelte-iba83u">Choose Training:</label> <select id="training-select" class="svelte-iba83u"></select></div> <!></div></div>');function Ys(i,t){Ee(t,!1);const e=ge(),a=ge(),s=ge(),v=ge();let o=xe(t,"game",12),c=ge("train-strength");function h(){o().startIdleAction(o().trainingActions,r(c))&&o(o())}function m(){o().stopIdleAction(o().trainingActions,r(c)),o(o())}function k(te){const F=o().trainingActions[te];return F?Math.floor(F.expCost*o().getTrainingCostMultiplier()):0}be(()=>(y(o()),r(c)),()=>{ae(e,o().trainingActions[r(c)])}),be(()=>r(e),()=>{ae(a,r(e)?.isActive||!1)}),be(()=>r(e),()=>{ae(s,r(e)?.progress||0)}),be(()=>(y(o()),r(c)),()=>{ae(v,o().exp>=k(r(c)))}),He(),Pe();var _=Xs(),f=d(n(_),4),w=n(f),b=n(w),A=d(n(b),2),x=n(A,!0);l(A),l(b);var j=d(b,2),E=d(n(j),2),Y=n(E,!0);l(E),l(j);var T=d(j,2),O=d(n(T),2),g=n(O,!0);l(O),l(T);var $=d(T,2),I=d(n($),2),G=n(I,!0);l(I),l($),l(w);var U=d(w,2),P=d(n(U),2);ee(()=>{r(c),Bt(()=>{r(a),o()})}),Be(P,5,()=>(y(o()),u(()=>Object.values(o().trainingActions))),Ge,(te,F)=>{var V=Os(),D=n(V,!0);l(V);var S={};ee(()=>{M(D,(r(F),u(()=>r(F).name))),S!==(S=(r(F),u(()=>r(F).id)))&&(V.value=(V.__value=(r(F),u(()=>r(F).id)))??"")}),p(te,V)}),l(P),l(U);var H=d(U,2);{var ve=te=>{var F=Hs(),V=se(F),D=n(V),S=n(D,!0);l(D);var C=d(D,2),W=n(C,!0);l(C);var K=d(C,2),ie=d(n(K)),oe=n(ie);l(ie);var B=d(ie,2);{var Q=re=>{var le=Vs(),fe=n(le);l(le),ee(he=>M(fe,`(need ${he??""} more)`),[()=>(r(c),y(o()),u(()=>k(r(c))-o().exp))]),p(re,le)};q(B,re=>{r(v)||re(Q)})}l(K);var ue=d(K,2),X=n(ue);l(ue),l(V);var J=d(V,2);{var R=re=>{var le=Rs(),fe=n(le),he=d(fe,2),ke=n(he);l(he),l(le),ee((Ae,Le)=>{ot(fe,`width: ${Ae??""}%`),M(ke,`${Le??""}%`)},[()=>(r(s),u(()=>Math.min(r(s)*100,100))),()=>(r(s),u(()=>Math.floor(Math.min(r(s)*100,100))))]),p(re,le)};q(J,re=>{r(a)&&re(R)})}var Z=d(J,2),L=n(Z);{var z=re=>{var le=Fs();me("click",le,m),p(re,le)},de=re=>{var le=Bs();ee(()=>le.disabled=!r(v)),me("click",le,h),p(re,le)};q(L,re=>{r(a)?re(z):re(de,!1)})}l(Z),ee((re,le)=>{M(S,(r(e),u(()=>r(e).name))),M(W,(r(e),u(()=>r(e).description))),M(oe,`${re??""} EXP`),M(X,`Duration: ${le??""}s`)},[()=>(r(c),u(()=>k(r(c)))),()=>(r(e),u(()=>(r(e).duration/1e3).toFixed(1)))]),p(te,F)};q(H,te=>{r(e)&&te(ve)})}l(f),l(_),ee(()=>{M(x,(y(o()),u(()=>o().stats.strength))),M(Y,(y(o()),u(()=>o().stats.dexterity))),M(g,(y(o()),u(()=>o().stats.intelligence))),M(G,(y(o()),u(()=>o().stats.wisdom))),P.disabled=r(a)}),wt(P,()=>r(c),te=>ae(c,te)),p(i,_),Ce()}var Ws=N('<div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Combat Stats</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Strength</div> <div class="stat-value strength svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Physical power and damage</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Dexterity</div> <div class="stat-value dexterity svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Agility and precision</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Intelligence</div> <div class="stat-value intelligence svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Knowledge and magic</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Wisdom</div> <div class="stat-value wisdom svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Insight and awareness</div></div></div></div>'),Gs=N('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Idle EXP</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Passive EXP gain</div></div>'),Ks=N('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Speed</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base duration</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Cost</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base cost</div></div>',1),Js=N('<div class="upgrade-item svelte-1i5r50h"><span class="upgrade-name svelte-1i5r50h"> </span> <span class="upgrade-level svelte-1i5r50h"> </span></div>'),Qs=N('<p class="no-upgrades svelte-1i5r50h">No upgrades purchased yet</p>'),Zs=N('<div class="stats-container svelte-1i5r50h"><h2 class="svelte-1i5r50h">Player Stats</h2> <p class="description svelte-1i5r50h">View your progression and statistics</p> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">General</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Name</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Level</div> <div class="stat-value level svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Current EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Lifetime EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div></div></div> <!> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Progress Rates</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Click Value</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">EXP per click</div></div> <!> <!></div></div> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Upgrades Owned</h3> <div class="upgrades-list svelte-1i5r50h"><!> <!></div></div></div>');function ei(i,t){Ee(t,!1);let e=xe(t,"game",8);function a(C){return C>=1e12?(C/1e12).toFixed(2)+"T":C>=1e9?(C/1e9).toFixed(2)+"B":C>=1e6?(C/1e6).toFixed(2)+"M":C>=1e3?(C/1e3).toFixed(2)+"K":C.toFixed(2)}Pe();var s=Zs(),v=d(n(s),4),o=d(n(v),2),c=n(o),h=d(n(c),2),m=n(h,!0);l(h),l(c);var k=d(c,2),_=d(n(k),2),f=n(_,!0);l(_),l(k);var w=d(k,2),b=d(n(w),2),A=n(b,!0);l(b),l(w);var x=d(w,2),j=d(n(x),2),E=n(j,!0);l(j),l(x),l(o),l(v);var Y=d(v,2);{var T=C=>{var W=Ws(),K=d(n(W),2),ie=n(K),oe=d(n(ie),2),B=n(oe,!0);l(oe),_e(2),l(ie);var Q=d(ie,2),ue=d(n(Q),2),X=n(ue,!0);l(ue),_e(2),l(Q);var J=d(Q,2),R=d(n(J),2),Z=n(R,!0);l(R),_e(2),l(J);var L=d(J,2),z=d(n(L),2),de=n(z,!0);l(z),_e(2),l(L),l(K),l(W),ee(()=>{M(B,(y(e()),u(()=>e().stats.strength))),M(X,(y(e()),u(()=>e().stats.dexterity))),M(Z,(y(e()),u(()=>e().stats.intelligence))),M(de,(y(e()),u(()=>e().stats.wisdom)))}),p(C,W)};q(Y,C=>{y(e()),u(()=>e().level>=3)&&C(T)})}var O=d(Y,2),g=d(n(O),2),$=n(g),I=d(n($),2),G=n(I,!0);l(I),_e(2),l($);var U=d($,2);{var P=C=>{var W=Gs(),K=d(n(W),2),ie=n(K);l(K),_e(2),l(W),ee(oe=>M(ie,`${oe??""}/s`),[()=>(y(e()),u(()=>a(e().idleExpRate)))]),p(C,W)};q(U,C=>{y(e()),u(()=>e().idleExpRate>0)&&C(P)})}var H=d(U,2);{var ve=C=>{var W=Ks(),K=se(W),ie=d(n(K),2),oe=n(ie);l(ie),_e(2),l(K);var B=d(K,2),Q=d(n(B),2),ue=n(Q);l(Q),_e(2),l(B),ee((X,J)=>{M(oe,`${X??""}%`),M(ue,`${J??""}%`)},[()=>(y(e()),u(()=>(e().getTrainingSpeedMultiplier()*100).toFixed(0))),()=>(y(e()),u(()=>(e().getTrainingCostMultiplier()*100).toFixed(0)))]),p(C,W)};q(H,C=>{y(e()),u(()=>e().level>=3)&&C(ve)})}l(g),l(O);var te=d(O,2),F=d(n(te),2),V=n(F);Be(V,1,()=>(y(e()),u(()=>Object.values(e().upgrades).filter(C=>C.currentLevel>0))),Ge,(C,W)=>{var K=Js(),ie=n(K),oe=n(ie,!0);l(ie);var B=d(ie,2),Q=n(B);l(B),l(K),ee(()=>{M(oe,(r(W),u(()=>r(W).name))),M(Q,`Level ${r(W),u(()=>r(W).currentLevel)??""}`)}),p(C,K)});var D=d(V,2);{var S=C=>{var W=Qs();p(C,W)};q(D,C=>{y(e()),u(()=>Object.values(e().upgrades).filter(W=>W.currentLevel>0).length===0)&&C(S)})}l(F),l(te),l(s),ee((C,W,K)=>{M(m,(y(e()),u(()=>e().name))),M(f,(y(e()),u(()=>e().level))),M(A,C),M(E,W),M(G,K)},[()=>(y(e()),u(()=>a(e().exp))),()=>(y(e()),u(()=>a(e().lifetimeExp))),()=>(y(e()),u(()=>a(e().getClickValue())))]),p(i,s),Ce()}var ti=N('<div class="no-actions svelte-x40p30"><p class="svelte-x40p30">You have completed all available meditations.</p> <p class="hint svelte-x40p30">More will be unlocked as you progress through the game.</p></div>'),ai=N("<option> <!></option>"),si=N('<span class="cannot-afford svelte-x40p30"> </span>'),ii=N('<p class="one-time-notice svelte-x40p30"><em>This meditation can only be completed once.</em></p>'),ri=N('<div class="progress-container svelte-x40p30"><div class="progress-bar svelte-x40p30"></div> <div class="progress-text svelte-x40p30"> </div></div>'),li=N('<button class="stop-button svelte-x40p30">Stop Meditating</button>'),ni=N('<button class="start-button svelte-x40p30">Begin Meditation</button>'),oi=N('<div class="action-info svelte-x40p30"><h3 class="svelte-x40p30"> </h3> <p class="svelte-x40p30"> </p> <p class="cost svelte-x40p30">Cost: <strong> </strong> <!></p> <p class="svelte-x40p30"> </p> <!></div> <!> <div class="action-buttons svelte-x40p30"><!></div>',1),vi=N('<div class="completed-item svelte-x40p30"><span class="completed-name svelte-x40p30"> </span> <span class="completed-badge svelte-x40p30">✓ Complete</span></div>'),di=N('<div class="completed-section svelte-x40p30"><h3 class="svelte-x40p30">Completed Meditations</h3> <div class="completed-list svelte-x40p30"></div></div>'),ci=N('<div class="meditation-area svelte-x40p30"><div class="meditation-selector svelte-x40p30"><label for="meditation-select" class="svelte-x40p30">Choose Meditation:</label> <select id="meditation-select" class="svelte-x40p30"></select></div> <!></div> <!>',1),ui=N('<div class="meditation-container svelte-x40p30"><h2 class="svelte-x40p30">Meditation</h2> <p class="description svelte-x40p30">Meditate on the mysteries of the Tomes</p> <!></div>');function fi(i,t){Ee(t,!1);const e=ge(),a=ge(),s=ge(),v=ge(),o=ge(),c=ge();let h=xe(t,"game",12),m=ge("meditate-future");function k(){h().startIdleAction(h().meditationActions,r(m))&&h(h())}function _(){h().stopIdleAction(h().meditationActions,r(m)),h(h())}be(()=>y(h()),()=>{ae(e,Object.values(h().meditationActions).filter(x=>!x.oneTime||!x.completed))}),be(()=>(y(h()),r(m)),()=>{ae(a,h().meditationActions[r(m)])}),be(()=>r(a),()=>{ae(s,r(a)?.isActive||!1)}),be(()=>r(a),()=>{ae(v,r(a)?.progress||0)}),be(()=>(r(a),y(h())),()=>{ae(o,r(a)?h().exp>=r(a).expCost:!1)}),be(()=>r(a),()=>{ae(c,r(a)?.oneTime&&r(a)?.completed)}),He(),Pe();var f=ui(),w=d(n(f),4);{var b=x=>{var j=ti();p(x,j)},A=x=>{var j=ci(),E=se(j),Y=n(E),T=d(n(Y),2);ee(()=>{r(m),Bt(()=>{r(s),r(e)})}),Be(T,5,()=>r(e),Ge,(G,U)=>{var P=ai(),H=n(P),ve=d(H);{var te=V=>{var D=Ue("(One-time)");p(V,D)};q(ve,V=>{r(U),u(()=>r(U).oneTime)&&V(te)})}l(P);var F={};ee(()=>{M(H,`${r(U),u(()=>r(U).name)??""} `),F!==(F=(r(U),u(()=>r(U).id)))&&(P.value=(P.__value=(r(U),u(()=>r(U).id)))??"")}),p(G,P)}),l(T),l(Y);var O=d(Y,2);{var g=G=>{var U=oi(),P=se(U),H=n(P),ve=n(H,!0);l(H);var te=d(H,2),F=n(te,!0);l(te);var V=d(te,2),D=d(n(V)),S=n(D);l(D);var C=d(D,2);{var W=L=>{var z=si(),de=n(z);l(z),ee(()=>M(de,`(need ${r(a),y(h()),u(()=>r(a).expCost-h().exp)??""} more)`)),p(L,z)};q(C,L=>{r(o)||L(W)})}l(V);var K=d(V,2),ie=n(K);l(K);var oe=d(K,2);{var B=L=>{var z=ii();p(L,z)};q(oe,L=>{r(a),u(()=>r(a).oneTime)&&L(B)})}l(P);var Q=d(P,2);{var ue=L=>{var z=ri(),de=n(z),re=d(de,2),le=n(re);l(re),l(z),ee((fe,he)=>{ot(de,`width: ${fe??""}%`),M(le,`${he??""}%`)},[()=>(r(v),u(()=>Math.min(r(v)*100,100))),()=>(r(v),u(()=>Math.floor(Math.min(r(v)*100,100))))]),p(L,z)};q(Q,L=>{r(s)&&L(ue)})}var X=d(Q,2),J=n(X);{var R=L=>{var z=li();me("click",z,_),p(L,z)},Z=L=>{var z=ni();ee(()=>z.disabled=!r(o)),me("click",z,k),p(L,z)};q(J,L=>{r(s)?L(R):L(Z,!1)})}l(X),ee(L=>{M(ve,(r(a),u(()=>r(a).name))),M(F,(r(a),u(()=>r(a).description))),M(S,`${r(a),u(()=>r(a).expCost)??""} EXP`),M(ie,`Duration: ${L??""}s`)},[()=>(r(a),u(()=>(r(a).duration/1e3).toFixed(1)))]),p(G,U)};q(O,G=>{r(a)&&!r(c)&&G(g)})}l(E);var $=d(E,2);{var I=G=>{var U=di(),P=d(n(U),2);Be(P,5,()=>(y(h()),u(()=>Object.values(h().meditationActions).filter(H=>H.oneTime&&H.completed))),Ge,(H,ve)=>{var te=vi(),F=n(te),V=n(F,!0);l(F),_e(2),l(te),ee(()=>M(V,(r(ve),u(()=>r(ve).name)))),p(H,te)}),l(P),l(U),p(G,U)};q($,G=>{y(h()),u(()=>Object.values(h().meditationActions).some(U=>U.oneTime&&U.completed))&&G(I)})}ee(()=>T.disabled=r(s)),wt(T,()=>r(m),G=>ae(m,G)),p(x,j)};q(w,x=>{r(e),u(()=>r(e).length===0)?x(b):x(A,!1)})}l(f),p(i,f),Ce()}var pi=N(`<div class="meditation-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Your stats are sufficient. Complete the "Meditate on Your Future" meditation to
                                unlock Adventure Mode.</em></p></div>`),gi=N('<div class="training-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Visit the Training page to improve your stats.</em></p></div>'),hi=N(`<div class="locked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode</h2> <p class="locked-message svelte-gg7su4">The path to adventure is not yet clear. You must train your stats and meditate to unlock
                this path.</p> <div class="requirements-section svelte-gg7su4"><h3 class="svelte-gg7su4">Requirements</h3> <div class="requirements-grid svelte-gg7su4"><div><span class="requirement-label svelte-gg7su4">Strength:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Dexterity:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Intelligence:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Wisdom:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div></div> <!></div></div>`),mi=N(`<div class="unlocked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode Unlocked!</h2> <div class="demo-message svelte-gg7su4"><h3 class="svelte-gg7su4">Congratulations!</h3> <p class="svelte-gg7su4">You've unlocked everything in the current demo of TomeClicker.</p> <div class="demo-stats svelte-gg7su4"><p class="svelte-gg7su4">Your journey so far:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li></ul></div> <div class="coming-soon svelte-gg7su4"><h3 class="svelte-gg7su4">Coming Soon</h3> <p class="svelte-gg7su4">Future updates will include:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4">Adventure zones with unique challenges</li> <li class="svelte-gg7su4">Equipment and loot systems</li> <li class="svelte-gg7su4">More meditation techniques</li> <li class="svelte-gg7su4">Tome discovery and magic systems</li> <li class="svelte-gg7su4">Story progression and world-building</li></ul></div> <p class="thank-you svelte-gg7su4">Thank you for playing! Keep an eye on <a href="https://github.com/eaglerock/tomeclicker" target="_blank" class="svelte-gg7su4">GitHub</a> for updates.</p></div></div>`),_i=N('<div class="adventure-container svelte-gg7su4"><!></div>');function bi(i,t){Ee(t,!1);const e=ge(),a=ge();let s=xe(t,"game",8);be(()=>y(s()),()=>{ae(e,s().adventureModeUnlocked)}),be(()=>y(s()),()=>{ae(a,s().stats.strength>=5&&s().stats.dexterity>=5&&s().stats.intelligence>=5&&s().stats.wisdom>=5)}),He(),Pe();var v=_i(),o=n(v);{var c=m=>{var k=hi(),_=d(n(k),4),f=d(n(_),2),w=n(f);let b;var A=d(n(w),2),x=n(A),j=d(x);{var E=B=>{var Q=Ue("✓");p(B,Q)};q(j,B=>{y(s()),u(()=>s().stats.strength>=5)&&B(E)})}l(A),l(w);var Y=d(w,2);let T;var O=d(n(Y),2),g=n(O),$=d(g);{var I=B=>{var Q=Ue("✓");p(B,Q)};q($,B=>{y(s()),u(()=>s().stats.dexterity>=5)&&B(I)})}l(O),l(Y);var G=d(Y,2);let U;var P=d(n(G),2),H=n(P),ve=d(H);{var te=B=>{var Q=Ue("✓");p(B,Q)};q(ve,B=>{y(s()),u(()=>s().stats.intelligence>=5)&&B(te)})}l(P),l(G);var F=d(G,2);let V;var D=d(n(F),2),S=n(D),C=d(S);{var W=B=>{var Q=Ue("✓");p(B,Q)};q(C,B=>{y(s()),u(()=>s().stats.wisdom>=5)&&B(W)})}l(D),l(F),l(f);var K=d(f,2);{var ie=B=>{var Q=pi();p(B,Q)},oe=B=>{var Q=gi();p(B,Q)};q(K,B=>{r(a)?B(ie):B(oe,!1)})}l(_),l(k),ee((B,Q,ue,X)=>{b=pe(w,1,"requirement-item svelte-gg7su4",null,b,B),M(x,`${y(s()),u(()=>s().stats.strength)??""} / 5 `),T=pe(Y,1,"requirement-item svelte-gg7su4",null,T,Q),M(g,`${y(s()),u(()=>s().stats.dexterity)??""} / 5 `),U=pe(G,1,"requirement-item svelte-gg7su4",null,U,ue),M(H,`${y(s()),u(()=>s().stats.intelligence)??""} / 5 `),V=pe(F,1,"requirement-item svelte-gg7su4",null,V,X),M(S,`${y(s()),u(()=>s().stats.wisdom)??""} / 5 `)},[()=>({met:s().stats.strength>=5}),()=>({met:s().stats.dexterity>=5}),()=>({met:s().stats.intelligence>=5}),()=>({met:s().stats.wisdom>=5})]),p(m,k)},h=m=>{var k=mi(),_=d(n(k),2),f=d(n(_),4),w=d(n(f),2),b=n(w),A=n(b);l(b);var x=d(b,2),j=n(x);l(x);var E=d(x,2),Y=n(E);l(E);var T=d(E,2),O=n(T);l(T),l(w),l(f),_e(4),l(_),l(k),ee((g,$,I)=>{M(A,`Level ${y(s()),u(()=>s().level)??""} adventurer`),M(j,`${g??""} lifetime EXP earned`),M(Y,`${$??""} upgrades purchased`),M(O,`All stats trained to ${I??""}+`)},[()=>(y(s()),u(()=>s().lifetimeExp.toFixed(0))),()=>(y(s()),u(()=>Object.values(s().upgrades).filter(g=>g.currentLevel>0).length)),()=>(y(s()),u(()=>Math.min(...Object.values(s().stats))))]),p(m,k)};q(o,m=>{r(e)?m(h,!1):m(c)})}l(v),p(i,v),Ce()}function xi(i,t,e,a){try{const s=t().exportSave(!0);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function yi(i,t,e,a){try{const s=t().exportSave(!1);navigator.clipboard.writeText(s),e(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function ki(i,t,e,a){if(!r(t).trim()){e("Please paste save data first","error");return}const s=a().importSave(r(t).trim());s.success?(e(s.warning||"Save imported successfully!",s.warning?"warning":"success"),ae(t,""),a(a()),a().autoSave()):e(s.error||"Failed to import save","error")}function $i(i,t,e){try{t().autoSave(),e("Game saved to browser storage!","success")}catch{e("Failed to save game","error")}}function Mi(i,t,e){try{const a=t().loadFromLocalStorage(),s=a?!1:t().loadFromCookies();a||s?(e(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),t(t())):e("No save found in browser storage","warning")}catch{e("Failed to load game","error")}}function wi(i,t){ae(t,!0)}function Si(i,t){ae(t,!1)}function Ai(i,t,e,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),t(t().name="A Stranger",!0),t(t().exp=0,!0),t(t().lifetimeExp=0,!0),t(t().level=1,!0),t(t().tick=0,!0),t(t().menu="practice",!0),t(t().clickMultiplier=1,!0),t(t().upgrades=t().initializeUpgrades(),!0),t(t().saveIntegrity="valid",!0),t(t().lastValidation=Date.now(),!0),t().recalculateClickMultiplier(),t(t()),ae(e,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Li=N("<div><!> </div>"),Ei=N('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),Ci=N('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function Ti(i,t){Ee(t,!0);let e=xe(t,"game",15),a=Ye(""),s=Ye(""),v=Ye("success"),o=Ye(!1),c=Ye(!1);function h(R,Z,L=3e3){ae(s,R,!0),ae(v,Z,!0),ae(o,!0),setTimeout(()=>{ae(o,!1)},L)}function m(R,Z){const L=new Blob([R],{type:"application/json"}),z=URL.createObjectURL(L),de=document.createElement("a");de.href=z,de.download=Z,document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(z)}setInterval(()=>{e().autoSave()},3e4);var k=Ci(),_=d(n(k),2);{var f=R=>{var Z=Li(),L=n(Z);{var z=le=>{_s(le,{size:20})},de=le=>{var fe=ne(),he=se(fe);{var ke=Le=>{st(Le,{size:20})},Ae=Le=>{st(Le,{size:20})};q(he,Le=>{r(v)==="warning"?Le(ke):Le(Ae,!1)},!0)}p(le,fe)};q(L,le=>{r(v)==="success"?le(z):le(de,!1)})}var re=d(L);l(Z),ee(()=>{pe(Z,1,`message ${r(v)??""}`,"svelte-rfjmb6"),M(re,` ${r(s)??""}`)}),p(R,Z)};q(_,R=>{r(o)&&R(f)})}var w=d(_,2),b=n(w),A=d(n(b),4),x=n(A);x.__click=[$i,e,h];var j=n(x);ea(j,{size:20}),_e(),l(x);var E=d(x,2);E.__click=[Mi,e,h];var Y=n(E);Nt(Y,{size:20}),_e(),l(E),l(A),l(b);var T=d(b,2),O=d(n(T),4),g=n(O);g.__click=[xi,e,m,h];var $=n(g);jt($,{size:20}),_e(),l(g);var I=d(g,2);I.__click=[yi,e,m,h];var G=n(I);jt(G,{size:20}),_e(),l(I),l(O),_e(2),l(T);var U=d(T,2),P=d(n(U),4);Xa(P);var H=d(P,2);H.__click=[ki,a,h,e];var ve=n(H);Nt(ve,{size:20}),_e(),l(H),l(U);var te=d(U,2),F=d(n(te),2),V=n(F),D=d(n(V));l(V);var S=d(V,2),C=d(n(S));l(S);var W=d(S,2),K=d(n(W));l(W);var ie=d(W,2),oe=d(n(ie));l(ie),l(F),l(te);var B=d(te,2),Q=d(n(B),4);Q.__click=[wi,c];var ue=n(Q);st(ue,{size:20}),_e(),l(Q),l(B),l(w);var X=d(w,2);{var J=R=>{var Z=Ei(),L=n(Z),z=d(n(L),8),de=n(z);de.__click=[Si,c];var re=d(de,2);re.__click=[Ai,e,c,h];var le=n(re);st(le,{size:20}),_e(),l(re),l(z),l(L),l(Z),p(R,Z)};q(X,R=>{r(c)&&R(J)})}l(k),ee((R,Z,L,z)=>{H.disabled=R,M(D,` ${e().saveIntegrity??""}`),M(C,` ${Z??""}`),M(K,` ${L??""}`),M(oe,` ${z??""}`)},[()=>!r(a).trim(),()=>new Date(e().lastValidation).toLocaleString(),()=>e().exp.toLocaleString(),()=>e().lifetimeExp.toLocaleString()]),ls(P,()=>r(a),R=>ae(a,R)),p(i,k),Ce()}tt(["click"]);var Ui=N("<option> </option>"),ji=(i,t)=>{t().setDisplayMode("light"),t(t())},Ni=(i,t)=>{t().setDisplayMode("system"),t(t())},Ii=(i,t)=>{t().setDisplayMode("dark"),t(t())},Di=N('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function zi(i,t){Ee(t,!0);let e=xe(t,"config",15);const a=ns();var s=Di(),v=d(n(s),2),o=n(v),c=d(n(o),2),h=n(c),m=d(n(h),2),k=n(m,!0);l(m),l(h);var _=d(h,2),f=d(n(_),2),w=n(f,!0);l(f),l(_);var b=d(_,2),A=d(n(b),2),x=n(A,!0);l(A),l(b);var j=d(b,2),E=d(n(j),2),Y=n(E,!0);l(E),l(j),l(c),l(o);var T=d(o,2),O=d(n(T),2),g=d(n(O),2);Be(g,21,()=>a,Ge,(F,V)=>{var D=Ui(),S=n(D,!0);l(D);var C={};ee(W=>{M(S,W),C!==(C=r(V))&&(D.value=(D.__value=r(V))??"")},[()=>os(r(V))]),p(F,D)}),l(g),l(O);var $=d(O,2),I=d(n($),2),G=n(I);let U;G.__click=[ji,e];var P=d(G,2);let H;P.__click=[Ni,e];var ve=d(P,2);let te;ve.__click=[Ii,e],l(I),l($),l(T),l(v),l(s),ee((F,V,D,S,C)=>{M(k,t.game.name),M(w,t.game.level),M(x,F),M(Y,V),U=pe(G,1,"mode-btn svelte-mt7s6l",null,U,D),H=pe(P,1,"mode-btn svelte-mt7s6l",null,H,S),te=pe(ve,1,"mode-btn svelte-mt7s6l",null,te,C)},[()=>Math.floor(t.game.exp).toLocaleString(),()=>Math.floor(t.game.lifetimeExp).toLocaleString(),()=>({active:e().displayMode==="light"}),()=>({active:e().displayMode==="system"}),()=>({active:e().displayMode==="dark"})]),wt(g,()=>e().theme,F=>e(e().theme=F,!0)),p(i,s),Ce()}tt(["click"]);function Pi(i,t,e){r(t)<e&&Ht(t)}function qi(i,t){r(t)>1&&Ht(t,-1)}var Oi=N('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function Vi(i,t){Ee(t,!0);let e=Ye(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var v=Oi(),o=n(v),c=n(o),h=n(c),m=n(h);m.__click=[qi,e];var k=d(m,2),_=n(k),f=n(_);l(_);var w=d(_,2),b=n(w);l(w),l(k);var A=d(k,2);A.__click=[Pi,e,a],l(h);var x=d(h,2),j=n(x),E=n(j,!0);l(j),l(x),l(c),l(o),l(v),ee(()=>{m.disabled=r(e)===1,M(f,`Chapter ${r(e)??""}`),M(b,`(${r(e)??""}/9)`),A.disabled=r(e)===a,M(E,s[r(e)-1])}),p(i,v),Ce()}tt(["click"]);var Ri=N('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),Fi=N('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),Bi=N('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Hi=N("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),Xi=N('<div class="view svelte-1l6ze8i"><!></div>');function Yi(i,t){Ee(t,!1);const e=ge();let a=xe(t,"config",12),s=xe(t,"game",12);be(()=>y(s()),()=>{ae(e,s()?.menu)}),He(),Pe();var v=Xi(),o=n(v);Wa(o,()=>r(e),c=>{var h=ne(),m=se(h);{var k=f=>{Ns(f,{get config(){return a()},set config(w){a(w)},get game(){return s()},set game(w){s(w)},$$legacy:!0})},_=f=>{var w=ne(),b=se(w);{var A=j=>{qs(j,{get config(){return a()},set config(E){a(E)},get game(){return s()},set game(E){s(E)},$$legacy:!0})},x=j=>{var E=ne(),Y=se(E);{var T=g=>{Ys(g,{get game(){return s()},set game($){s($)},$$legacy:!0})},O=g=>{var $=ne(),I=se($);{var G=P=>{ei(P,{get game(){return s()},set game(H){s(H)},$$legacy:!0})},U=P=>{var H=ne(),ve=se(H);{var te=V=>{fi(V,{get game(){return s()},set game(D){s(D)},$$legacy:!0})},F=V=>{var D=ne(),S=se(D);{var C=K=>{bi(K,{get game(){return s()},set game(ie){s(ie)},$$legacy:!0})},W=K=>{var ie=ne(),oe=se(ie);{var B=ue=>{Ti(ue,{get config(){return a()},set config(X){a(X)},get game(){return s()},set game(X){s(X)},$$legacy:!0})},Q=ue=>{var X=ne(),J=se(X);{var R=L=>{Vi(L,{get game(){return s()},set game(z){s(z)},$$legacy:!0})},Z=L=>{var z=ne(),de=se(z);{var re=fe=>{zi(fe,{get config(){return a()},set config(he){a(he)},get game(){return s()},set game(he){s(he)},$$legacy:!0})},le=fe=>{var he=ne(),ke=se(he);{var Ae=Me=>{var je=Ri();p(Me,je)},Le=Me=>{var je=ne(),Ne=se(je);{var qe=Te=>{var De=Fi();p(Te,De)},dt=Te=>{var De=ne(),ct=se(De);{var ta=Xe=>{var ut=Bi();p(Xe,ut)},aa=Xe=>{var ut=Hi();p(Xe,ut)};q(ct,Xe=>{s()?Xe(aa,!1):Xe(ta)},!0)}p(Te,De)};q(Ne,Te=>{y(s()),u(()=>s()&&s().menu==="about")?Te(qe):Te(dt,!1)},!0)}p(Me,je)};q(ke,Me=>{y(s()),u(()=>s()&&s().menu==="help")?Me(Ae):Me(Le,!1)},!0)}p(fe,he)};q(de,fe=>{y(s()),u(()=>s()&&s().menu==="settings")?fe(re):fe(le,!1)},!0)}p(L,z)};q(J,L=>{y(s()),u(()=>s()&&s().menu==="story")?L(R):L(Z,!1)},!0)}p(ue,X)};q(oe,ue=>{y(s()),u(()=>s()&&s().menu==="saves")?ue(B):ue(Q,!1)},!0)}p(K,ie)};q(S,K=>{y(s()),u(()=>s()&&s().menu==="adventure")?K(C):K(W,!1)},!0)}p(V,D)};q(ve,V=>{y(s()),u(()=>s()&&s().menu==="meditation")?V(te):V(F,!1)},!0)}p(P,H)};q(I,P=>{y(s()),u(()=>s()&&s().menu==="stats")?P(G):P(U,!1)},!0)}p(g,$)};q(Y,g=>{y(s()),u(()=>s()&&s().menu==="training")?g(T):g(O,!1)},!0)}p(j,E)};q(b,j=>{y(s()),u(()=>s()&&s().menu==="upgrades")?j(A):j(x,!1)},!0)}p(f,w)};q(m,f=>{y(s()),u(()=>s()&&s().menu==="practice")?f(k):f(_,!1)})}p(c,h)}),l(v),p(i,v),Ce()}var Wi=N('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Gi=N('<footer class="footer svelte-1uha8ag"><!></footer>'),Ki=N('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),Ji=N('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),Qi=N("<div><!></div>");function ir(i,t){Ee(t,!1);const e=ge();let a=ge(new vs("prussian-blue","system")),s=ge(!1),v=ge();oa(()=>{if(r(a).loadFromLocalStorage(),ae(s,!0),ae(a,r(a)),window.matchMedia){const f=window.matchMedia("(prefers-color-scheme: dark)"),w=()=>{r(a).displayMode==="system"&&ae(a,r(a))};f.addEventListener?f.addEventListener("change",w):f.addListener(w)}ae(v,new ds),setTimeout(()=>{r(v)&&(r(v).loadFromLocalStorage()||r(v).loadFromCookies(),ae(v,r(v)))},100);const k=setInterval(()=>{r(v)&&r(v).autoSave()},15e3),_=setInterval(()=>{r(v)&&(r(v).updateIdleActions(),r(v).idleExpRate>0&&r(v).addExp(r(v).idleExpRate/10),ae(v,r(v)))},100);return()=>{clearInterval(k),clearInterval(_)}}),be(()=>r(a),()=>{ae(e,r(a)?r(a).getTheme():"")}),be(()=>(r(a),r(s)),()=>{r(a)&&r(s)&&typeof localStorage<"u"&&(r(a).theme,r(a).displayMode,r(a).saveToLocalStorage())}),He(),Pe();var o=Qi();va(k=>{var _=Wi();Ya.title="TomeClicker",_e(6),p(k,_)});var c=n(o);{var h=k=>{var _=Ki(),f=se(_);{var w=E=>{fs(E,{get game(){return r(v)}})};q(f,E=>{r(v),u(()=>r(v).showHeader())&&E(w)})}var b=d(f,2),A=n(b);Yi(A,{get game(){return r(v)},set game(E){ae(v,E)},get config(){return r(a)},set config(E){ae(a,E)},$$legacy:!0}),l(b);var x=d(b,2);{var j=E=>{var Y=Gi(),T=n(Y);Us(T,{get game(){return r(v)},set game(O){ae(v,O)},$$legacy:!0}),l(Y),p(E,Y)};q(x,E=>{r(v),u(()=>r(v).showMenu())&&E(j)})}p(k,_)},m=k=>{var _=Ji();p(k,_)};q(c,k=>{r(v)?k(h):k(m,!1)})}l(o),ee(()=>pe(o,1,`app ${r(e)??""}`,"svelte-1uha8ag")),p(i,o),Ce()}export{ir as component};
