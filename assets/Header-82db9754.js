import{u as d,t as l,a as c,T as i,r as n,_ as m,b as u,j as e}from"./index-dee8f07a.js";import{s as h}from"./sidebar-c5f7a0e6.js";import{H as g,S as b,M as x}from"./react-icons.esm-f3cca268.js";const k=()=>{const[r,t]=d(l),o=()=>{t(s=>{const a=s.theme==="dark"?"light":"dark";return c(a),{theme:a,selection:i.user}})};return[r.theme,o]},j=n.lazy(()=>m(()=>import("./Logo-22c05046.js"),["assets/Logo-22c05046.js","assets/index-dee8f07a.js","assets/index-b69caa31.css"])),p=()=>{const[r,t]=k(),o=u(h);return e.jsxs("header",{style:{height:"10vh"},className:" dark:bg-subtleBackgroundDark bg-subtleBackground py-3 border-borderHover/20 border-b-2 border-opacity-5 flex justify-between pr-5 pl-1 items-center",children:[e.jsx("div",{children:e.jsx("button",{className:"p-2 font-extrabold text-white rounded-lg bg-solidBackground/40 hover:bg-hoverSolidBackground dark:hover:bg-hoverSolidBackgroundDark",onClick:()=>o(s=>!s),children:e.jsx(g,{})})}),e.jsx("div",{children:e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loader..."}),children:e.jsx(j,{})})}),e.jsxs("div",{children:[e.jsx("button",{onClick:t,className:"p-2 mx-4 rounded-full text-gray-2 dark:text-gray-12 dark:bg-elementBackground bg-elementBackgroundDark hover:scale-110 ",children:r==="light"?e.jsx(b,{}):e.jsx(x,{})}),e.jsx("button",{children:"Login"})]})]})};p.displayName="Header";export{p as default};
