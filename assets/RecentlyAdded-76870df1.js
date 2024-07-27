import{r as c,j as e,l as u,_ as h,e as j}from"./index-63d32132.js";import{g}from"./moonAndMusicImages-40a4352e.js";import{p as f}from"./player-a06e0bfd.js";import{d as _,c as x,u as y}from"./App-102249ba.js";import{A}from"./index-f28235d7.js";import{H as p}from"./index-98ed2e47.js";import{a as S,b}from"./playerAtom-144b215f.js";import"./helpers-510d46ea.js";import"./imageHelpers-8dffa84a.js";import"./useIsUserLoggedIn-76c33943.js";function w({song:s={}}){var t,d;const{title:i,artist:l,coverArt:a,className:r,path:o}=s,n=((t=a==null?void 0:a.thumbnails)==null?void 0:t.small)||((d=a==null?void 0:a.thumbnails)==null?void 0:d.large)||g();return e.jsxs("div",{onClick:()=>{f.loadAndPlay(o,s)},className:_("flex cursor-pointer w-[85dvw] sm:max-w-[300px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",r),children:[e.jsx(A,{className:"h-full w-[80px]",src:n}),e.jsxs("div",{className:"flex flex-col justify-center h-full ml-2 overflow-hidden",children:[e.jsx("h5",{className:x("font-semibold text-ellipsis w-fit text-md text-neutral-50/80",{"sm:animate-marquee":i.length>15}),children:i}),e.jsx("h5",{className:x("text-xs text-ellipsis w-fit text-neutral-300/80",{"sm:animate-marquee":l.length>17}),children:l})]})]})}const m=c.memo(w),E=u(()=>h(()=>import("./HomeSection-99c5f8aa.js"),["assets/HomeSection-99c5f8aa.js","assets/index-63d32132.js","assets/index-cf3a15c3.css"])),I=u(()=>h(()=>import("./HorizontalList-1bcb4d73.js"),["assets/HorizontalList-1bcb4d73.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/App-102249ba.js"]));function V(){var r,o,n;const{data:s,isLoading:i}=y("/music/song"),l=(r=s==null?void 0:s.data)==null?void 0:r.songs,a=j(b);return c.useEffect(()=>{if(a===S.INITIALIZED&&(l!=null&&l.length)){const t=l[0];f.load(t==null?void 0:t.path,t)}},[a,l]),e.jsx(c.Suspense,{fallback:e.jsx(p,{}),children:e.jsx(E,{title:"Celestial catalog!",children:e.jsxs(I,{className:"gap-3 mb-2 sm:px-3",children:[i&&e.jsx(p,{}),(n=(o=s==null?void 0:s.data)==null?void 0:o.songs)==null?void 0:n.map(t=>e.jsx("li",{children:e.jsx(m,{song:t})},t==null?void 0:t.songId)),e.jsx("li",{children:e.jsx(m,{song:{artist:"Europe",title:"In My Time"}})}),e.jsx("li",{children:e.jsx(m,{song:{artist:"Hardwell",title:"Spaceman"}})}),e.jsx("li",{children:e.jsx(m,{song:{artist:"AP Dhillon",title:"Majhail"}})})]})})})}export{V as default};