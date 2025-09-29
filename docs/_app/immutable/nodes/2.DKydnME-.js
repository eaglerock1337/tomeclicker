import"../chunks/DsnmJJEf.js";import{i as ue}from"../chunks/Bvw1GPGt.js";import{i as St,a as Mt,c as Ct,d as Tt,n as Lt,b as Nt,s as D,e as R,o as Ge,f as At}from"../chunks/DzOk3YHX.js";import{w as I,x as Ae,v as Pe,h as p,N as jt,y as Ut,H as Pt,z as Ke,A as je,B as xe,K as _e,a9 as It,aC as zt,D as Se,G as Vt,F as Ee,az as it,ap as lt,C as nt,aQ as de,a0 as Ye,a8 as Dt,I as Be,J as ot,aU as qt,aV as ze,ag as Me,aW as Ot,aX as Ft,am as Ht,aY as Rt,ay as Xt,aZ as Bt,S as ct,a_ as Wt,E as Gt,a$ as Kt,aB as Yt,au as Jt,aP as vt,b0 as Qt,b1 as Zt,aq as ea,b2 as ta,b3 as aa,b4 as ra,U as sa,b5 as ia,b6 as la,b7 as na,b8 as oa,b9 as ca,ba as va,bb as da,aO as ua,e as M,a5 as fa,bc as pa,p as fe,l as F,n as d,o as u,q as m,t as oe,i as N,a as S,m as pe,bd as ha,c as q,f as z,aS as ga,be as ma,bf as dt,Q as J,bg as ut,aT as Ve,ah as ye,bh as _a,bi as ba}from"../chunks/hgk8NPT6.js";import{p as B,l as Q,s as ae,i as G}from"../chunks/COlMwlpH.js";function ya(r,a){return a}function xa(r,a,e){for(var t=r.items,s=[],i=a.length,l=0;l<i;l++)Rt(a[l].e,s,!0);var o=i>0&&s.length===0&&e!==null;if(o){var c=e.parentNode;Xt(c),c.append(e),t.clear(),ve(r,a[0].prev,a[i-1].next)}Bt(s,()=>{for(var v=0;v<i;v++){var _=a[v];o||(t.delete(_.k),ve(r,_.prev,_.next)),Me(_.e,!o)}})}function ft(r,a,e,t,s,i=null){var l=r,o={flags:a,items:new Map,first:null};I&&Ae();var c=null,v=!1,_=new Map,b=jt(()=>{var h=e();return lt(h)?h:h==null?[]:it(h)}),n,y;function f(){$a(y,n,o,_,l,s,a,t,e),i!==null&&(n.length===0?c?Be(c):c=Se(()=>i(l)):c!==null&&ot(c,()=>{c=null}))}Pe(()=>{y??=ct,n=p(b);var h=n.length;if(v&&h===0)return;v=h===0;let E=!1;if(I){var C=Ut(l)===Pt;C!==(h===0)&&(l=Ke(),je(l),xe(!1),E=!0)}if(I){for(var T=null,$,k=0;k<h;k++){if(_e.nodeType===It&&_e.data===zt){l=_e,E=!0,xe(!1);break}var U=n[k],w=t(U,k);$=Re(_e,o,T,null,U,w,k,s,a,e),o.items.set(w,$),T=$}h>0&&je(Ke())}if(I)h===0&&i&&(c=Se(()=>i(l)));else if(Vt()){var g=new Set,x=Ee;for(k=0;k<h;k+=1){U=n[k],w=t(U,k);var L=o.items.get(w)??_.get(w);L?pt(L,U,k):($=Re(null,o,null,null,U,w,k,s,a,e,!0),_.set(w,$)),g.add(w)}for(const[A,P]of o.items)g.has(A)||x.skipped_effects.add(P.e);x.add_callback(f)}else f();E&&xe(!0),p(b)}),I&&(l=_e)}function $a(r,a,e,t,s,i,l,o,c){var v=a.length,_=e.items,b=e.first,n=b,y,f=null,h=[],E=[],C,T,$,k;for(k=0;k<v;k+=1){if(C=a[k],T=o(C,k),$=_.get(T),$===void 0){var U=t.get(T);if(U!==void 0){t.delete(T),_.set(T,U);var w=f?f.next:n;ve(e,f,U),ve(e,U,w),De(U,w,s),f=U}else{var g=n?n.e.nodes_start:s;f=Re(g,e,f,f===null?e.first:f.next,C,T,k,i,l,c)}_.set(T,f),h=[],E=[],n=f.next;continue}if(pt($,C,k),($.e.f&ze)!==0&&Be($.e),$!==n){if(y!==void 0&&y.has($)){if(h.length<E.length){var x=E[0],L;f=x.prev;var A=h[0],P=h[h.length-1];for(L=0;L<h.length;L+=1)De(h[L],x,s);for(L=0;L<E.length;L+=1)y.delete(E[L]);ve(e,A.prev,P.next),ve(e,f,A),ve(e,P,x),n=x,f=P,k-=1,h=[],E=[]}else y.delete($),De($,n,s),ve(e,$.prev,$.next),ve(e,$,f===null?e.first:f.next),ve(e,f,$),f=$;continue}for(h=[],E=[];n!==null&&n.k!==T;)(n.e.f&ze)===0&&(y??=new Set).add(n),E.push(n),n=n.next;if(n===null)continue;$=n}h.push($),f=$,n=$.next}if(n!==null||y!==void 0){for(var O=y===void 0?[]:it(y);n!==null;)(n.e.f&ze)===0&&O.push(n),n=n.next;var V=O.length;if(V>0){var te=null;xa(e,O,te)}}r.first=e.first&&e.first.e,r.last=f&&f.e;for(var W of t.values())Me(W.e);t.clear()}function pt(r,a,e,t){Dt(r.v,a),r.i=e}function Re(r,a,e,t,s,i,l,o,c,v,_){var b=(c&Ot)!==0,n=(c&Ft)===0,y=b?n?de(s,!1,!1):Ye(s):s,f=(c&qt)===0?l:Ye(l),h={i:f,v:y,k:i,a:null,e:null,prev:e,next:t};try{if(r===null){var E=document.createDocumentFragment();E.append(r=nt())}return h.e=Se(()=>o(r,y,f,v),I),h.e.prev=e&&e.e,h.e.next=t&&t.e,e===null?_||(a.first=h):(e.next=h,e.e.next=h.e),t!==null&&(t.prev=h,t.e.prev=h.e),h}finally{}}function De(r,a,e){for(var t=r.next?r.next.e.nodes_start:e,s=a?a.e.nodes_start:e,i=r.e.nodes_start;i!==null&&i!==t;){var l=Ht(i);s.before(i),i=l}}function ve(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function ee(r,a,e,t,s){I&&Ae();var i=a.$$slots?.[e],l=!1;i===!0&&(i=a.children,l=!0),i===void 0||i(r,l?()=>t:t)}function ka(r,a,e,t,s,i){let l=I;I&&Ae();var o,c,v=null;I&&_e.nodeType===Wt&&(v=_e,Ae());var _=I?_e:r,b;Pe(()=>{const n=a()||null;var y=Kt;n!==o&&(b&&(n===null?ot(b,()=>{b=null,c=null}):n===c?Be(b):Me(b)),n&&n!==c&&(b=Se(()=>{if(v=I?v:document.createElementNS(y,n),Yt(v,v),t){I&&St(n)&&v.append(document.createComment(""));var f=I?Jt(v):v.appendChild(nt());I&&(f===null?xe(!1):je(f)),t(v,f)}ct.nodes_end=v,_.before(v)})),o=n,o&&(c=o))},Gt),l&&(xe(!0),je(_))}function wa(r,a){var e=void 0,t;Pe(()=>{e!==(e=a())&&(t&&(Me(t),t=null),e&&(t=Se(()=>{vt(()=>e(r))})))})}function ht(r){var a,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(a=0;a<s;a++)r[a]&&(e=ht(r[a]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function Ea(){for(var r,a,e=0,t="",s=arguments.length;e<s;e++)(r=arguments[e])&&(a=ht(r))&&(t&&(t+=" "),t+=a);return t}function Sa(r){return typeof r=="object"?Ea(r):r??""}const Je=[...` 	
\r\f \v\uFEFF`];function Ma(r,a,e){var t=r==null?"":""+r;if(a&&(t=t?t+" "+a:a),e){for(var s in e)if(e[s])t=t?t+" "+s:s;else if(t.length)for(var i=s.length,l=0;(l=t.indexOf(s,l))>=0;){var o=l+i;(l===0||Je.includes(t[l-1]))&&(o===t.length||Je.includes(t[o]))?t=(l===0?"":t.substring(0,l))+t.substring(o+1):l=o}}return t===""?null:t}function Qe(r,a=!1){var e=a?" !important;":";",t="";for(var s in r){var i=r[s];i!=null&&i!==""&&(t+=" "+s+": "+i+e)}return t}function qe(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function Ca(r,a){if(a){var e="",t,s;if(Array.isArray(a)?(t=a[0],s=a[1]):t=a,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,l=0,o=!1,c=[];t&&c.push(...Object.keys(t).map(qe)),s&&c.push(...Object.keys(s).map(qe));var v=0,_=-1;const h=r.length;for(var b=0;b<h;b++){var n=r[b];if(o?n==="/"&&r[b-1]==="*"&&(o=!1):i?i===n&&(i=!1):n==="/"&&r[b+1]==="*"?o=!0:n==='"'||n==="'"?i=n:n==="("?l++:n===")"&&l--,!o&&i===!1&&l===0){if(n===":"&&_===-1)_=b;else if(n===";"||b===h-1){if(_!==-1){var y=qe(r.substring(v,_).trim());if(!c.includes(y)){n!==";"&&b++;var f=r.substring(v,b).trim();e+=" "+f+";"}}v=b+1,_=-1}}}}return t&&(e+=Qe(t)),s&&(e+=Qe(s,!0)),e=e.trim(),e===""?null:e}return r==null?null:String(r)}function ne(r,a,e,t,s,i){var l=r.__className;if(I||l!==e||l===void 0){var o=Ma(e,t,i);(!I||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):a?r.className=o:r.setAttribute("class",o)),r.__className=e}else if(i&&s!==i)for(var c in i){var v=!!i[c];(s==null||v!==!!s[c])&&r.classList.toggle(c,v)}return i}function Oe(r,a={},e,t){for(var s in e){var i=e[s];a[s]!==i&&(e[s]==null?r.style.removeProperty(s):r.style.setProperty(s,i,t))}}function Ta(r,a,e,t){var s=r.__style;if(I||s!==a){var i=Ca(a,t);(!I||i!==r.getAttribute("style"))&&(i==null?r.removeAttribute("style"):r.style.cssText=i),r.__style=a}else t&&(Array.isArray(t)?(Oe(r,e?.[0],t[0]),Oe(r,e?.[1],t[1],"important")):Oe(r,e,t));return t}function Xe(r,a,e=!1){if(r.multiple){if(a==null)return;if(!lt(a))return Qt();for(var t of r.options)t.selected=a.includes(Ze(t));return}for(t of r.options){var s=Ze(t);if(Zt(s,a)){t.selected=!0;return}}(!e||a!==void 0)&&(r.selectedIndex=-1)}function La(r){var a=new MutationObserver(()=>{Xe(r,r.__value)});a.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ea(()=>{a.disconnect()})}function Ze(r){return"__value"in r?r.__value:r.value}const Te=Symbol("class"),Le=Symbol("style"),gt=Symbol("is custom element"),mt=Symbol("is html");function Na(r){if(I){var a=!1,e=()=>{if(!a){if(a=!0,r.hasAttribute("value")){var t=r.value;Ue(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var s=r.checked;Ue(r,"checked",null),r.checked=s}}};r.__on_r=e,ia(e),la()}}function Aa(r,a){a?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Ue(r,a,e,t){var s=_t(r);I&&(s[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||s[a]!==(s[a]=e)&&(a==="loading"&&(r[ca]=e),e==null?r.removeAttribute(a):typeof e!="string"&&bt(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function ja(r,a,e,t,s=!1,i=!1){if(I&&s&&r.tagName==="INPUT"){var l=r,o=l.type==="checkbox"?"defaultChecked":"defaultValue";o in e||Na(l)}var c=_t(r),v=c[gt],_=!c[mt];let b=I&&v;b&&xe(!1);var n=a||{},y=r.tagName==="OPTION";for(var f in a)f in e||(e[f]=null);e.class?e.class=Sa(e.class):e[Te]&&(e.class=null),e[Le]&&(e.style??=null);var h=bt(r);for(const w in e){let g=e[w];if(y&&w==="value"&&g==null){r.value=r.__value="",n[w]=g;continue}if(w==="class"){var E=r.namespaceURI==="http://www.w3.org/1999/xhtml";ne(r,E,g,t,a?.[Te],e[Te]),n[w]=g,n[Te]=e[Te];continue}if(w==="style"){Ta(r,g,a?.[Le],e[Le]),n[w]=g,n[Le]=e[Le];continue}var C=n[w];if(!(g===C&&!(g===void 0&&r.hasAttribute(w)))){n[w]=g;var T=w[0]+w[1];if(T!=="$$")if(T==="on"){const x={},L="$$"+w;let A=w.slice(2);var $=Nt(A);if(Mt(A)&&(A=A.slice(0,-7),x.capture=!0),!$&&C){if(g!=null)continue;r.removeEventListener(A,n[L],x),n[L]=null}if(g!=null)if($)r[`__${A}`]=g,Tt([A]);else{let P=function(O){n[w].call(this,O)};n[L]=Ct(A,r,P,x)}else $&&(r[`__${A}`]=void 0)}else if(w==="style")Ue(r,w,g);else if(w==="autofocus")ra(r,!!g);else if(!v&&(w==="__value"||w==="value"&&g!=null))r.value=r.__value=g;else if(w==="selected"&&y)Aa(r,g);else{var k=w;_||(k=Lt(k));var U=k==="defaultValue"||k==="defaultChecked";if(g==null&&!v&&!U)if(c[w]=null,k==="value"||k==="checked"){let x=r;const L=a===void 0;if(k==="value"){let A=x.defaultValue;x.removeAttribute(k),x.defaultValue=A,x.value=x.__value=L?A:null}else{let A=x.defaultChecked;x.removeAttribute(k),x.defaultChecked=A,x.checked=L?A:!1}}else r.removeAttribute(w);else U||h.includes(k)&&(v||typeof g!="string")?(r[k]=g,k in c&&(c[k]=sa)):typeof g!="function"&&Ue(r,k,g)}}}return b&&xe(!0),n}function et(r,a,e=[],t=[],s,i=!1,l=!1){ta(e,t,o=>{var c=void 0,v={},_=r.nodeName==="SELECT",b=!1;if(Pe(()=>{var y=a(...o.map(p)),f=ja(r,c,y,s,i,l);b&&_&&"value"in y&&Xe(r,y.value);for(let E of Object.getOwnPropertySymbols(v))y[E]||Me(v[E]);for(let E of Object.getOwnPropertySymbols(y)){var h=y[E];E.description===aa&&(!c||h!==c[E])&&(v[E]&&Me(v[E]),v[E]=Se(()=>wa(r,()=>h))),f[E]=h}c=f}),_){var n=r;vt(()=>{Xe(n,c.value,!0),La(n)})}b=!0})}function _t(r){return r.__attributes??={[gt]:r.nodeName.includes("-"),[mt]:r.namespaceURI===na}}var tt=new Map;function bt(r){var a=r.getAttribute("is")||r.nodeName,e=tt.get(a);if(e)return e;tt.set(a,e=[]);for(var t,s=r,i=Element.prototype;i!==s;){t=va(s);for(var l in t)t[l].set&&e.push(l);s=oa(s)}return e}function Ua(r,a,e=a){var t=new WeakSet;da(r,"input",async s=>{var i=s?r.defaultValue:r.value;if(i=Fe(r)?He(i):i,e(i),Ee!==null&&t.add(Ee),await ua(),i!==(i=a())){var l=r.selectionStart,o=r.selectionEnd;r.value=i??"",o!==null&&(r.selectionStart=l,r.selectionEnd=Math.min(o,r.value.length))}}),(I&&r.defaultValue!==r.value||M(a)==null&&r.value)&&(e(Fe(r)?He(r.value):r.value),Ee!==null&&t.add(Ee)),fa(()=>{var s=a();if(r===document.activeElement){var i=pa??Ee;if(t.has(i))return}Fe(r)&&s===He(r.value)||r.type==="date"&&!s&&!r.value||s!==r.value&&(r.value=s??"")})}function Fe(r){var a=r.type;return a==="number"||a==="range"}function He(r){return r===""?null:+r}class Pa{darkmode;theme;constructor(a,e){this.darkmode=e,this.theme=a}getTheme(){const a=this.darkmode?"dark":"light";return this.theme+"-"+a}}class Ia{name;tickrate;exp;lifetimeExp;level;tick;text;menu;clickMultiplier;upgrades;saveIntegrity;lastValidation;_validationKey;constructor(a){this.name=a||"A Stranger",this.tickrate=1e3,this.exp=0,this.lifetimeExp=0,this.level=1,this.tick=0,this.text="click me",this.menu="practice",this.clickMultiplier=1,this.upgrades=this.initializeUpgrades(),this.saveIntegrity="valid",this.lastValidation=Date.now(),this._validationKey=this.generateValidationKey(),this.startIntegrityMonitoring(),this.recalculateClickMultiplier()}recalculateClickMultiplier(){this.clickMultiplier=1;for(const a of Object.values(this.upgrades))a.effectType==="clickMultiplier"&&(this.clickMultiplier+=a.effectValue*a.currentLevel)}updateClickText(){return this.lifetimeExp>=50?"practice":"click me"}initializeUpgrades(){return{"basic-training":{id:"basic-training",name:"Basic Training",description:"Learn fundamental practice techniques",effect:"+5% EXP per click",baseCost:5,costMultiplier:1.15,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.05},"focused-practice":{id:"focused-practice",name:"Focused Practice",description:"Deep concentration yields greater rewards",effect:"+10% EXP per click",baseCost:25,costMultiplier:1.2,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.1},"mental-discipline":{id:"mental-discipline",name:"Mental Discipline",description:"Master your mind to unlock greater potential",effect:"+15% EXP per click",baseCost:100,costMultiplier:1.25,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.15},"advanced-techniques":{id:"advanced-techniques",name:"Advanced Techniques",description:"Complex methods for exponential growth",effect:"+25% EXP per click",baseCost:500,costMultiplier:1.3,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.25},"mastery-training":{id:"mastery-training",name:"Mastery Training",description:"Achieve perfect form and technique",effect:"+40% EXP per click",baseCost:2500,costMultiplier:1.35,maxLevel:100,currentLevel:0,effectType:"clickMultiplier",effectValue:.4},"transcendent-focus":{id:"transcendent-focus",name:"Transcendent Focus",description:"Reach beyond normal limitations",effect:"Double total EXP per click",baseCost:1e4,costMultiplier:2,maxLevel:25,currentLevel:0,effectType:"clickMultiplier",effectValue:1}}}generateValidationKey(){return typeof btoa>"u"?Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15):btoa(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}startIntegrityMonitoring(){if(typeof window>"u")return;setInterval(()=>{const t=Date.now();debugger;Date.now()-t>100&&this.markIntegrityViolation("dev-tools-detected")},5e3),setInterval(()=>{const t=this.calculateExpectedClickMultiplier();Math.abs(this.clickMultiplier-t)>.001&&this.markIntegrityViolation("click-multiplier-manipulation"),this.exp>this.lifetimeExp&&this.markIntegrityViolation("exp-exceeds-lifetime"),this.lastValidation=Date.now()},1e3)}calculateExpectedClickMultiplier(){let a=1;for(const e of Object.values(this.upgrades))e.effectType==="clickMultiplier"&&(a+=e.effectValue*e.currentLevel);return a}markIntegrityViolation(a){this.saveIntegrity=`compromised-${a}-${Date.now()}`,console.warn(`Game integrity violation detected: ${a}`)}addExp(a){this.exp+=a,this.lifetimeExp+=a,this.text=`+${a} EXP (${this.exp} total)`}getLevelUpCost(){return 1e4+(this.level-1)*100}canLevelUp(){return this.exp>=this.getLevelUpCost()}levelUp(){return this.canLevelUp()?(this.exp-=this.getLevelUpCost(),this.level++,!0):!1}getUpgradeCost(a){const e=this.upgrades[a];return e?Math.floor(e.baseCost*Math.pow(e.costMultiplier,e.currentLevel)):0}canAffordUpgrade(a){const e=this.getUpgradeCost(a);return this.exp>=e}canPurchaseUpgrade(a){const e=this.upgrades[a];return e?this.canAffordUpgrade(a)&&e.currentLevel<e.maxLevel:!1}purchaseUpgrade(a){if(!this.canPurchaseUpgrade(a))return!1;const e=this.upgrades[a],t=this.getUpgradeCost(a);return this.exp-=t,e.currentLevel++,this.recalculateClickMultiplier(),!0}getClickValue(){return this.clickMultiplier}showHeader(){return this.lifetimeExp>=50}showMenu(){return this.lifetimeExp>=100}showUpgrades(){return this.lifetimeExp>=100}generateSaveHash(a){let e=0;for(let t=0;t<a.length;t++){const s=a.charCodeAt(t);e=(e<<5)-e+s,e=e&e}return e.toString(36)+this._validationKey}encryptSave(a){const e="tomeclicker-save-key";let t="";for(let s=0;s<a.length;s++)t+=String.fromCharCode(a.charCodeAt(s)^e.charCodeAt(s%e.length));return typeof btoa>"u"?Buffer.from(t).toString("base64"):btoa(t)}decryptSave(a){try{let e;typeof atob>"u"?e=Buffer.from(a,"base64").toString():e=atob(a);const t="tomeclicker-save-key";let s="";for(let i=0;i<e.length;i++)s+=String.fromCharCode(e.charCodeAt(i)^t.charCodeAt(i%t.length));return s}catch{throw new Error("Invalid encrypted save data")}}exportSave(a=!0){const e={name:this.name,exp:this.exp,lifetimeExp:this.lifetimeExp,level:this.level,clickMultiplier:this.clickMultiplier,upgrades:this.upgrades,saveIntegrity:this.saveIntegrity,lastValidation:this.lastValidation,version:"0.1.0",timestamp:Date.now()},t=JSON.stringify(e);if(a){const s=this.generateSaveHash(t),i=this.encryptSave(t);return JSON.stringify({encrypted:!0,data:i,hash:s,version:"0.1.0"})}else return JSON.stringify({...e,encrypted:!1,warning:"This save is not eligible for leaderboard participation"})}importSave(a){try{const e=JSON.parse(a);let t,s="";if(e.encrypted===!1)t=e,this.saveIntegrity="unencrypted-import",s="This save is not eligible for leaderboard participation due to unencrypted import.";else if(e.encrypted===!0){const i=this.decryptSave(e.data),l=this.generateSaveHash(i);if(e.hash!==l)return{success:!1,error:"Save data appears to be corrupted or tampered with."};t=JSON.parse(i)}else return{success:!1,error:"Invalid save format."};return this.validateSaveData(t)?(this.name=t.name,this.exp=t.exp,this.lifetimeExp=t.lifetimeExp,this.level=t.level||1,this.upgrades=t.upgrades,this.saveIntegrity=t.saveIntegrity||this.saveIntegrity,this.lastValidation=Date.now(),this.recalculateClickMultiplier(),{success:!0,warning:s}):{success:!1,error:"Save data is invalid or corrupted."}}catch(e){return{success:!1,error:`Failed to import save: ${e}`}}}validateSaveData(a){return typeof a.name=="string"&&typeof a.exp=="number"&&typeof a.lifetimeExp=="number"&&(typeof a.level=="number"||a.level===void 0)&&typeof a.clickMultiplier=="number"&&typeof a.upgrades=="object"&&a.exp<=a.lifetimeExp}saveToCookies(){if(typeof document>"u")return;const a=this.exportSave(!0);document.cookie=`tomeclicker_save=${encodeURIComponent(a)}; expires=${new Date(Date.now()+365*24*60*60*1e3).toUTCString()}; path=/`}loadFromCookies(){if(typeof document>"u")return!1;const a=document.cookie.split(";");for(const e of a){const[t,s]=e.trim().split("=");if(t==="tomeclicker_save")return this.importSave(decodeURIComponent(s)).success}return!1}autoSave(){this.saveToCookies()}}var za=F('<header class="svelte-1xm1ks6"><div class="container svelte-1xm1ks6"><div class="item svelte-1xm1ks6"> </div> <div class="item svelte-1xm1ks6"> </div></div></header>');function Va(r,a){fe(a,!1);let e=B(a,"game",8);ue();var t=za(),s=d(t),i=d(s),l=d(i);u(i);var o=m(i,2),c=d(o);u(o),u(s),u(t),oe(()=>{D(l,`EXP: ${N(e()),M(()=>e().exp)??""}`),D(c,`Level: ${N(e()),M(()=>e().level)??""}`)}),S(r,t),pe()}/**
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
 */const Da={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var qa=ha("<svg><!><!></svg>");function re(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]),t=Q(e,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);fe(a,!1);let s=B(a,"name",8,void 0),i=B(a,"color",8,"currentColor"),l=B(a,"size",8,24),o=B(a,"strokeWidth",8,2),c=B(a,"absoluteStrokeWidth",8,!1),v=B(a,"iconNode",24,()=>[]);const _=(...f)=>f.filter((h,E,C)=>!!h&&C.indexOf(h)===E).join(" ");ue();var b=qa();et(b,(f,h)=>({...Da,...t,width:l(),height:l(),stroke:i(),"stroke-width":f,class:h}),[()=>(N(c()),N(o()),N(l()),M(()=>c()?Number(o())*24/Number(l()):o())),()=>(N(s()),N(e),M(()=>_("lucide-icon","lucide",s()?`lucide-${s()}`:"",e.class)))]);var n=d(b);ft(n,1,v,ya,(f,h)=>{var E=ga(()=>ma(p(h),2));let C=()=>p(E)[0],T=()=>p(E)[1];var $=q(),k=z($);ka(k,C,!0,(U,w)=>{et(U,()=>({...T()}))}),S(f,$)});var y=m(n);ee(y,a,"default",{}),u(b),S(r,b),pe()}function Oa(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];re(r,ae({name:"circle-check-big"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Fa(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];re(r,ae({name:"circle-question-mark"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function at(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];re(r,ae({name:"download"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ha(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];re(r,ae({name:"info"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function yt(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];re(r,ae({name:"mouse-pointer"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function xt(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];re(r,ae({name:"save"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ra(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];re(r,ae({name:"settings"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Xa(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];re(r,ae({name:"square-pen"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ba(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];re(r,ae({name:"toggle-left"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Wa(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];re(r,ae({name:"toggle-right"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ga(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];re(r,ae({name:"trending-up"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function rt(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];re(r,ae({name:"triangle-alert"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}function st(r,a){const e=Q(a,["children","$$slots","$$events","$$legacy"]);/**
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
 */const t=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];re(r,ae({name:"upload"},()=>e,{get iconNode(){return t},children:(s,i)=>{var l=q(),o=z(l);ee(o,a,"default",{}),S(s,l)},$$slots:{default:!0}}))}var Ka=F('<button class="svelte-igdjqh"><p><!></p></button>'),Ya=F('<div class="navbar svelte-igdjqh"><div class="page-name svelte-igdjqh"><span class="svelte-igdjqh"> </span></div> <div class="menu svelte-igdjqh"><button class="svelte-igdjqh"><p><!></p></button> <!> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button> <button class="svelte-igdjqh"><p><!></p></button></div></div>');function Ja(r,a){fe(a,!1);let e=B(a,"game",12);ue();var t=Ya(),s=d(t),i=d(s),l=d(i,!0);u(i),u(s);var o=m(s,2),c=d(o),v=d(c);let _;var b=d(v);yt(b,{size:24}),u(v),u(c);var n=m(c,2);{var y=K=>{var Y=Ka(),ie=d(Y);let le;var Z=d(ie);Ga(Z,{size:24}),u(ie),u(Y),oe(H=>le=ne(ie,1,"svelte-igdjqh",null,le,H),[()=>({red:e().menu==="upgrades"})]),R("click",Y,()=>e(e().menu="upgrades",!0)),S(K,Y)};G(n,K=>{N(e()),M(()=>e().showUpgrades())&&K(y)})}var f=m(n,2),h=d(f);let E;var C=d(h);Xa(C,{size:24}),u(h),u(f);var T=m(f,2),$=d(T);let k;var U=d($);Fa(U,{size:24}),u($),u(T);var w=m(T,2),g=d(w);let x;var L=d(g);xt(L,{size:24}),u(g),u(w);var A=m(w,2),P=d(A);let O;var V=d(P);Ra(V,{size:24}),u(P),u(A);var te=m(A,2),W=d(te);let se;var X=d(W);Ha(X,{size:24}),u(W),u(te),u(o),u(t),oe((K,Y,ie,le,Z,H)=>{D(l,(N(e()),M(()=>e().menu))),_=ne(v,1,"svelte-igdjqh",null,_,K),E=ne(h,1,"svelte-igdjqh",null,E,Y),k=ne($,1,"svelte-igdjqh",null,k,ie),x=ne(g,1,"svelte-igdjqh",null,x,le),O=ne(P,1,"svelte-igdjqh",null,O,Z),se=ne(W,1,"svelte-igdjqh",null,se,H)},[()=>({red:e().menu==="practice"}),()=>({red:e().menu==="story"}),()=>({red:e().menu==="help"}),()=>({red:e().menu==="saves"}),()=>({red:e().menu==="settings"}),()=>({red:e().menu==="about"})]),R("click",c,()=>e(e().menu="practice",!0)),R("click",f,()=>e(e().menu="story",!0)),R("click",T,()=>e(e().menu="help",!0)),R("click",w,()=>e(e().menu="saves",!0)),R("click",A,()=>e(e().menu="settings",!0)),R("click",te,()=>e(e().menu="about",!0)),S(r,t),pe()}var Qa=F('<div class="thebutton svelte-ylrqw9"><button class="svelte-ylrqw9"><div class="item svelte-ylrqw9"><!><br/> <br/> <small> </small></div></button></div>');function Za(r,a){fe(a,!1);let e=B(a,"config",12),t=B(a,"game",12);function s(){const n=t().getClickValue();t().addExp(n),t(t())}e(e()),ue();var i=Qa(),l=d(i),o=d(l),c=d(o);yt(c,{size:48});var v=m(c,2,!0),_=m(v,3),b=d(_);u(_),u(o),u(l),u(i),oe((n,y,f)=>{D(v,n),D(b,`EXP: ${y??""} | Click: ${f??""}`)},[()=>(N(t()),M(()=>t().updateClickText())),()=>(N(t()),M(()=>t().exp.toFixed(1))),()=>(N(t()),M(()=>t().getClickValue().toFixed(1)))]),R("click",l,s),S(r,i),pe()}var er=F('<button><div class="upgrade-name svelte-xd3x4d"> </div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button>'),tr=F('<h2 class="svelte-xd3x4d"> </h2> <p class="description svelte-xd3x4d"> </p> <p class="effect svelte-xd3x4d"><strong>Effect:</strong> </p> <p class="cost svelte-xd3x4d"><strong>Cost:</strong> </p> <p class="level svelte-xd3x4d"><strong>Level:</strong> </p> <button class="purchase-btn svelte-xd3x4d"><!></button>',1),ar=F('<p class="select-prompt svelte-xd3x4d">Select an upgrade to view details</p>'),rr=F('<div class="upgrades svelte-xd3x4d"><h1 class="svelte-xd3x4d">upgrades</h1> <div class="upgrades-layout svelte-xd3x4d"><div class="upgrade-grid svelte-xd3x4d"><button><div class="upgrade-name svelte-xd3x4d">Level Up</div> <div class="upgrade-level svelte-xd3x4d"> </div> <div class="upgrade-cost svelte-xd3x4d"> </div></button> <!></div> <div class="upgrade-details svelte-xd3x4d"><!></div></div></div>');function sr(r,a){fe(a,!1);const e=de();let t=B(a,"game",12);B(a,"config",8);let s=de(null);function i(g){J(s,g)}function l(){p(s)&&t().purchaseUpgrade(p(s).id)&&J(s,t().upgrades[p(s).id])}function o(g){return g.toLocaleString()}function c(){t().levelUp()&&t(t())}dt(()=>N(t()),()=>{J(e,Object.values(t().upgrades))}),ut(),ue();var v=rr(),_=m(d(v),2),b=d(_),n=d(b);let y;var f=m(d(n),2),h=d(f);u(f);var E=m(f,2),C=d(E);u(E),u(n);var T=m(n,2);ft(T,1,()=>p(e),g=>g.id,(g,x)=>{var L=er();let A;var P=d(L),O=d(P,!0);u(P);var V=m(P,2),te=d(V);u(V);var W=m(V,2),se=d(W);u(W),u(L),oe((X,K)=>{A=ne(L,1,"upgrade-btn svelte-xd3x4d",null,A,X),D(O,(p(x),M(()=>p(x).name))),D(te,`Level ${p(x),M(()=>p(x).currentLevel)??""}/${p(x),M(()=>p(x).maxLevel)??""}`),D(se,`${K??""} EXP`)},[()=>({selected:p(s)?.id===p(x).id,affordable:t().canAffordUpgrade(p(x).id),maxed:p(x).currentLevel>=p(x).maxLevel}),()=>(N(t()),p(x),M(()=>o(t().getUpgradeCost(p(x).id))))]),R("click",L,()=>i(p(x))),S(g,L)}),u(b);var $=m(b,2),k=d($);{var U=g=>{var x=tr(),L=z(x),A=d(L,!0);u(L);var P=m(L,2),O=d(P,!0);u(P);var V=m(P,2),te=m(d(V));u(V);var W=m(V,2),se=m(d(W));u(W);var X=m(W,2),K=m(d(X));u(X);var Y=m(X,2),ie=d(Y);{var le=H=>{var he=Ve("MAX LEVEL");S(H,he)},Z=H=>{var he=q(),Ce=z(he);{var Ie=ge=>{var j=Ve("CANNOT AFFORD");S(ge,j)},Ne=ge=>{var j=Ve("PURCHASE");S(ge,j)};G(Ce,ge=>{N(t()),p(s),M(()=>!t().canAffordUpgrade(p(s).id))?ge(Ie):ge(Ne,!1)},!0)}S(H,he)};G(ie,H=>{p(s),M(()=>p(s).currentLevel>=p(s).maxLevel)?H(le):H(Z,!1)})}u(Y),oe((H,he)=>{D(A,(p(s),M(()=>p(s).name))),D(O,(p(s),M(()=>p(s).description))),D(te,` ${p(s),M(()=>p(s).effect)??""}`),D(se,` ${H??""} EXP`),D(K,` ${p(s),M(()=>p(s).currentLevel)??""}/${p(s),M(()=>p(s).maxLevel)??""}`),Y.disabled=he},[()=>(N(t()),p(s),M(()=>o(t().getUpgradeCost(p(s).id)))),()=>(N(t()),p(s),M(()=>!t().canPurchaseUpgrade(p(s).id)))]),R("click",Y,l),S(g,x)},w=g=>{var x=ar();S(g,x)};G(k,g=>{p(s)?g(U):g(w,!1)})}u($),u(_),u(v),oe((g,x,L)=>{y=ne(n,1,"level-up-btn svelte-xd3x4d",null,y,g),n.disabled=x,D(h,`Level ${N(t()),M(()=>t().level)??""} → ${N(t()),M(()=>t().level+1)??""}`),D(C,`${L??""} EXP`)},[()=>({affordable:t().canLevelUp()}),()=>(N(t()),M(()=>!t().canLevelUp())),()=>(N(t()),M(()=>o(t().getLevelUpCost())))]),R("click",n,c),S(r,v),pe()}var ir=F("<div><!> </div>"),lr=F('<div class="saves svelte-rfjmb6"><h1 class="svelte-rfjmb6">saves</h1> <!> <div class="saves-layout svelte-rfjmb6"><div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Browser Storage</h2> <p>Your game automatically saves to browser storage every 30 seconds.</p> <div class="button-group svelte-rfjmb6"><button class="save-btn svelte-rfjmb6"><!> Save Now</button> <button class="load-btn svelte-rfjmb6"><!> Load Game</button></div></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Export Save File</h2> <p>Download your save file to backup or transfer between devices.</p> <div class="button-group svelte-rfjmb6"><button class="export-btn encrypted svelte-rfjmb6"><!> Export (Encrypted)</button> <button class="export-btn unencrypted svelte-rfjmb6"><!> Export (Unencrypted)</button></div> <p class="note svelte-rfjmb6"><strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br/> <strong>Unencrypted:</strong> Editable but not leaderboard eligible</p></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Import Save File</h2> <p>Paste save data below to import from a file or another device.</p> <textarea placeholder="Paste your save data here..." rows="8" class="svelte-rfjmb6"></textarea> <button class="import-btn svelte-rfjmb6"><!> Import Save</button></div> <div class="save-section svelte-rfjmb6"><h2 class="svelte-rfjmb6">Save Status</h2> <div class="status-info svelte-rfjmb6"><p class="svelte-rfjmb6"><strong>Save Integrity:</strong> </p> <p class="svelte-rfjmb6"><strong>Last Validation:</strong> </p> <p class="svelte-rfjmb6"><strong>Current EXP:</strong> </p> <p class="svelte-rfjmb6"><strong>Lifetime EXP:</strong> </p></div></div></div></div>');function nr(r,a){fe(a,!1);let e=B(a,"game",8),t=B(a,"config",12),s=de(""),i=de(""),l=de("success"),o=de(!1);function c(j,ce,me=3e3){J(i,j),J(l,ce),J(o,!0),setTimeout(()=>{J(o,!1)},me)}function v(){try{const j=e().exportSave(!0);navigator.clipboard.writeText(j),b(j,"tomeclicker-save-encrypted.json"),c("Encrypted save exported and copied to clipboard!","success")}catch{c("Failed to export save","error")}}function _(){try{const j=e().exportSave(!1);navigator.clipboard.writeText(j),b(j,"tomeclicker-save-unencrypted.json"),c("Unencrypted save exported (not leaderboard eligible)","warning")}catch{c("Failed to export save","error")}}function b(j,ce){const me=new Blob([j],{type:"application/json"}),$e=URL.createObjectURL(me),be=document.createElement("a");be.href=$e,be.download=ce,document.body.appendChild(be),be.click(),document.body.removeChild(be),URL.revokeObjectURL($e)}function n(){if(!p(s).trim()){c("Please paste save data first","error");return}const j=e().importSave(p(s).trim());j.success?(c(j.warning||"Save imported successfully!",j.warning?"warning":"success"),J(s,""),e().autoSave()):c(j.error||"Failed to import save","error")}function y(){try{e().saveToCookies(),c("Game saved to browser storage!","success")}catch{c("Failed to save game","error")}}function f(){try{e().loadFromCookies()?c("Game loaded from browser storage!","success"):c("No save found in browser storage","warning")}catch{c("Failed to load game","error")}}setInterval(()=>{e().autoSave()},3e4),t(t()),ue();var h=lr(),E=m(d(h),2);{var C=j=>{var ce=ir(),me=d(ce);{var $e=ke=>{Oa(ke,{size:20})},be=ke=>{var We=q(),kt=z(We);{var wt=we=>{rt(we,{size:20})},Et=we=>{rt(we,{size:20})};G(kt,we=>{p(l)==="warning"?we(wt):we(Et,!1)},!0)}S(ke,We)};G(me,ke=>{p(l)==="success"?ke($e):ke(be,!1)})}var $t=m(me);u(ce),oe(()=>{ne(ce,1,`message ${p(l)??""}`,"svelte-rfjmb6"),D($t,` ${p(i)??""}`)}),S(j,ce)};G(E,j=>{p(o)&&j(C)})}var T=m(E,2),$=d(T),k=m(d($),4),U=d(k),w=d(U);xt(w,{size:20}),ye(),u(U);var g=m(U,2),x=d(g);st(x,{size:20}),ye(),u(g),u(k),u($);var L=m($,2),A=m(d(L),4),P=d(A),O=d(P);at(O,{size:20}),ye(),u(P);var V=m(P,2),te=d(V);at(te,{size:20}),ye(),u(V),u(A),ye(2),u(L);var W=m(L,2),se=m(d(W),4);_a(se);var X=m(se,2),K=d(X);st(K,{size:20}),ye(),u(X),u(W);var Y=m(W,2),ie=m(d(Y),2),le=d(ie),Z=m(d(le));u(le);var H=m(le,2),he=m(d(H));u(H);var Ce=m(H,2),Ie=m(d(Ce));u(Ce);var Ne=m(Ce,2),ge=m(d(Ne));u(Ne),u(ie),u(Y),u(T),u(h),oe((j,ce,me,$e)=>{X.disabled=j,D(Z,` ${N(e()),M(()=>e().saveIntegrity)??""}`),D(he,` ${ce??""}`),D(Ie,` ${me??""}`),D(ge,` ${$e??""}`)},[()=>(p(s),M(()=>!p(s).trim())),()=>(N(e()),M(()=>new Date(e().lastValidation).toLocaleString())),()=>(N(e()),M(()=>e().exp.toLocaleString())),()=>(N(e()),M(()=>e().lifetimeExp.toLocaleString()))]),R("click",U,y),R("click",g,f),R("click",P,v),R("click",V,_),Ua(se,()=>p(s),j=>J(s,j)),R("click",X,n),S(r,h),pe()}var or=F('<div class="settings svelte-mt7s6l"><h1 class="svelte-mt7s6l">settings</h1> <p> <br/> </p> <h2 class="svelte-mt7s6l">test buttons</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">EXP</button> <button class="svelte-mt7s6l">Tick</button> <button class="svelte-mt7s6l">100EXP</button></div> <h2 class="svelte-mt7s6l">game settings</h2> <div class="container svelte-mt7s6l"><button class="svelte-mt7s6l">Dark Mode</button> <!></div></div>');function cr(r,a){fe(a,!1);let e=B(a,"config",12),t=B(a,"game",12);ue();var s=or(),i=m(d(s),2),l=d(i),o=m(l,2);u(i);var c=m(i,4),v=d(c),_=m(v,2),b=m(_,2);u(c);var n=m(c,4),y=d(n),f=m(y,2);{var h=C=>{Wa(C,{size:48})},E=C=>{Ba(C,{size:48})};G(f,C=>{N(e()),M(()=>e().darkmode)?C(h):C(E,!1)})}u(n),u(s),oe(()=>{D(l,`EXP: ${N(t()),M(()=>t().exp)??""} Tick: ${N(t()),M(()=>t().tick)??""} Level: ${N(t()),M(()=>t().level)??""}`),D(o,` ${N(t()),M(()=>t().text)??""}`)}),R("click",v,()=>{t(t().exp++,!0)}),R("click",_,()=>{t(t().tick++,!0)}),R("click",b,()=>{t(t().exp+=100,!0)}),R("click",y,()=>{e(e().darkmode=!e().darkmode,!0)}),S(r,s),pe()}var vr=F(`<div class="story svelte-1wes0v7"><div class="scrollbox svelte-1wes0v7"><h1 class="svelte-1wes0v7">storyline</h1> <ol><li class="svelte-1wes0v7">This is a chapter</li> <li class="svelte-1wes0v7">This is another chapter</li> <li class="svelte-1wes0v7">Revenge of the chapter</li> <li class="svelte-1wes0v7">Hey look, it's a chapter!</li> <li class="svelte-1wes0v7">In Soviet Russia, chapter reads you</li> <li class="svelte-1wes0v7">Chapter Revisited</li> <li class="svelte-1wes0v7">YOLO, so here's a chapter</li> <li class="svelte-1wes0v7">The chapter to end all chapters</li> <li class="svelte-1wes0v7">The final chapter</li></ol> <h2>more stuff</h2> <ul><li class="svelte-1wes0v7">The extra chapter</li> <li class="svelte-1wes0v7">This is another extra chapter</li> <li class="svelte-1wes0v7">The extended chapter</li> <li class="svelte-1wes0v7">The uncut chapter</li> <li class="svelte-1wes0v7">The chapter to not screw everything up</li> <li class="svelte-1wes0v7">Babbitaboopi</li></ul></div></div>`);function dr(r,a){let e=B(a,"game",12);e(e());var t=vr();S(r,t)}var ur=F('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">About page coming soon...</h1> <p>This will contain game facts and statistics.</p></div>'),fr=F('<div class="placeholder svelte-1l6ze8i"><h1 class="svelte-1l6ze8i">Loading...</h1></div>'),pr=F("<h1>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????<br/>???????????????????????????</h1>"),hr=F('<div class="view svelte-1l6ze8i"><!></div>');function gr(r,a){fe(a,!1);let e=B(a,"config",12),t=B(a,"game",12);ue();var s=hr(),i=d(s);{var l=c=>{Za(c,{get config(){return e()},set config(v){e(v)},get game(){return t()},set game(v){t(v)},$$legacy:!0})},o=c=>{var v=q(),_=z(v);{var b=y=>{sr(y,{get config(){return e()},set config(f){e(f)},get game(){return t()},set game(f){t(f)},$$legacy:!0})},n=y=>{var f=q(),h=z(f);{var E=T=>{nr(T,{get config(){return e()},set config($){e($)},get game(){return t()},set game($){t($)},$$legacy:!0})},C=T=>{var $=q(),k=z($);{var U=g=>{dr(g,{get game(){return t()},set game(x){t(x)},$$legacy:!0})},w=g=>{var x=q(),L=z(x);{var A=O=>{cr(O,{get config(){return e()},set config(V){e(V)},get game(){return t()},set game(V){t(V)},$$legacy:!0})},P=O=>{var V=q(),te=z(V);{var W=X=>{var K=ur();S(X,K)},se=X=>{var K=q(),Y=z(K);{var ie=Z=>{var H=fr();S(Z,H)},le=Z=>{var H=pr();S(Z,H)};G(Y,Z=>{t()?Z(le,!1):Z(ie)},!0)}S(X,K)};G(te,X=>{N(t()),M(()=>t()&&t().menu==="about")?X(W):X(se,!1)},!0)}S(O,V)};G(L,O=>{N(t()),M(()=>t()&&t().menu==="settings")?O(A):O(P,!1)},!0)}S(g,x)};G(k,g=>{N(t()),M(()=>t()&&t().menu==="story")?g(U):g(w,!1)},!0)}S(T,$)};G(h,T=>{N(t()),M(()=>t()&&t().menu==="saves")?T(E):T(C,!1)},!0)}S(y,f)};G(_,y=>{N(t()),M(()=>t()&&t().menu==="upgrades")?y(b):y(n,!1)},!0)}S(c,v)};G(i,c=>{N(t()),M(()=>t()&&t().menu==="practice")?c(l):c(o,!1)})}u(s),S(r,s),pe()}var mr=F('<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&amp;family=Lato:wght@100;300;400;700&amp;family=Tangerine&amp;display=swap" rel="stylesheet"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>',1),_r=F('<footer class="footer svelte-1uha8ag"><!></footer>'),br=F('<!> <main class="main-content svelte-1uha8ag"><!></main> <!>',1),yr=F('<div class="loading svelte-1uha8ag"><h1>Loading TomeClicker...</h1></div>'),xr=F("<div><!></div>");function Mr(r,a){fe(a,!1),Ge(()=>(document.addEventListener("touchstart",function(v){v.touches.length>1&&v.preventDefault()},{passive:!1}),()=>{document.removeEventListener("touchstart",function(v){v.touches.length>1&&v.preventDefault()})}));let e=de(new Pa("prussian-blue",!0)),t=de();Ge(()=>{J(t,new Ia),p(t).loadFromCookies()});let s=de("");dt(()=>p(e),()=>{J(s,p(e).getTheme())}),ut(),ue();var i=xr();At(v=>{var _=mr();ba.title="TomeClicker",ye(6),S(v,_)});var l=d(i);{var o=v=>{var _=br(),b=z(_);{var n=C=>{Va(C,{get game(){return p(t)},set game(T){J(t,T)},$$legacy:!0})};G(b,C=>{p(t),M(()=>p(t).showHeader())&&C(n)})}var y=m(b,2),f=d(y);gr(f,{get game(){return p(t)},set game(C){J(t,C)},get config(){return p(e)},set config(C){J(e,C)},$$legacy:!0}),u(y);var h=m(y,2);{var E=C=>{var T=_r(),$=d(T);Ja($,{get game(){return p(t)},set game(k){J(t,k)},$$legacy:!0}),u(T),S(C,T)};G(h,C=>{p(t),M(()=>p(t).showMenu())&&C(E)})}S(v,_)},c=v=>{var _=yr();S(v,_)};G(l,v=>{p(t)?v(o):v(c,!1)})}u(i),oe(()=>ne(i,1,`app ${p(s)??""}`,"svelte-1uha8ag")),S(r,i),pe()}export{Mr as component};
