(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Juyh:function(t,n,r){"use strict";r.r(n);var e=r("ln6h"),o=r.n(e);var u=r("hfKm"),a=r.n(u);function s(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),a()(t,e.key,e)}}var i=r("XVgq"),c=r.n(i),f=r("Z7t5"),p=r.n(f);function l(t){return(l="function"===typeof p.a&&"symbol"===typeof c.a?function(t){return typeof t}:function(t){return t&&"function"===typeof p.a&&t.constructor===p.a&&t!==p.a.prototype?"symbol":typeof t})(t)}function y(t){return(y="function"===typeof p.a&&"symbol"===l(c.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof p.a&&t.constructor===p.a&&t!==p.a.prototype?"symbol":l(t)})(t)}function h(t,n){return!n||"object"!==y(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var d=r("Bhuq"),v=r.n(d),b=r("TRZx"),w=r.n(b);function _(t){return(_=w.a?v.a:function(t){return t.__proto__||v()(t)})(t)}var m=r("SqZg"),g=r.n(m);function x(t,n){return(x=w.a||function(t,n){return t.__proto__=n,t})(t,n)}var C=r("q1tI"),E=r.n(C),T=r("5Yp1"),k=r("vcXL"),q=r.n(k),X=r("Y0NT");r.d(n,"default",(function(){return N}));var J=E.a.createElement,N=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,_(n).apply(this,arguments))}var r,e,u;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=g()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)}(n,t),r=n,u=[{key:"getInitialProps",value:function(){var t,n,r;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(q()("https://api.github.com/users/larsthrasher"));case 2:return t=e.sent,n=t.status>200&&t.status,e.next=6,o.a.awrap(t.json());case 6:return r=e.sent,e.abrupt("return",{user:r,statusCode:n});case 8:case"end":return e.stop()}}))}}],(e=[{key:"render",value:function(){var t=this.props,n=t.user,r=t.statusCode;return r?J(X.default,{statusCode:r}):J(T.a,{title:"About"},J("p",null,n.bio),J("img",{src:n.avatar_url,alt:"Lars",height:"200px"}))}}])&&s(r.prototype,e),u&&s(r,u),n}(C.Component)},Y0NT:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),o=r.n(e),u=r("5Yp1"),a=o.a.createElement;n.default=function(t){var n=t.statusCode;return a(u.a,{title:"Error!"},n?"Could not load user data: Status Code ".concat(n):"Couldn't get that page sorry, guy.",a("p",null,"Page not found, man."))}},rB5V:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("Juyh")}])},vcXL:function(t,n,r){"use strict";var e=self.fetch.bind(self);t.exports=e,t.exports.default=t.exports}},[["rB5V",1,2,0,3]]]);