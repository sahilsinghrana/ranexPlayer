import{l as r,_ as o,j as t,r as a}from"./index-7dfafbc9.js";import{H as l}from"./index-a8f63817.js";import{u as _}from"./App-774b7160.js";import"./useIsUserLoggedIn-20807ce1.js";const n=r(()=>o(()=>import("./HorizontalList-1e9943ca.js"),["assets/HorizontalList-1e9943ca.js","assets/index-7dfafbc9.js","assets/index-3b856831.css","assets/App-774b7160.js"])),c=r(()=>o(()=>import("./HomeSection-12da7268.js"),["assets/HomeSection-12da7268.js","assets/index-7dfafbc9.js","assets/index-3b856831.css"])),m=r(()=>o(()=>import("./PlaylistCard-7088fbf1.js"),["assets/PlaylistCard-7088fbf1.js","assets/index-7dfafbc9.js","assets/index-3b856831.css","assets/App-774b7160.js","assets/moonAndMusicImages-2741f710.js","assets/helpers-01b1bc81.js"]));function j(){var e;const{data:i}=_("/music/playlist");return t.jsx(a.Suspense,{fallback:t.jsx(l,{}),children:t.jsx(c,{title:"Breach the void!",children:t.jsx(n,{children:(e=i==null?void 0:i.data)==null?void 0:e.map(s=>t.jsx("li",{children:t.jsx(m,{playlistName:s.title})},s.id))})})})}export{j as default};
