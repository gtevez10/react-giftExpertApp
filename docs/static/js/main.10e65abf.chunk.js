(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:[Object(r.jsx)("h2",{children:"Add Category "}),Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){return[j(e.target.value)]}})]})})},o=n(10),d=n(6),b=n.n(d),l=n(8),O=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=" https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=SaGgLbKvq7zTXOkrWbLiaziKSr8TA0cF "),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.url,n=e.title;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:t,alt:n}),Object(r.jsx)("p",{children:n})]})},h=function(e){var t=e.indexCategory,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){O(e).then((function(e){a({data:e,loading:!1})}))}),[e]),r}(t),a=n.loading,i=n.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),a&&Object(r.jsx)("p",{children:" Loading... "}),Object(r.jsx)("div",{className:"divCard",children:Object(r.jsx)("ol",{children:i.map((function(e){return Object(r.jsx)(p,Object(o.a)({},e),e.id)}))})})]})},x=function(){var e=Object(c.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:" GifExpertApp"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(e){return Object(r.jsx)(h,{indexCategory:e},e)}))}),Object(r.jsx)("button",{children:" Agregar "})]})};n(17);i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.10e65abf.chunk.js.map