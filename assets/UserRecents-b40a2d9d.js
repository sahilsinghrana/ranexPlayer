import{l as o,_ as a,j as s,r as l,L as r}from"./index-de8a766d.js";import{H as m,Q as c}from"./index-52abb28b.js";import{f as d}from"./favoritePlaylist-4cd647fb.js";import{a as u}from"./moonAndMusicImages-2741f710.js";import{u as j}from"./useIsUserLoggedIn-8846f5ee.js";import{u as p}from"./App-d6017d4c.js";import"./helpers-01b1bc81.js";const x=o(()=>a(()=>import("./HomeSection-72e54136.js"),["assets/HomeSection-72e54136.js","assets/index-de8a766d.js","assets/index-6106011d.css"])),t=o(()=>a(()=>import("./PlaylistCard-b6c389aa.js"),["assets/PlaylistCard-b6c389aa.js","assets/index-de8a766d.js","assets/index-6106011d.css","assets/App-d6017d4c.js","assets/moonAndMusicImages-2741f710.js","assets/helpers-01b1bc81.js"])),h=o(()=>a(()=>import("./HorizontalList-fb98d99f.js"),["assets/HorizontalList-fb98d99f.js","assets/index-de8a766d.js","assets/index-6106011d.css","assets/App-d6017d4c.js"]));function v(){return j()?s.jsx(l.Suspense,{fallback:s.jsx(m,{}),children:s.jsx(_,{})}):null}function _(){var n;const{data:e}=p("/user/playlist");return s.jsxs(s.Fragment,{children:[s.jsxs(c,{children:["Through the ",s.jsx("span",{className:"font-normal",children:"EARS"}),", into the"," ",s.jsx("span",{className:"font-normal",children:"HEAD"}),", reminiscing the"," ",s.jsx("span",{className:"font-normal",children:"SOUL"})]}),s.jsx(x,{children:s.jsxs(h,{children:[s.jsx(r,{to:"/playlists/favorites",children:s.jsx("li",{children:s.jsx(t,{size:"smallWide",backgroundImage:d,className:"object-scale-down object-center",playlistName:"Favourites"})})}),(n=e==null?void 0:e.data)==null?void 0:n.map(i=>s.jsx("li",{children:s.jsx(r,{to:`/playlists/${i.id}`,children:s.jsx(t,{size:"smallWide",playlistName:i.title})})},i.id)),s.jsx("li",{children:s.jsx(r,{to:"/playlists",children:s.jsx(t,{size:"smallWide",playlistName:"View More+",backgroundImage:u()})})})]})})]})}export{v as default};
