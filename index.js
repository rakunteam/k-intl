!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("fbjs/lib/shallowEqual"),require("intl-messageformat"),require("k-intl/locale-data/en"),require("lodash")):"function"==typeof define&&define.amd?define(["exports","react","fbjs/lib/shallowEqual","intl-messageformat","k-intl/locale-data/en","lodash"],t):t(e["k-intl"]={},e.React,e.shallowEqual,e.IntlMessageFormat,e.defaultLocaleData,e._)}(this,function(e,t,n,r,o,a){"use strict";var i="default"in t?t.default:t;n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r,o=o&&o.hasOwnProperty("default")?o.default:o;var u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){var r=n.store&&n.store.getState()&&n.store.getState().config;if((!r||!r[e])&&t)throw new Error("/ HOC k-intl / "+e+" is not readable. Make sure that this one is available at config."+e+" on your redux store");return r[e]}},c=u("locale"),l=u("lang"),s=u("formats",!1);function f(e){[].concat(e).forEach(function(e){e&&e.locale&&r.__addLocaleData(e)})}var p=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},v={},g=window.navigator.language||window.navigator.browserLanguage;f(o);var m=function(e){for(var t=arguments.length,n=Array(t>2?t-2:0),o=2;o<t;o++)n[o-2]=arguments[o];var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(r,[null].concat(t)))}.apply(void 0,[a].concat(n)).format(e):a},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments[1],n=arguments[2];return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t)return{};var i,u,c,l,s,f=r;return"string"==typeof f&&(i=t,u=f,c=r,s=a.get(i,u),f=s&&"string"!=typeof s?Object.keys(s).reduce(function(e,t){return y({},e,h({},t,c+"."+t))},v):h({},(l=u.split("."))[l.length-1],u)),Object.keys(f).reduce(function(r,i){var u=a.get(t,f[i]);return y({},r,h({},i,m(o[i],u,e,n)))},v)}};e.default=function(e){return function(r){var o,a,u;return a=o=function(o){function a(t,r){p(this,a);var o=b(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t,r));return o.inject=function(t){var r=l(o.context),a=c(o.context),i=s(o.context),u=w(r,a,i)(e,t||o.props);n(o.state.injectedProps.messages,u)||o.setState(function(e){return y({},e,{injectedProps:{messages:u}})})},o.messages={},o.state={injectedProps:{}},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t.Component),d(a,[{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=this.context.store.subscribe(function(){e.inject()}),this.inject()}},{key:"componentWillReceiveProps",value:function(e){this.inject(e)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return i.createElement(r,y({},this.props,this.state.injectedProps))}}]),a}(),o.displayName="Intl ("+((u=r).displayName||u.name||u.constructor&&u.constructor.name||"Unknown")+")",o.contextTypes={store:function(){return null}},a}},e.addLocaleData=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
