import{j as s,h as n,G as a,O as l}from"./index-3bd92df9.js";import{u as o}from"./useUserProfile-9b864381.js";import x from"./Header-9e21d334.js";import"./fetchKeys-14f763aa.js";import"./useIsUserLoggedIn-23108041.js";import"./useUserProfilePic-57e86959.js";import"./roundedLogos-5ef49220.js";import"./helpers-b6ef1e89.js";function e({children:t,to:i}){return s.jsx("li",{className:"mb-3 hover:text-white",children:s.jsx(n,{className:({isActive:r})=>r?"text-white":"text-slate-400",to:i,children:t})})}function c(){const{user:t}=o();return s.jsx("div",{className:"py-1 min-h-[300px] text-sm md:px-2",style:{borderRight:"1px solid #ffffff50"},children:s.jsxs("ul",{children:[s.jsx(e,{to:"/settings/profile",children:"Profile"}),s.jsx(e,{to:"/settings/account",children:"Account"}),s.jsx(e,{to:"/settings/cloudIntegrations",children:"Integrations"}),!!(t!=null&&t.iam)&&s.jsx(e,{to:"/settings/admin",children:"Admin"})]})})}function v(){return s.jsxs("div",{className:"h-dvh max-h-dvh",children:[s.jsx(x,{}),s.jsxs("div",{className:"p-2 sm:p-4 ",children:[s.jsx("div",{children:s.jsxs("h1",{className:"flex items-center gap-1 text-lg font-bold tracking-widest uppercase text-neutral-300",children:[s.jsx(a,{})," Settings"]})}),s.jsxs("div",{className:"m-3  mt-6 my-3 grid flex-grow grid-cols-[minmax(100px,_1fr)_5fr]",children:[s.jsx(c,{}),s.jsx("div",{className:"w-full px-7",children:s.jsx(l,{})})]})]})]})}export{v as default};
