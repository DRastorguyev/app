(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{121:function(e,t,n){e.exports={mySort:"MySort_mySort__Vqm3W",sort__btn:"MySort_sort__btn__3wecl"}},174:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(22),a=n.n(c),o=n(45),s=n.n(o),i=n(75),u=n(50),l=(n(174),n(51)),j=n(342),d=n(8),p=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(j.a,Object(l.a)(Object(l.a)({},e),{},{placeholder:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u0447\u043a\u0430..."}))})},h=function(e){var t=e.createTodo,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],o=c[1];return Object(d.jsx)("div",{children:Object(d.jsx)("form",{style:{alignItems:"center",paddingTop:10},children:Object(d.jsx)(p,{onKeyDown:function(e){"Enter"===e.code&&(e.preventDefault(),""===a.trim()?alert("\u0424\u043e\u0440\u043c\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"):(t(a),o("")))},onChange:function(e){return o(e.target.value)},value:a,type:"text"})})})},b=n(343),f=n(339),O=n(340),m=n(341),x=n(103),g=n(166),v=n(117),y=n.n(v),k=n(344),T=function(e){var t=e.todo,n=e.removeTodo,c=e.patchTodo,a=Object(r.useState)(!1),o=Object(u.a)(a,2),s=o[0],i=o[1];return Object(d.jsx)(b.b.Item,{children:Object(d.jsxs)(f.a,{justify:"space-between",style:{width:"100%"},children:[Object(d.jsx)(O.a,{style:{cursor:"pointer"},children:Object(d.jsxs)(f.a,{onClick:function(e){e.stopPropagation(),i(!0)},align:"middle",children:[Object(d.jsx)(y.a,{checked:!!t.done,onClick:function(e){e.stopPropagation(),c(t.uuid,{done:!t.done})},style:{marginRight:10}}),Object(d.jsx)(m.a,{children:s?Object(d.jsx)(p,{style:{marginTop:30},autoFocus:!0,onBlur:function(){return i(!1)},onKeyDown:function(e){"Enter"===e.code&&(c(t.uuid,{name:e.target.value}),i(!1))},defaultValue:t.name}):t.name})]})}),Object(d.jsxs)(O.a,{children:[t.createdAt.slice(11,19),Object(d.jsx)(x.a,{placement:"right",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:Object(d.jsx)(g.a,{onClick:function(e){e.stopPropagation(),n(t.uuid)},style:{marginLeft:85},shape:"circle",size:"small",icon:Object(d.jsx)(k.a,{})})})]})]})})},w=function(e){var t=e.todos,n=e.removeTodo,r=e.selectToDo,c=e.patchTodo;return Object(d.jsx)(b.b,{size:"large",dataSource:t,renderItem:function(e){return Object(d.jsx)(T,{patchTodo:c,todos:t,todo:e,selectToDo:r,removeTodo:n})}})},S=n(121),_=n.n(S),C=function(e){var t=e.setFilter,n=function(e){return function(){t((function(t){return Object(l.a)(Object(l.a)({},t),{},{filterType:e})}))}},r=function(e){return function(){t((function(t){return Object(l.a)(Object(l.a)({},t),{},{sortDirection:e})}))}};return Object(d.jsxs)("div",{className:_.a.mySort,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(g.a,{size:"small",style:{marginRight:10},type:"ghost",shape:"round",onClick:n(""),children:"\u0412\u0441\u0435"}),Object(d.jsx)(g.a,{size:"small",style:{marginRight:10},type:"ghost",shape:"round",onClick:n("done"),children:"\u0413\u043e\u0442\u043e\u0432\u044b\u0435"}),Object(d.jsx)(g.a,{size:"small",style:{marginRight:10},type:"ghost",shape:"round",onClick:n("undone"),children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"})]}),Object(d.jsxs)("div",{className:_.a.sort__btn,children:[Object(d.jsx)("p",{style:{marginRight:5,marginBottom:0},children:"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435"}),Object(d.jsx)(g.a,{size:"small",style:{marginRight:10},type:"ghost",shape:"round",onClick:r("asc"),children:Object(d.jsx)("i",{className:"fas fa-chevron-up"})}),Object(d.jsx)(g.a,{size:"small",style:{marginRight:10},type:"ghost",shape:"round",onClick:r("desc"),children:Object(d.jsx)("i",{className:"fas fa-chevron-down"})})]})]})},z=n(163),D=n(76),R=n.n(D);var B=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({sortDirection:"asc",filterType:"all"}),o=Object(u.a)(a,2),l=o[0],j=o[1],p=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={order:l.sortDirection},"done"!==l.filterType&&"undone"!==l.filterType||(t.filterBy=l.filterType),e.next=4,R.a.get("https://todo-api-learning.herokuapp.com/v1/tasks/1",{params:t});case 4:n=e.sent,console.log(n.data),c(n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("https://todo-api-learning.herokuapp.com/v1/task/1",{name:t,done:!1});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("\u0422\u0430\u043a \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f!");case 8:p();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.delete("https://todo-api-learning.herokuapp.com/v1/task/1/".concat(t));case 2:p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.patch("https://todo-api-learning.herokuapp.com/v1/task/1/".concat(t),n);case 2:p();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){p()}),[l]);var g=Object(r.useState)(1),v=Object(u.a)(g,2),y=v[0],k=v[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{style:{textAlign:"center",paddingTop:5,marginBottom:5,fontSize:45,fontWeight:100},children:"ToDo"}),Object(d.jsx)(h,{createTodo:b}),Object(d.jsx)(f.a,{children:Object(d.jsxs)(O.a,{xs:24,md:{span:24,offset:0},children:[Object(d.jsx)(C,{fetchTodos:p,setFilter:j}),Object(d.jsx)(w,{patchTodo:x,removeTodo:m,todos:n.slice(5*(y-1),5*y)}),Object(d.jsx)(z.a,{pageSize:5,current:y,onChange:function(e){return k(e)},total:n.length})]})})]})};n(333);a.a.render(Object(d.jsx)(B,{}),document.getElementById("root"))}},[[334,1,2]]]);
//# sourceMappingURL=main.a1a932d1.chunk.js.map