import{l as t,_ as e,j as i,r as c}from"./index-9fefbbc4.js";import{H as a}from"./index-afdb6869.js";import{u as m}from"./App-c44bc96d.js";import"./useIsUserLoggedIn-563c2195.js";const x=t(()=>e(()=>import("./HorizontalList-e7e831fb.js"),["assets/HorizontalList-e7e831fb.js","assets/index-9fefbbc4.js","assets/index-9d4c5d5a.css","assets/App-c44bc96d.js"])),d=t(()=>e(()=>import("./HomeSection-6a12ef6a.js"),["assets/HomeSection-6a12ef6a.js","assets/index-9fefbbc4.js","assets/index-9d4c5d5a.css"])),s=t(()=>e(()=>import("./PlaylistCard-cb4410f8.js"),["assets/PlaylistCard-cb4410f8.js","assets/index-9fefbbc4.js","assets/index-9d4c5d5a.css","assets/App-c44bc96d.js","assets/moonAndMusicImages-40a4352e.js","assets/helpers-510d46ea.js"]));function h(){var r;const{data:l,isLoading:n}=m("/music/playlist");return i.jsx(c.Suspense,{fallback:i.jsx(a,{}),children:i.jsx(d,{title:"Breach the void!",children:i.jsxs(x,{children:[n&&i.jsx(a,{}),(r=l==null?void 0:l.data)==null?void 0:r.map(o=>i.jsx("li",{children:i.jsx(s,{playlistName:o.title})},o.id)),i.jsx("li",{children:i.jsx(s,{playlistName:"Soulful"})}),i.jsx("li",{children:i.jsx(s,{playlistName:"Rock & Roll"})}),i.jsx("li",{children:i.jsx(s,{playlistName:"Time Travel"})}),i.jsx("li",{children:i.jsx(s,{playlistName:"You & I"})})]})})})}export{h as default};
