(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};e.d({},{V:()=>d});const o=window.wp.blocks,t=JSON.parse('{"UU":"block-development-examples/basic-block-translations-3df23d"}'),r=window.React,l=window.wp.i18n,n=window.wp.blockEditor,d={backgroundColor:"#900",color:"#fff",padding:"20px"},{UU:s}=t;(0,o.registerBlockType)(s,{edit:()=>{const e=(0,n.useBlockProps)({style:d});return(0,r.createElement)("div",{...e},(0,l.__)("Hello World!! (from the editor).","block-development-examples"))},save:()=>{const e=n.useBlockProps.save({style:d});return(0,r.createElement)("div",{...e},(0,l.__)("Hello World!! (from the frontend).","block-development-examples"))}})})();