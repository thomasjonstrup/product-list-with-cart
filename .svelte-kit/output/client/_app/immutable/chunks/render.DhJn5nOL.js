import{e as N,H as S,b,d as v,g as A,h as H,i as m,j as q,k,l as I,m as E,n as M,P}from"./disclose-version.DUT9m5GB.js";import{h as Y,q as j,j as B,k as C,l as D,o as V,v as W,w as $,x as z,p as F,y as G,a as J,c as K}from"./runtime.Ckd5dxYY.js";function Q(a){console.warn("hydration_mismatch")}const U=new Set,R=new Set;function X(a,r,n,o){function e(t){if(o.capture||y.call(r,t),!t.cancelBubble)return n.call(this,t)}return a.startsWith("pointer")||a==="wheel"?j(()=>{r.addEventListener(a,e,o)}):r.addEventListener(a,e,o),e}function ar(a,r,n,o,e){var t={capture:o,passive:e},_=X(a,r,n,t);(r===document.body||r===window||r===document)&&Y(()=>{r.removeEventListener(a,_,t)})}function y(a){var L;var r=this,n=r.ownerDocument,o=a.type,e=((L=a.composedPath)==null?void 0:L.call(a))||[],t=e[0]||a.target,_=0,d=a.__root;if(d){var f=e.indexOf(d);if(f!==-1&&(r===document||r===window)){a.__root=r;return}var u=e.indexOf(r);if(u===-1)return;f<=u&&(_=f)}if(t=e[_]||a.target,t!==r){B(a,"currentTarget",{configurable:!0,get(){return t||n}});try{for(var l,s=[];t!==null;){var c=t.parentNode||t.host||null;try{var i=t["__"+o];if(i!==void 0&&!t.disabled)if(C(i)){var[g,...p]=i;g.apply(t,[a,...p])}else i.call(t,a)}catch(w){l?s.push(w):l=w}if(a.cancelBubble||c===r||c===null)break;t=c}if(l){for(let w of s)queueMicrotask(()=>{throw w});throw l}}finally{a.__root=r,t=r}}}function er(a,r){(a.__t??(a.__t=a.nodeValue))!==r&&(a.nodeValue=a.__t=r)}function Z(a,r){const n=r.anchor??r.target.appendChild(N());return D(()=>O(a,{...r,anchor:n}),!1)}function tr(a,r){r.intro=r.intro??!1;const n=r.target,o=E;try{return D(()=>{for(var e=n.firstChild;e&&(e.nodeType!==8||e.data!==S);)e=e.nextSibling;if(!e)throw b;v(!0),A(e),H();const t=O(a,{...r,anchor:e});if(m.nodeType!==8||m.data!==q)throw Q(),b;return v(!1),t},!1)}catch(e){if(e===b)return r.recover===!1&&V(),k(),I(n),v(!1),Z(a,r);throw e}finally{v(o)}}const h=new Map;function O(a,{target:r,anchor:n,props:o={},events:e,context:t,intro:_=!0}){k();var d=new Set,f=s=>{for(var c=0;c<s.length;c++){var i=s[c];if(!d.has(i)){d.add(i);var g=P.includes(i);r.addEventListener(i,y,{passive:g});var p=h.get(i);p===void 0?(document.addEventListener(i,y,{passive:g}),h.set(i,1)):h.set(i,p+1)}}};f(W(U)),R.add(f);var u=void 0,l=$(()=>(z(()=>{if(t){F({});var s=K;s.c=t}e&&(o.$$events=e),E&&M(n,null),u=a(n,o)||{},E&&(G.nodes.end=m),t&&J()}),()=>{for(var s of d){r.removeEventListener(s,y);var c=h.get(s);--c===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,c)}R.delete(f),T.delete(u)}));return T.set(u,l),u}let T=new WeakMap;function nr(a){const r=T.get(a);r==null||r()}export{ar as e,tr as h,Z as m,er as s,nr as u};
