import{z as c,r as o,l as i,_ as n,j as t}from"./index-13ed8e83.js";const a="playerView";function _(e){return!!e.has(a)}function m(){const[e,l]=c(),r=_(e),u=o.useCallback(()=>{l(s=>(r?s.delete(a):s.append(a,"full"),s))},[r,l]);return[r,u]}const P=i(()=>n(()=>import("./MobilePlayerFull-b1b38e56.js"),["assets/MobilePlayerFull-b1b38e56.js","assets/index-13ed8e83.js","assets/index-cac46060.css","assets/playerAtom-eae7ceca.js","assets/imageHelpers-8dffa84a.js"])),E=i(()=>n(()=>import("./MobileBarSmall-e46db6f0.js"),["assets/MobileBarSmall-e46db6f0.js","assets/index-13ed8e83.js","assets/index-cac46060.css","assets/playerAtom-eae7ceca.js","assets/imageHelpers-8dffa84a.js"]));function d(){const[e,l]=m();return t.jsx(t.Fragment,{children:e?t.jsx(P,{toggleFullView:l}):t.jsx(E,{toggleFullView:l})})}const V=o.memo(d);export{V as default};
