import{r as s,j as a}from"./index-940c8f2e.js";import{b as r,g as x}from"./App-81a6f6cb.js";import{g as o}from"./moonAndMusicImages-40a4352e.js";import"./helpers-510d46ea.js";const d=({children:t,backgroundImage:e,className:m})=>a.jsx("div",{style:{backgroundImage:`url("${e}")`,backgroundSize:"cover"},className:r("w-32 h-32 m-2 duration-100 rounded-md shadow-md cursor-pointer bg-slate-600 hover:-translate-y-1 ",m),children:t}),i=s.memo(d),n=x("w-[40vw] h-[40vw]",{variants:{size:{small:"max-w-36 max-h-20 text-md",medium:"max-w-40 max-h-40 text-lg",adaptive:"max-w-44 max-h-24 text-md sm:max-w-40 sm:max-h-40 sm:text-lg",mediumWide:"max-w-full sm:max-w-80 w-[90vw] max-h-44 h-44 text-xl sm:text-2xl",smallWide:"w-44 sm:max-w-80 max-h-28 h-28 text-xl sm:text-lg"}},defaultVariants:{size:"medium"}});function u({playlistName:t,backgroundImage:e=o(),size:m,className:l}){return a.jsx(i,{className:r(n({size:m}),l),backgroundImage:e,children:a.jsx("div",{className:"flex items-end h-full bg-gradient-to-t from-neutral-900 via-neutral-500/30 to-neutral-300/0",children:a.jsx("h5",{className:"w-full m-2 font-bold uppercase text-wrap text-neutral-50/80  drop-shadow-[0_1.2px_1.2px_#00000080]",children:t})})})}const g=s.memo(u);export{g as default};
