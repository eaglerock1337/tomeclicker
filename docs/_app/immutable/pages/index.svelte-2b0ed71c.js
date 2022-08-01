import{S as me,i as ve,s as _e,e as d,t as I,k as N,c as m,a as _,h as M,d as h,m as D,b as g,g as F,J as f,j as Re,n as ie,D as mt,K as Ue,L as je,M as Se,A as vt,F as _t,N as Y,G as bt,H as pt,I as kt,r as q,p as L,x as Z,y as $,z as ee,C as te,l as De,o as qe,q as Ee,O as wt,P as ze,Q as Te,R as Ie,T as pe,U as yt,V as Et,W as nt}from"../chunks/index-ed3e9753.js";class zt{constructor(e,l){this.darkmode=l,this.theme=e}getTheme(){const e=this.darkmode?"dark":"light";return this.theme+"-"+e}}class Tt{constructor(e){this.name=e||"A Stranger",this.tickrate=1e3,this.exp=0,this.tick=0,this.text="click me",this.menu="practice"}get level(){return Math.floor(Math.log10(this.exp)/3)+1}showHeader(){return this.exp>10}showMenu(){return this.exp>50}}function It(a){let e,l,t,i,r=a[0].exp+"",n,o,s,c,u=a[0].level+"",E;return{c(){e=d("header"),l=d("div"),t=d("div"),i=I("EXP: "),n=I(r),o=N(),s=d("div"),c=I("Level: "),E=I(u),this.h()},l(y){e=m(y,"HEADER",{class:!0});var v=_(e);l=m(v,"DIV",{class:!0});var b=_(l);t=m(b,"DIV",{class:!0});var P=_(t);i=M(P,"EXP: "),n=M(P,r),P.forEach(h),o=D(b),s=m(b,"DIV",{class:!0});var k=_(s);c=M(k,"Level: "),E=M(k,u),k.forEach(h),b.forEach(h),v.forEach(h),this.h()},h(){g(t,"class","item svelte-gcob28"),g(s,"class","item svelte-gcob28"),g(l,"class","container svelte-gcob28"),g(e,"class","svelte-gcob28")},m(y,v){F(y,e,v),f(e,l),f(l,t),f(t,i),f(t,n),f(l,o),f(l,s),f(s,c),f(s,E)},p(y,[v]){v&1&&r!==(r=y[0].exp+"")&&Re(n,r),v&1&&u!==(u=y[0].level+"")&&Re(E,u)},i:ie,o:ie,d(y){y&&h(e)}}}function Mt(a,e,l){let{game:t}=e;return a.$$set=i=>{"game"in i&&l(0,t=i.game)},[t]}class Bt extends me{constructor(e){super(),ve(this,e,Mt,It,_e,{game:0})}}function Lt(a){let e,l,t=[{id:l="path-"+a[0]},a[1]],i={};for(let r=0;r<t.length;r+=1)i=mt(i,t[r]);return{c(){e=Ue("path"),this.h()},l(r){e=je(r,"path",{id:!0}),_(e).forEach(h),this.h()},h(){Se(e,i)},m(r,n){F(r,e,n)},p(r,[n]){Se(e,i=vt(t,[n&1&&l!==(l="path-"+r[0])&&{id:l},n&2&&r[1]]))},i:ie,o:ie,d(r){r&&h(e)}}}function Nt(a,e,l){let{id:t}=e,{data:i={}}=e;return a.$$set=r=>{"id"in r&&l(0,t=r.id),"data"in r&&l(1,i=r.data)},[t,i]}class Dt extends me{constructor(e){super(),ve(this,e,Nt,Lt,_e,{id:0,data:1})}}function Ot(a){let e,l,t=[{id:l="polygon-"+a[0]},a[1]],i={};for(let r=0;r<t.length;r+=1)i=mt(i,t[r]);return{c(){e=Ue("polygon"),this.h()},l(r){e=je(r,"polygon",{id:!0}),_(e).forEach(h),this.h()},h(){Se(e,i)},m(r,n){F(r,e,n)},p(r,[n]){Se(e,i=vt(t,[n&1&&l!==(l="polygon-"+r[0])&&{id:l},n&2&&r[1]]))},i:ie,o:ie,d(r){r&&h(e)}}}function Pt(a,e,l){let{id:t}=e,{data:i={}}=e;return a.$$set=r=>{"id"in r&&l(0,t=r.id),"data"in r&&l(1,i=r.data)},[t,i]}class Rt extends me{constructor(e){super(),ve(this,e,Pt,Ot,_e,{id:0,data:1})}}function Ht(a){let e;return{c(){e=Ue("g")},l(l){e=je(l,"g",{});var t=_(e);t.forEach(h)},m(l,t){F(l,e,t),e.innerHTML=a[0]},p(l,[t]){t&1&&(e.innerHTML=l[0])},i:ie,o:ie,d(l){l&&h(e)}}}function Vt(a,e,l){let t=870711;function i(){return t+=1,`fa-${t.toString(16)}`}let r,{data:n}=e;function o(s){if(!s||!s.raw)return null;let c=s.raw;const u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(E,y)=>{const v=i();return u[y]=v,` id="${v}"`}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(E,y,v,b)=>{const P=y||b;return!P||!u[P]?E:`#${u[P]}`}),c}return a.$$set=s=>{"data"in s&&l(1,n=s.data)},a.$$.update=()=>{a.$$.dirty&2&&l(0,r=o(n))},[r,n]}class St extends me{constructor(e){super(),ve(this,e,Vt,Ht,_e,{data:1})}}function Ut(a){let e,l,t,i;const r=a[13].default,n=_t(r,a,a[12],null);return{c(){e=Ue("svg"),n&&n.c(),this.h()},l(o){e=je(o,"svg",{version:!0,class:!0,x:!0,y:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var s=_(e);n&&n.l(s),s.forEach(h),this.h()},h(){g(e,"version","1.1"),g(e,"class",l="fa-icon "+a[0]+" svelte-1dof0an"),g(e,"x",a[8]),g(e,"y",a[9]),g(e,"width",a[1]),g(e,"height",a[2]),g(e,"aria-label",a[11]),g(e,"role",t=a[11]?"img":"presentation"),g(e,"viewBox",a[3]),g(e,"style",a[10]),Y(e,"fa-spin",a[4]),Y(e,"fa-pulse",a[6]),Y(e,"fa-inverse",a[5]),Y(e,"fa-flip-horizontal",a[7]==="horizontal"),Y(e,"fa-flip-vertical",a[7]==="vertical")},m(o,s){F(o,e,s),n&&n.m(e,null),i=!0},p(o,[s]){n&&n.p&&(!i||s&4096)&&bt(n,r,o,o[12],i?kt(r,o[12],s,null):pt(o[12]),null),(!i||s&1&&l!==(l="fa-icon "+o[0]+" svelte-1dof0an"))&&g(e,"class",l),(!i||s&256)&&g(e,"x",o[8]),(!i||s&512)&&g(e,"y",o[9]),(!i||s&2)&&g(e,"width",o[1]),(!i||s&4)&&g(e,"height",o[2]),(!i||s&2048)&&g(e,"aria-label",o[11]),(!i||s&2048&&t!==(t=o[11]?"img":"presentation"))&&g(e,"role",t),(!i||s&8)&&g(e,"viewBox",o[3]),(!i||s&1024)&&g(e,"style",o[10]),s&17&&Y(e,"fa-spin",o[4]),s&65&&Y(e,"fa-pulse",o[6]),s&33&&Y(e,"fa-inverse",o[5]),s&129&&Y(e,"fa-flip-horizontal",o[7]==="horizontal"),s&129&&Y(e,"fa-flip-vertical",o[7]==="vertical")},i(o){i||(q(n,o),i=!0)},o(o){L(n,o),i=!1},d(o){o&&h(e),n&&n.d(o)}}}function jt(a,e,l){let{$$slots:t={},$$scope:i}=e,{class:r}=e,{width:n}=e,{height:o}=e,{box:s}=e,{spin:c=!1}=e,{inverse:u=!1}=e,{pulse:E=!1}=e,{flip:y=null}=e,{x:v=void 0}=e,{y:b=void 0}=e,{style:P=void 0}=e,{label:k=void 0}=e;return a.$$set=w=>{"class"in w&&l(0,r=w.class),"width"in w&&l(1,n=w.width),"height"in w&&l(2,o=w.height),"box"in w&&l(3,s=w.box),"spin"in w&&l(4,c=w.spin),"inverse"in w&&l(5,u=w.inverse),"pulse"in w&&l(6,E=w.pulse),"flip"in w&&l(7,y=w.flip),"x"in w&&l(8,v=w.x),"y"in w&&l(9,b=w.y),"style"in w&&l(10,P=w.style),"label"in w&&l(11,k=w.label),"$$scope"in w&&l(12,i=w.$$scope)},[r,n,o,s,c,u,E,y,v,b,P,k,i,t]}class Jt extends me{constructor(e){super(),ve(this,e,jt,Ut,_e,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function it(a,e,l){const t=a.slice();return t[24]=e[l],t[26]=l,t}function st(a,e,l){const t=a.slice();return t[27]=e[l],t[26]=l,t}function at(a){let e,l,t,i,r=a[6].paths&&rt(a),n=a[6].polygons&&ft(a),o=a[6].raw&&ut(a);return{c(){r&&r.c(),e=N(),n&&n.c(),l=N(),o&&o.c(),t=De()},l(s){r&&r.l(s),e=D(s),n&&n.l(s),l=D(s),o&&o.l(s),t=De()},m(s,c){r&&r.m(s,c),F(s,e,c),n&&n.m(s,c),F(s,l,c),o&&o.m(s,c),F(s,t,c),i=!0},p(s,c){s[6].paths?r?(r.p(s,c),c&64&&q(r,1)):(r=rt(s),r.c(),q(r,1),r.m(e.parentNode,e)):r&&(qe(),L(r,1,1,()=>{r=null}),Ee()),s[6].polygons?n?(n.p(s,c),c&64&&q(n,1)):(n=ft(s),n.c(),q(n,1),n.m(l.parentNode,l)):n&&(qe(),L(n,1,1,()=>{n=null}),Ee()),s[6].raw?o?(o.p(s,c),c&64&&q(o,1)):(o=ut(s),o.c(),q(o,1),o.m(t.parentNode,t)):o&&(qe(),L(o,1,1,()=>{o=null}),Ee())},i(s){i||(q(r),q(n),q(o),i=!0)},o(s){L(r),L(n),L(o),i=!1},d(s){r&&r.d(s),s&&h(e),n&&n.d(s),s&&h(l),o&&o.d(s),s&&h(t)}}}function rt(a){let e,l,t=a[6].paths,i=[];for(let n=0;n<t.length;n+=1)i[n]=ot(st(a,t,n));const r=n=>L(i[n],1,1,()=>{i[n]=null});return{c(){for(let n=0;n<i.length;n+=1)i[n].c();e=De()},l(n){for(let o=0;o<i.length;o+=1)i[o].l(n);e=De()},m(n,o){for(let s=0;s<i.length;s+=1)i[s].m(n,o);F(n,e,o),l=!0},p(n,o){if(o&64){t=n[6].paths;let s;for(s=0;s<t.length;s+=1){const c=st(n,t,s);i[s]?(i[s].p(c,o),q(i[s],1)):(i[s]=ot(c),i[s].c(),q(i[s],1),i[s].m(e.parentNode,e))}for(qe(),s=t.length;s<i.length;s+=1)r(s);Ee()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)q(i[o]);l=!0}},o(n){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)L(i[o]);l=!1},d(n){wt(i,n),n&&h(e)}}}function ot(a){let e,l;return e=new Dt({props:{id:a[26],data:a[27]}}),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},p(t,i){const r={};i&64&&(r.data=t[27]),e.$set(r)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){te(e,t)}}}function ft(a){let e,l,t=a[6].polygons,i=[];for(let n=0;n<t.length;n+=1)i[n]=ct(it(a,t,n));const r=n=>L(i[n],1,1,()=>{i[n]=null});return{c(){for(let n=0;n<i.length;n+=1)i[n].c();e=De()},l(n){for(let o=0;o<i.length;o+=1)i[o].l(n);e=De()},m(n,o){for(let s=0;s<i.length;s+=1)i[s].m(n,o);F(n,e,o),l=!0},p(n,o){if(o&64){t=n[6].polygons;let s;for(s=0;s<t.length;s+=1){const c=it(n,t,s);i[s]?(i[s].p(c,o),q(i[s],1)):(i[s]=ct(c),i[s].c(),q(i[s],1),i[s].m(e.parentNode,e))}for(qe(),s=t.length;s<i.length;s+=1)r(s);Ee()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)q(i[o]);l=!0}},o(n){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)L(i[o]);l=!1},d(n){wt(i,n),n&&h(e)}}}function ct(a){let e,l;return e=new Rt({props:{id:a[26],data:a[24]}}),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},p(t,i){const r={};i&64&&(r.data=t[24]),e.$set(r)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){te(e,t)}}}function ut(a){let e,l,t;function i(n){a[15](n)}let r={};return a[6]!==void 0&&(r.data=a[6]),e=new St({props:r}),Te.push(()=>Ie(e,"data",i)),{c(){Z(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){ee(e,n,o),t=!0},p(n,o){const s={};!l&&o&64&&(l=!0,s.data=n[6],ze(()=>l=!1)),e.$set(s)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function Xt(a){let e,l,t=a[6]&&at(a);return{c(){t&&t.c(),e=De()},l(i){t&&t.l(i),e=De()},m(i,r){t&&t.m(i,r),F(i,e,r),l=!0},p(i,r){i[6]?t?(t.p(i,r),r&64&&q(t,1)):(t=at(i),t.c(),q(t,1),t.m(e.parentNode,e)):t&&(qe(),L(t,1,1,()=>{t=null}),Ee())},i(i){l||(q(t),l=!0)},o(i){L(t),l=!1},d(i){t&&t.d(i),i&&h(e)}}}function Ct(a){let e;const l=a[14].default,t=_t(l,a,a[16],null),i=t||Xt(a);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,n){i&&i.m(r,n),e=!0},p(r,n){t?t.p&&(!e||n&65536)&&bt(t,l,r,r[16],e?kt(l,r[16],n,null):pt(r[16]),null):i&&i.p&&(!e||n&64)&&i.p(r,e?n:-1)},i(r){e||(q(i,r),e=!0)},o(r){L(i,r),e=!1},d(r){i&&i.d(r)}}}function At(a){let e,l;return e=new Jt({props:{label:a[5],width:a[7],height:a[8],box:a[10],style:a[9],spin:a[1],flip:a[4],inverse:a[2],pulse:a[3],class:a[0],$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},p(t,[i]){const r={};i&32&&(r.label=t[5]),i&128&&(r.width=t[7]),i&256&&(r.height=t[8]),i&1024&&(r.box=t[10]),i&512&&(r.style=t[9]),i&2&&(r.spin=t[1]),i&16&&(r.flip=t[4]),i&4&&(r.inverse=t[2]),i&8&&(r.pulse=t[3]),i&1&&(r.class=t[0]),i&65600&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){te(e,t)}}}let ht=1;function Kt(a){if("iconName"in a&&"icon"in a){let e={},l=a.icon,t=a.iconName,i=l[0],r=l[1],n=l[4],o={width:i,height:r,paths:[{d:n}]};return e[t]=o,e}return a}function Wt(a,e,l){let{$$slots:t={},$$scope:i}=e,{class:r=""}=e,{data:n}=e,{scale:o=1}=e,{spin:s=!1}=e,{inverse:c=!1}=e,{pulse:u=!1}=e,{flip:E=null}=e,{label:y=null}=e,v=null,{style:b=null}=e,P,k,w,X;function W(){if(typeof n=="undefined")return;const p=Kt(n),[x]=Object.keys(p),U=p[x];U.paths||(U.paths=[]),U.d&&U.paths.push({d:U.d}),U.polygons||(U.polygons=[]),U.points&&U.polygons.push({points:U.points}),l(6,v=U)}function T(){let p=1;return typeof o!="undefined"&&(p=Number(o)),isNaN(p)||p<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),ht):p*ht}function z(){return v?`0 0 ${v.width} ${v.height}`:`0 0 ${P} ${k}`}function B(){return v?Math.max(v.width,v.height)/16:1}function R(){return v?v.width/B()*T():0}function C(){return v?v.height/B()*T():0}function A(){let p="";b!==null&&(p+=b);let x=T();return x===1?p.length===0?void 0:p:(p!==""&&!p.endsWith(";")&&(p+="; "),`${p}font-size: ${x}em`)}function le(p){v=p,l(6,v)}return a.$$set=p=>{"class"in p&&l(0,r=p.class),"data"in p&&l(11,n=p.data),"scale"in p&&l(12,o=p.scale),"spin"in p&&l(1,s=p.spin),"inverse"in p&&l(2,c=p.inverse),"pulse"in p&&l(3,u=p.pulse),"flip"in p&&l(4,E=p.flip),"label"in p&&l(5,y=p.label),"style"in p&&l(13,b=p.style),"$$scope"in p&&l(16,i=p.$$scope)},a.$$.update=()=>{a.$$.dirty&14336&&(W(),l(7,P=R()),l(8,k=C()),l(9,w=A()),l(10,X=z()))},[r,s,c,u,E,y,v,P,k,w,X,n,o,b,t,le,i]}class Ne extends me{constructor(e){super(),ve(this,e,Wt,At,_e,{class:0,data:11,scale:12,spin:1,inverse:2,pulse:3,flip:4,label:5,style:13})}}const Yt={edit:{width:1792,height:1792,paths:[{d:"M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"}]}},xt={gear:{width:1536,height:1792,paths:[{d:"M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"}]}},Gt={info:{width:640,height:1792,paths:[{d:"M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zM512 192v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"}]}},qt={"mouse-pointer":{width:1280,height:1792,paths:[{d:"M1133 1043q31 30 14 69-17 40-59 40h-382l201 476q10 25 0 49t-34 35l-177 75q-25 10-49 0t-35-34l-191-452-312 312q-19 19-45 19-12 0-24-5-40-17-40-59v-1504q0-42 40-59 12-5 24-5 27 0 45 19z"}]}},Ft={"question-circle-o":{width:1536,height:1792,paths:[{d:"M880 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zM1136 704q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}]}};function Qt(a){let e,l,t,i,r,n,o,s,c,u,E,y,v,b,P,k,w,X,W,T,z,B,R,C,A,le,p,x,U;return u=new Ne({props:{scale:1.5,data:qt}}),b=new Ne({props:{scale:1.5,data:Yt}}),X=new Ne({props:{scale:1.5,data:Ft}}),B=new Ne({props:{scale:1.5,data:xt}}),le=new Ne({props:{scale:1.5,data:Gt}}),{c(){e=d("div"),l=d("div"),t=d("button"),i=d("p"),r=I("tick"),n=N(),o=d("div"),s=d("button"),c=d("p"),Z(u.$$.fragment),E=N(),y=d("button"),v=d("p"),Z(b.$$.fragment),P=N(),k=d("button"),w=d("p"),Z(X.$$.fragment),W=N(),T=d("button"),z=d("p"),Z(B.$$.fragment),R=N(),C=d("button"),A=d("p"),Z(le.$$.fragment),this.h()},l(O){e=m(O,"DIV",{class:!0});var S=_(e);l=m(S,"DIV",{class:!0});var ke=_(l);t=m(ke,"BUTTON",{class:!0});var re=_(t);i=m(re,"P",{class:!0});var ue=_(i);r=M(ue,"tick"),ue.forEach(h),re.forEach(h),ke.forEach(h),n=D(S),o=m(S,"DIV",{class:!0});var Q=_(o);s=m(Q,"BUTTON",{class:!0});var ne=_(s);c=m(ne,"P",{class:!0});var H=_(c);$(u.$$.fragment,H),H.forEach(h),ne.forEach(h),E=D(Q),y=m(Q,"BUTTON",{class:!0});var oe=_(y);v=m(oe,"P",{class:!0});var we=_(v);$(b.$$.fragment,we),we.forEach(h),oe.forEach(h),P=D(Q),k=m(Q,"BUTTON",{class:!0});var G=_(k);w=m(G,"P",{class:!0});var j=_(w);$(X.$$.fragment,j),j.forEach(h),G.forEach(h),W=D(Q),T=m(Q,"BUTTON",{class:!0});var se=_(T);z=m(se,"P",{class:!0});var ye=_(z);$(B.$$.fragment,ye),ye.forEach(h),se.forEach(h),R=D(Q),C=m(Q,"BUTTON",{class:!0});var he=_(C);A=m(he,"P",{class:!0});var Me=_(A);$(le.$$.fragment,Me),Me.forEach(h),he.forEach(h),Q.forEach(h),S.forEach(h),this.h()},h(){g(i,"class","svelte-adifyt"),g(t,"class","tick svelte-adifyt"),g(l,"class","tick svelte-adifyt"),g(c,"class","svelte-adifyt"),Y(c,"red",a[0].menu==="practice"),g(s,"class","svelte-adifyt"),g(v,"class","svelte-adifyt"),Y(v,"red",a[0].menu==="story"),g(y,"class","svelte-adifyt"),g(w,"class","svelte-adifyt"),Y(w,"red",a[0].menu==="help"),g(k,"class","svelte-adifyt"),g(z,"class","svelte-adifyt"),Y(z,"red",a[0].menu==="settings"),g(T,"class","svelte-adifyt"),g(A,"class","svelte-adifyt"),Y(A,"red",a[0].menu==="about"),g(C,"class","svelte-adifyt"),g(o,"class","menu svelte-adifyt"),g(e,"class","navbar svelte-adifyt")},m(O,S){F(O,e,S),f(e,l),f(l,t),f(t,i),f(i,r),f(e,n),f(e,o),f(o,s),f(s,c),ee(u,c,null),f(o,E),f(o,y),f(y,v),ee(b,v,null),f(o,P),f(o,k),f(k,w),ee(X,w,null),f(o,W),f(o,T),f(T,z),ee(B,z,null),f(o,R),f(o,C),f(C,A),ee(le,A,null),p=!0,x||(U=[pe(t,"click",a[1]),pe(s,"click",a[2]),pe(y,"click",a[3]),pe(k,"click",a[4]),pe(T,"click",a[5]),pe(C,"click",a[6])],x=!0)},p(O,[S]){S&1&&Y(c,"red",O[0].menu==="practice"),S&1&&Y(v,"red",O[0].menu==="story"),S&1&&Y(w,"red",O[0].menu==="help"),S&1&&Y(z,"red",O[0].menu==="settings"),S&1&&Y(A,"red",O[0].menu==="about")},i(O){p||(q(u.$$.fragment,O),q(b.$$.fragment,O),q(X.$$.fragment,O),q(B.$$.fragment,O),q(le.$$.fragment,O),p=!0)},o(O){L(u.$$.fragment,O),L(b.$$.fragment,O),L(X.$$.fragment,O),L(B.$$.fragment,O),L(le.$$.fragment,O),p=!1},d(O){O&&h(e),te(u),te(b),te(X),te(B),te(le),x=!1,yt(U)}}}function Zt(a,e,l){let{game:t}=e;t=t;function i(){l(0,t.tick++,t),l(0,t.text="tock "+t.tick,t)}const r=()=>l(0,t.menu="practice",t),n=()=>l(0,t.menu="story",t),o=()=>l(0,t.menu="help",t),s=()=>l(0,t.menu="settings",t),c=()=>l(0,t.menu="about",t);return a.$$set=u=>{"game"in u&&l(0,t=u.game)},[t,i,r,n,o,s,c]}class $t extends me{constructor(e){super(),ve(this,e,Zt,Qt,_e,{game:0})}}function el(a){let e,l,t,i,r,n=a[0].text+"",o,s,c,u;return i=new Ne({props:{scale:3,data:qt}}),{c(){e=d("div"),l=d("button"),t=d("div"),Z(i.$$.fragment),r=d("br"),o=I(n),this.h()},l(E){e=m(E,"DIV",{class:!0});var y=_(e);l=m(y,"BUTTON",{class:!0});var v=_(l);t=m(v,"DIV",{class:!0});var b=_(t);$(i.$$.fragment,b),r=m(b,"BR",{}),o=M(b,n),b.forEach(h),v.forEach(h),y.forEach(h),this.h()},h(){g(t,"class","item svelte-lg1otr"),g(l,"class","svelte-lg1otr"),g(e,"class","thebutton svelte-lg1otr")},m(E,y){F(E,e,y),f(e,l),f(l,t),ee(i,t,null),f(t,r),f(t,o),s=!0,c||(u=pe(l,"click",a[1]),c=!0)},p(E,[y]){(!s||y&1)&&n!==(n=E[0].text+"")&&Re(o,n)},i(E){s||(q(i.$$.fragment,E),s=!0)},o(E){L(i.$$.fragment,E),s=!1},d(E){E&&h(e),te(i),c=!1,u()}}}function tl(a,e,l){let{config:t}=e,{game:i}=e;function r(){l(0,i.exp++,i),l(0,i.text="ayy "+i.exp,i)}return t=t,a.$$set=n=>{"config"in n&&l(2,t=n.config),"game"in n&&l(0,i=n.game)},[i,r,t]}class ll extends me{constructor(e){super(),ve(this,e,tl,el,_e,{config:2,game:0})}}const nl={"toggle-on":{width:2048,height:1792,paths:[{d:"M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zM1408 1408q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z"}]}},il={"toggle-off":{width:2048,height:1792,paths:[{d:"M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zM1920 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zM2048 896q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z"}]}};function sl(a){let e,l;return e=new Ne({props:{scale:3,data:il}}),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},p:ie,i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){te(e,t)}}}function al(a){let e,l;return e=new Ne({props:{scale:3,data:nl}}),{c(){Z(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},p:ie,i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){te(e,t)}}}function rl(a){let e,l,t,i,r,n,o=a[1].exp+"",s,c,u=a[1].tick+"",E,y,v=a[1].level+"",b,P,k,w=a[1].text+"",X,W,T,z,B,R,C,A,le,p,x,U,O,S,ke,re,ue,Q,ne,H,oe,we,G,j,se,ye,he;const Me=[al,sl],ge=[];function Be(J,V){return J[0].darkmode?0:1}return G=Be(a),j=ge[G]=Me[G](a),{c(){e=d("div"),l=d("h1"),t=I("settings"),i=N(),r=d("p"),n=I("EXP: "),s=I(o),c=I(" Tick: "),E=I(u),y=I(" Level: "),b=I(v),P=d("br"),k=N(),X=I(w),W=N(),T=d("h2"),z=I("test buttons"),B=N(),R=d("div"),C=d("button"),A=I("EXP"),le=N(),p=d("button"),x=I("Tick"),U=N(),O=d("button"),S=I("100EXP"),ke=N(),re=d("h2"),ue=I("game settings"),Q=N(),ne=d("div"),H=d("button"),oe=I("Dark Mode"),we=N(),j.c(),this.h()},l(J){e=m(J,"DIV",{class:!0});var V=_(e);l=m(V,"H1",{class:!0});var fe=_(l);t=M(fe,"settings"),fe.forEach(h),i=D(V),r=m(V,"P",{});var ae=_(r);n=M(ae,"EXP: "),s=M(ae,o),c=M(ae," Tick: "),E=M(ae,u),y=M(ae," Level: "),b=M(ae,v),P=m(ae,"BR",{}),k=D(ae),X=M(ae,w),ae.forEach(h),W=D(V),T=m(V,"H2",{class:!0});var He=_(T);z=M(He,"test buttons"),He.forEach(h),B=D(V),R=m(V,"DIV",{class:!0});var ce=_(R);C=m(ce,"BUTTON",{class:!0});var Ve=_(C);A=M(Ve,"EXP"),Ve.forEach(h),le=D(ce),p=m(ce,"BUTTON",{class:!0});var Le=_(p);x=M(Le,"Tick"),Le.forEach(h),U=D(ce),O=m(ce,"BUTTON",{class:!0});var Oe=_(O);S=M(Oe,"100EXP"),Oe.forEach(h),ce.forEach(h),ke=D(V),re=m(V,"H2",{class:!0});var be=_(re);ue=M(be,"game settings"),be.forEach(h),Q=D(V),ne=m(V,"DIV",{class:!0});var Pe=_(ne);H=m(Pe,"BUTTON",{class:!0});var K=_(H);oe=M(K,"Dark Mode"),K.forEach(h),we=D(Pe),j.l(Pe),Pe.forEach(h),V.forEach(h),this.h()},h(){g(l,"class","svelte-1o6bvfb"),g(T,"class","svelte-1o6bvfb"),g(C,"class","svelte-1o6bvfb"),g(p,"class","svelte-1o6bvfb"),g(O,"class","svelte-1o6bvfb"),g(R,"class","container svelte-1o6bvfb"),g(re,"class","svelte-1o6bvfb"),g(H,"class","svelte-1o6bvfb"),g(ne,"class","container svelte-1o6bvfb"),g(e,"class","settings svelte-1o6bvfb")},m(J,V){F(J,e,V),f(e,l),f(l,t),f(e,i),f(e,r),f(r,n),f(r,s),f(r,c),f(r,E),f(r,y),f(r,b),f(r,P),f(r,k),f(r,X),f(e,W),f(e,T),f(T,z),f(e,B),f(e,R),f(R,C),f(C,A),f(R,le),f(R,p),f(p,x),f(R,U),f(R,O),f(O,S),f(e,ke),f(e,re),f(re,ue),f(e,Q),f(e,ne),f(ne,H),f(H,oe),f(ne,we),ge[G].m(ne,null),se=!0,ye||(he=[pe(C,"click",a[2]),pe(p,"click",a[3]),pe(O,"click",a[4]),pe(H,"click",a[5])],ye=!0)},p(J,[V]){(!se||V&2)&&o!==(o=J[1].exp+"")&&Re(s,o),(!se||V&2)&&u!==(u=J[1].tick+"")&&Re(E,u),(!se||V&2)&&v!==(v=J[1].level+"")&&Re(b,v),(!se||V&2)&&w!==(w=J[1].text+"")&&Re(X,w);let fe=G;G=Be(J),G===fe?ge[G].p(J,V):(qe(),L(ge[fe],1,1,()=>{ge[fe]=null}),Ee(),j=ge[G],j?j.p(J,V):(j=ge[G]=Me[G](J),j.c()),q(j,1),j.m(ne,null))},i(J){se||(q(j),se=!0)},o(J){L(j),se=!1},d(J){J&&h(e),ge[G].d(),ye=!1,yt(he)}}}function ol(a,e,l){let{config:t}=e,{game:i}=e;const r=()=>{l(1,i.exp++,i)},n=()=>{l(1,i.tick++,i)},o=()=>{l(1,i.exp+=100,i)},s=()=>{l(0,t.darkmode=!t.darkmode,t)};return a.$$set=c=>{"config"in c&&l(0,t=c.config),"game"in c&&l(1,i=c.game)},[t,i,r,n,o,s]}class fl extends me{constructor(e){super(),ve(this,e,ol,rl,_e,{config:0,game:1})}}function cl(a){let e,l,t,i,r,n,o,s,c,u,E,y,v,b,P,k,w,X,W,T,z,B,R,C,A,le,p,x,U,O,S,ke,re,ue,Q,ne,H,oe,we,G,j,se,ye,he,Me,ge,Be,J,V,fe,ae,He,ce,Ve;return{c(){e=d("div"),l=d("div"),t=d("h1"),i=I("storyline"),r=N(),n=d("ol"),o=d("li"),s=I("This is a chapter"),c=N(),u=d("li"),E=I("This is another chapter"),y=N(),v=d("li"),b=I("Revenge of the chapter"),P=N(),k=d("li"),w=I("Hey look, it's a chapter!"),X=N(),W=d("li"),T=I("In Soviet Russia, chapter reads you"),z=N(),B=d("li"),R=I("Chapter Revisited"),C=N(),A=d("li"),le=I("YOLO, so here's a chapter"),p=N(),x=d("li"),U=I("The chapter to end all chapters"),O=N(),S=d("li"),ke=I("The final chapter"),re=N(),ue=d("h2"),Q=I("more stuff"),ne=N(),H=d("ul"),oe=d("li"),we=I("The extra chapter"),G=N(),j=d("li"),se=I("This is another extra chapter"),ye=N(),he=d("li"),Me=I("The extended chapter"),ge=N(),Be=d("li"),J=I("The uncut chapter"),V=N(),fe=d("li"),ae=I("The chapter to not screw everything up"),He=N(),ce=d("li"),Ve=I("Babbitaboopi"),this.h()},l(Le){e=m(Le,"DIV",{class:!0});var Oe=_(e);l=m(Oe,"DIV",{class:!0});var be=_(l);t=m(be,"H1",{class:!0});var Pe=_(t);i=M(Pe,"storyline"),Pe.forEach(h),r=D(be),n=m(be,"OL",{});var K=_(n);o=m(K,"LI",{class:!0});var Je=_(o);s=M(Je,"This is a chapter"),Je.forEach(h),c=D(K),u=m(K,"LI",{class:!0});var Xe=_(u);E=M(Xe,"This is another chapter"),Xe.forEach(h),y=D(K),v=m(K,"LI",{class:!0});var Ce=_(v);b=M(Ce,"Revenge of the chapter"),Ce.forEach(h),P=D(K),k=m(K,"LI",{class:!0});var Ae=_(k);w=M(Ae,"Hey look, it's a chapter!"),Ae.forEach(h),X=D(K),W=m(K,"LI",{class:!0});var Ke=_(W);T=M(Ke,"In Soviet Russia, chapter reads you"),Ke.forEach(h),z=D(K),B=m(K,"LI",{class:!0});var We=_(B);R=M(We,"Chapter Revisited"),We.forEach(h),C=D(K),A=m(K,"LI",{class:!0});var Ye=_(A);le=M(Ye,"YOLO, so here's a chapter"),Ye.forEach(h),p=D(K),x=m(K,"LI",{class:!0});var xe=_(x);U=M(xe,"The chapter to end all chapters"),xe.forEach(h),O=D(K),S=m(K,"LI",{class:!0});var Ge=_(S);ke=M(Ge,"The final chapter"),Ge.forEach(h),K.forEach(h),re=D(be),ue=m(be,"H2",{});var Fe=_(ue);Q=M(Fe,"more stuff"),Fe.forEach(h),ne=D(be),H=m(be,"UL",{});var de=_(H);oe=m(de,"LI",{class:!0});var Qe=_(oe);we=M(Qe,"The extra chapter"),Qe.forEach(h),G=D(de),j=m(de,"LI",{class:!0});var Ze=_(j);se=M(Ze,"This is another extra chapter"),Ze.forEach(h),ye=D(de),he=m(de,"LI",{class:!0});var $e=_(he);Me=M($e,"The extended chapter"),$e.forEach(h),ge=D(de),Be=m(de,"LI",{class:!0});var et=_(Be);J=M(et,"The uncut chapter"),et.forEach(h),V=D(de),fe=m(de,"LI",{class:!0});var tt=_(fe);ae=M(tt,"The chapter to not screw everything up"),tt.forEach(h),He=D(de),ce=m(de,"LI",{class:!0});var lt=_(ce);Ve=M(lt,"Babbitaboopi"),lt.forEach(h),de.forEach(h),be.forEach(h),Oe.forEach(h),this.h()},h(){g(t,"class","svelte-fpe123"),g(o,"class","svelte-fpe123"),g(u,"class","svelte-fpe123"),g(v,"class","svelte-fpe123"),g(k,"class","svelte-fpe123"),g(W,"class","svelte-fpe123"),g(B,"class","svelte-fpe123"),g(A,"class","svelte-fpe123"),g(x,"class","svelte-fpe123"),g(S,"class","svelte-fpe123"),g(oe,"class","svelte-fpe123"),g(j,"class","svelte-fpe123"),g(he,"class","svelte-fpe123"),g(Be,"class","svelte-fpe123"),g(fe,"class","svelte-fpe123"),g(ce,"class","svelte-fpe123"),g(l,"class","scrollbox svelte-fpe123"),g(e,"class","story svelte-fpe123")},m(Le,Oe){F(Le,e,Oe),f(e,l),f(l,t),f(t,i),f(l,r),f(l,n),f(n,o),f(o,s),f(n,c),f(n,u),f(u,E),f(n,y),f(n,v),f(v,b),f(n,P),f(n,k),f(k,w),f(n,X),f(n,W),f(W,T),f(n,z),f(n,B),f(B,R),f(n,C),f(n,A),f(A,le),f(n,p),f(n,x),f(x,U),f(n,O),f(n,S),f(S,ke),f(l,re),f(l,ue),f(ue,Q),f(l,ne),f(l,H),f(H,oe),f(oe,we),f(H,G),f(H,j),f(j,se),f(H,ye),f(H,he),f(he,Me),f(H,ge),f(H,Be),f(Be,J),f(H,V),f(H,fe),f(fe,ae),f(H,He),f(H,ce),f(ce,Ve)},p:ie,i:ie,o:ie,d(Le){Le&&h(e)}}}function ul(a,e,l){let{game:t}=e;return t=t,a.$$set=i=>{"game"in i&&l(0,t=i.game)},[t]}class hl extends me{constructor(e){super(),ve(this,e,ul,cl,_e,{game:0})}}function gl(a){let e,l,t,i,r,n,o,s,c,u,E,y;return{c(){e=d("h1"),l=I("???????????????????????????"),t=d("br"),i=I("???????????????????????????"),r=d("br"),n=I("???????????????????????????"),o=d("br"),s=I("???????????????????????????"),c=d("br"),u=I("???????????????????????????"),E=d("br"),y=I("???????????????????????????")},l(v){e=m(v,"H1",{});var b=_(e);l=M(b,"???????????????????????????"),t=m(b,"BR",{}),i=M(b,"???????????????????????????"),r=m(b,"BR",{}),n=M(b,"???????????????????????????"),o=m(b,"BR",{}),s=M(b,"???????????????????????????"),c=m(b,"BR",{}),u=M(b,"???????????????????????????"),E=m(b,"BR",{}),y=M(b,"???????????????????????????"),b.forEach(h)},m(v,b){F(v,e,b),f(e,l),f(e,t),f(e,i),f(e,r),f(e,n),f(e,o),f(e,s),f(e,c),f(e,u),f(e,E),f(e,y)},p:ie,i:ie,o:ie,d(v){v&&h(e)}}}function dl(a){let e,l,t,i;function r(s){a[5](s)}function n(s){a[6](s)}let o={};return a[0]!==void 0&&(o.config=a[0]),a[1]!==void 0&&(o.game=a[1]),e=new fl({props:o}),Te.push(()=>Ie(e,"config",r)),Te.push(()=>Ie(e,"game",n)),{c(){Z(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,c){ee(e,s,c),i=!0},p(s,c){const u={};!l&&c&1&&(l=!0,u.config=s[0],ze(()=>l=!1)),!t&&c&2&&(t=!0,u.game=s[1],ze(()=>t=!1)),e.$set(u)},i(s){i||(q(e.$$.fragment,s),i=!0)},o(s){L(e.$$.fragment,s),i=!1},d(s){te(e,s)}}}function ml(a){let e,l,t;function i(n){a[4](n)}let r={};return a[1]!==void 0&&(r.game=a[1]),e=new hl({props:r}),Te.push(()=>Ie(e,"game",i)),{c(){Z(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){ee(e,n,o),t=!0},p(n,o){const s={};!l&&o&2&&(l=!0,s.game=n[1],ze(()=>l=!1)),e.$set(s)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function vl(a){let e,l,t,i;function r(s){a[2](s)}function n(s){a[3](s)}let o={};return a[0]!==void 0&&(o.config=a[0]),a[1]!==void 0&&(o.game=a[1]),e=new ll({props:o}),Te.push(()=>Ie(e,"config",r)),Te.push(()=>Ie(e,"game",n)),{c(){Z(e.$$.fragment)},l(s){$(e.$$.fragment,s)},m(s,c){ee(e,s,c),i=!0},p(s,c){const u={};!l&&c&1&&(l=!0,u.config=s[0],ze(()=>l=!1)),!t&&c&2&&(t=!0,u.game=s[1],ze(()=>t=!1)),e.$set(u)},i(s){i||(q(e.$$.fragment,s),i=!0)},o(s){L(e.$$.fragment,s),i=!1},d(s){te(e,s)}}}function _l(a){let e,l,t,i;const r=[vl,ml,dl,gl],n=[];function o(s,c){return s[1].menu==="practice"?0:s[1].menu==="story"?1:s[1].menu==="settings"?2:3}return l=o(a),t=n[l]=r[l](a),{c(){e=d("div"),t.c(),this.h()},l(s){e=m(s,"DIV",{class:!0});var c=_(e);t.l(c),c.forEach(h),this.h()},h(){g(e,"class","view svelte-1oi2pyp")},m(s,c){F(s,e,c),n[l].m(e,null),i=!0},p(s,[c]){let u=l;l=o(s),l===u?n[l].p(s,c):(qe(),L(n[u],1,1,()=>{n[u]=null}),Ee(),t=n[l],t?t.p(s,c):(t=n[l]=r[l](s),t.c()),q(t,1),t.m(e,null))},i(s){i||(q(t),i=!0)},o(s){L(t),i=!1},d(s){s&&h(e),n[l].d()}}}function bl(a,e,l){let{config:t}=e,{game:i}=e;function r(u){t=u,l(0,t)}function n(u){i=u,l(1,i)}function o(u){i=u,l(1,i)}function s(u){t=u,l(0,t)}function c(u){i=u,l(1,i)}return a.$$set=u=>{"config"in u&&l(0,t=u.config),"game"in u&&l(1,i=u.game)},[t,i,r,n,o,s,c]}class pl extends me{constructor(e){super(),ve(this,e,bl,_l,_e,{config:0,game:1})}}function gt(a){let e,l,t;function i(n){a[3](n)}let r={};return a[1]!==void 0&&(r.game=a[1]),e=new Bt({props:r}),Te.push(()=>Ie(e,"game",i)),{c(){Z(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){ee(e,n,o),t=!0},p(n,o){const s={};!l&&o&2&&(l=!0,s.game=n[1],ze(()=>l=!1)),e.$set(s)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function dt(a){let e,l,t;function i(n){a[6](n)}let r={};return a[1]!==void 0&&(r.game=a[1]),e=new $t({props:r}),Te.push(()=>Ie(e,"game",i)),{c(){Z(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){ee(e,n,o),t=!0},p(n,o){const s={};!l&&o&2&&(l=!0,s.game=n[1],ze(()=>l=!1)),e.$set(s)},i(n){t||(q(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function kl(a){let e,l,t,i,r,n,o=a[1].showHeader(),s,c,u,E,y,v=a[1].showMenu(),b,P,k=o&&gt(a);function w(z){a[4](z)}function X(z){a[5](z)}let W={};a[1]!==void 0&&(W.game=a[1]),a[0]!==void 0&&(W.config=a[0]),c=new pl({props:W}),Te.push(()=>Ie(c,"game",w)),Te.push(()=>Ie(c,"config",X));let T=v&&dt(a);return{c(){e=d("link"),l=d("link"),t=d("link"),i=d("meta"),r=N(),n=d("div"),k&&k.c(),s=N(),Z(c.$$.fragment),y=N(),T&&T.c(),this.h()},l(z){const B=Et('[data-svelte="svelte-xfwq3m"]',document.head);e=m(B,"LINK",{rel:!0,href:!0}),l=m(B,"LINK",{rel:!0,href:!0,crossorigin:!0}),t=m(B,"LINK",{href:!0,rel:!0}),i=m(B,"META",{name:!0,content:!0}),B.forEach(h),r=D(z),n=m(z,"DIV",{class:!0});var R=_(n);k&&k.l(R),s=D(R),$(c.$$.fragment,R),y=D(R),T&&T.l(R),R.forEach(h),this.h()},h(){document.title="TomeClicker",g(e,"rel","preconnect"),g(e,"href","https://fonts.googleapis.com"),g(l,"rel","preconnect"),g(l,"href","https://fonts.gstatic.com"),g(l,"crossorigin","anonymous"),g(t,"href","https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Lato:wght@100;300;400;700&family=Tangerine&display=swap"),g(t,"rel","stylesheet"),g(i,"name","viewport"),g(i,"content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),g(n,"class",b=nt(a[2])+" svelte-mfedvt")},m(z,B){f(document.head,e),f(document.head,l),f(document.head,t),f(document.head,i),F(z,r,B),F(z,n,B),k&&k.m(n,null),f(n,s),ee(c,n,null),f(n,y),T&&T.m(n,null),P=!0},p(z,[B]){B&2&&(o=z[1].showHeader()),o?k?(k.p(z,B),B&2&&q(k,1)):(k=gt(z),k.c(),q(k,1),k.m(n,s)):k&&(qe(),L(k,1,1,()=>{k=null}),Ee());const R={};!u&&B&2&&(u=!0,R.game=z[1],ze(()=>u=!1)),!E&&B&1&&(E=!0,R.config=z[0],ze(()=>E=!1)),c.$set(R),B&2&&(v=z[1].showMenu()),v?T?(T.p(z,B),B&2&&q(T,1)):(T=dt(z),T.c(),q(T,1),T.m(n,null)):T&&(qe(),L(T,1,1,()=>{T=null}),Ee()),(!P||B&4&&b!==(b=nt(z[2])+" svelte-mfedvt"))&&g(n,"class",b)},i(z){P||(q(k),q(c.$$.fragment,z),q(T),P=!0)},o(z){L(k),L(c.$$.fragment,z),L(T),P=!1},d(z){h(e),h(l),h(t),h(i),z&&h(r),z&&h(n),k&&k.d(),te(c),T&&T.d()}}}function wl(a,e,l){let t=new zt("prussian-blue",!0),i=new Tt,r="";function n(u){i=u,l(1,i)}function o(u){i=u,l(1,i)}function s(u){t=u,l(0,t)}function c(u){i=u,l(1,i)}return a.$$.update=()=>{a.$$.dirty&1&&l(2,r=t.getTheme())},[t,i,r,n,o,s,c]}class ql extends me{constructor(e){super(),ve(this,e,wl,kl,_e,{})}}export{ql as default};
