import{o as c,r as o,l as i,_ as n,j as t}from"./index-7dfafbc9.js";const a="playerView";function _(e){return!!e.has(a)}function m(){const[e,l]=c(),r=_(e),u=o.useCallback(()=>{l(s=>(r?s.delete(a):s.append(a,"full"),s))},[r,l]);return[r,u]}const P=i(()=>n(()=>import("./MobilePlayerFull-76c25c01.js"),["assets/MobilePlayerFull-76c25c01.js","assets/index-7dfafbc9.js","assets/index-3b856831.css","assets/App-774b7160.js","assets/imageHelpers-8dffa84a.js","assets/react-icons.esm-45f4bd72.js"])),E=i(()=>n(()=>import("./MobileBarSmall-3e8553da.js"),["assets/MobileBarSmall-3e8553da.js","assets/index-7dfafbc9.js","assets/index-3b856831.css","assets/App-774b7160.js","assets/imageHelpers-8dffa84a.js"]));function d(){const[e,l]=m();return t.jsx(t.Fragment,{children:e?t.jsx(P,{toggleFullView:l}):t.jsx(E,{toggleFullView:l})})}const V=o.memo(d);export{V as default};
