(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[31],{1091:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(1283),c=t(1231),o=t(1230),l=t(99),s=t(944);a.a=function(e){var a=e.className,t=e.tabIdentifier,n=e.handleChange,m=e.expanded;return i.a.createElement(s.a,{container:!0,classes:{root:a}},i.a.createElement(s.a,{item:!0},i.a.createElement(r.a,{expanded:m===t,onChange:n(t)},i.a.createElement(o.a,{expandIcon:i.a.createElement(l.a,{name:"ExpandMoreIcon"}),"aria-controls":"panel".concat(t,"-content"),id:"panel".concat(t,"-header")},e.children[0]),i.a.createElement(c.a,null,e.children[1]))))}},1129:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(930),c=t(33),o=t.n(c),l=t(48);a.a=function(e){var a=e.mobileImageArray,t=e.desktopImageArray,n=Object(r.a)("(max-width:767px)"),c=Object(r.a)("(min-width:768px) and (max-width:1023px)"),s=Object(r.a)("(min-width:1024px) and (max-width:1680px)"),m=Object(r.a)("(min-width:1681px)"),d=l.a&&window&&window.devicePixelRatio;return n?d>=2?i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:a&&a.length>0&&a.map((function(e){return"url(".concat(o()(e,"small2x",""),")")}))}}):i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:a&&a.length>0&&a.map((function(e){return"url(".concat(o()(e,"small",""),")")}))}}):c?d>=2?i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"medium2x",""),")")}))}}):i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"medium",""),")")}))}}):s?d>=2?i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"large2x",""),")")}))}}):i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"large",""),")")}))}}):m?d>=2?i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"xLarge2x",""),")")}))}}):i.a.createElement("div",{className:"preloadImages",style:{backgroundImage:t&&t.length>0&&t.map((function(e){return"url(".concat(o()(e,"xLarge",""),")")}))}}):""}},872:function(e,a,t){"use strict";t.r(a),t.d(a,"DayHighlight",(function(){return V}));var n=t(4),i=t(175),r=t(0),c=t.n(r),o=t(930),l=t(1521),s=t(1),m=t(997),d=t(33),p=t.n(d),g=t(47),u=t(143),b=t(1129),x=t(948),h=t(944),f=t(950),A=t(296),v=t(968),O=t(946),j=t(989),E=t(1091),y=t(6),k=t(847),N=Object(k.a)((function(e){var a,t,i;return{root:Object(n.a)(Object(n.a)({},e.shape.componentSpacing),{},{"& .MuiTabs-root":{marginTop:e.spacing(4),marginBottom:e.spacing(5)},"& .MuiTab-root":{maxWidth:"100%"},"& .MuiButton-startIcon":Object(n.a)({padding:Object(s.h)(6)},e.mixins.marginLeft(Object(s.h)(-2))),"& .dayHighdescription":{color:e.palette.text.darkGrey,paddingTop:0,paddingBottom:e.spacing(1)},"& .MuiGrid-grid-lg-5":{paddingTop:Object(s.h)(11)},"& svg":Object(n.a)({width:"100%",height:"100%"},e.mixins.paddingRight(0))}),iconWrapper:(a={display:"flex",flexDirection:"column",marginBottom:e.spacing(2)},Object(y.a)(a,e.breakpoints.up("lg"),{flexDirection:"row","&.MuiGrid-grid-lg-7":{paddingTop:0}}),Object(y.a)(a,e.breakpoints.down("md"),{marginBottom:0,"& > div > div":{transform:"none"}}),a),iconWithText:{alignItems:"flex-start",marginBottom:e.spacing(3),"& .MuiAvatar-root":Object(n.a)(Object(n.a)({},e.mixins.marginRight(Object(s.h)(14))),{},Object(y.a)({},e.breakpoints.up("lg"),Object(n.a)({},e.mixins.marginRight(Object(s.h)(20)))))},highlightType:Object(y.a)({},e.breakpoints.up("lg"),{marginBottom:e.spacing(1)}),tabContent:Object(y.a)({alignSelf:"center"},e.breakpoints.up("lg"),Object(n.a)({},e.mixins.paddingRight(e.spacing(3)))),frontImage:(t={width:"100%",height:"100%","& picture":{paddingTop:0}},Object(y.a)(t,e.breakpoints.down("md"),{"& > div":{width:"100%"}}),Object(y.a)(t,e.breakpoints.up("lg"),{width:"125%",marginLeft:"-10%"}),Object(y.a)(t,"zIndex",2),Object(y.a)(t,"& img",Object(y.a)({position:"relative"},e.breakpoints.up("lg"),{transform:"translateX(".concat(e.mixins.translateX(35),"%)")})),t),rearImage:Object(y.a)({height:"100%",width:"100%","& picture":{paddingTop:0},"& img":{position:"relative"}},e.breakpoints.down("md"),{display:"none"}),imageWrapper:Object(y.a)({},e.breakpoints.up("lg"),Object(n.a)({},e.mixins.paddingLeft("2%"))),imageSection:(i={},Object(y.a)(i,e.breakpoints.down("md"),{marginTop:0,marginBottom:e.spacing(4)}),Object(y.a)(i,e.breakpoints.up("lg"),{display:"flex",justifyContent:"flex-start",alignItems:"center"}),i),Accordion:Object(y.a)({"& .MuiExpansionPanelSummary-content":{margin:"".concat(e.spacing(3)," 0")},"& .MuiExpansionPanelSummary-root":{padding:0,minHeight:"auto","& .MuiExpansionPanelSummary-expandIcon > span":{color:e.mixins.Black()}},"& .MuiExpansionPanelDetails-root":{display:"block",padding:0},"& .MuiPaper-elevation1":{boxShadow:"none"},"& .MuiIconButton-root":Object(n.a)({padding:0},e.mixins.paddingRight(Object(s.h)(10))),"& .MuiIconButton-label":{color:e.mixins.AbuDhabiRed()},"& .MuiSvgIcon-root":{maxWidth:e.spacing(5)}},e.breakpoints.down("md"),{"& .MuiGrid-item":{width:"100%"}}),title:Object(y.a)({margin:"0 0 ".concat(Object(s.h)(10))},e.breakpoints.up("lg"),{marginBottom:e.spacing(1)}),mainTitle:{marginBottom:e.spacing(1)},regionField:Object(y.a)({marginBottom:Object(s.h)(6),color:e.palette.text.tertiary},e.breakpoints.up("lg"),{marginBottom:e.spacing(2)}),timing:Object(y.a)({marginBottom:e.spacing(3)},e.breakpoints.up("lg"),{marginBottom:e.spacing(2)}),description:Object(n.a)(Object(n.a)({color:e.palette.text.darkGrey,marginBottom:e.spacing(2)},e.palette.common.ellipsis(5)),{},{textOverflow:"ellipsis",maxHeight:"calc(1rem * 2.1 * 5)"}),divider:{marginTop:e.spacing(2),"& div":{backgroundColor:"rgb(216, 216, 216)"}},avatarClassName:{color:e.mixins.Grey(),backgroundColor:e.mixins.White(),border:"1px solid ".concat(e.mixins.Grey())}}})),T=t(1111),I=t(301),w=t(300),C=t(231),B=t(297),M=t(955),R=t(956),W=function(e){var a=e||{},t=a.stopHeading,i=a.stopTitle,r=a.location,o=a.timing,l=a.description,s=a.link,m=a.readMoreText,d=a.classes,u=a.pageName,b=a.componentName,x=e||{},v=x.frontImage,j=x.rearImage,E=p()(s,"value.text","")||m;p()(v,"value.src","")||(v={value:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=","3x2":{large:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="}}}),p()(j,"value.src","")||(j={value:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII=","4x5":{large:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="}}});return c.a.createElement(T.a,{in:!0,timeout:1e3},c.a.createElement(h.a,{container:!0,className:d.tabWrapper},c.a.createElement(h.a,{item:!0,lg:4,className:d.tabContent},i&&c.a.createElement(f.a,{text:{value:i},className:d.title}),t&&c.a.createElement(A.a,{component:"p",variant:"h5",display:"block",className:d.mainTitle},c.a.createElement(g.Text,{field:t})),r&&r.value&&c.a.createElement(A.a,{variant:"body3",component:"p",className:d.regionField},c.a.createElement(g.Text,{field:r})),o&&c.a.createElement(A.a,{component:"p",variant:"body3Bold",className:d.timing},c.a.createElement(g.Text,{field:o})),l&&l.value&&c.a.createElement(A.a,{component:"p",variant:"body1",className:d.description},c.a.createElement(M.a,{innerHTML:l})),E&&c.a.createElement(w.a,{component:"span",buttonType:"secondary",hasBorder:!1,isStartIcon:!0,size:"small",field:s,onClick:function(){var e=Object(n.a)(Object(n.a)({},C.a.pageBodyInteraction.readMoreBtnClick),{label:Object(B.a)([u,b,t&&t.value])});Object(B.b)(e)}},c.a.createElement(A.a,{component:"span",variant:"body2Bold"},c.a.createElement(g.Text,{field:{value:E}})))),c.a.createElement(h.a,{item:!0,lg:8,className:d.imageWrapper},c.a.createElement(O.a,{className:d.imageSection},c.a.createElement(O.a,{className:d.frontImage},c.a.createElement(I.a,{media:{image:v,aspectRatio:R.a["3x2"],disableLazyLoad:!0},alternateAltText:t&&t.value})),c.a.createElement(O.a,{className:"".concat(d.rearImage)},c.a.createElement(I.a,{media:{image:j,aspectRatio:R.a["4x5"],disableLazyLoad:!0},alternateAltText:t&&t.value}))))))},S=function(e){var a=e.name;return c.a.createElement(A.a,{component:"p",variant:"subTitleBold"},c.a.createElement(g.Text,{field:a}))},G=function(e){var a=e.fields,t=e.readMoreText,i=e.pageName,r=e.componentName,o=e.stopTitle,l=N(),s=a||{},m=s.location,d=s.timing,u=s.description,b=s.link,x=s.name,f=(a||{}).frontImage,v=p()(b,"value.text","")||t;return p()(f,"value.src","")||(f={value:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=","3x2":{large:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII="}}}),a?c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{className:l.imageSection},c.a.createElement(h.a,{container:!0,className:l.frontImage},c.a.createElement(h.a,{item:!0},c.a.createElement(I.a,{media:{image:f,aspectRatio:R.a["3x2"]},alternateAltText:o})))),o&&c.a.createElement(A.a,{component:"p",variant:"h3",display:"block",className:l.title},c.a.createElement(g.Text,{field:{value:o}})),m&&m.value&&c.a.createElement(A.a,{variant:"body2",component:"p",className:l.regionField},c.a.createElement(g.Text,{field:m})),d&&c.a.createElement(A.a,{component:"p",variant:"body1",className:l.timing},c.a.createElement(g.Text,{field:d})),u&&u.value&&c.a.createElement(A.a,{component:"p",variant:"body1",className:l.description},c.a.createElement(M.a,{innerHTML:u})),v&&c.a.createElement(w.a,{component:"span",buttonType:"secondary",hasBorder:!1,isStartIcon:!0,size:"small",field:b,onClick:function(){var e=Object(n.a)(Object(n.a)({},C.a.pageBodyInteraction.readMoreBtnClick),{label:Object(B.a)([i,r,x&&x.value])});Object(B.b)(e)}},c.a.createElement(A.a,{component:"span",variant:"body2Bold"},c.a.createElement(g.Text,{field:{value:v}})))):null},U=t(299),H=t(232),L=t(947),D=t(10),V=function(e){var a=p()(e,"sitecoreContext.route.fields.dayItineraries",[]),t=e&&e.t&&e.t("readmore"),d=Object(r.useState)(0),u=Object(i.a)(d,2),y=u[0],k=u[1],T=function(e){return function(a,t){k(!!t&&e)}},I=N(),w=[],C=function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1],r=p()(t,"fields.image.value"),c=p()(n,"fields.image.value"),o=p()(r,"3x2-m"),l=p()(c,"4x5-m");return[o&&{value:{src:r.src,"3x2":o}},l&&{value:{src:c.src,"4x5":l}}]};a&&a.length>0&&a.forEach((function(e){p()(e,"fields.stops",[]).forEach((function(e){var a=C(p()(e,"fields.gallery",[])),t=Object(i.a)(a,2),n=t[0],r=t[1],c=p()(n,"value[3x2]",""),o=p()(r,"value[4x5]","");w.push(c),w.push(o)}))})),w=w.filter((function(e){return e}));var B=Object(o.a)("(max-width:".concat(s.b.values.lg,"px)"));return c.a.createElement("div",{className:"dayHighlightWrapper"},c.a.createElement(b.a,{desktopImageArray:w}),a&&a.length>0&&a.map((function(a,r){var o=(a||{}).fields,s=void 0===o?{}:o,d=s.shortDescription,u=s.title,b=s.dayTripHighlights,k=s.description,N=k&&k.value&&c.a.createElement(h.a,{item:!0,className:"dayHighdescription"},c.a.createElement(A.a,{component:"p",variant:"body1"},c.a.createElement(M.a,{innerHTML:k})));return c.a.createElement(x.a,{key:r,"data-locator":"DayHighlight"},s&&c.a.createElement(h.a,{classes:{root:I.root}},d&&c.a.createElement(f.a,{text:d}),c.a.createElement(h.a,{container:!0,spacing:4},c.a.createElement(h.a,{item:!0,xs:12,lg:5},u&&c.a.createElement(A.a,{component:"h4",variant:"h4"},c.a.createElement(g.Text,{field:u}))),B&&N,c.a.createElement(h.a,{item:!0,xs:12,lg:7,className:I.iconWrapper},b&&b.map((function(e,a){return c.a.createElement(h.a,{item:!0,container:!0,direction:"row",key:a},c.a.createElement(v.a,{iconImage:p()(e,"fields.highlightType.fields.icon",""),iconWithCircle:!1,className:Object(D.a)(I.iconWithText,"hightlight-icon"),variant:"square"},c.a.createElement(O.a,null,c.a.createElement(A.a,{variant:"body3",component:"p",className:I.highlightType},c.a.createElement(g.Text,{field:p()(e,"fields.highlightType.fields.label",{value:""})})),c.a.createElement(A.a,{variant:"body1Bold",component:"p"},c.a.createElement(g.Text,{field:p()(e,"fields.text",{value:""})})))))})))),!B&&N,c.a.createElement(m.a,{lgUp:!0,implementation:"css"},c.a.createElement(O.a,{component:"div",className:I.divider},c.a.createElement(l.a,{component:"div"}))),c.a.createElement(m.a,{lgUp:!0,implementation:"css"},s&&s.stops&&s.stops.map((function(a,n){var r=(a||{}).fields,o=void 0===r?{}:r,l=C(p()(o,"gallery",[])),s=Object(i.a)(l,1)[0];return o.frontImage=s,c.a.createElement(E.a,{className:I.Accordion,key:n,tabIdentifier:n,expanded:y,handleChange:T},c.a.createElement(S,{name:p()(a,"fields.name",{value:""})}),c.a.createElement(G,Object.assign({},a,{stopTitle:"".concat(Object(L.a)("stop")," ").concat(n+1),readMoreText:t,pageName:Object(H.b)(e),componentName:Object(H.a)(e)})))}))),c.a.createElement(m.a,{mdDown:!0,implementation:"css"},function(a){var r=a.stops&&a.stops.map((function(a,r){var c=(a||{}).fields,o=C(p()(c,"gallery",[])),l=Object(i.a)(o,2),s=l[0],m=l[1];return{data:W(Object(n.a)(Object(n.a)({},c),{},{stopTitle:"".concat(Object(L.a)("stop")," ").concat(r+1),frontImage:s,rearImage:m,readMoreText:t,index:r,classes:I,pageName:Object(H.b)(e),componentName:Object(H.a)(e)})),label:p()(a,"fields.name.value","")}}));return c.a.createElement(j.a,{tabs:r})}(s))))})))};a.default=Object(U.a)(Object(g.withSitecoreContext)()(Object(u.b)()(V)))},944:function(e,a,t){"use strict";var n=t(959),i=t(6),r=t(4),c=[0,1,2,3,4,5,6,7,8,9,10],o=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var s=t(302),m=t.n(s)()((function(e){return Object(r.a)(Object(r.a)({root:Object(i.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(t["spacing-".concat(a,"-").concat(n)]={margin:"-".concat(l(i,2)),width:"calc(100% + ".concat(l(i),")"),"& > $item":{padding:l(i,2)}})})),t}(e,"xs")),e.breakpoints.keys.reduce((function(a,t){return function(e,a,t){var n={};o.forEach((function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object.assign(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a}),{}))}),{name:"MuiGrid"})(n.a);a.a=m},946:function(e,a,t){"use strict";var n=t(553),i=t(51),r=t(212),c=t(554),o=t(213),l=t(216),s=t(215),m=t(555),d=t(217),p=t(220),g=t(218),u=t(931),b=Object(n.a)(Object(i.a)(r.h,c.a,o.d,l.b,s.c,m.a,d.b,p.b,g.a)),x=Object(u.a)("div")(b,{name:"MuiBox"});a.a=x},947:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(102),i=function(e){return n.a.t&&n.a.t(e)||""}},948:function(e,a,t){"use strict";var n=t(6),i=t(109),r=t(0),c=t.n(r),o=t(10),l=t(38),s=t(145),m=t.n(s),d=t(4),p=c.a.forwardRef((function(e,a){var t,r=e.classes,l=e.className,s=void 0===l?"":l,d=e.component,p=void 0===d?"div":d,g=e.fixed,u=void 0!==g&&g,b=e.maxWidth,x=void 0===b?"xl":b,h=e.useContainer,f=void 0===h||h,A=e.overflowHidden,v=void 0!==A&&A,O=Object(i.a)(e,["classes","className","component","fixed","maxWidth","useContainer","overflowHidden"]),j=c.a.createElement(p,Object.assign({className:Object(o.a)(r.root,(t={},Object(n.a)(t,r.fixed,u),Object(n.a)(t,r["maxWidth".concat(m()(String(x)))],!1!==x),t),s),ref:a},O));return f?c.a.createElement("section",{className:Object(o.a)(r.root,Object(n.a)({},r.overflowHidden,v))},j):e.children}));a.a=Object(l.a)((function(e){return Object(d.a)(Object(d.a)({root:{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:"0",paddingRight:"0"}},{}),{},{fixed:Object.keys(e.breakpoints.values).reduce((function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:"100%"}),overflowHidden:{overflow:"hidden"}})}),{name:"MuiContainer"})(p)},950:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(47),c=t(296),o=t(4),l=t(847),s=Object(l.a)((function(e){return{root:{"&.MuiTypography-root":{paddingBottom:e.spacing(1),position:"relative",marginBottom:e.spacing(1)},"&:before":Object(o.a)(Object(o.a)({content:"''",width:e.spacing(3),height:"1px",position:"absolute",bottom:"0"},e.mixins.left(0)),{},{backgroundColor:e.mixins.Black()})}}})),m=function(e){var a=e.text,t=e.className,n=e.variant,o=s();return a&&a.value?i.a.createElement(c.a,{variant:n,component:"div",classes:{root:"".concat(o.root," ").concat(t)}},i.a.createElement(r.Text,{field:a})):null};m.defaultProps={className:"",variant:"body2"};a.a=m},953:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){return e.replace(/\\/g,"")}},955:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(953),c=t(47),o=t(118),l=t(10),s=t(4),m=t(847),d=t(1),p=Object(m.a)((function(e){return{richTextWrap:{"& h1":Object(s.a)(Object(s.a)({},e.typography.h1),{},{marginTop:Object(d.h)(32),marginBottom:Object(d.h)(32)}),"& h2":Object(s.a)(Object(s.a)({},e.typography.h2),{},{marginTop:Object(d.h)(32),marginBottom:Object(d.h)(32)}),"& h3":Object(s.a)(Object(s.a)({},e.typography.h3),{},{marginTop:Object(d.h)(32),marginBottom:Object(d.h)(32)}),"& h4":Object(s.a)(Object(s.a)({},e.typography.h4),{},{marginTop:Object(d.h)(32),marginBottom:Object(d.h)(32)}),"& h5":Object(s.a)(Object(s.a)({},e.typography.h5),{},{marginBottom:Object(d.h)(16)}),"& h6":Object(s.a)(Object(s.a)({},e.typography.body1Regular),{},{marginBottom:Object(d.h)(16)}),"& p":Object(s.a)(Object(s.a)({},e.typography.body1),{},{color:e.palette.text.darkGrey,margin:"0 0 ".concat(e.spacing(2))}),"& ul":{color:e.palette.text.darkGrey},"& ol":{color:e.palette.text.darkGrey},"& a":Object(s.a)(Object(s.a)({},e.typography.body1),{},{color:e.palette.common.AbuDhabiRed}),"& strong, & b":{fontFamily:e.typography.fontFamily.primaryBold}}}}));a.a=function(e){var a=e.innerHTML,t=e.className,n=p(),s=Object(o.isExperienceEditorActive)(),m=a&&a.value&&a.value.replace(/\s*style=(["'])(.*?)\1/g,"");return s?i.a.createElement(c.RichText,{className:Object(l.a)(n.richTextWrap,t||"","richText","richTextSitecore"),field:a}):a&&a.value?i.a.createElement("div",{className:"".concat(n.richTextWrap," ").concat(t||""," richText"),dangerouslySetInnerHTML:{__html:Object(r.a)(m)}}):null}},956:function(e,a,t){"use strict";a.a={"1x1":{mobile:"1x1",desktop:"1x1"},"2x1":{mobile:"2x1",desktop:"2x1"},"3x2":{mobile:"3x2",desktop:"3x2"},"3x2-m":{mobile:"3x2-m",desktop:"3x2-m"},"3x2-card":{mobile:"3x2-card",desktop:"3x2-card"},"4x5":{mobile:"4x5",desktop:"4x5"},"4x5-m":{mobile:"4x5-m",desktop:"4x5-m"},"16x9":{mobile:"16x9",desktop:"16x9"},"16x9-m":{mobile:"16x9-m",desktop:"16x9-m"},"16x6":{mobile:"16x9",desktop:"16x6"}}},962:function(e,a,t){"use strict";var n=t(109),i=t(0),r=t.n(i),c=t(1028);a.a=function(e){var a=e.className,t=e.children,i=Object(n.a)(e,["className","children"]);return r.a.createElement(c.a,Object.assign({className:a},i),t)}},968:function(e,a,t){"use strict";var n=t(109),i=t(0),r=t.n(i),c=t(10),o=t(33),l=t.n(o),s=t(946),m=t(962),d=t(301),p=t(99),g=t(4),u=t(847),b=t(1),x=Object(u.a)((function(e){return{"@global":{".hightlight-icon":{"& img":{width:"inherit",maxWidth:"100%",objectFit:"contain"},"& .MuiAvatar-root":{width:"auto",height:"auto"}}},root:{display:"flex",alignItems:"center",transform:function(e){return!e&&"translateX(-10px)"}},textThenIcon:{"& .MuiAvatar-root":Object(g.a)(Object(g.a)({},e.mixins.marginLeft(Object(b.h)(10))),{},{background:function(e){return!e&&"transparent"}})},iconThenText:{"& .MuiAvatar-root":Object(g.a)(Object(g.a)({},e.mixins.marginRight(Object(b.h)(10))),{},{background:function(e){return!e&&"transparent"}})}}})),h=function(e){var a=e.className,t=e.iconType,i=void 0===t?"FallbackCheckIcon":t,o=e.avatarClassName,g=e.children,u=e.isTextThenIcon,b=e.iconWithCircle,h=e.iconImage,f=e.isAnimate,A=Object(n.a)(e,["className","iconType","avatarClassName","children","isTextThenIcon","iconWithCircle","iconImage","isAnimate"]),v=x(b);return u?r.a.createElement(s.a,{className:Object(c.a)(v.root,v.textThenIcon,a)},g,r.a.createElement(m.a,Object.assign({className:o},A),l()(h,"value.src","").length>1?r.a.createElement(d.a,{media:{image:h,mobileImage:h,renditionNeeded:!1,fallbackBackgroundNeeded:!1},isParalax:!1}):f?r.a.createElement("span",{className:"animateIcon"},r.a.createElement(p.a,{name:i})):r.a.createElement(p.a,{name:i}))):r.a.createElement(s.a,{className:Object(c.a)(v.root,v.iconThenText,a)},r.a.createElement(m.a,Object.assign({className:o},A),l()(h,"value.src","").length>1?r.a.createElement(d.a,{media:{image:h,mobileImage:h,renditionNeeded:!1,fallbackBackgroundNeeded:!1},isParalax:!1}):f?r.a.createElement("span",{className:"animateIcon"},r.a.createElement(p.a,{name:i})):r.a.createElement(p.a,{name:i})),g)};h.defaultTypes={className:"",isTextThenIcon:!1,iconWithCircle:!0,isAnimate:!1,iconImage:""};a.a=h},989:function(e,a,t){"use strict";var n=t(109),i=t(175),r=t(0),c=t.n(r),o=t(10),l=t(298),s=t(1539),m=t(33),d=t.n(m),p=t(1520),g=t(296),u=t(47),b=t(118),x=t(6),h=t(4),f=t(847),A=t(1),v=Object(f.a)((function(e){var a;return{root:{"&.MuiTab-root":Object(h.a)(Object(h.a)({},e.mixins.marginRight(Object(A.h)(20))),{},(a={minWidth:"auto",padding:0,color:e.palette.text.tertiary,minHeight:Object(A.h)(30)},Object(x.a)(a,e.breakpoints.up("lg"),Object(h.a)(Object(h.a)({},e.mixins.marginRight(Object(A.h)(40))),{},{position:"relative"})),Object(x.a)(a,"&.Mui-selected, &:hover",{color:e.mixins.Black()}),Object(x.a)(a,"&:last-child",Object(h.a)({},e.mixins.marginRight(0))),a))}}})),O=function(e){var a=e.label,t=Object(n.a)(e,["label"]),i=(Object(b.isExperienceEditorActive)(),v()),r=c.a.createElement(g.a,{variant:"body2Bold",component:"span"},c.a.createElement(u.Text,{field:{value:a}}));return c.a.createElement(p.a,Object.assign({className:i.root,label:r},t))};O.defaultProps={disableRipple:!0};var j=O,E=function(e){var a=e.children,t=e.value,i=e.index,r=Object(n.a)(e,["children","value","index"]);return c.a.createElement("div",Object.assign({className:"tabPanelContainer",role:"tabpanel",hidden:t!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i)},r),t===i&&a)};E.defaultProps={timeout:800};var y=E,k=Object(f.a)((function(e){var a;return{root:{backgroundColor:e.palette.background.transparent,"& .MuiTabs-root":(a={marginTop:Object(A.h)(24),marginBottom:Object(A.h)(24),minHeight:Object(A.h)(30),alignItems:"center"},Object(x.a)(a,e.breakpoints.up("lg"),{marginTop:Object(A.h)(48),marginBottom:Object(A.h)(32)}),Object(x.a)(a,"& .MuiTabs-indicator",{background:e.mixins.AbuDhabiRed(),height:Object(A.h)(4),transitionDuration:"500ms"}),a),"& .MuiTabs-flexContainer":{borderBottom:e.borders.divider,transition:"border-color .5s ease",display:"inline-block",width:"max-content","&:hover":{"& .Mui-selected":{borderColor:"transparent"}}}}}})),N=t(46),T=t(110),I=Object(r.forwardRef)((function(e,a){var t,m=k(),p=Object(l.a)(),g=c.a.useState(0),u=Object(i.a)(g,2),b=u[0],x=u[1],h=e.tabs,f=e.className,A=e.textColor,v=e.tabIcon,O=e.variant,E=e.onTabChange,I=e.animateSettings,C=void 0===I?{}:I,B=Object(n.a)(e,["tabs","className","textColor","tabIcon","variant","onTabChange","animateSettings"]),M=C.willAnimate,R=void 0===M||M,W=C.delay,S=void 0===W?0:W,G=Object(r.useRef)(null),U=Object(r.useRef)(null);if(Object(r.useImperativeHandle)(a,(function(){return{animPlay:function(){t&&t.play()},animReverse:function(){t&&t.reverse()}}})),Object(r.useEffect)((function(){N.a.registerPlugin(T.a),setTimeout((function(){var e=!1;G.current&&R&&((t=N.a.fromTo(G.current,{opacity:0,y:"16px",ease:"power1.out",paused:!0},{y:"0px",opacity:1},"+=".concat(S))).pause(),N.a.timeline({scrollTrigger:{trigger:U.current,start:"top bottom",end:"+=".concat(.2*window.innerHeight,"px bottom"),scrub:!0,once:!0,onUpdate:function(a){a.progress>.15?(t&&t.play(),e=!0):e&&t&&t.reverse()}}}))}),100)}),[]),!h)return null;var H=h&&h.map((function(e){return d()(e,"label","").toLowerCase().replace(/\s/g,"")}));return c.a.createElement("div",{className:Object(o.a)(m.root,f),ref:U},c.a.createElement(w,{condition:R,wrapper:function(e){return c.a.createElement("div",{ref:G},e)}},c.a.createElement(s.a,Object.assign({value:b,onChange:function(e,a){x(a),E(a)},textColor:A,variant:O,scrollButtons:"auto"},B),h&&h.map((function(e,a){return c.a.createElement(j,{key:a,label:e.label,id:"tab-".concat(H[a],"-").concat(a),"aria-controls":"tabpanel-".concat(H[a],"-").concat(a),icon:v})})))),h&&h.map((function(e,a){return c.a.createElement(y,{key:a,value:b,index:a,dir:p.direction,id:"tabpanel-".concat(H[a],"-").concat(a),"aria-labelledby":"tab-".concat(H[a],"-").concat(a)},e.data)})))}));I.displayName="CustomTabs",I.defaultProps={textColor:"primary",className:"",variant:"scrollable",onTabChange:function(){}};var w=function(e){var a=e.condition,t=e.wrapper,n=e.children;return a?t(n):n};a.a=I}}]);
//# sourceMappingURL=DayHighlight.422959a7.chunk.js.map