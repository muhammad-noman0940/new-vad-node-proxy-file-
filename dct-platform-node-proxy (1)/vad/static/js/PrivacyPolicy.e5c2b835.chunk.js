(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[61],{1049:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(0),i=function(e){Object(a.useEffect)((function(){var t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return"";var n=document.createElement("script");return n.src=e,n.async=t,document.body.appendChild(n),n}(e);return function(){!function(e){e&&document.body.removeChild(e)}(t)}}),[e])},r=n(175),c=[];function o(e){var t=Object(a.useState)({loaded:!1,error:!1}),n=Object(r.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){if(!c.includes(e)){c.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=function(){o({loaded:!0,error:!1})},a=function(){var n=c.indexOf(e);n>=0&&c.splice(n,1),t.remove(),o({loaded:!0,error:!0})};return t.addEventListener("load",n),t.addEventListener("error",a),document.body.appendChild(t),function(){t.removeEventListener("load",n),t.removeEventListener("error",a)}}o({loaded:!0,error:!1})}),[e]),[i.loaded,i.error]}},908:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(47),c=n(6),o=n(4),s=n(847),l=n(1),d=n(45),u=Object(s.a)((function(e){var t;return{root:Object(o.a)({background:e.palette.background.lightGray},e.shape.componentSpacing),header:Object(o.a)(Object(o.a)({background:function(t){return Object(d.get)(t,"fields.backgroundColor.fields.colorCode.value")||e.palette.background.default},paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.mixins.paddingLeft(e.spacing(4))),{},Object(c.a)({},e.breakpoints.up("lg"),Object(o.a)({height:e.spacing(42.5),paddingTop:e.spacing(6.5),paddingBottom:e.spacing(0)},e.mixins.paddingLeft(e.spacing(15.13))))),content:(t={background:e.mixins.White(),padding:"".concat(Object(l.h)(32)," ").concat(Object(l.h)(30)),color:e.palette.text.darkGrey},Object(c.a)(t,e.breakpoints.up("lg"),{marginTop:"-".concat(e.spacing(19.5)),padding:"".concat(Object(l.h)(80)," ").concat(Object(l.h)(120))}),Object(c.a)(t,"& h1,h2,h3,h4,h5",{paddingTop:e.spacing(4),fontFamily:e.typography.fontFamily.primaryBold,color:e.palette.text.primary}),Object(c.a)(t,"& h4,h5",{paddingTop:e.spacing(2),color:e.palette.text.primary}),Object(c.a)(t,"& a",{color:e.mixins.AbuDhabiRed()}),t)}})),f=n(1049),g=n(944),p=n(296),x=n(953),m=n(299);t.default=Object(m.a)((function(e){var t=e.fields,n=t.headerText,a=t.privacyPolicyContent,c=t.scriptURL,o=u(e),s=a&&a.value&&Object(x.a)(a.value);return Object(f.a)(c&&c.value),i.a.createElement(g.a,{container:!0,justify:"center",className:o.root,"data-locator":"PrivacyPolicy"},i.a.createElement(g.a,{container:!0,justify:"flex-start",className:o.header},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(p.a,{variant:"h2",component:"h2"},i.a.createElement(r.Text,{field:n})))),s&&i.a.createElement(g.a,{container:!0,md:12,lg:10,className:o.content},i.a.createElement(g.a,{item:!0},c&&c.value&&i.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}))))}))},944:function(e,t,n){"use strict";var a=n(959),i=n(6),r=n(4),c=[0,1,2,3,4,5,6,7,8,9,10],o=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var l=n(302),d=n.n(l)()((function(e){return Object(r.a)(Object(r.a)({root:Object(i.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(s(i,2)),width:"calc(100% + ".concat(s(i),")"),"& > $item":{padding:s(i,2)}})})),n}(e,"xs")),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};o.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object.assign(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(a.a);t.a=d},953:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e.replace(/\\/g,"")}},959:function(e,t,n){"use strict";var a=n(16),i=n(3),r=n(0),c=(n(14),n(10)),o=n(38),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,p=e.container,x=void 0!==p&&p,m=e.direction,v=void 0===m?"row":m,b=e.item,h=void 0!==b&&b,j=e.justify,y=void 0===j?"flex-start":j,w=e.lg,O=void 0!==w&&w,C=e.md,S=void 0!==C&&C,E=e.sm,W=void 0!==E&&E,k=e.spacing,I=void 0===k?0:k,L=e.wrap,G=void 0===L?"wrap":L,M=e.xl,z=void 0!==M&&M,B=e.xs,T=void 0!==B&&B,D=e.zeroMinWidth,N=void 0!==D&&D,R=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(d.root,u,x&&[d.container,0!==I&&d["spacing-xs-".concat(String(I))]],h&&d.item,N&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==G&&d["wrap-xs-".concat(String(G))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==S&&d["grid-md-".concat(String(S))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==z&&d["grid-xl-".concat(String(z))]);return r.createElement(g,Object(i.a)({className:F,ref:t},R))})),f=Object(o.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f}}]);
//# sourceMappingURL=PrivacyPolicy.e5c2b835.chunk.js.map