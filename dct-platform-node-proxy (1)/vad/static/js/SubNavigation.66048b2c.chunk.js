(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[74],{1054:function(e,t,a){var n=a(306),o=a(235),i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=c.test(e);return a||s.test(e)?l(e.slice(2),a?2:8):r.test(e)?NaN:+e}},1056:function(e,t,a){"use strict";var n=a(16),o=a(100),i=a(3),r=a(0),c=(a(14),a(10)),s=a(38),l=a(1057),d=r.forwardRef((function(e,t){var a,o=e.classes,s=e.className,d=e.component,u=void 0===d?"li":d,m=e.disableGutters,p=void 0!==m&&m,b=e.ListItemClasses,f=e.role,v=void 0===f?"menuitem":f,g=e.selected,x=e.tabIndex,h=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==x?x:-1),r.createElement(l.a,Object(i.a)({button:!0,role:v,tabIndex:a,component:u,selected:g,disableGutters:p,classes:Object(i.a)({dense:o.dense},b),className:Object(c.a)(o.root,s,g&&o.selected,!p&&o.gutters),ref:t},h))}));t.a=Object(s.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},1057:function(e,t,a){"use strict";var n=a(3),o=a(16),i=a(0),r=(a(14),a(10)),c=a(38),s=a(598),l=a(988),d=a(117),u=a(993),m=a(70),p="undefined"===typeof window?i.useEffect:i.useLayoutEffect,b=i.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,b=e.autoFocus,f=void 0!==b&&b,v=e.button,g=void 0!==v&&v,x=e.children,h=e.classes,y=e.className,j=e.component,O=e.ContainerComponent,k=void 0===O?"li":O,N=e.ContainerProps,w=(N=void 0===N?{}:N).className,C=Object(o.a)(N,["className"]),S=e.dense,E=void 0!==S&&S,I=e.disabled,L=void 0!==I&&I,B=e.disableGutters,W=void 0!==B&&B,T=e.divider,M=void 0!==T&&T,R=e.focusVisibleClassName,z=e.selected,D=void 0!==z&&z,A=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),G=i.useContext(u.a),H={dense:E||G.dense||!1,alignItems:c},$=i.useRef(null);p((function(){f&&$.current&&$.current.focus()}),[f]);var V=i.Children.toArray(x),q=V.length&&Object(l.a)(V[V.length-1],["ListItemSecondaryAction"]),F=i.useCallback((function(e){$.current=m.findDOMNode(e)}),[]),P=Object(d.a)(F,t),Y=Object(n.a)({className:Object(r.a)(h.root,y,H.dense&&h.dense,!W&&h.gutters,M&&h.divider,L&&h.disabled,g&&h.button,"center"!==c&&h.alignItemsFlexStart,q&&h.secondaryAction,D&&h.selected),disabled:L},A),J=j||"li";return g&&(Y.component=j||"div",Y.focusVisibleClassName=Object(r.a)(h.focusVisible,R),J=s.a),q?(J=Y.component||j?J:"div","li"===k&&("li"===J?J="div":"li"===Y.component&&(Y.component="div")),i.createElement(u.a.Provider,{value:H},i.createElement(k,Object(n.a)({className:Object(r.a)(h.container,w),ref:P},C),i.createElement(J,Y,V),V.pop()))):i.createElement(u.a.Provider,{value:H},i.createElement(J,Object(n.a)({ref:P},Y),V))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},1269:function(e,t,a){var n=a(306),o=a(1270),i=a(1054),r=Math.max,c=Math.min;e.exports=function(e,t,a){var s,l,d,u,m,p,b=0,f=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var a=s,n=l;return s=l=void 0,b=t,u=e.apply(n,a)}function h(e){return b=e,m=setTimeout(j,t),f?x(e):u}function y(e){var a=e-p;return void 0===p||a>=t||a<0||v&&e-b>=d}function j(){var e=o();if(y(e))return O(e);m=setTimeout(j,function(e){var a=t-(e-p);return v?c(a,d-(e-b)):a}(e))}function O(e){return m=void 0,g&&s?x(e):(s=l=void 0,u)}function k(){var e=o(),a=y(e);if(s=arguments,l=this,p=e,a){if(void 0===m)return h(p);if(v)return clearTimeout(m),m=setTimeout(j,t),x(p)}return void 0===m&&(m=setTimeout(j,t)),u}return t=i(t)||0,n(a)&&(f=!!a.leading,d=(v="maxWait"in a)?r(i(a.maxWait)||0,t):d,g="trailing"in a?!!a.trailing:g),k.cancel=function(){void 0!==m&&clearTimeout(m),b=0,s=p=l=m=void 0},k.flush=function(){return void 0===m?u:O(o())},k}},1270:function(e,t,a){var n=a(112);e.exports=function(){return n.Date.now()}},1279:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(1337),r=a(930),c=a(6),s=a(847),l=Object(s.a)((function(e){var t;return{"@global":{".mobile-sticky-bottom":Object(c.a)({},e.breakpoints.down("md"),{bottom:e.spacing(-10),transition:"bottom 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms !important"}),".sticky":{position:"fixed",top:"0","&.mobile-sticky-bottom":(t={top:"inherit"},Object(c.a)(t,e.breakpoints.down("md"),{bottom:"0",transform:"none"}),Object(c.a)(t,e.breakpoints.up("lg"),{top:"0",bottom:"inherit"}),t),"&.header-added":Object(c.a)({transform:"translateY(".concat(e.spacing(10),")"),transition:"transform 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"},e.breakpoints.up("lg"),{transform:"translateY(".concat(e.spacing(16),")")}),"&.header-removed":{transform:"translateY(".concat(e.spacing(0),")"),transition:"transform 50ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}}})),d=a(1);t.a=function(e){var t=e.className,a=void 0===t?"":t,n=e.children,c=e.mobileBottomSticky,s=void 0===c||c,u=Object(r.a)("(max-width:".concat(d.b.values.md,"px)"));return l({mobileBottomSticky:s}),o.a.createElement(i.a,{component:"div",color:"secondary",className:"".concat(a," ").concat(u&&s&&"mobile-sticky-bottom"),id:"stickyBar",position:"static",elevation:"0"},n)}},1337:function(e,t,a){"use strict";var n=a(3),o=a(16),i=a(0),r=(a(14),a(10)),c=a(38),s=a(41),l=a(938),d=i.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,m=e.position,p=void 0===m?"fixed":m,b=Object(o.a)(e,["classes","className","color","position"]);return i.createElement(l.a,Object(n.a)({square:!0,component:"header",elevation:4,className:Object(r.a)(a.root,a["position".concat(Object(s.a)(p))],a["color".concat(Object(s.a)(u))],c,"fixed"===p&&"mui-fixed"),ref:t},b))}));t.a=Object(c.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},1532:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(3),o=a(16),i=a(0);function r(e,t){var a=t.disableHysteresis,n=void 0!==a&&a,o=t.threshold,i=void 0===o?100:o,r=t.target,c=e.current;return r&&(e.current=void 0!==r.pageYOffset?r.pageYOffset:r.scrollTop),!(!n&&void 0!==c&&e.current<c)&&e.current>i}var c="undefined"!==typeof window?window:null;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,a=void 0===t?r:t,s=e.target,l=void 0===s?c:s,d=Object(o.a)(e,["getTrigger","target"]),u=i.useRef(),m=i.useState((function(){return a(u,d)})),p=m[0],b=m[1];return i.useEffect((function(){var e=function(){b(a(u,Object(n.a)({target:l},d)))};return e(),l.addEventListener("scroll",e),function(){l.removeEventListener("scroll",e)}}),[l,a,JSON.stringify(d)]),p}},914:function(e,t,a){"use strict";a.r(t);var n=a(175),o=a(0),i=a.n(o),r=a(47),c=a(143),s=a(1269),l=a.n(s),d=a(45),u=a(930),m=a(1056),p=a(1339),b=a(1),f=a(1532),v=a(10),g=a(948),x=a(944),h=a(296),y=a(300),j=a(1279),O=a(99),k=a(48),N=a(299),w=a(947),C=a(231),S=a(232),E=a(297),I=a(954),L=a(4),B=a(6),W=a(847),T=a(53),M=Object(W.a)((function(e){var t,a;return{subNavigationWrap:(t={"-webkitBoxShadow":"0 8px 15px -6px ".concat(e.mixins.Black(200)),"-mozBoxShadow":"0 8px 15px -6px ".concat(e.mixins.Black(200)),boxShadow:"0 8px 15px -6px ".concat(e.mixins.Black(200))},Object(B.a)(t,e.breakpoints.down("md"),{position:"sticky",left:0,top:0,backgroundColor:e.mixins.White(),zIndex:1e3,transition:"top 300ms cubic-bezier(0, 0, 0.2, 1) 0ms","&.header-added":{top:e.spacing(10)}}),Object(B.a)(t,"& .hide",{visibility:"hidden"}),Object(B.a)(t,"& .remove",{display:"none"}),Object(B.a)(t,"&.sticky.ghostdiv-reached",{position:"static",transform:"none",transition:"none"}),t),subNavigationListWrap:{display:"flex",justifyContent:"space-between"},subNavigationList:Object(B.a)({listStyle:"none",display:"flex",padding:"0",margin:"0",position:"relative",overflow:"scroll"},e.breakpoints.up("lg"),{overflow:"inherit"}),subNavigationListItem:Object(L.a)(Object(L.a)({},e.mixins.paddingRight(e.spacing(4))),{},{flex:"1 0 auto","& .MuiTypography-root":(a={textDecoration:"none",display:"block",color:e.palette.text.tertiary,borderBottom:"4px solid ".concat(e.mixins.White()),paddingTop:Object(b.h)(14),paddingBottom:Object(b.h)(14)},Object(B.a)(a,e.breakpoints.up("lg"),{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginTop:Object(b.h)(2)}),Object(B.a)(a,"&.active, &:hover",{color:e.mixins.Black(),borderBottom:function(t){return t.contentType===T.l?"4px solid ".concat(e.mixins.ADCalendar()):"4px solid ".concat(e.mixins.AbuDhabiRed())}}),a)}),moreNavItemWrap:Object(B.a)({display:"none"},e.breakpoints.up("lg"),{display:"block",textAlign:e.mixins.textRight()}),moreItemButton:{height:"100%",borderBottom:"4px solid ".concat(e.mixins.White()),color:e.mixins.Black(),"&.active":{color:e.mixins.Black(),borderBottom:function(t){return t.contentType===T.l?"4px solid ".concat(e.mixins.ADCalendar()):"4px solid ".concat(e.mixins.AbuDhabiRed())}},"&:hover":{borderBottom:function(t){return t.contentType===T.l?"4px solid ".concat(e.mixins.ADCalendar()):"4px solid ".concat(e.mixins.AbuDhabiRed())},"& .MuiButton-label":{textDecoration:"none"}},"& .MuiButton-label::after":{content:"none"}},hideItem:{display:"none"},moreMenu:{"& .MuiMenu-paper":{borderRadius:"0",border:"1px solid ".concat(e.mixins.Grey(400)),"& .active":{color:e.mixins.Black()}},"& .MuiList-root":{padding:"0",maxHeight:Object(b.h)(210),minWidth:e.spacing(27)},"& .MuiListItem-root":{color:e.palette.text.tertiary,margin:"0 ".concat(Object(b.h)(16)),padding:0,"&:hover":{background:"none","& .MuiTypography-root":{color:e.mixins.Black()}},"& .MuiTypography-root":{borderBottom:"1px solid ".concat(e.mixins.Grey(400)),width:"100%",padding:"".concat(Object(b.h)(14)," 0"),textDecoration:"none"},"&:last-child .MuiTypography-root":{borderBottom:"none"}}}}}));t.default=Object(N.a)(Object(r.withSitecoreContext)()(Object(c.b)()((function(e){var t=e.fields,a=e.params,r=Object(o.useState)(void 0),c=Object(n.a)(r,2),s=c[0],N=c[1],L=Object(o.useRef)([]),B=Object(o.useRef)(null),W=t.customContentList,T=W&&W.filter((function(e){return e.includeInNavigation})),R=Object(I.a)(e).toLowerCase(),z=M({contentType:R}),D=Object(u.a)("(max-width:".concat(b.b.values.md,"px)")),A=Object(f.a)({threshold:10});function G(){if(B.current){B.current.classList.remove("remove"),B.current.classList.add("hide");var e,t=0,n=document.querySelector(".subNavigationListWrap").clientWidth,o=B.current.clientWidth;if(0===L.current.length){var i=document.querySelector(".subNavigationList").childNodes;e=Array.prototype.map.call(i,(function(e){return e.clientWidth})),L.current=e}else e=L.current;for(n-=o;t<e.length&&n>=e[t];t++)n-=e[t];t<parseInt(a.maxSubNavItems||100)?(N(t),t===e.length&&B.current.classList.add("remove")):e.length>parseInt(a.maxSubNavItems)?N(parseInt(a.maxSubNavItems)):B.current.classList.add("remove"),B.current.classList.remove("hide")}}var H=l()(G,50);Object(o.useEffect)((function(){if(k.a){if(!D)return window.addEventListener("resize",H),function(){return window.removeEventListener("resize",H)};var e=document.querySelector(".subNavigationList a.active");e&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}),[D]),Object(o.useEffect)((function(){setTimeout((function(){G()}),0)}),[]);var $=Object(o.useState)(null),V=Object(n.a)($,2),q=V[0],F=V[1],P=Object(o.useState)(!1),Y=Object(n.a)(P,2),J=Y[0],X=Y[1];if(Object(o.useEffect)((function(){if(J&&k.a)return window.addEventListener("scroll",U),function(){return window.removeEventListener("scroll",U)}}),[J]),!T||0===T.length)return null;var K=function(t,a,n,o){return i.a.createElement("li",{key:t,className:"item-".concat(t+1," ").concat(z.subNavigationListItem)},i.a.createElement(h.a,{"data-id":C.a.dataIds.topNavLinkClick,"data-link":Object(E.a)([Object(S.b)(e),Object(S.a)(e),a]),variant:"".concat(o?"body2Bold":"body2"),component:"a",href:n,className:"".concat(o?"active":"")},a))},Q=function(e){X(!0),F(e.currentTarget),setTimeout((function(){document.querySelector("body").removeAttribute("style"),document.querySelector("header").style.paddingRight=0}),0)},U=function(){X(!1),F(null)},Z=function(){return i.a.createElement(x.a,{className:z.root,"data-locator":"SubNavigation-GridBlock"},i.a.createElement(x.a,{container:!0,spacing:0,classes:{root:"".concat(z.root)},alignItems:"center","data-locator":"SubNavigation-GridContainer"},i.a.createElement(x.a,{item:!0,xs:12},i.a.createElement("div",{role:"navigation","aria-label":"sub-navigation",className:"subNavigationListWrap ".concat(z.subNavigationListWrap),"data-locator":"SubNavigation-List-Wrap"},i.a.createElement("ul",{className:"subNavigationList ".concat(z.subNavigationList),"data-locator":"SubNavigation-List"},T&&T.length>0&&T.map((function(e,t){var a=e||"",n=a.displayName,o=a.url,i=a.active;return D?n&&K(t,n,o,i):n&&(!s||t<s)&&K(t,n,o,i)}))),!D&&i.a.createElement("div",{className:Object(v.a)(z.moreNavItemWrap,"hide"),ref:B},i.a.createElement(y.a,{buttonType:"primary",isStartIcon:!0,hasBorder:!1,className:"".concat(z.moreItemButton," ").concat(J?"active":""),startIcon:i.a.createElement(O.a,{name:"MoreHorizIcon"}),onClick:Q,"aria-haspopup":"true"},i.a.createElement(h.a,{variant:"body2Bold",component:"span",className:z.moreTxt},Object(w.a)("moreLabel"))),i.a.createElement(p.a,{elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},anchorEl:q,keepMounted:!0,open:Boolean(q),onClose:U,className:z.moreMenu},T&&T.map((function(e,t){var a=e||"",n=a.displayName,o=a.url,r=a.active,c=t>=s;return!J&&c&&r&&X(!0),n&&c&&i.a.createElement(m.a,{key:t,className:"item-".concat(t)},i.a.createElement(h.a,{"data-id":Object(d.get)(C.a,"dataIds.topNavLinkClick"),"data-link":n,variant:"".concat(r?"body2Bold":"body2"),component:"a",href:o,className:"".concat(r?"active":"")},n))}))))))))};return D?i.a.createElement("div",{className:Object(v.a)(z.subNavigationWrap,!A&&"header-added"),"data-locator":"SubNavigation"},Z()):i.a.createElement(g.a,{"data-locator":"SubNavigation-Container"},i.a.createElement(j.a,{className:z.subNavigationWrap,"data-locator":"SubNavigation",mobileBottomSticky:!1},Z()),i.a.createElement("div",{id:"ghostDiv"}))}))))},944:function(e,t,a){"use strict";var n=a(959),o=a(6),i=a(4),r=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var l=a(302),d=a.n(l)()((function(e){return Object(i.a)(Object(i.a)({root:Object(o.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return r.forEach((function(n){var o=e.spacing(n);0!==o&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(s(o,2)),width:"calc(100% + ".concat(s(o),")"),"& > $item":{padding:s(o,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};c.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object.assign(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(n.a);t.a=d},947:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(102),o=function(e){return n.a.t&&n.a.t(e)||""}},948:function(e,t,a){"use strict";var n=a(6),o=a(109),i=a(0),r=a.n(i),c=a(10),s=a(38),l=a(145),d=a.n(l),u=a(4),m=r.a.forwardRef((function(e,t){var a,i=e.classes,s=e.className,l=void 0===s?"":s,u=e.component,m=void 0===u?"div":u,p=e.fixed,b=void 0!==p&&p,f=e.maxWidth,v=void 0===f?"xl":f,g=e.useContainer,x=void 0===g||g,h=e.overflowHidden,y=void 0!==h&&h,j=Object(o.a)(e,["classes","className","component","fixed","maxWidth","useContainer","overflowHidden"]),O=r.a.createElement(m,Object.assign({className:Object(c.a)(i.root,(a={},Object(n.a)(a,i.fixed,b),Object(n.a)(a,i["maxWidth".concat(d()(String(v)))],!1!==v),a),l),ref:t},j));return x?r.a.createElement("section",{className:Object(c.a)(i.root,Object(n.a)({},i.overflowHidden,y))},O):e.children}));t.a=Object(s.a)((function(e){return Object(u.a)(Object(u.a)({root:{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:"0",paddingRight:"0"}},{}),{},{fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:"100%"}),overflowHidden:{overflow:"hidden"}})}),{name:"MuiContainer"})(m)},954:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(33),o=a.n(n),i=function(e){return o()(e,"sitecoreContext.route.fields.contentType.fields.taxonomyKey.value","")}}}]);
//# sourceMappingURL=SubNavigation.66048b2c.chunk.js.map