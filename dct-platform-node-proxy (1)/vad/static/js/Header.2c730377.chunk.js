(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[47],{1267:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(321),i=function(e){return{type:n.a,payload:e}}},1268:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(144),i=Object(n.a)((function(e){return e}),(function(e){return e.SearchDataReducer}))},873:function(e,t,a){"use strict";a.r(t),a.d(t,"mapDispatchToProps",(function(){return $})),a.d(t,"mapStateToProps",(function(){return Q})),a.d(t,"HeaderComponentTest",(function(){return V}));var n=a(175),i=a(4),o=a(0),r=a.n(o),c=a(47),s=a(143),l=a(118),d=a(144),p=a(304),m=a(1532),u=a(1219),g=a(1337),b=a(1541),f=a(1336),h=a(1057),x=a(99),v=a(951),O=a(48),j=a(948),w=a(944),k=a(296),C=a(176),E=a(300),y=a(14),L=a.n(y),B=a(1554),S=a(1266),N=a(6),I=a(847),W=a(1),R=Object(I.a)((function(e){return{languageSelectorBtn:Object(i.a)(Object(i.a)({cursor:"pointer",flexGrow:1,display:"flex",position:"relative",border:"2px solid",borderRadius:e.spacing(3),transition:"background-color 0.3s ease-in-out",padding:"".concat(Object(W.h)(10)," ").concat(e.spacing(3))},e.mixins.paddingLeft(e.spacing(6))),{},{"& svg":Object(i.a)({position:"absolute",top:"calc(50% - ".concat(e.spacing(1.5),")")},e.mixins.left(e.spacing(2))),"&:hover":{backgroundColor:e.mixins.Black(200)}}),languageSelector:{marginTop:e.spacing(2),boxShadow:e.shadows[1],borderRadius:0,backgroundColor:e.mixins.White(),padding:"".concat(e.spacing(4)," 0"),display:"flex",width:"100%","& .MuiList-padding":{padding:0,width:Object(W.h)(300)},"& li":{cursor:"pointer",padding:0,"& a":Object(N.a)({width:"100%",textAlign:e.mixins.textLeft(),padding:"".concat(e.spacing(2)," ").concat(e.spacing(5))},e.breakpoints.up("lg"),{display:"flex",alignItems:"center","& span":Object(i.a)({},e.mixins.paddingRight(e.spacing(4)))}),"&.selected":{backgroundColor:e.mixins.Black(30),position:"relative"},"& svg":Object(i.a)(Object(i.a)({},e.mixins.right(Object(W.h)(40))),{},{position:"absolute"}),"&:hover":{backgroundColor:e.mixins.Black(30)}}},"@global":{"#language-selector-popup":{zIndex:1400}}}})),M=function(e){var t=R(),a=Object(o.useState)(null),i=Object(n.a)(a,2),c=i[0],s=i[1],l=e.optionList,d=e.selectedLanguage,p=e.handleChangeEvent,m=r.a.useState(null),u=Object(n.a)(m,2),g=u[0],b=u[1],v=Boolean(g),O=v?"language-selector-popup":void 0,j=l&&l.length;return Object(o.useEffect)((function(){s(window.location.origin.toString())})),r.a.createElement("div",{className:"language-selector-wrapper"},r.a.createElement("div",{"aria-describedby":O,className:t.languageSelectorBtn,onClick:function(e){b(g?null:e.currentTarget)}},r.a.createElement(k.a,{variant:"body2Bold",component:"span"},r.a.createElement(x.a,{name:"Language"}),d)),r.a.createElement(B.a,{id:O,open:v,anchorEl:g,placement:"bottom-end",transition:"true"},r.a.createElement(S.a,{onClickAway:function(){b(!1)}},r.a.createElement("div",{className:t.languageSelector},r.a.createElement(f.a,{component:"ul",role:"list","aria-label":"main navigation"},j>0&&l.slice(0,4).map((function(e){return r.a.createElement(h.a,{key:e.value,classes:{root:e&&e.selected?"selected":""}},r.a.createElement(C.a,{customHref:c+"/"+e.value,isCustom:!0,onClick:p(e&&e.value,e&&e.code)},r.a.createElement(k.a,{variant:"subTitleBold",component:"span"},e&&e.nativeName),e&&e.selected&&r.a.createElement(x.a,{name:"CheckIcon"})))}))),j>4&&r.a.createElement(f.a,{component:"ul",role:"list","aria-label":"main navigation"},l.slice(4).map((function(e){return r.a.createElement(h.a,Object.assign({key:e.value},e,{classes:{root:e&&e.selected?"selected":""}}),r.a.createElement(C.a,{customHref:c+"/"+e.value,isCustom:!0,onClick:p(e&&e.value,e&&e.code)},r.a.createElement(k.a,{variant:"subTitleBold",component:"span"},e&&e.nativeName),e&&e.selected&&r.a.createElement(x.a,{name:"CheckIcon"})))})))))))};M.prototype={optionList:L.a.shape([{value:L.a.string,label:L.a.string}]).isRequired,selectedLanguage:L.a.string.isRequired,handleChangeEvent:L.a.func},M.defaultProps={optionList:[{value:"",label:""}],selectedLanguage:"",handleChangeEvent:function(){}};var T=M,D=a(930),H=r.a.createElement("svg",{width:"22px",height:"16px",viewBox:"0 0 22 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},r.a.createElement("title",null,"Combined Shape@1.5x"),r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"02_Components/01_Global/Nav/Mobile/Transparent",transform:"translate(-324.000000, -34.000000)",fill:"#000000",fillRule:"nonzero"},r.a.createElement("g",{id:"Header",transform:"translate(24.000000, 18.000000)"},r.a.createElement("g",{id:"Misc-/-BurgerMenu-/-Static",transform:"translate(295.000000, 8.000000)"},r.a.createElement("g",{id:"Icons-/-Functional-/-icon-burger-menu"},r.a.createElement("g",null,r.a.createElement("g",{transform:"translate(16.000000, 16.000000) scale(-1, 1) translate(-16.000000, -16.000000) "},r.a.createElement("path",{d:"M25.1559311,21.969498 C25.722291,21.969498 26.1805032,22.4236892 26.1805032,22.984749 C26.1805032,23.5458088 25.722291,24 25.1289615,24 L6.35817512,24 C5.79181519,24 5.33333333,23.5458088 5.33333333,22.984749 C5.33333333,22.4236892 5.79181519,21.969498 6.35817512,21.969498 L25.1559311,21.969498 Z M21.3093229,14.8722825 C21.7657797,14.8722825 22.1350751,15.3264738 22.1350751,15.8875335 C22.1350751,16.4485933 21.7657797,16.9027846 21.2875868,16.9027846 L6.15930286,16.9027846 C5.70284602,16.9027846 5.33333333,16.4485933 5.33333333,15.8875335 C5.33333333,15.3264738 5.70284602,14.8722825 6.15930286,14.8722825 L21.3093229,14.8722825 Z M25.1559311,8 C25.722291,8 26.1805032,8.45419125 26.1805032,9.01525102 C26.1805032,9.5763108 25.722291,10.030502 25.1289615,10.030502 L6.35817512,10.030502 C5.79181519,10.030502 5.33333333,9.5763108 5.33333333,9.01525102 C5.33333333,8.45419125 5.79181519,8 6.35817512,8 L25.1559311,8 Z"}))))))))),F=r.a.createElement("svg",{width:"22px",height:"16px",viewBox:"0 0 22 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},r.a.createElement("title",null,"Combined Shape@1.5x"),r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"02_Components/01_Global/Nav/Mobile/Transparent",transform:"translate(-324.000000, -34.000000)",fill:"#FFFFFF",fillRule:"nonzero"},r.a.createElement("g",{id:"Header"},r.a.createElement("g",{id:"Misc-/-BurgerMenu-/-Static",transform:"translate(319.000000, 26.000000)"},r.a.createElement("g",{id:"Icons-/-Functional-/-icon-burger-menu"},r.a.createElement("g",null,r.a.createElement("g",{transform:"translate(16.000000, 16.000000) scale(-1, 1) translate(-16.000000, -16.000000) "},r.a.createElement("path",{d:"M25.1559311,21.969498 C25.722291,21.969498 26.1805032,22.4236892 26.1805032,22.984749 C26.1805032,23.5458088 25.722291,24 25.1289615,24 L6.35817512,24 C5.79181519,24 5.33333333,23.5458088 5.33333333,22.984749 C5.33333333,22.4236892 5.79181519,21.969498 6.35817512,21.969498 L25.1559311,21.969498 Z M21.3093229,14.8722825 C21.7657797,14.8722825 22.1350751,15.3264738 22.1350751,15.8875335 C22.1350751,16.4485933 21.7657797,16.9027846 21.2875868,16.9027846 L6.15930286,16.9027846 C5.70284602,16.9027846 5.33333333,16.4485933 5.33333333,15.8875335 C5.33333333,15.3264738 5.70284602,14.8722825 6.15930286,14.8722825 L21.3093229,14.8722825 Z M25.1559311,8 C25.722291,8 26.1805032,8.45419125 26.1805032,9.01525102 C26.1805032,9.5763108 25.722291,10.030502 25.1289615,10.030502 L6.35817512,10.030502 C5.79181519,10.030502 5.33333333,9.5763108 5.33333333,9.01525102 C5.33333333,8.45419125 5.79181519,8 6.35817512,8 L25.1559311,8 Z"}))))))))),z=a(1267),A=a(1268),Y=a(1056),G=a(1335),P=Object(I.a)((function(e){var t,a,n,o,r;return{skipToMain:Object(N.a)({display:"none"},e.breakpoints.up("lg"),{display:"block",position:"fixed",top:"-150px",left:"50%",transform:"translateX(-50%)",zIndex:"1500",background:"".concat(e.mixins.White()),transition:"top .3s ease-in","&:focus":{top:0,transition:"top .1s ease-in"},"&:focus-within":{top:0,transition:"top .1s ease-in"},"& div":{whiteSpace:"nowrap",color:"black",padding:"10px 60px",textDecoration:"none"}}),root:Object(N.a)({flexGrow:1},e.breakpoints.down("md"),Object(i.a)({},e.mixins.marginRight(0))),headerContainer:(t={minHeight:e.spacing(10)},Object(N.a)(t,e.breakpoints.up("lg"),{minHeight:e.spacing(16),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}),Object(N.a)(t,"& .logo-red",{display:"none"}),t),headerContainerPlaceholder:Object(N.a)({minHeight:e.spacing(10)},e.breakpoints.up("lg"),{minHeight:e.spacing(16)}),headerTransparent:{background:"none",color:e.palette.primary.contrastText,transition:"all 750ms cubic-bezier(0.94, 0.02, 0.59, 0.97)","& .mega-navigation-list a:not(.active) span:not(:hover)":{color:e.palette.primary.contrastText},"&.hidden":{transform:"translateY(-14rem) !important",opacity:0},"& .language-selector-wrapper":{"& svg path":{fill:e.mixins.White()}},"&.megaNavOpened":{"& .logo-img":{display:"none"},"& .logo-red":{display:"block"},"& .MuiList-root .nav-text":Object(N.a)({},e.breakpoints.up("lg"),{"&::after":{borderColor:e.mixins.AbuDhabiRed()},"&:hover":{color:e.mixins.AbuDhabiRed()}})},"& .MuiList-root .nav-text":Object(N.a)({},e.breakpoints.up("lg"),{"&::after":{borderColor:e.mixins.White()},"&:hover":{color:e.mixins.White()}})},visibleHeader:{zIndex:"9999"},iconDivider:{width:"100%",height:Object(W.h)(6),background:e.mixins.White(1e3),position:"absolute",bottom:Object(W.h)(-5)},searchOpened:Object(N.a)({},e.breakpoints.down("md"),{"&.MuiButtonBase-root":{borderRight:"1px solid ".concat(e.mixins.Black(100)),borderLeft:"1px solid ".concat(e.mixins.Black(100))}}),headerWrapper:Object(N.a)({color:e.palette.secondary.contrastText,background:e.palette.secondary.main,boxShadow:"0px 0px 5px 0px ".concat(e.mixins.Black(200)),"& .mega-navigation-list a:not(.active) span:not(:hover)":{color:e.palette.secondary.contrastText},"& .MuiGrid-root":{background:"transparent"},"&.hidden":{transform:"translateY(-14rem) !important",opacity:0},"&.fixed-header":{transform:"translateY(0) !important",visibility:"visible !important",position:"fixed"},minHeight:e.spacing(10)},e.breakpoints.up("lg"),{minHeight:e.spacing(16),boxShadow:"0px 2px 4px 0px ".concat(e.mixins.Black(100)),zIndex:"1305"}),megaNavOpened:{zIndex:"1310",position:"fixed",transform:"translateY(0) !important",transition:"none !important",visibility:"visible !important"},headerEditorMode:{position:"absolute"},brandLogo:(a={display:"block",maxWidth:e.spacing(20)},Object(N.a)(a,e.breakpoints.down("md"),{height:e.spacing(6)}),Object(N.a)(a,"& img",Object(N.a)({maxWidth:Object(W.h)(122),height:e.spacing(6)},e.breakpoints.up("lg"),{maxWidth:"100%",height:e.spacing(9),width:"auto"})),a),navigationListWrap:Object(i.a)(Object(i.a)(Object(i.a)({},e.mixins.paddingLeft(e.spacing(3))),e.mixins.paddingRight(e.spacing(3))),{},Object(N.a)({},e.breakpoints.down("md"),{paddingTop:0,paddingBottom:0,"& li:last-child":{borderBottom:"0"}})),linkSection:{display:"flex",alignItems:"center",height:"100%"},rightSectionWrap:{display:"flex",alignItems:"center"},menuOpened:{"&.MuiButtonBase-root":Object(i.a)(Object(i.a)({},e.mixins.borderLeft("1px solid ".concat(e.mixins.Black(100)))),e.mixins.marginLeft("-1px"))},smallText:(n={color:"inherit",display:"block",paddingLeft:e.spacing(3),paddingRight:e.spacing(3),width:"100%"},Object(N.a)(n,e.breakpoints.up("lg"),Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},e.mixins.paddingLR(Object(W.h)(30),Object(W.h)(30))),e.mixins.marginRight(e.spacing(5))),e.mixins.borderRight("1px solid ".concat(e.mixins.Black(200)))),e.mixins.borderLeft("1px solid ".concat(e.mixins.Black(200)))),{},{paddingTop:0,paddingBottom:0,width:"auto",position:"relative"})),Object(N.a)(n,"&::after",Object(N.a)({},e.breakpoints.up("lg"),{display:"block",content:'""',width:"calc(100% - ".concat(Object(W.h)(60),")"),borderBottom:"4px solid ".concat(e.mixins.AbuDhabiRed()),position:"absolute",transform:"scaleX(0)",transition:"transform 0.3s ease-in-out",top:e.spacing(9)})),Object(N.a)(n,"&:hover",{color:e.mixins.AbuDhabiRed(),"&::after":Object(N.a)({},e.breakpoints.up("lg"),{transform:"scaleX(1)"})}),n),rightSection:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"space-between"},e.breakpoints.up("xl"),{justifyContent:"flex-end"}),ctaBtn:Object(i.a)(Object(i.a)({width:Object(W.h)(80),borderLeft:"1px solid transparent",borderRadius:0,padding:Object(W.h)(28),cursor:"pointer"},e.mixins.marginLeft(0)),{},(o={},Object(N.a)(o,e.breakpoints.up("lg"),{width:"auto",padding:Object(W.h)(12)}),Object(N.a)(o,"& .MuiIconButton-label",Object(N.a)({},e.breakpoints.down("md"),{height:Object(W.h)(28)})),o)),menuDrawer:{width:"100%",top:Object(W.h)(81),height:"calc(100% - ".concat(Object(W.h)(81),")"),transform:"none !important","&.disableScroll":{overflowY:"hidden"}},searchIcon:(r={color:"inherit"},Object(N.a)(r,e.breakpoints.up("lg"),Object(i.a)({transition:"background-color 0.3s ease-in-out",border:"2px solid",borderRadius:"50%"},e.mixins.marginRight(e.spacing(3)))),Object(N.a)(r,"&:hover",Object(N.a)({},e.breakpoints.up("lg"),{backgroundColor:e.mixins.Black(200)})),r),searchRightMargin:Object(i.a)({},e.mixins.marginLR(0,e.spacing(7.2))),redSearchIcon:{color:e.mixins.AbuDhabiRed(1e3)},sectionDesktop:Object(N.a)({display:"none"},e.breakpoints.up("lg"),{display:"flex",alignItems:"center",justifyContent:"flex-end"}),sectionMobile:Object(N.a)({display:"flex",justifyContent:"flex-end",alignItems:"stretch"},e.breakpoints.up("lg"),{display:"none"}),langSelectorText:{color:e.mixins.Black(700),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative","& svg:last-child":{fontSize:e.spacing(2),transform:e.mixins.rotate0()},"& .languageLabel":{display:"flex","& svg":Object(i.a)(Object(i.a)({},e.mixins.marginRight(e.spacing(1))),{},{transform:"rotate(0deg)"})}},flyout:{height:"calc(100vh - ".concat(Object(W.h)(81),")"),left:"-100%",position:"fixed",top:Object(W.h)(81),transition:"all .3s ease",visibility:"hidden",width:"100%",zIndex:"1002",overflowY:"auto",backgroundColor:e.mixins.White(),padding:"".concat(e.spacing(4)," 0"),"&.onScreen":{left:"0",visibility:"visible"},"& li":{padding:0,minHeight:0,"& a":{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"".concat(Object(W.h)(20)," ").concat(e.spacing(5)),"&.selected":{backgroundColor:e.mixins.Black(30)}}},"& .backBtn":{marginBottom:e.spacing(3),paddingLeft:e.spacing(3),paddingRight:e.spacing(3),textAlign:e.mixins.textLeft(),"& .MuiButton-textSecondary:hover":{backgroundColor:"transparent",color:"inherit"},"& .MuiButton-label":{color:e.mixins.Black(),flexDirection:e.mixins.flexDirection()},"& .MuiButton-startIcon":{transform:e.mixins.rotate180(),padding:"0",width:"auto"},"& > span:hover":{"& .MuiButton-label":{color:"inherit"},"& .MuiButton-startIcon":{color:"inherit",backgroundColor:"transparent"}}}},"@global":{'.no-flip, a[href^="tel:"]':{unicodeBidi:"bidi-override",direction:"ltr",textAlign:e.mixins.textLeft()}}}})),q=a(53),Z=a(231),_=a(297),X=a(299),U=a(10),J=a(169),K=a(954),V=function(e){var t=e.fields,a=e.sitecoreContext,s=e.rendering,d=e.updateSearchData,p=e.searchData,y=e.t,L=P(),B=t||"",S=B.logoLink,N=B.alternateLogo,I=B.isSearchEnabled,W=void 0!==I&&I,R=B.adCalenderLogo,M=(t||"").logo;Object(K.a)(e).toLowerCase()===q.l&&(M=Object(i.a)({},R));var z=Object(D.a)("(max-width:1023px)"),A=a.language,X=a.route,V=a.pageLanguageVersions,$=p.data,Q=X&&X.name,ee=Object(o.useState)(!1),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],ie=r.a.useState(!1),oe=Object(n.a)(ie,2),re=oe[0],ce=oe[1],se=Object(o.useRef)(null),le=function(e){return function(t){t.preventDefault(),(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&(e&&d(!1),ce(e))}},de=y("backButton"),pe=Object(l.isExperienceEditorActive)(),me=!1,ue="fixed",ge=Q&&Q.toLowerCase()===q.q.toLowerCase(),be=L.headerWrapper,fe=Object(m.a)({disableHysteresis:!0}),he=O.a&&Number(v.b.read("notificationBar")),xe=O.a&&Number(Object(J.a)("downloadWidgetBar"));if(Object(o.useEffect)((function(){O.a&&(he=Number(Object(J.a)("notificationBar")),xe=Number(Object(J.a)("downloadWidgetBar")),Be(document.querySelector("#stickyBar")),Le&&Ce(Le.getBoundingClientRect().top),se.current)})),ge){if(O.a){var ve=window&&window.innerHeight,Oe=window&&window.pageYOffset;fe?me=Oe<ve:(me=!0,ue=he||xe?"absolute":"fixed")}else me=!0,ue="absolute";be=$||re?L.headerWrapper:me?L.headerTransparent:L.headerWrapper}else be=L.headerWrapper,ue="absolute",O.a&&(ue=fe?"fixed":"absolute");var je=Object(o.useState)(void 0),we=Object(n.a)(je,2),ke=we[0],Ce=we[1],Ee=Object(o.useState)(void 0),ye=Object(n.a)(Ee,2),Le=ye[0],Be=ye[1],Se=Object(m.a)({threshold:ke||200});Object(o.useEffect)((function(){O.a&&(Be(document.querySelector("#stickyBar")),Le&&Ce(Le.getBoundingClientRect().top))}));var Ne=Object(o.useRef)(0),Ie=Object(o.useRef)();Object(o.useEffect)((function(){if(O.a){var e=document.querySelector("header"),t=document.querySelector("#ghostDiv"),a=z?80:128;function n(){(setTimeout((function(){Le&&(!(window.pageYOffset>=ke&&0!==window.pageYOffset&&t)||t.getBoundingClientRect().bottom-a<=0?(Le.classList.add("sticky"),e&&e.getBoundingClientRect().top<0?(Le.classList.remove("header-added"),Le.classList.add("header-removed")):(Le.classList.add("header-added"),Le.classList.remove("header-removed"))):Le.classList.remove("sticky"))}),300),Le&&window.pageYOffset>Ne.current&&Le.classList.contains("header-added")&&(Le.classList.remove("header-added"),Le.classList.add("header-removed")),Le&&t)&&((window.pageYOffset>Ne.current?t.getBoundingClientRect().top<0:t.getBoundingClientRect().bottom-a<=0)?(Le.classList.remove("ghostdiv-reached"),t.style.height=Ie.current+"px"):(void 0===Ie.current&&(Ie.current=Le.clientHeight),Le.classList.add("ghostdiv-reached"),t.style.height=0));Ne.current=window.pageYOffset}return window.addEventListener("scroll",n,{capture:!0,passive:!0}),function(){return window.removeEventListener("scroll",n,{capture:!0,passive:!0})}}}),[Ne.current,ke,Le]);var We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{iconOnly:!0,"aria-label":"search button",onClick:function(){return function(){var e=!0;z&&(e=!$,ce(!1)),p.data!==e&&d(e)}()},edge:"start",className:Object(U.a)(L.ctaBtn,L.searchIcon,"search-icon",$&&!z&&L.redSearchIcon,$&&L.searchOpened)},r.a.createElement(x.a,{name:"".concat($&&z?"CloseIcon":"SearchSharpIcon")}),$&&z&&r.a.createElement("div",{className:L.iconDivider})))},Re=[];V&&V.map((function(e){var t=e.compactName,a=void 0===t?"":t,n=e.url,i=void 0===n?"":n,o=e.code,r=void 0===o?"":o,c=e.nativeName,s=void 0===c?"":c,l=A===r;return Re.push({code:r,value:i,label:a,selected:l,nativeName:s})}));var Me=V&&V.filter((function(e){return A===e.code}));Me=Me&&Me.length>0&&Me[0].nativeName;var Te=function(){Object(_.b)(Z.a.headerInteraction.dctLogoClick)},De=function(e,t){return function(a){if(a.preventDefault(),O.a){var n=t&&t.split("-");n=n.length>0&&n[0],v.b.write("_lngpreference",n,30);var o=Object(i.a)(Object(i.a)({},Z.a.headerInteraction.toggleLanguage),{label:"".concat(A,"|").concat(t)});Object(_.b)(o),window.location.href="".concat(window.location.origin,"/").concat(e).concat(window.location.search)}}},He=function(){ne(!1)},Fe=function(){return z?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"backBtn",onClick:He},r.a.createElement(E.a,{component:"span",buttonType:"secondary",hasBorder:!1,isStartIcon:!0},de)),r.a.createElement(G.a,null,Re&&Re.map((function(e,t){return r.a.createElement(Y.a,{key:t},r.a.createElement(C.a,{customHref:"#",isCustom:!0,className:e&&e.selected?"selected":"",onClick:De(e&&e.value,e&&e.code)},r.a.createElement(k.a,{variant:"h5",component:"span"},e&&e.nativeName),e&&e.selected&&r.a.createElement(x.a,{name:"CheckIcon"})))})))):r.a.createElement(T,{optionList:Re,handleChangeEvent:De,selectedLanguage:Me})},ze="";return ze=$||re?r.a.createElement(c.Image,{onClick:Te,field:M}):me?r.a.createElement(c.Image,{onClick:Te,field:N}):r.a.createElement(c.Image,{onClick:Te,field:M}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{"data-locator":"header-component-container",className:L.appBarHeader},r.a.createElement(C.a,{link:{value:{href:"#root",text:"Skip To Content"}},id:"skip-to-main-content",className:L.skipToMain,tabIndex:"2"},r.a.createElement(k.a,{variant:"body2Bold",component:"div"},"Skip To Content")),r.a.createElement(u.a,{appear:!1,direction:"down",in:!Se,"data-locator":"header-component-slider",className:Object(U.a)($&&L.visibleHeader)},r.a.createElement(g.a,{classes:{root:"".concat(be," ").concat(pe?L.headerEditorMode:""," ").concat(re&&L.megaNavOpened,"\n                ").concat($?"fixed-header":"")},"data-locator":"header-component-header-section",color:"".concat(ge?"transparent":"secondary"),position:ue||"absolute",elevation:"0"},r.a.createElement(w.a,{className:L.root,"data-locator":"HeaderComponent-GridBlock",ref:se},r.a.createElement(w.a,{container:!0,spacing:0,classes:{root:"".concat(L.root," ").concat(L.headerContainer)},alignItems:"center","data-locator":"header-component-grid-container"},M&&r.a.createElement(w.a,{item:!0,xs:3,sm:2,"data-locator":"header-component-grid-item-logo"},r.a.createElement(C.a,{className:Object(U.a)(L.brandLogo,"logo-img"),link:S},ze),me&&r.a.createElement(C.a,{className:Object(U.a)(L.brandLogo,"logo-red"),link:S},r.a.createElement(c.Image,{onClick:Te,field:M}))),r.a.createElement(w.a,{item:!0,classes:{root:"".concat(L.sectionDesktop)},sm:10},r.a.createElement(c.Placeholder,{name:"vad-global-meganav",rendering:s,appConfig:e.appConfig}),r.a.createElement("div",{className:L.rightSectionWrap},r.a.createElement("div",{className:L.rightSection},W&&We(),r.a.createElement("div",{className:"".concat(L.langSelectorWrap)},V&&Fe())))),r.a.createElement(w.a,{item:!0,classes:{root:"".concat(L.sectionMobile)},xs:9,sm:10},r.a.createElement(r.a.Fragment,{key:"left"},W&&We(),re?r.a.createElement(E.a,{iconOnly:!0,edge:"start","aria-label":"close drawer","aria-haspopup":"false",onClick:le(!1),color:"inherit",px:0,className:Object(U.a)(L.menuOpened,L.ctaBtn)},r.a.createElement(x.a,{name:"CloseIcon"}),re&&z&&r.a.createElement("div",{className:L.iconDivider})):r.a.createElement(E.a,{iconOnly:!0,edge:"start",className:Object(U.a)(L.menuButton,L.ctaBtn),"aria-label":"open drawer","aria-haspopup":"true",onClick:le(!0),color:"inherit",px:0},$?r.a.createElement("i",null,H):me?r.a.createElement("i",null,F):r.a.createElement("i",null,H)),r.a.createElement(b.a,{PaperProps:{className:"".concat(L.menuDrawer," mobileMenuDrawer")},open:re,onClose:le(!1),onOpen:le(!0)},r.a.createElement(f.a,{component:"ul","aria-label":"mobile navigation menu","data-locator":"header-component-grid-item-mobile-nav"},r.a.createElement(h.a,{className:L.navigationListWrap,divider:!0},r.a.createElement(c.Placeholder,{name:"vad-global-meganav",rendering:s,appConfig:e.appConfig})),r.a.createElement(h.a,{className:L.navigationListWrap},r.a.createElement(k.a,{variant:"h5",component:"div",classes:{root:L.langSelectorText},onClick:function(){ne(!0)}},r.a.createElement("div",{className:"languageLabel"},r.a.createElement(x.a,{name:"Language"}),Me),Re&&Re.length>0&&r.a.createElement(x.a,{name:"ArrowForwardIosSharp"})),r.a.createElement("div",{className:Object(U.a)(L.flyout,ae&&"onScreen")},V&&Fe())))))))))),!ge&&r.a.createElement("div",{className:L.headerContainerPlaceholder}),r.a.createElement(c.Placeholder,{name:"vad-global-search",rendering:s,appConfig:e.appConfig}))):null},$=function(e){return{updateSearchData:function(t){return e(Object(z.a)(t))}}},Q=Object(d.b)({searchData:A.a});t.default=Object(X.a)(Object(c.withSitecoreContext)()(Object(s.b)()(Object(p.b)(Q,$)(V))))},944:function(e,t,a){"use strict";var n=a(959),i=a(6),o=a(4),r=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var l=a(302),d=a.n(l)()((function(e){return Object(o.a)(Object(o.a)({root:Object(i.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return r.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(s(i,2)),width:"calc(100% + ".concat(s(i),")"),"& > $item":{padding:s(i,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};c.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object.assign(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(n.a);t.a=d},948:function(e,t,a){"use strict";var n=a(6),i=a(109),o=a(0),r=a.n(o),c=a(10),s=a(38),l=a(145),d=a.n(l),p=a(4),m=r.a.forwardRef((function(e,t){var a,o=e.classes,s=e.className,l=void 0===s?"":s,p=e.component,m=void 0===p?"div":p,u=e.fixed,g=void 0!==u&&u,b=e.maxWidth,f=void 0===b?"xl":b,h=e.useContainer,x=void 0===h||h,v=e.overflowHidden,O=void 0!==v&&v,j=Object(i.a)(e,["classes","className","component","fixed","maxWidth","useContainer","overflowHidden"]),w=r.a.createElement(m,Object.assign({className:Object(c.a)(o.root,(a={},Object(n.a)(a,o.fixed,g),Object(n.a)(a,o["maxWidth".concat(d()(String(f)))],!1!==f),a),l),ref:t},j));return x?r.a.createElement("section",{className:Object(c.a)(o.root,Object(n.a)({},o.overflowHidden,O))},w):e.children}));t.a=Object(s.a)((function(e){return Object(p.a)(Object(p.a)({root:{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:"0",paddingRight:"0"}},{}),{},{fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:"100%"}),overflowHidden:{overflow:"hidden"}})}),{name:"MuiContainer"})(m)},951:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"g",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return m})),a.d(t,"h",(function(){return u}));var n=a(48),i=a(53),o=a(45),r={writeSessionCookie:function(e,t){n.a&&(document.cookie=e+"="+t+"; path=/; secure;")},write:function(e,t,a){var i=new Date;i.setTime(i.getTime()+24*a*60*60*1e3);var o="expires="+i.toUTCString();n.a&&(document.cookie=e+"="+t+"; "+o+"; path=/; secure;")},read:function(e){return n.a&&document.cookie.indexOf(e)>-1?document.cookie.split(e)[1].split("; ")[0].substr(1):""},delete:function(e){var t=new Date;t.setTime(t.getTime()-1e3);var a="expires="+t.toUTCString();n.a&&(document.cookie=e+"=; "+a)}};t.b=r;var c="_country",s=function(e){var t=r.read(c)&&r.read(c).toLocaleLowerCase(),a=Object(o.get)(e,"language",i.v.DEFAULT);return t===i.s||u(a,i.v.CHINESE)},l=function(){var e=n.a&&window.location.hostname.split("."),t=e&&e[e.length-1];return t&&"cn"===t.toLowerCase()},d=function(e){return(r.read(c)&&r.read(c).toLocaleLowerCase())===i.s&&!u(e,i.v.CHINESE)},p=function(e){return!((r.read(c)&&r.read(c).toLocaleLowerCase())!==i.s&&!u(e,i.v.CHINESE))},m=function(e){if(u(e,i.v.CHINESE))return!0;var t=n.a&&window.location.hostname;return(t&&t.substr(t.lastIndexOf(".")))===i.h.CHINA},u=function(e,t){return(e&&e.toLowerCase())===(t&&t.toLowerCase())}},954:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(33),i=a.n(n),o=function(e){return i()(e,"sitecoreContext.route.fields.contentType.fields.taxonomyKey.value","")}}}]);
//# sourceMappingURL=Header.2c730377.chunk.js.map