import{a as c,n,e as l,r as g,j as i,t as u,c as A,o as b}from"./index-7cef4174.js";import{a as f}from"./moonAndMusicImages-f46da6a3.js";import{c as d}from"./imageHelpers-8dffa84a.js";import"./helpers-f505966d.js";function j({className:m}){const[o,a]=c(b),s=n(l);return g.useEffect(()=>{if(!o){const t=f();if(a(t),t){const e=document.createElement("img");e.src=t,e.onload=()=>{const r=d(e);console.log({imageColors:r}),s(r)}}}},[a,o,s]),i.jsx("img",{className:u(A("bg-black object-cover h-14 w-14 shadow-lg shadow-black/70",m)),src:o,alt:"cover art"})}export{j as default};
