import{z as C,A,x as w,B as I,E as D,C as x,D as B,L as U,F as $,g as P,i as N,d as q,G as L,H as F,m as Y,c as y,b as z}from"./runtime.Ckd5dxYY.js";import{m as R,h as G,p as H,q as V,g as W,d as T,i as Z,u as j,v as J,w as K,x as M}from"./disclose-version.DUT9m5GB.js";function Q(n){throw new Error("lifecycle_outside_component")}function ae(n,t,o,f=null,d=!1){R&&G();var a=n,r=null,i=null,e=null,u=d?D:0;C(()=>{if(e===(e=!!t()))return;let c=!1;if(R){const h=a.data===H;e===h&&(a=V(),W(a),T(!1),c=!0)}e?(r?A(r):r=w(()=>o(a)),i&&I(i,()=>{i=null})):(i?A(i):f&&(i=w(()=>f(a))),r&&I(r,()=>{r=null})),c&&T(!0)},u),R&&(a=Z)}function se(n,t,o,f){var p;var d=(o&J)!==0,a=(o&K)!==0,r=(o&M)!==0,i=n[t],e=(p=x(n,t))==null?void 0:p.set,u=f,c=!0,h=()=>(r&&c&&(c=!1,u=q(f)),u);i===void 0&&f!==void 0&&(e&&a&&B(),i=h(),e&&e(i));var s;if(a)s=()=>{var l=n[t];return l===void 0?h():(c=!0,l)};else{var _=(d?L:F)(()=>n[t]);_.f|=U,s=()=>{var l=P(_);return l!==void 0&&(u=void 0),l===void 0?u:l}}if(!(o&j))return s;if(e){var v=n.$$legacy;return function(l,m){return arguments.length>0?((!a||!m||v)&&e(m?s():l),l):s()}}var S=!1,g=Y(i),E=L(()=>{var l=s(),m=P(g);return S?(S=!1,m):g.v=l});return d||(E.equals=$),function(l,m){var O=P(E);if(arguments.length>0){const b=m?P(E):l;return E.equals(b)||(S=!0,N(g,b),P(E)),l}return O}}function ie(n){y===null&&Q(),y.l!==null?X(y).m.push(n):z(()=>{const t=q(n);if(typeof t=="function")return t})}function X(n){var t=n.l;return t.u??(t.u={a:[],b:[],m:[]})}const ee="modulepreload",re=function(n,t){return new URL(n,t).href},k={},le=function(t,o,f){let d=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.all(o.map(e=>{if(e=re(e,f),e in k)return;k[e]=!0;const u=e.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(!!f)for(let _=a.length-1;_>=0;_--){const v=a[_];if(v.href===e&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${c}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":ee,u||(s.as="script",s.crossOrigin=""),s.href=e,i&&s.setAttribute("nonce",i),document.head.appendChild(s),u)return new Promise((_,v)=>{s.addEventListener("load",_),s.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${e}`)))})}))}return d.then(()=>t()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})};export{le as _,ae as i,ie as o,se as p};
