import"../chunks/DsnmJJEf.js";import{i as me}from"../chunks/Bvw1GPGt.js";import{i as Ut,a as zt,c as It,d as Pt,n as Ft,b as Vt,s as H,e as F,o as Dt,f as Ot}from"../chunks/DzOk3YHX.js";import{w as I,x as ze,v as Fe,h as u,N as qt,y as Rt,H as Ht,z as et,A as Ie,B as Se,K as ke,a9 as Xt,aC as Bt,D as Le,G as Gt,F as Ee,az as ct,ap as vt,C as dt,aQ as ce,a0 as tt,a8 as Wt,I as Ke,J as ut,aU as Jt,aV as Oe,ag as Me,aW as Kt,aX as Yt,am as Zt,aY as Qt,ay as ea,aZ as ta,S as ft,a_ as aa,E as ra,a$ as sa,aB as ia,au as la,aP as gt,b0 as oa,b1 as na,aq as ca,b2 as va,b3 as da,b4 as ua,U as fa,b5 as ga,b6 as pa,b7 as ha,b8 as ma,b9 as _a,ba,bb as ya,aO as xa,e as L,a5 as ka,bc as $a,p as _e,l as O,n as v,o as d,q as m,t as ve,i as j,a as E,m as be,bd as Sa,c as D,f as P,aS as wa,be as Ea,bf as pt,Q as B,bg as ht,aT as qe,ah as he,bh as La,bi as Ma}from"../chunks/hgk8NPT6.js";import{p as W,l as Q,s as ie,i as G}from"../chunks/COlMwlpH.js";function Ca(r,a){return a}function Ta(r,a,e){for(var t=r.items,s=[],i=a.length,l=0;l<i;l++)Qt(a[l].e,s,!0);var o=i>0&&s.length===0&&e!==null;if(o){var f=e.parentNode;ea(f),f.append(e),t.clear(),fe(r,a[0].prev,a[i-1].next)}ta(s,()=>{for(var c=0;c<i;c++){var _=a[c];o||(t.delete(_.k),fe(r,_.prev,_.next)),Me(_.e,!o)}})}function mt(r,a,e,t,s,i=null){var l=r,o={flags:a,items:new Map,first:null};I&&ze();var f=null,c=!1,_=new Map,y=qt(()=>{var p=e();return vt(p)?p:p==null?[]:ct(p)}),n,$;function g(){Aa($,n,o,_,l,s,a,t,e),i!==null&&(n.length===0?f?Ke(f):f=Le(()=>i(l)):f!==null&&ut(f,()=>{f=null}))}Fe(()=>{$??=ft,n=u(y);var p=n.length;if(c&&p===0)return;c=p===0;let x=!1;if(I){var N=Rt(l)===Ht;N!==(p===0)&&(l=et(),Ie(l),Se(!1),x=!0)}if(I){for(var C=null,k,S=0;S<p;S++){if(ke.nodeType===Xt&&ke.data===Bt){l=ke,x=!0,Se(!1);break}var U=n[S],w=t(U,S);k=We(ke,o,C,null,U,w,S,s,a,e),o.items.set(w,k),C=k}p>0&&Ie(et())}if(I)p===0&&i&&(f=Le(()=>i(l)));else if(Gt()){var h=new Set,b=Ee;for(S=0;S<p;S+=1){U=n[S],w=t(U,S);var M=o.items.get(w)??_.get(w);M?_t(M,U,S):(k=We(null,o,null,null,U,w,S,s,a,e,!0),_.set(w,k)),h.add(w)}for(const[A,z]of o.items)h.has(A)||b.skipped_effects.add(z.e);b.add_callback(g)}else g();x&&Se(!0),u(y)}),I&&(l=ke)}function Aa(r,a,e,t,s,i,l,o,f){var c=a.length,_=e.items,y=e.first,n=y,$,g=null,p=[],x=[],N,C,k,S;for(S=0;S<c;S+=1){if(N=a[S],C=o(N,S),k=_.get(C),k===void 0){var U=t.get(C);if(U!==void 0){t.delete(C),_.set(C,U);var w=g?g.next:n;fe(e,g,U),fe(e,U,w),Re(U,w,s),g=U}else{var h=n?n.e.nodes_start:s;g=We(h,e,g,g===null?e.first:g.next,N,C,S,i,l,f)}_.set(C,g),p=[],x=[],n=g.next;continue}if(_t(k,N,S),(k.e.f&Oe)!==0&&Ke(k.e),k!==n){if($!==void 0&&$.has(k)){if(p.length<x.length){var b=x[0],M;g=b.prev;var A=p[0],z=p[p.length-1];for(M=0;M<p.length;M+=1)Re(p[M],b,s);for(M=0;M<x.length;M+=1)$.delete(x[M]);fe(e,A.prev,z.next),fe(e,g,A),fe(e,z,b),n=b,g=z,S-=1,p=[],x=[]}else $.delete(k),Re(k,n,s),fe(e,k.prev,k.next),fe(e,k,g===null?e.first:g.next),fe(e,g,k),g=k;continue}for(p=[],x=[];n!==null&&n.k!==C;)(n.e.f&Oe)===0&&($??=new Set).add(n),x.push(n),n=n.next;if(n===null)continue;k=n}p.push(k),g=k,n=k.next}if(n!==null||$!==void 0){for(var q=$===void 0?[]:ct($);n!==null;)(n.e.f&Oe)===0&&q.push(n),n=n.next;var V=q.length;if(V>0){var ee=null;Ta(e,q,ee)}}r.first=e.first&&e.first.e,r.last=g&&g.e;for(var X of t.values())Me(X.e);t.clear()}function _t(r,a,e,t){Wt(r.v,a),r.i=e}function We(r,a,e,t,s,i,l,o,f,c,_){var y=(f&Kt)!==0,n=(f&Yt)===0,$=y?n?ce(s,!1,!1):tt(s):s,g=(f&Jt)===0?l:tt(l),p={i:g,v:$,k:i,a:null,e:null,prev:e,next:t};try{if(r===null){var x=document.createDocumentFragment();x.append(r=dt())}return p.e=Le(()=>o(r,$,g,c),I),p.e.prev=e&&e.e,p.e.next=t&&t.e,e===null?_||(a.first=p):(e.next=p,e.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{}}function Re(r,a,e){for(var t=r.next?r.next.e.nodes_start:e,s=a?a.e.nodes_start:e,i=r.e.nodes_start;i!==null&&i!==t;){var l=Zt(i);s.before(i),i=l}}function fe(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function ae(r,a,e,t,s){I&&ze();var i=a.$$slots?.[e],l=!1;i===!0&&(i=a.children,l=!0),i===void 0||i(r,l?()=>t:t)}function Na(r,a,e,t,s,i){let l=I;I&&ze();var o,f,c=null;I&&ke.nodeType===aa&&(c=ke,ze());var _=I?ke:r,y;Fe(()=>{const n=a()||null;var $=sa;n!==o&&(y&&(n===null?ut(y,()=>{y=null,f=null}):n===f?Ke(y):Me(y)),n&&n!==f&&(y=Le(()=>{if(c=I?c:document.createElementNS($,n),ia(c,c),t){I&&Ut(n)&&c.append(document.createComment(""));var g=I?la(c):c.appendChild(dt());I&&(g===null?Se(!1):Ie(g)),t(c,g)}ft.nodes_end=c,_.before(c)})),o=n,o&&(f=o))},ra),l&&(Se(!0),Ie(_))}function ja(r,a){var e=void 0,t;Fe(()=>{e!==(e=a())&&(t&&(Me(t),t=null),e&&(t=Le(()=>{gt(()=>e(r))})))})}function bt(r){var a,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(a=0;a<s;a++)r[a]&&(e=bt(r[a]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function Ua(){for(var r,a,e=0,t="",s=arguments.length;e<s;e++)(r=arguments[e])&&(a=bt(r))&&(t&&(t+=" "),t+=a);return t}function za(r){return typeof r=="object"?Ua(r):r??""}const at=[...` 	
\r\f \v\uFEFF`];function Ia(r,a,e){var t=r==null?"":""+r;if(a&&(t=t?t+" "+a:a),e){for(var s in e)if(e[s])t=t?t+" "+s:s;else if(t.length)for(var i=s.length,l=0;(l=t.indexOf(s,l))>=0;){var o=l+i;(l===0||at.includes(t[l-1]))&&(o===t.length||at.includes(t[o]))?t=(l===0?"":t.substring(0,l))+t.substring(o+1):l=o}}return t===""?null:t}function rt(r,a=!1){var e=a?" !important;":";",t="";for(var s in r){var i=r[s];i!=null&&i!==""&&(t+=" "+s+": "+i+e)}return t}function He(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Pa(r,a){if(a){var e="",t,s;if(Array.isArray(a)?(t=a[0],s=a[1]):t=a,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,l=0,o=!1,f=[];t&&f.push(...Object.keys(t).map(He)),s&&f.push(...Object.keys(s).map(He));var c=0,_=-1;const p=r.length;for(var y=0;y<p;y++){var n=r[y];if(o?n==="/"&&r[y-1]==="*"&&(o=!1):i?i===n&&(i=!1):n==="/"&&r[y+1]==="*"?o=!0:n==='"'||n==="'"?i=n:n==="("?l++:n===")"&&l--,!o&&i===!1&&l===0){if(n===":"&&_===-1)_=y;else if(n===";"||y===p-1){if(_!==-1){var $=He(r.substring(c,_).trim());if(!f.includes($)){n!==";"&&y++;var g=r.substring(c,y).trim();e+=" "+g+";"}}c=y+1,_=-1}}}}return t&&(e+=rt(t)),s&&(e+=rt(s,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function ne(r,a,e,t,s,i){var l=r.__className;if(I||l!==e||l===void 0){var o=Ia(e,t,i);(!I||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):a?r.className=o:r.setAttribute("class",o)),r.__className=e}else if(i&&s!==i)for(var f in i){var c=!!i[f];(s==null||c!==!!s[f])&&r.classList.toggle(f,c)}return i}function Xe(r,a={},e,t){for(var s in e){var i=e[s];a[s]!==i&&(e[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,t))}}function Fa(r,a,e,t){var s=r.__style;if(I||s!==a){var i=Pa(a,t);(!I||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=a}else t&&(Array.isArray(t)?(Xe(r,e?.[0],t[0]),Xe(r,e?.[1],t[1],"important")):Xe(r,e,t));return t}function Je(r,a,e=!1){if(r.multiple){if(a==null)return;if(!vt(a))return oa();for(var t of r.options)t.selected=a.includes(st(t));return}for(t of r.options){var s=st(t);if(na(s,a)){t.selected=!0;return}}(!e||a!==void 0)&&(r.selectedIndex=-1)}function Va(r){var a=new MutationObserver(()=>{Je(r,r.__value)});a.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ca(()=>{a.disconnect()})}function st(r){return"__value"in r?r.__value:r.value}const Ne=Symbol("class"),je=Symbol("style"),yt=Symbol("is custom element"),xt=Symbol("is html");function Da(r){if(I){var a=!1,e=()=>{if(!a){if(a=!0,r.hasAttribute("value")){var t=r.value;Pe(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var s=r.checked;Pe(r,"checked",null),r.checked=s}}};r.__on_r=e,ga(e),pa()}}function Oa(r,a){a?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Pe(r,a,e,t){var s=kt(r);I&&(s[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||s[a]!==(s[a]=e)&&(a==="loading"&&(r[_a]=e),e==null?r.removeAttribute(a):typeof e!="string"&&$t(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function qa(r,a,e,t,s=!1,i=!1){if(I&&s&&r.tagName==="INPUT"){var l=r,o=l.type==="checkbox"?"defaultChecked":"defaultValue";o in e||Da(l)}var f=kt(r),c=f[yt],_=!f[xt];let y=I&&c;y&&Se(!1);var n=a||{},$=r.tagName==="OPTION";for(var g in a)g in e||(e[g]=null);e.class?e.class=za(e.class):e[Ne]&&(e.class=null),e[je]&&(e.style??=null);var p=$t(r);for(const w in e){let h=e[w];if($&&w==="value"&&h==null){r.value=r.__value="",n[w]=h;continue}if(w==="class"){var x=r.namespaceURI==="http://www.w3.org/1999/xhtml";ne(r,x,h,t,a?.[Ne],e[Ne]),n[w]=h,n[Ne]=e[Ne];continue}if(w==="style"){Fa(r,h,a?.[je],e[je]),n[w]=h,n[je]=e[je];continue}var N=n[w];if(!(h===N&&!(h===void 0&&r.hasAttribute(w)))){n[w]=h;var C=w[0]+w[1];if(C!=="$$")if(C==="on"){const b={},M="$$"+w;let A=w.slice(2);var k=Vt(A);if(zt(A)&&(A=A.slice(0,-7),b.capture=!0),!k&&N){if(h!=null)continue;r.removeEventListener(A,n[M],b),n[M]=null}if(h!=null)if(k)r[`__${A}`]=h,Pt([A]);else{let z=function(q){n[w].call(this,q)};n[M]=It(A,r,z,b)}else k&&(r[`__${A}`]=void 0)}else if(w==="style")Pe(r,w,h);else if(w==="autofocus")ua(r,!!h);else if(!c&&(w==="__value"||w==="value"&&h!=null))r.value=r.__value=h;else if(w==="selected"&&$)Oa(r,h);else{var S=w;_||(S=Ft(S));var U=S==="defaultValue"||S==="defaultChecked";if(h==null&&!c&&!U)if(f[w]=null,S==="value"||S==="checked"){let b=r;const M=a===void 0;if(S==="value"){let A=b.defaultValue;b.removeAttribute(S),b.defaultValue=A,b.value=b.__value=M?A:null}else{let A=b.defaultChecked;b.removeAttribute(S),b.defaultChecked=A,b.checked=M?A:!1}}else r.removeAttribute(w);else U||p.includes(S)&&(c||typeof h!="string")?(r[S]=h,S in f&&(f[S]=fa)):typeof h!="function"&&Pe(r,S,h)}}}return y&&Se(!0),n}function it(r,a,e=[],t=[],s,i=!1,l=!1){va(e,t,o=>{var f=void 0,c={},_=r.nodeName==="SELECT",y=!1;if(Fe(()=>{var $=a(...o.map(u)),g=qa(r,f,$,s,i,l);y&&_&&"value"in $&&Je(r,$.value);for(let x of Object.getOwnPropertySymbols(c))$[x]||Me(c[x]);for(let x of Object.getOwnPropertySymbols($)){var p=$[x];x.description===da&&(!f||p!==f[x])&&(c[x]&&Me(c[x]),c[x]=Le(()=>ja(r,()=>p))),g[x]=p}f=g}),_){var n=r;gt(()=>{Je(n,f.value,!0),Va(n)})}y=!0})}function kt(r){return r.__attributes??={[yt]:r.nodeName.includes("-"),[xt]:r.namespaceURI===ha}}var lt=new Map;function $t(r){var a=r.getAttribute("is")||r.nodeName,e=lt.get(a);if(e)return e;lt.set(a,e=[]);for(var t,s=r,i=Element.prototype;i!==s;){t=ba(s);for(var l in t)t[l].set&&e.push(l);s=ma(s)}return e}function Ra(r,a,e=a){var t=new WeakSet;ya(r,"input",async s=>{var i=s?r.defaultValue:r.value;if(i=Be(r)?Ge(i):i,e(i),Ee!==null&&t.add(Ee),await xa(),i!==(i=a())){var l=r.selectionStart,o=r.selectionEnd;r.value=i??"",o!==null&&(r.selectionStart=l,r.selectionEnd=Math.min(o,r.value.length))}}),(I&&r.defaultValue!==r.value||L(a)==null&&r.value)&&(e(Be(r)?Ge(r.value):r.value),Ee!==null&&t.add(Ee)),ka(()=>{var s=a();if(r===document.activeElement){var i=$a??Ee;if(t.has(i))return}Be(r)&&s===Ge(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Be(r){var a=r.type;return a==="number"||a==="range"}function Ge(r){return r===""?null:+r}class Ha{darkmode;theme;constructor(a,e){this.darkmode=e,this.theme=a}getTheme(){const a=this.darkmode?"dark":"light";return this.theme+"-"+a}}class Xa{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(a){this.name=a||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="transcendent-focus"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);const a=this.upgrades["transcendent-focus"];a&&a.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,a.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const a of Object.values(this.upgrades))if(this.canPurchaseUpgrade(a.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(a){const e=this.initializeUpgrades();for(const t in e)a[t]&&(e[t].currentLevel=a[t].currentLevel);this.upgrades=e}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let a=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(a+=e.effectValue*e.currentLevel);return a}markIntegrityViolation(a){this.saveIntegrity=`compromised-${a}-${Date.now()}`,console.warn(`Game integrity violation detected: ${a}`)}addExp(a){this.exp+=a,this.lifetimeExp+=a}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(a){const e=this.upgrades[a];return e?a==="transcendent-focus"?e.baseCost*Math.pow(100,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(a){const e=this.getUpgradeCost(a);return this.exp>=e}canPurchaseUpgrade(a){const e=this.upgrades[a];return e?this.canAffordUpgrade(a)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(a){if(!this.canPurchaseUpgrade(a))return!1;const e=this.upgrades[a],t=this.getUpgradeCost(a);return this.exp-=t,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(a){let e=0;for(let t=0;t<a.length;t++){const s=a.charCodeAt(t);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(a){const e="tomeclicker-save-key";let t="";for(let s=0;s<a.length;s++)t+=String.fromCharCode(a.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(t).toString("base64"):btoa(t)}decryptSave(a){try{let e;typeof atob>"u"?e=Buffer.from(a,"base64").toString():e=atob(a);const t="tomeclicker-save-key";let s="";for(let i=0;i<e.length;i++)s+=String.fromCharCode(e.charCodeAt(i)^t.charCodeAt(i%t.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(a=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},t=JSON.stringify(e);if(a){const s=this.generateSaveHash(t),i=this.encryptSave(t);return JSON.stringify({encrypted:!0,data:i,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(a){try{const e=JSON.parse(a);let t,s="";if(e.encrypted===!1)t=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const i=this.decryptSave(e.data);t=JSON.parse(i)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(t)?(this.name=t.name,this.exp=t.exp,this.lifetimeExp=t.lifetimeExp,this.level=t.level||1,this.migrateUpgrades(t.upgrades),this.saveIntegrity=t.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(a){return typeof a.name=="string"&&typeof a.exp=="number"&&typeof a.lifetimeExp=="number"&&(typeof a.level=="number"||a.level===void 0)&&typeof a.clickMultiplier=="number"&&typeof a.upgrades=="object"&&a.exp<=a.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const a=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(a)}; expires=${e}; path=/; SameSite=Lax`}catch(a){console.error("Failed to save to cookies:",a)}}loadFromCookies(){if(typeof document>"u")return!1;try{const a=document.cookie.split(";");for(const e of a){const[t,s]=e.trim().split("=");if(t==="tomeclicker_save"&&s){const i=this.importSave(decodeURIComponent(s));return i.success?!0:(console.error("Failed to load save from cookies:",i.error),!1)}}return!1}catch(a){return console.error("Error loading from cookies:",a),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const a=this.exportSave(!0);localStorage.setItem("tomeclicker_save",a),console.log("✅ Saved to localStorage")}catch(a){console.error("Failed to save to localStorage:",a)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const a=localStorage.getItem("tomeclicker_save");if(console.log("Loading from localStorage:",a?"Found data":"No data"),a){const e=this.importSave(a);return e.success?(console.log("✅ Loaded from localStorage successfully"),!0):(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(a){return console.error("Error loading from localStorage:",a),!1}}autoSave(){console.log("AutoSave triggered - Current state:",{exp:this.exp,lifetimeExp:this.lifetimeExp}),this.saveToLocalStorage(),this.saveToCookies()}}var Ba=O('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div></header>');function Ga(r,a){_e(a,!1);let e=W(a,"game",8);me();var t=Ba(),s=v(t),i=v(s),l=v(i);d(i);var o=m(i,2),f=v(o);d(o),d(s),d(t),ve(c=>{H(l,`EXP: ${c??""}`),H(f,`Level: ${j(e()),L(()=>e().level)??""}`)},[()=>(j(e()),L(()=>Math.floor(e().exp).toLocaleString()))]),E(r,t),be()}/**
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
 */const Wa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ja=Sa("<svg><!><!></svg>");function le(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]),t=Q(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_e(a,!1);let s=W(a,"name",8,void 0),i=W(a,"color",8,"currentColor"),l=W(a,"size",8,24),o=W(a,"strokeWidth",8,2),f=W(a,"absoluteStrokeWidth",8,!1),c=W(a,"iconNode",24,()=>[]);const _=(...g)=>g.filter((p,x,N)=>!!p&&N.indexOf(p)===x).join(" ");me();var y=Ja();it(y,(g,p)=>({...Wa,...t,width:l(),height:l(),stroke:i(),"stroke-width":g,class:p}),[()=>(j(f()),j(o()),j(l()),L(()=>f()?Number(o())*24/Number(l()):o())),()=>(j(s()),j(e),L(()=>_("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var n=v(y);mt(n,1,c,Ca,(g,p)=>{var x=wa(()=>Ea(u(p),2));let N=()=>u(x)[0],C=()=>u(x)[1];var k=D(),S=P(k);Na(S,N,!0,(U,w)=>{it(U,()=>({...C()}))}),E(g,k)});var $=m(n);ae($,a,"default",{}),d(y),E(r,y),be()}function Ka(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(r,ie({name:"circle-check-big"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function Ya(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(r,ie({name:"circle-question-mark"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function ot(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];le(r,ie({name:"download"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function Za(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(r,ie({name:"info"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function St(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];le(r,ie({name:"mouse-pointer"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function wt(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(r,ie({name:"save"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function Qa(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];le(r,ie({name:"settings"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function er(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(r,ie({name:"square-pen"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function tr(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];le(r,ie({name:"toggle-left"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function ar(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];le(r,ie({name:"toggle-right"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function rr(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];le(r,ie({name:"trending-up"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function Ue(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(r,ie({name:"triangle-alert"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}function nt(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];le(r,ie({name:"upload"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=D(),o=P(l);ae(o,a,"default",{}),E(s,l)},$$slots:{default:!0}}))}var sr=O('<button class="svelte-igdjqh"><p><!></p></button>'),ir=O('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function lr(r,a){_e(a,!1);let e=W(a,"game",12);me();var t=ir(),s=v(t),i=v(s),l=v(i,!0);d(i),d(s);var o=m(s,2),f=v(o),c=v(f);let _;var y=v(c);St(y,{size:24}),d(c),d(f);var n=m(f,2);{var $=Y=>{var K=sr(),re=v(K);let se;var te=v(re);rr(te,{size:24}),d(re),d(K),ve(R=>se=ne(re,1,"svelte-igdjqh",null,se,R),[()=>({red:e().menu==="upgrades"})]),F("click",K,()=>e(e().menu="upgrades",!0)),E(Y,K)};G(n,Y=>{j(e()),L(()=>e().showUpgrades())&&Y($)})}var g=m(n,2),p=v(g);let x;var N=v(p);er(N,{size:24}),d(p),d(g);var C=m(g,2),k=v(C);let S;var U=v(k);Ya(U,{size:24}),d(k),d(C);var w=m(C,2),h=v(w);let b;var M=v(h);wt(M,{size:24}),d(h),d(w);var A=m(w,2),z=v(A);let q;var V=v(z);Qa(V,{size:24}),d(z),d(A);var ee=m(A,2),X=v(ee);let de;var J=v(X);Za(J,{size:24}),d(X),d(ee),d(o),d(t),ve((Y,K,re,se,te,R)=>{H(l,(j(e()),L(()=>e().menu))),_=ne(c,1,"svelte-igdjqh",null,_,Y),x=ne(p,1,"svelte-igdjqh",null,x,K),S=ne(k,1,"svelte-igdjqh",null,S,re),b=ne(h,1,"svelte-igdjqh",null,b,se),q=ne(z,1,"svelte-igdjqh",null,q,te),de=ne(X,1,"svelte-igdjqh",null,de,R)},[()=>({red:e().menu==="practice"}),()=>({red:e().menu==="story"}),()=>({red:e().menu==="help"}),()=>({red:e().menu==="saves"}),()=>({red:e().menu==="settings"}),()=>({red:e().menu==="about"})]),F("click",f,()=>e(e().menu="practice",!0)),F("click",g,()=>e(e().menu="story",!0)),F("click",C,()=>e(e().menu="help",!0)),F("click",w,()=>e(e().menu="saves",!0)),F("click",A,()=>e(e().menu="settings",!0)),F("click",ee,()=>e(e().menu="about",!0)),E(r,t),be()}var or=O('<div class="thebutton svelte-ylrqw9"><button class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div>');function nr(r,a){_e(a,!1);let e=W(a,"config",12),t=W(a,"game",12);function s(){if(!t())return;const _=t().getClickValue();t().addExp(_),t(t())}e(e()),me();var i=or(),l=v(i),o=v(l),f=v(o);St(f,{size:48});var c=m(f,2,!0);d(o),d(l),d(i),ve(_=>H(c,_),[()=>(j(t()),L(()=>t()?t().updateClickText():"Loading..."))]),F("click",l,s),E(r,i),be()}var cr=O('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button>'),vr=O('<h2 class="svelte-xd3x4d"> </h2> <p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p> <button class="purchase-btn svelte-xd3x4d"><!></button>',1),dr=O('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),ur=O('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function fr(r,a){_e(a,!1);const e=ce();let t=W(a,"game",12);W(a,"config",8);let s=ce(null);function i(h){B(s,h)}function l(){u(s)&&t().purchaseUpgrade(u(s).id)&&B(s,t().upgrades[u(s).id])}function o(h){return h.toLocaleString()}function f(){t().levelUp()&&t(t())}pt(()=>j(t()),()=>{B(e,Object.values(t().upgrades))}),ht(),me();var c=ur(),_=m(v(c),2),y=v(_),n=v(y);let $;var g=m(v(n),2),p=v(g);d(g);var x=m(g,2),N=v(x);d(x),d(n);var C=m(n,2);mt(C,1,()=>u(e),h=>h.id,(h,b)=>{var M=cr();let A;var z=v(M),q=v(z,!0);d(z);var V=m(z,2),ee=v(V);d(V);var X=m(V,2),de=v(X);d(X),d(M),ve((J,Y)=>{A=ne(M,1,"upgrade-btn svelte-xd3x4d",null,A,J),H(q,(u(b),L(()=>u(b).name))),H(ee,`Level ${u(b),L(()=>u(b).currentLevel)??""}/${u(b),L(()=>u(b).maxLevel)??""}`),H(de,`${Y??""} EXP`)},[()=>({selected:u(s)?.id===u(b).id,affordable:t().canAffordUpgrade(u(b).id),maxed:u(b).currentLevel>=u(b).maxLevel}),()=>(j(t()),u(b),L(()=>o(t().getUpgradeCost(u(b).id))))]),F("click",M,()=>i(u(b))),E(h,M)}),d(y);var k=m(y,2),S=v(k);{var U=h=>{var b=vr(),M=P(b),A=v(M,!0);d(M);var z=m(M,2),q=v(z,!0);d(z);var V=m(z,2),ee=m(v(V));d(V);var X=m(V,2),de=m(v(X));d(X);var J=m(X,2),Y=m(v(J));d(J);var K=m(J,2),re=v(K);{var se=R=>{var ge=qe("MAX LEVEL");E(R,ge)},te=R=>{var ge=D(),Ce=P(ge);{var Ve=ye=>{var $e=qe("CANNOT AFFORD");E(ye,$e)},Te=ye=>{var $e=qe("PURCHASE");E(ye,$e)};G(Ce,ye=>{j(t()),u(s),L(()=>!t().canAffordUpgrade(u(s).id))?ye(Ve):ye(Te,!1)},!0)}E(R,ge)};G(re,R=>{u(s),L(()=>u(s).currentLevel>=u(s).maxLevel)?R(se):R(te,!1)})}d(K),ve((R,ge)=>{H(A,(u(s),L(()=>u(s).name))),H(q,(u(s),L(()=>u(s).description))),H(ee,` ${u(s),L(()=>u(s).effect)??""}`),H(de,` ${R??""} EXP`),H(Y,` ${u(s),L(()=>u(s).currentLevel)??""}/${u(s),L(()=>u(s).maxLevel)??""}`),K.disabled=ge},[()=>(j(t()),u(s),L(()=>o(t().getUpgradeCost(u(s).id)))),()=>(j(t()),u(s),L(()=>!t().canPurchaseUpgrade(u(s).id)))]),F("click",K,l),E(h,b)},w=h=>{var b=dr();E(h,b)};G(S,h=>{u(s)?h(U):h(w,!1)})}d(k),d(_),d(c),ve((h,b,M)=>{$=ne(n,1,"level-up-btn svelte-xd3x4d",null,$,h),n.disabled=b,H(p,`Level ${j(t()),L(()=>t().level)??""} → ${j(t()),L(()=>t().level+1)??""}`),H(N,`${M??""} EXP`)},[()=>({affordable:t().canLevelUp()}),()=>(j(t()),L(()=>!t().canLevelUp())),()=>(j(t()),L(()=>o(t().getLevelUpCost())))]),F("click",n,f),E(r,c),be()}var gr=O("<div><!> </div>"),pr=O('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),hr=O('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function mr(r,a){_e(a,!1);let e=W(a,"game",12),t=W(a,"config",12),s=ce(""),i=ce(""),l=ce("success"),o=ce(!1),f=ce(!1);function c(T,Z,oe=3e3){B(i,T),B(l,Z),B(o,!0),setTimeout(()=>{B(o,!1)},oe)}function _(){try{const T=e().exportSave(!0);navigator.clipboard.writeText(T),n(T,"tomeclicker-save-encrypted.json"),c("Encrypted save exported and copied to clipboard!","success")}catch{c("Failed to export save","error")}}function y(){try{const T=e().exportSave(!1);navigator.clipboard.writeText(T),n(T,"tomeclicker-save-unencrypted.json"),c("Unencrypted save exported (not leaderboard eligible)","warning")}catch{c("Failed to export save","error")}}function n(T,Z){const oe=new Blob([T],{type:"application/json"}),pe=URL.createObjectURL(oe),ue=document.createElement("a");ue.href=pe,ue.download=Z,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(pe)}function $(){if(!u(s).trim()){c("Please paste save data first","error");return}const T=e().importSave(u(s).trim());T.success?(c(T.warning||"Save imported successfully!",T.warning?"warning":"success"),B(s,""),e().autoSave()):c(T.error||"Failed to import save","error")}function g(){try{e().autoSave(),c("Game saved to browser storage!","success")}catch{c("Failed to save game","error")}}function p(){try{const T=e().loadFromLocalStorage(),Z=T?!1:e().loadFromCookies();T||Z?(c(`Game loaded from ${T?"localStorage":"cookies"}!`,"success"),e(e())):c("No save found in browser storage","warning")}catch{c("Failed to load game","error")}}function x(){B(f,!0)}function N(){B(f,!1)}function C(){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),B(f,!1),c("Game has been completely reset!","success")}catch{c("Failed to reset game","error")}}setInterval(()=>{e().autoSave()},3e4),t(t()),me();var k=hr(),S=m(v(k),2);{var U=T=>{var Z=gr(),oe=v(Z);{var pe=xe=>{Ka(xe,{size:20})},ue=xe=>{var Qe=D(),At=P(Qe);{var Nt=we=>{Ue(we,{size:20})},jt=we=>{Ue(we,{size:20})};G(At,we=>{u(l)==="warning"?we(Nt):we(jt,!1)},!0)}E(xe,Qe)};G(oe,xe=>{u(l)==="success"?xe(pe):xe(ue,!1)})}var Ae=m(oe);d(Z),ve(()=>{ne(Z,1,`message ${u(l)??""}`,"svelte-rfjmb6"),H(Ae,` ${u(i)??""}`)}),E(T,Z)};G(S,T=>{u(o)&&T(U)})}var w=m(S,2),h=v(w),b=m(v(h),4),M=v(b),A=v(M);wt(A,{size:20}),he(),d(M);var z=m(M,2),q=v(z);nt(q,{size:20}),he(),d(z),d(b),d(h);var V=m(h,2),ee=m(v(V),4),X=v(ee),de=v(X);ot(de,{size:20}),he(),d(X);var J=m(X,2),Y=v(J);ot(Y,{size:20}),he(),d(J),d(ee),he(2),d(V);var K=m(V,2),re=m(v(K),4);La(re);var se=m(re,2),te=v(se);nt(te,{size:20}),he(),d(se),d(K);var R=m(K,2),ge=m(v(R),2),Ce=v(ge),Ve=m(v(Ce));d(Ce);var Te=m(Ce,2),ye=m(v(Te));d(Te);var $e=m(Te,2),Et=m(v($e));d($e);var Ye=m($e,2),Lt=m(v(Ye));d(Ye),d(ge),d(R);var Ze=m(R,2),De=m(v(Ze),4),Mt=v(De);Ue(Mt,{size:20}),he(),d(De),d(Ze),d(w);var Ct=m(w,2);{var Tt=T=>{var Z=pr(),oe=v(Z),pe=m(v(oe),8),ue=v(pe),Ae=m(ue,2),xe=v(Ae);Ue(xe,{size:20}),he(),d(Ae),d(pe),d(oe),d(Z),F("click",ue,N),F("click",Ae,C),E(T,Z)};G(Ct,T=>{u(f)&&T(Tt)})}d(k),ve((T,Z,oe,pe)=>{se.disabled=T,H(Ve,` ${j(e()),L(()=>e().saveIntegrity)??""}`),H(ye,` ${Z??""}`),H(Et,` ${oe??""}`),H(Lt,` ${pe??""}`)},[()=>(u(s),L(()=>!u(s).trim())),()=>(j(e()),L(()=>new Date(e().lastValidation).toLocaleString())),()=>(j(e()),L(()=>e().exp.toLocaleString())),()=>(j(e()),L(()=>e().lifetimeExp.toLocaleString()))]),F("click",M,g),F("click",z,p),F("click",X,_),F("click",J,y),Ra(re,()=>u(s),T=>B(s,T)),F("click",se,$),F("click",De,x),E(r,k),be()}var _r=O('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <p> </p> <h2 class="svelte-mt7s6l">test buttons</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">EXP</button> <button class="svelte-mt7s6l">Tick</button> <button class="svelte-mt7s6l">100EXP</button></div> <h2 class="svelte-mt7s6l">game settings</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">Dark Mode</button> <!></div></div>');function br(r,a){_e(a,!1);let e=W(a,"config",12),t=W(a,"game",12);me();var s=_r(),i=m(v(s),2),l=v(i);d(i);var o=m(i,4),f=v(o),c=m(f,2),_=m(c,2);d(o);var y=m(o,4),n=v(y),$=m(n,2);{var g=x=>{ar(x,{size:48})},p=x=>{tr(x,{size:48})};G($,x=>{j(e()),L(()=>e().darkmode)?x(g):x(p,!1)})}d(y),d(s),ve(()=>H(l,`EXP: ${j(t()),L(()=>t().exp)??""} Tick: ${j(t()),L(()=>t().tick)??""} Level: ${j(t()),L(()=>t().level)??""}`)),F("click",f,()=>{t(t().exp++,!0)}),F("click",c,()=>{t(t().tick++,!0)}),F("click",_,()=>{t(t().exp+=100,!0)}),F("click",n,()=>{e(e().darkmode=!e().darkmode,!0)}),E(r,s),be()}var yr=O(`<div class="story svelte-1wes0v7"><div class="scrollbox svelte-1wes0v7"><h1 class="svelte-1wes0v7">storyline</h1> <ol><li class="svelte-1wes0v7">This is a chapter</li> <li class="svelte-1wes0v7">This is another chapter</li> <li class="svelte-1wes0v7">Revenge of the chapter</li> <li class="svelte-1wes0v7">Hey look, it's a chapter!</li> <li class="svelte-1wes0v7">In Soviet Russia, chapter reads you</li> <li class="svelte-1wes0v7">Chapter Revisited</li> <li class="svelte-1wes0v7">YOLO, so here's a chapter</li> <li class="svelte-1wes0v7">The chapter to end all chapters</li> <li class="svelte-1wes0v7">The final chapter</li></ol> <h2>more stuff</h2> <ul><li class="svelte-1wes0v7">The extra chapter</li> <li class="svelte-1wes0v7">This is another extra chapter</li> <li class="svelte-1wes0v7">The extended chapter</li> <li class="svelte-1wes0v7">The uncut chapter</li> <li class="svelte-1wes0v7">The chapter to not screw everything up</li> <li class="svelte-1wes0v7">Babbitaboopi</li></ul></div></div>`);function xr(r,a){let e=W(a,"game",12);e(e());var t=yr();E(r,t)}var kr=O('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),$r=O('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Sr=O("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),wr=O('<div class="view svelte-1l6ze8i"><!></div>');function Er(r,a){_e(a,!1);let e=W(a,"config",12),t=W(a,"game",12);me();var s=wr(),i=v(s);{var l=f=>{nr(f,{get config(){return e()},set config(c){e(c)},get game(){return t()},set game(c){t(c)},$$legacy:!0})},o=f=>{var c=D(),_=P(c);{var y=$=>{fr($,{get config(){return e()},set config(g){e(g)},get game(){return t()},set game(g){t(g)},$$legacy:!0})},n=$=>{var g=D(),p=P(g);{var x=C=>{mr(C,{get config(){return e()},set config(k){e(k)},get game(){return t()},set game(k){t(k)},$$legacy:!0})},N=C=>{var k=D(),S=P(k);{var U=h=>{xr(h,{get game(){return t()},set game(b){t(b)},$$legacy:!0})},w=h=>{var b=D(),M=P(b);{var A=q=>{br(q,{get config(){return e()},set config(V){e(V)},get game(){return t()},set game(V){t(V)},$$legacy:!0})},z=q=>{var V=D(),ee=P(V);{var X=J=>{var Y=kr();E(J,Y)},de=J=>{var Y=D(),K=P(Y);{var re=te=>{var R=$r();E(te,R)},se=te=>{var R=Sr();E(te,R)};G(K,te=>{t()?te(se,!1):te(re)},!0)}E(J,Y)};G(ee,J=>{j(t()),L(()=>t()&&t().menu==="about")?J(X):J(de,!1)},!0)}E(q,V)};G(M,q=>{j(t()),L(()=>t()&&t().menu==="settings")?q(A):q(z,!1)},!0)}E(h,b)};G(S,h=>{j(t()),L(()=>t()&&t().menu==="story")?h(U):h(w,!1)},!0)}E(C,k)};G(p,C=>{j(t()),L(()=>t()&&t().menu==="saves")?C(x):C(N,!1)},!0)}E($,g)};G(_,$=>{j(t()),L(()=>t()&&t().menu==="upgrades")?$(y):$(n,!1)},!0)}E(f,c)};G(i,f=>{j(t()),L(()=>t()&&t().menu==="practice")?f(l):f(o,!1)})}d(s),E(r,s),be()}var Lr=O('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Mr=O('<footer class="footer svelte-1uha8ag"><!></footer>'),Cr=O('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),Tr=O('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),Ar=O("<div><!></div>");function Pr(r,a){_e(a,!1);let e=ce(new Ha("prussian-blue",!0)),t=ce();Dt(()=>{B(t,new Xa),setTimeout(()=>{u(t)&&(console.log("🔄 Attempting to load saved data..."),u(t).loadFromLocalStorage()?console.log("✅ Game loaded from localStorage"):(console.log("📱 LocalStorage failed, trying cookies..."),u(t).loadFromCookies()),console.log("🎮 Final game state after load attempt:",{exp:u(t).exp,lifetimeExp:u(t).lifetimeExp}),B(t,u(t)))},100);const c=setInterval(()=>{u(t)&&u(t).autoSave()},15e3);return()=>{clearInterval(c)}});let s=ce("");pt(()=>u(e),()=>{B(s,u(e).getTheme())}),ht(),me();var i=Ar();Ot(c=>{var _=Lr();Ma.title="TomeClicker",he(6),E(c,_)});var l=v(i);{var o=c=>{var _=Cr(),y=P(_);{var n=N=>{Ga(N,{get game(){return u(t)},set game(C){B(t,C)},$$legacy:!0})};G(y,N=>{u(t),L(()=>u(t).showHeader())&&N(n)})}var $=m(y,2),g=v($);Er(g,{get game(){return u(t)},set game(N){B(t,N)},get config(){return u(e)},set config(N){B(e,N)},$$legacy:!0}),d($);var p=m($,2);{var x=N=>{var C=Mr(),k=v(C);lr(k,{get game(){return u(t)},set game(S){B(t,S)},$$legacy:!0}),d(C),E(N,C)};G(p,N=>{u(t),L(()=>u(t).showMenu())&&N(x)})}E(c,_)},f=c=>{var _=Tr();E(c,_)};G(l,c=>{u(t)?c(o):c(f,!1)})}d(i),ve(()=>ne(i,1,`app ${u(s)??""}`,"svelte-1uha8ag")),E(r,i),be()}export{Pr as component};
