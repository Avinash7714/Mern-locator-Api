(this["webpackJsonpshop-locator"]=this["webpackJsonpshop-locator"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(4),o=a.n(n),c=(a(19),a(7)),i=a.n(c),l=a(11),m=a(2),u=a(3),d=a(13),p=a(12),h=(a(21),a(5)),b={baseurl:"",token:"pk.eyJ1IjoiYXZpbmFzaG0iLCJhIjoiY2tnZGpwbHQyMTFmNTJ3czVwemoxeG5nMCJ9.nFkcCgWrDx6CFmyEaWbF-g"},v=Object(h.c)({accessToken:b.token}),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).getStores=Object(l.a)(i.a.mark((function e(){var t,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.baseurl,"/api/v1/stores?address=").concat(r.state.address));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s=a.data.map((function(e){return{type:"Feature",geometry:{type:"Polygon",coordinates:e.geometry.coordinates},properties:{storeId:e.properties.name,details:e.properties,icon:"shop"}}})),r.setState({stores:s});case 8:case"end":return e.stop()}}),e)}))),r.state={stores:[],address:"Stumpergasse 51, 1060 Vienna"},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container my-3 "},s.a.createElement("h1",{className:"h-20 text-center"},s.a.createElement("i",{className:"fas fa-map-marked mr-4"}),"Locator"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement(v,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"80vh",width:"100%",zoom:1}},this.state.stores.map((function(e){return s.a.createElement(h.b,{key:e.properties.storeId,type:"symbol",id:"marker",layout:{"icon-image":"marker-15"}},s.a.createElement(h.a,{coordinates:e.geometry.coordinates}))})))),s.a.createElement("div",{className:"col-4"},s.a.createElement("div",null,s.a.createElement("input",{className:"form-control",onChange:function(t){return e.setState({address:t.target.value})},value:this.state.address,placeholder:"Address"}),s.a.createElement("button",{className:"btn mt-3 btn-success mb-4",onClick:this.getStores},"Search ")),s.a.createElement("div",{className:"block mt-2"},"Output :        ",this.state.stores.map((function(e){return s.a.createElement("div",{className:"text-bold"},e.properties.storeId)}))))))}}]),a}(r.Component);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),o.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e687deb4.chunk.js.map