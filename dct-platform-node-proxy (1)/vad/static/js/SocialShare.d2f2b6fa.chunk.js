(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[72],{1049:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(0),i=function(e){Object(a.useEffect)((function(){var t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return"";var n=document.createElement("script");return n.src=e,n.async=t,document.body.appendChild(n),n}(e);return function(){!function(e){e&&document.body.removeChild(e)}(t)}}),[e])},r=n(175),o=[];function c(e){var t=Object(a.useState)({loaded:!1,error:!1}),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){if(!o.includes(e)){o.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=function(){c({loaded:!0,error:!1})},a=function(){var n=o.indexOf(e);n>=0&&o.splice(n,1),t.remove(),c({loaded:!0,error:!0})};return t.addEventListener("load",n),t.addEventListener("error",a),document.body.appendChild(t),function(){t.removeEventListener("load",n),t.removeEventListener("error",a)}}c({loaded:!0,error:!1})}),[e]),[i.loaded,i.error]}},913:function(e,t,n){"use strict";n.r(t);var a=n(175),i=n(0),r=n.n(i),o=n(14),c=n.n(o),s=n(47),l=n(143),d=n(944),u=n(6),f=n(4),x=n(847),m=n(1),g=Object(x.a)((function(e){var t;return{root:Object(f.a)(Object(f.a)({display:"none"},e.shape.componentSpacing),{},(t={},Object(u.a)(t,e.breakpoints.up("lg"),{display:"block",marginTop:e.spacing(11)}),Object(u.a)(t,"& .at-style-responsive .at-share-btn",Object(f.a)({margin:0},e.mixins.marginRight(Object(m.h)(10)))),t)),header:Object(u.a)({},e.breakpoints.up("lg"),{marginBottom:Object(m.h)(24)})}})),p=n(1049),v=n(48),b=n(299),h=n(53),w=n(296),j=n(948),O=n(951),C=n(45),y=n(947),S=n(939),E=function(e){var t=g(),n={value:Object(y.a)("addThis")},o={value:Object(y.a)("targetClass")},c=Object(i.useState)(!1),s=Object(a.a)(c,2),l=s[0],u=s[1],f=Object(C.get)(e,"sitecoreContext.route.fields.isSocialShareAvailable.value","");if(Object(p.a)(l&&f&&"".concat(h.F).concat(n?n.value:"")),Object(i.useEffect)((function(){window.handleSocialShareComponentVisibility=function(){u(!0)},window.GTMLoaded&&window.handleSocialShareComponentVisibility()}),[]),!l||!f)return r.a.createElement("div",{id:"social-share-component"});var x=Object(C.get)(e,"sitecoreContext.language",h.v.DEFAULT);return Object(O.e)(x)?null:n&&n.value&&o&&o.value?(v.a&&(window.addthis_config={},window.addthis_config.lang=x),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(d.a,{"data-locator":"SocialShare",className:t.root},r.a.createElement(d.a,{item:!0,xs:12,className:t.header},r.a.createElement(w.a,{variant:"h5Bold",component:"h2"},Object(y.a)("socialShareHeading"))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement("div",{className:o.value})))))):(console.error("Socialshare key or class name are not provided."),"")};E.defaultProps={fields:c.a.shape({key:{value:""}})};t.default=Object(b.a)(Object(s.withSitecoreContext)()(Object(l.b)()(E)))},944:function(e,t,n){"use strict";var a=n(959),i=n(6),r=n(4),o=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var l=n(302),d=n.n(l)()((function(e){return Object(r.a)(Object(r.a)({root:Object(i.a)({marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up("lg"),{marginLeft:"5.5%",marginRight:"5.5%"}),container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0",marginRight:"0"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(s(i,2)),width:"calc(100% + ".concat(s(i),")"),"& > $item":{padding:s(i,2)}})})),n}(e,"xs")),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object.assign(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(a.a);t.a=d},947:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(102),i=function(e){return a.a.t&&a.a.t(e)||""}},948:function(e,t,n){"use strict";var a=n(6),i=n(109),r=n(0),o=n.n(r),c=n(10),s=n(38),l=n(145),d=n.n(l),u=n(4),f=o.a.forwardRef((function(e,t){var n,r=e.classes,s=e.className,l=void 0===s?"":s,u=e.component,f=void 0===u?"div":u,x=e.fixed,m=void 0!==x&&x,g=e.maxWidth,p=void 0===g?"xl":g,v=e.useContainer,b=void 0===v||v,h=e.overflowHidden,w=void 0!==h&&h,j=Object(i.a)(e,["classes","className","component","fixed","maxWidth","useContainer","overflowHidden"]),O=o.a.createElement(f,Object.assign({className:Object(c.a)(r.root,(n={},Object(a.a)(n,r.fixed,m),Object(a.a)(n,r["maxWidth".concat(d()(String(p)))],!1!==p),n),l),ref:t},j));return b?o.a.createElement("section",{className:Object(c.a)(r.root,Object(a.a)({},r.overflowHidden,w))},O):e.children}));t.a=Object(s.a)((function(e){return Object(u.a)(Object(u.a)({root:{width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:"0",paddingRight:"0"}},{}),{},{fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(a.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(a.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(a.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(a.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(a.a)({},e.breakpoints.up("xl"),{maxWidth:"100%"}),overflowHidden:{overflow:"hidden"}})}),{name:"MuiContainer"})(f)},951:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"h",(function(){return x}));var a=n(48),i=n(53),r=n(45),o={writeSessionCookie:function(e,t){a.a&&(document.cookie=e+"="+t+"; path=/; secure;")},write:function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var r="expires="+i.toUTCString();a.a&&(document.cookie=e+"="+t+"; "+r+"; path=/; secure;")},read:function(e){return a.a&&document.cookie.indexOf(e)>-1?document.cookie.split(e)[1].split("; ")[0].substr(1):""},delete:function(e){var t=new Date;t.setTime(t.getTime()-1e3);var n="expires="+t.toUTCString();a.a&&(document.cookie=e+"=; "+n)}};t.b=o;var c="_country",s=function(e){var t=o.read(c)&&o.read(c).toLocaleLowerCase(),n=Object(r.get)(e,"language",i.v.DEFAULT);return t===i.s||x(n,i.v.CHINESE)},l=function(){var e=a.a&&window.location.hostname.split("."),t=e&&e[e.length-1];return t&&"cn"===t.toLowerCase()},d=function(e){return(o.read(c)&&o.read(c).toLocaleLowerCase())===i.s&&!x(e,i.v.CHINESE)},u=function(e){return!((o.read(c)&&o.read(c).toLocaleLowerCase())!==i.s&&!x(e,i.v.CHINESE))},f=function(e){if(x(e,i.v.CHINESE))return!0;var t=a.a&&window.location.hostname;return(t&&t.substr(t.lastIndexOf(".")))===i.h.CHINA},x=function(e,t){return(e&&e.toLowerCase())===(t&&t.toLowerCase())}},959:function(e,t,n){"use strict";var a=n(16),i=n(3),r=n(0),o=(n(14),n(10)),c=n(38),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,x=void 0===f?"div":f,m=e.container,g=void 0!==m&&m,p=e.direction,v=void 0===p?"row":p,b=e.item,h=void 0!==b&&b,w=e.justify,j=void 0===w?"flex-start":w,O=e.lg,C=void 0!==O&&O,y=e.md,S=void 0!==y&&y,E=e.sm,k=void 0!==E&&E,W=e.spacing,L=void 0===W?0:W,I=e.wrap,N=void 0===I?"wrap":I,M=e.xl,T=void 0!==M&&M,z=e.xs,D=void 0!==z&&z,H=e.zeroMinWidth,G=void 0!==H&&H,B=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(d.root,u,g&&[d.container,0!==L&&d["spacing-xs-".concat(String(L))]],h&&d.item,G&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==N&&d["wrap-xs-".concat(String(N))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==T&&d["grid-xl-".concat(String(T))]);return r.createElement(x,Object(i.a)({className:R,ref:t},B))})),f=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f}}]);
//# sourceMappingURL=SocialShare.d2f2b6fa.chunk.js.map