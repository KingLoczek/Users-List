(this["webpackJsonptypescript-app"]=this["webpackJsonptypescript-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(45)},20:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),l=(n(20),n(2)),u=n(13),i=n.n(u),s=c.a.createContext([]),m=function(e){var t=e.children,n=e.searchText,r=Object(a.useState)([]),o=Object(l.a)(r,2),u=o[0],m=o[1];Object(a.useEffect)((function(){i.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){m(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=Object(a.useMemo)((function(){return n.trim().length>0&&u.length>0?u.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):u}),[n,u]);return c.a.createElement(s.Provider,{value:h},t)},h=(n(38),function(){var e=Object(a.useContext)(s);return c.a.createElement("div",{className:"ListHead"},c.a.createElement("ol",{className:"list"},e.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("span",null,e.name),"@",e.username)}))))}),d=n(14),f=(n(42),function(e){var t=e.onChange;return c.a.createElement(d.DebounceInput,{onChange:function(e){return t(e.target.value)},debounceTimeout:500,className:"SearchInput",placeholder:"Search by user name..."})}),g=(n(43),function(){return c.a.createElement("div",{className:"SearchHead"},c.a.createElement("p",null,"Users List"))}),E=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(g,null)),c.a.createElement(m,{searchText:n},c.a.createElement(h,null),c.a.createElement(f,{onChange:r})))},p=c.a.createContext({}),v=function(e){var t=e.children,n=Object(a.useState)("light"),r=Object(l.a)(n,2),o=r[0],u=r[1],i="light"===o?"black":"#ddd",s="light"===o?"#eee":"#555";return document.body.style.color=i,document.body.style.background=s,c.a.createElement(p.Provider,{value:{theme:o,toggleTheme:function(){u("light"===o?"dark":"light")}}},t)},b=(n(44),function(){var e=Object(a.useContext)(p),t=e.theme,n=e.toggleTheme;return c.a.createElement("div",null,c.a.createElement("button",{className:"SwitchButton",onClick:n},"Switch to ","light"===t?"dark":"light"," mode"))}),w=function(){return c.a.createElement(v,null,c.a.createElement(E,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0059d6f1.chunk.js.map