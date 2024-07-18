import{r as m,j as s,c as p,A as u,g as f,l as a,_ as r,f as d,L as t,a as y}from"./index-3e4e37fe.js";import{f as g}from"./favoritePlaylist-4cd647fb.js";import{M as _}from"./MoonLoader-a7557984.js";import{u as x}from"./index-3b93034a.js";function v({title:l,artist:o,albumArtSrc:h=f(),className:j}){return s.jsxs("div",{className:p("flex w-[85vw] sm:w-full min-w-[200px] sm:min-w-[280px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",j),children:[s.jsx(u,{className:"h-full w-[80px]",src:h}),s.jsxs("div",{className:"flex flex-col justify-center h-full ml-2",children:[s.jsx("h5",{className:"font-semibold text-md text-neutral-50/80",children:l}),s.jsx("h5",{className:"text-xs text-neutral-300/80",children:o})]})]})}const i=m.memo(v),n=a(()=>r(()=>import("./HomeSection-5b58a715.js"),["assets/HomeSection-5b58a715.js","assets/index-3e4e37fe.js","assets/index-594b9eb4.css"])),N=a(()=>r(()=>import("./UserGreeting-6aa950fd.js"),["assets/UserGreeting-6aa950fd.js","assets/index-3e4e37fe.js","assets/index-594b9eb4.css"])),e=a(()=>r(()=>import("./index-3e4e37fe.js").then(l=>l.$),["assets/index-3e4e37fe.js","assets/index-594b9eb4.css"])),c=a(()=>r(()=>import("./HorizontalList-1fae8792.js"),["assets/HorizontalList-1fae8792.js","assets/index-3e4e37fe.js","assets/index-594b9eb4.css"])),E=()=>{const l=x("/music/playlist",d);console.log(l);const o=x("/user/playlist",d);return console.log(o),s.jsx(m.Suspense,{fallback:s.jsx(_,{}),children:s.jsx("div",{className:"relative w-full",children:s.jsxs("div",{className:"h-full overflow-auto",children:[s.jsx(N,{}),s.jsx(n,{children:s.jsxs(c,{children:[s.jsx(t,{to:"/playlists/favorites",children:s.jsx("li",{children:s.jsx(e,{size:"adaptive",backgroundImage:g,className:"object-scale-down object-center",playlistName:"Favourites"})})}),s.jsx("li",{children:s.jsx(t,{to:"/playlists/24",children:s.jsx(e,{size:"adaptive",playlistName:"Soothing"})})}),s.jsx(t,{to:"/playlists/24",children:s.jsx("li",{children:s.jsx(e,{size:"adaptive",playlistName:"Soulful"})})}),s.jsx("li",{children:s.jsx(t,{to:"/playlists",children:s.jsx(e,{size:"adaptive",playlistName:"View More+",backgroundImage:y()})})})]})}),s.jsxs("h2",{className:"py-2 text-xs italic font-light tracking-wide text-center text-white opacity-60",children:["Get ",s.jsx("span",{className:"font-normal",children:"Dwelved"})," in the soul of the"," ",s.jsx("span",{className:"font-bold",children:"Sound"}),s.jsx("br",{})]}),s.jsx(n,{title:"Lists Curated by US!",children:s.jsxs(c,{children:[s.jsx("li",{children:s.jsx(e,{playlistName:"Soothing"})}),s.jsx("li",{children:s.jsx(e,{playlistName:"Soulful"})}),s.jsx("li",{children:s.jsx(e,{playlistName:"Gold & Silver"})}),s.jsx("li",{children:s.jsx(e,{playlistName:"Rock the Party!"})})]})}),s.jsx(n,{title:"Recently Added!",children:s.jsxs(c,{className:"gap-3 mb-2 sm:px-3",children:[s.jsx("li",{children:s.jsx(i,{artist:"Europe",title:"In my time"})}),s.jsx("li",{children:s.jsx(i,{artist:"Hardwell",title:"Spaceman"})}),s.jsx("li",{children:s.jsx(i,{artist:"AP Dhillon",title:"Majhail"})}),s.jsx("li",{children:s.jsx(i,{artist:"KK",title:"Tujhe Sochta hu"})})]})})]})})})};export{E as default};
