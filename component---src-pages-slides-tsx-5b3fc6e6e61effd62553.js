(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var r=n(9),a=n(214),o=n(220);n(207);t.default=function(e){var t=e.data;return Object(r.b)(a.a,null,Object(r.b)(o.a,{data:t}))};var c="1004240435"},207:function(e,t,n){"use strict";var r=n(210);n.d(t,"b",function(){return r.a});var a=n(0),o=n.n(a);n.d(t,"a",function(){return o.a});var c=n(9);n.d(t,"c",function(){return c.c})},208:function(e,t,n){var r;e.exports=(r=n(213))&&r.default||r},209:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(9),a=n(73),o=n.n(a),c=n(217),i=n(207);function b(e){var t=e.href,n=e.to,a=e.children,o=e.newTab,c=n||t||"/";return"/"===c.substr(0,1)&&!0!==o?Object(r.b)(s,{activeStyle:{color:"red"},to:c},a):Object(r.b)(u,{href:c,target:"_blank"},a)}var l={textDecoration:"none",color:"black",":hover":{color:"red",outline:"1px solid gray",outlineOffset:2},":focus":{outline:"1px dashed gray",outlineOffset:2},":visited":{color:"#666",outlineOffset:2}},u=Object(i.b)(c.OutboundLink)(l),s=Object(i.b)(o.a)(l)},211:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(9),a=n(207);function o(e){var t=e.char,n=e.label;return Object(r.b)(c,{"aria-label":n,role:"img"},t)}var c=Object(a.b)("span")({})},212:function(e){e.exports={data:{site:{siteMetadata:{title:"nicosommi"}}}}},213:function(e,t,n){"use strict";n.r(t);n(21);var r=n(0),a=n.n(r),o=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var r=n(9),a=n(212),o=n(207),c=n(216),i=n.n(c),b=n(0),l=n.n(b),u=(n(73),n(208),n(11).default.enqueue,l.a.createContext({}));function s(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,c=n?n.data:t[a]&&t[a].data;return Object(r.b)(l.a.Fragment,null,c&&o(c),!c&&Object(r.b)("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return Object(r.b)(u.Consumer,null,function(e){return Object(r.b)(s,{data:t,query:n,render:a||o,staticQueryData:e})})};var j=n(209);function O(e){var t=e.children,n=o.a.Children.count(t);if(n<=1)return t;var r=Math.floor(Math.random()*n);return o.a.Children.toArray(t)[r]}var p=Object(o.b)("div")({display:"flex",justifyContent:"space-around"}),f=Object(o.b)("h3")({"> a":{paddingTop:5}}),m=Object(o.b)("h6")({color:"gray",margin:0}),v=function(e){var t=e.siteTitle;return Object(r.b)("div",{style:{marginBottom:"1.45rem"}},Object(r.b)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(r.b)("h1",{style:{margin:0}},Object(r.b)(j.a,{to:"/"},t)),Object(r.b)(m,null,Object(r.b)(O,null,Object(r.b)("span",null,"systems engineer"),Object(r.b)("span",null,"software engineer"),Object(r.b)("span",null,"frontend developer"),Object(r.b)("span",null,"backend developer"),Object(r.b)("span",null,"devops"),Object(r.b)("span",null,"software architect"),Object(r.b)("span",null,"scrum master"),Object(r.b)("span",null,"team member"),Object(r.b)("span",null,"developer"),Object(r.b)("span",null,"someone"),Object(r.b)("span",null,"father of two"),Object(r.b)("span",null,"husband"),Object(r.b)("span",null,"partner"),Object(r.b)("span",null,"son"))),Object(r.b)(p,null,Object(r.b)(f,null,Object(r.b)(j.a,{to:"/posts"},"posts")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/slides"},"slides")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/about"},"about")))))},h=(n(218),n(211));var g=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={hasError:!1},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidCatch=function(e,t){e&&this.setState({hasError:!0,info:t,error:e})},o.render=function(){var e=this.state,t=e.info,n=e.error;return this.state.hasError?Object(r.b)(y,null,Object(r.b)("h1",null,"Oops, an error ocurred"),Object(r.b)(w,null,n.message),Object(r.b)(x,null,t.componentStack)):this.props.children},a}(o.a.PureComponent),y=Object(o.b)("div")({margin:"10%"}),w=Object(o.b)("h2")({}),x=Object(o.b)("div")({whiteSpace:"pre-line"}),k=Object(o.b)("div")({margin:"5% 20%"}),E=Object(o.b)("div")({display:"flex",justifyContent:"flex-end",fontSize:"0.75em",lineHeight:"2em"});t.a=function(e){var t=e.children;return Object(r.b)(g,null,Object(r.b)(d,{query:"2994927498",render:function(e){return Object(r.b)(o.a.Fragment,null,Object(r.b)(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"nicosommi blog"},{name:"keywords",content:["blog","developer","javascript","typescript","docker"].join(", ")}]},Object(r.b)("html",{lang:"en"})),Object(r.b)(v,{siteTitle:e.site.siteMetadata.title}),Object(r.b)(k,null,t),Object(r.b)(E,null,Object(r.b)(O,null,Object(r.b)("span",null,"Copyright by, guess who? Yeah you guessed it, nicosommi... so don't copy, ",Object(r.b)(h.a,{char:"🐱",label:"cat"})),Object(r.b)("span",null,"Copyright nicosommi. ",Object(r.b)(h.a,{char:"🤓",label:"nerd face"})),Object(r.b)("span",null,"nicosommi by copyright. ",Object(r.b)(h.a,{char:"🦀",label:"crab"})),Object(r.b)("span",null,"kikiriki ",Object(r.b)(h.a,{char:"🐓",label:"rooster"})))))},data:a}))}},215:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,a=n(9),o=n(207);function c(e){var t=e.src;return Object(a.b)(i,null,Object(a.b)("iframe",{width:"560",height:"315",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}var i=Object(o.b)("div")(((r={position:"relative",paddingBottom:"56.25%",paddingTop:20,height:0,overflow:"hidden",marginLeft:-3,marginRight:-4})["iframe, object, embed"]={position:"absolute",top:0,left:0,width:"100%",height:"100%"},r))},220:function(e,t,n){"use strict";var r=n(9),a=n(207),o=n(209),c=n(215);function i(e){var t=e.index,n=e.frontmatter,a=e.timeToRead;return Object(r.b)(l,{index:(t||0)%4},n.video&&Object(r.b)(c.a,{src:n.video}),Object(r.b)(o.a,{to:n.url,newTab:"remark-slide"===n.type},Object(r.b)(u,null,n.title)),Object(r.b)(s,null,"(",a," min read) ",Object(r.b)("br",null),n.author," - ",n.date,Object(r.b)("br",null),n.version&&"v"+n.version))}var b=["inset 10em -3em #EEE","inset -10em -3em #EEE","inset 10em 3em #EEE","inset -10em 3em #EEE"],l=a.b.div({padding:5},function(e){var t=e.index;return{display:"flex",flexDirection:"column",boxShadow:b[t],padding:5}}),u=Object(a.b)("h1")({}),s=Object(a.b)("span")({textAlign:"left",color:"gray"});function d(e){var t=e.data;return Object(r.b)(j,null,t.allMarkdownRemark.edges.map(function(e,n){return Object(r.b)(a.a.Fragment,{key:e.node.frontmatter.url},Object(r.b)(i,{index:n,timeToRead:e.node.timeToRead,frontmatter:e.node.frontmatter}),n<t.allMarkdownRemark.edges.length&&Object(r.b)(O,null))}))}n.d(t,"a",function(){return d});var j=Object(a.b)("div")({display:"flex",flexDirection:"column",justifyContent:"space-around"}),O=Object(a.b)("div")({flex:"0 0 20px"})}}]);
//# sourceMappingURL=component---src-pages-slides-tsx-5b3fc6e6e61effd62553.js.map