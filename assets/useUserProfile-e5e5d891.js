import{u}from"./useIsUserLoggedIn-799819b4.js";import{u as n}from"./App-79a7e251.js";function f(){const s=u(),{data:r,isLoading:e,error:o}=n(s?"/user/profile":null);return{user:(r==null?void 0:r.data)||{},isLoading:e,error:o}}export{f as u};
