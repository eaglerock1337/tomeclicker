import{S as O,i as S,s as T,e as h,t as E,k as w,c as m,a as g,h as D,d as v,m as F,b as p,g as j,J as a,K as J,n as M,L as q,M as B}from"../chunks/index-1d06802a.js";function C(n){let t,e,s,u,_,o,l,k,c,b,r,x,I;return{c(){t=h("div"),e=h("footer"),s=h("div"),u=E("something"),_=w(),o=h("div"),l=E("something"),k=w(),c=h("div"),b=E(`theme
            `),r=h("input"),this.h()},l(i){t=m(i,"DIV",{class:!0});var d=g(t);e=m(d,"FOOTER",{class:!0});var f=g(e);s=m(f,"DIV",{class:!0});var V=g(s);u=D(V,"something"),V.forEach(v),_=F(f),o=m(f,"DIV",{class:!0});var z=g(o);l=D(z,"something"),z.forEach(v),k=F(f),c=m(f,"DIV",{class:!0});var y=g(c);b=D(y,`theme
            `),r=m(y,"INPUT",{type:!0}),y.forEach(v),f.forEach(v),d.forEach(v),this.h()},h(){p(s,"class","item svelte-6rp5c4"),p(o,"class","item svelte-6rp5c4"),p(r,"type","checkbox"),p(c,"class","item svelte-6rp5c4"),p(e,"class","svelte-6rp5c4"),p(t,"class","footer svelte-6rp5c4")},m(i,d){j(i,t,d),a(t,e),a(e,s),a(s,u),a(e,_),a(e,o),a(o,l),a(e,k),a(e,c),a(c,b),a(c,r),r.checked=n[0],x||(I=[J(r,"change",n[2]),J(r,"click",n[1])],x=!0)},p(i,[d]){d&1&&(r.checked=i[0])},i:M,o:M,d(i){i&&v(t),x=!1,q(I)}}}function K(n,t,e){let{darkmode:s}=t;const u=B();function _(){u("message")}function o(){s=this.checked,e(0,s)}return n.$$set=l=>{"darkmode"in l&&e(0,s=l.darkmode)},[s,_,o]}class N extends O{constructor(t){super(),S(this,t,K,C,T,{darkmode:0})}}export{N as default};
