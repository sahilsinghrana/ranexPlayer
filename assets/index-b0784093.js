import{r as d,j as e,B as p,s as u,N as h,L as f}from"./index-3bd92df9.js";import{I as r}from"./Input-6bb17ce4.js";import{L as g}from"./LogoBig-a7000307.js";import{S as j}from"./SignInWithGoogle-22a89962.js";import{u as b}from"./useIsUserLoggedIn-23108041.js";import"./roundedLogos-5ef49220.js";import"./helpers-b6ef1e89.js";function N(){const[t,i]=d.useState({});function a(s){const n=s.target.name,l=s.target.value;i(o=>({...o,[n]:l}))}function x(s){s.preventDefault(),s.stopPropagation();const{email:n,password:l,firstName:o,lastName:c}=t;n&&l&&o&&c&&u.auth.signUp({email:n,password:l,options:{redirectTo:window.location.origin,data:{first_name:o,last_name:c}}}).then(m=>{console.log(m)}).catch(m=>console.log(m))}return e.jsxs("form",{onSubmit:x,className:"flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]",children:[e.jsx(r,{required:!0,placeholder:"First Name",value:t.firstName,name:"firstName",type:"text",onChange:a,className:"m-3 w-full",autoComplete:"name webauthn",pattern:"[A-Za-z]{3,}",title:"First name must be at least 3 letters long"}),e.jsx(r,{required:!0,placeholder:"Last Name",value:t.lastName,name:"lastName",type:"text",onChange:a,className:"m-3 w-full",autoComplete:"email webauthn",pattern:"[A-Za-z]{3,}",title:"First name must be at least 3 letters long"}),e.jsx(r,{required:!0,placeholder:"Email",value:t.email,name:"email",type:"email",onChange:a,className:"m-3 w-full",pattern:"[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}",autoComplete:"email webauthn",title:"Enter a valid email."}),e.jsx(r,{autoComplete:"current-password webauthn",required:!0,name:"password",placeholder:"Password",type:"password",value:t.password,onChange:a,className:"m-3  w-full",minLength:6,title:"Password must be of atleast 6 digits"}),e.jsx(p,{className:" my-4 w-[200px]",children:"Submit"})]})}function w(){return e.jsxs("h2",{className:"text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ",children:["Join the ",e.jsx("span",{className:"font-bold",children:"Force"}),e.jsx("br",{}),"Hold the ",e.jsx("span",{className:"font-bold",children:"Power"}),e.jsx("br",{}),"Your`s is the ",e.jsx("span",{className:"font-bold",children:"Moon"}),e.jsx("br",{}),"Control your ",e.jsx("span",{className:"font-semibold",children:"space,"})," Control your"," ",e.jsx("span",{className:"font-bold",children:"Music"}),e.jsx("br",{}),"Over your own ",e.jsx("span",{className:"font-bold",children:"CLOUD"})]})}const v=d.memo(w),y="https://ranexplayerserver.onrender.com";function P(){if(b())return e.jsx(h,{to:"/"});function i(){u.auth.signInWithOAuth({provider:"google",options:{redirectTo:y+"/auth/callback"}})}return e.jsxs("div",{className:"flex flex-col h-[100dvh] pb-10 overflow-auto scroll-auto bg-grayDark-1 ",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row",children:[e.jsx(g,{}),e.jsx("div",{className:"self-end mt-5 sm:mb-1 md:mt-16",children:e.jsx(v,{})})]}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 pt-4 border-2 rounded-lg border-red-600/20 max-w-[460px] min-w-[320px] w-[80%]",children:[e.jsx("div",{className:"mb-3",children:e.jsx("h1",{className:"mb-4 text-3xl font-bold text-orange-600/80",children:"Sign Up"})}),e.jsx("div",{className:"flex flex-col items-center justify-center mb-4",children:e.jsx(j,{onClick:i})}),e.jsx(N,{}),e.jsxs("div",{className:"text-white",children:["Already been to the moon ?"," ",e.jsx(f,{to:"/login",className:"text-red-500",children:"Log In"})]})]})})]})}export{P as default};
