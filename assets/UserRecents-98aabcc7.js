import{l as o,_ as a,j as s,r as l,L as r}from"./index-63d32132.js";import{H as m,Q as c}from"./index-98ed2e47.js";import{f as d}from"./favoritePlaylist-4cd647fb.js";import{a as u}from"./moonAndMusicImages-40a4352e.js";import{u as j}from"./useIsUserLoggedIn-76c33943.js";import{u as p}from"./App-102249ba.js";import"./helpers-510d46ea.js";const x=o(()=>a(()=>import("./HomeSection-99c5f8aa.js"),["assets/HomeSection-99c5f8aa.js","assets/index-63d32132.js","assets/index-cf3a15c3.css"])),t=o(()=>a(()=>import("./PlaylistCard-92465871.js"),["assets/PlaylistCard-92465871.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/App-102249ba.js","assets/moonAndMusicImages-40a4352e.js","assets/helpers-510d46ea.js"])),h=o(()=>a(()=>import("./HorizontalList-1bcb4d73.js"),["assets/HorizontalList-1bcb4d73.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/App-102249ba.js"]));function v(){return j()?s.jsx(l.Suspense,{fallback:s.jsx(m,{}),children:s.jsx(_,{})}):null}function _(){var n;const{data:e}=p("/user/playlist");return s.jsxs(s.Fragment,{children:[s.jsxs(c,{children:["Through the ",s.jsx("span",{className:"font-normal",children:"EARS"}),", into the"," ",s.jsx("span",{className:"font-normal",children:"HEAD"}),", reminiscing the"," ",s.jsx("span",{className:"font-normal",children:"SOUL"})]}),s.jsx(x,{children:s.jsxs(h,{children:[s.jsx(r,{to:"/playlists/favorites",children:s.jsx("li",{children:s.jsx(t,{size:"smallWide",backgroundImage:d,className:"object-scale-down object-center",playlistName:"Favourites"})})}),(n=e==null?void 0:e.data)==null?void 0:n.map(i=>s.jsx("li",{children:s.jsx(r,{to:`/playlists/${i.id}`,children:s.jsx(t,{size:"smallWide",playlistName:i.title})})},i.id)),s.jsx("li",{children:s.jsx(r,{to:"/playlists",children:s.jsx(t,{size:"smallWide",playlistName:"View More+",backgroundImage:u()})})})]})})]})}export{v as default};