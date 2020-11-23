/*! For license information please see 5791669a.0359801b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var _=w.prototype=new j;_.constructor=w,r(_,O.prototype),_.isPureReactComponent=!0;var S={current:null},k={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,R=[];function x(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return n(r,e,""===t?"."+$(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+$(o=e[l],l);c+=A(o,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=m&&e[m]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=A(o=o.value,u=t+$(o,l++),n,r);else if("object"===o)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function D(e,t,n){return null==e?0:A(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(N,"$&/")+"/"),D(e,L,t=x(t,a,r,o)),I(t)}function H(){var e=S.current;if(null===e)throw Error(y(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,M,t=x(null,null,t,n)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(y(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,n){return H().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,n){return H().useReducer(e,t,n)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:c,Profiler:u,StrictMode:l,Suspense:d,createElement:T,cloneElement:function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},V={default:F},q=V&&F||V;e.exports=q.default||q},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(114),n(113)),i={id:"title-and-meta-tags",title:"Title and Meta Tags",sidebar_label:"Title & Meta Tags"},c={unversionedId:"title-and-meta-tags",id:"title-and-meta-tags",isDocsHomePage:!1,title:"Title and Meta Tags",description:"Changing the title tag",source:"@site/../docs/title-and-meta-tags.md",slug:"/title-and-meta-tags",permalink:"/docs/title-and-meta-tags",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/title-and-meta-tags.md",version:"current",lastUpdatedBy:"Ian Sutherland",lastUpdatedAt:1571940855,sidebar_label:"Title & Meta Tags",sidebar:"docs",previous:{title:"Integrating with an API Backend",permalink:"/docs/integrating-with-an-api-backend"},next:{title:"Deployment",permalink:"/docs/deployment"}},l=[{value:"Changing the title tag",id:"changing-the-title-tag",children:[]},{value:"Generating Dynamic <code>&lt;meta&gt;</code> Tags on the Server",id:"generating-dynamic-meta-tags-on-the-server",children:[]},{value:"Injecting Data from the Server into the Page",id:"injecting-data-from-the-server-into-the-page",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"changing-the-title-tag"},"Changing the title tag"),Object(a.b)("p",null,"You can find the source HTML file in the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder of the generated project. You may edit the ",Object(a.b)("inlineCode",{parentName:"p"},"<title>")," tag in it to change the title from \u201cReact App\u201d to anything else."),Object(a.b)("p",null,"Note that normally you wouldn\u2019t edit files in the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder very often. For example, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-a-stylesheet"}),"adding a stylesheet")," is done without touching the HTML."),Object(a.b)("p",null,"If you need to dynamically update the page title based on the content, you can use the browser ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/title"}),Object(a.b)("inlineCode",{parentName:"a"},"document.title"))," API. For more complex scenarios when you want to change the title from React components, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nfl/react-helmet"}),"React Helmet"),", a third party library."),Object(a.b)("p",null,"If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#generating-dynamic-meta-tags-on-the-server"}),"this section"),". Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/pre-rendering-into-static-html-files"}),"here"),"."),Object(a.b)("h2",{id:"generating-dynamic-meta-tags-on-the-server"},"Generating Dynamic ",Object(a.b)("inlineCode",{parentName:"h2"},"<meta>")," Tags on the Server"),Object(a.b)("p",null,"Since Create React App doesn\u2019t support server rendering, you might be wondering how to make ",Object(a.b)("inlineCode",{parentName:"p"},"<meta>")," tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta property="og:title" content="__OG_TITLE__" />\n    <meta property="og:description" content="__OG_DESCRIPTION__" />\n  </head>\n</html>\n')),Object(a.b)("p",null,"Then, on the server, regardless of the backend you use, you can read ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," into memory and replace ",Object(a.b)("inlineCode",{parentName:"p"},"__OG_TITLE__"),", ",Object(a.b)("inlineCode",{parentName:"p"},"__OG_DESCRIPTION__"),", and any other placeholders with values depending on the current URL. Make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!"),Object(a.b)("p",null,"If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in basic cases."),Object(a.b)("h2",{id:"injecting-data-from-the-server-into-the-page"},"Injecting Data from the Server into the Page"),Object(a.b)("p",null,"Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<!doctype html>\n<html lang="en">\n  <head>\n    <script>\n      window.SERVER_DATA = __SERVER_DATA__;\n    <\/script>\n')),Object(a.b)("p",null,"Then, on the server, you can replace ",Object(a.b)("inlineCode",{parentName:"p"},"__SERVER_DATA__")," with a JSON of real data right before sending the response. The client code can then read ",Object(a.b)("inlineCode",{parentName:"p"},"window.SERVER_DATA")," to use it. ",Object(a.b)("strong",{parentName:"p"},"Make sure to ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0"}),"sanitize the JSON before sending it to the client")," as it makes your app vulnerable to XSS attacks.")))}s.isMDXComponent=!0}}]);