import{o as c,r as o,l as i,_ as n,j as t}from"./index-24725e1a.js";const a="playerView";function _(e){return!!e.has(a)}function m(){const[e,l]=c(),r=_(e),u=o.useCallback(()=>{l(s=>(r?s.delete(a):s.append(a,"full"),s))},[r,l]);return[r,u]}const P=i(()=>n(()=>import("./MobilePlayerFull-32d58642.js"),["assets/MobilePlayerFull-32d58642.js","assets/index-24725e1a.js","assets/index-cac46060.css","assets/playerAtom-e99d3d84.js","assets/imageHelpers-8dffa84a.js","assets/App-3f935aca.js"])),E=i(()=>n(()=>import("./MobileBarSmall-5f507bcf.js"),["assets/MobileBarSmall-5f507bcf.js","assets/index-24725e1a.js","assets/index-cac46060.css","assets/playerAtom-e99d3d84.js","assets/imageHelpers-8dffa84a.js"]));function d(){const[e,l]=m();return t.jsx(t.Fragment,{children:e?t.jsx(P,{toggleFullView:l}):t.jsx(E,{toggleFullView:l})})}const V=o.memo(d);export{V as default};
