import{a as c,j as e,r as l,L as a,s as x,_ as m,b as d}from"./index-d8552601.js";import{m as u}from"./musicalSkull-a25fbc56.js";import{l as f}from"./reactLazy-4fb674db.js";import{M as p}from"./MoonLoader-0361bc53.js";const h=f(()=>m(()=>import("./Logo-d51850d7.js"),["assets/Logo-d51850d7.js","assets/index-d8552601.js","assets/index-67665803.css","assets/logo_red-54b98162.js","assets/clsx.m-1229b3e0.js"])),N=()=>{const[s,t]=c(d);return e.jsxs("header",{className:"md:flex-row  flex-col bg-neutral-950 py-2 pt-1 border-neutral-800/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center",children:[e.jsxs("div",{className:"flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row",children:[e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(a,{to:"/",children:e.jsx(h,{className:"h-[50px] sm:h-[60px] md:h-[70px] "})})}),e.jsx("div",{children:e.jsxs("h2",{className:"py-1 pl-3 text-xs font-light tracking-wide text-center text-white uppercase md:text-xl lg:text-2xl sm:text-left sm:pl-6 sm:text-sm opacity-60",children:["Get ",e.jsx("span",{className:"font-normal",children:"Dwelved"})," in the soul of the"," ",e.jsx("span",{className:"font-bold",children:"Sound"}),e.jsx("br",{})]})})]}),e.jsx("div",{className:"flex items-center justify-center mt-4 sm:mt-0 ",children:s?e.jsx("button",{onClick:()=>{x.auth.signOut().then(()=>{t()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()})},children:"Logout"}):e.jsxs("div",{className:"flex items-center h-full",children:[e.jsx(a,{to:"/login",className:"text-white",children:"Login"}),e.jsx(j,{})]})})]})};let o;function j(){const[s,t]=l.useState(!1),r=l.useRef();return l.useEffect(()=>(o=function(){document.addEventListener("mousedown",n=>{r.current&&!r.current.contains(n.target)&&t(!1)})},o(),()=>document.removeEventListener("mousedown",o)),[r]),e.jsxs("div",{ref:r,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx("button",{onClick:()=>t(n=>!n),children:e.jsx("img",{src:u,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30  ",alt:"profile"})}),s&&e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto md:right-0",children:[e.jsx(i,{to:"/profile",children:"Profile"}),e.jsx(i,{to:"/settings",children:"Settings"})]})]})}function i({to:s,children:t}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{to:s,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:t})})}export{N as default};
