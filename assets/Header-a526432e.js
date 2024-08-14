import{r as n,j as e,L as a,c,p as x,s as m,q as u,v as d}from"./index-46666a37.js";import{u as f}from"./useUserProfilePic-62fa5bf6.js";import{g as h,l as p}from"./roundedLogos-5ef49220.js";import"./useUserProfile-61e479ca.js";import"./fetchKeys-14f763aa.js";import"./useIsUserLoggedIn-6e14e6fd.js";import"./helpers-b6ef1e89.js";const g=h(),j=({className:t})=>e.jsxs(a,{to:"/",className:c("flex items-center ",t),children:[e.jsx("img",{className:"object-cover w-full h-full rounded-full max-h-[80px] bg-red-950",src:g,alt:"Ranex Player Logo"}),e.jsx("img",{className:"h-[60%] max-h-[60px]",src:p,alt:"Ranex Player Logo"})]}),b=n.memo(j),D=()=>e.jsxs("header",{className:"bg-black py-1  flex flex-wrap shadow-sm shadow-slate-300/50 justify-between pr-5 pl-1 items-center backgroundStars",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(b,{className:"h-[60px] sm:h-[80px] md:h-[90px] "}),e.jsx("p",{className:"px-1 mt-2 text-xs bg-red-600",children:"Work In Progress!"})]}),e.jsx("div",{className:"flex items-center justify-center mt-2 sm:mt-0 ",children:e.jsx("div",{className:"flex items-center h-full",children:e.jsx(w,{})})})]});let l;function w(){const[t,s]=n.useState(!1),r=n.useRef();return n.useEffect(()=>(l=function(){document.addEventListener("mousedown",i=>{r.current&&!r.current.contains(i.target)&&s(!1)})},l(),()=>document.removeEventListener("mousedown",l)),[r]),e.jsxs("div",{ref:r,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx(N,{setOpen:s}),t&&e.jsx(v,{setOpen:s})]})}function o({to:t,children:s,onClick:r}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{onClick:r,to:t,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:s})})}function N({setOpen:t}){const s=f();return e.jsx("button",{onClick:()=>t(r=>!r),children:e.jsx("img",{src:s,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30 outline outline-red-600/60 hover:outline-red-500/70",alt:"profile"})})}function v({setOpen:t}){const[s,r]=x(d);return e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30 mt-2  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto right-[-150%] md:right-0",children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!1),to:"/profile",children:"Profile"}),e.jsx(o,{onClick:()=>t(!1),to:"/settings",children:"Settings"}),e.jsx("button",{className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 font-bold text-red-600  text-center",onClick:()=>{m.auth.signOut().then(()=>{r()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()}),u("/logout")},children:"Logout"})]}),!s&&e.jsx(e.Fragment,{children:e.jsx(o,{to:"/login",className:"text-white",children:"Login"})}),e.jsx(o,{to:"/about",className:"text-white",children:"About"})]})}export{D as default};
