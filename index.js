(function(c,d){var a={},b=function(f){var e=a[f];if(!e){e=a[f]={};var g=e.exports={};c[f].call(g,b,e,g,d)}return e.exports};b('0')}({'0':function(e,m,l,k){'use strict';var f=function(){function a(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||false;a.configurable=true;if('value'in a)a.writable=true;Object.defineProperty(d,a.key,a)}}return function(b,c,d){if(c)a(b.prototype,c);if(d)a(b,d);return b}}();var g=d(['<button>','</button>'],['<button>','</button>']),b=d(['Hello, <hyper-foo onclick="','"></hyper-foo>'],['Hello, <hyper-foo onclick="','"></hyper-foo>']);function d(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function h(a,b){if(!(a instanceof b)){throw new TypeError('Cannot call a class as a function')}}function i(b,a){if(!b){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return a&&(typeof a==='object'||typeof a==='function')?a:b}function j(b,a){if(typeof a!=='function'&&a!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof a)}b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:false,writable:true,configurable:true}});if(a)Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a}var a=e('1');e('2');var c=function(c){j(b,c);function b(){var g;h(this,b);for(var e=arguments.length,f=Array(e),d=0;d<e;d++){f[d]=arguments[d]}var c=i(this,(g=b.__proto__||Object.getPrototypeOf(b)).call.apply(g,[this].concat(f)));c._render=a.bind(c);c.state={name:'> Click me <'};c.render();return c}f(b,[{key:'render',value:function a(){return this._render(g,this.state.name)}},{key:'setState',value:function a(a){Object.assign(this.state,a);this.render()}}]);return b}(a.Component);onload=function c(){a.bind(document.body)(b,function(a){return a.currentTarget.setState({name:'Clicked!'})})};customElements.define('hyper-foo',c)},'1':function(d,c,e,f){'use strict';var a=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(a){return typeof a}:function(a){return a&&typeof Symbol==='function'&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};var b=function(s){'use strict';f.document=s;function f(b){var a=H.get(this);if(!a||a.template!==(i?q(b):b)){a=a9.apply(this,arguments);H.set(this,a)}a8.apply(a.updates,arguments);return this}f.adopt=function a(a){return function(){v=false;f.apply(a,arguments);v=true;return a}};f.wire=function a(a,b){return arguments.length<1?y('html'):a==null?y(b||'html'):X(a,b||'html')};var e=1;var T=2;var g=3;var B=8;var l=11;var u='ownerSVGElement';var C='http://www.w3.org/2000/svg';var F=/^style$/i;var n='_hyper_html: ';var h=n+(Math.random()*new Date|0)+';';var p='<!--'+h+'-->';function D(c,d){var a=0,e=c.length,b=d.length;while(a<e){if(a<b&&c[a]===d[a])a++;else return a}return a===b?-1:a}function Y(b,a){switch(a.nodeType){case e:var d=b.childNodes;if(d[0]===a){c(d,1);break}t(b,a);break;case l:if(D(b.childNodes,a.childNodes)!==-1){t(b,a)}break;case g:b.textContent=a.textContent;break}}function c(c,d){var a=c.length,b;while(d<a--){b=c[a];b.parentNode.removeChild(b)}}function t(a,b){a.textContent='';a.appendChild(b)}function Z(b,f,e){var a=Q(b);if(e!==0){c(b.childNodes,e);d(a,f.slice(e));b.appendChild(a)}else{d(a,f);t(b,a)}}function _(d){return function e(f){switch(typeof f==='undefined'?'undefined':a(f)){case'string':case'number':case'boolean':d.innerHTML=f;break;case'function':e(f(d,d.children,0));break;default:if(G(f)){var g,h=f.length;if(h===1){e(f[0])}else{switch(h===0?'':a(f[0])){case'string':e(f.join(''));break;case'function':var i=b.call(d.children);for(g=0,h=f.length;g<h;g++){f[g]=f[g](d,i,g)}c(i,g);e(f.concat.apply([],f));break;default:g=D(d.childNodes,f);if(g!==-1)Z(d,f,g);break}}}else{Y(d,f)}break}}}function a0(d,g){var a=d.name,b=d.ownerElement,e=a.slice(0,2)==='on',f=a in b&&!(u in b||F.test(a)),c;if(f)g.push(b,a);return f?function d(d){if(c!==d){if(e&&c&&'handleEvent'in c){N(b,'remove',a,c)}c=d;if(e&&d&&'handleEvent'in d){N(b,'add',a,d)}else{b[a]=d}}}:function a(a){if(c!==a){c=a;d.value=a}}}function a3(b){var a;return function c(c){if(a!==c){a=c;b.textContent=c}}}function V(f,e){return function g(h){switch(typeof h==='undefined'?'undefined':a(h)){case'string':case'number':case'boolean':c(e,0);var j=R(f,h);e=b.call(j.childNodes);f.parentNode.insertBefore(j,f);break;case'function':g(h(f.parentNode,e,0));break;default:if(G(h)){var i,k=h.length;if(k===0){c(e,0);e=[]}else{switch(a(h[0])){case'string':g(h.join(''));break;case'function':var m=f.parentNode;for(i=0,k=h.length;i<k;i++){h[i]=h[i](m,e,i)}g(h.concat.apply([],h));break;default:i=D(e,h);if(i!==-1){var j=Q(f);c(e,i);h=h.slice(i);d(j,h);f.parentNode.insertBefore(j,f);e=e.slice(0,i).concat(h)}break}}}else{c(e,0);e=h.nodeType===l?b.call(h.childNodes):[h];f.parentNode.insertBefore(h,f)}break}}}function W(d,g){for(var b,e=j?h:p,c=d.attributes,a=0,f=c.length;a<f;a++){b=c[a];if(b.value===e){g.push(m('attr',j?d.attributes[z.shift()]:b))}}}function S(f,c){for(var a,j,d=f.childNodes,i=d.length,b=0;b<i;b++){a=d[b];switch(a.nodeType){case e:W(a,c);S(a,c);break;case B:if(a.textContent===h){if(i===1){c.push(m('any',f))}else if((b<1||d[b-1].nodeType===e)&&(b+1===i||d[b+1].nodeType===e)){c.push(m('virtual',a))}else{j=x(a,'');a.parentNode.replaceChild(j,a);c.push(m('text',j))}}break;case g:if(F.test(f.nodeName)&&a.textContent===p){c.push(m('text',f))}break}}}var i=(typeof navigator==='undefined'?'undefined':a(navigator))==='object'&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55;var j=function(){var a=s.createElement('p');a.innerHTML='<i data-i="" class=""></i>';return/class/i.test(a.firstChild.attributes[0].name)}();var b=[].slice;function $(g){for(var b,a=[],d=g.childNodes,c=0,f=d.length;c<f;c++){b=d[c];if(b.nodeType===e||K.call(b.textContent).length!==0){a.push(b)}}return a.length===1?a[0]:a}function R(a,b){return(u in a?a2:a1)(a,b)}function a1(j,e){var c;var f=j.ownerDocument;var a=f.createElement('template');var g='content'in a;var h=false;if(!g){c=f.createDocumentFragment();h=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(e)}if(h){var i=RegExp.$1;a.innerHTML='<table>'+e+'</table>';d(c,b.call(a.querySelectorAll(i)))}else{a.innerHTML=e;if(g){c=a.content}else{d(c,b.call(a.childNodes))}}return c}function a2(f,g){var a=f.ownerDocument;var c=a.createDocumentFragment();var e=a.createElementNS(C,'svg');e.innerHTML=g;d(c,b.call(e.childNodes));return c}function x(a,b){return a.ownerDocument.createTextNode(b)}function aa(c,u,t,j){for(var a=c,q=c.ownerDocument,e=t.path,i=r(u,e),l=0,s=e.length;l<s;l++){switch(e[l++]){case'attributes':var p=i.name;if(!c.hasAttribute(p)){c.setAttribute(p,'')}a=c.attributes[p];break;case'childNodes':switch(t.type){case'text':var f=U(i,'previous');var d=U(i,'next');do{a=c.firstChild;if(a&&a.nodeType===g){c.removeChild(a)}else{break}}while(a);var m=q.createDocumentFragment();if(f.length){m.appendChild(x(c,f))}a=m.appendChild(x(c,''));if(d.length){m.appendChild(x(c,d))}c.insertBefore(m,c.firstChild);break;case'virtual':var o=k(c);var n=k(i.parentNode);a=i.previousElementSibling;var f=a?e.indexOf.call(n,a)+1:-1;a=i.nextElementSibling;var d=a?e.indexOf.call(n,a):-1;a=q.createComment(h);switch(true){case d<0:d=o.length;break;case f<0:f=0;default:d=-(n.length-d);break}j.push.apply(j,b.call(o,f,d));c.insertBefore(a,j.length?j[j.length-1].nextElementSibling:b.call(o,d)[0]);if(j.length===0){L(c,a)}break}break;default:a=k(c)[e[l]]||c.appendChild(c.ownerDocument.createElement(r(u,e.slice(0,l+1)).nodeName));c=a;break}}return a}function Q(a){return a.ownerDocument.createDocumentFragment()}function U(a,c){var b=[];var d=c==='next'?b.push:b.unshift;do{a=a[c+'Sibling'];if(a&&a.nodeType===g){d.call(b,a.textContent)}else{return b.join('')}}while(true)}function N(a,b,c,d){a[b+'EventListener'](c.slice(2),d)}function M(b){for(var a=0,c=b.length;a<c;a++){b[a++].removeAttribute(b[a])}}function L(b,c){var a=c.previousSibling;if(a&&a.nodeType===g){b.removeChild(a);L(b,c)}}function P(c,b,d,e){var a;switch(c){case'any':a=_(b);break;case'attr':a=a0(b,d);break;case'text':a=a3(b);break;case'virtual':a=V(b,e);break}return a}function m(a,b){return{type:a,path:a5(b)}}var o=(typeof WeakMap==='undefined'?'undefined':a(WeakMap))===(typeof o==='undefined'?'undefined':a(o))?function(){return{get:function a(a){return a[n]},set:function a(a,b){Object.defineProperty(a,n,{configurable:true,value:b})}}}:WeakMap;var w=(typeof Map==='undefined'?'undefined':a(Map))===(typeof w==='undefined'?'undefined':a(w))?function(){var a=[],b=[];return{get:function c(c){return b[a.indexOf(c)]},set:function c(c,d){b[a.push(c)-1]=d}}}:Map;var G=Array.isArray||function(){var a={}.toString;var b=a.call([]);return function(c){return a.call(c)===b}}();var K=n.trim||function(){return this.replace(/^\s+|\s+$/g,'')};var I,q;if(i){I=Object.create(null);q=function a(b){var a=b.join(h);return I[a]||(I[a]=b)}}var d='append'in s?function(a,b){a.append.apply(a,b)}:function a(d,b){for(var a=0,c=b.length;a<c;a++){d.appendChild(b[a])}};var k='children'in s?function(a){return a.children}:function(h){for(var b,c=[],d=h.childNodes,f=0,a=0,g=d.length;a<g;a++){b=d[a];if(b.nodeType===e)c[f++]=b}return c};var r=j?function(b,c){for(var d,a=0,e=c.length;a<e;a++){d=c[a++];switch(d){case'children':b=k(b)[c[a]];break;default:b=b[d][c[a]];break}}return b}:function(b,c){for(var a=0,d=c.length;a<d;a++){b=b[c[a++]][c[a]]}return b};if(j){var z;var O=new RegExp('([^\\S][a-z]+[a-z0-9_-]*=)([\'"])'+p+'\\2','g');var J=function a(c,a,b){z.push(a.slice(1,-1));return a+b+h+b}}var H=new o;var E=new o;var A=new w;var v=true;function a4(e){var b=[];var a=e.join(p);if(j){z=[];a=a.replace(O,J)}var c=R(this,a);var d={fragment:c,paths:b};S(c,b);A.set(e,d);return d}function a5(a){var c=[];var b;switch(a.nodeType){case e:case l:b=a;break;case g:case B:b=a.parentNode;c.unshift('childNodes',c.indexOf.call(b.childNodes,a));break;case T:default:b=a.ownerElement;c.unshift('attributes',a.name);break}for(a=b;b=b.parentNode;a=b){c.unshift('children',c.indexOf.call(k(b),a))}return c}function a6(i,g){for(var d,a,e=[],f=[],b=0,h=g.length;b<h;b++){d=g[b];a=r(i,d.path);if(a.nodeType===l){c(a.childNodes,0);a=this}e[b]=P(d.type,a,f,[])}M(f);return e}function a7(h,f){for(var b,c,d=[],e=[],a=0,g=f.length;a<g;a++){c=[];b=f[a];d[a]=P(b.type,aa(this,h,b,c),e,c)}M(e);return d}function a8(){for(var a=1,b=arguments.length;a<b;a++){this[a-1](arguments[a])}}function a9(a){if(i)a=q(a);var c;var b=A.get(a)||a4.call(this,a);if(v){var d=b.fragment.cloneNode(true);c=a6.call(this,d,b.paths);t(this,d)}else{c=a7.call(this,b.fragment,b.paths)}return{template:a,updates:c}}function y(g){var m,k,a,c,h,e,j;function n(b){c=b.createDocumentFragment();a=g==='svg'?b.createElementNS(C,'svg'):c;h=f.bind(a)}function l(){if(e){e=false;if(g==='svg'){d(c,b.call(a.childNodes))}k=$(c)}return k}return g==='adopt'?function b(b){var d=arguments;if(i)b=q(b);if(j!==b){e=true;j=b;m=function b(b,i,j){if(e){if(j<i.length){a=i[j];c={ownerDocument:a.ownerDocument,childNodes:[a],children:[a]};h=f.adopt(c)}else{if(u in b)g='svg';n(b.ownerDocument)}}h.apply(null,d);return l()}}return m}:function a(a){if(i)a=q(a);if(j!==a){e=true;j=a;n(f.document)}h.apply(null,arguments);return l()}}function X(e,a){var b=E.get(e);var c=a.indexOf(':');var d=a;if(-1<c){d=a.slice(c+1);a=a.slice(0,c)||'html'}if(!b){b={};E.set(e,b)}return b[d]||(b[d]=y(a))}return f}(document);try{c.exports=b}catch(a){}},'2':function(b,c,d,e){'use strict';var a=b('1');a.Component=function(){var a=this.__proto__.constructor;return Reflect.construct(HTMLElement,arguments,a)};Object.setPrototypeOf(a.Component,HTMLElement);Object.setPrototypeOf(a.Component.prototype,HTMLElement.prototype)}},this))