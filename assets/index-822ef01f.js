import{j as e,r as m,L as x,s as d}from"./index-e2e16acf.js";import{L as h,S as p}from"./SignInWithGoogle-4e4a085f.js";import{B as u}from"./Button-56f2d21e.js";import{I as l}from"./Input-e3c877a7.js";import"./logo_red-54b98162.js";import"./clsx.m-1229b3e0.js";function f(){return e.jsxs("h2",{className:"text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ",children:["Let us get ",e.jsx("span",{className:"font-bold",children:"Lost"}),e.jsx("br",{}),"Across the ",e.jsx("span",{className:"font-bold",children:"Universe"}),e.jsx("br",{}),"Let us ",e.jsx("span",{className:"font-bold",children:"vacillate"}),e.jsx("br",{}),"With the ",e.jsx("span",{className:"font-semibold",children:"moon"})," within the"," ",e.jsx("span",{className:"font-bold",children:"Trance"}),e.jsx("br",{}),"Over our own ",e.jsx("span",{className:"font-bold",children:"CLOUD"})]})}const j="https://bug-free-xylophone-pp6gx7qrrj9c7769-3000.app.github.dev";function L(){const[s,n]=m.useState({});function t(a){const o=a.target.name,i=a.target.value;n(c=>({...c,[o]:i}))}function r(){d.auth.signInWithOAuth({provider:"google",options:{redirectTo:j+"/auth/callback"}})}return e.jsxs("div",{className:"flex flex-col h-full pb-10 overflow-auto scroll-auto bg-grayDark-1 ",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row",children:[e.jsx(h,{}),e.jsx("div",{className:"self-end mt-5 sm:mb-1 md:mt-16",children:e.jsx(f,{})})]}),e.jsx("div",{className:"flex flex-col items-center justify-center flex-grow h-full ",children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 border-2 rounded-lg border-gray-11/20 max-w-[460px] min-w-[320px] w-[80%]",children:[e.jsx("div",{className:"mb-3",children:e.jsx("h1",{className:"mb-4 text-3xl font-bold text-textSecondaryDark/80",children:"Log In"})}),e.jsx("div",{className:"flex flex-col items-center justify-center mb-4",children:e.jsx(p,{onClick:r})}),e.jsxs("form",{className:"flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]",children:[e.jsx(l,{required:!0,placeholder:"Email",value:s.email,name:"email",type:"email",onChange:t,className:"m-3 w-full",pattern:"[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}"}),e.jsx(l,{required:!0,name:"Password",placeholder:"password",type:"password",value:s.password,onChange:t,className:"m-3  w-full",minLength:6}),e.jsx(u,{className:" my-4 w-[200px]",children:"Submit"})]}),e.jsxs("div",{className:"text-white",children:["New to the space ?"," ",e.jsx(x,{to:"/signup",className:"text-secondary-7",children:"Sign up"})]})]})})]})}export{L as default};
