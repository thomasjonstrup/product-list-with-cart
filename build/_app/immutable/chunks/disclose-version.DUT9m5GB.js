import{y as _}from"./runtime.Ckd5dxYY.js";const C=1,N=2,P=64,g=1,x=2,D=4,O=8,T=1,p=2,I="[",h="[!",S="]",b={},w=Symbol(),L=["touchstart","touchmove","touchend"];let o=!1;function H(e){o=e}let r;function c(e){return r=e}function l(){return r=r.nextSibling}function M(e){o&&(r=e)}function U(){o&&l()}function Y(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===S){if(e===0)return n;e-=1}else(t===I||t===h)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d;function B(){if(d===void 0){d=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function f(){return document.createTextNode("")}function V(e){if(!o)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(f())),c(n),n}function k(e,n){if(!o){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function F(e,n=!1){if(!o)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var a=f();return t==null||t.before(a),c(a),a}return c(t),t}function Z(e){e.textContent=""}function A(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function i(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function j(e,n){var t=(n&T)!==0,s=(n&p)!==0,a,m=!e.startsWith("<!>");return()=>{if(o)return i(r,null),r;a||(a=A(m?e:"<!>"+e),t||(a=a.firstChild));var u=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var v=u.firstChild,E=u.lastChild;i(v,E)}else i(u,u);return u}}function q(){if(!o){var e=f();return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=f()),c(n)),i(n,n),n}function z(){if(o)return i(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=f();return e.append(n,t),i(n,t),e}function G(e,n){if(o){_.nodes.end=r,l();return}e!==null&&e.before(n)}const R="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(R);export{P as A,N as B,C as E,I as H,L as P,w as U,G as a,b,V as c,H as d,f as e,k as f,c as g,l as h,r as i,S as j,B as k,Z as l,o as m,i as n,U as o,h as p,Y as q,M as r,F as s,j as t,D as u,g as v,x as w,O as x,z as y,q as z};
