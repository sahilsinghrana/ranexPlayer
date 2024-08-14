import{r as c,j as t,c as j,d as x,l as u,_ as h,b as g,w as _}from"./index-46666a37.js";import{g as S}from"./moonAndMusicImages-ee3f4190.js";import{p as f}from"./player-93e6d491.js";import{c as E}from"./helpers-b6ef1e89.js";import{A as b}from"./index-0d265e8f.js";import{H as p}from"./index-72f15ef0.js";import{p as w,a as y}from"./playerAtom-aaeeaf47.js";import{F as A}from"./fetchKeys-14f763aa.js";import"./imageHelpers-8dffa84a.js";import"./useIsUserLoggedIn-6e14e6fd.js";function I({song:s={}}){var e,d;const{title:i,artist:l,coverArt:a,className:r,path:o}=s,n=((e=a==null?void 0:a.thumbnails)==null?void 0:e.small)||((d=a==null?void 0:a.thumbnails)==null?void 0:d.large)||S();return t.jsxs("div",{onClick:()=>{f.loadAndPlay(o,s)},className:j("flex cursor-pointer w-[85dvw] sm:max-w-[300px] h-[80px] gap-1 items-center bg-neutral-800 rounded-sm overflow-hidden",r),children:[t.jsx(b,{className:"h-full w-[80px]",src:E(n)}),t.jsxs("div",{className:"flex flex-col justify-center h-full ml-2 overflow-hidden",children:[t.jsx("h5",{className:x("font-semibold text-ellipsis w-fit text-md text-neutral-50/80",{"sm:animate-marquee":i.length>15}),children:i}),t.jsx("h5",{className:x("text-xs text-ellipsis w-fit text-neutral-300/80",{"sm:animate-marquee":l.length>17}),children:l})]})]})}const m=c.memo(I),N=u(()=>h(()=>import("./HomeSection-d216694d.js"),["assets/HomeSection-d216694d.js","assets/index-46666a37.js","assets/index-cac46060.css"])),H=u(()=>h(()=>import("./HorizontalList-141901e7.js"),["assets/HorizontalList-141901e7.js","assets/index-46666a37.js","assets/index-cac46060.css"]));function k(){var r,o,n;const{data:s,isLoading:i}=g(A.publicSongs),l=(r=s==null?void 0:s.data)==null?void 0:r.songs,a=_(y);return c.useEffect(()=>{if(a===w.INITIALIZED&&(l!=null&&l.length)){const e=l[0];f.load(e==null?void 0:e.path,e)}},[a,l]),t.jsx(c.Suspense,{fallback:t.jsx(p,{}),children:t.jsx(N,{title:"Celestial catalog!",children:t.jsxs(H,{className:"gap-3 mb-2 sm:px-3",children:[(n=(o=s==null?void 0:s.data)==null?void 0:o.songs)==null?void 0:n.map(e=>t.jsx("li",{children:t.jsx(m,{song:e})},e==null?void 0:e.songId)),t.jsx("li",{children:t.jsx(m,{song:{artist:"Europe",title:"In My Time"}})}),t.jsx("li",{children:t.jsx(m,{song:{artist:"Hardwell",title:"Spaceman"}})}),t.jsx("li",{children:t.jsx(m,{song:{artist:"AP Dhillon",title:"Majhail"}})}),i&&t.jsx(p,{})]})})})}export{k as default};
