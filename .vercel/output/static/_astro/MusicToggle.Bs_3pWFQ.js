import{r as c}from"./index.BVOCwoKb.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function p(){if(d)return s;d=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function u(e,t,r){var a=null;if(r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:i,type:e,key:a,ref:t!==void 0?t:null,props:r}}return s.Fragment=n,s.jsx=u,s.jsxs=u,s}var m;function x(){return m||(m=1,l.exports=p()),l.exports}var v=x();function f(){const[i,n]=c.useState(!1);c.useEffect(()=>{const e=document.getElementById("bg-music");if(!e)return;const t=()=>n(!0),r=()=>n(!1);return e.addEventListener("play",t),e.addEventListener("pause",r),()=>{e.removeEventListener("play",t),e.removeEventListener("pause",r)}},[]);const u=()=>{const e=document.getElementById("bg-music");e&&(e.paused?e.play():e.pause())};return v.jsx("button",{className:"magic-button",onClick:u,children:i?"⏸️ Pausar música":"🎵 Reproducir música"})}export{f as default};
