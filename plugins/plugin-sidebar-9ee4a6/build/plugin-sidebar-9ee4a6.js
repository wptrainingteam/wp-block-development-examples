!function(){"use strict";var e=window.React,n=window.wp.plugins,t=window.wp.editPost,l=window.wp.components,i=window.wp.coreData;const o=()=>{const[n,t]=(0,i.useEntityProp)("postType","post","meta");return(0,e.createElement)(l.PanelBody,null,(0,e.createElement)(l.TextControl,{label:"Meta Block Field",value:n?.sidebar_plugin_meta_block_field||"",onChange:e=>t({...n,sidebar_plugin_meta_block_field:e})}))};(0,n.registerPlugin)("plugin-sidebar-9ee4a6",{render:()=>(0,e.createElement)(t.PluginSidebar,null,(0,e.createElement)(o,null))})}();