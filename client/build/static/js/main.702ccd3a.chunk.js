(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),o=(t(27),t(8)),i=t(9),m=t(11),s=t(10),u=t(12),d=t(6),p=t(5);var E=function(){return l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/dashboard",className:"/dashboard"===window.location.pathname?"nav-link active":"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/tasks",className:"/tasks"===window.location.pathname?"nav-link active":"nav-link"},"Task Bank")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/timer",className:"/timer"===window.location.pathname?"nav-link active":"nav-link"},"Pomodoro Timer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/stats",className:"/stats"===window.location.pathname?"nav-link active":"nav-link"},"User Stats")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"taskAdd"},l.a.createElement("h3",null,"Input Task")),l.a.createElement("br",null),l.a.createElement("input",{className:"col-12 form-control",type:"text",name:"taskForm",placeholder:"Add a task"})),l.a.createElement("select",{className:"custom-select",id:"priorityDropDown"},l.a.createElement("option",{selected:!0},"Priority Alerts"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("button",{type:"submit",className:"submitBtn btn btn-primary"},"Submit"))))};var v=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Calendar"),l.a.createElement("p",null,"Switch to code below once components are completed"))},h=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e={Category:"Coding",Tasks:["This","That"]};return l.a.createElement("div",{id:"accordion"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header",id:"headingOne"},l.a.createElement("h5",{className:"mb-0"},l.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},e.Category))),l.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},l.a.createElement("div",{className:"card-body"},l.a.createElement("ul",null,e.Tasks.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))))}}]),a}(l.a.Component),b=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.task;return l.a.createElement(h,{task:e})}}]),a}(l.a.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(b,null))};var w=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"PomodoroTimer"),l.a.createElement("p",null,"Switch to code below once component is finished"))};var f=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"User Stats"),l.a.createElement("p",null,"What have you...."))},N=(t(33),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(p.a,{exact:!0,path:"/",component:v}),l.a.createElement(p.a,{exact:!0,path:"/tasks",component:k}),l.a.createElement(p.a,{exact:!0,path:"/timer",component:w}),l.a.createElement(p.a,{exact:!0,path:"/stats",component:f})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.702ccd3a.chunk.js.map