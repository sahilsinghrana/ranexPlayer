import{r,m as l,j as o}from"./index-940c8f2e.js";import{i as c,B as m,m as i}from"./App-81a6f6cb.js";import{S as p}from"./react-icons.esm-d4ef80d5.js";let n;const d=()=>{const[s,a]=r.useState(!1),[u]=l(i),t=r.useRef();return r.useEffect(()=>(n=function(){document.addEventListener("mousedown",e=>{t.current&&!t.current.contains(e.target)&&a(!1)})},n(),()=>document.removeEventListener("mousedown",n)),[t]),o.jsxs("div",{ref:t,className:"relative mx-1",children:[s&&o.jsx("input",{type:"range",className:"absolute bottom-full range accent-accent-8",value:u,min:0,max:1,step:.01,style:{writingMode:"vertical-lr",direction:"rtl",appearance:"slider-vertical",width:"16px",verticalAlign:"bottom"},onChange:e=>{c.changeVolume(e.target.value)},autoFocus:!0}),o.jsx(m,{onClick:()=>a(e=>!e),className:"h-[30px] w-[30px] bg-neutral-200 hover:bg-neutral-300 text-red-950 hover:text-red-900",children:o.jsx(p,{})})]})},g=r.memo(d);export{g as default};
