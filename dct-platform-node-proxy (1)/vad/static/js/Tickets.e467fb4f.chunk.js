(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[79],{1099:function(e,t,a){"use strict";var n=a(4),i=a(0),r=a.n(i),c=a(33),o=a.n(c),l=a(143),s=a(47),m=a(118),u=a(997),p=a(119),d=a.n(p),g=a(950),b=a(944),f=a(300),x=a(296),v=a(176),j=a(10),h=a(301),O=a(946),C=a(297),y=a(231),k=a(46),E=a(110),w=a(6),T=a(847),B=Object(T.a)((function(e){return{overlay:{overflow:"hidden",position:"relative",transition:"all 1s ease",height:"100%",backgroundColor:function(e){return e.bgColor},borderBottom:function(e){return"4px solid ".concat(e.stripColor)},"& .img-to-animate-wrapper":{transition:"all 1s ease"},"&:hover":{boxShadow:"0px 2px 20px 0px ".concat(e.mixins.Black(800)),"& :not(.img-to-animate-wrapper) picture, & .img-to-animate-wrapper":{transform:"scale(1.1, 1.1)","&::before":{background:e.mixins.Black(800)}}},"&.disableHover":{boxShadow:"none"}},cardPicture:{transition:"all 1s ease",display:"block",height:"100%","&::before":{position:"absolute",width:"100%",height:"100%",content:"''",display:"inline",transition:"all 1s ease",background:e.mixins.Black(600),top:"0",left:"0",zIndex:"10"}},cardContentWrapper:Object(w.a)({position:"absolute",left:0,right:0,top:"50%",transform:"translateY(-50%)",textAlign:"center",zIndex:"11",padding:"0 ".concat(e.spacing(4))},e.breakpoints.up("lg"),{padding:"0 ".concat(e.spacing(7))})}})),N=a(45),P=function(e){var t=e.media,a=e.pictureClass,c=e.title,o=e.titleClass,l=e.titleVariant,m=e.titleComponent,u=e.count,p=e.countVariant,d=e.countClass,g=e.segmentHeading,b=e.subTitle,f=e.background,v=e.strip,w=e.isPriceCard,T=e.pageName,P=e.componentName,R=e.disableHover,W=Object(N.get)(f,"fields.colorCode.value"),S=Object(N.get)(v,"fields.colorCode.value"),H=B({bgColor:W,stripColor:S}),A=Object(i.useRef)(),I=Object(i.useRef)(),D=Object(i.useRef)(),G=Object(i.useRef)();return Object(i.useEffect)((function(){if(k.a.registerPlugin(E.a),A.current){var e=!1;setTimeout((function(){k.a.timeline({scrollTrigger:{trigger:A.current,start:"top bottom",end:"+=".concat(.2*window.innerHeight,"px bottom"),scrub:!0,once:!0,onUpdate:function(t){t.progress>.5?(I&&I.current&&I.current.animYPlay(),D&&D.current&&D.current.animYPlay(),G&&G.current&&G.current.animYPlay(),e=!0):e&&(I&&I.current&&I.current.animYReverse(),D&&D.current&&D.current.animYReverse(),G&&G.current&&G.current.animYReverse())}}})}),2e3)}}),[]),r.a.createElement(O.a,{onClick:function(){return function(){var e=Object(n.a)(Object(n.a)({},y.a.pageBodyInteraction.tileClick),{label:Object(C.a)([T,P,"".concat(g&&g.value," - ").concat(c&&c.value)])});Object(C.b)(e)}()},className:Object(j.a)(H.overlay,{disableHover:R}),ref:A},!w&&t&&r.a.createElement(O.a,null,r.a.createElement(h.a,{media:t,className:"".concat(H.cardPicture," ").concat(a),alternateAltText:c&&c.value})),r.a.createElement(O.a,{className:H.cardContentWrapper},c&&r.a.createElement(x.a,{variant:l,component:m,classes:{root:"".concat(H.cardTitle," ").concat(o)},ref:I,animateSettings:{selfTrigger:!1,willAnimate:!0,animateType:"y"}},r.a.createElement(s.Text,{field:c})),b&&r.a.createElement(x.a,{variant:"body2Bold",component:"div",classes:{root:"fare"},ref:D,animateSettings:{selfTrigger:!1,willAnimate:!0,animateType:"y"}},r.a.createElement(s.Text,{field:b})),u&&r.a.createElement(x.a,{variant:p,component:"span",classes:{root:"".concat(H.cardCount," ").concat(d)},ref:G,animateSettings:{selfTrigger:!1,willAnimate:!0,animateType:"y"}},r.a.createElement(s.Text,{field:u}))))};P.defaultProps={pictureClass:"",titleClass:"",titleVariant:"h4",titleComponent:"h3",countVariant:"body1",countClass:"",segmentHeading:""};var R=P,W=a(307),S=a(1),H=Object(T.a)((function(e){var t;return{root:{display:"flex",flexGrow:"1","& .btnWithBorder":Object(w.a)({},e.breakpoints.down("md"),{paddingTop:e.spacing(3)})},heading:Object(n.a)(Object(n.a)({},e.palette.common.ellipsis()),{},(t={marginBottom:e.spacing(4)},Object(w.a)(t,e.breakpoints.up("lg"),Object(n.a)(Object(n.a)({width:Object(S.h)(910)},e.palette.common.ellipsis(1)),{},{marginBottom:function(t){return t.isPriceCard?e.spacing(5):e.spacing(3)}})),Object(w.a)(t,e.breakpoints.up("xl"),{width:"100%"}),t)),titleTextLinkWrap:{color:"".concat(e.palette.secondary.main),height:function(e){return!e.isEditor&&"100%"},display:"block"},primaryCTAWrap:{paddingBottom:e.spacing(5)}}}));t.a=Object(s.withSitecoreContext)()(Object(l.b)()((function(e){var t=e.tileData,a=e.segmentTitle,c=e.segmentHeading,l=e.description,p=e.primaryCTA,h=e.aspectRatio,O=e.isPriceCard,w=e.pageName,T=e.componentName,B=e.disableHover,N=Object(m.isExperienceEditorActive)(),P=H({isEditor:N,isPriceCard:O}),S=Object(i.useRef)(null),A=Object(i.useRef)(null),I=Object(i.useRef)(null);Object(i.useEffect)((function(){k.a.registerPlugin(E.a),setTimeout((function(){k.a.timeline().pause();var e=!1;k.a.timeline({scrollTrigger:{trigger:I.current,start:"top bottom",end:"+=".concat(.2*window.innerHeight,"px bottom"),scrub:!0,once:!0,onUpdate:function(t){t.progress>.15?(S&&S.current&&S.current.animPlay(),A&&A.current&&A.current.animPlay(),e=!0):e&&(S&&S.current&&S.current.animReverse(),A&&A.current&&A.current.animReverse())}}})}),100)}));var D=t&&t.map((function(e,t){var a=e.fields,n=d()(o()(a,"image.value","")),i=B?"div":v.a;return r.a.createElement(b.a,{item:!0,xs:12,lg:4,key:t},r.a.createElement(i,{field:!B&&a&&a.imageTextLink,className:Object(j.a)(P.titleTextLinkWrap,O?"price-card":"")},r.a.createElement(R,{title:a&&a.title,segmentHeading:c,subTitle:a&&a.subTitle,titleClass:O?"price-card-title":"",titleVariant:O?"cardTitle1":"h5Bold",background:a.backgroundColor,strip:O?a.stripColor:{},isPriceCard:O,media:n?"":{image:a&&a.image,mobileImage:a&&a.mobileImage,aspectRatio:h},pageName:w,componentName:T,disableHover:B})))})),G=function(){var e=Object(n.a)(Object(n.a)({},y.a.pageBodyInteraction.arrowClick),{label:Object(C.a)([w,T,"".concat(c&&c.value," - ").concat(o()(p,"value.text"))])});Object(C.b)(e)};return r.a.createElement(b.a,{className:P.root,ref:I},r.a.createElement(b.a,{container:!0,spacing:0,classes:{root:"".concat(P.root)},alignItems:"center"},a&&r.a.createElement(b.a,{item:!0,xs:12,className:"segment-title"},r.a.createElement(W.a,{condition:!0,animateSettings:{willAnimate:!0,selfTrigger:!0,duration:"250ms"},ref:S},r.a.createElement(g.a,{text:a}))),c&&r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:O?"h4":"h2",component:"h2",classNameChild:Object(j.a)(P.heading,"heading"),wordBreak:!0,ref:A,animateSettings:{willAnimate:!0,selfTrigger:!0}},r.a.createElement(s.Text,{field:c}))),l&&r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,{variant:"body1",component:"p",classes:{root:"listingDescription"}},r.a.createElement(s.Text,{field:l}))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(b.a,{container:!0,spacing:0},p&&r.a.createElement(u.a,{mdDown:!0,implementation:"css"},r.a.createElement(b.a,{item:!0,xs:12,className:P.primaryCTAWrap},r.a.createElement(f.a,{onClick:function(){return G()},component:"div",buttonType:"primary",field:p,srText:o()(p,"value.text","")}))),t&&r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(b.a,{container:!0,spacing:3},D)),p&&r.a.createElement(u.a,{lgUp:!0,implementation:"css"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{onClick:function(){return G()},component:"div",buttonType:"primary",field:p,srText:o()(p,"value.text","")})))))))})))},887:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(143),c=a(47),o=a(1099),l=a(946),s=a(6),m=a(4),u=a(847),p=a(1),d=Object(u.a)((function(e){var t;return{EditorialGridWrapper:Object(m.a)(Object(m.a)({},e.shape.componentSpacing),{},{"& .price-card":(t={height:Object(p.h)(168)},Object(s.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(-1)}),Object(s.a)(t,"& .price-card-title",{color:e.mixins.Black(),marginBottom:e.spacing(2)}),Object(s.a)(t,"& .fare",{color:e.mixins.AbuDhabiRed()}),t)})}})),g=function(e,t){return e&&e.field&&e.field[t]&&e.field[t].value||""},b=a(299),f=a(232),x=a(53);t.default=Object(b.a)(Object(c.withSitecoreContext)()(Object(r.b)()((function(e){var t=e.fields,a=e.params,n=(t||"").ticket,r=a||"",c=r.ticketHeading,s=r.ticketStripColor,m=r.ticketBackgroundColor,u=d(),p=function(e,t,a){var n=[];return e&&e.length>0&&e.forEach((function(e){n.push({fields:{stripColor:{fields:{colorCode:{value:t||"blue"}}},backgroundColor:{fields:{colorCode:{value:a||"LightGrey"}}},title:{value:g(e,"ticketTitle")},imageTextLink:{value:{href:g(e,"ticketWebUrl"),linktype:"internal",target:"_blank",class:""}},subTitle:{value:g(e,"ticketCurrency")+" "+g(e,"ticketPrice")}}})})),n}(n,s,m);return n&&n.length>0?i.a.createElement(l.a,{className:u.EditorialGridWrapper,id:x.J,"data-locators":"Tickets"},i.a.createElement(o.a,{tileData:p,segmentHeading:{value:c},isPriceCard:!0,pageName:Object(f.b)(e),componentName:Object(f.a)(e)})):null}))))},944:function(e,t,a){"use strict";var n=a(959),i=a(6),r=a(4),c=[0,1,2,3,4,5,6,7,8,9,10],o=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var s=a(302),m=a.n(s)()((function(e){return Object(r.a)(Object(r.a)({root:Object(i.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(l(i,2)),width:"calc(100% + ".concat(l(i),")"),"& > $item":{padding:l(i,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};o.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object.assign(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(n.a);t.a=m},946:function(e,t,a){"use strict";var n=a(553),i=a(51),r=a(212),c=a(554),o=a(213),l=a(216),s=a(215),m=a(555),u=a(217),p=a(220),d=a(218),g=a(931),b=Object(n.a)(Object(i.a)(r.h,c.a,o.d,l.b,s.c,m.a,u.b,p.b,d.a)),f=Object(g.a)("div")(b,{name:"MuiBox"});t.a=f},950:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(47),c=a(296),o=a(4),l=a(847),s=Object(l.a)((function(e){return{root:{"&.MuiTypography-root":{paddingBottom:e.spacing(1),position:"relative",marginBottom:e.spacing(1)},"&:before":Object(o.a)(Object(o.a)({content:"''",width:e.spacing(3),height:"1px",position:"absolute",bottom:"0"},e.mixins.left(0)),{},{backgroundColor:e.mixins.Black()})}}})),m=function(e){var t=e.text,a=e.className,n=e.variant,o=s();return t&&t.value?i.a.createElement(c.a,{variant:n,component:"div",classes:{root:"".concat(o.root," ").concat(a)}},i.a.createElement(r.Text,{field:t})):null};m.defaultProps={className:"",variant:"body2"};t.a=m}}]);
//# sourceMappingURL=Tickets.e467fb4f.chunk.js.map