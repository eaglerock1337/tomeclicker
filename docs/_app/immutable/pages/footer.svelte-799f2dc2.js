import{S as J,i as M,s as O,e as f,t as x,k as I,c as u,a as _,h as b,d as v,m as z,b as p,g as S,J as a,K as V,n as F,L as T,M as j}from"../chunks/index-1d06802a.js";function w(l){let e,s,n,h,o,m,d,r,g,i,y,q;return{c(){e=f("footer"),s=f("div"),n=x("something"),h=I(),o=f("div"),m=x("something"),d=I(),r=f("div"),g=x(`theme
        `),i=f("input"),this.h()},l(c){e=u(c,"FOOTER",{class:!0});var t=_(e);s=u(t,"DIV",{class:!0});var E=_(s);n=b(E,"something"),E.forEach(v),h=z(t),o=u(t,"DIV",{class:!0});var D=_(o);m=b(D,"something"),D.forEach(v),d=z(t),r=u(t,"DIV",{class:!0});var k=_(r);g=b(k,`theme
        `),i=u(k,"INPUT",{type:!0}),k.forEach(v),t.forEach(v),this.h()},h(){p(s,"class","item svelte-c2yrqx"),p(o,"class","item svelte-c2yrqx"),p(i,"type","checkbox"),p(r,"class","item svelte-c2yrqx"),p(e,"class","svelte-c2yrqx")},m(c,t){S(c,e,t),a(e,s),a(s,n),a(e,h),a(e,o),a(o,m),a(e,d),a(e,r),a(r,g),a(r,i),i.checked=l[0],y||(q=[V(i,"change",l[2]),V(i,"click",l[1])],y=!0)},p(c,[t]){t&1&&(i.checked=c[0])},i:F,o:F,d(c){c&&v(e),y=!1,T(q)}}}function B(l,e,s){let{darkmode:n}=e;const h=j();function o(){h("message")}function m(){n=this.checked,s(0,n)}return l.$$set=d=>{"darkmode"in d&&s(0,n=d.darkmode)},[n,o,m]}class K extends J{constructor(e){super(),M(this,e,B,w,O,{darkmode:0})}}export{K as default};