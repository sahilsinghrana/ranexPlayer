import{r as o,j as e,N as d,L as x}from"./index-28736834.js";import{L as u}from"./LogoBig-6d60ca03.js";import{B as p,s as h}from"./App-76830bfb.js";import{S as f}from"./SignInWithGoogle-f57957d8.js";import{I as r}from"./Input-f293572d.js";import{u as g}from"./useIsUserLoggedIn-f6a56acf.js";import"./roundedLogos-3227a292.js";import"./helpers-510d46ea.js";function j(){return e.jsxs("h2",{className:"text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ",children:["Join the ",e.jsx("span",{className:"font-bold",children:"Force"}),e.jsx("br",{}),"Hold the ",e.jsx("span",{className:"font-bold",children:"Power"}),e.jsx("br",{}),"Your`s is the ",e.jsx("span",{className:"font-bold",children:"Moon"}),e.jsx("br",{}),"Control your ",e.jsx("span",{className:"font-semibold",children:"space,"})," Control your"," ",e.jsx("span",{className:"font-bold",children:"Music"}),e.jsx("br",{}),"Over your own ",e.jsx("span",{className:"font-bold",children:"CLOUD"})]})}const b=o.memo(j),w="https://ranexplayerserver.onrender.com";function A(){const[s,n]=o.useState({});if(g())return e.jsx(d,{to:"/"});function t(a){const i=a.target.name,m=a.target.value;n(c=>({...c,[i]:m}))}function l(){h.auth.signInWithOAuth({provider:"google",options:{redirectTo:w+"/auth/callback"}})}return e.jsxs("div",{className:"flex flex-col h-[100dvh] pb-10 overflow-auto scroll-auto bg-grayDark-1 ",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row",children:[e.jsx(u,{}),e.jsx("div",{className:"self-end mt-5 sm:mb-1 md:mt-16",children:e.jsx(b,{})})]}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 pt-4 border-2 rounded-lg border-red-600/20 max-w-[460px] min-w-[320px] w-[80%]",children:[e.jsx("div",{className:"mb-3",children:e.jsx("h1",{className:"mb-4 text-3xl font-bold text-orange-600/80",children:"Sign Up"})}),e.jsx("div",{className:"flex flex-col items-center justify-center mb-4",children:e.jsx(f,{onClick:l})}),e.jsxs("form",{className:"flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]",children:[e.jsx(r,{required:!0,placeholder:"Email",value:s.email,name:"email",type:"email",onChange:t,className:"m-3 w-full",pattern:"[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}",autoComplete:"email webauthn"}),e.jsx(r,{required:!0,name:"Password",placeholder:"password",type:"password",value:s.password,onChange:t,className:"m-3  w-full",minLength:6,autoComplete:"new-password webauthn"}),e.jsx(p,{className:" my-4 w-[200px]",children:"Submit"})]}),e.jsxs("div",{className:"text-white",children:["Already been to the moon ?"," ",e.jsx(x,{to:"/login",className:"text-red-500",children:"Log In"})]})]})})]})}export{A as default};
