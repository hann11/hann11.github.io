import{S as B,i as K,s as S,K as L,R as m,$ as j,e as g,a0 as q,m as w,h as d,a1 as k,b as N,C as M,L as P,M as R,N as T,T as A,g as V,d as D,_ as F,a2 as z,V as W}from"./index.56c71036.js";const C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function I(n,e,o){const s=n.slice();return s[9]=e[o][0],s[10]=e[o][1],s}function v(n){let e,o=[n[10]],s={};for(let t=0;t<o.length;t+=1)s=m(s,o[t]);return{c(){e=j(n[9]),this.h()},l(t){e=q(t,n[9],{}),w(e).forEach(d),this.h()},h(){k(e,s)},m(t,h){N(t,e,h)},p(t,h){k(e,s=A(o,[h&16&&t[10]]))},d(t){t&&d(e)}}}function E(n){let e=n[9],o,s=n[9]&&v(n);return{c(){s&&s.c(),o=g()},l(t){s&&s.l(t),o=g()},m(t,h){s&&s.m(t,h),N(t,o,h)},p(t,h){t[9]?e?S(e,t[9])?(s.d(1),s=v(t),e=t[9],s.c(),s.m(o.parentNode,o)):s.p(t,h):(s=v(t),e=t[9],s.c(),s.m(o.parentNode,o)):e&&(s.d(1),s=null,e=t[9])},d(t){t&&d(o),s&&s.d(t)}}}function G(n){let e,o,s,t,h=n[4],r=[];for(let l=0;l<h.length;l+=1)r[l]=E(I(n,h,l));const c=n[8].default,f=L(c,n,n[7],null);let _=[C,n[5],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":n[3]},{class:s=`lucide-icon lucide lucide-${n[0]} ${n[6].class??""}`}],u={};for(let l=0;l<_.length;l+=1)u=m(u,_[l]);return{c(){e=j("svg");for(let l=0;l<r.length;l+=1)r[l].c();o=g(),f&&f.c(),this.h()},l(l){e=q(l,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=w(e);for(let a=0;a<r.length;a+=1)r[a].l(i);o=g(),f&&f.l(i),i.forEach(d),this.h()},h(){k(e,u)},m(l,i){N(l,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);M(e,o),f&&f.m(e,null),t=!0},p(l,[i]){if(i&16){h=l[4];let a;for(a=0;a<h.length;a+=1){const b=I(l,h,a);r[a]?r[a].p(b,i):(r[a]=E(b),r[a].c(),r[a].m(e,o))}for(;a<r.length;a+=1)r[a].d(1);r.length=h.length}f&&f.p&&(!t||i&128)&&P(f,c,l,l[7],t?T(c,l[7],i,null):R(l[7]),null),k(e,u=A(_,[C,i&32&&l[5],(!t||i&4)&&{width:l[2]},(!t||i&4)&&{height:l[2]},(!t||i&2)&&{stroke:l[1]},(!t||i&8)&&{"stroke-width":l[3]},(!t||i&65&&s!==(s=`lucide-icon lucide lucide-${l[0]} ${l[6].class??""}`))&&{class:s}]))},i(l){t||(V(f,l),t=!0)},o(l){D(f,l),t=!1},d(l){l&&d(e),F(r,l),f&&f.d(l)}}}function H(n,e,o){const s=["name","color","size","strokeWidth","iconNode"];let t=z(e,s),{$$slots:h={},$$scope:r}=e,{name:c}=e,{color:f="currentColor"}=e,{size:_=24}=e,{strokeWidth:u=2}=e,{iconNode:l}=e;return n.$$set=i=>{o(6,e=m(m({},e),W(i))),o(5,t=z(e,s)),"name"in i&&o(0,c=i.name),"color"in i&&o(1,f=i.color),"size"in i&&o(2,_=i.size),"strokeWidth"in i&&o(3,u=i.strokeWidth),"iconNode"in i&&o(4,l=i.iconNode),"$$scope"in i&&o(7,r=i.$$scope)},e=W(e),[c,f,_,u,l,t,e,r,h]}class J extends B{constructor(e){super(),K(this,e,H,G,S,{name:0,color:1,size:2,strokeWidth:3,iconNode:4})}}const Q=J;export{Q as I};
