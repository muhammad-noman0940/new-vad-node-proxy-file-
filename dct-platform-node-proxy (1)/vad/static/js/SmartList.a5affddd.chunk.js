(this.webpackJsonpvad=this.webpackJsonpvad||[]).push([[71],{1e3:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(t,e){if(t){var a=t.querySelectorAll(e);if(a){a.forEach((function(t){t.style.height=""}));var n=Array.prototype.slice.call(a).map((function(t){return[t,t.offsetHeight]})),c=Math.max.apply(null,n.map((function(t){return t[1]})));a.forEach((function(t){t.style.height=c+"px"}))}}}},1007:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(t,e){var a=[];return(e=e&&e.split(","))&&e.length>0&&e.forEach((function(e){t[e]&&t[e].length>0&&t[e][0]&&a.push(t[e][0])})),a}},1008:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="";if(t&&t.length>0){var a=[[1,200],[201,500],[501]],n=["$","$$","$$$"],c=[];t.forEach((function(t){var e=t.split(/[\ \-]/),a=[];e.forEach((function(t){var e=parseInt(t);e&&(t.indexOf("+")>-1&&e++,a.push(e))})),c.push(Math.max.apply(Math,a))}));var r=Math.max.apply(Math,c);a.forEach((function(t,a){t[1]?r>=t[0]&&r<=t[1]&&(e=n[a]):r>=t[0]&&(e=n[a])}))}return e}},1095:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(48),c=a(947),r=function(t,e){var a=Object(c.a)("eventListingPageUrl");return n.a&&window&&window.location?"".concat(window.location.origin,"/").concat(e.toLowerCase()).concat(a,"/").concat(t.urlSlug?t.urlSlug:""):"/".concat(e.toLowerCase()).concat(a,"/").concat(t.urlSlug?t.urlSlug:"")}},877:function(t,e,a){"use strict";a.r(e),a.d(e,"mapDispatchToProps",(function(){return N})),a.d(e,"mapStateToProps",(function(){return _}));var n=a(0),c=a.n(n),r=a(144),o=a(304),i=a(4),l=a(175),u=a(143),s=a(47),g=a(944),p=a(300),b=a(1018),m=a(45),f=a(118),d=a(6),O=a(847),j=a(1),h=a(53),v=Object(O.a)((function(t){var e;return{root:(e={marginBottom:Object(j.h)(48)},Object(d.a)(e,t.breakpoints.up("lg"),{marginBottom:Object(j.h)(64)}),Object(d.a)(e,"& h2",Object(d.a)({fontFamily:t.typography.fontFamily.secondaryBoldCapt,letterSpacing:Object(j.h)(0)},t.breakpoints.up("lg"),{letterSpacing:Object(j.h)(-.8)})),Object(d.a)(e,"& .card-description",{borderBottom:"0",boxShadow:t.shadows[4]}),Object(d.a)(e,"& .seeAllBtn .MuiButton-endIcon",{backgroundColor:function(t){return t.pageContentType===h.l&&h.E}}),e),spacing:Object(d.a)({margin:"0 ".concat(t.spacing(-1.5)),width:"auto","& .MuiGrid-grid-lg-4":Object(d.a)({padding:"0 ".concat(t.spacing(1.5)),marginBottom:t.spacing(3)},t.breakpoints.down("md"),{flex:"0 0 83.333333%",maxWidth:"83.33%",padding:"0 ".concat(t.spacing(2)),marginBottom:t.spacing(2)})},t.breakpoints.down("md"),Object(i.a)({flexWrap:"nowrap",overflowX:"auto",margin:"0 ".concat(t.spacing(-3)),paddingTop:0,paddingBottom:0},t.mixins.paddingLR(t.spacing(1),t.spacing(3)))),alignRight:Object(d.a)({textAlign:t.mixins.textRight("right")},t.breakpoints.down("md"),{display:"none"}),bottomSpacing:Object(d.a)({marginBottom:t.spacing(3)},t.breakpoints.up("lg"),{marginBottom:t.spacing(2)}),"@global":{"html:lang(ar) .smart-list-wrapper .MuiChip-root":{whiteSpace:"unset",height:"auto"},"html:lang(ar) .smart-list-wrapper .MuiChip-root .MuiChip-label":{whiteSpace:"unset"}}}})),y=a(296),w=a(997),x=a(48),E=a(1e3),S=a(297),C=a(231),T=a(1007),L=a(1095),k=a(978),I=a(947),B=a(1008),M=a(232),R=Object(s.withSitecoreContext)()(Object(u.b)()((function(t){var e,a=t.getSmartListStart,r=t.updateMultipleFiltersData,o=t.resetSmartList,u=t.contentListData,d=t.fields,O=t.sitecoreContext,j=t.appConfig,R=void 0===j?{}:j,A=Object(m.get)(O,"route.fields.contentType.fields.taxonomyKey.value","").toLowerCase(),D=Object(n.useRef)(null),P=v({pageContentType:A}),K=Object(n.useState)(""),N=Object(l.a)(K,2),_=N[0],F=N[1],$=d.title,U=d.filterType,z=d.seeMore,G=d.contentType,q=d.limit,J=d.disableSmartList,W=d.result,H=W&&W.results,X=H&&H.length>0,Q=O&&O.route&&O.route.fields&&O.route.fields.googlePlaceId,V=O&&O.pageState&&O.pageState.toLowerCase();if(e=!(!Object(f.isExperienceEditorActive)()&&"preview"!==V),Object(n.useEffect)((function(){if(O.language&&!X&&d&&J&&!J.value){var t="smartList".concat((n=100,c=1e4,Math.floor(Math.random()*(c-n+1)+n)));o&&o();a(function(){var t=U&&U.length>0&&U.map((function(t){return{key:Object(m.get)(t,"fields.taxonomyKey.value",""),value:Object(m.get)(t,"fields.searchKey.value","")}}));return Y&&t&&t.push({key:Object(m.get)(Y,"taxonomyKey.value",""),value:Object(m.get)(Y,"searchKey.value","")}),{contentType:Object(m.get)(G,"fields.taxonomyKey.value",""),language:O&&O.language,facetFields:[],limit:parseInt(Object(m.get)(q,"value","")),offset:0,filters:t,isPreviewMode:e}}(),t),F(t)}var n,c}),[O.language]),Object(n.useEffect)((function(){if(x.a){var t=document.querySelectorAll(".seeAllBtn");t&&t.forEach((function(t){return t.addEventListener("click",(function(){window.scroll({top:"0",left:"0",behavior:"smooth"})}))})),Object(E.a)(D.current,".bot-area")}})),Object(n.useEffect)((function(){x.a&&window.addEventListener("resize",(function(){Object(E.a)(D.current,".bot-area")}))}),[]),!d)return null;var Y=Object(m.get)(O,"route.fields.category.fields",""),Z=Object(I.a)(A).split(","),tt=Object(I.a)("outOf5"),et=Object(k.a)({sitecoreContext:O}),at=u&&u.data.filter((function(t){return t.id===_})),nt=H&&H||Object(m.get)(at[0],"data.data.results",""),ct=H&&H.length||Object(m.get)(at[0],"data.data.totalResults",""),rt=!(!W||!W.totalResults)&&parseInt(W.totalResults)>parseInt(Object(m.get)(q,"value",""));rt||(rt=!(!nt||!ct)&&parseInt(ct)>parseInt(Object(m.get)(q,"value","")));var ot,it=function(){!function(){var e=Object(i.a)(Object(i.a)({},Object(m.get)(C.a,"pageBodyInteraction.arrowClick")),{label:Object(S.a)([Object(M.b)(t),Object(M.a)(t),"".concat($&&$.value," - ").concat(Object(m.get)(z,"value.text"))])});Object(S.b)(e)}();var e=U&&U.length>0&&U.map((function(t){return{key:Object(m.get)(t,"fields.taxonomyKey.value",""),value:Object(m.get)(t,"fields.searchKey.value","")}}));r(e)};return ct>0?c.a.createElement("div",{className:"".concat(P.root," smart-list-wrapper"),"data-locator":"SmartList",ref:D},c.a.createElement(g.a,{container:!0,classes:{root:P.bottomSpacing}},ct>0&&c.a.createElement(g.a,{item:!0,xs:12,lg:8},c.a.createElement(y.a,{variant:"h5Bold",component:"h2"},$&&c.a.createElement(s.Text,{field:$}))),rt&&c.a.createElement(g.a,{item:!0,lg:4,classes:{root:P.alignRight}},c.a.createElement(p.a,{component:"span",buttonType:"primary",hasBorder:!1,size:"small",onClick:it,className:"seeAllBtn"},Object(m.get)(z,"value.text","")))),c.a.createElement(g.a,{container:!0,classes:{root:P.spacing}},nt&&nt.map((function(e,a){ot=Object(T.a)(e,Object(I.a)("".concat(A).concat(h.G)));var n=Object(B.a)(e.priceTags),r=[];Z&&Z.length>0&&Z.forEach((function(t){r[t]=Object(m.get)(e,t,"")}));var o={src:Object(m.get)(e,"thumbnailImage",""),alt:Object(m.get)(e,"name",""),"3x2-card":{large:Object(m.get)(e,"thumbnailImage","")}},i={value:A===h.l?o:Object(m.get)(e,"thumbnailImage","")};return c.a.createElement(g.a,{item:!0,lg:4,key:a},c.a.createElement(b.a,Object.assign({title:Object(m.get)(e,"name",""),desktopImage:i,mobileImage:i,aspectRatioNeeded:G!==h.l,imageCtaUrl:A===h.l?Object(L.a)(e,et):Object(m.get)(e,"itemUrl",""),ctaLink:ot,cardType:A===h.l?h.l:h.x,ratingOutOf:tt,sectionTitle:$,pageName:Object(M.b)(t),componentName:Object(M.a)(t)},r,function(t){var e,a={};return A===h.l&&(t.isFeatured&&(e=Object(I.a)("featuredText")||""),a={startDate:t.startDate,endDate:t.endDate,openTime:t.openTime,closeTime:t.closeTime,umbrellaEventCount:t.umbrellaEventCount,isEventListing:!0,peopleInterested:t.interestedCount&&"".concat(t.interestedCount," ").concat(Object(I.a)("interestedText")),eventType:{featured:e,isPaid:t.eventType},locationTitle:Object(m.get)(t,"location_Titles.length")>0&&t.location_Titles[0],region:Object(m.get)(t,"location_Regions.length")>0&&t.location_Regions[0],language:et,urlSlug:t.urlSlug}),a}(e),{expenseRange:n,viewsCount:Object(m.get)(e,"viewsCount",""),num_reviews:Object(m.get)(e,"tripAdvisorNumberOfReviews",""),rating_image_url:Object(m.get)(e,"tripAdvisorRatingImageURL",""),googlePlaceId:Object(m.get)(e,"googlePlaceId",""),defaultGooglePlaceId:Q,language:et,appConfig:R})))}))),rt&&c.a.createElement(w.a,{lgUp:!0,implementation:"css"},c.a.createElement(p.a,{buttonType:"primary",hasBorder:!1,size:"small",onClick:it,className:"seeAllBtn"},Object(m.get)(z,"value.text","")))):""}))),A=a(91),D=a(228),P=Object(r.a)((function(t){return t}),(function(t){return t.SmartListReducer})),K=a(299),N=function(t){return{getSmartListStart:function(e,a){return t(Object(D.b)(e,a))},updateMultipleFiltersData:function(e){return t(Object(A.n)(e))},resetSmartList:function(){return t(Object(D.d)())}}},_=Object(r.b)({contentListData:P});e.default=Object(K.a)(Object(o.b)(_,N)((function(t){return c.a.createElement(R,t)})))},978:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(33),c=a.n(n),r=function(t){return c()(t,"sitecoreContext.language","")}}}]);
//# sourceMappingURL=SmartList.a5affddd.chunk.js.map