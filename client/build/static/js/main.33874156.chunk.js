(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),c=(n(17),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(18),n(19),n(6)),m=n(10),p=n(9),f=n.n(p),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).joyRef=a.a.createRef(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.manager=f.a.create(Object(m.a)({},this.props.options,{zone:this.joyRef.current})),this.props.managerListener(this.manager)}},{key:"render",value:function(){return a.a.createElement("div",{ref:this.joyRef,style:this.props.containerStyle})}}]),t}(o.Component);g.defaultProps={options:{mode:"semi",catchDistance:150,color:"white"},containerStyle:{width:"100%",height:"50vh",position:"relative",background:"linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)"}};var b=g,v={mode:"semi",catchDistance:150,color:"white"},j={position:"relative",height:"350px",width:"100%",background:"linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)"},O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).managerListener=e.managerListener.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"managerListener",value:function(e){e.on("move",function(e,t){console.log("I moved!")}),e.on("end",function(){console.log("I ended!")})}},{key:"render",value:function(){this.props.classes;return a.a.createElement("div",null,a.a.createElement(b,{options:v,containerStyle:j,managerListener:this.managerListener}))}}]),t}(o.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(O,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.33874156.chunk.js.map