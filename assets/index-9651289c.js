import{J as c,r as o,l as i,_ as n,j as t}from"./index-077007ab.js";const a="playerView";function _(e){return!!e.has(a)}function m(){const[e,l]=c(),r=_(e),u=o.useCallback(()=>{l(s=>(r?s.delete(a):s.append(a,"full"),s))},[r,l]);return[r,u]}const P=i(()=>n(()=>import("./MobilePlayerFull-7be656eb.js"),["assets/MobilePlayerFull-7be656eb.js","assets/index-077007ab.js","assets/index-08d1bbb5.css","assets/playerAtom-ef4b5b77.js","assets/imageHelpers-8dffa84a.js"])),E=i(()=>n(()=>import("./MobileBarSmall-f6c2541f.js"),["assets/MobileBarSmall-f6c2541f.js","assets/index-077007ab.js","assets/index-08d1bbb5.css","assets/playerAtom-ef4b5b77.js","assets/imageHelpers-8dffa84a.js"]));function d(){const[e,l]=m();return t.jsx(t.Fragment,{children:e?t.jsx(P,{toggleFullView:l}):t.jsx(E,{toggleFullView:l})})}const V=o.memo(d);export{V as default};
