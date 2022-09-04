(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-718df6fa","chunk-2d237ca6"],{3691:function(e,t,n){e.exports=n.p+"img/illustration_bikegirl.40403c93.png"},"45e0":function(e,t,n){"use strict";n("fa2c")},6320:function(e,t,n){"use strict";n("8585")},"6b4c":function(e,t,n){"use strict";n.r(t);var a=n("9ab4"),r=n("7a23"),c=n("3691"),o=n.n(c),i=n("6c02"),l=function(){var e=Object(r["B"])(),t=function(t){t.deltaY>0?e.value="down":e.value="up"};return window.addEventListener("wheel",t),Object(r["u"])((function(){window.removeEventListener("wheel",t)})),{wheelDirection:e}},s=n("cf65"),u=n("79f6"),b=n("fd2d"),f=n("e11e"),d=n.n(f),v=(n("6cc5"),function(e){return Object(r["y"])("data-v-18383d7c"),e=e(),Object(r["w"])(),e}),p=v((function(){return Object(r["g"])("div",{id:"map-container",class:"map-container"},null,-1)})),h=[p],g=Object(r["l"])({props:{bikeLine:{type:Array,required:!0},restaurants:{type:Array,default:function(){return[]}},attractions:{type:Array,default:function(){return[]}},kilometer:{type:Number,default:0}},emits:["hideRestaurant","hideAttraction"],setup:function(e,t){var n,a,c,o=t.expose,i=t.emit,l=e,s=function(e){var t=l.kilometer>7?13:15,a=Math.floor(e.length/2);n=d.a.map("map-container").setView(e[a],t),d.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n),d.a.polyline(l.bikeLine).addTo(n)},u=function(){a=new d.a.Icon({iconUrl:"https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Ffood.png?alt=media&token=657a583a-5d41-47c6-be7f-48e5875076ec",iconSize:[56,56],iconAnchor:[12,41],popupAnchor:[15,-45],tooltipAnchor:[45,-15],shadowSize:[41,41]})};u();var b=function(){c=new d.a.Icon({iconUrl:"https://firebasestorage.googleapis.com/v0/b/linkedin-7152e.appspot.com/o/others%2Fattraction.png?alt=media&token=73873d06-dbff-4885-b3fd-497cd733d86e",iconSize:[56,56],iconAnchor:[12,41],popupAnchor:[15,-45],tooltipAnchor:[45,-15],shadowSize:[41,41]})};b();var f=[],v=function(){if(!l.restaurants.length)return alert("這個地點附近沒有餐廳 !"),void i("hideRestaurant");var e=l.restaurants;e.forEach((function(e){var t=e.Position,r=e.RestaurantName,c=e.Address,o=e.Phone,i=e.Picture,l=t.PositionLat,s=t.PositionLon,u=d.a.marker([l,s],{icon:a}).bindTooltip(r,{permanent:!0,direction:"right"}).bindPopup('\n        <div class="flex items-stretch w-full h-full">\n          <div class="flex-grow h-full pt-4 px-4 pb-6">\n            <h3 class="text-yellow-100 text-lg pl-4 border-l-4 border-yellow-100 mb-2">'+r+'</h3>\n            <div class="flex">\n              <span class="material-icons text-yellow-100 mr-1.5">room</span>\n              <p class="text-dark-200 text-sm">'+(c||"無地址")+'</p>\n            </div>\n            <div class="flex items-center">\n              <span class="material-icons text-yellow-100 mr-1.5">call</span>\n              <a href="tel:'+o+'}" class="text-dark-200 text-sm">0'+o.split("886-")[1]+'</a>\n            </div>\n          </div>\n          <div class="restaurant-photo flex-shrink-0" style="background-image: url('+(i.PictureUrl1||"https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg")+')"></div>\n        </div>\n      ').addTo(n);f.push(u)}))},p=function(){f.forEach((function(e){n.hasLayer(e)&&n.removeLayer(e)}))},g=[],j=function(){if(!l.attractions.length)return alert("這個地點附近沒有景點 !"),void i("hideAttraction");var e=l.attractions;e.forEach((function(e){var t=e.Position,a=e.ScenicSpotName,r=e.Address,o=e.Phone,i=e.Picture,l=t.PositionLat,s=t.PositionLon,u=d.a.marker([l,s],{icon:c}).bindTooltip(a,{permanent:!0,direction:"right"}).bindPopup('\n        <div class="flex items-stretch w-full h-full">\n          <div class="flex-grow h-full pt-4 px-4 pb-6">\n            <h3 class="text-yellow-100 text-lg pl-4 border-l-4 border-yellow-100 mb-2">'+a+'</h3>\n            <div class="flex">\n              <span class="material-icons text-yellow-100 mr-1.5">room</span>\n              <p class="text-dark-200 text-sm">'+(r||"無地址")+'</p>\n            </div>\n            <div class="flex items-center">\n              <span class="material-icons text-yellow-100 mr-1.5">call</span>\n              <a href="tel:'+o+'}" class="text-dark-200 text-sm">0'+o.split("886-")[1]+'</a>\n            </div>\n          </div>\n          <div class="restaurant-photo flex-shrink-0" style="background-image: url('+(i.PictureUrl1||"https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg")+')"></div>\n        </div>\n      ').addTo(n);g.push(u)}))},m=function(){g.forEach((function(e){n.hasLayer(e)&&n.removeLayer(e)}))};return Object(r["K"])((function(){return l.bikeLine}),(function(e){s(e)})),o({setRestaurantMarkers:v,removeRestaurantMarkers:p,setAttractionMarkers:j,removeAttractionMarkers:m}),function(e,t){return Object(r["v"])(),Object(r["f"])("div",null,h)}}}),j=(n("45e0"),n("d959")),m=n.n(j);const O=m()(g,[["__scopeId","data-v-18383d7c"]]);var x=O,w=function(e){return Object(r["y"])("data-v-6f3ffffb"),e=e(),Object(r["w"])(),e},k={class:"main-wrap overflow-hidden"},y={class:"banner-bg absolute w-full left-0 right-0 flex justify-center items-center"},L={class:"block absolute text-white-100 text-5xl font-bold tracking-widest leading-normal left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},A=w((function(){return Object(r["g"])("div",{class:"mouse-wheel absolute left-1/2 top-2 w-2 h-2 bg-white-100 rounded-full"},null,-1)})),R=[A],P={class:"route-container flex flex-col relative z-10 mx-auto"},_=w((function(){return Object(r["g"])("div",{class:"flex-grow"},null,-1)})),E={class:"flex relative"},M={class:"flex-grow bg-white-100 px-10 py-4"},N={class:"flex items-start py-4 mb-24"},B=Object(r["i"])("首頁"),F=w((function(){return Object(r["g"])("span",{class:"material-icons mx-1"},"chevron_right",-1)})),S=Object(r["i"])("探索路線"),q=w((function(){return Object(r["g"])("span",{class:"material-icons mx-1"},"chevron_right",-1)})),z={class:"text-green-100"},C={class:"flex items-start mb-6"},T={class:"title text-dark-200 text-2xl font-bold mr-auto"},G=w((function(){return Object(r["g"])("button",{type:"button",class:"flex-shrink-0 text-green-100 border border-green-100 rounded-full duration-200 px-8 py-1 hover:text-white-100 hover:bg-green-100 active:opacity-80"}," 儲存此路線 ",-1)})),H={class:"flex items-center mb-4"},D=w((function(){return Object(r["g"])("span",{class:"material-icons text-yellow-100 mr-1"},"room",-1)})),I={class:"text-dark-200"},U={class:"flex items-center mb-12"},K=w((function(){return Object(r["g"])("span",{class:"material-icons text-yellow-100 mr-1"},"ramp_left",-1)})),J={key:0,class:"text-dark-200"},V={class:"flex"},Y={class:"flex-grow"},Z={class:"flex items-center mb-6"},Q=w((function(){return Object(r["g"])("h3",{class:"text-dark-200 mr-4"},"附近推薦美食",-1)})),W={class:"flex items-center"},X=w((function(){return Object(r["g"])("h3",{class:"text-dark-200 mr-4"},"附近推薦景點",-1)})),$=w((function(){return Object(r["g"])("img",{src:o.a,alt:"騎腳踏車女孩",class:"bike-img transform rotate-6"},null,-1)})),ee=Object(r["l"])({setup:function(e){var t=this;Object(r["H"])((function(e){return{e9b03c00:Object(r["G"])(g)}}));var c=Object(r["k"])((function(){return n.e("chunk-d730cef2").then(n.bind(null,"f4dd"))})),o=Object(i["c"])(),f=l().wheelDirection,d=Object(r["B"])(!1),v=Object(r["B"])(!1),p=Object(r["B"])(),h=Object(r["B"])(),g=Object(r["b"])((function(){return"translateY("+h.value+"px)"}));Object(r["K"])(f,(function(e){if("down"===e)h.value=0;else if("up"===e){var t=p.value.offsetHeight;h.value=t}}));var j=function(){var e=p.value.offsetHeight;h.value=e},m=Object(r["B"])(),O=function(){return Object(a["b"])(t,void 0,void 0,(function(){var e,t,n,r,c,o;return Object(a["c"])(this,(function(a){switch(a.label){case 0:if(!te.value.length)return[2];e=Math.floor(te.value.length/2),t=te.value[e],n=t[0],r=t[1],a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(u["c"])(n,r)];case 2:return c=a.sent().data,m.value=c,[3,4];case 3:return o=a.sent(),console.dir(o),[3,4];case 4:return[2]}}))}))},w=Object(r["B"])(),A=function(){return Object(a["b"])(t,void 0,void 0,(function(){var e,t,n,r,c,o;return Object(a["c"])(this,(function(a){switch(a.label){case 0:if(!te.value.length)return[2];e=Math.floor(te.value.length/2),t=te.value[e],n=t[0],r=t[1],a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(u["b"])(n,r)];case 2:return c=a.sent().data,w.value=c,[3,4];case 3:return o=a.sent(),console.dir(o),[3,4];case 4:return[2]}}))}))},ee=Object(r["B"])({}),te=Object(r["B"])([]),ne=Object(r["b"])((function(){return ee.value.CyclingLength?Number((ee.value.CyclingLength/1e3).toFixed(1)):0})),ae=function(e){return Object(a["b"])(t,void 0,void 0,(function(){var t,n,c;return Object(a["c"])(this,(function(a){switch(a.label){case 0:t=Object(s["a"])(o.query._city),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(u["f"])(t,e)];case 2:return n=a.sent().data,n[0].Geometry&&(te.value=re(n[0].Geometry)),ee.value=n[0],Object(r["p"])((function(){j()})),Promise.all([O(),A()]),[3,4];case 3:return c=a.sent(),console.dir(c),[3,4];case 4:return[2]}}))}))},re=function(e){var t=e.split("((")[1].split("))")[0].split(","),n=[];return t.forEach((function(e){var t=e.split(" "),a=t[0],r=t[1];r=r?Number(r):0,a=a?Number(a):0,a&&r&&n.push([r,a])})),n};Object(r["K"])((function(){return o.params.id}),(function(e){e&&ae(e)}),{immediate:!0});var ce=Object(r["B"])(),oe=function(){d.value?(d.value=!1,ce.value.removeRestaurantMarkers()):(d.value=!0,ce.value.setRestaurantMarkers())},ie=function(){v.value?(v.value=!1,ce.value.removeAttractionMarkers()):(v.value=!0,ce.value.setAttractionMarkers())};return function(e,t){var n=Object(r["D"])("router-link");return Object(r["v"])(),Object(r["f"])("div",null,[Object(r["g"])("main",k,[Object(r["g"])("section",y,[Object(r["g"])("div",{class:Object(r["q"])(["divide relative duration-1000",{"opacity-0":!ee.value.RouteName}])},[Object(r["g"])("span",L,Object(r["F"])(ee.value.RouteName),1)],2),Object(r["g"])("div",{class:Object(r["q"])(["w-7 h-12 absolute left-1/2 bottom-40 transform -translate-x-1/2 border-2 border-white-100 rounded-full duration-1000",{"opacity-0":!ee.value.RouteName}])},R,2)]),Object(r["g"])("section",P,[_,Object(r["g"])("div",{ref:function(e,t){t["routeRef"]=e,p.value=e},class:Object(r["q"])(["route-panel",{"opacity-0":!ee.value.RouteName}])},[Object(r["g"])("div",E,[Object(r["j"])(Object(r["G"])(c),{class:"absolute -top-24 left-0 right-0"}),Object(r["j"])(x,{ref:function(e,t){t["leafletRef"]=e,ce.value=e},class:"map",bikeLine:te.value,restaurants:m.value,attractions:w.value,kilometer:Object(r["G"])(ne),onHideRestaurant:t[0]||(t[0]=function(e){return d.value=!1}),onHideAttraction:t[1]||(t[1]=function(e){return v.value=!1})},null,8,["bikeLine","restaurants","attractions","kilometer"]),Object(r["g"])("div",M,[Object(r["g"])("div",N,[Object(r["j"])(n,{to:"/",class:"flex-shrink-0"},{default:Object(r["L"])((function(){return[B]})),_:1}),F,Object(r["j"])(n,{to:"/explore",class:"flex-shrink-0"},{default:Object(r["L"])((function(){return[S]})),_:1}),q,Object(r["g"])("h4",z,Object(r["F"])(ee.value.RouteName),1)]),Object(r["g"])("div",C,[Object(r["g"])("h2",T,Object(r["F"])(ee.value.RouteName),1),G]),Object(r["g"])("p",H,[D,Object(r["g"])("span",I,Object(r["F"])(ee.value.RoadSectionStart)+" - "+Object(r["F"])(ee.value.RoadSectionEnd),1)]),Object(r["g"])("p",U,[K,ee.value.CyclingLength?(Object(r["v"])(),Object(r["f"])("span",J," 雙向 "+Object(r["F"])((ee.value.CyclingLength/1e3).toFixed(1))+" 公里 ",1)):Object(r["e"])("",!0)]),Object(r["g"])("div",V,[Object(r["g"])("div",Y,[Object(r["g"])("div",Z,[Q,Object(r["g"])("span",{class:Object(r["q"])(["block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1",d.value?"bg-green-100":"bg-gray-100"]),onClick:oe},[Object(r["g"])("span",{class:Object(r["q"])(["inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200",d.value?"right-full transform translate-x-10":"right-1"])},null,2)],2)]),Object(r["g"])("div",W,[X,Object(r["g"])("span",{class:Object(r["q"])(["block relative w-28 h-11 rounded-full shadow-inner cursor-pointer duration-200 p-1",v.value?"bg-green-100":"bg-gray-100"]),onClick:ie},[Object(r["g"])("span",{class:Object(r["q"])(["inline-block absolute w-9 h-9 bg-white-100 rounded-full duration-200",v.value?"right-full transform translate-x-10":"right-1"])},null,2)],2)])]),$])])]),Object(r["j"])(b["default"])],2)])])])}}});n("6320");const te=m()(ee,[["__scopeId","data-v-6f3ffffb"]]);t["default"]=te},8585:function(e,t,n){},fa2c:function(e,t,n){},fd2d:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r=Object(a["g"])("footer",{class:"text-center bg-yellow-100 p-7"},[Object(a["g"])("p",{class:"text-white-100 text-xl leading-tight"},"BikeFun © 2021 Designer Vum. Engineer LEEE. All rights reserved.")],-1),c=[r];function o(e,t){return Object(a["v"])(),Object(a["f"])("div",null,c)}var i=n("d959"),l=n.n(i);const s={},u=l()(s,[["render",o]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-718df6fa.7fd68a66.js.map