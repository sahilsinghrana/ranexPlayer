import{r,j as e,L as a,e as m,m as x}from"./index-b39e3f42.js";import{c as d,s as f,i as h,j as i}from"./App-a5bad594.js";import{u as p}from"./useUserProfilePic-23d5a05b.js";import{g,l as j}from"./roundedLogos-3227a292.js";import"./useUserProfile-68837705.js";import"./fetchKeys-14f763aa.js";import"./useIsUserLoggedIn-45ba5499.js";import"./helpers-510d46ea.js";const w=g(),b=({className:t})=>e.jsxs(a,{to:"/",className:d("flex items-center ",t),children:[e.jsx("img",{className:"object-cover w-full h-full rounded-full max-h-[80px] bg-red-950",src:w,alt:"Ranex Player Logo"}),e.jsx("img",{className:"h-[60%] max-h-[60px]",src:j,alt:"Ranex Player Logo"})]}),L=r.memo(b),z=()=>e.jsxs("header",{className:"bg-black py-1  flex flex-wrap shadow-sm shadow-slate-300/50 justify-between pr-5 pl-1 items-center backgroundStars",children:[e.jsx(L,{className:"h-[60px] sm:h-[80px] md:h-[90px] "}),e.jsx("div",{className:"flex items-center justify-center mt-2 sm:mt-0 ",children:e.jsx("div",{className:"flex items-center h-full",children:e.jsx(N,{})})})]});let n;function N(){const[t,s]=r.useState(!1),o=r.useRef(),c=m(i);return r.useEffect(()=>(n=function(){document.addEventListener("mousedown",u=>{o.current&&!o.current.contains(u.target)&&s(!1)})},n(),()=>document.removeEventListener("mousedown",n)),[o]),c?e.jsxs("div",{ref:o,className:"relative p-0 m-0 mx-2 w-[35px] flex items-center h-full",children:[e.jsx(v,{setOpen:s}),t&&e.jsx(k,{setOpen:s})]}):e.jsx(a,{to:"/login",className:"text-white",children:"Login"})}function l({to:t,children:s,onClick:o}){return e.jsx("li",{className:"mb-1 w-[160px]",children:e.jsx(a,{onClick:o,to:t,className:"h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center",children:s})})}function v({setOpen:t}){const s=p();return e.jsx("button",{onClick:()=>t(o=>!o),children:e.jsx("img",{src:s,className:"h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30 outline outline-red-600/60 hover:outline-red-500/70",alt:"profile"})})}function k({setOpen:t}){const[s,o]=x(i);return e.jsxs("ul",{className:"w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30 mt-2  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto right-[-150%] md:right-0",children:[s&&e.jsx(l,{onClick:()=>t(!1),to:"/profile",children:"Profile"}),e.jsx(l,{onClick:()=>t(!1),to:"/settings",children:"Settings"}),s?e.jsx("button",{onClick:()=>{f.auth.signOut().then(()=>{o()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()}),h("/logout")},children:"Logout"}):e.jsx(l,{to:"/login",className:"text-white",children:"Login"})]})}export{z as default};
