(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(9),a=n(214),o=(n(207),n(209));function c(){return Object(r.b)(a.a,null,Object(r.b)("div",null,"Contact ->"," ",Object(r.b)(o.a,{to:"mailto:nicosommi@gmail.com"},"nicosommi@gmail.com")),Object(r.b)("div",null,"Professional Profile ->"," ",Object(r.b)(o.a,{to:"https://www.linkedin.com/in/nicosommi"},"https://www.linkedin.com/in/nicosommi")),Object(r.b)("div",null,"Please, don't ask me for my CV. It makes me sad."))}},207:function(t,e,n){"use strict";var r=n(210);n.d(e,"b",function(){return r.a});var a=n(0),o=n.n(a);n.d(e,"a",function(){return o.a});var c=n(9);n.d(e,"c",function(){return c.c})},208:function(t,e,n){var r;t.exports=(r=n(213))&&r.default||r},209:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(9),a=n(73),o=n.n(a),c=n(217),i=n(207);function b(t){var e=t.href,n=t.to,a=t.children,o=t.newTab,c=n||e||"/";return"/"===c.substr(0,1)&&!0!==o?Object(r.b)(s,{activeStyle:{color:"red"},to:c},a):Object(r.b)(u,{href:c,target:"_blank"},a)}var l={textDecoration:"none",color:"black",":hover":{color:"red",outline:"1px solid gray",outlineOffset:2},":focus":{outline:"1px dashed gray",outlineOffset:2},":visited":{color:"#666",outlineOffset:2}},u=Object(i.b)(c.OutboundLink)(l),s=Object(i.b)(o.a)(l)},211:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(9),a=n(207);function o(t){var e=t.char,n=t.label;return Object(r.b)(c,{"aria-label":n,role:"img"},e)}var c=Object(a.b)("span")({})},212:function(t){t.exports={data:{site:{siteMetadata:{title:"nicosommi"}}}}},213:function(t,e,n){"use strict";n.r(e);n(21);var r=n(0),a=n.n(r),o=n(100);e.default=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},214:function(t,e,n){"use strict";var r=n(9),a=n(212),o=n(207),c=n(216),i=n.n(c),b=n(0),l=n.n(b),u=(n(73),n(208),n(11).default.enqueue,l.a.createContext({}));function s(t){var e=t.staticQueryData,n=t.data,a=t.query,o=t.render,c=n?n.data:e[a]&&e[a].data;return Object(r.b)(l.a.Fragment,null,c&&o(c),!c&&Object(r.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,n=t.query,a=t.render,o=t.children;return Object(r.b)(u.Consumer,null,function(t){return Object(r.b)(s,{data:e,query:n,render:a||o,staticQueryData:t})})};var j=n(209);function O(t){var e=t.children,n=o.a.Children.count(e);if(n<=1)return e;var r=Math.floor(Math.random()*n);return o.a.Children.toArray(e)[r]}var p=Object(o.b)("div")({display:"flex",justifyContent:"space-around"}),f=Object(o.b)("h3")({"> a":{paddingTop:5}}),m=Object(o.b)("h6")({color:"gray",margin:0}),v=function(t){var e=t.siteTitle;return Object(r.b)("div",{style:{marginBottom:"1.45rem"}},Object(r.b)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(r.b)("h1",{style:{margin:0}},Object(r.b)(j.a,{to:"/"},e)),Object(r.b)(m,null,Object(r.b)(O,null,Object(r.b)("span",null,"software engineer"),Object(r.b)("span",null,"devops"),Object(r.b)("span",null,"javascript developer"),Object(r.b)("span",null,"open source developer"),Object(r.b)("span",null,"developer"))),Object(r.b)(p,null,Object(r.b)(f,null,Object(r.b)(j.a,{to:"/posts"},"posts")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/slides"},"slides")),Object(r.b)(f,null,Object(r.b)(j.a,{to:"/about"},"about")))))},h=(n(218),n(211));var y=function(t){var e,n;function a(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state={hasError:!1},e}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidCatch=function(t,e){t&&this.setState({hasError:!0,info:e,error:t})},o.render=function(){var t=this.state,e=t.info,n=t.error;return this.state.hasError?Object(r.b)(g,null,Object(r.b)("h1",null,"Oops, an error ocurred"),Object(r.b)(w,null,n.message),Object(r.b)(k,null,e.componentStack)):this.props.children},a}(o.a.PureComponent),g=Object(o.b)("div")({margin:"10%"}),w=Object(o.b)("h2")({}),k=Object(o.b)("div")({whiteSpace:"pre-line"}),C=Object(o.b)("div")({margin:"5% 20%"}),x=Object(o.b)("div")({display:"flex",justifyContent:"flex-end",fontSize:"0.75em",lineHeight:"2em"});e.a=function(t){var e=t.children;return Object(r.b)(y,null,Object(r.b)(d,{query:"2994927498",render:function(t){return Object(r.b)(o.a.Fragment,null,Object(r.b)(i.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"nicosommi blog"},{name:"keywords",content:["blog","developer","javascript","typescript","docker"].join(", ")}]},Object(r.b)("html",{lang:"en"})),Object(r.b)(v,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(C,null,e),Object(r.b)(x,null,Object(r.b)("span",null,"Copyright by nicosommi "),Object(r.b)(O,null,Object(r.b)(h.a,{char:"🐱",label:"cat"}),Object(r.b)(h.a,{char:"🤓",label:"nerd face"}),Object(r.b)(h.a,{char:"🦀",label:"crab"}),Object(r.b)(h.a,{char:"🐓",label:"rooster"}),Object(r.b)(h.a,{char:"🥑",label:"avocado"}),Object(r.b)(h.a,{char:"🐒",label:"monito"}))))},data:a}))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-14df19517f4c25546396.js.map