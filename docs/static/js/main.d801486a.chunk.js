(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=n(2),u=n(10),o=n(0),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}})})},d=n(7),l=n(6),p=n.n(l),b=n(9),f=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a,c,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=mzmGzJkSY3gD59gihnKOVYzcEMHSpBIs"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),r&&Object(o.jsx)("p",{className:"card animate__animated animate__flash",children:"Cargando..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.createElement)(O,Object(d.a)(Object(d.a)({},t),{},{key:t.id}))}))})]})},m=function(){var t=Object(a.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"GiftExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),n.map((function(t){return Object(o.jsx)(h,{category:t},t)}))]})};n(17);i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d801486a.chunk.js.map