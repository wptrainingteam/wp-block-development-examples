import*as e from"@wordpress/interactivity";var r={438:e=>{e.exports=import("@wordpress/interactivity-router")}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);const i=(s={store:()=>e.store},n={},o.d(n,s),n),{state:a}=(0,i.store)("router-2f43f8",{state:{urlRegionDisplay:window.location.href},actions:{*navigate(e){e.preventDefault();const{actions:r}=yield Promise.resolve().then(o.bind(o,438));a.urlRegionDisplay=e.target.href,yield r.navigate(e.target.href)}}});var s,n;