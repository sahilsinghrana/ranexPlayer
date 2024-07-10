import{j as e,r as m,L as x,s as d}from"./index-1126a3c5.js";import{L as p,S as u}from"./SignInWithGoogle-e13fb151.js";import{B as h}from"./Button-03391216.js";import{I as l}from"./Input-01ec8cbc.js";import"./logo_red-54b98162.js";import"./clsx.m-1229b3e0.js";import"./bundle-mjs-642c57ff.js";function f(){return e.jsxs("h2",{className:"text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ",children:["Join the ",e.jsx("span",{className:"font-bold",children:"Force"}),e.jsx("br",{}),"Hold the ",e.jsx("span",{className:"font-bold",children:"Power"}),e.jsx("br",{}),"Your`s is the ",e.jsx("span",{className:"font-bold",children:"Moon"}),e.jsx("br",{}),"Control your ",e.jsx("span",{className:"font-semibold",children:"space,"})," Control your"," ",e.jsx("span",{className:"font-bold",children:"Music"}),e.jsx("br",{}),"Over your own ",e.jsx("span",{className:"font-bold",children:"CLOUD"})]})}const j="https://bug-free-xylophone-pp6gx7qrrj9c7769-3000.app.github.dev";function C(){const[s,r]=m.useState({});function t(a){const o=a.target.name,i=a.target.value;r(c=>({...c,[o]:i}))}function n(){d.auth.signInWithOAuth({provider:"google",options:{redirectTo:j+"/auth/callback"}})}return e.jsxs("div",{className:"flex flex-col h-full pb-10 overflow-auto scroll-auto bg-grayDark-1 ",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row",children:[e.jsx(p,{}),e.jsx("div",{className:"self-end mt-5 sm:mb-1 md:mt-16",children:e.jsx(f,{})})]}),e.jsx("div",{className:"flex flex-col items-center justify-center flex-grow h-full ",children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 pt-4 border-2 rounded-lg border-red-600/20 max-w-[460px] min-w-[320px] w-[80%]",children:[e.jsx("div",{className:"mb-3",children:e.jsx("h1",{className:"mb-4 text-3xl font-bold text-orange-600/80",children:"Sign Up"})}),e.jsx("div",{className:"flex flex-col items-center justify-center mb-4",children:e.jsx(u,{onClick:n})}),e.jsxs("form",{className:"flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]",children:[e.jsx(l,{required:!0,placeholder:"Email",value:s.email,name:"email",type:"email",onChange:t,className:"m-3 w-full",pattern:"[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}"}),e.jsx(l,{required:!0,name:"Password",placeholder:"password",type:"password",value:s.password,onChange:t,className:"m-3  w-full",minLength:6}),e.jsx(h,{className:" my-4 w-[200px]",children:"Submit"})]}),e.jsxs("div",{className:"text-white",children:["Already been to the moon ?"," ",e.jsx(x,{to:"/login",className:"text-red-500",children:"Log In"})]})]})})]})}export{C as default};
