(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports={tasksList:"Tasks_tasksList__2gITH",tasksWrapper:"Tasks_tasksWrapper__3F3lm"}},23:function(e,t,a){e.exports={wrapper:"ToDoListWrapper_wrapper__2aI7p"}},24:function(e,t,a){e.exports={newTaskInput:"NewTask_newTaskInput__2kz-n"}},27:function(e,t,a){e.exports={task:"EachTaskInList_task__3aaqC"}},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),i=(a(33),a(11)),o=a(12),u=a(14),l=a(13),d=(a(34),a(23)),p=a.n(d),j=a.p+"static/media/back.1fa88825.png",m=a(24),k=a.n(m),b=a(1),g=function(e){var t=e.enterHandler,a=e.catchInputChanges,n=e.newTaskInputValue;return Object(b.jsx)("div",{className:k.a.newTaskInput,children:Object(b.jsx)("input",{onKeyDown:t,onChange:a,value:n})})},O=a(15),v=a(6),I=a(25),f="INPUT_TASK_VALUE_CHANGED",T="REMOVE_TASK",h="ADD_TASK",x={newTaskInputValue:"",newTaskCreated:"false",maxId:localStorage.getItem("itemsMaxId_1"),tasks:"undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]};function S(e){if(!(e&&e.length>0))return!1;return!/^[\s]+$/.test(e)||void 0}var w=Object(I.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{newTaskInputValue:t.newTaskInputValue}));case h:var a=S(e.newTaskInputValue);if(a){var n,s=+localStorage.getItem("itemsMaxId_1");if(localStorage.setItem("itemsMaxId_1",s+1),localStorage.getItem("items")){n="undefined"!==localStorage.getItem("items")&&"null"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];var r=[].concat(Object(O.a)(n),[{id:s+1,value:e.newTaskInputValue}]),c=r;localStorage.setItem("items",JSON.stringify(c))}else{n=[];var i=[].concat(Object(O.a)(n),[{id:s+1,value:e.newTaskInputValue}]),o=i;localStorage.setItem("items",JSON.stringify(o))}return Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{newTaskCreated:"true",newTaskInputValue:"",maxId:s+1,tasks:[].concat(Object(O.a)(n),[{id:s+1,value:e.newTaskInputValue}])}))}return!1;case T:var u="undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],l=e.tasks;return u&&u.forEach((function(e,a){e.id==t.id&&(l&&l.splice(a,1),0===l.length&&localStorage.setItem("itemsMaxId_1",0),localStorage.setItem("items",JSON.stringify(l)))})),Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{maxId:localStorage.getItem("itemsMaxId_1"),tasks:JSON.parse(localStorage.getItem("items"))}));default:return e}}),x),_=function(e){return{type:T,id:e}},N=w,V=a(5),y=Object(V.b)((function(e){return{newTaskInputValue:e.newTaskInputValue}}),(function(e){return{enterHandler:function(t){if("Enter"===t.code||13===t.keyCode)return e((a=t.target.parentNode.getAttribute("id"),{type:h,id:a}));var a},catchInputChanges:function(t){var a=t.target.value;return e({type:f,newTaskInputValue:a})}}}))(g),C=a(19),A=a.n(C),J=a(27),E=a.n(J),L=function(e){var t=e.id,a=e.value,n=e.removeTask;return Object(b.jsxs)("div",{className:E.a.task,id:t,children:[Object(b.jsx)("span",{children:a}),Object(b.jsx)("button",{onClick:function(e){return n(e)},children:"x"})]})},M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(L,{id:this.props.taskValue.id,value:this.props.taskValue.value,removeTask:this.props.removeTask})})}}]),a}(s.a.Component),D=Object(V.b)((function(e){return{id:e.maxId,value:e.newTaskInputValue}}),(function(e){return{removeTask:function(t){e(_(t.target.parentNode.getAttribute("id")))}}}))(M),H=function(e){var t=e.removeTask,a=e.taskValue;return Object(b.jsx)("div",{children:Object(b.jsx)(D,{removeTask:t,taskValue:a})})},K=function(e){var t=e.removeTask,a="undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];return Object(b.jsx)("div",{className:A.a.tasksWrapper,children:a&&a.map((function(e){return Object(b.jsx)("div",{className:A.a.tasksList,children:Object(b.jsx)(H,{removeTask:t,taskValue:e})})}))})},W=function(e){var t=e.state,a=e.removeTask,n=e.id,s=e.onChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j,className:"App-logo",alt:"logo"})}),Object(b.jsxs)("div",{className:p.a.wrapper,children:[Object(b.jsx)(y,{}),Object(b.jsx)(K,{dispatch:s,state:t,removeTask:a},n)]})]})},U=Object(V.b)((function(e){return{newTaskCreated:e.newTaskCreated,id:e.maxId,tasks:e.tasks}}),(function(e){return{removeTask:function(t){e(_(t))}}}))(W),q=a(28),z=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)(q.a,{basename:"/todoList",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(U,{store:N})})})}}]),a}(s.a.Component);c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(V.a,{store:N,children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.78f0e196.chunk.js.map