import{l,_ as a,e as n,j as s,L as c}from"./index-63d32132.js";import{c as m,d}from"./playerAtom-144b215f.js";import{t as x,a as h}from"./imageHelpers-8dffa84a.js";import{B as p}from"./App-102249ba.js";import{b as f,L as u}from"./react-icons.esm-535a0ff7.js";const j=l(()=>a(()=>import("./PlayerControls-99462b34.js"),["assets/PlayerControls-99462b34.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/playerAtom-144b215f.js","assets/App-102249ba.js","assets/PlayButton-e1b4e8c6.js","assets/player-a06e0bfd.js","assets/moonAndMusicImages-40a4352e.js","assets/helpers-510d46ea.js","assets/imageHelpers-8dffa84a.js","assets/react-icons.esm-535a0ff7.js"])),_=l(()=>a(()=>import("./SeekBar-b1da8054.js"),["assets/SeekBar-b1da8054.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/player-a06e0bfd.js","assets/moonAndMusicImages-40a4352e.js","assets/helpers-510d46ea.js","assets/playerAtom-144b215f.js","assets/imageHelpers-8dffa84a.js"])),v=l(()=>a(()=>import("./NowPlayingAlbumArt-4e72e904.js"),["assets/NowPlayingAlbumArt-4e72e904.js","assets/index-63d32132.js","assets/index-cf3a15c3.css","assets/index-f28235d7.js","assets/App-102249ba.js","assets/playerAtom-144b215f.js"]));function A({toggleFullView:r}){var i,o;const t=n(m),e=n(d);return s.jsxs("div",{style:{background:x(h(t.r,t.g,t.b))},className:"absolute top-0 grid w-full h-[100dvh] grid-cols-1 bg-neutral-800 ",children:[s.jsx("div",{className:"h-[10vh] p-6",children:s.jsx(p,{type:"trasparent",onClick:r,children:s.jsx(f,{height:"30px",width:"30px"})})}),s.jsx("div",{className:"h-[45vh] flex justify-center items-center",children:s.jsx(v,{size:"lg",className:"w-[42vh] h-[42vh] bg-black"})}),s.jsxs("div",{className:"flex flex-col items-center self-end w-full gap-6 p-4",children:[s.jsx("div",{className:"flex justify-between w-full",children:s.jsxs("div",{children:[s.jsx("h2",{className:"pl-1 text-lg font-bold",children:(i=e==null?void 0:e.meta)==null?void 0:i.title}),s.jsx("h3",{className:"pl-1 text-md font-base",children:(o=e==null?void 0:e.meta)==null?void 0:o.artist})]})}),s.jsx(_,{}),s.jsxs("div",{className:" mb-5 grid w-full grid-cols-[minmax(30px,_1fr)_5fr_minmax(30px,_1fr)] justify-center items-center",children:[s.jsx("div",{}),s.jsx(j,{playPauseClass:"h-16 p-3 w-16",prevNextClass:"h-11 p-3 w-11",className:"gap-2"}),s.jsx("div",{className:"flex justify-end w-full ",children:s.jsx(c,{to:"/now-playing",onClick:r,children:s.jsx("div",{className:"p-2 mx-1 text-white cursor-pointer ",children:s.jsx(u,{className:"w-[22px] h-[22px]"})})})})]})]})]})}export{A as default};