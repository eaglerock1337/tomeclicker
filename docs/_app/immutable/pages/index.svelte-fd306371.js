import{S as x,i as $,s as ee,e as k,t as V,k as S,c as w,a as M,h as P,d as h,m as J,b as g,g as L,J as c,K as le,n as X,L as Le,M as Xe,j as ge,D as Oe,N as _e,O as be,P as me,A as Se,F as Je,Q as j,G as Ue,H as Ce,I as He,r as z,p as B,x as U,y as C,z as H,C as K,l as fe,o as re,q as oe,R as Ke,T as ie,U as se,V as ae,W as Ae,X as Me}from"../chunks/index-fc6e51fc.js";class Fe{constructor(){this.darkmode=!0,this.theme="prussian-blue"}toggleMode(){this.darkmode=!this.darkmode}setMode(e){this.darkmode=e}}class We{constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.tick=0,this.level=1,this.text="click me",this.menu="practice"}}function Ge(a){let e,n,t,l,r,s,o,i,f,m,q,p,u;return{c(){e=k("div"),n=k("footer"),t=k("div"),l=V("something"),r=S(),s=k("div"),o=V("something"),i=S(),f=k("div"),m=V(`theme
            `),q=k("input"),this.h()},l(_){e=w(_,"DIV",{class:!0});var b=M(e);n=w(b,"FOOTER",{class:!0});var v=M(n);t=w(v,"DIV",{class:!0});var d=M(t);l=P(d,"something"),d.forEach(h),r=J(v),s=w(v,"DIV",{class:!0});var T=M(s);o=P(T,"something"),T.forEach(h),i=J(v),f=w(v,"DIV",{class:!0});var N=M(f);m=P(N,`theme
            `),q=w(N,"INPUT",{type:!0}),N.forEach(h),v.forEach(h),b.forEach(h),this.h()},h(){g(t,"class","item svelte-6rp5c4"),g(s,"class","item svelte-6rp5c4"),g(q,"type","checkbox"),g(f,"class","item svelte-6rp5c4"),g(n,"class","svelte-6rp5c4"),g(e,"class","footer svelte-6rp5c4")},m(_,b){L(_,e,b),c(e,n),c(n,t),c(t,l),c(n,r),c(n,s),c(s,o),c(n,i),c(n,f),c(f,m),c(f,q),q.checked=a[0],p||(u=[le(q,"change",a[2]),le(q,"click",a[1])],p=!0)},p(_,[b]){b&1&&(q.checked=_[0])},i:X,o:X,d(_){_&&h(e),p=!1,Le(u)}}}function Qe(a,e,n){let{darkmode:t}=e;const l=Xe();function r(){l("message")}function s(){t=this.checked,n(0,t)}return a.$$set=o=>{"darkmode"in o&&n(0,t=o.darkmode)},[t,r,s]}class Ye extends x{constructor(e){super(),$(this,e,Qe,Ge,ee,{darkmode:0})}}function Ze(a){let e,n,t,l,r=a[0].exp+"",s,o,i,f,m,q,p,u=a[0].level+"",_;return{c(){e=k("header"),n=k("div"),t=k("div"),l=V("EXP: "),s=V(r),o=S(),i=k("div"),f=V("TomeClicker"),m=S(),q=k("div"),p=V("Level: "),_=V(u),this.h()},l(b){e=w(b,"HEADER",{class:!0});var v=M(e);n=w(v,"DIV",{class:!0});var d=M(n);t=w(d,"DIV",{class:!0});var T=M(t);l=P(T,"EXP: "),s=P(T,r),T.forEach(h),o=J(d),i=w(d,"DIV",{class:!0});var N=M(i);f=P(N,"TomeClicker"),N.forEach(h),m=J(d),q=w(d,"DIV",{class:!0});var I=M(q);p=P(I,"Level: "),_=P(I,u),I.forEach(h),d.forEach(h),v.forEach(h),this.h()},h(){g(t,"class","stat svelte-3lyrlk"),g(i,"class","title svelte-3lyrlk"),g(q,"class","stat svelte-3lyrlk"),g(n,"class","container svelte-3lyrlk"),g(e,"class","svelte-3lyrlk")},m(b,v){L(b,e,v),c(e,n),c(n,t),c(t,l),c(t,s),c(n,o),c(n,i),c(i,f),c(n,m),c(n,q),c(q,p),c(q,_)},p(b,[v]){v&1&&r!==(r=b[0].exp+"")&&ge(s,r),v&1&&u!==(u=b[0].level+"")&&ge(_,u)},i:X,o:X,d(b){b&&h(e)}}}function xe(a,e,n){let{game:t}=e;return a.$$set=l=>{"game"in l&&n(0,t=l.game)},[t]}class $e extends x{constructor(e){super(),$(this,e,xe,Ze,ee,{game:0})}}function et(a){let e,n,t=[{id:n="path-"+a[0]},a[1]],l={};for(let r=0;r<t.length;r+=1)l=Oe(l,t[r]);return{c(){e=_e("path"),this.h()},l(r){e=be(r,"path",{id:!0}),M(e).forEach(h),this.h()},h(){me(e,l)},m(r,s){L(r,e,s)},p(r,[s]){me(e,l=Se(t,[s&1&&n!==(n="path-"+r[0])&&{id:n},s&2&&r[1]]))},i:X,o:X,d(r){r&&h(e)}}}function tt(a,e,n){let{id:t}=e,{data:l={}}=e;return a.$$set=r=>{"id"in r&&n(0,t=r.id),"data"in r&&n(1,l=r.data)},[t,l]}class nt extends x{constructor(e){super(),$(this,e,tt,et,ee,{id:0,data:1})}}function lt(a){let e,n,t=[{id:n="polygon-"+a[0]},a[1]],l={};for(let r=0;r<t.length;r+=1)l=Oe(l,t[r]);return{c(){e=_e("polygon"),this.h()},l(r){e=be(r,"polygon",{id:!0}),M(e).forEach(h),this.h()},h(){me(e,l)},m(r,s){L(r,e,s)},p(r,[s]){me(e,l=Se(t,[s&1&&n!==(n="polygon-"+r[0])&&{id:n},s&2&&r[1]]))},i:X,o:X,d(r){r&&h(e)}}}function it(a,e,n){let{id:t}=e,{data:l={}}=e;return a.$$set=r=>{"id"in r&&n(0,t=r.id),"data"in r&&n(1,l=r.data)},[t,l]}class st extends x{constructor(e){super(),$(this,e,it,lt,ee,{id:0,data:1})}}function at(a){let e;return{c(){e=_e("g")},l(n){e=be(n,"g",{});var t=M(e);t.forEach(h)},m(n,t){L(n,e,t),e.innerHTML=a[0]},p(n,[t]){t&1&&(e.innerHTML=n[0])},i:X,o:X,d(n){n&&h(e)}}}function rt(a,e,n){let t=870711;function l(){return t+=1,`fa-${t.toString(16)}`}let r,{data:s}=e;function o(i){if(!i||!i.raw)return null;let f=i.raw;const m={};return f=f.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(q,p)=>{const u=l();return m[p]=u,` id="${u}"`}),f=f.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(q,p,u,_)=>{const b=p||_;return!b||!m[b]?q:`#${m[b]}`}),f}return a.$$set=i=>{"data"in i&&n(1,s=i.data)},a.$$.update=()=>{a.$$.dirty&2&&n(0,r=o(s))},[r,s]}class ot extends x{constructor(e){super(),$(this,e,rt,at,ee,{data:1})}}function ft(a){let e,n,t,l;const r=a[13].default,s=Je(r,a,a[12],null);return{c(){e=_e("svg"),s&&s.c(),this.h()},l(o){e=be(o,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var i=M(e);s&&s.l(i),i.forEach(h),this.h()},h(){g(e,"version","1.1"),g(e,"class",n="fa-icon "+a[0]+" svelte-1dof0an"),g(e,"x",a[8]),g(e,"y",a[9]),g(e,"width",a[1]),g(e,"height",a[2]),g(e,"aria-label",a[11]),g(e,"role",t=a[11]?"img":"presentation"),g(e,"viewBox",a[3]),g(e,"style",a[10]),j(e,"fa-spin",a[4]),j(e,"fa-pulse",a[6]),j(e,"fa-inverse",a[5]),j(e,"fa-flip-horizontal",a[7]==="horizontal"),j(e,"fa-flip-vertical",a[7]==="vertical")},m(o,i){L(o,e,i),s&&s.m(e,null),l=!0},p(o,[i]){s&&s.p&&(!l||i&4096)&&Ue(s,r,o,o[12],l?He(r,o[12],i,null):Ce(o[12]),null),(!l||i&1&&n!==(n="fa-icon "+o[0]+" svelte-1dof0an"))&&g(e,"class",n),(!l||i&256)&&g(e,"x",o[8]),(!l||i&512)&&g(e,"y",o[9]),(!l||i&2)&&g(e,"width",o[1]),(!l||i&4)&&g(e,"height",o[2]),(!l||i&2048)&&g(e,"aria-label",o[11]),(!l||i&2048&&t!==(t=o[11]?"img":"presentation"))&&g(e,"role",t),(!l||i&8)&&g(e,"viewBox",o[3]),(!l||i&1024)&&g(e,"style",o[10]),i&17&&j(e,"fa-spin",o[4]),i&65&&j(e,"fa-pulse",o[6]),i&33&&j(e,"fa-inverse",o[5]),i&129&&j(e,"fa-flip-horizontal",o[7]==="horizontal"),i&129&&j(e,"fa-flip-vertical",o[7]==="vertical")},i(o){l||(z(s,o),l=!0)},o(o){B(s,o),l=!1},d(o){o&&h(e),s&&s.d(o)}}}function ct(a,e,n){let{$$slots:t={},$$scope:l}=e,{class:r}=e,{width:s}=e,{height:o}=e,{box:i}=e,{spin:f=!1}=e,{inverse:m=!1}=e,{pulse:q=!1}=e,{flip:p=null}=e,{x:u=void 0}=e,{y:_=void 0}=e,{style:b=void 0}=e,{label:v=void 0}=e;return a.$$set=d=>{"class"in d&&n(0,r=d.class),"width"in d&&n(1,s=d.width),"height"in d&&n(2,o=d.height),"box"in d&&n(3,i=d.box),"spin"in d&&n(4,f=d.spin),"inverse"in d&&n(5,m=d.inverse),"pulse"in d&&n(6,q=d.pulse),"flip"in d&&n(7,p=d.flip),"x"in d&&n(8,u=d.x),"y"in d&&n(9,_=d.y),"style"in d&&n(10,b=d.style),"label"in d&&n(11,v=d.label),"$$scope"in d&&n(12,l=d.$$scope)},[r,s,o,i,f,m,q,p,u,_,b,v,l,t]}class ut extends x{constructor(e){super(),$(this,e,ct,ft,ee,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function Be(a,e,n){const t=a.slice();return t[24]=e[n],t[26]=n,t}function Ne(a,e,n){const t=a.slice();return t[27]=e[n],t[26]=n,t}function Te(a){let e,n,t,l,r=a[6].paths&&Ie(a),s=a[6].polygons&&je(a),o=a[6].raw&&Pe(a);return{c(){r&&r.c(),e=S(),s&&s.c(),n=S(),o&&o.c(),t=fe()},l(i){r&&r.l(i),e=J(i),s&&s.l(i),n=J(i),o&&o.l(i),t=fe()},m(i,f){r&&r.m(i,f),L(i,e,f),s&&s.m(i,f),L(i,n,f),o&&o.m(i,f),L(i,t,f),l=!0},p(i,f){i[6].paths?r?(r.p(i,f),f&64&&z(r,1)):(r=Ie(i),r.c(),z(r,1),r.m(e.parentNode,e)):r&&(re(),B(r,1,1,()=>{r=null}),oe()),i[6].polygons?s?(s.p(i,f),f&64&&z(s,1)):(s=je(i),s.c(),z(s,1),s.m(n.parentNode,n)):s&&(re(),B(s,1,1,()=>{s=null}),oe()),i[6].raw?o?(o.p(i,f),f&64&&z(o,1)):(o=Pe(i),o.c(),z(o,1),o.m(t.parentNode,t)):o&&(re(),B(o,1,1,()=>{o=null}),oe())},i(i){l||(z(r),z(s),z(o),l=!0)},o(i){B(r),B(s),B(o),l=!1},d(i){r&&r.d(i),i&&h(e),s&&s.d(i),i&&h(n),o&&o.d(i),i&&h(t)}}}function Ie(a){let e,n,t=a[6].paths,l=[];for(let s=0;s<t.length;s+=1)l[s]=De(Ne(a,t,s));const r=s=>B(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=fe()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=fe()},m(s,o){for(let i=0;i<l.length;i+=1)l[i].m(s,o);L(s,e,o),n=!0},p(s,o){if(o&64){t=s[6].paths;let i;for(i=0;i<t.length;i+=1){const f=Ne(s,t,i);l[i]?(l[i].p(f,o),z(l[i],1)):(l[i]=De(f),l[i].c(),z(l[i],1),l[i].m(e.parentNode,e))}for(re(),i=t.length;i<l.length;i+=1)r(i);oe()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)z(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)B(l[o]);n=!1},d(s){Ke(l,s),s&&h(e)}}}function De(a){let e,n;return e=new nt({props:{id:a[26],data:a[27]}}),{c(){U(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){H(e,t,l),n=!0},p(t,l){const r={};l&64&&(r.data=t[27]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function je(a){let e,n,t=a[6].polygons,l=[];for(let s=0;s<t.length;s+=1)l[s]=Ve(Be(a,t,s));const r=s=>B(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=fe()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=fe()},m(s,o){for(let i=0;i<l.length;i+=1)l[i].m(s,o);L(s,e,o),n=!0},p(s,o){if(o&64){t=s[6].polygons;let i;for(i=0;i<t.length;i+=1){const f=Be(s,t,i);l[i]?(l[i].p(f,o),z(l[i],1)):(l[i]=Ve(f),l[i].c(),z(l[i],1),l[i].m(e.parentNode,e))}for(re(),i=t.length;i<l.length;i+=1)r(i);oe()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)z(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)B(l[o]);n=!1},d(s){Ke(l,s),s&&h(e)}}}function Ve(a){let e,n;return e=new st({props:{id:a[26],data:a[24]}}),{c(){U(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){H(e,t,l),n=!0},p(t,l){const r={};l&64&&(r.data=t[24]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Pe(a){let e,n,t;function l(s){a[15](s)}let r={};return a[6]!==void 0&&(r.data=a[6]),e=new ot({props:r}),se.push(()=>ae(e,"data",l)),{c(){U(e.$$.fragment)},l(s){C(e.$$.fragment,s)},m(s,o){H(e,s,o),t=!0},p(s,o){const i={};!n&&o&64&&(n=!0,i.data=s[6],ie(()=>n=!1)),e.$set(i)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){B(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function gt(a){let e,n,t=a[6]&&Te(a);return{c(){t&&t.c(),e=fe()},l(l){t&&t.l(l),e=fe()},m(l,r){t&&t.m(l,r),L(l,e,r),n=!0},p(l,r){l[6]?t?(t.p(l,r),r&64&&z(t,1)):(t=Te(l),t.c(),z(t,1),t.m(e.parentNode,e)):t&&(re(),B(t,1,1,()=>{t=null}),oe())},i(l){n||(z(t),n=!0)},o(l){B(t),n=!1},d(l){t&&t.d(l),l&&h(e)}}}function dt(a){let e;const n=a[14].default,t=Je(n,a,a[16],null),l=t||gt(a);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,s){l&&l.m(r,s),e=!0},p(r,s){t?t.p&&(!e||s&65536)&&Ue(t,n,r,r[16],e?He(n,r[16],s,null):Ce(r[16]),null):l&&l.p&&(!e||s&64)&&l.p(r,e?s:-1)},i(r){e||(z(l,r),e=!0)},o(r){B(l,r),e=!1},d(r){l&&l.d(r)}}}function ht(a){let e,n;return e=new ut({props:{label:a[5],width:a[7],height:a[8],box:a[10],style:a[9],spin:a[1],flip:a[4],inverse:a[2],pulse:a[3],class:a[0],$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){U(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){H(e,t,l),n=!0},p(t,[l]){const r={};l&32&&(r.label=t[5]),l&128&&(r.width=t[7]),l&256&&(r.height=t[8]),l&1024&&(r.box=t[10]),l&512&&(r.style=t[9]),l&2&&(r.spin=t[1]),l&16&&(r.flip=t[4]),l&4&&(r.inverse=t[2]),l&8&&(r.pulse=t[3]),l&1&&(r.class=t[0]),l&65600&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}let Re=1;function mt(a){if("iconName"in a&&"icon"in a){let e={},n=a.icon,t=a.iconName,l=n[0],r=n[1],s=n[4],o={width:l,height:r,paths:[{d:s}]};return e[t]=o,e}return a}function _t(a,e,n){let{$$slots:t={},$$scope:l}=e,{class:r=""}=e,{data:s}=e,{scale:o=1}=e,{spin:i=!1}=e,{inverse:f=!1}=e,{pulse:m=!1}=e,{flip:q=null}=e,{label:p=null}=e,u=null,{style:_=null}=e,b,v,d,T;function N(){if(typeof s=="undefined")return;const y=mt(s),[ne]=Object.keys(y),O=y[ne];O.paths||(O.paths=[]),O.d&&O.paths.push({d:O.d}),O.polygons||(O.polygons=[]),O.points&&O.polygons.push({points:O.points}),n(6,u=O)}function I(){let y=1;return typeof o!="undefined"&&(y=Number(o)),isNaN(y)||y<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),Re):y*Re}function W(){return u?`0 0 ${u.width} ${u.height}`:`0 0 ${b} ${v}`}function A(){return u?Math.max(u.width,u.height)/16:1}function ce(){return u?u.width/A()*I():0}function Y(){return u?u.height/A()*I():0}function Z(){let y="";_!==null&&(y+=_);let ne=I();return ne===1?y.length===0?void 0:y:(y!==""&&!y.endsWith(";")&&(y+="; "),`${y}font-size: ${ne}em`)}function te(y){u=y,n(6,u)}return a.$$set=y=>{"class"in y&&n(0,r=y.class),"data"in y&&n(11,s=y.data),"scale"in y&&n(12,o=y.scale),"spin"in y&&n(1,i=y.spin),"inverse"in y&&n(2,f=y.inverse),"pulse"in y&&n(3,m=y.pulse),"flip"in y&&n(4,q=y.flip),"label"in y&&n(5,p=y.label),"style"in y&&n(13,_=y.style),"$$scope"in y&&n(16,l=y.$$scope)},a.$$.update=()=>{a.$$.dirty&14336&&(N(),n(7,b=ce()),n(8,v=Y()),n(9,d=Z()),n(10,T=W()))},[r,i,f,m,q,p,u,b,v,d,T,s,o,_,t,te,l]}class ue extends x{constructor(e){super(),$(this,e,_t,ht,ee,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}const bt={edit:{width:1792,height:1792,paths:[{d:"M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"}]}},vt={gear:{width:1536,height:1792,paths:[{d:"M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"}]}},pt={info:{width:640,height:1792,paths:[{d:"M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zM512 192v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"}]}},kt={"mouse-pointer":{width:1280,height:1792,paths:[{d:"M1133 1043q31 30 14 69-17 40-59 40h-382l201 476q10 25 0 49t-34 35l-177 75q-25 10-49 0t-35-34l-191-452-312 312q-19 19-45 19-12 0-24-5-40-17-40-59v-1504q0-42 40-59 12-5 24-5 27 0 45 19z"}]}},wt={"question-circle-o":{width:1536,height:1792,paths:[{d:"M880 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zM1136 704q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}]}};function yt(a){let e,n,t,l,r,s,o,i,f,m,q,p,u,_,b,v,d,T,N,I,W,A,ce,Y,Z,te,y,ne,O;return m=new ue({props:{scale:1.5,data:kt}}),_=new ue({props:{scale:1.5,data:bt}}),T=new ue({props:{scale:1.5,data:wt}}),A=new ue({props:{scale:1.5,data:vt}}),te=new ue({props:{scale:1.5,data:pt}}),{c(){e=k("div"),n=k("div"),t=k("button"),l=k("p"),r=V("tick"),s=S(),o=k("div"),i=k("button"),f=k("p"),U(m.$$.fragment),q=S(),p=k("button"),u=k("p"),U(_.$$.fragment),b=S(),v=k("button"),d=k("p"),U(T.$$.fragment),N=S(),I=k("button"),W=k("p"),U(A.$$.fragment),ce=S(),Y=k("button"),Z=k("p"),U(te.$$.fragment),this.h()},l(D){e=w(D,"DIV",{class:!0});var F=M(e);n=w(F,"DIV",{class:!0});var E=M(n);t=w(E,"BUTTON",{class:!0});var R=M(t);l=w(R,"P",{class:!0});var G=M(l);r=P(G,"tick"),G.forEach(h),R.forEach(h),E.forEach(h),s=J(F),o=w(F,"DIV",{class:!0});var Q=M(o);i=w(Q,"BUTTON",{class:!0});var de=M(i);f=w(de,"P",{class:!0});var he=M(f);C(m.$$.fragment,he),he.forEach(h),de.forEach(h),q=J(Q),p=w(Q,"BUTTON",{class:!0});var ve=M(p);u=w(ve,"P",{class:!0});var pe=M(u);C(_.$$.fragment,pe),pe.forEach(h),ve.forEach(h),b=J(Q),v=w(Q,"BUTTON",{class:!0});var ke=M(v);d=w(ke,"P",{class:!0});var we=M(d);C(T.$$.fragment,we),we.forEach(h),ke.forEach(h),N=J(Q),I=w(Q,"BUTTON",{class:!0});var ye=M(I);W=w(ye,"P",{class:!0});var qe=M(W);C(A.$$.fragment,qe),qe.forEach(h),ye.forEach(h),ce=J(Q),Y=w(Q,"BUTTON",{class:!0});var ze=M(Y);Z=w(ze,"P",{class:!0});var Ee=M(Z);C(te.$$.fragment,Ee),Ee.forEach(h),ze.forEach(h),Q.forEach(h),F.forEach(h),this.h()},h(){g(l,"class","svelte-1t7f6ab"),j(l,"red",a[0].menu==="6"),g(t,"class","tick svelte-1t7f6ab"),g(n,"class","tick svelte-1t7f6ab"),g(f,"class","svelte-1t7f6ab"),j(f,"red",a[0].menu==="practice"),g(i,"class","svelte-1t7f6ab"),g(u,"class","svelte-1t7f6ab"),j(u,"red",a[0].menu==="story"),g(p,"class","svelte-1t7f6ab"),g(d,"class","svelte-1t7f6ab"),j(d,"red",a[0].menu==="help"),g(v,"class","svelte-1t7f6ab"),g(W,"class","svelte-1t7f6ab"),j(W,"red",a[0].menu==="settings"),g(I,"class","svelte-1t7f6ab"),g(Z,"class","svelte-1t7f6ab"),j(Z,"red",a[0].menu==="about"),g(Y,"class","svelte-1t7f6ab"),g(o,"class","menu svelte-1t7f6ab"),g(e,"class","navbar svelte-1t7f6ab")},m(D,F){L(D,e,F),c(e,n),c(n,t),c(t,l),c(l,r),c(e,s),c(e,o),c(o,i),c(i,f),H(m,f,null),c(o,q),c(o,p),c(p,u),H(_,u,null),c(o,b),c(o,v),c(v,d),H(T,d,null),c(o,N),c(o,I),c(I,W),H(A,W,null),c(o,ce),c(o,Y),c(Y,Z),H(te,Z,null),y=!0,ne||(O=[le(t,"click",a[1]),le(i,"click",a[2]),le(p,"click",a[3]),le(v,"click",a[4]),le(I,"click",a[5]),le(Y,"click",a[6])],ne=!0)},p(D,[F]){F&1&&j(l,"red",D[0].menu==="6"),F&1&&j(f,"red",D[0].menu==="practice"),F&1&&j(u,"red",D[0].menu==="story"),F&1&&j(d,"red",D[0].menu==="help"),F&1&&j(W,"red",D[0].menu==="settings"),F&1&&j(Z,"red",D[0].menu==="about")},i(D){y||(z(m.$$.fragment,D),z(_.$$.fragment,D),z(T.$$.fragment,D),z(A.$$.fragment,D),z(te.$$.fragment,D),y=!0)},o(D){B(m.$$.fragment,D),B(_.$$.fragment,D),B(T.$$.fragment,D),B(A.$$.fragment,D),B(te.$$.fragment,D),y=!1},d(D){D&&h(e),K(m),K(_),K(T),K(A),K(te),ne=!1,Le(O)}}}function qt(a,e,n){let{game:t}=e;function l(){n(0,t.tick++,t),n(0,t.text="tock "+t.tick,t)}const r=()=>n(0,t.menu="practice",t),s=()=>n(0,t.menu="story",t),o=()=>n(0,t.menu="help",t),i=()=>n(0,t.menu="settings",t),f=()=>n(0,t.menu="about",t);return a.$$set=m=>{"game"in m&&n(0,t=m.game)},[t,l,r,s,o,i,f]}class zt extends x{constructor(e){super(),$(this,e,qt,yt,ee,{game:0})}}const Et={"toggle-on":{width:2048,height:1792,paths:[{d:"M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zM1408 1408q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z"}]}},Mt={"toggle-off":{width:2048,height:1792,paths:[{d:"M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zM1920 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zM2048 896q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z"}]}};function Bt(a){let e,n;return e=new ue({props:{scale:3,data:Mt}}),{c(){U(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){H(e,t,l),n=!0},p:X,i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Nt(a){let e,n;return e=new ue({props:{scale:3,data:Et}}),{c(){U(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,l){H(e,t,l),n=!0},p:X,i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Tt(a){let e,n,t,l,r,s,o=a[0].text+"",i,f,m,q;const p=[Nt,Bt],u=[];function _(b,v){return b[1].darkmode?0:1}return t=_(a),l=u[t]=p[t](a),{c(){e=k("div"),n=k("button"),l.c(),r=S(),s=k("br"),i=V(o),this.h()},l(b){e=w(b,"DIV",{class:!0});var v=M(e);n=w(v,"BUTTON",{class:!0});var d=M(n);l.l(d),r=J(d),s=w(d,"BR",{}),i=P(d,o),d.forEach(h),v.forEach(h),this.h()},h(){g(n,"class","svelte-34pw80"),g(e,"class","thebutton svelte-34pw80")},m(b,v){L(b,e,v),c(e,n),u[t].m(n,null),c(n,r),c(n,s),c(n,i),f=!0,m||(q=le(n,"click",a[2]),m=!0)},p(b,[v]){let d=t;t=_(b),t===d?u[t].p(b,v):(re(),B(u[d],1,1,()=>{u[d]=null}),oe(),l=u[t],l?l.p(b,v):(l=u[t]=p[t](b),l.c()),z(l,1),l.m(n,r)),(!f||v&1)&&o!==(o=b[0].text+"")&&ge(i,o)},i(b){f||(z(l),f=!0)},o(b){B(l),f=!1},d(b){b&&h(e),u[t].d(),m=!1,q()}}}function It(a,e,n){let{config:t}=e,{game:l}=e;function r(){n(0,l.exp++,l),n(0,l.text="ayy "+l.exp,l),n(0,l)}return a.$$set=s=>{"config"in s&&n(1,t=s.config),"game"in s&&n(0,l=s.game)},[l,t,r]}class Dt extends x{constructor(e){super(),$(this,e,It,Tt,ee,{config:1,game:0})}}function jt(a){let e,n,t,l,r,s=a[0].exp+"",o,i,f=a[0].tick+"",m,q,p,u=a[0].text+"",_,b,v,d;return{c(){e=k("div"),n=k("button"),t=V("Settings Time!"),l=k("br"),r=V(`
        EXP: `),o=V(s),i=V(" Tick: "),m=V(f),q=k("br"),p=S(),_=V(u),b=k("br"),this.h()},l(T){e=w(T,"DIV",{class:!0});var N=M(e);n=w(N,"BUTTON",{class:!0});var I=M(n);t=P(I,"Settings Time!"),l=w(I,"BR",{}),r=P(I,`
        EXP: `),o=P(I,s),i=P(I," Tick: "),m=P(I,f),q=w(I,"BR",{}),p=J(I),_=P(I,u),b=w(I,"BR",{}),I.forEach(h),N.forEach(h),this.h()},h(){g(n,"class","svelte-34pw80"),g(e,"class","thebutton svelte-34pw80")},m(T,N){L(T,e,N),c(e,n),c(n,t),c(n,l),c(n,r),c(n,o),c(n,i),c(n,m),c(n,q),c(n,p),c(n,_),c(n,b),v||(d=le(n,"click",a[1]),v=!0)},p(T,[N]){N&1&&s!==(s=T[0].exp+"")&&ge(o,s),N&1&&f!==(f=T[0].tick+"")&&ge(m,f),N&1&&u!==(u=T[0].text+"")&&ge(_,u)},i:X,o:X,d(T){T&&h(e),v=!1,d()}}}function Vt(a,e,n){let{config:t}=e,{game:l}=e;function r(){n(0,l.exp+=10,l),n(0,l.text="ayy "+l.exp,l)}return a.$$set=s=>{"config"in s&&n(2,t=s.config),"game"in s&&n(0,l=s.game)},[l,r,t]}class Pt extends x{constructor(e){super(),$(this,e,Vt,jt,ee,{config:2,game:0})}}function Rt(a){let e,n,t,l,r,s,o,i,f,m,q,p;return{c(){e=k("h1"),n=V("???????????????????????????"),t=k("br"),l=V("???????????????????????????"),r=k("br"),s=V("???????????????????????????"),o=k("br"),i=V("???????????????????????????"),f=k("br"),m=V("???????????????????????????"),q=k("br"),p=V("???????????????????????????")},l(u){e=w(u,"H1",{});var _=M(e);n=P(_,"???????????????????????????"),t=w(_,"BR",{}),l=P(_,"???????????????????????????"),r=w(_,"BR",{}),s=P(_,"???????????????????????????"),o=w(_,"BR",{}),i=P(_,"???????????????????????????"),f=w(_,"BR",{}),m=P(_,"???????????????????????????"),q=w(_,"BR",{}),p=P(_,"???????????????????????????"),_.forEach(h)},m(u,_){L(u,e,_),c(e,n),c(e,t),c(e,l),c(e,r),c(e,s),c(e,o),c(e,i),c(e,f),c(e,m),c(e,q),c(e,p)},p:X,i:X,o:X,d(u){u&&h(e)}}}function Lt(a){let e,n,t,l;function r(i){a[4](i)}function s(i){a[5](i)}let o={};return a[0]!==void 0&&(o.config=a[0]),a[1]!==void 0&&(o.game=a[1]),e=new Pt({props:o}),se.push(()=>ae(e,"config",r)),se.push(()=>ae(e,"game",s)),{c(){U(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,f){H(e,i,f),l=!0},p(i,f){const m={};!n&&f&1&&(n=!0,m.config=i[0],ie(()=>n=!1)),!t&&f&2&&(t=!0,m.game=i[1],ie(()=>t=!1)),e.$set(m)},i(i){l||(z(e.$$.fragment,i),l=!0)},o(i){B(e.$$.fragment,i),l=!1},d(i){K(e,i)}}}function Ot(a){let e,n,t,l;function r(i){a[2](i)}function s(i){a[3](i)}let o={};return a[0]!==void 0&&(o.config=a[0]),a[1]!==void 0&&(o.game=a[1]),e=new Dt({props:o}),se.push(()=>ae(e,"config",r)),se.push(()=>ae(e,"game",s)),{c(){U(e.$$.fragment)},l(i){C(e.$$.fragment,i)},m(i,f){H(e,i,f),l=!0},p(i,f){const m={};!n&&f&1&&(n=!0,m.config=i[0],ie(()=>n=!1)),!t&&f&2&&(t=!0,m.game=i[1],ie(()=>t=!1)),e.$set(m)},i(i){l||(z(e.$$.fragment,i),l=!0)},o(i){B(e.$$.fragment,i),l=!1},d(i){K(e,i)}}}function St(a){let e,n,t,l;const r=[Ot,Lt,Rt],s=[];function o(i,f){return i[1].menu==="practice"?0:i[1].menu==="settings"?1:2}return n=o(a),t=s[n]=r[n](a),{c(){e=k("div"),t.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var f=M(e);t.l(f),f.forEach(h),this.h()},h(){g(e,"class","view svelte-1xaexjj")},m(i,f){L(i,e,f),s[n].m(e,null),l=!0},p(i,[f]){let m=n;n=o(i),n===m?s[n].p(i,f):(re(),B(s[m],1,1,()=>{s[m]=null}),oe(),t=s[n],t?t.p(i,f):(t=s[n]=r[n](i),t.c()),z(t,1),t.m(e,null))},i(i){l||(z(t),l=!0)},o(i){B(t),l=!1},d(i){i&&h(e),s[n].d()}}}function Jt(a,e,n){let{config:t}=e,{game:l}=e;function r(f){t=f,n(0,t)}function s(f){l=f,n(1,l)}function o(f){t=f,n(0,t)}function i(f){l=f,n(1,l)}return a.$$set=f=>{"config"in f&&n(0,t=f.config),"game"in f&&n(1,l=f.game)},[t,l,r,s,o,i]}class Ut extends x{constructor(e){super(),$(this,e,Jt,St,ee,{config:0,game:1})}}function Ct(a){let e,n,t,l,r,s,o,i,f,m,q,p,u,_,b,v,d,T,N,I,W,A;function ce(E){a[5](E)}let Y={};a[1]!==void 0&&(Y.game=a[1]),f=new $e({props:Y}),se.push(()=>ae(f,"game",ce));function Z(E){a[6](E)}function te(E){a[7](E)}let y={};a[1]!==void 0&&(y.game=a[1]),a[0]!==void 0&&(y.config=a[0]),p=new Ut({props:y}),se.push(()=>ae(p,"game",Z)),se.push(()=>ae(p,"config",te));function ne(E){a[8](E)}let O={};a[1]!==void 0&&(O.game=a[1]),v=new zt({props:O}),se.push(()=>ae(v,"game",ne));function D(E){a[9](E)}let F={};return a[2]!==void 0&&(F.darkmode=a[2]),N=new Ye({props:F}),se.push(()=>ae(N,"darkmode",D)),N.$on("message",a[4]),{c(){e=k("link"),n=k("link"),t=k("link"),l=k("link"),r=k("link"),s=k("link"),o=S(),i=k("div"),U(f.$$.fragment),q=S(),U(p.$$.fragment),b=S(),U(v.$$.fragment),T=S(),U(N.$$.fragment),this.h()},l(E){const R=Ae('[data-svelte="svelte-1jhiyn4"]',document.head);e=w(R,"LINK",{rel:!0,href:!0}),n=w(R,"LINK",{rel:!0,href:!0,crossorigin:!0}),t=w(R,"LINK",{href:!0,rel:!0}),l=w(R,"LINK",{rel:!0,href:!0}),r=w(R,"LINK",{rel:!0,href:!0,crossorigin:!0}),s=w(R,"LINK",{href:!0,rel:!0}),R.forEach(h),o=J(E),i=w(E,"DIV",{class:!0});var G=M(i);C(f.$$.fragment,G),q=J(G),C(p.$$.fragment,G),b=J(G),C(v.$$.fragment,G),T=J(G),C(N.$$.fragment,G),G.forEach(h),this.h()},h(){document.title="TomeClicker",g(e,"rel","preconnect"),g(e,"href","https://fonts.googleapis.com"),g(n,"rel","preconnect"),g(n,"href","https://fonts.gstatic.com"),g(n,"crossorigin","anonymous"),g(t,"href","https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"),g(t,"rel","stylesheet"),g(l,"rel","preconnect"),g(l,"href","https://fonts.googleapis.com"),g(r,"rel","preconnect"),g(r,"href","https://fonts.gstatic.com"),g(r,"crossorigin","anonymous"),g(s,"href","https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Lato:wght@400;700&display=swap"),g(s,"rel","stylesheet"),g(i,"class",W=Me(a[3])+" svelte-yb0jb7")},m(E,R){c(document.head,e),c(document.head,n),c(document.head,t),c(document.head,l),c(document.head,r),c(document.head,s),L(E,o,R),L(E,i,R),H(f,i,null),c(i,q),H(p,i,null),c(i,b),H(v,i,null),c(i,T),H(N,i,null),A=!0},p(E,[R]){const G={};!m&&R&2&&(m=!0,G.game=E[1],ie(()=>m=!1)),f.$set(G);const Q={};!u&&R&2&&(u=!0,Q.game=E[1],ie(()=>u=!1)),!_&&R&1&&(_=!0,Q.config=E[0],ie(()=>_=!1)),p.$set(Q);const de={};!d&&R&2&&(d=!0,de.game=E[1],ie(()=>d=!1)),v.$set(de);const he={};!I&&R&4&&(I=!0,he.darkmode=E[2],ie(()=>I=!1)),N.$set(he),(!A||R&8&&W!==(W=Me(E[3])+" svelte-yb0jb7"))&&g(i,"class",W)},i(E){A||(z(f.$$.fragment,E),z(p.$$.fragment,E),z(v.$$.fragment,E),z(N.$$.fragment,E),A=!0)},o(E){B(f.$$.fragment,E),B(p.$$.fragment,E),B(v.$$.fragment,E),B(N.$$.fragment,E),A=!1},d(E){h(e),h(n),h(t),h(l),h(r),h(s),E&&h(o),E&&h(i),K(f),K(p),K(v),K(N)}}}function Ht(a,e,n){let t=new Fe,l=new We("A Stranger"),r=!0,s=r?"newdark":"newlight";function o(){n(2,r=!r),window.document.body.classList.remove(s),n(3,s=r?"newdark":"newlight"),window.document.body.classList.add(s)}function i(u){l=u,n(1,l)}function f(u){l=u,n(1,l)}function m(u){t=u,n(0,t)}function q(u){l=u,n(1,l)}function p(u){r=u,n(2,r)}return[t,l,r,s,o,i,f,m,q,p]}class Xt extends x{constructor(e){super(),$(this,e,Ht,Ct,ee,{})}}export{Xt as default};
