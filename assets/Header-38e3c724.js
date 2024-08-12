import{r as n,j as e,L as a,m as c}from"./index-28736834.js";import{c as m,s as x,i as u,j as d}from"./App-76830bfb.js";import{u as f}from"./useUserProfilePic-e7a8cae4.js";import{g as h,l as p}from"./roundedLogos-3227a292.js";import"./useUserProfile-35f12ec8.js";import"./fetchKeys-14f763aa.js";import"./useIsUserLoggedIn-f6a56acf.js";import"./helpers-510d46ea.js";const g=h(),j=({className:t})=>e.jsxs(a,{to:"/",className:m("flex items-center ",t),children:[e.jsx("img",{className:"object-cover w-full h-full rounded-full max-h-[80px] bg-red-950",src:g,alt:"Ranex Player Logo"}),e.jsx("img",{className:"h-[60%] max-h-[60px]",src:p,alt:"Ranex Player Logo"})]}),b=n.memo(j),E=()=>e.jsxs("header",{className:"bg-black py-1  flex flex-wrap shadow-sm shadow-slate-300/50 justify-between pr-5 pl-1 items-center backgroundStars",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(b,{className:"h-[60px] sm:h-[80px] md:h-[90px] "}),e.jsx("p",{className:"px-1 mt-2 text-xs bg-red-600",children:"Work In Progress!"})]}),e.jsx("div",{className:"flex items-center justify-center mt-2 sm:mt-0 ",children:e.jsx("div",{className:"flex items-center h-full",children:e.jsx(w,{})})})]});let l;function w(){const[t,s]=n.useState(!1),o=n.useRef();return n.useEffect(()=>(l=function(){document.addEventListener("mousedown",i=>{o.current&&!o.current.contains(i.target)&&s(!1)})},l(),()=>document.removeEventListener("mousedown",l)),[o]),e.jsxs("div",{ref:o,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx(N,{setOpen:s}),t&&e.jsx(L,{setOpen:s})]})}function r({to:t,children:s,onClick:o}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{onClick:o,to:t,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:s})})}function N({setOpen:t}){const s=f();return e.jsx("button",{onClick:()=>t(o=>!o),children:e.jsx("img",{src:s,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30 outline outline-red-600/60 hover:outline-red-500/70",alt:"profile"})})}function L({setOpen:t}){const[s,o]=c(d);return e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30 mt-2  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto right-[-150%] md:right-0",children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>t(!1),to:"/profile",children:"Profile"}),e.jsx(r,{onClick:()=>t(!1),to:"/settings",children:"Settings"}),e.jsx("button",{onClick:()=>{x.auth.signOut().then(()=>{o()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()}),u("/logout")},children:"Logout"})]}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(r,{to:"/login",className:"text-white",children:"Login"}),e.jsx(r,{to:"/about",className:"text-white",children:"About"})]})]})}export{E as default};
