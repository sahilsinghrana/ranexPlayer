import{r as o,p as c,j as r,B as m,U as i}from"./index-13ed8e83.js";import{p}from"./player-d98067e1.js";import{b as d}from"./playerAtom-eae7ceca.js";import"./moonAndMusicImages-ee3f4190.js";import"./helpers-b6ef1e89.js";import"./imageHelpers-8dffa84a.js";let a;const x=()=>{const[s,n]=o.useState(!1),[u,l]=c(d),t=o.useRef();return o.useEffect(()=>(a=function(){document.addEventListener("mousedown",e=>{t.current&&!t.current.contains(e.target)&&n(!1)})},a(),()=>document.removeEventListener("mousedown",a)),[t]),r.jsxs("div",{ref:t,className:"relative mx-1",children:[s&&r.jsx("input",{type:"range",className:"absolute bottom-full range accent-accent-8",value:u,min:0,max:1,step:.01,style:{writingMode:"vertical-lr",direction:"rtl",appearance:"slider-vertical",width:"16px",verticalAlign:"bottom"},onChange:e=>{p.changeVolume(e.target.value),l(e.target.value)},autoFocus:!0}),r.jsx(m,{onClick:()=>n(e=>!e),className:"h-[30px] w-[30px] bg-neutral-200 hover:bg-neutral-300 text-red-950 hover:text-red-900",children:r.jsx(i,{})})]})},j=o.memo(x);export{j as default};
