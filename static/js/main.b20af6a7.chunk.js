(this["webpackJsonpportfolio-development"]=this["webpackJsonpportfolio-development"]||[]).push([[0],{18:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){},26:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);i(26);var n=i(1),a=i.n(n),s=i(23),c=i.n(s),r=i(12),l=i(2),o=i(5),h=i(4),d=i(3),j=(i(31),i(6)),u=(i(32),i(18),i.p+"static/media/favicon.6b0703b7.svg"),b=i(0),m=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="Header",e.padding="Header-Padding",e.name="Gabrielle Tan",e.role="Software Developer",e.max_height=0,e.min_height=0,e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=function(){e.max_height=window.innerHeight,e.min_height=Math.max(0*window.innerHeight,0),i()},i=function(){var t=document.getElementById(e.id),i=document.getElementById(e.padding),n=document.documentElement.scrollTop,a=Math.max(e.min_height,Math.min(e.max_height,e.max_height-n));n<e.max_height?(t.style.height=a+"px",i.style.height=n+"px"):(t.style.height=e.min_height+"px",i.style.height=e.max_height+"px")};window.addEventListener("resize",t),window.addEventListener("scroll",i),t()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Header-Container",children:[Object(b.jsx)("div",{id:this.padding}),Object(b.jsxs)("header",{id:this.id,className:"Header",children:[Object(b.jsx)("img",{src:u,className:"Header-Logo",alt:"logo"}),Object(b.jsxs)("div",{className:"Header-Text",children:[Object(b.jsx)("div",{className:"Header-Title",children:this.name}),Object(b.jsxs)("div",{className:"Header-Subtitle",children:[this.role,Object(b.jsx)("span",{className:"Blinking",children:"_"})]})]})]})]})}}]),i}(a.a.Component),f=(i(34),function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"Footer",children:[Object(b.jsxs)("div",{className:"Credit",children:["Made with ",Object(b.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React.js"}),Object(b.jsx)("span",{className:"Blinking",children:"_"})]}),Object(b.jsx)("div",{className:"Buffer"})]})}}]),i}(a.a.Component)),p=(i(35),i(36),-1),g=0,O=1,v=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).name="",e.icon="",e.link="",e.pos=g,e.id="",e.name_id="",e.self=null,e.name_elem=null,e.onHover=function(){e.name_elem.style.maxWidth=e.name_elem.scrollWidth+"px",e.name_elem.style.paddingRight="15px",e.self.style.borderTopRightRadius="15px",e.self.style.borderBottomRightRadius="15px"},e.onHoverExit=function(){switch(e.name_elem.style.maxWidth=null,e.name_elem.style.paddingRight=0,e.self.style.borderTop=null,e.self.style.borderBottom=null,e.pos){case p:e.self.style.borderTopRightRadius="15px",e.self.style.borderBottomRightRadius="0px";break;case g:e.self.style.borderTopRightRadius="0px",e.self.style.borderBottomRightRadius="0px";break;case O:e.self.style.borderTopRightRadius="0px",e.self.style.borderBottomRightRadius="15px";break;default:console.log("Unhandled case.")}},e.getTab=function(){return e.name=e.name.replace(" ","_"),e.id="NavTab"+e.name,e.name_id=e.id+"Name",Object(b.jsxs)(r.b,{id:e.id,className:"NavTab",to:e.link,onMouseEnter:e.onHover,onMouseLeave:e.onHoverExit,children:[Object(b.jsx)("img",{src:e.icon,alt:e.name}),Object(b.jsxs)("div",{id:e.name_id,className:"Name",children:[">"," cd ",e.name,Object(b.jsx)("span",{className:"Blinking",children:"_"})]})]})},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.self=document.getElementById(this.id),this.name_elem=document.getElementById(this.name_id),this.onHoverExit()}}]),i}(a.a.Component),x=i.p+"static/media/timeline.8bad127d.svg",y=i.p+"static/media/aboutme.914b4013.svg",k=i.p+"static/media/devlogs.1aefe10b.svg",N=i.p+"static/media/test.273e978b.svg",w=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.name="Profile",this.icon=y,this.link="./profile",this.pos=p,this.getTab()}}]),i}(v),_=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.name="Timeline",this.icon=x,this.link="./timeline",this.pos=g,this.getTab()}}]),i}(v),I=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.name="Dev Logs",this.icon=k,this.link="./dev_logs",this.pos=g,this.getTab()}}]),i}(v),R=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.name=".Test",this.icon=N,this.link="./.test",this.pos=O,this.getTab()}}]),i}(v),C=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("navbar",{className:"NavBar",children:[Object(b.jsx)(w,{}),Object(b.jsx)(_,{}),Object(b.jsx)(I,{}),Object(b.jsx)(R,{})]})}}]),i}(a.a.Component),P=(i(42),i.p+"static/media/profile_bg.3c178b1c.png"),E=i.p+"static/media/profile.e58763d6.png",T=i.p+"static/media/github-icon.43633357.svg",B=i.p+"static/media/gitlab-icon.cce28f7b.svg",M=i.p+"static/media/vs2019-icon.6e70ba63.svg",D=i.p+"static/media/vscode-icon.f9f6c007.svg",H=i.p+"static/media/opengl-icon.d013c3c4.svg",L=i.p+"static/media/qt-icon.666354e0.svg",z=i.p+"static/media/react-icon.b8a46a94.svg",S=i.p+"static/media/unreal_engine-icon.1b23ebb1.svg",A=i.p+"static/media/unity-icon.522236ca.svg",W=i.p+"static/media/photoshop-icon.00370c13.svg",G=i.p+"static/media/illustrator-icon.4858ef23.svg",F=i.p+"static/media/premiere_pro-icon.b71d235a.svg",U=i.p+"static/media/mixcraft_8-icon.27d35c67.png",J=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).OnResize=function(){var e=new Image;e.src=P;var t=n.main.current.offsetWidth/e.width*e.height;n.main.current.style.minHeight=t+"px",console.log("resized")},n.main=a.a.createRef(),n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.OnResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.OnResize)}},{key:"render",value:function(){return window.addEventListener("resize",this.OnResize),Object(b.jsxs)("div",{className:"Profile",ref:this.main,children:[Object(b.jsx)("div",{className:"Profile-Margin"}),Object(b.jsx)("div",{className:"Profile-Padding"}),Object(b.jsxs)("div",{className:"Profile-Block",children:[Object(b.jsx)("img",{className:"Profile-Img",ref:this.profile_pic,src:E,alt:"Profile Pic"}),Object(b.jsxs)("div",{className:"Profile-Content",children:[Object(b.jsx)("p",{children:"I'm a code junky whose strong suit comes in tools programming. I love developing things that people can use and benefit from. This extends to design where I love to deliver my content to people in both an aesthetically pleasing yet practical manner."}),Object(b.jsx)("p",{children:"Absolutely love narrative-driven content and discussing with others on its presentation and message. I draw from time to time as a hobby and love listening to music - no specific genre, just music that makes my heart sing \u266a"}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsxs)("div",{style:{flex:"1"},children:[Object(b.jsx)("h3",{children:"Programming"}),Object(b.jsx)("img",{className:"Icon",src:T,alt:"Github"}),Object(b.jsx)("img",{className:"Icon",src:B,alt:"Gitlab"}),Object(b.jsx)("img",{className:"Icon",src:M,alt:"Visual Studio 2019"}),Object(b.jsx)("img",{className:"Icon",src:D,alt:"Visual Studio Code"}),Object(b.jsx)("img",{className:"Icon",src:H,alt:"OpenGL"}),Object(b.jsx)("img",{className:"Icon",src:L,alt:"Qt5"}),Object(b.jsx)("img",{className:"Icon",src:z,alt:"react-app"})]}),Object(b.jsxs)("div",{style:{flex:"1"},children:[Object(b.jsx)("h3",{children:"Design"}),Object(b.jsx)("img",{className:"Icon",src:S,alt:"Unreal Engine 4"}),Object(b.jsx)("img",{className:"Icon",src:A,alt:"Unity"}),Object(b.jsx)("img",{className:"Icon",src:W,alt:"Adobe Photoshop"}),Object(b.jsx)("img",{className:"Icon",src:G,alt:"Adobe Illustrator"}),Object(b.jsx)("img",{className:"Icon",src:F,alt:"Adobe Premier Pro"}),Object(b.jsx)("img",{className:"Icon",src:U,alt:"Mixcraft 8"})]})]})]})]}),Object(b.jsx)("div",{className:"Profile-Margin"})]})}}]),i}(a.a.Component),V=(i(20),i(21),i(43),{programming:"programming",design:"design",leadership:"leadership",invalid:"invalid"}),X=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).get_title=function(){return Object(b.jsx)("div",{className:"Project-Title",children:e.name})},e.get_links=function(){var t=e.links.map((function(e){return Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{height:"100%",alt:e.name,src:e.image})})}));return Object(b.jsxs)("div",{className:"Project-Link",children:[Object(b.jsx)("b",{children:"Download:"}),Object(b.jsx)("span",{children:t})]})},e.get_tags=function(){var t=e.tags.map((function(e){return Object(b.jsxs)("span",{className:e,children:["#",e]})}));return Object(b.jsx)("div",{className:"Project-Hashtag",children:t})},e}return i}(a.a.Component),q=i.p+"static/media/digipen.504a3486.svg",K=i.p+"static/media/steam.292b4ea0.svg",Q=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).name="Eos (2019)",n.tags=[V.programming,V.leadership],n.links=[{name:"Steam",link:"https://store.steampowered.com/app/1571180/Eos/",image:K},{name:"Digipen Games Gallery",link:"https://games.digipen.edu/games/eos",image:q}],n}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Project-Brief",children:[Object(b.jsxs)("div",{id:"jump",className:"Project-Block",children:[Object(b.jsx)(this.get_title,{}),Object(b.jsx)(this.get_tags,{}),Object(b.jsxs)("div",{className:"Project-Description",children:["Eos is a 3D puzzle game made by an 11 person team, Bonsai Tavern, for our 3rd year Digipen games project. I was the producer for the first semester before stepping down to fully focus on my technical responsibilities in the second semester. Some of the things I've implemented include:",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Property Reflection  "}),Object(b.jsx)("li",{children:"De/Serialiser        "}),Object(b.jsx)("li",{children:"Configuration Manager"}),Object(b.jsx)("li",{children:"3D Animations        "}),Object(b.jsx)("li",{children:"Prefab System        "})]})]}),Object(b.jsx)(this.get_links,{})]}),Object(b.jsx)("div",{className:"Project-Block",children:Object(b.jsx)("div",{className:"AspectRatio _16-9",children:Object(b.jsx)("iframe",{title:"Eos Trailer",width:"100%",height:"100%",src:"https://www.youtube.com/embed/wH1Y8KvImdE",frameborder:"0",crossorigin:"anonymous",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:!0})})})]})}}]),i}(X),Y=i(25),Z=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).fill="#C0C0C0",n.is_fill=!0,n.myRef=a.a.createRef(),n}return Object(o.a)(i,[{key:"self",get:function(){return this.myRef.current}},{key:"ctx",get:function(){return this.self.getContext("2d")}},{key:"canvas",get:function(){return this.ctx.canvas}},{key:"resize",value:function(){this.canvas.width=this.self.parentElement.offsetWidth,this.canvas.height=this.self.parentElement.offsetHeight}},{key:"init",value:function(){this.resize(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle=this.fill,this.is_fill&&this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){return Object(b.jsx)("canvas",Object(Y.a)({ref:this.myRef},this.props))}}]),i}(a.a.Component),$=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).is_fill=!1,n}return Object(o.a)(i,[{key:"radius",get:function(){return.5*Math.min(this.canvas.width,this.canvas.height)}},{key:"componentDidMount",value:function(){this.init(),this.ctx.beginPath(),this.ctx.arc(this.radius,this.radius,this.radius,0,2*Math.PI),this.ctx.fill()}}]),i}(Z),ee=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).thickness=10,n.is_fill=!1,n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.init();var e=Math.round(.5*(this.canvas.width-this.thickness));this.ctx.fillRect(e,0,this.thickness,this.canvas.height)}}]),i}(Z),te=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="Timeline",e}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Timeline",children:Object(b.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",margin:"auto"},children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:"0.1"},children:[Object(b.jsx)("div",{style:{width:"25px",height:"25px",margin:"auto"},children:Object(b.jsx)($,{})}),Object(b.jsx)("div",{style:{width:"25px",height:"100%",margin:"auto"},children:Object(b.jsx)(ee,{})})]}),Object(b.jsx)("div",{className:"Slot Project-Left",children:Object(b.jsx)(Q,{})})]})})}}]),i}(a.a.Component),ie=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),i}(a.a.Component),ne=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),i}(a.a.Component),ae=(i(22),function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="",e.label="",e.image="",e.display="",e.link="",e.self=null,e.labels=null,e.onEnter=function(){if(e.labels)for(var t=0;t<e.labels.length;++t)e.labels[t].style.maxWidth=e.labels[t].scrollWidth+"px",e.labels[t].style.paddingRight="10px"},e.onExit=function(){if(e.labels)for(var t=0;t<e.labels.length;++t)e.labels[t].style.maxWidth=null,e.labels[t].style.paddingRight=0},e.getInfo=function(){return e.id="ContactInfo"+e.label,Object(b.jsxs)("a",{id:e.id,className:"Contact",href:e.link,target:"_blank",rel:"noopener noreferrer",onMouseOver:e.onEnter,onMouseLeave:e.onExit,children:[Object(b.jsx)("img",{src:e.image,alt:e.label}),Object(b.jsx)("span",{className:"Label",children:e.display})]})},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.self=document.getElementById(this.id),this.self&&(this.labels=this.self.getElementsByClassName("Label"))}}]),i}(a.a.Component)),se=i.p+"static/media/email.063c0ed7.svg",ce=i.p+"static/media/linkedin.b257e4f0.svg",re=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.label="Email",this.image=se,this.display=this.label,this.link="mailto:gabrielle@gtsc.dev",this.getInfo()}}]),i}(ae),le=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.label="GitHub",this.image=T,this.display=this.label,this.link="https://github.com/XxGTSCxX",this.getInfo()}}]),i}(ae),oe=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return this.label="LinkedIn",this.image=ce,this.display=this.label,this.link="https://www.linkedin.com/in/gabrielle-tan-suan-choo/",this.getInfo()}}]),i}(ae),he=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Contacts",children:[Object(b.jsx)(re,{}),Object(b.jsx)(le,{}),Object(b.jsx)(oe,{})]})}}]),i}(a.a.Component),de=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return r.a,Object(b.jsxs)("div",{className:"Main",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/profile",component:J}),Object(b.jsx)(j.a,{path:"/timeline",component:te}),Object(b.jsx)(j.a,{path:"/dev_logs",component:ie}),Object(b.jsx)(j.a,{path:"/.test",component:ne})]}),Object(b.jsx)(he,{}),Object(b.jsx)(f,{}),Object(b.jsx)(C,{})]})}}]),i}(a.a.Component),je=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,45)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(de,{})}),document.getElementById("root")),je()}},[[44,1,2]]]);
//# sourceMappingURL=main.b20af6a7.chunk.js.map