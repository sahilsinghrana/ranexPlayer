import{u}from"./useIsUserLoggedIn-b3c7f05b.js";import{u as n}from"./App-78cc889f.js";function f(){const s=u(),{data:r,isLoading:e,error:o}=n(s?"/user/profile":null);return{user:(r==null?void 0:r.data)||{},isLoading:e,error:o}}export{f as u};
