import{o as c,r as o,l as i,_ as n,j as a}from"./index-4e81ba7d.js";const r="playerView";function _(e){return e.has(r)}function m(){const[e,l]=c(),t=_(e),u=o.useCallback(()=>{l(s=>(t?s.delete(r):s.append(r,"full"),s))},[t,l]);return[t,u]}const P=i(()=>n(()=>import("./MobilePlayerFull-b7389152.js"),["assets/MobilePlayerFull-b7389152.js","assets/index-4e81ba7d.js","assets/index-594b9eb4.css","assets/imageHelpers-8dffa84a.js"])),E=i(()=>n(()=>import("./MobileBarSmall-0337b0de.js"),["assets/MobileBarSmall-0337b0de.js","assets/index-4e81ba7d.js","assets/index-594b9eb4.css","assets/imageHelpers-8dffa84a.js"]));function V(){const[e,l]=m();return e?a.jsx(P,{toggleFullView:l}):a.jsx(E,{toggleFullView:l})}const f=o.memo(V);export{f as default};
