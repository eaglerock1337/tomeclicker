import{S as ae,i as se,s as re,e as b,t as N,k as S,c as p,a as q,h as D,d as h,m as R,b as g,g as X,J as c,j as pe,n as te,D as Ye,K as De,L as Ie,M as Ne,A as Ze,F as xe,N as L,G as $e,H as et,I as tt,r as w,p as j,x as K,y as W,z as G,C as F,l as be,o as _e,q as ve,O as nt,P as ue,Q as ge,R as he,T as ie,U as lt,V as at,W as He}from"../chunks/index-ed3e9753.js";class st{constructor(e,n){this.darkmode=n,this.theme=e}getTheme(){const e=this.darkmode?"dark":"light";return this.theme+"-"+e}}class rt{constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.tick=0,this.level=1,this.text="click me",this.menu="practice"}}function ot(s){let e,n,t,l,r=s[0].exp+"",a,o,i,f,u,y,z,_=s[0].level+"",v;return{c(){e=b("header"),n=b("div"),t=b("div"),l=N("EXP: "),a=N(r),o=S(),i=b("div"),f=N("TomeClicker"),u=S(),y=b("div"),z=N("Level: "),v=N(_),this.h()},l(T){e=p(T,"HEADER",{class:!0});var M=q(e);n=p(M,"DIV",{class:!0});var m=q(n);t=p(m,"DIV",{class:!0});var O=q(t);l=D(O,"EXP: "),a=D(O,r),O.forEach(h),o=R(m),i=p(m,"DIV",{class:!0});var Z=q(i);f=D(Z,"TomeClicker"),Z.forEach(h),u=R(m),y=p(m,"DIV",{class:!0});var I=q(y);z=D(I,"Level: "),v=D(I,_),I.forEach(h),m.forEach(h),M.forEach(h),this.h()},h(){g(t,"class","stat svelte-lj21eg"),g(i,"class","title svelte-lj21eg"),g(y,"class","stat svelte-lj21eg"),g(n,"class","container svelte-lj21eg"),g(e,"class","svelte-lj21eg")},m(T,M){X(T,e,M),c(e,n),c(n,t),c(t,l),c(t,a),c(n,o),c(n,i),c(i,f),c(n,u),c(n,y),c(y,z),c(y,v)},p(T,[M]){M&1&&r!==(r=T[0].exp+"")&&pe(a,r),M&1&&_!==(_=T[0].level+"")&&pe(v,_)},i:te,o:te,d(T){T&&h(e)}}}function ft(s,e,n){let{game:t}=e;return t=t,s.$$set=l=>{"game"in l&&n(0,t=l.game)},[t]}class ct extends ae{constructor(e){super(),se(this,e,ft,ot,re,{game:0})}}function ut(s){let e,n,t=[{id:n="path-"+s[0]},s[1]],l={};for(let r=0;r<t.length;r+=1)l=Ye(l,t[r]);return{c(){e=De("path"),this.h()},l(r){e=Ie(r,"path",{id:!0}),q(e).forEach(h),this.h()},h(){Ne(e,l)},m(r,a){X(r,e,a)},p(r,[a]){Ne(e,l=Ze(t,[a&1&&n!==(n="path-"+r[0])&&{id:n},a&2&&r[1]]))},i:te,o:te,d(r){r&&h(e)}}}function gt(s,e,n){let{id:t}=e,{data:l={}}=e;return s.$$set=r=>{"id"in r&&n(0,t=r.id),"data"in r&&n(1,l=r.data)},[t,l]}class ht extends ae{constructor(e){super(),se(this,e,gt,ut,re,{id:0,data:1})}}function dt(s){let e,n,t=[{id:n="polygon-"+s[0]},s[1]],l={};for(let r=0;r<t.length;r+=1)l=Ye(l,t[r]);return{c(){e=De("polygon"),this.h()},l(r){e=Ie(r,"polygon",{id:!0}),q(e).forEach(h),this.h()},h(){Ne(e,l)},m(r,a){X(r,e,a)},p(r,[a]){Ne(e,l=Ze(t,[a&1&&n!==(n="polygon-"+r[0])&&{id:n},a&2&&r[1]]))},i:te,o:te,d(r){r&&h(e)}}}function mt(s,e,n){let{id:t}=e,{data:l={}}=e;return s.$$set=r=>{"id"in r&&n(0,t=r.id),"data"in r&&n(1,l=r.data)},[t,l]}class _t extends ae{constructor(e){super(),se(this,e,mt,dt,re,{id:0,data:1})}}function vt(s){let e;return{c(){e=De("g")},l(n){e=Ie(n,"g",{});var t=q(e);t.forEach(h)},m(n,t){X(n,e,t),e.innerHTML=s[0]},p(n,[t]){t&1&&(e.innerHTML=n[0])},i:te,o:te,d(n){n&&h(e)}}}function bt(s,e,n){let t=870711;function l(){return t+=1,`fa-${t.toString(16)}`}let r,{data:a}=e;function o(i){if(!i||!i.raw)return null;let f=i.raw;const u={};return f=f.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(y,z)=>{const _=l();return u[z]=_,` id="${_}"`}),f=f.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(y,z,_,v)=>{const T=z||v;return!T||!u[T]?y:`#${u[T]}`}),f}return s.$$set=i=>{"data"in i&&n(1,a=i.data)},s.$$.update=()=>{s.$$.dirty&2&&n(0,r=o(a))},[r,a]}class pt extends ae{constructor(e){super(),se(this,e,bt,vt,re,{data:1})}}function kt(s){let e,n,t,l;const r=s[13].default,a=xe(r,s,s[12],null);return{c(){e=De("svg"),a&&a.c(),this.h()},l(o){e=Ie(o,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var i=q(e);a&&a.l(i),i.forEach(h),this.h()},h(){g(e,"version","1.1"),g(e,"class",n="fa-icon "+s[0]+" svelte-1dof0an"),g(e,"x",s[8]),g(e,"y",s[9]),g(e,"width",s[1]),g(e,"height",s[2]),g(e,"aria-label",s[11]),g(e,"role",t=s[11]?"img":"presentation"),g(e,"viewBox",s[3]),g(e,"style",s[10]),L(e,"fa-spin",s[4]),L(e,"fa-pulse",s[6]),L(e,"fa-inverse",s[5]),L(e,"fa-flip-horizontal",s[7]==="horizontal"),L(e,"fa-flip-vertical",s[7]==="vertical")},m(o,i){X(o,e,i),a&&a.m(e,null),l=!0},p(o,[i]){a&&a.p&&(!l||i&4096)&&$e(a,r,o,o[12],l?tt(r,o[12],i,null):et(o[12]),null),(!l||i&1&&n!==(n="fa-icon "+o[0]+" svelte-1dof0an"))&&g(e,"class",n),(!l||i&256)&&g(e,"x",o[8]),(!l||i&512)&&g(e,"y",o[9]),(!l||i&2)&&g(e,"width",o[1]),(!l||i&4)&&g(e,"height",o[2]),(!l||i&2048)&&g(e,"aria-label",o[11]),(!l||i&2048&&t!==(t=o[11]?"img":"presentation"))&&g(e,"role",t),(!l||i&8)&&g(e,"viewBox",o[3]),(!l||i&1024)&&g(e,"style",o[10]),i&17&&L(e,"fa-spin",o[4]),i&65&&L(e,"fa-pulse",o[6]),i&33&&L(e,"fa-inverse",o[5]),i&129&&L(e,"fa-flip-horizontal",o[7]==="horizontal"),i&129&&L(e,"fa-flip-vertical",o[7]==="vertical")},i(o){l||(w(a,o),l=!0)},o(o){j(a,o),l=!1},d(o){o&&h(e),a&&a.d(o)}}}function wt(s,e,n){let{$$slots:t={},$$scope:l}=e,{class:r}=e,{width:a}=e,{height:o}=e,{box:i}=e,{spin:f=!1}=e,{inverse:u=!1}=e,{pulse:y=!1}=e,{flip:z=null}=e,{x:_=void 0}=e,{y:v=void 0}=e,{style:T=void 0}=e,{label:M=void 0}=e;return s.$$set=m=>{"class"in m&&n(0,r=m.class),"width"in m&&n(1,a=m.width),"height"in m&&n(2,o=m.height),"box"in m&&n(3,i=m.box),"spin"in m&&n(4,f=m.spin),"inverse"in m&&n(5,u=m.inverse),"pulse"in m&&n(6,y=m.pulse),"flip"in m&&n(7,z=m.flip),"x"in m&&n(8,_=m.x),"y"in m&&n(9,v=m.y),"style"in m&&n(10,T=m.style),"label"in m&&n(11,M=m.label),"$$scope"in m&&n(12,l=m.$$scope)},[r,a,o,i,f,u,y,z,_,v,T,M,l,t]}class yt extends ae{constructor(e){super(),se(this,e,wt,kt,re,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function Je(s,e,n){const t=s.slice();return t[24]=e[n],t[26]=n,t}function Ce(s,e,n){const t=s.slice();return t[27]=e[n],t[26]=n,t}function Xe(s){let e,n,t,l,r=s[6].paths&&Ae(s),a=s[6].polygons&&We(s),o=s[6].raw&&Fe(s);return{c(){r&&r.c(),e=S(),a&&a.c(),n=S(),o&&o.c(),t=be()},l(i){r&&r.l(i),e=R(i),a&&a.l(i),n=R(i),o&&o.l(i),t=be()},m(i,f){r&&r.m(i,f),X(i,e,f),a&&a.m(i,f),X(i,n,f),o&&o.m(i,f),X(i,t,f),l=!0},p(i,f){i[6].paths?r?(r.p(i,f),f&64&&w(r,1)):(r=Ae(i),r.c(),w(r,1),r.m(e.parentNode,e)):r&&(_e(),j(r,1,1,()=>{r=null}),ve()),i[6].polygons?a?(a.p(i,f),f&64&&w(a,1)):(a=We(i),a.c(),w(a,1),a.m(n.parentNode,n)):a&&(_e(),j(a,1,1,()=>{a=null}),ve()),i[6].raw?o?(o.p(i,f),f&64&&w(o,1)):(o=Fe(i),o.c(),w(o,1),o.m(t.parentNode,t)):o&&(_e(),j(o,1,1,()=>{o=null}),ve())},i(i){l||(w(r),w(a),w(o),l=!0)},o(i){j(r),j(a),j(o),l=!1},d(i){r&&r.d(i),i&&h(e),a&&a.d(i),i&&h(n),o&&o.d(i),i&&h(t)}}}function Ae(s){let e,n,t=s[6].paths,l=[];for(let a=0;a<t.length;a+=1)l[a]=Ke(Ce(s,t,a));const r=a=>j(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=be()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=be()},m(a,o){for(let i=0;i<l.length;i+=1)l[i].m(a,o);X(a,e,o),n=!0},p(a,o){if(o&64){t=a[6].paths;let i;for(i=0;i<t.length;i+=1){const f=Ce(a,t,i);l[i]?(l[i].p(f,o),w(l[i],1)):(l[i]=Ke(f),l[i].c(),w(l[i],1),l[i].m(e.parentNode,e))}for(_e(),i=t.length;i<l.length;i+=1)r(i);ve()}},i(a){if(!n){for(let o=0;o<t.length;o+=1)w(l[o]);n=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)j(l[o]);n=!1},d(a){nt(l,a),a&&h(e)}}}function Ke(s){let e,n;return e=new ht({props:{id:s[26],data:s[27]}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){G(e,t,l),n=!0},p(t,l){const r={};l&64&&(r.data=t[27]),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function We(s){let e,n,t=s[6].polygons,l=[];for(let a=0;a<t.length;a+=1)l[a]=Ge(Je(s,t,a));const r=a=>j(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=be()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=be()},m(a,o){for(let i=0;i<l.length;i+=1)l[i].m(a,o);X(a,e,o),n=!0},p(a,o){if(o&64){t=a[6].polygons;let i;for(i=0;i<t.length;i+=1){const f=Je(a,t,i);l[i]?(l[i].p(f,o),w(l[i],1)):(l[i]=Ge(f),l[i].c(),w(l[i],1),l[i].m(e.parentNode,e))}for(_e(),i=t.length;i<l.length;i+=1)r(i);ve()}},i(a){if(!n){for(let o=0;o<t.length;o+=1)w(l[o]);n=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)j(l[o]);n=!1},d(a){nt(l,a),a&&h(e)}}}function Ge(s){let e,n;return e=new _t({props:{id:s[26],data:s[24]}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){G(e,t,l),n=!0},p(t,l){const r={};l&64&&(r.data=t[24]),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Fe(s){let e,n,t;function l(a){s[15](a)}let r={};return s[6]!==void 0&&(r.data=s[6]),e=new pt({props:r}),ge.push(()=>he(e,"data",l)),{c(){K(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,o){G(e,a,o),t=!0},p(a,o){const i={};!n&&o&64&&(n=!0,i.data=a[6],ue(()=>n=!1)),e.$set(i)},i(a){t||(w(e.$$.fragment,a),t=!0)},o(a){j(e.$$.fragment,a),t=!1},d(a){F(e,a)}}}function qt(s){let e,n,t=s[6]&&Xe(s);return{c(){t&&t.c(),e=be()},l(l){t&&t.l(l),e=be()},m(l,r){t&&t.m(l,r),X(l,e,r),n=!0},p(l,r){l[6]?t?(t.p(l,r),r&64&&w(t,1)):(t=Xe(l),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(_e(),j(t,1,1,()=>{t=null}),ve())},i(l){n||(w(t),n=!0)},o(l){j(t),n=!1},d(l){t&&t.d(l),l&&h(e)}}}function zt(s){let e;const n=s[14].default,t=xe(n,s,s[16],null),l=t||qt(s);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,a){l&&l.m(r,a),e=!0},p(r,a){t?t.p&&(!e||a&65536)&&$e(t,n,r,r[16],e?tt(n,r[16],a,null):et(r[16]),null):l&&l.p&&(!e||a&64)&&l.p(r,e?a:-1)},i(r){e||(w(l,r),e=!0)},o(r){j(l,r),e=!1},d(r){l&&l.d(r)}}}function jt(s){let e,n;return e=new yt({props:{label:s[5],width:s[7],height:s[8],box:s[10],style:s[9],spin:s[1],flip:s[4],inverse:s[2],pulse:s[3],class:s[0],$$slots:{default:[zt]},$$scope:{ctx:s}}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){G(e,t,l),n=!0},p(t,[l]){const r={};l&32&&(r.label=t[5]),l&128&&(r.width=t[7]),l&256&&(r.height=t[8]),l&1024&&(r.box=t[10]),l&512&&(r.style=t[9]),l&2&&(r.spin=t[1]),l&16&&(r.flip=t[4]),l&4&&(r.inverse=t[2]),l&8&&(r.pulse=t[3]),l&1&&(r.class=t[0]),l&65600&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}let Qe=1;function Et(s){if("iconName"in s&&"icon"in s){let e={},n=s.icon,t=s.iconName,l=n[0],r=n[1],a=n[4],o={width:l,height:r,paths:[{d:a}]};return e[t]=o,e}return s}function Tt(s,e,n){let{$$slots:t={},$$scope:l}=e,{class:r=""}=e,{data:a}=e,{scale:o=1}=e,{spin:i=!1}=e,{inverse:f=!1}=e,{pulse:u=!1}=e,{flip:y=null}=e,{label:z=null}=e,_=null,{style:v=null}=e,T,M,m,O;function Z(){if(typeof a=="undefined")return;const d=Et(a),[Y]=Object.keys(d),V=d[Y];V.paths||(V.paths=[]),V.d&&V.paths.push({d:V.d}),V.polygons||(V.polygons=[]),V.points&&V.polygons.push({points:V.points}),n(6,_=V)}function I(){let d=1;return typeof o!="undefined"&&(d=Number(o)),isNaN(d)||d<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),Qe):d*Qe}function Q(){return _?`0 0 ${_.width} ${_.height}`:`0 0 ${T} ${M}`}function H(){return _?Math.max(_.width,_.height)/16:1}function J(){return _?_.width/H()*I():0}function U(){return _?_.height/H()*I():0}function k(){let d="";v!==null&&(d+=v);let Y=I();return Y===1?d.length===0?void 0:d:(d!==""&&!d.endsWith(";")&&(d+="; "),`${d}font-size: ${Y}em`)}function B(d){_=d,n(6,_)}return s.$$set=d=>{"class"in d&&n(0,r=d.class),"data"in d&&n(11,a=d.data),"scale"in d&&n(12,o=d.scale),"spin"in d&&n(1,i=d.spin),"inverse"in d&&n(2,f=d.inverse),"pulse"in d&&n(3,u=d.pulse),"flip"in d&&n(4,y=d.flip),"label"in d&&n(5,z=d.label),"style"in d&&n(13,v=d.style),"$$scope"in d&&n(16,l=d.$$scope)},s.$$.update=()=>{s.$$.dirty&14336&&(Z(),n(7,T=J()),n(8,M=U()),n(9,m=k()),n(10,O=Q()))},[r,i,f,u,y,z,_,T,M,m,O,a,o,v,t,B,l]}class me extends ae{constructor(e){super(),se(this,e,Tt,jt,re,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}const Mt={edit:{width:1792,height:1792,paths:[{d:"M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"}]}},Bt={gear:{width:1536,height:1792,paths:[{d:"M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"}]}},Nt={info:{width:640,height:1792,paths:[{d:"M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zM512 192v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"}]}},it={"mouse-pointer":{width:1280,height:1792,paths:[{d:"M1133 1043q31 30 14 69-17 40-59 40h-382l201 476q10 25 0 49t-34 35l-177 75q-25 10-49 0t-35-34l-191-452-312 312q-19 19-45 19-12 0-24-5-40-17-40-59v-1504q0-42 40-59 12-5 24-5 27 0 45 19z"}]}},Dt={"question-circle-o":{width:1536,height:1792,paths:[{d:"M880 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zM1136 704q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}]}};function It(s){let e,n,t,l,r,a,o,i,f,u,y,z,_,v,T,M,m,O,Z,I,Q,H,J,U,k,B,d,Y,V;return u=new me({props:{scale:1.5,data:it}}),v=new me({props:{scale:1.5,data:Mt}}),O=new me({props:{scale:1.5,data:Dt}}),H=new me({props:{scale:1.5,data:Bt}}),B=new me({props:{scale:1.5,data:Nt}}),{c(){e=b("div"),n=b("div"),t=b("button"),l=b("p"),r=N("tick"),a=S(),o=b("div"),i=b("button"),f=b("p"),K(u.$$.fragment),y=S(),z=b("button"),_=b("p"),K(v.$$.fragment),T=S(),M=b("button"),m=b("p"),K(O.$$.fragment),Z=S(),I=b("button"),Q=b("p"),K(H.$$.fragment),J=S(),U=b("button"),k=b("p"),K(B.$$.fragment),this.h()},l(E){e=p(E,"DIV",{class:!0});var A=q(e);n=p(A,"DIV",{class:!0});var ke=q(n);t=p(ke,"BUTTON",{class:!0});var ce=q(t);l=p(ce,"P",{class:!0});var we=q(l);r=D(we,"tick"),we.forEach(h),ce.forEach(h),ke.forEach(h),a=R(A),o=p(A,"DIV",{class:!0});var ee=q(o);i=p(ee,"BUTTON",{class:!0});var ne=q(i);f=p(ne,"P",{class:!0});var oe=q(f);W(u.$$.fragment,oe),oe.forEach(h),ne.forEach(h),y=R(ee),z=p(ee,"BUTTON",{class:!0});var ye=q(z);_=p(ye,"P",{class:!0});var qe=q(_);W(v.$$.fragment,qe),qe.forEach(h),ye.forEach(h),T=R(ee),M=p(ee,"BUTTON",{class:!0});var x=q(M);m=p(x,"P",{class:!0});var $=q(m);W(O.$$.fragment,$),$.forEach(h),x.forEach(h),Z=R(ee),I=p(ee,"BUTTON",{class:!0});var le=q(I);Q=p(le,"P",{class:!0});var ze=q(Q);W(H.$$.fragment,ze),ze.forEach(h),le.forEach(h),J=R(ee),U=p(ee,"BUTTON",{class:!0});var Te=q(U);k=p(Te,"P",{class:!0});var Me=q(k);W(B.$$.fragment,Me),Me.forEach(h),Te.forEach(h),ee.forEach(h),A.forEach(h),this.h()},h(){g(l,"class","svelte-adifyt"),L(l,"red",s[0].menu==="6"),g(t,"class","tick svelte-adifyt"),g(n,"class","tick svelte-adifyt"),g(f,"class","svelte-adifyt"),L(f,"red",s[0].menu==="practice"),g(i,"class","svelte-adifyt"),g(_,"class","svelte-adifyt"),L(_,"red",s[0].menu==="story"),g(z,"class","svelte-adifyt"),g(m,"class","svelte-adifyt"),L(m,"red",s[0].menu==="help"),g(M,"class","svelte-adifyt"),g(Q,"class","svelte-adifyt"),L(Q,"red",s[0].menu==="settings"),g(I,"class","svelte-adifyt"),g(k,"class","svelte-adifyt"),L(k,"red",s[0].menu==="about"),g(U,"class","svelte-adifyt"),g(o,"class","menu svelte-adifyt"),g(e,"class","navbar svelte-adifyt")},m(E,A){X(E,e,A),c(e,n),c(n,t),c(t,l),c(l,r),c(e,a),c(e,o),c(o,i),c(i,f),G(u,f,null),c(o,y),c(o,z),c(z,_),G(v,_,null),c(o,T),c(o,M),c(M,m),G(O,m,null),c(o,Z),c(o,I),c(I,Q),G(H,Q,null),c(o,J),c(o,U),c(U,k),G(B,k,null),d=!0,Y||(V=[ie(t,"click",s[1]),ie(i,"click",s[2]),ie(z,"click",s[3]),ie(M,"click",s[4]),ie(I,"click",s[5]),ie(U,"click",s[6])],Y=!0)},p(E,[A]){A&1&&L(l,"red",E[0].menu==="6"),A&1&&L(f,"red",E[0].menu==="practice"),A&1&&L(_,"red",E[0].menu==="story"),A&1&&L(m,"red",E[0].menu==="help"),A&1&&L(Q,"red",E[0].menu==="settings"),A&1&&L(k,"red",E[0].menu==="about")},i(E){d||(w(u.$$.fragment,E),w(v.$$.fragment,E),w(O.$$.fragment,E),w(H.$$.fragment,E),w(B.$$.fragment,E),d=!0)},o(E){j(u.$$.fragment,E),j(v.$$.fragment,E),j(O.$$.fragment,E),j(H.$$.fragment,E),j(B.$$.fragment,E),d=!1},d(E){E&&h(e),F(u),F(v),F(O),F(H),F(B),Y=!1,lt(V)}}}function Pt(s,e,n){let{game:t}=e;t=t;function l(){n(0,t.tick++,t),n(0,t.text="tock "+t.tick,t)}const r=()=>n(0,t.menu="practice",t),a=()=>n(0,t.menu="story",t),o=()=>n(0,t.menu="help",t),i=()=>n(0,t.menu="settings",t),f=()=>n(0,t.menu="about",t);return s.$$set=u=>{"game"in u&&n(0,t=u.game)},[t,l,r,a,o,i,f]}class Lt extends ae{constructor(e){super(),se(this,e,Pt,It,re,{game:0})}}function Ot(s){let e,n,t,l,r=s[0].text+"",a,o,i,f;return t=new me({props:{scale:3,data:it}}),{c(){e=b("div"),n=b("button"),K(t.$$.fragment),l=b("br"),a=N(r),this.h()},l(u){e=p(u,"DIV",{class:!0});var y=q(e);n=p(y,"BUTTON",{class:!0});var z=q(n);W(t.$$.fragment,z),l=p(z,"BR",{}),a=D(z,r),z.forEach(h),y.forEach(h),this.h()},h(){g(n,"class","svelte-19fgeeq"),g(e,"class","thebutton svelte-19fgeeq")},m(u,y){X(u,e,y),c(e,n),G(t,n,null),c(n,l),c(n,a),o=!0,i||(f=ie(n,"click",s[1]),i=!0)},p(u,[y]){(!o||y&1)&&r!==(r=u[0].text+"")&&pe(a,r)},i(u){o||(w(t.$$.fragment,u),o=!0)},o(u){j(t.$$.fragment,u),o=!1},d(u){u&&h(e),F(t),i=!1,f()}}}function Vt(s,e,n){let{config:t}=e,{game:l}=e;function r(){n(0,l.exp++,l),n(0,l.text="ayy "+l.exp,l),n(0,l)}return s.$$set=a=>{"config"in a&&n(2,t=a.config),"game"in a&&n(0,l=a.game)},[l,r,t]}class St extends ae{constructor(e){super(),se(this,e,Vt,Ot,re,{config:2,game:0})}}const Rt={"toggle-on":{width:2048,height:1792,paths:[{d:"M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zM1408 1408q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z"}]}},Ut={"toggle-off":{width:2048,height:1792,paths:[{d:"M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zM1920 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zM2048 896q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z"}]}};function Ht(s){let e,n;return e=new me({props:{scale:3,data:Ut}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){G(e,t,l),n=!0},p:te,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Jt(s){let e,n;return e=new me({props:{scale:3,data:Rt}}),{c(){K(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){G(e,t,l),n=!0},p:te,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ct(s){let e,n,t,l,r,a,o=s[1].exp+"",i,f,u=s[1].tick+"",y,z,_=s[1].level+"",v,T,M,m=s[1].text+"",O,Z,I,Q,H,J,U,k,B,d,Y,V,E,A,ke,ce,we,ee,ne,oe,ye,qe,x,$,le,ze,Te;const Me=[Jt,Ht],de=[];function Pe(C,P){return C[0].darkmode?0:1}return x=Pe(s),$=de[x]=Me[x](s),{c(){e=b("div"),n=b("h2"),t=N("Settings Time!"),l=S(),r=b("p"),a=N("EXP: "),i=N(o),f=N(" Tick: "),y=N(u),z=N(" Level: "),v=N(_),T=b("br"),M=S(),O=N(m),Z=S(),I=b("h3"),Q=N("Test Incrementals"),H=S(),J=b("div"),U=b("button"),k=N("EXP"),B=S(),d=b("button"),Y=N("Tick"),V=S(),E=b("button"),A=N("Level"),ke=S(),ce=b("h3"),we=N("Dark Mode Toggle"),ee=S(),ne=b("div"),oe=b("button"),ye=N("Dark Mode"),qe=S(),$.c(),this.h()},l(C){e=p(C,"DIV",{class:!0});var P=q(e);n=p(P,"H2",{class:!0});var je=q(n);t=D(je,"Settings Time!"),je.forEach(h),l=R(P),r=p(P,"P",{});var fe=q(r);a=D(fe,"EXP: "),i=D(fe,o),f=D(fe," Tick: "),y=D(fe,u),z=D(fe," Level: "),v=D(fe,_),T=p(fe,"BR",{}),M=R(fe),O=D(fe,m),fe.forEach(h),Z=R(P),I=p(P,"H3",{class:!0});var Le=q(I);Q=D(Le,"Test Incrementals"),Le.forEach(h),H=R(P),J=p(P,"DIV",{class:!0});var Ee=q(J);U=p(Ee,"BUTTON",{class:!0});var Oe=q(U);k=D(Oe,"EXP"),Oe.forEach(h),B=R(Ee),d=p(Ee,"BUTTON",{class:!0});var Ve=q(d);Y=D(Ve,"Tick"),Ve.forEach(h),V=R(Ee),E=p(Ee,"BUTTON",{class:!0});var Se=q(E);A=D(Se,"Level"),Se.forEach(h),Ee.forEach(h),ke=R(P),ce=p(P,"H3",{class:!0});var Re=q(ce);we=D(Re,"Dark Mode Toggle"),Re.forEach(h),ee=R(P),ne=p(P,"DIV",{class:!0});var Be=q(ne);oe=p(Be,"BUTTON",{class:!0});var Ue=q(oe);ye=D(Ue,"Dark Mode"),Ue.forEach(h),qe=R(Be),$.l(Be),Be.forEach(h),P.forEach(h),this.h()},h(){g(n,"class","svelte-1aj6l18"),g(I,"class","svelte-1aj6l18"),g(U,"class","svelte-1aj6l18"),g(d,"class","svelte-1aj6l18"),g(E,"class","svelte-1aj6l18"),g(J,"class","container svelte-1aj6l18"),g(ce,"class","svelte-1aj6l18"),g(oe,"class","svelte-1aj6l18"),g(ne,"class","container svelte-1aj6l18"),g(e,"class","settings svelte-1aj6l18")},m(C,P){X(C,e,P),c(e,n),c(n,t),c(e,l),c(e,r),c(r,a),c(r,i),c(r,f),c(r,y),c(r,z),c(r,v),c(r,T),c(r,M),c(r,O),c(e,Z),c(e,I),c(I,Q),c(e,H),c(e,J),c(J,U),c(U,k),c(J,B),c(J,d),c(d,Y),c(J,V),c(J,E),c(E,A),c(e,ke),c(e,ce),c(ce,we),c(e,ee),c(e,ne),c(ne,oe),c(oe,ye),c(ne,qe),de[x].m(ne,null),le=!0,ze||(Te=[ie(U,"click",s[2]),ie(d,"click",s[3]),ie(E,"click",s[4]),ie(oe,"click",s[5])],ze=!0)},p(C,[P]){(!le||P&2)&&o!==(o=C[1].exp+"")&&pe(i,o),(!le||P&2)&&u!==(u=C[1].tick+"")&&pe(y,u),(!le||P&2)&&_!==(_=C[1].level+"")&&pe(v,_),(!le||P&2)&&m!==(m=C[1].text+"")&&pe(O,m);let je=x;x=Pe(C),x===je?de[x].p(C,P):(_e(),j(de[je],1,1,()=>{de[je]=null}),ve(),$=de[x],$?$.p(C,P):($=de[x]=Me[x](C),$.c()),w($,1),$.m(ne,null))},i(C){le||(w($),le=!0)},o(C){j($),le=!1},d(C){C&&h(e),de[x].d(),ze=!1,lt(Te)}}}function Xt(s,e,n){let{config:t}=e,{game:l}=e;const r=()=>{n(1,l.exp++,l)},a=()=>{n(1,l.tick++,l)},o=()=>{n(1,l.level++,l)},i=()=>{n(0,t.darkmode=!t.darkmode,t)};return s.$$set=f=>{"config"in f&&n(0,t=f.config),"game"in f&&n(1,l=f.game)},[t,l,r,a,o,i]}class At extends ae{constructor(e){super(),se(this,e,Xt,Ct,re,{config:0,game:1})}}function Kt(s){let e,n,t,l,r,a,o,i,f,u,y,z;return{c(){e=b("h1"),n=N("???????????????????????????"),t=b("br"),l=N("???????????????????????????"),r=b("br"),a=N("???????????????????????????"),o=b("br"),i=N("???????????????????????????"),f=b("br"),u=N("???????????????????????????"),y=b("br"),z=N("???????????????????????????")},l(_){e=p(_,"H1",{});var v=q(e);n=D(v,"???????????????????????????"),t=p(v,"BR",{}),l=D(v,"???????????????????????????"),r=p(v,"BR",{}),a=D(v,"???????????????????????????"),o=p(v,"BR",{}),i=D(v,"???????????????????????????"),f=p(v,"BR",{}),u=D(v,"???????????????????????????"),y=p(v,"BR",{}),z=D(v,"???????????????????????????"),v.forEach(h)},m(_,v){X(_,e,v),c(e,n),c(e,t),c(e,l),c(e,r),c(e,a),c(e,o),c(e,i),c(e,f),c(e,u),c(e,y),c(e,z)},p:te,i:te,o:te,d(_){_&&h(e)}}}function Wt(s){let e,n,t,l;function r(i){s[4](i)}function a(i){s[5](i)}let o={};return s[0]!==void 0&&(o.config=s[0]),s[1]!==void 0&&(o.game=s[1]),e=new At({props:o}),ge.push(()=>he(e,"config",r)),ge.push(()=>he(e,"game",a)),{c(){K(e.$$.fragment)},l(i){W(e.$$.fragment,i)},m(i,f){G(e,i,f),l=!0},p(i,f){const u={};!n&&f&1&&(n=!0,u.config=i[0],ue(()=>n=!1)),!t&&f&2&&(t=!0,u.game=i[1],ue(()=>t=!1)),e.$set(u)},i(i){l||(w(e.$$.fragment,i),l=!0)},o(i){j(e.$$.fragment,i),l=!1},d(i){F(e,i)}}}function Gt(s){let e,n,t,l;function r(i){s[2](i)}function a(i){s[3](i)}let o={};return s[0]!==void 0&&(o.config=s[0]),s[1]!==void 0&&(o.game=s[1]),e=new St({props:o}),ge.push(()=>he(e,"config",r)),ge.push(()=>he(e,"game",a)),{c(){K(e.$$.fragment)},l(i){W(e.$$.fragment,i)},m(i,f){G(e,i,f),l=!0},p(i,f){const u={};!n&&f&1&&(n=!0,u.config=i[0],ue(()=>n=!1)),!t&&f&2&&(t=!0,u.game=i[1],ue(()=>t=!1)),e.$set(u)},i(i){l||(w(e.$$.fragment,i),l=!0)},o(i){j(e.$$.fragment,i),l=!1},d(i){F(e,i)}}}function Ft(s){let e,n,t,l;const r=[Gt,Wt,Kt],a=[];function o(i,f){return i[1].menu==="practice"?0:i[1].menu==="settings"?1:2}return n=o(s),t=a[n]=r[n](s),{c(){e=b("div"),t.c(),this.h()},l(i){e=p(i,"DIV",{class:!0});var f=q(e);t.l(f),f.forEach(h),this.h()},h(){g(e,"class","view svelte-1xaexjj")},m(i,f){X(i,e,f),a[n].m(e,null),l=!0},p(i,[f]){let u=n;n=o(i),n===u?a[n].p(i,f):(_e(),j(a[u],1,1,()=>{a[u]=null}),ve(),t=a[n],t?t.p(i,f):(t=a[n]=r[n](i),t.c()),w(t,1),t.m(e,null))},i(i){l||(w(t),l=!0)},o(i){j(t),l=!1},d(i){i&&h(e),a[n].d()}}}function Qt(s,e,n){let{config:t}=e,{game:l}=e;function r(f){t=f,n(0,t)}function a(f){l=f,n(1,l)}function o(f){t=f,n(0,t)}function i(f){l=f,n(1,l)}return s.$$set=f=>{"config"in f&&n(0,t=f.config),"game"in f&&n(1,l=f.game)},[t,l,r,a,o,i]}class Yt extends ae{constructor(e){super(),se(this,e,Qt,Ft,re,{config:0,game:1})}}function Zt(s){let e,n,t,l,r,a,o,i,f,u,y,z,_,v,T,M,m;function O(k){s[3](k)}let Z={};s[2]!==void 0&&(Z.game=s[2]),o=new ct({props:Z}),ge.push(()=>he(o,"game",O));function I(k){s[4](k)}function Q(k){s[5](k)}let H={};s[2]!==void 0&&(H.game=s[2]),s[0]!==void 0&&(H.config=s[0]),u=new Yt({props:H}),ge.push(()=>he(u,"game",I)),ge.push(()=>he(u,"config",Q));function J(k){s[6](k)}let U={};return s[2]!==void 0&&(U.game=s[2]),v=new Lt({props:U}),ge.push(()=>he(v,"game",J)),{c(){e=b("link"),n=b("link"),t=b("link"),l=b("meta"),r=S(),a=b("div"),K(o.$$.fragment),f=S(),K(u.$$.fragment),_=S(),K(v.$$.fragment),this.h()},l(k){const B=at('[data-svelte="svelte-hxz1bs"]',document.head);e=p(B,"LINK",{rel:!0,href:!0}),n=p(B,"LINK",{rel:!0,href:!0,crossorigin:!0}),t=p(B,"LINK",{href:!0,rel:!0}),l=p(B,"META",{name:!0,content:!0}),B.forEach(h),r=R(k),a=p(k,"DIV",{class:!0});var d=q(a);W(o.$$.fragment,d),f=R(d),W(u.$$.fragment,d),_=R(d),W(v.$$.fragment,d),d.forEach(h),this.h()},h(){document.title="TomeClicker",g(e,"rel","preconnect"),g(e,"href","https://fonts.googleapis.com"),g(n,"rel","preconnect"),g(n,"href","https://fonts.gstatic.com"),g(n,"crossorigin","anonymous"),g(t,"href","https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Lato:wght@100;300;400;700&display=swap"),g(t,"rel","stylesheet"),g(l,"name","viewport"),g(l,"content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),g(a,"class",M=He(s[1])+" svelte-1uyi8j3")},m(k,B){c(document.head,e),c(document.head,n),c(document.head,t),c(document.head,l),X(k,r,B),X(k,a,B),G(o,a,null),c(a,f),G(u,a,null),c(a,_),G(v,a,null),m=!0},p(k,[B]){const d={};!i&&B&4&&(i=!0,d.game=k[2],ue(()=>i=!1)),o.$set(d);const Y={};!y&&B&4&&(y=!0,Y.game=k[2],ue(()=>y=!1)),!z&&B&1&&(z=!0,Y.config=k[0],ue(()=>z=!1)),u.$set(Y);const V={};!T&&B&4&&(T=!0,V.game=k[2],ue(()=>T=!1)),v.$set(V),(!m||B&2&&M!==(M=He(k[1])+" svelte-1uyi8j3"))&&g(a,"class",M)},i(k){m||(w(o.$$.fragment,k),w(u.$$.fragment,k),w(v.$$.fragment,k),m=!0)},o(k){j(o.$$.fragment,k),j(u.$$.fragment,k),j(v.$$.fragment,k),m=!1},d(k){h(e),h(n),h(t),h(l),k&&h(r),k&&h(a),F(o),F(u),F(v)}}}function xt(s,e,n){let t=new st("prussian-blue",!0),l=new rt,r="";function a(u){l=u,n(2,l),n(1,r),n(0,t)}function o(u){l=u,n(2,l),n(1,r),n(0,t)}function i(u){t=u,n(0,t)}function f(u){l=u,n(2,l),n(1,r),n(0,t)}return s.$$.update=()=>{s.$$.dirty&1&&n(1,r=t.getTheme()),s.$$.dirty&2&&n(2,l.text=r,l)},[t,r,l,a,o,i,f]}class en extends ae{constructor(e){super(),se(this,e,xt,Zt,re,{})}}export{en as default};
