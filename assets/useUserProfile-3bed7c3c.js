import{u}from"./useIsUserLoggedIn-76c33943.js";import{u as n}from"./App-102249ba.js";function f(){const s=u(),{data:r,isLoading:e,error:o}=n(s?"/user/profile":null);return{user:(r==null?void 0:r.data)||{},isLoading:e,error:o}}export{f as u};