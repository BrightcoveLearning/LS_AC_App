/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);


/*!
 * iScroll v4.1.9 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(){
var m = Math,
	mround = function (r) { return r >> 0; },
	vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'Moz' :
		(/trident/i).test(navigator.userAgent) ? 'ms' :
		'opera' in window ? 'O' : '',

    // Browser capabilities
    isAndroid = (/android/gi).test(navigator.appVersion),
    isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
    isPlaybook = (/playbook/gi).test(navigator.appVersion),
    isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor + 'Transform' in document.documentElement.style,
    hasTransitionEnd = isIDevice || isPlaybook,

	nextFrame = (function() {
	    return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback) { return setTimeout(callback, 1); }
	})(),
	cancelFrame = (function () {
	    return window.cancelRequestAnimationFrame
			|| window.webkitCancelAnimationFrame
			|| window.webkitCancelRequestAnimationFrame
			|| window.mozCancelRequestAnimationFrame
			|| window.oCancelRequestAnimationFrame
			|| window.msCancelRequestAnimationFrame
			|| clearTimeout
	})(),

	// Events
	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',

	// Helpers
	trnOpen = 'translate' + (has3d ? '3d(' : '('),
	trnClose = has3d ? ',0)' : ')',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			doc = document,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];

		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform ? that.options.useTransform : false;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together!
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			trnOpen = 'translate(';
			trnClose = ')';
		}

		// Set some default styles
		that.scroller.style[vendor + 'TransitionProperty'] = that.options.useTransform ? '-' + vendor.toLowerCase() + '-transform' : 'top left';
		that.scroller.style[vendor + 'TransitionDuration'] = '0';
		that.scroller.style[vendor + 'TransformOrigin'] = '0 0';
		if (that.options.useTransition) that.scroller.style[vendor + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';

		if (that.options.useTransform) that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			that._bind('mouseout', that.wrapper);
			if (that.options.wheelAction != 'none')
				that._bind(WHEEL_EV);
		}

		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,

	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case WHEEL_EV: that._wheel(e); break;
			case 'mouseout': that._mouseout(e); break;
			case 'webkitTransitionEnd': that._transitionEnd(e); break;
		}
	},

	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},

	_scrollbar: function (dir) {
		var that = this,
			doc = document,
			bar;

		if (!that[dir + 'Scrollbar']) {
			if (that[dir + 'ScrollbarWrapper']) {
				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:opacity;-' + vendor + '-transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-' + vendor + '-background-clip:padding-box;-' + vendor + '-box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';-' + vendor + '-border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:-' + vendor + '-transform;-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-' + vendor + '-transition-duration:0;-' + vendor + '-transform:' + trnOpen + '0,0' + trnClose;
			if (that.options.useTransition) bar.style.cssText += ';-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(mround(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(mround(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},

	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},

	_pos: function (x, y) {
		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[vendor + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')';
		} else {
			x = mround(x);
			y = mround(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + mround(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - mround((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[vendor + 'TransitionDelay'] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = trnOpen + (dir == 'h' ? pos + 'px,0' : '0,' + pos + 'px') + trnClose;
	},

	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[vendor + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
				x = matrix[4] * 1;
				y = matrix[5] * 1;
			} else {
				x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
				y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
			}

			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind('webkitTransitionEnd');
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV);
		that._bind(END_EV);
		that._bind(CANCEL_EV);
	},

	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x,
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[vendor + 'Transform'] = trnOpen + newX + 'px,' + newY + 'px' + trnClose + ' scale(' + scale + ')';

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) {
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}

		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},

	_end: function (e) {
		if (hasTouch && e.touches.length != 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;

			that.scroller.style[vendor + 'TransitionDuration'] = '200ms';
			that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + that.scale + ')';

			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = document.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(200);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

 			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
 			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(mround(newPosX), mround(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},

	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}

		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;

				that.zoom(e.pageX, e.pageY, deltaScale, 400);

				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}

			return;
		}

		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;

		that.scrollTo(deltaX, deltaY, 0);
	},

	_mouseout: function (e) {
		var t = e.relatedTarget;

		if (!t) {
			this._end(e);
			return;
		}

		while (t = t.parentNode) if (t == this.wrapper) return;

		this._end(e);
	},

	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind('webkitTransitionEnd');

		that._startAni();
	},


	/**
	 *
	 * Utilities
	 *
	 */
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;

		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}

		step = that.steps.shift();

		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;

		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind('webkitTransitionEnd');
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[vendor + 'TransitionDuration'] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: mround(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}

		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = mround(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	 *
	 * Public methods
	 *
	 */
	destroy: function () {
		var that = this;

		that.scroller.style[vendor + 'Transform'] = '';

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);

		if (!that.options.hasTouch) {
			that._unbind('mouseout', that.wrapper);
			that._unbind(WHEEL_EV);
		}

		if (that.options.useTransition) that._unbind('webkitTransitionEnd');

		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = mround(that.scroller.offsetWidth * that.scale);
		that.scrollerH = mround((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[vendor + 'TransitionDuration'] = '0';
			that._resetPos(200);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];

		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;

		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV);
		this._unbind(END_EV);
		this._unbind(CANCEL_EV);
	},

	enable: function () {
		this.enabled = true;
	},

	stop: function () {
		if (this.options.useTransition) this._unbind('webkitTransitionEnd');
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},

	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[vendor + 'TransitionDuration'] = time + 'ms';
		that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + scale + ')';
		that.zoomed = false;
	},

	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}
};

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})();

/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false, evil:true */

/*
 * Scrollbox turns a given element into a scrollable area. The scrollbox
 * element should have class="scrollbox"; it will grow to the height of
 * its parent element minus the combined height of all siblings.
 */
function Scrollbox(elem, options) {
  var self = this;
  var point1;
  var point2;
  var y0 = 0;
  var y1 = 0;
  var deltaY = 0;
  var tensionY = 0;
  var tensionX = 0;
  var elementHeight = 0;
  var childHeight = 0;
  var x0 = 0;
  var x1 = 0;
  var deltaX = 0;
  var elementWidth = 0;
  var childWidth = 0;
  var child;
  var tension = 2.5;
  var mousing = false;
  var settings;
  var enabled = true;
  var defaults = {
    scrollDirection: "vertical"
  };

  var freeImages = function (elem) {
      var imgs = elem.querySelectorAll("img");
      for (var i = 0; i < imgs.length; i++) {
          imgs[i].src = "../img/blank.png";
      }
  };

  var boundY = function (y) {
    if( elementHeight === 0 || childHeight === 0 ) {
      elementHeight = elem.offsetHeight;
      childHeight = child.offsetHeight;
    }

    return Math.round(Math.min(0, Math.max(y, elementHeight - childHeight)));
  };

  var boundX = function (x) {
    if( elementWidth === 0 || childWidth === 0 ) {
      elementWidth = elem.offsetWidth;
      childWidth = child.offsetWidth;
    }
    return Math.round(Math.min(0, Math.max(x, elementWidth - childWidth)));
  };

  var init = function () {
    settings = $.extend( {}, defaults, options );
    ScrollUtil.init();

    elem.innerHTML = "<div class=\"flow\">" + elem.innerHTML + "</div>";

    child = elem.firstChild;

    elem.style.setProperty("height", ScrollUtil.getAvailableHeight(elem) + "px");

    var touchstart = function (touch) {
      if( !enabled ) {
        return;
      }

      ScrollUtil.transition(child, "0s linear");

      if(settings.scrollDirection === "vertical" ) {
        y0 = elem.getBoundingClientRect().top;
        deltaY = 0;
        elementHeight = elem.offsetHeight;
        childHeight = child.offsetHeight;
        point1 = new Point(touch.pageX, touch.pageY);
        y1 = child.getBoundingClientRect().top - y0;
        ScrollUtil.transform(child, "0", y1 + "px");
      } else {
        x0 = 0;
        dX = 0;
        elementWidth = elem.offsetWidth;
        ec = elem.offsetWidth;
        point1 = new Point(touch.pageX, touch.pageY);
        x1 = child.getBoundingClientRect().left;
        ScrollUtil.transform(child, x1, "0");
      }

      $( elem ).trigger( "scrollstart" );
    };

    var touchmove = function (touch) {
      if( !enabled ) {
        return;
      }
      point2 = new Point(touch.pageX, touch.pageY);

      if( settings.scrollDirection === "vertical" ) {
        deltaY = point2.distanceY(point1);
        tensionY = y1;

        if (Math.abs(deltaY) > 5) {
          tensionY += deltaY;
        }

        // tension up or down.
        if (tensionY > 0) {
          tensionY = tensionY / tension;
        } else if (tensionY < elementHeight - childHeight) {
          tensionY += (elementHeight - (Math.max(elementHeight, childHeight) + tensionY)) / tension;
        }

        ScrollUtil.transform(child, "0", tensionY + "px");
        y1 = Math.round(y1 + deltaY);
      } else {
        deltaX = point2.distanceX(point1);
        tensionX = x1;

        if (Math.abs(deltaX) > 5) {
          tensionX += deltaX;
        }

        // tension left or right
        if (tensionX > 0) {
          tensionX = tensionX  / tension;
        } else if (tensionX < elementWidth - childWidth) {
          tensionX += (elementWidth - (Math.max(elementWidth, childWidth) + tensionX)) / tension;
        }

        ScrollUtil.transform(child, tensionX + "px", "0");
          x1 = Math.round(x1 + deltaX);
      }
      point1 = point2;
    };

    var touchend = function () {
      if( !enabled ) {
        return;
      }

      if(settings.scrollDirection === "vertical" ) {
        self.scrollToY(y1 + (deltaY * Math.abs(deltaY) * 0.75));
      } else {
        self.scrollToX(x1 + (deltaX * Math.abs(deltaX) * 0.75));
      }
      $( elem ).trigger( "scrollend" );
    };

    if ( bc.utils.hasTouchSupport() ) {
      elem.addEventListener("touchstart", function (evt) {
        if (evt.touches) {
          touchstart(evt.touches[0]);
        }
      });

      elem.addEventListener("touchmove", function (evt) {
        if (evt.touches) {
          touchmove(evt.touches[0]);
        }
      });

      elem.addEventListener("touchend", function (evt) {
        touchend();
      });
    } else {
      elem.addEventListener("mousedown", function (evt) {
        mousing = true;
        touchstart(evt);
      });

      elem.addEventListener("mousemove", function (evt) {
        if (mousing) {
          touchmove(evt);
        }
      });

      elem.addEventListener("mouseup", function (evt) {
        if (mousing) {
          mousing = false;
          touchend();
        }
      });
    }

    if (elem.id) {
      Scrollbox.all[elem.id] = self;
    }

    if( !bc.utils.hasTouchSupport() ) {
      $( document ).on( "mousedown", "img", function( evt ) {
        evt.preventDefault();
        evt.stopPropagation();
      });
    }

    // corrects a rendering bug in android 2.x. (9/6/2012)
    self.scrollToY(0, 0);
  };

  this.scrollToY = function (y, timing ) {
    timing = timing || "500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    y1 = boundY(y);
    ScrollUtil.transform(child, "0", y1 + "px");
    ScrollUtil.transition(child, timing );
    $( child ).one( "webkitTransitionEnd", function() {
      $( elem ).trigger( "scrollend" );
    });
  };

  this.scrollToX = function (x, timing) {
    timing = timing || "500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    x1 = boundX(x);
    ScrollUtil.transform(child, x1 + "px", "0");
    ScrollUtil.transition(child, timing );
    $( child ).one( "webkitTransitionEnd", function() {
      $( elem ).trigger( "scrollend" );
    });
  };

  this.setScrollingDirection = function (direction) {
    //TODO - set jQuery child as a global object
    var $child = $( child );
    $child.width( $child.children().width() );
    elementWidth = elem.offsetWidth;
    childWidth = child.offsetWidth;
    settings.scrollDirection = direction;
  };

  this.disable = function() {
    enabled = false;
  };

  this.enable = function() {
    enabled = true;
  };

  // resize to fit available height. do not call directly
  this.resize = function () {
    height = ScrollUtil.getAvailableHeight(elem);
    elem.style.setProperty("height", height + "px");

    //TODO - handle resize for landscape
    elementHeight = elem.offsetHeight;
    childHeight = child.offsetHeight;
    y1 = boundY(y1);

    ScrollUtil.transform(child, "0", y1 + "px");
    ScrollUtil.transition(child, "0ms linear");
  };

  // get the HTML content of this scrollbox
  this.getContent = function () {
    return child.innerHTML;
  };

  // update the HTML content of this scrollbox
  this.setContent = function (html) {
    freeImages(elem);

    child.innerHTML = html;
  };

  // snap to the top
  this.top = function () {
    y1 = 0;
    ScrollUtil.transform(child, "0", "0");
    ScrollUtil.transition(child, "0s linear");
  };

  this.clear = function () {
    freeImages(elem);

    this.setContent("");
    this.top();
  };

  init();
}

Scrollbox.all = {};

Scrollbox.get = function (elemId) {
  return Scrollbox.all[elemId];
};

// Point holds an arbitrary location measured from top left
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.distanceX = function (point) {
  return this.x - point.x;
};

Point.prototype.distanceY = function (point) {
  return this.y - point.y;
};

/*
 * Static helper and init functions used by Scrollbox
 */
var ScrollUtil = {};

// add listeners, add css rules
ScrollUtil.init = function () {
  // do just once
  if (ScrollUtil.inited) {
    return;
  }

  var orientation = bc.context.viewOrientation;

  document.body.addEventListener("touchmove", function (evt) {
    evt.preventDefault();
  });

  //window.addEventListener("resize", function (evt) {
  $( bc ).bind( "vieworientationchange", function() {
    //var o =window.innerWidth > window.innerHeight ? "L" : "P";
    if ( bc.context.viewOrientation === orientation) {
      return;
    }
    orientation = bc.context.viewOrientation;
    // resize scrollboxes

    for (var s in Scrollbox.all) {
      Scrollbox.all[s].resize();
    }
  });

  var css = {
    "html": [
      "width: 100%"
    ],
    ".scrollbox": [
      "overflow: hidden"
    ],
    ".scrollbox > .flow": [
      "-webkit-transform: translate3d(0, 0, 0)"
    ]
  };

  var sheet = document.styleSheets[0];

  for (var c in css) {
    sheet.addRule(c, css[c].join(";"));
  }

  ScrollUtil.inited = true;
};

// apply a 3D transform to an element
ScrollUtil.transform = function (elem, x, y) {
  elem.style.setProperty("-webkit-transform", "translate3d(" + x + ", " + y + ", 0)");
};

// apply a CSS transition to an element's transform
// value is expressed as "time curve", e.g. "500ms linear"
ScrollUtil.transition = function (elem, value) {
  elem.style.setProperty("-webkit-transition", "-webkit-transform " + value);
};

// get the available height for an element
ScrollUtil.getAvailableHeight = function (elem) {
  var parent = elem.parentElement;
  var sibs = parent.childNodes;
  var h = 0;

  var isStatic = function (style) {
    return ["static", "relative"].indexOf(style.position) > -1;
  };

  var isBlock = function (style) {
    return style.display !== "inline-block" && style.float === "none";
  };

  for (var i in sibs) {
    if (sibs[i] !== elem) {
      var style = window.getComputedStyle(sibs[i]);
      if (style && isStatic(style) && isBlock(style)) {
        h += sibs[i].offsetHeight || 0;
      }
    }
  }

  return parent.getBoundingClientRect().height - h;
};

// Get the available width for an element
ScrollUtil.getAvailableWidth = function (elem) {
  return elem.parentElement.offsetWidth;
};

/*
  Markup.js v1.5.12: http://github.com/adammark/Markup.js
  MIT License
  (c) 2011 Adam Mark
*/
var Mark = {
    // templates to include, by name
    includes: {},

    // global variables, by name
    globals: {},

    // argument delimiter
    delimiter: ">",

    // compact white space between HTML nodes
    compact: false,

    // return a copy of array A or copy array A into array B (returning B)
    _copy: function (a, b) {
        b = b || [];

        for (var i in a) {
            b[i] = a[i];
        }

        return b;
    },

    // get the length of array A, or simply return A. see pipes, below
    _size: function (a) {
        return a instanceof Array ? a.length : (a || 0);
    },

    // an object with an index (0...n-1) ("#") and size (n) ("##")
    _iter: function (idx, size) {
        this.idx = idx;
        this.size = size;
        this.length = size;
        this.sign = "#";
        this.toString = function () {
            return this.idx + this.sign.length - 1;
        };
    },

    // pipe an obj through filters. e.g. _pipe(123, ["add>10","times>5"])
    _pipe: function (val, filters) {
        // get the first filter, e.g. "add>10"
        var filter = filters.shift(), parts, fn, args;

        if (filter) {
            parts = filter.split(this.delimiter); // e.g. ["add", "10"]
            fn = parts[0].trim(); // e.g. "add"
            args = parts.splice(1); // e.g. "10"

            try {
                // apply the piped fn to val, then pipe again
                val = this._pipe(Mark.pipes[fn].apply(null, [val].concat(args)), filters);
            }
            catch (e) {
            }
        }

        // return the result of the piped value
        return val;
    },

    // evaluate an array or object and process its child contents (if any)
    _eval: function (context, filters, child) {
        var result = this._pipe(context, filters),
            ctx = result,
            i = -1,
            j,
            opts;

        // if result is array, iterate
        if (result instanceof Array) {
            result = "";
            j = ctx.length;

            while (++i < j) {
                opts = {
                    iter: new this._iter(i, j)
                };
                result += child ? Mark.up(child, ctx[i], opts) : ctx[i];
            }
        }
        else if (result instanceof Object) {
            result = Mark.up(child, ctx);
        }

        return result;
    },

    // get "if" or "else" string from piped result
    _test: function (result, child, context, options) {
        var str = Mark.up(child, context, options).split(/\{\{\s*else\s*\}\}/),
            res = (result === false ? str[1] : str[0]);

        return Mark.up(res || "", context, options);
    },

    // get the full extent of a block tag given a template and token (e.g. "if")
    _bridge: function (tpl, tkn) {
        var exp = "{{\\s*" + tkn + "([^/}]+\\w*)?}}|{{/" + tkn + "\\s*}}",
            re = new RegExp(exp, "g"),
            tags = tpl.match(re),
            t,
            a = 0,
            b = 0,
            c = -1,
            d = 0;

        for (t in tags) {
            c = tpl.indexOf(tags[t], c + 1);

            if (tags[t].match("{{/")) {
                b++;
            }
            else {
                a++;
            }

            if (a === b) {
                break;
            }
        }

        a = tpl.indexOf(tags[0]);
        b = a + tags[0].length;
        d = c + tags[t].length;

        // return "{{abc}}xyz{{/abc}}" and "xyz"
        return [tpl.substring(a, d), tpl.substring(b, c)];
    }
};

// fill a template string with context data. return transformed template
Mark.up = function (template, context, options) {
    context = context || {};
    options = options || {};

    // pattern matching any tag, e.g. "{{apples}}" and "{{/apples}}"
    var re = /\{\{\w*[^}]+\w*\}\}/g,
        // an array of tags
        tags = template.match(re) || [],
        // the tag being evaluated
        tag,
        // the string to evaluate, e.g. "hamster|dance"
        prop,
        // the token that might be terminated by "{{/token}}"
        token,
        // an array of filters, e.g. ["more>1", "less>2"]
        filters = [],
        // is the tag self-closing? e.g. "{{stuff/}}"
        selfy,
        // is the tag an "if" statement?
        testy,
        // the string inside a block tag, e.g. "{{a}}...{{/a}}"
        child,
        // a shortcut for context[prop]
        ctx,
        // the result string
        result,
        // the global being evaluated, or undefined
        global,
        // the include being evaluated, or undefined
        include,
        // iterator variable
        i = 0,
        // iterator variable
        j = 0;

    // set custom pipes, if any
    if (options.pipes) {
        this._copy(options.pipes, this.pipes);
    }

    // set templates to include, if any
    if (options.includes) {
        this._copy(options.includes, this.includes);
    }

    // set global variables, if any
    if (options.globals) {
        this._copy(options.globals, this.globals);
    }

    // override delimiter
    if (options.delimiter) {
        this.delimiter = options.delimiter;
    }

    // compact HTML?
    if (options.compact !== undefined) {
        this.compact = options.compact;
    }

    // loop through tags, e.g. {{a}}, {{b}}, {{c}}, {{/c}}
    while ((tag = tags[i++])) {
        result = undefined;
        child = "";
        selfy = tag.indexOf("/}}") > -1;
        prop = tag.substr(2, tag.length - (selfy ? 5 : 4));
        prop = prop.replace(/`([^`]+)`/g, function (s, p1) {
            return Mark.up("{{" + p1 + "}}", context);
        });
        testy = prop.trim().indexOf("if ") === 0;
        filters = prop.split("|").splice(1);
        prop = prop.replace(/^\s*if/, "").split("|").shift().trim();
        token = testy ? "if" : prop.split("|")[0];
        ctx = context[prop];

        // assume testing for empty
        if (testy && !filters.length) {
            filters = ["notempty"];
        }

        // determine the full extent of a block tag and its child
        if (!selfy && template.indexOf("{{/" + token) > -1) {
            result = this._bridge(template, token);
            tag = result[0];
            child = result[1];
            i += tag.match(re).length - 1; // fast forward
        }

        // skip "else" tags. these will be pulled out in _test()
        if (/^\{\{\s*else\s*\}\}$/.test(tag)) {
            continue;
        }

        // tag refers to a global
        else if ((global = this.globals[prop]) !== undefined) {
            result = this._eval(global, filters, child);
        }

        // tag refers to included template
        else if ((include = this.includes[prop])) {
            if (include instanceof Function) {
                include = include();
            }
            result = this._pipe(Mark.up(include, context), filters);
        }

        // tag refers to loop counter
        else if (prop.match(/#{1,2}/)) {
            options.iter.sign = prop;
            result = this._pipe(options.iter, filters);
        }

        // tag refers to current context
        else if (prop === ".") {
            result = this._pipe(context, filters);
        }

        // tag has dot notation, e.g. "a.b.c"
        else if (prop.match(/\./)) {
            prop = prop.split(".");
            ctx = Mark.globals[prop[0]];

            if (ctx) {
                j = 1;
            }
            else {
                j = 0;
                ctx = context;
            }

            // get the actual context
            while (ctx && j < prop.length) {
                ctx = ctx[prop[j++]];
            }

            result = this._eval(ctx, filters, child);
        }

        // tag is otherwise testable
        else if (testy) {
            result = this._pipe(ctx, filters);
        }

        // context is an array. loop through it
        else if (ctx instanceof Array) {
            result = this._eval(ctx, filters, child);
        }

        // tag is a block, e.g. {{foo}}child{{/foo}}
        else if (child) {
            result = ctx ? Mark.up(child, ctx) : undefined;
        }

        // else all others
        else if (context.hasOwnProperty(prop)) {
            result = this._pipe(ctx, filters);
        }

        // resolve "if" statements
        if (testy) {
            result = this._test(result, child, context, options);
        }

        // replace the tag, e.g. "{{name}}", with the result, e.g. "Adam"
        template = template.replace(tag, result === undefined ? "???" : result);
    }

    return this.compact ? template.replace(/>\s+</g, "><") : template;
};

// "out of the box" pipes. see README
Mark.pipes = {
    empty: function (obj) {
        return !obj || (obj + "").trim().length === 0 ? obj : false;
    },
    notempty: function (obj) {
        return obj && (obj + "").trim().length ? obj : false;
    },
    blank: function (str, val) {
        return !!str || str === 0 ? str : val;
    },
    more: function (a, b) {
        return Mark._size(a) > b ? a : false;
    },
    less: function (a, b) {
        return Mark._size(a) < b ? a : false;
    },
    ormore: function (a, b) {
        return Mark._size(a) >= b ? a : false;
    },
    orless: function (a, b) {
        return Mark._size(a) <= b ? a : false;
    },
    between: function (a, b, c) {
        a = Mark._size(a);
        return a >= b && a <= c ? a : false;
    },
    equals: function (a, b) {
        return a == b ? a : false;
    },
    notequals: function (a, b) {
        return a != b ? a : false;
    },
    like: function (str, pattern) {
        return new RegExp(pattern, "i").test(str) ? str : false;
    },
    notlike: function (str, pattern) {
        return !Mark.pipes.like(str, pattern) ? str : false;
    },
    upcase: function (str) {
        return String(str).toUpperCase();
    },
    downcase: function (str) {
        return String(str).toLowerCase();
    },
    capcase: function (str) {
        return str.replace(/\b\w/g, function (s) { return s.toUpperCase(); });
    },
    chop: function (str, n) {
        return str.length > n ? str.substr(0, n) + "..." : str;
    },
    tease: function (str, n) {
        var a = str.split(/\s+/);
        return a.slice(0, n).join(" ") + (a.length > n ? "..." : "");
    },
    trim: function (str) {
        return str.trim();
    },
    pack: function (str) {
        return str.trim().replace(/\s{2,}/g, " ");
    },
    round: function (num) {
        return Math.round(+num);
    },
    clean: function (str) {
        return String(str).replace(/<\/?[^>]+>/gi, "");
    },
    size: function (obj) {
        return obj.length;
    },
    length: function (obj) {
        return obj.length;
    },
    reverse: function (arr) {
        return Mark._copy(arr).reverse();
    },
    join: function (arr, separator) {
        return arr.join(separator);
    },
    limit: function (arr, count, idx) {
        return arr.slice(+idx || 0, +count + (+idx || 0));
    },
    split: function (str, separator) {
        return str.split(separator || ",");
    },
    choose: function (bool, iffy, elsy) {
        return !!bool ? iffy : (elsy || "");
    },
    toggle: function (obj, csv1, csv2, str) {
        return csv2.split(",")[csv1.match(/\w+/g).indexOf(obj + "")] || str;
    },
    sort: function (arr, prop) {
        var fn = function (a, b) {
            return a[prop] > b[prop] ? 1 : -1;
        };
        return Mark._copy(arr).sort(prop ? fn : undefined);
    },
    fix: function (num, n) {
        return (+num).toFixed(n);
    },
    mod: function (num, n) {
        return (+num) % (+n);
    },
    divisible: function (num, n) {
        return num && (+num % n) === 0 ? num : false;
    },
    even: function (num) {
        return num && (+num & 1) === 0 ? num : false;
    },
    odd: function (num) {
        return num && (+num & 1) === 1 ? num : false;
    },
    number: function (str) {
        return parseFloat(str.replace(/[^\-\d\.]/g, ""));
    },
    url: function (str) {
        return encodeURI(str);
    },
    bool: function (obj) {
        return !!obj;
    },
    falsy: function (obj) {
        return !obj;
    },
    first: function (iter) {
        return iter.idx === 0;
    },
    last: function (iter) {
        return iter.idx === iter.size - 1;
    },
    call: function (obj, fn) {
        return obj[fn].apply(obj, [].slice.call(arguments, 2));
    },
    set: function (obj, key) {
        Mark.globals[key] = obj; return "";
    },
    log: function (obj) {
        console.log(obj);
        return obj;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = Mark;
}

 /*global bc:true, atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/


/**
 * bc is the namespace for all functions, properties, and events available through the Brightcove App Cloud SDK.
 * @namespace
 */
var bc = {};

/**
 * Brightcove core is responsible for communicating with the Brightcove App Cloud server, storing the responses from the server,
 * and messaging the appropriate events.
 * @namespace
 */
bc.core = {};

/**
 * Import required 3rd party libraries and namespace so as not to conflict with other versions
 */
bc.lib = {};

// namespace our version of jQuery and reset the global vars of $,jQuery back to what they were
( function() {
  bc.lib.jQuery = jQuery.noConflict(true);
  if ( jQuery === undefined ) {
    jQuery = bc.lib.jQuery;
    $ = jQuery;
  }
})();

( function( $, undefined ) {
  //tracks whether or not we have set ads yet.
  var _adsSet,
      _globalDataRequestPollCount = {},
      _markupLoaded = false,
      _localeResourceFileLoaded = false;

  /** @private The URL of the App Cloud Studio. */
  bc.SERVER_URL = ( "http://read.appcloud.brightcove.com".indexOf( "%" ) > -1 ) ? "http://read.appcloud.brightcove.com" : "http://read.appcloud.brightcove.com";

  /** @private The URL of the server we will send metrics to. */
  bc.METRICS_SERVER_URL = ( "%METRICS_SERVER_URL%".indexOf( "%" ) > -1 ) ? "http://metrics.brightcove.com" : "%METRICS_SERVER_URL%";

  /** @private The URL of the API server we will use. */
  bc.API_SERVER_URL = ( "%API_SERVER_URL%".indexOf( "%" ) > -1 ) ? "https://api.appcloud.brightcove.com/v1" : "%API_SERVER_URL%";

  /** This is a unique ID that is generated when the application is created in the Brightcove App Cloud Studio.  During development this will be undefined, since the application has not been created by the Studio yet. */
  bc.appID = null;

  /** This is a unique ID that generated for this specific "view" when the application is created in the App Cloud Studio.  During development this will be the URL of the view, since the URL is a unique string. */
  bc.viewID = null;

  /** This the unique ID that represents the App Cloud account that this application is part of.  During development this will be undefined. */
  bc.accountID = null;

  /** @private The SQLite database that we use to track our localStorage usage.  See bc.core.cache and pruneCache to see how this is used. */
  bc.db = null;

  /**
   * Context object that exposes information related to the current state of the application.  The following properties exist
   * on the context object:
   * <ul>
   *   <li>viewOrientation: A string that will match either <code>portrait</code> or <code>landscape</code>.  Represents the orientation of the view on the phone.  NOTE:
   *       this is different from device orientation.  For example, the phone might actually be held in landscape mode but the view does not autorotate,
   *       in which case the view would still be in <code>portrait</code> mode.</li>
   *   <li>os: A string that will match either <code>ios</code> or <code>android</code>. </li>
   *   <li>isNative: A boolean value indicating whether or not we are running inside a native container on a device.</li>
   *   <li>moreNavigationView: A boolean value indicating whether or not the current view falls under the "more" section.  (Specific to iOS)</li>
   *   <li>version: The version of the SDK.</li>
   * </ul>
   * @namespace
   */
  bc.context = { version: "%VERSION%" };

  /**
   * If a developer uses the <a href="http://support.brightcove.com/en/docs/using-markup-templates">markup templating</a> system included in the SDK
   * then any layouts specified in the .txt file will be populated onto the bc.templates object.  For example if your markup.txt file has the following
   * layout: <br>
   <pre>===== example-tmpl
&lt;h1&gt;My Example&lt;/h1&gt;
&lt;p&gt;Hi, my name is {{name}}.&lt;/p&gt;
   </pre>
   <br>
   Then after the bc.init event is fired the bc.templates object will now have a property of "example-tmpl".  This can be referenced as bc.templates["example-tmpl"] and
   passed into the Mark.up function. For example:
   <pre>var html = Mark.up( bc.templates["example-tmpl"], {"name": "John"} );
$( "body" ).html( html );</pre>
   Would set the body of the page to <pre>
&lt;h1&gt;My Example&lt;/h1&gt;
&lt;p&gt;Hi, my name is John.&lt;/p&gt;
  </pre>
   * @namespace
   */
  bc.templates = {};

  /**
   * The different modes the application can be running in. One of the strings listed in <a href="../bc.core.mode.html">bc.core.mode</a>.
   * @namespace
   */
  bc.core.mode = {};

  /**
   * The configuration object.  The following properties can be set on this object to control the behavior of the SDK.  Properties
   * can be set on this object after the 'init' event has fired on the bc object.
   *
   * <p/>
   * The following properties can be set on this object:
   * <ul>
   *   <li>touchEventsEnabled: Whether or not the App Cloud SDK should detect and fire gestures events such as tap, swipe.  Enabled by
   *       default.  Turn this off if you are using a third party library, such as hammer.js, that will be detecting and firing these events.
   * </ul>
   *
   * @namespace
   */
  bc.config = {};

  /** An application is in development mode if it has not been ingested into the Brightcove App Cloud Studio. */
  bc.core.mode.DEVELOPMENT = "development";
  /**
   * An application is in production mode once it has been created in the Brightcove App Cloud Studio, using
   *  a previously ingested template. */
  bc.core.mode.PRODUCTION = "production";
  /** An application is in preview mode if it is being previewed in the Brightcove App Cloud Studio.*/
  bc.core.mode.PREVIEW = "preview";
  /** The current mode that the application is running in. */
  bc.core.current_mode = bc.core.mode.DEVELOPMENT;
  /** App level configurations*/
  bc.currentGlobalConfigs = undefined;


  /***************************************************************************************
    * Private helper functions
    ***************************************************************************************/

   function findValueInObject( object, name ) {
     if( $.isPlainObject( object ) ) {
       return object;
     }

     for( var i = 0, len = object.length; i < len; i++ ) {
       if( object[i].name === name ) {
         return object[i];
       }
     }
     return {};
   }

   /* Calculates the URL to be used to make the request to the appcloud server.*/
   function getContentFeedURL( contentFeed ) {
     var url,
        feedValueFromManifest = bc.core.getManifestConfiguration( { "type": "data", "name": contentFeed } );

     if( bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
      contentFeed = ( feedValueFromManifest === null ) ? contentFeed : feedValueFromManifest;
      url = bc.SERVER_URL + "/content/" + contentFeed + "/fetch";
     } else {
      if( feedValueFromManifest === null ) {
        url = bc.SERVER_URL + "/content/" + contentFeed + "/fetch";
      } else {
        url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/data.json?content_feed_name=" + contentFeed;
      }
     }

     return url;
   }

   function storeGlobalConfigs( global ) {
     if( !bc.utils.isEqual( global, bc.currentGlobalConfigs ) ) {
       bc.core.cache( bc.appID + "_global_configs", global );
       bc.currentGlobalConfigs = global;
       return true;
     }

     return false;
   }

  function storeSettings( settings ) {
     if( !bc.utils.isEqual( settings, bc.core.cache( bc.viewID + "_settings" ) ) ) {
       bc.core.cache( bc.viewID + "_settings", settings );
       return true;
     }
     return false;
   }

  function storeStyles( styles ) {
    if( !bc.utils.isEqual( styles, bc.core.cache( bc.viewID + "_styles" ) ) ) {
      bc.core.cache( bc.viewID + "_styles", styles );
      return true;
    }
    return false;
  }

  function createTables() {
    if( !bc.db ) {
      return;
    }

    bc.db.transaction(
      function (transaction) {
        transaction.executeSql( "CREATE TABLE IF NOT EXISTS components(id INTEGER NOT NULL PRIMARY KEY, component_id TEXT NOT NULL, modified TIMESTAMP NOT NULL);" );
      }
    );
  }

  function bcAppDB() {
    if( typeof( window.openDatabase ) !== "function") {
      return null;
    }

    try {
      bc.db = window.openDatabase(bc.appID, "1.0", "BC_" + bc.appID, 1024*1024);
      createTables();
    } catch(e) {
      bc.utils.warn("THERE WAS AN ERROR OPENING THE DB");
      bc.db = null;
    }
  }

  function setGlobalIDValues() {
    bc.viewID = $( "body" ).data( "bc-view-id" ) || location.href;
    bc.appID = $( "body" ).data( "bc-app-id" );
    bc.accountID = $( "body" ).data( "bc-account-id" );

    if( bc.appID !== undefined) {
     if( bc.core.isPreview() ) {
       bc.core.current_mode = bc.core.mode.PREVIEW;
     } else {
       bc.core.current_mode = bc.core.mode.PRODUCTION;
     }
    }
    bcAppDB();
  }

  function pruneCache() {
    if( bc.db !== null ) {
     var ids_to_remove = "";
     bc.db.transaction(
       function (transaction) {
         transaction.executeSql( "SELECT component_id from components ORDER BY modified;", [], function( tx, results ) {
           for ( var i = 0, len = results.rows.length; i < len/2; i++ ) {
             var item = results.rows.item( i ).component_id;
             window.localStorage.removeItem( item );
             ids_to_remove += "component_id = '" + item + "' OR ";
           }

           //Once we have cleaned up the local storage we should now clean up the DB.
           ids_to_remove = ids_to_remove.substring( 0, ( ids_to_remove.length - 4 ) );
           bc.db.transaction(
             function (transaction) {
               transaction.executeSql( "DELETE FROM components WHERE " + ids_to_remove + ";", [] );
             }
           );
         });
       }
     );
    } else {
      //If there is no DB then we do not have a more intelligent way to prune other then to remove
      window.localStorage.clear();
    }
  }

  function updateDB(component_id) {
    if(bc.db === null) {
     return;
    }

    bc.db.transaction(
      function (transaction) {
        transaction.executeSql( "SELECT component_id FROM components WHERE component_id ='" + component_id +"';", [], function( tx, results ) {
          if(results.rows.length === 0) {
            bc.db.transaction(
              function ( transaction ) {
                transaction.executeSql( "INSERT INTO components (component_id, modified) VALUES ('" + component_id + "', '" + Date() + "');" );
              }
            );
          } else {
            bc.db.transaction(
              function ( transaction ) {
                transaction.executeSql( "UPDATE components SET modified = '" + Date() + "' WHERE component_id ='" + component_id + "';" );
              }
            );
          }
        });
      }
    );
  }

  function storeAdConfigurations( adConfigsFromServer ) {
    var adConfigs,
        defaults = {
          "ad_code": undefined,
          "ad_position": "none",
          "ad_network": "admob"
        };

    adConfigs = $.extend( {}, defaults, adConfigsFromServer );

    adConfigs.should_show_ad = ( !!adConfigs.ad_code && !!adConfigs.ad_position && adConfigs.ad_position !== "none" );
    bc.core.cache( bc.viewID + "_ad_settings", adConfigs );
    setAdPolicy( adConfigs );
  }

  function setAdPolicy( adConfigs ) {
    adConfigs = adConfigs || bc.core.cache( bc.viewID + "_ad_settings");
    //If we have already set an ad policy we do not want to do again.
    if ( _adsSet !== undefined ) {
      return;
    }

    if( adConfigs && bc.device !== undefined && bc.device.setAdPolicy !== undefined ) {
      bc.device.setAdPolicy( adConfigs );
      _adsSet = true;
    }
  }

   /***************************************************************************************
    * End of private helper functions
    ***************************************************************************************/

  /**
   * Depending on whether one or two values are passed into the cache function, it will either read values from or write
   * values to the localStorage.  Note that there is a limit of 5MB that can be stored in this cache
   * at any given time.  If this cache fills up, then we remove half the items from the cache.  We use a
   * LRU (least recently used) cache algorithm to select what should be removed.
   *
   * @param key The key for where the value is stored.
   * @param value The value that should be stored in the localStorage.
   * @return If only a key is passed in, then the value is returned. If no value is found, null is returned.
   * @example
   //Note that the cache is persisted across startups.
   bc.core.cache( "whales" ); //returns null because it has never been set.
   bc.core.cache( "whales", "a pod of whales" ); //sets the value of the key "whales"
   bc.core.cache( "whales" ); //returns "a pod of whales"
   */
  bc.core.cache = function( key, value ) {
    var ret;

    try {
      if( value !== undefined ){
        try {
          window.localStorage.setItem( key, JSON.stringify( value ) );
          updateDB( key );
          return value;
        } catch( e ) {
          bc.utils.warn( "ERROR: we are assuming that our local storage is full and will now remove half of the existing cache:" + e.toString() );
          pruneCache();
        }
      } else {
        ret = JSON.parse( window.localStorage.getItem( key ) );
        if( ret !== null ) {
          try {
            updateDB( key );
          } catch ( e ) {
            bc.utils.warn( 'ERROR: we were unable to updated the DB with this cache hit' );
          }
        }
        return ret;
      }
    } catch( e ) {
      bc.utils.warn( "Error storing and/or receiving values in local storage: " + e.toString() );
      return null;
    }
  };

  /**
   * Fetches the data for this contentFeed.  This can take in a contentFeed ID or the name of a feed defined for this view in the <code>manifest.json</code> file.
   *
   * @param contentFeed The ID of the contentFeed or the name of the feed, if configurations are defined in the <code>manifest.json</code> file.  The contentFeed ID can be found in the Content section of the App Cloud Studio.
   * @param successCallback The function to call once the data has been retrieved.
   * @param errorCallback The function to call if there is an error retrieving data.
   * @param options An object defining the options for this request. Possible values are:
        <ul>
          <li> parameterizedFeedValues: The query params to pass to the contentFeed as parameters.  See <a href="https://docs.brightcove.com/en/app-cloud-beta/using-parameters-in-content-feed-urls" >Using parameters in content feed URLs</a> for how parameterized feeds work.  Defaults to "".
          <li> requestTimeout:  Number of milliseconds before the request is timed out and the error callback is called.  By default it is 30000 ms.
        </ul>
   * @example

    bc.core.getData( "xxxxxxxxxx",
      successHandler,
      errorHandler,
      { "parameterizedFeedValues":
        { "loc": "01950" }
      }
    );

    function successHandler( data ) {
      //Do something with the data.
    }

    function errorHandler() {
      //Handle the error gracefully.
    }
   */
  bc.core.getData = function( contentFeed, successCallback, errorCallback, options ) {
    var settings,
        globalSessionStore,
        isGlobalRequest = bc.core.isGlobalRequest( contentFeed ),
        defaults = {
          "parameterizedFeedValues": "",
          "requestTimeout": 30000
        };

    function success( results ) {
      if( results.status !== undefined ) {

        if( results.status === "ok" && results.data !== undefined ) {
          if ( successCallback ) successCallback( results.data );
        } else {
          if ( errorCallback ) errorCallback( results );
        }

      } else {
        //The /content/{id}/fetch does not return a status.
        if ( successCallback ) successCallback( results );
      }

      //Cache this response.
      if( ( !results.status || results.status === "ok" ) && isGlobalRequest ) {
        window.sessionStorage.setItem( bc.appID + "_data_" + contentFeed, JSON.stringify( results ) );
      }
    }

    function error( err ) {
      console.warn( "There was an error fetching content for contentFeed: " + contentFeed );
      if ( errorCallback ) errorCallback( err );
    }

    settings = $.extend( {}, defaults, options );
    globalSessionStore = window.sessionStorage.getItem( bc.appID + "_" + contentFeed );
    globalSessionStore = ( globalSessionStore === null ) ? globalSessionStore : JSON.parse( globalSessionStore );
    //If this a global data request then we should check to see if there was a request already being made.
    if( isGlobalRequest && globalSessionStore && bc.core.requestExists( globalSessionStore, settings ) ) {
      if( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) {
        success( JSON.parse( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) );
        return;
      } else {
        bc.core.pollForRequest( contentFeed, successCallback, errorCallback, options );
      }
    }

    $.ajax(
      {
        url: getContentFeedURL( contentFeed ),
        timeout: settings.requestTimeout,
        dataType: "jsonp",
        data: ( options && options.parameterizedFeedValues ) ? { "query_params": options.parameterizedFeedValues } : "",
        success: success,
        error: error
      }
    );

    if( isGlobalRequest ) {
      //Make this an array of settings, that I then compare?
      globalSessionStore = ( globalSessionStore ) ? globalSessionStore.push( settings ) : [ settings ];
      window.sessionStorage.setItem( bc.appID + "_" + contentFeed, JSON.stringify( globalSessionStore ) );
    }
  };

  /**
   * @private
   */
  bc.core.requestExists = function( globalSessionStore, settings ) {
    for( var i=0, len=globalSessionStore.length; i<len; i++ ) {
      if( bc.utils.isEqual( globalSessionStore[i], settings ) ) {
        return true;
      }
    }
    return false;
  };

  /**
   * @private
   */
  bc.core.isGlobalRequest = function( contentFeed ) {
    var configs = bc.configurations;

    if( !configs || !configs.data ) {
      return false;
    }

    for( var i=0, len = configs.data.length; i < len; i++ ) {
      if( configs.data[i].name === contentFeed ) {
        return !!configs.data[i].global;
      }
    }
    return false;
  };

  /**
   * @private
   */
  bc.core.pollForRequest = function( contentFeed, successCallback, errorCallback, options ) {
    _globalDataRequestPollCount[ contentFeed ] = _globalDataRequestPollCount[ contentFeed ] || 0;
    if( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) {
      _globalDataRequestPollCount[ contentFeed ] = undefined;
      successCallback( JSON.parse( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) );
      return;
    }

    //Poll for 30 seconds
    if( _globalDataRequestPollCount[ contentFeed ] < 60 ) {
      _globalDataRequestPollCount[ contentFeed ]++;
      setTimeout( function() {
        bc.core.pollForRequest( contentFeed, successCallback, errorCallback, options );
      }, 500 );
    } else {
      //The request has taken way too long so we are going to clear out the session flag to not make the request and let it hit the server.
      window.sessionStorage.setItem( bc.appID + "_" + contentFeed, null );
      _globalDataRequestPollCount[ contentFeed ] = undefined;
      bc.core.getData( contentFeed, successCallback, errorCallback, options );
    }
  };

  /**
   * Gets a configuration from the configurations defined in the <code>manifest.json</code> file.  All of the configurations for this view are
   * available on the bc.configurations property.  Additionally, the entire <code>manifest.json</code> is available at the global variable of manifest.
   * @param options An object that specifies the configuration type to get and the property to find.  Possible values are:
     <ul>
      <li> type: The configuration type, which can be a data, styles, or settings. </li>
      <li> name: The name of the value to get for the configuration.</li>
    </ul>
    @return The corresponding value for the key inside the type that was passed in or null if no value was found.
    @private
   */
  bc.core.getManifestConfiguration = function( options ) {
    var data, getFeedValue;

    getFeedValue = function( obj ) {
      return ( obj.contentFeed ) ? obj.contentFeed : obj.contentConnector;
    };

    if( bc.configurations && options !== undefined && bc.configurations[options.type] !== undefined ) {
      data = bc.configurations[options.type];

      for( var i = 0, len = data.length; i < len; i++ ) {
        if( data[i].name === options.name ) {
          return ( data[i].value !== undefined ? data[i].value : getFeedValue( data[i] ) );
        }
      }
    }
    return null;
  };

  /**
   * Retrieves the styles from the cache for the current view.
   *
   * @return It is expected that most developers will call <code>applyStyles</code>, which both gets the styles and also renders them to the page.
   * This function will return an object that contains the styles for this particular view or an empty object if no styles are found.
   * @example
   // Styles is an object.
   var styles = bc.core.getStyles();
   */
  bc.core.getStyles = function() {
    var styles,
      viewStyles = bc.core.cache( bc.viewID + "_styles" ),
      globalStyles = bc.core.cache( bc.appID + "_global_configs" ) || {};

    styles = bc.utils.merge( globalStyles.styles, viewStyles );

    if( styles.length === 0 && bc.configurations && bc.configurations.styles ) {
      styles = bc.configurations.styles;
    }

    return styles || [];
  };

  /**
   * @private
   */
  bc.core.getStyleValueFromPreviousStylesByName = function( styleName ) {
    var prevStyles = bc.core.cache( bc.viewID + "_current_styles" );

    //This should never be null as the bootstrap file should always put files into the download state.
    if( prevStyles === null ) {
      console.warn( "getStyleValueFromPreviousStylesByName had no previous styles." );
      return "";
    }

    for( var i=0, len=prevStyles.length; i<len; i++ ) {
      if( prevStyles[i].name === styleName ) {
        return prevStyles[i].value;
      }
    }
    return "";
  };

  /**
   * @private
   */
  bc.core.normalizeStylesForBackgroundImages = function( styles ) {

    bc.device.getDownloadInfo( function( downloadInfoArray ) {
      var needToDownload,
          max = downloadInfoArray.length;
      for( var i=0, len = styles.length; i<len; i++ ) {
        needToDownload = false;
        //If we have a background image that is not an empty string then we need to see if we have downlaoded it.
        if( styles[i].attribute === "background-image" && styles[i].value !== "" ) {
          needToDownload = true;
          for( var j=0; j<max; j++ ) {

            //When find the download that matches this background image we need to see its state and take the appropriate action.
            if( downloadInfoArray[j].resource === bc.SERVER_URL + styles[i].value ) {
              needToDownload = false;
              if( downloadInfoArray[j].state === "complete") {
                styles[i].value = "url(" + downloadInfoArray[j].fileURI + ")";
              } else if( downloadInfoArray[j].state === "errored" ) {
                bc.device.removeDownload( downloadInfoArray[j].downloadID );
                needToDownload = true;
              } else {
                //The file is not downloaded yet so we are going to previous value for this image.
                styles[i].value = bc.core.getStyleValueFromPreviousStylesByName( styles[i].name );
              }
            }
          }
        }

        if( needToDownload ) {
          bc.device.requestDownload( (bc.SERVER_URL + styles[i].value), (bc.SERVER_URL + styles[i].value), undefined, undefined, { returnURLOfResourceInWorkshop: true } );
          styles[i].value = bc.core.getStyleValueFromPreviousStylesByName( styles[i].name );
        }
      }
      bc.core.applyActualStyles( styles );
    });

  };

  /**
   * Applies the styles that are set in the Brightcove App Cloud Studio to the elements.
   *
   * @param styles A JSON object representing the styles for this view.  This object is passed as a data
   * parameter to the <code>newconfigurations</code> event fired on the bc object.
   *
   @example
   $( bc ).on( newconfigurations, function( evt, data ) {
     bc.core.applyStyles( data.styles ); //The new styles, such as background colors, are now applied.
   });
   */
  bc.core.applyStyles = function( styles ) {
    var haveDownloadedImages = false;
    styles = styles || bc.core.getStyles();

    //Check to see if we have any downloaded background images
    if( bc.context.isNative ) {
      for( var i = 0, len = styles.length; i < len; i++ ) {
        if( styles[i].attribute === "background-image" && styles[i].value !== "" && styles[i].value.substring(0,6) === "/files" ) {
          haveDownloadedImages = true;
          break;
        }
      }
    }

    if( haveDownloadedImages ) {
      bc.core.normalizeStylesForBackgroundImages( styles );
    } else {
      bc.core.applyActualStyles( styles );
    }

  };

  /**
   * @private
   */
  bc.core.applyActualStyles = function( styles ) {
    var $styleElement,
        cssString = "";

    if( styles === null || styles === undefined ) {
      return;
    }

    for( i = 0, len = styles.length; i < len; i++ ) {
      if( styles[i].value !== "" ) {
        //We are setting the !important tag in order to override any specificity issues since we know this is the style we want.
        if( styles[i].attribute === "background-image" && styles[i].value.substring(0,4) !== "url(" ) {
          cssString += "." + styles[i].name + " { " + styles[i].attribute + ": url(" + styles[i].value + ") !important; } \n";
        } else {
          cssString += "." + styles[i].name + " { " + styles[i].attribute + ":" + styles[i].value + " !important; } \n";
        }
      }
    }

    //persist this file for next startup
    bc.core.cache( bc.viewID + "_current_styles", styles );

    //Remove any existing stylesheets we have injected
    $( ".injected-style" ).remove();

    $( "<style>" ).attr( "type", "text/css" )
                  .addClass("injected-style" )
                  .html( cssString )
                  .appendTo( "head" );
  };

  /**
   * Retrieves a specific style.  First looks to the cache to get the value, then to the manifest, and if not found in either of those
   * places, it will return an empty object.
   *
   *@param nameOfStyle The name of the style to retrieved.  (This name should correspond to the name in the manifest file.)
   *@return An object that has the CSS class name and the value.
   *@example
   var backgroundStyle = bc.core.getStyle( "background-page-color" ); //background-page-color is the name of the style defined in the manifest file.
   alert( backgroundStyle.cssClass ); //alerts "background-color"
   alert( backgroundStyle.value ); //alerts the value set by the server, for example "#FF00000"
   */
  bc.core.getStyle = function( nameOfStyle) {
    return findValueInObject( bc.core.getStyles(), nameOfStyle );
  };

  /**
   * Retrieves the settings from the cache for the current view.
   *
   * @return An object that contains the settings for this particular view or an empty object if no settings are found.
   * @example
   // Settings is an object.
   var setting = bc.core.getSettings();
   if( bc.core.getSetting( "numberOfColumns" ) > 2 ) {
     //render grid layout.
   }
   */
  bc.core.getSettings = function() {
    var settings,
        viewSettings = bc.core.cache( bc.viewID + "_settings" ),
        globalSettings = bc.core.cache( bc.appID + "_global_configs" ) || {};

    settings = bc.utils.merge( globalSettings.settings, viewSettings );

    if( settings.length === 0 && bc.configurations && bc.configurations.settings ) {
      settings = bc.configurations.settings;
    }

    return settings || [];
  };

  /**
   * bc.core.getSetting is a helper function to get the value of a particular setting.  The reason this is
   * helpful is that the settings for a view are stored as an Array.
   * @param nameOfSetting The name of the setting to get the value for. This should correspond to the name provided in
   * the <code>manifest.json</code> file.
   * @example
   var title = bc.core.getSetting( "titleOfPage" );
   alert( "The title of the page that was defined in the manifest.json and set in the Studio: " + title );
   */
  bc.core.getSetting = function( nameOfSetting ) {
    return findValueInObject( bc.core.getSettings(), nameOfSetting ).value;
  };

  /**
   * <b>Deprecated:</b> use <code>bc.core.getData</code> instead.
   */
  bc.core.fetchContentFeed = function( id, successCallback, errorCallback, options ) {
    var url = bc.SERVER_URL + "/content/" + id + "/fetch";

    $.ajax( { url: url,
              timeout: 30000,
              dataType: "jsonp",
              data: ( options ) ? { "query_params": options } : ""
            }
          ).success( successCallback )
           .error( errorCallback );
  };

  /** @private */
  bc.core.refreshConfigurationsForView = function() {
    //If we are in development mode we should not make this request, as we do not have valid IDs.
    if( bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
      return;
    }
    var url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/configurations.json";

    $.ajax(
      {
        url: url,
        dataType: "jsonp",
        data: { "os": bc.context.os }
      }
    ).success( bc.core.configurationsForViewSuccessHandler );
  };

  /**
   * @private
   */
  bc.core.configurationsForViewSuccessHandler = function( data ) {
    var newSettings,
        newStyles,
        newConfigurations,
        newGlobalConfigs,
        globalConfigs = data.global || {};

    newGlobalConfigs = storeGlobalConfigs( globalConfigs );
    newSettings = storeSettings( data.settings );
    newStyles = storeStyles( data.styles );

    if( newSettings || newStyles || newGlobalConfigs ) {
      newConfigurations = {
        "settings": {
          "isNew": ( newSettings || newGlobalConfigs ),
          "values": bc.utils.merge( globalConfigs.settings, data.settings )
        },
        "styles": {
          "isNew": ( newStyles || newGlobalConfigs ),
          "values": bc.utils.merge( globalConfigs.styles, data.styles )
        }
      };
      bc.core.applyStyles();
      $( bc ).trigger( "newconfigurations", newConfigurations );

      //If we are in preview mode then we want to refresh the page.
      if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
        bc.core.forceUpdate( newConfigurations );
      }
    } else {
      //Trigger an event to the studio so they know we are set.
      if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
        $( bc ).trigger( "preview:ready" );
      }
    }
    storeAdConfigurations( data.ads );
  };

  /**
   * @private
   */
  bc.core.forceUpdate = function( configs ) {
    if( configs.styles.isNew && !configs.settings.isNew ) {
      bc.core.applyStyles();
    } else {
      window.location.reload();
    }
  };

  /**
   * Checks to see whether or not we are in preview mode. (In the App Cloud Studio).
   *
   * @private
   * @return A boolean indicating whether or not we are in preview mode.
   */
  bc.core.isPreview = function() {
    return ( window.location !== window.parent.location ) ? true : false;
  };

  /**
   * Creates a new label label for this particular user to be used with push notifications.  For example a user may want to only receive push notifications
   * when there is a breaking news article about unicorns.  (It could happen)  In that scenario the app developer would call the bc.core.createLabel API to
   * specify that this user wants to know when there are breaking stories about unicorns.
   * @example
   * bc.core.createLabel( "unicorn" );
   * @param label A string that represents the label that should be created on the server.
   * @param successCallback The function to be called once the label is successfully created.
   * @param errorCallback The function to be called if there is an error creating this label.
   */
  bc.core.createLabel = function( label, successCallback, errorCallback ) {

    function sendRequest() {
      $.ajax(
        {
          url: bc.API_SERVER_URL + "/apps/" + bc.appID + "/installs/" + bc.context.installID + "/labels",
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({
            "label": label
          }),
          type: "POST",
          success: successCallback,
          error: errorCallback
        }
      );
    }

    if( bc.context.installID ) {
      sendRequest();
      return;
    }

    //The first time this is called we need to get the installID from the container
    bc.device.getInstallID(
      function settingInstallID( id ) {
        bc.context.installID = id;
        sendRequest();
      },
      errorCallback
    );

  };

  /**
   * Removes a label for this device.  For example if a user had originally created a label, so that they would notified any time there was breaking news about
   * unicorns, but they no longer interested in unicorns. (I know outrageous, we are just providing and example here.)  In this scenario the app developer would
   * call bc.core.removeLabel and pass in the label to removed, in this case 'unicorn'.
   * @example
   * bc.core.removeLabel( "unicorn" );
   * @param label A string that represents the label to be removed.
   * @param successCallback A function to be called upon success of removing the label.
   * @param errorCallback A function to be called if there is an error removing the label.
   */
  bc.core.removeLabel = function( label, successCallback, errorCallback ) {

    function sendRequest() {
      $.ajax(
        {
          url: bc.API_SERVER_URL + "/apps/" + bc.appID + "/installs/" + bc.context.installID + "/labels/" + label,
          type: "DELETE",
          success: successCallback,
          error: errorCallback
        }
      );
    }


    if( bc.context.installID ) {
      sendRequest();
      return;
    }

    //The first time this is called we need to get the installID from the container
    bc.device.getInstallID(
      function settingInstallID( id ) {
        bc.context.installID = id;
        sendRequest();
      },
      errorCallback
    );

  };

/**
 * Public Events
 */
/**
 * The <code>vieworientationchange</code> event is fired anytime that the view itself rotates on the device.  The
 * event will contain three properties: <code>orientation</code>, <code>width</code>, and <code>height</code>. The orientation corresponds to <code>landscape</code> or <code>portrait</code>,
 * and the <code>width</code> and <code>height</code> are the dimensions of the view in the new orientation.  This event is fired on the bc
 * object.
 *
 * @example
 * $( bc ).on( "vieworientationchange", function( evt, rslt ) {
 *   alert("I'm " + rslt.orientation);
 * });
 *
 * @name vieworientationchange
 * @event
 * @memberOf bc
 * @param event (type of vieworientationchange)
 * @param result An object that contains three properties; <code>orientation</code>, <code>width</code>, and <code>height</code>.  The
 * orientation will be the new orientation of the view ['portrait' | 'landscape'].  The <code>width</code> and
 * <code>height</code> will be the width and height of the view (window) in pixels.
 */
  $( window ).on( "resize", function( evt, result ) {
    var newWidth = window.innerWidth,
        newHeight = window.innerHeight,
        orientation = ( newWidth > newHeight ) ? "landscape" : "portrait";

    if ( orientation !== bc.context.viewOrientation ) {
      bc.context.viewOrientation = orientation;
      $( bc ).trigger( "vieworientationchange", {
        "orientation": orientation,
        "width": newWidth,
        "height": newHeight
      });
    }
  });

  /**
   * The <code>init</code> event is triggered at the end of the initialization process.  When the init event is fired the following requirements have been satisfied.
   <ul>
   <li>The <code>bc.context</code> object has been initialized</li>
   <li>Any txt files specified in the markup property of the view in the manifest have been loaded, parsed and populated onto the bc.templates object</li>
   <li>Any txt files specified in locales property of the view in the manifest have been loaded and populated on the Mark.includes name space.</li>
   <li>The documentat has loaded</li>
   </ul>
   * @example
   * $( bc ).on( "init", function(evt) {
   *    alert("BC SDK is initialized.  Can access bc.context such as: "  + bc.context.vieworientation);
   * });
   * @name init
   * @event
   * @memberOf bc
   * @param event
   */
  function triggerInitEvent() {
    if( bc.context.initialized ) {
      return;
    }
    bc.context.initialized = true;
    bc.device.setViewIsReady();
    $( bc ).trigger( "init" );
    bc.core.triggerViewFocusInDevelopmentMode();
  }

  /**
   * If we are developing in the browser then we want the viewfocus event to fire.
   * @private
   */
   bc.core.triggerViewFocusInDevelopmentMode = function() {
     if( !bc.context.isNative && bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
       $( bc ).trigger( "viewfocus" );
     }
   };

  /**
   * The <code>viewfocus</code> event is triggered when a view gains focus.  Note that this will fire after the init event.
   *
   * @example
   * $( bc ).on( "viewfocus", function( evt ) {
   *    alert( "I am the view that is currently in focus.")
   * });
   * @name viewfocus
   * @event
   * @memberOf bc
   * @param event (type of viewfocus )
   */

   /**
    * The <code>viewblur</code> event is triggered when a view loses focus, meaning that the user has switched to a different view.  When the app is closed, it does trigger a <code>viewblur</code> event.
    *
    * @example
    * $( bc ).on( "viewblur", function( evt ) {
    *    alert( "I am no longer in focus.")
    * });
    * @name viewblur
    * @event
    * @memberOf bc
    * @param event (type of viewblur)
    */

  /**
   * The <code>pushnotification</code> event is triggered on the bc object when a new push notification has been received for this application.  If the app is already running, no pop up notification is shown to the user and a pushnotification event is triggered on the currently
   * visible view with the "appLaunched" property set to false.  If the app is not running then a pop up notification is shown to the user; if the user interacts with the pop up, then the app is launched and an event is triggered on the first view with the "appLaunched" property
   * set to true.  If the app is running in the background then a pop up notification is shown to the user; if the user interacts with the pop up, then the app is launched and an event is triggered on the currently visible view with the "appLaunched" property set to true.  Note
   * that if the push notificaiton pop up is shown to the user and the user dismisses the notification the event is never fired within the app.
   *
   * @example
   * $( bc ).on( "pushnotification", function( evt, data ) {
   *   alert( "Push Message: " + data.message );
   *   alert( "App Launched because of push notification: " + data.appLaunched );
   *   alert( "Key value pairs for this push notification: " + data.params );
   * });
   * @name pushnotification
   * @event
   * @memberOf bc
   * @param event (type of pushnotification)
   * @param data An object that has the properies of "message", "appLaunched" and "params".  Params is an object that contains the key/value pairs specified in the App Cloud studio for this push notification event.
   */

  /**
   * The <code>newconfigurations</code> event is triggered when a configuration (styles or settings), is retrieved from the server.
   * The App Cloud SDK checks the server for new configurations whenever the view gains focus.  If <code>newconfigurations</code> are found,
   * then the event is triggered on the bc object and passed configurations as an object that has the values and a property indicating
   * whether or not those values are new.
   *
   * @example
   $( bc ).on( "newconfigurations ", handleNewConfigurations );

   //Possible values for data are:  {
   //   "settings": {
   //     "isNew": boolean,
   //     "values": data.settings
   //   },
   //   "styles": {
   //     "isNew": boolean,
   //     "values": data.styles
   //   }
   function handleNewConfigurations( evt, data ) {
      if( data.styles.isNew ) {
        bc.core.applyStyles();
      }
   }
   * @name newconfigurations
   * @event
   * @memberOf bc
   */

 /**
  * The <code>downloadprogress</code> is triggered on the bc object at the interval specified in the options passed to the <code>bc.device.requestDownload</code> API.
  * <b>Note</b> this only applies to iOS and by default no downloadprogress events will be fired.  Progress events should be used only for displaying progress to the
  * user or other helpful messaging, and not for important business logic decisions in template source code.  The data object that is passed to any registered function
  * will have the following properties:
  <ul>
    <li>progress (number) The amount of bytes received.</li>
    <li>expected (number) The total bytes expected for this download.</li>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API.
  </ul>
  *
  * @example
  $( bc ).on( "downloadprogress", handleDownloadProgress );

  function handleDownloadProgress( evt, data ) {
    var percentComplete = data.progress / data.expected;

    //Get the percentage out of a hundered and make it a whole number.
    percentComplete = Math.floor( percentComplete * 100 ) + "%";

    //In this example I assume I have an element that represents a progress indicator, so I am going to set the width of that element.
    $( "#progress" ).css( "width", percentComplete )

  }
  * @name downloadprogress
  * @event
  * @memberOf bc
  */

  /**
   * The <code>downloadcomplete</code> event is dispatched by the container if the download finishes successfully, as the request
   * moves into the "complete" state. The payload to this event is an object containing a single property, "info", whose
   * value is an object with the following properties:
   *
   <ul>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>state (String) The current state of the download request. For this event it will always be "complete".</li>
    <li>size (Number) The file size of the downloaded data in bytes</li>
    <li>fileURI (String) The path to the file on disk.</li>
  </ul>
  *
  * @example
  $( bc ).on( "downloadcomplete", handleDownloadComplete );

  function handleDownloadComplete( evt, data ) {
    var videoFile = data.info.fileURI;

    //Assume there is a video tag element already on the page with and ID of video.
    $( "video" ).attr( "src", videoFile );
  }
  *
  * @name downloadcomplete
  * @event
  * @memberOf bc
  */

  /**
   * The <code>downloaderror</code> event is dispatched by the container if there is an error downloading the requested resource.  The
   * payload to this event is an object containing a single property, "info", whose value is an object with the following properties:
   <ul>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>state (String) The current state of the download request. For this event it will always be "errored".</li>
   </ul>
   *
   * @example
   $( bc ).on( "downloaderror", handleDownloadError );

   function handleDownloadError( evt, error ) {
     console.error( "There was an error downloading " + error.resource );
   }

   * @name downloaderror
   * @event
   * @memberOf bc
   */

  /**
   * End Events
   */

   $( bc ).on( "sessionstart", function( evt ) {
     if( !bc.metrics ) {
       console.log( "bc.metrics is not defined" );
       return;
     }

     //If we are starting this session from a push notification we want to add that our metrics object.
     if( window.bc_notificationID ) {
       bc.metrics.addNotificationID( window.bc_notificationID );
     }
     bc.metrics.track( "session" );
   });

   $( bc ).on( "sessionend", function( evt ) {
     window.bc_notificationID = undefined;
     bc.metrics.removeNotificationID();
   });

  /*
   * Initialize the metrics object and triggers events for install and session start where appropriate.
   */
  $( bc ).on( "init", function() {
    var initData;
    //If we are in the Studio, development mode or running in the workshop, we should not trigger events.
    if( bc.core.current_mode !== bc.core.mode.PRODUCTION || bc.utils.runningInWorkShop() ) {
      return;
    }
    //Initialize the metrics object
    if( bc.metrics !== undefined ) {
      initData = {
        "account": bc.accountID,
        "application": bc.appID,
        "view": bc.viewID,
        "os": bc.context.os
      };

      if( window.bc_notificationID ) {
        initData.message = window.bc_notificationID;
      }

      bc.metrics.init( {
          "domain": "appcloud",
          "uri": bc.METRICS_SERVER_URL,
          "interval": "5000",
          "pendingMetrics": bc.core.cache( bc.viewID + "_pendingEvents" )
        }, initData
      );
    }

    //Check for flag to send install event.
    if( window.bc_firstRun && bc.metrics ) {
      bc.metrics.track( "installation" );
    }

    //If the viewfocus event has already fired we need to now start tracking.
    if( window.bc_viewFocus && bc.metrics ) {
      bc.sessionEndCallback = bc.metrics.live( "view" );
    }
  });

  $( bc ).on( "viewfocus", function() {
    //Should get the most recent settings and styles for this view.
    bc.core.refreshConfigurationsForView();

    if( bc.metrics && bc.metrics.isInitialized() ) {
      if( window.bc_notificationID ) {
        bc.metrics.addNotificationID( window.bc_notificationID );
      } else {
        bc.metrics.removeNotificationID();
      }
      bc.sessionEndCallback = bc.metrics.live( "view" );
    } else {
      window.bc_viewFocus = true;
    }
  });

  $( bc ).on( "viewblur", function() {
    if( typeof( bc.sessionEndCallback ) === "function" ) {
      bc.sessionEndCallback();
    }
  });

  //Listen for the event to store pending events.
  $( bc ).on( "metrics:pendingevents", function( evt, data ) {
    bc.core.cache( bc.viewID + "_pendingEvents", data.events );
  });

  /**
   * Set up our context object with any values that can be bootstrapped.
   */
  function initContextObject() {
    bc.context.viewOrientation = ( window.innerWidth > window.innerHeight ) ? "landscape" : "portrait";
    bc.context.os = ( navigator.userAgent.indexOf( "Mac OS X" ) > -1 ) ? "ios" : "android";
    bc.context.onLine = navigator.onLine;
    bc.core.setMoreNavigationState();
    if( bc.device !== undefined ) {
      bc.device.setIsNative();
    }

    //If we are in preview mode, we set a flag so that the Studio knows that we will trigger a preview:ready event after we have finished refreshing the page.
    if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
      bc.context.triggersPreviewReady = true;
    }
  }


  /** @private */
  bc.core.loadMarkUp = function() {
    if( !bc.configurations || !bc.configurations.markup ) {
      _markupLoaded = true;
      return;
    }

    function success( txt ) {
      bc.templates = bc.templates || {};
      //Parse the template and call triggerInit
      txt = txt.split("=====").splice(1);

      for (var t in txt) {
          var i = txt[t].indexOf("\n");
          var key = txt[t].substr(0, i).trim();
          var val = txt[t].substr(i).trim();
          bc.templates[key] = val;
      }
      _markupLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }

    function error() {
      console.error( "There was an error loading the markup text file from: " + bc.configurations.markup + " Continuing the loading of webview without markup." );
      _markupLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }

    $.ajax( {
      url: bc.configurations.markup,
      success: success,
      error: error
    });
  };

  /** @private */
  bc.core.loadLocales = function() {
    if( !bc.configurations || !bc.configurations.locales ) {
      _localeResourceFileLoaded = true;
      return;
    }

    function success( txt ) {
      var s, t;
      txt = txt.split("\n");
      for ( t in txt ) {
        s = txt[t].trim();
        if ( !s.length || s.charAt(0) === "#" ) {
          continue;
        }
        s = s.split("=");
        if( s.length > 1 ) {
          Mark.includes[s[0].trim()] = s[1].trim();
        }
      }
      _localeResourceFileLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }

    function error() {
      console.error( "There was an error loading the locale text file from: " + bc.configurations.locales + " Continuing the loading of webview without locales." );
      _localeResourceFileLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }

    $.ajax( {
      url: bc.configurations.locales,
      success: success,
      error: error
    });
  };

  /**
   * @private
   */
  bc.core.setMoreNavigationState = function() {
    var cachedValue = bc.core.cache( bc.viewID + "_moreNavigationView" );
    if( cachedValue === null ) {
      bc.context.moreNavigationView = window.bc_moreNavigationView === true;
      bc.core.cache( bc.viewID + "_moreNavigationView", bc.context.moreNavigationView );
    } else {
      bc.context.moreNavigationView = cachedValue;
    }
  };

  /**
   * @private
   */
  bc.core.loadConfigurationsFromManifest = function() {
    var $manifest;

    if( window.bc_configurations !== undefined && window.bc_configurations.views !== undefined) {
      bc.core.cache( bc.appID + "_configurations", window.bc_configurations );
      bc.core.setConfiguration( window.bc_configurations, true );
    } else {
     //check the cache to see if we have existing configurations.
     bc.configurations = bc.core.cache( bc.viewID + "_configurations" );
     bc.manifestURI = bc.core.cache( "manifest_uri" );
     if( bc.configurations === null ) {
       $manifest = $( '[name="bc-manifest"]' );
       if( $manifest.length > 0 ) {
         bc.core.loadManifestFromMetaTag( $manifest );
       } else {
         bc.core.loadManifestViaAjax( 0 );
       }
     }
    }
  };

  /**
   * @private
   */
  bc.core.loadManifestFromMetaTag = function( $elem ) {
    bc.manifestURI = $elem.attr( "content" );
    $.ajax(
      {
        "url": bc.manifestURI,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function()
      {
        console.error( "ERROR: Loading manifest.json from: " + bc.manifestURI );
      }
    );
  };

  /**
   * @private
   */
  bc.core.loadManifestViaAjax = function( index ) {
    var directories;

    index++;
    directories = location.href.split( "/" );

    if( index === ( directories.length - 1 ) ) {
      console.error( "ERROR: Did not find a manifest.json file." );
      return;
    }

    bc.manifestURI = directories.slice( 0, directories.length - index )
                      .join( "/" )
                      .concat( "/manifest.json" );
    $.ajax(
      {
        "url": bc.manifestURI,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function()
      {
        bc.core.loadManifestViaAjax( index );
      }
    );
  };

  /**
   * @private
   */
  bc.core.setConfiguration = function( manifest, cache ) {
    var views,
        globalConfigs = {},
        viewURI;

    bc.configurations = {};

    manifest = ( typeof manifest === "string" ) ? JSON.parse( manifest ) : manifest;
    cache = ( typeof cache === "boolean") ? cache : false;

    if( manifest.global ) {
      globalConfigs = manifest.global;
    }

    views = manifest.views;
    for( var i = 0, len = views.length; i < len; i++ ) {
      viewURI = ( views[i].uri.indexOf( "./" ) > -1 ) ? views[i].uri.split( "./" )[1] : views[i].uri;
      if( location.href.toLowerCase().indexOf( viewURI.toLowerCase() )  > -1 ) {
        //We load the locale and markup files from the HTML file so we need to know how many directories to go up to make the correct request.
        bc.configurations.styles = ( globalConfigs && globalConfigs.styles ) ? bc.utils.merge( globalConfigs.styles, views[i].styles ) : views[i].styles;
        bc.configurations.data = ( globalConfigs && globalConfigs.data ) ? bc.utils.merge( globalConfigs.data, views[i].data ) : views[i].data;
        bc.configurations.settings = ( globalConfigs && globalConfigs.settings ) ? bc.utils.merge( globalConfigs.settings, views[i].settings ) : views[i].settings;
        bc.configurations.markup = bc.core.setCorrectPathForResourceFile( viewURI, views[i].markup );
        bc.configurations.locales = bc.core.setCorrectPathForResourceFile( viewURI, views[i].locales );

        if( cache ) {
          bc.core.cache( bc.viewID + "_configurations", bc.configurations );
          bc.core.cache( "manifest_uri", bc.manifestURI );
        }
        return;
      }
    }

  };

  /** @private */
  bc.core.setCorrectPathForResourceFile = function( viewURI, path ) {
    var directoryDepth,
        dir = "";

    if( path === undefined ) {
      return "";
    }

    viewURI = ( viewURI.indexOf( "./" ) > -1 ) ? viewURI.split( "./" )[1] : viewURI;

    //Since the manifest.json file has to be at the root, if the files are located a directory up from here we assume the template author knows exactly where it is, so we return it untouched.
    if( path.indexOf( "../" ) > -1 ) {
      return path;
    }

    directoryDepth = viewURI.split( "/" ).length - 1;
    path = ( path.indexOf( "./" ) > -1 ) ? path.split( "./" )[1] : path;

    for( var i=0; i < directoryDepth; i++ ) {
      dir += "../";
    }
    return dir + path;
  };

  $( document ).ready( function() {
    setGlobalIDValues();
    initContextObject();
    bc.core.applyStyles();
    bc.core.loadConfigurationsFromManifest();
    setAdPolicy();
    bc.currentGlobalConfigs = bc.core.cache( bc.appID + "_global_configs" );
    bc.core.loadMarkUp();
    bc.core.loadLocales();
    if( _markupLoaded && _localeResourceFileLoaded ) {
      triggerInitEvent();
    }
  });

} )( bc.lib.jQuery );

/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
* Brightcove Utils is a collection of helper functions.
* @namespace
*/
bc.utils = {};

( function( $, undefined ) {
  var _supportsTouch;

  /**
   * Set this property to either true or false to turn logging to the console on or off, defaults to true.
   */
  bc.utils.debug = true;

  /**
   * Detects whether or not this particular device supports touch events.
   *
   * @return A boolean indicating whether or not touch events are currently supported.
   * @example
    if ( bc.utils.hasTouchSupport() ) {
      alert("I support touch!");
    } else {
      alert("Touch is not supported.");
    }
   */
   bc.utils.hasTouchSupport = function() {

     if( _supportsTouch !== undefined ) {
       return _supportsTouch;
     }

     _supportsTouch = "ontouchend" in document;
     return _supportsTouch;
   };

  /**
   * Returns a number from a string that is passed in.  If the string ends in 'px' (for pixels), then it is stripped off and that
   * number is returned.  If a number cannot be parsed out, 0 is returned.
   *
   * @param number The string representation of a number that can end with a 'px'.
   * @returns Returns the a number for the string that is passed in.
   @example
   $( ".page" ).css( "top", "50px" );
   var top = bc.utils.getNum( $( ".page" ).css( "top" ) ); //top is 50.
   */

  bc.utils.getNum = function( number ) {
    var ret;
    if( typeof( number ) === "number" ) {
      return number;
    }

    ret = ( number.indexOf( "px" ) > -1 ) ? parseInt( number.substring( 0, number.indexOf( "px" ) ), 10 ) : parseInt( number, 10 );
    return (ret) ? ret : 0;
  };

  /**
   * Converts a number from hex to RGB.
   *
   * @param hex A number in a hexadecimal format.  For example #ffffff.  (Either ffffff or #ffffff can be passed in.)
   * @returns The RGB value for the hexadecimal value passed in.
   @example
   var rgb = bc.utils.hexToRGB( "#ffffff" ); //rbg is now { "red": 255, "green": 255, "blue": 255 }
   */
  bc.utils.hexToRGB = function( hex ) {
    var red,
        green,
        blue;
    if( !hex ) {
      return;
    }

    if( hex.indexOf( "#" ) > -1 ) {
      hex = hex.replace( "#", "0x");
    }

    try {
      red = ( hex & 0xff0000 ) >> 16;
      green = ( hex & 0x00ff00 ) >> 8;
      blue = hex & 0x0000ff;

      return { "red": red, "green": green, "blue": blue };
    } catch (e) {
      bc.utils.warn( "Bad value passed into hexToRGB of: " + hex + ".  Threw error of: " + e.toString() );
    }
  };

  /**
   * Returns the WebKitCSSMatrix for this element or generates a new one if one does not exist.
   *
   * @private
   * @param node - The element to get or create the WebkitCSSMatrix from.
   * @return - A WebKitCSSMatrix for this element.
   */
  bc.utils.getMatrixFromNode = function( node ) {
    if( window.getComputedStyle( node ).webkitTransform === "none" ) {
      return new WebKitCSSMatrix();
    } else {
      return new WebKitCSSMatrix( window.getComputedStyle( node ).webkitTransform );
    }
  };

  /**
   * Returns the number of properties in a given object.
   *
   * @param obj The object to inspect.
   * @return The number of properties in the object.
   * @example
   var testObj = { "quiver": "cobras", "raft": "otters" };
   var length = bc.utils.numberOfProperties( testObj ); // length is equal to 2
   */
  bc.utils.numberOfProperties = function( obj ) {
    var count = 0;
    for( var prop in obj ) {
      if( obj.hasOwnProperty( prop ) ) {
        ++count;
      }
    }

    return count;
  };

  /**
   * Unescapes HTML from the given string.  This is handy if data returned to you that has escaped HTML in it that you now want
   * to render.
   *
   * @param htmlString The string that contains escaped HTML.
   * @return A string with the HTML tags unescaped.
   @example
   var escapedHTML = "&amp;lt;h1&amp;gt;hello there avid reader&amp;lt;/h1&amp;gt;"
   var html = bc.util.unescapeHTML( escapedHTML ); //html is now &lt;h1&gt;hello there avid reader&lt;/h1&gt;
   */
  bc.utils.unescapeHTML = function( htmlString ) {
    return $( "<div>" ).html( htmlString ).text();
  };

  /**
   * Determines how many hours have passed since the date passed in and returns the results in as formatted string.
   * @private
   * @param pastDate - A JavaScript Date object representing the starting time that the calculation should be determined from.
   * @results - A String specifying how many hours, days, weeks or months have passed since the date passed in.
   */
  bc.utils.hoursAgoInWords = function( pastDate ){
    var now = new Date(),
        hoursAgo = Math.floor( ( ( now.getTime() - pastDate.getTime()) / 3600000) );
    if( hoursAgo === 0 ) {
      var minutesAgo = Math.floor( ( now.getTime() - pastDate.getTime() ) / 60000) ;
      return minutesAgo + " minute" + ( minutesAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 24 ) {
      return hoursAgo + " hour" + ( hoursAgo > 1 ? "s" : "" ) + " ago";
    } else if(hoursAgo < 168) {
      var daysAgo = Math.floor( hoursAgo / 24 );
      return daysAgo + " day" + ( daysAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 744 ) {
      var weeksAgo = Math.floor( hoursAgo / 168 );
      return  weeksAgo + " week" + ( weeksAgo > 1 ? "s" : "" ) + " ago";
    } else {
      var monthsAgo = Math.floor( hoursAgo / 744 );
      return monthsAgo + " month" + ( monthsAgo > 1 ? "s" : "" ) + " ago";
    }
  };

  /**
   * Removes any tags from a given string. Useful for removing any HTML tags from a string.
   *
   * @param string A String that may include HTML tags that should be removed.
   * @return A string with its HTML tags removed.
   @example
   var htmlString = "&lt;h1&gt;hello there avid reader&lt;/h1&gt;";
   var cleanString = bc.utils.stripTags( htmlString ); //cleanString is "Hello there avid reader"
   */
  bc.utils.stripTags = function(string) {
    if( string === undefined || string === null ) {
      return "";
    }
    return string.replace( /<\/?[^>]+>/gi, "" );
  };

  /**
   * Generates a unique ID.
   *
   * @return A unique number.
   * @example
   var unique = bc.utils.uniqueID(); //unique is...wait for it...yup, a unique number
   @private
   */
  bc.utils.uniqueID = function() {
    return Math.floor(new Date().getTime() * Math.random());
  };

  /**
   * Determines whether or not a string is a valid URL.  ( Regex borrowed from http://snippets.dzone.com/posts/show/452 )
   * @param url The string that should be checked to see whether or not it is valid.
   * @return A boolean indicating whether or not a string is a valid URL. True if valid.
   @example
   var valid = bc.utils.validURL( "http://www.brightcove.com" ); //valid is true.
   @private
   */
  bc.utils.validURL = function( url ) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test( url );
  };

  /**
   * @private
   */
  bc.utils.runningInWorkShop = function() {
    return ( bc.context.isNative && location.href.substring( 0, 4 ) === "http" );
  };

  /**
   * A wrapper for console.log  If debugging is turned off, then no console.log messages will logged.
   * @param message The string that is logged out.
   */
  bc.utils.log = function ( message ) {
    if( bc.utils.debug ) {
      console.log( message );
    }
  };

  /**
   * A wrapper for console.warn.  If debugging is turned off, then no console.warn messages will logged.
   * @param message The string that is logged out as a warning.
   */
  bc.utils.warn = function( message ) {
    if( bc.utils.debug ) {
      console.warn( message );
    }
  };

  /**
   * A wrapper for console.error.  If debugging is turned off, then no console.error messages will logged.
   * @param message The string that is logged out as an error.
   */
  bc.utils.error = function( message ) {
    if( bc.utils.debug ) {
      console.error( message );
    }
  };

  /**
   * Encode the following characters in a URI fragment: %, #, [ and ].
   *
   * @param message The string that is to be encoded
   */
  bc.utils.encodeFragment = function( fragment ) {
    if ( fragment === undefined ) {
      return fragment;
    }

    return fragment.replace( /%/g, '%25').replace( /#/g, '%23').replace( /\[/g, '%5B').replace( /\]/g, '%5D');
  };

  /**
   * Decode the following characters in a URI fragment: %, #, [ and ].
   *
   * $( window ).bind( "hashchange", function( evt) {
   *   var decodedHash = bc.utils.decodeFragment( location.hash );
   * });
   *
   * @param message The string that is to be decoded.  Typically, this will be a string that has been previously encoded using bc.utils.encodeFragment().
   */
  bc.utils.decodeFragment = function( fragment ) {
    if ( fragment === undefined ) {
      return fragment;
    }

    return fragment.replace( /%25/g, '%').replace( /%23/g, '#').replace( /%5B/g, '[').replace( /%5D/g, ']');
  };


  /**
   * @private
   */
  bc.utils.merge = function( globalArray, viewArray ) {
    viewArray = viewArray || [];
    var ret = viewArray,
        overriden;

    if( !globalArray ) {
      return ret;
    }

    for( var i=0, len=globalArray.length; i<len; i++ ) {
      overriden = false;

      for( var j=0, max=viewArray.length; j<max; j++ ) {
        if( globalArray[i].name === viewArray[j].name ) {
          overriden = true;
          break;
        }
      }

      if( !overriden ) {
        globalArray[i].global = true;
        ret.push( globalArray[i] );
      }

    }
    return ret;
  };

  /**
   * Compares two objects to see if they are equal.  The objects can be complex objects, meaning nested objects.
   * @param obj1 The first object to be compared.
   * @param obj2 The second object to be comapared to the first.
   * @example
   var oneObject = { "blessing": "unicorns" }
     , otherObject = { "blessing": "unicorns" };

   //returns true
   bc.utils.isEqual( oneObject, otherObject );

   //returns false
   bc.utils.isEqual( oneObject, { "army": "ants" } );

   //Returns false
   bc.utils.isEqual( oneObject, {
     "yes": {
        "complex": "I am"
     }
   });
   */
  bc.utils.isEqual = function( obj1, obj2 ) {

    if( !obj1 || !obj2 ) {
      return false;
    }

    for( var prop in obj1 ) {
      if( typeof( obj2[prop] ) == 'undefined' ) {
        return false;
      }
    }

    for( prop in obj1 ) {
      if ( obj1[prop] ) {
        switch( typeof( obj1[prop] ) ) {
          case 'object':
            if ( !bc.utils.isEqual( obj1[prop], obj2[prop] ) ) {
              return false;
            }
            break;
          case 'function':
            if ( typeof( obj2[prop] ) == "undefined" || (p != 'equals' && obj1[prop].toString() != obj2[prop].toString()) ) {
              return false;
            }
            break;
          default:
            if ( obj1[prop] != obj2[prop] ) {
              return false;
            }
        }
      } else {
        if ( obj2[prop] ) {
          return false;
        }
      }
    }

    for( prop in obj2 ) {
      if( typeof( obj1[prop]) == 'undefined' ) {
        return false;
      }
    }

    return true;
  };

})( bc.lib.jQuery );

/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
 * bc.device provides functions to interact with the native capabilities of a device.
 *
 * Note that all functions take an optional success and error handler.
 *
 * @namespace
 */
bc.device = {};

/**
 * <b>Note:</b> The functions on the bc.device.externalscreen object are only available on iOS devices
 * at this time.
 *
 * <br/><br/>bc.device.externalscreen provides functions to interact with a connected screen.  Specifically,
 * this means a connected Apple TV screen.  These functions work if the source iOS device (iPhone, iPad)
 * have mirroring turned on for a specific Apple TV.
 *
 * These functions only work on iOS devices.
 *
 * Note that all functions take an optional success and error handler.
 *
 * @namespace
 */
bc.device.externalscreen = {};

/**
 * This namespace is not used by this file directly, but rather is created here so that individual
 * Plugins don't have to check for it and create it if not present.
 *
 */
bc.plugins = {};

( function( $ ) {

 /*****************************************
  * Universal callback methodology
  ****************************************/
  var _callbackFunctionMap = {},
      _callStack = [],
      _enqueueCommands = true;

  /**
   * Possible codes returned by the error callback functions.
   *
   * @namespace
   */
  bc.device.codes = {};

  /** An error occurred. */
  bc.device.codes.GENERAL = 100;

  /** The user canceled this action. */
  bc.device.codes.USER_CANCEL = 101;

  /** The device is not running in a native container. */
  bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION = 102;

  /** The camera is not available on this device. */
  bc.device.codes.CAMERA_UNAVAILABLE = 103;

  /** Unable to fetch contents for URL via xhr request.  Possible cross domain issue? */
  bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER = 104;

  /** Missing required parameter */
  bc.device.codes.MISSING_REQUIRED_PARAMETER = 105;

  /** Invalid downloadID */
  bc.device.codes.INVALID_DOWNLOAD_ID = 106;


/**
 * Public Events
 */

/**
 * The <code>externalscreenpostmessage</code> event is fired when a message has been posted to the screen
 *
 * @example
 * $( bc ).on( "externalscreenpostmessage", function( evt, result ) {
 *    $("#message").text(result.message) ;
 * });
 *
 * @name externalscreenpostmessage
 * @event
 * @memberOf bc
 * @param event (type of externalscreenpostmessage)
 * @param result The result parameter to the event handler contains a property <i>message</i>.  This property contains the string value sent from another screen.
 */

/**
 * The <code>externalscreenvideoprogress</code> event is fired at a 1s interval.  This is fired during the playback of a video and stopped during pause/stop actions.
 *
 * @example
 * $( bc ).on( "externalscreenvideoprogress", function( evt, result ) {
 *    $("#currenttime").text( Math.floor(result.currenttime) ;
 *    $("#currenttime").text("% Complete: " + Math.floor((result.currenttime/result.totaltime)*100));
 * });
 *
 * @name externalscreenvideoprogress
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoplaying)
 * @param result The result parameter to the event handler contains two properties.  The first is <i>currenttime</i>.  This indicates the current timecode in the play of the video.  The
 * second property is the <i>totaltime</i> property.  This indicates the total duration of the video.  You can use these two numbers to determine the % of the video that has
 * been watched and the remaining amount.
 */

/**
 * The <code>externalscreenvideoend</code> event is fired when the video has completed playback.  This means that the video has reached
 * the full length of the stream and there is no more content to play.  In addition to an externalscreenvideoend event being
 * fired an externalscreenvideopaused event will also be fired.
 *
 * @example
 * $( bc ).on( "externalscreenvideoend", function( evt ) {
 *    // update to play next video automatically
 *    bc.device.externalscreen.playVideo("http://urltonext/video");
 * });
 *
 * @name externalscreenvideoend
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoend)
 */

/**
 * The <code>externalscreenvideoplaying</code> event is fired anytime that video playback begins on the external screen.  This is fired after the first frame
 * of the video has begun playing back.
 *
 * @example
 * $( bc ).on( "externalscreenvideoplaying", function( evt ) {
 *    bc.device.alert("Enjoy your video!", successHandler, errorHandler);
 * });
 *
 * @name externalscreenvideoplaying
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoplaying)
 */

/**
 * The <code>externalscreenvideostopped</code> event is fired anytime that video has stopped playback.  This occurs when the video has previously been playing and  the <i>bc.device.externalscreen.stopVideo</i>
 * is called.
 *
 * @example
 * $( bc ).on( "externalscreenvideostopped", function( evt ) {
 *    bc.device.alert("Your video has ended, watch another?", successHandler, errorHandler);
 * });
 *
 * @name externalscreenvideostopped
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideostopped)
 */

/**
 * The <code>externalscreenvideopaused</code> event is fired anytime that video playback is paused as a result of the call to <i>bc.device.externalscreen.pauseVideo</i> or the stream completes playing back.
 *
 * @example
 * $( bc ).on( "externalscreenvideopaused", function( evt ) {
*     // update play icon to show a pause
 * });
 *
 * @name externalscreenvideopaused
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideopaused)
 */

/**
 * The <code>externalscreenconnected</code> event is fired anytime that an externalscreen is connected as a result of the user turning on mirroring on their iOS device.  This typically means
 * that the user has paired their iPad/iPhone with an AppleTV and the AppleTV is mirroring what is on the iPad/iPhone.  This indicates that the
 * the externalscreen can be interacted with.  For example, the commands under bc.device.externalscreen can now be called.
 *
 * @example
 * $( bc ).on( "externalscreenconnected", function( evt ) {
 *     // AppleTV connected so I can now send a separate video stream to the AppleTV
 *     bc.device.externalscreen.playVideo("http://someurl/somepath/video.m4v", successHandler, errorHandler);
 *     // Also have ability to now change UI on iPad/iPhone to take advantage of dual screen experience
 * });
 *
 * @name externalscreenconnected
 * @event
 * @memberOf bc
 * @param event (type of externalscreenconnected)
 */

/**
 * The <code>externalscreendisconnected</code> event is fired anytime that a previously connected external screen becomes unavailable.  This may happen as a result of the user turning off
 * mirroring on their iOS device or going out of range of their Apple TV.  Once this event is fired, calls to the function under <i>bc.device.externalscreen</i> can no longer be made.
 *
 * @example
 * $( bc ).on( "externalscreendisconnected", function( evt ) {
 *    bc.device.alert("Oops, AppleTV no longer available", successHandler, errorHandler);
 * });
 *
 * @name externalscreendisconnected
 * @event
 * @memberOf bc
 * @param event (type of externalscreendisconnected)
 */

/**
 * The <code>modalwebbrowserclosed</code> event is fired anytime the modal web browser window is closed.
 *
 * @example
 * $( bc ).on( "modalwebbrowserclosed", function( evt ) {
 *    bc.device.alert("The modal web browser was closed.", successHandler, errorHandler);
 * });
 *
 * @name modalwebbrowserclosed
 * @event
 * @memberOf bc
 * @param event (type of modalwebbrowserclosed)
 */

  $( document ).ready( function() {
    //We need to inject an iFrame into the page in order to flag the container that we have commands to pull
    createIframeBridge();
  });

  /*****************************************
   * Utility functions
   ****************************************/

  function createIframeBridge() {
    return $( '<iframe id="bc-device-bridge" style="display: none;" height="0px" width="0px" frameborder="0"></iframe>' ).appendTo( "body" );
  }

  /**
   *@private
   */
  bc.device.pluginNativeCall = function (pluginURI, method, successCallback, errorCallback, args) {
      var options = {
          "uri": pluginURI,
          "method": method,
          "options": args
      } ;
      createNativeCall( successCallback, errorCallback, "Plugin", options);
  }

  function createNativeCall( successCallback, errorCallback, command, parameters ) {
    var successCallbackID,
         errorCallbackID,
         jsonCommand;

     //If this is not the current view then do not enqueue the request.
     if( !_enqueueCommands ) {
       console.warn( "This view is not currently in focus.  Commands are enqueued for the currently active view." );
       return;
     }

     if( successCallback === undefined ) {
       successCallback = function() {/*noop*/};
     }

     if( errorCallback === undefined ) {
       errorCallback = function() {/*noop*/};
     }

     if( !bc.device.isNative() ) {
       return errorCallback(
         {
           "errorCode": bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION,
           "errorMessage": command + " is not available for non native applications"
         }
       );
     }

     successCallbackID = bc.utils.uniqueID();
     errorCallbackID = bc.utils.uniqueID();

     _callbackFunctionMap[successCallbackID] = {
       "associatedCallbackID": errorCallbackID,
       "callback": successCallback
     };

     _callbackFunctionMap[errorCallbackID] = {
       "associatedCallbackID": successCallbackID,
       "callback": errorCallback
     };

     jsonCommand = {
       "command" : command,
       "successCallbackID" : successCallbackID,
       "errorCallbackID": errorCallbackID,
       "parameters" : parameters
     };

     bc.device.nativeCall( JSON.stringify( jsonCommand ) );
  }

  /*****************************************
   * Event registration
   ****************************************/

  $( bc ).on( "viewfocus", function() {
    _enqueueCommands = true;
  });

  $( bc ).on( "viewblur", function() {
    _enqueueCommands = false;
  });

  /*****************************************
   * Helper functions
   ****************************************/

  function callErrorCallback( errorCallback, errorCode, errorMessage ) {
    if( typeof errorCallback === "function" ) {
      errorCallback( {
        "errorCode": errorCode,
        "errorMessage": errorMessage
      });
    }
    console.warn( errorMessage );
  }

  /**
   * @private
   */
   bc.device.callbackHandle = function( id, data ) {
     var associatedCallbackID,
         callbackData;

     if ( data ) {
       callbackData = JSON.parse( atob( data ) );
       callbackData = callbackData.result;
     }

     if( _callbackFunctionMap[id] ) {
       associatedCallbackID = _callbackFunctionMap[id].associatedCallbackID;
       _callbackFunctionMap[id].callback( callbackData );
       delete _callbackFunctionMap[id];
       if ( associatedCallbackID ) {
         delete _callbackFunctionMap[associatedCallbackID];
       }
     } else {
       bc.utils.error( "The ID passed by the native container is not in the queue." );
     }
   };

 /*****************************************
  * Native APIs
  ****************************************/

  /**
   * @private
   */
  bc.device.registerListeners = function() {
    var hrefNoHash = window.location.href;

    $( window ).on( "hashchange", function() {
      if ( !bc.device.isNative() ) {
        return;
      }
      else {
        hrefNoHash = hrefNoHash.indexOf( "#" ) != -1 ? hrefNoHash.substring( 0, hrefNoHash.indexOf( "#" ) ) : hrefNoHash;

        bc.device.navigateToView( hrefNoHash,
                                  null,
                                  null,
                                  { fragmentID: window.location.hash } );
      }
    });
  };


 /**
  * Deprecated - Should use the bc.context.isNative property.  Determine whether we are running as a native application or as a web site.  If true, we are
  * running as a native iPhone, Android  or other application.
  *
  * @return A boolean representing whether or not this is running as a native application.
  * @example
  *   if ( bc.device.isNative() ) {
         bc.device.takePhoto();
       } else {
         alert("No camera available when in a browser.");
       }
   }
   @private
  */
  bc.device.isNative = function() {
    if( bc.context !== undefined && bc.context.isNative !== undefined ) {
      return bc.context.isNative;
    } else {
      return bc.device.setIsNative();
    }
  };

  /**
   * Tells the container that it is now safe to communicate with the view.
   * @private
   */
  bc.device.setViewIsReady = function() {
    createNativeCall( undefined, undefined, "SetViewIsReady", { version: bc.context.version } );
    bc.device.registerListeners();
  };

  /**
   * @private
   */
  bc.device.setIsNative = function() {
     var cachedValue = bc.core.cache( "isNative" );

     //Need to make sure that the context object is available.
     if( bc.context === undefined ) {
       bc.context = {};
     }
     //Our first time visiting this page.
     if( cachedValue === null ) {
       bc.context.isNative = window.bc_isNative === true;
       bc.core.cache( "isNative", bc.context.isNative );
     } else {
       bc.context.isNative = cachedValue;
     }
     return bc.context.isNative;
   };

 /**
  * Gets the current location of the user and calls into the success handler with the results.  What is
  * returned to the success handler is an object that looks like:
  * <code>{"latitude":70.35, "longitude":40.34}</code>
  * If this API is called in a browser and the browser supports geolocation, then we will use the JavaScript API to get the user location.
  * @param successCallback A function to be called with the results of the location lookup.  This includes latitude and longitude properties, which have values that are of type float.
  * @param errorCallback An optional function that will be called if there is an error getting the location.  This callback is passed
  an object containing the property <code>errorCode</code>, which maps one of the values specified in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
  * @example

  bc.device.getLocation( function( locationInfo ) {
                          if ( locationInfo.latitude > 80 ) {
                            alert("Brrrrr...");
                          }
                        },
                        function( data ) {
                          bc.utils.warn( data.errorCode );
                        }
                      );
  */
  bc.device.getLocation = function( successCallback, errorCallback ) {
    if( !bc.context.isNative && navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( function( geolocation ) {
        successCallback( { "latitude": geolocation.coords.latitude, "longitude": geolocation.coords.longitude } );
      }, errorCallback );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetLocation" );
  };

 /**
  * Get an existing photo from the user's photo library.  When this function is called, the device will bring up the
  * photo gallery. After the user chooses an image, the success handler is called.  If you want the user to take a picture
  * with the camera instead, use the <code>takePhoto</code> function instead.  If <code>getPhoto</code> is called from
  * the browser we will call the <code>errorCallback</code> with the <code>errorCode:
  * bc.device.codes.CAMERA_UNAVAILABLE</code>.
  *
  * <p>The success callback will be called with an object whose result value is a string pointing to the local path of the image.  Here is an
  * example of that object:<br/>
  * "/a/path/to/an/image.jpg"</p>
  *
  * <b>Note:</b> When using the Workshop application, the returned path will actually be a data-uri.
  * In either case, you can set the resulting string to be the source of an image.
  *
  * @param successCallback A function to be called with the URL to the image.
  * @param errorCallback An optional function that will be called if an error is encountered, the device does not support getPhoto, or the user cancels the action.
    The <code>errorCallback</code> function is passed an object that contains a property of <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example
  bc.device.getPhoto( function( data ) {
                        //data is the path to the image on the file system.
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
                    );
  *
  */
  bc.device.getPhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetPhoto" );
  };

 /**
  * Opens the camera and allows the user to take a picture.  Once the picture has been taken, the success handler is called.
  * If you want to access an image from the photo gallery, use the <code>getPhoto</code> function instead.
  * Here is an example of what the return object will look like:<br/>
  * "/a/path/to/an/image.jpg"
  *
  * <p><b>Note:</b> When using the Workshop app, the returned path will actually be a data-uri.
  * In either case, you can set the resulting string to be the source of an image.</p>
  *
  * <p><b>Note:</b> If <code>takePhoto</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.CAMERA_UNAVAILABLE</code>.</p>
  *
  * @param successCallback The function to be called with the URL to the image the user just took with their camera.
  * @param errorCallback The function that is called if an error is encountered, the device does not support taking a picture, or the user cancels the action.
   The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example
    bc.device.takePhoto( function( data ) {
                          //my success handler
                         },
                         function( data ) {
                           if( data.errorCode === bc.device.codes.USER_CANCEL ) {
                             //Convince them not to cancel.
                           }

                         }
                      );
  */
  bc.device.takePhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "TakePhoto" );
  };

 /**
  * Checks to see if this device has a camera available.  The
  * success handler will be called with an object that looks like:
  *
  * true if the camera is available or false if it is not
  *
  * <b>Note</b>: If this is called from within a browser, we will call the success callback function and return false.
  *
  * @param successCallback The function to be called with a boolean specifying whether or not a camera is available.
  * @param errorCallback The function that is called if an error is encountered.
    The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example
    bc.device.isCameraAvailable( function( data ) {
                                   alert( "Camera available? " + data );
                                   if( data ) {
                                     alert( "Camera is available!" );
                                   } else {
                                     alert( "No camera :( ");
                                   }
                                 },
                                 function( data ) {
                                   bc.utils.warn( data.errorCode );
                                 }
                              );

  */
  bc.device.isCameraAvailable = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      successCallback( false );
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsCameraAvailable" );
  };

  /**
   * Checks to see if this device has push notifications enabled for this app.
   * The success handler will be called with an object that looks like:
   *
   * true if push notifications are enabled, or false if it is not.
   *
   * If the device does not yet know whether push notifications are enabled
   * (which is possible shortly after startup, before APNS returns a push
   * notification token to the device), the errorCallback is called.
   */
  bc.device.isPushNotificationEnabled = function( successCallback, errorCallback ) {
    if ( !bc.context.isNative || bc.utils.runningInWorkshop() ) {
        successCallback( false );
        return;
    }
    if ( bc.context.os === "android" ) {
        successCallback( true );
        return;
    }

    createNativeCall( successCallback, errorCallback, "IsPushNotificationEnabled" );
  };

  /**
   * Allows a developer to programmatically switch between views.  Just as in web development, the API allows a developer to navigate to a
   * URI and also provide a fragmentID to append to that URL.  (fragmentID is the technical term for a '#' in a URL.)  If you are using the fragmentID to pass contextual
   * data then you should simply register an event listener for the <code>hashchangeevent</code>.  An example use case would be if you had a photo on your home page, and when the
    * user clicks a photo, you open the photo view and navigate to that particular photo.
   * @param uri The URI of the view to navigate to.  This is the URI that was specified in the manifest.json file.
   * @param successCallback The callback function that is called if the view is successfully navigated to.
   * @param errorCallback The callback function that is called if the container is unable to navigate to the view.
   * @param options An options object.  We look for the fragmentID to see if the fragmentID of the URL should be set.
   *
   * @example
   //home.html
   bc.device.navigateToView( "photo.html", successCallback,
                    errorCallback, { "fragmentID": "id-of-photo" } );

   //photo.html
   $( window ).on( "hashchange", function( evt ) {
     var photoID = window.location.hash;
     //do something photoID.
   })
   */
  bc.device.navigateToView = function( uri, successCallback, errorCallback, options ) {
    if( !bc.context.isNative ) {
      if ( successCallback ) {
        successCallback();
      }
      if( bc.manifestURI ) {
        uri = bc.manifestURI.split( "manifest.json" )[0] + uri;
        window.open( uri + ( options && options.fragmentID ? "#" + bc.utils.encodeFragment( options.fragmentID ): "" ) );
      }
      return;
    } else {
      options = options || {};
      options.uri = uri;
      if( options.fragmentID ) {
        options.fragmentID = bc.utils.encodeFragment( options.fragmentID );
      }
      createNativeCall( successCallback, errorCallback, "NavigateToView", options );
    }
  };

  /**
   * Changes the active view to the 'more' menu, which is the view that appears on iOS if there are more than 5 views in the template.  This command is most often used by views that
   * fall under the "more menu" list, so that user can navigate back to the list.
   * @param successCallback The function to be called once the 'more' menu has been navigated to.
   * @param errorCallback The function to be called if there is an error.
   *
   * @example
   //The back button on a static page, such as an about page in a more section.
   $( ".back-button" ).on( "tap", function() {

     //Make sure we are in a more navigation view
     if( bc.context.moreNavigationView ) {

       //Transition back the more menu.
       bc.device.navigateToMoreMenu();
     }
   });
   */
  bc.device.navigateToMoreMenu = function( successCallback, errorCallback ) {
    if( bc.context.os !== "ios" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "bc.device.navigateToMoreMenu called from a non iOS device." );
      return;
    }
    createNativeCall( successCallback, errorCallback, "NavigateToMoreMenu" );
  };

 /**
  * Retrieves the information about the device that the application is running on.
  *
  * @example
  bc.device.getDeviceInfo( function( data ) {
                             //my success handler
                           },
                           function( data ) {
                             bc.utils.warn( data.errorCode );
                           }
                        );
   * @param successCallback The function that is called by the container once the device has been retrieved.
   * @param errorCallback The function that is called if there is an error retrieving the device info.
   The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
   * @private
  */
  bc.device.getDeviceInfo = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "GetDeviceInfo");
  };

 /**
  * Fetches the content of a given URL and returns the contents as a string. Making a call to any domain is allowed.
  *  This is useful if you need to make calls that would normally not be allowed via an AJAX
  * call because of cross-domain policy.
  * Upon success, an object will be passed to the success handler that looks like: "URL contents"
  * <p>If <code>fetchContentsOfURL</code> is called from within the browser, we will use the browser XHR object to make the request. This means that the request is now subject to cross-domain restrictions.  To circumvent
  * this during development, you can use the Chrome browser and start with web security disabled.  The windows command for this is <code>chrome.exe --disable-web-security</code> while the OSX command is
  * <code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security</code>.
  * @example
    bc.device.fetchContentsOfURL(
        'http://my.sweet.feed/blob.xml',
        function( data ) {
        //data is equal to the contents of http://my.sweet.feed/blob.xml as a string.
        },
        function( data ) {
            bc.utils.warn( data.errorCode );
        }
    );
   *

   *
   * @param url The URL that the request should be made to.
   * @param successCallback The function that is called once the contents of the URL have been fetched.  The callback is passed a string which is the contents of the URL.
   * @param errorCallback The function that is called if there is an error fetching the contents of the URL.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
     and a property named <code>errorMessage</code>, which provides additional information about this error.
  */
  bc.device.fetchContentsOfURL = function( url, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $.ajax( {
        url: url,
        success: successCallback,
        converters: {"* text": window.String,"text json": window.String, "text xml": window.String },
        error: function( err ) {
                  callErrorCallback( errorCallback, bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER, "It appears you are trying to use the fetchContentsOfURL request from within a browser.  However, there was an error fetching the contents of the URL via the browser xhr request.  Most likely this is due to a limitation of cross domain policies.  It is recommended that you use the Chrome browser and start the browser from the command line with the following command, 'chrome.exe --disable-web-security',  to circumvent this limitation during your development process.  NOTE you should only do this during development." );
                }
      });
      return;
    }

    createNativeCall( successCallback, errorCallback, "FetchContentsOfURL", { "url": url } );
  };

  /**
   * Posts data to the given URL and returns the results of this web request to the success callback function if one is passed to the request.  This is useful if you need to make a POST request that would normally not be allowed via an AJAX request
   * because of cross-domain policy.  If <code>postDataToURL</code> is called from within the browser, we will attempt to use the browser XHR object to make the request.  This means that the request is now subject to cross-domain restrictions.
   * To circumvent this during development, you can use the Chrome browser and start with web security disabled.  The windows command for this is <code>chrome.exe --disable-web-security</code> while the OSX command is
   * <code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security</code>.
   * @example
      var username = "test";
      var password = "password";
      var options = {
        data: {
          "username": username,
          "password": password
        },
        headers: {
          "Authorization": token
        }
      };

      bc.device.postDataToURL( "http://url/of/authentication/system", success, error, options );

      function success( results ) {
        if( results.status === "success" ) {
          //Handle code for logging the user in.
        } else {
          //There was an error logging the user in.
        }
      }

      function error( error ) {
        //There was an error making the request.
      }
   *
   * @param url The URL that request should be made to.
   * @param successCallback The function that is called once the POST request has been successfully made and a result returned.  The results are passed into the success callback.
   * @param errorCallback The function that is called if there was an error making this request.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
    and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @param options An object of options that specify additional properties to be sent to the server.  The options object accepts two properties of:
   <ul>
    <li>data - This is the data that will be passed to the server.  Typically another object.
    <li>headers - This allows you to specify the headers to be sent to the server.  This is useful for authentication.  If no "User-Agent" header is provided, it defaults to the value of <code>navigator.userAgent</code>.
  </ul>
   *
   */
  bc.device.postDataToURL = function( url, successCallback, errorCallback, options ) {
    var params = {};

    options = options || {};
    options.headers = options.headers || {};

    if( url === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "Missing required parameter of URL." );
      return;
    }

    if ( !bc.context.isNative ) {
      $.ajax( {
        url: url,
        type: "POST",
        data: options.data,
        headers: ( options.headers || {} ),
        success: successCallback,
        error: function( err ) {
          callErrorCallback( errorCallback, bc.device.codes.GENERAL, "It appears you are trying to use the postDataToURL request from within a browser.  However, there was an error making the requst via the browser xhr request.  Most likely this is due to a limitation of cross domain policies.  It is recommended that you use the Chrome browser and start the browser from the command line with the following command, 'chrome.exe --disable-web-security',  to circumvent this limitation during your development process.  NOTE you should only do this during development." );
        }
      });
      return;
    }

    params.url = url;

    if ( !options.headers["User-Agent"] ) {
      options.headers["User-Agent"] = navigator.userAgent;
    }

    params.headers = options.headers;

    if( options.data ) {
      params.data = options.data;
    }

    createNativeCall( successCallback, errorCallback, "PostDataToURL",  params );
  };

  /**
   * The isDownloadAvailable api allows the developer to know whether or not this device supports the ability to download files.  If the device does support file download the successCallback will be called with a boolean
   * of true, if not false will be passed to the successCallback.  In general support for file download is universally available on iOS and any Android device running 2.3 or higher.
   * @param successCallback The callback function to be called with a boolean indicating whether or not this device supports file download.
   * @param errorCallback The callback function to be called if there is an error fetching this information from the device.
   * @example
   bc.device.isDownloadAvailable( showDownloadLinks );

   function showDownloadLinks( downloadSupported ) {
     if( !downloadSupported ) {
       console.log( "Downloads are not supported on this device.  Do not update UI to show download links." );
       return;
     }

     $( ".downloadLinks" ).addClass( "show" );
   }
   */
  bc.device.isDownloadAvailable = function( successCallback, errorCallback ) {
    if( bc.context.os === "ios" ) {
      successCallback( true );
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsDownloadAvailable" );
  };

  /**
   * Allows a developer to programmatically download a file to the device.  This storage is persisted until explicity removed using the <code>bc.device.removeDownload</code>
   * API.  This is very useful, but not limited, for downloading media files such as video, audio or image files.  The success callback function is immediatly called once the device has registered the request to
   * download the files, NOT after the file has downloaded.  You can register event listeners for the <code>downloadprogress</code>, <code>downloaderror</code> and <code>downloadcomplete</code> on the bc object.
   * Below are the possible options that the requestDownload API takes.
   * <ul>
   *   <li>returnURLOfResourceInWorkshop - In the workshop we cannot access files stored on the file system, however, since the workshop cannot be run in offline mode and we realize that developers do not want to
   litter their code if statements checking if they are in the workshop we simply return the URL to the resource file when we are in the workshop.  This allows developers to use the same file path returned in
   the downloadinfo object for both apps running in the workshop and apps running in published container.  This defaults to true.</li>
       <li>progressInterval - The interval at which progress events are fired.  For example if 5 is passed in then a progress event will be fired when 5%, 10%, 15%...100% of the file has been downloaded. If 0 or an invalid value such as 101 then no progress events will be fired.  Defaults to 0.  <b>Note:</b> This event is only fired on iOS devices.</li>
       <li>showAndroidNativeProgress - A boolean specifing whether or not to show the progress indicator in the notification area on Android.  Defaults to true.</li>
       <li>downloadTitle - A title to show in the notification are on Anroid devices.</li>
    </ul>
   * @example
   var video = {
    "id": 1234567,
    "FLVURL": "http://url/to/the/mp4/file.mp4"
   };

   function success() {
     $( bc ).on( "downloadprogress", handleProgressEvent );
   }

   function error( error ) {
     //handle error
   }

   function handleProgressEvent( evt, info ) {
      //Draw progress indicator to screen.
   }

   bc.device.requestDownload( video.FLVURL, video.id.toString(), success, error, { progressInterval: 5 } );

   * @param resource The path the to the file that you would like to download, most likely a URL to the media file.
   * @param downloadID A unique ID for this particular download.  If you pass in an ID that already exists then the this file will be downloaded and will overwrite the current file with this ID.
   * @param successCallback The function that will be called once the download request has been registered by the device.
   * @param errorCallback The funciton that will be called if there is an error registering for the download.
   * @param options An object with overrides for the default options of "returnURLOfResourceInWorkshop", "progressInterval", "downloadTitle" and "showAndroidNativeProgress".
   */
  bc.device.requestDownload = function( resource, downloadID, successCallback, errorCallback, options ) {
    var settings = {
      returnURLOfResourceInWorkshop: true,
      progressInterval: 0,
      showAndroidNativeProgress: true
    };

    //Resource and uniqueID are required fields. If either are undefined we should call the error callback if exists and return.
    if( !resource || !downloadID ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "resource and downloadID are required fields for the bc.device.requestDownload API.  Not calling API as undefined was passed in for one of these values." );
      return;
    }

    if( typeof downloadID !== "string" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "downloadID must be of type string." );
      return;
    }

    $.extend( settings, options );

    settings.resource = resource;
    settings.downloadID = downloadID;
    createNativeCall( successCallback, errorCallback, "RequestDownload", settings );
  };

  /**
   * Allows a developer to retrieve information about any files that have been or are currently being downloaded to the device.  To retrieve information about a specific file or
   * files then an array of download IDs can be passed as an option.  These IDs must correspond to the uniqueID that was passed into the <code>bc.device.requestDownload</code> API.  If no downloadIDs are passed
   * in via the options then all downloads will be returned to the success handler as an array of <code>DownloadInfo</code> objects.  If <b>any</b> of the downloadIDs are invalid then
   * the error callback function is called.  The options parameter only accepts one valid property of downloadIDs, which is an array of downloadIDs.
   * @example
   function success( downloadInfoArray ) {
     //Passes in an array of download info objects.
   }

   //Called if an error occurs or an invalid ID is passed in via the downloadIDs property.
   function error( error ) {
     //Handle error
   }

   var options = { downloadIDs: [ "1234567", "7654321" ] };

   //Retrieves the DownloadInfo for the downloads with the unique ids of "1234567" and "7654321".
   bc.device.getDownloadInfo( success, error, options );

   //Retrieves all DownloadInfo objects that this app has ever downloaded and not removed.
   bc.device.getDownloadInfo( success, error );

   * @param successCallback The function that will be called with an array of <code>DownloadInfo</code> objects, which as the following properties:
    <ul>
     <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
     <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
     <li>state (String) The current state of the download request. The possible values for this are "enqueued", "downloading", "errored", and "complete".</li>
     <li>size (Number) The file size of the downloaded data in bytes</li>
     <li>fileURI (String) The path to the file on disk.</li>
   </ul>
   * @param errorCallback The function that will be called if an error occurs or any invalid ID is passed in via the downloadIDs option.
   * @param options An object that currently has one valid property of "downloadIDs" which takes a value of an array of downloadIDs.
   */
  bc.device.getDownloadInfo = function( successCallback, errorCallback, options ) {
    createNativeCall( successCallback, errorCallback, "GetDownloadInfo", options );
  };

  /**
   * Removes a previously downloaded file from the device.  If the download is currently in progress then it will cancel the download and remove any partially download of the file.  The downloadID is a required
   * parameter and must correspond to the uniqueID that was passed into the <code>bc.device.requestDownload</code>.  The successCallback will be called once the file has been successfully removed.  The errorCallback
   * function will be called if there is no file that matches the provided downloadID or there is an error removing the file.
   * @example
   var video = {
    "id": 1234567,
    "FLVURL": "http://url/to/the/mp4/file.mp4",
    "downloaded": true
   };

   function success( downloadID ) {
     //Success.  If I keep any state locally I will want to update this now.
     video.downloaded = false;
   }

   function error( error ) {
     //There was an error removing the file download.
     console.warn( "Error removing file download with ID: " + error.downloadID );
   }

   bc.device.removeDownload( video.id.toString(), success, error );

   * @param downloadID A uniqueID that represents this downloaded file.  A list of currently downloaded files can be fetched via the <code>bc.device.getDownloadInfo</code> API.
   * @param successCallback The function that will be called once the file has been successfully removed.  The downloadID of the file will be passed to this success callback function.
   * @param errorCallback The function that will be called if an error occurs trying to remove a downloaded file.  The error object will have a property of errorCode, errorMessage and downloadID.
   */
  bc.device.removeDownload = function( downloadID, successCallback, errorCallback ) {

    //Make sure a downloadID was passed in and if not log an error and call the errorCallback.
    if( downloadID === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "The downloadID is a required parameter for the removeDownload API." );
      return;
    }

    if( typeof downloadID !== "string" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "downloadID must be of type string." );
      return;
    }

    createNativeCall( successCallback, errorCallback, "RemoveDownload", { downloadID: downloadID } );
  };


  /**
   * Opens the URI in the native application of the device if it supports that URI.  For example a URI of http://www.google.com would switch to the safari
   * browser and an open up to http://www.google.com, where as a URI of mailto:john@example.com would open the native mail client.  By default App Cloud opens
   * any a href link in a modal window, however, if you would like to programmatically control the opening of a modal window you can do so by passing in a value of true
   * for the modalWebBrowser property.  The container will call the success callback once it successfully passes the URI to the device to handle or has opened the modal window, if modalWebBrowser is set to true.
   * The error callback if the native device is unable to do anything with the URI that is passed in.  For example <code>bc.device.openURI( "badrequest", success, error )</code> would call the error callback
   * because the device would not know how to handle a URI of "badrequest".
   *
   * @param uri Is a required parameter, which is the URI that should be opened.  This can be any URI that the device knows how to open, for example http://, https:// or mailto:
   * @param successCallback The function that will be called once the modal window is opened or the device has opened the URI in the native application, for example Safari on iOS.
   * @param errorCallback The function that will be called if there is an error opening the URI on the device.  The error object will have a property of errorCode and errorMessage.
   * @param options An object that currently supports one property of "modalWebBrowser" that expects a boolean value.  This defaults to false.
   * @example
   function success() {
     //Opened the URI successfully.
   }

   function error( error ) {
     console.log( "There was an error opening the URI with error code: " + error.errorCode + " and an error message of: " + error.errorMessage );
   }

   bc.device.openURI( "http://www.brightcove.com", success, error, { modalWebBrowser: false } );
   */
  bc.device.openURI = function( uri, successCallback, errorCallback, options ) {
    var settings = {
      modalWebBrowser: false
    };

    if( uri === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "The URI to open is a required parameter for the openURI API." );
      return;
    }

    if( !bc.context.isNative ) {
      window.open( uri );
      if( typeof successCallback === "function" ) {
        successCallback();
      }
      return;
    }

    $.extend( settings, options );
    settings.uri = uri;
    createNativeCall( successCallback, errorCallback, "OpenURI", settings);
  };

 /**
  * Vibrates the device if the current device supports it.
  *
  * @example
    bc.device.vibrate( function( ) {
                         //my success handler
                       },
                       function( data ) {
                         bc.utils.warn( data.errorCode );
                       }
                     );
  *
  * @param successCallback The function to be called if the phone successfully vibrates.
  * @param errorCallback The function to be called if there is an error vibrating the phone.
    The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  */
  bc.device.vibrate = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $( "body" ).addClass( "vibrate" );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      setTimeout( function() {
        $( "body" ).removeClass( "vibrate" );
      }, 1000 );
      return;
    }
    createNativeCall( successCallback, errorCallback, "Vibrate" );
  };


 /**
  * Specify which directions the application can be rotated to.  <b>Note that all of the views in a given template should allow for the device to be rotated in the same directions.  In future releases this will be enforced by the App Cloud
  * containers.</b>  The directions should be passed in as an array and can take in five different values:
  * <ul>
  * <li> <code>bc.ui.orientation.PORTRAIT</code> </li>
  * <li> <code>bc.ui.orientation.LANDSCAPE_LEFT</code> </li>
  * <li> <code>bc.ui.orientation.LANDSCAPE_RIGHT</code> </li>
  * <li> <code>bc.ui.orientation.PORTRAIT_UPSIDEDOWN</code> </li>
  * <li> <code>all</code></li>
  * </ul>
  *
  * @example
   bc.device.setAutoRotateDirections (
            [bc.ui.orientation.PORTRAIT, bc.ui.orientation.LANDSCAPE_RIGHT],
            function() {
              //my success handler
            },
            function( data ) {
               bc.utils.warn( data.errorCode );
            }
        );

  * @param direction An array of directions that the device can rotate to.  Possible values are: <code>bc.ui.orientation.PORTRAIT</code>, <code>bc.ui.orientation.LANDSCAPE_LEFT</code>, <code>bc.ui.orientation.LANDSCAPE_RIGHT</code>, <code>bc.ui.orientation.PORTRAIT_UPSIDEDOWN</code> or simply <code>all</code>.
  *
  * @param successCallback The function to be called if this registration successfully happens.
  * @param errorCallback The function to be called if there is an error.
        The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
        and a property named <code>errorMessage</code>, which provides additional information about this error.
  */
  bc.device.setAutoRotateDirections = function( directions, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "SetAutorotateOrientations", { "directions": directions.join(",") } );
  };

  /**
   * Make the application go full screen, hiding any other visible parts of the application except for the active view.  For example,
   * if running in the iOS container, this will hide the tab bar.
   *
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called.
   *
   * @param successCallback The function to be called once the application goes into full screen.
   * @param errorCallback The function to be called if there is an error going into full screen.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @param options An object with a set of optional parameters that can be passed in to control behavior.
   * <ul>
   *   <li>hideStatusBar: A boolean indicating whether on iOS devices the status bar should be hidden when going full screen. This defaults
   *    to false.
   * </ul>
   * @example
    bc.device.enterFullScreen(
                          function() {
                            alert("I'm fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          },
                          {
                            "hideStatusBar":"true"
                          }
              );
   */
  bc.device.enterFullScreen = function( successCallback, errorCallback, options ) {
    var settings = {
      "hideStatusBar": false
    };


    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }

    $.extend( settings, options );

    createNativeCall( successCallback, errorCallback, "EnterFullScreen", settings );
  };

  /**
   * Exit full screen of the application.
   *
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called.
   *
   * @param successCallback The function that is called once we have exited full screen.
   * @param errorCallback The function that is called if we hit an issue exiting full screen.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a
     property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    bc.device.exitFullScreen( function() {
                            alert("I'm not fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          }
                        );
   */
  bc.device.exitFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExitFullScreen" );
  };

  /**
   * Returns a boolean indicating whether or not the application is in full screen.  The returned
   * object is true if we are in full screen or false if not.
   *
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called passing the value of true.
   *
   * @param successCallback The function to be called with data specifying whether or not the application is in full screen mode.
   * @param errorCallback The function to be called if there is an error.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example bc.device.isFullScreen( function( data ) {
                                        if( data ) {
                                          alert( "I am in fullscreen" );
                                        } else {
                                          alert( "I am NOT in fullscreen" )
                                        }
                                     },
                                     function( data ) {
                                       bc.utils.warn( data.errorCode );
                                     }
               );
   */
  bc.device.isFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback( true );
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsFullScreen" );
  };

  /**
   * Shows an alert in a native dialog.  This is useful to use instead of a JavaScript alert function
   * call, because the JavaScript alert will show the name of the page (for example, <code>videos.html</code>) which is
   * not always desirable.  The success handler will be called after the user has dismissed the
   * alert.
   *
   * <b>Note</b>: If called from the browser, then a default JavaScript alert will be used.  The <code>successCallback</code> is then called once the alert has been interacted with.
   *
   * @param message The message to show in the native alert dialog.
   * @param successCallback The function to be called after the dialog alert has been dismissed.
   * @param errorCallback The function to be called if an error occurs.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    bc.device.alert( "Many turkeys are a rafter",
                      function() {
                        // my success handler
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
              });
   */
  bc.device.alert = function( message, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      alert( message );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "Alert", { "message": message } );
  };

  /**
   * Returns the ID for the app install
   *
   * @param successCallback The function to be called
   * @param errorCallback The function to be called if an error occurs.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>,
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    bc.device.getInstallID(
                      function() {
                        // my success handler
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
              });
   */
  bc.device.getInstallID = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "Install ID is only available from within in a device." );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetInstallID" );
  }

  /**
   *@private
   */
  bc.device.isViewShowing = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "IsViewShowing" );
  };

  /**
   *@private
   */
  bc.device.setAdPolicy = function( ad_policy, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "SetAdPolicy", ad_policy );
  };

  /**
   * Brings up a native QR scanner to read 2D QR codes.  On success, this will call the <code>successCallback</code>, passing to the function the string that is represented by
   * reflects the scanned QR code.
   *
   * <p><b>Note:</b> If <code>getQRCode</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.CAMERA_UNAVAILABLE</code>.</p>
   *
   * @param successCallback The function that is called once the QR code has been read.  The <code>successCallback</code> is passed a string that reflects the QR code.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   */
  bc.device.getQRCode = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetQRCode" );
  };

  /**
   * @private
   */
  bc.device.goBack = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "GoBack" );
  };

   /**
    * Internal API for container to fire JavaScript event
    * @private
    */
   bc.device.trigger = function( eventType, eventData ) {
     if(eventData === undefined) {
       $( bc ).trigger( eventType );
     } else {
       $( bc ).trigger( eventType, [ JSON.parse( atob( eventData ) ).result ]);
     }
   };


 /*****************************************
  * External Screen APIs
  ****************************************/

  /**
   * Given a URL to a video (encoded to H.264 as progressive download or HLS) will play the video on an externally connected screen.
   * Typically this means playing the video on an Apple TV.  In this case, the phone/tablet will continue to show whatever view is
   * currently in focus and the video will be sent to the Apple TV (externally connected screen).  If this function is called
   * with the same URL as the one that is currently loaded into the external video player, the effect is that playback continues
   * from the current timecode.  This is most useful in the circumstance where the video is currently paused.  Calling the playVideo
   * video function with the same URL would resume playback.
   *
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   * <p><b>Note:</b> This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>playVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param videoURL The URL to a video to playback.  The URL must be in a format that can playback on an iOS device.  It is strongly
   * recommended that this be an HLS encoded video.  This parameter is passed as a String.
   * @param successCallback The function that is called if the URL is successfully passed to the video player.  Note: this does not mean that playback has begun.
   * It only means that the URL has been registered with the video player.  You can listen for the "externalscreenvideoplaying" event to be fired on the bc object.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @param options An options object.  We look for the timecode which if not 0, will play the video at the given time.
   * Support for this depends on encoding of the video, as explained
   * <a href="http://developer.apple.com/library/ios/#documentation/mediaplayer/reference/MPMoviePlayerController_Class/Reference/Reference.html#//apple_ref/occ/instp/MPMoviePlayerController/initialPlaybackTime">here</a>
	@example
    $(bc).bind( "externalscreenconnected", function() {
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v", successHandler, errorHandler);
    });

    $(bc).bind( "externalscreenvideoplaying", function() {
      // update UI on iPad to give them controls to pause/stop video playing on Apple TV
    });

   */
  bc.device.externalscreen.playVideo = function( videoURL, successCallback, errorCallback, options) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.playVideo is only available in native applications" );
      return;
    }
 	options = options || {};
	options.url = videoURL;

    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoPlay", options );
  };

  /**
   * This function will pause any currently playing video on a connected Apple TV where playback was initiated by calling the
   * the <i>bc.device.externalscreen.playVideo</i> function.  If no video is currently playing, calling this function has no
   * effect.  You can resume playback of a paused video by calling <i>bc.device.externalscreen.playVideo</i> and pass in the URL
   * to the video for the currently paused video.  Calling playVideo with the same URL will resume playback from the timecode that the video
   * was paused at.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object. </p>
   *
   *<p><b>Note:</b>This API only works on iOS devices.</p>
   *
   * <p><b>Note:</b> If <code>pauseVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the video is successfully paused.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    $(bc).bind( "externalscreenconnected", function() {
      // start playing back a video
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v" );
    });

    // register a tap handler for the user hitting the pause button.  Typically, this pause button would be displayed on the iOS device
    $("#pauseButton").bind( "tap", function() {
      bc.device.externalscreen.pauseVideo( pauseSuccessHandler );
    });

    function pauseSuccessHandler() {
      // now that pause was called successfully we update the pause button control on the iPad to show the play action
    }
   */
  bc.device.externalscreen.pauseVideo = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.pauseVideo is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoPause" );
  };

  /**
   * This function will stop any currently playing video on a connected Apple TV where playback was initiated by calling the
   * the <i>bc.device.externalscreen.playVideo</i> function.  When this function is called the timecode of the video is set
   * back to 0.  Calling playVideo would start the video over from the beginning.  If you only want to pause the video then call
   * <i>bc.device.externalscreen.pauseVideo</i>.  This function is most frequently used when you want to stop playback of a video
   * and let a user choose a new video to playback.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>stopVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the video is successfully stopped.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    $(bc).bind( "externalscreenconnected", function() {
      // start playing back a video
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v", successHandler, errorHandler);
    });

    // register a tap handler for the user hitting the stop button.  Typically, this stop button would be displayed on the iOS device
    $("#stopButton").bind( "tap", function() {
      bc.device.externalscreen.stopVideo( stopSuccessHandler, stopErrorHandler );
    });

    function stopSuccessHandler() {
      // now that stop was called successfully we let the user pick from a new set of videos to playback
    }
   */
  bc.device.externalscreen.stopVideo = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.stopVideo is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoStop" );
  };

  /**
   * This function will seek to the specified timecode for a video that is on the AppleTV.  The video must have been initiated on the
   * AppleTV by calling <i>bc.device.externalscreen.playVideo</i> function.  This function will work if the video is either currently
   * playing or is paused.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param timecode The timecode that you would like to seek to.  Could be forward or backward from the current timecode.  This
   * parameter is passed as a Number.  This timecode represents the 'seconds' that you want to seek to.  For example, if you wanted
   * to seek to the three minute mark then you would call <i>bc.device.externalscreen.seekVideo( 180, successHandler, errorHandler)
   * @param successCallback The function that is called if the video is successfully seeked into.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#skip" ).bind( "tap", function() {
     //Jump to minute 5
      bc.device.externalscreen.seekVideo( 600 );
   });
   */
  bc.device.externalscreen.seekVideo = function( timecode, successCallback, errorCallback ) {
    var params = {
      timecode: timecode
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.seekVideo is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoSeek", params );
  };

  /**
   * This function will display a webview on an external screen using specified the URI.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param uri The URI string specified in the manifest
   * @param successCallback The function that is called if the webview is displayed
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#display" ).bind( "tap", function() {
      bc.device.externalscreen.openExternalWebview( "test.html" );
   });
   */
  bc.device.externalscreen.openExternalWebView = function( uri, successCallback, errorCallback ) {
    var params = {
      uri: uri
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.openExternalWebview is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenWebViewOpen", params );
  };

  /**
   * This function will remove the view on an external screen.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * @param successCallback The function that is called if the webview is displayed
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#close" ).bind( "tap", function() {
      bc.device.externalscreen.closeExternalScreen();
   });
   */
  bc.device.externalscreen.closeExternalScreen = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.closeExternalScreen is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenClose");
  };

  /**
   * This function is used for communication between an external webview and the device's active web view.  If called from the device,
   * this will post the message to the external screen if the external screen has an active webview.  If called from the external web view,
   * this will post the message to the active device webview.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the webview is displayed
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#postmessage" ).bind( "tap", function() {
      bc.device.externalscreen.postMessage("Bonzai!", successCallback, errorCallback);
   });
   */
  bc.device.externalscreen.postMessage = function(message, successCallback, errorCallback ) {
    var params = {
      message: message
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.postMessage is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "PostMessage", params );
  };

 /*****************************************
  * Internal use only
  ****************************************/
 /**
  * @private
  */
  bc.device.getCallbackFunctionMap = function() {
    return _callbackFunctionMap;
  };

 /**
  * @private
  */
  bc.device.clearCallbackFunctionMap = function() {
    _callStack = [];
    _callbackFunctionMap = {};
  };

 /**
  * @private
  */
  bc.device.nativeCall = function( api ) {
   var $bridge;
   // window.androidCommandQueue is inject by the android container
   if( window.androidCommandQueue !== undefined ) {
     window.androidCommandQueue.enqueue( api );
   } else {
     _callStack.push( api );
     $bridge = $( "#bc-device-bridge" );
     if( $bridge.length === 0 ) {
       $bridge = createIframeBridge();
     }
     $bridge.attr( "src", "bccommand://checkqueue" );
    }
  };

 /**
  * @private
  * This is actually doing a shift, but we call it pop for backwards compatiability.
  */
  bc.device.popNativeCall = function() {
    return _callStack.shift();
  };

}( bc.lib.jQuery ));

/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false, evil:true */

/**
 * bc.ui provides functions that interact with the DOM.  This includes initializing and managing
 * elements for momentum scrolling, functions to help transition between pages, and helper functions to draw common UI
 * elements (for example an AJAX loader).
 * @namespace
 */
bc.ui = {};

( function( $, undefined ) {

  var _pendingTransition,
      _currentTransitionDirection,
      TRANSITION_FORWARD = "forwardPage",
      TRANSITION_BACK = "backPage";

  /**
   * The type of transitions that we support.
   * @namespace
   */
  bc.ui.transitions = {};
  /** Transition type of SLIDE_LEFT will slide the current page off the screen to the left. */
  bc.ui.transitions.SLIDE_LEFT = 0;
  /** Transition type of SLIDE_RIGHT will slide the current page off the screen to the right. */
  bc.ui.transitions.SLIDE_RIGHT = 1;

  /**
   * The possible orientation directions, which can be set in <a href="bc.device.html#.setAutoRotateDirections"><code>bc.device.setAutoRotateDirections</code></a>.
   * @namespace
   */
  bc.ui.orientation = {};
  /** The view is being displayed in the portrait mode. */
  bc.ui.orientation.PORTRAIT = "1";
  /** The view is being rendered as if it were rotated 180 degrees. */
  bc.ui.orientation.PORTRAIT_UPSIDEDOWN = "2";
  /** The view is being rendered as if it were rotated 270 degrees clockwise. */
  bc.ui.orientation.LANDSCAPE_LEFT = "3";
  /** The view is being rendered as if it were rotated 90 degrees clockwise. */
  bc.ui.orientation.LANDSCAPE_RIGHT = "4";

  /**
   * An array that keeps track of the page history.  For example, if our first page is a list of videos and then when we click
   * on a item it transitions (using the <code>bc.ui.forwardPage</code> function) to a video detail page, we would have two pages in our <code>bc.ui.pageStack</code>:
   * The first item being the original page and the second the new page we transitioned to, $detailsPage in this example.
   */
  bc.ui.pageStack = [];

  /**
   * Tracks whether or not the current view is in transition.
   */
  bc.ui.inTransition = false;

  /** The currently active page, meaning the page that is currently in view.*/
  bc.ui.currentPage = undefined;

  function addScroller( scroller ) {
    var $scroller = $( scroller );
    if( $scroller.data( "bc-scroller" ) === undefined ) {
      $scroller.data( "bc-scroller", new Scrollbox( scroller ) );
    }
  }

  function enableScrollerForPage( $page ) {
    $page.children( '.scroller' ).each( function( index, scroller ) {
      addScroller( scroller );
    });

    if( $page.hasClass( 'scroller' ) ) {
      addScroller( $page[0] );
    }
  }

  //When we remove a page from the DOM, we set the image src to an empty image to release them from RAM.  (just removing the image tag does not release it)
  function destroyImages( $page ) {
    $page.find( 'img' ).each( function() {
      this.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    });
  }

  function destroyScrollers( $page ) {
    var $scrollers = $page.children( '.scroller' ),
        aScroller;
    if ( $scrollers.length > 0 ) {
      $.each( $scrollers, function( idx, scroller ) {
        aScroller = $( scroller ).data( 'bc-scroller' );
        if ( aScroller ) {
          aScroller = null;
          $( scroller ).data( 'bc-scroller', null );
        }
      });
    }
  }

  function destroyVideos( $page ) {
    $page.find( 'video' ).each( function() {
      this.pause();
      $( this ).remove();
    });
  }

  function freeRAM( $page ) {
    destroyScrollers( $page );
    destroyVideos( $page );
    destroyImages( $page );
  }

  function forwardPageEnd( toPage ) {
    bc.ui.inTransition = false;
    bc.ui.currentPage.find( '.bc-active' ).removeClass( 'bc-active' );
    $( bc ).trigger( "pagehide", bc.ui.currentPage );

    bc.ui.pageStack.push( $( toPage[0] ) );
    bc.ui.currentPage = toPage;
    $( bc ).trigger( "pageshow", toPage );
  }

  function backPageEnd( toPage ) {
    var $previousPage = bc.ui.pageStack.pop(),
        removePage = $previousPage.data( "bc-internal-injected" ),
        aScroller;

    bc.ui.inTransition = false;
    bc.ui.currentPage.find( '.header .back' ).removeClass( 'active' );
    bc.ui.currentPage = toPage;
    $previousPage.removeData( "bc-internal-injected" );

    //If we hit memory issues start by setting the transform to nothing here.
    if ( removePage ) {
      freeRAM( $previousPage );
      $previousPage.css( 'display', 'none' ).remove();
    } else {
      aScroller = ( $previousPage.hasClass( "scroller" ) ? $previousPage : $previousPage.find( ".scroller" ) );
      bc.ui.scrollToTop( aScroller );
      $( bc ).trigger( "pagehide", $previousPage );
    }
    $( bc ).trigger( "pageshow", bc.ui.currentPage );
  }

  function changePage( from, to, options ) {

    if( bc.ui.currentPage !== from ) {
      bc.utils.warn('ERROR: trying to transition with a page that is not the currently displayed page.');
    }

    switch( options.transitionType ) {
      case bc.ui.transitions.SLIDE_LEFT:
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( -100%, 0px, 0px )" );
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        break;
      case bc.ui.transitions.SLIDE_RIGHT:
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( 100%, 0px, 0px )" );
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        break;
    }
  }

  function registerEventListeners() {
    $( bc ).on( "backbuttonpressed", function( evt ) {
      if( bc.ui.inTransition ) {
        return;
      }

      if( bc.ui.pageStack.length > 1 ) {
        bc.ui.backPage();
      } else {
        bc.device.goBack();
      }
    });
  }

  function checkForPendingTransitions() {
    var pendingFunction,
        page,
        options;

    if( bc.ui.inTransition ) {
      setTimeout( checkForPendingTransitions, 100 );
      return;
    }

    pendingFunction = _pendingTransition.pendingFunction;
    page = _pendingTransition.page;
    options = _pendingTransition.options;
    _pendingTransition = undefined;
    if( page !== undefined ) {
      bc.ui[pendingFunction]( page, options );
    } else {
      bc.ui[pendingFunction]( options );
    }
  }

  function jQueryWrappedDOM( toPage ) {
    // take either a string or jQuery object.
    if ( typeof( toPage ) === "string" || toPage instanceof Element ) {
      return $( toPage );
    } else if( toPage instanceof jQuery ){
      return toPage;
    } else {
      console.error( "forwardPage must take a valid CSS selector, an HTML element or jQuery object as a parameter." );
      return null;
    }
  }

  $( bc ).on( "init", function() {
    bc.ui.init();
    registerEventListeners();
  });

  /**
   * @private
   */
  bc.ui.init = function() {
    if( bc.ui.pageStack.length !== 0 || $( ".page" ).length === 0 ) {
      return;
    }
    $( ".page:eq(0)" )[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );

    bc.ui.currentPage = $( '.page:eq(0)' );
    bc.ui.enableScrollers();
    bc.ui.pageStack.push( bc.ui.currentPage );
  };

  bc.ui.setCurrentPage = function( elem ) {
    var $elem = $( elem );
    if( !$elem.hasClass( "page" ) ) {
      console.warn( "Tyring to set page with an element that does not have class page." );
      return;
    }
    $elem[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
    bc.ui.currentPage = $elem;
    bc.ui.pageStack[0] = $elem;
  };

  /**
   * <b>DEPRECATED</b> This function is no longer necessary.
   */
  bc.ui.refreshScrollers = function( options ) {
    console.log( "bc.ui.refreshScrollers is no longer necessary.  This call can be removed from your code." );
    return;
  };

  /**
   * Scroll to the top of the provided momentum scroller.
   *
   * @param $scroller A jQuery object that represents the scroller element to scroll to the top of the provided scroller.
   * @example
   bc.ui.scrollToTop( $( '.scroller' ) ); //Scrolls the page to the top of the page.
   */
  bc.ui.scrollToTop = function( $scroller ) {
    var aScroller = $scroller.data( 'bc-scroller' );
    if ( aScroller ) {
      aScroller.scrollToY( 0, "0ms");
    }
  };

  /**
   * <b>Note</b> that the App Cloud SDK automatically manages the construction and destruction of these scrollers for you. Therefore
   * by default you should not have to call <code>enableScrollers</code>. The App Cloud SDK calls <code>enableScrollers</code> when it first loads and any time we
   * transition to a new page.
   *
   * <p>This function can be called to enable momentum scrolling for any element with a class of <code>scroller</code> that is a direct child of the page
   * that was passed in.  If no page is passed to the function, then it defaults to the currently active page.</p>
   *
   * @param $page An optional jQuery object that either has a class of <code>scroller</code> on it or is a parent of an element(s) that has
   * the class <code>scroller</code> on it.
   * @example
   bc.ui.enableScrollers(); //Will initialize momentum scrolling for this current page.
   */
  bc.ui.enableScrollers = function( $page ) {
    if ( $page ) {
      enableScrollerForPage( $page );
    } else {
      $( ".page" ).each( function() {
        enableScrollerForPage( $( this ) );
      });
    }
  };

  /**
   * @private
   */
  bc.ui.getScrollerForPage = function( index ) {
    var $page;
    if( index !== undefined ) {
      $page = bc.ui.pageStack[index];
    }

    $page = $page || bc.ui.currentPage;

    return $page.find( ".scroller" ).data( "bc-scroller" );
  };

  /**
   * Transitions to the <code>toPage</code> parameter from the current page.  The type of transition to be applied can be passed as parameter; otherwise it
   * defaults to <code>SLIDE_LEFT</code>.  The <code>toPage</code> parameter can be passed as either a CSS selector, DOM Element, or jQuery Object.  The passed <code>toPage</code> can already be part of the
   * Document or can be independent.  If it is independent, then this function will dynamically insert the <code>toPage</code> into the DOM.  If this function
   * inserts the page into the Document, then when the back function is called, it will automatically remove the associated page.  Generally speaking,
   * it is recommended to allow pages to be dynamically inserted and removed from the DOM so as to keep the DOM in-memory as small as possible.
   *
   * <p>Both the current page and the new page should have a CSS class of <code>page</code> as defined in the theme file.
   * This function triggers a <code>pageshow</code> and a <code>pagehide</code> event once the transition has completed.  The <code>pageshow</code> event passes the
   * new page as data parameter, while the <code>pagehide</code> event passes the page we transitioned from as data parameter.</p>
   *
   * <code>bc.ui.forwardPage</code> should be used when logically transitioning from one page to the next.  In addition to providing a visual
   * transition, it will add pages to the <code>bc.ui.pageStack</code> so that a history stack of pages can be maintained. To return to the original page (the from page)
   * call <code>bc.ui.backPage()</code>.
   *
   * @param toPage The page we want to transition to.
   * @param options An object that overrides the default values of the <code>forwardPage</code> function.  The possible values are:
     <ul>
        <li><code>transitionType</code> specifies the direction of the type of transition to use during the transition. Defaults to <code>SLIDE_LEFT</code></li>
        <li><code>transitionTime</code> specifies how the long the transition should take.  Smaller = faster.  The time is in milliseconds.</li>
     </ul>
   * .
   * @example
   $( bc ).on( 'pageshow', function( $secondPage ) {
     //Got the pageshow event and the page we transitioned to.
   });

   $(bc ).on( 'pagehide', function( $firstPage ) {
     //Got the pagehide event and the page we transition from.
   });

   bc.ui.forwardPage( $( '.second_page' ) ); //transitions to the new page
   */
  bc.ui.forwardPage = function( toPage, options ) {
    var $toPage,
        settings,
        timeoutValue = 1;

    //We want to protect against getting double transition events
    if( toPage === undefined || _pendingTransition !== undefined ) {
      return;
    }

    if( bc.ui.inTransition ) {
      if( _currentTransitionDirection !== TRANSITION_FORWARD ) {
        _pendingTransition = {
                              "pendingFunction": "forwardPage",
                              "page": toPage,
                              "options": options
                             };
        checkForPendingTransitions();
      }
      return;
    }

    $toPage = jQueryWrappedDOM( toPage );

    //No valid toPage was passed in.
    if( $toPage === null ) {
      return;
    }

    // determine if we need to inject into the page
    if ( $toPage.parent().length === 0 ) {
      $toPage[0].style.setProperty( "-webkit-transform", "translate3d( 100%, 0px, 0px )" );
      $toPage.appendTo( "body" );
      $toPage.data( "bc-internal-injected", true );
      timeoutValue = 300;
    } else {
      $toPage.data( "bc-internal-injected", false );
    }

    settings = {
      "transitionType": bc.ui.transitions.SLIDE_LEFT,
      "transitionTime": 300
    };

    $.extend( settings, options );

    bc.ui.inTransition = true;
    _currentTransitionDirection = TRANSITION_FORWARD;

    //register event listener for when the transition is complete so that we can clean things up and trigger events.
    bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
      forwardPageEnd( $toPage );
    });

    bc.ui.enableScrollers( $toPage );
    changePage( bc.ui.currentPage, $toPage, settings );
    $( ".back-button" ).addClass( "show" );
  };

  /**
   * Transitions from the current page back to the previous page.  The type of transition can be specified, but by default the current page will
   * slide off the page to the right.  Once the transition has completed, the previous page is removed from the DOM if the page was injected into the DOM via the forwardPage API.  We remove
   * these pages from the DOM in order to minimize memory use.  The backPage function triggers a <code>pageshow</code> event once the transition has completed and a <code>pagehide</code> event
   * once the current page has been hidden.  <b>Note</b> that the <code>pagehide</code> event is only fired if the page was not removed.
   *
   * <p><code>bc.ui.backPage()</code> is associated with the <code>bc.ui.forwardPage()</code> function.  After a previous use of <code>bc.ui.forwardPage()</code> to transition to a page,
   * call the <code>bc.ui.backPage()</code> function to transition back to the original page.  A common use would be when a user taps on a back button.  You would
   * call <code>bc.ui.backPage()</code> to transition back to the original page.</p>
   *
   * @param options An object that contains the options that can be provided to the transition function.  The possible values are:
    <ul>
      <li> <code>transitionType</code> - defines the type of transition to use when moving back to the previous page and must correspond to a value defined in <code>bc.ui.transitions</code>.
      The default value is <code>bc.ui.transitions.SLIDE_RIGHT</code>, which will slide the current page off to the right.</li>
      <li> <code>toPage</code> - If you would like to inject a new page into the DOM and transition to this page you can pass in the DOM element to inject into the page.  <b>Note</b> If there is
      more then one page in the page stack this value is ignored</b></li>
      <li><code>transitionTime</code> specifies how the long the transition should take.  Smaller = faster.  The time is in milliseconds.</li>
    </ul>
   *
   * @example
   $( bc ).on( 'pageshow', function( $firstPage ) {
     //Got the pageshow event and the page we transitioned to.
     //In this example the first page we started on.
   });

   bc.ui.backPage(); //transitions back to the first page

   //The above line is equivalent to calling
   // bc.ui.backPage( {
   //  "transitionType": bc.ui.transitions.SLIDE_RIGHT
   // })
   */
   bc.ui.backPage = function( options ) {
     var settings,
         $toPage,
         $fromPage = bc.ui.currentPage;

     if( _pendingTransition !== undefined ) {
       return;
     }

     //We want to protect against getting double transition events
     if( bc.ui.inTransition ) {
       if( _currentTransitionDirection !== TRANSITION_BACK ) {
         _pendingTransition = {
                               "pendingFunction": TRANSITION_BACK,
                               "options": options
                              };
         checkForPendingTransitions();
       }
       return;
     }

     settings = {
       "transitionType": bc.ui.transitions.SLIDE_RIGHT,
       "transitionTime": 300
      };
     $.extend( settings, options );


     //If a DOM element was passed in for the page to transition to and it is not in the DOM we should inject it into the page and the pagestack and then transition to it.
     if( settings.toPage && ( bc.ui.pageStack.length === 1 || bc.ui.pageStack.length === 0 ) ) {
       $toPage = jQueryWrappedDOM( settings.toPage );

       //No valid toPage was passed in.
       if( $toPage === null ) {
         return;
       }

       if( !$toPage.hasClass( "page" ) ) {
         console.warn( "The back page we are trying to inject and transition to does not have a class of 'page'." );
         return;
       }

       $toPage[0].style.setProperty( "-webkit-transform", "translate3d( -100%, 0px, 0px )" );

       // determine if we need to inject into the page
       if( $toPage.parent().length === 0 ) {
         $toPage.appendTo( "body" );
       }

       //Add this page pageStack.
       bc.ui.pageStack.splice( bc.ui.pageStack.length - 1, 0, $toPage );
     }

     if( bc.ui.pageStack.length === 1 || bc.ui.pageStack.length === 0 ) {
       //If we are in a "more navigation view" then we should navigate back to the more page.  (This is the more menu on iOS)
       if( bc.context.moreNavigationView ) {
         bc.device.navigateToMoreMenu();
         return;
       }
       bc.utils.warn( "ERROR: Calling transition back when there is only one page in the page stack" );
       return;
     }

     $toPage = bc.ui.pageStack[ bc.ui.pageStack.length - 2 ];

     if( $toPage === undefined || $toPage === null ) {
       bc.utils.warn( "There is no page to transition back to" );
       return;
     }

     // set our down state for the back button
     $fromPage.find( '.header .back-button' )
                      .addClass( 'active' );

     bc.ui.inTransition = true;
     _currentTransitionDirection = TRANSITION_BACK;

     bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
       backPageEnd( $toPage );
     });
     changePage( bc.ui.currentPage, $toPage, settings );
     if( bc.ui.pageStack.length === 2 && !bc.context.moreNavigationView ) {
       $( ".back-button" ).removeClass( "show" );
     }
   };

  /**
   * Returns an HTML snippet that can be used to inject a CSS3 animated spinner into the DOM.  The size and color are controlled in the theme file.
   *
   * @return An HTML snippet that represents a CSS3 animated spinner.  (AJAX loader)
   * @example
   $( 'body' ).append( bc.ui.spinner() ); //Injects an HTML spinner into the body of the page.
   */
  bc.ui.spinner = function() {
    return '<div class="spinner ' + bc.context.os +'">' +
                  '<div class="bar1"></div>' +
                  '<div class="bar2"></div>' +
                  '<div class="bar3"></div>' +
                  '<div class="bar4"></div>' +
                  '<div class="bar5"></div>' +
                  '<div class="bar6"></div>' +
                  '<div class="bar7"></div>' +
                  '<div class="bar8"></div>' +
                  '<div class="bar9"></div>' +
                  '<div class="bar10"></div>' +
                  '<div class="bar11"></div>' +
                  '<div class="bar12"></div>' +
                '</div>';
  };

  //Load the spinner into an included template
  Mark.includes.spinner = bc.ui.spinner();

  /**
   * Generates the HTML snippet for the header.
   * @param options An object that represents the settings that can be overridden for this HTML snippet.  Below are the default values.
   <pre>
   {
     "backButton": false, //A boolean for whether or not to show a back button.
     "refreshButton": false, //A boolean for whehter or not to show a refreshButton.
     "title": ""
   }
   </pre>
   @return A string that is the HTML snippet for the header.
   * @private
   */
  bc.ui.headerHTML = function( options ) {
    var html = "",
        settings = {
          "backButton": false,
          "refreshButton": false,
          "title": ""
        };

    $.extend( settings, options );

    html = "<header class='header'>";

    if( settings.backButton ) {
      html += "<div class='back-button'></div>";
    }

    html += "<h1 class='header-a ellipsis'>" + settings.title + "</h1>";

    if( settings.refreshButton ) {
      html += "<div class='refresh-button'></div>";
    }

    return ( html += "</header>" );
  };

  /**
    * Returns the current width of the viewport.
    * @return The width of the viewport as a number, in pixels.
    * @example
    var width = bc.ui.width(); //sets width to the current width of the viewport.
    */
   bc.ui.width = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the width of the wrapper.
       return $( "#BCDeviceWrapper" ).width();
     } else {
       return $( window ).width();
     }
   };

   /**
    * Returns the current height of the viewport.
    * @return The height of the viewport as a number, in pixels.
    @example
    var height = bc.ui.height(); //sets height to the current height of the viewport
    */
   bc.ui.height = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the height of the wrapper.
       return $( "#BCDeviceWrapper" ).height();
     } else {
       return $( window ).height();
     }
   };

  /**
   * @private
   * Should only be used by Jasmine tests to override private variables.
   */
  bc.ui.setPrivateVariables = function( options ) {
    for( var prop in options ) {
      if( typeof options[prop] === "string" ) {
        eval( prop + " = '" + options[prop] + "'");
      } else {
        eval( prop + " = " + options[prop] );
      }
    }
  };

  //The browser is sporadically showing all white pages, due to rendering issues.  This addresses that.
  $( bc ).on( "pageshow", function() {
    setTimeout( function() {
      document.body.style.display = "none";
      document.body.style.display = "block";
    }, 0 );
  });

})( bc.lib.jQuery );

/**
* Brightcove Metrics provides functions to measure interactions with applications.
* @namespace
*/
bc.metrics = {};

/**
 * The <code>connectionstatechange</code> event is fired when there is change in the state of the connection to the internet.  The event passes a data object that
 * currently has a single property of <code>online</code>, which is a boolean indicating whether or not the device is currently connected to the internet.
 *
 * @example
 * $( bc ).on( "connectionstatechange", function( evt, data ) {
 *   if( data.online ) {
 *     //Check to see if there is new data available.
 *   }
 * });
 *
 * @name connectionstatechange
 * @event
 * @memberOf bc
 * @param event (type of connectionstatechange)
 * @param data The data object currently has a single property of <code>online</code>, which is a boolean indicating whether or not the device is currently connected to the internet.
 */

( function( bc, undefined ) {

  var _settings,
      _transit,
      _poll_interval,
      _loader,
      _events = [],
      _liveEvents = [],
      _errors = 0,
      _store_pendingevents_interval,
      _previous_pending_events,
      _$bc = $( bc );

  _$bc.bind( "init", function() {
    var $img;
    var frequency = 5000;
    var url = "https://trk.kissmetrics.com/e?_k=46b26eea9908c85fa960e11c169fda7bc84c67ef&_n=workshop+session&_p=start&account_id=" + bc.accountID;
    var sessionURL = "https://trk.kissmetrics.com/e?_k=46b26eea9908c85fa960e11c169fda7bc84c67ef&_n=workshop+session+time&_p=session&account_id=" + bc.accountID + "&frequency=" + frequency;

    //If we are in the workshop we want to ping kissmetrics
    if( bc.utils.runningInWorkShop() ) {
      $img = $( "<img />" );
      $img.attr( "src", url );

      setInterval( function() {
        $img.attr( "src", sessionURL );
      }, frequency );

      $img.on( "load", function() {
        handleOnlineEvent( true );
      });

      $img.on( "error", function() {
        handleOnlineEvent( false );
      });
    }

  });

  /**@private*/
  bc.metrics._contentSession = {};

  function Event(data) {
    this.getData = function() {
      return data;
    };

    this.isReady = function() {
      return true;
    };

    this.complete = function() {
      _events.shift();
      storePendingEventsQueue();
    };

    this.error = function() {};
  }

  function LiveEvent(data) {
    var last = new Date().getTime(),
        transit;

    this.getData = function() {
      transit = new Date().getTime();
      data.units = transit - last;
      return data;
    };

    this.isReady = function() {
      var d = new Date().getTime();
      return ( _settings.interval > 0 && d - last > _settings.interval );
    };

    this.complete = function() {
      last = transit;
      transit = undefined;
    };

    this.error = function() {
      transit = undefined;
    };
  }

  function getEventData( event, eventData ) {
    return $.extend({
      event: event,
      time:( new Date() ).getTime()
    }, eventData );
  }

  function flush( force ) {
    if( bc.metrics.isInitialized() ) {
      if( force || _settings.interval <= 0 ) {
        send();
      } else if( _poll_interval === undefined ) {
        _poll_interval = setInterval( function() {
          send();
        }, _settings.interval );
      }
    }
  }

  function send() {
    var url, data;
    if( !bc.metrics.isInitialized() || _transit !== undefined ){
      // not ready, event already in _transit or nothing to send
      return;
    }
    while( !_transit ) {
      if( _events.length !== 0 ) {
        _transit = _events[0];
      } else {
        for( var i=0, len=_liveEvents.length; i < len; i++ ) {
          if( _liveEvents[i].isReady() ) {
            _transit = _liveEvents[i];
            break;
          }
        }
        if( !_transit ) {
          return;
        }
      }
    }

    data = $.extend( _transit.getData(), _settings.data );
    url = _settings.uri + "?" + $.param( data );
    _loader.attr( "src",url );
  }

  function storePendingEventsQueue() {
    var pendingEvents = [];

    for( var i = 0, len = _events.length; i < len; i++ ) {
      pendingEvents.push( _events[i].getData() );
    }

    for( i = 0, len = _liveEvents.length; i < len; i++ ) {
      pendingEvents.push( _liveEvents[i].getData() );
    }

    if( !bc.utils.isEqual( pendingEvents, _previous_pending_events ) ) {
      _previous_pending_events = pendingEvents;
      $( bc ).trigger( "metrics:pendingevents", { events: pendingEvents } );
    }

  }

  function handleOnlineEvent( success ) {
    if( success ) {
      if( !bc.context.online ) {
        bc.context.online = true;
        _$bc.trigger( "connectionstatechange", { online: true } );
      }
    } else {
      if( bc.context.online ) {
        bc.context.online = false;
        _$bc.trigger( "connectionstatechange", { online: false } );
      }
    }
  }

  function bind_loader() {
    _loader.on( "load", function() {
      _errors = 0;
      _transit.complete();
      _transit = undefined;
      handleOnlineEvent( true );
      send();
    });

    _loader.on( "error", function() {
      console.log( "ERROR: unable to send metrics to", _settings.uri );
      handleOnlineEvent( false );
      setTimeout( function(){
        if( _transit !== undefined ) {
          _transit.error();
          _transit=undefined;
        }
        send();
      }, _settings.interval * Math.log( ++_errors ) );
    });
  }

  /**
   * Initialize and bind the metrics runtime
   *
   * @param options - an object containing the metrics options
   *    - uri - the url used to send metric events
   *    - interval - the millisecond interval between event polling
   *        (zero or negative will cause all tracking events to fire immediately,
   *        but will also mean that live tracking must be explicitly dispatched )
   * @param data - session wide metadata that will be included with each event
   * @private
   */
  bc.metrics.init = function( options, data ) {
    $( function(){
      _settings = $.extend( {}, bc.metrics.defaults, options );
      _settings.data = data || {};
      _settings.data.domain = _settings.domain;
      _settings.uri = ( _settings.uri.indexOf( "tracker" ) > -1 ) ? _settings.uri : _settings.uri + "/tracker";

      if( _settings.pendingMetrics ) {
        for( var i = 0, len = _settings.pendingMetrics.length; i < len; i++ ) {
          _events.push( new Event( _settings.pendingMetrics[i] ) );
        }
      }
      _loader = _settings.loader || $( "<img />" ).appendTo( $( "head" ) );
      bind_loader();
      flush();
      _store_pendingevents_interval = setInterval( storePendingEventsQueue, 5000 );
    });
  };

  /**
   * @private
   */
  bc.metrics.addNotificationID = function( notificationID ) {
    _settings.data.message = notificationID;
  };

  /**
   * @private
   */
  bc.metrics.removeNotificationID = function() {
    if( _settings && _settings.data && _settings.data.message ) {
      delete _settings.data.message;
    }
  };

  /**
   * Send a tacking event
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   * @private
   */
  bc.metrics.track = function( event, properties ) {
    _events.push( new Event( getEventData( event, properties ) ) );
    flush();
  };

  /**
   * Create a live tracking event which sends time delta information for each poll interval.
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   * @returnValue - a closure which can be used to cancel the tracking and flush the last time delta
   * @private
   */
  bc.metrics.live = function( event, properties ) {
    var liveEvent = new LiveEvent( getEventData( event + "_usage", properties ) );

    bc.metrics.track( event + "_view" , properties);
    _liveEvents.push(liveEvent);

    liveEvent.die = function(){
      for( var i = 0, len = _liveEvents.length; i < len; i++ ) {
        if( _liveEvents[i] == liveEvent ) {
          _events.push( new Event( liveEvent.getData() ) );
          _liveEvents.splice( i, 1 );
          flush();
          return;
        }
      }
    };

    flush();
    return function() { liveEvent.die(); };
  };

  /**
   * Start tracking how long a user interacts with a given piece of content within the application.  For example the blog.js view tracks how long the user
   * spends on each article by calling bc.metrics.startContentSession when they open the article and then bc.metrics.endContentSession when they either navigate away from the
   * view or back to the list of the articles.
   * @param uri A unique identifier for this content.  Ideally a URI to the content on the web, but any unique ID will suffice.
   * @param name A human readable name to be displayed in the analytics section of App Cloud.
   */
  bc.metrics.startContentSession = function( uri, name ) {
    if( !uri || !name ) {
      console.log( "bc.metrics.startContentSession requires the parameters 'uri' and 'name'." );
      return;
    }

    if( bc.metrics._contentSession[uri] ) {
      console.log( uri + " content session is already being tracked." );
      return;
    }
    bc.metrics._contentSession[uri] = bc.metrics.live( "content", { uri: uri, name: name } );
  };

  /**
   * Stop tracking the users session for a given piece of content.  "endContentSession" should be called with the same URI that was called with its corresponding "startContentSession".
   * @param uri A unique identifier for this content.  This needs to match the URI that was passed into the startContentSession event.
   */
  bc.metrics.endContentSession = function( uri ) {
    if( !uri ) {
      console.log( "bc.metrics.endContentSession requires a uri." );
      return;
    }

    if( !bc.metrics._contentSession[uri] ) {
      console.log( "bc.metrics.endContentSession cannot find a matching startContentSession for the URI: " + uri );
      return;
    }
    bc.metrics._contentSession[uri].call();
    delete bc.metrics._contentSession[uri];
  };

  /**
   * @private
   */
  bc.metrics.isInitialized = function() {
    return _settings !== undefined;
  };

  /** @private */
  bc.metrics.clear = function() {
    _transit = undefined;
    _poll_interval = undefined;
    _events = [];
    _liveEvents = [];
    _loader = undefined;
  };

  bc.metrics.defaults =  {
    uri:"http://localhost:44080/tracker", // the url of the event tracking service
    interval:5000 // the default poll interval
  };

})( bc );

/*global bc:true atob:false jQuery:false*/
/*jshint indent:2, browser: true, white: false devel:true*/

 /**
* Brightcove App Cloud events that are added to the jQuery object.  This enables you to
* use the jQuery event attachment functions of (on) with this set of events.
* These events will work across both desktops and mobile devices.
*
* @namespace
* @name Events
*/
bc.events = {};

( function( $, undefined ) {
  var MOVE_THRESHOLD = 20;

  if( bc.utils.hasTouchSupport() ) {
    bc.events.start = "touchstart";
    bc.events.move = "touchmove";
    bc.events.end = "touchend";
    bc.events.cancel = "touchcancel";
  } else {
    bc.events.start = "mousedown";
    bc.events.move = "mousemove";
    bc.events.end = "mouseup";
    bc.events.cancel = "touchcancel";
  }


  /**
   * Private functions
   */

  /**
   * Set up our config object to register getter/setter functions for its properties to ensure we can tie into the SDK where
   * appropriate
   */
  function initConfigObject() {
    var touchEventsEnabled = true;

    Object.defineProperty( bc.config, "touchEventsEnabled", {
      get: function() {
        return touchEventsEnabled;
      },
      set: function( value ) {
        if ( !value ) {
          removeAllEvents();
        }

        touchEventsEnabled = value;
      }
    });
  }


  /**
   * De-register all of the gesture events that the SDK had registered
   */
  function removeAllEvents() {
    delete $.event.special.tap;
    delete $.event.special.swipe;
  };

  initConfigObject();

  /**
   * @event
   * @memberOf Events
   * @name tap
   *
   * @description Tap is an event that represents a user 'tapping' on an element.  It is recommended to use <code>tap </code> rather than <code>click</code>
   * as it eliminates 300ms of delay that binding to a <code>click</code> event introduces on some platforms.  On non-touch
   * devices, the <code>tap</code> event  is equivalent to <code>click</code>.  This means binding to <code>tap</code> will work across both
   * touch and non-touch devices.
   *
   * @example $( '#hello-button' ).on( 'tap', function() {
      alert('Hello there!');
   });
   */
  $.event.special.tap = {
    setup: function( data ) {
      var $this = $( this );

      $this.on( bc.events.start, function( event ) {
        if ( !bc.config.touchEventsEnabled ) {
          return;
        }

        var moved = false,
            touching = true,
            origTarget = event.target,
            origEvent = event.originalEvent,
            origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
            originalType,
            tapHoldTimer;

        var touchMoveHandler = function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( ( Math.abs( origPos[0] - newPageXY.pageX ) > MOVE_THRESHOLD ) || ( Math.abs( origPos[1] - newPageXY.pageY ) > MOVE_THRESHOLD ) ) {
            moved = true;
          }
        };

        var touchEndHandler = function( event ) {
          $this.off( bc.events.move, origTarget, touchMoveHandler );
          clearTimeout( tapHoldTimer );
          touching = false;

          /* ONLY trigger a 'tap' event if the start target is
           * the same as the stop target.
           */
          if ( !moved && ( origTarget === event.target ) ) {
            originalType = event.type;
            event.type = "tap";
            event.pageX = origPos[0];
            event.pageY = origPos[1];
            $.event.handle.call( $this[0], event );
            event.type = originalType;
          }
        };

        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end, touchEndHandler )
               .off( bc.events.move, touchMoveHandler );
        }, 750 );

        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, touchMoveHandler );

        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, touchEndHandler );
      });
    }
  };

 /**
  * @event
  * @memberOf Events
  * @name swipe
  *
  * @description On touch platforms, users can provide input with a 'swipe' gesture.  For example, a user placing their finger on the screen
  * and dragging it.  When the <code>swipe</code> event is fired, the type of event will be <code>swipe</code>.  An additional parameter, either <code>swipeRight</code> or <code>swipeLeft</code>, will be passed to
  * any bound functions.  This additional parameter can be used to understand in which
  * direction the user is swiping.
  *
  * @example  $('.image').on( 'swipe', function(evt, direction) {
      if( direction === 'swipeRight' ) {
        handleSwipeRight( this );
      } else {
        handleSwipeLeft( this );
      }
   });
  *
  */
  $.event.special.swipe = {
    setup: function( data ) {
      var $this = $( this );

      $this.on( bc.events.start, function( event ) {
        if ( !bc.config.touchEventsEnabled ) {
          return;
        }

        var touching = true,
            origTarget = event.target,
            origEvent = event.originalEvent,
            origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
            tapHoldTimer,
            $elem = $( event.target );

        var touchMoveHandler = function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( (Math.abs(origPos[0] - newPageXY.pageX) > MOVE_THRESHOLD) && (  Math.abs(origPos[1] - newPageXY.pageY) < MOVE_THRESHOLD ) ) {
            $this.off( bc.events.end, origTarget, touchEndHandler );
            $this.off( bc.events.move, touchMoveHandler );
            clearTimeout( tapHoldTimer );
            $elem.trigger( 'swipe', ( origPos[0] > newPageXY.pageX ) ? 'swipeLeft' : 'swipeRight' );
          }
        };

        var touchEndHandler = function( event ) {
          $this.off( bc.events.move, touchMoveHandler );
          clearTimeout( tapHoldTimer );
          touching = false;
        };

        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end, touchEndHandler )
                .off( bc.events.move, touchMoveHandler );
          }, 750 );

        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, touchMoveHandler );

        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, touchEndHandler );

      });
    }
  };


})( bc.lib.jQuery );

(function (bc) {

    var PLUGIN_URI = "katamaplugin://com.brightcove.plugins/EmailComposer";

    /**
     * The object <code>bc.device.modalEmail</code> provides a single method for
     * launching a modal email window.
     *
     * @namespace
     * @name bc.device.modalEmail
     */
    bc.device.modalEmail = {};

    /**
     * Open a modal email window inside the app.
     *
     * @example
     * var options = {
     *     toRecipients: "john@example.com, jane@example.com",
     *     subject: "Check it out!",
     *     body: "I found this interesting: http://www.example.com/"
     * };
     *
     * var successCallback = function () {
     *     // sent!
     * };
     *
     * var errorCallback = function (error) {
     *     // oh no! see error.errorCode and error.errorMessage
     * };
     *
     * bc.device.modalEmail.composeEmail(successCallback, errorCallback, options);
     *
     * @param successCallback A function to execute after the email is sent.
     *     This function has no arguments.
     * @param errorCallback A function to execute if the user cancels. This function
     *     receives an <code>error</code> object with two properties:
     *     <code>errorMessage</code> (a string) and <code>errorCode</code> (a number
     *     corresponding to an error code in bc.device.codes). <em>Note, this function
     *     will not execute on Android.</em>
     * @param options An object with any of the following properties:
     * <dl>
     *     <dt>toRecipients</dt>
     *     <dd>A comma-separated string of recipients.</dd>
     *
     *     <dt>ccRecipients</dt>
     *     <dd>A comma-separated string of CC recipients.</dd>
     *
     *     <dt>bccRecipients</dt>
     *     <dd>A comma-separated string of BCC recipients.</dd>
     *
     *     <dt>subject</dt>
     *     <dd>The subject string.</dd>
     *
     *     <dt>body</dt>
     *     <dd>The body string.</dd>
     *
     *     <dt>isHTML</dt>
     *     <dd>A boolean value indicating if the body string is HTML. Defaults to <code>false</code>.</dd>
     * </dl>
     */
    bc.device.modalEmail.composeEmail = function (successCallback, errorCallback, options) {
        var defaults = {
            "isHTML": false
        };

        var params = merge_options(defaults, options || {});

        bc.device.pluginNativeCall(PLUGIN_URI, "showEmailComposer", successCallback, errorCallback, params);
    };

    function merge_options(target, source) {
        for (var attrname in source) {
            target[attrname] = source[attrname];
        }

        return target;
    }

})(bc);

(function (bc) {

    var PLUGIN_URI = "katamaplugin://com.brightcove.plugins/MediaUpload";

    /**
     * The <code>mediaUpload</code> object provides methods and events for uploading
     * photos and videos to a remote server.
     *
     * @namespace
     * @name bc.device.mediaUpload
     */
    bc.device.mediaUpload = {};

    /**
     * Media upload-related event codes.
     *
     * @namespace
     * @name bc.device.mediaUpload.events
     */
    bc.device.mediaUpload.events = {};

    /**
     * The media asset was uploaded completely.
     *
     * @example
     * $(bc).on(bc.device.mediaUpload.events.COMPLETE, function (evt, data) {
     *    // log the HTTP response
     *    console.log(data.info.response);
     * });
     *
     * @event
     * @memberOf bc.device.mediaUpload.events
     * @param evt A jQuery event of type <code>bc.device.mediaUpload.events.COMPLETE</code>
     * @param data An object with additional event information.
     * <dl>
     *     <dt>data.info.response</dt>
     *     <dd>The HTTP response text.</dd>
     * </dl>
     */
    bc.device.mediaUpload.events.COMPLETE = "MediaUpload:complete";

    /**
     * There was an error during the upload process.
     *
     * @example
     * $(bc).on(bc.device.mediaUpload.events.ERROR, function (evt, data) {
     *    // log the error
     *    console.log(data.info.error);
     * });
     *
     * @event
     * @memberOf bc.device.mediaUpload.events
     * @param evt A jQuery event of type <code>bc.device.mediaUpload.events.ERROR</code>
     * @param data An object with additional event information.
     * <dl>
     *     <dt>data.info.error</dt>
     *     <dd>An error string.</dd>
     * </dl>
     */
    bc.device.mediaUpload.events.ERROR = "MediaUpload:error";

    /**
     * The media asset is uploading.
     *
     * @example
     * $(bc).on(bc.device.mediaUpload.events.PROGRESS, function (evt, data) {
     *    // percent loaded
     *    console.log(data.info.progress / data.info.expected);
     * });
     *
     * @event
     * @memberOf bc.device.mediaUpload.events
     * @param evt A jQuery event of type <code>bc.device.mediaUpload.events.PROGRESS</code>
     * @param data An object with additional event information.
     * <dl>
     *     <dt>data.info.progress</dt>
     *     <dd>The number of bytes sent.</dd>
     *     <dt>data.info.expected</dt>
     *     <dd>The total number of bytes to transfer.</dd>
     * </dl>
     */
    bc.device.mediaUpload.events.PROGRESS = "MediaUpload:progress";

    /**
     * Media upload-related error codes.
     *
     * @namespace
     * @name bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors = {};

    /**
     * The media file could not be opened.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.CANNOT_OPEN_FILE) {
     *         // oops!
     *     }
     * }
     *
     * @name CANNOT_OPEN_FILE
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.CANNOT_OPEN_FILE = 205;

    /**
     * The media file could not be converted to an acceptable format.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.CANNOT_CONVERT_FILE) {
     *         // oops!
     *     }
     * }
     *
     * @name CANNOT_CONVERT_FILE
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.CANNOT_CONVERT_FILE = 206;

    /**
     * The photo file could not be read.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.CANNOT_READ_PHOTO_DATA) {
     *         // oops!
     *     }
     * }
     *
     * @name CANNOT_READ_PHOTO_DATA
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.CANNOT_READ_PHOTO_DATA = 207;

    /**
     * The photo file could not be accessed.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.CANNOT_ACCESS_PHOTO) {
     *         // oops!
     *     }
     * }
     *
     * @name CANNOT_ACCESS_IMAGE
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.CANNOT_ACCESS_PHOTO = 208;

    /**
     * The <code>source</code> type is not recognized.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.SOURCE_TYPE_ERROR) {
     *         // oops!
     *     }
     * }
     *
     * @name SOURCE_TYPE_ERROR
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.SOURCE_TYPE_ERROR = 202;

    /**
     * The media type is restricted. Either <code>mediaType</code> was not provided
     *     as an option to the method <code>bc.device.mediaUpload.uploadMedia</code>,
     *     or the device is blocking access for another reason. For example, iOS may
     *     block access to the camera roll if the user has disabled location awareness
     *     for the app.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.MEDIA_TYPE_ERROR) {
     *         // oops!
     *     }
     * }
     *
     * @name MEDIA_TYPE_ERROR
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.MEDIA_TYPE_ERROR = 203;

    /**
     * No URL was provided to the method <code>bc.device.mediaUpload.uploadMedia</code>.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.MISSING_SERVER_URL) {
     *         // oops!
     *     }
     * }
     *
     * @name MISSING_SERVER_URL
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.MISSING_SERVER_URL = 201;

    /**
     * There was a general error.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.GENERAL) {
     *         // oops!
     *     }
     * }
     *
     * @name GENERAL
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.GENERAL = 100;

    /**
     * The user cancelled the operation.
     *
     * @example
     * function errorCallback(error) {
     *     if (error.errorCode === bc.device.mediaUpload.errors.USER_CANCEL) {
     *         // oops!
     *     }
     * }
     *
     * @name USER_CANCEL
     * @memberOf bc.device.mediaUpload.errors
     */
    bc.device.mediaUpload.errors.USER_CANCEL = 101;

    /**
     * Upload a media asset to the given URL.
     *
     * @example
     * TODO example
     *
     * @param serverURL The destination of the media upload.
     * @param successCallback A function to execute when the device attempts to upload
     *     the media asset.
     * @param errorCallback A function to execute if the media asset cannot be uploaded.
     *   This function receives an <code>error</code> object with two properties:
     *   <code>errorMessage</code> (a string) and <code>errorCode</code> (a number
     *   corresponding to an error code in bc.device.mediaUpload.errors).
     * @param options An object with any of the following parameters:
     * <dl>
     *   <dt>addExtension</dt>
     *   <dd>If <code>true</code>, the device will add a file extension to the media
     *       asset (inferred from its mime type). If <code>false</code>,
     *       no extension will be added. The default value is <code>true</code>.</dd>
     *
     *   <dt>baseFileName</dt>
     *   <dd>The base file name of the media asset. The default value is "uploadFile".
     *       A file extension will be added to the base file name unless you set
     *       set <code>addExtension</code> to <code>false</code>.</dd>
     *
     *   <dt>fileKey</dt>
     *   <dd>The HTTP request parameter to identify the media asset. The default
     *       value is <code>file</code>.</dd>
     *
     *   <dt>httpParams</dt>
     *   <dd>An object with additional parameters (e.g <code>{"key": "value"}</code>) to
     *       include in the HTTP request.</dd>
     *
     *   <dt>mediaType</dt>
     *   <dd>An array of acceptable media types for uploading.  Possible values are
     *       <code>videos</code> and <code>images</code>.  If not specified, on iOS,
     *       this array defaults to all allowable types. If both <code>videos</code> and
     *       <code>images</code> are specified but only images are valid (i.e., the device
     *       cannot record video), <code>videos</code> will be ignored. If none of the
     *       specifed types are valid, the error callback will be fired.</dd>
     *
     *   <dt>rect</dt>
     *   <dd>An array <em>for iPad only</em> that specifies where the modal dialog should
     *       appear when <code>source</code> is <code>photoLibrary</code> or
     *       <code>cameraRoll</code>. By default, it will appear at the top and center of
     *       the screen. The first two properties are the x and y of the target space;
     *       the third and fourth properties are width and height. e.g.
     *       <code>[x, y, w, h]</code></dd>
     *
     *   <dt>responseEncoding</dt>
     *   <dd>The expected <a href="http://www.iana.org/assignments/character-sets">IANA
     *       character encoding</a> of the server response. The default value is "utf-8".</dd>
     *
     *   <dt>source</dt>
     *   <dd>The source of the media asset. If <code>camera</code>, the
     *       device should initiate the camera. If <code>photoLibrary</code>, the
     *       the device should present the user's photo library. If <code>cameraRoll</code>
     *       (iOS only), the device should present the user's camera roll.
     *
     *   <dt>userAgent</dt>
     *   <dd>The user agent string for the POST request. By default, on iOS, this will be
     *       the application's user agent string.</dd>
     * </dl>
     */
    bc.device.mediaUpload.uploadMedia = function (serverURL, successCallback, errorCallback, options) {
        var defaults = {
            "serverURL": serverURL,
            "baseFileName": "uploadFile",
            "fileKey": "file",
            "httpParams": {}
        };

        var params = merge_options(defaults, options);

        bc.device.pluginNativeCall(PLUGIN_URI, "uploadMedia", successCallback, errorCallback, params);
    };

    function merge_options(target, source) {
        for (var attrname in source) {
            target[attrname] = source[attrname];
        }

        return target;
    }

})(bc);
