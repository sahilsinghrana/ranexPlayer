import{r as n}from"./index-1342f784.js";const r=e=>{const[t,a]=n.useState(window.matchMedia(e).matches);return n.useEffect(()=>{const s=window.matchMedia(e);s.matches!==t&&a(s.matches);const i=()=>a(s.matches);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[t,e]),t};function o(){return r("(max-width: 500px)")}export{o as u};
