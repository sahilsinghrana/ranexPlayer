import{u}from"./useIsUserLoggedIn-20807ce1.js";import{u as n}from"./App-774b7160.js";function f(){const s=u(),{data:r,isLoading:e,error:o}=n(s?"/user/profile":null);return{user:r==null?void 0:r.data,isLoading:e,error:o}}export{f as u};
