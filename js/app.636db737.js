(function(e){function n(n){for(var t,o,c=n[0],i=n[1],d=n[2],s=0,m=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);l&&l(n);while(m.length)m.shift()();return u.push.apply(u,d||[]),a()}function a(){for(var e,n=0;n<u.length;n++){for(var a=u[n],t=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(t=!1)}t&&(u.splice(n--,1),e=i(i.s=a[0]))}return e}var t={},o={app:0},r={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-10b96c1e":"c9d42583","chunk-1d28ebdf":"b7a4049f","chunk-26070ada":"07f4c728","chunk-2d0e95df":"584f7b0a","chunk-2d0efc9c":"1f007597","chunk-2d217860":"1de8c926","chunk-b0ec9f48":"b9b705ae","chunk-e514798e":"dc246129"}[e]+".js"}function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var n=[],a={"chunk-10b96c1e":1,"chunk-1d28ebdf":1,"chunk-b0ec9f48":1,"chunk-e514798e":1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-10b96c1e":"b6637bc0","chunk-1d28ebdf":"0809c638","chunk-26070ada":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d0efc9c":"31d6cfe0","chunk-2d217860":"31d6cfe0","chunk-b0ec9f48":"70b72a37","chunk-e514798e":"b229b317"}[e]+".css",r=i.p+t,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===t||s===r))return n()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){d=m[c],s=d.getAttribute("data-href");if(s===t||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete o[e],l.parentNode.removeChild(l),a(u)},l.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){o[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var m=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",m.name="ChunkLoadError",m.type=t,m.request=o,a[1](m)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,a){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(a,t,function(n){return e[n]}.bind(null,t));return a},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var m=0;m<d.length;m++)n(d[m]);var l=s;u.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"275f":function(e,n,a){},"3cdb":function(e,n,a){},"56d7":function(e,n,a){"use strict";a.r(n);a("745d"),a("2d98"),a("041d"),a("3466"),a("c412");var t=a("6e6d"),o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],u=(a("2df1"),{methods:{isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e}},mounted:function(){this.isMobile()?(this.$store.commit("showTop",!0),this.$store.commit("showAside",!1)):(this.$store.commit("showTop",!1),this.$store.commit("showAside",!0))}}),c=u,i=(a("5c0b"),a("4e82")),d=Object(i["a"])(c,o,r,!1,null,null,null),s=d.exports,m=(a("ff52"),a("c478"));t["default"].use(m["a"]);var l=[{path:"/login",name:"login",component:function(){return a.e("chunk-e514798e").then(a.bind(null,"a55b"))}},{path:"/404",name:"404",component:function(){return a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}}],f=new m["a"]({mode:"history",routes:l}),h=f,g=a("08c1"),p=(a("f185"),a("e35f"),a("f5a1"),a("d502"),a("a27f"),a("1228")),v=a("e04f"),b=a.n(v),k={state:{menu:[],currentMenu:{},showHome:!0,showTop:!1,showAside:!1,isCollapse:!1,tabsList:[{path:"/",name:"home",lable:"首页",icon:"coin"}]},mutations:{showTop:function(e,n){e.showTop=n},showAside:function(e,n){e.showAside=n},selectMenu:function(e,n){if("home"!==n.name){e.showHome=!1,e.currentMenu=n;var a=e.tabsList.find((function(e){return e.name===n.name}));!a&&e.tabsList.push(n),b.a.set("curMenu",e.tabsList)}else e.currentMenu="",e.showHome=!0,b.a.remove("curMenu")},getSelectMenu:function(e){if(b.a.get("curMenu")){var n=JSON.parse(b.a.get("curMenu"));e.tabsList=n}},closeTab:function(e,n){var a=e.tabsList.findIndex((function(e){return e.name===n.name}));e.tabsList.splice(a,1)},changeCollapse:function(e){if(!e.showTop)return e.isCollapse=!e.isCollapse,void(e.showAside=!0);e.showAside=!e.showAside,e.isCollapse=!1},clearMenu:function(e){e.menu=[],b.a.remove("menu"),b.a.remove("curMenu")},setMenu:function(e,n){e.menu=n,b.a.set("menu",JSON.stringify(n))},addMenu:function(e,n){if(b.a.get("menu")){var t=JSON.parse(b.a.get("menu"));e.menu=t;var o=[{path:"/",component:function(){return a.e("chunk-1d28ebdf").then(a.bind(null,"cd56"))},children:[]}];t.forEach((function(e){var n;e.children?(e.children=e.children.map((function(e){return e.component=function(){return a("9dac")("./".concat(e.url))},e})),(n=o[0].children).push.apply(n,Object(p["a"])(e.children))):(e.component=function(){return a("9dac")("./".concat(e.url))},o[0].children.push(e))})),n.addRoutes(o)}}},actions:{}},w={state:{token:"",info:{}},mutations:{setToken:function(e,n){e.token=n,b.a.set("token",n)},getToken:function(e){e.token=b.a.get("token")},clearToken:function(e){e.token="",b.a.remove("token")},setInfo:function(e,n){e.info=n,b.a.set("info",JSON.stringify(n))},getInfo:function(e){if(b.a.get("info")){var n=JSON.parse(b.a.get("info"));e.info=n}},clearInfo:function(e){e.info={},b.a.remove("info")}},actions:{}};t["default"].use(g["a"]);var R=new g["a"].Store({modules:{tab:k,user:w}}),M=(a("275f"),a("a41b"),a("2427")),y=a.n(M),O=y.a.create({timeout:3e3});O.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),O.interceptors.response.use((function(e){var n={};return n.status=e.status,n.data=e.data,n}),(function(e){return Promise.reject(e)}));var D=O,P=a("03a1"),S=a.n(P),A=[],L={getHomeData:function(){for(var e=0;e<7;e++)A.push(S.a.mock({"手机":S.a.Random.float(130,500,0,2),"电脑":S.a.Random.float(130,500,0,2),"生活用品":S.a.Random.float(130,500,0,2),"零食":S.a.Random.float(130,500,0,2),"水果蔬菜":S.a.Random.float(130,500,0,2),"家具电器":S.a.Random.float(130,500,0,2)}));return{data:{DataMange:[{name:"手机",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)},{name:"电脑",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)},{name:"生活用品",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)},{name:"零食",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)},{name:"水果蔬菜",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)},{name:"家具电器",numPrice:S.a.Random.float(130,8e3,0,2),value:S.a.Random.natural(10,100)}],LineChartData:{date:["周一","周二","周三","周四","周五","周六","周日"],data:A},stockData:[{name:"手机",value:S.a.Random.float(1e3,1e4,0,2)},{name:"电脑",value:S.a.Random.float(1e3,1e4,0,2)},{name:"生活用品",value:S.a.Random.float(1e3,1e4,0,2)},{name:"零食",value:S.a.Random.float(1e3,1e4,0,2)},{name:"水果蔬菜",value:S.a.Random.float(1e3,1e4,0,2)},{name:"家具电器",value:S.a.Random.float(1e3,1e4,0,2)}],userData:[{date:"周一",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周二",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周三",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周四",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周五",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周六",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)},{date:"周日",new:S.a.Random.integer(30,200),active:S.a.Random.integer(200,1e3)}]}}},getHomeList:function(){return{data:{DataHomeList:[{name:"今日已支付订单",value:S.a.Random.natural(100,1e3),icon:"s-goods",color:"#4FA8DF",id:1},{name:"今日收藏数",value:S.a.Random.natural(20,200),icon:"star-on",color:"#4FA8DF",id:2},{name:"已上架商品",value:S.a.Random.natural(100,500),icon:"s-shop",color:"#4FA8DF",id:3},{name:"库存预警商品",value:S.a.Random.natural(10,20),icon:"warning",color:"#4FA8DF",id:4},{name:"送货中商品",value:S.a.Random.natural(50,100),icon:"location",color:"#4FA8DF",id:5},{name:"意见反馈",value:S.a.Random.natural(10,30),icon:"s-comment",color:"#4FA8DF",id:6}]}}}};a("8bc6"),a("01d3"),a("ad15"),a("f565"),a("95a7"),a("6dd8"),a("280d");function U(e){var n=e.split("?")[1];return n?JSON.parse('{"'+decodeURIComponent(n).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}for(var T=[],N=200,x=0;x<N;x++)T.push(S.a.mock({id:S.a.Random.guid(),name:S.a.Random.cname(),addr:S.a.mock("@county(true)"),"age|18-60":1,birth:S.a.Random.date(),sex:S.a.Random.integer(0,1)}));var H={getUserList:function(e){var n=U(e.url),a=n.name,t=n.page,o=void 0===t?1:t,r=n.limit,u=void 0===r?20:r,c=T.filter((function(e){return!a||-1!==e.name.indexOf(a)||-1!==e.addr.indexOf(a)})),i=c.filter((function(e,n){return n<u*o&&n>=u*(o-1)}));return{code:2e4,count:c.length,list:i}},createUser:function(e){var n=JSON.parse(e.body),a=n.name,t=n.addr,o=n.age,r=n.birth,u=n.sex;return console.log(JSON.parse(e.body)),T.unshift({id:S.a.Random.guid(),name:a,addr:t,age:o,birth:r,sex:u}),{code:2e4,data:{message:"添加成功"}}},deleteUser:function(e){var n=U(e.url),a=n.id;return a?(T=T.filter((function(e){return e.id!==a})),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:function(e){var n=U(e.url),a=n.ids;return a=a.split(","),T=T.filter((function(e){return!a.includes(e.id)})),{code:2e4,data:{message:"批量删除成功"}}},updateUser:function(e){var n=JSON.parse(e.body),a=n.id,t=n.name,o=n.addr,r=n.age,u=n.birth,c=n.sex,i=parseInt(c);return T.some((function(e){if(e.id===a)return e.name=t,e.addr=o,e.age=r,e.birth=u,e.sex=i,!0})),{code:2e4,data:{message:"编辑成功"}}}},j={getMenu:function(e){var n=JSON.parse(e.body),a=n.username,t=n.password;return console.log(JSON.parse(e.body)),"admin"==a||"test1"==a?"admin"==a&&"admin"==t?{code:2e4,data:{menu:[{path:"/",name:"home",lable:"首页",icon:"s-home",url:"Home/Home"},{path:"/DataManage",name:"DataManage",lable:"表单提交",icon:"suitcase",url:"DataManage/DataManage"},{path:"/user",name:"user",lable:"用户管理",icon:"user",url:"UserManage/UserManage"},{lable:"其他",name:"page",icon:"setting",children:[{path:"/page1",lable:"测试1",name:"page1",icon:"setting",url:"Other/Page1"},{path:"/page2",lable:"测试2",name:"page2",icon:"setting",url:"Other/Page2"}]}],info:{edit:!0,rank:"超级管理员",name:"Admin"},token:S.a.Random.guid(),message:"获取成功"}}:"test1"==a&&"123"==t?{code:2e4,data:{menu:[{path:"/",name:"home",lable:"首页",icon:"s-home",url:"Home/Home"},{path:"/user",name:"user",lable:"用户查看",icon:"user",url:"UserManage/UserManage"},{path:"/DataManage",name:"DataManage",lable:"表单提交",icon:"suitcase",url:"DataManage/DataManage"}],info:{edit:!1,rank:"测试人员",name:"用户1"},token:S.a.Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}:{code:-999,data:{message:"用户不存在"}}}};S.a.setup({timeout:"100-200"}),S.a.mock(/\/home\/getData/,"get",L.getHomeData),S.a.mock(/\/home\/getList/,"get",L.getHomeList),S.a.mock(/\/user\/getUser/,"get",H.getUserList),S.a.mock(/\/user\/del/,"get",H.deleteUser),S.a.mock(/\/user\/batchremove/,"get",H.batchremove),S.a.mock(/\/user\/add/,"post",H.createUser),S.a.mock(/\/user\/edit/,"post",H.updateUser),S.a.mock(/\/login\/getMenu/,"post",j.getMenu);var C=a("2ca7"),E=a.n(C);a("46c6");t["default"].config.productionTip=!1,t["default"].use(E.a),t["default"].prototype.$http=D,t["default"].prototype.$bus=new t["default"],h.beforeEach((function(e,n,a){R.commit("getToken"),R.commit("getInfo");var t=R.state.user.token;t||"login"===e.name?a():a({name:"login"})})),new t["default"]({router:h,store:R,render:function(e){return e(s)},created:function(){R.commit("addMenu",h),R.commit("getSelectMenu")}}).$mount("#app")},"5c0b":function(e,n,a){"use strict";var t=a("3cdb"),o=a.n(t);o.a},"9dac":function(e,n,a){var t={"./404":["8cdb","chunk-2d0e95df"],"./404.vue":["8cdb","chunk-2d0e95df"],"./DataManage/DataManage":["b2e1","chunk-b0ec9f48"],"./DataManage/DataManage.vue":["b2e1","chunk-b0ec9f48"],"./Home/Home":["1c62","chunk-26070ada"],"./Home/Home.vue":["1c62","chunk-26070ada"],"./Login":["a55b","chunk-e514798e"],"./Login.vue":["a55b","chunk-e514798e"],"./Main":["cd56","chunk-1d28ebdf"],"./Main.vue":["cd56","chunk-1d28ebdf"],"./Other/Page1":["9a31","chunk-2d0efc9c"],"./Other/Page1.vue":["9a31","chunk-2d0efc9c"],"./Other/Page2":["c6a8","chunk-2d217860"],"./Other/Page2.vue":["c6a8","chunk-2d217860"],"./UserManage/UserManage":["2e9a","chunk-10b96c1e"],"./UserManage/UserManage.vue":["2e9a","chunk-10b96c1e"]};function o(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],o=n[0];return a.e(n[1]).then((function(){return a(o)}))}o.keys=function(){return Object.keys(t)},o.id="9dac",e.exports=o},a41b:function(e,n,a){}});
//# sourceMappingURL=app.636db737.js.map