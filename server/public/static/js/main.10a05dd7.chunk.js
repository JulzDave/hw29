(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),s=(n(24),n(5)),o=n(6),i=n(8),u=n(7),h=n(9),m=(n(11),n(10)),p=n.n(m),d=n(12),b=n(13),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Reg"}," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Register:"),r.a.createElement("input",{type:"text",onChange:this.handleTextChange.bind(this),name:"username",placeholder:"enter username",value:this.state.username}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:this.handleTextChange.bind(this),name:"password",placeholder:"enter password",value:this.state.password}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.sendForm.bind(this)},"Submit"))}},{key:"handleTextChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"sendForm",value:function(){var e=Object(d.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Sign"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{method:"post",action:"\\login"},r.a.createElement("h2",null,"Sign in:"),r.a.createElement("input",{type:"text",onChange:this.handleTextChange.bind(this),name:"username",placeholder:"enter username",value:this.state.username}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:this.handleTextChange.bind(this),name:"password",placeholder:"enter password",value:this.state.password}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))}},{key:"handleTextChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"sendForm",value:function(){var e=Object(d.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),E=n(36),v=n(34),j=n(35),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Reg"}," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Welcome to this user Interface!"),r.a.createElement("h3",null,"Please sign in or register"))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allUsers:[]},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{to:"/login"},"Sign in"),r.a.createElement(v.a,{to:"/register"},"Register"),r.a.createElement(v.a,{to:"/",className:"home"},"\u2302"),r.a.createElement(j.a,{path:"/login",component:g}),r.a.createElement(j.a,{path:"/register",render:function(){return r.a.createElement(f,{refreshFunc:e.reDownloadData.bind(e)})}}),r.a.createElement(j.a,{exact:!0,path:"/",component:w})))}},{key:"reDownloadData",value:function(){var e=this;fetch("http://localhost:3000/register").then(function(e){return e.json()}).then(function(t){e.setState({allUsers:t})})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.10a05dd7.chunk.js.map