import{a as c,m as n,n as g,h as l,r as i,j as u}from"./index-d8552601.js";import{g as A}from"./moonAndMusicImages-b0f616cc.js";import{c as f}from"./imageHelpers-8dffa84a.js";import{c as b}from"./clsx.m-1229b3e0.js";import{t as p}from"./bundle-mjs-642c57ff.js";function j({className:m}){const[o,e]=c(n),s=g(l);return i.useEffect(()=>{o||(async()=>{const t=await A();if(e(t),t){const a=document.createElement("img");a.src=t,a.onload=()=>{const r=f(a);console.log({imageColors:r}),s(r)}}})()},[e,o,s]),u.jsx("img",{className:p(b("bg-black object-cover h-14 w-14 shadow-lg shadow-black/70",m)),src:o,alt:"cover art"})}export{j as N};
