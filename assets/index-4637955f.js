import{r as o,l as n,_ as c,j as s,P as d,p as m}from"./index-1beef9ce.js";const l=e=>{const[t,a]=o.useState(()=>window.matchMedia(e));return o.useEffect(()=>{const r=window.matchMedia(e);r.matches!==t&&a(r.matches);const i=()=>a(r.matches);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[t,e]),t};function u(){return l("(max-width: 500px)")}const _=n(()=>c(()=>import("./index-daab260d.js"),["assets/index-daab260d.js","assets/index-1beef9ce.js","assets/index-86765396.css"])),h=n(()=>c(()=>import("./DesktopPlayerBar-b2b334d5.js"),["assets/DesktopPlayerBar-b2b334d5.js","assets/index-1beef9ce.js","assets/index-86765396.css","assets/SeekBar-98fe7e73.js","assets/imageHelpers-8dffa84a.js"])),w=()=>{const e=u();return s.jsx(d,{store:m,min:0,children:e?s.jsx(_,{},e):s.jsx(h,{},e)})};export{w as default};
