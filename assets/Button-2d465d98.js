import{j as k}from"./index-c860ddc8.js";import{c as y}from"./clsx.m-1229b3e0.js";const m=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,g=y,j=(n,r)=>e=>{var d;if((r==null?void 0:r.variants)==null)return g(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:i,defaultVariants:a}=r,x=Object.keys(i).map(t=>{const o=e==null?void 0:e[t],u=a==null?void 0:a[t];if(o===null)return null;const l=m(o)||m(u);return i[t][l]}),c=e&&Object.entries(e).reduce((t,o)=>{let[u,l]=o;return l===void 0||(t[u]=l),t},{}),b=r==null||(d=r.compoundVariants)===null||d===void 0?void 0:d.reduce((t,o)=>{let{class:u,className:l,...h}=o;return Object.entries(h).every(f=>{let[v,s]=f;return Array.isArray(s)?s.includes({...a,...c}[v]):{...a,...c}[v]===s})?[...t,u,l]:t},[]);return g(n,x,b,e==null?void 0:e.class,e==null?void 0:e.className)},B=j("flex items-center justify-center p-2 transition-colors duration-300",{variants:{type:{primary:["text-white","bg-elementBackground hover:bg-hoverElementBackgroundDark","dark:bg-elementBackgroundDark dark:hover:bg-hoverElementBackgroundDark"],secondary:["text-gray-1","bg-gray-9 hover:bg-gray-10"],danger:["text-gray-1","bg-danger-10 hover:bg-danger-11"],outline:["outline-1  outline-double","outline-current hover:outline-2 active:outline-4 focus:outline-4 "],icon:["text-white","hover:text-accent-6 scale-2","data-[active=true]:text-accent-11 hover:data-[active=true]:text-accent-9 font-extrabold"]},size:{sm:["h-9"],md:["h-10"],lg:["h-14"]},rounded:{sm:["rounded-sm"],md:["rounded"],lg:["rounded-lg"],xl:["rounded-xl"],full:["rounded-full"]}},defaultVariants:{type:"primary",size:"md",rounded:"md"}}),C=({children:n,className:r,type:e,size:d,rounded:i,...a})=>k.jsx("button",{className:y(B({type:e,size:d,rounded:i}),r),...a,children:n});export{C as B};
