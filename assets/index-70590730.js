import{r as u,j as e,B as P,a as v,m as A,P as O,T as I,c as L,L as q,b,d as C,e as H,f as J,g as F,_ as Q,h as Y,R as K,i as y}from"./index-c44939b7.js";import{I as k}from"./Input-6a6fb96c.js";import{F as p}from"./fetchKeys-42b30410.js";import{M as R}from"./MoonLoader-8d69572c.js";import{c as V}from"./helpers-b6ef1e89.js";import{u as G}from"./useUserProfile-ef0b68df.js";import X from"./index-22f34406.js";import"./useIsUserLoggedIn-4583016d.js";const T={playlistName:""};function Z({onSubmit:t}){const[s,a]=u.useState(T),[n,l]=u.useState(!1),[i,o]=u.useState();function c(g){a(d=>({...d,[g.target.name]:g.target.value}))}function m(g){g.preventDefault(),g.stopPropagation(),s.playlistName&&(l(!0),v.post("/music/playlist",{playlistName:s.playlistName}).then(d=>{var r,x;if(((r=d.data)==null?void 0:r.responseCode)!==1)throw new Error((x=d.data)==null?void 0:x.message);a(T),A(p.publicPlaylists),o(),t&&t(d)}).catch(d=>{o(d.message)}).finally(()=>{l(!1)}))}return e.jsxs("form",{onSubmit:m,className:"flex flex-col justify-center gap-8 mt-4",children:[e.jsxs("div",{children:[e.jsx(k,{className:"bg-slate-500/10 py-4 text-center text-xl",type:"text",name:"playlistName",value:s.playlistName,placeholder:"Playlist Name",maxLength:20,minLength:1,onChange:c,required:!0}),i&&e.jsx("p",{className:"text-sm text-red-700 text-wrap",children:i})]}),e.jsx(P,{disabled:n,loading:n,className:"py-6",children:"Submit"})]})}function ee({onClick:t}){return e.jsxs(P,{onClick:t,className:"px-3 ",children:[e.jsx(O,{})," ADD"]})}function z({playlistId:t}){const[s,a]=u.useState(!1);function n(l){l.preventDefault(),a(!0),v.delete(`/music/playlist/${t}`).then(()=>{A(p.publicPlaylists)}).finally(()=>{a(!1)})}return e.jsx("button",{disabled:s,onClick:n,className:"h-full p-2",children:e.jsx(I,{className:L("text-slate-200",{"animate-pulse":s})})})}function te({playlist:t={}}){const{title:s,id:a}=t;return e.jsx("li",{children:e.jsxs(q,{className:"flex items-center justify-between w-full my-2 duration-75 cursor-pointer hover:bg-slate-950/75 bg-neutral-900/50",to:String(a),children:[e.jsx("p",{className:"m-2",children:s}),e.jsx(z,{playlistId:a})]})})}function se(){const{data:t,isLoading:s}=b(p.publicPlaylists);return e.jsxs("div",{className:"my-4 mt-6",children:[s&&e.jsx(R,{}),e.jsx("ul",{children:Array.isArray(t==null?void 0:t.data)&&t.data.map(a=>e.jsx(te,{playlist:a},a.id))})]})}function ae({children:t,className:s,...a},n){return e.jsx("dialog",{ref:n,className:C("min-h-64 min-w-80 ",s),...a,children:t})}const le=u.forwardRef(ae);function ne({children:t,title:s,classNameTitle:a,...n},l){return e.jsxs(le,{ref:l,...n,children:[e.jsxs("div",{className:C("relative font-bold w-full py-2 text-xl text-center text-slate-300 tracking-wide bg-slate-800/50",a),children:[s,e.jsx("button",{onClick:()=>l.current.close(),className:"absolute top-0 right-0 flex items-center h-full mr-2 text-xl",children:e.jsx(H,{className:"w-6 h-6 hover:text-red-600"})})]}),t]})}const _=u.forwardRef(ne);function re(){const t=u.useRef();return e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex flex-wrap justify-between ",children:[e.jsx(k,{type:"search",placeholder:"🔎 search",className:"text-sm"}),e.jsx("div",{className:"justify-self-end ",children:e.jsx(ee,{onClick:()=>{t.current.showModal()}})})]}),e.jsx(_,{className:"p-5 bg-zinc-950",classNameTitle:"bg-transparent",title:"Add Playlist",ref:t,children:e.jsx(Z,{onSubmit:()=>t.current.close()})}),e.jsx(se,{})]})}function ie({playlistId:t}){var d;const[s,a]=u.useState(""),[n,l]=u.useState([]),{data:i,isPending:o,error:c}=b(p.searchSong+"/?q="+s),m=((d=i==null?void 0:i.data)==null?void 0:d.songs)||[];console.log({data:i,isPending:o,error:c});function g(r){l([...n,r]),v.post(p.linkSongWithPlaylist+"/"+t+"/"+r).then(x=>{}).finally(()=>{l(x=>x.filter(f=>f!==r))})}return e.jsxs("div",{children:[e.jsx(k,{type:"search",value:s,onChange:r=>a(r.target.value)}),e.jsx("div",{className:"flex flex-col",children:m.map(r=>e.jsxs("button",{onClick:()=>g(r.songId),children:[e.jsx("h3",{children:r.title}),e.jsx("p",{className:"text-xs text-gray-500",children:r.artist})]},r.songId))})]})}function oe({playlistId:t}){var l;const s=u.useRef(),a=()=>s.current.showModal(),n=()=>s.current.close();return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:(l=s.current)!=null&&l.open?n:a,type:"button",className:"p-2",children:"+ Add Song"}),e.jsx(_,{className:"p-5 bg-zinc-950",classNameTitle:"bg-transparent",title:"Link Song",ref:s,children:e.jsx(ie,{playlistId:t})})]})}function ce(){const s=J().playlistId,{data:a={},error:n,isLoading:l}=b(`/music/playlist/${s}`),{data:i={}}=b(p.playlistSongs+"/"+s);if(console.log({data:a,playlistSongsData:i}),l)return e.jsx(R,{});const{title:o}=a.data||{},c=i.data||[];return e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-sm text-gray-400",children:["Playlist: ",e.jsx("b",{className:"text-xl text-gray-100",children:o})," ",e.jsxs("span",{className:"text-xs",children:["(",s]}),")"]}),e.jsxs("ul",{className:"flex list-style-none",children:[e.jsx(E,{children:e.jsx(oe,{playlistId:s})}),e.jsx(E,{children:e.jsx(z,{playlistId:s})})]})]}),n&&e.jsx("pre",{className:"text-red-500",children:JSON.stringify(n,null,2)}),e.jsx("ul",{children:c.map(({songs:m})=>e.jsxs("li",{className:"flex justify-between p-2 px-3 m-1 bg-slate-900",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-12 h-12",src:V(m.musicbrainz.coverArt.thumbnails.small||m.musicbrainz.coverArt.thumbnails.large||m.musicbrainz.coverArt.image),alt:""}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-200",children:m.title})," ",e.jsx("p",{className:"text-xs text-gray-400 ",children:m.artist})]})]}),e.jsx("button",{children:e.jsx(I,{})})]},m.songId))})]})}function E({children:t}){return e.jsx("li",{className:"m-1 border border-gray-200/10 hover:border-gray-200/50",children:t})}function de(){var s,a;const{data:t}=b(p.publicSongs);return console.log({songData:t}),e.jsx("div",{children:e.jsx("ul",{children:Array.isArray((s=t==null?void 0:t.data)==null?void 0:s.songs)&&((a=t==null?void 0:t.data)==null?void 0:a.songs.map(n=>e.jsx(me,{song:n},n.id)))})})}function me({song:t={}}){const{title:s,coverArt:a={}}=t;return e.jsxs("li",{className:"flex items-center justify-between my-2 bg-zinc-900/40",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:a.image,height:40,width:40}),e.jsx("p",{className:"ml-1",children:s})]}),e.jsx("div",{children:e.jsx(xe,{songId:t.songId})})]})}function xe({songId:t}){const[s,a]=u.useState(!1);function n(l){l.preventDefault(),a(!0),v.delete(p.publicSongs+`/${t}`).then(()=>{A(p.publicSongs)}).finally(()=>{a(!1)})}return e.jsx("button",{disabled:s,onClick:n,className:"h-full m-2",children:e.jsx(I,{className:L("text-slate-200",{"animate-pulse":s})})})}const w=(t="")=>t.replace(/\s*\(.*?\)\s*/g,"").trim();async function ue(t,s){var a,n;try{const l=await he(t,s);if(l.data.recordings.length===0)throw new Error("No recordings found for the given artist and title.");const i=l.data.recordings[0],o=i.releases[0].id,c=await ge(o);return{default:{artist:i["artist-credit"][0].artist.name,title:i.title,album:i.releases[0].title,duration:i.length,releaseDate:i.releases[0].date,coverArt:((n=(a=c==null?void 0:c.data)==null?void 0:a.images)==null?void 0:n[0])||{},releaseID:o,recordingID:i.id},response:l,coverArtResponse:(c==null?void 0:c.data)||{}}}catch(l){console.error("Error fetching song info:",l)}}function he(t,s){return F.get("https://musicbrainz.org/ws/2/recording/",{params:{query:`artist:${t} AND recording:${s}`,fmt:"json",limit:5}})}function ge(t){return F.get(`https://coverartarchive.org/release/${t}`)}function fe(){const[t,s]=u.useState([]),[a,n]=u.useState(!1),[l,i]=u.useState([]),[o,c]=u.useState([]);function m(d){const r=d.target.files||[];n(!0),Q(()=>import("./mediaTags-a6038de0.js"),[]).then(async({readTags:x})=>{for(const f of r)try{await x(f).then(({title:h,artist:j,album:U,year:W,albumArt:$,bpm:B,genre:M})=>{const S={title:w(h),artist:w(j),album:w(U),year:W,albumArt:$,file:f,bpm:B,genre:M};ue(S.artist,S.title).then((N={})=>{S.musicBrainz=N.default}).catch(N=>console.error(N)).finally(()=>{s(N=>[...N,S])})})}catch(h){console.log("Failed for",h)}}).catch(x=>{console.log("failed to import readTags",x)}).finally(()=>{n(!1)})}function g(d){d.preventDefault(),Promise.all(t.map(async(r,x)=>{const f=new FormData;return f.append("meta",JSON.stringify({title:r.title,artist:r.artist,album:r.album,year:r.year,bpm:r.bpm,genre:r.genre,musicBrainz:r.musicBrainz})),f.append("file",r.file,r.file.name),i(h=>[...h,x]),v.post("/music/song",f,{headers:{"Content-Type":"multipart/form-data"}}).catch(h=>{var j;return{error:((j=h==null?void 0:h.response)==null?void 0:j.data)||h}}).finally(()=>{i(h=>h.filter(j=>j!==x))})})).then(r=>{const x=[];r.forEach((f,h)=>{f!=null&&f.error&&x.push(h)}),c(x)})}return e.jsxs("div",{className:"m-4 text-sm rounded-lg bg-neutral-600/40",children:[e.jsx("h1",{className:"p-4 text-lg font-bold text-neutral-300",children:"Upload Song"}),e.jsxs("form",{onSubmit:g,className:"flex flex-col items-center justify-center",children:[e.jsx("input",{type:"file",className:"my-4 text-xs text-center rounded-md bg-neutral-600 max-w-40",onChange:m,multiple:!0,accept:".mp3, .aac,.flac,.wav"}),e.jsx("ul",{className:"overflow-y-auto max-h-[400px] my-4",children:t.map((d,r)=>e.jsx(pe,{uploading:l.includes(r),hasError:o.includes(r),song:d},d.title))}),e.jsx(P,{disabled:a||!t.length||l.length,className:"m-2 mt-6 px-9",children:"Upload"})]})]})}function pe({song:t,uploading:s,hasError:a}){var c,m,g;const{artist:n,title:l,album:i,musicBrainz:o={}}=t;return e.jsxs("li",{className:L("flex m-2",{"bg-blue-800":s,"bg-red-800":a}),children:[e.jsx("img",{src:((m=(c=o==null?void 0:o.coverArt)==null?void 0:c.thumbnails)==null?void 0:m.small)||((g=o==null?void 0:o.coverArt)==null?void 0:g.image),className:"w-24 h-24"}),e.jsxs("div",{className:"ml-2 text-sm",children:[e.jsx("h5",{children:l}),e.jsx("h5",{className:"text-[9px] text-neutral-400",children:l}),e.jsx("h5",{className:"text-xs text-neutral-300",children:n}),e.jsx("h5",{className:"text-[9px] text-neutral-400",children:n}),e.jsx("h5",{className:"text-xs text-neutral-300",children:i}),e.jsx("h5",{className:"text-[9px] text-neutral-400",children:i})]})]},l)}function D({children:t,className:s,...a}){return e.jsx(Y,{className:({isActive:n,isPending:l})=>C("border-2 text-sm border-gray-700 font-normal text-slate-400 py-1 px-2 hover:bg-yellow-900/25 duration-150",n&&"bg-red-900/5 text-white font-bold",l&&"bg-gray-900",s),...a,children:t})}function Pe(){const{user:t}=G();return t!=null&&t.iam?e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-1 m-0 mb-2 sm:gap-0",children:[e.jsx(D,{to:"/settings/admin/uploader",children:"Uploader"}),e.jsx(D,{to:"/settings/admin/organizer",children:"Organizer"}),e.jsx(D,{to:"/settings/admin/playlists",children:"Playlists"})]}),e.jsxs(K,{children:[e.jsx(y,{index:!0,element:e.jsx("div",{className:"flex items-center justify-center w-full h-80",children:e.jsx("h1",{className:"text-2xl font-extrabold tracking-wider text-gray-300 uppercase",children:"Let`s Tweak the mood!"})})}),e.jsx(y,{path:"/uploader",Component:fe}),e.jsx(y,{path:"/organizer",Component:de}),e.jsxs(y,{path:"/playlists",children:[e.jsx(y,{Component:re,index:!0}),e.jsx(y,{Component:ce,path:":playlistId"})]})]})]}):e.jsx(X,{})}export{Pe as default};
