var D2=Object.defineProperty;var F2=(e,t,n)=>t in e?D2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pe=(e,t,n)=>F2(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function BS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var HS={exports:{}},Nc={},US={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),z2=Symbol.for("react.portal"),B2=Symbol.for("react.fragment"),H2=Symbol.for("react.strict_mode"),U2=Symbol.for("react.profiler"),W2=Symbol.for("react.provider"),V2=Symbol.for("react.context"),Y2=Symbol.for("react.forward_ref"),K2=Symbol.for("react.suspense"),q2=Symbol.for("react.memo"),X2=Symbol.for("react.lazy"),Rv=Symbol.iterator;function G2(e){return e===null||typeof e!="object"?null:(e=Rv&&e[Rv]||e["@@iterator"],typeof e=="function"?e:null)}var WS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},VS=Object.assign,YS={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=YS,this.updater=n||WS}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function KS(){}KS.prototype=Yi.prototype;function ch(e,t,n){this.props=e,this.context=t,this.refs=YS,this.updater=n||WS}var fh=ch.prototype=new KS;fh.constructor=ch;VS(fh,Yi.prototype);fh.isPureReactComponent=!0;var Pv=Array.isArray,qS=Object.prototype.hasOwnProperty,dh={current:null},XS={key:!0,ref:!0,__self:!0,__source:!0};function GS(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)qS.call(t,r)&&!XS.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ns,type:e,key:i,ref:a,props:o,_owner:dh.current}}function Q2(e,t){return{$$typeof:Ns,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ph(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ns}function J2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Av=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J2(""+e.key):t.toString(36)}function lu(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ns:case z2:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Wf(a,0):r,Pv(o)?(n="",e!=null&&(n=e.replace(Av,"$&/")+"/"),lu(o,t,n,"",function(u){return u})):o!=null&&(ph(o)&&(o=Q2(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Av,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Pv(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Wf(i,s);a+=lu(i,t,n,l,o)}else if(l=G2(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Wf(i,s++),a+=lu(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fl(e,t,n){if(e==null)return e;var r=[],o=0;return lu(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Z2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},uu={transition:null},eR={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:dh};function QS(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:fl,forEach:function(e,t,n){fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fl(e,function(){t++}),t},toArray:function(e){return fl(e,function(t){return t})||[]},only:function(e){if(!ph(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Yi;fe.Fragment=B2;fe.Profiler=U2;fe.PureComponent=ch;fe.StrictMode=H2;fe.Suspense=K2;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;fe.act=QS;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=VS({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=dh.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)qS.call(t,l)&&!XS.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ns,type:e.type,key:o,ref:i,props:r,_owner:a}};fe.createContext=function(e){return e={$$typeof:V2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:W2,_context:e},e.Consumer=e};fe.createElement=GS;fe.createFactory=function(e){var t=GS.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Y2,render:e}};fe.isValidElement=ph;fe.lazy=function(e){return{$$typeof:X2,_payload:{_status:-1,_result:e},_init:Z2}};fe.memo=function(e,t){return{$$typeof:q2,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=uu.transition;uu.transition={};try{e()}finally{uu.transition=t}};fe.unstable_act=QS;fe.useCallback=function(e,t){return mt.current.useCallback(e,t)};fe.useContext=function(e){return mt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return mt.current.useEffect(e,t)};fe.useId=function(){return mt.current.useId()};fe.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return mt.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};fe.useRef=function(e){return mt.current.useRef(e)};fe.useState=function(e){return mt.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return mt.current.useTransition()};fe.version="18.3.1";US.exports=fe;var w=US.exports;const X=Vo(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tR=w,nR=Symbol.for("react.element"),rR=Symbol.for("react.fragment"),oR=Object.prototype.hasOwnProperty,iR=tR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aR={key:!0,ref:!0,__self:!0,__source:!0};function JS(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)oR.call(t,r)&&!aR.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nR,type:e,key:i,ref:a,props:o,_owner:iR.current}}Nc.Fragment=rR;Nc.jsx=JS;Nc.jsxs=JS;HS.exports=Nc;var C=HS.exports,ZS={exports:{}},zt={},e_={exports:{}},t_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var W=M.length;M.push(V);e:for(;0<W;){var te=W-1>>>1,D=M[te];if(0<o(D,V))M[te]=V,M[W]=D,W=te;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],W=M.pop();if(W!==V){M[0]=W;e:for(var te=0,D=M.length,B=D>>>1;te<B;){var j=2*(te+1)-1,F=M[j],T=j+1,ie=M[T];if(0>o(F,W))T<D&&0>o(ie,F)?(M[te]=ie,M[T]=W,te=T):(M[te]=F,M[j]=W,te=j);else if(T<D&&0>o(ie,W))M[te]=ie,M[T]=W,te=T;else break e}}return V}function o(M,V){var W=M.sortIndex-V.sortIndex;return W!==0?W:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,p=3,h=!1,m=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(M){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=M)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function S(M){if(v=!1,x(M),!m)if(n(l)!==null)m=!0,G(k);else{var V=n(u);V!==null&&J(S,V.startTime-M)}}function k(M,V){m=!1,v&&(v=!1,g(E),E=-1),h=!0;var W=p;try{for(x(V),d=n(l);d!==null&&(!(d.expirationTime>V)||M&&!L());){var te=d.callback;if(typeof te=="function"){d.callback=null,p=d.priorityLevel;var D=te(d.expirationTime<=V);V=e.unstable_now(),typeof D=="function"?d.callback=D:d===n(l)&&r(l),x(V)}else r(l);d=n(l)}if(d!==null)var B=!0;else{var j=n(u);j!==null&&J(S,j.startTime-V),B=!1}return B}finally{d=null,p=W,h=!1}}var _=!1,O=null,E=-1,R=5,P=-1;function L(){return!(e.unstable_now()-P<R)}function I(){if(O!==null){var M=e.unstable_now();P=M;var V=!0;try{V=O(!0,M)}finally{V?U():(_=!1,O=null)}}else _=!1}var U;if(typeof y=="function")U=function(){y(I)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,K=Q.port2;Q.port1.onmessage=I,U=function(){K.postMessage(null)}}else U=function(){b(I,0)};function G(M){O=M,_||(_=!0,U())}function J(M,V){E=b(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,G(k))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var W=p;p=V;try{return M()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=p;p=M;try{return V()}finally{p=W}},e.unstable_scheduleCallback=function(M,V,W){var te=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?te+W:te):W=te,M){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,M={id:c++,callback:V,priorityLevel:M,startTime:W,expirationTime:D,sortIndex:-1},W>te?(M.sortIndex=W,t(u,M),n(l)===null&&M===n(u)&&(v?(g(E),E=-1):v=!0,J(S,W-te))):(M.sortIndex=D,t(l,M),m||h||(m=!0,G(k))),M},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(M){var V=p;return function(){var W=p;p=V;try{return M.apply(this,arguments)}finally{p=W}}}})(t_);e_.exports=t_;var sR=e_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lR=w,It=sR;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n_=new Set,as={};function Yo(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(as[e]=t,e=0;e<t.length;e++)n_.add(t[e])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,uR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$v={},Lv={};function cR(e){return hp.call(Lv,e)?!0:hp.call($v,e)?!1:uR.test(e)?Lv[e]=!0:($v[e]=!0,!1)}function fR(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dR(e,t,n,r){if(t===null||typeof t>"u"||fR(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function hh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mh,hh);ot[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mh,hh);ot[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mh,hh);ot[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function gh(e,t,n,r){var o=ot.hasOwnProperty(t)?ot[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dR(t,n,o,r)&&(n=null),r||o===null?cR(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var br=lR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),si=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),o_=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),bp=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),Mv=Symbol.iterator;function la(e){return e===null||typeof e!="object"?null:(e=Mv&&e[Mv]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Vf;function Aa(e){if(Vf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vf=t&&t[1]||""}return`
`+Vf+e}var Yf=!1;function Kf(e,t){if(!e||Yf)return"";Yf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Yf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Aa(e):""}function pR(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=Kf(e.type,!1),e;case 11:return e=Kf(e.type.render,!1),e;case 1:return e=Kf(e.type,!0),e;default:return""}}function yp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case li:return"Fragment";case si:return"Portal";case gp:return"Profiler";case vh:return"StrictMode";case vp:return"Suspense";case bp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case o_:return(e.displayName||"Context")+".Consumer";case r_:return(e._context.displayName||"Context")+".Provider";case bh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yh:return t=e.displayName||null,t!==null?t:yp(e.type)||"Memo";case Tr:t=e._payload,e=e._init;try{return yp(e(t))}catch{}}return null}function mR(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yp(t);case 8:return t===vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hR(e){var t=a_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pl(e){e._valueTracker||(e._valueTracker=hR(e))}function s_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=a_(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Iu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xp(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l_(e,t){t=t.checked,t!=null&&gh(e,"checked",t,!1)}function wp(e,t){l_(e,t);var n=Qr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sp(e,t.type,Qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sp(e,t,n){(t!=="number"||Iu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $a=Array.isArray;function Si(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _p(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if($a(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qr(n)}}function u_(e,t){var n=Qr(t.value),r=Qr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function c_(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?c_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ml,f_=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ml.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ss(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gR=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(e){gR.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ha[t]=Ha[e]})});function d_(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ha.hasOwnProperty(e)&&Ha[e]?(""+t).trim():t+"px"}function p_(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=d_(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vR=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Op(e,t){if(t){if(vR[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ep(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=null;function xh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tp=null,_i=null,ki=null;function Fv(e){if(e=Ds(e)){if(typeof Tp!="function")throw Error(z(280));var t=e.stateNode;t&&(t=zc(t),Tp(e.stateNode,e.type,t))}}function m_(e){_i?ki?ki.push(e):ki=[e]:_i=e}function h_(){if(_i){var e=_i,t=ki;if(ki=_i=null,Fv(e),t)for(e=0;e<t.length;e++)Fv(t[e])}}function g_(e,t){return e(t)}function v_(){}var qf=!1;function b_(e,t,n){if(qf)return e(t,n);qf=!0;try{return g_(e,t,n)}finally{qf=!1,(_i!==null||ki!==null)&&(v_(),h_())}}function ls(e,t){var n=e.stateNode;if(n===null)return null;var r=zc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Rp=!1;if(fr)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Rp=!1}function bR(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ua=!1,Du=null,Fu=!1,Pp=null,yR={onError:function(e){Ua=!0,Du=e}};function xR(e,t,n,r,o,i,a,s,l){Ua=!1,Du=null,bR.apply(yR,arguments)}function wR(e,t,n,r,o,i,a,s,l){if(xR.apply(this,arguments),Ua){if(Ua){var u=Du;Ua=!1,Du=null}else throw Error(z(198));Fu||(Fu=!0,Pp=u)}}function Ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zv(e){if(Ko(e)!==e)throw Error(z(188))}function SR(e){var t=e.alternate;if(!t){if(t=Ko(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zv(o),e;if(i===r)return zv(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function x_(e){return e=SR(e),e!==null?w_(e):null}function w_(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=w_(e);if(t!==null)return t;e=e.sibling}return null}var S_=It.unstable_scheduleCallback,Bv=It.unstable_cancelCallback,_R=It.unstable_shouldYield,kR=It.unstable_requestPaint,We=It.unstable_now,OR=It.unstable_getCurrentPriorityLevel,wh=It.unstable_ImmediatePriority,__=It.unstable_UserBlockingPriority,zu=It.unstable_NormalPriority,ER=It.unstable_LowPriority,k_=It.unstable_IdlePriority,jc=null,Hn=null;function CR(e){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(jc,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:PR,TR=Math.log,RR=Math.LN2;function PR(e){return e>>>=0,e===0?32:31-(TR(e)/RR|0)|0}var hl=64,gl=4194304;function La(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=La(s):(i&=a,i!==0&&(r=La(i)))}else a=n&~o,a!==0?r=La(a):i!==0&&(r=La(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yn(t),o=1<<n,r|=e[n],t&=~o;return r}function AR(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $R(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-yn(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=AR(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Ap(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function O_(){var e=hl;return hl<<=1,!(hl&4194240)&&(hl=64),e}function Xf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=n}function LR(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-yn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Sh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xe=0;function E_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var C_,_h,T_,R_,P_,$p=!1,vl=[],Fr=null,zr=null,Br=null,us=new Map,cs=new Map,Ar=[],MR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hv(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":us.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(t.pointerId)}}function ca(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ds(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function NR(e,t,n,r,o){switch(t){case"focusin":return Fr=ca(Fr,e,t,n,r,o),!0;case"dragenter":return zr=ca(zr,e,t,n,r,o),!0;case"mouseover":return Br=ca(Br,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return us.set(i,ca(us.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,cs.set(i,ca(cs.get(i)||null,e,t,n,r,o)),!0}return!1}function A_(e){var t=_o(e.target);if(t!==null){var n=Ko(t);if(n!==null){if(t=n.tag,t===13){if(t=y_(n),t!==null){e.blockedOn=t,P_(e.priority,function(){T_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cp=r,n.target.dispatchEvent(r),Cp=null}else return t=Ds(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function Uv(e,t,n){cu(e)&&n.delete(t)}function jR(){$p=!1,Fr!==null&&cu(Fr)&&(Fr=null),zr!==null&&cu(zr)&&(zr=null),Br!==null&&cu(Br)&&(Br=null),us.forEach(Uv),cs.forEach(Uv)}function fa(e,t){e.blockedOn===t&&(e.blockedOn=null,$p||($p=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,jR)))}function fs(e){function t(o){return fa(o,e)}if(0<vl.length){fa(vl[0],e);for(var n=1;n<vl.length;n++){var r=vl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fr!==null&&fa(Fr,e),zr!==null&&fa(zr,e),Br!==null&&fa(Br,e),us.forEach(t),cs.forEach(t),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&Ar.shift()}var Oi=br.ReactCurrentBatchConfig,Hu=!0;function IR(e,t,n,r){var o=xe,i=Oi.transition;Oi.transition=null;try{xe=1,kh(e,t,n,r)}finally{xe=o,Oi.transition=i}}function DR(e,t,n,r){var o=xe,i=Oi.transition;Oi.transition=null;try{xe=4,kh(e,t,n,r)}finally{xe=o,Oi.transition=i}}function kh(e,t,n,r){if(Hu){var o=Lp(e,t,n,r);if(o===null)id(e,t,r,Uu,n),Hv(e,r);else if(NR(o,e,t,n,r))r.stopPropagation();else if(Hv(e,r),t&4&&-1<MR.indexOf(e)){for(;o!==null;){var i=Ds(o);if(i!==null&&C_(i),i=Lp(e,t,n,r),i===null&&id(e,t,r,Uu,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else id(e,t,r,null,n)}}var Uu=null;function Lp(e,t,n,r){if(Uu=null,e=xh(r),e=_o(e),e!==null)if(t=Ko(e),t===null)e=null;else if(n=t.tag,n===13){if(e=y_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uu=e,null}function $_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OR()){case wh:return 1;case __:return 4;case zu:case ER:return 16;case k_:return 536870912;default:return 16}default:return 16}}var Lr=null,Oh=null,fu=null;function L_(){if(fu)return fu;var e,t=Oh,n=t.length,r,o="value"in Lr?Lr.value:Lr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return fu=o.slice(e,1<r?1-r:void 0)}function du(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Wv(){return!1}function Bt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bl:Wv,this.isPropagationStopped=Wv,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=Bt(Ki),Is=ze({},Ki,{view:0,detail:0}),FR=Bt(Is),Gf,Qf,da,Ic=ze({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ch,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==da&&(da&&e.type==="mousemove"?(Gf=e.screenX-da.screenX,Qf=e.screenY-da.screenY):Qf=Gf=0,da=e),Gf)},movementY:function(e){return"movementY"in e?e.movementY:Qf}}),Vv=Bt(Ic),zR=ze({},Ic,{dataTransfer:0}),BR=Bt(zR),HR=ze({},Is,{relatedTarget:0}),Jf=Bt(HR),UR=ze({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),WR=Bt(UR),VR=ze({},Ki,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),YR=Bt(VR),KR=ze({},Ki,{data:0}),Yv=Bt(KR),qR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GR[e])?!!t[e]:!1}function Ch(){return QR}var JR=ze({},Is,{key:function(e){if(e.key){var t=qR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=du(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?XR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ch,charCode:function(e){return e.type==="keypress"?du(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?du(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZR=Bt(JR),eP=ze({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=Bt(eP),tP=ze({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ch}),nP=Bt(tP),rP=ze({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),oP=Bt(rP),iP=ze({},Ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aP=Bt(iP),sP=[9,13,27,32],Th=fr&&"CompositionEvent"in window,Wa=null;fr&&"documentMode"in document&&(Wa=document.documentMode);var lP=fr&&"TextEvent"in window&&!Wa,M_=fr&&(!Th||Wa&&8<Wa&&11>=Wa),qv=" ",Xv=!1;function N_(e,t){switch(e){case"keyup":return sP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ui=!1;function uP(e,t){switch(e){case"compositionend":return j_(t);case"keypress":return t.which!==32?null:(Xv=!0,qv);case"textInput":return e=t.data,e===qv&&Xv?null:e;default:return null}}function cP(e,t){if(ui)return e==="compositionend"||!Th&&N_(e,t)?(e=L_(),fu=Oh=Lr=null,ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M_&&t.locale!=="ko"?null:t.data;default:return null}}var fP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fP[e.type]:t==="textarea"}function I_(e,t,n,r){m_(r),t=Wu(t,"onChange"),0<t.length&&(n=new Eh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Va=null,ds=null;function dP(e){q_(e,0)}function Dc(e){var t=di(e);if(s_(t))return e}function pP(e,t){if(e==="change")return t}var D_=!1;if(fr){var Zf;if(fr){var ed="oninput"in document;if(!ed){var Qv=document.createElement("div");Qv.setAttribute("oninput","return;"),ed=typeof Qv.oninput=="function"}Zf=ed}else Zf=!1;D_=Zf&&(!document.documentMode||9<document.documentMode)}function Jv(){Va&&(Va.detachEvent("onpropertychange",F_),ds=Va=null)}function F_(e){if(e.propertyName==="value"&&Dc(ds)){var t=[];I_(t,ds,e,xh(e)),b_(dP,t)}}function mP(e,t,n){e==="focusin"?(Jv(),Va=t,ds=n,Va.attachEvent("onpropertychange",F_)):e==="focusout"&&Jv()}function hP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dc(ds)}function gP(e,t){if(e==="click")return Dc(t)}function vP(e,t){if(e==="input"||e==="change")return Dc(t)}function bP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _n=typeof Object.is=="function"?Object.is:bP;function ps(e,t){if(_n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!hp.call(t,o)||!_n(e[o],t[o]))return!1}return!0}function Zv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eb(e,t){var n=Zv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zv(n)}}function z_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function B_(){for(var e=window,t=Iu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Iu(e.document)}return t}function Rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yP(e){var t=B_(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&z_(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=eb(n,i);var a=eb(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xP=fr&&"documentMode"in document&&11>=document.documentMode,ci=null,Mp=null,Ya=null,Np=!1;function tb(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||ci==null||ci!==Iu(r)||(r=ci,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ya&&ps(Ya,r)||(Ya=r,r=Wu(Mp,"onSelect"),0<r.length&&(t=new Eh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fi={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},td={},H_={};fr&&(H_=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Fc(e){if(td[e])return td[e];if(!fi[e])return e;var t=fi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H_)return td[e]=t[n];return e}var U_=Fc("animationend"),W_=Fc("animationiteration"),V_=Fc("animationstart"),Y_=Fc("transitionend"),K_=new Map,nb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(e,t){K_.set(e,t),Yo(t,[e])}for(var nd=0;nd<nb.length;nd++){var rd=nb[nd],wP=rd.toLowerCase(),SP=rd[0].toUpperCase()+rd.slice(1);no(wP,"on"+SP)}no(U_,"onAnimationEnd");no(W_,"onAnimationIteration");no(V_,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(Y_,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_P=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function rb(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wR(r,t,void 0,e),e.currentTarget=null}function q_(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;rb(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;rb(o,s,u),i=l}}}if(Fu)throw e=Pp,Fu=!1,Pp=null,e}function Te(e,t){var n=t[zp];n===void 0&&(n=t[zp]=new Set);var r=e+"__bubble";n.has(r)||(X_(t,e,2,!1),n.add(r))}function od(e,t,n){var r=0;t&&(r|=4),X_(n,e,r,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[xl]){e[xl]=!0,n_.forEach(function(n){n!=="selectionchange"&&(_P.has(n)||od(n,!1,e),od(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,od("selectionchange",!1,t))}}function X_(e,t,n,r){switch($_(t)){case 1:var o=IR;break;case 4:o=DR;break;default:o=kh}n=o.bind(null,t,n,e),o=void 0,!Rp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function id(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=_o(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}b_(function(){var u=i,c=xh(n),d=[];e:{var p=K_.get(e);if(p!==void 0){var h=Eh,m=e;switch(e){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":h=ZR;break;case"focusin":m="focus",h=Jf;break;case"focusout":m="blur",h=Jf;break;case"beforeblur":case"afterblur":h=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=BR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=nP;break;case U_:case W_:case V_:h=WR;break;case Y_:h=oP;break;case"scroll":h=FR;break;case"wheel":h=aP;break;case"copy":case"cut":case"paste":h=YR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Kv}var v=(t&4)!==0,b=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var y=u,x;y!==null;){x=y;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=ls(y,g),S!=null&&v.push(hs(y,S,x)))),b)break;y=y.return}0<v.length&&(p=new h(p,m,null,n,c),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Cp&&(m=n.relatedTarget||n.fromElement)&&(_o(m)||m[dr]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?_o(m):null,m!==null&&(b=Ko(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=Vv,S="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(v=Kv,S="onPointerLeave",g="onPointerEnter",y="pointer"),b=h==null?p:di(h),x=m==null?p:di(m),p=new v(S,y+"leave",h,n,c),p.target=b,p.relatedTarget=x,S=null,_o(c)===u&&(v=new v(g,y+"enter",m,n,c),v.target=x,v.relatedTarget=b,S=v),b=S,h&&m)t:{for(v=h,g=m,y=0,x=v;x;x=ei(x))y++;for(x=0,S=g;S;S=ei(S))x++;for(;0<y-x;)v=ei(v),y--;for(;0<x-y;)g=ei(g),x--;for(;y--;){if(v===g||g!==null&&v===g.alternate)break t;v=ei(v),g=ei(g)}v=null}else v=null;h!==null&&ob(d,p,h,v,!1),m!==null&&b!==null&&ob(d,b,m,v,!0)}}e:{if(p=u?di(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=pP;else if(Gv(p))if(D_)k=vP;else{k=hP;var _=mP}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=gP);if(k&&(k=k(e,u))){I_(d,k,n,c);break e}_&&_(e,p,u),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Sp(p,"number",p.value)}switch(_=u?di(u):window,e){case"focusin":(Gv(_)||_.contentEditable==="true")&&(ci=_,Mp=u,Ya=null);break;case"focusout":Ya=Mp=ci=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,tb(d,n,c);break;case"selectionchange":if(xP)break;case"keydown":case"keyup":tb(d,n,c)}var O;if(Th)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ui?N_(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(M_&&n.locale!=="ko"&&(ui||E!=="onCompositionStart"?E==="onCompositionEnd"&&ui&&(O=L_()):(Lr=c,Oh="value"in Lr?Lr.value:Lr.textContent,ui=!0)),_=Wu(u,E),0<_.length&&(E=new Yv(E,e,null,n,c),d.push({event:E,listeners:_}),O?E.data=O:(O=j_(n),O!==null&&(E.data=O)))),(O=lP?uP(e,n):cP(e,n))&&(u=Wu(u,"onBeforeInput"),0<u.length&&(c=new Yv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=O))}q_(d,t)})}function hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ls(e,n),i!=null&&r.unshift(hs(e,i,o)),i=ls(e,t),i!=null&&r.push(hs(e,i,o))),e=e.return}return r}function ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ob(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=ls(n,i),l!=null&&a.unshift(hs(n,l,s))):o||(l=ls(n,i),l!=null&&a.push(hs(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kP=/\r\n?/g,OP=/\u0000|\uFFFD/g;function ib(e){return(typeof e=="string"?e:""+e).replace(kP,`
`).replace(OP,"")}function wl(e,t,n){if(t=ib(t),ib(e)!==t&&n)throw Error(z(425))}function Vu(){}var jp=null,Ip=null;function Dp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fp=typeof setTimeout=="function"?setTimeout:void 0,EP=typeof clearTimeout=="function"?clearTimeout:void 0,ab=typeof Promise=="function"?Promise:void 0,CP=typeof queueMicrotask=="function"?queueMicrotask:typeof ab<"u"?function(e){return ab.resolve(null).then(e).catch(TP)}:Fp;function TP(e){setTimeout(function(){throw e})}function ad(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fs(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),zn="__reactFiber$"+qi,gs="__reactProps$"+qi,dr="__reactContainer$"+qi,zp="__reactEvents$"+qi,RP="__reactListeners$"+qi,PP="__reactHandles$"+qi;function _o(e){var t=e[zn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dr]||n[zn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sb(e);e!==null;){if(n=e[zn])return n;e=sb(e)}return t}e=n,n=e.parentNode}return null}function Ds(e){return e=e[zn]||e[dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function zc(e){return e[gs]||null}var Bp=[],pi=-1;function ro(e){return{current:e}}function Pe(e){0>pi||(e.current=Bp[pi],Bp[pi]=null,pi--)}function Oe(e,t){pi++,Bp[pi]=e.current,e.current=t}var Jr={},ft=ro(Jr),kt=ro(!1),Mo=Jr;function Ai(e,t){var n=e.type.contextTypes;if(!n)return Jr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ot(e){return e=e.childContextTypes,e!=null}function Yu(){Pe(kt),Pe(ft)}function lb(e,t,n){if(ft.current!==Jr)throw Error(z(168));Oe(ft,t),Oe(kt,n)}function G_(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,mR(e)||"Unknown",o));return ze({},n,r)}function Ku(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jr,Mo=ft.current,Oe(ft,e),Oe(kt,kt.current),!0}function ub(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=G_(e,t,Mo),r.__reactInternalMemoizedMergedChildContext=e,Pe(kt),Pe(ft),Oe(ft,e)):Pe(kt),Oe(kt,n)}var nr=null,Bc=!1,sd=!1;function Q_(e){nr===null?nr=[e]:nr.push(e)}function AP(e){Bc=!0,Q_(e)}function oo(){if(!sd&&nr!==null){sd=!0;var e=0,t=xe;try{var n=nr;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nr=null,Bc=!1}catch(o){throw nr!==null&&(nr=nr.slice(e+1)),S_(wh,oo),o}finally{xe=t,sd=!1}}return null}var mi=[],hi=0,qu=null,Xu=0,Kt=[],qt=0,No=null,ar=1,sr="";function yo(e,t){mi[hi++]=Xu,mi[hi++]=qu,qu=e,Xu=t}function J_(e,t,n){Kt[qt++]=ar,Kt[qt++]=sr,Kt[qt++]=No,No=e;var r=ar;e=sr;var o=32-yn(r)-1;r&=~(1<<o),n+=1;var i=32-yn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,ar=1<<32-yn(t)+o|n<<o|r,sr=i+e}else ar=1<<i|n<<o|r,sr=e}function Ph(e){e.return!==null&&(yo(e,1),J_(e,1,0))}function Ah(e){for(;e===qu;)qu=mi[--hi],mi[hi]=null,Xu=mi[--hi],mi[hi]=null;for(;e===No;)No=Kt[--qt],Kt[qt]=null,sr=Kt[--qt],Kt[qt]=null,ar=Kt[--qt],Kt[qt]=null}var jt=null,Nt=null,Me=!1,dn=null;function Z_(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cb(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Nt=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=No!==null?{id:ar,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Nt=null,!0):!1;default:return!1}}function Hp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Up(e){if(Me){var t=Nt;if(t){var n=t;if(!cb(e,t)){if(Hp(e))throw Error(z(418));t=Hr(n.nextSibling);var r=jt;t&&cb(e,t)?Z_(r,n):(e.flags=e.flags&-4097|2,Me=!1,jt=e)}}else{if(Hp(e))throw Error(z(418));e.flags=e.flags&-4097|2,Me=!1,jt=e}}}function fb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function Sl(e){if(e!==jt)return!1;if(!Me)return fb(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dp(e.type,e.memoizedProps)),t&&(t=Nt)){if(Hp(e))throw ek(),Error(z(418));for(;t;)Z_(e,t),t=Hr(t.nextSibling)}if(fb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=Hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=jt?Hr(e.stateNode.nextSibling):null;return!0}function ek(){for(var e=Nt;e;)e=Hr(e.nextSibling)}function $i(){Nt=jt=null,Me=!1}function $h(e){dn===null?dn=[e]:dn.push(e)}var $P=br.ReactCurrentBatchConfig;function pa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function _l(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function db(e){var t=e._init;return t(e._payload)}function tk(e){function t(g,y){if(e){var x=g.deletions;x===null?(g.deletions=[y],g.flags|=16):x.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function o(g,y){return g=Yr(g,y),g.index=0,g.sibling=null,g}function i(g,y,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<y?(g.flags|=2,y):x):(g.flags|=2,y)):(g.flags|=1048576,y)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,y,x,S){return y===null||y.tag!==6?(y=md(x,g.mode,S),y.return=g,y):(y=o(y,x),y.return=g,y)}function l(g,y,x,S){var k=x.type;return k===li?c(g,y,x.props.children,S,x.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tr&&db(k)===y.type)?(S=o(y,x.props),S.ref=pa(g,y,x),S.return=g,S):(S=yu(x.type,x.key,x.props,null,g.mode,S),S.ref=pa(g,y,x),S.return=g,S)}function u(g,y,x,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=hd(x,g.mode,S),y.return=g,y):(y=o(y,x.children||[]),y.return=g,y)}function c(g,y,x,S,k){return y===null||y.tag!==7?(y=Ro(x,g.mode,S,k),y.return=g,y):(y=o(y,x),y.return=g,y)}function d(g,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=md(""+y,g.mode,x),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return x=yu(y.type,y.key,y.props,null,g.mode,x),x.ref=pa(g,null,y),x.return=g,x;case si:return y=hd(y,g.mode,x),y.return=g,y;case Tr:var S=y._init;return d(g,S(y._payload),x)}if($a(y)||la(y))return y=Ro(y,g.mode,x,null),y.return=g,y;_l(g,y)}return null}function p(g,y,x,S){var k=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:s(g,y,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case dl:return x.key===k?l(g,y,x,S):null;case si:return x.key===k?u(g,y,x,S):null;case Tr:return k=x._init,p(g,y,k(x._payload),S)}if($a(x)||la(x))return k!==null?null:c(g,y,x,S,null);_l(g,x)}return null}function h(g,y,x,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,s(y,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case dl:return g=g.get(S.key===null?x:S.key)||null,l(y,g,S,k);case si:return g=g.get(S.key===null?x:S.key)||null,u(y,g,S,k);case Tr:var _=S._init;return h(g,y,x,_(S._payload),k)}if($a(S)||la(S))return g=g.get(x)||null,c(y,g,S,k,null);_l(y,S)}return null}function m(g,y,x,S){for(var k=null,_=null,O=y,E=y=0,R=null;O!==null&&E<x.length;E++){O.index>E?(R=O,O=null):R=O.sibling;var P=p(g,O,x[E],S);if(P===null){O===null&&(O=R);break}e&&O&&P.alternate===null&&t(g,O),y=i(P,y,E),_===null?k=P:_.sibling=P,_=P,O=R}if(E===x.length)return n(g,O),Me&&yo(g,E),k;if(O===null){for(;E<x.length;E++)O=d(g,x[E],S),O!==null&&(y=i(O,y,E),_===null?k=O:_.sibling=O,_=O);return Me&&yo(g,E),k}for(O=r(g,O);E<x.length;E++)R=h(O,g,E,x[E],S),R!==null&&(e&&R.alternate!==null&&O.delete(R.key===null?E:R.key),y=i(R,y,E),_===null?k=R:_.sibling=R,_=R);return e&&O.forEach(function(L){return t(g,L)}),Me&&yo(g,E),k}function v(g,y,x,S){var k=la(x);if(typeof k!="function")throw Error(z(150));if(x=k.call(x),x==null)throw Error(z(151));for(var _=k=null,O=y,E=y=0,R=null,P=x.next();O!==null&&!P.done;E++,P=x.next()){O.index>E?(R=O,O=null):R=O.sibling;var L=p(g,O,P.value,S);if(L===null){O===null&&(O=R);break}e&&O&&L.alternate===null&&t(g,O),y=i(L,y,E),_===null?k=L:_.sibling=L,_=L,O=R}if(P.done)return n(g,O),Me&&yo(g,E),k;if(O===null){for(;!P.done;E++,P=x.next())P=d(g,P.value,S),P!==null&&(y=i(P,y,E),_===null?k=P:_.sibling=P,_=P);return Me&&yo(g,E),k}for(O=r(g,O);!P.done;E++,P=x.next())P=h(O,g,E,P.value,S),P!==null&&(e&&P.alternate!==null&&O.delete(P.key===null?E:P.key),y=i(P,y,E),_===null?k=P:_.sibling=P,_=P);return e&&O.forEach(function(I){return t(g,I)}),Me&&yo(g,E),k}function b(g,y,x,S){if(typeof x=="object"&&x!==null&&x.type===li&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case dl:e:{for(var k=x.key,_=y;_!==null;){if(_.key===k){if(k=x.type,k===li){if(_.tag===7){n(g,_.sibling),y=o(_,x.props.children),y.return=g,g=y;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tr&&db(k)===_.type){n(g,_.sibling),y=o(_,x.props),y.ref=pa(g,_,x),y.return=g,g=y;break e}n(g,_);break}else t(g,_);_=_.sibling}x.type===li?(y=Ro(x.props.children,g.mode,S,x.key),y.return=g,g=y):(S=yu(x.type,x.key,x.props,null,g.mode,S),S.ref=pa(g,y,x),S.return=g,g=S)}return a(g);case si:e:{for(_=x.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(g,y.sibling),y=o(y,x.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=hd(x,g.mode,S),y.return=g,g=y}return a(g);case Tr:return _=x._init,b(g,y,_(x._payload),S)}if($a(x))return m(g,y,x,S);if(la(x))return v(g,y,x,S);_l(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(g,y.sibling),y=o(y,x),y.return=g,g=y):(n(g,y),y=md(x,g.mode,S),y.return=g,g=y),a(g)):n(g,y)}return b}var Li=tk(!0),nk=tk(!1),Gu=ro(null),Qu=null,gi=null,Lh=null;function Mh(){Lh=gi=Qu=null}function Nh(e){var t=Gu.current;Pe(Gu),e._currentValue=t}function Wp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t){Qu=e,Lh=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Lh!==e)if(e={context:e,memoizedValue:t,next:null},gi===null){if(Qu===null)throw Error(z(308));gi=e,Qu.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return t}var ko=null;function jh(e){ko===null?ko=[e]:ko.push(e)}function rk(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,jh(t)):(n.next=o.next,o.next=n),t.interleaved=n,pr(e,r)}function pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rr=!1;function Ih(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ok(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,pr(e,n)}return o=r.interleaved,o===null?(t.next=t,jh(r)):(t.next=o.next,o.next=t),r.interleaved=t,pr(e,n)}function pu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}function pb(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ju(e,t,n,r){var o=e.updateQueue;Rr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,c=u=l=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,v=s;switch(p=t,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(h,d,p);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,p=typeof m=="function"?m.call(h,d,p):m,p==null)break e;d=ze({},d,p);break e;case 2:Rr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Io|=a,e.lanes=a,e.memoizedState=d}}function mb(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Fs={},Un=ro(Fs),vs=ro(Fs),bs=ro(Fs);function Oo(e){if(e===Fs)throw Error(z(174));return e}function Dh(e,t){switch(Oe(bs,t),Oe(vs,e),Oe(Un,Fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kp(t,e)}Pe(Un),Oe(Un,t)}function Mi(){Pe(Un),Pe(vs),Pe(bs)}function ik(e){Oo(bs.current);var t=Oo(Un.current),n=kp(t,e.type);t!==n&&(Oe(vs,e),Oe(Un,n))}function Fh(e){vs.current===e&&(Pe(Un),Pe(vs))}var De=ro(0);function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ld=[];function zh(){for(var e=0;e<ld.length;e++)ld[e]._workInProgressVersionPrimary=null;ld.length=0}var mu=br.ReactCurrentDispatcher,ud=br.ReactCurrentBatchConfig,jo=0,Fe=null,Ge=null,Je=null,ec=!1,Ka=!1,ys=0,LP=0;function at(){throw Error(z(321))}function Bh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_n(e[n],t[n]))return!1;return!0}function Hh(e,t,n,r,o,i){if(jo=i,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mu.current=e===null||e.memoizedState===null?IP:DP,e=n(r,o),Ka){i=0;do{if(Ka=!1,ys=0,25<=i)throw Error(z(301));i+=1,Je=Ge=null,t.updateQueue=null,mu.current=FP,e=n(r,o)}while(Ka)}if(mu.current=tc,t=Ge!==null&&Ge.next!==null,jo=0,Je=Ge=Fe=null,ec=!1,t)throw Error(z(300));return e}function Uh(){var e=ys!==0;return ys=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Fe.memoizedState=Je=e:Je=Je.next=e,Je}function Zt(){if(Ge===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Je===null?Fe.memoizedState:Je.next;if(t!==null)Je=t,Ge=e;else{if(e===null)throw Error(z(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Fe.memoizedState=Je=e:Je=Je.next=e}return Je}function xs(e,t){return typeof t=="function"?t(e):t}function cd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((jo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,Fe.lanes|=c,Io|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,_n(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Fe.lanes|=i,Io|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fd(e){var t=Zt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);_n(i,t.memoizedState)||(St=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ak(){}function sk(e,t){var n=Fe,r=Zt(),o=t(),i=!_n(r.memoizedState,o);if(i&&(r.memoizedState=o,St=!0),r=r.queue,Wh(ck.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ws(9,uk.bind(null,n,r,o,t),void 0,null),et===null)throw Error(z(349));jo&30||lk(n,t,o)}return o}function lk(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uk(e,t,n,r){t.value=n,t.getSnapshot=r,fk(t)&&dk(e)}function ck(e,t,n){return n(function(){fk(t)&&dk(e)})}function fk(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_n(e,n)}catch{return!0}}function dk(e){var t=pr(e,1);t!==null&&xn(t,e,1,-1)}function hb(e){var t=Mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},t.queue=e,e=e.dispatch=jP.bind(null,Fe,e),[t.memoizedState,e]}function ws(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pk(){return Zt().memoizedState}function hu(e,t,n,r){var o=Mn();Fe.flags|=e,o.memoizedState=ws(1|t,n,void 0,r===void 0?null:r)}function Hc(e,t,n,r){var o=Zt();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var a=Ge.memoizedState;if(i=a.destroy,r!==null&&Bh(r,a.deps)){o.memoizedState=ws(t,n,i,r);return}}Fe.flags|=e,o.memoizedState=ws(1|t,n,i,r)}function gb(e,t){return hu(8390656,8,e,t)}function Wh(e,t){return Hc(2048,8,e,t)}function mk(e,t){return Hc(4,2,e,t)}function hk(e,t){return Hc(4,4,e,t)}function gk(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vk(e,t,n){return n=n!=null?n.concat([e]):null,Hc(4,4,gk.bind(null,t,e),n)}function Vh(){}function bk(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yk(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xk(e,t,n){return jo&21?(_n(n,t)||(n=O_(),Fe.lanes|=n,Io|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function MP(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=ud.transition;ud.transition={};try{e(!1),t()}finally{xe=n,ud.transition=r}}function wk(){return Zt().memoizedState}function NP(e,t,n){var r=Vr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sk(e))_k(t,n);else if(n=rk(e,t,n,r),n!==null){var o=pt();xn(n,e,r,o),kk(n,t,r)}}function jP(e,t,n){var r=Vr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sk(e))_k(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,_n(s,a)){var l=t.interleaved;l===null?(o.next=o,jh(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=rk(e,t,o,r),n!==null&&(o=pt(),xn(n,e,r,o),kk(n,t,r))}}function Sk(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function _k(e,t){Ka=ec=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kk(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sh(e,n)}}var tc={readContext:Jt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},IP={readContext:Jt,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:gb,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hu(4194308,4,gk.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hu(4194308,4,e,t)},useInsertionEffect:function(e,t){return hu(4,2,e,t)},useMemo:function(e,t){var n=Mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=NP.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:hb,useDebugValue:Vh,useDeferredValue:function(e){return Mn().memoizedState=e},useTransition:function(){var e=hb(!1),t=e[0];return e=MP.bind(null,e[1]),Mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,o=Mn();if(Me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),et===null)throw Error(z(349));jo&30||lk(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gb(ck.bind(null,r,i,e),[e]),r.flags|=2048,ws(9,uk.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mn(),t=et.identifierPrefix;if(Me){var n=sr,r=ar;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=LP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},DP={readContext:Jt,useCallback:bk,useContext:Jt,useEffect:Wh,useImperativeHandle:vk,useInsertionEffect:mk,useLayoutEffect:hk,useMemo:yk,useReducer:cd,useRef:pk,useState:function(){return cd(xs)},useDebugValue:Vh,useDeferredValue:function(e){var t=Zt();return xk(t,Ge.memoizedState,e)},useTransition:function(){var e=cd(xs)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:ak,useSyncExternalStore:sk,useId:wk,unstable_isNewReconciler:!1},FP={readContext:Jt,useCallback:bk,useContext:Jt,useEffect:Wh,useImperativeHandle:vk,useInsertionEffect:mk,useLayoutEffect:hk,useMemo:yk,useReducer:fd,useRef:pk,useState:function(){return fd(xs)},useDebugValue:Vh,useDeferredValue:function(e){var t=Zt();return Ge===null?t.memoizedState=e:xk(t,Ge.memoizedState,e)},useTransition:function(){var e=fd(xs)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:ak,useSyncExternalStore:sk,useId:wk,unstable_isNewReconciler:!1};function cn(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uc={isMounted:function(e){return(e=e._reactInternals)?Ko(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),o=Vr(e),i=lr(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ur(e,i,o),t!==null&&(xn(t,e,o,r),pu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),o=Vr(e),i=lr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ur(e,i,o),t!==null&&(xn(t,e,o,r),pu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=Vr(e),o=lr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ur(e,o,r),t!==null&&(xn(t,e,r,n),pu(t,e,r))}};function vb(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ps(n,r)||!ps(o,i):!0}function Ok(e,t,n){var r=!1,o=Jr,i=t.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(o=Ot(t)?Mo:ft.current,r=t.contextTypes,i=(r=r!=null)?Ai(e,o):Jr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bb(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uc.enqueueReplaceState(t,t.state,null)}function Yp(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ih(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Jt(i):(i=Ot(t)?Mo:ft.current,o.context=Ai(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vp(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Uc.enqueueReplaceState(o,o.state,null),Ju(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,t){try{var n="",r=t;do n+=pR(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zP=typeof WeakMap=="function"?WeakMap:Map;function Ek(e,t,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rc||(rc=!0,rm=r),Kp(e,t)},n}function Ck(e,t,n){n=lr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Kp(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kp(e,t),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function yb(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=e5.bind(null,e,t,n),t.then(e,e))}function xb(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wb(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lr(-1,1),t.tag=2,Ur(n,t,1))),n.lanes|=1),e)}var BP=br.ReactCurrentOwner,St=!1;function dt(e,t,n,r){t.child=e===null?nk(t,null,n,r):Li(t,e.child,n,r)}function Sb(e,t,n,r,o){n=n.render;var i=t.ref;return Ei(t,o),r=Hh(e,t,n,r,i,o),n=Uh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mr(e,t,o)):(Me&&n&&Ph(t),t.flags|=1,dt(e,t,r,o),t.child)}function _b(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Zh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Tk(e,t,i,r,o)):(e=yu(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(a,r)&&e.ref===t.ref)return mr(e,t,o)}return t.flags|=1,e=Yr(i,r),e.ref=t.ref,e.return=t,t.child=e}function Tk(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ps(i,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,mr(e,t,o)}return qp(e,t,n,r,o)}function Rk(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(bi,Mt),Mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(bi,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Oe(bi,Mt),Mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oe(bi,Mt),Mt|=r;return dt(e,t,o,n),t.child}function Pk(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qp(e,t,n,r,o){var i=Ot(n)?Mo:ft.current;return i=Ai(t,i),Ei(t,o),n=Hh(e,t,n,r,i,o),r=Uh(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mr(e,t,o)):(Me&&r&&Ph(t),t.flags|=1,dt(e,t,n,o),t.child)}function kb(e,t,n,r,o){if(Ot(n)){var i=!0;Ku(t)}else i=!1;if(Ei(t,o),t.stateNode===null)gu(e,t),Ok(t,n,r),Yp(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=Ot(n)?Mo:ft.current,u=Ai(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&bb(t,a,r,u),Rr=!1;var p=t.memoizedState;a.state=p,Ju(t,r,a,o),l=t.memoizedState,s!==r||p!==l||kt.current||Rr?(typeof c=="function"&&(Vp(t,n,c,r),l=t.memoizedState),(s=Rr||vb(t,n,s,r,p,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ok(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:cn(t.type,s),a.props=u,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=Ot(n)?Mo:ft.current,l=Ai(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&bb(t,a,r,l),Rr=!1,p=t.memoizedState,a.state=p,Ju(t,r,a,o);var m=t.memoizedState;s!==d||p!==m||kt.current||Rr?(typeof h=="function"&&(Vp(t,n,h,r),m=t.memoizedState),(u=Rr||vb(t,n,u,r,p,m,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Xp(e,t,n,r,i,o)}function Xp(e,t,n,r,o,i){Pk(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&ub(t,n,!1),mr(e,t,i);r=t.stateNode,BP.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Li(t,e.child,null,i),t.child=Li(t,null,s,i)):dt(e,t,s,i),t.memoizedState=r.state,o&&ub(t,n,!0),t.child}function Ak(e){var t=e.stateNode;t.pendingContext?lb(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lb(e,t.context,!1),Dh(e,t.containerInfo)}function Ob(e,t,n,r,o){return $i(),$h(o),t.flags|=256,dt(e,t,n,r),t.child}var Gp={dehydrated:null,treeContext:null,retryLane:0};function Qp(e){return{baseLanes:e,cachePool:null,transitions:null}}function $k(e,t,n){var r=t.pendingProps,o=De.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Oe(De,o&1),e===null)return Up(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Yc(a,r,0,null),e=Ro(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qp(n),t.memoizedState=Gp,e):Yh(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return HP(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Yr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Yr(s,i):(i=Ro(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Qp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Gp,r}return i=e.child,e=i.sibling,r=Yr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yh(e,t){return t=Yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kl(e,t,n,r){return r!==null&&$h(r),Li(t,e.child,null,n),e=Yh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function HP(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=dd(Error(z(422))),kl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yc({mode:"visible",children:r.children},o,0,null),i=Ro(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Li(t,e.child,null,a),t.child.memoizedState=Qp(a),t.memoizedState=Gp,i);if(!(t.mode&1))return kl(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(z(419)),r=dd(i,r,void 0),kl(e,t,a,r)}if(s=(a&e.childLanes)!==0,St||s){if(r=et,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,pr(e,o),xn(r,e,o,-1))}return Jh(),r=dd(Error(z(421))),kl(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=t5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Nt=Hr(o.nextSibling),jt=t,Me=!0,dn=null,e!==null&&(Kt[qt++]=ar,Kt[qt++]=sr,Kt[qt++]=No,ar=e.id,sr=e.overflow,No=t),t=Yh(t,r.children),t.flags|=4096,t)}function Eb(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wp(e.return,t,n)}function pd(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lk(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(dt(e,t,r.children,n),r=De.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eb(e,n,t);else if(e.tag===19)Eb(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(De,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zu(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pd(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zu(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pd(t,!0,n,null,i);break;case"together":pd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Io|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function UP(e,t,n){switch(t.tag){case 3:Ak(t),$i();break;case 5:ik(t);break;case 1:Ot(t.type)&&Ku(t);break;case 4:Dh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oe(Gu,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(De,De.current&1),t.flags|=128,null):n&t.child.childLanes?$k(e,t,n):(Oe(De,De.current&1),e=mr(e,t,n),e!==null?e.sibling:null);Oe(De,De.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lk(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oe(De,De.current),r)break;return null;case 22:case 23:return t.lanes=0,Rk(e,t,n)}return mr(e,t,n)}var Mk,Jp,Nk,jk;Mk=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jp=function(){};Nk=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Oo(Un.current);var i=null;switch(n){case"input":o=xp(e,o),r=xp(e,r),i=[];break;case"select":o=ze({},o,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":o=_p(e,o),r=_p(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vu)}Op(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(as.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(as.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};jk=function(e,t,n,r){n!==r&&(t.flags|=4)};function ma(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function WP(e,t,n){var r=t.pendingProps;switch(Ah(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return Ot(t.type)&&Yu(),st(t),null;case 3:return r=t.stateNode,Mi(),Pe(kt),Pe(ft),zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dn!==null&&(am(dn),dn=null))),Jp(e,t),st(t),null;case 5:Fh(t);var o=Oo(bs.current);if(n=t.type,e!==null&&t.stateNode!=null)Nk(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return st(t),null}if(e=Oo(Un.current),Sl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zn]=t,r[gs]=i,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(o=0;o<Ma.length;o++)Te(Ma[o],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Nv(r,i),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Te("invalid",r);break;case"textarea":Iv(r,i),Te("invalid",r)}Op(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&wl(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&wl(r.textContent,s,e),o=["children",""+s]):as.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Te("scroll",r)}switch(n){case"input":pl(r),jv(r,i,!0);break;case"textarea":pl(r),Dv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=c_(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zn]=t,e[gs]=r,Mk(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ep(n,r),n){case"dialog":Te("cancel",e),Te("close",e),o=r;break;case"iframe":case"object":case"embed":Te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ma.length;o++)Te(Ma[o],e);o=r;break;case"source":Te("error",e),o=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),o=r;break;case"details":Te("toggle",e),o=r;break;case"input":Nv(e,r),o=xp(e,r),Te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ze({},r,{value:void 0}),Te("invalid",e);break;case"textarea":Iv(e,r),o=_p(e,r),Te("invalid",e);break;default:o=r}Op(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?p_(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f_(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ss(e,l):typeof l=="number"&&ss(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(as.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Te("scroll",e):l!=null&&gh(e,i,l,a))}switch(n){case"input":pl(e),jv(e,r,!1);break;case"textarea":pl(e),Dv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Si(e,!!r.multiple,i,!1):r.defaultValue!=null&&Si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)jk(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Oo(bs.current),Oo(Un.current),Sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[zn]=t,(i=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:wl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=t,t.stateNode=r}return st(t),null;case 13:if(Pe(De),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Nt!==null&&t.mode&1&&!(t.flags&128))ek(),$i(),t.flags|=98560,i=!1;else if(i=Sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[zn]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else dn!==null&&(am(dn),dn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||De.current&1?Qe===0&&(Qe=3):Jh())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Mi(),Jp(e,t),e===null&&ms(t.stateNode.containerInfo),st(t),null;case 10:return Nh(t.type._context),st(t),null;case 17:return Ot(t.type)&&Yu(),st(t),null;case 19:if(Pe(De),i=t.memoizedState,i===null)return st(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ma(i,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Zu(e),a!==null){for(t.flags|=128,ma(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(De,De.current&1|2),t.child}e=e.sibling}i.tail!==null&&We()>ji&&(t.flags|=128,r=!0,ma(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zu(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ma(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Me)return st(t),null}else 2*We()-i.renderingStartTime>ji&&n!==1073741824&&(t.flags|=128,r=!0,ma(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=We(),t.sibling=null,n=De.current,Oe(De,r?n&1|2:n&1),t):(st(t),null);case 22:case 23:return Qh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function VP(e,t){switch(Ah(t),t.tag){case 1:return Ot(t.type)&&Yu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mi(),Pe(kt),Pe(ft),zh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fh(t),null;case 13:if(Pe(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(De),null;case 4:return Mi(),null;case 10:return Nh(t.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var Ol=!1,lt=!1,YP=typeof WeakSet=="function"?WeakSet:Set,q=null;function vi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function Zp(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var Cb=!1;function KP(e,t){if(jp=Hu,e=B_(),Rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++u===o&&(s=a),p===i&&++c===r&&(l=a),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ip={focusedElem:e,selectionRange:n},Hu=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,b=m.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:cn(t.type,v),b);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){Ue(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return m=Cb,Cb=!1,m}function qa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zp(t,n,i)}o=o.next}while(o!==r)}}function Wc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function em(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ik(e){var t=e.alternate;t!==null&&(e.alternate=null,Ik(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zn],delete t[gs],delete t[zp],delete t[RP],delete t[PP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dk(e){return e.tag===5||e.tag===3||e.tag===4}function Tb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dk(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vu));else if(r!==4&&(e=e.child,e!==null))for(tm(e,t,n),e=e.sibling;e!==null;)tm(e,t,n),e=e.sibling}function nm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nm(e,t,n),e=e.sibling;e!==null;)nm(e,t,n),e=e.sibling}var nt=null,fn=!1;function kr(e,t,n){for(n=n.child;n!==null;)Fk(e,t,n),n=n.sibling}function Fk(e,t,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:lt||vi(n,t);case 6:var r=nt,o=fn;nt=null,kr(e,t,n),nt=r,fn=o,nt!==null&&(fn?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(fn?(e=nt,n=n.stateNode,e.nodeType===8?ad(e.parentNode,n):e.nodeType===1&&ad(e,n),fs(e)):ad(nt,n.stateNode));break;case 4:r=nt,o=fn,nt=n.stateNode.containerInfo,fn=!0,kr(e,t,n),nt=r,fn=o;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Zp(n,t,a),o=o.next}while(o!==r)}kr(e,t,n);break;case 1:if(!lt&&(vi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ue(n,t,s)}kr(e,t,n);break;case 21:kr(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,kr(e,t,n),lt=r):kr(e,t,n);break;default:kr(e,t,n)}}function Rb(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new YP),t.forEach(function(r){var o=n5.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:nt=s.stateNode,fn=!1;break e;case 3:nt=s.stateNode.containerInfo,fn=!0;break e;case 4:nt=s.stateNode.containerInfo,fn=!0;break e}s=s.return}if(nt===null)throw Error(z(160));Fk(i,a,o),nt=null,fn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zk(t,e),t=t.sibling}function zk(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),Rn(e),r&4){try{qa(3,e,e.return),Wc(3,e)}catch(v){Ue(e,e.return,v)}try{qa(5,e,e.return)}catch(v){Ue(e,e.return,v)}}break;case 1:ln(t,e),Rn(e),r&512&&n!==null&&vi(n,n.return);break;case 5:if(ln(t,e),Rn(e),r&512&&n!==null&&vi(n,n.return),e.flags&32){var o=e.stateNode;try{ss(o,"")}catch(v){Ue(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&l_(o,i),Ep(s,a);var u=Ep(s,i);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?p_(o,d):c==="dangerouslySetInnerHTML"?f_(o,d):c==="children"?ss(o,d):gh(o,c,d,u)}switch(s){case"input":wp(o,i);break;case"textarea":u_(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Si(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Si(o,!!i.multiple,i.defaultValue,!0):Si(o,!!i.multiple,i.multiple?[]:"",!1))}o[gs]=i}catch(v){Ue(e,e.return,v)}}break;case 6:if(ln(t,e),Rn(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Ue(e,e.return,v)}}break;case 3:if(ln(t,e),Rn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(t.containerInfo)}catch(v){Ue(e,e.return,v)}break;case 4:ln(t,e),Rn(e);break;case 13:ln(t,e),Rn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xh=We())),r&4&&Rb(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||c,ln(t,e),lt=u):ln(t,e),Rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(q=e,c=e.child;c!==null;){for(d=q=c;q!==null;){switch(p=q,h=p.child,p.tag){case 0:case 11:case 14:case 15:qa(4,p,p.return);break;case 1:vi(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Ue(r,n,v)}}break;case 5:vi(p,p.return);break;case 22:if(p.memoizedState!==null){Ab(d);continue}}h!==null?(h.return=p,q=h):Ab(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=d_("display",a))}catch(v){Ue(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ue(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(t,e),Rn(e),r&4&&Rb(e);break;case 21:break;default:ln(t,e),Rn(e)}}function Rn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dk(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ss(o,""),r.flags&=-33);var i=Tb(e);nm(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Tb(e);tm(e,s,a);break;default:throw Error(z(161))}}catch(l){Ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qP(e,t,n){q=e,Bk(e)}function Bk(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var o=q,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ol;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||lt;s=Ol;var u=lt;if(Ol=a,(lt=l)&&!u)for(q=o;q!==null;)a=q,l=a.child,a.tag===22&&a.memoizedState!==null?$b(o):l!==null?(l.return=a,q=l):$b(o);for(;i!==null;)q=i,Bk(i),i=i.sibling;q=o,Ol=s,lt=u}Pb(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,q=i):Pb(e)}}function Pb(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Wc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:cn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mb(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mb(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}lt||t.flags&512&&em(t)}catch(p){Ue(t,t.return,p)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Ab(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function $b(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wc(4,t)}catch(l){Ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Ue(t,o,l)}}var i=t.return;try{em(t)}catch(l){Ue(t,i,l)}break;case 5:var a=t.return;try{em(t)}catch(l){Ue(t,a,l)}}}catch(l){Ue(t,t.return,l)}if(t===e){q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,q=s;break}q=t.return}}var XP=Math.ceil,nc=br.ReactCurrentDispatcher,Kh=br.ReactCurrentOwner,Qt=br.ReactCurrentBatchConfig,me=0,et=null,Ke=null,rt=0,Mt=0,bi=ro(0),Qe=0,Ss=null,Io=0,Vc=0,qh=0,Xa=null,xt=null,Xh=0,ji=1/0,tr=null,rc=!1,rm=null,Wr=null,El=!1,Mr=null,oc=0,Ga=0,om=null,vu=-1,bu=0;function pt(){return me&6?We():vu!==-1?vu:vu=We()}function Vr(e){return e.mode&1?me&2&&rt!==0?rt&-rt:$P.transition!==null?(bu===0&&(bu=O_()),bu):(e=xe,e!==0||(e=window.event,e=e===void 0?16:$_(e.type)),e):1}function xn(e,t,n,r){if(50<Ga)throw Ga=0,om=null,Error(z(185));js(e,n,r),(!(me&2)||e!==et)&&(e===et&&(!(me&2)&&(Vc|=n),Qe===4&&$r(e,rt)),Et(e,r),n===1&&me===0&&!(t.mode&1)&&(ji=We()+500,Bc&&oo()))}function Et(e,t){var n=e.callbackNode;$R(e,t);var r=Bu(e,e===et?rt:0);if(r===0)n!==null&&Bv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bv(n),t===1)e.tag===0?AP(Lb.bind(null,e)):Q_(Lb.bind(null,e)),CP(function(){!(me&6)&&oo()}),n=null;else{switch(E_(r)){case 1:n=wh;break;case 4:n=__;break;case 16:n=zu;break;case 536870912:n=k_;break;default:n=zu}n=Xk(n,Hk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hk(e,t){if(vu=-1,bu=0,me&6)throw Error(z(327));var n=e.callbackNode;if(Ci()&&e.callbackNode!==n)return null;var r=Bu(e,e===et?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ic(e,r);else{t=r;var o=me;me|=2;var i=Wk();(et!==e||rt!==t)&&(tr=null,ji=We()+500,To(e,t));do try{JP();break}catch(s){Uk(e,s)}while(!0);Mh(),nc.current=i,me=o,Ke!==null?t=0:(et=null,rt=0,t=Qe)}if(t!==0){if(t===2&&(o=Ap(e),o!==0&&(r=o,t=im(e,o))),t===1)throw n=Ss,To(e,0),$r(e,r),Et(e,We()),n;if(t===6)$r(e,r);else{if(o=e.current.alternate,!(r&30)&&!GP(o)&&(t=ic(e,r),t===2&&(i=Ap(e),i!==0&&(r=i,t=im(e,i))),t===1))throw n=Ss,To(e,0),$r(e,r),Et(e,We()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:xo(e,xt,tr);break;case 3:if($r(e,r),(r&130023424)===r&&(t=Xh+500-We(),10<t)){if(Bu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fp(xo.bind(null,e,xt,tr),t);break}xo(e,xt,tr);break;case 4:if($r(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-yn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XP(r/1960))-r,10<r){e.timeoutHandle=Fp(xo.bind(null,e,xt,tr),r);break}xo(e,xt,tr);break;case 5:xo(e,xt,tr);break;default:throw Error(z(329))}}}return Et(e,We()),e.callbackNode===n?Hk.bind(null,e):null}function im(e,t){var n=Xa;return e.current.memoizedState.isDehydrated&&(To(e,t).flags|=256),e=ic(e,t),e!==2&&(t=xt,xt=n,t!==null&&am(t)),e}function am(e){xt===null?xt=e:xt.push.apply(xt,e)}function GP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!_n(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $r(e,t){for(t&=~qh,t&=~Vc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),r=1<<n;e[n]=-1,t&=~r}}function Lb(e){if(me&6)throw Error(z(327));Ci();var t=Bu(e,0);if(!(t&1))return Et(e,We()),null;var n=ic(e,t);if(e.tag!==0&&n===2){var r=Ap(e);r!==0&&(t=r,n=im(e,r))}if(n===1)throw n=Ss,To(e,0),$r(e,t),Et(e,We()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xo(e,xt,tr),Et(e,We()),null}function Gh(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(ji=We()+500,Bc&&oo())}}function Do(e){Mr!==null&&Mr.tag===0&&!(me&6)&&Ci();var t=me;me|=1;var n=Qt.transition,r=xe;try{if(Qt.transition=null,xe=1,e)return e()}finally{xe=r,Qt.transition=n,me=t,!(me&6)&&oo()}}function Qh(){Mt=bi.current,Pe(bi)}function To(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,EP(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:Mi(),Pe(kt),Pe(ft),zh();break;case 5:Fh(r);break;case 4:Mi();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:Nh(r.type._context);break;case 22:case 23:Qh()}n=n.return}if(et=e,Ke=e=Yr(e.current,null),rt=Mt=t,Qe=0,Ss=null,qh=Vc=Io=0,xt=Xa=null,ko!==null){for(t=0;t<ko.length;t++)if(n=ko[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ko=null}return e}function Uk(e,t){do{var n=Ke;try{if(Mh(),mu.current=tc,ec){for(var r=Fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ec=!1}if(jo=0,Je=Ge=Fe=null,Ka=!1,ys=0,Kh.current=null,n===null||n.return===null){Qe=1,Ss=t,Ke=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=rt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=xb(a);if(h!==null){h.flags&=-257,wb(h,a,s,i,t),h.mode&1&&yb(i,u,t),t=h,l=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(l),t.updateQueue=v}else m.add(l);break e}else{if(!(t&1)){yb(i,u,t),Jh();break e}l=Error(z(426))}}else if(Me&&s.mode&1){var b=xb(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),wb(b,a,s,i,t),$h(Ni(l,s));break e}}i=l=Ni(l,s),Qe!==4&&(Qe=2),Xa===null?Xa=[i]:Xa.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ek(i,l,t);pb(i,g);break e;case 1:s=l;var y=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wr===null||!Wr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ck(i,s,t);pb(i,S);break e}}i=i.return}while(i!==null)}Yk(n)}catch(k){t=k,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Wk(){var e=nc.current;return nc.current=tc,e===null?tc:e}function Jh(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||!(Io&268435455)&&!(Vc&268435455)||$r(et,rt)}function ic(e,t){var n=me;me|=2;var r=Wk();(et!==e||rt!==t)&&(tr=null,To(e,t));do try{QP();break}catch(o){Uk(e,o)}while(!0);if(Mh(),me=n,nc.current=r,Ke!==null)throw Error(z(261));return et=null,rt=0,Qe}function QP(){for(;Ke!==null;)Vk(Ke)}function JP(){for(;Ke!==null&&!_R();)Vk(Ke)}function Vk(e){var t=qk(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Yk(e):Ke=t,Kh.current=null}function Yk(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=VP(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ke=null;return}}else if(n=WP(n,t,Mt),n!==null){Ke=n;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Qe===0&&(Qe=5)}function xo(e,t,n){var r=xe,o=Qt.transition;try{Qt.transition=null,xe=1,ZP(e,t,n,r)}finally{Qt.transition=o,xe=r}return null}function ZP(e,t,n,r){do Ci();while(Mr!==null);if(me&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(LR(e,i),e===et&&(Ke=et=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Xk(zu,function(){return Ci(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Qt.transition,Qt.transition=null;var a=xe;xe=1;var s=me;me|=4,Kh.current=null,KP(e,n),zk(n,e),yP(Ip),Hu=!!jp,Ip=jp=null,e.current=n,qP(n),kR(),me=s,xe=a,Qt.transition=i}else e.current=n;if(El&&(El=!1,Mr=e,oc=o),i=e.pendingLanes,i===0&&(Wr=null),CR(n.stateNode),Et(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(rc)throw rc=!1,e=rm,rm=null,e;return oc&1&&e.tag!==0&&Ci(),i=e.pendingLanes,i&1?e===om?Ga++:(Ga=0,om=e):Ga=0,oo(),null}function Ci(){if(Mr!==null){var e=E_(oc),t=Qt.transition,n=xe;try{if(Qt.transition=null,xe=16>e?16:e,Mr===null)var r=!1;else{if(e=Mr,Mr=null,oc=0,me&6)throw Error(z(331));var o=me;for(me|=4,q=e.current;q!==null;){var i=q,a=i.child;if(q.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:qa(8,c,i)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var p=c.sibling,h=c.return;if(Ik(c),c===u){q=null;break}if(p!==null){p.return=h,q=p;break}q=h}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}q=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,q=a;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qa(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,q=g;break e}q=i.return}}var y=e.current;for(q=y;q!==null;){a=q;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,q=x;else e:for(a=y;q!==null;){if(s=q,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wc(9,s)}}catch(k){Ue(s,s.return,k)}if(s===a){q=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}if(me=o,oo(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(jc,e)}catch{}r=!0}return r}finally{xe=n,Qt.transition=t}}return!1}function Mb(e,t,n){t=Ni(n,t),t=Ek(e,t,1),e=Ur(e,t,1),t=pt(),e!==null&&(js(e,1,t),Et(e,t))}function Ue(e,t,n){if(e.tag===3)Mb(e,e,n);else for(;t!==null;){if(t.tag===3){Mb(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){e=Ni(n,e),e=Ck(t,e,1),t=Ur(t,e,1),e=pt(),t!==null&&(js(t,1,e),Et(t,e));break}}t=t.return}}function e5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(rt&n)===n&&(Qe===4||Qe===3&&(rt&130023424)===rt&&500>We()-Xh?To(e,0):qh|=n),Et(e,t)}function Kk(e,t){t===0&&(e.mode&1?(t=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):t=1);var n=pt();e=pr(e,t),e!==null&&(js(e,t,n),Et(e,n))}function t5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kk(e,n)}function n5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Kk(e,n)}var qk;qk=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,UP(e,t,n);St=!!(e.flags&131072)}else St=!1,Me&&t.flags&1048576&&J_(t,Xu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gu(e,t),e=t.pendingProps;var o=Ai(t,ft.current);Ei(t,n),o=Hh(null,t,r,e,o,n);var i=Uh();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ot(r)?(i=!0,Ku(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ih(t),o.updater=Uc,t.stateNode=o,o._reactInternals=t,Yp(t,r,e,n),t=Xp(null,t,r,!0,i,n)):(t.tag=0,Me&&i&&Ph(t),dt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gu(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=o5(r),e=cn(r,e),o){case 0:t=qp(null,t,r,e,n);break e;case 1:t=kb(null,t,r,e,n);break e;case 11:t=Sb(null,t,r,e,n);break e;case 14:t=_b(null,t,r,cn(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:cn(r,o),qp(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:cn(r,o),kb(e,t,r,o,n);case 3:e:{if(Ak(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ok(e,t),Ju(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ni(Error(z(423)),t),t=Ob(e,t,r,n,o);break e}else if(r!==o){o=Ni(Error(z(424)),t),t=Ob(e,t,r,n,o);break e}else for(Nt=Hr(t.stateNode.containerInfo.firstChild),jt=t,Me=!0,dn=null,n=nk(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===o){t=mr(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return ik(t),e===null&&Up(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Dp(r,o)?a=null:i!==null&&Dp(r,i)&&(t.flags|=32),Pk(e,t),dt(e,t,a,n),t.child;case 6:return e===null&&Up(t),null;case 13:return $k(e,t,n);case 4:return Dh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Li(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:cn(r,o),Sb(e,t,r,o,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Oe(Gu,r._currentValue),r._currentValue=a,i!==null)if(_n(i.value,a)){if(i.children===o.children&&!kt.current){t=mr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=lr(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Wp(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Wp(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}dt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ei(t,n),o=Jt(o),r=r(o),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,o=cn(r,t.pendingProps),o=cn(r.type,o),_b(e,t,r,o,n);case 15:return Tk(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:cn(r,o),gu(e,t),t.tag=1,Ot(r)?(e=!0,Ku(t)):e=!1,Ei(t,n),Ok(t,r,o),Yp(t,r,o,n),Xp(null,t,r,!0,e,n);case 19:return Lk(e,t,n);case 22:return Rk(e,t,n)}throw Error(z(156,t.tag))};function Xk(e,t){return S_(e,t)}function r5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,r){return new r5(e,t,n,r)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o5(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bh)return 11;if(e===yh)return 14}return 2}function Yr(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yu(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Zh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case li:return Ro(n.children,o,i,t);case vh:a=8,o|=8;break;case gp:return e=Gt(12,n,t,o|2),e.elementType=gp,e.lanes=i,e;case vp:return e=Gt(13,n,t,o),e.elementType=vp,e.lanes=i,e;case bp:return e=Gt(19,n,t,o),e.elementType=bp,e.lanes=i,e;case i_:return Yc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case r_:a=10;break e;case o_:a=9;break e;case bh:a=11;break e;case yh:a=14;break e;case Tr:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Gt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ro(e,t,n,r){return e=Gt(7,e,r,t),e.lanes=n,e}function Yc(e,t,n,r){return e=Gt(22,e,r,t),e.elementType=i_,e.lanes=n,e.stateNode={isHidden:!1},e}function md(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function hd(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i5(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xf(0),this.expirationTimes=Xf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xf(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eg(e,t,n,r,o,i,a,s,l){return e=new i5(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Gt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ih(i),e}function a5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gk(e){if(!e)return Jr;e=e._reactInternals;e:{if(Ko(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ot(n))return G_(e,n,t)}return t}function Qk(e,t,n,r,o,i,a,s,l){return e=eg(n,r,!0,e,o,i,a,s,l),e.context=Gk(null),n=e.current,r=pt(),o=Vr(n),i=lr(r,o),i.callback=t??null,Ur(n,i,o),e.current.lanes=o,js(e,o,r),Et(e,r),e}function Kc(e,t,n,r){var o=t.current,i=pt(),a=Vr(o);return n=Gk(n),t.context===null?t.context=n:t.pendingContext=n,t=lr(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ur(o,t,a),e!==null&&(xn(e,o,a,i),pu(e,o,a)),a}function ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nb(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tg(e,t){Nb(e,t),(e=e.alternate)&&Nb(e,t)}function s5(){return null}var Jk=typeof reportError=="function"?reportError:function(e){console.error(e)};function ng(e){this._internalRoot=e}qc.prototype.render=ng.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Kc(e,t,null,null)};qc.prototype.unmount=ng.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Do(function(){Kc(null,e,null,null)}),t[dr]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=R_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ar.length&&t!==0&&t<Ar[n].priority;n++);Ar.splice(n,0,e),n===0&&A_(e)}};function rg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jb(){}function l5(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ac(a);i.call(u)}}var a=Qk(t,r,e,0,null,!1,!1,"",jb);return e._reactRootContainer=a,e[dr]=a.current,ms(e.nodeType===8?e.parentNode:e),Do(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ac(l);s.call(u)}}var l=eg(e,0,!1,null,null,!1,!1,"",jb);return e._reactRootContainer=l,e[dr]=l.current,ms(e.nodeType===8?e.parentNode:e),Do(function(){Kc(t,l,n,r)}),l}function Gc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ac(a);s.call(l)}}Kc(t,a,e,o)}else a=l5(n,t,e,o,r);return ac(a)}C_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=La(t.pendingLanes);n!==0&&(Sh(t,n|1),Et(t,We()),!(me&6)&&(ji=We()+500,oo()))}break;case 13:Do(function(){var r=pr(e,1);if(r!==null){var o=pt();xn(r,e,1,o)}}),tg(e,1)}};_h=function(e){if(e.tag===13){var t=pr(e,134217728);if(t!==null){var n=pt();xn(t,e,134217728,n)}tg(e,134217728)}};T_=function(e){if(e.tag===13){var t=Vr(e),n=pr(e,t);if(n!==null){var r=pt();xn(n,e,t,r)}tg(e,t)}};R_=function(){return xe};P_=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Tp=function(e,t,n){switch(t){case"input":if(wp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zc(r);if(!o)throw Error(z(90));s_(r),wp(r,o)}}}break;case"textarea":u_(e,n);break;case"select":t=n.value,t!=null&&Si(e,!!n.multiple,t,!1)}};g_=Gh;v_=Do;var u5={usingClientEntryPoint:!1,Events:[Ds,di,zc,m_,h_,Gh]},ha={findFiberByHostInstance:_o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c5={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=x_(e),e===null?null:e.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||s5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{jc=Cl.inject(c5),Hn=Cl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u5;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rg(t))throw Error(z(200));return a5(e,t,null,n)};zt.createRoot=function(e,t){if(!rg(e))throw Error(z(299));var n=!1,r="",o=Jk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eg(e,1,!1,null,null,n,!1,r,o),e[dr]=t.current,ms(e.nodeType===8?e.parentNode:e),new ng(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=x_(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return Do(e)};zt.hydrate=function(e,t,n){if(!Xc(t))throw Error(z(200));return Gc(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!rg(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Jk;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Qk(t,null,e,1,n??null,o,!1,i,a),e[dr]=t.current,ms(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qc(t)};zt.render=function(e,t,n){if(!Xc(t))throw Error(z(200));return Gc(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(z(40));return e._reactRootContainer?(Do(function(){Gc(null,null,e,!1,function(){e._reactRootContainer=null,e[dr]=null})}),!0):!1};zt.unstable_batchedUpdates=Gh;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Gc(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function Zk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zk)}catch(e){console.error(e)}}Zk(),ZS.exports=zt;var Qc=ZS.exports;const yi=Vo(Qc);var eO,Ib=Qc;eO=Ib.createRoot,Ib.hydrateRoot;var og={};Object.defineProperty(og,"__esModule",{value:!0});og.parse=v5;og.serialize=b5;const f5=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,d5=/^[\u0021-\u003A\u003C-\u007E]*$/,p5=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m5=/^[\u0020-\u003A\u003D-\u007E]*$/,h5=Object.prototype.toString,g5=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function v5(e,t){const n=new g5,r=e.length;if(r<2)return n;const o=(t==null?void 0:t.decode)||y5;let i=0;do{const a=e.indexOf("=",i);if(a===-1)break;const s=e.indexOf(";",i),l=s===-1?r:s;if(a>l){i=e.lastIndexOf(";",a-1)+1;continue}const u=Db(e,i,a),c=Fb(e,a,u),d=e.slice(u,c);if(n[d]===void 0){let p=Db(e,a+1,l),h=Fb(e,l,p);const m=o(e.slice(p,h));n[d]=m}i=l+1}while(i<r);return n}function Db(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function Fb(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function b5(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!f5.test(e))throw new TypeError(`argument name is invalid: ${e}`);const o=r(t);if(!d5.test(o))throw new TypeError(`argument val is invalid: ${t}`);let i=e+"="+o;if(!n)return i;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);i+="; Max-Age="+n.maxAge}if(n.domain){if(!p5.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);i+="; Domain="+n.domain}if(n.path){if(!m5.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);i+="; Path="+n.path}if(n.expires){if(!x5(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);i+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return i}function y5(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function x5(e){return h5.call(e)==="[object Date]"}var zb="popstate";function w5(e={}){function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return sm("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_s(o)}return _5(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S5(){return Math.random().toString(36).substring(2,10)}function Bb(e,t){return{usr:e.state,key:e.key,idx:t}}function sm(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Xi(t):t,state:n,key:t&&t.key||r||S5()}}function _s({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _5(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function d(){s="POP";let b=c(),g=b==null?null:b-u;u=b,l&&l({action:s,location:v.location,delta:g})}function p(b,g){s="PUSH";let y=sm(v.location,b,g);u=c()+1;let x=Bb(y,u),S=v.createHref(y);try{a.pushState(x,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}i&&l&&l({action:s,location:v.location,delta:1})}function h(b,g){s="REPLACE";let y=sm(v.location,b,g);u=c();let x=Bb(y,u),S=v.createHref(y);a.replaceState(x,"",S),i&&l&&l({action:s,location:v.location,delta:0})}function m(b){return k5(b)}let v={get action(){return s},get location(){return e(o,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(zb,d),l=b,()=>{o.removeEventListener(zb,d),l=null}},createHref(b){return t(o,b)},createURL:m,encodeLocation(b){let g=m(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(b){return a.go(b)}};return v}function k5(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:_s(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function tO(e,t,n="/"){return O5(e,t,n,!1)}function O5(e,t,n,r){let o=typeof t=="string"?Xi(t):t,i=hr(o.pathname||"/",n);if(i==null)return null;let a=nO(e);E5(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=I5(i);s=N5(a[l],u,r)}return s}function nO(e,t=[],n=[],r=""){let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let u=ur([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(Ne(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),nO(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:L5(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of rO(i.path))o(i,a,l)}),t}function rO(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=rO(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function E5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var C5=/^:[\w-]+$/,T5=3,R5=2,P5=1,A5=10,$5=-2,Hb=e=>e==="*";function L5(e,t){let n=e.split("/"),r=n.length;return n.some(Hb)&&(r+=$5),t&&(r+=R5),n.filter(o=>!Hb(o)).reduce((o,i)=>o+(C5.test(i)?T5:i===""?P5:A5),r)}function M5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function N5(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=sc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=sc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:ur([i,d.pathname]),pathnameBase:B5(ur([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=ur([i,d.pathnameBase]))}return a}function sc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j5(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},p)=>{if(c==="*"){let m=s[p]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const h=s[p];return d&&!h?u[c]=void 0:u[c]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function j5(e,t=!1,n=!0){kn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function I5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function hr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D5(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Xi(e):e;return{pathname:n?n.startsWith("/")?n:F5(n,t):t,search:H5(r),hash:U5(o)}}function F5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gd(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ig(e){let t=z5(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ag(e,t,n,r=!1){let o;typeof e=="string"?o=Xi(e):(o={...e},Ne(!o.pathname||!o.pathname.includes("?"),gd("?","pathname","search",o)),Ne(!o.pathname||!o.pathname.includes("#"),gd("#","pathname","hash",o)),Ne(!o.search||!o.search.includes("#"),gd("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=D5(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var ur=e=>e.join("/").replace(/\/\/+/g,"/"),B5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function W5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var oO=["POST","PUT","PATCH","DELETE"];new Set(oO);var V5=["GET",...oO];new Set(V5);var Gi=w.createContext(null);Gi.displayName="DataRouter";var Jc=w.createContext(null);Jc.displayName="DataRouterState";var iO=w.createContext({isTransitioning:!1});iO.displayName="ViewTransition";var Y5=w.createContext(new Map);Y5.displayName="Fetchers";var K5=w.createContext(null);K5.displayName="Await";var En=w.createContext(null);En.displayName="Navigation";var zs=w.createContext(null);zs.displayName="Location";var Yn=w.createContext({outlet:null,matches:[],isDataRoute:!1});Yn.displayName="Route";var sg=w.createContext(null);sg.displayName="RouteError";function q5(e,{relative:t}={}){Ne(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(En),{hash:o,pathname:i,search:a}=Hs(e,{relative:t}),s=i;return n!=="/"&&(s=i==="/"?n:ur([n,i])),r.createHref({pathname:s,search:a,hash:o})}function Qi(){return w.useContext(zs)!=null}function io(){return Ne(Qi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(zs).location}var aO="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sO(e){w.useContext(En).static||w.useLayoutEffect(e)}function Bs(){let{isDataRoute:e}=w.useContext(Yn);return e?sA():X5()}function X5(){Ne(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(Gi),{basename:t,navigator:n}=w.useContext(En),{matches:r}=w.useContext(Yn),{pathname:o}=io(),i=JSON.stringify(ig(r)),a=w.useRef(!1);return sO(()=>{a.current=!0}),w.useCallback((l,u={})=>{if(kn(a.current,aO),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=ag(l,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:ur([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}w.createContext(null);function Hs(e,{relative:t}={}){let{matches:n}=w.useContext(Yn),{pathname:r}=io(),o=JSON.stringify(ig(n));return w.useMemo(()=>ag(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function G5(e,t){return lO(e,t)}function lO(e,t,n,r){var y;Ne(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:i}=w.useContext(En),{matches:a}=w.useContext(Yn),s=a[a.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let x=d&&d.path||"";uO(u,!d||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let p=io(),h;if(t){let x=typeof t=="string"?Xi(t):t;Ne(c==="/"||((y=x.pathname)==null?void 0:y.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${x.pathname}" was given in the \`location\` prop.`),h=x}else h=p;let m=h.pathname||"/",v=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=!i&&n&&n.matches&&n.matches.length>0?n.matches:tO(e,{pathname:v});kn(d||b!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),kn(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=tA(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:ur([c,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:ur([c,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r);return t&&g?w.createElement(zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},g):g}function Q5(){let e=aA(),t=W5(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,a)}var J5=w.createElement(Q5,null),Z5=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?w.createElement(Yn.Provider,{value:this.props.routeContext},w.createElement(sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function eA({routeContext:e,match:t,children:n}){let r=w.useContext(Gi);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Yn.Provider,{value:e},n)}function tA(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=n==null?void 0:n.errors;if(i!=null){let l=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Ne(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let a=!1,s=-1;if(n)for(let l=0;l<o.length;l++){let u=o[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(s=l),u.route.id){let{loaderData:c,errors:d}=n,p=u.route.loader&&!c.hasOwnProperty(u.route.id)&&(!d||d[u.route.id]===void 0);if(u.route.lazy||p){a=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((l,u,c)=>{let d,p=!1,h=null,m=null;n&&(d=i&&u.route.id?i[u.route.id]:void 0,h=u.route.errorElement||J5,a&&(s<0&&c===0?(uO("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,m=null):s===c&&(p=!0,m=u.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,c+1)),b=()=>{let g;return d?g=h:p?g=m:u.route.Component?g=w.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=l,w.createElement(eA,{match:u,routeContext:{outlet:l,matches:v,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?w.createElement(Z5,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}function lg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nA(e){let t=w.useContext(Gi);return Ne(t,lg(e)),t}function rA(e){let t=w.useContext(Jc);return Ne(t,lg(e)),t}function oA(e){let t=w.useContext(Yn);return Ne(t,lg(e)),t}function ug(e){let t=oA(e),n=t.matches[t.matches.length-1];return Ne(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function iA(){return ug("useRouteId")}function aA(){var r;let e=w.useContext(sg),t=rA("useRouteError"),n=ug("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function sA(){let{router:e}=nA("useNavigate"),t=ug("useNavigate"),n=w.useRef(!1);return sO(()=>{n.current=!0}),w.useCallback(async(o,i={})=>{kn(n.current,aO),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Ub={};function uO(e,t,n){!t&&!Ub[e]&&(Ub[e]=!0,kn(!1,n))}w.memo(lA);function lA({routes:e,future:t,state:n}){return lO(e,void 0,n,t)}function cO({to:e,replace:t,state:n,relative:r}){Ne(Qi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=w.useContext(En);kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=w.useContext(Yn),{pathname:a}=io(),s=Bs(),l=ag(e,ig(i),a,r==="path"),u=JSON.stringify(l);return w.useEffect(()=>{s(JSON.parse(u),{replace:t,state:n,relative:r})},[s,u,r,t,n]),null}function wo(e){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uA({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1}){Ne(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),s=w.useMemo(()=>({basename:a,navigator:o,static:i,future:{}}),[a,o,i]);typeof n=="string"&&(n=Xi(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:p="default"}=n,h=w.useMemo(()=>{let m=hr(l,a);return m==null?null:{location:{pathname:m,search:u,hash:c,state:d,key:p},navigationType:r}},[a,l,u,c,d,p,r]);return kn(h!=null,`<Router basename="${a}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(En.Provider,{value:s},w.createElement(zs.Provider,{children:t,value:h}))}function cA({children:e,location:t}){return G5(lm(e),t)}function lm(e,t=[]){let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){n.push.apply(n,lm(r.props.children,i));return}Ne(r.type===wo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=lm(r.props.children,i)),n.push(a)}),n}var xu="get",wu="application/x-www-form-urlencoded";function Zc(e){return e!=null&&typeof e.tagName=="string"}function fA(e){return Zc(e)&&e.tagName.toLowerCase()==="button"}function dA(e){return Zc(e)&&e.tagName.toLowerCase()==="form"}function pA(e){return Zc(e)&&e.tagName.toLowerCase()==="input"}function mA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hA(e,t){return e.button===0&&(!t||t==="_self")&&!mA(e)}var Tl=null;function gA(){if(Tl===null)try{new FormData(document.createElement("form"),0),Tl=!1}catch{Tl=!0}return Tl}var vA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vd(e){return e!=null&&!vA.has(e)?(kn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wu}"`),null):e}function bA(e,t){let n,r,o,i,a;if(dA(e)){let s=e.getAttribute("action");r=s?hr(s,t):null,n=e.getAttribute("method")||xu,o=vd(e.getAttribute("enctype"))||wu,i=new FormData(e)}else if(fA(e)||pA(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(r=l?hr(l,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||xu,o=vd(e.getAttribute("formenctype"))||vd(s.getAttribute("enctype"))||wu,i=new FormData(s,e),!gA()){let{name:u,type:c,value:d}=e;if(c==="image"){let p=u?`${u}.`:"";i.append(`${p}x`,"0"),i.append(`${p}y`,"0")}else u&&i.append(u,d)}}else{if(Zc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xu,r=null,o=wu,a=e}return i&&o==="text/plain"&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function cg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function yA(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xA(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function wA(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let a=await yA(i,n);return a.links?a.links():[]}return[]}));return OA(r.flat(1).filter(xA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Wb(e,t,n,r,o,i){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,s=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,u)=>a(l,u)||s(l,u)):i==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function SA(e,t,{includeHydrateFallback:n}={}){return _A(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function _A(e){return[...new Set(e)]}function kA(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function OA(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let i=JSON.stringify(kA(o));return n.has(i)||(n.add(i),r.push({key:i,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var EA=new Set([100,101,204,205]);function CA(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&hr(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function fO(){let e=w.useContext(Gi);return cg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function TA(){let e=w.useContext(Jc);return cg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var fg=w.createContext(void 0);fg.displayName="FrameworkContext";function dO(){let e=w.useContext(fg);return cg(e,"You must render this element inside a <HydratedRouter> element"),e}function RA(e,t){let n=w.useContext(fg),[r,o]=w.useState(!1),[i,a]=w.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,p=w.useRef(null);w.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=g=>{g.forEach(y=>{a(y.isIntersecting)})},b=new IntersectionObserver(v,{threshold:.5});return p.current&&b.observe(p.current),()=>{b.disconnect()}}},[e]),w.useEffect(()=>{if(r){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[r]);let h=()=>{o(!0)},m=()=>{o(!1),a(!1)};return n?e!=="intent"?[i,p,{}]:[i,p,{onFocus:ga(s,h),onBlur:ga(l,m),onMouseEnter:ga(u,h),onMouseLeave:ga(c,m),onTouchStart:ga(d,h)}]:[!1,p,{}]}function ga(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function PA({page:e,...t}){let{router:n}=fO(),r=w.useMemo(()=>tO(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?w.createElement($A,{page:e,matches:r,...t}):null}function AA(e){let{manifest:t,routeModules:n}=dO(),[r,o]=w.useState([]);return w.useEffect(()=>{let i=!1;return wA(e,t,n).then(a=>{i||o(a)}),()=>{i=!0}},[e,t,n]),r}function $A({page:e,matches:t,...n}){let r=io(),{manifest:o,routeModules:i}=dO(),{basename:a}=fO(),{loaderData:s,matches:l}=TA(),u=w.useMemo(()=>Wb(e,t,l,o,r,"data"),[e,t,l,o,r]),c=w.useMemo(()=>Wb(e,t,l,o,r,"assets"),[e,t,l,o,r]),d=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let m=new Set,v=!1;if(t.forEach(g=>{var x;let y=o.routes[g.route.id];!y||!y.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in s&&((x=i[g.route.id])!=null&&x.shouldRevalidate)||y.hasClientLoader?v=!0:m.add(g.route.id))}),m.size===0)return[];let b=CA(e,a);return v&&m.size>0&&b.searchParams.set("_routes",t.filter(g=>m.has(g.route.id)).map(g=>g.route.id).join(",")),[b.pathname+b.search]},[a,s,r,o,u,t,e,i]),p=w.useMemo(()=>SA(c,o),[c,o]),h=AA(c);return w.createElement(w.Fragment,null,d.map(m=>w.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...n})),p.map(m=>w.createElement("link",{key:m,rel:"modulepreload",href:m,...n})),h.map(({key:m,link:v})=>w.createElement("link",{key:m,...v})))}function LA(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var pO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pO&&(window.__reactRouterVersion="7.6.0")}catch{}function MA({basename:e,children:t,window:n}){let r=w.useRef();r.current==null&&(r.current=w5({window:n,v5Compat:!0}));let o=r.current,[i,a]=w.useState({action:o.action,location:o.location}),s=w.useCallback(l=>{w.startTransition(()=>a(l))},[a]);return w.useLayoutEffect(()=>o.listen(s),[o,s]),w.createElement(uA,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var mO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hO=w.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d,...p},h){let{basename:m}=w.useContext(En),v=typeof u=="string"&&mO.test(u),b,g=!1;if(typeof u=="string"&&v&&(b=u,pO))try{let R=new URL(window.location.href),P=u.startsWith("//")?new URL(R.protocol+u):new URL(u),L=hr(P.pathname,m);P.origin===R.origin&&L!=null?u=L+P.search+P.hash:g=!0}catch{kn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=q5(u,{relative:o}),[x,S,k]=RA(r,p),_=DA(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:d});function O(R){t&&t(R),R.defaultPrevented||_(R)}let E=w.createElement("a",{...p,...k,href:b||y,onClick:g||i?t:O,ref:LA(h,S),target:l,"data-discover":!v&&n==="render"?"true":void 0});return x&&!v?w.createElement(w.Fragment,null,E,w.createElement(PA,{page:y})):E});hO.displayName="Link";var NA=w.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:a,viewTransition:s,children:l,...u},c){let d=Hs(a,{relative:u.relative}),p=io(),h=w.useContext(Jc),{navigator:m,basename:v}=w.useContext(En),b=h!=null&&UA(d)&&s===!0,g=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,y=p.pathname,x=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;n||(y=y.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&v&&(x=hr(x,v)||x);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let k=y===g||!o&&y.startsWith(g)&&y.charAt(S)==="/",_=x!=null&&(x===g||!o&&x.startsWith(g)&&x.charAt(g.length)==="/"),O={isActive:k,isPending:_,isTransitioning:b},E=k?t:void 0,R;typeof r=="function"?R=r(O):R=[r,k?"active":null,_?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let P=typeof i=="function"?i(O):i;return w.createElement(hO,{...u,"aria-current":E,className:R,ref:c,style:P,to:a,viewTransition:s},typeof l=="function"?l(O):l)});NA.displayName="NavLink";var jA=w.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:a=xu,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...p},h)=>{let m=BA(),v=HA(s,{relative:u}),b=a.toLowerCase()==="get"?"get":"post",g=typeof s=="string"&&mO.test(s),y=x=>{if(l&&l(x),x.defaultPrevented)return;x.preventDefault();let S=x.nativeEvent.submitter,k=(S==null?void 0:S.getAttribute("formmethod"))||a;m(S||x.currentTarget,{fetcherKey:t,method:k,navigate:n,replace:o,state:i,relative:u,preventScrollReset:c,viewTransition:d})};return w.createElement("form",{ref:h,method:b,action:v,onSubmit:r?l:y,...p,"data-discover":!g&&e==="render"?"true":void 0})});jA.displayName="Form";function IA(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gO(e){let t=w.useContext(Gi);return Ne(t,IA(e)),t}function DA(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:a}={}){let s=Bs(),l=io(),u=Hs(e,{relative:i});return w.useCallback(c=>{if(hA(c,t)){c.preventDefault();let d=n!==void 0?n:_s(l)===_s(u);s(e,{replace:d,state:r,preventScrollReset:o,relative:i,viewTransition:a})}},[l,s,u,n,r,t,e,o,i,a])}var FA=0,zA=()=>`__${String(++FA)}__`;function BA(){let{router:e}=gO("useSubmit"),{basename:t}=w.useContext(En),n=iA();return w.useCallback(async(r,o={})=>{let{action:i,method:a,encType:s,formData:l,body:u}=bA(r,t);if(o.navigate===!1){let c=o.fetcherKey||zA();await e.fetch(c,n,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function HA(e,{relative:t}={}){let{basename:n}=w.useContext(En),r=w.useContext(Yn);Ne(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...Hs(e||".",{relative:t})},a=io();if(e==null){i.search=a.search;let s=new URLSearchParams(i.search),l=s.getAll("index");if(l.some(c=>c==="")){s.delete("index"),l.filter(d=>d).forEach(d=>s.append("index",d));let c=s.toString();i.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:ur([n,i.pathname])),_s(i)}function UA(e,t={}){let n=w.useContext(iO);Ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=gO("useViewTransitionState"),o=Hs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=hr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=hr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sc(o.pathname,a)!=null||sc(o.pathname,i)!=null}[...EA];const WA="_loginBox_62jms_5",VA="_loginTitle_62jms_33",YA="_userBox_62jms_47",Rl={loginBox:WA,loginTitle:VA,userBox:YA};var vO={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(vO);var bO=vO.exports;const de=Vo(bO),KA=["as","disabled"];function qA(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function XA(e){return!e||e.trim()==="#"}function dg({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:l}){e||(n!=null||r!=null||o!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},u];const c=p=>{if((t||e==="a"&&XA(n))&&p.preventDefault(),t){p.stopPropagation();return}a==null||a(p)},d=p=>{p.key===" "&&(p.preventDefault(),c(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:c,onKeyDown:d},u]}const pg=w.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=qA(e,KA);const[i,{tagName:a}]=dg(Object.assign({tagName:n,disabled:r},o));return C.jsx(a,Object.assign({},o,i,{ref:t}))});pg.displayName="Button";const GA=["xxl","xl","lg","md","sm","xs"],QA="xs",mg=w.createContext({prefixes:{},breakpoints:GA,minBreakpoint:QA}),{Consumer:MV,Provider:NV}=mg;function Ye(e,t){const{prefixes:n}=w.useContext(mg);return e||n[t]||t}function JA(){const{dir:e}=w.useContext(mg);return e==="rtl"}const Ji=w.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...s},l)=>{const u=Ye(t,"btn"),[c,{tagName:d}]=dg({tagName:e,disabled:i,...s}),p=d;return C.jsx(p,{...c,...s,ref:l,disabled:i,className:de(a,u,o&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,s.href&&i&&"disabled")})});Ji.displayName="Button";function yO(e,t){return function(){return e.apply(t,arguments)}}const{toString:ZA}=Object.prototype,{getPrototypeOf:hg}=Object,{iterator:ef,toStringTag:xO}=Symbol,tf=(e=>t=>{const n=ZA.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=e=>(e=e.toLowerCase(),t=>tf(t)===e),nf=e=>t=>typeof t===e,{isArray:Zi}=Array,ks=nf("undefined");function e$(e){return e!==null&&!ks(e)&&e.constructor!==null&&!ks(e.constructor)&&Ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const wO=Cn("ArrayBuffer");function t$(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&wO(e.buffer),t}const n$=nf("string"),Ct=nf("function"),SO=nf("number"),rf=e=>e!==null&&typeof e=="object",r$=e=>e===!0||e===!1,Su=e=>{if(tf(e)!=="object")return!1;const t=hg(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xO in e)&&!(ef in e)},o$=Cn("Date"),i$=Cn("File"),a$=Cn("Blob"),s$=Cn("FileList"),l$=e=>rf(e)&&Ct(e.pipe),u$=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ct(e.append)&&((t=tf(e))==="formdata"||t==="object"&&Ct(e.toString)&&e.toString()==="[object FormData]"))},c$=Cn("URLSearchParams"),[f$,d$,p$,m$]=["ReadableStream","Request","Response","Headers"].map(Cn),h$=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Us(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Zi(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function _O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kO=e=>!ks(e)&&e!==Eo;function um(){const{caseless:e}=kO(this)&&this||{},t={},n=(r,o)=>{const i=e&&_O(t,o)||o;Su(t[i])&&Su(r)?t[i]=um(t[i],r):Su(r)?t[i]=um({},r):Zi(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Us(arguments[r],n);return t}const g$=(e,t,n,{allOwnKeys:r}={})=>(Us(t,(o,i)=>{n&&Ct(o)?e[i]=yO(o,n):e[i]=o},{allOwnKeys:r}),e),v$=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),b$=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},y$=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&hg(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},x$=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},w$=e=>{if(!e)return null;if(Zi(e))return e;let t=e.length;if(!SO(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},S$=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hg(Uint8Array)),_$=(e,t)=>{const r=(e&&e[ef]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},k$=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},O$=Cn("HTMLFormElement"),E$=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Vb=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C$=Cn("RegExp"),OO=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Us(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},T$=e=>{OO(e,(t,n)=>{if(Ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},R$=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Zi(e)?r(e):r(String(e).split(t)),n},P$=()=>{},A$=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function $$(e){return!!(e&&Ct(e.append)&&e[xO]==="FormData"&&e[ef])}const L$=e=>{const t=new Array(10),n=(r,o)=>{if(rf(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Zi(r)?[]:{};return Us(r,(a,s)=>{const l=n(a,o+1);!ks(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},M$=Cn("AsyncFunction"),N$=e=>e&&(rf(e)||Ct(e))&&Ct(e.then)&&Ct(e.catch),EO=((e,t)=>e?setImmediate:t?((n,r)=>(Eo.addEventListener("message",({source:o,data:i})=>{o===Eo&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Eo.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ct(Eo.postMessage)),j$=typeof queueMicrotask<"u"?queueMicrotask.bind(Eo):typeof process<"u"&&process.nextTick||EO,I$=e=>e!=null&&Ct(e[ef]),$={isArray:Zi,isArrayBuffer:wO,isBuffer:e$,isFormData:u$,isArrayBufferView:t$,isString:n$,isNumber:SO,isBoolean:r$,isObject:rf,isPlainObject:Su,isReadableStream:f$,isRequest:d$,isResponse:p$,isHeaders:m$,isUndefined:ks,isDate:o$,isFile:i$,isBlob:a$,isRegExp:C$,isFunction:Ct,isStream:l$,isURLSearchParams:c$,isTypedArray:S$,isFileList:s$,forEach:Us,merge:um,extend:g$,trim:h$,stripBOM:v$,inherits:b$,toFlatObject:y$,kindOf:tf,kindOfTest:Cn,endsWith:x$,toArray:w$,forEachEntry:_$,matchAll:k$,isHTMLForm:O$,hasOwnProperty:Vb,hasOwnProp:Vb,reduceDescriptors:OO,freezeMethods:T$,toObjectSet:R$,toCamelCase:E$,noop:P$,toFiniteNumber:A$,findKey:_O,global:Eo,isContextDefined:kO,isSpecCompliantForm:$$,toJSONObject:L$,isAsyncFn:M$,isThenable:N$,setImmediate:EO,asap:j$,isIterable:I$};function se(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const CO=se.prototype,TO={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{TO[e]={value:e}});Object.defineProperties(se,TO);Object.defineProperty(CO,"isAxiosError",{value:!0});se.from=(e,t,n,r,o,i)=>{const a=Object.create(CO);return $.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),se.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const D$=null;function cm(e){return $.isPlainObject(e)||$.isArray(e)}function RO(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function Yb(e,t,n){return e?e.concat(t).map(function(o,i){return o=RO(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function F$(e){return $.isArray(e)&&!e.some(cm)}const z$=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function of(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!$.isUndefined(b[v])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if($.isDate(m))return m.toISOString();if(!l&&$.isBlob(m))throw new se("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(m)||$.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,v,b){let g=m;if(m&&!b&&typeof m=="object"){if($.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if($.isArray(m)&&F$(m)||($.isFileList(m)||$.endsWith(v,"[]"))&&(g=$.toArray(m)))return v=RO(v),g.forEach(function(x,S){!($.isUndefined(x)||x===null)&&t.append(a===!0?Yb([v],S,i):a===null?v:v+"[]",u(x))}),!1}return cm(m)?!0:(t.append(Yb(b,v,i),u(m)),!1)}const d=[],p=Object.assign(z$,{defaultVisitor:c,convertValue:u,isVisitable:cm});function h(m,v){if(!$.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),$.forEach(m,function(g,y){(!($.isUndefined(g)||g===null)&&o.call(t,g,$.isString(y)?y.trim():y,v,p))===!0&&h(g,v?v.concat(y):[y])}),d.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Kb(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function gg(e,t){this._pairs=[],e&&of(e,this,t)}const PO=gg.prototype;PO.append=function(t,n){this._pairs.push([t,n])};PO.toString=function(t){const n=t?function(r){return t.call(this,r,Kb)}:Kb;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function B$(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function AO(e,t,n){if(!t)return e;const r=n&&n.encode||B$;$.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new gg(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class qb{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const $O={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},H$=typeof URLSearchParams<"u"?URLSearchParams:gg,U$=typeof FormData<"u"?FormData:null,W$=typeof Blob<"u"?Blob:null,V$={isBrowser:!0,classes:{URLSearchParams:H$,FormData:U$,Blob:W$},protocols:["http","https","file","blob","url","data"]},vg=typeof window<"u"&&typeof document<"u",fm=typeof navigator=="object"&&navigator||void 0,Y$=vg&&(!fm||["ReactNative","NativeScript","NS"].indexOf(fm.product)<0),K$=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",q$=vg&&window.location.href||"http://localhost",X$=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vg,hasStandardBrowserEnv:Y$,hasStandardBrowserWebWorkerEnv:K$,navigator:fm,origin:q$},Symbol.toStringTag,{value:"Module"})),ut={...X$,...V$};function G$(e,t){return of(e,new ut.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return ut.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Q$(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function J$(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function LO(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&$.isArray(o)?o.length:a,l?($.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!$.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&$.isArray(o[a])&&(o[a]=J$(o[a])),!s)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(Q$(r),o,n,0)}),n}return null}function Z$(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ws={transitional:$O,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(LO(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t)||$.isReadableStream(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return G$(t,this.formSerializer).toString();if((s=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return of(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Z$(t)):t}],transformResponse:[function(t){const n=this.transitional||Ws.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(t)||$.isReadableStream(t))return t;if(t&&$.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?se.from(s,se.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{Ws.headers[e]={}});const eL=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tL=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&eL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xb=Symbol("internals");function va(e){return e&&String(e).trim().toLowerCase()}function _u(e){return e===!1||e==null?e:$.isArray(e)?e.map(_u):String(e)}function nL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const rL=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function bd(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function oL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function iL(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}let Tt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const c=va(l);if(!c)throw new Error("header name must be a non-empty string");const d=$.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=_u(s))}const a=(s,l)=>$.forEach(s,(u,c)=>i(u,c,l));if($.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if($.isString(t)&&(t=t.trim())&&!rL(t))a(tL(t),n);else if($.isObject(t)&&$.isIterable(t)){let s={},l,u;for(const c of t){if(!$.isArray(c))throw TypeError("Object iterator must return a key-value pair");s[u=c[0]]=(l=s[u])?$.isArray(l)?[...l,c[1]]:[l,c[1]]:c[1]}a(s,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=va(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return nL(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=va(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||bd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=va(a),a){const s=$.findKey(r,a);s&&(!n||bd(r,r[s],s,n))&&(delete r[s],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||bd(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const a=$.findKey(r,i);if(a){n[a]=_u(o),delete n[i];return}const s=t?oL(i):String(i).trim();s!==i&&delete n[i],n[s]=_u(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Xb]=this[Xb]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=va(a);r[s]||(iL(o,a),r[s]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}};Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Tt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(Tt);function yd(e,t){const n=this||Ws,r=t||n,o=Tt.from(r.headers);let i=r.data;return $.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function MO(e){return!!(e&&e.__CANCEL__)}function ea(e,t,n){se.call(this,e??"canceled",se.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(ea,se,{__CANCEL__:!0});function NO(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new se("Request failed with status code "+n.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function aL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];a||(a=u),n[o]=l,r[o]=u;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const h=c&&u-c;return h?Math.round(p*1e3/h):void 0}}function lL(e,t){let n=0,r=1e3/t,o,i;const a=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?a(u,c):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},r-d)))},()=>o&&a(o)]}const lc=(e,t,n=3)=>{let r=0;const o=sL(50,250);return lL(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,l=a-r,u=o(l),c=a<=s;r=a;const d={loaded:a,total:s,progress:s?a/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&c?(s-a)/u:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},n)},Gb=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Qb=e=>(...t)=>$.asap(()=>e(...t)),uL=ut.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ut.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,cL=ut.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),$.isString(r)&&a.push("path="+r),$.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function fL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dL(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function jO(e,t,n){let r=!fL(t);return e&&(r||n==!1)?dL(e,t):t}const Jb=e=>e instanceof Tt?{...e}:e;function Fo(e,t){t=t||{};const n={};function r(u,c,d,p){return $.isPlainObject(u)&&$.isPlainObject(c)?$.merge.call({caseless:p},u,c):$.isPlainObject(c)?$.merge({},c):$.isArray(c)?c.slice():c}function o(u,c,d,p){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u,d,p)}else return r(u,c,d,p)}function i(u,c){if(!$.isUndefined(c))return r(void 0,c)}function a(u,c){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,c,d)=>o(Jb(u),Jb(c),d,!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||o,p=d(e[c],t[c],c);$.isUndefined(p)&&d!==s||(n[c]=p)}),n}const IO=e=>{const t=Fo({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=Tt.from(a),t.url=AO(jO(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if($.isFormData(n)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((l=a.getContentType())!==!1){const[u,...c]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...c].join("; "))}}if(ut.hasStandardBrowserEnv&&(r&&$.isFunction(r)&&(r=r(t)),r||r!==!1&&uL(t.url))){const u=o&&i&&cL.read(i);u&&a.set(o,u)}return t},pL=typeof XMLHttpRequest<"u",mL=pL&&function(e){return new Promise(function(n,r){const o=IO(e);let i=o.data;const a=Tt.from(o.headers).normalize();let{responseType:s,onUploadProgress:l,onDownloadProgress:u}=o,c,d,p,h,m;function v(){h&&h(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function g(){if(!b)return;const x=Tt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),k={data:!s||s==="text"||s==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:x,config:e,request:b};NO(function(O){n(O),v()},function(O){r(O),v()},k),b=null}"onloadend"in b?b.onloadend=g:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(g)},b.onabort=function(){b&&(r(new se("Request aborted",se.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new se("Network Error",se.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||$O;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new se(S,k.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,e,b)),b=null},i===void 0&&a.setContentType(null),"setRequestHeader"in b&&$.forEach(a.toJSON(),function(S,k){b.setRequestHeader(k,S)}),$.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),s&&s!=="json"&&(b.responseType=o.responseType),u&&([p,m]=lc(u,!0),b.addEventListener("progress",p)),l&&b.upload&&([d,h]=lc(l),b.upload.addEventListener("progress",d),b.upload.addEventListener("loadend",h)),(o.cancelToken||o.signal)&&(c=x=>{b&&(r(!x||x.type?new ea(null,e,b):x),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const y=aL(o.url);if(y&&ut.protocols.indexOf(y)===-1){r(new se("Unsupported protocol "+y+":",se.ERR_BAD_REQUEST,e));return}b.send(i||null)})},hL=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,s();const c=u instanceof Error?u:this.reason;r.abort(c instanceof se?c:new ea(c instanceof Error?c.message:c))}};let a=t&&setTimeout(()=>{a=null,i(new se(`timeout ${t} of ms exceeded`,se.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>$.asap(s),l}},gL=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},vL=async function*(e,t){for await(const n of bL(e))yield*gL(n,t)},bL=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Zb=(e,t,n,r)=>{const o=vL(e,t);let i=0,a,s=l=>{a||(a=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:c}=await o.next();if(u){s(),l.close();return}let d=c.byteLength;if(n){let p=i+=d;n(p)}l.enqueue(new Uint8Array(c))}catch(u){throw s(u),u}},cancel(l){return s(l),o.return()}},{highWaterMark:2})},af=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",DO=af&&typeof ReadableStream=="function",yL=af&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),FO=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xL=DO&&FO(()=>{let e=!1;const t=new Request(ut.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),ey=64*1024,dm=DO&&FO(()=>$.isReadableStream(new Response("").body)),uc={stream:dm&&(e=>e.body)};af&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!uc[t]&&(uc[t]=$.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new se(`Response type '${t}' is not supported`,se.ERR_NOT_SUPPORT,r)})})})(new Response);const wL=async e=>{if(e==null)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e))return(await new Request(ut.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if($.isArrayBufferView(e)||$.isArrayBuffer(e))return e.byteLength;if($.isURLSearchParams(e)&&(e=e+""),$.isString(e))return(await yL(e)).byteLength},SL=async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return n??wL(t)},_L=af&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:p}=IO(e);u=u?(u+"").toLowerCase():"text";let h=hL([o,i&&i.toAbortSignal()],a),m;const v=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let b;try{if(l&&xL&&n!=="get"&&n!=="head"&&(b=await SL(c,r))!==0){let k=new Request(t,{method:"POST",body:r,duplex:"half"}),_;if($.isFormData(r)&&(_=k.headers.get("content-type"))&&c.setContentType(_),k.body){const[O,E]=Gb(b,lc(Qb(l)));r=Zb(k.body,ey,O,E)}}$.isString(d)||(d=d?"include":"omit");const g="credentials"in Request.prototype;m=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:g?d:void 0});let y=await fetch(m);const x=dm&&(u==="stream"||u==="response");if(dm&&(s||x&&v)){const k={};["status","statusText","headers"].forEach(R=>{k[R]=y[R]});const _=$.toFiniteNumber(y.headers.get("content-length")),[O,E]=s&&Gb(_,lc(Qb(s),!0))||[];y=new Response(Zb(y.body,ey,O,()=>{E&&E(),v&&v()}),k)}u=u||"text";let S=await uc[$.findKey(uc,u)||"text"](y,e);return!x&&v&&v(),await new Promise((k,_)=>{NO(k,_,{data:S,headers:Tt.from(y.headers),status:y.status,statusText:y.statusText,config:e,request:m})})}catch(g){throw v&&v(),g&&g.name==="TypeError"&&/Load failed|fetch/i.test(g.message)?Object.assign(new se("Network Error",se.ERR_NETWORK,e,m),{cause:g.cause||g}):se.from(g,g&&g.code,e,m)}}),pm={http:D$,xhr:mL,fetch:_L};$.forEach(pm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ty=e=>`- ${e}`,kL=e=>$.isFunction(e)||e===null||e===!1,zO={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!kL(n)&&(r=pm[(a=String(n)).toLowerCase()],r===void 0))throw new se(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(ty).join(`
`):" "+ty(i[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:pm};function xd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ea(null,e)}function ny(e){return xd(e),e.headers=Tt.from(e.headers),e.data=yd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zO.getAdapter(e.adapter||Ws.adapter)(e).then(function(r){return xd(e),r.data=yd.call(e,e.transformResponse,r),r.headers=Tt.from(r.headers),r},function(r){return MO(r)||(xd(e),r&&r.response&&(r.response.data=yd.call(e,e.transformResponse,r.response),r.response.headers=Tt.from(r.response.headers))),Promise.reject(r)})}const BO="1.9.0",sf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{sf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ry={};sf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+BO+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new se(o(a," has been removed"+(n?" in "+n:"")),se.ERR_DEPRECATED);return n&&!ry[a]&&(ry[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};sf.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function OL(e,t,n){if(typeof e!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new se("option "+i+" must be "+l,se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new se("Unknown option "+i,se.ERR_BAD_OPTION)}}const ku={assertOptions:OL,validators:sf},Pn=ku.validators;let Po=class{constructor(t){this.defaults=t||{},this.interceptors={request:new qb,response:new qb}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Fo(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ku.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:ku.assertOptions(o,{encode:Pn.function,serialize:Pn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ku.assertOptions(n,{baseUrl:Pn.spelling("baseURL"),withXsrfToken:Pn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=Tt.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,p;if(!l){const m=[ny.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,u),p=m.length,c=Promise.resolve(n);d<p;)c=c.then(m[d++],m[d++]);return c}p=s.length;let h=n;for(d=0;d<p;){const m=s[d++],v=s[d++];try{h=m(h)}catch(b){v.call(this,b);break}}try{c=ny.call(this,h)}catch(m){return Promise.reject(m)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Fo(this.defaults,t);const n=jO(t.baseURL,t.url,t.allowAbsoluteUrls);return AO(n,t.params,t.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(t){Po.prototype[t]=function(n,r){return this.request(Fo(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Fo(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Po.prototype[t]=n(),Po.prototype[t+"Form"]=n(!0)});let EL=class HO{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new ea(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new HO(function(o){t=o}),cancel:t}}};function CL(e){return function(n){return e.apply(null,n)}}function TL(e){return $.isObject(e)&&e.isAxiosError===!0}const mm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mm).forEach(([e,t])=>{mm[t]=e});function UO(e){const t=new Po(e),n=yO(Po.prototype.request,t);return $.extend(n,Po.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return UO(Fo(e,o))},n}const Ee=UO(Ws);Ee.Axios=Po;Ee.CanceledError=ea;Ee.CancelToken=EL;Ee.isCancel=MO;Ee.VERSION=BO;Ee.toFormData=of;Ee.AxiosError=se;Ee.Cancel=Ee.CanceledError;Ee.all=function(t){return Promise.all(t)};Ee.spread=CL;Ee.isAxiosError=TL;Ee.mergeConfig=Fo;Ee.AxiosHeaders=Tt;Ee.formToJSON=e=>LO($.isHTMLForm(e)?new FormData(e):e);Ee.getAdapter=zO.getAdapter;Ee.HttpStatusCode=mm;Ee.default=Ee;const{Axios:DV,AxiosError:FV,CanceledError:zV,isCancel:BV,CancelToken:HV,VERSION:UV,all:WV,Cancel:VV,isAxiosError:YV,spread:KV,toFormData:qV,AxiosHeaders:XV,HttpStatusCode:GV,formToJSON:QV,getAdapter:JV,mergeConfig:ZV}=Ee,RL=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),o=Bs(),i=async a=>{var s;a.preventDefault();try{const l=await Ee.post("http://localhost:5000/api/login",{email:e,password:n},{withCredentials:!0});console.log("✅ 로그인 성공:",l.data),alert("로그인 성공"),o("/")}catch(l){console.error("❌ 로그인 실패:",((s=l.response)==null?void 0:s.data)||l.message),alert("이메일 또는 비밀번호 오류")}};return C.jsxs("div",{className:Rl.loginBox,children:[C.jsx("h2",{className:Rl.loginTitle,children:"Login"}),C.jsxs("form",{onSubmit:i,children:[C.jsxs("div",{className:Rl.userBox,children:[C.jsx("input",{type:"email",required:!0,value:e,onChange:a=>t(a.target.value)}),C.jsx("label",{children:"Email"})]}),C.jsxs("div",{className:Rl.userBox,children:[C.jsx("input",{type:"password",required:!0,value:n,onChange:a=>r(a.target.value)}),C.jsx("label",{children:"Password"})]}),C.jsx(Ji,{type:"submit",variant:"outline-light",style:{width:"100%"},children:"Login"}),C.jsx("label",{style:{color:"white",marginTop:"20px",cursor:"pointer"},onClick:()=>o("/register"),children:"아직 회원이 아니신가요?"})]})]})},PL="_loginBox_1nyqi_5",AL="_loginTitle_1nyqi_33",$L="_userBox_1nyqi_47",ba={loginBox:PL,loginTitle:AL,userBox:$L},LL=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[o,i]=w.useState(""),[a,s]=w.useState(""),l=Bs(),u=async c=>{var d,p,h;c.preventDefault();try{const m=await Ee.post("http://localhost:5000/api/register",{email:o,password:n,company:a},{withCredentials:!0});console.log("✅ 회원가입 성공:",m.data),alert("회원가입 성공! 로그인 페이지로 이동합니다."),l("/login")}catch(m){console.error("❌ 회원가입 실패:",((d=m.response)==null?void 0:d.data)||m.message),alert(((h=(p=m.response)==null?void 0:p.data)==null?void 0:h.message)||"회원가입 실패")}};return C.jsxs("div",{className:ba.loginBox,children:[C.jsx("h2",{className:ba.loginTitle,children:"Register"}),C.jsxs("form",{onSubmit:u,children:[C.jsxs("div",{className:ba.userBox,children:[C.jsx("input",{type:"text",required:!0,value:a,onChange:c=>s(c.target.value)}),C.jsx("label",{children:"업체 이름"})]}),C.jsxs("div",{className:ba.userBox,children:[C.jsx("input",{type:"email",required:!0,value:o,onChange:c=>i(c.target.value)}),C.jsx("label",{children:"Email"})]}),C.jsxs("div",{className:ba.userBox,children:[C.jsx("input",{type:"password",required:!0,value:n,onChange:c=>r(c.target.value)}),C.jsx("label",{children:"Password"})]}),C.jsx(Ji,{type:"submit",variant:"outline-light",style:{width:"100%"},children:"Register"}),C.jsx("label",{style:{color:"white",marginTop:"20px",cursor:"pointer"},onClick:()=>l("/login"),children:"이미 계정이 있으신가요?"})]})]})};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Vs(e){return e+.5|0}const Nr=(e,t,n)=>Math.max(Math.min(e,n),t);function Na(e){return Nr(Vs(e*2.55),0,255)}function Kr(e){return Nr(Vs(e*255),0,255)}function rr(e){return Nr(Vs(e/2.55)/100,0,1)}function oy(e){return Nr(Vs(e*100),0,100)}const Wt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hm=[..."0123456789ABCDEF"],ML=e=>hm[e&15],NL=e=>hm[(e&240)>>4]+hm[e&15],Pl=e=>(e&240)>>4===(e&15),jL=e=>Pl(e.r)&&Pl(e.g)&&Pl(e.b)&&Pl(e.a);function IL(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&Wt[e[1]]*17,g:255&Wt[e[2]]*17,b:255&Wt[e[3]]*17,a:t===5?Wt[e[4]]*17:255}:(t===7||t===9)&&(n={r:Wt[e[1]]<<4|Wt[e[2]],g:Wt[e[3]]<<4|Wt[e[4]],b:Wt[e[5]]<<4|Wt[e[6]],a:t===9?Wt[e[7]]<<4|Wt[e[8]]:255})),n}const DL=(e,t)=>e<255?t(e):"";function FL(e){var t=jL(e)?ML:NL;return e?"#"+t(e.r)+t(e.g)+t(e.b)+DL(e.a,t):void 0}const zL=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function WO(e,t,n){const r=t*Math.min(n,1-n),o=(i,a=(i+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[o(0),o(8),o(4)]}function BL(e,t,n){const r=(o,i=(o+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function HL(e,t,n){const r=WO(e,1,.5);let o;for(t+n>1&&(o=1/(t+n),t*=o,n*=o),o=0;o<3;o++)r[o]*=1-t-n,r[o]+=t;return r}function UL(e,t,n,r,o){return e===o?(t-n)/r+(t<n?6:0):t===o?(n-e)/r+2:(e-t)/r+4}function bg(e){const n=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;let l,u,c;return i!==a&&(c=i-a,u=s>.5?c/(2-i-a):c/(i+a),l=UL(n,r,o,c,i),l=l*60+.5),[l|0,u||0,s]}function yg(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Kr)}function xg(e,t,n){return yg(WO,e,t,n)}function WL(e,t,n){return yg(HL,e,t,n)}function VL(e,t,n){return yg(BL,e,t,n)}function VO(e){return(e%360+360)%360}function YL(e){const t=zL.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Na(+t[5]):Kr(+t[5]));const o=VO(+t[2]),i=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=WL(o,i,a):t[1]==="hsv"?r=VL(o,i,a):r=xg(o,i,a),{r:r[0],g:r[1],b:r[2],a:n}}function KL(e,t){var n=bg(e);n[0]=VO(n[0]+t),n=xg(n),e.r=n[0],e.g=n[1],e.b=n[2]}function qL(e){if(!e)return;const t=bg(e),n=t[0],r=oy(t[1]),o=oy(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${o}%, ${rr(e.a)})`:`hsl(${n}, ${r}%, ${o}%)`}const iy={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},ay={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function XL(){const e={},t=Object.keys(ay),n=Object.keys(iy);let r,o,i,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],o=0;o<n.length;o++)i=n[o],s=s.replace(i,iy[i]);i=parseInt(ay[a],16),e[s]=[i>>16&255,i>>8&255,i&255]}return e}let Al;function GL(e){Al||(Al=XL(),Al.transparent=[0,0,0,0]);const t=Al[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const QL=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function JL(e){const t=QL.exec(e);let n=255,r,o,i;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?Na(a):Nr(a*255,0,255)}return r=+t[1],o=+t[3],i=+t[5],r=255&(t[2]?Na(r):Nr(r,0,255)),o=255&(t[4]?Na(o):Nr(o,0,255)),i=255&(t[6]?Na(i):Nr(i,0,255)),{r,g:o,b:i,a:n}}}function ZL(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${rr(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const wd=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ti=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function eM(e,t,n){const r=ti(rr(e.r)),o=ti(rr(e.g)),i=ti(rr(e.b));return{r:Kr(wd(r+n*(ti(rr(t.r))-r))),g:Kr(wd(o+n*(ti(rr(t.g))-o))),b:Kr(wd(i+n*(ti(rr(t.b))-i))),a:e.a+n*(t.a-e.a)}}function $l(e,t,n){if(e){let r=bg(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=xg(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function YO(e,t){return e&&Object.assign(t||{},e)}function sy(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Kr(e[3]))):(t=YO(e,{r:0,g:0,b:0,a:1}),t.a=Kr(t.a)),t}function tM(e){return e.charAt(0)==="r"?JL(e):YL(e)}class Os{constructor(t){if(t instanceof Os)return t;const n=typeof t;let r;n==="object"?r=sy(t):n==="string"&&(r=IL(t)||GL(t)||tM(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=YO(this._rgb);return t&&(t.a=rr(t.a)),t}set rgb(t){this._rgb=sy(t)}rgbString(){return this._valid?ZL(this._rgb):void 0}hexString(){return this._valid?FL(this._rgb):void 0}hslString(){return this._valid?qL(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,o=t.rgb;let i;const a=n===i?.5:n,s=2*a-1,l=r.a-o.a,u=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;i=1-u,r.r=255&u*r.r+i*o.r+.5,r.g=255&u*r.g+i*o.g+.5,r.b=255&u*r.b+i*o.b+.5,r.a=a*r.a+(1-a)*o.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=eM(this._rgb,t._rgb,n)),this}clone(){return new Os(this.rgb)}alpha(t){return this._rgb.a=Kr(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Vs(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return $l(this._rgb,2,t),this}darken(t){return $l(this._rgb,2,-t),this}saturate(t){return $l(this._rgb,1,t),this}desaturate(t){return $l(this._rgb,1,-t),this}rotate(t){return KL(this._rgb,t),this}}/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Qn(){}const nM=(()=>{let e=0;return()=>e++})();function Se(e){return e==null}function Ze(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ge(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function en(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function An(e,t){return en(e)?e:t}function ye(e,t){return typeof e>"u"?t:e}const rM=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Re(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function be(e,t,n,r){let o,i,a;if(Ze(e))for(i=e.length,o=0;o<i;o++)t.call(n,e[o],o);else if(ge(e))for(a=Object.keys(e),i=a.length,o=0;o<i;o++)t.call(n,e[a[o]],a[o])}function cc(e,t){let n,r,o,i;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(o=e[n],i=t[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function fc(e){if(Ze(e))return e.map(fc);if(ge(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let o=0;for(;o<r;++o)t[n[o]]=fc(e[n[o]]);return t}return e}function KO(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function oM(e,t,n,r){if(!KO(e))return;const o=t[e],i=n[e];ge(o)&&ge(i)?Es(o,i,r):t[e]=fc(i)}function Es(e,t,n){const r=Ze(t)?t:[t],o=r.length;if(!ge(e))return e;n=n||{};const i=n.merger||oM;let a;for(let s=0;s<o;++s){if(a=r[s],!ge(a))continue;const l=Object.keys(a);for(let u=0,c=l.length;u<c;++u)i(l[u],e,a,n)}return e}function Qa(e,t){return Es(e,t,{merger:iM})}function iM(e,t,n){if(!KO(e))return;const r=t[e],o=n[e];ge(r)&&ge(o)?Qa(r,o):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=fc(o))}const ly={"":e=>e,x:e=>e.x,y:e=>e.y};function aM(e){const t=e.split("."),n=[];let r="";for(const o of t)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function sM(e){const t=aM(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function Ii(e,t){return(ly[t]||(ly[t]=sM(t)))(e)}function wg(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Cs=e=>typeof e<"u",Zr=e=>typeof e=="function",uy=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function lM(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Rt=Math.PI,qr=2*Rt,dc=Number.POSITIVE_INFINITY,uM=Rt/180,hn=Rt/2,po=Rt/4,cy=Rt*2/3,qO=Math.log10,Xr=Math.sign;function Ou(e,t,n){return Math.abs(e-t)<n}function fy(e){const t=Math.round(e);e=Ou(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(qO(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function cM(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((o,i)=>o-i).pop(),t}function fM(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function pc(e){return!fM(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function dM(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function pM(e,t,n){let r,o,i;for(r=0,o=e.length;r<o;r++)i=e[r][n],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Co(e){return e*(Rt/180)}function mM(e){return e*(180/Rt)}function dy(e){if(!en(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function hM(e,t){const n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*Rt&&(i+=qr),{angle:i,distance:o}}function gM(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function mo(e){return(e%qr+qr)%qr}function vM(e,t,n,r){const o=mo(e),i=mo(t),a=mo(n),s=mo(i-o),l=mo(a-o),u=mo(o-i),c=mo(o-a);return o===i||o===a||r||s>l&&u<c}function gn(e,t,n){return Math.max(t,Math.min(n,e))}function bM(e){return gn(e,-32768,32767)}function xi(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Sg(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,o=0,i;for(;r-o>1;)i=o+r>>1,n(i)?o=i:r=i;return{lo:o,hi:r}}const gm=(e,t,n,r)=>Sg(e,n,r?o=>{const i=e[o][t];return i<n||i===n&&e[o+1][t]===n}:o=>e[o][t]<n),yM=(e,t,n)=>Sg(e,n,r=>e[r][t]>=n);function xM(e,t,n){let r=0,o=e.length;for(;r<o&&e[r]<t;)r++;for(;o>r&&e[o-1]>n;)o--;return r>0||o<e.length?e.slice(r,o):e}const XO=["push","pop","shift","splice","unshift"];function wM(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),XO.forEach(n=>{const r="_onData"+wg(n),o=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...i){const a=o.apply(this,i);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...i)}),a}})})}function py(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(t);o!==-1&&r.splice(o,1),!(r.length>0)&&(XO.forEach(i=>{delete e[i]}),delete e._chartjs)}function GO(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const QO=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function JO(e,t){let n=[],r=!1;return function(...o){n=o,r||(r=!0,QO.call(window,()=>{r=!1,e.apply(t,n)}))}}function SM(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const ZO=e=>e==="start"?"left":e==="end"?"right":"center",Lt=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,_M=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t,Ll=e=>e===0||e===1,my=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*qr/n)),hy=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*qr/n)+1,Ja={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*hn)+1,easeOutSine:e=>Math.sin(e*hn),easeInOutSine:e=>-.5*(Math.cos(Rt*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ll(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ll(e)?e:my(e,.075,.3),easeOutElastic:e=>Ll(e)?e:hy(e,.075,.3),easeInOutElastic(e){return Ll(e)?e:e<.5?.5*my(e*2,.1125,.45):.5+.5*hy(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ja.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ja.easeInBounce(e*2)*.5:Ja.easeOutBounce(e*2-1)*.5+.5};function eE(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function gy(e){return eE(e)?e:new Os(e)}function Sd(e){return eE(e)?e:new Os(e).saturate(.5).darken(.1).hexString()}const kM=["x","y","borderWidth","radius","tension"],OM=["color","borderColor","backgroundColor"];function EM(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:OM},numbers:{type:"number",properties:kM}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function CM(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const vy=new Map;function TM(e,t){t=t||{};const n=e+JSON.stringify(t);let r=vy.get(n);return r||(r=new Intl.NumberFormat(e,t),vy.set(n,r)),r}function tE(e,t,n){return TM(t,n).format(e)}const RM={values(e){return Ze(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let o,i=e;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(o="scientific"),i=PM(e,n)}const a=qO(Math.abs(i)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),tE(e,r,l)}};function PM(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var nE={formatters:RM};function AM(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:nE.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const zo=Object.create(null),vm=Object.create(null);function Za(e,t){if(!t)return e;const n=t.split(".");for(let r=0,o=n.length;r<o;++r){const i=n[r];e=e[i]||(e[i]=Object.create(null))}return e}function _d(e,t,n){return typeof t=="string"?Es(Za(e,t),n):Es(Za(e,""),t)}class $M{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,o)=>Sd(o.backgroundColor),this.hoverBorderColor=(r,o)=>Sd(o.borderColor),this.hoverColor=(r,o)=>Sd(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return _d(this,t,n)}get(t){return Za(this,t)}describe(t,n){return _d(vm,t,n)}override(t,n){return _d(zo,t,n)}route(t,n,r,o){const i=Za(this,t),a=Za(this,r),s="_"+n;Object.defineProperties(i,{[s]:{value:i[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],u=a[o];return ge(l)?Object.assign({},u,l):ye(l,u)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var Ve=new $M({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[EM,CM,AM]);function LM(e){return!e||Se(e.size)||Se(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function by(e,t,n,r,o){let i=t[o];return i||(i=t[o]=e.measureText(o).width,n.push(o)),i>r&&(r=i),r}function ho(e,t,n){const r=e.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((t-o)*r)/r+o}function yy(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function xy(e,t,n,r){rE(e,t,n,r,null)}function rE(e,t,n,r,o){let i,a,s,l,u,c,d,p;const h=t.pointStyle,m=t.rotation,v=t.radius;let b=(m||0)*uM;if(h&&typeof h=="object"&&(i=h.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(b),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(v)||v<=0)){switch(e.beginPath(),h){default:o?e.ellipse(n,r,o/2,v,0,0,qr):e.arc(n,r,v,0,qr),e.closePath();break;case"triangle":c=o?o/2:v,e.moveTo(n+Math.sin(b)*c,r-Math.cos(b)*v),b+=cy,e.lineTo(n+Math.sin(b)*c,r-Math.cos(b)*v),b+=cy,e.lineTo(n+Math.sin(b)*c,r-Math.cos(b)*v),e.closePath();break;case"rectRounded":u=v*.516,l=v-u,a=Math.cos(b+po)*l,d=Math.cos(b+po)*(o?o/2-u:l),s=Math.sin(b+po)*l,p=Math.sin(b+po)*(o?o/2-u:l),e.arc(n-d,r-s,u,b-Rt,b-hn),e.arc(n+p,r-a,u,b-hn,b),e.arc(n+d,r+s,u,b,b+hn),e.arc(n-p,r+a,u,b+hn,b+Rt),e.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*v,c=o?o/2:l,e.rect(n-c,r-l,2*c,2*l);break}b+=po;case"rectRot":d=Math.cos(b)*(o?o/2:v),a=Math.cos(b)*v,s=Math.sin(b)*v,p=Math.sin(b)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+p,r-a),e.lineTo(n+d,r+s),e.lineTo(n-p,r+a),e.closePath();break;case"crossRot":b+=po;case"cross":d=Math.cos(b)*(o?o/2:v),a=Math.cos(b)*v,s=Math.sin(b)*v,p=Math.sin(b)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"star":d=Math.cos(b)*(o?o/2:v),a=Math.cos(b)*v,s=Math.sin(b)*v,p=Math.sin(b)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a),b+=po,d=Math.cos(b)*(o?o/2:v),a=Math.cos(b)*v,s=Math.sin(b)*v,p=Math.sin(b)*(o?o/2:v),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"line":a=o?o/2:Math.cos(b)*v,s=Math.sin(b)*v,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(b)*(o?o/2:v),r+Math.sin(b)*v);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function oE(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function _g(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function kg(e){e.restore()}function MM(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),Se(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function NM(e,t,n,r,o){if(o.strikethrough||o.underline){const i=e.measureText(r),a=t-i.actualBoundingBoxLeft,s=t+i.actualBoundingBoxRight,l=n-i.actualBoundingBoxAscent,u=n+i.actualBoundingBoxDescent,c=o.strikethrough?(l+u)/2:u;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=o.decorationWidth||2,e.moveTo(a,c),e.lineTo(s,c),e.stroke()}}function jM(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function mc(e,t,n,r,o,i={}){const a=Ze(t)?t:[t],s=i.strokeWidth>0&&i.strokeColor!=="";let l,u;for(e.save(),e.font=o.string,MM(e,i),l=0;l<a.length;++l)u=a[l],i.backdrop&&jM(e,i.backdrop),s&&(i.strokeColor&&(e.strokeStyle=i.strokeColor),Se(i.strokeWidth)||(e.lineWidth=i.strokeWidth),e.strokeText(u,n,r,i.maxWidth)),e.fillText(u,n,r,i.maxWidth),NM(e,n,r,u,i),r+=Number(o.lineHeight);e.restore()}function hc(e,t){const{x:n,y:r,w:o,h:i,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*Rt,Rt,!0),e.lineTo(n,r+i-a.bottomLeft),e.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,Rt,hn,!0),e.lineTo(n+o-a.bottomRight,r+i),e.arc(n+o-a.bottomRight,r+i-a.bottomRight,a.bottomRight,hn,0,!0),e.lineTo(n+o,r+a.topRight),e.arc(n+o-a.topRight,r+a.topRight,a.topRight,0,-hn,!0),e.lineTo(n+a.topLeft,r)}const IM=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,DM=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function FM(e,t){const n=(""+e).match(IM);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const zM=e=>+e||0;function iE(e,t){const n={},r=ge(t),o=r?Object.keys(t):t,i=ge(e)?r?a=>ye(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of o)n[a]=zM(i(a));return n}function aE(e){return iE(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Ti(e){return iE(e,["topLeft","topRight","bottomLeft","bottomRight"])}function On(e){const t=aE(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function _t(e,t){e=e||{},t=t||Ve.font;let n=ye(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=ye(e.style,t.style);r&&!(""+r).match(DM)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const o={family:ye(e.family,t.family),lineHeight:FM(ye(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:ye(e.weight,t.weight),string:""};return o.string=LM(o),o}function Ml(e,t,n,r){let o,i,a;for(o=0,i=e.length;o<i;++o)if(a=e[o],a!==void 0&&a!==void 0)return a}function BM(e,t,n){const{min:r,max:o}=e,i=rM(t,(o-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(i)),max:a(o,i)}}function ta(e,t){return Object.assign(Object.create(e),t)}function Og(e,t=[""],n,r,o=()=>e[0]){const i=n||e;typeof r>"u"&&(r=cE("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:i,_fallback:r,_getTarget:o,override:s=>Og([s,...e],t,i,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return lE(s,l,()=>XM(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return Sy(s).includes(l)},ownKeys(s){return Sy(s)},set(s,l,u){const c=s._storage||(s._storage=o());return s[l]=c[l]=u,delete s._keys,!0}})}function Di(e,t,n,r){const o={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:sE(e,r),setContext:i=>Di(e,i,n,r),override:i=>Di(e.override(i),t,n,r)};return new Proxy(o,{deleteProperty(i,a){return delete i[a],delete e[a],!0},get(i,a,s){return lE(i,a,()=>UM(i,a,s))},getOwnPropertyDescriptor(i,a){return i._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(i,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(i,a,s){return e[a]=s,delete i[a],!0}})}function sE(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:o=t.allKeys}=e;return{allKeys:o,scriptable:n,indexable:r,isScriptable:Zr(n)?n:()=>n,isIndexable:Zr(r)?r:()=>r}}const HM=(e,t)=>e?e+wg(t):t,Eg=(e,t)=>ge(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function lE(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function UM(e,t,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:a}=e;let s=r[t];return Zr(s)&&a.isScriptable(t)&&(s=WM(t,s,e,n)),Ze(s)&&s.length&&(s=VM(t,s,e,a.isIndexable)),Eg(t,s)&&(s=Di(s,o,i&&i[t],a)),s}function WM(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(i,a||r);return s.delete(e),Eg(e,l)&&(l=Cg(o._scopes,o,e,l)),l}function VM(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_descriptors:s}=n;if(typeof i.index<"u"&&r(e))return t[i.index%t.length];if(ge(t[0])){const l=t,u=o._scopes.filter(c=>c!==l);t=[];for(const c of l){const d=Cg(u,o,e,c);t.push(Di(d,i,a&&a[e],s))}}return t}function uE(e,t,n){return Zr(e)?e(t,n):e}const YM=(e,t)=>e===!0?t:typeof e=="string"?Ii(t,e):void 0;function KM(e,t,n,r,o){for(const i of t){const a=YM(n,i);if(a){e.add(a);const s=uE(a._fallback,n,o);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function Cg(e,t,n,r){const o=t._rootScopes,i=uE(t._fallback,n,r),a=[...e,...o],s=new Set;s.add(r);let l=wy(s,a,n,i||n,r);return l===null||typeof i<"u"&&i!==n&&(l=wy(s,a,i,l,r),l===null)?!1:Og(Array.from(s),[""],o,i,()=>qM(t,n,r))}function wy(e,t,n,r,o){for(;n;)n=KM(e,t,n,r,o);return n}function qM(e,t,n){const r=e._getTarget();t in r||(r[t]={});const o=r[t];return Ze(o)&&ge(n)?n:o||{}}function XM(e,t,n,r){let o;for(const i of t)if(o=cE(HM(i,e),n),typeof o<"u")return Eg(e,o)?Cg(n,r,e,o):o}function cE(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Sy(e){let t=e._keys;return t||(t=e._keys=GM(e._scopes)),t}function GM(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(o=>!o.startsWith("_")))t.add(r);return Array.from(t)}function Tg(){return typeof window<"u"&&typeof document<"u"}function Rg(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function gc(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const lf=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function QM(e,t){return lf(e).getPropertyValue(t)}const JM=["top","right","bottom","left"];function Ao(e,t,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=JM[o];r[i]=parseFloat(e[t+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const ZM=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function e3(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:o,offsetY:i}=r;let a=!1,s,l;if(ZM(o,i,e.target))s=o,l=i;else{const u=t.getBoundingClientRect();s=r.clientX-u.left,l=r.clientY-u.top,a=!0}return{x:s,y:l,box:a}}function So(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,o=lf(n),i=o.boxSizing==="border-box",a=Ao(o,"padding"),s=Ao(o,"border","width"),{x:l,y:u,box:c}=e3(e,n),d=a.left+(c&&s.left),p=a.top+(c&&s.top);let{width:h,height:m}=t;return i&&(h-=a.width+s.width,m-=a.height+s.height),{x:Math.round((l-d)/h*n.width/r),y:Math.round((u-p)/m*n.height/r)}}function t3(e,t,n){let r,o;if(t===void 0||n===void 0){const i=e&&Rg(e);if(!i)t=e.clientWidth,n=e.clientHeight;else{const a=i.getBoundingClientRect(),s=lf(i),l=Ao(s,"border","width"),u=Ao(s,"padding");t=a.width-u.width-l.width,n=a.height-u.height-l.height,r=gc(s.maxWidth,i,"clientWidth"),o=gc(s.maxHeight,i,"clientHeight")}}return{width:t,height:n,maxWidth:r||dc,maxHeight:o||dc}}const Nl=e=>Math.round(e*10)/10;function n3(e,t,n,r){const o=lf(e),i=Ao(o,"margin"),a=gc(o.maxWidth,e,"clientWidth")||dc,s=gc(o.maxHeight,e,"clientHeight")||dc,l=t3(e,t,n);let{width:u,height:c}=l;if(o.boxSizing==="content-box"){const p=Ao(o,"border","width"),h=Ao(o,"padding");u-=h.width+p.width,c-=h.height+p.height}return u=Math.max(0,u-i.width),c=Math.max(0,r?u/r:c-i.height),u=Nl(Math.min(u,a,l.maxWidth)),c=Nl(Math.min(c,s,l.maxHeight)),u&&!c&&(c=Nl(u/2)),(t!==void 0||n!==void 0)&&r&&l.height&&c>l.height&&(c=l.height,u=Nl(Math.floor(c*r))),{width:u,height:c}}function _y(e,t,n){const r=t||1,o=Math.floor(e.height*r),i=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==o||a.width!==i?(e.currentDevicePixelRatio=r,a.height=o,a.width=i,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const r3=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Tg()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function ky(e,t){const n=QM(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}const o3=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},i3=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ri(e,t,n){return e?o3(t,n):i3()}function fE(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function dE(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function jl(e,t,n){return e.options.clip?e[n]:t[n]}function a3(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:jl(n,t,"left"),right:jl(n,t,"right"),top:jl(r,t,"top"),bottom:jl(r,t,"bottom")}:t}function s3(e,t){const n=t._clip;if(n.disabled)return!1;const r=a3(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class l3{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,o){const i=n.listeners[o],a=n.duration;i.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=QO.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,o)=>{if(!r.running||!r.items.length)return;const i=r.items;let a=i.length-1,s=!1,l;for(;a>=0;--a)l=i[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(i[a]=i[i.length-1],i.pop());s&&(o.draw(),this._notify(o,r,t,"progress")),i.length||(r.running=!1,this._notify(o,r,t,"complete"),r.initial=!1),n+=i.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,o)=>Math.max(r,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let o=r.length-1;for(;o>=0;--o)r[o].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Zn=new l3;const Oy="transparent",u3={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=gy(e||Oy),o=r.valid&&gy(t||Oy);return o&&o.valid?o.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class c3{constructor(t,n,r,o){const i=n[r];o=Ml([t.to,o,i,t.from]);const a=Ml([t.from,i,o]);this._active=!0,this._fn=t.fn||u3[t.type||typeof a],this._easing=Ja[t.easing]||Ja.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=o,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const o=this._target[this._prop],i=r-this._start,a=this._duration-i;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Ml([t.to,n,o,t.from]),this._from=Ml([t.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,o=this._prop,i=this._from,a=this._loop,s=this._to;let l;if(this._active=i!==s&&(a||n<r),!this._active){this._target[o]=s,this._notify(!0);return}if(n<0){this._target[o]=i;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[o]=this._fn(i,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let o=0;o<r.length;o++)r[o][n]()}}class pE{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ge(t))return;const n=Object.keys(Ve.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{const i=t[o];if(!ge(i))return;const a={};for(const s of n)a[s]=i[s];(Ze(i.properties)&&i.properties||[o]).forEach(s=>{(s===o||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,o=d3(t,r);if(!o)return[];const i=this._createAnimations(o,r);return r.$shared&&f3(t.options.$animations,r).then(()=>{t.options=r},()=>{}),i}_createAnimations(t,n){const r=this._properties,o=[],i=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const u=a[l];if(u.charAt(0)==="$")continue;if(u==="options"){o.push(...this._animateOptions(t,n));continue}const c=n[u];let d=i[u];const p=r.get(u);if(d)if(p&&d.active()){d.update(p,c,s);continue}else d.cancel();if(!p||!p.duration){t[u]=c;continue}i[u]=d=new c3(p,t,u,c),o.push(d)}return o}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Zn.add(this._chart,r),!0}}function f3(e,t){const n=[],r=Object.keys(t);for(let o=0;o<r.length;o++){const i=e[r[o]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function d3(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Ey(e,t){const n=e&&e.options||{},r=n.reverse,o=n.min===void 0?t:0,i=n.max===void 0?t:0;return{start:r?i:o,end:r?o:i}}function p3(e,t,n){if(n===!1)return!1;const r=Ey(e,n),o=Ey(t,n);return{top:o.end,right:r.end,bottom:o.start,left:r.start}}function m3(e){let t,n,r,o;return ge(e)?(t=e.top,n=e.right,r=e.bottom,o=e.left):t=n=r=o=e,{top:t,right:n,bottom:r,left:o,disabled:e===!1}}function mE(e,t){const n=[],r=e._getSortedDatasetMetas(t);let o,i;for(o=0,i=r.length;o<i;++o)n.push(r[o].index);return n}function Cy(e,t,n,r={}){const o=e.keys,i=r.mode==="single";let a,s,l,u;if(t===null)return;let c=!1;for(a=0,s=o.length;a<s;++a){if(l=+o[a],l===n){if(c=!0,r.all)continue;break}u=e.values[l],en(u)&&(i||t===0||Xr(t)===Xr(u))&&(t+=u)}return!c&&!r.all?0:t}function h3(e,t){const{iScale:n,vScale:r}=t,o=n.axis==="x"?"x":"y",i=r.axis==="x"?"x":"y",a=Object.keys(e),s=new Array(a.length);let l,u,c;for(l=0,u=a.length;l<u;++l)c=a[l],s[l]={[o]:c,[i]:e[c]};return s}function kd(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function g3(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function v3(e){const{min:t,max:n,minDefined:r,maxDefined:o}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function b3(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Ty(e,t,n,r){for(const o of t.getMatchingVisibleMetas(r).reverse()){const i=e[o.index];if(n&&i>0||!n&&i<0)return o.index}return null}function Ry(e,t){const{chart:n,_cachedMeta:r}=e,o=n._stacks||(n._stacks={}),{iScale:i,vScale:a,index:s}=r,l=i.axis,u=a.axis,c=g3(i,a,r),d=t.length;let p;for(let h=0;h<d;++h){const m=t[h],{[l]:v,[u]:b}=m,g=m._stacks||(m._stacks={});p=g[u]=b3(o,c,v),p[s]=b,p._top=Ty(p,a,!0,r.type),p._bottom=Ty(p,a,!1,r.type);const y=p._visualValues||(p._visualValues={});y[s]=b}}function Od(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function y3(e,t){return ta(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function x3(e,t,n){return ta(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function ya(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const o of t){const i=o._stacks;if(!i||i[r]===void 0||i[r][n]===void 0)return;delete i[r][n],i[r]._visualValues!==void 0&&i[r]._visualValues[n]!==void 0&&delete i[r]._visualValues[n]}}}const Ed=e=>e==="reset"||e==="none",Py=(e,t)=>t?e:Object.assign({},e),w3=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:mE(n,!0),values:null};class es{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=kd(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ya(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),o=(d,p,h,m)=>d==="x"?p:d==="r"?m:h,i=n.xAxisID=ye(r.xAxisID,Od(t,"x")),a=n.yAxisID=ye(r.yAxisID,Od(t,"y")),s=n.rAxisID=ye(r.rAxisID,Od(t,"r")),l=n.indexAxis,u=n.iAxisID=o(l,i,a,s),c=n.vAxisID=o(l,a,i,s);n.xScale=this.getScaleForId(i),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&py(this._data,this),t._stacked&&ya(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(ge(n)){const o=this._cachedMeta;this._data=h3(n,o)}else if(r!==n){if(r){py(r,this);const o=this._cachedMeta;ya(o),o._parsed=[]}n&&Object.isExtensible(n)&&wM(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let o=!1;this._dataCheck();const i=n._stacked;n._stacked=kd(n.vScale,n),n.stack!==r.stack&&(o=!0,ya(n),n.stack=r.stack),this._resyncElements(t),(o||i!==n._stacked)&&(Ry(this,n._parsed),n._stacked=kd(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:o}=this,{iScale:i,_stacked:a}=r,s=i.axis;let l=t===0&&n===o.length?!0:r._sorted,u=t>0&&r._parsed[t-1],c,d,p;if(this._parsing===!1)r._parsed=o,r._sorted=!0,p=o;else{Ze(o[t])?p=this.parseArrayData(r,o,t,n):ge(o[t])?p=this.parseObjectData(r,o,t,n):p=this.parsePrimitiveData(r,o,t,n);const h=()=>d[s]===null||u&&d[s]<u[s];for(c=0;c<n;++c)r._parsed[c+t]=d=p[c],l&&(h()&&(l=!1),u=d);r._sorted=l}a&&Ry(this,p)}parsePrimitiveData(t,n,r,o){const{iScale:i,vScale:a}=t,s=i.axis,l=a.axis,u=i.getLabels(),c=i===a,d=new Array(o);let p,h,m;for(p=0,h=o;p<h;++p)m=p+r,d[p]={[s]:c||i.parse(u[m],m),[l]:a.parse(n[m],m)};return d}parseArrayData(t,n,r,o){const{xScale:i,yScale:a}=t,s=new Array(o);let l,u,c,d;for(l=0,u=o;l<u;++l)c=l+r,d=n[c],s[l]={x:i.parse(d[0],c),y:a.parse(d[1],c)};return s}parseObjectData(t,n,r,o){const{xScale:i,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,u=new Array(o);let c,d,p,h;for(c=0,d=o;c<d;++c)p=c+r,h=n[p],u[c]={x:i.parse(Ii(h,s),p),y:a.parse(Ii(h,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const o=this.chart,i=this._cachedMeta,a=n[t.axis],s={keys:mE(o,!0),values:n._stacks[t.axis]._visualValues};return Cy(s,a,i.index,{mode:r})}updateRangeFromParsed(t,n,r,o){const i=r[n.axis];let a=i===null?NaN:i;const s=o&&r._stacks[n.axis];o&&s&&(o.values=s,a=Cy(o,i,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,o=r._parsed,i=r._sorted&&t===r.iScale,a=o.length,s=this._getOtherScale(t),l=w3(n,r,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=v3(s);let p,h;function m(){h=o[p];const v=h[s.axis];return!en(h[t.axis])||c>v||d<v}for(p=0;p<a&&!(!m()&&(this.updateRangeFromParsed(u,t,h,l),i));++p);if(i){for(p=a-1;p>=0;--p)if(!m()){this.updateRangeFromParsed(u,t,h,l);break}}return u}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let o,i,a;for(o=0,i=n.length;o<i;++o)a=n[o][t.axis],en(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,o=n.vScale,i=this.getParsed(t);return{label:r?""+r.getLabelForValue(i[r.axis]):"",value:o?""+o.getLabelForValue(i[o.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=m3(ye(this.options.clip,p3(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,o=r.data||[],i=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||o.length-s,u=this.options.drawActiveElementsOnTop;let c;for(r.dataset&&r.dataset.draw(t,i,s,l),c=s;c<s+l;++c){const d=o[c];d.hidden||(d.active&&u?a.push(d):d.draw(t,i))}for(c=0;c<a.length;++c)a[c].draw(t,i)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const o=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];i=a.$context||(a.$context=x3(this.getContext(),t,a)),i.parsed=this.getParsed(t),i.raw=o.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=y3(this.chart.getContext(),this.index)),i.dataset=o,i.index=i.datasetIndex=this.index;return i.active=!!n,i.mode=r,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const o=n==="active",i=this._cachedDataOpts,a=t+"-"+n,s=i[a],l=this.enableOptionSharing&&Cs(r);if(s)return Py(s,l);const u=this.chart.config,c=u.datasetElementScopeKeys(this._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),c),h=Object.keys(Ve.elements[t]),m=()=>this.getContext(r,o,n),v=u.resolveNamedOptions(p,h,m,d);return v.$shared&&(v.$shared=l,i[a]=Object.freeze(Py(v,l))),v}_resolveAnimations(t,n,r){const o=this.chart,i=this._cachedDataOpts,a=`animation-${n}`,s=i[a];if(s)return s;let l;if(o.options.animation!==!1){const c=this.chart.config,d=c.datasetAnimationScopeKeys(this._type,n),p=c.getOptionScopes(this.getDataset(),d);l=c.createResolver(p,this.getContext(t,r,n))}const u=new pE(o,l&&l.animations);return l&&l._cacheable&&(i[a]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ed(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),o=this._sharedOptions,i=this.getSharedOptions(r),a=this.includeOptions(n,i)||i!==o;return this.updateSharedOptions(i,n,r),{sharedOptions:i,includeOptions:a}}updateElement(t,n,r,o){Ed(o)?Object.assign(t,r):this._resolveAnimations(n,o).update(t,r)}updateSharedOptions(t,n,r){t&&!Ed(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,o){t.active=o;const i=this.getStyle(n,o);this._resolveAnimations(n,r,o).update(t,{options:!o&&this.getSharedOptions(i)||i})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,u]of this._syncList)this[s](l,u);this._syncList=[];const o=r.length,i=n.length,a=Math.min(i,o);a&&this.parse(0,a),i>o?this._insertElements(o,i-o,t):i<o&&this._removeElements(i,o-i)}_insertElements(t,n,r=!0){const o=this._cachedMeta,i=o.data,a=t+n;let s;const l=u=>{for(u.length+=n,s=u.length-1;s>=a;s--)u[s]=u[s-n]};for(l(i),s=t;s<a;++s)i[s]=new this.dataElementType;this._parsing&&l(o._parsed),this.parse(t,n),r&&this.updateElements(i,t,n,"reset")}updateElements(t,n,r,o){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const o=r._parsed.splice(t,n);r._stacked&&ya(r,o)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,o]=t;this[n](r,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}pe(es,"defaults",{}),pe(es,"datasetElementType",null),pe(es,"dataElementType",null);function S3(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let o=0,i=n.length;o<i;o++)r=r.concat(n[o].controller.getAllParsedValues(e));e._cache.$bar=GO(r.sort((o,i)=>o-i))}return e._cache.$bar}function _3(e){const t=e.iScale,n=S3(t,e.type);let r=t._length,o,i,a,s;const l=()=>{a===32767||a===-32768||(Cs(s)&&(r=Math.min(r,Math.abs(a-s)||r)),s=a)};for(o=0,i=n.length;o<i;++o)a=t.getPixelForValue(n[o]),l();for(s=void 0,o=0,i=t.ticks.length;o<i;++o)a=t.getPixelForTick(o),l();return r}function k3(e,t,n,r){const o=n.barThickness;let i,a;return Se(o)?(i=t.min*n.categoryPercentage,a=n.barPercentage):(i=o*r,a=1),{chunk:i/r,ratio:a,start:t.pixels[e]-i/2}}function O3(e,t,n,r){const o=t.pixels,i=o[e];let a=e>0?o[e-1]:null,s=e<o.length-1?o[e+1]:null;const l=n.categoryPercentage;a===null&&(a=i-(s===null?t.end-t.start:s-i)),s===null&&(s=i+i-a);const u=i-(i-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/r,ratio:n.barPercentage,start:u}}function E3(e,t,n,r){const o=n.parse(e[0],r),i=n.parse(e[1],r),a=Math.min(o,i),s=Math.max(o,i);let l=a,u=s;Math.abs(a)>Math.abs(s)&&(l=s,u=a),t[n.axis]=u,t._custom={barStart:l,barEnd:u,start:o,end:i,min:a,max:s}}function hE(e,t,n,r){return Ze(e)?E3(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Ay(e,t,n,r){const o=e.iScale,i=e.vScale,a=o.getLabels(),s=o===i,l=[];let u,c,d,p;for(u=n,c=n+r;u<c;++u)p=t[u],d={},d[o.axis]=s||o.parse(a[u],u),l.push(hE(p,d,i,u));return l}function Cd(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function C3(e,t,n){return e!==0?Xr(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function T3(e){let t,n,r,o,i;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(o="end",i="start"):(o="start",i="end"),{start:n,end:r,reverse:t,top:o,bottom:i}}function R3(e,t,n,r){let o=t.borderSkipped;const i={};if(!o){e.borderSkipped=i;return}if(o===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:s,reverse:l,top:u,bottom:c}=T3(e);o==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?o=u:(n._bottom||0)===r?o=c:(i[$y(c,a,s,l)]=!0,o=u)),i[$y(o,a,s,l)]=!0,e.borderSkipped=i}function $y(e,t,n,r){return r?(e=P3(e,t,n),e=Ly(e,n,t)):e=Ly(e,t,n),e}function P3(e,t,n){return e===t?n:e===n?t:e}function Ly(e,t,n){return e==="start"?t:e==="end"?n:e}function A3(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Eu extends es{parsePrimitiveData(t,n,r,o){return Ay(t,n,r,o)}parseArrayData(t,n,r,o){return Ay(t,n,r,o)}parseObjectData(t,n,r,o){const{iScale:i,vScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,u=i.axis==="x"?s:l,c=a.axis==="x"?s:l,d=[];let p,h,m,v;for(p=r,h=r+o;p<h;++p)v=n[p],m={},m[i.axis]=i.parse(Ii(v,u),p),d.push(hE(Ii(v,c),m,a,p));return d}updateRangeFromParsed(t,n,r,o){super.updateRangeFromParsed(t,n,r,o);const i=r._custom;i&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:o}=n,i=this.getParsed(t),a=i._custom,s=Cd(a)?"["+a.start+", "+a.end+"]":""+o.getLabelForValue(i[o.axis]);return{label:""+r.getLabelForValue(i[r.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,o){const i=o==="reset",{index:a,_cachedMeta:{vScale:s}}=this,l=s.getBasePixel(),u=s.isHorizontal(),c=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(n,o);for(let h=n;h<n+r;h++){const m=this.getParsed(h),v=i||Se(m[s.axis])?{base:l,head:l}:this._calculateBarValuePixels(h),b=this._calculateBarIndexPixels(h,c),g=(m._stacks||{})[s.axis],y={horizontal:u,base:v.base,enableBorderRadius:!g||Cd(m._custom)||a===g._top||a===g._bottom,x:u?v.head:b.center,y:u?b.center:v.head,height:u?b.size:Math.abs(v.size),width:u?Math.abs(v.size):b.size};p&&(y.options=d||this.resolveDataElementOptions(h,t[h].active?"active":o));const x=y.options||t[h].options;R3(y,x,g,a),A3(y,x,c.ratio),this.updateElement(t[h],h,y,o)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,o=r.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),i=r.options.stacked,a=[],s=this._cachedMeta.controller.getParsed(n),l=s&&s[r.axis],u=c=>{const d=c._parsed.find(h=>h[r.axis]===l),p=d&&d[c.vScale.axis];if(Se(p)||isNaN(p))return!0};for(const c of o)if(!(n!==void 0&&u(c))&&((i===!1||a.indexOf(c.stack)===-1||i===void 0&&c.stack===void 0)&&a.push(c.stack),c.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const o=this._getStacks(t,r),i=n!==void 0?o.indexOf(n):-1;return i===-1?o.length-1:i}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,o=[];let i,a;for(i=0,a=n.data.length;i<a;++i)o.push(r.getPixelForValue(this.getParsed(i)[r.axis],i));const s=t.barThickness;return{min:s||_3(n),pixels:o,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:o},options:{base:i,minBarLength:a}}=this,s=i||0,l=this.getParsed(t),u=l._custom,c=Cd(u);let d=l[n.axis],p=0,h=r?this.applyStack(n,l,r):d,m,v;h!==d&&(p=h-d,h=d),c&&(d=u.barStart,h=u.barEnd-u.barStart,d!==0&&Xr(d)!==Xr(u.barEnd)&&(p=0),p+=d);const b=!Se(i)&&!c?i:p;let g=n.getPixelForValue(b);if(this.chart.getDataVisibility(t)?m=n.getPixelForValue(p+h):m=g,v=m-g,Math.abs(v)<a){v=C3(v,n,s)*a,d===s&&(g-=v/2);const y=n.getPixelForDecimal(0),x=n.getPixelForDecimal(1),S=Math.min(y,x),k=Math.max(y,x);g=Math.max(Math.min(g,k),S),m=g+v,r&&!c&&(l._stacks[n.axis]._visualValues[o]=n.getValueForPixel(m)-n.getValueForPixel(g))}if(g===n.getPixelForValue(s)){const y=Xr(v)*n.getLineWidthForValue(s)/2;g+=y,v-=y}return{size:v,base:g,head:m,center:m+v/2}}_calculateBarIndexPixels(t,n){const r=n.scale,o=this.options,i=o.skipNull,a=ye(o.maxBarThickness,1/0);let s,l;if(n.grouped){const u=i?this._getStackCount(t):n.stackCount,c=o.barThickness==="flex"?O3(t,n,o,u):k3(t,n,o,u),d=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0);s=c.start+c.chunk*d+c.chunk/2,l=Math.min(a,c.chunk*c.ratio)}else s=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(a,n.min*n.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,o=r.length;let i=0;for(;i<o;++i)this.getParsed(i)[n.axis]!==null&&!r[i].hidden&&r[i].draw(this._ctx)}}pe(Eu,"id","bar"),pe(Eu,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),pe(Eu,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function go(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Pg{constructor(t){pe(this,"options");this.options=t||{}}static override(t){Object.assign(Pg.prototype,t)}init(){}formats(){return go()}parse(){return go()}format(){return go()}add(){return go()}diff(){return go()}startOf(){return go()}endOf(){return go()}}var $3={_date:Pg};function L3(e,t,n,r){const{controller:o,data:i,_sorted:a}=e,s=o._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!=="r"&&a&&i.length){const u=s._reversePixels?yM:gm;if(r){if(o._sharedOptions){const c=i[0],d=typeof c.getRange=="function"&&c.getRange(t);if(d){const p=u(i,t,n-d),h=u(i,t,n+d);return{lo:p.lo,hi:h.hi}}}}else{const c=u(i,t,n);if(l){const{vScale:d}=o._cachedMeta,{_parsed:p}=e,h=p.slice(0,c.lo+1).reverse().findIndex(v=>!Se(v[d.axis]));c.lo-=Math.max(0,h);const m=p.slice(c.hi).findIndex(v=>!Se(v[d.axis]));c.hi+=Math.max(0,m)}return c}}return{lo:0,hi:i.length-1}}function uf(e,t,n,r,o){const i=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=i.length;s<l;++s){const{index:u,data:c}=i[s],{lo:d,hi:p}=L3(i[s],t,a,o);for(let h=d;h<=p;++h){const m=c[h];m.skip||r(m,u,h)}}}function M3(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,o){const i=t?Math.abs(r.x-o.x):0,a=n?Math.abs(r.y-o.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}}function Td(e,t,n,r,o){const i=[];return!o&&!e.isPointInArea(t)||uf(e,n,t,function(s,l,u){!o&&!oE(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&i.push({element:s,datasetIndex:l,index:u})},!0),i}function N3(e,t,n,r){let o=[];function i(a,s,l){const{startAngle:u,endAngle:c}=a.getProps(["startAngle","endAngle"],r),{angle:d}=hM(a,{x:t.x,y:t.y});vM(d,u,c)&&o.push({element:a,datasetIndex:s,index:l})}return uf(e,n,t,i),o}function j3(e,t,n,r,o,i){let a=[];const s=M3(n);let l=Number.POSITIVE_INFINITY;function u(c,d,p){const h=c.inRange(t.x,t.y,o);if(r&&!h)return;const m=c.getCenterPoint(o);if(!(!!i||e.isPointInArea(m))&&!h)return;const b=s(t,m);b<l?(a=[{element:c,datasetIndex:d,index:p}],l=b):b===l&&a.push({element:c,datasetIndex:d,index:p})}return uf(e,n,t,u),a}function Rd(e,t,n,r,o,i){return!i&&!e.isPointInArea(t)?[]:n==="r"&&!r?N3(e,t,n,o):j3(e,t,n,r,o,i)}function My(e,t,n,r,o){const i=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return uf(e,n,t,(l,u,c)=>{l[a]&&l[a](t[n],o)&&(i.push({element:l,datasetIndex:u,index:c}),s=s||l.inRange(t.x,t.y,o))}),r&&!s?[]:i}var I3={modes:{index(e,t,n,r){const o=So(t,e),i=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?Td(e,o,i,r,a):Rd(e,o,i,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(u=>{const c=s[0].index,d=u.data[c];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:c})}),l):[]},dataset(e,t,n,r){const o=So(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?Td(e,o,i,r,a):Rd(e,o,i,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,u=e.getDatasetMeta(l).data;s=[];for(let c=0;c<u.length;++c)s.push({element:u[c],datasetIndex:l,index:c})}return s},point(e,t,n,r){const o=So(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return Td(e,o,i,r,a)},nearest(e,t,n,r){const o=So(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return Rd(e,o,i,n.intersect,r,a)},x(e,t,n,r){const o=So(t,e);return My(e,o,"x",n.intersect,r)},y(e,t,n,r){const o=So(t,e);return My(e,o,"y",n.intersect,r)}}};const gE=["left","top","right","bottom"];function xa(e,t){return e.filter(n=>n.pos===t)}function Ny(e,t){return e.filter(n=>gE.indexOf(n.pos)===-1&&n.box.axis===t)}function wa(e,t){return e.sort((n,r)=>{const o=t?r:n,i=t?n:r;return o.weight===i.weight?o.index-i.index:o.weight-i.weight})}function D3(e){const t=[];let n,r,o,i,a,s;for(n=0,r=(e||[]).length;n<r;++n)o=e[n],{position:i,options:{stack:a,stackWeight:s=1}}=o,t.push({index:n,box:o,pos:i,horizontal:o.isHorizontal(),weight:o.weight,stack:a&&i+a,stackWeight:s});return t}function F3(e){const t={};for(const n of e){const{stack:r,pos:o,stackWeight:i}=n;if(!r||!gE.includes(o))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function z3(e,t){const n=F3(e),{vBoxMaxWidth:r,hBoxMaxHeight:o}=t;let i,a,s;for(i=0,a=e.length;i<a;++i){s=e[i];const{fullSize:l}=s.box,u=n[s.stack],c=u&&s.stackWeight/u.weight;s.horizontal?(s.width=c?c*r:l&&t.availableWidth,s.height=o):(s.width=r,s.height=c?c*o:l&&t.availableHeight)}return n}function B3(e){const t=D3(e),n=wa(t.filter(u=>u.box.fullSize),!0),r=wa(xa(t,"left"),!0),o=wa(xa(t,"right")),i=wa(xa(t,"top"),!0),a=wa(xa(t,"bottom")),s=Ny(t,"x"),l=Ny(t,"y");return{fullSize:n,leftAndTop:r.concat(i),rightAndBottom:o.concat(l).concat(a).concat(s),chartArea:xa(t,"chartArea"),vertical:r.concat(o).concat(l),horizontal:i.concat(a).concat(s)}}function jy(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function vE(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function H3(e,t,n,r){const{pos:o,box:i}=n,a=e.maxPadding;if(!ge(o)){n.size&&(e[o]-=n.size);const d=r[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?i.height:i.width),n.size=d.size/d.count,e[o]+=n.size}i.getPadding&&vE(a,i.getPadding());const s=Math.max(0,t.outerWidth-jy(a,e,"left","right")),l=Math.max(0,t.outerHeight-jy(a,e,"top","bottom")),u=s!==e.w,c=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function U3(e){const t=e.maxPadding;function n(r){const o=Math.max(t[r]-e[r],0);return e[r]+=o,o}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function W3(e,t){const n=t.maxPadding;function r(o){const i={left:0,top:0,right:0,bottom:0};return o.forEach(a=>{i[a]=Math.max(t[a],n[a])}),i}return r(e?["left","right"]:["top","bottom"])}function ja(e,t,n,r){const o=[];let i,a,s,l,u,c;for(i=0,a=e.length,u=0;i<a;++i){s=e[i],l=s.box,l.update(s.width||t.w,s.height||t.h,W3(s.horizontal,t));const{same:d,other:p}=H3(t,n,s,r);u|=d&&o.length,c=c||p,l.fullSize||o.push(s)}return u&&ja(o,t,n,r)||c}function Il(e,t,n,r,o){e.top=n,e.left=t,e.right=t+r,e.bottom=n+o,e.width=r,e.height=o}function Iy(e,t,n,r){const o=n.padding;let{x:i,y:a}=t;for(const s of e){const l=s.box,u=r[s.stack]||{placed:0,weight:1},c=s.stackWeight/u.weight||1;if(s.horizontal){const d=t.w*c,p=u.size||l.height;Cs(u.start)&&(a=u.start),l.fullSize?Il(l,o.left,a,n.outerWidth-o.right-o.left,p):Il(l,t.left+u.placed,a,d,p),u.start=a,u.placed+=d,a=l.bottom}else{const d=t.h*c,p=u.size||l.width;Cs(u.start)&&(i=u.start),l.fullSize?Il(l,i,o.top,p,n.outerHeight-o.bottom-o.top):Il(l,i,t.top+u.placed,p,d),u.start=i,u.placed+=d,i=l.right}}t.x=i,t.y=a}var jr={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const o=On(e.options.layout.padding),i=Math.max(t-o.width,0),a=Math.max(n-o.height,0),s=B3(e.boxes),l=s.vertical,u=s.horizontal;be(e.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const c=l.reduce((v,b)=>b.box.options&&b.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:o,availableWidth:i,availableHeight:a,vBoxMaxWidth:i/2/c,hBoxMaxHeight:a/2}),p=Object.assign({},o);vE(p,On(r));const h=Object.assign({maxPadding:p,w:i,h:a,x:o.left,y:o.top},o),m=z3(l.concat(u),d);ja(s.fullSize,h,d,m),ja(l,h,d,m),ja(u,h,d,m)&&ja(l,h,d,m),U3(h),Iy(s.leftAndTop,h,d,m),h.x+=h.w,h.y+=h.h,Iy(s.rightAndBottom,h,d,m),e.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},be(s.chartArea,v=>{const b=v.box;Object.assign(b,e.chartArea),b.update(h.w,h.h,{left:0,top:0,right:0,bottom:0})})}};class bE{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,o){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,o?Math.floor(n/o):r)}}isAttached(t){return!0}updateConfig(t){}}class V3 extends bE{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Cu="$chartjs",Y3={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Dy=e=>e===null||e==="";function K3(e,t){const n=e.style,r=e.getAttribute("height"),o=e.getAttribute("width");if(e[Cu]={initial:{height:r,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Dy(o)){const i=ky(e,"width");i!==void 0&&(e.width=i)}if(Dy(r))if(e.style.height==="")e.height=e.width/(t||2);else{const i=ky(e,"height");i!==void 0&&(e.height=i)}return e}const yE=r3?{passive:!0}:!1;function q3(e,t,n){e&&e.addEventListener(t,n,yE)}function X3(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,yE)}function G3(e,t){const n=Y3[e.type]||e.type,{x:r,y:o}=So(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:o!==void 0?o:null}}function vc(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function Q3(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||vc(s.addedNodes,r),a=a&&!vc(s.removedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function J3(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||vc(s.removedNodes,r),a=a&&!vc(s.addedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const Ts=new Map;let Fy=0;function xE(){const e=window.devicePixelRatio;e!==Fy&&(Fy=e,Ts.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Z3(e,t){Ts.size||window.addEventListener("resize",xE),Ts.set(e,t)}function eN(e){Ts.delete(e),Ts.size||window.removeEventListener("resize",xE)}function tN(e,t,n){const r=e.canvas,o=r&&Rg(r);if(!o)return;const i=JO((s,l)=>{const u=o.clientWidth;n(s,l),u<o.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],u=l.contentRect.width,c=l.contentRect.height;u===0&&c===0||i(u,c)});return a.observe(o),Z3(e,i),a}function Pd(e,t,n){n&&n.disconnect(),t==="resize"&&eN(e)}function nN(e,t,n){const r=e.canvas,o=JO(i=>{e.ctx!==null&&n(G3(i,e))},e);return q3(r,t,o),o}class rN extends bE{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(K3(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Cu])return!1;const r=n[Cu].initial;["height","width"].forEach(i=>{const a=r[i];Se(a)?n.removeAttribute(i):n.setAttribute(i,a)});const o=r.style||{};return Object.keys(o).forEach(i=>{n.style[i]=o[i]}),n.width=n.width,delete n[Cu],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const o=t.$proxies||(t.$proxies={}),a={attach:Q3,detach:J3,resize:tN}[n]||nN;o[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),o=r[n];if(!o)return;({attach:Pd,detach:Pd,resize:Pd}[n]||X3)(t,n,o),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,o){return n3(t,n,r,o)}isAttached(t){const n=t&&Rg(t);return!!(n&&n.isConnected)}}function oN(e){return!Tg()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?V3:rN}var su;let Ys=(su=class{constructor(){pe(this,"x");pe(this,"y");pe(this,"active",!1);pe(this,"options");pe(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return pc(this.x)&&pc(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const o={};return t.forEach(i=>{o[i]=r[i]&&r[i].active()?r[i]._to:this[i]}),o}},pe(su,"defaults",{}),pe(su,"defaultRoutes"),su);function iN(e,t){const n=e.options.ticks,r=aN(e),o=Math.min(n.maxTicksLimit||r,r),i=n.major.enabled?lN(t):[],a=i.length,s=i[0],l=i[a-1],u=[];if(a>o)return uN(t,u,i,a/o),u;const c=sN(i,t,o);if(a>0){let d,p;const h=a>1?Math.round((l-s)/(a-1)):null;for(Dl(t,u,c,Se(h)?0:s-h,s),d=0,p=a-1;d<p;d++)Dl(t,u,c,i[d],i[d+1]);return Dl(t,u,c,l,Se(h)?t.length:l+h),u}return Dl(t,u,c),u}function aN(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),o=e._maxLength/n;return Math.floor(Math.min(r,o))}function sN(e,t,n){const r=cN(e),o=t.length/n;if(!r)return Math.max(o,1);const i=cM(r);for(let a=0,s=i.length-1;a<s;a++){const l=i[a];if(l>o)return l}return Math.max(o,1)}function lN(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function uN(e,t,n,r){let o=0,i=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===i&&(t.push(e[a]),o++,i=n[o*r])}function Dl(e,t,n,r,o){const i=ye(r,0),a=Math.min(ye(o,e.length),e.length);let s=0,l,u,c;for(n=Math.ceil(n),o&&(l=o-r,n=l/Math.floor(l/n)),c=i;c<0;)s++,c=Math.round(i+s*n);for(u=Math.max(i,0);u<a;u++)u===c&&(t.push(e[u]),s++,c=Math.round(i+s*n))}function cN(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const fN=e=>e==="left"?"right":e==="right"?"left":e,zy=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,By=(e,t)=>Math.min(t||e,e);function Hy(e,t){const n=[],r=e.length/t,o=e.length;let i=0;for(;i<o;i+=r)n.push(e[Math.floor(i)]);return n}function dN(e,t,n){const r=e.ticks.length,o=Math.min(t,r-1),i=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(o),u;if(!(n&&(r===1?u=Math.max(l-i,a-l):t===0?u=(e.getPixelForTick(1)-l)/2:u=(l-e.getPixelForTick(o-1))/2,l+=o<t?u:-u,l<i-s||l>a+s)))return l}function pN(e,t){be(e,n=>{const r=n.gc,o=r.length/2;let i;if(o>t){for(i=0;i<o;++i)delete n.data[r[i]];r.splice(0,o)}})}function Sa(e){return e.drawTicks?e.tickLength:0}function Uy(e,t){if(!e.display)return 0;const n=_t(e.font,t),r=On(e.padding);return(Ze(e.text)?e.text.length:1)*n.lineHeight+r.height}function mN(e,t){return ta(e,{scale:t,type:"scale"})}function hN(e,t,n){return ta(e,{tick:n,index:t,type:"tick"})}function gN(e,t,n){let r=ZO(e);return(n&&t!=="right"||!n&&t==="right")&&(r=fN(r)),r}function vN(e,t,n,r){const{top:o,left:i,bottom:a,right:s,chart:l}=e,{chartArea:u,scales:c}=l;let d=0,p,h,m;const v=a-o,b=s-i;if(e.isHorizontal()){if(h=Lt(r,i,s),ge(n)){const g=Object.keys(n)[0],y=n[g];m=c[g].getPixelForValue(y)+v-t}else n==="center"?m=(u.bottom+u.top)/2+v-t:m=zy(e,n,t);p=s-i}else{if(ge(n)){const g=Object.keys(n)[0],y=n[g];h=c[g].getPixelForValue(y)-b+t}else n==="center"?h=(u.left+u.right)/2-b+t:h=zy(e,n,t);m=Lt(r,a,o),d=n==="left"?-hn:hn}return{titleX:h,titleY:m,maxWidth:p,rotation:d}}class na extends Ys{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:o}=this;return t=An(t,Number.POSITIVE_INFINITY),n=An(n,Number.NEGATIVE_INFINITY),r=An(r,Number.POSITIVE_INFINITY),o=An(o,Number.NEGATIVE_INFINITY),{min:An(t,r),max:An(n,o),minDefined:en(t),maxDefined:en(n)}}getMinMax(t){let{min:n,max:r,minDefined:o,maxDefined:i}=this.getUserBounds(),a;if(o&&i)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,u=s.length;l<u;++l)a=s[l].controller.getMinMax(this,t),o||(n=Math.min(n,a.min)),i||(r=Math.max(r,a.max));return n=i&&n>r?r:n,r=o&&n>r?n:r,{min:An(n,An(r,n)),max:An(r,An(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Re(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:o,grace:i,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=BM(this,i,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?Hy(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=iN(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Re(this.options.afterUpdate,[this])}beforeSetDimensions(){Re(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Re(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Re(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Re(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],i.label=Re(n.callback,[i.value,r,t],this)}afterTickToLabelConversion(){Re(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Re(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=By(this.ticks.length,t.ticks.maxTicksLimit),o=n.minRotation||0,i=n.maxRotation;let a=o,s,l,u;if(!this._isVisible()||!n.display||o>=i||r<=1||!this.isHorizontal()){this.labelRotation=o;return}const c=this._getLabelSizes(),d=c.widest.width,p=c.highest.height,h=gn(this.chart.width-d,0,this.maxWidth);s=t.offset?this.maxWidth/r:h/(r-1),d+6>s&&(s=h/(r-(t.offset?.5:1)),l=this.maxHeight-Sa(t.grid)-n.padding-Uy(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),a=mM(Math.min(Math.asin(gn((c.highest.height+6)/s,-1,1)),Math.asin(gn(l/u,-1,1))-Math.asin(gn(p/u,-1,1)))),a=Math.max(o,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){Re(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Re(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:o,grid:i}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=Uy(o,n.options.font);if(s?(t.width=this.maxWidth,t.height=Sa(i)+l):(t.height=this.maxHeight,t.width=Sa(i)+l),r.display&&this.ticks.length){const{first:u,last:c,widest:d,highest:p}=this._getLabelSizes(),h=r.padding*2,m=Co(this.labelRotation),v=Math.cos(m),b=Math.sin(m);if(s){const g=r.mirror?0:b*d.width+v*p.height;t.height=Math.min(this.maxHeight,t.height+g+h)}else{const g=r.mirror?0:v*d.width+b*p.height;t.width=Math.min(this.maxWidth,t.width+g+h)}this._calculatePadding(u,c,b,v)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,o){const{ticks:{align:i,padding:a},position:s}=this.options,l=this.labelRotation!==0,u=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,h=0;l?u?(p=o*t.width,h=r*n.height):(p=r*t.height,h=o*n.width):i==="start"?h=n.width:i==="end"?p=t.width:i!=="inner"&&(p=t.width/2,h=n.width/2),this.paddingLeft=Math.max((p-c+a)*this.width/(this.width-c),0),this.paddingRight=Math.max((h-d+a)*this.width/(this.width-d),0)}else{let c=n.height/2,d=t.height/2;i==="start"?(c=0,d=t.height):i==="end"&&(c=n.height,d=0),this.paddingTop=c+a,this.paddingBottom=d+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Re(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)Se(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=Hy(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:o,_longestTextCache:i}=this,a=[],s=[],l=Math.floor(n/By(n,r));let u=0,c=0,d,p,h,m,v,b,g,y,x,S,k;for(d=0;d<n;d+=l){if(m=t[d].label,v=this._resolveTickFontOptions(d),o.font=b=v.string,g=i[b]=i[b]||{data:{},gc:[]},y=v.lineHeight,x=S=0,!Se(m)&&!Ze(m))x=by(o,g.data,g.gc,x,m),S=y;else if(Ze(m))for(p=0,h=m.length;p<h;++p)k=m[p],!Se(k)&&!Ze(k)&&(x=by(o,g.data,g.gc,x,k),S+=y);a.push(x),s.push(S),u=Math.max(x,u),c=Math.max(S,c)}pN(i,n);const _=a.indexOf(u),O=s.indexOf(c),E=R=>({width:a[R]||0,height:s[R]||0});return{first:E(0),last:E(n-1),widest:E(_),highest:E(O),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return bM(this._alignToPixels?ho(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=hN(this.getContext(),t,r))}return this.$context||(this.$context=mN(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Co(this.labelRotation),r=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),i=this._getLabelSizes(),a=t.autoSkipPadding||0,s=i?i.widest.width+a:0,l=i?i.highest.height+a:0;return this.isHorizontal()?l*r>s*o?s/r:l/o:l*o<s*r?l/r:s/o}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,o=this.options,{grid:i,position:a,border:s}=o,l=i.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Sa(i),h=[],m=s.setContext(this.getContext()),v=m.display?m.width:0,b=v/2,g=function(G){return ho(r,G,v)};let y,x,S,k,_,O,E,R,P,L,I,U;if(a==="top")y=g(this.bottom),O=this.bottom-p,R=y-b,L=g(t.top)+b,U=t.bottom;else if(a==="bottom")y=g(this.top),L=t.top,U=g(t.bottom)-b,O=y+b,R=this.top+p;else if(a==="left")y=g(this.right),_=this.right-p,E=y-b,P=g(t.left)+b,I=t.right;else if(a==="right")y=g(this.left),P=t.left,I=g(t.right)-b,_=y+b,E=this.left+p;else if(n==="x"){if(a==="center")y=g((t.top+t.bottom)/2+.5);else if(ge(a)){const G=Object.keys(a)[0],J=a[G];y=g(this.chart.scales[G].getPixelForValue(J))}L=t.top,U=t.bottom,O=y+b,R=O+p}else if(n==="y"){if(a==="center")y=g((t.left+t.right)/2);else if(ge(a)){const G=Object.keys(a)[0],J=a[G];y=g(this.chart.scales[G].getPixelForValue(J))}_=y-b,E=_-p,P=t.left,I=t.right}const Q=ye(o.ticks.maxTicksLimit,d),K=Math.max(1,Math.ceil(d/Q));for(x=0;x<d;x+=K){const G=this.getContext(x),J=i.setContext(G),M=s.setContext(G),V=J.lineWidth,W=J.color,te=M.dash||[],D=M.dashOffset,B=J.tickWidth,j=J.tickColor,F=J.tickBorderDash||[],T=J.tickBorderDashOffset;S=dN(this,x,l),S!==void 0&&(k=ho(r,S,V),u?_=E=P=I=k:O=R=L=U=k,h.push({tx1:_,ty1:O,tx2:E,ty2:R,x1:P,y1:L,x2:I,y2:U,width:V,color:W,borderDash:te,borderDashOffset:D,tickWidth:B,tickColor:j,tickBorderDash:F,tickBorderDashOffset:T}))}return this._ticksLength=d,this._borderValue=y,h}_computeLabelItems(t){const n=this.axis,r=this.options,{position:o,ticks:i}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:u,padding:c,mirror:d}=i,p=Sa(r.grid),h=p+c,m=d?-c:h,v=-Co(this.labelRotation),b=[];let g,y,x,S,k,_,O,E,R,P,L,I,U="middle";if(o==="top")_=this.bottom-m,O=this._getXAxisLabelAlignment();else if(o==="bottom")_=this.top+m,O=this._getXAxisLabelAlignment();else if(o==="left"){const K=this._getYAxisLabelAlignment(p);O=K.textAlign,k=K.x}else if(o==="right"){const K=this._getYAxisLabelAlignment(p);O=K.textAlign,k=K.x}else if(n==="x"){if(o==="center")_=(t.top+t.bottom)/2+h;else if(ge(o)){const K=Object.keys(o)[0],G=o[K];_=this.chart.scales[K].getPixelForValue(G)+h}O=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")k=(t.left+t.right)/2-h;else if(ge(o)){const K=Object.keys(o)[0],G=o[K];k=this.chart.scales[K].getPixelForValue(G)}O=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(l==="start"?U="top":l==="end"&&(U="bottom"));const Q=this._getLabelSizes();for(g=0,y=s.length;g<y;++g){x=s[g],S=x.label;const K=i.setContext(this.getContext(g));E=this.getPixelForTick(g)+i.labelOffset,R=this._resolveTickFontOptions(g),P=R.lineHeight,L=Ze(S)?S.length:1;const G=L/2,J=K.color,M=K.textStrokeColor,V=K.textStrokeWidth;let W=O;a?(k=E,O==="inner"&&(g===y-1?W=this.options.reverse?"left":"right":g===0?W=this.options.reverse?"right":"left":W="center"),o==="top"?u==="near"||v!==0?I=-L*P+P/2:u==="center"?I=-Q.highest.height/2-G*P+P:I=-Q.highest.height+P/2:u==="near"||v!==0?I=P/2:u==="center"?I=Q.highest.height/2-G*P:I=Q.highest.height-L*P,d&&(I*=-1),v!==0&&!K.showLabelBackdrop&&(k+=P/2*Math.sin(v))):(_=E,I=(1-L)*P/2);let te;if(K.showLabelBackdrop){const D=On(K.backdropPadding),B=Q.heights[g],j=Q.widths[g];let F=I-D.top,T=0-D.left;switch(U){case"middle":F-=B/2;break;case"bottom":F-=B;break}switch(O){case"center":T-=j/2;break;case"right":T-=j;break;case"inner":g===y-1?T-=j:g>0&&(T-=j/2);break}te={left:T,top:F,width:j+D.width,height:B+D.height,color:K.backdropColor}}b.push({label:S,font:R,textOffset:I,options:{rotation:v,color:J,strokeColor:M,strokeWidth:V,textAlign:W,textBaseline:U,translation:[k,_],backdrop:te}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Co(this.labelRotation))return t==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:o,padding:i}}=this.options,a=this._getLabelSizes(),s=t+i,l=a.widest.width;let u,c;return n==="left"?o?(c=this.right+i,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c+=l)):(c=this.right-s,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c=this.left)):n==="right"?o?(c=this.left+i,r==="near"?u="right":r==="center"?(u="center",c-=l/2):(u="left",c-=l)):(c=this.left+s,r==="near"?u="left":r==="center"?(u="center",c+=l/2):(u="right",c=this.right)):u="right",{textAlign:u,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:o,width:i,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,o,i,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(i=>i.value===t);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,a;const s=(l,u,c)=>{!c.width||!c.color||(r.save(),r.lineWidth=c.width,r.strokeStyle=c.color,r.setLineDash(c.borderDash||[]),r.lineDashOffset=c.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(u.x,u.y),r.stroke(),r.restore())};if(n.display)for(i=0,a=o.length;i<a;++i){const l=o[i];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:o}}=this,i=r.setContext(this.getContext()),a=r.display?i.width:0;if(!a)return;const s=o.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,c,d,p;this.isHorizontal()?(u=ho(t,this.left,a)-a/2,c=ho(t,this.right,s)+s/2,d=p=l):(d=ho(t,this.top,a)-a/2,p=ho(t,this.bottom,s)+s/2,u=c=l),n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.beginPath(),n.moveTo(u,d),n.lineTo(c,p),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,o=this._computeLabelArea();o&&_g(r,o);const i=this.getLabelItems(t);for(const a of i){const s=a.options,l=a.font,u=a.label,c=a.textOffset;mc(r,u,0,c,l,s)}o&&kg(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:o}}=this;if(!r.display)return;const i=_t(r.font),a=On(r.padding),s=r.align;let l=i.lineHeight/2;n==="bottom"||n==="center"||ge(n)?(l+=a.bottom,Ze(r.text)&&(l+=i.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:u,titleY:c,maxWidth:d,rotation:p}=vN(this,l,n,s);mc(t,r.text,0,0,i,{color:r.color,maxWidth:d,rotation:p,textAlign:gN(s,n,o),textBaseline:"middle",translation:[u,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=ye(t.grid&&t.grid.z,-1),o=ye(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==na.prototype.draw?[{z:n,draw:i=>{this.draw(i)}}]:[{z:r,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",o=[];let i,a;for(i=0,a=n.length;i<a;++i){const s=n[i];s[r]===this.id&&(!t||s.type===t)&&o.push(s)}return o}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return _t(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Fl{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;xN(n)&&(r=this.register(n));const o=this.items,i=t.id,a=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in o||(o[i]=t,bN(t,a,r),this.override&&Ve.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,o=this.scope;r in n&&delete n[r],o&&r in Ve[o]&&(delete Ve[o][r],this.override&&delete zo[r])}}function bN(e,t,n){const r=Es(Object.create(null),[n?Ve.get(n):{},Ve.get(t),e.defaults]);Ve.set(t,r),e.defaultRoutes&&yN(t,e.defaultRoutes),e.descriptors&&Ve.describe(t,e.descriptors)}function yN(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),o=r.pop(),i=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");Ve.route(i,o,l,s)})}function xN(e){return"id"in e&&"defaults"in e}class wN{constructor(){this.controllers=new Fl(es,"datasets",!0),this.elements=new Fl(Ys,"elements"),this.plugins=new Fl(Object,"plugins"),this.scales=new Fl(na,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(o=>{const i=r||this._getRegistryForType(o);r||i.isForType(o)||i===this.plugins&&o.id?this._exec(t,i,o):be(o,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const o=wg(t);Re(r["before"+o],[],r),n[t](r),Re(r["after"+o],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const o=n.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return o}}var Nn=new wN;class SN{constructor(){this._init=[]}notify(t,n,r,o){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const i=o?this._descriptors(t).filter(o):this._descriptors(t),a=this._notify(i,t,n,r);return n==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,o){o=o||{};for(const i of t){const a=i.plugin,s=a[r],l=[n,o,i.options];if(Re(s,l,a)===!1&&o.cancelable)return!1}return!0}invalidate(){Se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,o=ye(r.options&&r.options.plugins,{}),i=_N(r);return o===!1&&!n?[]:ON(t,i,o,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,o=(i,a)=>i.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(o(n,r),t,"stop"),this._notify(o(r,n),t,"start")}}function _N(e){const t={},n=[],r=Object.keys(Nn.plugins.items);for(let i=0;i<r.length;i++)n.push(Nn.getPlugin(r[i]));const o=e.plugins||[];for(let i=0;i<o.length;i++){const a=o[i];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function kN(e,t){return!t&&e===!1?null:e===!0?{}:e}function ON(e,{plugins:t,localIds:n},r,o){const i=[],a=e.getContext();for(const s of t){const l=s.id,u=kN(r[l],o);u!==null&&i.push({plugin:s,options:EN(e.config,{plugin:s,local:n[l]},u,a)})}return i}function EN(e,{plugin:t,local:n},r,o){const i=e.pluginScopeKeys(t),a=e.getOptionScopes(r,i);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function bm(e,t){const n=Ve.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function CN(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function TN(e,t){return e===t?"_index_":"_value_"}function Wy(e){if(e==="x"||e==="y"||e==="r")return e}function RN(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function ym(e,...t){if(Wy(e))return e;for(const n of t){const r=n.axis||RN(n.position)||e.length>1&&Wy(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Vy(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function PN(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Vy(e,"x",n[0])||Vy(e,"y",n[0])}return{}}function AN(e,t){const n=zo[e.type]||{scales:{}},r=t.scales||{},o=bm(e.type,t),i=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!ge(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=ym(a,s,PN(a,e),Ve.scales[s.type]),u=TN(l,o),c=n.scales||{};i[a]=Qa(Object.create(null),[{axis:l},s,c[l],c[u]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||bm(s,t),c=(zo[s]||{}).scales||{};Object.keys(c).forEach(d=>{const p=CN(d,l),h=a[p+"AxisID"]||p;i[h]=i[h]||Object.create(null),Qa(i[h],[{axis:p},r[h],c[d]])})}),Object.keys(i).forEach(a=>{const s=i[a];Qa(s,[Ve.scales[s.type],Ve.scale])}),i}function wE(e){const t=e.options||(e.options={});t.plugins=ye(t.plugins,{}),t.scales=AN(e,t)}function SE(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function $N(e){return e=e||{},e.data=SE(e.data),wE(e),e}const Yy=new Map,_E=new Set;function zl(e,t){let n=Yy.get(e);return n||(n=t(),Yy.set(e,n),_E.add(n)),n}const _a=(e,t,n)=>{const r=Ii(t,n);r!==void 0&&e.add(r)};class LN{constructor(t){this._config=$N(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=SE(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),wE(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return zl(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return zl(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return zl(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return zl(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let o=r.get(t);return(!o||n)&&(o=new Map,r.set(t,o)),o}getOptionScopes(t,n,r){const{options:o,type:i}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(c=>{t&&(l.add(t),c.forEach(d=>_a(l,t,d))),c.forEach(d=>_a(l,o,d)),c.forEach(d=>_a(l,zo[i]||{},d)),c.forEach(d=>_a(l,Ve,d)),c.forEach(d=>_a(l,vm,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),_E.has(n)&&a.set(n,u),u}chartOptionScopes(){const{options:t,type:n}=this;return[t,zo[n]||{},Ve.datasets[n]||{},{type:n},Ve,vm]}resolveNamedOptions(t,n,r,o=[""]){const i={$shared:!0},{resolver:a,subPrefixes:s}=Ky(this._resolverCache,t,o);let l=a;if(NN(a,n)){i.$shared=!1,r=Zr(r)?r():r;const u=this.createResolver(t,r,s);l=Di(a,r,u)}for(const u of n)i[u]=l[u];return i}createResolver(t,n,r=[""],o){const{resolver:i}=Ky(this._resolverCache,t,r);return ge(n)?Di(i,n,void 0,o):i}}function Ky(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const o=n.join();let i=r.get(o);return i||(i={resolver:Og(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(o,i)),i}const MN=e=>ge(e)&&Object.getOwnPropertyNames(e).some(t=>Zr(e[t]));function NN(e,t){const{isScriptable:n,isIndexable:r}=sE(e);for(const o of t){const i=n(o),a=r(o),s=(a||i)&&e[o];if(i&&(Zr(s)||MN(s))||a&&Ze(s))return!0}return!1}var jN="4.4.9";const IN=["top","bottom","left","right","chartArea"];function qy(e,t){return e==="top"||e==="bottom"||IN.indexOf(e)===-1&&t==="x"}function Xy(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Gy(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Re(n&&n.onComplete,[e],t)}function DN(e){const t=e.chart,n=t.options.animation;Re(n&&n.onProgress,[e],t)}function kE(e){return Tg()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Tu={},Qy=e=>{const t=kE(e);return Object.values(Tu).filter(n=>n.canvas===t).pop()};function FN(e,t,n){const r=Object.keys(e);for(const o of r){const i=+o;if(i>=t){const a=e[o];delete e[o],(n>0||i>t)&&(e[i+n]=a)}}}function zN(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var Cr;let cf=(Cr=class{static register(...t){Nn.add(...t),Jy()}static unregister(...t){Nn.remove(...t),Jy()}constructor(t,n){const r=this.config=new LN(n),o=kE(t),i=Qy(o);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||oN(o)),this.platform.updateConfig(r);const s=this.platform.acquireContext(o,a.aspectRatio),l=s&&s.canvas,u=l&&l.height,c=l&&l.width;if(this.id=nM(),this.ctx=s,this.canvas=l,this.width=c,this.height=u,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new SN,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=SM(d=>this.update(d),a.resizeDelay||0),this._dataChanges=[],Tu[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Zn.listen(this,"complete",Gy),Zn.listen(this,"progress",DN),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:o,_aspectRatio:i}=this;return Se(t)?n&&i?i:o?r/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Nn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():_y(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return yy(this.canvas,this.ctx),this}stop(){return Zn.stop(this),this}resize(t,n){Zn.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,o=this.canvas,i=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(o,t,n,i),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,_y(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),Re(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};be(n,(r,o)=>{r.id=o})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,o=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let i=[];n&&(i=i.concat(Object.keys(n).map(a=>{const s=n[a],l=ym(a,s),u=l==="r",c=l==="x";return{options:s,dposition:u?"chartArea":c?"bottom":"left",dtype:u?"radialLinear":c?"category":"linear"}}))),be(i,a=>{const s=a.options,l=s.id,u=ym(l,s),c=ye(s.type,a.dtype);(s.position===void 0||qy(s.position,u)!==qy(a.dposition))&&(s.position=a.dposition),o[l]=!0;let d=null;if(l in r&&r[l].type===c)d=r[l];else{const p=Nn.getScale(c);d=new p({id:l,type:c,ctx:this.ctx,chart:this}),r[d.id]=d}d.init(s,t)}),be(o,(a,s)=>{a||delete r[s]}),be(r,a=>{jr.configure(this,a,a.options),jr.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((o,i)=>o.index-i.index),r>n){for(let o=n;o<r;++o)this._destroyDatasetMeta(o);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Xy("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,o)=>{n.filter(i=>i===r._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,o;for(this._removeUnreferencedMetasets(),r=0,o=n.length;r<o;r++){const i=n[r];let a=this.getDatasetMeta(r);const s=i.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=i.indexAxis||bm(s,this.options),a.order=i.order||0,a.index=r,a.label=""+i.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=Nn.getController(s),{datasetElementType:u,dataElementType:c}=Ve.datasets[s];Object.assign(l,{dataElementType:Nn.getElement(c),datasetElementType:u&&Nn.getElement(u)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){be(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let u=0,c=this.data.datasets.length;u<c;u++){const{controller:d}=this.getDatasetMeta(u),p=!o&&i.indexOf(d)===-1;d.buildOrUpdateElements(p),a=Math.max(+d.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),o||be(i,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Xy("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){be(this.scales,t=>{jr.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!uy(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:o,count:i}of n){const a=r==="_removeElements"?-i:i;FN(t,o,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=i=>new Set(t.filter(a=>a[0]===i).map((a,s)=>s+","+a.splice(1).join(","))),o=r(0);for(let i=1;i<n;i++)if(!uy(o,r(i)))return;return Array.from(o).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;jr.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],be(this.boxes,o=>{r&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,i)=>{o._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Zr(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),o={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(r.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Zn.has(this)?this.attached&&!Zn.running(this)&&Zn.start(this):(this.draw(),Gy({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let o,i;for(o=0,i=n.length;o<i;++o){const a=n[o];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},o=s3(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(o&&_g(n,o),t.controller.draw(),o&&kg(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return oE(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,o){const i=I3.modes[n];return typeof i=="function"?i(this,t,r,o):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let o=r.filter(i=>i&&i._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(o)),o}getContext(){return this.$context||(this.$context=ta(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const o=r?"show":"hide",i=this.getDatasetMeta(t),a=i.controller._resolveAnimations(void 0,o);Cs(n)?(i.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(i,{visible:r}),this.update(s=>s.datasetIndex===t?o:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Zn.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),yy(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Tu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(i,a)=>{n.addEventListener(this,i,a),t[i]=a},o=(i,a,s)=>{i.offsetX=a,i.offsetY=s,this._eventHandler(i)};be(this.options.events,i=>r(i,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,u)=>{n.addEventListener(this,l,u),t[l]=u},o=(l,u)=>{t[l]&&(n.removeEventListener(this,l,u),delete t[l])},i=(l,u)=>{this.canvas&&this.resize(l,u)};let a;const s=()=>{o("attach",s),this.attached=!0,this.resize(),r("resize",i),r("detach",a)};a=()=>{this.attached=!1,o("resize",i),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){be(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},be(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const o=r?"set":"remove";let i,a,s,l;for(n==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+o+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const u=a&&this.getDatasetMeta(a.datasetIndex).controller;u&&u[o+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:i,index:a})=>{const s=this.getDatasetMeta(i);if(!s)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:s.data[a],index:a}});!cc(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const o=this.options.hover,i=(l,u)=>l.filter(c=>!u.some(d=>c.datasetIndex===d.datasetIndex&&c.index===d.index)),a=i(n,t),s=r?t:i(t,n);a.length&&this.updateHoverStyle(a,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},o=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,o)===!1)return;const i=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,o),(i||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:o=[],options:i}=this,a=n,s=this._getActiveElements(t,o,r,a),l=lM(t),u=zN(t,this._lastEvent,r,l);r&&(this._lastEvent=null,Re(i.onHover,[t,s,this],this),l&&Re(i.onClick,[t,s,this],this));const c=!cc(s,o);return(c||n)&&(this._active=s,this._updateHoverStyles(s,o,n)),this._lastEvent=u,c}_getActiveElements(t,n,r,o){if(t.type==="mouseout")return[];if(!r)return n;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,o)}},pe(Cr,"defaults",Ve),pe(Cr,"instances",Tu),pe(Cr,"overrides",zo),pe(Cr,"registry",Nn),pe(Cr,"version",jN),pe(Cr,"getChart",Qy),Cr);function Jy(){return be(cf.instances,e=>e._plugins.invalidate())}function OE(e,t){const{x:n,y:r,base:o,width:i,height:a}=e.getProps(["x","y","base","width","height"],t);let s,l,u,c,d;return e.horizontal?(d=a/2,s=Math.min(n,o),l=Math.max(n,o),u=r-d,c=r+d):(d=i/2,s=n-d,l=n+d,u=Math.min(r,o),c=Math.max(r,o)),{left:s,top:u,right:l,bottom:c}}function Ir(e,t,n,r){return e?0:gn(t,n,r)}function BN(e,t,n){const r=e.options.borderWidth,o=e.borderSkipped,i=aE(r);return{t:Ir(o.top,i.top,0,n),r:Ir(o.right,i.right,0,t),b:Ir(o.bottom,i.bottom,0,n),l:Ir(o.left,i.left,0,t)}}function HN(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),o=e.options.borderRadius,i=Ti(o),a=Math.min(t,n),s=e.borderSkipped,l=r||ge(o);return{topLeft:Ir(!l||s.top||s.left,i.topLeft,0,a),topRight:Ir(!l||s.top||s.right,i.topRight,0,a),bottomLeft:Ir(!l||s.bottom||s.left,i.bottomLeft,0,a),bottomRight:Ir(!l||s.bottom||s.right,i.bottomRight,0,a)}}function UN(e){const t=OE(e),n=t.right-t.left,r=t.bottom-t.top,o=BN(e,n/2,r/2),i=HN(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:i},inner:{x:t.left+o.l,y:t.top+o.t,w:n-o.l-o.r,h:r-o.t-o.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,i.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(o.b,o.r))}}}}function Ad(e,t,n,r){const o=t===null,i=n===null,s=e&&!(o&&i)&&OE(e,r);return s&&(o||xi(t,s.left,s.right))&&(i||xi(n,s.top,s.bottom))}function WN(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function VN(e,t){e.rect(t.x,t.y,t.w,t.h)}function $d(e,t,n={}){const r=e.x!==n.x?-t:0,o=e.y!==n.y?-t:0,i=(e.x+e.w!==n.x+n.w?t:0)-r,a=(e.y+e.h!==n.y+n.h?t:0)-o;return{x:e.x+r,y:e.y+o,w:e.w+i,h:e.h+a,radius:e.radius}}class Ru extends Ys{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:o}}=this,{inner:i,outer:a}=UN(this),s=WN(a.radius)?hc:VN;t.save(),(a.w!==i.w||a.h!==i.h)&&(t.beginPath(),s(t,$d(a,n,i)),t.clip(),s(t,$d(i,-n,a)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),s(t,$d(i,n)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,n,r){return Ad(this,t,n,r)}inXRange(t,n){return Ad(this,t,null,n)}inYRange(t,n){return Ad(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:o,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(n+o)/2:n,y:i?r:(r+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}pe(Ru,"id","bar"),pe(Ru,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),pe(Ru,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const Zy=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},YN=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class e0 extends Ys{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Re(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,o)=>t.sort(r,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,o=_t(r.font),i=o.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=Zy(r,i);let u,c;n.font=o.string,this.isHorizontal()?(u=this.maxWidth,c=this._fitRows(a,i,s,l)+10):(c=this.maxHeight,u=this._fitCols(a,o,s,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,o){const{ctx:i,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],c=o+s;let d=t;i.textAlign="left",i.textBaseline="middle";let p=-1,h=-c;return this.legendItems.forEach((m,v)=>{const b=r+n/2+i.measureText(m.text).width;(v===0||u[u.length-1]+b+2*s>a)&&(d+=c,u[u.length-(v>0?0:1)]=0,h+=c,p++),l[v]={left:0,top:h,row:p,width:b,height:o},u[u.length-1]+=b+s}),d}_fitCols(t,n,r,o){const{ctx:i,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],c=a-t;let d=s,p=0,h=0,m=0,v=0;return this.legendItems.forEach((b,g)=>{const{itemWidth:y,itemHeight:x}=KN(r,n,i,b,o);g>0&&h+x+2*s>c&&(d+=p+s,u.push({width:p,height:h}),m+=p+s,v++,p=h=0),l[g]={left:m,top:h,col:v,width:y,height:x},p=Math.max(p,y),h+=x+s}),d+=p,u.push({width:p,height:h}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:o},rtl:i}}=this,a=Ri(i,this.left,this.width);if(this.isHorizontal()){let s=0,l=Lt(r,this.left+o,this.right-this.lineWidths[s]);for(const u of n)s!==u.row&&(s=u.row,l=Lt(r,this.left+o,this.right-this.lineWidths[s])),u.top+=this.top+t+o,u.left=a.leftForLtr(a.x(l),u.width),l+=u.width+o}else{let s=0,l=Lt(r,this.top+t+o,this.bottom-this.columnSizes[s].height);for(const u of n)u.col!==s&&(s=u.col,l=Lt(r,this.top+t+o,this.bottom-this.columnSizes[s].height)),u.top=l,u.left+=this.left+o,u.left=a.leftForLtr(a.x(u.left),u.width),l+=u.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;_g(t,this),this._draw(),kg(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:o}=this,{align:i,labels:a}=t,s=Ve.color,l=Ri(t.rtl,this.left,this.width),u=_t(a.font),{padding:c}=a,d=u.size,p=d/2;let h;this.drawTitle(),o.textAlign=l.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=u.string;const{boxWidth:m,boxHeight:v,itemHeight:b}=Zy(a,d),g=function(_,O,E){if(isNaN(m)||m<=0||isNaN(v)||v<0)return;o.save();const R=ye(E.lineWidth,1);if(o.fillStyle=ye(E.fillStyle,s),o.lineCap=ye(E.lineCap,"butt"),o.lineDashOffset=ye(E.lineDashOffset,0),o.lineJoin=ye(E.lineJoin,"miter"),o.lineWidth=R,o.strokeStyle=ye(E.strokeStyle,s),o.setLineDash(ye(E.lineDash,[])),a.usePointStyle){const P={radius:v*Math.SQRT2/2,pointStyle:E.pointStyle,rotation:E.rotation,borderWidth:R},L=l.xPlus(_,m/2),I=O+p;rE(o,P,L,I,a.pointStyleWidth&&m)}else{const P=O+Math.max((d-v)/2,0),L=l.leftForLtr(_,m),I=Ti(E.borderRadius);o.beginPath(),Object.values(I).some(U=>U!==0)?hc(o,{x:L,y:P,w:m,h:v,radius:I}):o.rect(L,P,m,v),o.fill(),R!==0&&o.stroke()}o.restore()},y=function(_,O,E){mc(o,E.text,_,O+b/2,u,{strikethrough:E.hidden,textAlign:l.textAlign(E.textAlign)})},x=this.isHorizontal(),S=this._computeTitleHeight();x?h={x:Lt(i,this.left+c,this.right-r[0]),y:this.top+c+S,line:0}:h={x:this.left+c,y:Lt(i,this.top+S+c,this.bottom-n[0].height),line:0},fE(this.ctx,t.textDirection);const k=b+c;this.legendItems.forEach((_,O)=>{o.strokeStyle=_.fontColor,o.fillStyle=_.fontColor;const E=o.measureText(_.text).width,R=l.textAlign(_.textAlign||(_.textAlign=a.textAlign)),P=m+p+E;let L=h.x,I=h.y;l.setWidth(this.width),x?O>0&&L+P+c>this.right&&(I=h.y+=k,h.line++,L=h.x=Lt(i,this.left+c,this.right-r[h.line])):O>0&&I+k>this.bottom&&(L=h.x=L+n[h.line].width+c,h.line++,I=h.y=Lt(i,this.top+S+c,this.bottom-n[h.line].height));const U=l.x(L);if(g(U,I,_),L=_M(R,L+m+p,x?L+P:this.right,t.rtl),y(l.x(L),I,_),x)h.x+=P+c;else if(typeof _.text!="string"){const Q=u.lineHeight;h.y+=EE(_,Q)+c}else h.y+=k}),dE(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=_t(n.font),o=On(n.padding);if(!n.display)return;const i=Ri(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,u=o.top+l;let c,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),c=this.top+u,d=Lt(t.align,d,this.right-p);else{const m=this.columnSizes.reduce((v,b)=>Math.max(v,b.height),0);c=u+Lt(t.align,this.top,this.bottom-m-t.labels.padding-this._computeTitleHeight())}const h=Lt(s,d,d+p);a.textAlign=i.textAlign(ZO(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,mc(a,n.text,h,c,r)}_computeTitleHeight(){const t=this.options.title,n=_t(t.font),r=On(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,o,i;if(xi(t,this.left,this.right)&&xi(n,this.top,this.bottom)){for(i=this.legendHitBoxes,r=0;r<i.length;++r)if(o=i[r],xi(t,o.left,o.left+o.width)&&xi(n,o.top,o.top+o.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!GN(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const o=this._hoveredItem,i=YN(o,r);o&&!i&&Re(n.onLeave,[t,o,this],this),this._hoveredItem=r,r&&!i&&Re(n.onHover,[t,r,this],this)}else r&&Re(n.onClick,[t,r,this],this)}}function KN(e,t,n,r,o){const i=qN(r,e,t,n),a=XN(o,r,t.lineHeight);return{itemWidth:i,itemHeight:a}}function qN(e,t,n,r){let o=e.text;return o&&typeof o!="string"&&(o=o.reduce((i,a)=>i.length>a.length?i:a)),t+n.size/2+r.measureText(o).width}function XN(e,t,n){let r=e;return typeof t.text!="string"&&(r=EE(t,n)),r}function EE(e,t){const n=e.text?e.text.length:0;return t*n}function GN(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var QN={id:"legend",_element:e0,start(e,t,n){const r=e.legend=new e0({ctx:e.ctx,options:n,chart:e});jr.configure(e,r,n),jr.addBox(e,r)},stop(e){jr.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;jr.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,o=n.chart;o.isDatasetVisible(r)?(o.hide(r),t.hidden=!0):(o.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:o,color:i,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),c=On(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:i,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:u.borderColor,pointStyle:r||u.pointStyle,rotation:u.rotation,textAlign:o||u.textAlign,borderRadius:a&&(s||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};const Ia={average(e){if(!e.length)return!1;let t,n,r=new Set,o=0,i=0;for(t=0,n=e.length;t<n;++t){const s=e[t].element;if(s&&s.hasValue()){const l=s.tooltipPosition();r.add(l.x),o+=l.y,++i}}return i===0||r.size===0?!1:{x:[...r].reduce((s,l)=>s+l)/r.size,y:o/i}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,o=Number.POSITIVE_INFINITY,i,a,s;for(i=0,a=e.length;i<a;++i){const l=e[i].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),c=gM(t,u);c<o&&(o=c,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Ln(e,t){return t&&(Ze(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function er(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function JN(e,t){const{element:n,datasetIndex:r,index:o}=t,i=e.getDatasetMeta(r).controller,{label:a,value:s}=i.getLabelAndValue(o);return{chart:e,label:a,parsed:i.getParsed(o),raw:e.data.datasets[r].data[o],formattedValue:s,dataset:i.getDataset(),dataIndex:o,datasetIndex:r,element:n}}function t0(e,t){const n=e.chart.ctx,{body:r,footer:o,title:i}=e,{boxWidth:a,boxHeight:s}=t,l=_t(t.bodyFont),u=_t(t.titleFont),c=_t(t.footerFont),d=i.length,p=o.length,h=r.length,m=On(t.padding);let v=m.height,b=0,g=r.reduce((S,k)=>S+k.before.length+k.lines.length+k.after.length,0);if(g+=e.beforeBody.length+e.afterBody.length,d&&(v+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),g){const S=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;v+=h*S+(g-h)*l.lineHeight+(g-1)*t.bodySpacing}p&&(v+=t.footerMarginTop+p*c.lineHeight+(p-1)*t.footerSpacing);let y=0;const x=function(S){b=Math.max(b,n.measureText(S).width+y)};return n.save(),n.font=u.string,be(e.title,x),n.font=l.string,be(e.beforeBody.concat(e.afterBody),x),y=t.displayColors?a+2+t.boxPadding:0,be(r,S=>{be(S.before,x),be(S.lines,x),be(S.after,x)}),y=0,n.font=c.string,be(e.footer,x),n.restore(),b+=m.width,{width:b,height:v}}function ZN(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function ej(e,t,n,r){const{x:o,width:i}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&o+i+a>t.width||e==="right"&&o-i-a<0)return!0}function tj(e,t,n,r){const{x:o,width:i}=n,{width:a,chartArea:{left:s,right:l}}=e;let u="center";return r==="center"?u=o<=(s+l)/2?"left":"right":o<=i/2?u="left":o>=a-i/2&&(u="right"),ej(u,e,t,n)&&(u="center"),u}function n0(e,t,n){const r=n.yAlign||t.yAlign||ZN(e,n);return{xAlign:n.xAlign||t.xAlign||tj(e,t,n,r),yAlign:r}}function nj(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function rj(e,t,n){let{y:r,height:o}=e;return t==="top"?r+=n:t==="bottom"?r-=o+n:r-=o/2,r}function r0(e,t,n,r){const{caretSize:o,caretPadding:i,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,u=o+i,{topLeft:c,topRight:d,bottomLeft:p,bottomRight:h}=Ti(a);let m=nj(t,s);const v=rj(t,l,u);return l==="center"?s==="left"?m+=u:s==="right"&&(m-=u):s==="left"?m-=Math.max(c,p)+o:s==="right"&&(m+=Math.max(d,h)+o),{x:gn(m,0,r.width-t.width),y:gn(v,0,r.height-t.height)}}function Bl(e,t,n){const r=On(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function o0(e){return Ln([],er(e))}function oj(e,t,n){return ta(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function i0(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const CE={beforeTitle:Qn,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Qn,beforeBody:Qn,beforeLabel:Qn,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return Se(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Qn,afterBody:Qn,beforeFooter:Qn,footer:Qn,afterFooter:Qn};function vt(e,t,n,r){const o=e[t].call(n,r);return typeof o>"u"?CE[t].call(n,r):o}class xm extends Ys{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),o=r.enabled&&n.options.animation&&r.animations,i=new pE(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=oj(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,o=vt(r,"beforeTitle",this,t),i=vt(r,"title",this,t),a=vt(r,"afterTitle",this,t);let s=[];return s=Ln(s,er(o)),s=Ln(s,er(i)),s=Ln(s,er(a)),s}getBeforeBody(t,n){return o0(vt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,o=[];return be(t,i=>{const a={before:[],lines:[],after:[]},s=i0(r,i);Ln(a.before,er(vt(s,"beforeLabel",this,i))),Ln(a.lines,vt(s,"label",this,i)),Ln(a.after,er(vt(s,"afterLabel",this,i))),o.push(a)}),o}getAfterBody(t,n){return o0(vt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,o=vt(r,"beforeFooter",this,t),i=vt(r,"footer",this,t),a=vt(r,"afterFooter",this,t);let s=[];return s=Ln(s,er(o)),s=Ln(s,er(i)),s=Ln(s,er(a)),s}_createItems(t){const n=this._active,r=this.chart.data,o=[],i=[],a=[];let s=[],l,u;for(l=0,u=n.length;l<u;++l)s.push(JN(this.chart,n[l]));return t.filter&&(s=s.filter((c,d,p)=>t.filter(c,d,p,r))),t.itemSort&&(s=s.sort((c,d)=>t.itemSort(c,d,r))),be(s,c=>{const d=i0(t.callbacks,c);o.push(vt(d,"labelColor",this,c)),i.push(vt(d,"labelPointStyle",this,c)),a.push(vt(d,"labelTextColor",this,c))}),this.labelColors=o,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),o=this._active;let i,a=[];if(!o.length)this.opacity!==0&&(i={opacity:0});else{const s=Ia[r.position].call(this,o,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=t0(this,r),u=Object.assign({},s,l),c=n0(this.chart,r,u),d=r0(r,u,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,i={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,o){const i=this.getCaretPosition(t,r,o);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)}getCaretPosition(t,n,r){const{xAlign:o,yAlign:i}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:u,bottomLeft:c,bottomRight:d}=Ti(s),{x:p,y:h}=t,{width:m,height:v}=n;let b,g,y,x,S,k;return i==="center"?(S=h+v/2,o==="left"?(b=p,g=b-a,x=S+a,k=S-a):(b=p+m,g=b+a,x=S-a,k=S+a),y=b):(o==="left"?g=p+Math.max(l,c)+a:o==="right"?g=p+m-Math.max(u,d)-a:g=this.caretX,i==="top"?(x=h,S=x-a,b=g-a,y=g+a):(x=h+v,S=x+a,b=g+a,y=g-a),k=x),{x1:b,x2:g,x3:y,y1:x,y2:S,y3:k}}drawTitle(t,n,r){const o=this.title,i=o.length;let a,s,l;if(i){const u=Ri(r.rtl,this.x,this.width);for(t.x=Bl(this,r.titleAlign,r),n.textAlign=u.textAlign(r.titleAlign),n.textBaseline="middle",a=_t(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<i;++l)n.fillText(o[l],u.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===i&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,o,i){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:u}=i,c=_t(i.bodyFont),d=Bl(this,"left",i),p=o.x(d),h=l<c.lineHeight?(c.lineHeight-l)/2:0,m=n.y+h;if(i.usePointStyle){const v={radius:Math.min(u,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},b=o.leftForLtr(p,u)+u/2,g=m+l/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,xy(t,v,b,g),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,xy(t,v,b,g)}else{t.lineWidth=ge(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const v=o.leftForLtr(p,u),b=o.leftForLtr(o.xPlus(p,1),u-2),g=Ti(a.borderRadius);Object.values(g).some(y=>y!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,hc(t,{x:v,y:m,w:u,h:l,radius:g}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),hc(t,{x:b,y:m+1,w:u-2,h:l-2,radius:g}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,m,u,l),t.strokeRect(v,m,u,l),t.fillStyle=a.backgroundColor,t.fillRect(b,m+1,u-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:o}=this,{bodySpacing:i,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:u,boxPadding:c}=r,d=_t(r.bodyFont);let p=d.lineHeight,h=0;const m=Ri(r.rtl,this.x,this.width),v=function(E){n.fillText(E,m.x(t.x+h),t.y+p/2),t.y+=p+i},b=m.textAlign(a);let g,y,x,S,k,_,O;for(n.textAlign=a,n.textBaseline="middle",n.font=d.string,t.x=Bl(this,b,r),n.fillStyle=r.bodyColor,be(this.beforeBody,v),h=s&&b!=="right"?a==="center"?u/2+c:u+2+c:0,S=0,_=o.length;S<_;++S){for(g=o[S],y=this.labelTextColors[S],n.fillStyle=y,be(g.before,v),x=g.lines,s&&x.length&&(this._drawColorBox(n,t,S,m,r),p=Math.max(d.lineHeight,l)),k=0,O=x.length;k<O;++k)v(x[k]),p=d.lineHeight;be(g.after,v)}h=0,p=d.lineHeight,be(this.afterBody,v),t.y-=i}drawFooter(t,n,r){const o=this.footer,i=o.length;let a,s;if(i){const l=Ri(r.rtl,this.x,this.width);for(t.x=Bl(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=_t(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<i;++s)n.fillText(o[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,o){const{xAlign:i,yAlign:a}=this,{x:s,y:l}=t,{width:u,height:c}=r,{topLeft:d,topRight:p,bottomLeft:h,bottomRight:m}=Ti(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(s+d,l),a==="top"&&this.drawCaret(t,n,r,o),n.lineTo(s+u-p,l),n.quadraticCurveTo(s+u,l,s+u,l+p),a==="center"&&i==="right"&&this.drawCaret(t,n,r,o),n.lineTo(s+u,l+c-m),n.quadraticCurveTo(s+u,l+c,s+u-m,l+c),a==="bottom"&&this.drawCaret(t,n,r,o),n.lineTo(s+h,l+c),n.quadraticCurveTo(s,l+c,s,l+c-h),a==="center"&&i==="left"&&this.drawCaret(t,n,r,o),n.lineTo(s,l+d),n.quadraticCurveTo(s,l,s+d,l),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,o=r&&r.x,i=r&&r.y;if(o||i){const a=Ia[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=t0(this,t),l=Object.assign({},a,this._size),u=n0(n,t,l),c=r0(t,l,u,n);(o._to!==c.x||i._to!==c.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},i={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=On(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(i,t,o,n),fE(t,n.textDirection),i.y+=a.top,this.drawTitle(i,t,n),this.drawBody(i,t,n),this.drawFooter(i,t,n),dE(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,o=t.map(({datasetIndex:s,index:l})=>{const u=this.chart.getDatasetMeta(s);if(!u)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:u.data[l],index:l}}),i=!cc(r,o),a=this._positionChanged(o,n);(i||a)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,i=this._active||[],a=this._getActiveElements(t,i,n,r),s=this._positionChanged(a,t),l=n||!cc(a,i)||s;return l&&(this._active=a,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,o){const i=this.options;if(t.type==="mouseout")return[];if(!o)return n.filter(s=>this.chart.data.datasets[s.datasetIndex]&&this.chart.getDatasetMeta(s.datasetIndex).controller.getParsed(s.index)!==void 0);const a=this.chart.getElementsAtEventForMode(t,i.mode,i,r);return i.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:o,options:i}=this,a=Ia[i.position].call(this,t,n);return a!==!1&&(r!==a.x||o!==a.y)}}pe(xm,"positioners",Ia);var ij={id:"tooltip",_element:xm,positioners:Ia,afterInit(e,t,n){n&&(e.tooltip=new xm({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:CE},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const aj=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function sj(e,t,n,r){const o=e.indexOf(t);if(o===-1)return aj(e,t,n,r);const i=e.lastIndexOf(t);return o!==i?n:o}const lj=(e,t)=>e===null?null:gn(Math.round(e),0,t);function a0(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class wm extends na{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:o,label:i}of n)r[o]===i&&r.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(Se(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:sj(r,t,ye(n,t),this._addedLabels),lj(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(o=this.getLabels().length-1)),this.min=r,this.max=o}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,o=[];let i=this.getLabels();i=t===0&&n===i.length-1?i:i.slice(t,n+1),this._valueRange=Math.max(i.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)o.push({value:a});return o}getLabelForValue(t){return a0.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}pe(wm,"id","category"),pe(wm,"defaults",{ticks:{callback:a0}});function uj(e,t){const n=[],{bounds:o,step:i,min:a,max:s,precision:l,count:u,maxTicks:c,maxDigits:d,includeBounds:p}=e,h=i||1,m=c-1,{min:v,max:b}=t,g=!Se(a),y=!Se(s),x=!Se(u),S=(b-v)/(d+1);let k=fy((b-v)/m/h)*h,_,O,E,R;if(k<1e-14&&!g&&!y)return[{value:v},{value:b}];R=Math.ceil(b/k)-Math.floor(v/k),R>m&&(k=fy(R*k/m/h)*h),Se(l)||(_=Math.pow(10,l),k=Math.ceil(k*_)/_),o==="ticks"?(O=Math.floor(v/k)*k,E=Math.ceil(b/k)*k):(O=v,E=b),g&&y&&i&&dM((s-a)/i,k/1e3)?(R=Math.round(Math.min((s-a)/k,c)),k=(s-a)/R,O=a,E=s):x?(O=g?a:O,E=y?s:E,R=u-1,k=(E-O)/R):(R=(E-O)/k,Ou(R,Math.round(R),k/1e3)?R=Math.round(R):R=Math.ceil(R));const P=Math.max(dy(k),dy(O));_=Math.pow(10,Se(l)?P:l),O=Math.round(O*_)/_,E=Math.round(E*_)/_;let L=0;for(g&&(p&&O!==a?(n.push({value:a}),O<a&&L++,Ou(Math.round((O+L*k)*_)/_,a,s0(a,S,e))&&L++):O<a&&L++);L<R;++L){const I=Math.round((O+L*k)*_)/_;if(y&&I>s)break;n.push({value:I})}return y&&p&&E!==s?n.length&&Ou(n[n.length-1].value,s,s0(s,S,e))?n[n.length-1].value=s:n.push({value:s}):(!y||E===s)&&n.push({value:E}),n}function s0(e,t,{horizontal:n,minRotation:r}){const o=Co(r),i=(n?Math.sin(o):Math.cos(o))||.001,a=.75*t*(""+e).length;return Math.min(t/i,a)}class cj extends na{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return Se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:o,max:i}=this;const a=l=>o=n?o:l,s=l=>i=r?i:l;if(t){const l=Xr(o),u=Xr(i);l<0&&u<0?s(0):l>0&&u>0&&a(0)}if(o===i){let l=i===0?1:Math.abs(i*.05);s(i+l),t||a(o-l)}this.min=o,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,o;return r?(o=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const o={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},i=this._range||this,a=uj(o,i);return t.bounds==="ticks"&&pM(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const o=(r-n)/Math.max(t.length-1,1)/2;n-=o,r+=o}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return tE(t,this.chart.options.locale,this.options.ticks.format)}}class Sm extends cj{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=en(t)?t:0,this.max=en(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Co(this.options.ticks.minRotation),o=(t?Math.sin(r):Math.cos(r))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,i.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}pe(Sm,"id","linear"),pe(Sm,"defaults",{ticks:{callback:nE.formatters.numeric}});const ff={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},wt=Object.keys(ff);function l0(e,t){return e-t}function u0(e,t){if(Se(t))return null;const n=e._adapter,{parser:r,round:o,isoWeekday:i}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),en(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(o&&(a=o==="week"&&(pc(i)||i===!0)?n.startOf(a,"isoWeek",i):n.startOf(a,o)),+a)}function c0(e,t,n,r){const o=wt.length;for(let i=wt.indexOf(e);i<o-1;++i){const a=ff[wt[i]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return wt[i]}return wt[o-1]}function fj(e,t,n,r,o){for(let i=wt.length-1;i>=wt.indexOf(n);i--){const a=wt[i];if(ff[a].common&&e._adapter.diff(o,r,a)>=t-1)return a}return wt[n?wt.indexOf(n):0]}function dj(e){for(let t=wt.indexOf(e)+1,n=wt.length;t<n;++t)if(ff[wt[t]].common)return wt[t]}function f0(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:o}=Sg(n,t),i=n[r]>=t?n[r]:n[o];e[i]=!0}}function pj(e,t,n,r){const o=e._adapter,i=+o.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=i;s<=a;s=+o.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function d0(e,t,n){const r=[],o={},i=t.length;let a,s;for(a=0;a<i;++a)s=t[a],o[s]=a,r.push({value:s,major:!1});return i===0||!n?r:pj(e,r,o,n)}class bc extends na{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),o=this._adapter=new $3._date(t.adapters.date);o.init(n),Qa(r.displayFormats,o.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:u0(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:o,max:i,minDefined:a,maxDefined:s}=this.getUserBounds();function l(u){!a&&!isNaN(u.min)&&(o=Math.min(o,u.min)),!s&&!isNaN(u.max)&&(i=Math.max(i,u.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),o=en(o)&&!isNaN(o)?o:+n.startOf(Date.now(),r),i=en(i)&&!isNaN(i)?i:+n.endOf(Date.now(),r)+1,this.min=Math.min(o,i-1),this.max=Math.max(o+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,o=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const i=this.min,a=this.max,s=xM(o,i,a);return this._unit=n.unit||(r.autoSkip?c0(n.minUnit,this.min,this.max,this._getLabelCapacity(i)):fj(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:dj(this._unit),this.initOffsets(o),t.reverse&&s.reverse(),d0(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,o,i;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?n=1-o:n=(this.getDecimalForValue(t[1])-o)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?r=i:r=(i-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=gn(n,0,a),r=gn(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,o=this.options,i=o.time,a=i.unit||c0(i.minUnit,n,r,this._getLabelCapacity(n)),s=ye(o.ticks.stepSize,1),l=a==="week"?i.isoWeekday:!1,u=pc(l)||l===!0,c={};let d=n,p,h;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const m=o.ticks.source==="data"&&this.getDataTimestamps();for(p=d,h=0;p<r;p=+t.add(p,s,a),h++)f0(c,p,m);return(p===r||o.bounds==="ticks"||h===1)&&f0(c,p,m),Object.keys(c).sort(l0).map(v=>+v)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const o=this.options.time.displayFormats,i=this._unit,a=n||o[i];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,o){const i=this.options,a=i.ticks.callback;if(a)return Re(a,[t,n,r],this);const s=i.time.displayFormats,l=this._unit,u=this._majorUnit,c=l&&s[l],d=u&&s[u],p=r[n],h=u&&d&&p&&p.major;return this._adapter.format(t,o||(h?d:c))}generateTickLabels(t){let n,r,o;for(n=0,r=t.length;n<r;++n)o=t[n],o.label=this._tickFormatFunction(o.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,o=Co(this.isHorizontal()?n.maxRotation:n.minRotation),i=Math.cos(o),a=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:r*i+s*a,h:r*a+s*i}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,o=r[n.unit]||r.millisecond,i=this._tickFormatFunction(t,0,d0(this,[t],this._majorUnit),o),a=this._getLabelSize(i),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,r=o.length;n<r;++n)t=t.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const o=this.getLabels();for(n=0,r=o.length;n<r;++n)t.push(u0(this,o[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return GO(t.sort(l0))}}pe(bc,"id","time"),pe(bc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Hl(e,t,n){let r=0,o=e.length-1,i,a,s,l;n?(t>=e[r].pos&&t<=e[o].pos&&({lo:r,hi:o}=gm(e,"pos",t)),{pos:i,time:s}=e[r],{pos:a,time:l}=e[o]):(t>=e[r].time&&t<=e[o].time&&({lo:r,hi:o}=gm(e,"time",t)),{time:i,pos:s}=e[r],{time:a,pos:l}=e[o]);const u=a-i;return u?s+(l-s)*(t-i)/u:s}class p0 extends bc{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Hl(n,this.min),this._tableRange=Hl(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,o=[],i=[];let a,s,l,u,c;for(a=0,s=t.length;a<s;++a)u=t[a],u>=n&&u<=r&&o.push(u);if(o.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=o.length;a<s;++a)c=o[a+1],l=o[a-1],u=o[a],Math.round((c+l)/2)!==u&&i.push({time:u,pos:a/(s-1)});return i}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((o,i)=>o-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Hl(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Hl(this._table,r*this._tableRange+this._minPos,!0)}}pe(p0,"id","timeseries"),pe(p0,"defaults",bc.defaults);const TE="label";function m0(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function mj(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function RE(e,t){e.labels=t}function PE(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:TE;const r=[];e.datasets=t.map(o=>{const i=e.datasets.find(a=>a[n]===o[n]);return!i||!o.data||r.includes(i)?{...o}:(r.push(i),Object.assign(i,o),i)})}function hj(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:TE;const n={labels:[],datasets:[]};return RE(n,e.labels),PE(n,e.datasets,t),n}function gj(e,t){const{height:n=150,width:r=300,redraw:o=!1,datasetIdKey:i,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:d,...p}=e,h=w.useRef(null),m=w.useRef(null),v=()=>{h.current&&(m.current=new cf(h.current,{type:a,data:hj(s,i),options:l&&{...l},plugins:u}),m0(t,m.current))},b=()=>{m0(t,null),m.current&&(m.current.destroy(),m.current=null)};return w.useEffect(()=>{!o&&m.current&&l&&mj(m.current,l)},[o,l]),w.useEffect(()=>{!o&&m.current&&RE(m.current.config.data,s.labels)},[o,s.labels]),w.useEffect(()=>{!o&&m.current&&s.datasets&&PE(m.current.config.data,s.datasets,i)},[o,s.datasets]),w.useEffect(()=>{m.current&&(o?(b(),setTimeout(v)):m.current.update(d))},[o,l,s.labels,s.datasets,d]),w.useEffect(()=>{m.current&&(b(),setTimeout(v))},[a]),w.useEffect(()=>(v(),()=>b()),[]),X.createElement("canvas",{ref:h,role:"img",height:n,width:r,...p},c)}const vj=w.forwardRef(gj);function bj(e,t){return cf.register(t),w.forwardRef((n,r)=>X.createElement(vj,{...n,ref:r,type:e}))}const yj=bj("bar",Eu);var AE={exports:{}},xj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wj=xj,Sj=wj;function $E(){}function LE(){}LE.resetWarningCache=$E;var _j=function(){function e(r,o,i,a,s,l){if(l!==Sj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:LE,resetWarningCache:$E};return n.PropTypes=n,n};AE.exports=_j();var qo=AE.exports;const f=Vo(qo);var ME={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt=typeof Symbol=="function"&&Symbol.for,Ag=tt?Symbol.for("react.element"):60103,$g=tt?Symbol.for("react.portal"):60106,df=tt?Symbol.for("react.fragment"):60107,pf=tt?Symbol.for("react.strict_mode"):60108,mf=tt?Symbol.for("react.profiler"):60114,hf=tt?Symbol.for("react.provider"):60109,gf=tt?Symbol.for("react.context"):60110,Lg=tt?Symbol.for("react.async_mode"):60111,vf=tt?Symbol.for("react.concurrent_mode"):60111,bf=tt?Symbol.for("react.forward_ref"):60112,yf=tt?Symbol.for("react.suspense"):60113,kj=tt?Symbol.for("react.suspense_list"):60120,xf=tt?Symbol.for("react.memo"):60115,wf=tt?Symbol.for("react.lazy"):60116,Oj=tt?Symbol.for("react.block"):60121,Ej=tt?Symbol.for("react.fundamental"):60117,Cj=tt?Symbol.for("react.responder"):60118,Tj=tt?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ag:switch(e=e.type,e){case Lg:case vf:case df:case mf:case pf:case yf:return e;default:switch(e=e&&e.$$typeof,e){case gf:case bf:case wf:case xf:case hf:return e;default:return t}}case $g:return t}}}function NE(e){return Ht(e)===vf}we.AsyncMode=Lg;we.ConcurrentMode=vf;we.ContextConsumer=gf;we.ContextProvider=hf;we.Element=Ag;we.ForwardRef=bf;we.Fragment=df;we.Lazy=wf;we.Memo=xf;we.Portal=$g;we.Profiler=mf;we.StrictMode=pf;we.Suspense=yf;we.isAsyncMode=function(e){return NE(e)||Ht(e)===Lg};we.isConcurrentMode=NE;we.isContextConsumer=function(e){return Ht(e)===gf};we.isContextProvider=function(e){return Ht(e)===hf};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ag};we.isForwardRef=function(e){return Ht(e)===bf};we.isFragment=function(e){return Ht(e)===df};we.isLazy=function(e){return Ht(e)===wf};we.isMemo=function(e){return Ht(e)===xf};we.isPortal=function(e){return Ht(e)===$g};we.isProfiler=function(e){return Ht(e)===mf};we.isStrictMode=function(e){return Ht(e)===pf};we.isSuspense=function(e){return Ht(e)===yf};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===df||e===vf||e===mf||e===pf||e===yf||e===kj||typeof e=="object"&&e!==null&&(e.$$typeof===wf||e.$$typeof===xf||e.$$typeof===hf||e.$$typeof===gf||e.$$typeof===bf||e.$$typeof===Ej||e.$$typeof===Cj||e.$$typeof===Tj||e.$$typeof===Oj)};we.typeOf=Ht;ME.exports=we;var Mg=ME.exports;function Rj(e){function t(D,B,j,F,T){for(var ie=0,H=0,he=0,le=0,ue,re,_e=0,ke=0,ee,Be=ee=ue=0,ce=0,qe=0,fo=0,Ce=0,Gn=j.length,_r=Gn-1,gt,oe="",Ae="",Jo="",Zo="",sn;ce<Gn;){if(re=j.charCodeAt(ce),ce===_r&&H+le+he+ie!==0&&(H!==0&&(re=H===47?10:47),le=he=ie=0,Gn++,_r++),H+le+he+ie===0){if(ce===_r&&(0<qe&&(oe=oe.replace(p,"")),0<oe.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:oe+=j.charAt(ce)}re=59}switch(re){case 123:for(oe=oe.trim(),ue=oe.charCodeAt(0),ee=1,Ce=++ce;ce<Gn;){switch(re=j.charCodeAt(ce)){case 123:ee++;break;case 125:ee--;break;case 47:switch(re=j.charCodeAt(ce+1)){case 42:case 47:e:{for(Be=ce+1;Be<_r;++Be)switch(j.charCodeAt(Be)){case 47:if(re===42&&j.charCodeAt(Be-1)===42&&ce+2!==Be){ce=Be+1;break e}break;case 10:if(re===47){ce=Be+1;break e}}ce=Be}}break;case 91:re++;case 40:re++;case 34:case 39:for(;ce++<_r&&j.charCodeAt(ce)!==re;);}if(ee===0)break;ce++}switch(ee=j.substring(Ce,ce),ue===0&&(ue=(oe=oe.replace(d,"").trim()).charCodeAt(0)),ue){case 64:switch(0<qe&&(oe=oe.replace(p,"")),re=oe.charCodeAt(1),re){case 100:case 109:case 115:case 45:qe=B;break;default:qe=G}if(ee=t(B,qe,ee,re,T+1),Ce=ee.length,0<M&&(qe=n(G,oe,fo),sn=s(3,ee,qe,B,U,I,Ce,re,T,F),oe=qe.join(""),sn!==void 0&&(Ce=(ee=sn.trim()).length)===0&&(re=0,ee="")),0<Ce)switch(re){case 115:oe=oe.replace(_,a);case 100:case 109:case 45:ee=oe+"{"+ee+"}";break;case 107:oe=oe.replace(y,"$1 $2"),ee=oe+"{"+ee+"}",ee=K===1||K===2&&i("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=oe+ee,F===112&&(ee=(Ae+=ee,""))}else ee="";break;default:ee=t(B,n(B,oe,fo),ee,F,T+1)}Jo+=ee,ee=fo=qe=Be=ue=0,oe="",re=j.charCodeAt(++ce);break;case 125:case 59:if(oe=(0<qe?oe.replace(p,""):oe).trim(),1<(Ce=oe.length))switch(Be===0&&(ue=oe.charCodeAt(0),ue===45||96<ue&&123>ue)&&(Ce=(oe=oe.replace(" ",":")).length),0<M&&(sn=s(1,oe,B,D,U,I,Ae.length,F,T,F))!==void 0&&(Ce=(oe=sn.trim()).length)===0&&(oe="\0\0"),ue=oe.charCodeAt(0),re=oe.charCodeAt(1),ue){case 0:break;case 64:if(re===105||re===99){Zo+=oe+j.charAt(ce);break}default:oe.charCodeAt(Ce-1)!==58&&(Ae+=o(oe,ue,re,oe.charCodeAt(2)))}fo=qe=Be=ue=0,oe="",re=j.charCodeAt(++ce)}}switch(re){case 13:case 10:H===47?H=0:1+ue===0&&F!==107&&0<oe.length&&(qe=1,oe+="\0"),0<M*W&&s(0,oe,B,D,U,I,Ae.length,F,T,F),I=1,U++;break;case 59:case 125:if(H+le+he+ie===0){I++;break}default:switch(I++,gt=j.charAt(ce),re){case 9:case 32:if(le+ie+H===0)switch(_e){case 44:case 58:case 9:case 32:gt="";break;default:re!==32&&(gt=" ")}break;case 0:gt="\\0";break;case 12:gt="\\f";break;case 11:gt="\\v";break;case 38:le+H+ie===0&&(qe=fo=1,gt="\f"+gt);break;case 108:if(le+H+ie+Q===0&&0<Be)switch(ce-Be){case 2:_e===112&&j.charCodeAt(ce-3)===58&&(Q=_e);case 8:ke===111&&(Q=ke)}break;case 58:le+H+ie===0&&(Be=ce);break;case 44:H+he+le+ie===0&&(qe=1,gt+="\r");break;case 34:case 39:H===0&&(le=le===re?0:le===0?re:le);break;case 91:le+H+he===0&&ie++;break;case 93:le+H+he===0&&ie--;break;case 41:le+H+ie===0&&he--;break;case 40:if(le+H+ie===0){if(ue===0)switch(2*_e+3*ke){case 533:break;default:ue=1}he++}break;case 64:H+he+le+ie+Be+ee===0&&(ee=1);break;case 42:case 47:if(!(0<le+ie+he))switch(H){case 0:switch(2*re+3*j.charCodeAt(ce+1)){case 235:H=47;break;case 220:Ce=ce,H=42}break;case 42:re===47&&_e===42&&Ce+2!==ce&&(j.charCodeAt(Ce+2)===33&&(Ae+=j.substring(Ce,ce+1)),gt="",H=0)}}H===0&&(oe+=gt)}ke=_e,_e=re,ce++}if(Ce=Ae.length,0<Ce){if(qe=B,0<M&&(sn=s(2,Ae,qe,D,U,I,Ce,F,T,F),sn!==void 0&&(Ae=sn).length===0))return Zo+Ae+Jo;if(Ae=qe.join(",")+"{"+Ae+"}",K*Q!==0){switch(K!==2||i(Ae,2)||(Q=0),Q){case 111:Ae=Ae.replace(S,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(x,"::-webkit-input-$1")+Ae.replace(x,"::-moz-$1")+Ae.replace(x,":-ms-input-$1")+Ae}Q=0}}return Zo+Ae+Jo}function n(D,B,j){var F=B.trim().split(b);B=F;var T=F.length,ie=D.length;switch(ie){case 0:case 1:var H=0;for(D=ie===0?"":D[0]+" ";H<T;++H)B[H]=r(D,B[H],j).trim();break;default:var he=H=0;for(B=[];H<T;++H)for(var le=0;le<ie;++le)B[he++]=r(D[le]+" ",F[H],j).trim()}return B}function r(D,B,j){var F=B.charCodeAt(0);switch(33>F&&(F=(B=B.trim()).charCodeAt(0)),F){case 38:return B.replace(g,"$1"+D.trim());case 58:return D.trim()+B.replace(g,"$1"+D.trim());default:if(0<1*j&&0<B.indexOf("\f"))return B.replace(g,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+B}function o(D,B,j,F){var T=D+";",ie=2*B+3*j+4*F;if(ie===944){D=T.indexOf(":",9)+1;var H=T.substring(D,T.length-1).trim();return H=T.substring(0,D).trim()+H+";",K===1||K===2&&i(H,1)?"-webkit-"+H+H:H}if(K===0||K===2&&!i(T,1))return T;switch(ie){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(L,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return H=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+H+"-webkit-"+T+"-ms-flex-pack"+H+T;case 1005:return m.test(T)?T.replace(h,":-webkit-")+T.replace(h,":-moz-")+T:T;case 1e3:switch(H=T.substring(13).trim(),B=H.indexOf("-")+1,H.charCodeAt(0)+H.charCodeAt(B)){case 226:H=T.replace(k,"tb");break;case 232:H=T.replace(k,"tb-rl");break;case 220:H=T.replace(k,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+H+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(B=(T=D).length-10,H=(T.charCodeAt(B)===33?T.substring(0,B):T).substring(D.indexOf(":",7)+1).trim(),ie=H.charCodeAt(0)+(H.charCodeAt(7)|0)){case 203:if(111>H.charCodeAt(8))break;case 115:T=T.replace(H,"-webkit-"+H)+";"+T;break;case 207:case 102:T=T.replace(H,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+T.replace(H,"-webkit-"+H)+";"+T.replace(H,"-ms-"+H+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return H=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+H+"-ms-flex-"+H+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(E,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(E,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(P.test(D)===!0)return(H=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?o(D.replace("stretch","fill-available"),B,j,F).replace(":fill-available",":stretch"):T.replace(H,"-webkit-"+H)+T.replace(H,"-moz-"+H.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,j+F===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+T}return T}function i(D,B){var j=D.indexOf(B===1?":":"{"),F=D.substring(0,B!==3?j:10);return j=D.substring(j+1,D.length-1),V(B!==2?F:F.replace(R,"$1"),j,B)}function a(D,B){var j=o(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return j!==B+";"?j.replace(O," or ($1)").substring(4):"("+B+")"}function s(D,B,j,F,T,ie,H,he,le,ue){for(var re=0,_e=B,ke;re<M;++re)switch(ke=J[re].call(c,D,_e,j,F,T,ie,H,he,le,ue)){case void 0:case!1:case!0:case null:break;default:_e=ke}if(_e!==B)return _e}function l(D){switch(D){case void 0:case null:M=J.length=0;break;default:if(typeof D=="function")J[M++]=D;else if(typeof D=="object")for(var B=0,j=D.length;B<j;++B)l(D[B]);else W=!!D|0}return l}function u(D){return D=D.prefix,D!==void 0&&(V=null,D?typeof D!="function"?K=1:(K=2,V=D):K=0),u}function c(D,B){var j=D;if(33>j.charCodeAt(0)&&(j=j.trim()),te=j,j=[te],0<M){var F=s(-1,B,j,j,U,I,0,0,0,0);F!==void 0&&typeof F=="string"&&(B=F)}var T=t(G,j,B,0,0);return 0<M&&(F=s(-2,T,j,j,U,I,T.length,0,0,0),F!==void 0&&(T=F)),te="",Q=0,I=U=1,T}var d=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,v=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,E=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,I=1,U=1,Q=0,K=1,G=[],J=[],M=0,V=null,W=0,te="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var Pj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Aj(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $j=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h0=Aj(function(e){return $j.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ng=Mg,Lj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jg={};jg[Ng.ForwardRef]=Nj;jg[Ng.Memo]=jE;function g0(e){return Ng.isMemo(e)?jE:jg[e.$$typeof]||Lj}var jj=Object.defineProperty,Ij=Object.getOwnPropertyNames,v0=Object.getOwnPropertySymbols,Dj=Object.getOwnPropertyDescriptor,Fj=Object.getPrototypeOf,b0=Object.prototype;function IE(e,t,n){if(typeof t!="string"){if(b0){var r=Fj(t);r&&r!==b0&&IE(e,r,n)}var o=Ij(t);v0&&(o=o.concat(v0(t)));for(var i=g0(e),a=g0(t),s=0;s<o.length;++s){var l=o[s];if(!Mj[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=Dj(t,l);try{jj(e,l,u)}catch{}}}}return e}var zj=IE;const Bj=Vo(zj);var Vt={};function Bn(){return(Bn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y0=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},_m=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mg.typeOf(e)},yc=Object.freeze([]),Gr=Object.freeze({});function Fi(e){return typeof e=="function"}function x0(e){return e.displayName||e.name||"Component"}function Ig(e){return e&&typeof e.styledComponentId=="string"}var zi=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",Dg=typeof window<"u"&&"HTMLElement"in window,Hj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY));function Bo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Uj=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Bo(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Pu=new Map,xc=new Map,ts=1,Ul=function(e){if(Pu.has(e))return Pu.get(e);for(;xc.has(ts);)ts++;var t=ts++;return Pu.set(e,t),xc.set(t,e),t},Wj=function(e){return xc.get(e)},Vj=function(e,t){t>=ts&&(ts=t+1),Pu.set(e,t),xc.set(t,e)},Yj="style["+zi+'][data-styled-version="5.3.11"]',Kj=new RegExp("^"+zi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),qj=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Xj=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(Kj);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(Vj(u,l),qj(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},Gj=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},DE=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(zi))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(zi,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Gj();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Qj=function(){function e(n){var r=this.element=DE(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}Bo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Jj=function(){function e(n){var r=this.element=DE(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Zj=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),w0=Dg,eI={isServer:!Dg,useCSSOMInjection:!Hj},FE=function(){function e(n,r,o){n===void 0&&(n=Gr),r===void 0&&(r={}),this.options=Bn({},eI,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Dg&&w0&&(w0=!1,function(i){for(var a=document.querySelectorAll(Yj),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(zi)!=="active"&&(Xj(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ul(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Bn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Zj(a):i?new Qj(a):new Jj(a),new Uj(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ul(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ul(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ul(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=Wj(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var c=zi+".g"+a+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(p){p.length>0&&(d+=p+",")}),i+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),tI=/(a)(d)/gi,S0=function(e){return String.fromCharCode(e+(e>25?39:97))};function km(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=S0(t%52)+n;return(S0(t%52)+n).replace(tI,"$1-$2")}var wi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},zE=function(e){return wi(5381,e)};function nI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fi(n)&&!Ig(n))return!1}return!0}var rI=zE("5.3.11"),oI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nI(t),this.componentId=n,this.baseHash=wi(rI,n),this.baseStyle=r,FE.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Bi(this.rules,t,n,r).join(""),s=km(wi(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=wi(this.baseHash,r.hash),d="",p=0;p<u;p++){var h=this.rules[p];if(typeof h=="string")d+=h;else if(h){var m=Bi(h,t,n,r),v=Array.isArray(m)?m.join(""):m;c=wi(c,v+p),d+=v}}if(d){var b=km(c>>>0);if(!n.hasNameForId(o,b)){var g=r(d,"."+b,void 0,o);n.insertRules(o,b,g)}i.push(b)}}return i.join(" ")},e}(),iI=/^\s*\/\/.*$/gm,aI=[":","[",".","#"];function sI(e){var t,n,r,o,i=Gr,a=i.options,s=a===void 0?Gr:a,l=i.plugins,u=l===void 0?yc:l,c=new Rj(s),d=[],p=function(v){function b(g){if(g)try{v(g+"}")}catch{}}return function(g,y,x,S,k,_,O,E,R,P){switch(g){case 1:if(R===0&&y.charCodeAt(0)===64)return v(y+";"),"";break;case 2:if(E===0)return y+"/*|*/";break;case 3:switch(E){case 102:case 112:return v(x[0]+y),"";default:return y+(P===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(b)}}}(function(v){d.push(v)}),h=function(v,b,g){return b===0&&aI.indexOf(g[n.length])!==-1||g.match(o)?v:"."+t};function m(v,b,g,y){y===void 0&&(y="&");var x=v.replace(iI,""),S=b&&g?g+" "+b+" { "+x+" }":x;return t=y,n=b,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(g||!b?"":b,S)}return c.use([].concat(u,[function(v,b,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},p,function(v){if(v===-2){var b=d;return d=[],b}}])),m.hash=u.length?u.reduce(function(v,b){return b.name||Bo(15),wi(v,b.name)},5381).toString():"",m}var BE=X.createContext();BE.Consumer;var HE=X.createContext(),lI=(HE.Consumer,new FE),Om=sI();function uI(){return w.useContext(BE)||lI}function cI(){return w.useContext(HE)||Om}var UE=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Om);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Bo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Om),this.name+t.hash},e}(),fI=/([A-Z])/,dI=/([A-Z])/g,pI=/^ms-/,mI=function(e){return"-"+e.toLowerCase()};function _0(e){return fI.test(e)?e.replace(dI,mI).replace(pI,"-ms-"):e}var k0=function(e){return e==null||e===!1||e===""};function Bi(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Bi(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(k0(e))return"";if(Ig(e))return"."+e.styledComponentId;if(Fi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Bi(l,t,n,r)}var u;return e instanceof UE?n?(e.inject(n,r),e.getName(r)):e:_m(e)?function c(d,p){var h,m,v=[];for(var b in d)d.hasOwnProperty(b)&&!k0(d[b])&&(Array.isArray(d[b])&&d[b].isCss||Fi(d[b])?v.push(_0(b)+":",d[b],";"):_m(d[b])?v.push.apply(v,c(d[b],b)):v.push(_0(b)+": "+(h=b,(m=d[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in Pj||h.startsWith("--")?String(m).trim():m+"px")+";"));return p?[p+" {"].concat(v,["}"]):v}(e):e.toString()}var O0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Fi(e)||_m(e)?O0(Bi(y0(yc,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:O0(Bi(y0(e,n)))}var hI=function(e,t,n){return n===void 0&&(n=Gr),e.theme!==n.theme&&e.theme||t||n.theme},gI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vI=/(^-|-$)/g;function Ld(e){return e.replace(gI,"-").replace(vI,"")}var WE=function(e){return km(zE(e)>>>0)};function Wl(e){return typeof e=="string"&&!0}var Em=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},bI=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function yI(e,t,n){var r=e[n];Em(t)&&Em(r)?VE(r,t):e[n]=t}function VE(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Em(a))for(var s in a)bI(s)&&yI(e,a[s],s)}return e}var wc=X.createContext();wc.Consumer;function ao(e){var t=w.useContext(wc),n=w.useMemo(function(){return function(r,o){if(!r)return Bo(14);if(Fi(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Bo(8):o?Bn({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?X.createElement(wc.Provider,{value:n},e.children):null}var Md={};function YE(e,t,n){var r=Ig(e),o=!Wl(e),i=t.attrs,a=i===void 0?yc:i,s=t.componentId,l=s===void 0?function(y,x){var S=typeof y!="string"?"sc":Ld(y);Md[S]=(Md[S]||0)+1;var k=S+"-"+WE("5.3.11"+S+Md[S]);return x?x+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(y){return Wl(y)?"styled."+y:"Styled("+x0(y)+")"}(e):u,d=t.displayName&&t.componentId?Ld(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(y,x,S){return e.shouldForwardProp(y,x,S)&&t.shouldForwardProp(y,x,S)}:e.shouldForwardProp);var m,v=new oI(n,d,r?e.componentStyle:void 0),b=v.isStatic&&a.length===0,g=function(y,x){return function(S,k,_,O){var E=S.attrs,R=S.componentStyle,P=S.defaultProps,L=S.foldedComponentIds,I=S.shouldForwardProp,U=S.styledComponentId,Q=S.target,K=function(F,T,ie){F===void 0&&(F=Gr);var H=Bn({},T,{theme:F}),he={};return ie.forEach(function(le){var ue,re,_e,ke=le;for(ue in Fi(ke)&&(ke=ke(H)),ke)H[ue]=he[ue]=ue==="className"?(re=he[ue],_e=ke[ue],re&&_e?re+" "+_e:re||_e):ke[ue]}),[H,he]}(hI(k,w.useContext(wc),P)||Gr,k,E),G=K[0],J=K[1],M=function(F,T,ie,H){var he=uI(),le=cI(),ue=T?F.generateAndInjectStyles(Gr,he,le):F.generateAndInjectStyles(ie,he,le);return ue}(R,O,G),V=_,W=J.$as||k.$as||J.as||k.as||Q,te=Wl(W),D=J!==k?Bn({},k,{},J):k,B={};for(var j in D)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?B.as=D[j]:(I?I(j,h0,W):!te||h0(j))&&(B[j]=D[j]));return k.style&&J.style!==k.style&&(B.style=Bn({},k.style,{},J.style)),B.className=Array.prototype.concat(L,U,M!==U?M:null,k.className,J.className).filter(Boolean).join(" "),B.ref=V,w.createElement(W,B)}(m,y,x,b)};return g.displayName=c,(m=X.forwardRef(g)).attrs=p,m.componentStyle=v,m.displayName=c,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):yc,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(y){var x=t.componentId,S=function(_,O){if(_==null)return{};var E,R,P={},L=Object.keys(_);for(R=0;R<L.length;R++)E=L[R],O.indexOf(E)>=0||(P[E]=_[E]);return P}(t,["componentId"]),k=x&&x+"-"+(Wl(y)?y:Ld(x0(y)));return YE(y,Bn({},S,{attrs:p,componentId:k}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?VE({},e.defaultProps,y):y}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),o&&Bj(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Y=function(e){return function t(n,r,o){if(o===void 0&&(o=Gr),!Mg.isValidElementType(r))return Bo(1,String(r));var i=function(){return n(r,o,ne.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Bn({},o,{},a))},i.attrs=function(a){return t(n,r,Bn({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(YE,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Y[e]=Y(e)});function Fg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=ne.apply(void 0,[e].concat(n)).join(""),i=WE(o);return new UE(i,o)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var E0=Object.getOwnPropertySymbols,xI=Object.prototype.hasOwnProperty,wI=Object.prototype.propertyIsEnumerable;function SI(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function _I(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var kI=_I()?Object.assign:function(e,t){for(var n,r=SI(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)xI.call(n,a)&&(r[a]=n[a]);if(E0){o=E0(n);for(var s=0;s<o.length;s++)wI.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const wn=Vo(kI);var C0=function(t,n){var r=wn({},t,n);for(var o in t){var i;!t[o]||typeof n[o]!="object"||wn(r,(i={},i[o]=wn(t[o],n[o]),i))}return r},OI=function(t){var n={};return Object.keys(t).sort(function(r,o){return r.localeCompare(o,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(r){n[r]=t[r]}),n},EI={breakpoints:[40,52,64].map(function(e){return e+"em"})},KE=function(t){return"@media screen and (min-width: "+t+")"},CI=function(t,n){return eo(n,t,t)},eo=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},zg=function e(t){var n={},r=function(a){var s={},l=!1,u=a.theme&&a.theme.disableStyledSystemCache;for(var c in a)if(t[c]){var d=t[c],p=a[c],h=eo(a.theme,d.scale,d.defaults);if(typeof p=="object"){if(n.breakpoints=!u&&n.breakpoints||eo(a.theme,"breakpoints",EI.breakpoints),Array.isArray(p)){n.media=!u&&n.media||[null].concat(n.breakpoints.map(KE)),s=C0(s,TI(n.media,d,h,p,a));continue}p!==null&&(s=C0(s,RI(n.breakpoints,d,h,p,a)),l=!0);continue}wn(s,d(p,h,a))}return l&&(s=OI(s)),s};r.config=t,r.propNames=Object.keys(t),r.cache=n;var o=Object.keys(t).filter(function(i){return i!=="config"});return o.length>1&&o.forEach(function(i){var a;r[i]=e((a={},a[i]=t[i],a))}),r},TI=function(t,n,r,o,i){var a={};return o.slice(0,t.length).forEach(function(s,l){var u=t[l],c=n(s,r,i);if(!u)wn(a,c);else{var d;wn(a,(d={},d[u]=wn({},a[u],c),d))}}),a},RI=function(t,n,r,o,i){var a={};for(var s in o){var l=t[s],u=o[s],c=n(u,r,i);if(!l)wn(a,c);else{var d,p=KE(l);wn(a,(d={},d[p]=wn({},a[p],c),d))}}return a},T0=function(t){var n=t.properties,r=t.property,o=t.scale,i=t.transform,a=i===void 0?CI:i,s=t.defaultScale;n=n||[r];var l=function(c,d,p){var h={},m=a(c,d,p);if(m!==null)return n.forEach(function(v){h[v]=m}),h};return l.scale=o,l.defaults=s,l},Tn=function(t){t===void 0&&(t={});var n={};Object.keys(t).forEach(function(o){var i=t[o];if(i===!0){n[o]=T0({property:o,scale:o});return}if(typeof i=="function"){n[o]=i;return}n[o]=T0(i)});var r=zg(n);return r},PI=function(){for(var t={},n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r.forEach(function(a){!a||!a.config||wn(t,a.config)});var i=zg(t);return i},AI=function(t){return typeof t=="number"&&!isNaN(t)},$I=function(t,n){return eo(n,t,!AI(t)||t>1?t:t*100+"%")},LI={width:{property:"width",scale:"sizes",transform:$I},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0},rn=Tn(LI),Cm={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};Cm.bg=Cm.backgroundColor;var qE=Tn(Cm),MI={fontSizes:[12,14,16,20,24,32,48,64,72]},NI={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:MI.fontSizes},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},Xo=Tn(NI),jI={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0},Ut=Tn(jI),Nd={space:[0,4,8,16,32,64,128,256,512]},II={gridGap:{property:"gridGap",scale:"space",defaultScale:Nd.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:Nd.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:Nd.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},on=Tn(II),it={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"}};it.borderTopWidth={property:"borderTopWidth",scale:"borderWidths"};it.borderTopColor={property:"borderTopColor",scale:"colors"};it.borderTopStyle={property:"borderTopStyle",scale:"borderStyles"};it.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"};it.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"};it.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"};it.borderBottomColor={property:"borderBottomColor",scale:"colors"};it.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"};it.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"};it.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"};it.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"};it.borderLeftColor={property:"borderLeftColor",scale:"colors"};it.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"};it.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"};it.borderRightColor={property:"borderRightColor",scale:"colors"};it.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var so=Tn(it),gr={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};gr.bgImage=gr.backgroundImage;gr.bgSize=gr.backgroundSize;gr.bgPosition=gr.backgroundPosition;gr.bgRepeat=gr.backgroundRepeat;var Sf=Tn(gr),Vl={space:[0,4,8,16,32,64,128,256,512]},DI={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Vl.space},right:{property:"right",scale:"space",defaultScale:Vl.space},bottom:{property:"bottom",scale:"space",defaultScale:Vl.space},left:{property:"left",scale:"space",defaultScale:Vl.space}},Ks=Tn(DI),yt={space:[0,4,8,16,32,64,128,256,512]},R0=function(t){return typeof t=="number"&&!isNaN(t)},vo=function(t,n){if(!R0(t))return eo(n,t,t);var r=t<0,o=Math.abs(t),i=eo(n,o,o);return R0(i)?i*(r?-1:1):r?"-"+i:i},ve={};ve.margin={margin:{property:"margin",scale:"space",transform:vo,defaultScale:yt.space},marginTop:{property:"marginTop",scale:"space",transform:vo,defaultScale:yt.space},marginRight:{property:"marginRight",scale:"space",transform:vo,defaultScale:yt.space},marginBottom:{property:"marginBottom",scale:"space",transform:vo,defaultScale:yt.space},marginLeft:{property:"marginLeft",scale:"space",transform:vo,defaultScale:yt.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:vo,defaultScale:yt.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:vo,defaultScale:yt.space}};ve.margin.m=ve.margin.margin;ve.margin.mt=ve.margin.marginTop;ve.margin.mr=ve.margin.marginRight;ve.margin.mb=ve.margin.marginBottom;ve.margin.ml=ve.margin.marginLeft;ve.margin.mx=ve.margin.marginX;ve.margin.my=ve.margin.marginY;ve.padding={padding:{property:"padding",scale:"space",defaultScale:yt.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:yt.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:yt.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:yt.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:yt.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:yt.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:yt.space}};ve.padding.p=ve.padding.padding;ve.padding.pt=ve.padding.paddingTop;ve.padding.pr=ve.padding.paddingRight;ve.padding.pb=ve.padding.paddingBottom;ve.padding.pl=ve.padding.paddingLeft;ve.padding.px=ve.padding.paddingX;ve.padding.py=ve.padding.paddingY;var FI=Tn(ve.margin),zI=Tn(ve.padding),Rs=PI(FI,zI);Tn({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function Ps(){return Ps=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ps.apply(this,arguments)}var jn=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},BI=[40,52,64].map(function(e){return e+"em"}),HI={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},UI={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},P0={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},WI={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},VI=function(t,n){if(typeof n!="number"||n>=0)return jn(t,n,n);var r=Math.abs(n),o=jn(t,r,r);return typeof o=="string"?"-"+o:o*-1},YI=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,t){var n;return Ps({},e,(n={},n[t]=VI,n))},{}),KI=function(t){return function(n){var r={},o=jn(n,"breakpoints",BI),i=[null].concat(o.map(function(c){return"@media screen and (min-width: "+c+")"}));for(var a in t){var s=typeof t[a]=="function"?t[a](n):t[a];if(s!=null){if(!Array.isArray(s)){r[a]=s;continue}for(var l=0;l<s.slice(0,i.length).length;l++){var u=i[l];if(!u){r[a]=s[l];continue}r[u]=r[u]||{},s[l]!=null&&(r[u][a]=s[l])}}}return r}},qI=function e(t){return function(n){n===void 0&&(n={});var r=Ps({},HI,{},n.theme||n),o={},i=typeof t=="function"?t(r):t,a=KI(i)(r);for(var s in a){var l=a[s],u=typeof l=="function"?l(r):l;if(s==="variant"){var c=e(jn(r,u))(r);o=Ps({},o,{},c);continue}if(u&&typeof u=="object"){o[s]=e(u)(r);continue}var d=jn(UI,s,s),p=jn(WI,d),h=jn(r,p,jn(r,d,{})),m=jn(YI,d,jn),v=m(h,u,u);if(P0[d])for(var b=P0[d],g=0;g<b.length;g++)o[b[g]]=v;else o[d]=v}return o}},vn=function(t){var n,r=t.scale,o=t.prop,i=o===void 0?"variant":o,a=t.variants,s=a===void 0?{}:a,l=t.key,u;Object.keys(s).length?u=function(h,m,v){return qI(eo(m,h,null))(v.theme)}:u=function(h,m){return eo(m,h,null)},u.scale=r||l,u.defaults=s;var c=(n={},n[i]=u,n),d=zg(c);return d};vn({key:"buttons"});vn({key:"textStyles",prop:"textStyle"});var Dt=vn({key:"colorStyles",prop:"colors"});rn.width;rn.height;rn.minWidth;rn.minHeight;rn.maxWidth;rn.maxHeight;rn.size;rn.verticalAlign;rn.display;rn.overflow;rn.overflowX;rn.overflowY;qE.opacity;Xo.fontSize;Xo.fontFamily;Xo.fontWeight;Xo.lineHeight;Xo.textAlign;Xo.fontStyle;Xo.letterSpacing;Ut.alignItems;Ut.alignContent;Ut.justifyItems;Ut.justifyContent;Ut.flexWrap;Ut.flexDirection;Ut.flex;Ut.flexGrow;Ut.flexShrink;Ut.flexBasis;Ut.justifySelf;Ut.alignSelf;Ut.order;on.gridGap;on.gridColumnGap;on.gridRowGap;on.gridColumn;on.gridRow;on.gridAutoFlow;on.gridAutoColumns;on.gridAutoRows;on.gridTemplateColumns;on.gridTemplateRows;on.gridTemplateAreas;on.gridArea;so.borderWidth;so.borderStyle;so.borderColor;so.borderTop;so.borderRight;so.borderBottom;so.borderLeft;so.borderRadius;Sf.backgroundImage;Sf.backgroundSize;Sf.backgroundPosition;Sf.backgroundRepeat;Ks.zIndex;Ks.top;Ks.right;Ks.bottom;Ks.left;var A0=Object.prototype.hasOwnProperty;function $0(e,t,n){for(n of e.keys())if(ns(n,t))return n}function ns(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&ns(e[r],t[r]););return r===-1}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if(o=r,o&&typeof o=="object"&&(o=$0(t,o),!o)||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if(o=r[0],o&&typeof o=="object"&&(o=$0(t,o),!o)||!ns(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return r===-1}if(!n||typeof e=="object"){r=0;for(n in e)if(A0.call(e,n)&&++r&&!A0.call(t,n)||!(n in t)||!ns(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}function Sc(e){"@babel/helpers - typeof";return Sc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sc(e)}var XI=/^\s+/,GI=/\s+$/;function Z(e,t){if(e=e||"",t=t||{},e instanceof Z)return e;if(!(this instanceof Z))return new Z(e,t);var n=QI(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}Z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,o,i,a,s;return n=t.r/255,r=t.g/255,o=t.b/255,n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),.2126*i+.7152*a+.0722*s},setAlpha:function(t){return this._a=XE(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=M0(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=M0(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+o+"%)":"hsva("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var t=L0(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=L0(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+o+"%)":"hsla("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(t){return N0(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return tD(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Le(this._r,255)*100)+"%",g:Math.round(Le(this._g,255)*100)+"%",b:Math.round(Le(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Le(this._r,255)*100)+"%, "+Math.round(Le(this._g,255)*100)+"%, "+Math.round(Le(this._b,255)*100)+"%)":"rgba("+Math.round(Le(this._r,255)*100)+"%, "+Math.round(Le(this._g,255)*100)+"%, "+Math.round(Le(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:pD[N0(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+j0(this._r,this._g,this._b,this._a),r=n,o=this._gradientType?"GradientType = 1, ":"";if(t){var i=Z(t);r="#"+j0(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,o=this._a<1&&this._a>=0,i=!n&&o&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return i?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return Z(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(iD,arguments)},brighten:function(){return this._applyModification(aD,arguments)},darken:function(){return this._applyModification(sD,arguments)},desaturate:function(){return this._applyModification(nD,arguments)},saturate:function(){return this._applyModification(rD,arguments)},greyscale:function(){return this._applyModification(oD,arguments)},spin:function(){return this._applyModification(lD,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(fD,arguments)},complement:function(){return this._applyCombination(uD,arguments)},monochromatic:function(){return this._applyCombination(dD,arguments)},splitcomplement:function(){return this._applyCombination(cD,arguments)},triad:function(){return this._applyCombination(I0,[3])},tetrad:function(){return this._applyCombination(I0,[4])}};Z.fromRatio=function(e,t){if(Sc(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=Da(e[r]));e=n}return Z(e,t)};function QI(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,a=!1,s=!1;return typeof e=="string"&&(e=vD(e)),Sc(e)=="object"&&(Jn(e.r)&&Jn(e.g)&&Jn(e.b)?(t=JI(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Jn(e.h)&&Jn(e.s)&&Jn(e.v)?(r=Da(e.s),o=Da(e.v),t=eD(e.h,r,o),a=!0,s="hsv"):Jn(e.h)&&Jn(e.s)&&Jn(e.l)&&(r=Da(e.s),i=Da(e.l),t=ZI(e.h,r,i),a=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=XE(n),{ok:a,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function JI(e,t,n){return{r:Le(e,255)*255,g:Le(t,255)*255,b:Le(n,255)*255}}function L0(e,t,n){e=Le(e,255),t=Le(t,255),n=Le(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=(r+o)/2;if(r==o)i=a=0;else{var l=r-o;switch(a=s>.5?l/(2-r-o):l/(r+o),r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,l:s}}function ZI(e,t,n){var r,o,i;e=Le(e,360),t=Le(t,100),n=Le(n,100);function a(u,c,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?u+(c-u)*6*d:d<1/2?c:d<2/3?u+(c-u)*(2/3-d)*6:u}if(t===0)r=o=i=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=a(l,s,e+1/3),o=a(l,s,e),i=a(l,s,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function M0(e,t,n){e=Le(e,255),t=Le(t,255),n=Le(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=r,l=r-o;if(a=r===0?0:l/r,r==o)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,v:s}}function eD(e,t,n){e=Le(e,360)*6,t=Le(t,100),n=Le(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),a=n*(1-o*t),s=n*(1-(1-o)*t),l=r%6,u=[n,a,i,i,s,n][l],c=[s,n,n,a,i,i][l],d=[i,i,s,n,n,a][l];return{r:u*255,g:c*255,b:d*255}}function N0(e,t,n,r){var o=[bn(Math.round(e).toString(16)),bn(Math.round(t).toString(16)),bn(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function tD(e,t,n,r,o){var i=[bn(Math.round(e).toString(16)),bn(Math.round(t).toString(16)),bn(Math.round(n).toString(16)),bn(GE(r))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function j0(e,t,n,r){var o=[bn(GE(r)),bn(Math.round(e).toString(16)),bn(Math.round(t).toString(16)),bn(Math.round(n).toString(16))];return o.join("")}Z.equals=function(e,t){return!e||!t?!1:Z(e).toRgbString()==Z(t).toRgbString()};Z.random=function(){return Z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function nD(e,t){t=t===0?0:t||10;var n=Z(e).toHsl();return n.s-=t/100,n.s=_f(n.s),Z(n)}function rD(e,t){t=t===0?0:t||10;var n=Z(e).toHsl();return n.s+=t/100,n.s=_f(n.s),Z(n)}function oD(e){return Z(e).desaturate(100)}function iD(e,t){t=t===0?0:t||10;var n=Z(e).toHsl();return n.l+=t/100,n.l=_f(n.l),Z(n)}function aD(e,t){t=t===0?0:t||10;var n=Z(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),Z(n)}function sD(e,t){t=t===0?0:t||10;var n=Z(e).toHsl();return n.l-=t/100,n.l=_f(n.l),Z(n)}function lD(e,t){var n=Z(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,Z(n)}function uD(e){var t=Z(e).toHsl();return t.h=(t.h+180)%360,Z(t)}function I0(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=Z(e).toHsl(),r=[Z(e)],o=360/t,i=1;i<t;i++)r.push(Z({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function cD(e){var t=Z(e).toHsl(),n=t.h;return[Z(e),Z({h:(n+72)%360,s:t.s,l:t.l}),Z({h:(n+216)%360,s:t.s,l:t.l})]}function fD(e,t,n){t=t||6,n=n||30;var r=Z(e).toHsl(),o=360/n,i=[Z(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(Z(r));return i}function dD(e,t){t=t||6;for(var n=Z(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],s=1/t;t--;)a.push(Z({h:r,s:o,v:i})),i=(i+s)%1;return a}Z.mix=function(e,t,n){n=n===0?0:n||50;var r=Z(e).toRgb(),o=Z(t).toRgb(),i=n/100,a={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return Z(a)};Z.readability=function(e,t){var n=Z(e),r=Z(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};Z.isReadable=function(e,t,n){var r=Z.readability(e,t),o,i;switch(i=!1,o=bD(n),o.level+o.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};Z.mostReadable=function(e,t,n){var r=null,o=0,i,a,s,l;n=n||{},a=n.includeFallbackColors,s=n.level,l=n.size;for(var u=0;u<t.length;u++)i=Z.readability(e,t[u]),i>o&&(o=i,r=Z(t[u]));return Z.isReadable(e,r,{level:s,size:l})||!a?r:(n.includeFallbackColors=!1,Z.mostReadable(e,["#fff","#000"],n))};var Tm=Z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},pD=Z.hexNames=mD(Tm);function mD(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function XE(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Le(e,t){hD(e)&&(e="100%");var n=gD(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function _f(e){return Math.min(1,Math.max(0,e))}function $t(e){return parseInt(e,16)}function hD(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function gD(e){return typeof e=="string"&&e.indexOf("%")!=-1}function bn(e){return e.length==1?"0"+e:""+e}function Da(e){return e<=1&&(e=e*100+"%"),e}function GE(e){return Math.round(parseFloat(e)*255).toString(16)}function D0(e){return $t(e)/255}var un=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",o="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Jn(e){return!!un.CSS_UNIT.exec(e)}function vD(e){e=e.replace(XI,"").replace(GI,"").toLowerCase();var t=!1;if(Tm[e])e=Tm[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=un.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=un.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=un.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=un.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=un.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=un.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=un.hex8.exec(e))?{r:$t(n[1]),g:$t(n[2]),b:$t(n[3]),a:D0(n[4]),format:t?"name":"hex8"}:(n=un.hex6.exec(e))?{r:$t(n[1]),g:$t(n[2]),b:$t(n[3]),format:t?"name":"hex"}:(n=un.hex4.exec(e))?{r:$t(n[1]+""+n[1]),g:$t(n[2]+""+n[2]),b:$t(n[3]+""+n[3]),a:D0(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=un.hex3.exec(e))?{r:$t(n[1]+""+n[1]),g:$t(n[2]+""+n[2]),b:$t(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function bD(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}var Pt="top",tn="bottom",nn="right",At="left",Bg="auto",qs=[Pt,tn,nn,At],Hi="start",As="end",yD="clippingParents",QE="viewport",ka="popper",xD="reference",F0=qs.reduce(function(e,t){return e.concat([t+"-"+Hi,t+"-"+As])},[]),JE=[].concat(qs,[Bg]).reduce(function(e,t){return e.concat([t,t+"-"+Hi,t+"-"+As])},[]),wD="beforeRead",SD="read",_D="afterRead",kD="beforeMain",OD="main",ED="afterMain",CD="beforeWrite",TD="write",RD="afterWrite",PD=[wD,SD,_D,kD,OD,ED,CD,TD,RD];function to(e){return e?(e.nodeName||"").toLowerCase():null}function Ft(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ho(e){var t=Ft(e).Element;return e instanceof t||e instanceof Element}function Wn(e){var t=Ft(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Hg(e){if(typeof ShadowRoot>"u")return!1;var t=Ft(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Vn(e){return e.split("-")[0]}var $o=Math.max,_c=Math.min,Ui=Math.round;function Rm(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ZE(){return!/^((?!chrome|android).)*safari/i.test(Rm())}function Wi(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&Wn(e)&&(o=e.offsetWidth>0&&Ui(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ui(r.height)/e.offsetHeight||1);var a=Ho(e)?Ft(e):window,s=a.visualViewport,l=!ZE()&&n,u=(r.left+(l&&s?s.offsetLeft:0))/o,c=(r.top+(l&&s?s.offsetTop:0))/i,d=r.width/o,p=r.height/i;return{width:d,height:p,top:c,right:u+d,bottom:c+p,left:u,x:u,y:c}}function Ug(e){var t=Wi(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function eC(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Hg(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function vr(e){return Ft(e).getComputedStyle(e)}function AD(e){return["table","td","th"].indexOf(to(e))>=0}function lo(e){return((Ho(e)?e.ownerDocument:e.document)||window.document).documentElement}function kf(e){return to(e)==="html"?e:e.assignedSlot||e.parentNode||(Hg(e)?e.host:null)||lo(e)}function z0(e){return!Wn(e)||vr(e).position==="fixed"?null:e.offsetParent}function $D(e){var t=/firefox/i.test(Rm()),n=/Trident/i.test(Rm());if(n&&Wn(e)){var r=vr(e);if(r.position==="fixed")return null}var o=kf(e);for(Hg(o)&&(o=o.host);Wn(o)&&["html","body"].indexOf(to(o))<0;){var i=vr(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Xs(e){for(var t=Ft(e),n=z0(e);n&&AD(n)&&vr(n).position==="static";)n=z0(n);return n&&(to(n)==="html"||to(n)==="body"&&vr(n).position==="static")?t:n||$D(e)||t}function Wg(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function rs(e,t,n){return $o(e,_c(t,n))}function LD(e,t,n){var r=rs(e,t,n);return r>n?n:r}function tC(){return{top:0,right:0,bottom:0,left:0}}function nC(e){return Object.assign({},tC(),e)}function rC(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var MD=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,nC(typeof t!="number"?t:rC(t,qs))};function ND(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Vn(n.placement),l=Wg(s),u=[At,nn].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!a)){var d=MD(o.padding,n),p=Ug(i),h=l==="y"?Pt:At,m=l==="y"?tn:nn,v=n.rects.reference[c]+n.rects.reference[l]-a[l]-n.rects.popper[c],b=a[l]-n.rects.reference[l],g=Xs(i),y=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,x=v/2-b/2,S=d[h],k=y-p[c]-d[m],_=y/2-p[c]/2+x,O=rs(S,_,k),E=l;n.modifiersData[r]=(t={},t[E]=O,t.centerOffset=O-_,t)}}function jD(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||eC(t.elements.popper,o)&&(t.elements.arrow=o))}const ID={name:"arrow",enabled:!0,phase:"main",fn:ND,effect:jD,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Vi(e){return e.split("-")[1]}var DD={top:"auto",right:"auto",bottom:"auto",left:"auto"};function FD(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Ui(n*o)/o||0,y:Ui(r*o)/o||0}}function B0(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,d=e.isFixed,p=a.x,h=p===void 0?0:p,m=a.y,v=m===void 0?0:m,b=typeof c=="function"?c({x:h,y:v}):{x:h,y:v};h=b.x,v=b.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),x=At,S=Pt,k=window;if(u){var _=Xs(n),O="clientHeight",E="clientWidth";if(_===Ft(n)&&(_=lo(n),vr(_).position!=="static"&&s==="absolute"&&(O="scrollHeight",E="scrollWidth")),_=_,o===Pt||(o===At||o===nn)&&i===As){S=tn;var R=d&&_===k&&k.visualViewport?k.visualViewport.height:_[O];v-=R-r.height,v*=l?1:-1}if(o===At||(o===Pt||o===tn)&&i===As){x=nn;var P=d&&_===k&&k.visualViewport?k.visualViewport.width:_[E];h-=P-r.width,h*=l?1:-1}}var L=Object.assign({position:s},u&&DD),I=c===!0?FD({x:h,y:v},Ft(n)):{x:h,y:v};if(h=I.x,v=I.y,l){var U;return Object.assign({},L,(U={},U[S]=y?"0":"",U[x]=g?"0":"",U.transform=(k.devicePixelRatio||1)<=1?"translate("+h+"px, "+v+"px)":"translate3d("+h+"px, "+v+"px, 0)",U))}return Object.assign({},L,(t={},t[S]=y?v+"px":"",t[x]=g?h+"px":"",t.transform="",t))}function zD(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:Vn(t.placement),variation:Vi(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,B0(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,B0(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const BD={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:zD,data:{}};var Yl={passive:!0};function HD(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,l=Ft(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",n.update,Yl)}),s&&l.addEventListener("resize",n.update,Yl),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Yl)}),s&&l.removeEventListener("resize",n.update,Yl)}}const UD={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:HD,data:{}};var WD={left:"right",right:"left",bottom:"top",top:"bottom"};function Au(e){return e.replace(/left|right|bottom|top/g,function(t){return WD[t]})}var VD={start:"end",end:"start"};function H0(e){return e.replace(/start|end/g,function(t){return VD[t]})}function Vg(e){var t=Ft(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Yg(e){return Wi(lo(e)).left+Vg(e).scrollLeft}function YD(e,t){var n=Ft(e),r=lo(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var u=ZE();(u||!u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+Yg(e),y:l}}function KD(e){var t,n=lo(e),r=Vg(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=$o(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=$o(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Yg(e),l=-r.scrollTop;return vr(o||n).direction==="rtl"&&(s+=$o(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function Kg(e){var t=vr(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function oC(e){return["html","body","#document"].indexOf(to(e))>=0?e.ownerDocument.body:Wn(e)&&Kg(e)?e:oC(kf(e))}function os(e,t){var n;t===void 0&&(t=[]);var r=oC(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Ft(r),a=o?[i].concat(i.visualViewport||[],Kg(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(os(kf(a)))}function Pm(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function qD(e,t){var n=Wi(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function U0(e,t,n){return t===QE?Pm(YD(e,n)):Ho(t)?qD(t,n):Pm(KD(lo(e)))}function XD(e){var t=os(kf(e)),n=["absolute","fixed"].indexOf(vr(e).position)>=0,r=n&&Wn(e)?Xs(e):e;return Ho(r)?t.filter(function(o){return Ho(o)&&eC(o,r)&&to(o)!=="body"}):[]}function GD(e,t,n,r){var o=t==="clippingParents"?XD(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(l,u){var c=U0(e,u,r);return l.top=$o(c.top,l.top),l.right=_c(c.right,l.right),l.bottom=_c(c.bottom,l.bottom),l.left=$o(c.left,l.left),l},U0(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function iC(e){var t=e.reference,n=e.element,r=e.placement,o=r?Vn(r):null,i=r?Vi(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(o){case Pt:l={x:a,y:t.y-n.height};break;case tn:l={x:a,y:t.y+t.height};break;case nn:l={x:t.x+t.width,y:s};break;case At:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=o?Wg(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Hi:l[u]=l[u]-(t[c]/2-n[c]/2);break;case As:l[u]=l[u]+(t[c]/2-n[c]/2);break}}return l}function $s(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,l=s===void 0?yD:s,u=n.rootBoundary,c=u===void 0?QE:u,d=n.elementContext,p=d===void 0?ka:d,h=n.altBoundary,m=h===void 0?!1:h,v=n.padding,b=v===void 0?0:v,g=nC(typeof b!="number"?b:rC(b,qs)),y=p===ka?xD:ka,x=e.rects.popper,S=e.elements[m?y:p],k=GD(Ho(S)?S:S.contextElement||lo(e.elements.popper),l,c,a),_=Wi(e.elements.reference),O=iC({reference:_,element:x,placement:o}),E=Pm(Object.assign({},x,O)),R=p===ka?E:_,P={top:k.top-R.top+g.top,bottom:R.bottom-k.bottom+g.bottom,left:k.left-R.left+g.left,right:R.right-k.right+g.right},L=e.modifiersData.offset;if(p===ka&&L){var I=L[o];Object.keys(P).forEach(function(U){var Q=[nn,tn].indexOf(U)>=0?1:-1,K=[Pt,tn].indexOf(U)>=0?"y":"x";P[U]+=I[K]*Q})}return P}function QD(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?JE:l,c=Vi(r),d=c?s?F0:F0.filter(function(m){return Vi(m)===c}):qs,p=d.filter(function(m){return u.indexOf(m)>=0});p.length===0&&(p=d);var h=p.reduce(function(m,v){return m[v]=$s(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[Vn(v)],m},{});return Object.keys(h).sort(function(m,v){return h[m]-h[v]})}function JD(e){if(Vn(e)===Bg)return[];var t=Au(e);return[H0(e),t,H0(t)]}function ZD(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,l=n.fallbackPlacements,u=n.padding,c=n.boundary,d=n.rootBoundary,p=n.altBoundary,h=n.flipVariations,m=h===void 0?!0:h,v=n.allowedAutoPlacements,b=t.options.placement,g=Vn(b),y=g===b,x=l||(y||!m?[Au(b)]:JD(b)),S=[b].concat(x).reduce(function(j,F){return j.concat(Vn(F)===Bg?QD(t,{placement:F,boundary:c,rootBoundary:d,padding:u,flipVariations:m,allowedAutoPlacements:v}):F)},[]),k=t.rects.reference,_=t.rects.popper,O=new Map,E=!0,R=S[0],P=0;P<S.length;P++){var L=S[P],I=Vn(L),U=Vi(L)===Hi,Q=[Pt,tn].indexOf(I)>=0,K=Q?"width":"height",G=$s(t,{placement:L,boundary:c,rootBoundary:d,altBoundary:p,padding:u}),J=Q?U?nn:At:U?tn:Pt;k[K]>_[K]&&(J=Au(J));var M=Au(J),V=[];if(i&&V.push(G[I]<=0),s&&V.push(G[J]<=0,G[M]<=0),V.every(function(j){return j})){R=L,E=!1;break}O.set(L,V)}if(E)for(var W=m?3:1,te=function(F){var T=S.find(function(ie){var H=O.get(ie);if(H)return H.slice(0,F).every(function(he){return he})});if(T)return R=T,"break"},D=W;D>0;D--){var B=te(D);if(B==="break")break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}}const eF={name:"flip",enabled:!0,phase:"main",fn:ZD,requiresIfExists:["offset"],data:{_skip:!1}};function W0(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function V0(e){return[Pt,nn,tn,At].some(function(t){return e[t]>=0})}function tF(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=$s(t,{elementContext:"reference"}),s=$s(t,{altBoundary:!0}),l=W0(a,r),u=W0(s,o,i),c=V0(l),d=V0(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const nF={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:tF};function rF(e,t,n){var r=Vn(e),o=[At,Pt].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[At,nn].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function oF(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=JE.reduce(function(c,d){return c[d]=rF(d,t.rects,i),c},{}),s=a[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}const iF={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:oF};function aF(e){var t=e.state,n=e.name;t.modifiersData[n]=iC({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const sF={name:"popperOffsets",enabled:!0,phase:"read",fn:aF,data:{}};function lF(e){return e==="x"?"y":"x"}function uF(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,p=n.tether,h=p===void 0?!0:p,m=n.tetherOffset,v=m===void 0?0:m,b=$s(t,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),g=Vn(t.placement),y=Vi(t.placement),x=!y,S=Wg(g),k=lF(S),_=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,R=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(_){if(i){var U,Q=S==="y"?Pt:At,K=S==="y"?tn:nn,G=S==="y"?"height":"width",J=_[S],M=J+b[Q],V=J-b[K],W=h?-E[G]/2:0,te=y===Hi?O[G]:E[G],D=y===Hi?-E[G]:-O[G],B=t.elements.arrow,j=h&&B?Ug(B):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:tC(),T=F[Q],ie=F[K],H=rs(0,O[G],j[G]),he=x?O[G]/2-W-H-T-P.mainAxis:te-H-T-P.mainAxis,le=x?-O[G]/2+W+H+ie+P.mainAxis:D+H+ie+P.mainAxis,ue=t.elements.arrow&&Xs(t.elements.arrow),re=ue?S==="y"?ue.clientTop||0:ue.clientLeft||0:0,_e=(U=L==null?void 0:L[S])!=null?U:0,ke=J+he-_e-re,ee=J+le-_e,Be=rs(h?_c(M,ke):M,J,h?$o(V,ee):V);_[S]=Be,I[S]=Be-J}if(s){var ce,qe=S==="x"?Pt:At,fo=S==="x"?tn:nn,Ce=_[k],Gn=k==="y"?"height":"width",_r=Ce+b[qe],gt=Ce-b[fo],oe=[Pt,At].indexOf(g)!==-1,Ae=(ce=L==null?void 0:L[k])!=null?ce:0,Jo=oe?_r:Ce-O[Gn]-E[Gn]-Ae+P.altAxis,Zo=oe?Ce+O[Gn]+E[Gn]-Ae-P.altAxis:gt,sn=h&&oe?LD(Jo,Ce,Zo):rs(h?Jo:_r,Ce,h?Zo:gt);_[k]=sn,I[k]=sn-Ce}t.modifiersData[r]=I}}const cF={name:"preventOverflow",enabled:!0,phase:"main",fn:uF,requiresIfExists:["offset"]};function fF(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function dF(e){return e===Ft(e)||!Wn(e)?Vg(e):fF(e)}function pF(e){var t=e.getBoundingClientRect(),n=Ui(t.width)/e.offsetWidth||1,r=Ui(t.height)/e.offsetHeight||1;return n!==1||r!==1}function mF(e,t,n){n===void 0&&(n=!1);var r=Wn(t),o=Wn(t)&&pF(t),i=lo(t),a=Wi(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((to(t)!=="body"||Kg(i))&&(s=dF(t)),Wn(t)?(l=Wi(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Yg(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function hF(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&o(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function gF(e){var t=hF(e);return PD.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function vF(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function bF(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Y0={placement:"bottom",modifiers:[],strategy:"absolute"};function K0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function yF(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?Y0:o;return function(s,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Y0,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],p=!1,h={state:c,setOptions:function(g){var y=typeof g=="function"?g(c.options):g;v(),c.options=Object.assign({},i,c.options,y),c.scrollParents={reference:Ho(s)?os(s):s.contextElement?os(s.contextElement):[],popper:os(l)};var x=gF(bF([].concat(r,c.options.modifiers)));return c.orderedModifiers=x.filter(function(S){return S.enabled}),m(),h.update()},forceUpdate:function(){if(!p){var g=c.elements,y=g.reference,x=g.popper;if(K0(y,x)){c.rects={reference:mF(y,Xs(x),c.options.strategy==="fixed"),popper:Ug(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var k=c.orderedModifiers[S],_=k.fn,O=k.options,E=O===void 0?{}:O,R=k.name;typeof _=="function"&&(c=_({state:c,options:E,name:R,instance:h})||c)}}}},update:vF(function(){return new Promise(function(b){h.forceUpdate(),b(c)})}),destroy:function(){v(),p=!0}};if(!K0(s,l))return h;h.setOptions(u).then(function(b){!p&&u.onFirstUpdate&&u.onFirstUpdate(b)});function m(){c.orderedModifiers.forEach(function(b){var g=b.name,y=b.options,x=y===void 0?{}:y,S=b.effect;if(typeof S=="function"){var k=S({state:c,name:g,instance:h,options:x}),_=function(){};d.push(k||_)}})}function v(){d.forEach(function(b){return b()}),d=[]}return h}}var xF=function(){},wF=xF;const SF=Vo(wF);function aC(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Am(){return Am=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Am.apply(null,arguments)}/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $m(){return $m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$m.apply(this,arguments)}var q0;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(q0||(q0={}));function Sn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _F(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function X0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sC(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var G0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(G0||(G0={}));function Q0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kF(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:h}=c;if(p==="*"){let v=s[d]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=s[d];return h&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function kF(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_F(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function kc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function OF(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?sC(e):e;return{pathname:n?n.startsWith("/")?n:EF(n,t):t,search:TF(r),hash:RF(o)}}function EF(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function jd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CF(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lC(e,t){let n=CF(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uC(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=sC(e):(o=$m({},e),Sn(!o.pathname||!o.pathname.includes("?"),jd("?","pathname","search",o)),Sn(!o.pathname||!o.pathname.includes("#"),jd("#","pathname","hash",o)),Sn(!o.search||!o.search.includes("#"),jd("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=OF(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const cC=e=>e.join("/").replace(/\/\/+/g,"/"),TF=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,RF=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,fC=["post","put","patch","delete"];new Set(fC);const PF=["get",...fC];new Set(PF);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lm(){return Lm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lm.apply(this,arguments)}const qg=w.createContext(null),AF=w.createContext(null),ra=w.createContext(null),dC=w.createContext(null),Of=w.createContext({outlet:null,matches:[],isDataRoute:!1});function $F(e,t){let{relative:n}=t===void 0?{}:t;Xg()||Sn(!1);let{basename:r,navigator:o}=w.useContext(ra),{hash:i,pathname:a,search:s}=Cf(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:cC([r,a])),o.createHref({pathname:l,search:s,hash:i})}function Xg(){return w.useContext(dC)!=null}function Ef(){return Xg()||Sn(!1),w.useContext(dC).location}function pC(e){w.useContext(ra).static||w.useLayoutEffect(e)}function LF(){let{isDataRoute:e}=w.useContext(Of);return e?DF():MF()}function MF(){Xg()||Sn(!1);let e=w.useContext(qg),{basename:t,future:n,navigator:r}=w.useContext(ra),{matches:o}=w.useContext(Of),{pathname:i}=Ef(),a=JSON.stringify(lC(o,n.v7_relativeSplatPath)),s=w.useRef(!1);return pC(()=>{s.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=uC(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:cC([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}function Cf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(ra),{matches:o}=w.useContext(Of),{pathname:i}=Ef(),a=JSON.stringify(lC(o,r.v7_relativeSplatPath));return w.useMemo(()=>uC(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}var mC=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mC||{}),hC=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hC||{});function NF(e){let t=w.useContext(qg);return t||Sn(!1),t}function jF(e){let t=w.useContext(Of);return t||Sn(!1),t}function IF(e){let t=jF(),n=t.matches[t.matches.length-1];return n.route.id||Sn(!1),n.route.id}function DF(){let{router:e}=NF(mC.UseNavigateStable),t=IF(hC.UseNavigateStable),n=w.useRef(!1);return pC(()=>{n.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Lm({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oc.apply(this,arguments)}function gC(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function FF(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zF(e,t){return e.button===0&&(!t||t==="_self")&&!FF(e)}const BF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HF=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],UF="6";try{window.__reactRouterVersion=UF}catch{}const WF=w.createContext({isTransitioning:!1}),VF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vC=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,p=gC(t,BF),{basename:h}=w.useContext(ra),m,v=!1;if(typeof u=="string"&&YF.test(u)&&(m=u,VF))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),k=kc(S.pathname,h);S.origin===x.origin&&k!=null?u=k+S.search+S.hash:v=!0}catch{}let b=$F(u,{relative:o}),g=XF(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:d});function y(x){r&&r(x),x.defaultPrevented||g(x)}return w.createElement("a",Oc({},p,{href:m||b,onClick:v||i?r:y,ref:n,target:l}))}),KF=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,viewTransition:u,children:c}=t,d=gC(t,HF),p=Cf(l,{relative:d.relative}),h=Ef(),m=w.useContext(AF),{navigator:v,basename:b}=w.useContext(ra),g=m!=null&&GF(p)&&u===!0,y=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,x=h.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&b&&(S=kc(S,b)||S);const k=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let _=x===y||!a&&x.startsWith(y)&&x.charAt(k)==="/",O=S!=null&&(S===y||!a&&S.startsWith(y)&&S.charAt(y.length)==="/"),E={isActive:_,isPending:O,isTransitioning:g},R=_?r:void 0,P;typeof i=="function"?P=i(E):P=[i,_?"active":null,O?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(E):s;return w.createElement(vC,Oc({},d,{"aria-current":R,className:P,ref:n,style:L,to:l,viewTransition:u}),typeof c=="function"?c(E):c)});var Mm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mm||(Mm={}));var J0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(J0||(J0={}));function qF(e){let t=w.useContext(qg);return t||Sn(!1),t}function XF(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,l=LF(),u=Ef(),c=Cf(e,{relative:a});return w.useCallback(d=>{if(zF(d,n)){d.preventDefault();let p=r!==void 0?r:X0(u)===X0(c);l(e,{replace:p,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,c,r,o,n,e,i,a,s])}function GF(e,t){t===void 0&&(t={});let n=w.useContext(WF);n==null&&Sn(!1);let{basename:r}=qF(Mm.useViewTransitionState),o=Cf(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=kc(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=kc(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Q0(o.pathname,a)!=null||Q0(o.pathname,i)!=null}function Nm(e,t){return Nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Nm(e,t)}function QF(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nm(e,t)}function JF(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function ZF(e,t){e.classList?e.classList.add(t):JF(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Z0(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ez(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Z0(e.className,t):e.setAttribute("class",Z0(e.className&&e.className.baseVal||"",t))}const ex={disabled:!1},bC=X.createContext(null);var tz=function(t){return t.scrollTop},Fa="unmounted",Pr="exited",pn="entering",ir="entered",Ls="exiting",yr=function(e){QF(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=Pr,i.appearStatus=pn):l=ir:r.unmountOnExit||r.mountOnEnter?l=Fa:l=Pr,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===Fa?{status:Pr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==pn&&a!==ir&&(i=pn):(a===pn||a===ir)&&(i=Ls)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===pn){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:yi.findDOMNode(this);a&&tz(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Pr&&this.setState({status:Fa})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[yi.findDOMNode(this),s],u=l[0],c=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!o&&!a||ex.disabled){this.safeSetState({status:ir},function(){i.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:pn},function(){i.props.onEntering(u,c),i.onTransitionEnd(p,function(){i.safeSetState({status:ir},function(){i.props.onEntered(u,c)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:yi.findDOMNode(this);if(!i||ex.disabled){this.safeSetState({status:Pr},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Ls},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:Pr},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:yi.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Fa)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=aC(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return X.createElement(bC.Provider,{value:null},typeof a=="function"?a(o,s):X.cloneElement(X.Children.only(a),s))},t}(X.Component);yr.contextType=bC;yr.propTypes={};function ni(){}yr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ni,onEntering:ni,onEntered:ni,onExit:ni,onExiting:ni,onExited:ni};yr.UNMOUNTED=Fa;yr.EXITED=Pr;yr.ENTERING=pn;yr.ENTERED=ir;yr.EXITING=Ls;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var yC=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Ec=yC.join(","),xC=typeof Element>"u",Uo=xC?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,jm=!xC&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},wC=function(t,n,r){var o=Array.prototype.slice.apply(t.querySelectorAll(Ec));return n&&Uo.call(t,Ec)&&o.unshift(t),o=o.filter(r),o},SC=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(a.tagName==="SLOT"){var s=a.assignedElements(),l=s.length?s:a.children,u=e(l,!0,r);r.flatten?o.push.apply(o,u):o.push({scope:a,candidates:u})}else{var c=Uo.call(a,Ec);c&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),p=!r.shadowRootFilter||r.shadowRootFilter(a);if(d&&p){var h=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scope:a,candidates:h})}else i.unshift.apply(i,a.children)}}return o},_C=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},nz=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},kC=function(t){return t.tagName==="INPUT"},rz=function(t){return kC(t)&&t.type==="hidden"},oz=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},iz=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},az=function(t){if(!t.name)return!0;var n=t.form||jm(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=iz(o,t.form);return!i||i===t},sz=function(t){return kC(t)&&t.type==="radio"},lz=function(t){return sz(t)&&!az(t)},tx=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},uz=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=Uo.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(Uo.call(a,"details:not([open]) *"))return!0;var s=jm(t).host,l=(s==null?void 0:s.ownerDocument.contains(s))||t.ownerDocument.contains(t);if(!r||r==="full"){if(typeof o=="function"){for(var u=t;t;){var c=t.parentElement,d=jm(t);if(c&&!c.shadowRoot&&o(c)===!0)return tx(t);t.assignedSlot?t=t.assignedSlot:!c&&d!==t.ownerDocument?t=d.host:t=c}t=u}if(l)return!t.getClientRects().length}else if(r==="non-zero-area")return tx(t);return!1},cz=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return Uo.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Cc=function(t,n){return!(n.disabled||rz(n)||uz(n,t)||oz(n)||cz(n))},Im=function(t,n){return!(lz(n)||_C(n)<0||!Cc(t,n))},fz=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},dz=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scope,s=a?o.scope:o,l=_C(s,a),u=a?e(o.candidates):s;l===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:l,item:o,isScope:a,content:u})}),r.sort(nz).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},OC=function(t,n){n=n||{};var r;return n.getShadowRoot?r=SC([t],n.includeContainer,{filter:Im.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:fz}):r=wC(t,n.includeContainer,Im.bind(null,n)),dz(r)},EC=function(t,n){n=n||{};var r;return n.getShadowRoot?r=SC([t],n.includeContainer,{filter:Cc.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=wC(t,n.includeContainer,Cc.bind(null,n)),r},za=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return Uo.call(t,Ec)===!1?!1:Im(n,t)},pz=yC.concat("iframe").join(","),$u=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return Uo.call(t,pz)===!1?!1:Cc(n,t)};const mz=Object.freeze(Object.defineProperty({__proto__:null,focusable:EC,isFocusable:$u,isTabbable:za,tabbable:OC},Symbol.toStringTag,{value:"Module"}));/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function rx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nx(Object(n),!0).forEach(function(r){hz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ox=function(){var e=[];return{activateTrap:function(n){if(e.length>0){var r=e[e.length-1];r!==n&&r.pause()}var o=e.indexOf(n);o===-1||e.splice(o,1),e.push(n)},deactivateTrap:function(n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}}}(),gz=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},vz=function(t){return t.key==="Escape"||t.key==="Esc"||t.keyCode===27},bz=function(t){return t.key==="Tab"||t.keyCode===9},ix=function(t){return setTimeout(t,0)},ax=function(t,n){var r=-1;return t.every(function(o,i){return n(o)?(r=i,!1):!0}),r},Oa=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},Kl=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},yz=function(t,n){var r=(n==null?void 0:n.document)||document,o=rx({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a,s=function(_,O,E){return _&&_[O]!==void 0?_[O]:o[E||O]},l=function(_){return i.containerGroups.findIndex(function(O){var E=O.container,R=O.tabbableNodes;return E.contains(_)||R.find(function(P){return P===_})})},u=function(_){var O=o[_];if(typeof O=="function"){for(var E=arguments.length,R=new Array(E>1?E-1:0),P=1;P<E;P++)R[P-1]=arguments[P];O=O.apply(void 0,R)}if(O===!0&&(O=void 0),!O){if(O===void 0||O===!1)return O;throw new Error("`".concat(_,"` was specified but was not a node, or did not return a node"))}var L=O;if(typeof O=="string"&&(L=r.querySelector(O),!L))throw new Error("`".concat(_,"` as selector refers to no known node"));return L},c=function(){var _=u("initialFocus");if(_===!1)return!1;if(_===void 0)if(l(r.activeElement)>=0)_=r.activeElement;else{var O=i.tabbableGroups[0],E=O&&O.firstTabbableNode;_=E||u("fallbackFocus")}if(!_)throw new Error("Your focus-trap needs to have at least one focusable element");return _},d=function(){if(i.containerGroups=i.containers.map(function(_){var O=OC(_,o.tabbableOptions),E=EC(_,o.tabbableOptions);return{container:_,tabbableNodes:O,focusableNodes:E,firstTabbableNode:O.length>0?O[0]:null,lastTabbableNode:O.length>0?O[O.length-1]:null,nextTabbableNode:function(P){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,I=E.findIndex(function(U){return U===P});if(!(I<0))return L?E.slice(I+1).find(function(U){return za(U,o.tabbableOptions)}):E.slice(0,I).reverse().find(function(U){return za(U,o.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(_){return _.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function k(_){if(_!==!1&&_!==r.activeElement){if(!_||!_.focus){k(c());return}_.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=_,gz(_)&&_.select()}},h=function(_){var O=u("setReturnFocus",_);return O||(O===!1?!1:_)},m=function(_){var O=Kl(_);if(!(l(O)>=0)){if(Oa(o.clickOutsideDeactivates,_)){a.deactivate({returnFocus:o.returnFocusOnDeactivate&&!$u(O,o.tabbableOptions)});return}Oa(o.allowOutsideClick,_)||_.preventDefault()}},v=function(_){var O=Kl(_),E=l(O)>=0;E||O instanceof Document?E&&(i.mostRecentlyFocusedNode=O):(_.stopImmediatePropagation(),p(i.mostRecentlyFocusedNode||c()))},b=function(_){var O=Kl(_);d();var E=null;if(i.tabbableGroups.length>0){var R=l(O),P=R>=0?i.containerGroups[R]:void 0;if(R<0)_.shiftKey?E=i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:E=i.tabbableGroups[0].firstTabbableNode;else if(_.shiftKey){var L=ax(i.tabbableGroups,function(J){var M=J.firstTabbableNode;return O===M});if(L<0&&(P.container===O||$u(O,o.tabbableOptions)&&!za(O,o.tabbableOptions)&&!P.nextTabbableNode(O,!1))&&(L=R),L>=0){var I=L===0?i.tabbableGroups.length-1:L-1,U=i.tabbableGroups[I];E=U.lastTabbableNode}}else{var Q=ax(i.tabbableGroups,function(J){var M=J.lastTabbableNode;return O===M});if(Q<0&&(P.container===O||$u(O,o.tabbableOptions)&&!za(O,o.tabbableOptions)&&!P.nextTabbableNode(O))&&(Q=R),Q>=0){var K=Q===i.tabbableGroups.length-1?0:Q+1,G=i.tabbableGroups[K];E=G.firstTabbableNode}}}else E=u("fallbackFocus");E&&(_.preventDefault(),p(E))},g=function(_){if(vz(_)&&Oa(o.escapeDeactivates,_)!==!1){_.preventDefault(),a.deactivate();return}if(bz(_)){b(_);return}},y=function(_){var O=Kl(_);l(O)>=0||Oa(o.clickOutsideDeactivates,_)||Oa(o.allowOutsideClick,_)||(_.preventDefault(),_.stopImmediatePropagation())},x=function(){if(i.active)return ox.activateTrap(a),i.delayInitialFocusTimer=o.delayInitialFocus?ix(function(){p(c())}):p(c()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",m,{capture:!0,passive:!1}),r.addEventListener("touchstart",m,{capture:!0,passive:!1}),r.addEventListener("click",y,{capture:!0,passive:!1}),r.addEventListener("keydown",g,{capture:!0,passive:!1}),a},S=function(){if(i.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",m,!0),r.removeEventListener("touchstart",m,!0),r.removeEventListener("click",y,!0),r.removeEventListener("keydown",g,!0),a};return a={get active(){return i.active},get paused(){return i.paused},activate:function(_){if(i.active)return this;var O=s(_,"onActivate"),E=s(_,"onPostActivate"),R=s(_,"checkCanFocusTrap");R||d(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,O&&O();var P=function(){R&&d(),x(),E&&E()};return R?(R(i.containers.concat()).then(P,P),this):(P(),this)},deactivate:function(_){if(!i.active)return this;var O=rx({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},_);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,S(),i.active=!1,i.paused=!1,ox.deactivateTrap(a);var E=s(O,"onDeactivate"),R=s(O,"onPostDeactivate"),P=s(O,"checkCanReturnFocus"),L=s(O,"returnFocus","returnFocusOnDeactivate");E&&E();var I=function(){ix(function(){L&&p(h(i.nodeFocusedBeforeActivation)),R&&R()})};return L&&P?(P(h(i.nodeFocusedBeforeActivation)).then(I,I),this):(I(),this)},pause:function(){return i.paused||!i.active?this:(i.paused=!0,S(),this)},unpause:function(){return!i.paused||!i.active?this:(i.paused=!1,d(),x(),this)},updateContainerElements:function(_){var O=[].concat(_).filter(Boolean);return i.containers=O.map(function(E){return typeof E=="string"?r.querySelector(E):E}),i.active&&d(),this}},a.updateContainerElements(t),a};const xz=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:yz},Symbol.toStringTag,{value:"Module"})),wz=BS(xz),Sz=BS(mz);function Dm(e){"@babel/helpers - typeof";return Dm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dm(e)}function _z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kz(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oz(e,t,n){return t&&kz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ez(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fm(e,t)}function Fm(e,t){return Fm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Fm(e,t)}function Cz(e){var t=Rz();return function(){var r=Tc(e),o;if(t){var i=Tc(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Tz(this,o)}}function Tz(e,t){if(t&&(Dm(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ba(e)}function Ba(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tc(e)}function Pz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ql=w,Az=Qc,ae=qo,$z=wz,Lz=$z.createFocusTrap,Mz=Sz,Nz=Mz.isFocusable,CC=function(e){Ez(n,e);var t=Cz(n);function n(r){var o;_z(this,n),o=t.call(this,r),Pz(Ba(o),"getNodeForOption",function(s){var l,u=(l=this.internalOptions[s])!==null&&l!==void 0?l:this.originalOptions[s];if(typeof u=="function"){for(var c=arguments.length,d=new Array(c>1?c-1:0),p=1;p<c;p++)d[p-1]=arguments[p];u=u.apply(void 0,d)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var h=u;if(typeof u=="string"){var m;if(h=(m=this.getDocument())===null||m===void 0?void 0:m.querySelector(u),!h)throw new Error("`".concat(s,"` as selector refers to no known node"))}return h}),o.handleDeactivate=o.handleDeactivate.bind(Ba(o)),o.handlePostDeactivate=o.handlePostDeactivate.bind(Ba(o)),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(Ba(o)),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a==="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return Oz(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||(o===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:o.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,i=function(){var s=o.getReturnFocusNode(),l=!!(o.originalOptions.returnFocusOnDeactivate&&s!==null&&s!==void 0&&s.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!Nz(o.outsideClick.target,o.internalOptions.tabbableOptions))),u=o.internalOptions.preventScroll,c=u===void 0?!1:u;l&&s.focus({preventScroll:c}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var o=this.focusTrapElements.map(Az.findDOMNode),i=o.some(Boolean);i&&(this.focusTrap=this.props._createFocusTrap(o,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!o.active&&this.props.active,a=o.active&&!this.props.active,s=!o.paused&&this.props.paused,l=o.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a){this.deactivateTrap();return}s&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,i=this.props.children?ql.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===ql.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(u){var c=o.props.containerElements;i&&(typeof i.ref=="function"?i.ref(u):i.ref&&(i.ref.current=u)),o.focusTrapElements=c||[u]},s=ql.cloneElement(i,{ref:a});return s}return null}}]),n}(ql.Component),Ea=typeof Element>"u"?Function:Element;CC.propTypes={active:ae.bool,paused:ae.bool,focusTrapOptions:ae.shape({document:ae.object,onActivate:ae.func,onPostActivate:ae.func,checkCanFocusTrap:ae.func,onDeactivate:ae.func,onPostDeactivate:ae.func,checkCanReturnFocus:ae.func,initialFocus:ae.oneOfType([ae.instanceOf(Ea),ae.string,ae.bool,ae.func]),fallbackFocus:ae.oneOfType([ae.instanceOf(Ea),ae.string,ae.func]),escapeDeactivates:ae.oneOfType([ae.bool,ae.func]),clickOutsideDeactivates:ae.oneOfType([ae.bool,ae.func]),returnFocusOnDeactivate:ae.bool,setReturnFocus:ae.oneOfType([ae.instanceOf(Ea),ae.string,ae.bool,ae.func]),allowOutsideClick:ae.oneOfType([ae.bool,ae.func]),preventScroll:ae.bool,tabbableOptions:ae.shape({displayCheck:ae.oneOf(["full","non-zero-area","none"]),getShadowRoot:ae.oneOfType([ae.bool,ae.func])})}),containerElements:ae.arrayOf(ae.instanceOf(Ea)),children:ae.oneOfType([ae.element,ae.instanceOf(Ea)])};CC.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:Lz};var zm=w,jz=qo,Iz=bO;function Gg(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var Dn=Gg(zm),Xe=Gg(jz),Id=Gg(Iz);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var In=function(){return In=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},In.apply(this,arguments)};function Bm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var Dz="range-slider",Fz=Dn.default.forwardRef(function(e,t){var n=e.classes,r=e.value,o=e.min,i=e.max,a=e.onChange,s=e.onMouseUpOrTouchEnd,l=e.onMouseUp,u=e.onTouchEnd,c=Bm(e,["classes","value","min","max","onChange","onMouseUpOrTouchEnd","onMouseUp","onTouchEnd"]);return Dn.default.createElement("input",In({ref:t,type:"range",value:r,min:o,max:i,onChange:function(d){return a(d,d.target.valueAsNumber)},onMouseUp:function(d){s(d),l&&l(d)},onTouchEnd:function(d){s(d),u&&u(d)},className:n,"aria-valuenow":Number(r),"aria-valuemin":Number(o),"aria-valuemax":Number(i)},c))}),zz=Dn.default.memo(Fz),TC=Dn.default.forwardRef(function(e,t){var n=e.value,r=e.onChange,o=r===void 0?function(){}:r,i=e.onAfterChange,a=i===void 0?function(){}:i,s=e.disabled,l=s===void 0?!1:s,u=e.size,c=e.min,d=c===void 0?0:c,p=e.max,h=p===void 0?100:p,m=e.step,v=e.variant,b=v===void 0?"primary":v,g=e.inputProps,y=g===void 0?{}:g,x=e.tooltip,S=x===void 0?"auto":x,k=e.tooltipPlacement,_=k===void 0?"bottom":k,O=e.tooltipLabel,E=e.tooltipStyle,R=E===void 0?{}:E,P=e.tooltipProps,L=P===void 0?{}:P,I=e.bsPrefix,U=e.className,Q=Bm(e,["value","onChange","onAfterChange","disabled","size","min","max","step","variant","inputProps","tooltip","tooltipPlacement","tooltipLabel","tooltipStyle","tooltipProps","bsPrefix","className"]),K=zm.useState(),G=K[0],J=K[1],M=I||Dz,V=S==="auto"||S==="on",W=Id.default(U,M,u&&M+"--"+u,l&&"disabled",b&&M+"--"+b),te=In(In({},y),Q),D=te.onMouseUp,B=te.onTouchEnd,j=Bm(te,["onMouseUp","onTouchEnd"]),F=zm.useCallback(function(ke){G!==ke.target.value&&a(ke,ke.target.valueAsNumber),J(ke.target.value)},[G,a]),T=Dn.default.createElement(zz,In({},In({disabled:l,value:n,min:d,max:h,ref:t,step:m,classes:W,onMouseUpOrTouchEnd:F,onTouchEnd:B,onMouseUp:D,onChange:o},j))),ie=Id.default(M+"__wrap",u&&M+"__wrap--"+u),H=Id.default(M+"__tooltip",V&&M+"__tooltip--"+S,_&&M+"__tooltip--"+_,l&&M+"__tooltip--disabled"),he=u==="sm"?8:u==="lg"?12:10,le=(Number(n)-d)/(h-d),ue=le*100,re=(le-.5)*2,_e=re*-he;return Dn.default.createElement("span",{className:ie},T,V&&Dn.default.createElement("div",In({className:H,style:In(In({},R||{}),{left:"calc("+ue+"% + "+_e+"px)"})},L),Dn.default.createElement("div",{className:M+"__tooltip__label"},O?O(Number(n)):n),Dn.default.createElement("div",{className:M+"__tooltip__caret"})))});TC.propTypes={value:Xe.default.oneOfType([Xe.default.number,Xe.default.string]).isRequired,onChange:Xe.default.func,onAfterChange:Xe.default.func,min:Xe.default.number,max:Xe.default.number,step:Xe.default.number,disabled:Xe.default.bool,size:Xe.default.oneOf(["sm","lg"]),variant:Xe.default.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),inputProps:Xe.default.object,tooltip:Xe.default.oneOf(["auto","on","off"]),tooltipPlacement:Xe.default.oneOf(["top","bottom"]),tooltipLabel:Xe.default.func,tooltipStyle:Xe.default.object,tooltipProps:Xe.default.object,className:Xe.default.string,bsPrefix:Xe.default.string};Dn.default.memo(TC);var He={},Qg={},Gs={},Qs={},RC="Expected a function",sx=NaN,Bz="[object Symbol]",Hz=/^\s+|\s+$/g,Uz=/^[-+]0x[0-9a-f]+$/i,Wz=/^0b[01]+$/i,Vz=/^0o[0-7]+$/i,Yz=parseInt,Kz=typeof cl=="object"&&cl&&cl.Object===Object&&cl,qz=typeof self=="object"&&self&&self.Object===Object&&self,Xz=Kz||qz||Function("return this")(),Gz=Object.prototype,Qz=Gz.toString,Jz=Math.max,Zz=Math.min,Dd=function(){return Xz.Date.now()};function e4(e,t,n){var r,o,i,a,s,l,u=0,c=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(RC);t=lx(t)||0,Rc(n)&&(c=!!n.leading,d="maxWait"in n,i=d?Jz(lx(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function h(_){var O=r,E=o;return r=o=void 0,u=_,a=e.apply(E,O),a}function m(_){return u=_,s=setTimeout(g,t),c?h(_):a}function v(_){var O=_-l,E=_-u,R=t-O;return d?Zz(R,i-E):R}function b(_){var O=_-l,E=_-u;return l===void 0||O>=t||O<0||d&&E>=i}function g(){var _=Dd();if(b(_))return y(_);s=setTimeout(g,v(_))}function y(_){return s=void 0,p&&r?h(_):(r=o=void 0,a)}function x(){s!==void 0&&clearTimeout(s),u=0,r=l=o=s=void 0}function S(){return s===void 0?a:y(Dd())}function k(){var _=Dd(),O=b(_);if(r=arguments,o=this,l=_,O){if(s===void 0)return m(l);if(d)return s=setTimeout(g,t),h(l)}return s===void 0&&(s=setTimeout(g,t)),a}return k.cancel=x,k.flush=S,k}function t4(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(RC);return Rc(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),e4(e,t,{leading:r,maxWait:t,trailing:o})}function Rc(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function n4(e){return!!e&&typeof e=="object"}function r4(e){return typeof e=="symbol"||n4(e)&&Qz.call(e)==Bz}function lx(e){if(typeof e=="number")return e;if(r4(e))return sx;if(Rc(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Rc(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Hz,"");var n=Wz.test(e);return n||Vz.test(e)?Yz(e.slice(2),n?2:8):Uz.test(e)?sx:+e}var o4=t4,Js={};Object.defineProperty(Js,"__esModule",{value:!0});Js.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Lu.has(n)||Lu.set(n,new Set);var i=Lu.get(n);if(!i.has(o)){var a=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();t.addEventListener(n,r,a?{passive:!0}:!1),i.add(o)}};Js.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Lu.get(n).delete(r.name||n)};var Lu=new Map;Object.defineProperty(Qs,"__esModule",{value:!0});var i4=o4,a4=s4(i4),ux=Js;function s4(e){return e&&e.__esModule?e:{default:e}}var l4=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,a4.default)(t,n)},je={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=l4(function(o){je.scrollHandler(t)},n);return je.scrollSpyContainers.push(t),(0,ux.addPassiveEventListener)(t,"scroll",r),function(){(0,ux.removePassiveEventListener)(t,"scroll",r),je.scrollSpyContainers.splice(je.scrollSpyContainers.indexOf(t),1)}}return function(){}},isMounted:function(t){return je.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.scrollY!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.scrollX!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=je.scrollSpyContainers[je.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(je.currentPositionX(t),je.currentPositionY(t))})},addStateHandler:function(t){je.spySetState.push(t)},addSpyHandler:function(t,n){var r=je.scrollSpyContainers[je.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t)},updateStates:function(){je.spySetState.forEach(function(t){return t()})},unmount:function(t,n){je.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),je.spySetState&&je.spySetState.length&&je.spySetState.indexOf(t)>-1&&je.spySetState.splice(je.spySetState.indexOf(t),1),document.removeEventListener("scroll",je.scrollHandler)},update:function(){return je.scrollSpyContainers.forEach(function(t){return je.scrollHandler(t)})}};Qs.default=je;var oa={},Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});var u4=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,a=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},c4=function(){return window.location.hash.replace(/^#/,"")},f4=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},d4=function(t){return getComputedStyle(t).position!=="static"},Fd=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},p4=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(d4(t)){if(n.offsetParent!==t){var o=function(c){return c===t||c===document},i=Fd(n,o),a=i.offsetTop,s=i.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(c){return c===document};return Fd(n,l).offsetTop-Fd(t,l).offsetTop};Zs.default={updateHash:u4,getHash:c4,filterElementInContainer:f4,scrollOffset:p4};var Tf={},Jg={};Object.defineProperty(Jg,"__esModule",{value:!0});Jg.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Zg={};Object.defineProperty(Zg,"__esModule",{value:!0});var m4=Js,h4=["mousedown","wheel","touchmove","keydown"];Zg.default={subscribe:function(t){return typeof document<"u"&&h4.forEach(function(n){return(0,m4.addPassiveEventListener)(document,n,t)})}};var el={};Object.defineProperty(el,"__esModule",{value:!0});var Hm={registered:{},scrollEvent:{register:function(t,n){Hm.registered[t]=n},remove:function(t){Hm.registered[t]=null}}};el.default=Hm;Object.defineProperty(Tf,"__esModule",{value:!0});var g4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v4=Zs;Rf(v4);var b4=Jg,cx=Rf(b4),y4=Zg,x4=Rf(y4),w4=el,Fn=Rf(w4);function Rf(e){return e&&e.__esModule?e:{default:e}}var PC=function(t){return cx.default[t.smooth]||cx.default.defaultEasing},S4=function(t){return typeof t=="function"?t:function(){return t}},_4=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Um=function(){return _4()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),AC=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},$C=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},LC=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},k4=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},O4=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},E4=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){Fn.default.registered.end&&Fn.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Um.call(window,i);return}Fn.default.registered.end&&Fn.default.registered.end(o.to,o.target,o.currentPosition)},ev=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},tl=function(t,n,r,o){n.data=n.data||AC(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(x4.default.subscribe(i),ev(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?$C(n):LC(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Fn.default.registered.end&&Fn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=S4(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var a=PC(n),s=E4.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Fn.default.registered.begin&&Fn.default.registered.begin(n.data.to,n.data.target),Um.call(window,s)},n.delay);return}Fn.default.registered.begin&&Fn.default.registered.begin(n.data.to,n.data.target),Um.call(window,s)},Pf=function(t){return t=g4({},t),t.data=t.data||AC(),t.absolute=!0,t},C4=function(t){tl(0,Pf(t))},T4=function(t,n){tl(t,Pf(n))},R4=function(t){t=Pf(t),ev(t),tl(t.horizontal?k4(t):O4(t),t)},P4=function(t,n){n=Pf(n),ev(n);var r=n.horizontal?$C(n):LC(n);tl(t+r,n)};Tf.default={animateTopScroll:tl,getAnimationType:PC,scrollToTop:C4,scrollToBottom:R4,scrollTo:T4,scrollMore:P4};Object.defineProperty(oa,"__esModule",{value:!0});var A4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$4=Zs,L4=tv($4),M4=Tf,N4=tv(M4),j4=el,Xl=tv(j4);function tv(e){return e&&e.__esModule?e:{default:e}}var Gl={},fx=void 0;oa.default={unmount:function(){Gl={}},register:function(t,n){Gl[t]=n},unregister:function(t){delete Gl[t]},get:function(t){return Gl[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return fx=t},getActiveLink:function(){return fx},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=A4({},n,{absolute:!1});var o=n.containerId,i=n.container,a=void 0;o?a=document.getElementById(o):i&&i.nodeType?a=i:a=document,n.absolute=!0;var s=n.horizontal,l=L4.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){Xl.default.registered.begin&&Xl.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Xl.default.registered.end&&Xl.default.registered.end(t,r);return}N4.default.animateTopScroll(l,n,t,r)}};var Af={};Object.defineProperty(Af,"__esModule",{value:!0});var I4=Zs,zd=D4(I4);function D4(e){return e&&e.__esModule?e:{default:e}}var F4={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return zd.default.getHash()},changeHash:function(t,n){this.isInitialized()&&zd.default.getHash()!==t&&zd.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Af.default=F4;Object.defineProperty(Gs,"__esModule",{value:!0});var Ql=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z4=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B4=w,dx=nl(B4),H4=Qs,Jl=nl(H4),U4=oa,W4=nl(U4),V4=qo,$e=nl(V4),Y4=Af,Or=nl(Y4);function nl(e){return e&&e.__esModule?e:{default:e}}function K4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q4(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function X4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var px={to:$e.default.string.isRequired,containerId:$e.default.string,container:$e.default.object,activeClass:$e.default.string,activeStyle:$e.default.object,spy:$e.default.bool,horizontal:$e.default.bool,smooth:$e.default.oneOfType([$e.default.bool,$e.default.string]),offset:$e.default.number,delay:$e.default.number,isDynamic:$e.default.bool,onClick:$e.default.func,duration:$e.default.oneOfType([$e.default.number,$e.default.func]),absolute:$e.default.bool,onSetActive:$e.default.func,onSetInactive:$e.default.func,ignoreCancelEvents:$e.default.bool,hashSpy:$e.default.bool,saveHashHistory:$e.default.bool,spyThrottle:$e.default.number};Gs.default=function(e,t){var n=t||W4.default,r=function(i){X4(a,i);function a(s){K4(this,a);var l=q4(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return z4(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!Jl.default.isMounted(l)){var u=Jl.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(u)}this.props.hashSpy&&(Or.default.isMounted()||Or.default.mount(n),Or.default.mapContainer(this.props.to,l)),Jl.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Jl.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=Ql({},this.props.style,this.props.activeStyle):u=Ql({},this.props.style);var c=Ql({},this.props);for(var d in px)c.hasOwnProperty(d)&&delete c[d];return c.className=l,c.style=u,c.onClick=this.handleClick,dx.default.createElement(e,c)}}]),a}(dx.default.PureComponent),o=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,Ql({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var u=a.getScrollSpyContainer();if(!(Or.default.isMounted()&&!Or.default.isInitialized())){var c=a.props.horizontal,d=a.props.to,p=null,h=void 0,m=void 0;if(c){var v=0,b=0,g=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();g=y.left}if(!p||a.props.isDynamic){if(p=n.get(d),!p)return;var x=p.getBoundingClientRect();v=x.left-g+s,b=v+x.width}var S=s-a.props.offset;h=S>=Math.floor(v)&&S<Math.floor(b),m=S<Math.floor(v)||S>=Math.floor(b)}else{var k=0,_=0,O=0;if(u.getBoundingClientRect){var E=u.getBoundingClientRect();O=E.top}if(!p||a.props.isDynamic){if(p=n.get(d),!p)return;var R=p.getBoundingClientRect();k=R.top-O+l,_=k+R.height}var P=l-a.props.offset;h=P>=Math.floor(k)&&P<Math.floor(_),m=P<Math.floor(k)||P>=Math.floor(_)}var L=n.getActiveLink();if(m){if(d===L&&n.setActiveLink(void 0),a.props.hashSpy&&Or.default.getHash()===d){var I=a.props.saveHashHistory,U=I===void 0?!1:I;Or.default.changeHash("",U)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(d,p))}if(h&&(L!==d||a.state.active===!1)){n.setActiveLink(d);var Q=a.props.saveHashHistory,K=Q===void 0?!1:Q;a.props.hashSpy&&Or.default.changeHash(d,K),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d,p))}}}};return r.propTypes=px,r.defaultProps={offset:0},r};Object.defineProperty(Qg,"__esModule",{value:!0});var G4=w,mx=MC(G4),Q4=Gs,J4=MC(Q4);function MC(e){return e&&e.__esModule?e:{default:e}}function Z4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function e6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var t6=function(e){e6(t,e);function t(){var n,r,o,i;Z4(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return i=(r=(o=hx(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.render=function(){return mx.default.createElement("a",o.props,o.props.children)},r),hx(o,i)}return t}(mx.default.Component);Qg.default=(0,J4.default)(t6);var nv={};Object.defineProperty(nv,"__esModule",{value:!0});var n6=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r6=w,gx=NC(r6),o6=Gs,i6=NC(o6);function NC(e){return e&&e.__esModule?e:{default:e}}function a6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s6(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function l6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u6=function(e){l6(t,e);function t(){return a6(this,t),s6(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n6(t,[{key:"render",value:function(){return gx.default.createElement("button",this.props,this.props.children)}}]),t}(gx.default.Component);nv.default=(0,i6.default)(u6);var rv={},$f={};Object.defineProperty($f,"__esModule",{value:!0});var c6=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f6=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d6=w,vx=Lf(d6),p6=Qc;Lf(p6);var m6=oa,bx=Lf(m6),h6=qo,yx=Lf(h6);function Lf(e){return e&&e.__esModule?e:{default:e}}function g6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v6(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function b6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}$f.default=function(e){var t=function(n){b6(r,n);function r(o){g6(this,r);var i=v6(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return f6(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;bx.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){bx.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return vx.default.createElement(e,c6({},this.props,{parentBindings:this.childBindings}))}}]),r}(vx.default.Component);return t.propTypes={name:yx.default.string,id:yx.default.string},t};Object.defineProperty(rv,"__esModule",{value:!0});var xx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y6=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x6=w,wx=ov(x6),w6=$f,S6=ov(w6),_6=qo,Sx=ov(_6);function ov(e){return e&&e.__esModule?e:{default:e}}function k6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O6(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function E6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var jC=function(e){E6(t,e);function t(){return k6(this,t),O6(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y6(t,[{key:"render",value:function(){var r=this,o=xx({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,wx.default.createElement("div",xx({},o,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(wx.default.Component);jC.propTypes={name:Sx.default.string,id:Sx.default.string};rv.default=(0,S6.default)(jC);var Bd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_x=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function kx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ox(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ex(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Zl=w,bo=Qs,Hd=oa,Ie=qo,Er=Af,Cx={to:Ie.string.isRequired,containerId:Ie.string,container:Ie.object,activeClass:Ie.string,spy:Ie.bool,smooth:Ie.oneOfType([Ie.bool,Ie.string]),offset:Ie.number,delay:Ie.number,isDynamic:Ie.bool,onClick:Ie.func,duration:Ie.oneOfType([Ie.number,Ie.func]),absolute:Ie.bool,onSetActive:Ie.func,onSetInactive:Ie.func,ignoreCancelEvents:Ie.bool,hashSpy:Ie.bool,spyThrottle:Ie.number},C6={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Hd,o=function(a){Ex(s,a);function s(l){kx(this,s);var u=Ox(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(u),u.state={active:!1},u}return _x(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();bo.isMounted(u)||bo.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Er.isMounted()||Er.mount(r),Er.mapContainer(this.props.to,u)),this.props.spy&&bo.addStateHandler(this.stateHandler),bo.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){bo.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=Bd({},this.props);for(var d in Cx)c.hasOwnProperty(d)&&delete c[d];return c.className=u,c.onClick=this.handleClick,Zl.createElement(t,c)}}]),s}(Zl.Component),i=function(){var s=this;this.scrollTo=function(l,u){r.scrollTo(l,Bd({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var u=s.getScrollSpyContainer();if(!(Er.isMounted()&&!Er.isInitialized())){var c=s.props.to,d=null,p=0,h=0,m=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();m=v.top}if(!d||s.props.isDynamic){if(d=r.get(c),!d)return;var b=d.getBoundingClientRect();p=b.top-m+l,h=p+b.height}var g=l-s.props.offset,y=g>=Math.floor(p)&&g<Math.floor(h),x=g<Math.floor(p)||g>=Math.floor(h),S=r.getActiveLink();if(x)return c===S&&r.setActiveLink(void 0),s.props.hashSpy&&Er.getHash()===c&&Er.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),bo.updateStates();if(y&&S!==c)return r.setActiveLink(c),s.props.hashSpy&&Er.changeHash(c),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(c)),bo.updateStates()}}};return o.propTypes=Cx,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Ex(o,r);function o(i){kx(this,o);var a=Ox(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a.childBindings={domNode:null},a}return _x(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Hd.unregister(this.props.name)}},{key:"registerElems",value:function(a){Hd.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Zl.createElement(t,Bd({},this.props,{parentBindings:this.childBindings}))}}]),o}(Zl.Component);return n.propTypes={name:Ie.string,id:Ie.string},n}},T6=C6;Object.defineProperty(He,"__esModule",{value:!0});He.Helpers=He.ScrollElement=He.ScrollLink=He.animateScroll=He.scrollSpy=He.Events=He.scroller=He.Element=He.Button=He.Link=void 0;var R6=Qg,IC=Kn(R6),P6=nv,DC=Kn(P6),A6=rv,FC=Kn(A6),$6=oa,zC=Kn($6),L6=el,BC=Kn(L6),M6=Qs,HC=Kn(M6),N6=Tf,UC=Kn(N6),j6=Gs,WC=Kn(j6),I6=$f,VC=Kn(I6),D6=T6,YC=Kn(D6);function Kn(e){return e&&e.__esModule?e:{default:e}}He.Link=IC.default;He.Button=DC.default;He.Element=FC.default;He.scroller=zC.default;He.Events=BC.default;He.scrollSpy=HC.default;He.animateScroll=UC.default;He.ScrollLink=WC.default;He.ScrollElement=VC.default;He.Helpers=YC.default;He.default={Link:IC.default,Button:DC.default,Element:FC.default,scroller:zC.default,Events:BC.default,scrollSpy:HC.default,animateScroll:UC.default,ScrollLink:WC.default,ScrollElement:VC.default,Helpers:YC.default};var Tx=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),F6=new Uint8Array(16);function z6(){if(!Tx)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Tx(F6)}var KC=[];for(var eu=0;eu<256;++eu)KC[eu]=(eu+256).toString(16).substr(1);function B6(e,t){var n=0,r=KC;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}function H6(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||z6)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t)for(var i=0;i<16;++i)t[r+i]=o[i];return t||B6(o)}function Rx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Wm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rx(Object(n),!0).forEach(function(r){is(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Px(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W6(e,t,n){return t&&Px(e.prototype,t),n&&Px(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function is(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pc(){return Pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pc.apply(this,arguments)}function V6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Vm(e,t)}function Ac(e){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ac(e)}function Vm(e,t){return Vm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Vm(e,t)}function Y6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K6(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q6(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K6(e)}function X6(e){var t=Y6();return function(){var r=Ac(e),o;if(t){var i=Ac(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return q6(this,o)}}function G6(e,t){if(e){if(typeof e=="string")return Ax(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ax(e,t)}}function Ax(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q6(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=G6(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}}}var $x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tu=function(e){return e&&e.Math==Math&&e},xr=tu(typeof globalThis=="object"&&globalThis)||tu(typeof window=="object"&&window)||tu(typeof self=="object"&&self)||tu(typeof $x=="object"&&$x)||function(){return this}()||Function("return this")(),iv={},wr=function(e){try{return!!e()}catch{return!0}},J6=wr,uo=!J6(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Z6=wr,av=!Z6(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),eB=av,nu=Function.prototype.call,sv=eB?nu.bind(nu):function(){return nu.apply(nu,arguments)},qC={},XC={}.propertyIsEnumerable,GC=Object.getOwnPropertyDescriptor,tB=GC&&!XC.call({1:2},1);qC.f=tB?function(t){var n=GC(this,t);return!!n&&n.enumerable}:XC;var QC=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},JC=av,ZC=Function.prototype,Ym=ZC.call,nB=JC&&ZC.bind.bind(Ym,Ym),eT=function(e){return JC?nB(e):function(){return Ym.apply(e,arguments)}},tT=eT,rB=tT({}.toString),oB=tT("".slice),Mf=function(e){return oB(rB(e),8,-1)},iB=Mf,aB=eT,qn=function(e){if(iB(e)==="Function")return aB(e)},sB=qn,lB=wr,uB=Mf,Ud=Object,cB=sB("".split),nT=lB(function(){return!Ud("z").propertyIsEnumerable(0)})?function(e){return uB(e)=="String"?cB(e,""):Ud(e)}:Ud,rT=function(e){return e==null},fB=rT,dB=TypeError,oT=function(e){if(fB(e))throw dB("Can't call method on "+e);return e},pB=nT,mB=oT,Nf=function(e){return pB(mB(e))},Km=typeof document=="object"&&document.all,hB=typeof Km>"u"&&Km!==void 0,iT={all:Km,IS_HTMLDDA:hB},aT=iT,gB=aT.all,an=aT.IS_HTMLDDA?function(e){return typeof e=="function"||e===gB}:function(e){return typeof e=="function"},Lx=an,sT=iT,vB=sT.all,rl=sT.IS_HTMLDDA?function(e){return typeof e=="object"?e!==null:Lx(e)||e===vB}:function(e){return typeof e=="object"?e!==null:Lx(e)},Wd=xr,bB=an,yB=function(e){return bB(e)?e:void 0},ol=function(e,t){return arguments.length<2?yB(Wd[e]):Wd[e]&&Wd[e][t]},xB=qn,wB=xB({}.isPrototypeOf),SB=ol,_B=SB("navigator","userAgent")||"",lT=xr,Vd=_B,Mx=lT.process,Nx=lT.Deno,jx=Mx&&Mx.versions||Nx&&Nx.version,Ix=jx&&jx.v8,mn,$c;Ix&&(mn=Ix.split("."),$c=mn[0]>0&&mn[0]<4?1:+(mn[0]+mn[1]));!$c&&Vd&&(mn=Vd.match(/Edge\/(\d+)/),(!mn||mn[1]>=74)&&(mn=Vd.match(/Chrome\/(\d+)/),mn&&($c=+mn[1])));var kB=$c,Dx=kB,OB=wr,uT=!!Object.getOwnPropertySymbols&&!OB(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Dx&&Dx<41}),EB=uT,cT=EB&&!Symbol.sham&&typeof Symbol.iterator=="symbol",CB=ol,TB=an,RB=wB,PB=cT,AB=Object,fT=PB?function(e){return typeof e=="symbol"}:function(e){var t=CB("Symbol");return TB(t)&&RB(t.prototype,AB(e))},$B=String,LB=function(e){try{return $B(e)}catch{return"Object"}},MB=an,NB=LB,jB=TypeError,dT=function(e){if(MB(e))return e;throw jB(NB(e)+" is not a function")},IB=dT,DB=rT,FB=function(e,t){var n=e[t];return DB(n)?void 0:IB(n)},Yd=sv,Kd=an,qd=rl,zB=TypeError,BB=function(e,t){var n,r;if(t==="string"&&Kd(n=e.toString)&&!qd(r=Yd(n,e))||Kd(n=e.valueOf)&&!qd(r=Yd(n,e))||t!=="string"&&Kd(n=e.toString)&&!qd(r=Yd(n,e)))return r;throw zB("Can't convert object to primitive value")},lv={exports:{}},Fx=xr,HB=Object.defineProperty,uv=function(e,t){try{HB(Fx,e,{value:t,configurable:!0,writable:!0})}catch{Fx[e]=t}return t},UB=xr,WB=uv,zx="__core-js_shared__",VB=UB[zx]||WB(zx,{}),cv=VB,Bx=cv;(lv.exports=function(e,t){return Bx[e]||(Bx[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var YB=oT,KB=Object,pT=function(e){return KB(YB(e))},qB=qn,XB=pT,GB=qB({}.hasOwnProperty),Go=Object.hasOwn||function(t,n){return GB(XB(t),n)},QB=qn,JB=0,ZB=Math.random(),e8=QB(1 .toString),mT=function(e){return"Symbol("+(e===void 0?"":e)+")_"+e8(++JB+ZB,36)},t8=xr,n8=lv.exports,Hx=Go,r8=mT,Ux=uT,hT=cT,ri=n8("wks"),Lo=t8.Symbol,Wx=Lo&&Lo.for,o8=hT?Lo:Lo&&Lo.withoutSetter||r8,il=function(e){if(!Hx(ri,e)||!(Ux||typeof ri[e]=="string")){var t="Symbol."+e;Ux&&Hx(Lo,e)?ri[e]=Lo[e]:hT&&Wx?ri[e]=Wx(t):ri[e]=o8(t)}return ri[e]},i8=sv,Vx=rl,Yx=fT,a8=FB,s8=BB,l8=il,u8=TypeError,c8=l8("toPrimitive"),f8=function(e,t){if(!Vx(e)||Yx(e))return e;var n=a8(e,c8),r;if(n){if(t===void 0&&(t="default"),r=i8(n,e,t),!Vx(r)||Yx(r))return r;throw u8("Can't convert object to primitive value")}return t===void 0&&(t="number"),s8(e,t)},d8=f8,p8=fT,gT=function(e){var t=d8(e,"string");return p8(t)?t:t+""},m8=xr,Kx=rl,qm=m8.document,h8=Kx(qm)&&Kx(qm.createElement),vT=function(e){return h8?qm.createElement(e):{}},g8=uo,v8=wr,b8=vT,bT=!g8&&!v8(function(){return Object.defineProperty(b8("div"),"a",{get:function(){return 7}}).a!=7}),y8=uo,x8=sv,w8=qC,S8=QC,_8=Nf,k8=gT,O8=Go,E8=bT,qx=Object.getOwnPropertyDescriptor;iv.f=y8?qx:function(t,n){if(t=_8(t),n=k8(n),E8)try{return qx(t,n)}catch{}if(O8(t,n))return S8(!x8(w8.f,t,n),t[n])};var ia={},C8=uo,T8=wr,yT=C8&&T8(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),R8=rl,P8=String,A8=TypeError,jf=function(e){if(R8(e))return e;throw A8(P8(e)+" is not an object")},$8=uo,L8=bT,M8=yT,ru=jf,Xx=gT,N8=TypeError,Xd=Object.defineProperty,j8=Object.getOwnPropertyDescriptor,Gd="enumerable",Qd="configurable",Jd="writable";ia.f=$8?M8?function(t,n,r){if(ru(t),n=Xx(n),ru(r),typeof t=="function"&&n==="prototype"&&"value"in r&&Jd in r&&!r[Jd]){var o=j8(t,n);o&&o[Jd]&&(t[n]=r.value,r={configurable:Qd in r?r[Qd]:o[Qd],enumerable:Gd in r?r[Gd]:o[Gd],writable:!1})}return Xd(t,n,r)}:Xd:function(t,n,r){if(ru(t),n=Xx(n),ru(r),L8)try{return Xd(t,n,r)}catch{}if("get"in r||"set"in r)throw N8("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var I8=uo,D8=ia,F8=QC,xT=I8?function(e,t,n){return D8.f(e,t,F8(1,n))}:function(e,t,n){return e[t]=n,e},wT={exports:{}},Xm=uo,z8=Go,ST=Function.prototype,B8=Xm&&Object.getOwnPropertyDescriptor,H8=z8(ST,"name"),U8=H8&&(!Xm||Xm&&B8(ST,"name").configurable),W8={CONFIGURABLE:U8},V8=qn,Y8=an,Gm=cv,K8=V8(Function.toString);Y8(Gm.inspectSource)||(Gm.inspectSource=function(e){return K8(e)});var _T=Gm.inspectSource,q8=xr,X8=an,Gx=q8.WeakMap,G8=X8(Gx)&&/native code/.test(String(Gx)),Q8=lv.exports,J8=mT,Qx=Q8("keys"),kT=function(e){return Qx[e]||(Qx[e]=J8(e))},fv={},Z8=G8,OT=xr,eH=xT,Zd=Go,ep=cv,tH=kT,nH=fv,Jx="Object already initialized",Zx=OT.TypeError,rH=OT.WeakMap,Qm,Lc,Jm,oH=function(e){return Jm(e)?Lc(e):Qm(e,{})};if(Z8||ep.state){var $n=ep.state||(ep.state=new rH);$n.get=$n.get,$n.has=$n.has,$n.set=$n.set,Qm=function(e,t){if($n.has(e))throw Zx(Jx);return t.facade=e,$n.set(e,t),t},Lc=function(e){return $n.get(e)||{}},Jm=function(e){return $n.has(e)}}else{var oi=tH("state");nH[oi]=!0,Qm=function(e,t){if(Zd(e,oi))throw Zx(Jx);return t.facade=e,eH(e,oi,t),t},Lc=function(e){return Zd(e,oi)?e[oi]:{}},Jm=function(e){return Zd(e,oi)}}var iH={get:Lc,enforce:oH},aH=wr,sH=an,ou=Go,Zm=uo,lH=W8.CONFIGURABLE,uH=_T,ET=iH,cH=ET.enforce,fH=ET.get,Mu=Object.defineProperty,dH=Zm&&!aH(function(){return Mu(function(){},"length",{value:8}).length!==8}),pH=String(String).split("String"),mH=wT.exports=function(e,t,n){String(t).slice(0,7)==="Symbol("&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!ou(e,"name")||lH&&e.name!==t)&&(Zm?Mu(e,"name",{value:t,configurable:!0}):e.name=t),dH&&n&&ou(n,"arity")&&e.length!==n.arity&&Mu(e,"length",{value:n.arity});try{n&&ou(n,"constructor")&&n.constructor?Zm&&Mu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch{}var r=cH(e);return ou(r,"source")||(r.source=pH.join(typeof t=="string"?t:"")),e};Function.prototype.toString=mH(function(){return sH(this)&&fH(this).source||uH(this)},"toString");var hH=an,gH=ia,vH=wT.exports,bH=uv,yH=function(e,t,n,r){r||(r={});var o=r.enumerable,i=r.name!==void 0?r.name:t;if(hH(n)&&vH(n,i,r),r.global)o?e[t]=n:bH(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch{}o?e[t]=n:gH.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},CT={},xH=Math.ceil,wH=Math.floor,SH=Math.trunc||function(t){var n=+t;return(n>0?wH:xH)(n)},_H=SH,TT=function(e){var t=+e;return t!==t||t===0?0:_H(t)},kH=TT,OH=Math.max,EH=Math.min,CH=function(e,t){var n=kH(e);return n<0?OH(n+t,0):EH(n,t)},TH=TT,RH=Math.min,PH=function(e){return e>0?RH(TH(e),9007199254740991):0},AH=PH,RT=function(e){return AH(e.length)},$H=Nf,LH=CH,MH=RT,NH=function(e){return function(t,n,r){var o=$H(t),i=MH(o),a=LH(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},jH={indexOf:NH(!1)},IH=qn,tp=Go,DH=Nf,FH=jH.indexOf,zH=fv,ew=IH([].push),PT=function(e,t){var n=DH(e),r=0,o=[],i;for(i in n)!tp(zH,i)&&tp(n,i)&&ew(o,i);for(;t.length>r;)tp(n,i=t[r++])&&(~FH(o,i)||ew(o,i));return o},dv=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],BH=PT,HH=dv,UH=HH.concat("length","prototype");CT.f=Object.getOwnPropertyNames||function(t){return BH(t,UH)};var AT={};AT.f=Object.getOwnPropertySymbols;var WH=ol,VH=qn,YH=CT,KH=AT,qH=jf,XH=VH([].concat),GH=WH("Reflect","ownKeys")||function(t){var n=YH.f(qH(t)),r=KH.f;return r?XH(n,r(t)):n},tw=Go,QH=GH,JH=iv,ZH=ia,e7=function(e,t,n){for(var r=QH(t),o=ZH.f,i=JH.f,a=0;a<r.length;a++){var s=r[a];!tw(e,s)&&!(n&&tw(n,s))&&o(e,s,i(t,s))}},t7=wr,n7=an,r7=/#|\.prototype\./,al=function(e,t){var n=i7[o7(e)];return n==s7?!0:n==a7?!1:n7(t)?t7(t):!!t},o7=al.normalize=function(e){return String(e).replace(r7,".").toLowerCase()},i7=al.data={},a7=al.NATIVE="N",s7=al.POLYFILL="P",l7=al,np=xr,u7=iv.f,c7=xT,f7=yH,d7=uv,p7=e7,m7=l7,h7=function(e,t){var n=e.target,r=e.global,o=e.stat,i,a,s,l,u,c;if(r?a=np:o?a=np[n]||d7(n,{}):a=(np[n]||{}).prototype,a)for(s in t){if(u=t[s],e.dontCallGetSet?(c=u7(a,s),l=c&&c.value):l=a[s],i=m7(r?s:n+(o?".":"#")+s,e.forced),!i&&l!==void 0){if(typeof u==typeof l)continue;p7(u,l)}(e.sham||l&&l.sham)&&c7(u,"sham",!0),f7(a,s,u,e)}},nw=qn,g7=dT,v7=av,b7=nw(nw.bind),y7=function(e,t){return g7(e),t===void 0?e:v7?b7(e,t):function(){return e.apply(t,arguments)}},x7=Mf,w7=Array.isArray||function(t){return x7(t)=="Array"},S7=il,_7=S7("toStringTag"),$T={};$T[_7]="z";var k7=String($T)==="[object z]",O7=k7,E7=an,Nu=Mf,C7=il,T7=C7("toStringTag"),R7=Object,P7=Nu(function(){return arguments}())=="Arguments",A7=function(e,t){try{return e[t]}catch{}},$7=O7?Nu:function(e){var t,n,r;return e===void 0?"Undefined":e===null?"Null":typeof(n=A7(t=R7(e),T7))=="string"?n:P7?Nu(t):(r=Nu(t))=="Object"&&E7(t.callee)?"Arguments":r},L7=qn,M7=wr,LT=an,N7=$7,j7=ol,I7=_T,MT=function(){},D7=[],NT=j7("Reflect","construct"),pv=/^\s*(?:class|function)\b/,F7=L7(pv.exec),z7=!pv.exec(MT),Ca=function(t){if(!LT(t))return!1;try{return NT(MT,D7,t),!0}catch{return!1}},jT=function(t){if(!LT(t))return!1;switch(N7(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return z7||!!F7(pv,I7(t))}catch{return!0}};jT.sham=!0;var B7=!NT||M7(function(){var e;return Ca(Ca.call)||!Ca(Object)||!Ca(function(){e=!0})||e})?jT:Ca,rw=w7,H7=B7,U7=rl,W7=il,V7=W7("species"),ow=Array,Y7=function(e){var t;return rw(e)&&(t=e.constructor,H7(t)&&(t===ow||rw(t.prototype))?t=void 0:U7(t)&&(t=t[V7],t===null&&(t=void 0))),t===void 0?ow:t},K7=Y7,q7=function(e,t){return new(K7(e))(t===0?0:t)},X7=y7,G7=qn,Q7=nT,J7=pT,Z7=RT,eU=q7,iw=G7([].push),tU=function(e){var t=e==1,n=e==2,r=e==3,o=e==4,i=e==6,a=e==7,s=e==5||i;return function(l,u,c,d){for(var p=J7(l),h=Q7(p),m=X7(u,c),v=Z7(h),b=0,g=d||eU,y=t?g(l,v):n||a?g(l,0):void 0,x,S;v>b;b++)if((s||b in h)&&(x=h[b],S=m(x,b,p),e))if(t)y[b]=S;else if(S)switch(e){case 3:return!0;case 5:return x;case 6:return b;case 2:iw(y,x)}else switch(e){case 4:return!1;case 7:iw(y,x)}return i?-1:r||o?o:y}},nU={find:tU(5)},IT={},rU=PT,oU=dv,iU=Object.keys||function(t){return rU(t,oU)},aU=uo,sU=yT,lU=ia,uU=jf,cU=Nf,fU=iU;IT.f=aU&&!sU?Object.defineProperties:function(t,n){uU(t);for(var r=cU(n),o=fU(n),i=o.length,a=0,s;i>a;)lU.f(t,s=o[a++],r[s]);return t};var dU=ol,pU=dU("document","documentElement"),mU=jf,hU=IT,aw=dv,gU=fv,vU=pU,bU=vT,yU=kT,sw=">",lw="<",eh="prototype",th="script",DT=yU("IE_PROTO"),rp=function(){},FT=function(e){return lw+th+sw+e+lw+"/"+th+sw},uw=function(e){e.write(FT("")),e.close();var t=e.parentWindow.Object;return e=null,t},xU=function(){var e=bU("iframe"),t="java"+th+":",n;return e.style.display="none",vU.appendChild(e),e.src=String(t),n=e.contentWindow.document,n.open(),n.write(FT("document.F=Object")),n.close(),n.F},iu,ju=function(){try{iu=new ActiveXObject("htmlfile")}catch{}ju=typeof document<"u"?document.domain&&iu?uw(iu):xU():uw(iu);for(var e=aw.length;e--;)delete ju[eh][aw[e]];return ju()};gU[DT]=!0;var wU=Object.create||function(t,n){var r;return t!==null?(rp[eh]=mU(t),r=new rp,rp[eh]=null,r[DT]=t):r=ju(),n===void 0?r:hU.f(r,n)},SU=il,_U=wU,kU=ia.f,nh=SU("unscopables"),rh=Array.prototype;rh[nh]==null&&kU(rh,nh,{configurable:!0,value:_U(null)});var OU=function(e){rh[nh][e]=!0},EU=h7,CU=nU.find,TU=OU,oh="find",zT=!0;oh in[]&&Array(1)[oh](function(){zT=!1});EU({target:"Array",proto:!0,forced:zT},{find:function(t){return CU(this,t,arguments.length>1?arguments[1]:void 0)}});TU(oh);var Yt={GLOBAL:{HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"}},op=function(t,n){var r;typeof window.CustomEvent=="function"?r=new window.CustomEvent(t,{detail:n}):(r=document.createEvent("Event"),r.initEvent(t,!1,!0,n)),window.dispatchEvent(r)};function RU(e){e.hide=function(t){op(Yt.GLOBAL.HIDE,{target:t})},e.rebuild=function(){op(Yt.GLOBAL.REBUILD)},e.show=function(t){op(Yt.GLOBAL.SHOW,{target:t})},e.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},e.prototype.globalShow=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.showTooltip({currentTarget:n&&t.detail.target},!0)}},e.prototype.globalHide=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.hideTooltip({currentTarget:n&&t.detail.target},n)}}}function PU(e){e.prototype.bindWindowEvents=function(t){window.removeEventListener(Yt.GLOBAL.HIDE,this.globalHide),window.addEventListener(Yt.GLOBAL.HIDE,this.globalHide,!1),window.removeEventListener(Yt.GLOBAL.REBUILD,this.globalRebuild),window.addEventListener(Yt.GLOBAL.REBUILD,this.globalRebuild,!1),window.removeEventListener(Yt.GLOBAL.SHOW,this.globalShow),window.addEventListener(Yt.GLOBAL.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},e.prototype.unbindWindowEvents=function(){window.removeEventListener(Yt.GLOBAL.HIDE,this.globalHide),window.removeEventListener(Yt.GLOBAL.REBUILD,this.globalRebuild),window.removeEventListener(Yt.GLOBAL.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},e.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}var BT=function(t,n){var r=this.state.show,o=this.props.id,i=this.isCapture(n.currentTarget),a=n.currentTarget.getAttribute("currentItem");i||n.stopPropagation(),r&&a==="true"?t||this.hideTooltip(n):(n.currentTarget.setAttribute("currentItem","true"),AU(n.currentTarget,this.getTargetArray(o)),this.showTooltip(n))},AU=function(t,n){for(var r=0;r<n.length;r++)t!==n[r]?n[r].setAttribute("currentItem","false"):n[r].setAttribute("currentItem","true")},ip={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,n,r){if(this.id in t){var o=t[this.id];o[n]=r}else Object.defineProperty(t,this.id,{configurable:!0,value:is({},n,r)})},get:function(t,n){var r=t[this.id];if(r!==void 0)return r[n]}};function $U(e){e.prototype.isCustomEvent=function(t){var n=this.state.event;return n||!!t.getAttribute("data-event")},e.prototype.customBindListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=t.getAttribute("data-event")||o,s=t.getAttribute("data-event-off")||i;a.split(" ").forEach(function(l){t.removeEventListener(l,ip.get(t,l));var u=BT.bind(n,s);ip.set(t,l,u),t.addEventListener(l,u,!1)}),s&&s.split(" ").forEach(function(l){t.removeEventListener(l,n.hideTooltip),t.addEventListener(l,n.hideTooltip,!1)})},e.prototype.customUnbindListener=function(t){var n=this.state,r=n.event,o=n.eventOff,i=r||t.getAttribute("data-event"),a=o||t.getAttribute("data-event-off");t.removeEventListener(i,ip.get(t,r)),a&&t.removeEventListener(a,this.hideTooltip)}}function LU(e){e.prototype.isCapture=function(t){return t&&t.getAttribute("data-iscapture")==="true"||this.props.isCapture||!1}}function MU(e){e.prototype.getEffect=function(t){var n=t.getAttribute("data-effect");return n||this.props.effect||"float"}}var NU=function(t){var n={};for(var r in t)typeof t[r]=="function"?n[r]=t[r].bind(t):n[r]=t[r];return n},Ta=function(t,n,r){for(var o=n.respectEffect,i=o===void 0?!1:o,a=n.customEvent,s=a===void 0?!1:a,l=this.props.id,u=null,c,d=r.target,p;u===null&&d!==null;)p=d,u=d.getAttribute("data-tip")||null,c=d.getAttribute("data-for")||null,d=d.parentElement;if(d=p||r.target,!(this.isCustomEvent(d)&&!s)){var h=l==null&&c==null||c===l;if(u!=null&&(!i||this.getEffect(d)==="float")&&h){var m=NU(r);m.currentTarget=d,t(m)}}},cw=function(t,n){var r={};return t.forEach(function(o){var i=o.getAttribute(n);i&&i.split(" ").forEach(function(a){return r[a]=!0})}),r},fw=function(){return document.getElementsByTagName("body")[0]};function jU(e){e.prototype.isBodyMode=function(){return!!this.props.bodyMode},e.prototype.bindBodyListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=r.possibleCustomEvents,s=r.possibleCustomEventsOff,l=fw(),u=cw(t,"data-event"),c=cw(t,"data-event-off");o!=null&&(u[o]=!0),i!=null&&(c[i]=!0),a.split(" ").forEach(function(v){return u[v]=!0}),s.split(" ").forEach(function(v){return c[v]=!0}),this.unbindBodyListener(l);var d=this.bodyModeListeners={};o==null&&(d.mouseover=Ta.bind(this,this.showTooltip,{}),d.mousemove=Ta.bind(this,this.updateTooltip,{respectEffect:!0}),d.mouseout=Ta.bind(this,this.hideTooltip,{}));for(var p in u)d[p]=Ta.bind(this,function(v){var b=v.currentTarget.getAttribute("data-event-off")||i;BT.call(n,b,v)},{customEvent:!0});for(var h in c)d[h]=Ta.bind(this,this.hideTooltip,{customEvent:!0});for(var m in d)l.addEventListener(m,d[m])},e.prototype.unbindBodyListener=function(t){t=t||fw();var n=this.bodyModeListeners;for(var r in n)t.removeEventListener(r,n[r])}}var IU=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver};function DU(e){e.prototype.bindRemovalTracker=function(){var t=this,n=IU();if(n!=null){var r=new n(function(o){for(var i=0;i<o.length;i++)for(var a=o[i],s=0;s<a.removedNodes.length;s++){var l=a.removedNodes[s];if(l===t.state.currentTarget){t.hideTooltip();return}}});r.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=r}},e.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)}}function dw(e,t,n,r,o,i,a){var s=ih(n),l=s.width,u=s.height,c=ih(t),d=c.width,p=c.height,h=FU(e,t,i),m=h.mouseX,v=h.mouseY,b=zU(i,d,p,l,u),g=BU(a),y=g.extraOffsetX,x=g.extraOffsetY,S=window.innerWidth,k=window.innerHeight,_=HU(n),O=_.parentTop,E=_.parentLeft,R=function(F){var T=b[F].l;return m+T+y},P=function(F){var T=b[F].r;return m+T+y},L=function(F){var T=b[F].t;return v+T+x},I=function(F){var T=b[F].b;return v+T+x},U=function(F){return R(F)<0},Q=function(F){return P(F)>S},K=function(F){return L(F)<0},G=function(F){return I(F)>k},J=function(F){return U(F)||Q(F)||K(F)||G(F)},M=function(F){return!J(F)},V={top:M("top"),bottom:M("bottom"),left:M("left"),right:M("right")};function W(){var j=o.split(",").concat(r,["top","bottom","left","right"]),F=Q6(j),T;try{for(F.s();!(T=F.n()).done;){var ie=T.value;if(V[ie])return ie}}catch(H){F.e(H)}finally{F.f()}return r}var te=W(),D=!1,B;return te&&te!==r&&(D=!0,B=te),D?{isNewState:!0,newState:{place:B}}:{isNewState:!1,position:{left:parseInt(R(r)-E,10),top:parseInt(L(r)-O,10)}}}var ih=function(t){var n=t.getBoundingClientRect(),r=n.height,o=n.width;return{height:parseInt(r,10),width:parseInt(o,10)}},FU=function(t,n,r){var o=n.getBoundingClientRect(),i=o.top,a=o.left,s=ih(n),l=s.width,u=s.height;return r==="float"?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:a+l/2,mouseY:i+u/2}},zU=function(t,n,r,o,i){var a,s,l,u,c=3,d=2,p=12;return t==="float"?(a={l:-(o/2),r:o/2,t:-(i+c+d),b:-3},l={l:-(o/2),r:o/2,t:c+p,b:i+c+d+p},u={l:-(o+c+d),r:-3,t:-(i/2),b:i/2},s={l:c,r:o+c+d,t:-(i/2),b:i/2}):t==="solid"&&(a={l:-(o/2),r:o/2,t:-(r/2+i+d),b:-(r/2)},l={l:-(o/2),r:o/2,t:r/2,b:r/2+i+d},u={l:-(o+n/2+d),r:-(n/2),t:-(i/2),b:i/2},s={l:n/2,r:o+n/2+d,t:-(i/2),b:i/2}),{top:a,bottom:l,left:u,right:s}},BU=function(t){var n=0,r=0;Object.prototype.toString.apply(t)==="[object String]"&&(t=JSON.parse(t.toString().replace(/'/g,'"')));for(var o in t)o==="top"?r-=parseInt(t[o],10):o==="bottom"?r+=parseInt(t[o],10):o==="left"?n-=parseInt(t[o],10):o==="right"&&(n+=parseInt(t[o],10));return{extraOffsetX:n,extraOffsetY:r}},HU=function(t){for(var n=t;n;){var r=window.getComputedStyle(n);if(r.getPropertyValue("transform")!=="none"||r.getPropertyValue("will-change")==="transform")break;n=n.parentElement}var o=n&&n.getBoundingClientRect().top||0,i=n&&n.getBoundingClientRect().left||0;return{parentTop:o,parentLeft:i}};function pw(e,t,n,r){if(t)return t;if(n!=null)return n;if(n===null)return null;var o=/<br\s*\/?>/;return!r||r==="false"||!o.test(e)?e:e.split(o).map(function(i,a){return X.createElement("span",{key:a,className:"multi-line"},i)})}function mw(e){var t={};return Object.keys(e).filter(function(n){return/(^aria-\w+$|^role$)/.test(n)}).forEach(function(n){t[n]=e[n]}),t}function ap(e){var t=e.length;return e.hasOwnProperty?Array.prototype.slice.call(e):new Array(t).fill().map(function(n){return e[n]})}function UU(){return"t"+H6()}var WU=`.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  bottom: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-bottom::before {
  top: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-left::before {
  right: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip.place-right::before {
  left: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}`,hw={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function VU(e){return hw[e]?Wm({},hw[e]):void 0}var YU="8px 21px",KU={tooltip:3,arrow:0};function qU(e,t,n,r,o,i){return XU(e,GU(t,n,r),o,i)}function XU(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:YU,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:KU,o=t.text,i=t.background,a=t.border,s=t.arrow,l=r.arrow,u=r.tooltip;return`
  	.`.concat(e,` {
	    color: `).concat(o,`;
	    background: `).concat(i,`;
	    border: 1px solid `).concat(a,`;
	    border-radius: `).concat(u,`px;
	    padding: `).concat(n,`;
  	}

  	.`).concat(e,`.place-top {
        margin-top: -10px;
    }
    .`).concat(e,`.place-top::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: 2;
        width: 20px;
        height: 12px;
    }
    .`).concat(e,`.place-top::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        bottom: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(135deg);
    }

    .`).concat(e,`.place-bottom {
        margin-top: 10px;
    }
    .`).concat(e,`.place-bottom::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 18px;
        height: 10px;
    }
    .`).concat(e,`.place-bottom::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        top: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-left {
        margin-left: -10px;
    }
    .`).concat(e,`.place-left::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-left::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        right: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-right {
        margin-left: 10px;
    }
    .`).concat(e,`.place-right::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-right::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        left: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(-135deg);
    }
  `)}function GU(e,t,n){var r=e.text,o=e.background,i=e.border,a=e.arrow?e.arrow:e.background,s=VU(t);return r&&(s.text=r),o&&(s.background=o),n&&(i?s.border=i:s.border=t==="light"?"black":"white"),a&&(s.arrow=a),s}var bt,Ra;RU(bt=PU(bt=$U(bt=LU(bt=MU(bt=jU(bt=DU(bt=(Ra=function(e){V6(n,e);var t=X6(n);function n(r){var o;return U6(this,n),o=t.call(this,r),o.state={uuid:r.uuid||UU(),place:r.place||"top",desiredPlace:r.place||"top",type:r.type||"dark",effect:r.effect||"float",show:!1,border:!1,borderClass:"border",customColors:{},customRadius:{},offset:{},padding:r.padding,extraClass:"",html:!1,delayHide:0,delayShow:0,event:r.event||null,eventOff:r.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:mw(r),isEmptyTip:!1,disable:!1,possibleCustomEvents:r.possibleCustomEvents||"",possibleCustomEventsOff:r.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},o.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),o.mount=!0,o.delayShowLoop=null,o.delayHideLoop=null,o.delayReshow=null,o.intervalUpdateContent=null,o}return W6(n,[{key:"bind",value:function(o){var i=this;o.forEach(function(a){i[a]=i[a].bind(i)})}},{key:"componentDidMount",value:function(){var o=this.props;o.insecure;var i=o.resizeHide,a=o.disableInternalStyle;this.mount=!0,this.bindListener(),this.bindWindowEvents(i),a||this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var o=this.tooltipRef;if(o){for(var i=o.parentNode;i.parentNode;)i=i.parentNode;var a;switch(i.constructor.name){case"Document":case"HTMLDocument":case void 0:a=i.head;break;case"ShadowRoot":default:a=i;break}if(!a.querySelector("style[data-react-tooltip]")){var s=document.createElement("style");s.textContent=WU,s.setAttribute("data-react-tooltip","true"),a.appendChild(s)}}}},{key:"mouseOnToolTip",value:function(){var o=this.state.show;return o&&this.tooltipRef?(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover")):!1}},{key:"getTargetArray",value:function(o){var i=[],a;if(!o)a="[data-tip]:not([data-for])";else{var s=o.replace(/\\/g,"\\\\").replace(/"/g,'\\"');a='[data-tip][data-for="'.concat(s,'"]')}return ap(document.getElementsByTagName("*")).filter(function(l){return l.shadowRoot}).forEach(function(l){i=i.concat(ap(l.shadowRoot.querySelectorAll(a)))}),i.concat(ap(document.querySelectorAll(a)))}},{key:"bindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff,l=i.isCapture,u=this.getTargetArray(a);u.forEach(function(c){c.getAttribute("currentItem")===null&&c.setAttribute("currentItem","false"),o.unbindBasicListener(c),o.isCustomEvent(c)&&o.customUnbindListener(c)}),this.isBodyMode()?this.bindBodyListener(u):u.forEach(function(c){var d=o.isCapture(c),p=o.getEffect(c);if(o.isCustomEvent(c)){o.customBindListener(c);return}c.addEventListener("mouseenter",o.showTooltip,d),c.addEventListener("focus",o.showTooltip,d),p==="float"&&c.addEventListener("mousemove",o.updateTooltip,d),c.addEventListener("mouseleave",o.hideTooltip,d),c.addEventListener("blur",o.hideTooltip,d)}),s&&(window.removeEventListener(s,this.hideTooltip),window.addEventListener(s,this.hideTooltip,l)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff;if(this.isBodyMode())this.unbindBodyListener();else{var l=this.getTargetArray(a);l.forEach(function(u){o.unbindBasicListener(u),o.isCustomEvent(u)&&o.customUnbindListener(u)})}s&&window.removeEventListener(s,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(o){var i=this.isCapture(o);o.removeEventListener("mouseenter",this.showTooltip,i),o.removeEventListener("mousemove",this.updateTooltip,i),o.removeEventListener("mouseleave",this.hideTooltip,i)}},{key:"getTooltipContent",value:function(){var o=this.props,i=o.getContent,a=o.children,s;return i&&(Array.isArray(i)?s=i[0]&&i[0](this.state.originTooltip):s=i(this.state.originTooltip)),pw(this.state.originTooltip,a,s,this.state.isMultiline)}},{key:"isEmptyTip",value:function(o){return typeof o=="string"&&o===""||o===null}},{key:"showTooltip",value:function(o,i){if(this.tooltipRef){if(i){var a=this.getTargetArray(this.props.id),s=a.some(function(E){return E===o.currentTarget});if(!s)return}var l=this.props,u=l.multiline,c=l.getContent,d=o.currentTarget.getAttribute("data-tip"),p=o.currentTarget.getAttribute("data-multiline")||u||!1,h=o instanceof window.FocusEvent||i,m=!0;o.currentTarget.getAttribute("data-scroll-hide")?m=o.currentTarget.getAttribute("data-scroll-hide")==="true":this.props.scrollHide!=null&&(m=this.props.scrollHide),o&&o.currentTarget&&o.currentTarget.setAttribute&&o.currentTarget.setAttribute("aria-describedby",this.props.id||this.state.uuid);var v=o.currentTarget.getAttribute("data-place")||this.props.place||"top",b=h&&"solid"||this.getEffect(o.currentTarget),g=o.currentTarget.getAttribute("data-offset")||this.props.offset||{},y=dw(o,o.currentTarget,this.tooltipRef,v.split(",")[0],v,b,g);y.position&&this.props.overridePosition&&(y.position=this.props.overridePosition(y.position,o,o.currentTarget,this.tooltipRef,v,v,b,g));var x=y.isNewState?y.newState.place:v.split(",")[0];this.clearTimer();var S=o.currentTarget,k=this.state.show?S.getAttribute("data-delay-update")||this.props.delayUpdate:0,_=this,O=function(){_.setState({originTooltip:d,isMultiline:p,desiredPlace:v,place:x,type:S.getAttribute("data-type")||_.props.type||"dark",customColors:{text:S.getAttribute("data-text-color")||_.props.textColor||null,background:S.getAttribute("data-background-color")||_.props.backgroundColor||null,border:S.getAttribute("data-border-color")||_.props.borderColor||null,arrow:S.getAttribute("data-arrow-color")||_.props.arrowColor||null},customRadius:{tooltip:S.getAttribute("data-tooltip-radius")||_.props.tooltipRadius||"3",arrow:S.getAttribute("data-arrow-radius")||_.props.arrowRadius||"0"},effect:b,offset:g,padding:S.getAttribute("data-padding")||_.props.padding,html:(S.getAttribute("data-html")?S.getAttribute("data-html")==="true":_.props.html)||!1,delayShow:S.getAttribute("data-delay-show")||_.props.delayShow||0,delayHide:S.getAttribute("data-delay-hide")||_.props.delayHide||0,delayUpdate:S.getAttribute("data-delay-update")||_.props.delayUpdate||0,border:(S.getAttribute("data-border")?S.getAttribute("data-border")==="true":_.props.border)||!1,borderClass:S.getAttribute("data-border-class")||_.props.borderClass||"border",extraClass:S.getAttribute("data-class")||_.props.class||_.props.className||"",disable:(S.getAttribute("data-tip-disable")?S.getAttribute("data-tip-disable")==="true":_.props.disable)||!1,currentTarget:S},function(){m&&_.addScrollListener(_.state.currentTarget),_.updateTooltip(o),c&&Array.isArray(c)&&(_.intervalUpdateContent=setInterval(function(){if(_.mount){var R=_.props.getContent,P=pw(d,"",R[0](),p),L=_.isEmptyTip(P);_.setState({isEmptyTip:L}),_.updatePosition()}},c[1]))})};k?this.delayReshow=setTimeout(O,k):O()}}},{key:"updateTooltip",value:function(o){var i=this,a=this.state,s=a.delayShow,l=a.disable,u=this.props,c=u.afterShow,d=u.disable,p=this.getTooltipContent(),h=o.currentTarget||o.target;if(!this.mouseOnToolTip()&&!(this.isEmptyTip(p)||l||d)){var m=this.state.show?0:parseInt(s,10),v=function(){if(Array.isArray(p)&&p.length>0||p){var g=!i.state.show;i.setState({currentEvent:o,currentTarget:h,show:!0},function(){i.updatePosition(function(){g&&c&&c(o)})})}};this.delayShowLoop&&clearTimeout(this.delayShowLoop),m?this.delayShowLoop=setTimeout(v,m):(this.delayShowLoop=null,v())}}},{key:"listenForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(o,i){var a=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isScroll:!1},l=this.state.disable,u=s.isScroll,c=u?0:this.state.delayHide,d=this.props,p=d.afterHide,h=d.disable,m=this.getTooltipContent();if(this.mount&&!(this.isEmptyTip(m)||l||h)){if(i){var v=this.getTargetArray(this.props.id),b=v.some(function(y){return y===o.currentTarget});if(!b||!this.state.show)return}o&&o.currentTarget&&o.currentTarget.removeAttribute&&o.currentTarget.removeAttribute("aria-describedby");var g=function(){var x=a.state.show;if(a.mouseOnToolTip()){a.listenForTooltipExit();return}a.removeListenerForTooltipExit(),a.setState({show:!1},function(){a.removeScrollListener(a.state.currentTarget),x&&p&&p(o)})};this.clearTimer(),c?this.delayHideLoop=setTimeout(g,parseInt(c,10)):g()}}},{key:"hideTooltipOnScroll",value:function(o,i){this.hideTooltip(o,i,{isScroll:!0})}},{key:"addScrollListener",value:function(o){var i=this.isCapture(o);window.addEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"removeScrollListener",value:function(o){var i=this.isCapture(o);window.removeEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"updatePosition",value:function(o){var i=this,a=this.state,s=a.currentEvent,l=a.currentTarget,u=a.place,c=a.desiredPlace,d=a.effect,p=a.offset,h=this.tooltipRef,m=dw(s,l,h,u,c,d,p);if(m.position&&this.props.overridePosition&&(m.position=this.props.overridePosition(m.position,s,l,h,u,c,d,p)),m.isNewState)return this.setState(m.newState,function(){i.updatePosition(o)});o&&typeof o=="function"&&o(),h.style.left=m.position.left+"px",h.style.top=m.position.top+"px"}},{key:"clearTimer",value:function(){this.delayShowLoop&&(clearTimeout(this.delayShowLoop),this.delayShowLoop=null),this.delayHideLoop&&(clearTimeout(this.delayHideLoop),this.delayHideLoop=null),this.delayReshow&&(clearTimeout(this.delayReshow),this.delayReshow=null),this.intervalUpdateContent&&(clearInterval(this.intervalUpdateContent),this.intervalUpdateContent=null)}},{key:"hasCustomColors",value:function(){var o=this;return!!(Object.keys(this.state.customColors).find(function(i){return i!=="border"&&o.state.customColors[i]})||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var o=this,i=this.state,a=i.extraClass,s=i.html,l=i.ariaProps,u=i.disable,c=i.uuid,d=this.getTooltipContent(),p=this.isEmptyTip(d),h=this.props.disableInternalStyle?"":qU(this.state.uuid,this.state.customColors,this.state.type,this.state.border,this.state.padding,this.state.customRadius),m="__react_component_tooltip"+" ".concat(this.state.uuid)+(this.state.show&&!u&&!p?" show":"")+(this.state.border?" "+this.state.borderClass:"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),v=this.props.wrapper;n.supportedWrappers.indexOf(v)<0&&(v=n.defaultProps.wrapper);var b=[m,a].filter(Boolean).join(" ");if(s){var g="".concat(d).concat(h?`
<style aria-hidden="true">`.concat(h,"</style>"):"");return X.createElement(v,Pc({className:"".concat(b),id:this.props.id||c,ref:function(x){return o.tooltipRef=x}},l,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:g}}))}else return X.createElement(v,Pc({className:"".concat(b),id:this.props.id||c},l,{ref:function(x){return o.tooltipRef=x},"data-id":"tooltip"}),h&&X.createElement("style",{dangerouslySetInnerHTML:{__html:h},"aria-hidden":"true"}),d)}}],[{key:"propTypes",get:function(){return{uuid:f.string,children:f.any,place:f.string,type:f.string,effect:f.string,offset:f.object,padding:f.string,multiline:f.bool,border:f.bool,borderClass:f.string,textColor:f.string,backgroundColor:f.string,borderColor:f.string,arrowColor:f.string,arrowRadius:f.string,tooltipRadius:f.string,insecure:f.bool,class:f.string,className:f.string,id:f.string,html:f.bool,delayHide:f.number,delayUpdate:f.number,delayShow:f.number,event:f.string,eventOff:f.string,isCapture:f.bool,globalEventOff:f.string,getContent:f.any,afterShow:f.func,afterHide:f.func,overridePosition:f.func,disable:f.bool,scrollHide:f.bool,resizeHide:f.bool,wrapper:f.string,bodyMode:f.bool,possibleCustomEvents:f.string,possibleCustomEventsOff:f.string,clickable:f.bool,disableInternalStyle:f.bool}}},{key:"getDerivedStateFromProps",value:function(o,i){var a=i.ariaProps,s=mw(o),l=Object.keys(s).some(function(u){return s[u]!==a[u]});return l?Wm(Wm({},i),{},{ariaProps:s}):null}}]),n}(X.Component),is(Ra,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),is(Ra,"supportedWrappers",["div","span"]),is(Ra,"displayName","ReactTooltip"),Ra))||bt)||bt)||bt)||bt)||bt)||bt);function ah(){return ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ah.apply(this,arguments)}function co(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function N(e,t){return t||(t=e.slice(0)),e.raw=t,e}var gw;Y.div(gw||(gw=N([""])));var A={white:"#FFFFFF",info:"#17A2B8",light:"#EEEEEE",primary:"#3b82f6",primary50:"#eff6ff",primary100:"#dbeafe",primary200:"#bfdbfe",primary300:"#93c5fd",primary400:"#60a5fa",primary500:"#3b82f6",primary600:"#2563eb",primary700:"#1d4ed8",primary800:"#1e40af",primary900:"#1e3a8a",secondary:"#6366f1",secondary50:"#eef2ff",secondary100:"#e0e7ff",secondary200:"#c7d2fe",secondary300:"#a5b4fc",secondary400:"#818cf8",secondary500:"#6366f1",secondary600:"#4f46e5",secondary700:"#4338ca",secondary800:"#3730a3",secondary900:"#312e81",danger:"#ef4444",danger50:"#fef2f2",danger100:"#fee2e2",danger200:"#fecaca",danger300:"#fca5a5",danger400:"#f87171",danger500:"#ef4444",danger600:"#dc2626",danger700:"#b91c1c",danger800:"#991b1b",danger900:"#7f1d1d",success:"#22c55e",success50:"#f0fdf4",success100:"#dcfce7",success200:"#bbf7d0",success300:"#86efac",success400:"#4ade80",success500:"#22c55e",success600:"#16a34a",success700:"#15803d",success800:"#166534",success900:"#14532d",warning:"#eab308",warning50:"#fefce8",warning100:"#fef9c3",warning200:"#fef08a",warning300:"#fde047",warning400:"#facc15",warning500:"#eab308",warning600:"#ca8a04",warning700:"#a16207",warning800:"#854d0e",warning900:"#713f12",brown:"#bfa094",brown50:"#fdf8f6",brown100:"#f2e8e5",brown200:"#eaddd7",brown300:"#e0cec7",brown400:"#d2bab0",brown500:"#bfa094",brown600:"#a18072",brown700:"#977669",brown800:"#846358",brown900:"#43302b",dark:"#111827",dark50:"#f9fafb",dark100:"#f3f4f6",dark200:"#e5e7eb",dark300:"#d1d5db",dark400:"#9ca3af",dark500:"#6b7280",dark600:"#4b5563",dark700:"#374151",dark800:"#1f2937",dark900:"#111827",primaryHover:"#276EF1BD",secondaryHover:"#7356BFBD",successHover:"#05944FBD",warningHover:"#FFE975BD",dangerHover:"#E11900BD",whiteHover:"#FFFFFFD5",darkHover:"#000000BD",infoHover:"#17A2B8BD",lightHover:"#EEEEEEBD"},Xn={colors:A,colorStyles:{primary:{color:A.white,borderColor:A.primary,backgroundColor:A.primary,"&:hover":{color:A.white,backgroundColor:A.primaryHover}},secondary:{color:A.white,borderColor:A.secondary,backgroundColor:A.secondary,"&:hover":{color:A.white,backgroundColor:A.secondaryHover}},light:{color:A.dark,borderColor:A.light,backgroundColor:A.light,"&:hover":{color:A.dark,backgroundColor:A.lightHover}},success:{color:A.white,borderColor:A.success,backgroundColor:A.success,"&:hover":{color:A.white,backgroundColor:A.successHover}},danger:{color:A.white,borderColor:A.danger,backgroundColor:A.danger,"&:hover":{color:A.white,backgroundColor:A.dangerHover}},warning:{color:A.dark,borderColor:A.warning,backgroundColor:A.warning,"&:hover":{color:A.dark,backgroundColor:A.warningHover}},dark:{color:A.white,borderColor:A.dark,backgroundColor:A.dark,"&:hover":{color:A.white,backgroundColor:A.darkHover}},white:{color:A.dark,borderColor:A.white,backgroundColor:A.white,"&:hover":{color:A.dark,backgroundColor:A.whiteHover}},info:{color:A.white,borderColor:A.info,backgroundColor:A.info,"&:hover":{color:A.white,backgroundColor:A.infoHover}}},buttonStyle:{primary:{color:A.white,borderColor:A.primary,backgroundColor:A.primary},secondary:{color:A.white,borderColor:A.secondary,backgroundColor:A.secondary},light:{color:A.dark,borderColor:A.light,backgroundColor:A.light},success:{color:A.white,borderColor:A.success,backgroundColor:A.success},danger:{color:A.white,borderColor:A.danger,backgroundColor:A.danger},warning:{color:A.dark,borderColor:A.warning,backgroundColor:A.warning},dark:{color:A.white,borderColor:A.dark,backgroundColor:A.dark},white:{color:A.dark,borderColor:A.white,backgroundColor:A.white},info:{color:A.white,borderColor:A.info,backgroundColor:A.info}},lightStyle:{primary:{color:A.primary,borderColor:A.primary,backgroundColor:"#E6E6FF"},secondary:{color:A.secondary,borderColor:A.secondary,backgroundColor:"#F0EDF8"},success:{color:A.success,borderColor:A.success,backgroundColor:"#E7FAE7"},danger:{color:A.danger,borderColor:A.danger,backgroundColor:"#FCE9E9"},warning:{color:A.dark,borderColor:A.warning,backgroundColor:"#FFFBE6"},dark:{color:A.white,borderColor:A.dark,backgroundColor:"#333333"},white:{color:A.dark,borderColor:A.dark,backgroundColor:"#F9F9F9"},light:{color:A.dark,borderColor:A.light,backgroundColor:A.light},info:{color:A.white,borderColor:A.info,backgroundColor:A.info}}};f.string,f.func,f.string,f.string,f.string,f.bool,f.string;var vw,bw;Y.div(vw||(vw=N([`
  width: 100%;
  `,`;
  .accordion-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #f4f4f4;
  }
  .accordion-list__item + .accordion-list__item {
    border-top: 1px solid #f4f4f4;
  }
  .accordion-item--opened .accordion-item__icon {
    transform: rotate(180deg);
  }
  .accordion-item--opened .accordion-item__inner {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }
  .accordion-item--opened .accordion-item__content {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }
  .accordion-item__line {
    display: block;
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
  }
  .accordion-item__title {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
    color: #121212;
  }
  .accordion-item__icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
    opacity: 0.6;
  }
  .accordion-item__inner {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
  }
  .accordion-item__content {
    opacity: 0;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0 1.2rem 1.2rem;
  }
  .accordion-item__paragraph {
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 300;
    line-height: 1.3;
  }
`])),function(e){return e.hideIcon?ne(bw||(bw=N([`
          .accordion-item__icon {
            display: none;
          }
        `]))):null});f.string,f.string,f.string,f.bool,f.string,f.arrayOf(f.any);var yw,xw;Y.div(yw||(yw=N([`
    `,`
    border-radius: 0px;
    align-items:center;
    justify-content:space-between;
    min-width:500px;
`])),Dt);Y.button(xw||(xw=N([`
	color:inherit;
	border:none;
	background-color:transparent;
    right: 0px;
    position: absolute;
    padding: 0px 1.2em;
	:focus { outline:none;	}
`])));f.string,f.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),f.func,f.func,f.string,f.bool;var ww,Sw;Y.div(ww||(ww=N([""])));Y.div(Sw||(Sw=N([`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  .animated.delay-1s {
    animation-delay: 1s;
  }
  .animated.delay-2s {
    animation-delay: 2s;
  }
  .animated.delay-3s {
    animation-delay: 3s;
  }
  .animated.delay-4s {
    animation-delay: 4s;
  }
  .animated.delay-5s {
    animation-delay: 5s;
  }
  .animated.fast {
    animation-duration: 800ms;
  }
  .animated.faster {
    animation-duration: 500ms;
  }
  .animated.slow {
    animation-duration: 2s;
  }
  .animated.slower {
    animation-duration: 3s;
  }
  @media (prefers-reduced-motion) {
    .animated {
      transition: none !important;
      animation: unset !important;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeft {
    animation-name: fadeInLeft;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRight {
    animation-name: fadeInRight;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  .fadeOutDown {
    animation-name: fadeOutDown;
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .fadeOutLeft {
    animation-name: fadeOutLeft;
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  .fadeOutRight {
    animation-name: fadeOutRight;
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  .fadeOutUp {
    animation-name: fadeOutUp;
  } /*!
 * animate.css -http://daneden.me/animate
 * Version - 3.7.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Daniel Eden
 */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    40%,
    43% {
      transform: translate3d(0, -30px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    70% {
      transform: translate3d(0, -15px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
  .bounce {
    transform-origin: center bottom;
    animation-name: bounce;
  }
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  .flash {
    animation-name: flash;
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    animation-name: pulse;
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .rubberBand {
    animation-name: rubberBand;
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }
  .shake {
    animation-name: shake;
  }
  @keyframes headShake {
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }
  }
  .headShake {
    animation-name: headShake;
    animation-timing-function: ease-in-out;
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  .swing {
    transform-origin: top center;
    animation-name: swing;
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .tada {
    animation-name: tada;
  }
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .wobble {
    animation-name: wobble;
  }
  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.39063deg) skewY(0.39063deg);
    }
    88.8% {
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
  }
  .jello {
    transform-origin: center;
    animation-name: jello;
  }
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
  .heartBeat {
    animation-name: heartBeat;
    animation-duration: 1.3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .bounceIn {
    animation-name: bounceIn;
    animation-duration: 0.75s;
  }
  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInDown {
    animation-name: bounceInDown;
  }
  @keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInLeft {
    animation-name: bounceInLeft;
  }
  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInRight {
    animation-name: bounceInRight;
  }
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInUp {
    animation-name: bounceInUp;
  }
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  .bounceOut {
    animation-name: bounceOut;
    animation-duration: 0.75s;
  }
  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .bounceOutDown {
    animation-name: bounceOutDown;
  }
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .bounceOutRight {
    animation-name: bounceOutRight;
  }
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .bounceOutUp {
    animation-name: bounceOutUp;
  }
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDownBig {
    animation-name: fadeInDownBig;
  }
  @keyframes fadeInLeftBig {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeftBig {
    animation-name: fadeInLeftBig;
  }
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRightBig {
    animation-name: fadeInRightBig;
  }
  @keyframes fadeInUpBig {
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUpBig {
    animation-name: fadeInUpBig;
  }
  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .fadeOutDownBig {
    animation-name: fadeOutDownBig;
  }
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .fadeOutLeftBig {
    animation-name: fadeOutLeftBig;
  }
  @keyframes fadeOutRightBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .fadeOutRightBig {
    animation-name: fadeOutRightBig;
  }
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .fadeOutUpBig {
    animation-name: fadeOutUpBig;
  }
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
        translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  .flip {
    backface-visibility: visible;
    animation-name: flip;
  }
  @keyframes flipInX {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInX {
    backface-visibility: visible;
    animation-name: flipInX;
  }
  @keyframes flipInY {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInY {
    backface-visibility: visible;
    animation-name: flipInY;
  }
  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    }
  }
  .flipOutX {
    animation-name: flipOutX;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    }
  }
  .flipOutY {
    animation-name: flipOutY;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes lightSpeedIn {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(-30deg);
    }
    60% {
      opacity: 1;
      transform: skewX(20deg);
    }
    80% {
      transform: skewX(-5deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .lightSpeedIn {
    animation-name: lightSpeedIn;
    animation-timing-function: ease-out;
  }
  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(30deg);
    }
  }
  .lightSpeedOut {
    animation-name: lightSpeedOut;
    animation-timing-function: ease-in;
  }
  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -200deg);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: center;
    }
  }
  .rotateIn {
    animation-name: rotateIn;
  }
  @keyframes rotateInDownLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInDownLeft {
    animation-name: rotateInDownLeft;
  }
  @keyframes rotateInDownRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInDownRight {
    animation-name: rotateInDownRight;
  }
  @keyframes rotateInUpLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInUpLeft {
    animation-name: rotateInUpLeft;
  }
  @keyframes rotateInUpRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -90deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInUpRight {
    animation-name: rotateInUpRight;
  }
  @keyframes rotateOut {
    from {
      opacity: 1;
      transform-origin: center;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 200deg);
      transform-origin: center;
    }
  }
  .rotateOut {
    animation-name: rotateOut;
  }
  @keyframes rotateOutDownLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutDownLeft {
    animation-name: rotateOutDownLeft;
  }
  @keyframes rotateOutDownRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutDownRight {
    animation-name: rotateOutDownRight;
  }
  @keyframes rotateOutUpLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutUpLeft {
    animation-name: rotateOutUpLeft;
  }
  @keyframes rotateOutUpRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 90deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutUpRight {
    animation-name: rotateOutUpRight;
  }
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40%,
    80% {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 700px, 0);
    }
  }
  .hinge {
    animation-name: hinge;
    animation-duration: 2s;
  }
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }
    50% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(3deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .jackInTheBox {
    animation-name: jackInTheBox;
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .rollIn {
    animation-name: rollIn;
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
  .rollOut {
    animation-name: rollOut;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  .zoomIn {
    animation-name: zoomIn;
  }
  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInDown {
    animation-name: zoomInDown;
  }
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInLeft {
    animation-name: zoomInLeft;
  }
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInRight {
    animation-name: zoomInRight;
  }
  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInUp {
    animation-name: zoomInUp;
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .zoomOut {
    animation-name: zoomOut;
  }
  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutDown {
    animation-name: zoomOutDown;
  }
  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
  }
  .zoomOutLeft {
    animation-name: zoomOutLeft;
  }
  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(2000px, 0, 0);
      transform-origin: right center;
    }
  }
  .zoomOutRight {
    animation-name: zoomOutRight;
  }
  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutUp {
    animation-name: zoomOutUp;
  }
  @keyframes slideInDown {
    from {
      visibility: visible;
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInDown {
    animation-name: slideInDown;
  }
  @keyframes slideInLeft {
    from {
      visibility: visible;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInLeft {
    animation-name: slideInLeft;
  }
  @keyframes slideInRight {
    from {
      visibility: visible;
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInRight {
    animation-name: slideInRight;
  }
  @keyframes slideInUp {
    from {
      visibility: visible;
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInUp {
    animation-name: slideInUp;
  }
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  .slideOutDown {
    animation-name: slideOutDown;
  }
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .slideOutLeft {
    animation-name: slideOutLeft;
  }
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  .slideOutRight {
    animation-name: slideOutRight;
  }
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  .slideOutUp {
    animation-name: slideOutUp;
  }
`])));f.oneOfType([f.arrayOf(f.node),f.node]),f.string,f.number,f.string,f.oneOfType([f.string,f.number]),f.bool,f.func,f.func,f.func,f.bool,f.node,f.oneOfType([f.func,f.string]),f.string,f.number;var _w;Y.span(_w||(_w=N([`
  display: flex;
  align-items: center;
  `,`
  `,`
  font-weight:200;
  box-shadow: `,`;

  `,`;
  `,`
  .icon {
    `,`
    i {
      `,`
      `,`
    }
  }
`])),Rs,Dt,function(e){return e.flat?null:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},vn({prop:"borderType",variants:{box:{borderRadius:"0px"},pill:{borderRadius:"20px"}}}),vn({prop:"size",variants:{large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6.25px 8.75px",fontSize:"0.85rem"},small:{padding:"4px 6px",fontSize:"0.625rem"}}}),vn({prop:"size",variants:{large:{fontSize:"1rem",marginRight:"12px"},medium:{fontSize:"0.85rem",marginRight:"10px"},small:{fontSize:"0.625rem !important",marginRight:"7.5px"}}}),Rs,vn({prop:"size",variants:{large:{fontSize:"1rem"},medium:{fontSize:"0.85rem"},small:{fontSize:"0.625rem !important"}}}));f.node,f.string,f.bool,f.string,f.string,f.string,f.string,f.oneOfType([f.oneOf([50,100,200,300,400,500,600,700,800,900]),f.string]);var kw;Y.div(kw||(kw=N([`
  `,`
  `,`
`])),Rs,qE);f.string,f.string,f.string,f.string,f.node,f.string,f.string,f.string,f.string,f.string,f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.oneOfType([f.number,f.string]),f.string;var Ow;Y.ol(Ow||(Ow=N([`
  `,`;
  font-weight: `,`;
  border-radius: `,`;
  text-transform: `,`;
`])),Dt,function(e){return e.bold?"bold":e.light?"light":null},function(e){return e.circle?"50%":"0"},function(e){return e.uppercase?"uppercase":"capitalize"});f.bool,f.node,f.string,f.bool,f.bool,f.node;var Ew,Cw,Tw,Rw,Pw,Aw,$w,Lw;Y.div(Ew||(Ew=N([`
  border: none;
  box-shadow: `,`;
  box-sizing: border-box;
  font-weight: 600;
  display:flex;
  justify-content:center;
  align-items:center;
  `,`}

    `,`
    
  `,`;

  `,`;

  `,`;

`])),function(e){return e.flat?"none":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},function(e){var t=e.bg;return t&&ne(Cw||(Cw=N([`
      background: `,`;
      color: #fff;
      &:hover {
        `,`;
    `])),A[""+t],function(n){var r=n.bg;return r&&ne(Tw||(Tw=N([`
            transform: scale(1.02);
            color: #fff;
          `])))})},Dt,vn({prop:"size",variants:{xl:{padding:"12px 18.75px",fontSize:"1rem"},large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6px 12px",fontSize:"0.85rem"},small:{padding:"3px 6px",fontSize:"0.625rem"}}}),function(e){return e.circle===!0?ne(Rw||(Rw=N([`
          border-radius: 30px;
        `]))):ne(Pw||(Pw=N([`
          border-radius: 4px;
        `])))},function(e){return e.outline===!0&&ne(Aw||(Aw=N([`
      background: transparent;
      `,`;
      border-width: 2px;
      &:hover {
        background: transparent;
        `,`;
      }
    `])),function(t){var n=t.bg;return n&&ne($w||($w=N([`
          border: 2px solid `,`;
          color: `,`;
        `])),A[""+n],Z(""+A[""+n]).darken(10))},function(t){var n=t.bg;return n&&ne(Lw||(Lw=N([`
            border: 2.4px solid `,`;
            transform: scale(1.02);
            color: `,`;
          `])),A[""+n],Z(""+A[""+n]).darken(10))})});f.bool,f.bool,f.bool,f.node,f.bool,f.string,f.string,f.bool,f.string,f.bool,f.any,f.func,f.string,f.string,f.string,f.string,f.string,f.string,f.bool;var Mw;Y.div(Mw||(Mw=N([`
  `,`
  
  .btn {
  	border-radius: 0px;
  }

`])),Dt);f.string,f.node,f.string,f.string,f.string,f.bool;f.string,f.node,f.string,f.string;var Nw,jw,Iw;Y.div(Nw||(Nw=N([`
  position: relative;
  background-color: #ffffff;
  `,`
`])),function(e){return e.border?ne(jw||(jw=N([`
          border-top: 8px solid #e2e2e2;
          border-bottom: 8px solid #e2e2e2;
        `]))):ne(Iw||(Iw=N([`
          border: 2px solid #e2e2e2;
        `])))});f.string,f.string,f.string,f.bool,f.node;var Dw;Y.div(Dw||(Dw=N([`
`])));f.bool,f.string,f.oneOfType([f.func,f.string]);f.string,f.string,f.bool,f.bool,f.bool,f.any,f.oneOfType([f.func,f.string]),f.bool;f.bool.isRequired,f.string,f.node,f.string,f.string,f.func;f.node,f.string;var Fw;Y.div(Fw||(Fw=N([`
  .carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &.carousel-fade .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block !important;
    opacity: 0;
    z-index: 0;
    transition: transform 0ms ease-in-out, opacity 0.8s ease-out;
  }

  &.carousel-fade .carousel-item.active {
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  &.carousel-multi-item .carousel-item {
    display: inline-block !important;
  }

  &.carousel .carousel-slide-item {
    transition: left 0.5s;
  }

  .carousel-control-prev,
  .carousel-control-next,
  .carousel-item-prev,
  .carousel-item-next {
    z-index: 2;
  }
`])));w.createContext({activeItem:null,length:null,slide:null});f.number,f.node,f.string,f.oneOfType([f.number,f.bool]),f.number,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.bool,f.bool;f.bool,f.node,f.string,f.oneOfType([f.func,f.string]);f.bool,f.node,f.string,f.any,f.oneOfType([f.func,f.string]);f.string,f.string,f.func;var zw;Y.div(zw||(zw=N([""])));f.bool,f.string,f.string,f.string,f.bool,f.string,f.string,f.oneOfType([f.func,f.string]),f.bool,f.string,f.string;f.node,f.string,f.oneOfType([f.number,f.shape({hide:f.number,show:f.number})]),f.string,f.oneOfType([f.string,f.bool]),f.bool,f.func,f.func;var Bw,QU=Y.div(Bw||(Bw=N([""]))),JU=["className","fluid","size","tag","children"],mv=function(t){var n=t.className,r=t.fluid,o=t.size,i=t.tag,a=t.children,s=co(t,JU),l=de(r?"container-fluid":o?"container-"+o:"container",n),u=X.createElement(ao,{theme:Xn},X.createElement(QU,Object.assign({as:i,"data-test":"container"},s,{className:l}),a));return u};mv.propTypes={className:f.string,fluid:f.bool,size:f.oneOf(["sm","md","lg","xl"]),tag:f.oneOfType([f.func,f.string])};mv.defaultProps={tag:"div",fluid:!1};f.bool.isRequired,f.string,f.arrayOf(f.object),f.func,f.bool,f.bool,f.bool,f.bool;var Hw,Uw,Ww;Y.div(Hw||(Hw=N([`
  table-layout: `,`;
  `,`;
`])),function(e){return e.autoWidth?"auto":null},function(e){return e.scrollY?ne(Uw||(Uw=N([`
          display: block;
          max-height: 200px;
          overflow-y: auto;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        `]))):null});Y.table(Ww||(Ww=N([""])));f.bool,f.bool,f.bool,f.bool,f.node,f.string,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.string;f.node,f.string,f.arrayOf(f.object),f.bool;f.node,f.string,f.arrayOf(f.object),f.bool;f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.func.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.node,f.arrayOf(f.object),f.bool,f.arrayOf(f.object);f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.func.isRequired,f.func.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.string.isRequired,f.bool.isRequired,f.number.isRequired,f.node,f.arrayOf(f.object),f.string,f.arrayOf(f.object),f.bool,f.bool;f.arrayOf(f.number).isRequired,f.oneOfType([f.string,f.number,f.object]).isRequired,f.func.isRequired,f.number.isRequired;f.bool.isRequired,f.number.isRequired,f.arrayOf(f.number).isRequired,f.func.isRequired,f.oneOfType([f.number,f.object,f.string]).isRequired,f.bool.isRequired,f.bool,f.bool,f.func;var Vw,Yw,Kw;Y.div(Vw||(Vw=N([`
  // icon container
  .icon {
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon + input:not([type='checkbox']):not([type='radio']),
  textarea {
    padding-left: 30px;
  }
  &.input-group label {
    top: 0;
    margin-bottom: 0;
  }
  &.input-group .input-group-text {
    background-color: #e0e0e0;
  }
  &.input-group .input-group-text.md-addon {
    font-weight: 500;
    background-color: transparent;
    border: none;
  }
  &.input-group .form-control {
    padding: 0.375rem 0.75rem;
    margin: 0;
  }
  & {
    position: relative;
  }
  & {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      border-radius: 4px;
      border: 1px solid #dadce0;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: none;
      padding: 4px 10px;
      min-height: 40px;
      width: 100%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
      &:focus {
        outline: none;
        &::placeholder {
          font-weight: 700 !important;
        }
      }
      &::placeholder {
        color: #757575;
        font-weight: 400;
        font-size: inherit;
        color: #757575;
        cursor: text;
        transition: color 0.2s ease-out;
      }
    }
    textarea {
      padding: 10px !important;
    }
  }
  &.size-lg {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 50px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.size-sm {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 30px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.checkbox,
  &.radio {
    margin: 0;
    height: 20px;
    width: 20px;
    &.size-lg {
      transform: scale(1.4);
    }
    &.size-sm {
      transform: scale(0.6);
    }
    position: relative;
    label {
      background-color: #fff;
      border: 1px solid #ccc;
      // border-radius: 4px;
      cursor: pointer;
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;
    }

    input[type='checkbox'],
    input[type='radio'] {
      width: 20px;
      height: 20px;
      visibility: hidden;
    }
    input[type='radio'] + label {
      border-radius: 50%;
    }
    input[type='checkbox'] + label:after {
      border: 2px solid `,`;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 2px;
      opacity: 0;
      position: absolute;
      top: 2px;
      transform: rotate(-45deg);
      width: 12px;
    }
    input[type='radio']:not(.browser) + label:after {
      border: 2px solid `,`;
      border-radius: 50%;
      content: '';
      height: 10px;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
    }

    input[type='checkbox']:not(.browser-default):checked + label,
    input[type='radio']:not(.browser-default):checked + label {
      background-color: `,`;
      border: 2px solid `,`;
    }
    input[type='checkbox']:not(.browser-default):checked + label:after,
    input[type='radio']:not(.browser-default):checked + label:after {
      opacity: 1;
    }
    &.input-color {
      &-primary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }

        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-secondary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-success {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-danger {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-warning {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-info {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-dark {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
    }
  }
  &.input-color-primary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-secondary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-success {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-danger {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
    input[type='checkbox']:not(.browser-default),
    input[type='radio']:not(.browser-default) {
      background: red;
    }
  }
  &.input-color-warning {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-info {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-dark {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  & label.active {
    font-weight: 700;
  }
  & .prefix {
    top: 0.25rem;
    font-size: 1.75rem;
  }
  & .prefix ~ input,
  & .prefix ~ textarea {
    width: calc(100% - 2.5rem);
    margin-left: 2.5rem;
  }
  & .prefix ~ label {
    margin-left: 2.5rem;
  }
  & .prefix ~ .form-text {
    margin-left: 2.6rem;
  }
  & .prefix {
    position: absolute;
    transition: color 0.2s;
  }
  & .prefix.active {
    color: #4285f4;
  }
  textarea {
    padding: 0;
    overflow-y: hidden;
  }

  & .form-control.is-valid,
  .was-validated & .form-control:valid {
    padding-right: 0;
  }
  .needs-validation & label {
    left: 0.3rem;
  }
  .custom-file-input:lang(es) ~ .custom-file-label::after {
    content: 'Elegir';
  }
  .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
    content: 'Wybierz';
  }
  .custom-file-input:lang(fr) ~ .custom-file-label::after {
    content: 'Choisir';
  }
  .custom-file-input:lang(in) ~ .custom-file-label::after {
    content: 'Pilih';
  }
  .custom-file-input:lang(zh) ~ .custom-file-label::after {
    content: '選擇';
  }
  .custom-file-input:lang(de) ~ .custom-file-label::after {
    content: 'Wählen';
  }
  .custom-file-input:lang(ru) ~ .custom-file-label::after {
    content: 'Выбрать';
  }
  & > label {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .input-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.2s;
    color: rgba(0, 0, 0, 0.87);
    pointer-events: none;
  }
  & .input-prefix.active {
    color: #4285f4;
  }
  &.input-with-pre-icon label {
    left: 36px;
    right: initial;
  }
  &.input-with-pre-icon .input-prefix {
    left: 16px;
    right: initial;
  }
  &.input-with-pre-icon .form-control {
    padding-left: 2.7rem !important;
  }
  &.input-with-post-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon .form-control {
    padding-right: 2.7rem !important;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix:first-of-type {
    left: 16px;
    right: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .form-control {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
`])),function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},A.primary,A.primary,A.primary100,A.primary,A.primary100,A.primary,A.primary,A.secondary100,A.secondary,A.secondary,A.success100,A.success,A.success,A.danger100,A.danger,A.danger,A.warning100,A.warning,A.warning,A.info,A.info,A.info,A.dark100,A.dark,A.dark,A.primary100,A.primary,A.primary,A.primary,A.secondary100,A.secondary,A.secondary,A.secondary,A.success100,A.success,A.success,A.success,A.danger100,A.danger,A.danger,A.danger,A.warning100,A.warning,A.warning,A.warning,A.info,A.info,A.info,A.info,A.dark100,A.dark,A.dark,A.dark);Y.textarea(Yw||(Yw=N([""])));Y.input(Kw||(Kw=N([""])));var qw,ZU=Y.i(qw||(qw=N([`
  padding: 0px 4px;
`]))),eW=["border","brand","className","fab","duotone","fal","fad","far","solid","fixed","fas","flip","icon","inverse","light","list","pull","pulse","regular","rotate","size","spin","stack"],hv=function(t){var n=t.border,r=t.brand,o=t.className,i=t.fab,a=t.duotone,s=t.fal,l=t.fad,u=t.far,c=t.solid,d=t.fixed,p=t.fas,h=t.flip,m=t.icon,v=t.inverse,b=t.light,g=t.list,y=t.pull,x=t.pulse,S=t.regular,k=t.rotate,_=t.size,O=t.spin,E=t.stack,R=co(t,eW),P=S||u?"far":c||p?"fas":b||s?"fal":a||l?"fad":r||i?"fab":"fa",L=de(P,g?"fa-li":!1,m?"fa-"+m:!1,_?"fa-"+_:!1,d?"fa-fw":!1,y?"fa-pull-"+y:!1,n?"fa-border":!1,O?"fa-spin":!1,x?"fa-pulse":!1,k?"fa-rotate-"+k:!1,h?"fa-flip-"+h:!1,v?"fa-inverse":!1,E?"fa-"+E:!1,o);return X.createElement(ao,{theme:Xn},X.createElement(ZU,Object.assign({"data-test":"fa"},R,{className:L})))};hv.propTypes={icon:f.string.isRequired,border:f.bool,brand:f.bool,className:f.string,fab:f.bool,fal:f.bool,far:f.bool,fixed:f.bool,flip:f.string,inverse:f.bool,light:f.bool,list:f.bool,pull:f.string,pulse:f.bool,regular:f.bool,rotate:f.string,size:f.string,spin:f.bool,stack:f.string};hv.defaultProps={border:!1,brand:!1,className:"",fab:!1,fal:!1,far:!1,fixed:!1,flip:"",inverse:!1,light:!1,list:!1,pull:"",pulse:!1,regular:!1,rotate:"",size:"",spin:!1,stack:"",duotone:!1,solid:!1,fad:!1,fas:!1};f.node,f.bool,f.string,f.string,f.bool,f.bool,f.number,f.func,f.string,f.string,f.bool,f.string,f.string,f.func,f.func,f.func,f.func,f.string,f.string,f.string,f.string,f.bool;Date.now().toString();f.bool,f.string,f.bool,f.func,f.string;f.func.isRequired,f.string.isRequired,f.bool.isRequired,f.bool,f.string,f.bool,f.any,f.string;f.number.isRequired,f.number.isRequired,f.array.isRequired,f.bool.isRequired,f.string.isRequired,f.array.isRequired,f.arrayOf(f.string);var Xw,Gw,Qw,Jw,Zw;Y.ul(Xw||(Xw=N([`
  padding: 15px;
  border: 0.75px solid #ccc;
  border-radius: 0;
  .page-link {
    `,`
    `,`
    border-radius: `,`;
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    `,`
    `,`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: `,`;
    font-size: `,`;
  }
`])),Dt,function(e){return e.sm?ne(Gw||(Gw=N([`
            min-width: 30px;
            min-height: 30px;
          `]))):ne(Qw||(Qw=N([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},Dt,function(e){return e.sm?ne(Jw||(Jw=N([`
            min-width: 30px;
            min-height: 30px;
          `]))):ne(Zw||(Zw=N([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},function(e){return e.size==="big"?"1.25rem":e.size==="small"?"0.75rem":"1rem"});f.node,f.bool,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","white","dark"]),f.string,f.oneOfType([f.func,f.string]),f.bool;var e1;Y.button(e1||(e1=N([`
  margin: 0px 7.5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`])));f.bool,f.node,f.string,f.bool,f.oneOfType([f.func,f.string]);var t1;Y.a(t1||(t1=N([`
  margin: 0px 7.5px;
  cursor: pointer;

	&.disabled {
		pointer-events:none;
		background:#ccc;
		color:#555;
	}
`])));f.node,f.bool,f.string,f.oneOfType([f.func,f.string]);f.number.isRequired,f.func.isRequired,f.arrayOf(f.string).isRequired,f.array.isRequired,f.number.isRequired,f.string,f.node;f.bool,f.bool,f.bool,f.bool,f.bool,f.node,f.string,f.bool,f.oneOfType([f.object,f.string]),f.bool,f.bool,f.number,f.oneOfType([f.string,f.number,f.object]),f.arrayOf(f.number),f.bool,f.string,f.bool,f.bool,f.bool,f.oneOfType([f.array,f.object,f.string]),f.bool,f.string,f.bool,f.string,f.func,f.func,f.func,f.arrayOf(f.string),f.number,f.arrayOf(f.string),f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.arrayOf(f.string),f.bool,f.string,f.bool,f.string,f.bool;var n1;Y.div(n1||(n1=N([`
  `,`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`])),Dt);w.createContext({isOpen:null});f.string,f.bool,f.bool,f.bool,f.bool,f.func,f.string;var r1,o1,i1,a1,s1,l1,u1,c1,f1,d1,p1,m1;Y.button(r1||(r1=N([`
  padding: 0.8rem 2rem;
  border: none;
  `,`
  `,`
  :hover, :focus {
    outline: none;
    border: none; 
  }
  `,`;
  `,`
`])),Dt,Rs,function(e){return e.circle===!0?ne(o1||(o1=N([`
          border-radius: 30px;
        `]))):ne(i1||(i1=N([`
          border-radius: 0px;
        `])))},vn({prop:"size",variants:{lg:{fontSize:"1.25rem",padding:"20px"},sm:{fontSize:"0.75rem",padding:"5px"}}}));Y.span(a1||(a1=N([`
  .pro-arrow-wrapper {
    position: relative;
    min-width: 10px;
    min-height: 10px;
    .pro-arrow {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      padding: 2.5px;
      vertical-align: middle;
      transition: transform 0.3s;

      `,`
      `,`
    }
  }
`])),function(e){return e.dropup?ne(s1||(s1=N([`
              transform: rotate(-135deg);
            `]))):e.dropleft?ne(l1||(l1=N([`
              transform: rotate(135deg);
            `]))):e.dropright?ne(u1||(u1=N([`
              transform: rotate(-45deg);
            `]))):ne(c1||(c1=N([`
              transform: rotate(45deg);
            `])))},function(e){return e.dropup?ne(f1||(f1=N([`
              margin-bottom: 0;
            `]))):e.dropleft?ne(d1||(d1=N([`
              margin-bottom: 0;
            `]))):e.dropright?ne(p1||(p1=N([`
              margin-bottom: 0;
            `]))):ne(m1||(m1=N([`
              margin-bottom: 5px;
            `])))});f.string,f.oneOf(["primary","secondary","success","danger","warning","info"]),f.bool,f.bool,f.bool,f.bool,f.bool,f.string,f.node,f.bool,f.string,f.bool,f.oneOfType([f.func,f.string]);var h1;Y("div")(h1||(h1=N([`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  background-color: #fff;
  border-radius: 0;
  color: #232323;
  padding: 0.3rem;
  `,`;
`])),function(e){return e.popperStyle});f.string,f.oneOf(["primary","secondary","success","danger","warning","info"]),f.func,f.func,f.string,f.bool,f.bool,f.bool,f.bool;var g1;Y.div(g1||(g1=N([`
  color: #000 !important;
`])));f.bool,f.node,f.string,f.bool,f.bool,f.bool,f.func,f.oneOfType([f.func,f.string]),f.bool;f.string,f.string,f.string;var v1;Y.div(v1||(v1=N([`
  position: relative;
  iframe,
  embed,
  object,
  video {
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
`])));f.string.isRequired,f.bool,f.string,f.number,f.string,f.string,f.func,f.func,f.func,f.string,f.string,f.object,f.string,f.number;var b1;Y.div(b1||(b1=N([`
      .input-flex-fill {
        flex-grow: 1
      }
      .input-background {
        background-color: #f4f4f4;
      }
      .md-form.input-group label {
        top: 0;
        margin-bottom: 0;
      }
      .md-form.input-group .input-group-text {
        background-color: #e0e0e0;
      }
      .md-form.input-group .input-group-text.md-addon {
        font-weight: 500;
        background-color: transparent;
        border: none;
      }
      .md-form.input-group .form-control {
        padding: 0.375rem 0.75rem;
        margin: 0;
      }
      .md-form {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form input:not([type]),
      .md-form input[type="text"]:not(.browser-default),
      .md-form input[type="password"]:not(.browser-default),
      .md-form input[type="email"]:not(.browser-default),
      .md-form input[type="url"]:not(.browser-default),
      .md-form input[type="time"]:not(.browser-default),
      .md-form input[type="date"]:not(.browser-default),
      .md-form input[type="datetime"]:not(.browser-default),
      .md-form input[type="datetime-local"]:not(.browser-default),
      .md-form input[type="tel"]:not(.browser-default),
      .md-form input[type="number"]:not(.browser-default),
      .md-form input[type="search"]:not(.browser-default),
      .md-form input[type="phone"]:not(.browser-default),
      .md-form input[type="search-md"],
      .md-form textarea.md-textarea {
        box-sizing: content-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        outline: none;
        box-shadow: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      .md-form input:not([type]):focus:not([readonly]),
      .md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="phone"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search-md"]:focus:not([readonly]),
      .md-form textarea.md-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #4285f4;
        box-shadow: 0 1px 0 0 #4285f4;
      }
      .md-form input:not([type]):focus:not([readonly]) + label,
      .md-form
        input[type="text"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="email"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="url"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="time"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="date"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="tel"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="number"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="search"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="phone"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form input[type="search-md"]:focus:not([readonly]) + label,
      .md-form textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form input:not([type]) + label::after,
      .md-form input[type="text"]:not(.browser-default) + label::after,
      .md-form input[type="password"]:not(.browser-default) + label::after,
      .md-form input[type="email"]:not(.browser-default) + label::after,
      .md-form input[type="url"]:not(.browser-default) + label::after,
      .md-form input[type="time"]:not(.browser-default) + label::after,
      .md-form input[type="date"]:not(.browser-default) + label::after,
      .md-form input[type="datetime"]:not(.browser-default) + label::after,
      .md-form
        input[type="datetime-local"]:not(.browser-default)
        + label::after,
      .md-form input[type="tel"]:not(.browser-default) + label::after,
      .md-form input[type="number"]:not(.browser-default) + label::after,
      .md-form input[type="search"]:not(.browser-default) + label::after,
      .md-form input[type="phone"]:not(.browser-default) + label::after,
      .md-form input[type="search-md"] + label::after,
      .md-form textarea.md-textarea + label::after {
        position: absolute;
        top: 65px;
        display: block;
        content: "";
        opacity: 0;
        transition: 0.2s opacity ease-out, 0.2s color ease-out;
      }
      .md-form input:not([type]).valid,
      .md-form input:not([type]):focus.valid,
      .md-form input[type="text"]:not(.browser-default).valid,
      .md-form input[type="text"]:not(.browser-default):focus.valid,
      .md-form input[type="password"]:not(.browser-default).valid,
      .md-form input[type="password"]:not(.browser-default):focus.valid,
      .md-form input[type="email"]:not(.browser-default).valid,
      .md-form input[type="email"]:not(.browser-default):focus.valid,
      .md-form input[type="url"]:not(.browser-default).valid,
      .md-form input[type="url"]:not(.browser-default):focus.valid,
      .md-form input[type="time"]:not(.browser-default).valid,
      .md-form input[type="time"]:not(.browser-default):focus.valid,
      .md-form input[type="date"]:not(.browser-default).valid,
      .md-form input[type="date"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime"]:not(.browser-default).valid,
      .md-form input[type="datetime"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime-local"]:not(.browser-default).valid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.valid,
      .md-form input[type="tel"]:not(.browser-default).valid,
      .md-form input[type="tel"]:not(.browser-default):focus.valid,
      .md-form input[type="number"]:not(.browser-default).valid,
      .md-form input[type="number"]:not(.browser-default):focus.valid,
      .md-form input[type="search"]:not(.browser-default).valid,
      .md-form input[type="search"]:not(.browser-default):focus.valid,
      .md-form input[type="phone"]:not(.browser-default).valid,
      .md-form input[type="phone"]:not(.browser-default):focus.valid,
      .md-form input[type="search-md"].valid,
      .md-form input[type="search-md"]:focus.valid,
      .md-form textarea.md-textarea.valid,
      .md-form textarea.md-textarea:focus.valid {
        border-bottom: 1px solid #00c851;
        box-shadow: 0 1px 0 0 #00c851;
      }
      .md-form input:not([type]).valid + label:after,
      .md-form input:not([type]):focus.valid + label:after,
      .md-form input[type="text"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="password"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="datetime"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search-md"].valid + label:after,
      .md-form input[type="search-md"]:focus.valid + label:after,
      .md-form textarea.md-textarea.valid + label:after,
      .md-form textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form input:not([type]).invalid,
      .md-form input:not([type]):focus.invalid,
      .md-form input[type="text"]:not(.browser-default).invalid,
      .md-form input[type="text"]:not(.browser-default):focus.invalid,
      .md-form input[type="password"]:not(.browser-default).invalid,
      .md-form input[type="password"]:not(.browser-default):focus.invalid,
      .md-form input[type="email"]:not(.browser-default).invalid,
      .md-form input[type="email"]:not(.browser-default):focus.invalid,
      .md-form input[type="url"]:not(.browser-default).invalid,
      .md-form input[type="url"]:not(.browser-default):focus.invalid,
      .md-form input[type="time"]:not(.browser-default).invalid,
      .md-form input[type="time"]:not(.browser-default):focus.invalid,
      .md-form input[type="date"]:not(.browser-default).invalid,
      .md-form input[type="date"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime"]:not(.browser-default).invalid,
      .md-form input[type="datetime"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime-local"]:not(.browser-default).invalid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.invalid,
      .md-form input[type="tel"]:not(.browser-default).invalid,
      .md-form input[type="tel"]:not(.browser-default):focus.invalid,
      .md-form input[type="number"]:not(.browser-default).invalid,
      .md-form input[type="number"]:not(.browser-default):focus.invalid,
      .md-form input[type="search"]:not(.browser-default).invalid,
      .md-form input[type="search"]:not(.browser-default):focus.invalid,
      .md-form input[type="phone"]:not(.browser-default).invalid,
      .md-form input[type="phone"]:not(.browser-default):focus.invalid,
      .md-form input[type="search-md"].invalid,
      .md-form input[type="search-md"]:focus.invalid,
      .md-form textarea.md-textarea.invalid,
      .md-form textarea.md-textarea:focus.invalid {
        border-bottom: 1px solid #f44336;
        box-shadow: 0 1px 0 0 #f44336;
      }
      .md-form input:not([type]).invalid + label:after,
      .md-form input:not([type]):focus.invalid + label:after,
      .md-form input[type="text"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search-md"].invalid + label:after,
      .md-form input[type="search-md"]:focus.invalid + label:after,
      .md-form textarea.md-textarea.invalid + label:after,
      .md-form textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form input:not([type]).form-control.valid + label:after,
      .md-form input:not([type]).form-control:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control.valid + label:after,
      .md-form input[type="search-md"].form-control:focus.valid + label:after,
      .md-form textarea.md-textarea.form-control.valid + label:after,
      .md-form textarea.md-textarea.form-control:focus.valid + label:after {
        top: 4.1rem;
      }
      .md-form input:not([type]).form-control.invalid + label:after,
      .md-form input:not([type]).form-control:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control.invalid + label:after,
      .md-form input[type="search-md"].form-control:focus.invalid + label:after,
      .md-form textarea.md-textarea.form-control.invalid + label:after,
      .md-form textarea.md-textarea.form-control:focus.invalid + label:after {
        top: 4rem;
      }
      .md-form input:not([type]).form-control-lg.valid + label:after,
      .md-form input:not([type]).form-control-lg:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.valid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.valid + label:after,
      .md-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-lg.invalid + label:after,
      .md-form input:not([type]).form-control-lg:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-lg:focus.invalid
        + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-sm.valid + label:after,
      .md-form input:not([type]).form-control-sm:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.valid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.valid + label:after,
      .md-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
        top: 3.7rem;
      }
      .md-form input:not([type]).form-control-sm.invalid + label:after,
      .md-form input:not([type]).form-control-sm:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-sm:focus.invalid
        + label:after {
        top: 3.6rem;
      }
      .md-form > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-27px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-25px);
        transform-origin: 0 0;
      }
      .md-form .was-validated input[type="text"]:valid + label {
        color: #00c851 !important;
      }
      .md-form .was-validated input[type="text"]:invalid + label {
        color: #f44336 !important;
      }
      .md-form .was-validated .form-control:valid:focus {
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .was-validated .form-control:valid {
        border-color: #00c851 !important;
      }
      .md-form .was-validated .form-control:invalid:focus {
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .was-validated .form-control:invalid {
        border-color: #f44336 !important;
      }
      .md-form .form-control {
        height: auto;
        padding: 0.6rem 0 0.4rem 0;
        margin: 0 0 0.5rem 0;
        background-color: transparent;
        border-radius: 0;
      }
      .md-form .form-control:focus {
        box-shadow: none;
      }
      .md-form .form-control:disabled,
      .md-form .form-control[readonly] {
        background-color: transparent;
        border-bottom: 1px solid #bdbdbd;
      }
      .md-form .form-control.is-valid {
        border-color: #00c851;
      }
      .md-form .form-control.is-valid:focus {
        border-color: #00c851 !important;
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .form-control.is-invalid {
        border-color: #f44336;
      }
      .md-form .form-control.is-invalid:focus {
        border-color: #f44336 !important;
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .form-control.is-valid,
      .md-form .form-control.is-invalid {
        background-position: center right !important;
      }
      .md-form .validate {
        margin-bottom: 2.5rem;
      }
      .md-form label {
        font-size: 1rem;
      }
      .md-form label.active {
        font-size: 1rem;
      }
      .md-form .prefix {
        top: 0.25rem;
        font-size: 1.75rem;
      }
      .md-form .prefix ~ input,
      .md-form .prefix ~ textarea {
        width: calc(100% - 2.5rem);
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ label {
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ .form-text {
        margin-left: 2.6rem;
      }
      .md-form label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(12px);
        transform-origin: 0% 100%;
      }
      .md-form label.active {
        transform: translateY(-14px) scale(0.8);
      }
      .md-form .prefix {
        position: absolute;
        transition: color 0.2s;
      }
      .md-form .prefix.active {
        color: #4285f4;
      }
      .md-form.form-lg .validate {
        margin-bottom: 2.8rem;
      }
      .md-form.form-lg label {
        font-size: 1.25rem;
      }
      .md-form.form-lg label.active {
        font-size: 1.15rem;
      }
      .md-form.form-lg .prefix {
        top: 0.4rem;
        font-size: 2rem;
      }
      .md-form.form-lg .prefix ~ input,
      .md-form.form-lg .prefix ~ textarea {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ label {
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ .form-text {
        margin-left: 3.1rem;
      }
      .md-form.form-sm .validate {
        margin-bottom: 2.3rem;
      }
      .md-form.form-sm label {
        font-size: 0.875rem;
      }
      .md-form.form-sm label.active {
        font-size: 0.95rem;
      }
      .md-form.form-sm .prefix {
        top: 0.35rem;
        font-size: 1.5rem;
      }
      .md-form.form-sm .prefix ~ input,
      .md-form.form-sm .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ .form-text {
        margin-left: 2rem;
      }
      .md-form textarea.md-textarea {
        padding: 0;
        overflow-y: hidden;
      }
      .md-form textarea.md-textarea + label {
        top: -0.6rem;
      }
      .md-form textarea.md-textarea-auto {
        padding: 0;
        padding-top: 1.5rem;
      }
      .md-form textarea.md-textarea-auto + label {
        top: 0;
      }
      .md-form.md-outline {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form.md-outline input[type="text"],
      .md-form.md-outline input[type="password"],
      .md-form.md-outline input[type="email"],
      .md-form.md-outline input[type="url"],
      .md-form.md-outline input[type="time"],
      .md-form.md-outline input[type="date"],
      .md-form.md-outline input[type="datetime-local"],
      .md-form.md-outline input[type="tel"],
      .md-form.md-outline input[type="number"],
      .md-form.md-outline input[type="search-md"],
      .md-form.md-outline input[type="search"],
      .md-form.md-outline textarea.md-textarea {
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #dadce0;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        transition: all 0.3s;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]),
      .md-form.md-outline input[type="password"]:focus:not([readonly]),
      .md-form.md-outline input[type="email"]:focus:not([readonly]),
      .md-form.md-outline input[type="url"]:focus:not([readonly]),
      .md-form.md-outline input[type="time"]:focus:not([readonly]),
      .md-form.md-outline input[type="date"]:focus:not([readonly]),
      .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-outline input[type="tel"]:focus:not([readonly]),
      .md-form.md-outline input[type="number"]:focus:not([readonly]),
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]),
      .md-form.md-outline input[type="search"]:focus:not([readonly]),
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
        border-color: #4285f4;
        box-shadow: inset 0 0 0 1px #4285f4;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="password"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="email"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="time"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="date"]:focus:not([readonly]) + label,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly])
        + label,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="number"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search"]:focus:not([readonly]) + label,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form.md-outline input[type="text"].valid,
      .md-form.md-outline input[type="text"]:focus.valid,
      .md-form.md-outline input[type="password"].valid,
      .md-form.md-outline input[type="password"]:focus.valid,
      .md-form.md-outline input[type="email"].valid,
      .md-form.md-outline input[type="email"]:focus.valid,
      .md-form.md-outline input[type="url"].valid,
      .md-form.md-outline input[type="url"]:focus.valid,
      .md-form.md-outline input[type="time"].valid,
      .md-form.md-outline input[type="time"]:focus.valid,
      .md-form.md-outline input[type="date"].valid,
      .md-form.md-outline input[type="date"]:focus.valid,
      .md-form.md-outline input[type="datetime-local"].valid,
      .md-form.md-outline input[type="datetime-local"]:focus.valid,
      .md-form.md-outline input[type="tel"].valid,
      .md-form.md-outline input[type="tel"]:focus.valid,
      .md-form.md-outline input[type="number"].valid,
      .md-form.md-outline input[type="number"]:focus.valid,
      .md-form.md-outline input[type="search-md"].valid,
      .md-form.md-outline input[type="search-md"]:focus.valid,
      .md-form.md-outline input[type="search"].valid,
      .md-form.md-outline input[type="search"]:focus.valid,
      .md-form.md-outline textarea.md-textarea.valid,
      .md-form.md-outline textarea.md-textarea:focus.valid {
        border-color: #00c851;
        box-shadow: inset 0 0 0 1px #00c851;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="text"].valid + label:after,
      .md-form.md-outline input[type="text"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="password"].valid + label:after,
      .md-form.md-outline input[type="password"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="email"].valid + label:after,
      .md-form.md-outline input[type="email"]:focus.valid + label:after,
      .md-form.md-outline input[type="url"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="url"].valid + label:after,
      .md-form.md-outline input[type="url"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="time"].valid + label:after,
      .md-form.md-outline input[type="time"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="date"].valid + label:after,
      .md-form.md-outline input[type="date"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="datetime-local"].valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="tel"].valid + label:after,
      .md-form.md-outline input[type="tel"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="number"].valid + label:after,
      .md-form.md-outline input[type="number"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search-md"].valid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search"].valid + label:after,
      .md-form.md-outline input[type="search"]:focus.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).valid
        + label,
      .md-form.md-outline textarea.md-textarea.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].invalid,
      .md-form.md-outline input[type="text"]:focus.invalid,
      .md-form.md-outline input[type="password"].invalid,
      .md-form.md-outline input[type="password"]:focus.invalid,
      .md-form.md-outline input[type="email"].invalid,
      .md-form.md-outline input[type="email"]:focus.invalid,
      .md-form.md-outline input[type="url"].invalid,
      .md-form.md-outline input[type="url"]:focus.invalid,
      .md-form.md-outline input[type="time"].invalid,
      .md-form.md-outline input[type="time"]:focus.invalid,
      .md-form.md-outline input[type="date"].invalid,
      .md-form.md-outline input[type="date"]:focus.invalid,
      .md-form.md-outline input[type="datetime-local"].invalid,
      .md-form.md-outline input[type="datetime-local"]:focus.invalid,
      .md-form.md-outline input[type="tel"].invalid,
      .md-form.md-outline input[type="tel"]:focus.invalid,
      .md-form.md-outline input[type="number"].invalid,
      .md-form.md-outline input[type="number"]:focus.invalid,
      .md-form.md-outline input[type="search-md"].invalid,
      .md-form.md-outline input[type="search-md"]:focus.invalid,
      .md-form.md-outline input[type="search"].invalid,
      .md-form.md-outline input[type="search"]:focus.invalid,
      .md-form.md-outline textarea.md-textarea.invalid,
      .md-form.md-outline textarea.md-textarea:focus.invalid {
        border-color: #f44336;
        box-shadow: inset 0 0 0 1px #f44336;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="text"].invalid + label:after,
      .md-form.md-outline input[type="text"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="password"].invalid + label:after,
      .md-form.md-outline input[type="password"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="email"].invalid + label:after,
      .md-form.md-outline input[type="email"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="url"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="url"].invalid + label:after,
      .md-form.md-outline input[type="url"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="time"].invalid + label:after,
      .md-form.md-outline input[type="time"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="date"].invalid + label:after,
      .md-form.md-outline input[type="date"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="datetime-local"].invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="tel"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="tel"].invalid + label:after,
      .md-form.md-outline input[type="tel"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="number"].invalid + label:after,
      .md-form.md-outline input[type="number"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search-md"].invalid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search"].invalid + label:after,
      .md-form.md-outline input[type="search"]:focus.invalid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline textarea.md-textarea.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="email"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="number"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="search"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.valid
        + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.valid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline input[type="text"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.invalid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-outline > input[type="time"]:not(.browser-default) + label {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-size: 1rem;
        font-weight: 500;
        background: #fff;
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label.active,
      .md-form.md-outline
        > input[type="time"]:not(.browser-default)
        + label.active {
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      @-webkit-keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      @keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      .md-form.md-outline input:-webkit-autofill {
        -webkit-animation-name: autofill;
        animation-name: autofill;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .md-form.md-outline .form-control {
        padding: 0.375rem 0.75rem;
      }
      .md-form.md-outline label {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 10px;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(9px);
        transform-origin: 0% 100%;
      }
      .md-form.md-outline label.active {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-weight: 500;
        background: #fff;
        transform: translateY(-13px) scale(0.8);
      }
      .md-form.md-outline.form-lg .form-control.form-control-lg {
        padding: 0.5rem 0.725rem;
      }
      .md-form.md-outline.form-lg label {
        font-size: 1.25rem;
        transform: translateY(10px);
      }
      .md-form.md-outline.form-lg label.active {
        font-size: 1.1rem;
        transform: translateY(-14px) scale(0.8);
      }
      .md-form.md-outline.form-lg .prefix {
        top: 0.65rem;
        font-size: 25px;
      }
      .md-form.md-outline.form-lg .prefix ~ input,
      .md-form.md-outline.form-lg .prefix ~ textarea {
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ label {
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ .form-text {
        margin-left: 2.3rem;
      }
      .md-form.md-outline.form-sm .form-control.form-control-sm {
        padding: 0.25rem 0.625rem;
      }
      .md-form.md-outline.form-sm label {
        font-size: 0.8rem;
        transform: translateY(8px);
      }
      .md-form.md-outline.form-sm label.active {
        font-size: 0.85rem;
        transform: translateY(-12px) scale(0.8);
      }
      .md-form.md-outline.form-sm .prefix {
        top: 0.5rem;
        font-size: 15px;
      }
      .md-form.md-outline.form-sm .prefix ~ input,
      .md-form.md-outline.form-sm .prefix ~ textarea {
        width: calc(100% - 1.6rem);
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ label {
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ .form-text {
        margin-left: 1.7rem;
      }
      .md-form.md-outline .prefix {
        position: absolute;
        top: 0.6rem;
        font-size: 20px;
        transition: color 0.2s;
      }
      .md-form.md-outline .prefix:focus {
        color: #4285f4;
      }
      .md-form.md-outline .prefix ~ input,
      .md-form.md-outline .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ .form-text {
        margin-left: 2.1rem;
      }
      .md-form.md-outline .character-counter {
        margin-top: -0.5rem;
      }
      .md-form.md-bg input[type="text"],
      .md-form.md-bg input[type="password"],
      .md-form.md-bg input[type="email"],
      .md-form.md-bg input[type="url"],
      .md-form.md-bg input[type="time"],
      .md-form.md-bg input[type="date"],
      .md-form.md-bg input[type="datetime-local"],
      .md-form.md-bg input[type="tel"],
      .md-form.md-bg input[type="number"],
      .md-form.md-bg input[type="search-md"],
      .md-form.md-bg input[type="search"],
      .md-form.md-bg textarea.md-textarea {
        box-sizing: border-box;
        padding: 10px 5px;
        background: #f5f5f5 no-repeat;
        background-image: linear-gradient(to bottom, #4285f4, #4285f4),
          linear-gradient(to bottom, #ced4da, #ced4da);
        background-position: 50% 100%, 50% 100%;
        background-size: 0 2px, 100% 1px;
        border: 0;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      }
      .md-form.md-bg input[type="text"]:focus:not([readonly]),
      .md-form.md-bg input[type="password"]:focus:not([readonly]),
      .md-form.md-bg input[type="email"]:focus:not([readonly]),
      .md-form.md-bg input[type="url"]:focus:not([readonly]),
      .md-form.md-bg input[type="time"]:focus:not([readonly]),
      .md-form.md-bg input[type="date"]:focus:not([readonly]),
      .md-form.md-bg input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-bg input[type="tel"]:focus:not([readonly]),
      .md-form.md-bg input[type="number"]:focus:not([readonly]),
      .md-form.md-bg input[type="search-md"]:focus:not([readonly]),
      .md-form.md-bg input[type="search"]:focus:not([readonly]),
      .md-form.md-bg textarea.md-textarea:focus:not([readonly]) {
        border-bottom: none;
        box-shadow: none;
      }
      .md-form.md-bg input[type="text"]:focus,
      .md-form.md-bg input[type="password"]:focus,
      .md-form.md-bg input[type="email"]:focus,
      .md-form.md-bg input[type="url"]:focus,
      .md-form.md-bg input[type="time"]:focus,
      .md-form.md-bg input[type="date"]:focus,
      .md-form.md-bg input[type="datetime-local"]:focus,
      .md-form.md-bg input[type="tel"]:focus,
      .md-form.md-bg input[type="number"]:focus,
      .md-form.md-bg input[type="search-md"]:focus,
      .md-form.md-bg input[type="search"]:focus,
      .md-form.md-bg textarea.md-textarea:focus {
        background-color: #dcdcdc;
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
      .md-form.md-bg > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-12px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-bg
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-bg > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-12px);
        transform-origin: 0 0;
      }
      .md-form.md-bg .form-control {
        padding: 1.1rem 0.7rem 0.4rem !important;
      }
      .md-form.md-bg label {
        top: 0;
        padding-left: 0.7rem;
        font-size: 1rem;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(13px);
        transform-origin: 0% 100%;
      }
      .md-form.md-bg label.active {
        padding-left: 0.75rem;
        font-weight: 500;
        transform: translateY(-3px) scale(0.8);
      }
      .md-form.md-bg.form-lg label {
        transform: translateY(16px);
      }
      .md-form.md-bg.form-lg label.active {
        transform: translateY(-4px) scale(0.8);
      }
      .md-form.md-bg.form-sm label {
        transform: translateY(11px);
      }
      .md-form.md-bg.form-sm label.active {
        transform: translateY(-2px) scale(0.8);
      }
      .md-form .form-control.is-invalid,
      .was-validated .md-form .form-control:invalid {
        padding-right: 0;
      }
      .md-form .form-control.is-valid,
      .was-validated .md-form .form-control:valid {
        padding-right: 0;
      }
      .needs-validation .md-form label {
        left: 0.3rem;
      }
      .custom-file-input:lang(es) ~ .custom-file-label::after {
        content: "Elegir";
      }
      .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
        content: "Wybierz";
      }
      .custom-file-input:lang(fr) ~ .custom-file-label::after {
        content: "Choisir";
      }
      .custom-file-input:lang(in) ~ .custom-file-label::after {
        content: "Pilih";
      }
      .custom-file-input:lang(zh) ~ .custom-file-label::after {
        content: "選擇";
      }
      .custom-file-input:lang(de) ~ .custom-file-label::after {
        content: "Wählen";
      }
      .custom-file-input:lang(ru) ~ .custom-file-label::after {
        content: "Выбрать";
      }
      .md-form > label {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .md-form .form-control {
        box-sizing: border-box !important;
      }
      .md-form .input-prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: color 0.2s;
        color: rgba(0, 0, 0, 0.87);
        pointer-events: none;
      }
      .md-form .input-prefix.active {
        color: #4285f4;
      }
      .md-form.input-with-pre-icon label {
        left: 36px;
        right: initial;
      }
      .md-form.input-with-pre-icon .input-prefix {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-pre-icon .form-control {
        padding-left: 2.7rem !important;
      }
      .md-form.input-with-post-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon .form-control {
        padding-right: 2.7rem !important;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon
        .input-prefix:first-of-type {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .form-control {
        padding-left: 2.5rem !important;
        padding-right: 2.5rem !important;
      }
`])));f.oneOfType([f.node,f.string]),f.string,f.string,f.bool,f.node,f.string,f.string,f.string,f.func,f.string,f.string,f.node,f.string,f.string,f.bool,f.func,f.func,f.any,f.string,f.string,f.oneOfType([f.func,f.string]),f.string,f.string,f.string,f.string;var y1;Y.div(y1||(y1=N([""])));f.node,f.string,f.bool;f.bool,f.node,f.string,f.bool,f.string,f.func,f.func;var x1;Y.ul(x1||(x1=N([`
  border: none;
`])));f.node,f.string,f.oneOfType([f.func,f.string]);var w1,S1;Y.li(w1||(w1=N([`
  `,`
`])),Dt);Y(vC)(S1||(S1=N([`
  `,`
`])),Dt);f.bool,f.node,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","white"]),f.bool,f.bool,f.oneOfType([f.func,f.string]);var Sr={pattern1:"img/overlays/01.png",pattern2:"img/overlays/02.png",pattern3:"img/overlays/03.png",pattern4:"img/overlays/04.png",pattern5:"img/overlays/05.png",pattern6:"img/overlays/06.png",pattern7:"img/overlays/07.png",pattern8:"img/overlays/08.png",pattern9:"img/overlays/09.png"},tW=Sr.pattern1,nW=Sr.pattern2,rW=Sr.pattern3,oW=Sr.pattern4,iW=Sr.pattern5,aW=Sr.pattern6,sW=Sr.pattern7,lW=Sr.pattern8,uW=Sr.pattern9;Y("span")(Rs,Dt,{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100 %",height:"100 %",overflow:" hidden",backgroundAttachment:"fixed"},vn({prop:"pattern",variants:{pattern1:{backgroundImage:"url("+tW+")",backgroundAttachment:"fixed"},pattern2:{backgroundImage:"url("+nW+")",backgroundAttachment:"fixed"},pattern3:{backgroundImage:"url("+rW+")",backgroundAttachment:"fixed"},pattern4:{backgroundImage:"url("+oW+")",backgroundAttachment:"fixed"},pattern5:{backgroundImage:"url("+iW+")",backgroundAttachment:"fixed"},pattern6:{backgroundImage:"url("+aW+")",backgroundAttachment:"fixed"},pattern7:{backgroundImage:"url("+sW+")",backgroundAttachment:"fixed"},pattern8:{backgroundImage:"url("+lW+")",backgroundAttachment:"fixed"},pattern9:{backgroundImage:"url("+uW+")",backgroundAttachment:"fixed"}}}),vn({prop:"overlay",variants:{blueLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},redLight:{backgroundColor:"rgba(244,67,54,0.3);",color:"#222222"},pinkLight:{backgroundColor:"rgba(233,30,99,0.3",color:"#222222"},yellowLight:{backgroundColor:"rgba(255,235,59,0.3)",color:"#222222"},orangeLight:{backgroundColor:"rgba(255,152,0,0.3)",color:"#222222"},purpleLight:{backgroundColor:"rgba(156,39,176,0.3)",color:"#222222"},brownLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},tealLight:{backgroundColor:"rgba(0,150,136,0.3)",color:"#222222"},cyanLight:{backgroundColor:"rgba(0,188,212,0.3)",color:"#222222"},greenLight:{backgroundColor:"rgba(76,175,80,0.3);",color:"#222222"},indigoLight:{backgroundColor:"rgba(63,81,181,0.3)",color:"#222222"},darkLight:{backgroundColor:"rgba(0,0,0,0.3)",color:"white"},blueStrong:{backgroundColor:"rgba(33,150,243,0.7)",color:"white"},redStrong:{backgroundColor:"rgba(244,67,54,0.7);",color:"white"},pinkStrong:{backgroundColor:"rgba(233,30,99,0.7",color:"white"},yellowStrong:{backgroundColor:"rgba(255,235,59,0.7)",color:"white"},orangeStrong:{backgroundColor:"rgba(255,152,0,0.7)",color:"white"},purpleStrong:{backgroundColor:"rgba(156,39,176,0.7)",color:"white"},brownStrong:{backgroundColor:"rgba(153,102,51,0.7)",color:"white"},tealStrong:{backgroundColor:"rgba(0,150,136,0.7)",color:"white"},cyanStrong:{backgroundColor:"rgba(0,188,212,0.7)",color:"white"},greenStrong:{backgroundColor:"rgba(76,175,80,0.7);",color:"white"},indigoStrong:{backgroundColor:"rgba(63,81,181,0.7)",color:"white"},darkStrong:{backgroundColor:"rgba(0,0,0,0.7)",color:"white"}}}));f.node,f.string,f.string,f.oneOfType([f.string,f.number]),f.string;var _1;Y.div(_1||(_1=N([`
  padding: 0;

  .modal-dialog .modal-content {
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog .modal-content .modal-header {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
  }
  .modal-dialog.cascading-modal {
    margin-top: 10%;
  }
  .modal-dialog.cascading-modal .close {
    color: #fff;
    text-shadow: none;
    outline: 0;
    opacity: 1;
  }
  .modal-dialog.cascading-modal .modal-header {
    padding: 1.5rem;
    margin: -2rem 1rem 1rem 1rem;
    text-align: center;
    border: none;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog.cascading-modal .modal-header .close {
    margin-right: 1rem;
  }
  .modal-dialog.cascading-modal .modal-header .title {
    width: 100%;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  .modal-dialog.cascading-modal .modal-header .title .fas,
  .modal-dialog.cascading-modal .modal-header .title .fab,
  .modal-dialog.cascading-modal .modal-header .title .far {
    margin-right: 9px;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons {
    margin-top: 1.5rem;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons a {
    font-size: 1rem;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs {
    display: flex;
    margin: -1.5rem 1rem 0 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li {
    flex: 1;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a {
    text-align: center;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .tab-content {
    padding: 1.7rem 0 0 0;
  }
  .modal-dialog.cascading-modal .modal-body,
  .modal-dialog.cascading-modal .modal-footer {
    padding-right: 2rem;
    padding-left: 2rem;
    color: #616161;
  }
  .modal-dialog.cascading-modal .modal-body .additional-option,
  .modal-dialog.cascading-modal .modal-footer .additional-option {
    margin-top: 1rem;
    text-align: center;
  }
  .modal-dialog.cascading-modal.modal-avatar {
    margin-top: 6rem;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header {
    margin: -6rem 0 -1rem;
    box-shadow: none;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header img {
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .modal-dialog.modal-notify .heading {
    padding: 0.3rem;
    margin: 0;
    font-size: 1.15rem;
    color: #fff;
  }
  .modal-dialog.modal-notify .modal-header {
    border: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.modal-notify .close {
    opacity: 1;
  }
  .modal-dialog.modal-notify .modal-body {
    padding: 1.5rem;
    color: #616161;
  }
  .modal-dialog.modal-notify.modal-primary .modal-header {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .fas,
  .modal-dialog.modal-notify.modal-primary .fab,
  .modal-dialog.modal-notify.modal-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .badge {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .btn .fas,
  .modal-dialog.modal-notify.modal-primary .btn .fab,
  .modal-dialog.modal-notify.modal-primary .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-danger .modal-header {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .fas,
  .modal-dialog.modal-notify.modal-danger .fab,
  .modal-dialog.modal-notify.modal-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .badge {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .btn .fas,
  .modal-dialog.modal-notify.modal-danger .btn .fab,
  .modal-dialog.modal-notify.modal-danger .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-warning .modal-header {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .fas,
  .modal-dialog.modal-notify.modal-warning .fab,
  .modal-dialog.modal-notify.modal-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .badge {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .btn .fas,
  .modal-dialog.modal-notify.modal-warning .btn .fab,
  .modal-dialog.modal-notify.modal-warning .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-success .modal-header {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .fas,
  .modal-dialog.modal-notify.modal-success .fab,
  .modal-dialog.modal-notify.modal-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .badge {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .btn .fas,
  .modal-dialog.modal-notify.modal-success .btn .fab,
  .modal-dialog.modal-notify.modal-success .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-info .modal-header {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .fas,
  .modal-dialog.modal-notify.modal-info .fab,
  .modal-dialog.modal-notify.modal-info .far {
    color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .badge {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .btn .fas,
  .modal-dialog.modal-notify.modal-info .btn .fab,
  .modal-dialog.modal-notify.modal-info .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far {
    color: #33b5e5;
  }
  @media (min-width: 768px) {
    .modal-dialog.modal-top {
      top: 0;
    }
    .modal-dialog.modal-left {
      left: 0;
    }
    .modal-dialog.modal-right {
      right: 0;
    }
    .modal-dialog.modal-bottom {
      bottom: 0;
    }
    .modal-dialog.modal-top-left {
      top: 10px;
      left: 10px;
    }
    .modal-dialog.modal-top-right {
      top: 10px;
      right: 10px;
    }
    .modal-dialog.modal-bottom-left {
      bottom: 10px;
      left: 10px;
    }
    .modal-dialog.modal-bottom-right {
      right: 10px;
      bottom: 10px;
    }
  }
  .modal.fade.top:not(.show) .modal-dialog {
    transform: translate3d(0, -25%, 0);
  }
  .modal.fade.left:not(.show) .modal-dialog {
    transform: translate3d(-25%, 0, 0);
  }
  .modal.fade.right:not(.show) .modal-dialog {
    transform: translate3d(25%, 0, 0);
  }
  .modal.fade.bottom:not(.show) .modal-dialog {
    transform: translate3d(0, 25%, 0);
  }
  @media (min-width: 992px) {
    .modal.modal-scrolling {
      position: relative;
    }
    .modal.modal-scrolling .modal-dialog {
      position: fixed;
      z-index: 1050;
    }
    .modal.modal-content-clickable {
      top: auto;
      bottom: auto;
    }
    .modal.modal-content-clickable .modal-dialog {
      position: fixed;
    }
    .modal-fluid {
      width: 100%;
      max-width: 100%;
    }
    .modal-fluid .modal-content {
      width: 100%;
    }
    .modal-frame {
      position: absolute;
      width: 100%;
      max-width: 100% !important;
      margin: 0 !important;
    }
    .modal-frame.modal-bottom {
      bottom: 0;
    }
    .modal-full-height {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 400px;
      height: auto;
      min-height: 100%;
      margin: 0;
    }
    .modal-full-height.modal-top,
    .modal-full-height.modal-bottom {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    .modal-full-height.modal-top {
      bottom: auto;
    }
    .modal-full-height.modal-bottom {
      top: auto;
      min-height: 0;
    }
    .modal-full-height .modal-content {
      width: 100%;
    }
    .modal-full-height.modal-lg {
      width: 90%;
      max-width: 90%;
    }
  }
  @media (min-width: 992px) and (min-width: 992px) {
    .modal-full-height.modal-lg {
      width: 800px;
      max-width: 800px;
    }
  }
  @media (min-width: 992px) and (min-width: 1200px) {
    .modal-full-height.modal-lg {
      width: 1000px;
      max-width: 1000px;
    }
  }
  @media (min-width: 992px) {
    .modal-side {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 400px;
      margin: 0;
    }
  }
`])));f.string,f.bool,f.bool,f.string,f.number,f.bool,f.bool,f.node,f.string,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.func,f.func,f.string,f.bool,f.bool,f.bool,f.string,f.string,f.object,f.number,f.bool,f.bool,f.string,f.string,f.func,f.bool,f.string,f.string,f.func,f.string,f.object,f.oneOfType([f.number,f.string]);var k1;Y.h4(k1||(k1=N([`
  .close {
    height: 10px;
    width: 10px;
    margin-right: 10px;
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`])));f.node,f.string,f.string,f.oneOfType([f.func,f.string]),f.func;f.node,f.string;f.node,f.string;var O1;Y.nav(O1||(O1=N([""])));f.string,f.string,f.bool,f.bool,f.oneOfType([f.bool,f.string]),f.string,f.bool,f.bool,f.number,f.string,f.oneOfType([f.func,f.string]),f.bool;var E1;Y.ul(E1||(E1=N([""])));f.node,f.string,f.bool,f.bool,f.oneOfType([f.func,f.string]);var C1;Y(KF)(C1||(C1=N([""])));f.string,f.string;var T1;Y.li(T1||(T1=N([""])));f.bool,f.node,f.string,f.oneOfType([f.func,f.string]);f.bool,f.node,f.string,f.bool,f.bool,f.string;var R1;Y.button(R1||(R1=N([""])));f.node,f.string,f.string,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.oneOf(["reset","submit","button"]);var P1,A1;Y.div(P1||(P1=N([`
  width: 100%;
  background: `,`;
  border-radius: 20px;
  .progress-bar {
    `,`
    border-radius: 20px;
  }
`])),function(e){return e.colors==="primary"?"#3e98c728":e.colors==="secondary"?"#7356BF28":e.colors==="danger"?"#E1190028":e.colors==="warning"?"#66512C28":e.colors==="info"?"#17A2B828":e.colors==="success"?"#05944F28":"#00000028"},Dt);Y.div(A1||(A1=N([`
  display: block;
  width: 100%;
  .progress-text {
    display: flex;
    width: 100%;
    justify-content: center;
    color: `,`;
  }
`])),function(e){return e.colors==="primary"?"#3e98c7":e.colors==="secondary"?"#7356BF":e.colors==="danger"?"#E11900":e.colors==="warning"?"#66512C":e.colors==="info"?"#17A2B8":e.colors==="success"?"#05944F":"#000000"});f.string,f.node,f.string,f.oneOf(["primary","secondary","success","danger","warning","info","dark"]),f.number,f.number,f.number,f.number,f.object;var $1;Y.div($1||($1=N([`
  &.popover {
    width: auto;
    background-color: white;
    color: #97999b;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    z-index: 10;
    max-width: 274px;
    text-align: start;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  &.show.popover {
    z-index: 999;
    opacity: 1;
    visibility: visible;
  }

  .popover-body {
    color: #6c6e71;
  }

  &.popover .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  .popover[x-placement^='top'] {
    margin-bottom: 15px;
  }

  .popover[x-placement^='top'] .popover_arrow {
    border-width: 8px 8px 0 8px;
    border-color: #d6d6d6 transparent transparent transparent;
    bottom: -8px;
    margin-bottom: 0;
  }

  .popover[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    bottom: 1.5px;
    border: solid;
    border-width: 8px 8px 0 8px;
    border-color: white transparent transparent transparent;
  }

  .popover[x-placement^='bottom'] {
    margin-top: 15px;
  }

  .popover[x-placement^='bottom'] .popover_arrow {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #d6d6d6 transparent;
    top: -8px;
    margin-top: 0;
  }

  .popover[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    top: 1.45px;
    border: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent white transparent;
  }

  .popover[x-placement^='right'] {
    margin-left: 15px;
  }

  .popover[x-placement^='right'] .popover_arrow {
    border-width: 8px 8px 8px 0;
    border-color: transparent #d6d6d6 transparent transparent;
    left: -8px;
    margin-left: 0;
  }

  .popover[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    left: 1.45px;
    border: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent white transparent transparent;
  }

  .popover[x-placement^='left'] {
    margin-right: 15px;
  }

  .popover[x-placement^='left'] .popover_arrow {
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #d6d6d6;
    right: -8px;
    margin-right: 0;
  }

  .popover[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    right: 1.45px;
    border: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent white;
  }

  &.tooltip {
    width: auto;
    background-color: black;
    color: white;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    /* font-size: 0.83em; */
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    /* z-index: 200000; */
    z-index: 15;
    /* max-width: initial; */
    max-width: 274px;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  .tooltip-inner {
    display: block;
  }

  &.show.tooltip {
    z-index: 999;

    opacity: 1;
    visibility: visible;
  }

  &.tooltip .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  &.tooltip[x-placement^='top'],
  &.show[x-placement^='top']:not(.tooltip) {
    margin-bottom: 5px;
  }

  &.tooltip[x-placement^='top'] .popover_arrow {
    border-width: 6px 6px 0 6px;
    border-color: #131313 transparent transparent transparent;
    bottom: -6px;
    margin-bottom: 0;
  }

  &.tooltip[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    bottom: 1.5px;
    border: solid;
    border-width: 6px 6px 0 6px;
    border-color: black transparent transparent transparent;
  }

  &.tooltip[x-placement^='bottom'],
  &.show[x-placement^='bottom']:not(.tooltip) {
    margin-top: 5px;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow {
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #131313 transparent;
    top: -6px;
    margin-top: 0;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    top: 1.45px;
    border: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent black transparent;
  }

  &.tooltip[x-placement^='right'],
  &.show[x-placement^='right']:not(.tooltip) {
    margin-left: 5px;
  }

  &.tooltip[x-placement^='right'] .popover_arrow {
    border-width: 6px 6px 6px 0;
    border-color: transparent #131313 transparent transparent;
    left: -6px;
    margin-left: 0;
  }

  &.tooltip[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    left: 1.45px;
    border: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent black transparent transparent;
  }

  &.tooltip[x-placement^='left'],
  &.show[x-placement^='left']:not(.tooltip) {
    margin-right: 5px;
  }

  &.tooltip[x-placement^='left'] .popover_arrow {
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #131313;
    right: -6px;
    margin-right: 0;
  }

  &.tooltip[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    right: 1.45px;
    border: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent black;
  }
`])));f.node,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.object,f.string,f.bool,f.bool,f.objectOf(f.string),f.string;f.string,f.arrayOf(f.shape({choosed:f.bool,icon:f.string,tooltip:f.string})),f.bool,f.string,f.oneOfType([f.bool,f.arrayOf(f.string)]),f.func,f.string,f.bool,f.bool,f.string,f.func,f.string;var L1;Y.div(L1||(L1=N([""])));f.bool,f.bool,f.bool,f.bool,f.string,f.bool,f.bool,f.bool,f.oneOfType([f.func,f.string]),f.bool;var M1;Y.select(M1||(M1=N([""])));f.array,f.string;var N1,j1,I1,cW=Y.div(N1||(N1=N([`
  background: `,`;
  color: `,`;
  height: 100%;
  width: `,`;
  min-width: `,`;
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1009;

  &.toggled {
    width: `,`;
    min-width: `,`;
  }
`])),function(e){return e.backgroundColor},function(e){return e.textColor},function(e){var t=e.maxWidth;return t},function(e){var t=e.maxWidth;return t},function(e){var t=e.minWidth;return t},function(e){var t=e.minWidth;return t}),fW=Y.div(j1||(j1=N([`
  height: 100%;
  position: relative;
  z-index: 101;
`]))),dW=Y.div(I1||(I1=N([`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
`]))),pW=["className","minWidth","maxWidth","children","toggled","textColor","backgroundColor","breakpoint"],sl=w.createContext({toggled:!1,handleToggleSidebar:function(){},textColor:"",backgroundColor:"",breakpoint:0}),gv=w.forwardRef(function(e,t){var n=e.className,r=e.minWidth,o=e.maxWidth,i=e.children,a=e.toggled,s=e.textColor,l=e.backgroundColor,u=e.breakpoint,c=co(e,pW),d=function(g){m(ah({},h,{toggled:!g}))},p=w.useState({toggled:a,handleToggleSidebar:d,textColor:s,backgroundColor:l,breakpoint:u}),h=p[0],m=p[1];w.useEffect(function(){d(!a)},[a]);var v=t||X.createRef();return X.createElement(ao,{theme:Xn},X.createElement(sl.Provider,{value:h},X.createElement(cW,Object.assign({},c,{ref:v,className:de("pro-sidebar",n,{toggled:h.toggled}),textColor:s,backgroundColor:l,minWidth:r,maxWidth:o}),X.createElement(fW,null,X.createElement(dW,null,i)))))});gv.propTypes={className:f.string,children:f.any,textColor:f.string,backgroundColor:f.string,breakpoint:f.number,toggled:f.bool};gv.defaultProps={textColor:"#ffffff",backgroundColor:Xn.colors.dark900,breakpoint:720,toggled:!1,minWidth:"80px",maxWidth:"270px",children:null};gv.displayName="Sidebar";var D1,mW=Y.div(D1||(D1=N([`
    flex-grow: 1;
    padding-top: 15px;
`]))),hW=["children","className"],gW=w.forwardRef(function(e,t){var n=e.children,r=e.className,o=co(e,hW),i=w.useContext(sl),a=i.handleToggleSidebar,s=i.breakpoint,l=w.useState(0),u=l[0],c=l[1],d=s||720;w.useEffect(function(){var h=function(){return c(window.innerWidth)};return window.addEventListener("resize",h),u<d&&a(!1),function(){window.removeEventListener("resize",h)}},[a,u,d]);var p=t||X.createRef();return X.createElement(ao,{theme:Xn},X.createElement(mW,Object.assign({},o,{ref:p,className:de("pro-sidebar-content",r)}),n))});gW.propTypes={className:f.string,children:f.any};var vW=["children","className"],bW=w.forwardRef(function(e,t){var n=e.children,r=e.className,o=co(e,vW),i=t||X.createRef();return X.createElement(ao,{theme:Xn},X.createElement("div",Object.assign({},o,{ref:i,className:de("pro-sidebar-footer",r)}),n))});bW.propTypes={className:f.string,children:f.any};var F1,yW=Y.div(F1||(F1=N([`
  border-bottom: 1px solid hsla(0, 0%, 67.8%, 0.2);

  .head-div {
    padding: 24px 30px;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    .icon-suffix {
      cursor: pointer;
    }

    &.toggled {
      justify-content: center;
      .head-text {
        display: none;
      }
      .icon-suffix {
        margin: 0px;
      }
    }
  }
`]))),xW=["children","prefix","className"],wW=w.forwardRef(function(e,t){var n=e.children,r=e.prefix,o=e.className,i=co(e,xW),a=t||X.createRef(),s=w.useContext(sl),l=s.toggled,u=s.handleToggleSidebar;return X.createElement(ao,{theme:Xn},X.createElement(yW,Object.assign({},i,{ref:a,className:de(o)}),X.createElement("div",{className:de("head-div",{toggled:l})},X.createElement("span",{className:"head-text"},n),r?X.createElement("span",{className:"icon-suffix",onClick:function(){return u(l)}},r):null)))});wW.propTypes={className:f.string,children:f.any,prefix:f.any};var z1,B1,SW=Y.nav(z1||(z1=N([`
    padding-top: 10px;
    padding-bottom: 10px;
`]))),_W=Y.ul(B1||(B1=N([`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        color: `,`;
        text-decoration:none;
    }
    .activeClicked {
      >li{
            background: `,`;
            color: `,`;
        }
    }
    
`])),function(e){return e.textColor},function(e){return e.textColor},function(e){return e.backgroundColor}),kW=["children","className","popperArrow"],OW=w.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.popperArrow,i=co(e,kW),a=t||X.createRef(),s=w.useContext(sl),l=s.textColor,u=s.backgroundColor;return X.createElement(ao,{theme:Xn},X.createElement(SW,Object.assign({},i,{ref:a,className:de("pro-menu",r)}),X.createElement(_W,{textColor:l,backgroundColor:u},X.Children.map(n,function(c){return X.cloneElement(c,{firstchild:1,popperarrow:o===!0?1:0})}))))});OW.propTypes={className:f.string,children:f.any,popperArrow:f.bool};var H1,U1,EW=Y.div(H1||(H1=N([`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 15px;
  height: 45px;
  cursor: pointer;
  outline: none;

  .side-icon {
    margin-right: 10px;
    width: 30px;
  }
  &.active {
    background: white;
    color: black;
  }

  .item-content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: `,`;
  }
  .suffix-wrapper {
    margin-right: 23px;
  }
  &.toggled {
    justify-content: center;
    .item-content {
      width: 0px;
      display: none;
    }
    .suffix-wrapper {
      opacity: 0;
      display: none;
    }
  }
`])),function(e){var t=e.fontSize;return t}),CW=Y.li(U1||(U1=N([`
  list-style: none;
  margin: 10px 15px;
  &.toggled {
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
`]))),TW=["children","className","icon","iconSize","iconType","iconClassName","textFontSize","active","suffix","firstChild","popperArrow"],HT=w.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.icon,i=e.iconSize,a=e.iconType,s=e.iconClassName,l=e.textFontSize,u=e.active,c=e.suffix,d=co(e,TW),p=t||X.createRef(),h=w.useContext(sl),m=h.toggled;return X.createElement(ao,{theme:Xn},X.createElement(CW,Object.assign({},d,{ref:p,className:de(r,{active:u},{toggled:m})}),X.createElement(EW,{className:de({active:u},{toggled:m}),tabIndex:0,fontSize:l,role:"button",toggled:m},o&&X.createElement(hv,{icon:o,size:i,className:de(s,"side-icon",a&&"fa-"+a)}),X.createElement("span",{className:"item-content"},n),c?X.createElement("span",{className:"suffix-wrapper"},c):null)))});HT.propTypes={children:f.any,className:f.string,icon:f.string,iconSize:f.string,iconClassName:f.string,iconType:f.string,active:f.bool,suffix:f.any,firstChild:f.number,popperArrow:f.number,textFontSize:f.string};HT.defaultProps={iconSize:"md"};f.oneOfType([f.number,f.string]),f.func,f.func,f.number,f.number,f.number,f.bool,f.oneOf(["sm","lg"]),f.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),f.object,f.oneOf(["auto","on","off"]),f.oneOf(["top","bottom"]),f.func,f.object,f.object,f.string,f.string;f.string,f.string,f.bool,f.bool,f.number,f.number,f.string;var W1,V1,Y1,K1,q1,X1,G1,RW=Fg(W1||(W1=N([`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`]))),PW=Fg(V1||(V1=N([`
 0% { stroke: #4285f4; }
 25%{stroke: #de3e35;} 50%{stroke: #f7c223} 75%{stroke: #1b9a59}
 100% {  stroke: #4285f4}`]))),Q1=Fg(Y1||(Y1=N([`
 0% { stroke-dashoffset: 187; }
  50%{stroke-dashoffset: 46.75;
transform: rotate(135deg)} 
 100% {   stroke-dashoffset: 187;
transform: rotate(450deg)}`])));Y.svg(K1||(K1=N([`
  stroke-width: 5;
  animation-name: `,`;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
`])),RW);Y.circle(q1||(q1=N([`
  stroke: `,`;

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: `,`;
`])),function(e){return e.warning?"#FFE975":e.success?"#05944F":e.secondary?"#7356BF":e.dark?"#000000":e.danger?"#E11900":e.info?"#17A2B8":"#276EF1"},function(e){return e.multicolor?ne(X1||(X1=N([`
          `," 1.4s ease-in-out infinite, ",` 5.6s ease-in-out infinite
        `])),Q1,PW):ne(G1||(G1=N([`
          `,` 1.4s ease-in-out infinite
        `])),Q1)});f.string,f.string,f.string,f.bool,f.bool,f.bool,f.bool,f.bool,f.bool;var J1;Y.div(J1||(J1=N([`
  .switch-container {
  }

  input[type="checkbox"].switch {
    position:absolute;
    opacity: 0;
  }

  input[type="checkbox"].switch + div {
    vertical-align: middle;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    background-color: #333;
    cursor: pointer;
  }

  input[type="checkbox"].switch:checked + div {
    background-color: #80ff80;
  }

  input[type="checkbox"].switch + div > div {
    margin:0;
    width: 50%;
    height: 100%;
    background: #f2f2f2;
    border-radius: inherit;
    transition:margin 0.3s linear;
  }

  input[type="checkbox"].switch:checked + div > div {
    margin-left:auto;
  }
`])));f.bool,f.string;f.node,f.string,f.arrayOf(f.object),f.bool;var Z1,eS,tS,nS;Y.div(Z1||(Z1=N([`
  position: relative;
  overflow: hidden;
  cursor: default;
  `,`
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  img,
  video {
    position: relative;
    display: block;
  }
  .video.video-intro {
    top: 50%;
    left: 50%;
    z-index: -100;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transition: 1s opacity;
    transform: translateX(-50%) translateY(-50%);
  }
  border-radius: `,`;
  `,`
`])),function(e){return e.zoom?ne(eS||(eS=N([`
          img,
          video {
            transition: all 0.2s linear;
          }
          &:hover img,
          &:hover video {
            transform: scale(1.1);
          }
        `]))):ne(tS||(tS=N([""])))},function(e){return e.rounded?"0.25rem !important":"0"},function(e){return e.hover?ne(nS||(nS=N([`
          .mask {
            opacity: 0;
            transition: all 0.4s ease-in-out;
            &:hover {
              opacity: 1;
            }
          }
        `]))):null});f.node,f.string,f.bool,f.bool,f.bool,f.string,f.string;var rS,oS,iS;Y.div(rS||(rS=N([`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px;
  `,`
  `,`

  .steps {
    display: table-cell;
    text-align: center;
    position: relative;
  }
`])),function(e){return e.direction==="vertical"&&ne(oS||(oS=N([`
      .step-row-2 {
        height: 100%;
        flex-direction: row;
        .step-content {
          display: flex;
          -ms-flex-align: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between !important;
        }
      }
    `])))},function(e){return e.direction==="horizontal"&&ne(iS||(iS=N([`
      flex-direction: column;
      .step-row-2 {
        flex-direction: column;
        margin-top: 22px;
        overflow-x: hidden;
        .step-content {
          overflow: auto;
          min-width: 500px;
          justify-content: space-between !important;
          display: flex !important;
          width: 100%;
        }
        &-webkit-scrollbar {
          height: 8px;
        }
        &-webkit-scrollbar-thumb {
          background: #ccc;
        }
        &-webkit-scrollbar-track {
        }
      }
    `])))});var aS,sS,lS;Y.div(aS||(aS=N([`
  display: flex;
  `,`
  `,`
    .content-container {
    width: 100%;
    padding: 15px 10px;
  }
  .content-transition {
    width: 100%;
  }
  .fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-top: -20px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
`])),function(e){var t=e.direction;return t==="vertical"&&ne(sS||(sS=N([`
      width: calc(100% - 150px);
    `])))},function(e){var t=e.direction;return t==="horizontal"&&ne(lS||(lS=N([`
      width: 100%;
    `])))});w.createContext({});Xn.colors.dark900;f.string.isRequired,f.number.isRequired,f.array.isRequired,f.number,f.string,f.func,f.bool,f.bool;var uS,cS,fS,dS,pS,mS;Y.div(uS||(uS=N([`
  display: flex;
  `,`
  `,`
  `,`;
  `,`;
  `,`
`])),function(e){var t=e.direction,n=e.size,r=e.showIndex,o=e.showTitle;return t==="vertical"&&ne(cS||(cS=N([`
      width: `,`px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: `,`;
      span {
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 6px;
        height: 50px;
      }
    `])),n,!o&&!r&&"10px")},function(e){var t=e.direction;return t==="horizontal"&&ne(fS||(fS=N([`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      span {
        margin: 0 2px;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 50px;
        height: 6px;
      }
    `])))},function(e){var t=e.status;return t==="prev"&&ne(dS||(dS=N([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #666666;
      }
    `])))},function(e){var t=e.status;return t==="active"&&ne(pS||(pS=N([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))},function(e){var t=e.status;return t==="next"&&ne(mS||(mS=N([`
      span:nth-child(1) {
        background-color: #cccccc;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))});var hS,gS,vS,bS,yS,xS,wS,SS,_S,kS,OS;Y.div(hS||(hS=N([`
  display: flex;
  `,`
  `,`
  .step-title {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding: 10px 0;
    `,`;
    `,`;
    `,`
    .step-number {
      font-size: 30px;
      font-weight: 600;
    }
    .step-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      margin-left: 10px;
      text-align: start;
      max-width: 150px;
      word-wrap: break-word;
    }
  }
  .step-indicators {
    display: flex;
    width: fit-content;
    `,`
    `,`
  }
  .default-node {
    cursor: pointer;
    width: `,`;
    height: `,`;
    color: #000;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: width 0.3;
    align-items: center;
    * {
      position: relative;
    }
    `,`;
    `,`;
    `,`
  }
  .__react_component_tooltip {
    background: `,`;
    font-size: 10px;
    * {
      font-size: inherit;
    }
    padding: 2px 5.5px;
    border-radius: 4px;
    &:before,
    &:after {
      display: none !important;
    }
  }
`])),function(e){var t=e.direction;return t==="horizontal"&&ne(gS||(gS=N([`
      flex-direction: column;
    `])))},function(e){var t=e.direction;return t==="vertical"&&ne(vS||(vS=N([`
      min-width: 150px;
      max-width: 150px;
    `])))},function(e){var t=e.status;return t==="prev"&&ne(bS||(bS=N([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="active"&&ne(yS||(yS=N([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="next"&&ne(xS||(xS=N([`
        opacity: 0.6;
      `])))},function(e){var t=e.direction;return t==="horizontal"&&ne(wS||(wS=N([`
        flex-direction: row;
      `])))},function(e){var t=e.direction;return t==="vertical"&&ne(SS||(SS=N([`
        flex-direction: column;
      `])))},function(e){var t=e.size;return t+"px"},function(e){var t=e.size;return t+"px"},function(e){var t=e.status;return t==="prev"&&ne(_S||(_S=N([`
        background-color: #333333;
        color: #fff;
        border: 2px solid #cccccc;
      `])))},function(e){var t=e.status;return t==="active"&&ne(kS||(kS=N([`
        background-color: #fff;
        border: 2px solid #333333;
        position: relative;
      `])))},function(e){var t=e.status;return t==="next"&&ne(OS||(OS=N([`
        color: #fff;
        background-color: #9f9d9d;
      `])))},function(e){return e.tooltipBackground});X.createElement("div",null,"Hello");f.string,f.string,f.bool,f.bool,f.bool,f.number,f.node;function ES(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function AW(e){var t=$W(e,"string");return typeof t=="symbol"?t:String(t)}function $W(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function LW(e,t,n){var r=w.useRef(e!==void 0),o=w.useState(t),i=o[0],a=o[1],s=e!==void 0,l=r.current;return r.current=s,!s&&l&&i!==t&&a(t),[s?e:i,w.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),p=1;p<c;p++)d[p-1]=arguments[p];n&&n.apply(void 0,[u].concat(d)),a(u)},[n])]}function vv(e,t){return Object.keys(t).reduce(function(n,r){var o,i=n,a=i[ES(r)],s=i[r],l=aC(i,[ES(r),r].map(AW)),u=t[r],c=LW(s,a,e[u]),d=c[0],p=c[1];return Am({},l,(o={},o[r]=d,o[u]=p,o))},e)}var MW=Function.prototype.bind.call(Function.prototype.call,[].slice);function or(e,t){return MW(e.querySelectorAll(t))}function UT(){const[,e]=w.useReducer(t=>t+1,0);return e}const CS=e=>!e||typeof e=="function"?e:t=>{e.current=t};function NW(e,t){const n=CS(e),r=CS(t);return o=>{n&&n(o),r&&r(o)}}function If(e,t){return w.useMemo(()=>NW(e,t),[e,t])}const Df=w.createContext(null);Df.displayName="NavContext";const Wo=w.createContext(null),Ms=(e,t=null)=>e!=null?String(e):t||null,WT=w.createContext(null),jW="data-rr-ui-",IW="rrUi";function aa(e){return`${jW}${e}`}function DW(e){return`${IW}${e}`}function FW(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e},[e]),t}function ct(e){const t=FW(e);return w.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const zW=["as","active","eventKey"];function BW(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function VT({key:e,onClick:t,active:n,id:r,role:o,disabled:i}){const a=w.useContext(Wo),s=w.useContext(Df),l=w.useContext(WT);let u=n;const c={role:o};if(s){!o&&s.role==="tablist"&&(c.role="tab");const d=s.getControllerId(e??null),p=s.getControlledId(e??null);c[aa("event-key")]=e,c.id=d||r,u=n==null&&e!=null?s.activeKey===e:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=p)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),i&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=ct(d=>{i||(t==null||t(d),e!=null&&a&&!d.isPropagationStopped()&&a(e,d))}),[c,{isActive:u}]}const YT=w.forwardRef((e,t)=>{let{as:n=pg,active:r,eventKey:o}=e,i=BW(e,zW);const[a,s]=VT(Object.assign({key:Ms(o,i.href),active:r},i));return a[aa("active")]=s.isActive,C.jsx(n,Object.assign({},i,a,{ref:t}))});YT.displayName="NavItem";const HW=["as","onSelect","activeKey","role","onKeyDown"];function UW(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const TS=()=>{},RS=aa("event-key"),KT=w.forwardRef((e,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:i,onKeyDown:a}=e,s=UW(e,HW);const l=UT(),u=w.useRef(!1),c=w.useContext(Wo),d=w.useContext(WT);let p,h;d&&(i=i||"tablist",o=d.activeKey,p=d.getControlledId,h=d.getControllerId);const m=w.useRef(null),v=x=>{const S=m.current;if(!S)return null;const k=or(S,`[${RS}]:not([aria-disabled=true])`),_=S.querySelector("[aria-selected=true]");if(!_||_!==document.activeElement)return null;const O=k.indexOf(_);if(O===-1)return null;let E=O+x;return E>=k.length&&(E=0),E<0&&(E=k.length-1),k[E]},b=(x,S)=>{x!=null&&(r==null||r(x,S),c==null||c(x,S))},g=x=>{if(a==null||a(x),!d)return;let S;switch(x.key){case"ArrowLeft":case"ArrowUp":S=v(-1);break;case"ArrowRight":case"ArrowDown":S=v(1);break;default:return}S&&(x.preventDefault(),b(S.dataset[DW("EventKey")]||null,x),u.current=!0,l())};w.useEffect(()=>{if(m.current&&u.current){const x=m.current.querySelector(`[${RS}][aria-selected=true]`);x==null||x.focus()}u.current=!1});const y=If(t,m);return C.jsx(Wo.Provider,{value:b,children:C.jsx(Df.Provider,{value:{role:i,activeKey:Ms(o),getControlledId:p||TS,getControllerId:h||TS},children:C.jsx(n,Object.assign({},s,{onKeyDown:g,ref:y,role:i}))})})});KT.displayName="Nav";const WW=Object.assign(KT,{Item:YT}),Qo=w.createContext(null);Qo.displayName="NavbarContext";const qT=w.createContext(null);qT.displayName="CardHeaderContext";const XT=w.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"nav-item"),C.jsx(n,{ref:o,className:de(e,t),...r})));XT.displayName="NavItem";function VW(){return w.useState(null)}function YW(e,t,n,r=!1){const o=ct(n);w.useEffect(()=>{const i=typeof e=="function"?e():e;return i.addEventListener(t,o,r),()=>i.removeEventListener(t,o,r)},[e])}function GT(){const e=w.useRef(!0),t=w.useRef(()=>e.current);return w.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function QT(e){const t=w.useRef(null);return w.useEffect(()=>{t.current=e}),t.current}const KW=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",qW=typeof document<"u",PS=qW||KW?w.useLayoutEffect:w.useEffect,XW=["onKeyDown"];function GW(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function QW(e){return!e||e.trim()==="#"}const bv=w.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=GW(e,XW);const[o]=dg(Object.assign({tagName:"a"},r)),i=ct(a=>{o.onKeyDown(a),n==null||n(a)});return QW(r.href)||r.role==="button"?C.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:i})):C.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});bv.displayName="Anchor";const JT=w.forwardRef(({bsPrefix:e,className:t,as:n=bv,active:r,eventKey:o,disabled:i=!1,...a},s)=>{e=Ye(e,"nav-link");const[l,u]=VT({key:Ms(o,a.href),active:r,disabled:i,...a});return C.jsx(n,{...a,...l,ref:s,disabled:i,className:de(t,e,i&&"disabled",u.isActive&&"active")})});JT.displayName="NavLink";const ZT=w.forwardRef((e,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:i=!1,justify:a=!1,navbar:s,navbarScroll:l,className:u,activeKey:c,...d}=vv(e,{activeKey:"onSelect"}),p=Ye(r,"nav");let h,m,v=!1;const b=w.useContext(Qo),g=w.useContext(qT);return b?(h=b.bsPrefix,v=s??!0):g&&({cardHeaderBsPrefix:m}=g),C.jsx(WW,{as:n,ref:t,activeKey:c,className:de(u,{[p]:!v,[`${h}-nav`]:v,[`${h}-nav-scroll`]:v&&l,[`${m}-${o}`]:!!m,[`${p}-${o}`]:!!o,[`${p}-fill`]:i,[`${p}-justified`]:a}),...d})});ZT.displayName="Nav";const sp=Object.assign(ZT,{Item:XT,Link:JT}),e2=w.forwardRef(({bsPrefix:e,className:t,as:n,...r},o)=>{e=Ye(e,"navbar-brand");const i=n||(r.href?"a":"span");return C.jsx(i,{...r,ref:o,className:de(t,e)})});e2.displayName="NavbarBrand";function Ff(e){return e&&e.ownerDocument||document}function JW(e){var t=Ff(e);return t&&t.defaultView||window}function ZW(e,t){return JW(e).getComputedStyle(e,t)}var e9=/([A-Z])/g;function t9(e){return e.replace(e9,"-$1").toLowerCase()}var n9=/^ms-/;function au(e){return t9(e).replace(n9,"-ms-")}var r9=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function o9(e){return!!(e&&r9.test(e))}function cr(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(au(t))||ZW(e).getPropertyValue(au(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(au(o)):o9(o)?r+=o+"("+i+") ":n+=au(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}function i9(e){return e.code==="Escape"||e.keyCode===27}function a9(){const e=w.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}function sa(e){if(!e||typeof e=="function")return null;const{major:t}=a9();return t>=19?e.props.ref:e.ref}const zf=!!(typeof window<"u"&&window.document&&window.document.createElement);var sh=!1,lh=!1;try{var lp={get passive(){return sh=!0},get once(){return lh=sh=!0}};zf&&(window.addEventListener("test",lp,lp),window.removeEventListener("test",lp,!0))}catch{}function t2(e,t,n,r){if(r&&typeof r!="boolean"&&!lh){var o=r.once,i=r.capture,a=n;!lh&&o&&(a=n.__once||function s(l){this.removeEventListener(t,s,i),n.call(this,l)},n.__once=a),e.addEventListener(t,a,sh?r:i)}e.addEventListener(t,n,r)}function s9(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}function Dr(e,t,n,r){return t2(e,t,n,r),function(){s9(e,t,n,r)}}function l9(e,t,n,r){if(r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function u9(e){var t=cr(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function c9(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||l9(e,"transitionend",!0)},t+n),i=Dr(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function f9(e,t,n,r){n==null&&(n=u9(e)||0);var o=c9(e,n,r),i=Dr(e,"transitionend",t);return function(){o(),i()}}function AS(e,t){const n=cr(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function yv(e,t){const n=AS(e,"transitionDuration"),r=AS(e,"transitionDelay"),o=f9(e,i=>{i.target===e&&(o(),t(i))},n+r)}function Pa(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...o){t.apply(this,o),n.apply(this,o)}},null)}function n2(e){e.offsetHeight}const $S=e=>!e||typeof e=="function"?e:t=>{e.current=t};function d9(e,t){const n=$S(e),r=$S(t);return o=>{n&&n(o),r&&r(o)}}function xv(e,t){return w.useMemo(()=>d9(e,t),[e,t])}function p9(e){return e&&"setState"in e?yi.findDOMNode(e):e??null}const Bf=X.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:s,childRef:l,...u},c)=>{const d=w.useRef(null),p=xv(d,l),h=_=>{p(p9(_))},m=_=>O=>{_&&d.current&&_(d.current,O)},v=w.useCallback(m(e),[e]),b=w.useCallback(m(t),[t]),g=w.useCallback(m(n),[n]),y=w.useCallback(m(r),[r]),x=w.useCallback(m(o),[o]),S=w.useCallback(m(i),[i]),k=w.useCallback(m(a),[a]);return C.jsx(yr,{ref:c,...u,onEnter:v,onEntered:g,onEntering:b,onExit:y,onExited:S,onExiting:x,addEndListener:k,nodeRef:d,children:typeof s=="function"?(_,O)=>s(_,{...O,ref:h}):X.cloneElement(s,{ref:h})})});Bf.displayName="TransitionWrapper";const m9={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h9(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],o=m9[e];return r+parseInt(cr(t,o[0]),10)+parseInt(cr(t,o[1]),10)}const g9={[Pr]:"collapse",[Ls]:"collapsing",[pn]:"collapsing",[ir]:"collapse show"},r2=X.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:i,children:a,dimension:s="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:d=!1,appear:p=!1,getDimensionValue:h=h9,...m},v)=>{const b=typeof s=="function"?s():s,g=w.useMemo(()=>Pa(_=>{_.style[b]="0"},e),[b,e]),y=w.useMemo(()=>Pa(_=>{const O=`scroll${b[0].toUpperCase()}${b.slice(1)}`;_.style[b]=`${_[O]}px`},t),[b,t]),x=w.useMemo(()=>Pa(_=>{_.style[b]=null},n),[b,n]),S=w.useMemo(()=>Pa(_=>{_.style[b]=`${h(b,_)}px`,n2(_)},r),[r,h,b]),k=w.useMemo(()=>Pa(_=>{_.style[b]=null},o),[b,o]);return C.jsx(Bf,{ref:v,addEndListener:yv,...m,"aria-expanded":m.role?l:null,onEnter:g,onEntering:y,onEntered:x,onExit:S,onExiting:k,childRef:sa(a),in:l,timeout:u,mountOnEnter:c,unmountOnExit:d,appear:p,children:(_,O)=>X.cloneElement(a,{...O,className:de(i,a.props.className,g9[_],b==="width"&&"collapse-horizontal")})})});r2.displayName="Collapse";const o2=w.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=Ye(t,"navbar-collapse");const o=w.useContext(Qo);return C.jsx(r2,{in:!!(o&&o.expanded),...n,children:C.jsx("div",{ref:r,className:t,children:e})})});o2.displayName="NavbarCollapse";function v9(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e},[e]),t}function ll(e){const t=v9(e);return w.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const i2=w.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:o="button",onClick:i,...a},s)=>{e=Ye(e,"navbar-toggler");const{onToggle:l,expanded:u}=w.useContext(Qo)||{},c=ll(d=>{i&&i(d),l&&l()});return o==="button"&&(a.type="button"),C.jsx(o,{...a,ref:s,onClick:c,"aria-label":r,className:de(t,e,!u&&"collapsed"),children:n||C.jsx("span",{className:`${e}-icon`})})});i2.displayName="NavbarToggle";const b9=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",y9=typeof document<"u",a2=y9||b9?w.useLayoutEffect:w.useEffect,uh=new WeakMap,LS=(e,t)=>{if(!e||!t)return;const n=uh.get(t)||new Map;uh.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function x9(e,t=typeof window>"u"?void 0:window){const n=LS(e,t),[r,o]=w.useState(()=>n?n.matches:!1);return a2(()=>{let i=LS(e,t);if(!i)return o(!1);let a=uh.get(t);const s=()=>{o(i.matches)};return i.refCount++,i.addListener(s),s(),()=>{i.removeListener(s),i.refCount--,i.refCount<=0&&(a==null||a.delete(i.media)),i=void 0}},[e]),r}function w9(e){const t=Object.keys(e);function n(s,l){return s===l?l:s?`${s} and ${l}`:l}function r(s){return t[Math.min(t.indexOf(s)+1,t.length-1)]}function o(s){const l=r(s);let u=e[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function i(s){let l=e[s];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function a(s,l,u){let c;typeof s=="object"?(c=s,u=l,l=!0):(l=l||!0,c={[s]:l});let d=w.useMemo(()=>Object.entries(c).reduce((p,[h,m])=>((m==="up"||m===!0)&&(p=n(p,i(h))),(m==="down"||m===!0)&&(p=n(p,o(h))),p),""),[JSON.stringify(c)]);return x9(d,u)}return a}const S9=w9({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function up(e){e===void 0&&(e=Ff());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Mc(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function _9(e){const t=w.useRef(e);return t.current=e,t}function k9(e){const t=_9(e);w.useEffect(()=>()=>t.current(),[])}function O9(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const MS=aa("modal-open");class wv{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return O9(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(cr(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(MS,""),cr(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(MS),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const s2=w.createContext(zf?window:void 0);s2.Provider;function Hf(){return w.useContext(s2)}const cp=(e,t)=>zf?e==null?(t||Ff()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function E9(e,t){const n=Hf(),[r,o]=w.useState(()=>cp(e,n==null?void 0:n.document));if(!r){const i=cp(e);i&&o(i)}return w.useEffect(()=>{},[t,r]),w.useEffect(()=>{const i=cp(e);i!==r&&o(i)},[e,r]),r}function C9({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=w.useRef(null),a=w.useRef(t),s=ct(n);w.useEffect(()=>{t?a.current=!0:s(i.current)},[t,s]);const l=If(i,sa(e)),u=w.cloneElement(e,{ref:l});return t?u:o||!a.current&&r?null:u}const T9=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function R9(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function P9(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:l}=e,u=R9(e,T9);const c=w.useRef(null),d=If(c,sa(l)),p=S=>k=>{S&&c.current&&S(c.current,k)},h=w.useCallback(p(t),[t]),m=w.useCallback(p(n),[n]),v=w.useCallback(p(r),[r]),b=w.useCallback(p(o),[o]),g=w.useCallback(p(i),[i]),y=w.useCallback(p(a),[a]),x=w.useCallback(p(s),[s]);return Object.assign({},u,{nodeRef:c},t&&{onEnter:h},n&&{onEntering:m},r&&{onEntered:v},o&&{onExit:b},i&&{onExiting:g},a&&{onExited:y},s&&{addEndListener:x},{children:typeof l=="function"?(S,k)=>l(S,Object.assign({},k,{ref:d})):w.cloneElement(l,{ref:d})})}const A9=["component"];function $9(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const L9=w.forwardRef((e,t)=>{let{component:n}=e,r=$9(e,A9);const o=P9(r);return C.jsx(n,Object.assign({ref:t},o))});function M9({in:e,onTransition:t}){const n=w.useRef(null),r=w.useRef(!0),o=ct(t);return PS(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),PS(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function N9({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=w.useState(!t);t&&i&&a(!1);const s=M9({in:!!t,onTransition:u=>{const c=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(a(!0),n==null||n(u.element)))};Promise.resolve(o(u)).then(c,d=>{throw u.in||a(!0),d})}}),l=If(s,sa(e));return i&&!t?null:w.cloneElement(e,{ref:l})}function NS(e,t,n){return e?C.jsx(L9,Object.assign({},n,{component:e})):t?C.jsx(N9,Object.assign({},n,{transition:t})):C.jsx(C9,Object.assign({},n))}const j9=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function I9(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}let fp;function D9(e){return fp||(fp=new wv({ownerDocument:e==null?void 0:e.document})),fp}function F9(e){const t=Hf(),n=e||D9(t),r=w.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:w.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:w.useCallback(o=>{r.current.backdrop=o},[])})}const l2=w.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:s=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,runTransition:p,backdropTransition:h,runBackdropTransition:m,autoFocus:v=!0,enforceFocus:b=!0,restoreFocus:g=!0,restoreFocusOptions:y,renderDialog:x,renderBackdrop:S=ee=>C.jsx("div",Object.assign({},ee)),manager:k,container:_,onShow:O,onHide:E=()=>{},onExit:R,onExited:P,onExiting:L,onEnter:I,onEntering:U,onEntered:Q}=e,K=I9(e,j9);const G=Hf(),J=E9(_),M=F9(k),V=GT(),W=QT(n),[te,D]=w.useState(!n),B=w.useRef(null);w.useImperativeHandle(t,()=>M,[M]),zf&&!W&&n&&(B.current=up(G==null?void 0:G.document)),n&&te&&D(!1);const j=ct(()=>{if(M.add(),le.current=Dr(document,"keydown",H),he.current=Dr(document,"focus",()=>setTimeout(T),!0),O&&O(),v){var ee,Be;const ce=up((ee=(Be=M.dialog)==null?void 0:Be.ownerDocument)!=null?ee:G==null?void 0:G.document);M.dialog&&ce&&!Mc(M.dialog,ce)&&(B.current=ce,M.dialog.focus())}}),F=ct(()=>{if(M.remove(),le.current==null||le.current(),he.current==null||he.current(),g){var ee;(ee=B.current)==null||ee.focus==null||ee.focus(y),B.current=null}});w.useEffect(()=>{!n||!J||j()},[n,J,j]),w.useEffect(()=>{te&&F()},[te,F]),k9(()=>{F()});const T=ct(()=>{if(!b||!V()||!M.isTopModal())return;const ee=up(G==null?void 0:G.document);M.dialog&&ee&&!Mc(M.dialog,ee)&&M.dialog.focus()}),ie=ct(ee=>{ee.target===ee.currentTarget&&(u==null||u(ee),s===!0&&E())}),H=ct(ee=>{l&&i9(ee)&&M.isTopModal()&&(c==null||c(ee),ee.defaultPrevented||E())}),he=w.useRef(),le=w.useRef(),ue=(...ee)=>{D(!0),P==null||P(...ee)};if(!J)return null;const re=Object.assign({role:r,ref:M.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},K,{style:i,className:o,tabIndex:-1});let _e=x?x(re):C.jsx("div",Object.assign({},re,{children:w.cloneElement(a,{role:"document"})}));_e=NS(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:R,onExiting:L,onExited:ue,onEnter:I,onEntering:U,onEntered:Q,children:_e});let ke=null;return s&&(ke=S({ref:M.setBackdropRef,onClick:ie}),ke=NS(h,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ke})),C.jsx(C.Fragment,{children:yi.createPortal(C.jsxs(C.Fragment,{children:[ke,_e]}),J)})});l2.displayName="Modal";const z9=Object.assign(l2,{Manager:wv}),B9={[pn]:"show",[ir]:"show"},u2=w.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=w.useCallback((l,u)=>{n2(l),r==null||r(l,u)},[r]);return C.jsx(Bf,{ref:i,addEndListener:yv,...a,onEnter:s,childRef:sa(t),children:(l,u)=>w.cloneElement(t,{...u,className:de("fade",e,t.props.className,B9[l],n[l])})})});u2.displayName="Fade";const c2=w.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Ye(t,"offcanvas-body"),C.jsx(n,{ref:o,className:de(e,t),...r})));c2.displayName="OffcanvasBody";const H9={[pn]:"show",[ir]:"show"},f2=w.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:o=!1,unmountOnExit:i=!1,appear:a=!1,...s},l)=>(e=Ye(e,"offcanvas"),C.jsx(Bf,{ref:l,addEndListener:yv,in:r,mountOnEnter:o,unmountOnExit:i,appear:a,...s,childRef:sa(n),children:(u,c)=>w.cloneElement(n,{...c,className:de(t,n.props.className,(u===pn||u===Ls)&&`${e}-toggling`,H9[u])})})));f2.displayName="OffcanvasToggling";const d2=w.createContext({onHide(){}}),U9={"aria-label":f.string,onClick:f.func,variant:f.oneOf(["white"])},Sv=w.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>C.jsx("button",{ref:o,type:"button",className:de("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Sv.displayName="CloseButton";Sv.propTypes=U9;const p2=w.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const s=w.useContext(d2),l=ll(()=>{s==null||s.onHide(),r==null||r()});return C.jsxs("div",{ref:a,...i,children:[o,n&&C.jsx(Sv,{"aria-label":e,variant:t,onClick:l})]})});p2.displayName="AbstractModalHeader";const m2=w.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=Ye(e,"offcanvas-header"),C.jsx(p2,{ref:i,...o,className:de(t,e),closeLabel:n,closeButton:r})));m2.displayName="OffcanvasHeader";const W9=e=>w.forwardRef((t,n)=>C.jsx("div",{...t,ref:n,className:de(t.className,e)})),V9=W9("h5"),h2=w.forwardRef(({className:e,bsPrefix:t,as:n=V9,...r},o)=>(t=Ye(t,"offcanvas-title"),C.jsx(n,{ref:o,className:de(e,t),...r})));h2.displayName="OffcanvasTitle";const ii={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class g2 extends wv{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,cr(n,{[t]:`${parseFloat(cr(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],cr(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(ZF(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";or(n,ii.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),or(n,ii.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),or(n,ii.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();ez(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";or(n,ii.FIXED_CONTENT).forEach(i=>this.restore(r,i)),or(n,ii.STICKY_CONTENT).forEach(i=>this.restore(o,i)),or(n,ii.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let dp;function Y9(e){return dp||(dp=new g2(e)),dp}function K9(e){return C.jsx(f2,{...e})}function q9(e){return C.jsx(u2,{...e})}const v2=w.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:o="start",responsive:i,show:a=!1,backdrop:s=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:d,onHide:p,container:h,autoFocus:m=!0,enforceFocus:v=!0,restoreFocus:b=!0,restoreFocusOptions:g,onEntered:y,onExit:x,onExiting:S,onEnter:k,onEntering:_,onExited:O,backdropClassName:E,manager:R,renderStaticNode:P=!1,...L},I)=>{const U=w.useRef();e=Ye(e,"offcanvas");const[Q,K]=w.useState(!1),G=ll(p),J=S9(i||"xs","up");w.useEffect(()=>{K(i?a&&!J:a)},[a,i,J]);const M=w.useMemo(()=>({onHide:G}),[G]);function V(){return R||(u?(U.current||(U.current=new g2({handleContainerOverflow:!1})),U.current):Y9())}const W=(j,...F)=>{j&&(j.style.visibility="visible"),k==null||k(j,...F)},te=(j,...F)=>{j&&(j.style.visibility=""),O==null||O(...F)},D=w.useCallback(j=>C.jsx("div",{...j,className:de(`${e}-backdrop`,E)}),[E,e]),B=j=>C.jsx("div",{...j,...L,className:de(t,i?`${e}-${i}`:e,`${e}-${o}`),"aria-labelledby":r,children:n});return C.jsxs(C.Fragment,{children:[!Q&&(i||P)&&B({}),C.jsx(d2.Provider,{value:M,children:C.jsx(z9,{show:Q,ref:I,backdrop:s,container:h,keyboard:l,autoFocus:m,enforceFocus:v&&!u,restoreFocus:b,restoreFocusOptions:g,onEscapeKeyDown:c,onShow:d,onHide:G,onEnter:W,onEntering:_,onEntered:y,onExit:x,onExiting:S,onExited:te,manager:V(),transition:K9,backdropTransition:q9,renderBackdrop:D,renderDialog:B})})]})});v2.displayName="Offcanvas";const X9=Object.assign(v2,{Body:c2,Header:m2,Title:h2}),b2=w.forwardRef(({onHide:e,...t},n)=>{const r=w.useContext(Qo),o=ll(()=>{r==null||r.onToggle==null||r.onToggle(),e==null||e()});return C.jsx(X9,{ref:n,show:!!(r!=null&&r.expanded),...t,renderStaticNode:!0,onHide:o})});b2.displayName="NavbarOffcanvas";const y2=w.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},o)=>(t=Ye(t,"navbar-text"),C.jsx(n,{ref:o,className:de(e,t),...r})));y2.displayName="NavbarText";const x2=w.forwardRef((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:o="light",bg:i,fixed:a,sticky:s,className:l,as:u="nav",expanded:c,onToggle:d,onSelect:p,collapseOnSelect:h=!1,...m}=vv(e,{expanded:"onToggle"}),v=Ye(n,"navbar"),b=w.useCallback((...x)=>{p==null||p(...x),h&&c&&(d==null||d(!1))},[p,h,c,d]);m.role===void 0&&u!=="nav"&&(m.role="navigation");let g=`${v}-expand`;typeof r=="string"&&(g=`${g}-${r}`);const y=w.useMemo(()=>({onToggle:()=>d==null?void 0:d(!c),bsPrefix:v,expanded:!!c,expand:r}),[v,c,r,d]);return C.jsx(Qo.Provider,{value:y,children:C.jsx(Wo.Provider,{value:b,children:C.jsx(u,{ref:t,...m,className:de(l,v,r&&g,o&&`${v}-${o}`,i&&`bg-${i}`,s&&`sticky-${s}`,a&&`fixed-${a}`)})})})});x2.displayName="Navbar";const jS=Object.assign(x2,{Brand:e2,Collapse:o2,Offcanvas:b2,Text:y2,Toggle:i2});function _v(){const e=Bs(),t=async()=>{try{await Ee.post("http://localhost:5000/api/logout",{},{withCredentials:!0}),alert("로그아웃 되었습니다."),e("/login")}catch(n){console.error("❌ 로그아웃 실패:",n),alert("로그아웃 중 오류가 발생했습니다.")}};return C.jsx(jS,{bg:"dark",variant:"dark",style:{height:"7rem"},children:C.jsxs("div",{style:{width:"100%",display:"flex",alignItems:"center",margin:"1rem"},children:[C.jsx(jS.Brand,{href:"/",style:{fontSize:"3rem",marginRight:"30px"},children:"Smart-Bilboard"}),C.jsxs(sp,{style:{display:"flex"},children:[C.jsx(sp.Link,{href:"/create",style:{margin:"0 2vw",fontSize:"2rem"},children:"광고신청"}),C.jsx(sp.Link,{href:"/update",style:{margin:"0 2vw",fontSize:"2rem"},children:"광고수정"})]}),C.jsx("div",{style:{marginLeft:"auto",marginRight:"20px"},children:C.jsx(Ji,{variant:"outline-light",onClick:t,style:{fontSize:"1.5rem",padding:"0.6rem 1.2rem"},children:"로그아웃"})})]})})}cf.register(Ru,wm,Sm,ij,QN);const G9=()=>{const[e,t]=w.useState([]),[n,r]=w.useState(null),[o,i]=w.useState({M:0,W:0}),a="http://localhost:5000";w.useEffect(()=>{Ee.get(`${a}/api/my-ads`,{withCredentials:!0}).then(l=>{t(l.data),l.data.length>0&&r(l.data[0].ad_id)}).catch(l=>console.error(l))},[]),w.useEffect(()=>{n!==null&&Ee.get(`${a}/api/ad-view-by-age-gender/${n}`).then(l=>{i(l.data),console.log("📊 받아온 통계:",l.data)}).catch(l=>console.error(l))},[n]);const s={labels:["10대","20대","30대","40대","50대","60대","70대 이상"],datasets:[{label:"남성",backgroundColor:"rgba(71, 225, 167, 0.5)",borderColor:"rgb(71, 225, 167)",borderWidth:1,data:o.M||[0,0,0,0,0,0,0]},{label:"여성",backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgb(255, 99, 132)",borderWidth:1,data:o.W||[0,0,0,0,0,0,0]}]};return C.jsxs("div",{style:{backgroundColor:"#e6e9f3",minHeight:"100vh"},children:[C.jsx(_v,{}),C.jsxs("div",{style:{padding:"2rem"},children:[C.jsx("h3",{children:"📌 광고 선택"}),C.jsx("select",{onChange:l=>r(Number(l.target.value)),value:n||"",style:{padding:"0.5rem",fontSize:"1rem"},children:e.map(l=>C.jsx("option",{value:l.ad_id,children:l.title},l.ad_id))})]}),C.jsxs(mv,{children:[C.jsx("h3",{className:"mt-3",children:"📊 성별별 조회 수"}),C.jsx(yj,{data:s,options:{responsive:!0,plugins:{legend:{labels:{font:{size:16}}}},scales:{x:{ticks:{font:{size:16}}},y:{ticks:{font:{size:16}},title:{display:!0,text:"조회 수",font:{size:18}}}}}})]})]})},Q9="_btn_1tebu_163",Xt={"login-box":"_login-box_1tebu_21","user-box":"_user-box_1tebu_63",btn:Q9};function J9(){const[e,t]=w.useState({title:"",target_sex:"",target_age:""}),[n,r]=w.useState(null),o=s=>{const{name:l,value:u}=s.target;t(c=>({...c,[l]:u}))},i=s=>{r(s.target.files[0])},a=async s=>{if(s.preventDefault(),!n){alert("이미지 파일을 선택해주세요.");return}const l=new FormData;l.append("title",e.title),l.append("target_sex",e.target_sex),l.append("target_age",e.target_age),l.append("image",n);try{const u=await fetch("http://localhost:5000/api/create_ad",{method:"POST",body:l,credentials:"include"}),c=await u.json();u.ok?alert("✅ 광고 등록 성공!"):alert("❌ 등록 실패: "+c.message)}catch(u){alert("❌ 에러 발생: "+u.message)}};return C.jsxs("div",{style:{backgroundColor:"	#e6e9f3",minHeight:"100vh"},children:[C.jsx(_v,{}),C.jsxs("div",{className:Xt["login-box"],children:[C.jsx("h2",{children:"Create Ad"}),C.jsxs("form",{onSubmit:a,children:[C.jsxs("div",{className:Xt["user-box"],children:[C.jsx("input",{type:"text",name:"title",value:e.title,onChange:o,required:!0}),C.jsx("label",{children:"광고 제목"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsx("input",{type:"file",accept:"image/*",onChange:i,required:!0}),C.jsx("label",{style:{top:"-20px",fontSize:"12px",color:"#03e9f4"},children:"이미지 파일"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsxs("select",{name:"target_sex",value:e.target_sex,onChange:o,required:!0,children:[C.jsx("option",{value:"",disabled:!0,hidden:!0}),C.jsx("option",{value:"M",children:"남성"}),C.jsx("option",{value:"W",children:"여성"})]}),C.jsx("label",{children:"성별"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsxs("select",{name:"target_age",value:e.target_age,onChange:o,required:!0,children:[C.jsx("option",{value:"",disabled:!0,hidden:!0}),C.jsx("option",{value:1,children:"10대"}),C.jsx("option",{value:2,children:"20대"}),C.jsx("option",{value:3,children:"30대"}),C.jsx("option",{value:4,children:"40대"}),C.jsx("option",{value:5,children:"50대"}),C.jsx("option",{value:6,children:"60대 이상"})]}),C.jsx("label",{children:"연령대"})]}),C.jsx("button",{type:"submit",className:Xt.btn,children:"광고 등록"})]})]})]})}const Z9=({children:e})=>{const[t,n]=w.useState(null);return w.useEffect(()=>{Ee.get("http://localhost:5000/api/check",{withCredentials:!0}).then(r=>n(r.data.loggedIn)).catch(()=>n(!1))},[]),t===null?C.jsx("div",{children:"Loading..."}):t?e:C.jsx(cO,{to:"/login",replace:!0})};function eV(e,t,n){const r=w.useRef(e!==void 0),[o,i]=w.useState(t),a=e!==void 0,s=r.current;return r.current=a,!a&&s&&o!==t&&i(t),[a?e:o,w.useCallback((...l)=>{const[u,...c]=l;let d=n==null?void 0:n(u,...c);return i(u),d},[n])]}const Uf=w.createContext(null);function tV(e){const t=GT();return[e[0],w.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}const nV=yF({defaultModifiers:[nF,sF,BD,UD,iF,eF,cF,ID]}),rV=["enabled","placement","strategy","modifiers"];function oV(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const iV={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},aV={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const r=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==n.id);r.length?t.setAttribute("aria-describedby",r.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&o==="tooltip"&&"setAttribute"in r){const i=r.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",i?`${i},${n.id}`:n.id)}}},sV=[];function lV(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=sV}=n,s=oV(n,rV);const l=w.useRef(a),u=w.useRef(),c=w.useCallback(()=>{var b;(b=u.current)==null||b.update()},[]),d=w.useCallback(()=>{var b;(b=u.current)==null||b.forceUpdate()},[]),[p,h]=tV(w.useState({placement:o,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),m=w.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:b})=>{const g={},y={};Object.keys(b.elements).forEach(x=>{g[x]=b.styles[x],y[x]=b.attributes[x]}),h({state:b,styles:g,attributes:y,update:c,forceUpdate:d,placement:b.placement})}}),[c,d,h]),v=w.useMemo(()=>(ns(l.current,a)||(l.current=a),l.current),[a]);return w.useEffect(()=>{!u.current||!r||u.current.setOptions({placement:o,strategy:i,modifiers:[...v,m,iV]})},[i,o,m,r,v]),w.useEffect(()=>{if(!(!r||e==null||t==null))return u.current=nV(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...v,aV,m]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,h(b=>Object.assign({},b,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p}const IS=()=>{};function uV(e){return e.button===0}function cV(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const pp=e=>e&&("current"in e?e.current:e),DS={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function fV(e,t=IS,{disabled:n,clickTrigger:r="click"}={}){const o=w.useRef(!1),i=w.useRef(!1),a=w.useCallback(u=>{const c=pp(e);SF(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!c||cV(u)||!uV(u)||!!Mc(c,u.target)||i.current,i.current=!1},[e]),s=ct(u=>{const c=pp(e);c&&Mc(c,u.target)?i.current=!0:i.current=!1}),l=ct(u=>{o.current||t(u)});w.useEffect(()=>{var u,c;if(n||e==null)return;const d=Ff(pp(e)),p=d.defaultView||window;let h=(u=p.event)!=null?u:(c=p.parent)==null?void 0:c.event,m=null;DS[r]&&(m=Dr(d,DS[r],s,!0));const v=Dr(d,r,a,!0),b=Dr(d,r,y=>{if(y===h){h=void 0;return}l(y)});let g=[];return"ontouchstart"in d.documentElement&&(g=[].slice.call(d.body.children).map(y=>Dr(y,"mousemove",IS))),()=>{m==null||m(),v(),b(),g.forEach(y=>y())}},[e,n,r,a,s,l])}function dV(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function pV(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function mV({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:l={}}){var u,c,d,p,h;const m=dV(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:i?"fixed":l.strategy,modifiers:pV(Object.assign({},m,{eventListeners:{enabled:t,options:(u=m.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},(c=m.preventOverflow)==null?void 0:c.options):(d=m.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:o},(p=m.offset)==null?void 0:p.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},(h=m.arrow)==null?void 0:h.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}const hV=["children","usePopper"];function gV(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const vV=()=>{};function w2(e={}){const t=w.useContext(Uf),[n,r]=VW(),o=w.useRef(!1),{flip:i,offset:a,rootCloseEvent:s,fixed:l=!1,placement:u,popperConfig:c={},enableEventListeners:d=!0,usePopper:p=!!t}=e,h=(t==null?void 0:t.show)==null?!!e.show:t.show;h&&!o.current&&(o.current=!0);const m=_=>{t==null||t.toggle(!1,_)},{placement:v,setMenu:b,menuElement:g,toggleElement:y}=t||{},x=lV(y,g,mV({placement:u||v||"bottom-start",enabled:p,enableEvents:d??h,offset:a,flip:i,fixed:l,arrowElement:n,popperConfig:c})),S=Object.assign({ref:b||vV,"aria-labelledby":y==null?void 0:y.id},x.attributes.popper,{style:x.styles.popper}),k={show:h,placement:v,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:p?x:null,arrowProps:p?Object.assign({ref:r},x.attributes.arrow,{style:x.styles.arrow}):{}};return fV(g,m,{clickTrigger:s,disabled:!h}),[S,k]}function S2(e){let{children:t,usePopper:n=!0}=e,r=gV(e,hV);const[o,i]=w2(Object.assign({},r,{usePopper:n}));return C.jsx(C.Fragment,{children:t(o,i)})}S2.displayName="DropdownMenu";const _2={prefix:String(Math.round(Math.random()*1e10)),current:0},k2=X.createContext(_2),bV=X.createContext(!1);let mp=new WeakMap;function yV(e=!1){let t=w.useContext(k2),n=w.useRef(null);if(n.current===null&&!e){var r,o;let i=(o=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(r=o.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(i){let a=mp.get(i);a==null?mp.set(i,{id:t.current,state:i.memoizedState}):i.memoizedState!==a.state&&(t.current=a.id,mp.delete(i))}n.current=++t.current}return n.current}function xV(e){let t=w.useContext(k2),n=yV(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`}function wV(e){let t=X.useId(),[n]=w.useState(EV()),r=n?"react-aria":`react-aria${_2.prefix}`;return e||`${r}-${t}`}const SV=typeof X.useId=="function"?wV:xV;function _V(){return!1}function kV(){return!0}function OV(e){return()=>{}}function EV(){return typeof X.useSyncExternalStore=="function"?X.useSyncExternalStore(OV,_V,kV):w.useContext(bV)}const O2=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},FS=()=>{};function E2(){const e=SV(),{show:t=!1,toggle:n=FS,setToggle:r,menuElement:o}=w.useContext(Uf)||{},i=w.useCallback(s=>{n(!t,s)},[t,n]),a={id:e,ref:r||FS,onClick:i,"aria-expanded":!!t};return o&&O2(o)&&(a["aria-haspopup"]=!0),[a,{show:t,toggle:n}]}function C2({children:e}){const[t,n]=E2();return C.jsx(C.Fragment,{children:e(t,n)})}C2.displayName="DropdownToggle";const CV=["eventKey","disabled","onClick","active","as"];function TV(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function T2({key:e,href:t,active:n,disabled:r,onClick:o}){const i=w.useContext(Wo),a=w.useContext(Df),{activeKey:s}=a||{},l=Ms(e,t),u=n==null&&e!=null?Ms(s)===l:n;return[{onClick:ct(d=>{r||(o==null||o(d),i&&!d.isPropagationStopped()&&i(l,d))}),"aria-disabled":r||void 0,"aria-selected":u,[aa("dropdown-item")]:""},{isActive:u}]}const R2=w.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=pg}=e,s=TV(e,CV);const[l]=T2({key:n,href:s.href,disabled:r,onClick:o,active:i});return C.jsx(a,Object.assign({},s,{ref:t},l))});R2.displayName="DropdownItem";function zS(){const e=UT(),t=w.useRef(null),n=w.useCallback(r=>{t.current=r,e()},[e]);return[t,n]}function ul({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${aa("dropdown-item")}]`,focusFirstItemOnShow:i,placement:a="bottom-start",children:s}){const l=Hf(),[u,c]=eV(t,e,r),[d,p]=zS(),h=d.current,[m,v]=zS(),b=m.current,g=QT(u),y=w.useRef(null),x=w.useRef(!1),S=w.useContext(Wo),k=w.useCallback((L,I,U=I==null?void 0:I.type)=>{c(L,{originalEvent:I,source:U})},[c]),_=ct((L,I)=>{n==null||n(L,I),k(!1,I,"select"),I.isPropagationStopped()||S==null||S(L,I)}),O=w.useMemo(()=>({toggle:k,placement:a,show:u,menuElement:h,toggleElement:b,setMenu:p,setToggle:v}),[k,a,u,h,b,p,v]);h&&g&&!u&&(x.current=h.contains(h.ownerDocument.activeElement));const E=ct(()=>{b&&b.focus&&b.focus()}),R=ct(()=>{const L=y.current;let I=i;if(I==null&&(I=d.current&&O2(d.current)?"keyboard":!1),I===!1||I==="keyboard"&&!/^key.+$/.test(L))return;const U=or(d.current,o)[0];U&&U.focus&&U.focus()});w.useEffect(()=>{u?R():x.current&&(x.current=!1,E())},[u,x,E,R]),w.useEffect(()=>{y.current=null});const P=(L,I)=>{if(!d.current)return null;const U=or(d.current,o);let Q=U.indexOf(L)+I;return Q=Math.max(0,Math.min(Q,U.length)),U[Q]};return YW(w.useCallback(()=>l.document,[l]),"keydown",L=>{var I,U;const{key:Q}=L,K=L.target,G=(I=d.current)==null?void 0:I.contains(K),J=(U=m.current)==null?void 0:U.contains(K);if(/input|textarea/i.test(K.tagName)&&(Q===" "||Q!=="Escape"&&G||Q==="Escape"&&K.type==="search")||!G&&!J||Q==="Tab"&&(!d.current||!u))return;y.current=L.type;const V={originalEvent:L,source:L.type};switch(Q){case"ArrowUp":{const W=P(K,-1);W&&W.focus&&W.focus(),L.preventDefault();return}case"ArrowDown":if(L.preventDefault(),!u)c(!0,V);else{const W=P(K,1);W&&W.focus&&W.focus()}return;case"Tab":t2(K.ownerDocument,"keyup",W=>{var te;(W.key==="Tab"&&!W.target||!((te=d.current)!=null&&te.contains(W.target)))&&c(!1,V)},{once:!0});break;case"Escape":Q==="Escape"&&(L.preventDefault(),L.stopPropagation()),c(!1,V);break}}),C.jsx(Wo.Provider,{value:_,children:C.jsx(Uf.Provider,{value:O,children:s})})}ul.displayName="Dropdown";ul.Menu=S2;ul.Toggle=C2;ul.Item=R2;const kv=w.createContext({});kv.displayName="DropdownContext";const P2=w.forwardRef(({className:e,bsPrefix:t,as:n="hr",role:r="separator",...o},i)=>(t=Ye(t,"dropdown-divider"),C.jsx(n,{ref:i,className:de(e,t),role:r,...o})));P2.displayName="DropdownDivider";const A2=w.forwardRef(({className:e,bsPrefix:t,as:n="div",role:r="heading",...o},i)=>(t=Ye(t,"dropdown-header"),C.jsx(n,{ref:i,className:de(e,t),role:r,...o})));A2.displayName="DropdownHeader";const $2=w.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:o,active:i,as:a=bv,...s},l)=>{const u=Ye(e,"dropdown-item"),[c,d]=T2({key:n,href:s.href,disabled:r,onClick:o,active:i});return C.jsx(a,{...s,...c,ref:l,className:de(t,u,d.isActive&&"active",r&&"disabled")})});$2.displayName="DropdownItem";const L2=w.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},o)=>(t=Ye(t,"dropdown-item-text"),C.jsx(n,{ref:o,className:de(e,t),...r})));L2.displayName="DropdownItemText";const Ov=w.createContext(null);Ov.displayName="InputGroupContext";function M2(e,t){return e}const ai=f.oneOf(["start","end"]),RV=f.oneOfType([ai,f.shape({sm:ai}),f.shape({md:ai}),f.shape({lg:ai}),f.shape({xl:ai}),f.shape({xxl:ai}),f.object]);function N2(e,t,n){const r=n?"top-end":"top-start",o=n?"top-start":"top-end",i=n?"bottom-end":"bottom-start",a=n?"bottom-start":"bottom-end",s=n?"right-start":"left-start",l=n?"right-end":"left-end",u=n?"left-start":"right-start",c=n?"left-end":"right-end";let d=e?a:i;return t==="up"?d=e?o:r:t==="end"?d=e?c:u:t==="start"?d=e?l:s:t==="down-centered"?d="bottom":t==="up-centered"&&(d="top"),d}const Ev=w.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:o=!0,show:i,renderOnMount:a,as:s="div",popperConfig:l,variant:u,...c},d)=>{let p=!1;const h=w.useContext(Qo),m=Ye(e,"dropdown-menu"),{align:v,drop:b,isRTL:g}=w.useContext(kv);n=n||v;const y=w.useContext(Ov),x=[];if(n)if(typeof n=="object"){const L=Object.keys(n);if(L.length){const I=L[0],U=n[I];p=U==="start",x.push(`${m}-${I}-${U}`)}}else n==="end"&&(p=!0);const S=N2(p,b,g),[k,{hasShown:_,popper:O,show:E,toggle:R}]=w2({flip:o,rootCloseEvent:r,show:i,usePopper:!h&&x.length===0,offset:[0,2],popperConfig:l,placement:S});if(k.ref=xv(M2(d),k.ref),a2(()=>{E&&(O==null||O.update())},[E]),!_&&!a&&!y)return null;typeof s!="string"&&(k.show=E,k.close=()=>R==null?void 0:R(!1),k.align=n);let P=c.style;return O!=null&&O.placement&&(P={...c.style,...k.style},c["x-placement"]=O.placement),C.jsx(s,{...c,...k,style:P,...(x.length||h)&&{"data-bs-popper":"static"},className:de(t,m,E&&"show",p&&`${m}-end`,u&&`${m}-${u}`,...x)})});Ev.displayName="DropdownMenu";const Cv=w.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:o=Ji,...i},a)=>{const s=Ye(e,"dropdown-toggle"),l=w.useContext(Uf);r!==void 0&&(i.bsPrefix=r);const[u]=E2();return u.ref=xv(u.ref,M2(a)),C.jsx(o,{className:de(n,s,t&&`${s}-split`,(l==null?void 0:l.show)&&"show"),...u,...i})});Cv.displayName="DropdownToggle";const j2=w.forwardRef((e,t)=>{const{bsPrefix:n,drop:r="down",show:o,className:i,align:a="start",onSelect:s,onToggle:l,focusFirstItemOnShow:u,as:c="div",navbar:d,autoClose:p=!0,...h}=vv(e,{show:"onToggle"}),m=w.useContext(Ov),v=Ye(n,"dropdown"),b=JA(),g=O=>p===!1?O==="click":p==="inside"?O!=="rootClose":p==="outside"?O!=="select":!0,y=ll((O,E)=>{var R;!((R=E.originalEvent)==null||(R=R.target)==null)&&R.classList.contains("dropdown-toggle")&&E.source==="mousedown"||(E.originalEvent.currentTarget===document&&(E.source!=="keydown"||E.originalEvent.key==="Escape")&&(E.source="rootClose"),g(E.source)&&(l==null||l(O,E)))}),S=N2(a==="end",r,b),k=w.useMemo(()=>({align:a,drop:r,isRTL:b}),[a,r,b]),_={down:v,"down-centered":`${v}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return C.jsx(kv.Provider,{value:k,children:C.jsx(ul,{placement:S,show:o,onSelect:s,onToggle:y,focusFirstItemOnShow:u,itemSelector:`.${v}-item:not(.disabled):not(:disabled)`,children:m?h.children:C.jsx(c,{...h,ref:t,className:de(i,o&&"show",_[r])})})})});j2.displayName="Dropdown";const I2=Object.assign(j2,{Toggle:Cv,Menu:Ev,Item:$2,ItemText:L2,Divider:P2,Header:A2}),PV={id:f.string,href:f.string,onClick:f.func,title:f.node.isRequired,disabled:f.bool,align:RV,menuRole:f.string,renderMenuOnMount:f.bool,rootCloseEvent:f.string,menuVariant:f.oneOf(["dark"]),flip:f.bool,bsPrefix:f.string,variant:f.string,size:f.string},Tv=w.forwardRef(({title:e,children:t,bsPrefix:n,rootCloseEvent:r,variant:o,size:i,menuRole:a,renderMenuOnMount:s,disabled:l,href:u,id:c,menuVariant:d,flip:p,...h},m)=>C.jsxs(I2,{ref:m,...h,children:[C.jsx(Cv,{id:c,href:u,size:i,variant:o,disabled:l,childBsPrefix:n,children:e}),C.jsx(Ev,{role:a,renderOnMount:s,rootCloseEvent:r,variant:d,flip:p,children:t})]}));Tv.displayName="DropdownButton";Tv.propTypes=PV;function AV(){const[e,t]=w.useState([]),[n,r]=w.useState(0),[o,i]=w.useState({title:"",target_sex:"",target_age:""}),[a,s]=w.useState(null);w.useEffect(()=>{async function m(){try{const b=await(await fetch("http://localhost:5000/api/my-ads",{credentials:"include"})).json();t(b),b.length>0&&(r(0),l(b[0]))}catch{alert("광고 목록을 불러오는데 실패했습니다.")}}m()},[]);const l=m=>{i({title:m.title,target_sex:m.target_sex,target_age:m.target_age}),s(null)},u=m=>{const v=Number(m);r(v),l(e[v])},c=m=>{const{name:v,value:b}=m.target;i(g=>({...g,[v]:b}))},d=m=>{s(m.target.files[0])},p=async m=>{if(m.preventDefault(),e.length===0)return;const v=e[n].ad_id,b=new FormData;b.append("title",o.title),b.append("target_sex",o.target_sex),b.append("target_age",o.target_age),a&&b.append("image",a);try{const g=await fetch(`http://localhost:5000/api/ad/${v}`,{method:"PUT",body:b,credentials:"include"}),y=await g.json();g.ok?alert("✅ 광고 수정 성공!"):alert("❌ 수정 실패: "+y.message)}catch(g){alert("❌ 에러 발생: "+g.message)}},h=async()=>{if(e.length===0||!window.confirm("정말 이 광고를 삭제하시겠습니까?"))return;const v=e[n].ad_id;try{const b=await fetch(`http://localhost:5000/api/ad/${v}`,{method:"DELETE",credentials:"include"}),g=await b.json();if(b.ok){alert("✅ 광고 삭제 성공!");const y=[...e];y.splice(n,1),t(y),y.length>0?(r(0),l(y[0])):(i({title:"",target_sex:"",target_age:""}),s(null))}else alert("❌ 삭제 실패: "+g.message)}catch(b){alert("❌ 에러 발생: "+b.message)}};return C.jsxs("div",{style:{backgroundColor:"	#e6e9f3",minHeight:"100vh"},children:[C.jsx(_v,{}),C.jsxs("div",{className:Xt["login-box"],children:[C.jsx("h2",{children:"Update Ad"}),e.length>0?C.jsx(C.Fragment,{children:C.jsxs("form",{onSubmit:p,children:[C.jsxs("div",{className:Xt["user-box"],children:[C.jsx("input",{type:"text",name:"title",value:o.title,onChange:c,required:!0}),C.jsx("label",{children:"광고 제목"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsx("input",{type:"file",accept:"image/*",onChange:d}),C.jsx("label",{style:{top:"-20px",fontSize:"12px",color:"#03e9f4"},children:"이미지 변경 (선택 사항)"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsxs("select",{name:"target_sex",value:o.target_sex,onChange:c,required:!0,children:[C.jsx("option",{value:"",disabled:!0,hidden:!0}),C.jsx("option",{value:"M",children:"남성"}),C.jsx("option",{value:"W",children:"여성"})]}),C.jsx("label",{children:"성별"})]}),C.jsxs("div",{className:Xt["user-box"],children:[C.jsxs("select",{name:"target_age",value:o.target_age,onChange:c,required:!0,children:[C.jsx("option",{value:"",disabled:!0,hidden:!0}),C.jsx("option",{value:1,children:"10대"}),C.jsx("option",{value:2,children:"20대"}),C.jsx("option",{value:3,children:"30대"}),C.jsx("option",{value:4,children:"40대"}),C.jsx("option",{value:5,children:"50대"}),C.jsx("option",{value:6,children:"60대 이상"})]}),C.jsx("label",{children:"연령대"})]}),C.jsxs("div",{className:"d-flex gap-2 align-items-center mb-3",children:[C.jsx(Tv,{id:"dropdown-basic-button",title:"광고 선택",onSelect:u,children:e.map((m,v)=>C.jsx(I2.Item,{eventKey:v,children:m.title},m.ad_id))}),C.jsx(Ji,{variant:"outline-danger",onClick:h,children:"광고 삭제"})]}),C.jsx("button",{type:"submit",className:Xt.btn,children:"광고 수정"})]})}):C.jsx("p",{children:"등록된 광고가 없습니다."})]})]})}function $V(){const[e,t]=w.useState(0);return C.jsx(C.Fragment,{children:C.jsxs(cA,{children:[C.jsx(wo,{path:"/login",element:C.jsx(RL,{})}),C.jsx(wo,{path:"/Register",element:C.jsx(LL,{})}),C.jsx(wo,{path:"/",element:C.jsx(Z9,{children:C.jsx(G9,{})})}),C.jsx(wo,{path:"/Create",element:C.jsx(J9,{})}),C.jsx(wo,{path:"/Update",element:C.jsx(AV,{})}),C.jsx(wo,{path:"/smart_billboard_frontend",element:C.jsx(cO,{to:"/"})})]})})}eO(document.getElementById("root")).render(C.jsx(MA,{basename:"/smart_billboard_frontend",children:C.jsx(w.StrictMode,{children:C.jsx($V,{})})}));
