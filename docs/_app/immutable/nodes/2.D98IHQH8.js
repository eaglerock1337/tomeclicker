import"../chunks/DsnmJJEf.js";import{i as Oe}from"../chunks/Cd55SYnr.js";import{i as Sa,a as Ma,c as wa,d as dt,n as $a,b as Ca,s as C,e as ge,o as La,f as Aa}from"../chunks/Bl-oD2Vi.js";import{w as de,x as ot,aU as Ea,aV as Ta,aW as Ua,v as ct,C as gt,D as Xe,F as Re,G as Yt,K as qe,U as Kt,J as Nt,h as r,N as rt,y as ja,H as Da,z as qt,A as lt,B as Be,a9 as Na,aC as Ia,az as Wt,ap as Jt,aQ as pe,a0 as Ot,a8 as Vt,I as It,aX as ht,aY as Ct,ag as Ze,aZ as mt,a_ as za,am as Pa,a$ as qa,ay as Oa,b0 as Va,S as Qt,au as Zt,b1 as ea,a7 as Ra,b2 as Fa,b3 as Ba,E as Ha,b4 as Xa,aB as Ga,aP as zt,b5 as Ya,b6 as Ka,ar as Wa,b7 as ta,b8 as Ja,b9 as Qa,ba as Za,bb as es,bc as ts,bd as as,be as ss,bf as is,bg as rs,aO as ls,e as c,a5 as ns,bh as os,p as Le,l as z,n,o as l,q as d,aS as Pt,t as J,a as f,m as Ae,bi as vs,i as M,c as se,f as Q,bj as ds,bk as we,Q as ie,bl as Ye,aR as Fe,aT as me,ah as ue,bm as cs,bn as us,a1 as aa,bo as fs}from"../chunks/BGLDHNfr.js";import{i as I,l as xe,p as _e,s as $e}from"../chunks/BxTBcEuA.js";function ps(i,e,t){de&&ot();var a=i,s=Kt,o,v,u=null,b=Ea()?Ta:Ua;function p(){o&&Nt(o),u!==null&&(u.lastChild.remove(),a.before(u),u=null),o=v}ct(()=>{if(b(s,s=e())){var h=a,x=Yt();x&&(u=document.createDocumentFragment(),u.append(h=gt())),v=Xe(()=>t(h)),x?Re.add_callback(p):p()}}),de&&(a=qe)}function vt(i,e){return e}function gs(i,e,t){for(var a=i.items,s=[],o=e.length,v=0;v<o;v++)qa(e[v].e,s,!0);var u=o>0&&s.length===0&&t!==null;if(u){var b=t.parentNode;Oa(b),b.append(t),a.clear(),ze(i,e[0].prev,e[o-1].next)}Va(s,()=>{for(var p=0;p<o;p++){var h=e[p];u||(a.delete(h.k),ze(i,h.prev,h.next)),Ze(h.e,!u)}})}function Ge(i,e,t,a,s,o=null){var v=i,u={flags:e,items:new Map,first:null},b=(e&ea)!==0;if(b){var p=i;v=de?lt(Zt(p)):p.appendChild(gt())}de&&ot();var h=null,x=!1,g=new Map,$=rt(()=>{var T=t();return Jt(T)?T:T==null?[]:Wt(T)}),m,S;function y(){hs(S,m,u,g,v,s,e,a,t),o!==null&&(m.length===0?h?It(h):h=Xe(()=>o(v)):h!==null&&Nt(h,()=>{h=null}))}ct(()=>{S??=Qt,m=r($);var T=m.length;if(x&&T===0)return;x=T===0;let L=!1;if(de){var X=ja(v)===Da;X!==(T===0)&&(v=qt(),lt(v),Be(!1),L=!0)}if(de){for(var U=null,O,_=0;_<T;_++){if(qe.nodeType===Na&&qe.data===Ia){v=qe,L=!0,Be(!1);break}var w=m[_],D=a(w,_);O=Dt(qe,u,U,null,w,D,_,s,e,t),u.items.set(D,O),U=O}T>0&&lt(qt())}if(de)T===0&&o&&(h=Xe(()=>o(v)));else if(Yt()){var W=new Set,j=Re;for(_=0;_<T;_+=1){w=m[_],D=a(w,_);var V=u.items.get(D)??g.get(D);V?(e&(mt|ht))!==0&&sa(V,w,_,e):(O=Dt(null,u,null,null,w,D,_,s,e,t,!0),g.set(D,O)),W.add(D)}for(const[R,le]of u.items)W.has(R)||j.skipped_effects.add(le.e);j.add_callback(y)}else y();L&&Be(!0),r($)}),de&&(v=qe)}function hs(i,e,t,a,s,o,v,u,b){var p=(v&Fa)!==0,h=(v&(mt|ht))!==0,x=e.length,g=t.items,$=t.first,m=$,S,y=null,T,L=[],X=[],U,O,_,w;if(p)for(w=0;w<x;w+=1)U=e[w],O=u(U,w),_=g.get(O),_!==void 0&&(_.a?.measure(),(T??=new Set).add(_));for(w=0;w<x;w+=1){if(U=e[w],O=u(U,w),_=g.get(O),_===void 0){var D=a.get(O);if(D!==void 0){a.delete(O),g.set(O,D);var W=y?y.next:m;ze(t,y,D),ze(t,D,W),Lt(D,W,s),y=D}else{var j=m?m.e.nodes_start:s;y=Dt(j,t,y,y===null?t.first:y.next,U,O,w,o,v,b)}g.set(O,y),L=[],X=[],m=y.next;continue}if(h&&sa(_,U,w,v),(_.e.f&Ct)!==0&&(It(_.e),p&&(_.a?.unfix(),(T??=new Set).delete(_))),_!==m){if(S!==void 0&&S.has(_)){if(L.length<X.length){var V=X[0],R;y=V.prev;var le=L[0],G=L[L.length-1];for(R=0;R<L.length;R+=1)Lt(L[R],V,s);for(R=0;R<X.length;R+=1)S.delete(X[R]);ze(t,le.prev,G.next),ze(t,y,le),ze(t,G,V),m=V,y=G,w-=1,L=[],X=[]}else S.delete(_),Lt(_,m,s),ze(t,_.prev,_.next),ze(t,_,y===null?t.first:y.next),ze(t,y,_),y=_;continue}for(L=[],X=[];m!==null&&m.k!==O;)(m.e.f&Ct)===0&&(S??=new Set).add(m),X.push(m),m=m.next;if(m===null)continue;_=m}L.push(_),y=_,m=_.next}if(m!==null||S!==void 0){for(var q=S===void 0?[]:Wt(S);m!==null;)(m.e.f&Ct)===0&&q.push(m),m=m.next;var F=q.length;if(F>0){var N=(v&ea)!==0&&x===0?s:null;if(p){for(w=0;w<F;w+=1)q[w].a?.measure();for(w=0;w<F;w+=1)q[w].a?.fix()}gs(t,q,N)}}p&&Ra(()=>{if(T!==void 0)for(_ of T)_.a?.apply()}),i.first=t.first&&t.first.e,i.last=y&&y.e;for(var k of a.values())Ze(k.e);a.clear()}function sa(i,e,t,a){(a&mt)!==0&&Vt(i.v,e),(a&ht)!==0?Vt(i.i,t):i.i=t}function Dt(i,e,t,a,s,o,v,u,b,p,h){var x=(b&mt)!==0,g=(b&za)===0,$=x?g?pe(s,!1,!1):Ot(s):s,m=(b&ht)===0?v:Ot(v),S={i:m,v:$,k:o,a:null,e:null,prev:t,next:a};try{if(i===null){var y=document.createDocumentFragment();y.append(i=gt())}return S.e=Xe(()=>u(i,$,m,p),de),S.e.prev=t&&t.e,S.e.next=a&&a.e,t===null?h||(e.first=S):(t.next=S,t.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function Lt(i,e,t){for(var a=i.next?i.next.e.nodes_start:t,s=e?e.e.nodes_start:t,o=i.e.nodes_start;o!==null&&o!==a;){var v=Pa(o);s.before(o),o=v}}function ze(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Se(i,e,t,a,s){de&&ot();var o=e.$$slots?.[t],v=!1;o===!0&&(o=e.children,v=!0),o===void 0||o(i,v?()=>a:a)}function ms(i,e,t,a,s,o){let v=de;de&&ot();var u,b,p=null;de&&qe.nodeType===Ba&&(p=qe,ot());var h=de?qe:i,x;ct(()=>{const g=e()||null;var $=Xa;g!==u&&(x&&(g===null?Nt(x,()=>{x=null,b=null}):g===b?It(x):Ze(x)),g&&g!==b&&(x=Xe(()=>{if(p=de?p:document.createElementNS($,g),Ga(p,p),a){de&&Sa(g)&&p.append(document.createComment(""));var m=de?Zt(p):p.appendChild(gt());de&&(m===null?Be(!1):lt(m)),a(p,m)}Qt.nodes_end=p,h.before(p)})),u=g,u&&(b=u))},Ha),v&&(Be(!0),lt(h))}function _s(i,e){var t=void 0,a;ct(()=>{t!==(t=e())&&(a&&(Ze(a),a=null),t&&(a=Xe(()=>{zt(()=>t(i))})))})}function ia(i){var e,t,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var s=i.length;for(e=0;e<s;e++)i[e]&&(t=ia(i[e]))&&(a&&(a+=" "),a+=t)}else for(t in i)i[t]&&(a&&(a+=" "),a+=t);return a}function bs(){for(var i,e,t=0,a="",s=arguments.length;t<s;t++)(i=arguments[t])&&(e=ia(i))&&(a&&(a+=" "),a+=e);return a}function xs(i){return typeof i=="object"?bs(i):i??""}const Rt=[...` 	
\r\f \v\uFEFF`];function ys(i,e,t){var a=i==null?"":""+i;if(e&&(a=a?a+" "+e:e),t){for(var s in t)if(t[s])a=a?a+" "+s:s;else if(a.length)for(var o=s.length,v=0;(v=a.indexOf(s,v))>=0;){var u=v+o;(v===0||Rt.includes(a[v-1]))&&(u===a.length||Rt.includes(a[u]))?a=(v===0?"":a.substring(0,v))+a.substring(u+1):v=u}}return a===""?null:a}function Ft(i,e=!1){var t=e?" !important;":";",a="";for(var s in i){var o=i[s];o!=null&&o!==""&&(a+=" "+s+": "+o+t)}return a}function At(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function ks(i,e){if(e){var t="",a,s;if(Array.isArray(e)?(a=e[0],s=e[1]):a=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,v=0,u=!1,b=[];a&&b.push(...Object.keys(a).map(At)),s&&b.push(...Object.keys(s).map(At));var p=0,h=-1;const S=i.length;for(var x=0;x<S;x++){var g=i[x];if(u?g==="/"&&i[x-1]==="*"&&(u=!1):o?o===g&&(o=!1):g==="/"&&i[x+1]==="*"?u=!0:g==='"'||g==="'"?o=g:g==="("?v++:g===")"&&v--,!u&&o===!1&&v===0){if(g===":"&&h===-1)h=x;else if(g===";"||x===S-1){if(h!==-1){var $=At(i.substring(p,h).trim());if(!b.includes($)){g!==";"&&x++;var m=i.substring(p,x).trim();t+=" "+m+";"}}p=x+1,h=-1}}}}return a&&(t+=Ft(a)),s&&(t+=Ft(s,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function ve(i,e,t,a,s,o){var v=i.__className;if(de||v!==t||v===void 0){var u=ys(t,a,o);(!de||u!==i.getAttribute("class"))&&(u==null?i.removeAttribute("class"):e?i.className=u:i.setAttribute("class",u)),i.__className=t}else if(o&&s!==o)for(var b in o){var p=!!o[b];(s==null||p!==!!s[b])&&i.classList.toggle(b,p)}return o}function Et(i,e={},t,a){for(var s in t){var o=t[s];e[s]!==o&&(t[s]==null?i.style.removeProperty(s):i.style.setProperty(s,o,a))}}function _t(i,e,t,a){var s=i.__style;if(de||s!==e){var o=ks(e,a);(!de||o!==i.getAttribute("style"))&&(o==null?i.removeAttribute("style"):i.style.cssText=o),i.__style=e}else a&&(Array.isArray(a)?(Et(i,t?.[0],a[0]),Et(i,t?.[1],a[1],"important")):Et(i,t,a));return a}function pt(i,e,t=!1){if(i.multiple){if(e==null)return;if(!Jt(e))return Ya();for(var a of i.options)a.selected=e.includes(nt(a));return}for(a of i.options){var s=nt(a);if(Ka(s,e)){a.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function ra(i){var e=new MutationObserver(()=>{pt(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wa(()=>{e.disconnect()})}function la(i,e,t=e){var a=!0;ta(i,"change",s=>{var o=s?"[selected]":":checked",v;if(i.multiple)v=[].map.call(i.querySelectorAll(o),nt);else{var u=i.querySelector(o)??i.querySelector("option:not([disabled])");v=u&&nt(u)}t(v)}),zt(()=>{var s=e();if(pt(i,s,a),a&&s===void 0){var o=i.querySelector(":checked");o!==null&&(s=nt(o),t(s))}i.__value=s,a=!1}),ra(i)}function nt(i){return"__value"in i?i.__value:i.value}const st=Symbol("class"),it=Symbol("style"),na=Symbol("is custom element"),oa=Symbol("is html");function Ss(i){if(de){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var a=i.value;He(i,"value",null),i.value=a}if(i.hasAttribute("checked")){var s=i.checked;He(i,"checked",null),i.checked=s}}};i.__on_r=t,es(t),ts()}}function Ms(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function He(i,e,t,a){var s=va(i);de&&(s[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(i[is]=t),t==null?i.removeAttribute(e):typeof t!="string"&&da(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function ws(i,e,t,a,s=!1,o=!1){if(de&&s&&i.tagName==="INPUT"){var v=i,u=v.type==="checkbox"?"defaultChecked":"defaultValue";u in t||Ss(v)}var b=va(i),p=b[na],h=!b[oa];let x=de&&p;x&&Be(!1);var g=e||{},$=i.tagName==="OPTION";for(var m in e)m in t||(t[m]=null);t.class?t.class=xs(t.class):t[st]&&(t.class=null),t[it]&&(t.style??=null);var S=da(i);for(const _ in t){let w=t[_];if($&&_==="value"&&w==null){i.value=i.__value="",g[_]=w;continue}if(_==="class"){var y=i.namespaceURI==="http://www.w3.org/1999/xhtml";ve(i,y,w,a,e?.[st],t[st]),g[_]=w,g[st]=t[st];continue}if(_==="style"){_t(i,w,e?.[it],t[it]),g[_]=w,g[it]=t[it];continue}var T=g[_];if(!(w===T&&!(w===void 0&&i.hasAttribute(_)))){g[_]=w;var L=_[0]+_[1];if(L!=="$$")if(L==="on"){const D={},W="$$"+_;let j=_.slice(2);var X=Ca(j);if(Ma(j)&&(j=j.slice(0,-7),D.capture=!0),!X&&T){if(w!=null)continue;i.removeEventListener(j,g[W],D),g[W]=null}if(w!=null)if(X)i[`__${j}`]=w,dt([j]);else{let V=function(R){g[_].call(this,R)};g[W]=wa(j,i,V,D)}else X&&(i[`__${j}`]=void 0)}else if(_==="style")He(i,_,w);else if(_==="autofocus")Za(i,!!w);else if(!p&&(_==="__value"||_==="value"&&w!=null))i.value=i.__value=w;else if(_==="selected"&&$)Ms(i,w);else{var U=_;h||(U=$a(U));var O=U==="defaultValue"||U==="defaultChecked";if(w==null&&!p&&!O)if(b[_]=null,U==="value"||U==="checked"){let D=i;const W=e===void 0;if(U==="value"){let j=D.defaultValue;D.removeAttribute(U),D.defaultValue=j,D.value=D.__value=W?j:null}else{let j=D.defaultChecked;D.removeAttribute(U),D.defaultChecked=j,D.checked=W?j:!1}}else i.removeAttribute(_);else O||S.includes(U)&&(p||typeof w!="string")?(i[U]=w,U in b&&(b[U]=Kt)):typeof w!="function"&&He(i,U,w)}}}return x&&Be(!0),g}function Bt(i,e,t=[],a=[],s,o=!1,v=!1){Ja(t,a,u=>{var b=void 0,p={},h=i.nodeName==="SELECT",x=!1;if(ct(()=>{var $=e(...u.map(r)),m=ws(i,b,$,s,o,v);x&&h&&"value"in $&&pt(i,$.value);for(let y of Object.getOwnPropertySymbols(p))$[y]||Ze(p[y]);for(let y of Object.getOwnPropertySymbols($)){var S=$[y];y.description===Qa&&(!b||S!==b[y])&&(p[y]&&Ze(p[y]),p[y]=Xe(()=>_s(i,()=>S))),m[y]=S}b=m}),h){var g=i;zt(()=>{pt(g,b.value,!0),ra(g)})}x=!0})}function va(i){return i.__attributes??={[na]:i.nodeName.includes("-"),[oa]:i.namespaceURI===as}}var Ht=new Map;function da(i){var e=i.getAttribute("is")||i.nodeName,t=Ht.get(e);if(t)return t;Ht.set(e,t=[]);for(var a,s=i,o=Element.prototype;o!==s;){a=rs(s);for(var v in a)a[v].set&&t.push(v);s=ss(s)}return t}function $s(i,e,t=e){var a=new WeakSet;ta(i,"input",async s=>{var o=s?i.defaultValue:i.value;if(o=Tt(i)?Ut(o):o,t(o),Re!==null&&a.add(Re),await ls(),o!==(o=e())){var v=i.selectionStart,u=i.selectionEnd;i.value=o??"",u!==null&&(i.selectionStart=v,i.selectionEnd=Math.min(u,i.value.length))}}),(de&&i.defaultValue!==i.value||c(e)==null&&i.value)&&(t(Tt(i)?Ut(i.value):i.value),Re!==null&&a.add(Re)),ns(()=>{var s=e();if(i===document.activeElement){var o=os??Re;if(a.has(o))return}Tt(i)&&s===Ut(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function Tt(i){var e=i.type;return e==="number"||e==="range"}function Ut(i){return i===""?null:+i}const bt={"prussian-blue":{name:"prussian-blue",displayName:"Prussian Blue",light:{bg:"#97a6c3ff",altBg:"#a4b1cbff",text:"#0c4f83ff",blue:"#0c4f83ff",green:"#047a5d",red:"#d94e00",yellow:"#d4a000"},dark:{bg:"#2d384eff",altBg:"#1e2534ff",text:"#57adefff",blue:"#57adefff",green:"#00ff9f",red:"#ff8c3a",yellow:"#ffea00"}},"alizarin-crimson":{name:"alizarin-crimson",displayName:"Alizarin Crimson",light:{bg:"#f4d9d9",altBg:"#e8b8b8",text:"#4a1212",blue:"#6b4266",green:"#2d7a2d",red:"#d92f2e",yellow:"#e6b500"},dark:{bg:"#3d1e1e",altBg:"#2a1414",text:"#e8c5c5",blue:"#9d7a98",green:"#5dd85d",red:"#ff6b6b",yellow:"#ffd93d"}},"sap-green":{name:"sap-green",displayName:"Sap Green",light:{bg:"#dde8d5",altBg:"#c5d9b8",text:"#1e3d1e",blue:"#4d7c8a",green:"#3d8a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#1e3d1e",altBg:"#142814",text:"#d5e8d5",blue:"#7db3c4",green:"#5cff5c",red:"#ff7556",yellow:"#ffe03d"}},"titanium-white":{name:"titanium-white",displayName:"Titanium White",light:{bg:"#f8f9fa",altBg:"#e9ecef",text:"#212529",blue:"#2b7fd6",green:"#27b300",red:"#e6222d",yellow:"#f09900"},dark:{bg:"#3a3d41",altBg:"#4a4f54",text:"#f8f9fa",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}},"van-dyke-brown":{name:"van-dyke-brown",displayName:"Van Dyke Brown",light:{bg:"#e8ddd0",altBg:"#d4c4b0",text:"#3d2817",blue:"#6d5d4f",green:"#4d7a3d",red:"#c74a2e",yellow:"#d4a800"},dark:{bg:"#3d2817",altBg:"#2a1a0f",text:"#e8ddd0",blue:"#9d8d7f",green:"#7dd85d",red:"#ff8c5c",yellow:"#ffe03d"}},"midnight-black":{name:"midnight-black",displayName:"Midnight Black",light:{bg:"#c5cbd5",altBg:"#9ca5b3",text:"#0a0e14",blue:"#2d6b8f",red:"#d93d3d",green:"#2d9b2d",yellow:"#d99800"},dark:{bg:"#0a0e14",altBg:"#000000",text:"#e0e6ed",blue:"#5ca3ff",green:"#3dff3d",red:"#ff4757",yellow:"#ffd43d"}}};function Cs(){return Object.keys(bt)}function Ls(i){return bt[i]?.displayName||i}function jt(i){return i in bt}class As{displayMode;theme;constructor(e="prussian-blue",t="system"){this.displayMode=t,this.theme=jt(e)?e:"prussian-blue"}getTheme(){const e=this.getEffectiveShade();return`${this.theme}-${e}`}getEffectiveShade(){return this.displayMode==="system"?typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this.displayMode}setTheme(e){return jt(e)?(this.theme=e,!0):!1}setDisplayMode(e){this.displayMode=e}getAvailableThemes(){return Object.keys(bt)}get darkmode(){return this.getEffectiveShade()==="dark"}set darkmode(e){this.displayMode=e?"dark":"light"}toggleDarkMode(){this.displayMode=this.getEffectiveShade()==="dark"?"light":"dark"}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const e={theme:this.theme,displayMode:this.displayMode};localStorage.setItem("tomeclicker_config",JSON.stringify(e))}catch(e){console.error("Failed to save config to localStorage:",e)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const e=localStorage.getItem("tomeclicker_config");if(e){const t=JSON.parse(e);return t.theme&&jt(t.theme)&&(this.theme=t.theme),t.displayMode&&(this.displayMode=t.displayMode),!0}return!1}catch(e){return console.error("Error loading config from localStorage:",e),!1}}}class Es{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;critChance;critDamage;upgrades;saveIntegrity;lastValidation;_validationKey;stats;trainingActions;meditationActions;idleExpRate;adventureModeUnlocked;meditationUnlocked;constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=.05,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&t.id!=="discipline"&&(this.clickMultiplier+=t.effectValue*t.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const e=this.upgrades.discipline;e&&e.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,e.currentLevel)),this.recalculateIdleExpRate()}recalculateIdleExpRate(){this.idleExpRate=0;for(const t of Object.values(this.upgrades))t.effectType==="idleExp"&&(this.idleExpRate+=t.effectValue*t.currentLevel);const e=this.upgrades.discipline;e&&e.currentLevel>0&&(this.idleExpRate*=Math.pow(5,e.currentLevel)),this.recalculateCritStats()}recalculateCritStats(){this.critChance=.05,this.critDamage=.5;for(const e of Object.values(this.upgrades))e.effectType==="critChance"?this.critChance+=e.effectValue*e.currentLevel:e.effectType==="critDamage"&&(this.critDamage+=e.effectValue*e.currentLevel);this.recalculateCritStats()}recalculateCritStats(){this.critChance=.05,this.critDamage=.5;for(const e of Object.values(this.upgrades))e.effectType==="critChance"?this.critChance+=e.effectValue*e.currentLevel:e.effectType==="critDamage"&&(this.critDamage+=e.effectValue*e.currentLevel)}getTrainingSpeedMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="trainingSpeed"&&(e*=Math.pow(1-t.effectValue,t.currentLevel));return e}getTrainingCostMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="trainingCost"&&(e*=Math.pow(1-t.effectValue,t.currentLevel));return e}getOsmosisExpBonus(){let e=0;for(const t of Object.values(this.upgrades))t.effectType==="osmosisExp"&&(e+=t.effectValue*t.currentLevel);return e}getGlobalIdleSpeedMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="globalIdleSpeed"&&(e+=t.effectValue*t.currentLevel);return e}getOsmosisSpeedMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="osmosisSpeed"&&(e+=t.effectValue*t.currentLevel);return e}getStatLevelCost(e){const t=this.stats[e];return Math.floor(100*Math.pow(1.5,t-1))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const e of Object.values(this.upgrades))if(this.canPurchaseUpgrade(e.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(e){const t=this.initializeUpgrades();for(const a in t)e[a]&&(t[a].currentLevel=e[a].currentLevel);this.upgrades=t}migrateTrainingActions(e){const t=this.initializeTrainingActions();for(const a in t)e[a]&&(t[a].progress=e[a].progress,t[a].isActive=e[a].isActive,t[a].lastUpdate=e[a].lastUpdate,e[a].completed!==void 0&&(t[a].completed=e[a].completed));return t}migrateMeditationActions(e){const t=this.initializeMeditationActions();for(const a in t)e[a]&&(t[a].progress=e[a].progress,t[a].isActive=e[a].isActive,t[a].lastUpdate=e[a].lastUpdate,e[a].completed!==void 0&&(t[a].completed=e[a].completed));return t}initializeUpgrades(){return{"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields exponentially greater rewards",effect:"+100% EXP per click per level",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1,minLevel:1},"critical-insight":{id:"critical-insight",name:"Critical Insight",description:"Moments of clarity grant bursts of understanding",effect:"+0.5% crit chance per level",baseCost:200,costMultiplier:1.18,maxLevel:50,currentLevel:0,effectType:"critChance",effectValue:.005,minLevel:1},"devastating-critique":{id:"devastating-critique",name:"Devastating Critique",description:"Critical insights become increasingly profound",effect:"+0.5% crit damage per level",baseCost:500,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"critDamage",effectValue:.005,minLevel:1},"osmotic-absorption":{id:"osmotic-absorption",name:"Deep Contemplation",description:"Thoughtful reflection yields greater insights",effect:"+1 EXP per rumination level",baseCost:100,costMultiplier:1.18,maxLevel:100,currentLevel:0,effectType:"osmosisExp",effectValue:1,minLevel:2},"flow-state":{id:"flow-state",name:"Flow State",description:"Enter a state of effortless focus",effect:"+2% rumination speed per level",baseCost:300,costMultiplier:1.2,maxLevel:50,currentLevel:0,effectType:"osmosisSpeed",effectValue:.02,minLevel:2},"temporal-mastery":{id:"temporal-mastery",name:"Temporal Mastery",description:"Bend time itself to your will (affects ALL idle actions)",effect:"+5% global idle speed per level",baseCost:500,costMultiplier:1.25,maxLevel:100,currentLevel:0,effectType:"globalIdleSpeed",effectValue:.05,minLevel:2},"efficient-training":{id:"efficient-training",name:"Efficient Training",description:"Complete training exercises faster",effect:"-10% training time per level",baseCost:1e4,costMultiplier:1.3,maxLevel:10,currentLevel:0,effectType:"trainingSpeed",effectValue:.1,minLevel:3},"cost-reduction":{id:"cost-reduction",name:"Cost Reduction",description:"Training requires less EXP to start",effect:"-20% training cost per level",baseCost:15e3,costMultiplier:1.35,maxLevel:5,currentLevel:0,effectType:"trainingCost",effectValue:.2,minLevel:3},discipline:{id:"discipline",name:"Discipline",description:"Unified focus accelerates all progress",effect:"5x all EXP gain per level",baseCost:1e3,costMultiplier:100,maxLevel:10,currentLevel:0,effectType:"clickMultiplier",effectValue:5,minLevel:1}}}initializeTrainingActions(){return{"practice-osmosis":{id:"practice-osmosis",name:"Ruminate",description:"Learn through observation and reflection",progress:0,baseDuration:15e3,duration:15e3,expCost:0,isActive:!1,lastUpdate:Date.now()},"train-strength":{id:"train-strength",name:"Lift Heavy Objects",description:"Build raw physical power",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"strength"},"train-dexterity":{id:"train-dexterity",name:"Practice Quick Movements",description:"Improve agility and reflexes",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"dexterity"},"train-intelligence":{id:"train-intelligence",name:"Study Ancient Texts",description:"Expand knowledge and understanding",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"intelligence"},"train-wisdom":{id:"train-wisdom",name:"Meditate on Meaning",description:"Deepen insight and awareness",progress:0,baseDuration:15e3,duration:15e3,expCost:10,isActive:!1,lastUpdate:Date.now(),trainsStat:"wisdom"}}}initializeMeditationActions(){return{"meditate-future":{id:"meditate-future",name:"Meditate on Your Future",description:"Unlock the path to adventure",progress:0,baseDuration:6e4,duration:6e4,expCost:50,isActive:!1,lastUpdate:Date.now(),oneTime:!0,completed:!1},disassociate:{id:"disassociate",name:"Disassociate",description:"Take a mental health day. Increases offline progress time.",progress:0,baseDuration:3e4,duration:3e4,expCost:100,isActive:!1,lastUpdate:Date.now(),oneTime:!1}}}startIdleAction(e,t){const a=e[t];if(!a||a.oneTime&&a.completed)return!1;for(const s of Object.values(e))s.isActive&&(s.isActive=!1,s.progress=0);if(a.isActive=!0,a.progress=0,a.lastUpdate=Date.now(),t==="practice-osmosis"){const s=this.getOsmosisSpeedMultiplier(),o=this.getGlobalIdleSpeedMultiplier(),v=s*o;a.duration=Math.floor(a.baseDuration/v)}else if(a.trainsStat){const s=this.getTrainingSpeedMultiplier(),o=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration*s/o)}else{const s=this.getGlobalIdleSpeedMultiplier();a.duration=Math.floor(a.baseDuration/s)}return!0}updateIdleActions(){const e=Date.now();for(const t of Object.values(this.trainingActions))if(t.isActive){const a=e-t.lastUpdate;t.progress+=a/t.duration,t.lastUpdate=e,t.progress>=1&&this.completeTrainingAction(t.id)}for(const t of Object.values(this.meditationActions))if(t.isActive){const a=e-t.lastUpdate;t.progress+=a/t.duration,t.lastUpdate=e,t.progress>=1&&this.completeMeditationAction(t.id)}}completeTrainingAction(e){const t=this.trainingActions[e];if(!(!t||!t.isActive)){if(e==="practice-osmosis"){const s=this.getOsmosisExpBonus();this.addExp(10+s),t.progress=0,t.lastUpdate=Date.now();return}if(t.trainsStat){const a=t.trainsStat,s=this.getStatLevelCost(a);let o=10;Math.random()<this.critChance&&(o=Math.floor(o*1.5)),this.addExp(o),this.exp>=s?(this.exp-=s,this.stats[a]++,t.progress=0,t.lastUpdate=Date.now()):(t.isActive=!1,t.progress=0,t.lastUpdate=Date.now())}}}completeMeditationAction(e){const t=this.meditationActions[e];!t||!t.isActive||(e==="meditate-future"&&(this.adventureModeUnlocked=!0,t.completed=!0),t.isActive=!1,t.progress=0,t.lastUpdate=Date.now())}stopIdleAction(e,t){const a=e[t];a&&(a.isActive=!1,a.progress=0,a.lastUpdate=Date.now())}showTraining(){return this.level>=2}showStats(){return this.level>=3}showMeditation(){return this.stats.strength>=5&&this.stats.dexterity>=5&&this.stats.intelligence>=5&&this.stats.wisdom>=5}showAdventure(){return this.adventureModeUnlocked}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let e=1;for(const t of Object.values(this.upgrades))t.effectType==="clickMultiplier"&&(e+=t.effectValue*t.currentLevel);return e}markIntegrityViolation(e){this.saveIntegrity=`compromised-${e}-${Date.now()}`,console.warn(`Game integrity violation detected: ${e}`)}addExp(e){this.exp+=e,this.lifetimeExp+=e}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(e){const t=this.upgrades[e];return t?e==="discipline"?t.baseCost*Math.pow(t.costMultiplier,t.currentLevel):Math.floor(t.baseCost*Math.pow(t.costMultiplier,t.currentLevel)):0}canAffordUpgrade(e){const t=this.getUpgradeCost(e);return this.exp>=t}canPurchaseUpgrade(e){const t=this.upgrades[e];return t?this.canAffordUpgrade(e)&&t.currentLevel<t.maxLevel:!1}purchaseUpgrade(e){if(!this.canPurchaseUpgrade(e))return!1;const t=this.upgrades[e],a=this.getUpgradeCost(e);return this.exp-=a,t.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(e){let t=0;for(let a=0;a<e.length;a++){const s=e.charCodeAt(a);t=(t<<5)-t+s,t=t&t}return t.toString(36)+this._validationKey}encryptSave(e){const t="tomeclicker-save-key";let a="";for(let s=0;s<e.length;s++)a+=String.fromCharCode(e.charCodeAt(s)^t.charCodeAt(s%t.length));return typeof btoa>"u"?Buffer.from(a).toString("base64"):btoa(a)}decryptSave(e){try{let t;typeof atob>"u"?t=Buffer.from(e,"base64").toString():t=atob(e);const a="tomeclicker-save-key";let s="";for(let o=0;o<t.length;o++)s+=String.fromCharCode(t.charCodeAt(o)^a.charCodeAt(o%a.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(e=!0){const t={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,critChance:this.critChance,critDamage:this.critDamage,upgrades:this.upgrades,stats:this.stats,trainingActions:this.trainingActions,meditationActions:this.meditationActions,idleExpRate:this.idleExpRate,adventureModeUnlocked:this.adventureModeUnlocked,meditationUnlocked:this.meditationUnlocked,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},a=JSON.stringify(t);if(e){const s=this.generateSaveHash(a),o=this.encryptSave(a);return JSON.stringify({encrypted:!0,data:o,hash:s,version:"0.1.0"})}else return JSON.stringify({...t,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(e){try{const t=JSON.parse(e);let a,s="";if(t.encrypted===!1)a=t,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(t.encrypted===!0){const o=this.decryptSave(t.data);a=JSON.parse(o)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(a)?(this.name=a.name,this.exp=a.exp,this.lifetimeExp=a.lifetimeExp,this.level=a.level||1,this.migrateUpgrades(a.upgrades),this.critChance=a.critChance||.05,this.critDamage=a.critDamage||.5,this.stats=a.stats||{strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=a.trainingActions?this.migrateTrainingActions(a.trainingActions):this.initializeTrainingActions(),this.meditationActions=a.meditationActions?this.migrateMeditationActions(a.meditationActions):this.initializeMeditationActions(),this.idleExpRate=a.idleExpRate||0,this.adventureModeUnlocked=a.adventureModeUnlocked||!1,this.meditationUnlocked=a.meditationUnlocked||!1,this.saveIntegrity=a.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(t){return{success:!1,error:`Failed to import save: ${t}`}}}validateSaveData(e){return typeof e.name=="string"&&typeof e.exp=="number"&&typeof e.lifetimeExp=="number"&&(typeof e.level=="number"||e.level===void 0)&&typeof e.clickMultiplier=="number"&&typeof e.upgrades=="object"&&e.exp<=e.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const e=this.exportSave(!0),t=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(e)}; expires=${t}; path=/; SameSite=Lax`}catch(e){console.error("Failed to save to cookies:",e)}}loadFromCookies(){if(typeof document>"u")return!1;try{const e=document.cookie.split(";");for(const t of e){const[a,s]=t.trim().split("=");if(a==="tomeclicker_save"&&s){const o=this.importSave(decodeURIComponent(s));return o.success?!0:(console.error("Failed to load save from cookies:",o.error),!1)}}return!1}catch(e){return console.error("Error loading from cookies:",e),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const e=this.exportSave(!0);localStorage.setItem("tomeclicker_save",e)}catch(e){console.error("Failed to save to localStorage:",e)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const e=localStorage.getItem("tomeclicker_save");if(e){const t=this.importSave(e);return t.success?!0:(console.error("Failed to load save from localStorage:",t.error),!1)}return!1}catch(e){return console.error("Error loading from localStorage:",e),!1}}autoSave(){this.saveToLocalStorage()}hardReset(e=!0){const t=e?this.name:"A Stranger";typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),this.name=t,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.critChance=.05,this.critDamage=.5,this.upgrades=this.initializeUpgrades(),this.stats={strength:1,dexterity:1,intelligence:1,wisdom:1},this.trainingActions=this.initializeTrainingActions(),this.meditationActions=this.initializeMeditationActions(),this.idleExpRate=0,this.adventureModeUnlocked=!1,this.meditationUnlocked=!1,this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.recalculateClickMultiplier()}}var Ts=z('<div class="progress-container svelte-1xm1ks6"><div></div></div>'),Us=z('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div> <!></header>');function js(i,e){Le(e,!0);const t=Pt(()=>{if(e.game.level<2)return null;const x=e.game.exp;let g=1/0,$=!1;const m=e.game.getLevelUpCost();m<g&&(g=m,$=x>=m);const S=e.game.upgrades.discipline;if(S&&S.currentLevel<S.maxLevel){const y=e.game.getUpgradeCost("discipline");y<g&&(g=y,$=x>=y)}return g===1/0?null:{progress:Math.min(x/g,1),canAfford:$}});var a=Us(),s=n(a),o=n(s),v=n(o);l(o);var u=d(o,2),b=n(u);l(u),l(s);var p=d(s,2);{var h=x=>{var g=Ts(),$=n(g);let m;l(g),J(S=>{m=ve($,1,"progress-bar svelte-1xm1ks6",null,m,S),_t($,`width: ${r(t).progress*100}%`)},[()=>({full:r(t).canAfford})]),f(x,g)};I(p,x=>{r(t)&&x(h)})}l(a),J(x=>{C(v,`EXP: ${x??""}`),C(b,`Level: ${e.game.level??""}`)},[()=>Math.floor(e.game.exp).toLocaleString()]),f(i,a),Ae()}/**
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
 */const Ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ns=vs("<svg><!><!></svg>");function Ce(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]),a=xe(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Le(e,!1);let s=_e(e,"name",8,void 0),o=_e(e,"color",8,"currentColor"),v=_e(e,"size",8,24),u=_e(e,"strokeWidth",8,2),b=_e(e,"absoluteStrokeWidth",8,!1),p=_e(e,"iconNode",24,()=>[]);const h=(...m)=>m.filter((S,y,T)=>!!S&&T.indexOf(S)===y).join(" ");Oe();var x=Ns();Bt(x,(m,S)=>({...Ds,...a,width:v(),height:v(),stroke:o(),"stroke-width":m,class:S}),[()=>(M(b()),M(u()),M(v()),c(()=>b()?Number(u())*24/Number(v()):u())),()=>(M(s()),M(t),c(()=>h("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var g=n(x);Ge(g,1,p,vt,(m,S)=>{var y=Pt(()=>ds(r(S),2));let T=()=>r(y)[0],L=()=>r(y)[1];var X=se(),U=Q(X);ms(U,T,!0,(O,_)=>{Bt(O,()=>({...L()}))}),f(m,X)});var $=d(g);Se($,e,"default",{}),l(x),f(i,x),Ae()}function Is(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];Ce(i,$e({name:"brain"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function zs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];Ce(i,$e({name:"chart-column"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Ps(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];Ce(i,$e({name:"circle-check-big"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function qs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];Ce(i,$e({name:"circle-question-mark"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Os(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];Ce(i,$e({name:"compass"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Xt(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];Ce(i,$e({name:"download"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Vs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];Ce(i,$e({name:"dumbbell"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Rs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];Ce(i,$e({name:"info"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ca(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];Ce(i,$e({name:"mouse-pointer"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ua(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Ce(i,$e({name:"save"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Fs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];Ce(i,$e({name:"settings"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Bs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];Ce(i,$e({name:"square-pen"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Hs(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];Ce(i,$e({name:"trending-up"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function ft(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];Ce(i,$e({name:"triangle-alert"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}function Gt(i,e){const t=xe(e,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];Ce(i,$e({name:"upload"},()=>t,{get iconNode(){return a},children:(s,o)=>{var v=se(),u=Q(v);Se(u,e,"default",{}),f(s,v)},$$slots:{default:!0}}))}var Xs=z('<button class="svelte-igdjqh"><p><!></p></button>'),Gs=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ys=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ks=z('<button class="svelte-igdjqh"><p><!></p></button>'),Ws=z('<button class="svelte-igdjqh"><p><!></p></button>'),Js=z('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <!> <!> <!> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function Qs(i,e){Le(e,!1);const t=pe();let a=_e(e,"game",12);we(()=>M(a()),()=>{ie(t,a()&&(a().canLevelUp()||Object.values(a().upgrades).some(K=>a().canAffordUpgrade(K.id))))}),Ye(),Oe();var s=Js(),o=n(s),v=n(o),u=n(v,!0);l(v),l(o);var b=d(o,2),p=n(b),h=n(p);let x;var g=n(h);ca(g,{size:24}),l(h),l(p);var $=d(p,2);{var m=K=>{var ee=Xs(),B=n(ee);let ae;var A=n(B);Hs(A,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="upgrades",green:a().menu!=="upgrades"&&r(t)})]),ge("click",ee,()=>a(a().menu="upgrades",!0)),f(K,ee)};I($,K=>{M(a()),c(()=>a().showUpgrades())&&K(m)})}var S=d($,2);{var y=K=>{var ee=Gs(),B=n(ee);let ae;var A=n(B);Vs(A,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="training"})]),ge("click",ee,()=>a(a().menu="training",!0)),f(K,ee)};I(S,K=>{M(a()),c(()=>a().showTraining())&&K(y)})}var T=d(S,2);{var L=K=>{var ee=Ys(),B=n(ee);let ae;var A=n(B);zs(A,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="stats"})]),ge("click",ee,()=>a(a().menu="stats",!0)),f(K,ee)};I(T,K=>{M(a()),c(()=>a().showStats())&&K(L)})}var X=d(T,2);{var U=K=>{var ee=Ks(),B=n(ee);let ae;var A=n(B);Is(A,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="meditation"})]),ge("click",ee,()=>a(a().menu="meditation",!0)),f(K,ee)};I(X,K=>{M(a()),c(()=>a().showMeditation())&&K(U)})}var O=d(X,2);{var _=K=>{var ee=Ws(),B=n(ee);let ae;var A=n(B);Os(A,{size:24}),l(B),l(ee),J(P=>ae=ve(B,1,"svelte-igdjqh",null,ae,P),[()=>({red:a().menu==="adventure"})]),ge("click",ee,()=>a(a().menu="adventure",!0)),f(K,ee)};I(O,K=>{M(a()),c(()=>a().showAdventure())&&K(_)})}var w=d(O,2),D=n(w);let W;var j=n(D);Bs(j,{size:24}),l(D),l(w);var V=d(w,2),R=n(V);let le;var G=n(R);qs(G,{size:24}),l(R),l(V);var q=d(V,2),F=n(q);let N;var k=n(F);ua(k,{size:24}),l(F),l(q);var E=d(q,2),Y=n(E);let te;var re=n(Y);Fs(re,{size:24}),l(Y),l(E);var ne=d(E,2),H=n(ne);let Z;var ce=n(H);Rs(ce,{size:24}),l(H),l(ne),l(b),l(s),J((K,ee,B,ae,A,P)=>{C(u,(M(a()),c(()=>a().menu))),x=ve(h,1,"svelte-igdjqh",null,x,K),W=ve(D,1,"svelte-igdjqh",null,W,ee),le=ve(R,1,"svelte-igdjqh",null,le,B),N=ve(F,1,"svelte-igdjqh",null,N,ae),te=ve(Y,1,"svelte-igdjqh",null,te,A),Z=ve(H,1,"svelte-igdjqh",null,Z,P)},[()=>({red:a().menu==="practice"}),()=>({red:a().menu==="story"}),()=>({red:a().menu==="help"}),()=>({red:a().menu==="saves"}),()=>({red:a().menu==="settings"}),()=>({red:a().menu==="about"})]),ge("click",p,()=>a(a().menu="practice",!0)),ge("click",w,()=>a(a().menu="story",!0)),ge("click",V,()=>a(a().menu="help",!0)),ge("click",q,()=>a(a().menu="saves",!0)),ge("click",E,()=>a(a().menu="settings",!0)),ge("click",ne,()=>a(a().menu="about",!0)),f(i,s),Ae()}var Zs=z('<div class="crit-text svelte-ylrqw9">CRITICAL!</div>'),ei=z('<div class="practice-container svelte-ylrqw9"><div class="thebutton svelte-ylrqw9"><button aria-label="Practice to gain experience points"><div class="item svelte-ylrqw9"><!><br class="svelte-ylrqw9"/> <!></div></button></div></div>');function ti(i,e){Le(e,!0);let t=_e(e,"game",15),a=Pt(()=>t()?t().updateClickText():"Loading..."),s=Fe(!1);function o(){if(!t())return;let S=t().getClickValue();Math.random()<t().critChance&&(S*=1+t().critDamage,ie(s,!0),setTimeout(()=>ie(s,!1),300)),t().addExp(S),t(t())}var v=ei(),u=n(v),b=n(u);b.__click=o,b.__touchstart=o;let p;var h=n(b),x=n(h);ca(x,{size:48});var g=d(x,2),$=d(g);{var m=S=>{var y=Zs();f(S,y)};I($,S=>{r(s)&&S(m)})}l(h),l(b),l(u),l(v),J(S=>{p=ve(b,1,"svelte-ylrqw9",null,p,S),C(g,`${r(a)??""} `)},[()=>({crit:r(s)})]),f(i,v),Ae()}dt(["click","touchstart"]);var ai=z('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div> <div class="upgrade-benefit svelte-xd3x4d"><!></div></button>'),si=z('<div class="details-header svelte-xd3x4d"><h2 class="svelte-xd3x4d"> </h2> <button class="close-btn svelte-xd3x4d" aria-label="Close">×</button></div> <div class="details-body svelte-xd3x4d"><div class="details-content svelte-xd3x4d"><p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p></div> <div class="details-actions svelte-xd3x4d"><button class="purchase-btn svelte-xd3x4d"><!></button></div></div>',1),ii=z('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),ri=z('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!> <div class="coming-soon-section svelte-xd3x4d"><h3 class="svelte-xd3x4d">Coming Soon</h3> <div class="coming-soon-grid svelte-xd3x4d"><div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Adventure Training</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 3</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Advanced Techniques</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 5</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">Specialized Tools</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 7</div></div> <div class="coming-soon-item svelte-xd3x4d"><div class="upgrade-name svelte-xd3x4d">???</div> <div class="upgrade-description svelte-xd3x4d">Unlock at Level 10</div></div></div></div></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function li(i,e){Le(e,!1);const t=pe(),a=pe();let s=_e(e,"game",8),o=_e(e,"config",8),v=pe(null);function u(N){ie(v,N)}function b(){r(v)&&s().purchaseUpgrade(r(v).id)&&(ie(v,s().upgrades[r(v).id]),s().autoSave())}function p(N){return N.toLocaleString()}function h(){s().levelUp()&&s().autoSave()}o(),we(()=>M(s()),()=>{ie(t,Object.values(s().upgrades).filter(N=>!N.minLevel||N.minLevel<=s().level).filter(N=>N.id!=="discipline"))}),we(()=>M(s()),()=>{ie(a,s().upgrades.discipline)}),Ye(),Oe();var x=ri(),g=d(n(x),2),$=n(g),m=n($);let S;var y=d(n(m),2),T=n(y);l(y);var L=d(y,2),X=n(L);l(L),l(m);var U=d(m,2);let O;var _=n(U),w=n(_,!0);l(_);var D=d(_,2),W=n(D);l(D);var j=d(D,2),V=n(j);l(j),l(U);var R=d(U,2);Ge(R,1,()=>r(t),N=>N.id,(N,k)=>{var E=ai();let Y;var te=n(E),re=n(te,!0);l(te);var ne=d(te,2),H=n(ne);l(ne);var Z=d(ne,2),ce=n(Z);l(Z);var K=d(Z,2),ee=n(K);{var B=A=>{var P=me();J(oe=>C(P,`+${oe??""}% click EXP per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(A,P)},ae=A=>{var P=se(),oe=Q(P);{var be=fe=>{var he=me();J(ke=>C(he,`+${ke??""}% crit chance per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(1)))]),f(fe,he)},ye=fe=>{var he=se(),ke=Q(he);{var Ue=Me=>{var De=me();J(Ne=>C(De,`+${Ne??""}% crit damage per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Me,De)},je=Me=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{var Ie=me();J(()=>C(Ie,`+${r(k),c(()=>r(k).effectValue)??""} rumination EXP per level`)),f(Ee,Ie)},xt=Ee=>{var Ie=se(),yt=Q(Ie);{var kt=Te=>{var Pe=me();J(Mt=>C(Pe,`+${Mt??""}% rumination speed per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Te,Pe)},St=Te=>{var Pe=se(),Mt=Q(Pe);{var fa=Ke=>{var et=me();J(wt=>C(et,`+${wt??""}% all idle speed per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Ke,et)},pa=Ke=>{var et=se(),wt=Q(et);{var ga=We=>{var tt=me();J(()=>C(tt,`+${r(k),c(()=>r(k).effectValue)??""} idle EXP/s per level`)),f(We,tt)},ha=We=>{var tt=se(),ma=Q(tt);{var _a=Je=>{var at=me();J($t=>C(at,`-${$t??""}% training time per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Je,at)},ba=Je=>{var at=se(),$t=Q(at);{var xa=Qe=>{var ut=me();J(ka=>C(ut,`-${ka??""}% training cost per level`),[()=>(r(k),c(()=>(r(k).effectValue*100).toFixed(0)))]),f(Qe,ut)},ya=Qe=>{var ut=me("Enhanced efficiency");f(Qe,ut)};I($t,Qe=>{r(k),c(()=>r(k).effectType==="trainingCost")?Qe(xa):Qe(ya,!1)},!0)}f(Je,at)};I(ma,Je=>{r(k),c(()=>r(k).effectType==="trainingSpeed")?Je(_a):Je(ba,!1)},!0)}f(We,tt)};I(wt,We=>{r(k),c(()=>r(k).effectType==="idleExp")?We(ga):We(ha,!1)},!0)}f(Ke,et)};I(Mt,Ke=>{r(k),c(()=>r(k).effectType==="globalIdleSpeed")?Ke(fa):Ke(pa,!1)},!0)}f(Te,Pe)};I(yt,Te=>{r(k),c(()=>r(k).effectType==="osmosisSpeed")?Te(kt):Te(St,!1)},!0)}f(Ee,Ie)};I(Ne,Ee=>{r(k),c(()=>r(k).effectType==="osmosisExp")?Ee(Ve):Ee(xt,!1)},!0)}f(Me,De)};I(ke,Me=>{r(k),c(()=>r(k).effectType==="critDamage")?Me(Ue):Me(je,!1)},!0)}f(fe,he)};I(oe,fe=>{r(k),c(()=>r(k).effectType==="critChance")?fe(be):fe(ye,!1)},!0)}f(A,P)};I(ee,A=>{r(k),c(()=>r(k).effectType==="clickMultiplier")?A(B):A(ae,!1)})}l(K),l(E),J((A,P,oe)=>{Y=ve(E,1,"upgrade-btn svelte-xd3x4d",null,Y,A),He(E,"aria-label",`Select ${r(k),c(()=>r(k).name)??""} upgrade. Level ${r(k),c(()=>r(k).currentLevel)??""} of ${r(k),c(()=>r(k).maxLevel)??""}. Cost: ${P??""} EXP`),C(re,(r(k),c(()=>r(k).name))),C(H,`Level ${r(k),c(()=>r(k).currentLevel)??""}/${r(k),c(()=>r(k).maxLevel)??""}`),C(ce,`${oe??""} EXP`)},[()=>({selected:r(v)?.id===r(k).id,affordable:s().canAffordUpgrade(r(k).id),maxed:r(k).currentLevel>=r(k).maxLevel}),()=>(M(s()),r(k),c(()=>p(s().getUpgradeCost(r(k).id)))),()=>(M(s()),r(k),c(()=>p(s().getUpgradeCost(r(k).id))))]),ge("click",E,()=>u(r(k))),f(N,E)}),ue(2),l($);var le=d($,2),G=n(le);{var q=N=>{var k=si(),E=Q(k),Y=n(E),te=n(Y,!0);l(Y);var re=d(Y,2);l(E);var ne=d(E,2),H=n(ne),Z=n(H),ce=n(Z,!0);l(Z);var K=d(Z,2),ee=d(n(K));l(K);var B=d(K,2),ae=d(n(B));l(B);var A=d(B,2),P=d(n(A));l(A),l(H);var oe=d(H,2),be=n(oe),ye=n(be);{var fe=ke=>{var Ue=me("MAX LEVEL");f(ke,Ue)},he=ke=>{var Ue=se(),je=Q(Ue);{var Me=Ne=>{var Ve=me("CANNOT AFFORD");f(Ne,Ve)},De=Ne=>{var Ve=me("PURCHASE");f(Ne,Ve)};I(je,Ne=>{M(s()),r(v),c(()=>!s().canAffordUpgrade(r(v).id))?Ne(Me):Ne(De,!1)},!0)}f(ke,Ue)};I(ye,ke=>{r(v),c(()=>r(v).currentLevel>=r(v).maxLevel)?ke(fe):ke(he,!1)})}l(be),l(oe),l(ne),J((ke,Ue)=>{C(te,(r(v),c(()=>r(v).name))),C(ce,(r(v),c(()=>r(v).description))),C(ee,` ${r(v),c(()=>r(v).effect)??""}`),C(ae,` ${ke??""} EXP`),C(P,` ${r(v),c(()=>r(v).currentLevel)??""}/${r(v),c(()=>r(v).maxLevel)??""}`),be.disabled=Ue},[()=>(M(s()),r(v),c(()=>p(s().getUpgradeCost(r(v).id)))),()=>(M(s()),r(v),c(()=>!s().canPurchaseUpgrade(r(v).id)))]),ge("click",re,()=>ie(v,null)),ge("click",be,b),f(N,k)},F=N=>{var k=ii();f(N,k)};I(G,N=>{r(v)?N(q):N(F,!1)})}l(le),l(g),l(x),J((N,k,E,Y,te,re,ne)=>{S=ve(m,1,"upgrade-btn special-btn svelte-xd3x4d",null,S,N),m.disabled=k,He(m,"aria-label",`Level up from ${M(s()),c(()=>s().level)??""} to ${M(s()),c(()=>s().level+1)??""}. Cost: ${E??""} EXP`),C(T,`Level ${M(s()),c(()=>s().level)??""} → ${M(s()),c(()=>s().level+1)??""}`),C(X,`${Y??""} EXP`),O=ve(U,1,"upgrade-btn special-btn svelte-xd3x4d",null,O,te),U.disabled=(r(a),c(()=>r(a).currentLevel>=r(a).maxLevel)),He(U,"aria-label",`Select ${r(a),c(()=>r(a).name)??""} upgrade. Level ${r(a),c(()=>r(a).currentLevel)??""} of ${r(a),c(()=>r(a).maxLevel)??""}. Cost: ${re??""} EXP`),C(w,(r(a),c(()=>r(a).name))),C(W,`Level ${r(a),c(()=>r(a).currentLevel)??""}/${r(a),c(()=>r(a).maxLevel)??""}`),C(V,`${ne??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(M(s()),c(()=>!s().canLevelUp())),()=>(M(s()),c(()=>p(s().getLevelUpCost()))),()=>(M(s()),c(()=>p(s().getLevelUpCost()))),()=>({selected:r(v)?.id===r(a).id,affordable:s().canAffordUpgrade(r(a).id),maxed:r(a).currentLevel>=r(a).maxLevel}),()=>(M(s()),r(a),c(()=>p(s().getUpgradeCost(r(a).id)))),()=>(M(s()),r(a),c(()=>p(s().getUpgradeCost(r(a).id))))]),ge("click",m,h),ge("click",U,()=>u(r(a))),f(i,x),Ae()}var ni=z('<div class="stat-level svelte-iba83u"> </div>'),oi=z("<div> </div>"),vi=z('<div class="cost free svelte-iba83u">Free</div>'),di=z('<div class="progress-container svelte-iba83u"><div class="progress-bar svelte-iba83u"></div> <div class="progress-text svelte-iba83u"> </div></div>'),ci=z('<button><div class="action-header svelte-iba83u"><div class="action-name svelte-iba83u"> </div> <!></div> <div class="action-description svelte-iba83u"> </div> <div class="action-info svelte-iba83u"><!> <div class="reward svelte-iba83u">+10 EXP</div></div> <!></button>'),ui=z('<div class="training-container svelte-iba83u"><h2 class="svelte-iba83u">Training</h2> <div class="actions-grid svelte-iba83u"></div></div>');function fi(i,e){Le(e,!1);const t=pe();let a=_e(e,"game",12);function s(p){a().startIdleAction(a().trainingActions,p),a(a())}function o(p){return p.id==="practice-osmosis"?0:p.trainsStat?a().getStatLevelCost(p.trainsStat):0}function v(p){return p.id==="practice-osmosis"?!0:p.trainsStat?a().exp>=a().getStatLevelCost(p.trainsStat):!0}we(()=>M(a()),()=>{ie(t,Object.values(a().trainingActions).filter(p=>p.id==="practice-osmosis"?a().level>=2:p.trainsStat?a().level>=3:!1))}),Ye(),Oe();var u=ui(),b=d(n(u),2);Ge(b,5,()=>r(t),p=>p.id,(p,h)=>{const x=rt(()=>(r(h),c(()=>r(h).isActive))),g=rt(()=>(r(h),c(()=>v(r(h))))),$=rt(()=>(r(h),c(()=>o(r(h))))),m=rt(()=>(M(r(x)),r(h),c(()=>r(x)?r(h).progress:0)));var S=ci();let y;var T=n(S),L=n(T),X=n(L,!0);l(L);var U=d(L,2);{var O=G=>{var q=ni(),F=n(q);l(q),J(N=>C(F,`${N??""}: ${M(a()),r(h),c(()=>a().stats[r(h).trainsStat])??""}`),[()=>(r(h),c(()=>r(h).trainsStat.toUpperCase()))]),f(G,q)};I(U,G=>{r(h),c(()=>r(h).trainsStat)&&G(O)})}l(T);var _=d(T,2),w=n(_,!0);l(_);var D=d(_,2),W=n(D);{var j=G=>{var q=oi();let F;var N=n(q);l(q),J(k=>{F=ve(q,1,"cost svelte-iba83u",null,F,k),C(N,`Cost: ${r($)??""} EXP`)},[()=>({"cannot-afford":!r(g)})]),f(G,q)},V=G=>{var q=vi();f(G,q)};I(W,G=>{r($)>0?G(j):G(V,!1)})}ue(2),l(D);var R=d(D,2);{var le=G=>{var q=di(),F=n(q),N=d(F,2),k=n(N);l(N),l(q),J((E,Y)=>{_t(F,`width: ${E??""}%`),C(k,`${Y??""}%`)},[()=>(M(r(m)),c(()=>Math.min(r(m)*100,100))),()=>(M(r(m)),c(()=>Math.floor(Math.min(r(m)*100,100))))]),f(G,q)};I(R,G=>{r(x)&&G(le)})}l(S),J(G=>{y=ve(S,1,"action-card svelte-iba83u",null,y,G),S.disabled=r(x),C(X,(r(h),c(()=>r(h).name))),C(w,(r(h),c(()=>r(h).description)))},[()=>({active:r(x),blocked:!r(g)&&!r(x)})]),ge("click",S,()=>s(r(h).id)),f(p,S)}),l(b),l(u),f(i,u),Ae()}var pi=z('<div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Combat Stats</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Strength</div> <div class="stat-value strength svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Physical power and damage</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Dexterity</div> <div class="stat-value dexterity svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Agility and precision</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Intelligence</div> <div class="stat-value intelligence svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Knowledge and magic</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Wisdom</div> <div class="stat-value wisdom svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Insight and awareness</div></div></div></div>'),gi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Idle EXP</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Passive EXP gain</div></div>'),hi=z('<div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Speed</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base duration</div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Training Cost</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">Of base cost</div></div>',1),mi=z('<div class="upgrade-item svelte-1i5r50h"><span class="upgrade-name svelte-1i5r50h"> </span> <span class="upgrade-level svelte-1i5r50h"> </span></div>'),_i=z('<p class="no-upgrades svelte-1i5r50h">No upgrades purchased yet</p>'),bi=z('<div class="stats-container svelte-1i5r50h"><h2 class="svelte-1i5r50h">Player Stats</h2> <p class="description svelte-1i5r50h">View your progression and statistics</p> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">General</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Name</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Level</div> <div class="stat-value level svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Current EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div> <div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Lifetime EXP</div> <div class="stat-value svelte-1i5r50h"> </div></div></div></div> <!> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Progress Rates</h3> <div class="stats-grid svelte-1i5r50h"><div class="stat-card svelte-1i5r50h"><div class="stat-label svelte-1i5r50h">Click Value</div> <div class="stat-value svelte-1i5r50h"> </div> <div class="stat-desc svelte-1i5r50h">EXP per click</div></div> <!> <!></div></div> <div class="stats-section svelte-1i5r50h"><h3 class="svelte-1i5r50h">Upgrades Owned</h3> <div class="upgrades-list svelte-1i5r50h"><!> <!></div></div></div>');function xi(i,e){Le(e,!1);let t=_e(e,"game",8);function a(E){return E>=1e12?(E/1e12).toFixed(2)+"T":E>=1e9?(E/1e9).toFixed(2)+"B":E>=1e6?(E/1e6).toFixed(2)+"M":E>=1e3?(E/1e3).toFixed(2)+"K":E.toFixed(2)}Oe();var s=bi(),o=d(n(s),4),v=d(n(o),2),u=n(v),b=d(n(u),2),p=n(b,!0);l(b),l(u);var h=d(u,2),x=d(n(h),2),g=n(x,!0);l(x),l(h);var $=d(h,2),m=d(n($),2),S=n(m,!0);l(m),l($);var y=d($,2),T=d(n(y),2),L=n(T,!0);l(T),l(y),l(v),l(o);var X=d(o,2);{var U=E=>{var Y=pi(),te=d(n(Y),2),re=n(te),ne=d(n(re),2),H=n(ne,!0);l(ne),ue(2),l(re);var Z=d(re,2),ce=d(n(Z),2),K=n(ce,!0);l(ce),ue(2),l(Z);var ee=d(Z,2),B=d(n(ee),2),ae=n(B,!0);l(B),ue(2),l(ee);var A=d(ee,2),P=d(n(A),2),oe=n(P,!0);l(P),ue(2),l(A),l(te),l(Y),J(()=>{C(H,(M(t()),c(()=>t().stats.strength))),C(K,(M(t()),c(()=>t().stats.dexterity))),C(ae,(M(t()),c(()=>t().stats.intelligence))),C(oe,(M(t()),c(()=>t().stats.wisdom)))}),f(E,Y)};I(X,E=>{M(t()),c(()=>t().level>=3)&&E(U)})}var O=d(X,2),_=d(n(O),2),w=n(_),D=d(n(w),2),W=n(D,!0);l(D),ue(2),l(w);var j=d(w,2);{var V=E=>{var Y=gi(),te=d(n(Y),2),re=n(te);l(te),ue(2),l(Y),J(ne=>C(re,`${ne??""}/s`),[()=>(M(t()),c(()=>a(t().idleExpRate)))]),f(E,Y)};I(j,E=>{M(t()),c(()=>t().idleExpRate>0)&&E(V)})}var R=d(j,2);{var le=E=>{var Y=hi(),te=Q(Y),re=d(n(te),2),ne=n(re);l(re),ue(2),l(te);var H=d(te,2),Z=d(n(H),2),ce=n(Z);l(Z),ue(2),l(H),J((K,ee)=>{C(ne,`${K??""}%`),C(ce,`${ee??""}%`)},[()=>(M(t()),c(()=>(t().getTrainingSpeedMultiplier()*100).toFixed(0))),()=>(M(t()),c(()=>(t().getTrainingCostMultiplier()*100).toFixed(0)))]),f(E,Y)};I(R,E=>{M(t()),c(()=>t().level>=3)&&E(le)})}l(_),l(O);var G=d(O,2),q=d(n(G),2),F=n(q);Ge(F,1,()=>(M(t()),c(()=>Object.values(t().upgrades).filter(E=>E.currentLevel>0))),vt,(E,Y)=>{var te=mi(),re=n(te),ne=n(re,!0);l(re);var H=d(re,2),Z=n(H);l(H),l(te),J(()=>{C(ne,(r(Y),c(()=>r(Y).name))),C(Z,`Level ${r(Y),c(()=>r(Y).currentLevel)??""}`)}),f(E,te)});var N=d(F,2);{var k=E=>{var Y=_i();f(E,Y)};I(N,E=>{M(t()),c(()=>Object.values(t().upgrades).filter(Y=>Y.currentLevel>0).length===0)&&E(k)})}l(q),l(G),l(s),J((E,Y,te)=>{C(p,(M(t()),c(()=>t().name))),C(g,(M(t()),c(()=>t().level))),C(S,E),C(L,Y),C(W,te)},[()=>(M(t()),c(()=>a(t().exp))),()=>(M(t()),c(()=>a(t().lifetimeExp))),()=>(M(t()),c(()=>a(t().getClickValue())))]),f(i,s),Ae()}var yi=z('<div class="no-actions svelte-x40p30"><p class="svelte-x40p30">You have completed all available meditations.</p> <p class="hint svelte-x40p30">More will be unlocked as you progress through the game.</p></div>'),ki=z("<option> <!></option>"),Si=z('<span class="cannot-afford svelte-x40p30"> </span>'),Mi=z('<p class="one-time-notice svelte-x40p30"><em>This meditation can only be completed once.</em></p>'),wi=z('<div class="progress-container svelte-x40p30"><div class="progress-bar svelte-x40p30"></div> <div class="progress-text svelte-x40p30"> </div></div>'),$i=z('<button class="stop-button svelte-x40p30">Stop Meditating</button>'),Ci=z('<button class="start-button svelte-x40p30">Begin Meditation</button>'),Li=z('<div class="action-info svelte-x40p30"><h3 class="svelte-x40p30"> </h3> <p class="svelte-x40p30"> </p> <p class="cost svelte-x40p30">Cost: <strong> </strong> <!></p> <p class="svelte-x40p30"> </p> <!></div> <!> <div class="action-buttons svelte-x40p30"><!></div>',1),Ai=z('<div class="completed-item svelte-x40p30"><span class="completed-name svelte-x40p30"> </span> <span class="completed-badge svelte-x40p30">✓ Complete</span></div>'),Ei=z('<div class="completed-section svelte-x40p30"><h3 class="svelte-x40p30">Completed Meditations</h3> <div class="completed-list svelte-x40p30"></div></div>'),Ti=z('<div class="meditation-area svelte-x40p30"><div class="meditation-selector svelte-x40p30"><label for="meditation-select" class="svelte-x40p30">Choose Meditation:</label> <select id="meditation-select" class="svelte-x40p30"></select></div> <!></div> <!>',1),Ui=z('<div class="meditation-container svelte-x40p30"><h2 class="svelte-x40p30">Meditation</h2> <p class="description svelte-x40p30">Meditate on the mysteries of the Tomes</p> <!></div>');function ji(i,e){Le(e,!1);const t=pe(),a=pe(),s=pe(),o=pe(),v=pe(),u=pe();let b=_e(e,"game",12),p=pe("meditate-future");function h(){b().startIdleAction(b().meditationActions,r(p))&&b(b())}function x(){b().stopIdleAction(b().meditationActions,r(p)),b(b())}we(()=>M(b()),()=>{ie(t,Object.values(b().meditationActions).filter(y=>!y.oneTime||!y.completed))}),we(()=>(M(b()),r(p)),()=>{ie(a,b().meditationActions[r(p)])}),we(()=>r(a),()=>{ie(s,r(a)?.isActive||!1)}),we(()=>r(a),()=>{ie(o,r(a)?.progress||0)}),we(()=>(r(a),M(b())),()=>{ie(v,r(a)?b().exp>=r(a).expCost:!1)}),we(()=>r(a),()=>{ie(u,r(a)?.oneTime&&r(a)?.completed)}),Ye(),Oe();var g=Ui(),$=d(n(g),4);{var m=y=>{var T=yi();f(y,T)},S=y=>{var T=Ti(),L=Q(T),X=n(L),U=d(n(X),2);J(()=>{r(p),cs(()=>{r(s),r(t)})}),Ge(U,5,()=>r(t),vt,(W,j)=>{var V=ki(),R=n(V),le=d(R);{var G=F=>{var N=me("(One-time)");f(F,N)};I(le,F=>{r(j),c(()=>r(j).oneTime)&&F(G)})}l(V);var q={};J(()=>{C(R,`${r(j),c(()=>r(j).name)??""} `),q!==(q=(r(j),c(()=>r(j).id)))&&(V.value=(V.__value=(r(j),c(()=>r(j).id)))??"")}),f(W,V)}),l(U),l(X);var O=d(X,2);{var _=W=>{var j=Li(),V=Q(j),R=n(V),le=n(R,!0);l(R);var G=d(R,2),q=n(G,!0);l(G);var F=d(G,2),N=d(n(F)),k=n(N);l(N);var E=d(N,2);{var Y=A=>{var P=Si(),oe=n(P);l(P),J(()=>C(oe,`(need ${r(a),M(b()),c(()=>r(a).expCost-b().exp)??""} more)`)),f(A,P)};I(E,A=>{r(v)||A(Y)})}l(F);var te=d(F,2),re=n(te);l(te);var ne=d(te,2);{var H=A=>{var P=Mi();f(A,P)};I(ne,A=>{r(a),c(()=>r(a).oneTime)&&A(H)})}l(V);var Z=d(V,2);{var ce=A=>{var P=wi(),oe=n(P),be=d(oe,2),ye=n(be);l(be),l(P),J((fe,he)=>{_t(oe,`width: ${fe??""}%`),C(ye,`${he??""}%`)},[()=>(r(o),c(()=>Math.min(r(o)*100,100))),()=>(r(o),c(()=>Math.floor(Math.min(r(o)*100,100))))]),f(A,P)};I(Z,A=>{r(s)&&A(ce)})}var K=d(Z,2),ee=n(K);{var B=A=>{var P=$i();ge("click",P,x),f(A,P)},ae=A=>{var P=Ci();J(()=>P.disabled=!r(v)),ge("click",P,h),f(A,P)};I(ee,A=>{r(s)?A(B):A(ae,!1)})}l(K),J(A=>{C(le,(r(a),c(()=>r(a).name))),C(q,(r(a),c(()=>r(a).description))),C(k,`${r(a),c(()=>r(a).expCost)??""} EXP`),C(re,`Duration: ${A??""}s`)},[()=>(r(a),c(()=>(r(a).duration/1e3).toFixed(1)))]),f(W,j)};I(O,W=>{r(a)&&!r(u)&&W(_)})}l(L);var w=d(L,2);{var D=W=>{var j=Ei(),V=d(n(j),2);Ge(V,5,()=>(M(b()),c(()=>Object.values(b().meditationActions).filter(R=>R.oneTime&&R.completed))),vt,(R,le)=>{var G=Ai(),q=n(G),F=n(q,!0);l(q),ue(2),l(G),J(()=>C(F,(r(le),c(()=>r(le).name)))),f(R,G)}),l(V),l(j),f(W,j)};I(w,W=>{M(b()),c(()=>Object.values(b().meditationActions).some(j=>j.oneTime&&j.completed))&&W(D)})}J(()=>U.disabled=r(s)),la(U,()=>r(p),W=>ie(p,W)),f(y,T)};I($,y=>{r(t),c(()=>r(t).length===0)?y(m):y(S,!1)})}l(g),f(i,g),Ae()}var Di=z(`<div class="meditation-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Your stats are sufficient. Complete the "Meditate on Your Future" meditation to
                                unlock Adventure Mode.</em></p></div>`),Ni=z('<div class="training-hint svelte-gg7su4"><p class="svelte-gg7su4"><em>Visit the Training page to improve your stats.</em></p></div>'),Ii=z(`<div class="locked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode</h2> <p class="locked-message svelte-gg7su4">The path to adventure is not yet clear. You must train your stats and meditate to unlock
                this path.</p> <div class="requirements-section svelte-gg7su4"><h3 class="svelte-gg7su4">Requirements</h3> <div class="requirements-grid svelte-gg7su4"><div><span class="requirement-label svelte-gg7su4">Strength:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Dexterity:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Intelligence:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div> <div><span class="requirement-label svelte-gg7su4">Wisdom:</span> <span class="requirement-value svelte-gg7su4"> <!></span></div></div> <!></div></div>`),zi=z(`<div class="unlocked-content svelte-gg7su4"><h2 class="svelte-gg7su4">Adventure Mode Unlocked!</h2> <div class="demo-message svelte-gg7su4"><h3 class="svelte-gg7su4">Congratulations!</h3> <p class="svelte-gg7su4">You've unlocked everything in the current demo of TomeClicker.</p> <div class="demo-stats svelte-gg7su4"><p class="svelte-gg7su4">Your journey so far:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li> <li class="svelte-gg7su4"> </li></ul></div> <div class="coming-soon svelte-gg7su4"><h3 class="svelte-gg7su4">Coming Soon</h3> <p class="svelte-gg7su4">Future updates will include:</p> <ul class="svelte-gg7su4"><li class="svelte-gg7su4">Adventure zones with unique challenges</li> <li class="svelte-gg7su4">Equipment and loot systems</li> <li class="svelte-gg7su4">More meditation techniques</li> <li class="svelte-gg7su4">Tome discovery and magic systems</li> <li class="svelte-gg7su4">Story progression and world-building</li></ul></div> <p class="thank-you svelte-gg7su4">Thank you for playing! Keep an eye on <a href="https://github.com/eaglerock/tomeclicker" target="_blank" class="svelte-gg7su4">GitHub</a> for updates.</p></div></div>`),Pi=z('<div class="adventure-container svelte-gg7su4"><!></div>');function qi(i,e){Le(e,!1);const t=pe(),a=pe();let s=_e(e,"game",8);we(()=>M(s()),()=>{ie(t,s().adventureModeUnlocked)}),we(()=>M(s()),()=>{ie(a,s().stats.strength>=5&&s().stats.dexterity>=5&&s().stats.intelligence>=5&&s().stats.wisdom>=5)}),Ye(),Oe();var o=Pi(),v=n(o);{var u=p=>{var h=Ii(),x=d(n(h),4),g=d(n(x),2),$=n(g);let m;var S=d(n($),2),y=n(S),T=d(y);{var L=H=>{var Z=me("✓");f(H,Z)};I(T,H=>{M(s()),c(()=>s().stats.strength>=5)&&H(L)})}l(S),l($);var X=d($,2);let U;var O=d(n(X),2),_=n(O),w=d(_);{var D=H=>{var Z=me("✓");f(H,Z)};I(w,H=>{M(s()),c(()=>s().stats.dexterity>=5)&&H(D)})}l(O),l(X);var W=d(X,2);let j;var V=d(n(W),2),R=n(V),le=d(R);{var G=H=>{var Z=me("✓");f(H,Z)};I(le,H=>{M(s()),c(()=>s().stats.intelligence>=5)&&H(G)})}l(V),l(W);var q=d(W,2);let F;var N=d(n(q),2),k=n(N),E=d(k);{var Y=H=>{var Z=me("✓");f(H,Z)};I(E,H=>{M(s()),c(()=>s().stats.wisdom>=5)&&H(Y)})}l(N),l(q),l(g);var te=d(g,2);{var re=H=>{var Z=Di();f(H,Z)},ne=H=>{var Z=Ni();f(H,Z)};I(te,H=>{r(a)?H(re):H(ne,!1)})}l(x),l(h),J((H,Z,ce,K)=>{m=ve($,1,"requirement-item svelte-gg7su4",null,m,H),C(y,`${M(s()),c(()=>s().stats.strength)??""} / 5 `),U=ve(X,1,"requirement-item svelte-gg7su4",null,U,Z),C(_,`${M(s()),c(()=>s().stats.dexterity)??""} / 5 `),j=ve(W,1,"requirement-item svelte-gg7su4",null,j,ce),C(R,`${M(s()),c(()=>s().stats.intelligence)??""} / 5 `),F=ve(q,1,"requirement-item svelte-gg7su4",null,F,K),C(k,`${M(s()),c(()=>s().stats.wisdom)??""} / 5 `)},[()=>({met:s().stats.strength>=5}),()=>({met:s().stats.dexterity>=5}),()=>({met:s().stats.intelligence>=5}),()=>({met:s().stats.wisdom>=5})]),f(p,h)},b=p=>{var h=zi(),x=d(n(h),2),g=d(n(x),4),$=d(n(g),2),m=n($),S=n(m);l(m);var y=d(m,2),T=n(y);l(y);var L=d(y,2),X=n(L);l(L);var U=d(L,2),O=n(U);l(U),l($),l(g),ue(4),l(x),l(h),J((_,w,D)=>{C(S,`Level ${M(s()),c(()=>s().level)??""} adventurer`),C(T,`${_??""} lifetime EXP earned`),C(X,`${w??""} upgrades purchased`),C(O,`All stats trained to ${D??""}+`)},[()=>(M(s()),c(()=>s().lifetimeExp.toFixed(0))),()=>(M(s()),c(()=>Object.values(s().upgrades).filter(_=>_.currentLevel>0).length)),()=>(M(s()),c(()=>Math.min(...Object.values(s().stats))))]),f(p,h)};I(v,p=>{r(t)?p(b,!1):p(u)})}l(o),f(i,o),Ae()}function Oi(i,e,t,a){try{const s=e().exportSave(!0);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-encrypted.json"),a("Encrypted save exported and copied to clipboard!","success")}catch{a("Failed to export save","error")}}function Vi(i,e,t,a){try{const s=e().exportSave(!1);navigator.clipboard.writeText(s),t(s,"tomeclicker-save-unencrypted.json"),a("Unencrypted save exported (not leaderboard eligible)","warning")}catch{a("Failed to export save","error")}}function Ri(i,e,t,a){if(!r(e).trim()){t("Please paste save data first","error");return}const s=a().importSave(r(e).trim());s.success?(t(s.warning||"Save imported successfully!",s.warning?"warning":"success"),ie(e,""),a(a()),a().autoSave()):t(s.error||"Failed to import save","error")}function Fi(i,e,t){try{e().autoSave(),t("Game saved to browser storage!","success")}catch{t("Failed to save game","error")}}function Bi(i,e,t){try{const a=e().loadFromLocalStorage(),s=a?!1:e().loadFromCookies();a||s?(t(`Game loaded from ${a?"localStorage":"cookies"}!`,"success"),e(e())):t("No save found in browser storage","warning")}catch{t("Failed to load game","error")}}function Hi(i,e){ie(e,!0)}function Xi(i,e){ie(e,!1)}function Gi(i,e,t,a){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),ie(t,!1),a("Game has been completely reset!","success")}catch{a("Failed to reset game","error")}}var Yi=z("<div><!> </div>"),Ki=z('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),Wi=z('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function Ji(i,e){Le(e,!0);let t=_e(e,"game",15),a=Fe(""),s=Fe(""),o=Fe("success"),v=Fe(!1),u=Fe(!1);function b(B,ae,A=3e3){ie(s,B,!0),ie(o,ae,!0),ie(v,!0),setTimeout(()=>{ie(v,!1)},A)}function p(B,ae){const A=new Blob([B],{type:"application/json"}),P=URL.createObjectURL(A),oe=document.createElement("a");oe.href=P,oe.download=ae,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(P)}setInterval(()=>{t().autoSave()},3e4);var h=Wi(),x=d(n(h),2);{var g=B=>{var ae=Yi(),A=n(ae);{var P=ye=>{Ps(ye,{size:20})},oe=ye=>{var fe=se(),he=Q(fe);{var ke=je=>{ft(je,{size:20})},Ue=je=>{ft(je,{size:20})};I(he,je=>{r(o)==="warning"?je(ke):je(Ue,!1)},!0)}f(ye,fe)};I(A,ye=>{r(o)==="success"?ye(P):ye(oe,!1)})}var be=d(A);l(ae),J(()=>{ve(ae,1,`message ${r(o)??""}`,"svelte-rfjmb6"),C(be,` ${r(s)??""}`)}),f(B,ae)};I(x,B=>{r(v)&&B(g)})}var $=d(x,2),m=n($),S=d(n(m),4),y=n(S);y.__click=[Fi,t,b];var T=n(y);ua(T,{size:20}),ue(),l(y);var L=d(y,2);L.__click=[Bi,t,b];var X=n(L);Gt(X,{size:20}),ue(),l(L),l(S),l(m);var U=d(m,2),O=d(n(U),4),_=n(O);_.__click=[Oi,t,p,b];var w=n(_);Xt(w,{size:20}),ue(),l(_);var D=d(_,2);D.__click=[Vi,t,p,b];var W=n(D);Xt(W,{size:20}),ue(),l(D),l(O),ue(2),l(U);var j=d(U,2),V=d(n(j),4);us(V);var R=d(V,2);R.__click=[Ri,a,b,t];var le=n(R);Gt(le,{size:20}),ue(),l(R),l(j);var G=d(j,2),q=d(n(G),2),F=n(q),N=d(n(F));l(F);var k=d(F,2),E=d(n(k));l(k);var Y=d(k,2),te=d(n(Y));l(Y);var re=d(Y,2),ne=d(n(re));l(re),l(q),l(G);var H=d(G,2),Z=d(n(H),4);Z.__click=[Hi,u];var ce=n(Z);ft(ce,{size:20}),ue(),l(Z),l(H),l($);var K=d($,2);{var ee=B=>{var ae=Ki(),A=n(ae),P=d(n(A),8),oe=n(P);oe.__click=[Xi,u];var be=d(oe,2);be.__click=[Gi,t,u,b];var ye=n(be);ft(ye,{size:20}),ue(),l(be),l(P),l(A),l(ae),f(B,ae)};I(K,B=>{r(u)&&B(ee)})}l(h),J((B,ae,A,P)=>{R.disabled=B,C(N,` ${t().saveIntegrity??""}`),C(E,` ${ae??""}`),C(te,` ${A??""}`),C(ne,` ${P??""}`)},[()=>!r(a).trim(),()=>new Date(t().lastValidation).toLocaleString(),()=>t().exp.toLocaleString(),()=>t().lifetimeExp.toLocaleString()]),$s(V,()=>r(a),B=>ie(a,B)),f(i,h),Ae()}dt(["click"]);var Qi=z("<option> </option>"),Zi=(i,e)=>{e().setDisplayMode("light"),e(e())},er=(i,e)=>{e().setDisplayMode("system"),e(e())},tr=(i,e)=>{e().setDisplayMode("dark"),e(e())},ar=z('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <div class="settings-content svelte-mt7s6l"><section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">game information</h2> <div class="info-grid svelte-mt7s6l"><div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Player:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Level:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Experience:</span> <span class="info-value svelte-mt7s6l"> </span></div> <div class="info-item svelte-mt7s6l"><span class="info-label svelte-mt7s6l">Lifetime EXP:</span> <span class="info-value svelte-mt7s6l"> </span></div></div></section> <section class="settings-section svelte-mt7s6l"><h2 class="svelte-mt7s6l">appearance</h2> <div class="setting-row svelte-mt7s6l"><label for="theme-select" class="svelte-mt7s6l">Color Theme</label> <select id="theme-select" class="theme-select svelte-mt7s6l"></select></div> <div class="setting-row svelte-mt7s6l"><label for="display-mode" class="svelte-mt7s6l">Display Mode</label> <div class="mode-selector svelte-mt7s6l"><button aria-label="Light mode">Light</button> <button aria-label="System preference">System</button> <button aria-label="Dark mode">Dark</button></div></div></section></div></div>');function sr(i,e){Le(e,!0);let t=_e(e,"config",15);const a=Cs();var s=ar(),o=d(n(s),2),v=n(o),u=d(n(v),2),b=n(u),p=d(n(b),2),h=n(p,!0);l(p),l(b);var x=d(b,2),g=d(n(x),2),$=n(g,!0);l(g),l(x);var m=d(x,2),S=d(n(m),2),y=n(S,!0);l(S),l(m);var T=d(m,2),L=d(n(T),2),X=n(L,!0);l(L),l(T),l(u),l(v);var U=d(v,2),O=d(n(U),2),_=d(n(O),2);Ge(_,21,()=>a,vt,(q,F)=>{var N=Qi(),k=n(N,!0);l(N);var E={};J(Y=>{C(k,Y),E!==(E=r(F))&&(N.value=(N.__value=r(F))??"")},[()=>Ls(r(F))]),f(q,N)}),l(_),l(O);var w=d(O,2),D=d(n(w),2),W=n(D);let j;W.__click=[Zi,t];var V=d(W,2);let R;V.__click=[er,t];var le=d(V,2);let G;le.__click=[tr,t],l(D),l(w),l(U),l(o),l(s),J((q,F,N,k,E)=>{C(h,e.game.name),C($,e.game.level),C(y,q),C(X,F),j=ve(W,1,"mode-btn svelte-mt7s6l",null,j,N),R=ve(V,1,"mode-btn svelte-mt7s6l",null,R,k),G=ve(le,1,"mode-btn svelte-mt7s6l",null,G,E)},[()=>Math.floor(e.game.exp).toLocaleString(),()=>Math.floor(e.game.lifetimeExp).toLocaleString(),()=>({active:t().displayMode==="light"}),()=>({active:t().displayMode==="system"}),()=>({active:t().displayMode==="dark"})]),la(_,()=>t().theme,q=>t(t().theme=q,!0)),f(i,s),Ae()}dt(["click"]);function ir(i,e,t){r(e)<t&&aa(e)}function rr(i,e){r(e)>1&&aa(e,-1)}var lr=z('<div class="story-page svelte-1wes0v7"><div class="story-container svelte-1wes0v7"><div class="story-content svelte-1wes0v7"><div class="chapter-header svelte-1wes0v7"><button class="nav-btn nav-prev svelte-1wes0v7" aria-label="Previous chapter">←</button> <div class="chapter-title svelte-1wes0v7"><h2 class="svelte-1wes0v7"> </h2> <span class="chapter-indicator svelte-1wes0v7"> </span></div> <button class="nav-btn nav-next svelte-1wes0v7" aria-label="Next chapter">→</button></div> <div class="story-text svelte-1wes0v7"><p class="svelte-1wes0v7"> </p></div></div></div></div>');function nr(i,e){Le(e,!0);let t=Fe(1);const a=9,s=["This is a chapter","This is another chapter","Revenge of the chapter","Hey look, it's a chapter!","In Soviet Russia, chapter reads you","Chapter Revisited","YOLO, so here's a chapter","The chapter to end all chapters","The final chapter"];var o=lr(),v=n(o),u=n(v),b=n(u),p=n(b);p.__click=[rr,t];var h=d(p,2),x=n(h),g=n(x);l(x);var $=d(x,2),m=n($);l($),l(h);var S=d(h,2);S.__click=[ir,t,a],l(b);var y=d(b,2),T=n(y),L=n(T,!0);l(T),l(y),l(u),l(v),l(o),J(()=>{p.disabled=r(t)===1,C(g,`Chapter ${r(t)??""}`),C(m,`(${r(t)??""}/9)`),S.disabled=r(t)===a,C(L,s[r(t)-1])}),f(i,o),Ae()}dt(["click"]);var or=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Help page coming soon...</h1> <p>This will contain guides and tutorials.</p></div>'),vr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),dr=z('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),cr=z("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),ur=z('<div class="view svelte-1l6ze8i"><!></div>');function fr(i,e){Le(e,!1);const t=pe();let a=_e(e,"config",12),s=_e(e,"game",12);we(()=>M(s()),()=>{ie(t,s()?.menu)}),Ye(),Oe();var o=ur(),v=n(o);ps(v,()=>r(t),u=>{var b=se(),p=Q(b);{var h=g=>{ti(g,{get config(){return a()},set config($){a($)},get game(){return s()},set game($){s($)},$$legacy:!0})},x=g=>{var $=se(),m=Q($);{var S=T=>{li(T,{get config(){return a()},set config(L){a(L)},get game(){return s()},set game(L){s(L)},$$legacy:!0})},y=T=>{var L=se(),X=Q(L);{var U=_=>{fi(_,{get game(){return s()},set game(w){s(w)},$$legacy:!0})},O=_=>{var w=se(),D=Q(w);{var W=V=>{xi(V,{get game(){return s()},set game(R){s(R)},$$legacy:!0})},j=V=>{var R=se(),le=Q(R);{var G=F=>{ji(F,{get game(){return s()},set game(N){s(N)},$$legacy:!0})},q=F=>{var N=se(),k=Q(N);{var E=te=>{qi(te,{get game(){return s()},set game(re){s(re)},$$legacy:!0})},Y=te=>{var re=se(),ne=Q(re);{var H=ce=>{Ji(ce,{get config(){return a()},set config(K){a(K)},get game(){return s()},set game(K){s(K)},$$legacy:!0})},Z=ce=>{var K=se(),ee=Q(K);{var B=A=>{nr(A,{get game(){return s()},set game(P){s(P)},$$legacy:!0})},ae=A=>{var P=se(),oe=Q(P);{var be=fe=>{sr(fe,{get config(){return a()},set config(he){a(he)},get game(){return s()},set game(he){s(he)},$$legacy:!0})},ye=fe=>{var he=se(),ke=Q(he);{var Ue=Me=>{var De=or();f(Me,De)},je=Me=>{var De=se(),Ne=Q(De);{var Ve=Ee=>{var Ie=vr();f(Ee,Ie)},xt=Ee=>{var Ie=se(),yt=Q(Ie);{var kt=Te=>{var Pe=dr();f(Te,Pe)},St=Te=>{var Pe=cr();f(Te,Pe)};I(yt,Te=>{s()?Te(St,!1):Te(kt)},!0)}f(Ee,Ie)};I(Ne,Ee=>{M(s()),c(()=>s()&&s().menu==="about")?Ee(Ve):Ee(xt,!1)},!0)}f(Me,De)};I(ke,Me=>{M(s()),c(()=>s()&&s().menu==="help")?Me(Ue):Me(je,!1)},!0)}f(fe,he)};I(oe,fe=>{M(s()),c(()=>s()&&s().menu==="settings")?fe(be):fe(ye,!1)},!0)}f(A,P)};I(ee,A=>{M(s()),c(()=>s()&&s().menu==="story")?A(B):A(ae,!1)},!0)}f(ce,K)};I(ne,ce=>{M(s()),c(()=>s()&&s().menu==="saves")?ce(H):ce(Z,!1)},!0)}f(te,re)};I(k,te=>{M(s()),c(()=>s()&&s().menu==="adventure")?te(E):te(Y,!1)},!0)}f(F,N)};I(le,F=>{M(s()),c(()=>s()&&s().menu==="meditation")?F(G):F(q,!1)},!0)}f(V,R)};I(D,V=>{M(s()),c(()=>s()&&s().menu==="stats")?V(W):V(j,!1)},!0)}f(_,w)};I(X,_=>{M(s()),c(()=>s()&&s().menu==="training")?_(U):_(O,!1)},!0)}f(T,L)};I(m,T=>{M(s()),c(()=>s()&&s().menu==="upgrades")?T(S):T(y,!1)},!0)}f(g,$)};I(p,g=>{M(s()),c(()=>s()&&s().menu==="practice")?g(h):g(x,!1)})}f(u,b)}),l(o),f(i,o),Ae()}var pr=z('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),gr=z('<footer class="footer svelte-1uha8ag"><!></footer>'),hr=z('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),mr=z('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),_r=z("<div><!></div>");function Mr(i,e){Le(e,!1);const t=pe();let a=pe(new As("prussian-blue","system")),s=pe(!1),o=pe();La(()=>{if(r(a).loadFromLocalStorage(),ie(s,!0),ie(a,r(a)),window.matchMedia){const g=window.matchMedia("(prefers-color-scheme: dark)"),$=()=>{r(a).displayMode==="system"&&ie(a,r(a))};g.addEventListener?g.addEventListener("change",$):g.addListener($)}ie(o,new Es),setTimeout(()=>{r(o)&&(r(o).loadFromLocalStorage()||r(o).loadFromCookies(),ie(o,r(o)))},100);const h=setInterval(()=>{r(o)&&r(o).autoSave()},15e3),x=setInterval(()=>{r(o)&&(r(o).updateIdleActions(),r(o).idleExpRate>0&&r(o).addExp(r(o).idleExpRate/10),ie(o,r(o)))},100);return()=>{clearInterval(h),clearInterval(x)}}),we(()=>r(a),()=>{ie(t,r(a)?r(a).getTheme():"")}),we(()=>(r(a),r(s)),()=>{r(a)&&r(s)&&typeof localStorage<"u"&&(r(a).theme,r(a).displayMode,r(a).saveToLocalStorage())}),Ye(),Oe();var v=_r();Aa(h=>{var x=pr();fs.title="TomeClicker",ue(6),f(h,x)});var u=n(v);{var b=h=>{var x=hr(),g=Q(x);{var $=L=>{js(L,{get game(){return r(o)}})};I(g,L=>{r(o),c(()=>r(o).showHeader())&&L($)})}var m=d(g,2),S=n(m);fr(S,{get game(){return r(o)},set game(L){ie(o,L)},get config(){return r(a)},set config(L){ie(a,L)},$$legacy:!0}),l(m);var y=d(m,2);{var T=L=>{var X=gr(),U=n(X);Qs(U,{get game(){return r(o)},set game(O){ie(o,O)},$$legacy:!0}),l(X),f(L,X)};I(y,L=>{r(o),c(()=>r(o).showMenu())&&L(T)})}f(h,x)},p=h=>{var x=mr();f(h,x)};I(u,h=>{r(o)?h(b):h(p,!1)})}l(v),J(()=>ve(v,1,`app ${r(t)??""}`,"svelte-1uha8ag")),f(i,v),Ae()}export{Mr as component};
