(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),r=n.n(o),i=(n(25),n(2)),l=n.n(i),s=n(13),u=n(14),m=n(15),p=n(18),h=n(16),d=n(19),f=n(17),v=n.n(f),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={content:[]},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(s.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/api/recipes/");case 2:n=t.sent,console.log(n.data.recipe),e.setState({content:n.data.recipe});case 5:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){return c.a.createElement("section",{className:"app"},c.a.createElement("div",null,this.state.content.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,e._id),c.a.createElement("p",null,e.name),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.cookingInstructions}}),c.a.createElement("img",{src:"/uploads/files/".concat(e.image.filename),alt:""}))}))),c.a.createElement("h2",null,"Hello React!!"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.249f9c3d.chunk.js.map