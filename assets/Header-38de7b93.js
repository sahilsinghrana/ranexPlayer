import{l as c,_ as x,b as d,j as e,r as l,L as a,s as m,c as u}from"./index-be555193.js";import{m as f}from"./musicalSkull-a25fbc56.js";import{M as p}from"./MoonLoader-8358b7f3.js";const h=c(()=>x(()=>import("./Logo-e3eb9e4d.js"),["assets/Logo-e3eb9e4d.js","assets/index-be555193.js","assets/index-df43d5c7.css","assets/roundedLogos-571ce515.js","assets/helpers-f505966d.js","assets/utils-95958319.js","assets/bundle-mjs-8113ea4f.js"])),v=()=>{const[s,t]=d(u);return e.jsxs("header",{className:"md:flex-row  flex-col bg-neutral-950 py-2 pt-1 border-neutral-800/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center",children:[e.jsxs("div",{className:"flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row",children:[e.jsx(l.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(a,{to:"/",children:e.jsx(h,{className:"h-[40px] sm:h-[60px] md:h-[70px] "})})}),e.jsx("div",{children:e.jsxs("h2",{className:"py-1 pl-3 text-xs font-light tracking-wide text-center text-white uppercase md:text-xl lg:text-2xl sm:text-left sm:pl-6 sm:text-sm opacity-60",children:["Get ",e.jsx("span",{className:"font-normal",children:"Dwelved"})," in the soul of the"," ",e.jsx("span",{className:"font-bold",children:"Sound"}),e.jsx("br",{})]})})]}),e.jsx("div",{className:"flex items-center justify-center mt-4 sm:mt-0 ",children:s?e.jsx("button",{onClick:()=>{m.auth.signOut().then(()=>{t()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()})},children:"Logout"}):e.jsxs("div",{className:"flex items-center h-full",children:[e.jsx(a,{to:"/login",className:"text-white",children:"Login"}),e.jsx(j,{})]})})]})};let o;function j(){const[s,t]=l.useState(!1),r=l.useRef();return l.useEffect(()=>(o=function(){document.addEventListener("mousedown",n=>{r.current&&!r.current.contains(n.target)&&t(!1)})},o(),()=>document.removeEventListener("mousedown",o)),[r]),e.jsxs("div",{ref:r,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx("button",{onClick:()=>t(n=>!n),children:e.jsx("img",{src:f,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30  ",alt:"profile"})}),s&&e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto md:right-0",children:[e.jsx(i,{to:"/profile",children:"Profile"}),e.jsx(i,{to:"/settings",children:"Settings"})]})]})}function i({to:s,children:t}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{to:s,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:t})})}export{v as default};
