(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[3],{253:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},390:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=c||a||Function("return this")(),f=Object.prototype.toString,h=Math.max,d=Math.min,l=function(){return u.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=i.test(t);return c||o.test(t)?s(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r,i,o,s,c,a,u=0,f=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var n=r,o=i;return r=i=void 0,u=e,s=t.apply(o,n)}function y(t){return u=t,c=setTimeout(g,e),f?_(t):s}function w(t){var n=t-a;return void 0===a||n>=e||n<0||b&&t-u>=o}function g(){var t=l();if(w(t))return O(t);c=setTimeout(g,function(t){var n=e-(t-a);return b?d(n,o-(t-u)):n}(t))}function O(t){return c=void 0,m&&r?_(t):(r=i=void 0,s)}function E(){var t=l(),n=w(t);if(r=arguments,i=this,a=t,n){if(void 0===c)return y(a);if(b)return c=setTimeout(g,e),_(a)}return void 0===c&&(c=setTimeout(g,e)),s}return e=v(e)||0,p(n)&&(f=!!n.leading,o=(b="maxWait"in n)?h(v(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=a=i=c=void 0},E.flush=function(){return void 0===c?s:O(l())},E}}).call(this,n(56))},391:function(t,e,n){"use strict";n.r(e),function(t){var n=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof t&&t.Math===Math?t:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!==typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function c(){o(s)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),u=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},h=m(0,0,0,0);function d(t){return parseFloat(t)||0}function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=d(r.width),a=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=l(r,"left","right")+o),Math.round(a+s)!==n&&(a-=l(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var u=Math.round(c+o)-e,p=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(p)&&(a-=p)}return m(i.left,i.top,c,a)}var v="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"===typeof t.getBBox};function b(t){return r?v(t)?function(t){var e=t.getBBox();return m(0,0,e.width,e.height)}(t):p(t):h}function m(t,e,n,r){return{x:t,y:e,width:n,height:r}}var _=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return u(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);u(this,{target:t,contentRect:n})},w=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new _(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!==typeof WeakMap?new WeakMap:new n,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new w(e,n,this);g.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}}));var E="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:O;e.default=E}.call(this,n(56))},393:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var a,u=[],f=!1,h=-1;function d(){f&&a&&(f=!1,a.length?u=a.concat(u):h=-1,u.length&&l())}function l(){if(!f){var t=c(d);f=!0;for(var e=u.length;e;){for(a=u,u=[];++h<e;)a&&a[h].run();h=-1,e=u.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||f||c(l)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},867:function(t,e,n){"use strict";var r=n(0),i=n(4),o=n(1),s=(n(8),n(92)),c=n(818),a=n(34),u=o.forwardRef((function(t,e){var n=t.classes,a=t.className,u=t.raised,f=void 0!==u&&u,h=Object(i.a)(t,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(s.a)(n.root,a),elevation:f?8:1,ref:e},h))}));e.a=Object(a.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},868:function(t,e,n){"use strict";var r=n(0),i=n(4),o=n(1),s=(n(8),n(92)),c=n(34),a=o.forwardRef((function(t,e){var n=t.classes,c=t.className,a=t.component,u=void 0===a?"div":a,f=Object(i.a)(t,["classes","className","component"]);return o.createElement(u,Object(r.a)({className:Object(s.a)(n.root,c),ref:e},f))}));e.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(a)}}]);
//# sourceMappingURL=3.2312944f.chunk.js.map