(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10b96c1e"],{1604:function(e,t,a){"use strict";var o=a("334b"),i=a.n(o);i.a},2517:function(e,t,a){},"2e9a":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage"},[a("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isDialog,"append-to-body":!0,center:"",width:"560px"},on:{"update:visible":function(t){e.isDialog=t}}},[a("user-form",{ref:"resform",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,isConfig:e.isConfig},on:{"update:isConfig":function(t){e.isConfig=t},"update:is-config":function(t){e.isConfig=t}}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1),a("div",{staticClass:"header"},[e.$store.state.user.info.edit?a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("新增+")]):e._e(),a("div",{staticClass:"search"},[a("el-input",{attrs:{placeholder:"请输入姓名搜索"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),a("el-button",{staticClass:"search-input",attrs:{type:"primary"},on:{click:function(t){return e.getTabelList(e.key)}}},[e._v("搜索")])],1)],1),a("div",{staticClass:"container"},[a("user-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{page:function(t){return e.getTabelList()},edit:e.editUser,delete:e.delUser}})],1)],1)},i=[],n=(a("f5a1"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:12}},[a("el-form",{ref:"form",attrs:{inline:e.inline,model:e.form,rules:e.rules,"label-width":"100px"}},e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.model,attrs:{label:t.label,prop:t.model}},[t.type?e._e():a("el-input",{staticStyle:{width:"330px"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"date"===t.type?a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e()],1)})),1)],1)],1)}),l=[],r={props:{inline:Boolean,form:Object,formLabel:Array,isConfig:Boolean},data:function(){return{rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:5,message:"长度在 2 到 4 个字符",trigger:"blur"}],age:[{required:!0,message:"年龄不能为空"}],addr:[{required:!0,message:"地址不能为空"}]}}},methods:{submitForm:function(e){return this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1})),!0},reset:function(e){this.$refs[e].resetFields()}}},s=r,c=a("4e82"),u=Object(c["a"])(s,n,l,!1,null,"31427316",null),d=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.config.loading,expression:"config.loading"}],attrs:{data:e.tableData,border:"",stripe:"",height:"90%"}},[a("el-table-column",{attrs:{label:"序号",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(20*(e.config.page-1)+t.$index+1))])]}}])}),e._l(e.tableLabel,(function(t){return a("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",prop:t.prop,label:t.label,width:t.width},scopedSlots:e._u([{key:"default",fn:function(o){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(o.row[t.prop]))])]}}],null,!0)})})),e.$store.state.user.info.edit?a("el-table-column",{attrs:{label:"操作",width:"145"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}],null,!1,1692564263)}):e._e()],2),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:8}},[a("el-pagination",{attrs:{id:"pagination",total:e.config.total,"page-size":20,"pager-count":5,"current-page":e.config.page,background:e.background,layout:"prev, pager, next, jumper"},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changePage}})],1)],1)],1)},p=[],m={props:{tableData:Array,tableLabel:Array,config:Object},data:function(){return{background:!0}},computed:{total:function(){return this.config.total}},watch:{total:function(){this.config.total==20*(this.config.page-1)&&0!==this.config.total&&this.changePage(this.config.page-=1)}},methods:{handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("delete",e.id)},changePage:function(e){console.log(e),this.$emit("page",e)}}},g=m,b=(a("1604"),Object(c["a"])(g,f,p,!1,null,"f7049a0c",null)),h=b.exports,y={data:function(){return{isDialog:!1,operateType:"add",operateForm:{id:"",name:"",addr:"",age:"",birth:"",sex:""},operateFormLabel:[{model:"name",label:"姓名"},{model:"age",label:"年龄"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址"}],tableData:[],tableLabel:[{prop:"name",label:"姓名",width:100},{prop:"age",label:"年龄",width:85},{prop:"sexLabel",label:"性别",width:85},{prop:"birth",label:"出生日期",width:200},{prop:"addr",label:"地址"}],config:{page:1,total:20,loading:!1},key:"",isConfig:!1}},components:{userForm:d,userTable:h},methods:{getTabelList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.config.loading=!0,t&&(this.config.page=1),this.$http.get("/api/user/getUser",{params:{page:this.config.page,name:t}}).then((function(t){e.tableData=t.data.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),e.config.total=t.data.count,e.config.loading=!1}))},addUser:function(){this.operateForm={},this.operateType="add",this.isDialog=!0},editUser:function(e){this.operateType="edit",this.isDialog=!0;var t=JSON.parse(JSON.stringify(e));this.operateForm=t},confirm:function(){var e=this;this.$refs.resform.submitForm("form")&&("edit"===this.operateType?this.$http.post("/api/user/edit",this.operateForm).then((function(){e.isDialog=!1,e.getTabelList()})):this.$http.post("/api/user/add",this.operateForm).then((function(){e.isDialog=!1,e.getTabelList()})),this.$message({type:"success",message:"更新成功!"}))},delUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http.get("/api/user/del",{params:{id:e}}).then((function(){t.$message({type:"success",message:"删除成功!"})})).then((function(){t.getTabelList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.getTabelList()}},v=y,k=(a("61dd"),Object(c["a"])(v,o,i,!1,null,"43478cc1",null));t["default"]=k.exports},"334b":function(e,t,a){},"61dd":function(e,t,a){"use strict";var o=a("2517"),i=a.n(o);i.a}}]);
//# sourceMappingURL=chunk-10b96c1e.c9d42583.js.map