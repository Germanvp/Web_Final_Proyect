webpackJsonp([1],{"4Xxc":function(e,t){},"7zck":function(e,t){},"9E7s":function(e,t,a){e.exports=a.p+"static/img/ola.10467be.png"},CV1t:function(e,t){},N8B2:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-toolbar",{attrs:{dense:"",fixed:""}},[t("v-toolbar-side-icon",[t("router-link",{attrs:{to:"/"}},[t("h1",{attrs:{height:"50px",width:"50%",contain:""}},[this._v("Untitled")])])],1),this._v(" "),t("v-spacer")],1)},staticRenderFns:[]};var s={name:"App",components:{PageHeader:a("VU/8")({},r,!1,function(e){a("bbe2")},"data-v-2dd996ea",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("page-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")(s,o,!1,function(e){a("4Xxc")},null,null).exports,c=a("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Welcome to untitled")]),e._v(" "),n("div",{staticClass:"b-div-2"},[n("v-btn",{attrs:{"x-large":"",to:"/login"}},[e._v("Login")])],1),e._v(" "),n("div",{staticClass:"b-div"},[n("v-btn",{attrs:{"x-large":"",to:"/register"}},[e._v("Register")])],1),e._v(" "),e._m(0),e._v(" "),n("img",{staticClass:"ola",attrs:{src:a("9E7s")}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("What is this thing?")]),this._v(" "),t("p",[this._v("Untitled is a service used by people to\n      post what they are currently working and offer advice, help, or simply support other people. Users\n      can see other users goals and comment on them.")]),this._v(" "),t("h2",[this._v("Why?")]),this._v(" "),t("p",[this._v("This project will allow individuals/teams have an organized way\n      of keeping track of what they want to achieve.")])])}]};var u=a("VU/8")({},l,!1,function(e){a("PU1A")},"data-v-749c4d6c",null).exports,d=a("Xxa5"),v=a.n(d),m=a("exGp"),p=a.n(m),f=a("mtWM"),h=a.n(f),_=function(){return h.a.create({baseURL:"https://web-project-server.herokuapp.com/"})},g=function(e){return _().post("register",e)},b=function(e){return _().post("login",e)},x={data:function(){return{email:"",password:"",name:""}},methods:{registerUser:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g({email:e.email,name:e.name,password:e.password});case 2:200==(a=t.sent).status&&e.$router.push("/usermain/global"),localStorage.user_id=a.data.uid,localStorage.name=a.data.name;case 6:case"end":return t.stop()}},t,e)}))()}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Crea una nueva cuenta")]),e._v(" "),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"30",md:"10"}},[a("v-text-field",{attrs:{label:"Nombre",color:"white",required:"","single-line":"",solo:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"30",md:"10"}},[a("v-text-field",{attrs:{label:"E-mail",required:"","single-line":"",solo:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("v-col",{attrs:{cols:"30",md:"10"}},[a("v-text-field",{attrs:{type:"password",label:"Contraseña",required:"","single-line":"",solo:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),a("v-btn",{staticClass:"mr-4",on:{click:e.registerUser}},[e._v("\n        Registrar\n      ")])],1)],1)],1)},staticRenderFns:[]};var k=a("VU/8")(x,w,!1,function(e){a("P6ve")},"data-v-5f381bcc",null).exports,S={data:function(){return{email:"",password:"",error:null}},methods:{loginUser:function(){var e=this;return p()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b({email:e.email,password:e.password}).then(function(t){console.log(t),200==t.status&&(localStorage.user_id=t.data.uid,localStorage.name=t.data.name,e.$router.push("/usermain/global"))});case 2:t.sent;case 3:case"end":return t.stop()}},t,e)}))()}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Iniciar Sesión")]),e._v(" "),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",[a("v-text-field",{attrs:{label:"E-mail",required:"","single-line":"",solo:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("v-row",[a("v-text-field",{attrs:{type:"password",label:"Contraseña",required:"","single-line":"",solo:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("v-btn",{staticClass:"mr-4",on:{click:e.loginUser}},[e._v("\n        Iniciar Sesión\n      ")])],1)],1)],1)},staticRenderFns:[]};var C=a("VU/8")(S,y,!1,function(e){a("TUaB")},"data-v-b0a49c18",null).exports,T={data:function(){return{dialog:!1,description:"",img_src:"",userId:"My user id: "+localStorage.user_id}},methods:{logoutUser:function(){var e=this;return p()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$router.push("/"),localStorage.clear();case 2:case"end":return t.stop()}},t,e)}))()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-subtitle",[e._v(e._s(e.userId))]),e._v(" "),a("v-app-bar",{staticClass:"topnav",attrs:{color:"#5A79A5",dense:""}},[a("v-btn",{staticClass:"button1",attrs:{text:"",large:"",to:"/usermain/global"}},[e._v("Global\n          "),a("v-icon",{attrs:{right:""}},[e._v("mdi-calendar-month")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"button1",attrs:{text:"",large:"",to:"/usermain/local"}},[e._v("Local\n            "),a("v-icon",{attrs:{right:""}},[e._v("mdi-animation-outline")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"button1",attrs:{text:"",large:"",to:"/usermain/teams"}},[e._v("Teams\n            "),a("v-icon",{attrs:{right:""}},[e._v("mdi-animation-outline")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"button1",attrs:{text:"",large:"",to:"/usermain/notifications"}},[e._v("Notifications\n            "),a("v-icon",{attrs:{right:""}},[e._v("mdi-animation-outline")])],1),e._v(" "),a("v-btn",{staticClass:"button2",attrs:{outlined:""},on:{click:e.logoutUser}},[e._v("Logout")])],1),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var U=a("VU/8")(T,N,!1,function(e){a("NpjJ")},"data-v-4b9b2522",null).exports,D=a("mvHQ"),E=a.n(D),A=a("BO1k"),V=a.n(A),R=function(e,t){return _().get("thread/"+e,t)},F=function(e,t){return _().patch("thread/"+e,t)},G=function(e,t){return _().get("update/"+e,t)},$=function(e,t){return _().patch("update/"+e,t)},P=function(e,t){return _().get("comment/"+e,t)},H=function(){return _().get("global_goals")},M=function(e){return _().get("goals",e)},I=function(e,t){return _().post("goals",e,t)},j=function(e,t){return _().patch("goals/"+e,t)},J=function(e,t){return _().delete("goals/"+e,t)},W={props:["thread"],data:function(){return{dialog:!1,description:"",img_src:""}},methods:{createUpdate:function(){var e=this;return p()(v.a.mark(function t(){var a,n,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={description:e.description,img_src:e.img_src,userName:localStorage.name,user_id:localStorage.user_id},n={update:a,headers:{uid:localStorage.user_id}},console.log(n),t.next=5,F(e.thread,n).then(function(e){alert("Updated goal's thread")}).catch(function(e){alert(e)});case 5:r=t.sent,console.log(r),e.dialog=!1;case 8:case"end":return t.stop()}},t,e)}))()}}},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",e._g({attrs:{color:"green darken-1",text:""}},n),[e._v("\n              Post Update\n              ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("New Update")])]),e._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-text-field",{attrs:{label:"Image Src"},model:{value:e.img_src,callback:function(t){e.img_src=t},expression:"img_src"}})],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex"},[a("v-textarea",{attrs:{label:"Description","auto-grow":"",outlined:"",rows:"4","row-height":"25",shaped:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1)],1),e._v(" "),a("small",[e._v("*indicates required field")])],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.createUpdate()}}},[e._v("Save")])],1)],1)],1)],1)},staticRenderFns:[]},L={components:{NewUpdate:a("VU/8")(W,B,!1,null,null,null).exports},props:["row"],show:!1,data:function(){return{dialog:!1,show:!1,update_array:[],updates:[],newComment:""}},methods:{getThread:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e.row.item.thread_ref,{});case 2:a=t.sent,e.update_array=e.update_array.concat(a.data.updates);case 4:case"end":return t.stop()}},t,e)}))()},getUpdates:function(){var e=this;return p()(v.a.mark(function t(){var a,n,r,s,o,i,c,l,u,d,m,p,f,h,_,g;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=JSON.parse(localStorage.updates),console.log("JS",a),n=!0,r=!1,s=void 0,t.prev=5,o=V()(e.update_array);case 7:if(n=(i=o.next()).done){t.next=56;break}if(c=i.value,console.log("DOWQN",localStorage.updates[c]),void 0!=a[c]){t.next=51;break}return t.next=13,G(c,{});case 13:l=t.sent,(u=l.data).comments_list=[],console.log("ZZZAs",u),d=!0,m=!1,p=void 0,t.prev=20,f=V()(l.data.comments);case 22:if(d=(h=f.next()).done){t.next=31;break}return _=h.value,t.next=26,P(_,{});case 26:200==(g=t.sent).status&&(g.data.id=_,console.log(g),u.comments_list.push(g.data));case 28:d=!0,t.next=22;break;case 31:t.next=37;break;case 33:t.prev=33,t.t0=t.catch(20),m=!0,p=t.t0;case 37:t.prev=37,t.prev=38,!d&&f.return&&f.return();case 40:if(t.prev=40,!m){t.next=43;break}throw p;case 43:return t.finish(40);case 44:return t.finish(37);case 45:u.id=c,e.updates.push(u),a[c]=u,console.log("asdwwe",e.updates),t.next=52;break;case 51:console.log(a[c]);case 52:localStorage.updates=E()(a);case 53:n=!0,t.next=7;break;case 56:t.next=62;break;case 58:t.prev=58,t.t1=t.catch(5),r=!0,s=t.t1;case 62:t.prev=62,t.prev=63,!n&&o.return&&o.return();case 65:if(t.prev=65,!r){t.next=68;break}throw s;case 68:return t.finish(65);case 69:return t.finish(62);case 70:case"end":return t.stop()}},t,e,[[5,58,62,70],[20,33,37,45],[38,,40,44],[63,,65,69]])}))()},postComments:function(e){var t=this;return p()(v.a.mark(function a(){var n,r,s;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n={date:Date.now(),text:t.newComment,user:localStorage.user_id,userName:localStorage.name},console.log(n),(r=JSON.parse(localStorage.updates))[e].comments_list.push(n),localStorage.updates=E()(r),console.log("D",n),a.next=8,$(e,n).then(function(e){alert("Your comment is submitted and waiting for approval"),t.newComment=""}).catch(function(e){alert(e)});case 8:s=a.sent,console.log(s);case 10:case"end":return a.stop()}},a,t)}))()},deleteGoal:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.row.item.id){t.next=3;break}return alert("To delete goals visit Local section"),t.abrupt("return");case 3:return a={headers:{uid:localStorage.user_id}},console.log(a),t.next=7,J(e.row.item.id,a).then(function(e){202==e.status&&alert("Deleted goal. Reload to show results"),console.log(e)}).catch(function(e){alert(e)});case 7:t.sent;case 8:case"end":return t.stop()}},t,e)}))()},updateGoal:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{uid:localStorage.user_id}},t.next=3,j(e.row.item.id,a).then(function(e){202==e.status&&alert("Marked as completed"),console.log(e)}).catch(function(e){alert(e)});case 3:t.sent;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){console.log("AAAA"),this.getThread()},beforeDestroy:function(){localStorage.updates=E()({})}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",{on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"85%"},on:{click:function(t){t.stopPropagation(),e.dialog=!0,e.getUpdates()}}},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:""}},[e._v("\n            mdi-adjust\n          ")]),e._v(" "),a("span",{staticClass:"title font-weight-light"},[e._v(e._s(e.row.item.teamName)+" : "+e._s(e.row.item.name))])],1),e._v(" "),a("v-card-text",{staticClass:"headline font-weight-bold"},[e._v("\n          "+e._s(e.row.item.description)+"\n        ")]),e._v(" "),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(e.row.item.userName))])],1),e._v(" "),a("v-row",{attrs:{align:"center",justify:"end"}},[a("v-icon",{staticClass:"mr-1",on:{click:[function(e){e.stopPropagation()},function(t){return e.deleteGoal()}]}},[e._v("mdi-trash-can")])],1)],1)],1)],1),e._v(" "),a("v-divider",{attrs:{light:""}}),e._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{scrollable:"",height:"100%","max-width":"80%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{scrollable:"",width:"100%",height:"100%"}},[e.row.item.is_complete?a("v-card-title",[e._v("Task was completed on "+e._s(new Date(this.row.item.completedDate)))]):a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.updateGoal()}}},[e._v("\n              Mark as Complete\n              ")])],1),e._v(" "),a("newUpdate",{attrs:{thread:this.row.item.thread_ref}}),e._v(" "),a("v-container",{attrs:{height:"100%",justify:"center",width:"100%"}},e._l(e.updates,function(t){return a("v-row",{key:t.description,attrs:{id:"vContainer"}},[a("v-card",{attrs:{"max-width":"100%",id:"updateCard"}},[a("v-img",{attrs:{src:t.img,height:"70%"}}),e._v(" "),a("v-card-title",[e._v("\n              "+e._s(t.userName)+"\n            ")]),e._v(" "),a("v-card-text",[e._v("\n              "+e._s(t.description)+"\n            ")])],1),e._v(" "),a("v-card",{attrs:{"max-width":"100%",scrollable:"",id:"commentsListId"}},[a("v-list",[e._l(t.comments_list,function(t){return a("v-list-item",{key:t.text},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.userName))]),e._v(" "),a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(e._s(t.text))])],1)],1)}),e._v(" "),a("v-divider")],2),e._v(" "),a("v-textarea",{staticClass:"mx-2",attrs:{"append-outer-icon":"comment",rows:"1"},on:{"click:append-outer":function(a){return e.postComments(t.id)}},model:{value:e.newComment,callback:function(t){e.newComment=t},expression:"newComment"}})],1),e._v(" "),a("v-divider")],1)}),1)],1)],1)],1)],1)},staticRenderFns:[]};var O=a("VU/8")(L,q,!1,function(e){a("YS1b")},"data-v-6b2e98fa",null).exports,Y={data:function(){return{dialog:!1,public_goal:!1,notifications:!1,sound:!0,widgets:!1,name:"",team:"",description:"",teamName:"",picker:(new Date).toISOString().substr(0,10)}},methods:{postGoal:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={name:e.name,teamName:e.team,team_ref:e.team,end:e.picker,is_public:e.public_goal,description:e.description,userName:localStorage.name,user_ref:localStorage.user_id},console.log(a),I(a,{}).then(function(t){console.log(t),alert("Goal saved succesfully. Reload needed to show new goal"),e.dialog=!1}).catch(function(e){console.log(e)});case 3:case"end":return t.stop()}},t,e)}))()}},created:function(){}},Z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"#5A79A5"}},n),[e._v("\n        Add Goal\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),a("v-card",[a("v-toolbar",{attrs:{fluid:"",color:"#5A79A5"}},[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1),e._v(" "),a("v-toolbar-title",[e._v("New Goal")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{text:""},on:{click:e.postGoal}},[e._v("Save")])],1)],1),e._v(" "),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-text-field",{attrs:{"item-text":"Team",label:"Team"},model:{value:e.team,callback:function(t){e.team=t},expression:"team"}})],1)],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-switch",{staticClass:"mx-2",attrs:{label:"Public"},model:{value:e.public_goal,callback:function(t){e.public_goal=t},expression:"public_goal"}})],1)],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-date-picker",{staticClass:"mt-4",attrs:{"full-width":"",landscape:e.$vuetify.breakpoint.smAndUp,color:"#5A79A5"},model:{value:e.picker,callback:function(t){e.picker=t},expression:"picker"}})],1)],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-textarea",{attrs:{label:"Description","auto-grow":"",outlined:"",rows:"3","row-height":"25",shaped:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var z=a("VU/8")(Y,Z,!1,function(e){a("YIJZ")},"data-v-5c619ffb",null).exports,X={components:{ThreadDialog:O,GoalDialog:z},data:function(){return{search:"",singleSelect:!1,goals:[],filterValue:"description",emptyString:"",selected:[],headers:[{text:"Goal",align:"start",sortable:!1,value:"goal"},{text:"Start Date",value:"start"},{text:"End Date",value:"end"},{text:"Team",value:"team"}]}},methods:{getGoals:function(){var e=this;return p()(v.a.mark(function t(){var a,n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{uid:localStorage.user_id}},t.next=3,M(a);case 3:n=t.sent,console.log(n.data),e.goals=e.goals.concat(n.data);case 6:case"end":return t.stop()}},t,e)}))()},getHeaders:function(e){return[{text:"",align:"start",sortable:!1,value:e}]}},created:function(){this.getGoals()}},Q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"#DEE7EF"}},[a("v-card",[a("v-card-title",[e._v("\n      Goals\n      "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-row",[a("v-col",{attrs:{width:"50%"}},[a("v-select",{attrs:{items:["description","userName","teamName","name"]},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-col",{attrs:{width:"50%"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-spacer")],1),e._v(" "),a("goal-dialog")],1),e._v(" "),a("v-divider",{attrs:{light:""}}),e._v(" "),[a("v-data-table",{attrs:{items:e.goals,search:e.search,headers:e.getHeaders(e.filterValue)},scopedSlots:e._u([{key:"item",fn:function(e){return[a("threadDialog",{attrs:{row:e}})]}}])})]],2)],1)},staticRenderFns:[]};var K=a("VU/8")(X,Q,!1,function(e){a("R9sd")},"data-v-8ba47cce",null).exports,ee={components:{ThreadDialog:O,GoalDialog:z},data:function(){return{search:"",singleSelect:!1,goals:[],emptyString:"",selected:[],filterValue:"description"}},methods:{getGoals:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:a=t.sent,console.log(a.data),e.goals=e.goals.concat(a.data);case 5:case"end":return t.stop()}},t,e)}))()},getHeaders:function(e){return[{text:"",align:"start",sortable:!1,value:e}]}},created:function(){this.getGoals()}},te={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"#DEE7EF"}},[a("v-card",[a("v-card-title",[e._v("\n      Goals\n      "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-row",[a("v-col",{attrs:{width:"50%"}},[a("v-select",{attrs:{items:["description","userName","teamName","name"]},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-col",{attrs:{width:"50%"}},[a("v-text-field",{attrs:{width:"50%","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-spacer")],1),e._v(" "),a("goal-dialog")],1),e._v(" "),a("v-divider",{attrs:{light:""}}),e._v(" "),[a("v-data-table",{attrs:{items:e.goals,search:e.search,headers:e.getHeaders(e.filterValue)},scopedSlots:e._u([{key:"item",fn:function(e){return[a("threadDialog",{attrs:{row:e}})]}}])})]],2)],1)},staticRenderFns:[]};var ae=a("VU/8")(ee,te,!1,function(e){a("N8B2")},"data-v-946eb03c",null).exports,ne=function(e){return _().get("teams",e)},re=function(e){return _().post("teams",e)},se={data:function(){return{teamName:"",dialog:!1,public_goal:!1,description:"",notifications:!1,sound:!0,widgets:!1,picker:(new Date).toISOString().substr(0,10),comentarios:"",members:[localStorage.user_id]}},methods:{createTeam:function(){var e=this;return p()(v.a.mark(function t(){var a,n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={description:e.description,name:e.teamName,users:e.members},n={team:a,headers:{uid:localStorage.user_id}},console.log(n),t.next=5,re(n).then(function(e){alert("Team created")}).catch(function(e){alert(e)});case 5:t.sent,e.dialog=!1;case 7:case"end":return t.stop()}},t,e)}))()}}},oe={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"#5A79A5"}},n),[e._v("\n        Add Team\n    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),a("v-card",[a("v-toolbar",{attrs:{fluid:"",color:"#5A79A5"}},[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1),e._v(" "),a("v-toolbar-title",[e._v("New Team")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",{on:{click:function(t){return e.createTeam()}}},[a("v-btn",{attrs:{text:""}},[e._v("Save")])],1)],1),e._v(" "),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-text-field",{attrs:{label:"Name"},model:{value:e.teamName,callback:function(t){e.teamName=t},expression:"teamName"}})],1)],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-text-field",{attrs:{label:"Team members",width:"70%"},model:{value:e.teamMember,callback:function(t){e.teamMember=t},expression:"teamMember"}}),e._v(" "),a("v-btn",{attrs:{width:"30%"},on:{click:function(t){return e.members.push(e.teamMember)}}},[e._v("Add to list")])],1)],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-col",{staticClass:"d-flex"},[a("v-text",[e._v(e._s(e.members))])],1)],1)],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-list-item",[a("v-list-item-content",[a("v-textarea",{attrs:{label:"Description","auto-grow":"",outlined:"",rows:"3","row-height":"25",shaped:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var ie={components:{ThreadDialog:O,NewTeamDialog:a("VU/8")(se,oe,!1,function(e){a("CV1t")},"data-v-bb9818fe",null).exports},data:function(){return{search:"",singleSelect:!1,teams:[],emptyString:"",selected:[],headers:[{text:"Team",align:"start",sortable:!1,value:"name"},{text:"Team_Id",value:"id"},{text:"Members",value:"users_ref.length"},{text:"Description",value:"description"}]}},methods:{getTeams:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne({headers:{uid:localStorage.user_id}});case 2:a=t.sent,e.teams=e.teams.concat(a.data),console.log(e.teams);case 5:case"end":return t.stop()}},t,e)}))()}},created:function(){this.getTeams()}},ce={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"#DEE7EF"}},[a("v-card",[a("v-card-title",[e._v("\n      Teams\n      "),a("v-spacer"),e._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("new-team-dialog")],1),e._v(" "),[a("v-data-table",{attrs:{headers:e.headers,items:e.teams,search:e.search},scopedSlots:e._u([{key:"item",fn:function(t){return[a("tr",[a("td",[e._v(e._s(t.item.name))]),e._v(" "),a("td",[e._v(e._s(t.item.id))]),e._v(" "),a("td",[e._v(e._s(t.item.users_ref.length))]),e._v(" "),a("td",[e._v(e._s(t.item.description))])])]}}])})]],2)],1)},staticRenderFns:[]};var le=a("VU/8")(ie,ce,!1,function(e){a("PeUf")},"data-v-58c7b04f",null).exports,ue=function(e){return _().get("notifications",e)},de=function(e,t){return _().patch("notifications/"+e,t)},ve={components:{ThreadDialog:O,GoalDialog:z},data:function(){return{search:"",singleSelect:!1,notifications:[],emptyString:"",selected:[],headers:[{text:"From",value:"userFrom"},{text:"To",value:"userTo"},{text:"Type",value:"type"},{text:"Message",value:"comment_text"},{text:"",value:""}]}},methods:{getNotifications:function(){var e=this;return p()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue({headers:{uid:localStorage.user_id}});case 2:a=t.sent,console.log(a.data),e.notifications=e.notifications.concat(a.data);case 5:case"end":return t.stop()}},t,e)}))()},updateNotification:function(e){var t=this;return p()(v.a.mark(function a(){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e,{headers:{uid:localStorage.user_id}}).then(function(e){alert("You can see the comment in the update now.")}).catch(function(e){alert(resp)});case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}},a,t)}))()}},created:function(){this.getNotifications()}},me={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"#DEE7EF"}},[a("v-card",[a("v-card-title",[e._v("\n      Notifications\n      "),a("v-spacer"),e._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),[a("v-data-table",{attrs:{headers:e.headers,items:e.notifications,search:e.search},scopedSlots:e._u([{key:"item",fn:function(t){return[a("tr",[a("td",[e._v(e._s(t.item.userFrom))]),e._v(" "),a("td",[e._v(e._s(t.item.userTo))]),e._v(" "),a("td",[e._v(e._s(t.item.type))]),e._v(" "),a("td",[e._v(e._s(t.item.comment_text))]),e._v(" "),a("td",[a("v-btn",{on:{click:function(a){return e.updateNotification(t.item.id)}}},[e._v("Approve")])],1)])]}}])})]],2)],1)},staticRenderFns:[]};var pe=a("VU/8")(ve,me,!1,function(e){a("si7p")},"data-v-14c36627",null).exports;n.default.use(c.a);var fe=new c.a({routes:[{path:"/",name:"Welcome",component:u},{path:"/register",name:"Register",component:k},{path:"/login",name:"Login",component:C},{path:"/usermain",name:"User Main",component:U,children:[{path:"local",component:K},{path:"global",component:ae},{path:"teams",component:le},{path:"notifications",component:pe}]}]}),he=a("3EgV"),_e=a.n(he),ge=(a("7zck"),a("hoWp"));a("csSS"),a("gJtD");n.default.use(ge.a),n.default.use(_e.a,{icons:{iconfont:"mdi"}}),new n.default({vuetify:new _e.a,el:"#app",router:fe,components:{App:i},template:"<App/>"}),n.default.use(_e.a,{iconfont:"md"})},NpjJ:function(e,t){},P6ve:function(e,t){},PU1A:function(e,t){},PeUf:function(e,t){},R9sd:function(e,t){},TUaB:function(e,t){},YIJZ:function(e,t){},YS1b:function(e,t){},bbe2:function(e,t){},csSS:function(e,t){},gJtD:function(e,t){},si7p:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5523929b56840eb7151a.js.map