var c=Object.defineProperty;var d=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var l=(e,t,a)=>(d(e,typeof t!="symbol"?t+"":t,a),a);import{g as h}from"./moonAndMusicImages-40a4352e.js";import{p as i,b as r,a as o,d as n,e as p,f as g,c as A}from"./playerAtom-421b5708.js";import{c as E}from"./imageHelpers-8dffa84a.js";const y=()=>"mediaSession"in navigator,S=()=>navigator.mediaSession,u=e=>{y()&&(S().playbackState=e)};class L{constructor(){l(this,"seek",t=>{this.audioEl.currentTime=t});this.audioEl=new Audio,this.meta={}}attachListener(t,a){this.audioEl.addEventListener(t,a)}load(t,a={}){this.audioEl.src=t,this.audioEl.load(),this.meta={...this.meta,...a}}loadAndPlay(t,a={}){this.load(t),this.audioEl.play(),this.meta={...this.meta,...a}}play(){this.audioEl.play(),u("playing")}pause(){this.audioEl.pause(),u("paused")}changeVolume(t=0){this.audioEl.volume=t}}const s=new L;s.attachListener("playing",()=>{i.set(r,()=>o.PLAYING)});s.attachListener("pause",()=>{i.set(r,()=>o.PAUSED)});s.attachListener("ended",()=>{i.set(r,()=>o.STOPPED)});s.attachListener("durationchange",()=>{i.set(n,(e={})=>({...e,meta:{...e.meta||{},duration:s.audioEl.duration}}))});s.attachListener("timeupdate",()=>{i.set(n,(e={})=>({meta:{...e.meta||{},currentTime:s.audioEl.currentTime}}))});s.attachListener("onvolumechange",()=>{i.set(p,()=>s.audioEl.volume)});s.attachListener("loadstart",()=>{var t;i.set(r,()=>o.LOADED);const e=((t=s.meta)==null?void 0:t.albumArtSrc)||h();if(i.set(g,e),e){const a=document.createElement("img");a.src=e,a.onload=()=>{const m=E(a);i.set(A,m)}}i.set(n,(a={})=>({meta:{...a.meta||{},...s.meta||{}}}))});export{s as p};
