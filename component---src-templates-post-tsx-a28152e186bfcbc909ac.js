(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(t,e,n){"use strict";n.r(e);var r=n(9),a=n(215),o=n(241),c=n.n(o),i=n(211),b=n(216),l=n(208),u=new c.a({createElement:l.a.createElement,components:{a:i.a,video:b.a}}).Compiler;function s(t){var e=t.frontmatter,n=t.htmlAst,a=t.timeToRead;return Object(r.b)(l.a.Fragment,null,Object(r.b)("h1",null,e.title),Object(r.b)("div",null,e.date),Object(r.b)("div",null,a," min read"),u(n),Object(r.b)("div",null,e.author),e.version&&Object(r.b)("div",null,"v",e.version))}function d(t){var e=t.data.markdownRemark,n=e.frontmatter,o=e.htmlAst,c=e.timeToRead;return Object(r.b)(a.a,null,Object(r.b)(s,{frontmatter:n,htmlAst:o,timeToRead:c}))}n.d(e,"default",function(){return d}),n.d(e,"pageQuery",function(){return j});var j="930778187"},208:function(t,e,n){"use strict";var r=n(209);n.d(e,"b",function(){return r.a});var a=n(0),o=n.n(a);n.d(e,"a",function(){return o.a});var c=n(9);n.d(e,"c",function(){return c.c})},210:function(t,e,n){var r;t.exports=(r=n(214))&&r.default||r},211:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(9),a=n(73),o=n.n(a),c=n(218),i=n(208);function b(t){var e=t.href,n=t.to,a=t.children,o=t.newTab,c=n||e||"/";return"/"===c.substr(0,1)&&!0!==o?Object(r.b)(s,{activeStyle:{color:"red"},to:c},a):Object(r.b)(u,{href:c,target:"_blank"},a)}var l={textDecoration:"none",color:"black",":hover":{color:"purple",outline:"1px solid gray",outlineOffset:2},":focus":{outline:"1px dashed gray",outlineOffset:2}},u=Object(i.b)(c.OutboundLink)(l),s=Object(i.b)(o.a)(l)},212:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(9),a=n(208);function o(t){var e=t.char,n=t.label;return Object(r.b)(c,{"aria-label":n,role:"img"},e)}var c=Object(a.b)("span")({})},213:function(t){t.exports={data:{site:{siteMetadata:{title:"nicosommi"}}}}},214:function(t,e,n){"use strict";n.r(e);n(21);var r=n(0),a=n.n(r),o=n(100);e.default=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},215:function(t,e,n){"use strict";var r=n(9),a=n(213),o=n(208),c=n(217),i=n.n(c),b=n(0),l=n.n(b),u=(n(73),n(210),n(11).default.enqueue,l.a.createContext({}));function s(t){var e=t.staticQueryData,n=t.data,a=t.query,o=t.render,c=n?n.data:e[a]&&e[a].data;return Object(r.b)(l.a.Fragment,null,c&&o(c),!c&&Object(r.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,n=t.query,a=t.render,o=t.children;return Object(r.b)(u.Consumer,null,function(t){return Object(r.b)(s,{data:e,query:n,render:a||o,staticQueryData:t})})};var j=n(211);function O(t){var e=t.children,n=o.a.Children.count(e);if(n<=1)return e;var r=Math.floor(Math.random()*n);return o.a.Children.toArray(e)[r]}var p=Object(o.b)("div")({display:"flex",justifyContent:"space-around"}),f=Object(o.b)("h3")({}),m=Object(o.b)("h6")({color:"gray",margin:0}),h=function(t){var e=t.siteTitle;return Object(r.b)("div",{style:{marginBottom:"1.45rem"}},Object(r.b)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(r.b)("h1",{style:{margin:0}},Object(r.b)(j.a,{to:"/"},e)),Object(r.b)(m,null,Object(r.b)(O,null,Object(r.b)("span",null,"systems engineer"),Object(r.b)("span",null,"developer"))),Object(r.b)(p,null,Object(r.b)(f,null,Object(r.b)(j.a,{to:"/posts"},"posts")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/slides"},"slides")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/about"},"about")))))},v=(n(219),n(212));var g=function(t){var e,n;function a(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state={hasError:!1},e}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidCatch=function(t,e){t&&this.setState({hasError:!0,info:e,error:t})},o.render=function(){var t=this.state,e=t.info,n=t.error;return this.state.hasError?Object(r.b)(y,null,Object(r.b)("h1",null,"Oops, an error ocurred"),Object(r.b)(w,null,n.message),Object(r.b)(k,null,e.componentStack)):this.props.children},a}(o.a.PureComponent),y=Object(o.b)("div")({margin:"10%"}),w=Object(o.b)("h2")({}),k=Object(o.b)("div")({whiteSpace:"pre-line"}),C=Object(o.b)("div")({margin:"5% 20%"}),x=Object(o.b)("div")({display:"flex",justifyContent:"flex-end",fontSize:"0.75em",lineHeight:"2em"});e.a=function(t){var e=t.children;return Object(r.b)(g,null,Object(r.b)(d,{query:"2994927498",render:function(t){return Object(r.b)(o.a.Fragment,null,Object(r.b)(i.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"nicosommi blog"},{name:"keywords",content:["blog","developer","javascript","typescript"].join(", ")}]},Object(r.b)("html",{lang:"en"})),Object(r.b)(h,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(C,null,e),Object(r.b)(x,null,Object(r.b)(O,null,Object(r.b)("span",null,"Copyright by, guess who? Yeah you guessed it, nicosommi... so don't copy, ",Object(r.b)(v.a,{char:"🐱",label:"cat"})),Object(r.b)("span",null,"Copyright nicosommi. ",Object(r.b)(v.a,{char:"🤓",label:"nerd face"})),Object(r.b)("span",null,"nicosommi by copyright. ",Object(r.b)(v.a,{char:"🦀",label:"crab"})),Object(r.b)("span",null,"kikiriki ",Object(r.b)(v.a,{char:"🐓",label:"rooster"})))))},data:a}))}},216:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r,a=n(9),o=n(208);function c(t){var e=t.src;return Object(a.b)(i,null,Object(a.b)("iframe",{width:"560",height:"315",src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}var i=Object(o.b)("div")(((r={position:"relative",paddingBottom:"56.25%",paddingTop:20,height:0,overflow:"hidden",marginLeft:-3,marginRight:-4})["iframe, object, embed"]={position:"absolute",top:0,left:0,width:"100%",height:"100%"},r))}}]);
//# sourceMappingURL=component---src-templates-post-tsx-a28152e186bfcbc909ac.js.map