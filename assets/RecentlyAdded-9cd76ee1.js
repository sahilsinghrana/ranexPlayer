import{r as m,j as e,l as o,_ as n}from"./index-3d697d2f.js";import{g as c}from"./moonAndMusicImages-2741f710.js";import{b as x,u as d}from"./App-dd0e0eb2.js";import{A as u}from"./index-f0bad406.js";import{H as h}from"./index-382f8638.js";import"./helpers-01b1bc81.js";import"./useIsUserLoggedIn-0de8978d.js";function p({title:s,artist:i,albumArtSrc:l=c(),className:t}){return e.jsxs("div",{className:x("flex w-[85vw] sm:w-full min-w-[200px] sm:min-w-[280px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",t),children:[e.jsx(u,{className:"h-full w-[80px]",src:l}),e.jsxs("div",{className:"flex flex-col justify-center h-full ml-2",children:[e.jsx("h5",{className:"font-semibold text-md text-neutral-50/80",children:s}),e.jsx("h5",{className:"text-xs text-neutral-300/80",children:i})]})]})}const r=m.memo(p),j=o(()=>n(()=>import("./HomeSection-9098097d.js"),["assets/HomeSection-9098097d.js","assets/index-3d697d2f.js","assets/index-3b856831.css"])),f=o(()=>n(()=>import("./HorizontalList-8f17afe2.js"),["assets/HorizontalList-8f17afe2.js","assets/index-3d697d2f.js","assets/index-3b856831.css","assets/App-dd0e0eb2.js"]));function b(){var i,l;const{data:s}=d("/music/song");return e.jsx(m.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(j,{title:"Celestial catalog!",children:e.jsxs(f,{className:"gap-3 mb-2 sm:px-3",children:[(l=(i=s==null?void 0:s.data)==null?void 0:i.songs)==null?void 0:l.map(t=>{var a;return e.jsx("li",{children:e.jsx(r,{artist:"work in progress",title:(a=t==null?void 0:t.originalFilename)==null?void 0:a.split(".")[0]})},t==null?void 0:t.fileName)}),e.jsx("li",{children:e.jsx(r,{artist:"Hardwell",title:"Spaceman"})}),e.jsx("li",{children:e.jsx(r,{artist:"AP Dhillon",title:"Majhail"})}),e.jsx("li",{children:e.jsx(r,{artist:"KK",title:"Tujhe Sochta hu"})})]})})})}export{b as default};
