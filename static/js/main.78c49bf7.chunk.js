(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){e.exports=a(300)},196:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),s=a.n(r),i=(a(196),a(21)),l=a(15),h=a(16),c=a(18),d=a(17),u=a(19),m=a(22),p=a(7),w=a(45),b=a.n(w),f=a(47),g=a.n(f),y=a(48),v=a.n(y),k=a(90),E=a.n(k),O=a(33),j=a(20),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={mobileOpen:!1,appBar:{backgroundColor:"rgb(0,0,0,0)",color:"white"},links:{color:"white"}},a.toolbarMostChangeAspect=a.toolbarMostChangeAspect.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.behavior&&window.addEventListener("scroll",this.toolbarMostChangeAspect)}},{key:"toolbarMostChangeAspect",value:function(){var e=this.props,t=(e.classes,e.color,e.behavior.changeColorOnScroll);window.pageYOffset>t.height?this.setState({appBar:{backgroundColor:"white",color:"black",transition:"color 300ms linear"},link:{color:"black",transition:"color 300ms linear"}}):this.setState({appBar:{backgroundColor:"rgb(0,0,0,0)",color:"white",transition:"color 300ms linear"},link:{color:"white",transition:"color 300ms linear"}})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root,id:"AppToolBar"},o.a.createElement(b.a,{position:"fixed",style:Object(i.a)({},this.state.appBar)},o.a.createElement(g.a,null,o.a.createElement(v.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(E.a,null)),o.a.createElement(j.b,{className:e.link,to:""},o.a.createElement(O.a,{className:e.button,style:Object(i.a)({},this.state.link)},"Home")),o.a.createElement(j.b,{className:e.link,to:"/skills"},o.a.createElement(O.a,{className:e.button,style:Object(i.a)({},this.state.link)},"Skills")),o.a.createElement(j.b,{className:e.link,to:"/works"},o.a.createElement(O.a,{className:e.button,style:Object(i.a)({},this.state.link)},"Works")),o.a.createElement(j.b,{className:e.link,to:"/research"},o.a.createElement(O.a,{className:e.button,style:Object(i.a)({},this.state.link)},"Research")),o.a.createElement(j.b,{className:e.link,to:"/contact"},o.a.createElement(O.a,{className:e.button,style:Object(i.a)({},this.state.link)},"Contact")))))}}]),t}(o.a.Component),N=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},appBar:{backgroundColor:"rgb(0,0,0,0)"},menuButton:{marginLeft:-12,marginRight:20,height:"70px",width:"100px",borderRadius:0},button:{color:"white",width:"100%",height:"100%",borderRadius:0},link:{height:"70px",width:"200px",color:"white",margin:0,textDecoration:"none"}})(T);a(289);function x(){return o.a.createElement("div",{className:"App-footer"})}var B=a(28),C=a(49),S=a.n(C),A=(a(290),a(88),a(291),a(37)),I=a(38),q=a.n(I),M=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(A.CSSTransition,{in:!0,appear:!0,timeout:800,classNames:"fade"},o.a.createElement("div",{className:"Home-page"},o.a.createElement("img",{src:S.a,className:"profile-image"}),o.a.createElement("br",null),o.a.createElement(q.a,{variant:"headline",gutterBottom:!0},"MSc. Roides J. Cruz Lara"),o.a.createElement(q.a,null,"Artificial Intelligence researcher and a full stack developer which is set to the task of solving complex problems in both worlds: researching and software industry.",o.a.createElement("br",null),o.a.createElement("br",null),"Bioinspired Algorithms and Neural Networks for solving real-world optimization problems and complex classification tasks have been passion since my finals years at University. During my Master  Degree years at ",o.a.createElement("a",{href:"http://www.lania.mx/"},"LANIA"),", I worked with ",o.a.createElement("a",{href:"https://www.uv.mx/personal/emezura/"},"Ph.D. Efr\xe9n Mezura")," and ",o.a.createElement("a",{href:"http://portilla-flores.com.mx/"},"Ph.D. Edgar Portilla")," on a thesis titled: ",o.a.createElement("a",{href:"https://www.uv.mx/personal/emezura/files/2019/01/tesis-Roides.pdf"},o.a.createElement("q",null,"Hybridization of mathematical programming algorithms with evolutionary algorithms to solve mechatronic design optimization problems")),". In this work, we proposed a new hybridization strategy  for designing more efficient hybrid algorithms. With the resulting algorithm, we successfully solved complex real optimization problems by combining a parallel Nelder-Mead search and  Differential Evolution.",o.a.createElement("br",null),o.a.createElement("br",null),"As a software engineer and developer, I have been involved in projects since my second year in college in the UCI. The ",o.a.createElement("a",{href:"http://www.cicpc.gob.ve/"},"CICPC")," project was my first experience in real-world software development and teamwork.  My thesis work was the design and development of a web system for the Assessment and Management of Information Security Risk based on MAGERIT methodology and ISO 27005 standard. From 2015 to the present, I have worked for excellent software companies around the world such as ",o.a.createElement("a",{href:"https://www.isofact.com/"},"iSOFACT (Spain)"),", ",o.a.createElement("a",{href:"http://evomatik.com/"},"Evomatik (Mexico)"),", and ",o.a.createElement("a",{href:"https://www.unosquare.com/"},"Unosquare (USA)")," as a frontend developer.")))}}]),t}(n.Component),z=(a(298),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(A.CSSTransition,{in:!0,appear:!0,timeout:800,classNames:"fade"},o.a.createElement("div",{className:"Skills-page"},o.a.createElement("img",{src:S.a,className:"profile-image"}),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'),o.a.createElement("p",null,'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."')))}}]),t}(n.Component)),D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(B.a,{path:"/",exact:!0,component:M}),o.a.createElement(B.a,{path:"/skills",component:z}),o.a.createElement(B.a,{path:"/works",component:M}),o.a.createElement(B.a,{path:"/research",component:M}),o.a.createElement(B.a,{path:"/contact",component:M}))}}]),t}(n.Component),R=(a(299),a(63)),L=a.n(R),P=a(93),U=a.n(P),W=a(64),Y=a.n(W),G=a(92),H=a.n(G),J=Object(p.createMuiTheme)({palette:{primary:U.a,secondary:L.a,error:Y.a,contrastThreshold:3,tonalOffset:.2},overrides:{}}),F=(H.a,function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(d.a)(t).call(this,e));var n=window.pageYOffset/3;return a.state={transform:"translate3d(0, "+n+"px, 0)",isSidenavOpened:!0},a.setBannerTransform=a.setBannerTransform.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=window.pageYOffset/3;this.setState({transform:"translate3d(0, "+e+"px, 0)"}),window.addEventListener("scroll",this.setBannerTransform)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.setBannerTransform)}},{key:"setBannerTransform",value:function(){var e=window.pageYOffset/3;this.setState({transform:"translate3d(0, "+e+"px, 0)"})}},{key:"setBannerTransform",value:function(){var e=window.pageYOffset/3;this.setState({transform:"translate3d(0,"+e+"px,0)"})}},{key:"render",value:function(){return o.a.createElement(p.MuiThemeProvider,{theme:J},o.a.createElement("div",{className:"App"},o.a.createElement(N,{behavior:{changeColorOnScroll:{height:160,color:"white"}}}),o.a.createElement("div",{className:"App-banner",style:Object(i.a)({},this.state)}),o.a.createElement("div",{className:"App-container"},o.a.createElement("div",{className:"App-card"},o.a.createElement(D,null)))),o.a.createElement(x,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(j.a,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a.p+"static/media/profile.0e00cabc.jpg"},88:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/background_dark.bf339332.jpg"}},[[191,1,2]]]);
//# sourceMappingURL=main.78c49bf7.chunk.js.map