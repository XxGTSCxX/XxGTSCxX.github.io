(this["webpackJsonpportfolio-development"]=this["webpackJsonpportfolio-development"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(26);var i=n(1),a=n.n(i),s=n(23),c=n.n(s),r=n(12),l=n(2),o=n(5),h=n(4),u=n(3),d=(n(31),n(6)),j=(n(32),n(18),n.p+"static/media/favicon.6b0703b7.svg"),b=n(0),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="Header",e.padding="Header-Padding",e.name="Gabrielle Tan",e.role="Software Developer",e.max_height=0,e.min_height=0,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=function(){e.max_height=window.innerHeight,e.min_height=Math.max(0*window.innerHeight,0),n()},n=function(){var t=document.getElementById(e.id),n=document.getElementById(e.padding),i=document.documentElement.scrollTop,a=Math.max(e.min_height,Math.min(e.max_height,e.max_height-i));i<e.max_height?(t.style.height=a+"px",n.style.height=i+"px"):(t.style.height=e.min_height+"px",n.style.height=e.max_height+"px")};window.addEventListener("resize",t),window.addEventListener("scroll",n),t()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Header-Container",children:[Object(b.jsx)("div",{id:this.padding}),Object(b.jsxs)("header",{id:this.id,className:"Header",children:[Object(b.jsx)("img",{src:j,className:"Header-Logo",alt:"logo"}),Object(b.jsxs)("div",{className:"Header-Text",children:[Object(b.jsx)("div",{className:"Header-Title",children:this.name}),Object(b.jsxs)("div",{className:"Header-Subtitle",children:[this.role,Object(b.jsx)("span",{className:"Blinking",children:"_"})]})]})]})]})}}]),n}(a.a.Component),p=m,f=(n(34),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"Footer",children:[Object(b.jsxs)("div",{className:"Credit",children:["Made with ",Object(b.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React.js"}),Object(b.jsx)("span",{className:"Blinking",children:"_"})]}),Object(b.jsx)("div",{className:"Buffer"})]})}}]),n}(a.a.Component)),O=f,g=(n(35),n(36),-1),v=0,x=1,y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).name="",e.icon="",e.link="",e.pos=v,e.id="",e.name_id="",e.self=null,e.name_elem=null,e.onHover=function(){e.name_elem.style.maxWidth=e.name_elem.scrollWidth+"px",e.name_elem.style.paddingRight="15px",e.self.style.borderTopRightRadius="15px",e.self.style.borderBottomRightRadius="15px"},e.onHoverExit=function(){switch(e.name_elem.style.maxWidth=null,e.name_elem.style.paddingRight=0,e.self.style.borderTop=null,e.self.style.borderBottom=null,e.pos){case g:e.self.style.borderTopRightRadius="15px",e.self.style.borderBottomRightRadius="0px";break;case v:e.self.style.borderTopRightRadius="0px",e.self.style.borderBottomRightRadius="0px";break;case x:e.self.style.borderTopRightRadius="0px",e.self.style.borderBottomRightRadius="15px";break;default:console.log("Unhandled case.")}},e.getTab=function(){return e.name=e.name.replace(" ","_"),e.id="NavTab"+e.name,e.name_id=e.id+"Name",Object(b.jsxs)(r.b,{id:e.id,className:"NavTab",to:e.link,onMouseEnter:e.onHover,onMouseLeave:e.onHoverExit,children:[Object(b.jsx)("img",{src:e.icon,alt:e.name}),Object(b.jsxs)("div",{id:e.name_id,className:"Name",children:[">"," cd ",e.name,Object(b.jsx)("span",{className:"Blinking",children:"_"})]})]})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.self=document.getElementById(this.id),this.name_elem=document.getElementById(this.name_id),this.onHoverExit()}}]),n}(a.a.Component),k=n.p+"static/media/timeline.8bad127d.svg",w=n.p+"static/media/aboutme.914b4013.svg",N=n.p+"static/media/devlogs.1aefe10b.svg",R=n.p+"static/media/test.273e978b.svg",_=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.name="Profile",this.icon=w,this.link="/profile",this.pos=g,this.getTab()}}]),n}(y),C=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.name="Timeline",this.icon=k,this.link="/timeline",this.pos=v,this.getTab()}}]),n}(y),T=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.name="Dev Logs",this.icon=N,this.link="/dev_logs",this.pos=v,this.getTab()}}]),n}(y),E=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.name=".Test",this.icon=R,this.link="/.test",this.pos=x,this.getTab()}}]),n}(y),B=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("navbar",{className:"NavBar",children:[Object(b.jsx)(_,{}),Object(b.jsx)(C,{}),Object(b.jsx)(T,{}),Object(b.jsx)(E,{})]})}}]),n}(a.a.Component),M=B,D=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(a.a.Component),H=D,I=(n(20),n(21),n(42),{programming:"programming",design:"design",leadership:"leadership",invalid:"invalid"}),P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).get_title=function(){return Object(b.jsx)("div",{className:"Project-Title",children:e.name})},e.get_links=function(){var t=e.links.map((function(e){return Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{height:"100%",alt:e.name,src:e.image})})}));return Object(b.jsxs)("div",{className:"Project-Link",children:[Object(b.jsx)("b",{children:"Download:"}),Object(b.jsx)("span",{children:t})]})},e.get_tags=function(){var t=e.tags.map((function(e){return Object(b.jsxs)("span",{className:e,children:["#",e]})}));return Object(b.jsx)("div",{className:"Project-Hashtag",children:t})},e}return n}(a.a.Component),L=P,S=n.p+"static/media/digipen.504a3486.svg",A=n.p+"static/media/steam.292b4ea0.svg",z=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.name="Eos (2019)",this.tags=[I.programming,I.leadership],this.links=[{name:"Steam",link:"https://store.steampowered.com/app/1571180/Eos/",image:A},{name:"Digipen Games Gallery",link:"https://games.digipen.edu/games/eos",image:S}],Object(b.jsxs)("div",{className:"Project-Brief",children:[Object(b.jsx)("div",{className:"Project-Block",children:Object(b.jsx)("div",{className:"AspectRatio _16-9",children:Object(b.jsx)("iframe",{title:"Eos Trailer",width:"100%",height:"100%",src:"https://www.youtube.com/embed/wH1Y8KvImdE",frameborder:"0",crossorigin:"anonymous",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",allowfullscreen:!0})})}),Object(b.jsxs)("div",{id:"jump",className:"Project-Block",children:[Object(b.jsx)(this.get_title,{}),Object(b.jsx)(this.get_tags,{}),Object(b.jsxs)("div",{className:"Project-Description",children:["Eos is a 3D puzzle game made by an 11 person team, Bonsai Tavern, for our 3rd year Digipen games project. I was the producer for the first semester before stepping down to fully focus on my technical responsibilities in the second semester. Some of the things I've implemented include:",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Property Reflection  "}),Object(b.jsx)("li",{children:"De/Serialiser        "}),Object(b.jsx)("li",{children:"Configuration Manager"}),Object(b.jsx)("li",{children:"3D Animations        "}),Object(b.jsx)("li",{children:"Prefab System        "})]})]}),Object(b.jsx)(this.get_links,{})]})]})}}]),n}(L),W=z,F=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="Timeline",e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:this.id,className:"Timeline",children:Object(b.jsx)("div",{className:"Slot Project-Left",children:Object(b.jsx)(W,{})})})}}]),n}(a.a.Component),G=F,J=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(a.a.Component),X=J,K=n(25),U=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).colour="#000000",i.resize=function(e,t){t.canvas.width=e.parentElement.offsetWidth,t.canvas.height=e.parentElement.offsetHeight},i.myRef=a.a.createRef(),i}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("canvas",Object(K.a)({width:this.width,height:this.height,ref:this.myRef},this.props))}}]),n}(a.a.Component),Y=U,q=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"radius",value:function(){var e=this.myRef.current.getContext("2d"),t=e.canvas.width,n=e.canvas.height;return Math.floor(.5*Math.min(t,n))}},{key:"componentDidMount",value:function(){var e=this.myRef.current,t=e.getContext("2d");this.resize(e,t);var n=this.radius();t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle=this.colour,t.beginPath(),t.arc(n,n,n,0,2*Math.PI),t.fill()}}]),n}(Y),Q=q,V=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.myRef.current,t=e.getContext("2d");this.resize(e,t),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle=this.colour,t.fillRect(0,0,t.canvas.width,t.canvas.height)}}]),n}(Y),Z=V,$=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).thickness=10,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.myRef.current,t=e.getContext("2d");this.resize(e,t);var n=t.canvas.width,i=t.canvas.height,a=Math.round(.5*(n-this.thickness));t.clearRect(0,0,n,i),t.fillStyle=this.colour,t.fillRect(a,0,this.thickness,i)}}]),n}(Y),ee=$,te=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).thickness=10,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.myRef.current,t=e.getContext("2d");this.resize(e,t);var n=t.canvas.width,i=t.canvas.height,a=Math.round(.5*(i-this.thickness));t.clearRect(0,0,n,i),t.fillStyle=this.colour,t.fillRect(0,a,n,this.thickness)}}]),n}(Y),ne=te,ie=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Timeline",children:Object(b.jsxs)("div",{style:{width:"90%",display:"flex",flexDirection:"row",margin:"auto"},children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"auto"},children:[Object(b.jsx)("div",{style:{width:"25px",height:"25px",margin:"auto"},children:Object(b.jsx)(Q,{})}),Object(b.jsx)("div",{style:{width:"25px",height:"100px",margin:"auto"},children:Object(b.jsx)(Z,{})}),Object(b.jsx)("div",{style:{width:"25px",height:"100px",margin:"auto"},children:Object(b.jsx)(ee,{})}),Object(b.jsx)("div",{style:{width:"25px",height:"100px",margin:"auto"},children:Object(b.jsx)(ne,{})})]}),Object(b.jsx)("div",{className:"Slot Project-Left",children:Object(b.jsx)(W,{})})]})})}}]),n}(a.a.Component),ae=ie,se=(n(22),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).id="",e.label="",e.image="",e.display="",e.link="",e.self=null,e.labels=null,e.onEnter=function(){if(e.labels)for(var t=0;t<e.labels.length;++t)e.labels[t].style.maxWidth=e.labels[t].scrollWidth+"px",e.labels[t].style.paddingRight="10px"},e.onExit=function(){if(e.labels)for(var t=0;t<e.labels.length;++t)e.labels[t].style.maxWidth=null,e.labels[t].style.paddingRight=0},e.getInfo=function(){return e.id="ContactInfo"+e.label,Object(b.jsxs)("a",{id:e.id,className:"Contact",href:e.link,target:"_blank",rel:"noopener noreferrer",onMouseOver:e.onEnter,onMouseLeave:e.onExit,children:[Object(b.jsx)("img",{src:e.image,alt:e.label}),Object(b.jsx)("span",{className:"Label",children:e.display})]})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.self=document.getElementById(this.id),this.self&&(this.labels=this.self.getElementsByClassName("Label"))}}]),n}(a.a.Component)),ce=se,re=n.p+"static/media/email.063c0ed7.svg",le=n.p+"static/media/github.43633357.svg",oe=n.p+"static/media/linkedin.b257e4f0.svg",he=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.label="Email",this.image=re,this.display=this.label,this.link="mailto:gabrielle@gtsc.dev",this.getInfo()}}]),n}(ce),ue=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.label="GitHub",this.image=le,this.display=this.label,this.link="https://github.com/XxGTSCxX",this.getInfo()}}]),n}(ce),de=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.label="LinkedIn",this.image=oe,this.display=this.label,this.link="https://www.linkedin.com/in/gabrielle-tan-suan-choo/",this.getInfo()}}]),n}(ce),je=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Contacts",children:[Object(b.jsx)(he,{}),Object(b.jsx)(ue,{}),Object(b.jsx)(de,{})]})}}]),n}(a.a.Component),be=je,me=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a,Object(b.jsxs)("div",{className:"Main",children:[Object(b.jsx)(p,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/profile",component:H}),Object(b.jsx)(d.a,{path:"/timeline",component:G}),Object(b.jsx)(d.a,{path:"/dev_logs",component:X}),Object(b.jsx)(d.a,{path:"/.test",component:ae})]}),Object(b.jsx)(be,{}),Object(b.jsx)(O,{}),Object(b.jsx)(M,{})]})}}]),n}(a.a.Component),pe=me,fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(pe,{})}),document.getElementById("root")),fe()}},[[43,1,2]]]);
//# sourceMappingURL=main.0a62d309.chunk.js.map