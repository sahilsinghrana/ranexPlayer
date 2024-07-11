import{r,_ as c,a as x,j as e,L as a,s as d,b as m}from"./index-3a9919c6.js";import{m as u}from"./musicalSkull-a25fbc56.js";import{M as f}from"./MoonLoader-38fbe57a.js";const p=r.lazy(()=>c(()=>import("./Logo-550606ac.js"),["assets/Logo-550606ac.js","assets/index-3a9919c6.js","assets/index-67665803.css","assets/logo_red-54b98162.js","assets/clsx.m-1229b3e0.js"])),g=()=>{const[s,t]=x(m);return e.jsxs("header",{className:"md:flex-row  flex-col bg-neutral-950 py-2 pt-1 border-neutral-800/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center",children:[e.jsxs("div",{className:"flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row",children:[e.jsx(r.Suspense,{fallback:e.jsx(f,{}),children:e.jsx(a,{to:"/",children:e.jsx(p,{className:"h-[50px] sm:h-[60px] md:h-[70px] "})})}),e.jsx("div",{children:e.jsxs("h2",{className:"py-1 pl-3 text-xs font-light tracking-wide text-center text-white uppercase md:text-xl lg:text-2xl sm:text-left sm:pl-6 sm:text-sm opacity-60",children:["Get ",e.jsx("span",{className:"font-normal",children:"Dwelved"})," in the soul of the"," ",e.jsx("span",{className:"font-bold",children:"Sound"}),e.jsx("br",{})]})})]}),e.jsx("div",{className:"flex items-center justify-center mt-4 sm:mt-0 ",children:s?e.jsx("button",{onClick:()=>{d.auth.signOut().then(()=>{t()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()})},children:"Logout"}):e.jsxs("div",{className:"flex items-center h-full",children:[e.jsx(a,{to:"/login",className:"text-white",children:"Login"}),e.jsx(h,{})]})})]})};let o;function h(){const[s,t]=r.useState(!1),l=r.useRef();return r.useEffect(()=>(o=function(){document.addEventListener("mousedown",n=>{l.current&&!l.current.contains(n.target)&&t(!1)})},o(),()=>document.removeEventListener("mousedown",o)),[l]),e.jsxs("div",{ref:l,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx("button",{onClick:()=>t(n=>!n),children:e.jsx("img",{src:u,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30  ",alt:"profile"})}),s&&e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto md:right-0",children:[e.jsx(i,{to:"/profile",children:"Profile"}),e.jsx(i,{to:"/settings",children:"Settings"})]})]})}function i({to:s,children:t}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{to:s,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:t})})}export{g as default};
