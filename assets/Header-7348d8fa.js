import{u as d,t as c,a as u,T as h,r as i,_ as g,b as m,j as e,L as n,s as b,c as x}from"./index-4a77e9d2.js";import{s as k}from"./sidebar-0667b27e.js";import{H as j,S as p,M as v}from"./react-icons.esm-2db41bbc.js";const S=()=>{const[o,r]=d(c),t=()=>{r(a=>{const s=a.theme==="dark"?"light":"dark";return u(s),{theme:s,selection:h.user}})};return[o.theme,t]},_=i.lazy(()=>g(()=>import("./Logo-81995b4f.js"),["assets/Logo-81995b4f.js","assets/index-4a77e9d2.js","assets/index-bbf90165.css"])),f=()=>{const[o,r]=S(),t=m(k),[a,s]=d(x);return e.jsxs("header",{style:{height:"10vh"},className:" dark:bg-subtleBackgroundDark bg-subtleBackground py-3 border-borderHover/20 border-b-2 border-opacity-5 flex justify-between pr-5 pl-1 items-center",children:[e.jsx("div",{children:e.jsx("button",{className:"p-2 font-extrabold text-white rounded-lg bg-solidBackground dark:bg-solidBackgroundDark hover:bg-hoverSolidBackground/80 dark:hover:bg-hoverSolidBackgroundDark/80",onClick:()=>t(l=>!l),children:e.jsx(j,{})})}),e.jsx("div",{children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loader..."}),children:e.jsx(n,{to:"/",children:e.jsx(_,{})})})}),e.jsxs("div",{children:[e.jsx("button",{onClick:r,className:"p-2 mx-4 rounded-full text-gray-2 dark:text-gray-12 dark:bg-solidBackgroundDark bg-solidBackground hover:scale-110 ",children:o==="light"?e.jsx(p,{}):e.jsx(v,{})}),a?e.jsx("button",{onClick:()=>{b.auth.signOut().then(()=>{s()}).catch(()=>{localStorage.clear(),sessionStorage.clear(),window.location.reload()})},children:"Logout"}):e.jsx(n,{to:"/login",children:"Login"})]})]})};f.displayName="Header";export{f as default};
