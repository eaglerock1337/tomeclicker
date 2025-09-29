import"../chunks/DsnmJJEf.js";import{i as be}from"../chunks/Bvw1GPGt.js";import{i as Ut,a as zt,c as Pt,d as It,n as Ft,b as Vt,s as O,e as F,o as Dt,f as Ot}from"../chunks/DzOk3YHX.js";import{w as V,x as Ve,v as qe,h as n,N as qt,y as Rt,H as Ht,z as lt,A as De,B as Le,K as we,a9 as Xt,aC as Bt,D as Te,G as Gt,F as Ce,az as pt,ap as ht,C as mt,aQ as ce,a0 as ot,a8 as Wt,I as st,J as _t,aU as Jt,aV as We,ag as Ae,aW as Kt,aX as Yt,am as Zt,aY as Qt,ay as ea,aZ as ta,S as bt,a_ as aa,E as ra,a$ as sa,aB as ia,au as la,aP as yt,b0 as oa,b1 as na,aq as ca,b2 as va,b3 as da,b4 as ua,U as fa,b5 as ga,b6 as pa,b7 as ha,b8 as ma,b9 as _a,ba,bb as ya,aO as xa,e as w,a5 as ka,bc as $a,p as ye,l as R,n as d,o as u,q as h,t as de,i as T,a as S,m as xe,bd as Sa,c as q,f as D,aS as wa,be as La,bf as tt,Q as B,bg as xt,aT as Je,ah as _e,bh as Ea,bi as Ma}from"../chunks/hgk8NPT6.js";import{p as Y,l as te,s as ie,i as K}from"../chunks/COlMwlpH.js";function Ca(r,a){return a}function Ta(r,a,e){for(var t=r.items,s=[],i=a.length,l=0;l<i;l++)Qt(a[l].e,s,!0);var o=i>0&&s.length===0&&e!==null;if(o){var f=e.parentNode;ea(f),f.append(e),t.clear(),pe(r,a[0].prev,a[i-1].next)}ta(s,()=>{for(var v=0;v<i;v++){var m=a[v];o||(t.delete(m.k),pe(r,m.prev,m.next)),Ae(m.e,!o)}})}function kt(r,a,e,t,s,i=null){var l=r,o={flags:a,items:new Map,first:null};V&&Ve();var f=null,v=!1,m=new Map,k=qt(()=>{var p=e();return ht(p)?p:p==null?[]:pt(p)}),c,x;function g(){Aa(x,c,o,m,l,s,a,t,e),i!==null&&(c.length===0?f?st(f):f=Te(()=>i(l)):f!==null&&_t(f,()=>{f=null}))}qe(()=>{x??=bt,c=n(k);var p=c.length;if(v&&p===0)return;v=p===0;let b=!1;if(V){var A=Rt(l)===Ht;A!==(p===0)&&(l=lt(),De(l),Le(!1),b=!0)}if(V){for(var M=null,$,_=0;_<p;_++){if(we.nodeType===Xt&&we.data===Bt){l=we,b=!0,Le(!1);break}var P=c[_],y=t(P,_);$=at(we,o,M,null,P,y,_,s,a,e),o.items.set(y,$),M=$}p>0&&De(lt())}if(V)p===0&&i&&(f=Te(()=>i(l)));else if(Gt()){var L=new Set,C=Ce;for(_=0;_<p;_+=1){P=c[_],y=t(P,_);var z=o.items.get(y)??m.get(y);z?$t(z,P,_):($=at(null,o,null,null,P,y,_,s,a,e,!0),m.set(y,$)),L.add(y)}for(const[j,G]of o.items)L.has(j)||C.skipped_effects.add(G.e);C.add_callback(g)}else g();b&&Le(!0),n(k)}),V&&(l=we)}function Aa(r,a,e,t,s,i,l,o,f){var v=a.length,m=e.items,k=e.first,c=k,x,g=null,p=[],b=[],A,M,$,_;for(_=0;_<v;_+=1){if(A=a[_],M=o(A,_),$=m.get(M),$===void 0){var P=t.get(M);if(P!==void 0){t.delete(M),m.set(M,P);var y=g?g.next:c;pe(e,g,P),pe(e,P,y),Ke(P,y,s),g=P}else{var L=c?c.e.nodes_start:s;g=at(L,e,g,g===null?e.first:g.next,A,M,_,i,l,f)}m.set(M,g),p=[],b=[],c=g.next;continue}if($t($,A,_),($.e.f&We)!==0&&st($.e),$!==c){if(x!==void 0&&x.has($)){if(p.length<b.length){var C=b[0],z;g=C.prev;var j=p[0],G=p[p.length-1];for(z=0;z<p.length;z+=1)Ke(p[z],C,s);for(z=0;z<b.length;z+=1)x.delete(b[z]);pe(e,j.prev,G.next),pe(e,g,j),pe(e,G,C),c=C,g=G,_-=1,p=[],b=[]}else x.delete($),Ke($,c,s),pe(e,$.prev,$.next),pe(e,$,g===null?e.first:g.next),pe(e,g,$),g=$;continue}for(p=[],b=[];c!==null&&c.k!==M;)(c.e.f&We)===0&&(x??=new Set).add(c),b.push(c),c=c.next;if(c===null)continue;$=c}p.push($),g=$,c=$.next}if(c!==null||x!==void 0){for(var W=x===void 0?[]:pt(x);c!==null;)(c.e.f&We)===0&&W.push(c),c=c.next;var Q=W.length;if(Q>0){var oe=null;Ta(e,W,oe)}}r.first=e.first&&e.first.e,r.last=g&&g.e;for(var ae of t.values())Ae(ae.e);t.clear()}function $t(r,a,e,t){Wt(r.v,a),r.i=e}function at(r,a,e,t,s,i,l,o,f,v,m){var k=(f&Kt)!==0,c=(f&Yt)===0,x=k?c?ce(s,!1,!1):ot(s):s,g=(f&Jt)===0?l:ot(l),p={i:g,v:x,k:i,a:null,e:null,prev:e,next:t};try{if(r===null){var b=document.createDocumentFragment();b.append(r=mt())}return p.e=Te(()=>o(r,x,g,v),V),p.e.prev=e&&e.e,p.e.next=t&&t.e,e===null?m||(a.first=p):(e.next=p,e.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{}}function Ke(r,a,e){for(var t=r.next?r.next.e.nodes_start:e,s=a?a.e.nodes_start:e,i=r.e.nodes_start;i!==null&&i!==t;){var l=Zt(i);s.before(i),i=l}}function pe(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function re(r,a,e,t,s){V&&Ve();var i=a.$$slots?.[e],l=!1;i===!0&&(i=a.children,l=!0),i===void 0||i(r,l?()=>t:t)}function Na(r,a,e,t,s,i){let l=V;V&&Ve();var o,f,v=null;V&&we.nodeType===aa&&(v=we,Ve());var m=V?we:r,k;qe(()=>{const c=a()||null;var x=sa;c!==o&&(k&&(c===null?_t(k,()=>{k=null,f=null}):c===f?st(k):Ae(k)),c&&c!==f&&(k=Te(()=>{if(v=V?v:document.createElementNS(x,c),ia(v,v),t){V&&Ut(c)&&v.append(document.createComment(""));var g=V?la(v):v.appendChild(mt());V&&(g===null?Le(!1):De(g)),t(v,g)}bt.nodes_end=v,m.before(v)})),o=c,o&&(f=o))},ra),l&&(Le(!0),De(m))}function ja(r,a){var e=void 0,t;qe(()=>{e!==(e=a())&&(t&&(Ae(t),t=null),e&&(t=Te(()=>{yt(()=>e(r))})))})}function St(r){var a,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(a=0;a<s;a++)r[a]&&(e=St(r[a]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function Ua(){for(var r,a,e=0,t="",s=arguments.length;e<s;e++)(r=arguments[e])&&(a=St(r))&&(t&&(t+=" "),t+=a);return t}function za(r){return typeof r=="object"?Ua(r):r??""}const nt=[...` 	
\r\f \v\uFEFF`];function Pa(r,a,e){var t=r==null?"":""+r;if(a&&(t=t?t+" "+a:a),e){for(var s in e)if(e[s])t=t?t+" "+s:s;else if(t.length)for(var i=s.length,l=0;(l=t.indexOf(s,l))>=0;){var o=l+i;(l===0||nt.includes(t[l-1]))&&(o===t.length||nt.includes(t[o]))?t=(l===0?"":t.substring(0,l))+t.substring(o+1):l=o}}return t===""?null:t}function ct(r,a=!1){var e=a?" !important;":";",t="";for(var s in r){var i=r[s];i!=null&&i!==""&&(t+=" "+s+": "+i+e)}return t}function Ye(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Ia(r,a){if(a){var e="",t,s;if(Array.isArray(a)?(t=a[0],s=a[1]):t=a,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,l=0,o=!1,f=[];t&&f.push(...Object.keys(t).map(Ye)),s&&f.push(...Object.keys(s).map(Ye));var v=0,m=-1;const p=r.length;for(var k=0;k<p;k++){var c=r[k];if(o?c==="/"&&r[k-1]==="*"&&(o=!1):i?i===c&&(i=!1):c==="/"&&r[k+1]==="*"?o=!0:c==='"'||c==="'"?i=c:c==="("?l++:c===")"&&l--,!o&&i===!1&&l===0){if(c===":"&&m===-1)m=k;else if(c===";"||k===p-1){if(m!==-1){var x=Ye(r.substring(v,m).trim());if(!f.includes(x)){c!==";"&&k++;var g=r.substring(v,k).trim();e+=" "+g+";"}}v=k+1,m=-1}}}}return t&&(e+=ct(t)),s&&(e+=ct(s,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function se(r,a,e,t,s,i){var l=r.__className;if(V||l!==e||l===void 0){var o=Pa(e,t,i);(!V||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):a?r.className=o:r.setAttribute("class",o)),r.__className=e}else if(i&&s!==i)for(var f in i){var v=!!i[f];(s==null||v!==!!s[f])&&r.classList.toggle(f,v)}return i}function Ze(r,a={},e,t){for(var s in e){var i=e[s];a[s]!==i&&(e[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,t))}}function Fa(r,a,e,t){var s=r.__style;if(V||s!==a){var i=Ia(a,t);(!V||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=a}else t&&(Array.isArray(t)?(Ze(r,e?.[0],t[0]),Ze(r,e?.[1],t[1],"important")):Ze(r,e,t));return t}function rt(r,a,e=!1){if(r.multiple){if(a==null)return;if(!ht(a))return oa();for(var t of r.options)t.selected=a.includes(vt(t));return}for(t of r.options){var s=vt(t);if(na(s,a)){t.selected=!0;return}}(!e||a!==void 0)&&(r.selectedIndex=-1)}function Va(r){var a=new MutationObserver(()=>{rt(r,r.__value)});a.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ca(()=>{a.disconnect()})}function vt(r){return"__value"in r?r.__value:r.value}const ze=Symbol("class"),Pe=Symbol("style"),wt=Symbol("is custom element"),Lt=Symbol("is html");function Da(r){if(V){var a=!1,e=()=>{if(!a){if(a=!0,r.hasAttribute("value")){var t=r.value;Oe(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var s=r.checked;Oe(r,"checked",null),r.checked=s}}};r.__on_r=e,ga(e),pa()}}function Oa(r,a){a?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Oe(r,a,e,t){var s=Et(r);V&&(s[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||s[a]!==(s[a]=e)&&(a==="loading"&&(r[_a]=e),e==null?r.removeAttribute(a):typeof e!="string"&&Mt(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function qa(r,a,e,t,s=!1,i=!1){if(V&&s&&r.tagName==="INPUT"){var l=r,o=l.type==="checkbox"?"defaultChecked":"defaultValue";o in e||Da(l)}var f=Et(r),v=f[wt],m=!f[Lt];let k=V&&v;k&&Le(!1);var c=a||{},x=r.tagName==="OPTION";for(var g in a)g in e||(e[g]=null);e.class?e.class=za(e.class):e[ze]&&(e.class=null),e[Pe]&&(e.style??=null);var p=Mt(r);for(const y in e){let L=e[y];if(x&&y==="value"&&L==null){r.value=r.__value="",c[y]=L;continue}if(y==="class"){var b=r.namespaceURI==="http://www.w3.org/1999/xhtml";se(r,b,L,t,a?.[ze],e[ze]),c[y]=L,c[ze]=e[ze];continue}if(y==="style"){Fa(r,L,a?.[Pe],e[Pe]),c[y]=L,c[Pe]=e[Pe];continue}var A=c[y];if(!(L===A&&!(L===void 0&&r.hasAttribute(y)))){c[y]=L;var M=y[0]+y[1];if(M!=="$$")if(M==="on"){const C={},z="$$"+y;let j=y.slice(2);var $=Vt(j);if(zt(j)&&(j=j.slice(0,-7),C.capture=!0),!$&&A){if(L!=null)continue;r.removeEventListener(j,c[z],C),c[z]=null}if(L!=null)if($)r[`__${j}`]=L,It([j]);else{let G=function(W){c[y].call(this,W)};c[z]=Pt(j,r,G,C)}else $&&(r[`__${j}`]=void 0)}else if(y==="style")Oe(r,y,L);else if(y==="autofocus")ua(r,!!L);else if(!v&&(y==="__value"||y==="value"&&L!=null))r.value=r.__value=L;else if(y==="selected"&&x)Oa(r,L);else{var _=y;m||(_=Ft(_));var P=_==="defaultValue"||_==="defaultChecked";if(L==null&&!v&&!P)if(f[y]=null,_==="value"||_==="checked"){let C=r;const z=a===void 0;if(_==="value"){let j=C.defaultValue;C.removeAttribute(_),C.defaultValue=j,C.value=C.__value=z?j:null}else{let j=C.defaultChecked;C.removeAttribute(_),C.defaultChecked=j,C.checked=z?j:!1}}else r.removeAttribute(y);else P||p.includes(_)&&(v||typeof L!="string")?(r[_]=L,_ in f&&(f[_]=fa)):typeof L!="function"&&Oe(r,_,L)}}}return k&&Le(!0),c}function dt(r,a,e=[],t=[],s,i=!1,l=!1){va(e,t,o=>{var f=void 0,v={},m=r.nodeName==="SELECT",k=!1;if(qe(()=>{var x=a(...o.map(n)),g=qa(r,f,x,s,i,l);k&&m&&"value"in x&&rt(r,x.value);for(let b of Object.getOwnPropertySymbols(v))x[b]||Ae(v[b]);for(let b of Object.getOwnPropertySymbols(x)){var p=x[b];b.description===da&&(!f||p!==f[b])&&(v[b]&&Ae(v[b]),v[b]=Te(()=>ja(r,()=>p))),g[b]=p}f=g}),m){var c=r;yt(()=>{rt(c,f.value,!0),Va(c)})}k=!0})}function Et(r){return r.__attributes??={[wt]:r.nodeName.includes("-"),[Lt]:r.namespaceURI===ha}}var ut=new Map;function Mt(r){var a=r.getAttribute("is")||r.nodeName,e=ut.get(a);if(e)return e;ut.set(a,e=[]);for(var t,s=r,i=Element.prototype;i!==s;){t=ba(s);for(var l in t)t[l].set&&e.push(l);s=ma(s)}return e}function Ra(r,a,e=a){var t=new WeakSet;ya(r,"input",async s=>{var i=s?r.defaultValue:r.value;if(i=Qe(r)?et(i):i,e(i),Ce!==null&&t.add(Ce),await xa(),i!==(i=a())){var l=r.selectionStart,o=r.selectionEnd;r.value=i??"",o!==null&&(r.selectionStart=l,r.selectionEnd=Math.min(o,r.value.length))}}),(V&&r.defaultValue!==r.value||w(a)==null&&r.value)&&(e(Qe(r)?et(r.value):r.value),Ce!==null&&t.add(Ce)),ka(()=>{var s=a();if(r===document.activeElement){var i=$a??Ce;if(t.has(i))return}Qe(r)&&s===et(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Qe(r){var a=r.type;return a==="number"||a==="range"}function et(r){return r===""?null:+r}class Ha{darkmode;theme;constructor(a,e){this.darkmode=e,this.theme=a}getTheme(){const a=this.darkmode?"dark":"light";return this.theme+"-"+a}}class Xa{name;tickrate;exp;lifetimeExp;level;tick;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(a){this.name=a||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&e.id!=="transcendent-focus"&&(this.clickMultiplier+=e.effectValue*e.currentLevel);this.level>1&&(this.clickMultiplier*=Math.pow(2,this.level-1));const a=this.upgrades["transcendent-focus"];a&&a.currentLevel>0&&(this.clickMultiplier*=Math.pow(5,a.currentLevel))}updateClickText(){if(this.canLevelUp())return"level up available";if(this.showUpgrades()){for(const a of Object.values(this.upgrades))if(this.canPurchaseUpgrade(a.id))return"upgrade available"}return this.lifetimeExp===0?"click me":""}migrateUpgrades(a){const e=this.initializeUpgrades();for(const t in e)a[t]&&(e[t].currentLevel=a[t].currentLevel);this.upgrades=e}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+50% EXP per click",baseCost:50,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.5},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+100% EXP per click",baseCost:16e3,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+150% EXP per click",baseCost:52e5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:1.5},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+200% EXP per click",baseCost:17e8,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+250% EXP per click",baseCost:555e9,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:2.5},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"5x total EXP per click",baseCost:1e3,costMultiplier:1.1,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:5}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){}calculateExpectedClickMultiplier(){let a=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(a+=e.effectValue*e.currentLevel);return a}markIntegrityViolation(a){this.saveIntegrity=`compromised-${a}-${Date.now()}`,console.warn(`Game integrity violation detected: ${a}`)}addExp(a){this.exp+=a,this.lifetimeExp+=a}getLevelUpCost(){return 1e4*Math.pow(100,this.level-1)}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(a){const e=this.upgrades[a];return e?a==="transcendent-focus"?e.baseCost*Math.pow(100,e.currentLevel):Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(a){const e=this.getUpgradeCost(a);return this.exp>=e}canPurchaseUpgrade(a){const e=this.upgrades[a];return e?this.canAffordUpgrade(a)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(a){if(!this.canPurchaseUpgrade(a))return!1;const e=this.upgrades[a],t=this.getUpgradeCost(a);return this.exp-=t,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=10}showMenu(){return this.lifetimeExp>=50}showUpgrades(){return this.lifetimeExp>=50}generateSaveHash(a){let e=0;for(let t=0;t<a.length;t++){const s=a.charCodeAt(t);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(a){const e="tomeclicker-save-key";let t="";for(let s=0;s<a.length;s++)t+=String.fromCharCode(a.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(t).toString("base64"):btoa(t)}decryptSave(a){try{let e;typeof atob>"u"?e=Buffer.from(a,"base64").toString():e=atob(a);const t="tomeclicker-save-key";let s="";for(let i=0;i<e.length;i++)s+=String.fromCharCode(e.charCodeAt(i)^t.charCodeAt(i%t.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(a=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},t=JSON.stringify(e);if(a){const s=this.generateSaveHash(t),i=this.encryptSave(t);return JSON.stringify({encrypted:!0,data:i,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(a){try{const e=JSON.parse(a);let t,s="";if(e.encrypted===!1)t=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const i=this.decryptSave(e.data);t=JSON.parse(i)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(t)?(this.name=t.name,this.exp=t.exp,this.lifetimeExp=t.lifetimeExp,this.level=t.level||1,this.migrateUpgrades(t.upgrades),this.saveIntegrity=t.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(a){return typeof a.name=="string"&&typeof a.exp=="number"&&typeof a.lifetimeExp=="number"&&(typeof a.level=="number"||a.level===void 0)&&typeof a.clickMultiplier=="number"&&typeof a.upgrades=="object"&&a.exp<=a.lifetimeExp}saveToCookies(){if(!(typeof document>"u"))try{const a=this.exportSave(!0),e=new Date(Date.now()+365*24*60*60*1e3).toUTCString();document.cookie=`tomeclicker_save=${encodeURIComponent(a)}; expires=${e}; path=/; SameSite=Lax`}catch(a){console.error("Failed to save to cookies:",a)}}loadFromCookies(){if(typeof document>"u")return!1;try{const a=document.cookie.split(";");for(const e of a){const[t,s]=e.trim().split("=");if(t==="tomeclicker_save"&&s){const i=this.importSave(decodeURIComponent(s));return i.success?!0:(console.error("Failed to load save from cookies:",i.error),!1)}}return!1}catch(a){return console.error("Error loading from cookies:",a),!1}}saveToLocalStorage(){if(!(typeof localStorage>"u"))try{const a=this.exportSave(!0);localStorage.setItem("tomeclicker_save",a),console.log("✅ Saved to localStorage")}catch(a){console.error("Failed to save to localStorage:",a)}}loadFromLocalStorage(){if(typeof localStorage>"u")return!1;try{const a=localStorage.getItem("tomeclicker_save");if(console.log("Loading from localStorage:",a?"Found data":"No data"),a){const e=this.importSave(a);return e.success?(console.log("✅ Loaded from localStorage successfully"),!0):(console.error("Failed to load save from localStorage:",e.error),!1)}return!1}catch(a){return console.error("Error loading from localStorage:",a),!1}}autoSave(){console.log("AutoSave triggered - Current state:",{exp:this.exp,lifetimeExp:this.lifetimeExp}),this.saveToLocalStorage(),this.saveToCookies()}}var Ba=R('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div></header>');function Ga(r,a){ye(a,!1);let e=Y(a,"game",8);be();var t=Ba(),s=d(t),i=d(s),l=d(i);u(i);var o=h(i,2),f=d(o);u(o),u(s),u(t),de(v=>{O(l,`EXP: ${v??""}`),O(f,`Level: ${T(e()),w(()=>e().level)??""}`)},[()=>(T(e()),w(()=>Math.floor(e().exp).toLocaleString()))]),S(r,t),xe()}/**
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
 */const Wa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ja=Sa("<svg><!><!></svg>");function le(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]),t=te(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ye(a,!1);let s=Y(a,"name",8,void 0),i=Y(a,"color",8,"currentColor"),l=Y(a,"size",8,24),o=Y(a,"strokeWidth",8,2),f=Y(a,"absoluteStrokeWidth",8,!1),v=Y(a,"iconNode",24,()=>[]);const m=(...g)=>g.filter((p,b,A)=>!!p&&A.indexOf(p)===b).join(" ");be();var k=Ja();dt(k,(g,p)=>({...Wa,...t,width:l(),height:l(),stroke:i(),"stroke-width":g,class:p}),[()=>(T(f()),T(o()),T(l()),w(()=>f()?Number(o())*24/Number(l()):o())),()=>(T(s()),T(e),w(()=>m("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var c=d(k);kt(c,1,v,Ca,(g,p)=>{var b=wa(()=>La(n(p),2));let A=()=>n(b)[0],M=()=>n(b)[1];var $=q(),_=D($);Na(_,A,!0,(P,y)=>{dt(P,()=>({...M()}))}),S(g,$)});var x=h(c);re(x,a,"default",{}),u(k),S(r,k),xe()}function Ka(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(r,ie({name:"circle-check-big"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ya(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(r,ie({name:"circle-question-mark"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function ft(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];le(r,ie({name:"download"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Za(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(r,ie({name:"info"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ct(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];le(r,ie({name:"mouse-pointer"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Tt(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(r,ie({name:"save"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Qa(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];le(r,ie({name:"settings"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function er(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(r,ie({name:"square-pen"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function tr(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];le(r,ie({name:"toggle-left"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function ar(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];le(r,ie({name:"toggle-right"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function rr(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];le(r,ie({name:"trending-up"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Fe(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(r,ie({name:"triangle-alert"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function gt(r,a){const e=te(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];le(r,ie({name:"upload"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=D(l);re(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}var sr=R('<button class="svelte-igdjqh"><p><!></p></button>'),ir=R('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function lr(r,a){ye(a,!1);let e=Y(a,"game",12);be();var t=ir(),s=d(t),i=d(s),l=d(i,!0);u(i),u(s);var o=h(s,2),f=d(o),v=d(f);let m;var k=d(v);Ct(k,{size:24}),u(v),u(f);var c=h(f,2);{var x=N=>{var I=sr(),Z=d(I);let H;var ee=d(Z);rr(ee,{size:24}),u(Z),u(I),de(J=>H=se(Z,1,"svelte-igdjqh",null,H,J),[()=>({red:e().menu==="upgrades"})]),F("click",I,()=>e(e().menu="upgrades",!0)),S(N,I)};K(c,N=>{T(e()),w(()=>e().showUpgrades())&&N(x)})}var g=h(c,2),p=d(g);let b;var A=d(p);er(A,{size:24}),u(p),u(g);var M=h(g,2),$=d(M);let _;var P=d($);Ya(P,{size:24}),u($),u(M);var y=h(M,2),L=d(y);let C;var z=d(L);Tt(z,{size:24}),u(L),u(y);var j=h(y,2),G=d(j);let W;var Q=d(G);Qa(Q,{size:24}),u(G),u(j);var oe=h(j,2),ae=d(oe);let ke;var U=d(ae);Za(U,{size:24}),u(ae),u(oe),u(o),u(t),de((N,I,Z,H,ee,J)=>{O(l,(T(e()),w(()=>e().menu))),m=se(v,1,"svelte-igdjqh",null,m,N),b=se(p,1,"svelte-igdjqh",null,b,I),_=se($,1,"svelte-igdjqh",null,_,Z),C=se(L,1,"svelte-igdjqh",null,C,H),W=se(G,1,"svelte-igdjqh",null,W,ee),ke=se(ae,1,"svelte-igdjqh",null,ke,J)},[()=>({red:e().menu==="practice"}),()=>({red:e().menu==="story"}),()=>({red:e().menu==="help"}),()=>({red:e().menu==="saves"}),()=>({red:e().menu==="settings"}),()=>({red:e().menu==="about"})]),F("click",f,()=>e(e().menu="practice",!0)),F("click",g,()=>e(e().menu="story",!0)),F("click",M,()=>e(e().menu="help",!0)),F("click",y,()=>e(e().menu="saves",!0)),F("click",j,()=>e(e().menu="settings",!0)),F("click",oe,()=>e(e().menu="about",!0)),S(r,t),xe()}var or=R('<div class="thebutton svelte-ylrqw9"><button class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> </div></button></div>');function nr(r,a){ye(a,!1);let e=Y(a,"config",12),t=Y(a,"game",12);function s(){if(!t())return;const m=t().getClickValue();t().addExp(m),t(t())}e(e()),be();var i=or(),l=d(i),o=d(l),f=d(o);Ct(f,{size:48});var v=h(f,2,!0);u(o),u(l),u(i),de(m=>O(v,m),[()=>(T(t()),w(()=>t()?t().updateClickText():"Loading..."))]),F("click",l,s),S(r,i),xe()}var cr=R('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button>'),vr=R('<h2 class="svelte-xd3x4d"> </h2> <p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p> <button class="purchase-btn svelte-xd3x4d"><!></button>',1),dr=R('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),ur=R('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><div class="special-buttons svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button></div> <!></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function fr(r,a){ye(a,!1);const e=ce(),t=ce();let s=Y(a,"game",12);Y(a,"config",8);let i=ce(null);function l(U){B(i,U)}function o(){n(i)&&s().purchaseUpgrade(n(i).id)&&(B(i,s().upgrades[n(i).id]),s(s()),s().autoSave())}function f(U){return U.toLocaleString()}function v(){s().levelUp()&&(s(s()),s().autoSave())}tt(()=>T(s()),()=>{B(e,Object.values(s().upgrades).filter(U=>U.id!=="transcendent-focus"))}),tt(()=>T(s()),()=>{B(t,s().upgrades["transcendent-focus"])}),xt(),be();var m=ur(),k=h(d(m),2),c=d(k),x=d(c),g=d(x);let p;var b=h(d(g),2),A=d(b);u(b);var M=h(b,2),$=d(M);u(M),u(g);var _=h(g,2);let P;var y=d(_),L=d(y,!0);u(y);var C=h(y,2),z=d(C);u(C);var j=h(C,2),G=d(j);u(j),u(_),u(x);var W=h(x,2);kt(W,1,()=>n(e),U=>U.id,(U,N)=>{var I=cr();let Z;var H=d(I),ee=d(H,!0);u(H);var J=h(H,2),Ee=d(J);u(J);var ue=h(J,2),Ne=d(ue);u(ue),u(I),de((he,je)=>{Z=se(I,1,"upgrade-btn svelte-xd3x4d",null,Z,he),O(ee,(n(N),w(()=>n(N).name))),O(Ee,`Level ${n(N),w(()=>n(N).currentLevel)??""}/${n(N),w(()=>n(N).maxLevel)??""}`),O(Ne,`${je??""} EXP`)},[()=>({selected:n(i)?.id===n(N).id,affordable:s().canAffordUpgrade(n(N).id),maxed:n(N).currentLevel>=n(N).maxLevel}),()=>(T(s()),n(N),w(()=>f(s().getUpgradeCost(n(N).id))))]),F("click",I,()=>l(n(N))),S(U,I)}),u(c);var Q=h(c,2),oe=d(Q);{var ae=U=>{var N=vr(),I=D(N),Z=d(I,!0);u(I);var H=h(I,2),ee=d(H,!0);u(H);var J=h(H,2),Ee=h(d(J));u(J);var ue=h(J,2),Ne=h(d(ue));u(ue);var he=h(ue,2),je=h(d(he));u(he);var $e=h(he,2),Re=d($e);{var Ie=ve=>{var fe=Je("MAX LEVEL");S(ve,fe)},He=ve=>{var fe=q(),Xe=D(fe);{var Be=E=>{var X=Je("CANNOT AFFORD");S(E,X)},Ge=E=>{var X=Je("PURCHASE");S(E,X)};K(Xe,E=>{T(s()),n(i),w(()=>!s().canAffordUpgrade(n(i).id))?E(Be):E(Ge,!1)},!0)}S(ve,fe)};K(Re,ve=>{n(i),w(()=>n(i).currentLevel>=n(i).maxLevel)?ve(Ie):ve(He,!1)})}u($e),de((ve,fe)=>{O(Z,(n(i),w(()=>n(i).name))),O(ee,(n(i),w(()=>n(i).description))),O(Ee,` ${n(i),w(()=>n(i).effect)??""}`),O(Ne,` ${ve??""} EXP`),O(je,` ${n(i),w(()=>n(i).currentLevel)??""}/${n(i),w(()=>n(i).maxLevel)??""}`),$e.disabled=fe},[()=>(T(s()),n(i),w(()=>f(s().getUpgradeCost(n(i).id)))),()=>(T(s()),n(i),w(()=>!s().canPurchaseUpgrade(n(i).id)))]),F("click",$e,o),S(U,N)},ke=U=>{var N=dr();S(U,N)};K(oe,U=>{n(i)?U(ae):U(ke,!1)})}u(Q),u(k),u(m),de((U,N,I,Z,H)=>{p=se(g,1,"special-upgrade-btn svelte-xd3x4d",null,p,U),g.disabled=N,O(A,`Level ${T(s()),w(()=>s().level)??""} → ${T(s()),w(()=>s().level+1)??""}`),O($,`${I??""} EXP`),P=se(_,1,"special-upgrade-btn svelte-xd3x4d",null,P,Z),_.disabled=(n(t),w(()=>n(t).currentLevel>=n(t).maxLevel)),O(L,(n(t),w(()=>n(t).name))),O(z,`Level ${n(t),w(()=>n(t).currentLevel)??""}/${n(t),w(()=>n(t).maxLevel)??""}`),O(G,`${H??""} EXP`)},[()=>({affordable:s().canLevelUp()}),()=>(T(s()),w(()=>!s().canLevelUp())),()=>(T(s()),w(()=>f(s().getLevelUpCost()))),()=>({selected:n(i)?.id===n(t).id,affordable:s().canAffordUpgrade(n(t).id),maxed:n(t).currentLevel>=n(t).maxLevel}),()=>(T(s()),n(t),w(()=>f(s().getUpgradeCost(n(t).id))))]),F("click",g,v),F("click",_,()=>l(n(t))),S(r,m),xe()}var gr=R("<div><!> </div>"),pr=R('<div class="modal-overlay svelte-rfjmb6"><div class="modal svelte-rfjmb6"><h3 class="svelte-rfjmb6">Confirm Hard Reset</h3> <p>This will permanently delete ALL your progress, including:</p> <ul class="svelte-rfjmb6"><li>All EXP and levels</li> <li>All upgrades</li> <li>All save data</li> <li>Browser storage</li></ul> <p><strong>This action cannot be undone!</strong></p> <div class="modal-buttons svelte-rfjmb6"><button class="cancel-btn svelte-rfjmb6">Cancel</button> <button class="confirm-reset-btn svelte-rfjmb6"><!> Confirm Reset</button></div></div></div>'),hr=R('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div> <div class="save-section danger-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Danger Zone</h2> <p>Permanently delete all progress and start over from the beginning.</p> <button class="danger-btn svelte-rfjmb6"><!> Hard Reset</button></div></div> <!></div>');function mr(r,a){ye(a,!1);let e=Y(a,"game",12),t=Y(a,"config",12),s=ce(""),i=ce(""),l=ce("success"),o=ce(!1),f=ce(!1);function v(E,X,ne=3e3){B(i,E),B(l,X),B(o,!0),setTimeout(()=>{B(o,!1)},ne)}function m(){try{const E=e().exportSave(!0);navigator.clipboard.writeText(E),c(E,"tomeclicker-save-encrypted.json"),v("Encrypted save exported and copied to clipboard!","success")}catch{v("Failed to export save","error")}}function k(){try{const E=e().exportSave(!1);navigator.clipboard.writeText(E),c(E,"tomeclicker-save-unencrypted.json"),v("Unencrypted save exported (not leaderboard eligible)","warning")}catch{v("Failed to export save","error")}}function c(E,X){const ne=new Blob([E],{type:"application/json"}),me=URL.createObjectURL(ne),ge=document.createElement("a");ge.href=me,ge.download=X,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(me)}function x(){if(!n(s).trim()){v("Please paste save data first","error");return}const E=e().importSave(n(s).trim());E.success?(v(E.warning||"Save imported successfully!",E.warning?"warning":"success"),B(s,""),e(e()),e().autoSave()):v(E.error||"Failed to import save","error")}function g(){try{e().autoSave(),v("Game saved to browser storage!","success")}catch{v("Failed to save game","error")}}function p(){try{const E=e().loadFromLocalStorage(),X=E?!1:e().loadFromCookies();E||X?(v(`Game loaded from ${E?"localStorage":"cookies"}!`,"success"),e(e())):v("No save found in browser storage","warning")}catch{v("Failed to load game","error")}}function b(){B(f,!0)}function A(){B(f,!1)}function M(){try{typeof localStorage<"u"&&localStorage.removeItem("tomeclicker_save"),typeof document<"u"&&(document.cookie="tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),e(e().name="A Stranger",!0),e(e().exp=0,!0),e(e().lifetimeExp=0,!0),e(e().level=1,!0),e(e().tick=0,!0),e(e().menu="practice",!0),e(e().clickMultiplier=1,!0),e(e().upgrades=e().initializeUpgrades(),!0),e(e().saveIntegrity="valid",!0),e(e().lastValidation=Date.now(),!0),e().recalculateClickMultiplier(),e(e()),B(f,!1),v("Game has been completely reset!","success")}catch{v("Failed to reset game","error")}}setInterval(()=>{e().autoSave()},3e4),t(t()),be();var $=hr(),_=h(d($),2);{var P=E=>{var X=gr(),ne=d(X);{var me=Se=>{Ka(Se,{size:20})},ge=Se=>{var it=q(),At=D(it);{var Nt=Me=>{Fe(Me,{size:20})},jt=Me=>{Fe(Me,{size:20})};K(At,Me=>{n(l)==="warning"?Me(Nt):Me(jt,!1)},!0)}S(Se,it)};K(ne,Se=>{n(l)==="success"?Se(me):Se(ge,!1)})}var Ue=h(ne);u(X),de(()=>{se(X,1,`message ${n(l)??""}`,"svelte-rfjmb6"),O(Ue,` ${n(i)??""}`)}),S(E,X)};K(_,E=>{n(o)&&E(P)})}var y=h(_,2),L=d(y),C=h(d(L),4),z=d(C),j=d(z);Tt(j,{size:20}),_e(),u(z);var G=h(z,2),W=d(G);gt(W,{size:20}),_e(),u(G),u(C),u(L);var Q=h(L,2),oe=h(d(Q),4),ae=d(oe),ke=d(ae);ft(ke,{size:20}),_e(),u(ae);var U=h(ae,2),N=d(U);ft(N,{size:20}),_e(),u(U),u(oe),_e(2),u(Q);var I=h(Q,2),Z=h(d(I),4);Ea(Z);var H=h(Z,2),ee=d(H);gt(ee,{size:20}),_e(),u(H),u(I);var J=h(I,2),Ee=h(d(J),2),ue=d(Ee),Ne=h(d(ue));u(ue);var he=h(ue,2),je=h(d(he));u(he);var $e=h(he,2),Re=h(d($e));u($e);var Ie=h($e,2),He=h(d(Ie));u(Ie),u(Ee),u(J);var ve=h(J,2),fe=h(d(ve),4),Xe=d(fe);Fe(Xe,{size:20}),_e(),u(fe),u(ve),u(y);var Be=h(y,2);{var Ge=E=>{var X=pr(),ne=d(X),me=h(d(ne),8),ge=d(me),Ue=h(ge,2),Se=d(Ue);Fe(Se,{size:20}),_e(),u(Ue),u(me),u(ne),u(X),F("click",ge,A),F("click",Ue,M),S(E,X)};K(Be,E=>{n(f)&&E(Ge)})}u($),de((E,X,ne,me)=>{H.disabled=E,O(Ne,` ${T(e()),w(()=>e().saveIntegrity)??""}`),O(je,` ${X??""}`),O(Re,` ${ne??""}`),O(He,` ${me??""}`)},[()=>(n(s),w(()=>!n(s).trim())),()=>(T(e()),w(()=>new Date(e().lastValidation).toLocaleString())),()=>(T(e()),w(()=>e().exp.toLocaleString())),()=>(T(e()),w(()=>e().lifetimeExp.toLocaleString()))]),F("click",z,g),F("click",G,p),F("click",ae,m),F("click",U,k),Ra(Z,()=>n(s),E=>B(s,E)),F("click",H,x),F("click",fe,b),S(r,$),xe()}var _r=R('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <p> </p> <h2 class="svelte-mt7s6l">test buttons</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">EXP</button> <button class="svelte-mt7s6l">Tick</button> <button class="svelte-mt7s6l">100EXP</button></div> <h2 class="svelte-mt7s6l">game settings</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">Dark Mode</button> <!></div></div>');function br(r,a){ye(a,!1);let e=Y(a,"config",12),t=Y(a,"game",12);be();var s=_r(),i=h(d(s),2),l=d(i);u(i);var o=h(i,4),f=d(o),v=h(f,2),m=h(v,2);u(o);var k=h(o,4),c=d(k),x=h(c,2);{var g=b=>{ar(b,{size:48})},p=b=>{tr(b,{size:48})};K(x,b=>{T(e()),w(()=>e().darkmode)?b(g):b(p,!1)})}u(k),u(s),de(()=>O(l,`EXP: ${T(t()),w(()=>t().exp)??""} Tick: ${T(t()),w(()=>t().tick)??""} Level: ${T(t()),w(()=>t().level)??""}`)),F("click",f,()=>{t(t().exp++,!0)}),F("click",v,()=>{t(t().tick++,!0)}),F("click",m,()=>{t(t().exp+=100,!0)}),F("click",c,()=>{e(e().darkmode=!e().darkmode,!0)}),S(r,s),xe()}var yr=R(`<div class="story svelte-1wes0v7"><div class="scrollbox svelte-1wes0v7"><h1 class="svelte-1wes0v7">storyline</h1> <ol><li class="svelte-1wes0v7">This is a chapter</li> <li class="svelte-1wes0v7">This is another chapter</li> <li class="svelte-1wes0v7">Revenge of the chapter</li> <li class="svelte-1wes0v7">Hey look, it's a chapter!</li> <li class="svelte-1wes0v7">In Soviet Russia, chapter reads you</li> <li class="svelte-1wes0v7">Chapter Revisited</li> <li class="svelte-1wes0v7">YOLO, so here's a chapter</li> <li class="svelte-1wes0v7">The chapter to end all chapters</li> <li class="svelte-1wes0v7">The final chapter</li></ol> <h2>more stuff</h2> <ul><li class="svelte-1wes0v7">The extra chapter</li> <li class="svelte-1wes0v7">This is another extra chapter</li> <li class="svelte-1wes0v7">The extended chapter</li> <li class="svelte-1wes0v7">The uncut chapter</li> <li class="svelte-1wes0v7">The chapter to not screw everything up</li> <li class="svelte-1wes0v7">Babbitaboopi</li></ul></div></div>`);function xr(r,a){let e=Y(a,"game",12);e(e());var t=yr();S(r,t)}var kr=R('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),$r=R('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),Sr=R("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),wr=R('<div class="view svelte-1l6ze8i"><!></div>');function Lr(r,a){ye(a,!1);let e=Y(a,"config",12),t=Y(a,"game",12);be();var s=wr(),i=d(s);{var l=f=>{nr(f,{get config(){return e()},set config(v){e(v)},get game(){return t()},set game(v){t(v)},$$legacy:!0})},o=f=>{var v=q(),m=D(v);{var k=x=>{fr(x,{get config(){return e()},set config(g){e(g)},get game(){return t()},set game(g){t(g)},$$legacy:!0})},c=x=>{var g=q(),p=D(g);{var b=M=>{mr(M,{get config(){return e()},set config($){e($)},get game(){return t()},set game($){t($)},$$legacy:!0})},A=M=>{var $=q(),_=D($);{var P=L=>{xr(L,{get game(){return t()},set game(C){t(C)},$$legacy:!0})},y=L=>{var C=q(),z=D(C);{var j=W=>{br(W,{get config(){return e()},set config(Q){e(Q)},get game(){return t()},set game(Q){t(Q)},$$legacy:!0})},G=W=>{var Q=q(),oe=D(Q);{var ae=U=>{var N=kr();S(U,N)},ke=U=>{var N=q(),I=D(N);{var Z=ee=>{var J=$r();S(ee,J)},H=ee=>{var J=Sr();S(ee,J)};K(I,ee=>{t()?ee(H,!1):ee(Z)},!0)}S(U,N)};K(oe,U=>{T(t()),w(()=>t()&&t().menu==="about")?U(ae):U(ke,!1)},!0)}S(W,Q)};K(z,W=>{T(t()),w(()=>t()&&t().menu==="settings")?W(j):W(G,!1)},!0)}S(L,C)};K(_,L=>{T(t()),w(()=>t()&&t().menu==="story")?L(P):L(y,!1)},!0)}S(M,$)};K(p,M=>{T(t()),w(()=>t()&&t().menu==="saves")?M(b):M(A,!1)},!0)}S(x,g)};K(m,x=>{T(t()),w(()=>t()&&t().menu==="upgrades")?x(k):x(c,!1)},!0)}S(f,v)};K(i,f=>{T(t()),w(()=>t()&&t().menu==="practice")?f(l):f(o,!1)})}u(s),S(r,s),xe()}var Er=R('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),Mr=R('<footer class="footer svelte-1uha8ag"><!></footer>'),Cr=R('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),Tr=R('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),Ar=R("<div><!></div>");function Ir(r,a){ye(a,!1);let e=ce(new Ha("prussian-blue",!0)),t=ce();Dt(()=>{B(t,new Xa),setTimeout(()=>{n(t)&&(console.log("🔄 Attempting to load saved data..."),n(t).loadFromLocalStorage()?console.log("✅ Game loaded from localStorage"):(console.log("📱 LocalStorage failed, trying cookies..."),n(t).loadFromCookies()),console.log("🎮 Final game state after load attempt:",{exp:n(t).exp,lifetimeExp:n(t).lifetimeExp}),B(t,n(t)))},100);const v=setInterval(()=>{n(t)&&n(t).autoSave()},15e3);return()=>{clearInterval(v)}});let s=ce("");tt(()=>n(e),()=>{B(s,n(e).getTheme())}),xt(),be();var i=Ar();Ot(v=>{var m=Er();Ma.title="TomeClicker",_e(6),S(v,m)});var l=d(i);{var o=v=>{var m=Cr(),k=D(m);{var c=A=>{Ga(A,{get game(){return n(t)},set game(M){B(t,M)},$$legacy:!0})};K(k,A=>{n(t),w(()=>n(t).showHeader())&&A(c)})}var x=h(k,2),g=d(x);Lr(g,{get game(){return n(t)},set game(A){B(t,A)},get config(){return n(e)},set config(A){B(e,A)},$$legacy:!0}),u(x);var p=h(x,2);{var b=A=>{var M=Mr(),$=d(M);lr($,{get game(){return n(t)},set game(_){B(t,_)},$$legacy:!0}),u(M),S(A,M)};K(p,A=>{n(t),w(()=>n(t).showMenu())&&A(b)})}S(v,m)},f=v=>{var m=Tr();S(v,m)};K(l,v=>{n(t)?v(o):v(f,!1)})}u(i),de(()=>se(i,1,`app ${n(s)??""}`,"svelte-1uha8ag")),S(r,i),xe()}export{Ir as component};
