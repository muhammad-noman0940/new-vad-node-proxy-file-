(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[32],{1028:function(e,t,a){"use strict";var n=a(3),r=a(16),c=a(0),o=(a(14),a(10)),i=a(38),l=a(600),s=Object(l.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=c.forwardRef((function(e,t){var a=e.alt,i=e.children,l=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,p=e.imgProps,g=e.sizes,b=e.src,h=e.srcSet,f=e.variant,v=void 0===f?"circle":f,x=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,y=function(e){var t=e.src,a=e.srcSet,n=c.useState(!1),r=n[0],o=n[1];return c.useEffect((function(){if(t||a){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,a]),r}({src:b,srcSet:h}),O=b||h,k=O&&"error"!==y;return j=k?c.createElement("img",Object(n.a)({alt:a,src:b,srcSet:h,sizes:g,className:l.img},p)):null!=i?i:O&&a?a[0]:c.createElement(s,{className:l.fallback}),c.createElement(u,Object(n.a)({className:Object(o.a)(l.root,l.system,l[v],d,!k&&l.colorDefault),ref:t},x),j)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},1081:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1222),o=a(47),i=a(847),l=a(1),s=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.action.disabledBackground,borderRadius:Object(l.h)(3),color:e.palette.common.SeaPort,marginTop:e.spacing(1),textTransform:"uppercase"},chipRoot:{display:"inline-flex",height:e.spacing(4),alignItems:"center",justifyContent:"center"},chipLabel:{paddingLeft:Object(l.h)(12),paddingRight:Object(l.h)(12),whiteSpace:"nowrap"}}})),d=a(296),m=a(947),u=a(53),p=function(e){var t=e.className,a=e.text,n=e.isClickable,i=e.isAuthorable,l=e.language,p=e.attributeFilter,g=e.analyticsData||"",b=g.dataId,h=g.dataLink,f=e.link;f&&"#"!==f||(f="");var v=s(),x={value:a};return i?r.a.createElement("div",{className:"".concat(v.root," ").concat(t," ").concat(v.chipRoot)},r.a.createElement("span",{className:v.chipLabel},r.a.createElement(d.a,{variant:"labelBlack",component:"span"},r.a.createElement(o.Text,{field:x})))):r.a.createElement(r.a.Fragment,null,n?r.a.createElement(c.a,{"data-id":b,"data-link":h,label:r.a.createElement(d.a,{variant:"labelBlack",component:"span"},a),component:"a",href:f||function(){var e,t=Object(m.a)("attributeListingPageUrl");return p&&(e="/".concat(l).concat(t,"?").concat(u.H,"=").concat(p)),e}(),classes:{root:"".concat(v.root," ").concat(t)},clickable:!0}):r.a.createElement(c.a,{component:"div",label:r.a.createElement(d.a,{variant:"labelBlack",component:"span"},a),classes:{root:"".concat(v.root," ").concat(t)}}))};p.defaultProps={className:"",link:"#",isAuthorable:!1,isClickable:!1};t.a=p},1094:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(175),r=a(33),c=a.n(r),o=a(954),i=a(947),l=a(53),s=function(e){var t=[],a=Object(o.a)(e),r=Object(i.a)("".concat(a,"DetailTags")),l=r&&r.length>0&&r.split(",");return l&&l.length>0&&l.forEach((function(a){var r=a&&a.length>0&&a.split("-"),o=Object(n.a)(r,2),i=o[0],l=o[1];t=t.concat(m(c()(e,"sitecoreContext.route.fields.".concat(i),[]),l,i))})),t},d=function(e){var t,a;return(t=e.fields.taxonomyValue.value.split("|"))&&t.length>1?(a=t[1])&&" "!==a||(a=t[0]):a=t,a={text:a,link:e.fields.searchKey.value}},m=function(e,t,a){var n=[];return e&&e.length>0&&e.forEach((function(e,r){t>r&&e&&e.fields&&e.fields.taxonomyValue&&e.fields.taxonomyValue.value&&e.fields.searchKey&&e.fields.searchKey.value&&((a&&a.toLowerCase())===l.B?n.push(d(e)):n.push({text:e.fields.taxonomyValue.value,link:e.fields.searchKey.value}))})),n}},1222:function(e,t,a){"use strict";var n=a(3),r=a(16),c=a(0),o=(a(14),a(10)),i=a(600),l=Object(i.a)(c.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a(38),d=a(59),m=a(117),u=a(41),p=a(598);function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=c.forwardRef((function(e,t){var a=e.avatar,i=e.classes,s=e.className,d=e.clickable,b=e.color,h=void 0===b?"default":b,f=e.component,v=e.deleteIcon,x=e.disabled,j=void 0!==x&&x,y=e.icon,O=e.label,k=e.onClick,C=e.onDelete,E=e.onKeyDown,T=e.onKeyUp,w=e.size,S=void 0===w?"medium":w,N=e.variant,I=void 0===N?"default":N,L=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=c.useRef(null),W=Object(m.a)(R,t),D=function(e){e.stopPropagation(),C&&C(e)},B=!(!1===d||!k)||d,M="small"===S,H=f||(B?p.a:"div"),$=H===p.a?{component:"div"}:{},z=null;if(C){var P=Object(o.a)("default"!==h&&("default"===I?i["deleteIconColor".concat(Object(u.a)(h))]:i["deleteIconOutlinedColor".concat(Object(u.a)(h))]),M&&i.deleteIconSmall);z=v&&c.isValidElement(v)?c.cloneElement(v,{className:Object(o.a)(v.props.className,i.deleteIcon,P),onClick:D}):c.createElement(l,{className:Object(o.a)(i.deleteIcon,P),onClick:D})}var A=null;a&&c.isValidElement(a)&&(A=c.cloneElement(a,{className:Object(o.a)(i.avatar,a.props.className,M&&i.avatarSmall,"default"!==h&&i["avatarColor".concat(Object(u.a)(h))])}));var F=null;return y&&c.isValidElement(y)&&(F=c.cloneElement(y,{className:Object(o.a)(i.icon,y.props.className,M&&i.iconSmall,"default"!==h&&i["iconColor".concat(Object(u.a)(h))])})),c.createElement(H,Object(n.a)({role:B||C?"button":void 0,className:Object(o.a)(i.root,s,"default"!==h&&[i["color".concat(Object(u.a)(h))],B&&i["clickableColor".concat(Object(u.a)(h))],C&&i["deletableColor".concat(Object(u.a)(h))]],"default"!==I&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[h]],j&&i.disabled,M&&i.sizeSmall,B&&i.clickable,C&&i.deletable),"aria-disabled":!!j||void 0,tabIndex:B||C?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),E&&E(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&g(e)?C(e):"Escape"===e.key&&R.current&&R.current.blur()),T&&T(e)},ref:W},$,L),A||F,c.createElement("span",{className:Object(o.a)(i.label,M&&i.labelSmall)},O),z)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},860:function(e,t,a){"use strict";a.r(t),a.d(t,"DetailedDescription",(function(){return R}));var n=a(175),r=a(0),c=a.n(r),o=a(143),i=a(33),l=a.n(i),s=a(47),d=a(997),m=a(10),u=a(944),p=a(948),g=a(296),b=a(1081),h=a(968),f=a(946),v=a(954),x=a(1094),j=a(947),y=a(978),O=a(232),k=a(231),C=a(53),E=a(6),T=a(4),w=a(847),S=a(1),N=Object(w.a)((function(e){var t,a,n,r;return{root:Object(T.a)(Object(T.a)({},e.shape.componentSpacing),{},(t={},Object(E.a)(t,e.breakpoints.up("lg"),{marginBottom:e.spacing(6)}),Object(E.a)(t,"& h4",Object(E.a)({marginBottom:e.spacing(3)},e.breakpoints.up("lg"),Object(T.a)({},e.mixins.marginLeft(Object(S.h)(-16))))),Object(E.a)(t,"& svg",Object(T.a)({width:e.spacing(4),height:e.spacing(4)},e.mixins.paddingRight(0))),t)),richTextOverride:{color:e.palette.text.darkGrey,marginBottom:e.spacing(2),"&.richText p":Object(T.a)(Object(T.a)({},e.typography.body1),{},{marginTop:"0",marginBottom:e.spacing(2)})},highLightHeading:(a={marginTop:e.spacing(4)},Object(E.a)(a,e.breakpoints.up("lg"),{marginTop:e.spacing(6)}),Object(E.a)(a,"& .heading-text",{marginTop:e.spacing(5),marginLeft:0,marginRight:0}),a),categoryTags:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap","& span":{background:function(e){var t=e.EVENTS_TAG_THEME_COLOR;return e.contentType===C.l&&t},color:function(t){return t.contentType===C.l&&e.mixins.White()},borderRadius:function(e){return e.contentType===C.l&&Object(S.h)(3)}},"& .MuiChip-root":Object(T.a)(Object(T.a)({},e.mixins.marginRight(Object(S.h)(10))),{},Object(E.a)({},e.breakpoints.up("lg"),Object(T.a)({},e.mixins.marginRight(Object(S.h)(20)))))},iconWrapper:Object(T.a)(Object(T.a)({marginTop:e.spacing(5)},e.mixins.paddingRight(e.spacing(3))),{},Object(E.a)({"& .MuiAvatar-root":{marginRight:e.spacing(2)}},e.breakpoints.down("md"),{transform:"none",marginTop:e.spacing(2)})),iconText:{display:"flex",flexDirection:"column"},tagContainer:(n={overflow:"hidden",maxHeight:e.spacing(10),transition:"max-height 0.4s ease-in-out"},Object(E.a)(n,e.breakpoints.up("lg"),{maxHeight:"40px"}),Object(E.a)(n,"&.showContent",{maxHeight:e.spacing(50)}),n),toggleIcon:Object(T.a)(Object(T.a)({},e.typography.body2Bold),{},(r={position:"relative",color:e.mixins.AbuDhabiRed(),cursor:"pointer",display:"inline-block",marginTop:Object(S.h)(28)},Object(E.a)(r,e.breakpoints.up("lg"),{marginTop:Object(S.h)(34)}),Object(E.a)(r,"&:after",Object(T.a)({content:"''",position:"absolute",border:"solid ".concat(e.mixins.AbuDhabiRed()),width:Object(S.h)(10),height:Object(S.h)(10),borderWidth:"0 2px 2px 0",transform:"rotate(45deg)",top:"calc(50% - ".concat(Object(S.h)(7),")")},e.mixins.right(Object(S.h)(-24)))),Object(E.a)(r,"&.less",{"&:after":{top:"calc(50% - ".concat(Object(S.h)(1.5),")"),transform:"rotate(227deg)"}}),r))}})),I=a(955),L=a(48),R=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),o=a[0],i=a[1],E=Object(r.useState)(!1),T=Object(n.a)(E,2),w=T[0],S=T[1];Object(r.useEffect)((function(){if(L.a){var e=document.querySelector(".tagContainer .categoryTags"),t=window.matchMedia("(max-width: 767px)"),a=e&&e.offsetHeight;(!t.matches&&a>42||t.matches&&a>82)&&S(!0)}}),[w]);var R=Object(v.a)(e).toLowerCase(),W=l()(e,"sitecoreContext.route.fields.pageHeading.value","")?l()(e,"sitecoreContext.route.fields.pageHeading.value",""):l()(e,"sitecoreContext.route.fields.name.value",""),D=Object(y.a)(e);D=D&&D.toLowerCase();var B=N({EVENTS_TAG_THEME_COLOR:C.i,contentType:R}),M=l()(e,"sitecoreContext.route",""),H=M&&M.fields||"",$=H.description,z=H.highlights,P=H.subTitle,A=R===C.l?P:$,F=l()(e,"sitecoreContext.route.fields.genericTags",[]),K=Object(j.a)("".concat(Object(v.a)(e)).concat(C.p));K==="".concat(Object(v.a)(e)).concat(C.p)&&(K=Object(j.a)(C.p));var V=function(){return c.a.createElement(g.a,{variant:"h4",component:"h2",className:"heading-text"},c.a.createElement(s.Text,{field:{value:K}}))},G=function(t){return"".concat(Object(O.b)(e)," | ").concat(Object(O.a)(e)," | ").concat(W," - ").concat(t)},_=R===C.l?function(){var t=[],a=Object(j.a)("".concat(Object(v.a)(e),"DetailTags")),n=a&&a.split(",");return n&&n.length>0&&n.forEach((function(a){var n=l()(e,"sitecoreContext.route.fields.".concat(a,"[0].fields.taxonomyValue.value"),""),r=l()(e,"sitecoreContext.route.fields.".concat(a,"[0].fields.searchKey.value"),"");n&&r&&t.push({text:n,link:r})})),t}():Object(x.a)(e),U=function(e){return c.a.createElement(h.a,{iconImage:l()(e,"highlightType.fields.icon",""),iconWithCircle:!1,className:Object(m.a)(B.iconWrapper,"hightlight-icon"),variant:"square"},c.a.createElement(f.a,null,c.a.createElement(g.a,{variant:"body1",component:"p"},c.a.createElement(s.Text,{field:{value:l()(e,"text.value","")}}))))};return c.a.createElement(p.a,{className:Object(m.a)(B.root,"DetailedDescription"),"data-locator":"DetailedDescription"},c.a.createElement(u.a,null,c.a.createElement("div",null,A&&A.value&&c.a.createElement(g.a,{variant:"body1",component:"p"},c.a.createElement(I.a,{innerHTML:A,className:B.richTextOverride}))),c.a.createElement("div",{className:Object(m.a)(B.tagContainer,"tagContainer")},c.a.createElement("div",{className:"categoryTags"},_&&_.length>0&&c.a.createElement(g.a,{component:"div",className:B.categoryTags},_.map((function(e,t){return c.a.createElement(b.a,{text:e.text,key:t,isClickable:!0,language:D,attributeFilter:e.link,analyticsData:(a=e.text,{dataId:k.a.dataIds.pageBodyNavLinkClick,dataLink:G(a)})});var a}))),F&&F.length>0&&c.a.createElement(g.a,{component:"div",className:B.categoryTags},F.map((function(e,t){return c.a.createElement(b.a,{text:l()(e,"fields.taxonomyValue.value"),key:t,isClickable:!1,language:D})}))))),w&&c.a.createElement("span",{className:Object(m.a)(B.toggleIcon,"toggleIcon"),onClick:function(e){if(i(!o),L.a){var t=document.querySelector(".tagContainer");t&&t.classList.contains("showContent")?(e.target.classList.remove("less"),t.classList.remove("showContent")):(e.target.classList.add("less"),t&&t.classList.add("showContent"))}}},o?Object(j.a)("viewLessTags"):Object(j.a)("viewMoreTags")),c.a.createElement("div",null,v.a!==C.l&&z&&z.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{lgUp:!0,implementation:"css"},c.a.createElement("div",{className:B.highLightHeading},K&&V()),z.map((function(e){return U(e.fields)}))),c.a.createElement(d.a,{mdDown:!0,implementation:"css"},c.a.createElement(u.a,{container:!0,lg:12,className:B.highLightHeading},K&&c.a.createElement(u.a,{item:!0,lg:3},V()),c.a.createElement(u.a,{item:!0,container:!0,lg:9,className:B.highLightList},z.slice(0,6).map((function(e,t){return c.a.createElement(u.a,{item:!0,container:!0,lg:4,key:t},U(e.fields))})))))))))};t.default=Object(s.withSitecoreContext)()(Object(o.b)()(R))},944:function(e,t,a){"use strict";var n=a(959),r=a(6),c=a(4),o=[0,1,2,3,4,5,6,7,8,9,10],i=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var s=a(302),d=a.n(s)()((function(e){return Object(c.a)(Object(c.a)({root:Object(r.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return o.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(l(r,2)),width:"calc(100% + ".concat(l(r),")"),"& > $item":{padding:l(r,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};i.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object.assign(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(n.a);t.a=d},946:function(e,t,a){"use strict";var n=a(553),r=a(51),c=a(212),o=a(554),i=a(213),l=a(216),s=a(215),d=a(555),m=a(217),u=a(220),p=a(218),g=a(931),b=Object(n.a)(Object(r.a)(c.h,o.a,i.d,l.b,s.c,d.a,m.b,u.b,p.a)),h=Object(g.a)("div")(b,{name:"MuiBox"});t.a=h},947:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(102),r=function(e){return n.a.t&&n.a.t(e)||""}},948:function(e,t,a){"use strict";var n=a(6),r=a(109),c=a(0),o=a.n(c),i=a(10),l=a(38),s=a(145),d=a.n(s),m=a(4),u=o.a.forwardRef((function(e,t){var a,c=e.classes,l=e.className,s=void 0===l?"":l,m=e.component,u=void 0===m?"div":m,p=e.fixed,g=void 0!==p&&p,b=e.maxWidth,h=void 0===b?"xl":b,f=e.useContainer,v=void 0===f||f,x=e.overflowHidden,j=void 0!==x&&x,y=Object(r.a)(e,["classes","className","component","fixed","maxWidth","useContainer","overflowHidden"]),O=o.a.createElement(u,Object.assign({className:Object(i.a)(c.root,(a={},Object(n.a)(a,c.fixed,g),Object(n.a)(a,c["maxWidth".concat(d()(String(h)))],!1!==h),a),s),ref:t},y));return v?o.a.createElement("section",{className:Object(i.a)(c.root,Object(n.a)({},c.overflowHidden,j))},O):e.children}));t.a=Object(l.a)((function(e){return Object(m.a)(Object(m.a)({root:{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:"0",paddingRight:"0"}},{}),{},{fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:"100%"}),overflowHidden:{overflow:"hidden"}})}),{name:"MuiContainer"})(u)},953:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.replace(/\\/g,"")}},954:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(33),r=a.n(n),c=function(e){return r()(e,"sitecoreContext.route.fields.contentType.fields.taxonomyKey.value","")}},955:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(953),o=a(47),i=a(118),l=a(10),s=a(4),d=a(847),m=a(1),u=Object(d.a)((function(e){return{richTextWrap:{"& h1":Object(s.a)(Object(s.a)({},e.typography.h1),{},{marginTop:Object(m.h)(32),marginBottom:Object(m.h)(32)}),"& h2":Object(s.a)(Object(s.a)({},e.typography.h2),{},{marginTop:Object(m.h)(32),marginBottom:Object(m.h)(32)}),"& h3":Object(s.a)(Object(s.a)({},e.typography.h3),{},{marginTop:Object(m.h)(32),marginBottom:Object(m.h)(32)}),"& h4":Object(s.a)(Object(s.a)({},e.typography.h4),{},{marginTop:Object(m.h)(32),marginBottom:Object(m.h)(32)}),"& h5":Object(s.a)(Object(s.a)({},e.typography.h5),{},{marginBottom:Object(m.h)(16)}),"& h6":Object(s.a)(Object(s.a)({},e.typography.body1Regular),{},{marginBottom:Object(m.h)(16)}),"& p":Object(s.a)(Object(s.a)({},e.typography.body1),{},{color:e.palette.text.darkGrey,margin:"0 0 ".concat(e.spacing(2))}),"& ul":{color:e.palette.text.darkGrey},"& ol":{color:e.palette.text.darkGrey},"& a":Object(s.a)(Object(s.a)({},e.typography.body1),{},{color:e.palette.common.AbuDhabiRed}),"& strong, & b":{fontFamily:e.typography.fontFamily.primaryBold}}}}));t.a=function(e){var t=e.innerHTML,a=e.className,n=u(),s=Object(i.isExperienceEditorActive)(),d=t&&t.value&&t.value.replace(/\s*style=(["'])(.*?)\1/g,"");return s?r.a.createElement(o.RichText,{className:Object(l.a)(n.richTextWrap,a||"","richText","richTextSitecore"),field:t}):t&&t.value?r.a.createElement("div",{className:"".concat(n.richTextWrap," ").concat(a||""," richText"),dangerouslySetInnerHTML:{__html:Object(c.a)(d)}}):null}},962:function(e,t,a){"use strict";var n=a(109),r=a(0),c=a.n(r),o=a(1028);t.a=function(e){var t=e.className,a=e.children,r=Object(n.a)(e,["className","children"]);return c.a.createElement(o.a,Object.assign({className:t},r),a)}},968:function(e,t,a){"use strict";var n=a(109),r=a(0),c=a.n(r),o=a(10),i=a(33),l=a.n(i),s=a(946),d=a(962),m=a(301),u=a(99),p=a(4),g=a(847),b=a(1),h=Object(g.a)((function(e){return{"@global":{".hightlight-icon":{"& img":{width:"inherit",maxWidth:"100%",objectFit:"contain"},"& .MuiAvatar-root":{width:"auto",height:"auto"}}},root:{display:"flex",alignItems:"center",transform:function(e){return!e&&"translateX(-10px)"}},textThenIcon:{"& .MuiAvatar-root":Object(p.a)(Object(p.a)({},e.mixins.marginLeft(Object(b.h)(10))),{},{background:function(e){return!e&&"transparent"}})},iconThenText:{"& .MuiAvatar-root":Object(p.a)(Object(p.a)({},e.mixins.marginRight(Object(b.h)(10))),{},{background:function(e){return!e&&"transparent"}})}}})),f=function(e){var t=e.className,a=e.iconType,r=void 0===a?"FallbackCheckIcon":a,i=e.avatarClassName,p=e.children,g=e.isTextThenIcon,b=e.iconWithCircle,f=e.iconImage,v=e.isAnimate,x=Object(n.a)(e,["className","iconType","avatarClassName","children","isTextThenIcon","iconWithCircle","iconImage","isAnimate"]),j=h(b);return g?c.a.createElement(s.a,{className:Object(o.a)(j.root,j.textThenIcon,t)},p,c.a.createElement(d.a,Object.assign({className:i},x),l()(f,"value.src","").length>1?c.a.createElement(m.a,{media:{image:f,mobileImage:f,renditionNeeded:!1,fallbackBackgroundNeeded:!1},isParalax:!1}):v?c.a.createElement("span",{className:"animateIcon"},c.a.createElement(u.a,{name:r})):c.a.createElement(u.a,{name:r}))):c.a.createElement(s.a,{className:Object(o.a)(j.root,j.iconThenText,t)},c.a.createElement(d.a,Object.assign({className:i},x),l()(f,"value.src","").length>1?c.a.createElement(m.a,{media:{image:f,mobileImage:f,renditionNeeded:!1,fallbackBackgroundNeeded:!1},isParalax:!1}):v?c.a.createElement("span",{className:"animateIcon"},c.a.createElement(u.a,{name:r})):c.a.createElement(u.a,{name:r})),p)};f.defaultTypes={className:"",isTextThenIcon:!1,iconWithCircle:!0,isAnimate:!1,iconImage:""};t.a=f},978:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(33),r=a.n(n),c=function(e){return r()(e,"sitecoreContext.language","")}}}]);
//# sourceMappingURL=DetailedDescription.a1e983f3.chunk.js.map