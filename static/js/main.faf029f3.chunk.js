(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(5),r=t.n(i),n=t(2),l=["home","about","skills","portfolio","misc."],o=t(0);function d(e){return Object(o.jsx)("li",{className:"nav-item px-2",children:Object(o.jsx)("a",{className:"nav-link",href:e.nav,children:e.name})})}var j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarNav",children:Object(o.jsx)("ul",{className:"navbar-nav",children:l.map((function(e,c){return Object(o.jsx)(d,{nav:"#"+e,name:e},c)}))})})]})})})};var b=function(){var e=(new Date).getFullYear();return Object(o.jsxs)("footer",{className:"mt-3 mb-3",children:[Object(o.jsxs)("div",{className:"mb-2",children:["\xa9 ",e," copyright: danh le"]}),Object(o.jsx)("div",{style:{color:"#A11A1c"},children:Object(o.jsx)("i",{className:"fab fa-lg fa-react"})})]})},m=t(6);var h=function(e,c){return Object(o.jsxs)("div",{className:"corner skills py-2",children:[Object(o.jsx)("h5",{className:"ps-3 pb-3 pt-2",children:c}),Object.keys(e).map((function(c,t){return Object(o.jsxs)("div",{className:"ps-3",children:[Object(o.jsx)(m.a,{now:e[c]},t),Object(o.jsx)("p",{children:c})]})}))]})};var p=function(e){var c=a.a.useState(!1),t=Object(n.a)(c,2),s=t[0],i=t[1],r=a.a.useRef();return a.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return i(e.isIntersecting)}))})).observe(r.current)}),[]),Object(o.jsx)("div",{className:"fade-in-section ".concat(s?"is-visible":""),ref:r,children:e.children})};var u=function(e){return Object(o.jsx)("a",{className:"btn mx-1",href:e.link,role:"button",style:{color:"#A11A1c"},children:Object(o.jsx)("i",{className:"fab fa-lg "+e.icon})})};var x=function(e){return Object(o.jsxs)("a",{href:e.link,className:"foldtr col-lg-1 col-sm-2 mx-3 my-3 "+e.issuer,children:[Object(o.jsx)("i",{className:"fas fa-2x py-3 "+e.icon,style:{color:e.color}}),Object(o.jsx)("p",{className:"py-1",children:e.name}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"Verified"})})]})},O={"React.js":70,"Node.js":65,OpenSHMEM:60},g={C:50,Java:75,Go:60,Python:70,"HTML/CSS/JavaScript":75},v={Facebook:"fa-facebook",GitHub:"fa-github",LinkedIn:"fa-linkedin"},f={Facebook:"https://www.facebook.com/ledangdanh/",GitHub:"https://github.com/ledd-23",LinkedIn:"https://www.linkedin.com/in/ledd-23/"},w={Raft:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Raft_Consensus_Algorithm_Mascot_on_transparent_background.svg/1200px-Raft_Consensus_Algorithm_Mascot_on_transparent_background.svg.png",MapReduce:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/AWS_Simple_Icons_Compute_Amazon_Elastic_MapReduce.svg/1024px-AWS_Simple_Icons_Compute_Amazon_Elastic_MapReduce.svg.png",IPC:"https://cdn-icons-png.flaticon.com/512/2103/2103658.png","Sentiment Analysis":"https://cdn1.iconfinder.com/data/icons/business-startup-51/64/812-512.png",Autocorrector:"https://cdn3.iconfinder.com/data/icons/miscellaneous-32-solid/128/autocorrect_wrong_right_monitor_correct_adjusted_revise_change-512.png"},y={Raft:"https://replit.com/@ledd-23/Raft?lite=true&embed=true",MapReduce:"https://replit.com/@ledd-23/mapreduce?lite=true&embed=true",IPC:"https://replit.com/@ledd-23/IPC?lite=true&embed=true","Sentiment Analysis":"https://replit.com/@ledd-23/sentiment-analysis?lite=true&embed=true",Autocorrector:"https://replit.com/@ledd-23/autocorrector?lite=true&embed=true"},N={"Kafka Cluster":"https://www.udemy.com/certificate/UC-f4991766-a638-40c5-a0d4-ea8e1d0e32a6/","Web Developer":"https://www.udemy.com/certificate/UC-6d5b0064-5ee8-4a7d-8fd3-5c057437b8ce/"},k={"Java (Basic)":"https://www.hackerrank.com/certificates/1c0da94d4f72","Python (Basic)":"https://www.hackerrank.com/certificates/39d6e4419cab","Go (Basic)":"https://www.hackerrank.com/certificates/1a5f05cee2ca"};var _=function(){var e=Object(s.useState)("https://replit.com/@ledd-23/Raft?lite=true&embed=true"),c=Object(n.a)(e,2),t=c[0],a=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{})," ",Object(o.jsx)("section",{id:"title",className:"title-section",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsxs)(p,{children:[Object(o.jsx)("h5",{children:"my name is danh le,"}),Object(o.jsxs)("h2",{children:["im a <computer science> major ",Object(o.jsx)("br",{}),"at rhodes college"]}),Object(o.jsx)("p",{children:"nice to meet you"}),Object(o.jsx)("div",{children:Object.keys(f).map((function(e,c){return Object(o.jsx)(u,{icon:v[e],name:e,link:f[e]},c)}))})]})})," ",Object(o.jsx)("div",{className:"col-lg-6 ps-5",children:Object(o.jsx)(p,{children:Object(o.jsx)("a",{href:"https://tudoujie.tumblr.com/post/173995119408/more-rooms-1st-3rd-are-yuzus-rooms",children:Object(o.jsx)("img",{alt:"robin-yao",className:"d-none d-lg-block corner robin-yao",src:"https://64.media.tumblr.com/02909edb8f87a02cdabc64112cb4663a/tumblr_p8vodwGvb61uzdx4lo1_1280.png"})})})})," "]})})}),Object(o.jsx)("section",{className:"about-section corner",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("div",{className:"row mb-5",id:"about",children:[Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:Object(o.jsx)("a",{href:"https://en.wikipedia.org/wiki/%C4%90%C3%B4ng_H%E1%BB%93_painting",children:Object(o.jsx)("img",{alt:"dong-ho",className:"corner dong-ho",src:"https://www.vietnam-culture.com/wp-content/uploads/2014/02/Dong-Ho-Painting.jpg"})})})})," ",Object(o.jsx)("div",{className:"righty col-lg-6 px-5",children:Object(o.jsxs)(p,{children:[Object(o.jsx)("h3",{children:"about me \ud83e\uddcd"}),Object(o.jsx)("p",{children:"i was born in h\xe0 n\u1ed9i, vi\u1ec7t nam. i play the piano \ud83c\udfb9. my favorite composer is chopin. i often play video games \ud83c\udfae and occasionally basketball \ud83c\udfc0 too."}),Object(o.jsx)("p",{children:"i fell in love with computer science in college. my passion is distributed and parallel systems, but im learning ui/ux desgin and drawing too. i think they are very expressive."})]})})," "]}),Object(o.jsxs)("div",{id:"skills",className:"row",children:[Object(o.jsx)(p,{children:Object(o.jsx)("h3",{children:"skills \u2699\ufe0f"})}),Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:h(g,"programming languages \u2328\ufe0f")})})," ",Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:h(O,"libraries \ud83d\udcda")})})," "]})," ",Object(o.jsx)(p,{children:Object(o.jsxs)("div",{id:"certificates",className:"row pt-2",children:[Object.keys(k).map((function(e,c){return Object(o.jsx)(x,{link:k[e],color:"white",icon:"fa-award",issuer:"hackerrank",name:e},c)})),Object.keys(N).map((function(e,c){return Object(o.jsx)(x,{link:N[e],color:"purple",icon:"fa-chevron-up",issuer:"udemy",name:e},c)}))]})}),Object(o.jsxs)("div",{id:"portfolio",className:"row pt-4",children:[Object(o.jsx)(p,{children:Object(o.jsx)("h3",{className:"righty",children:"experience \ud83e\uddd7\u200d\u2642\ufe0f"})}),Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:Object(o.jsxs)("div",{className:"row",children:[Object.keys(y).map((function(e,c){return Object(o.jsx)("div",{className:"col-4 py-3",style:{textAlign:"center"},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"button",class:"btn",onClick:function(){a(y[e])},children:Object(o.jsx)("img",{alt:e,width:"100",height:"100",src:w[e]})})," "]})})})),Object(o.jsx)("div",{className:"col-4 py-3",style:{textAlign:"center"},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"https://youtu.be/dQw4w9WgXcQ",type:"button",class:"btn",children:Object(o.jsx)("img",{alt:"mystery",width:"90",height:"90",src:"https://cdn0.iconfinder.com/data/icons/video-games-ultra-color/60/001_-_Mystery_Box-512.png"})})," "]})})]})})})," ",Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:Object(o.jsx)("iframe",{id:"replit",title:"replit display",className:"corner",frameBorder:"0",width:"100%",height:"500px",src:t})})})," "]})," ",Object(o.jsxs)("div",{id:"misc.",className:"row pt-5",children:[Object(o.jsx)(p,{children:Object(o.jsx)("h3",{children:"misc. \ud83c\udfb5"})}),Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)(p,{children:Object(o.jsxs)("div",{className:"card mb-3 border-downer-radius border-upper-radius",children:[Object(o.jsx)("iframe",{className:"border-upper-radius",height:"315",src:"https://www.youtube.com/embed/nXGHIbpvnRo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"arabesque"}),Object(o.jsx)("p",{className:"card-text",children:"please pardon the quality. this was recorded during the pandemic for my piano lesson."})]})]})})}),Object(o.jsx)("div",{className:"col-lg-6"})]})]})})," ",Object(o.jsx)(b,{})]})};r.a.render(Object(o.jsx)(_,{}),document.getElementById("home"))}},[[12,1,2]]]);
//# sourceMappingURL=main.faf029f3.chunk.js.map