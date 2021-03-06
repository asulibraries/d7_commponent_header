/*! For license information please see components-library.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("preact"),require("emotion"),require("prop-types")):"function"==typeof define&&define.amd?define("componentsLibrary",["preact","emotion","propTypes"],n):"object"==typeof exports?exports.componentsLibrary=n(require("preact"),require("emotion"),require("prop-types")):e.componentsLibrary=n(e.preact,e.emotion,e.propTypes)}(self,(function(e,n,t){return(()=>{"use strict";var r={281:(e,n,t)=>{t.r(n),t.d(n,{Button:()=>Ee,FoldableCard:()=>Jt,Header:()=>vo,Heading:()=>Hr,HydratePreact:()=>co,Icon:()=>Yt,Login:()=>ro,Logo:()=>so,Nav:()=>Xr,Navbar:()=>io,Panel:()=>wo,RenderPreact:()=>lo,Search:()=>no,Title:()=>go,UniversalSearch:()=>to,alterLoginUrl:()=>uo,checkFirstLoad:()=>po,checkSSOCookie:()=>fo,initHeader:()=>ho});var r,o,i,a=t(555),s=0,c=[],l=a.options.__r,f=a.options.diffed,u=a.options.__c,d=a.options.unmount;function p(e,n){a.options.__h&&a.options.__h(o,e,s||n),s=0;var t=o.__H||(o.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function h(e){return s=1,m(z,e)}function m(e,n,t){var i=p(r++,2);return i.t=e,i.__c||(i.__=[t?t(n):z(void 0,n),function(e){var n=i.t(i.__[0],e);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function g(e,n){var t=p(r++,3);!a.options.__s&&O(t.__H,n)&&(t.__=e,t.__H=n,o.__H.__h.push(t))}function b(e,n){var t=p(r++,4);!a.options.__s&&O(t.__H,n)&&(t.__=e,t.__H=n,o.__h.push(t))}function y(e){return s=5,v((function(){return{current:e}}),[])}function v(e,n){var t=p(r++,7);return O(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function _(){c.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(x),e.__H.__h.forEach(k),e.__H.__h=[]}catch(n){e.__H.__h=[],a.options.__e(n,e.__v)}})),c=[]}a.options.__r=function(e){l&&l(e),r=0;var n=(o=e.__c).__H;n&&(n.__h.forEach(x),n.__h.forEach(k),n.__h=[])},a.options.diffed=function(e){f&&f(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==c.push(n)&&i===a.options.requestAnimationFrame||((i=a.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),w&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);w&&(n=requestAnimationFrame(t))})(_))},a.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(x),e.__h=e.__h.filter((function(e){return!e.__||k(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],a.options.__e(t,e.__v)}})),u&&u(e,n)},a.options.unmount=function(e){d&&d(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(x)}catch(e){a.options.__e(e,n.__v)}};var w="function"==typeof requestAnimationFrame;function x(e){"function"==typeof e.__c&&e.__c()}function k(e){e.__c=e.__()}function O(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function z(e,n){return"function"==typeof n?n(e):n}function j(e,n){for(var t in n)e[t]=n[t];return e}function P(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}function S(e){this.props=e}(S.prototype=new a.Component).isPureReactComponent=!0,S.prototype.shouldComponentUpdate=function(e,n){return P(this.props,e)||P(this.state,n)};var $=a.options.__b;a.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$&&$(e)};var C="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function T(e){function n(n,t){var r=j({},n);return delete r.ref,e(r,(t=n.ref||t)&&("object"!=typeof t||"current"in t)?t:null)}return n.$$typeof=C,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var E=function(e,n){return null==e?null:(0,a.toChildArray)((0,a.toChildArray)(e).map(n))},M={map:E,forEach:E,count:function(e){return e?(0,a.toChildArray)(e).length:0},only:function(e){var n=(0,a.toChildArray)(e);if(1!==n.length)throw"Children.only";return n[0]},toArray:a.toChildArray},L=a.options.__e;function A(e){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),(e=j({},e)).__c=null,e.__k=e.__k&&e.__k.map(A)),e}function N(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(N)),e}function I(){this.__u=0,this.t=null,this.__b=null}function F(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function H(){this.u=null,this.o=null}a.options.__e=function(e,n,t){if(e.then)for(var r,o=n;o=o.__;)if((r=o.__c)&&r.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),r.__c(e,n.__c);L(e,n,t)},(I.prototype=new a.Component).__c=function(e,n){var t=this;null==t.t&&(t.t=[]),t.t.push(n);var r=F(t.__v),o=!1,i=function(){o||(o=!0,n.componentWillUnmount=n.__c,r?r(a):a())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){i(),n.__c&&n.__c()};var a=function(){var e;if(!--t.__u)for(t.__v.__k[0]=N(t.state.__e),t.setState({__e:t.__b=null});e=t.t.pop();)e.forceUpdate()},s=t.__v;s&&!0===s.__h||t.__u++||t.setState({__e:t.__b=t.__v.__k[0]}),e.then(i,i)},I.prototype.componentWillUnmount=function(){this.t=[]},I.prototype.render=function(e,n){this.__b&&(this.__v.__k&&(this.__v.__k[0]=A(this.__b)),this.__b=null);var t=n.__e&&(0,a.createElement)(a.Fragment,null,e.fallback);return t&&(t.__h=null),[(0,a.createElement)(a.Fragment,null,n.__e?null:e.children),t]};var R=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function U(e){return this.getChildContext=function(){return e.context},e.children}function D(e){var n=this,t=e.i,r=(0,a.createElement)(U,{context:n.context},e.__v);n.componentWillUnmount=function(){var e=n.l.parentNode;e&&e.removeChild(n.l),(0,a.__u)(n.s)},n.i&&n.i!==t&&(n.componentWillUnmount(),n.h=!1),e.__v?n.h?(t.__k=n.__k,(0,a.render)(r,t),n.__k=t.__k):(n.l=document.createTextNode(""),n.__k=t.__k,(0,a.hydrate)("",t),t.appendChild(n.l),n.h=!0,n.i=t,(0,a.render)(r,t,n.l),t.__k=n.__k,n.__k=n.l.__k):n.h&&n.componentWillUnmount(),n.s=r}(H.prototype=new a.Component).__e=function(e){var n=this,t=F(n.__v),r=n.o.get(e);return r[0]++,function(o){var i=function(){n.props.revealOrder?(r.push(o),R(n,e,r)):o()};t?t(i):i()}},H.prototype.render=function(e){this.u=null,this.o=new Map;var n=(0,a.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},H.prototype.componentDidUpdate=H.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){R(e,t,n)}))};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,q=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;a.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(a.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var Y=a.options.event;function X(){}function B(){return this.cancelBubble}function G(){return this.defaultPrevented}a.options.event=function(e){return Y&&(e=Y(e)),e.persist=X,e.isPropagationStopped=B,e.isDefaultPrevented=G,e.nativeEvent=e};var K,Z={configurable:!0,get:function(){return this.class}},J=a.options.vnode;a.options.vnode=function(e){var n=e.type,t=e.props,r=t;if("string"==typeof n){for(var o in r={},t){var i=t[o];"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+n)&&!V.test(t.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():q.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,a.toChildArray)(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),e.props=r}n&&t.class!=t.className&&(Z.enumerable="className"in t,null!=t.className&&(r.class=t.className),Object.defineProperty(r,"className",Z)),e.$$typeof=W,J&&J(e)};var Q=a.options.__r;a.options.__r=function(e){Q&&Q(e),K=e.__c};var ee={ReactCurrentDispatcher:{current:{readContext:function(e){return K.__n[e.__c].props.value}}}};function ne(e){return!!e&&e.$$typeof===W}a.Fragment;const te={useState:h,useReducer:m,useEffect:g,useLayoutEffect:b,useRef:y,useImperativeHandle:function(e,n,t){s=6,b((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))},useMemo:v,useCallback:function(e,n){return s=8,v((function(){return e}),n)},useContext:function(e){var n=o.context[e.__c],t=p(r++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(o)),n.props.value):e.__},useDebugValue:function(e,n){a.options.useDebugValue&&a.options.useDebugValue(n?n(e):e)},version:"16.8.0",Children:M,render:function(e,n,t){return null==n.__k&&(n.textContent=""),(0,a.render)(e,n),"function"==typeof t&&t(),e?e.__c:null},hydrate:function(e,n,t){return(0,a.hydrate)(e,n),"function"==typeof t&&t(),e?e.__c:null},unmountComponentAtNode:function(e){return!!e.__k&&((0,a.render)(null,e),!0)},createPortal:function(e,n){return(0,a.createElement)(D,{__v:e,i:n})},createElement:a.createElement,createContext:a.createContext,createFactory:function(e){return a.createElement.bind(null,e)},cloneElement:function(e){return ne(e)?a.cloneElement.apply(null,arguments):e},createRef:a.createRef,Fragment:a.Fragment,isValidElement:ne,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:a.Component,PureComponent:S,memo:function(e,n){function t(e){var t=this.props.ref,r=t==e.ref;return!r&&t&&(t.call?t(null):t.current=null),n?!n(this.props,e)||!r:P(this.props,e)}function r(n){return this.shouldComponentUpdate=t,(0,a.createElement)(e,n)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:T,unstable_batchedUpdates:function(e,n){return e(n)},StrictMode:a.Fragment,Suspense:I,SuspenseList:H,lazy:function(e){var n,t,r;function o(o){if(n||(n=e()).then((function(e){t=e.default||e}),(function(e){r=e})),r)throw r;if(!t)throw n;return(0,a.createElement)(t,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ee};var re=t(572),oe=t(24),ie=t.n(oe);const ae="992px",se="1260px",ce="scale(1.1)",le="scale(1)",fe=".75rem",ue="0.25rem",de="0.75rem",pe="1.375rem",he="4rem",me="2rem",ge="3rem",be="8rem",ye="#ffc627",ve="#191919",_e="#191919",we="#fafafa",xe="#bfbfbf",ke="#191919",Oe=re.css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`,ze=re.css`
  :not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,je="1224px",Pe="24px";function Se(){return(Se=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const $e=T((({disabled:e,small:n,medium:t,large:r,gold:o,maroon:i,dark:s,type:c,...l},f)=>{const u="link"==c?"a":"button";let d=!!l.light&&l.light;return void 0===o&&void 0===s&&void 0===i&&(d=!0),(0,a.h)(u,Se({},l,{class:(0,re.cx)(re.css`
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 1rem 2rem;
            font-size: 1rem;
            line-height: 1rem;
            border-radius: 400rem;
            transition: 0.03s ease-in-out;

            :not(:disabled):not(.disabled) {
              cursor: pointer;
            }

            :hover {
              transform: ${ce};
            }

            :active {
              transform: ${le};
            }

            ${e&&re.css`
              opacity: ${"50%"};
            `}

            ${n&&re.css`
              font-size: ${de};
              height: ${pe};
              min-width: ${he};
              padding: ${ue}
                ${fe};
            `}

        ${t&&re.css`
              font-size: 0.875rem;
              padding: 0.5rem 1rem;
            `}

        ${r&&re.css`
              font-size: ${me};
              height: ${ge};
              min-width: ${be};
            `}

        ${o&&re.css`
              color: ${ve};
              background-color: ${ye};

              :hover {
                color: ${ve};
              }
            `}

        ${i&&re.css`
              color: #ffffff;
              background-color: #8c1d40;
              border-color: #8c1d40;

              :visited:not(.btn) {
                color: #ffffff;
              }
            `}

        ${s&&re.css`
              color: ${we};
              background-color: ${_e};

              :visited:not(.btn) {
                color: ${we};
              }
            `}

        ${d&&re.css`
              color: ${ke};
              background-color: ${xe};
            `}
          `,l.class),ref:f}),l.children)}));$e.propTypes={type:ie().string,href:ie().string,dark:ie().bool,light:ie().bool,gold:ie().bool,maroon:ie().bool,disabled:ie().bool,small:ie().bool,medium:ie().bool,large:ie().bool,onFocus:ie().func},$e.defaultProps={disabled:!1};const Ce=re.css`
  .btn {
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    color: #191919;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 1rem 2rem;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 400rem;
    transition: 0.03s ease-in-out;

    :not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    :hover {
      transform: ${ce};
    }

    :active {
      transform: ${le};
    }

    &.btn-disabled {
      opacity: ${"50%"};
    }

    &.btn-small {
      font-size: ${de};
      height: ${pe};
      min-width: ${he};
      padding: ${ue} ${fe};
    }

    &.btn-medium {
      font-size: ${"0.875rem"};
      height: ${"2rem"};
      min-width: ${"5rem"};
      padding: ${"0.5rem"} ${"1rem"};
    }

    &.btn-large {
      font-size: ${me};
      height: ${ge};
      min-width: ${be};
    }

    &.btn-gold {
      color: ${ve};
      background-color: ${ye};
    }

    &.btn-maroon {
      color: ${"#fafafa"};
      background-color: ${"#8c1d40"};
    }

    &.btn-dark {
      color: ${we};
      background-color: ${_e};
    }

    &.btn-light {
      color: ${ke};
      background-color: ${xe};
    }
  }
`;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Ee=T((({href:e,children:n,...t},r)=>{const o=e?"link":"button";return(0,a.h)($e,Te({type:o,ref:r},e?{href:e}:{},t),n)}));function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ae(e,n,t[n])}))}return e}function Ie(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Ee.propTypes={type:ie().string,href:ie().string,gold:ie().bool,maroon:ie().bool,disabled:ie().bool,small:ie().bool,medium:ie().bool,large:ie().bool,itemRef:ie().oneOfType([ie().func,ie().shape({current:ie().instanceOf(ie().element)})]),onFocus:ie().func},Ee.defaultProps={disabled:!1};var Fe=function(){},He={},Re={},Ue={mark:Fe,measure:Fe};try{"undefined"!=typeof window&&(He=window),"undefined"!=typeof document&&(Re=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(Ue=performance)}catch(u){}var De=(He.navigator||{}).userAgent,We=void 0===De?"":De,qe=He,Ve=Re,Ye=Ue,Xe=(qe.document,!!Ve.documentElement&&!!Ve.head&&"function"==typeof Ve.addEventListener&&"function"==typeof Ve.createElement),Be=(~We.indexOf("MSIE")||We.indexOf("Trident/"),"svg-inline--fa"),Ge="data-fa-i2svg",Ke=(function(){try{}catch(e){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),Ze=Ke.concat([11,12,13,14,15,16,17,18,19,20]),Je={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qe=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",Je.GROUP,Je.SWAP_OPACITY,Je.PRIMARY,Je.SECONDARY].concat(Ke.map((function(e){return"".concat(e,"x")}))).concat(Ze.map((function(e){return"w-".concat(e)}))),qe.FontAwesomeConfig||{});if(Ve&&"function"==typeof Ve.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var n=Ie(e,2),t=n[0],r=n[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var n=Ve.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}(t));null!=o&&(Qe[r]=o)}))}var en=Ne({},{familyPrefix:"fa",replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Qe);en.autoReplaceSvg||(en.observeMutations=!1);var nn=Ne({},en);qe.FontAwesomeConfig=nn;var tn=qe||{};tn.___FONT_AWESOME___||(tn.___FONT_AWESOME___={}),tn.___FONT_AWESOME___.styles||(tn.___FONT_AWESOME___.styles={}),tn.___FONT_AWESOME___.hooks||(tn.___FONT_AWESOME___.hooks={}),tn.___FONT_AWESOME___.shims||(tn.___FONT_AWESOME___.shims=[]);var rn=tn.___FONT_AWESOME___,on=[];Xe&&((Ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ve.readyState)||Ve.addEventListener("DOMContentLoaded",(function e(){Ve.removeEventListener("DOMContentLoaded",e),1,on.map((function(e){return e()}))})));var an,sn="pending",cn="settled",ln="fulfilled",fn="rejected",un=function(){},dn=void 0!==t.g&&void 0!==t.g.process&&"function"==typeof t.g.process.emit,pn="undefined"==typeof setImmediate?setTimeout:setImmediate,hn=[];function mn(){for(var e=0;e<hn.length;e++)hn[e][0](hn[e][1]);hn=[],an=!1}function gn(e,n){hn.push([e,n]),an||(an=!0,pn(mn,0))}function bn(e){var n=e.owner,t=n._state,r=n._data,o=e[t],i=e.then;if("function"==typeof o){t=ln;try{r=o(r)}catch(e){wn(i,e)}}yn(i,r)||(t===ln&&vn(i,r),t===fn&&wn(i,r))}function yn(e,n){var t;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===Me(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(r){t||(t=!0,n===r?_n(e,r):vn(e,r))}),(function(n){t||(t=!0,wn(e,n))})),!0}}catch(n){return t||wn(e,n),!0}return!1}function vn(e,n){e!==n&&yn(e,n)||_n(e,n)}function _n(e,n){e._state===sn&&(e._state=cn,e._data=n,gn(kn,e))}function wn(e,n){e._state===sn&&(e._state=cn,e._data=n,gn(On,e))}function xn(e){e._then=e._then.forEach(bn)}function kn(e){e._state=ln,xn(e)}function On(e){e._state=fn,xn(e),!e._handled&&dn&&t.g.process.emit("unhandledRejection",e._data,e)}function zn(e){t.g.process.emit("rejectionHandled",e)}function jn(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof jn==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,n){function t(e){wn(n,e)}try{e((function(e){vn(n,e)}),t)}catch(e){t(e)}}(e,this)}jn.prototype={constructor:jn,_state:sn,_then:null,_data:void 0,_handled:!1,then:function(e,n){var t={owner:this,then:new this.constructor(un),fulfilled:e,rejected:n};return!n&&!e||this._handled||(this._handled=!0,this._state===fn&&dn&&gn(zn,this)),this._state===ln||this._state===fn?gn(bn,t):this._then.push(t),t.then},catch:function(e){return this.then(null,e)}},jn.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new jn((function(n,t){var r=[],o=0;function i(e){return o++,function(t){r[e]=t,--o||n(r)}}for(var a,s=0;s<e.length;s++)(a=e[s])&&"function"==typeof a.then?a.then(i(s),t):r[s]=a;o||n(r)}))},jn.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new jn((function(n,t){for(var r,o=0;o<e.length;o++)(r=e[o])&&"function"==typeof r.then?r.then(n,t):n(r)}))},jn.resolve=function(e){return e&&"object"===Me(e)&&e.constructor===jn?e:new jn((function(n){n(e)}))},jn.reject=function(e){return new jn((function(n,t){t(e)}))};var Pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sn(e){if(e&&Xe){var n=Ve.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=Ve.head.childNodes,r=null,o=t.length-1;o>-1;o--){var i=t[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=i)}return Ve.head.insertBefore(n,r),e}}function $n(){for(var e=12,n="";e-- >0;)n+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return n}function Cn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tn(e){return Object.keys(e||{}).reduce((function(n,t){return n+"".concat(t,": ").concat(e[t],";")}),"")}function En(e){return e.size!==Pn.size||e.x!==Pn.x||e.y!==Pn.y||e.rotate!==Pn.rotate||e.flipX||e.flipY}function Mn(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,o={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),a="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var Ln={x:0,y:0,width:"100%",height:"100%"};function An(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Nn(e){var n=e.icons,t=n.main,r=n.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,c=e.title,l=e.maskId,f=e.titleId,u=e.extra,d=e.watchable,p=void 0!==d&&d,h=r.found?r:t,m=h.width,g=h.height,b="fak"===o,y=b?"":"fa-w-".concat(Math.ceil(m/g*16)),v=[nn.replacementClass,i?"".concat(nn.familyPrefix,"-").concat(i):"",y].filter((function(e){return-1===u.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(u.classes).join(" "),_={children:[],attributes:Ne({},u.attributes,{"data-prefix":o,"data-icon":i,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(_.attributes[Ge]=""),c&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||$n())},children:[c]});var x=Ne({},_,{prefix:o,iconName:i,main:t,mask:r,maskId:l,transform:a,symbol:s,styles:Ne({},w,u.styles)}),k=r.found&&t.found?function(e){var n,t=e.children,r=e.attributes,o=e.main,i=e.mask,a=e.maskId,s=e.transform,c=o.width,l=o.icon,f=i.width,u=i.icon,d=Mn({transform:s,containerWidth:f,iconWidth:c}),p={tag:"rect",attributes:Ne({},Ln,{fill:"white"})},h=l.children?{children:l.children.map(An)}:{},m={tag:"g",attributes:Ne({},d.inner),children:[An(Ne({tag:l.tag,attributes:Ne({},l.attributes,d.path)},h))]},g={tag:"g",attributes:Ne({},d.outer),children:[m]},b="mask-".concat(a||$n()),y="clip-".concat(a||$n()),v={tag:"mask",attributes:Ne({},Ln,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(n=u,"g"===n.tag?n.children:[n])},v]};return t.push(_,{tag:"rect",attributes:Ne({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},Ln)}),{children:t,attributes:r}}(x):function(e){var n=e.children,t=e.attributes,r=e.main,o=e.transform,i=Tn(e.styles);if(i.length>0&&(t.style=i),En(o)){var a=Mn({transform:o,containerWidth:r.width,iconWidth:r.width});n.push({tag:"g",attributes:Ne({},a.outer),children:[{tag:"g",attributes:Ne({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Ne({},r.icon.attributes,a.path)}]}]})}else n.push(r.icon);return{children:n,attributes:t}}(x),O=k.children,z=k.attributes;return x.children=O,x.attributes=z,s?function(e){var n=e.prefix,t=e.iconName,r=e.children,o=e.attributes,i=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ne({},o,{id:!0===i?"".concat(n,"-").concat(nn.familyPrefix,"-").concat(t):i}),children:r}]}]}(x):function(e){var n=e.children,t=e.main,r=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(En(a)&&t.found&&!r.found){var s={x:t.width/t.height/2,y:.5};o.style=Tn(Ne({},i,{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:n}]}(x)}var In=function(){},Fn=(nn.measurePerformance&&Ye&&Ye.mark&&Ye.measure,function(e,n,t,r){var o,i,a,s=Object.keys(e),c=s.length,l=void 0!==r?function(e,n){return function(t,r,o,i){return e.call(n,t,r,o,i)}}(n,r):n;for(void 0===t?(o=1,a=e[s[0]]):(o=0,a=t);o<c;o++)a=l(a,e[i=s[o]],i,e);return a});function Hn(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.skipHooks,o=void 0!==r&&r,i=Object.keys(n).reduce((function(e,t){var r=n[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e}),{});"function"!=typeof rn.hooks.addPack||o?rn.styles[e]=Ne({},rn.styles[e]||{},i):rn.hooks.addPack(e,i),"fas"===e&&Hn("fa",n)}var Rn=rn.styles,Un=rn.shims,Dn=function(){var e=function(e){return Fn(Rn,(function(n,t,r){return n[r]=Fn(t,e,{}),n}),{})};e((function(e,n,t){return n[3]&&(e[n[3]]=t),e})),e((function(e,n,t){var r=n[2];return e[t]=t,r.forEach((function(n){e[n]=t})),e}));var n="far"in Rn;Fn(Un,(function(e,t){var r=t[0],o=t[1],i=t[2];return"far"!==o||n||(o="fas"),e[r]={prefix:o,iconName:i},e}),{})};Dn();rn.styles;function Wn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}function qn(e){var n=e.tag,t=e.attributes,r=void 0===t?{}:t,o=e.children,i=void 0===o?[]:o;return"string"==typeof e?Cn(e):"<".concat(n," ").concat(function(e){return Object.keys(e||{}).reduce((function(n,t){return n+"".concat(t,'="').concat(Cn(e[t]),'" ')}),"").trim()}(r),">").concat(i.map(qn).join(""),"</").concat(n,">")}var Vn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,n){var t=n.toLowerCase().split("-"),r=t[0],o=t.slice(1).join("-");if(r&&"h"===o)return e.flipX=!0,e;if(r&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(r){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e}),n):n};function Yn(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}Yn.prototype=Object.create(Error.prototype),Yn.prototype.constructor=Yn;var Xn={fill:"currentColor"},Bn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Gn={tag:"path",attributes:Ne({},Xn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Kn=Ne({},Bn,{attributeName:"opacity"});Ne({},Xn,{cx:"256",cy:"364",r:"28"}),Ne({},Bn,{attributeName:"r",values:"28;14;28;28;14;28;"}),Ne({},Kn,{values:"1;0;1;1;0;1;"}),Ne({},Xn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Ne({},Kn,{values:"1;0;0;0;0;1;"}),Ne({},Xn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Ne({},Kn,{values:"0;0;1;1;0;0;"}),rn.styles;function Zn(e){var n=e[0],t=e[1],r=Ie(e.slice(4),1)[0];return{found:!0,width:n,height:t,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(nn.familyPrefix,"-").concat(Je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(nn.familyPrefix,"-").concat(Je.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(nn.familyPrefix,"-").concat(Je.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}rn.styles;function Jn(){var e="fa",n=Be,t=nn.familyPrefix,r=nn.replacementClass,o='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(t!==e||r!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");o=o.replace(i,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(s,".".concat(r))}return o}function Qn(){nn.autoAddCss&&!ot&&(Sn(Jn()),ot=!0)}function et(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return qn(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(Xe){var n=Ve.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function nt(e){var n=e.prefix,t=void 0===n?"fa":n,r=e.iconName;if(r)return Wn(rt.definitions,t,r)||Wn(rn.styles,t,r)}var tt,rt=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var n,t,r;return n=e,(t=[{key:"add",value:function(){for(var e=this,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(n){e.definitions[n]=Ne({},e.definitions[n]||{},o[n]),Hn(n,o[n]),Dn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var t=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(t).map((function(n){var r=t[n],o=r.prefix,i=r.iconName,a=r.icon;e[o]||(e[o]={}),e[o][i]=a})),e}}])&&Le(n.prototype,t),r&&Le(n,r),e}()),ot=!1,it={transform:function(e){return Vn(e)}},at=(tt=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.transform,r=void 0===t?Pn:t,o=n.symbol,i=void 0!==o&&o,a=n.mask,s=void 0===a?null:a,c=n.maskId,l=void 0===c?null:c,f=n.title,u=void 0===f?null:f,d=n.titleId,p=void 0===d?null:d,h=n.classes,m=void 0===h?[]:h,g=n.attributes,b=void 0===g?{}:g,y=n.styles,v=void 0===y?{}:y;if(e){var _=e.prefix,w=e.iconName,x=e.icon;return et(Ne({type:"icon"},e),(function(){return Qn(),nn.autoA11y&&(u?b["aria-labelledby"]="".concat(nn.replacementClass,"-title-").concat(p||$n()):(b["aria-hidden"]="true",b.focusable="false")),Nn({icons:{main:Zn(x),mask:s?Zn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:w,transform:Ne({},Pn,r),symbol:i,title:u,maskId:l,titleId:p,extra:{attributes:b,styles:v,classes:m}})}))}},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(e||{}).icon?e:nt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:nt(r||{})),tt(t,Ne({},n,{mask:r}))});function st(e){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ct(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function lt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ft(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?lt(Object(t),!0).forEach((function(n){ct(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):lt(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ut(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function dt(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function pt(e){return n=e,(n-=0)==n?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,n){return n?n.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var n}function ht(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,n){var t,r=n.indexOf(":"),o=pt(n.slice(0,r)),i=n.slice(r+1).trim();return o.startsWith("webkit")?e[(t=o,t.charAt(0).toUpperCase()+t.slice(1))]=i:e[o]=i,e}),{})}var mt=!1;try{mt=!0}catch(u){}function gt(e){return null===e?null:"object"===st(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function bt(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?ct({},e,n):{}}function yt(e){var n=e.forwardedRef,t=ut(e,["forwardedRef"]),r=t.icon,o=t.mask,i=t.symbol,a=t.className,s=t.title,c=gt(r),l=bt("classes",[].concat(dt(function(e){var n,t=e.spin,r=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,s=e.listItem,c=e.flip,l=e.size,f=e.rotation,u=e.pull,d=(ct(n={"fa-spin":t,"fa-pulse":r,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),ct(n,"fa-rotate-".concat(f),null!=f&&0!==f),ct(n,"fa-pull-".concat(u),null!=u),ct(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(t)),dt(a.split(" ")))),f=bt("transform","string"==typeof t.transform?it.transform(t.transform):t.transform),u=bt("mask",gt(o)),d=at(c,ft({},l,{},f,{},u,{symbol:i,title:s}));if(!d)return function(){var e;!mt&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var p=d.abstract,h={ref:n};return Object.keys(t).forEach((function(e){yt.defaultProps.hasOwnProperty(e)||(h[e]=t[e])})),vt(p[0],h)}yt.displayName="FontAwesomeIcon",yt.propTypes={border:ie().bool,className:ie().string,mask:ie().oneOfType([ie().object,ie().array,ie().string]),fixedWidth:ie().bool,inverse:ie().bool,flip:ie().oneOf(["horizontal","vertical","both"]),icon:ie().oneOfType([ie().object,ie().array,ie().string]),listItem:ie().bool,pull:ie().oneOf(["right","left"]),pulse:ie().bool,rotation:ie().oneOf([0,90,180,270]),size:ie().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ie().bool,symbol:ie().oneOfType([ie().bool,ie().string]),title:ie().string,transform:ie().oneOfType([ie().string,ie().object]),swapOpacity:ie().bool},yt.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var vt=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t)return t;var o=(t.children||[]).map((function(t){return e(n,t)})),i=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e.attrs.className=r,delete t.attributes.class;break;case"style":e.attrs.style=ht(r);break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?e.attrs[n.toLowerCase()]=r:e.attrs[pt(n)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,c=ut(r,["style"]);return i.attrs.style=ft({},i.attrs.style,{},s),n.apply(void 0,[t.tag,ft({},i.attrs,{},c)].concat(dt(o)))}.bind(null,te.createElement),_t={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},wt={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},xt={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]},kt={prefix:"fas",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"]},Ot={prefix:"fas",iconName:"clipboard",icon:[384,512,[],"f328","M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"]},zt={prefix:"fas",iconName:"desktop",icon:[576,512,[],"f108","M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"]},jt={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]},Pt={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},St={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},$t={prefix:"fas",iconName:"map-pin",icon:[288,512,[],"f276","M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"]},Ct={prefix:"fas",iconName:"mobile",icon:[320,512,[],"f10b","M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"]},Tt={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},Et={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};function Mt(){return(Mt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Lt=e=>(0,a.h)(yt,Mt({icon:_t},e)),At=e=>(0,a.h)(yt,Mt({icon:Tt},e)),Nt=e=>(0,a.h)(yt,Mt({icon:xt},e)),It=e=>(0,a.h)(yt,Mt({icon:Ct},e)),Ft=e=>(0,a.h)(yt,Mt({icon:zt},e)),Ht=e=>(0,a.h)(yt,Mt({icon:Ot},e)),Rt=e=>(0,a.h)(yt,Mt({icon:$t},e)),Ut=e=>(0,a.h)(yt,Mt({icon:jt},e)),Dt=e=>(0,a.h)(yt,Mt({icon:wt},e)),Wt=e=>(0,a.h)(yt,Mt({icon:St},e)),qt=e=>(0,a.h)("span",{class:(0,re.cx)("fa-layers fa-fw",e.class)},(0,a.h)(yt,{icon:kt,size:"2x"}),(0,a.h)(yt,{icon:Et,size:"1x"})),Vt=e=>(0,a.h)(yt,Mt({icon:Pt},e)),Yt=({type:e,...n})=>{switch(e){case"mobile":return(0,a.h)(It,null);case"chevron-down":return(0,a.h)(Nt,n);case"search":return(0,a.h)(At,n);case"desktop":return(0,a.h)(Ft,n);case"clipboard":return(0,a.h)(Ht,n);case"map-pin":return(0,a.h)(Rt,n);case"exclamation-triangle":return(0,a.h)(Ut,n);case"bell":return(0,a.h)(Dt,n);case"info-circle":return(0,a.h)(Wt,n);case"circle-close":return(0,a.h)(qt,n);case"bars":return(0,a.h)(Lt,n);case"home":return(0,a.h)(Vt,n);default:return""}};function Xt(){return(Xt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}Yt.propTypes={type:ie().string.isRequired},Yt.defaultProps={};const Bt=({show:e,id:n,...t})=>(0,a.h)("div",Xt({},n?{id:n}:{},{class:(0,re.cx)(re.css`
          padding: 0 32px 24px 32px;
          flex-grow: 100;
          flex: 1 1 auto;
          min-height: 1px;
          padding: 1.25rem;
          ${!e&&re.css`
            display: none;
          `}
        `,t.class),dangerouslySetInnerHTML:{__html:t.children}})),Gt=e=>(0,a.h)("div",{class:(0,re.cx)(re.css`
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #ffffff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0;
          border-color: #d0d0d0;
          border-left: 0.5rem solid #ffc627;
          height: auto;
        `,e.class)},e.children),Kt=({show:e,id:n,...t})=>(0,a.h)(Bt,Xt({},n?{id:n}:{},{show:e,class:(0,re.cx)(re.css`
          ${e&&re.css`
            border-top: 1px solid #d0d0d0;
          `}
        `,t.class)}),t.children),Zt=({show:e,id:n,...t})=>(0,a.h)("button",Xt({"aria-expanded":e},n?{"aria-controls":n}:{},{role:"button",class:re.css`
        padding: 32px 32px 16px 32px;
        flex-grow: 1;
        padding-bottom: 0;
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(255, 255, 255, 0.03);
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        cursor: pointer;
        border: 0;

        h4 {
          display: flex;
          flex-direction: row;
          align-items: baseline;

          a {
            padding: 0.5rem 1.5rem;
            color: #191919;
            text-decoration: none;
            display: flex;
            flex-direction: row
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
        }

        .fa-chevron-down {
          transition-duration: 0.4s;
          font-size: 1.25rem;
        }

        ${e?re.css`
                .fa-chevron-down {
                  transform: rotate(-180deg);
                }
              `:""}

      `},t),t.children,(0,a.h)(Yt,{type:"chevron-down"})),Jt=({head:e,children:n,id:t,...r})=>{const[o,i]=h(!1);return(0,a.h)(Gt,{class:r.class},(0,a.h)(Zt,{show:o,id:t,onClick:()=>{i((e=>!e))}},e),(0,a.h)(Kt,{show:o,id:t},n))};function Qt(){return(Qt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}Jt.propTypes={head:ie().node,children:ie().node,class:ie().string,id:ie().string},Jt.defaultProps={};const er=e=>re.css`
  .navlist {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: flex-end;

    a {
      text-decoration: none;
    }

    > li {
      position: relative;
      padding: 0;
      border: 0;
      margin-right: 0.5rem;

      &.active,
      &.dropdown-open, :hover {
        > a:after {
          width: 100%;
        }
      }

      > a {
        :after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-image: linear-gradient(to right,transparent .5%,#ffc627 .5%);
          position: relative;
          bottom: 0;
          width: 0;
          margin-left: 0;
          top: .5rem;
        }
      }

      @media (min-width: ${e}) {
        position: static;

        &.dropdown-open,
        &.active {
          > a:after {
            width: calc(100% + 24px);
            margin-left: 0;
          }
        }

        > a {
          line-height: 1rem;
          box-sizing: content-box;
          :hover {
            :after {
              width: calc(100% + 24px);
              margin-left: 0;
            }
          }

          :after {
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            content: '';
            display: block;
            height: .5rem;
            position: relative;
            top: .5rem;
            bottom: 0;
            width: 0;
            left: -.75rem;
            margin-left: 0;
          }
        }
      }

      @media (max-width: ${e}) {

        > a:after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-color: #ffc627;
        }
      }

      > a {
        display: block;
        padding: 0.5rem 0.75rem;
        color: #191919;

        svg.fa-chevron-down {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }

    .mobile-only {
      ${Oe}
    }

    @media (min-width: ${e}) {
      svg.fa-chevron-down {
        float: none;
        display: inline-block;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
    }

    @media (max-width: ${e}) {
      flex-direction: column;
      align-items: stretch;
      padding: 0;

      > li {
        margin-right: 0;

        > a {
          padding: 1rem 1rem .5rem 1rem;
          justify-content: space-between;
          display: block;
          border-bottom: 1px solid #cccccc;
          align-items: center;

          > svg {
            float: right;
            font-size: 1.25rem;
          }
        }

        :first-of-type {
          border-top: 1px solid #cccccc;
        }

        :last-of-type {
          border-bottom: none;
        }
      }

      .mobile-only {
        ${(e=>{const n=e||"relative";return re.css`
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    border: none;
    clip: auto;
    position: ${n};
  `})()}
      }
    }
  }
`,nr=T((({children:e,...n},t)=>(0,a.h)("ul",Qt({ref:t,"aria-label":"ASU"},n,{class:(0,re.cx)(n.class,"navlist")}),e))),tr=e=>(0,a.h)("form",{class:"navbar-site-buttons"},e.children),rr=e=>(0,a.h)("div",{class:(0,re.cx)("dropdown",e.open?"open":"",e.class)},(0,a.h)("div",null,e.children),e.buttons?(0,a.h)("div",{class:"button-row"},(0,a.h)("div",null,e.buttons)):""),or=e=>(0,a.h)("ul",{class:(0,re.cx)("menu-column",e.open?"open":"")},e.children),ir=e=>re.css`
  ul {
    list-style: none;
    a {
      text-decoration: none;
    }
  }

  .mobile-only {
    ${Oe}
  }

  @media (min-width: ${e}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    svg.fa-chevron-down {
      float: none;
      display: inline-block;
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${e}) {
    border: none;
    display: none;
    flex-direction: column;
    width: 100%;

    &.open-nav,
    &:target {
      overflow-y: scroll;
      display: flex;
    }
  }

  ${(e=>re.css`
  /** DdMenu CSS **/
  div.dropdown {
    position: absolute;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-top: none;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    overflow: hidden;
    margin: -1px 0 0 0;
    flex-direction: column;

    > div {
      width: 100%;
    }

    &.mega {
      width: 100%;
      left: 0;
      border-right: none;
      border-left: none;

      div:not(.button-row) {
        max-width: ${je};
      }
    }

    &.open {
      visibility: visible;
      opacity: 1;
    }

    h3 {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 1rem 0;
      line-height: calc(100% + 0.12em);
    }

    .button-row {
      border-top: 1px solid #cccccc;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: flex-start;
        margin: 0 auto;

        a + a {
          margin-left: 1rem;
        }
      }
    }

    @media (max-width: ${e}) {
      padding-left: 3rem;
      flex-direction: column;
      max-height: 0;
      border: none;

      &.open {
        position: relative;
        display: flex;
        max-height: 10000px;
      }
    }

    @media (min-width: ${e}) {
      position: fixed;

      &:not(.mega) .menu-column {
        /*min-width: 16rem;*/
      }

      > div:not(.button-row) {
        padding: 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: center;
      }

      &.open {
        border-bottom: 1px solid #d0d0d0;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
`)(e)}
  ${(e=>re.css`
  /** Dropdown Menu Column CSS **/
  ul.menu-column {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #d0d0d0;
    padding: 0 2rem;
    position: relative;

    :last-child {
      border-right: none;
    }

    @media (min-width: ${e}) {
      width: 16rem;
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;
      /* max-width: 282px; */

      :last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
      }
    }

    @media (max-width: ${e}) {
      border-right: none;
      width: 100%;
      padding: 0;
      > li {
        :last-of-type {
          border: none;
        }
      }
    }

    @media (min-width: ${e}) {
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

      flex: 1;
      /* max-width: 282px; */
    }
  }
`)(e)}
  ${(e=>re.css`
  form.navbar-site-buttons {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;

    a + a {
      margin-left: 1rem;
    }

    @media (max-width: ${e}) {
      padding: 1rem 2rem;
    }

    @media (max-width: ${"576px"}) {
      flex-direction: column;
      align-items: flex-start;

      a + a {
        margin-top: 1rem;
        margin-left: 0;
      }
    }
  }
`)(e)}
  ${er(e)}
`,ar=e=>re.css`
  nav.header-nav {
    ${ir(e)}
  }
`,sr=({open:e,maxMobileHeight:n,injectStyles:t,breakpoint:r,handleKeyDown:o,children:i,...s})=>{const c=-1==n?"75vh":n+"px",l="Xl"===r?se:ae;return(0,a.h)("nav",Qt({id:"asu-header-nav",class:(0,re.cx)("header-nav",e?"open-nav":"",re.css`
          @media (max-width: ${l}) {
            &.open-nav,
            &:target {
              flex-direction: column;
              width: 100%;

              max-height: ${c};
              display: flex;
            }
          }
        `,t?ir(l):"")},s),i)};function cr(){return(cr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const lr=e=>re.css`
  .asu-search-form {
    > form {
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      label {
        position: relative;
        margin-left: -95px;
        font-weight: 400;
        transition: all 0.5s;
        color: #747474;
        display: none;
      }

      > input {
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>') no-repeat 10px 50%;
        background-size: 12px;

      }
    }

    > a {
      display: inline-block;
      font-size: 0.75rem;
      color: #484848;
    }

    @media (max-width: ${e}) {
      width: 100%;
      display: flex;
      order: -1;

      > form {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 2rem;

        > input {
          padding: 0.5rem 2rem;
          display: flex;
          width: 100%;
          border: 0;
          background-color: #FFFFFF;
        }

        > button {
          font-size: 1rem;
          opacity: 0.75;
        }
      }

      > a {
        display: none;
      }

      button {
        width: 2.5rem;
        height: 2.5rem;
      }


    }

    button {
      font-size: 0.75rem;
      border: none;
      background: transparent;
      cursor: pointer;
      margin-right: -30px;
      z-index: 20;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
    }

    @media (min-width: ${e}) {
      > form {
        justify-content: flex-end;
      }

      input {
        background-size: 16px;
        width: 32px;
        cursor: pointer;
        font-size: 0.75rem;
        line-height: 0.75rem;
        border: 0;
        border-radius: 0;
        padding: 0.25rem;
        transition: all 0.5s;
      }

      .show-search-input {
        > input {
          display: inline-flex;
          width: 200px;
          color: #747474;
          background-color: #fff;
          cursor: auto;
          margin: 0.5rem 0;
          padding-left: 32px;
          visibility: visible;
          height: calc(1.5em + 0.75rem + 2px);

          :valid + label {
            display: none;
          }
        }

        label {
          display: block;
          margin-bottom: 0;
          font-size: inherit;
        }
      }
    }
  }
`,fr=e=>(0,a.h)("div",cr({class:(0,re.cx)("asu-search-form",e.class)},e),e.children),ur=e=>re.css`
  .login-status {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;


    > a, span {
      padding: 0;
      margin: 0;
      color: #484848;
      text-decoration: none;
    }
    .name {
      font-weight: 700;
    }

    .signout:before {
      content: "(";
      margin-left: 4px;
    }

    .signout:after {
      content: ") ";
    }


    @media (min-width: ${e}) {
      margin-left: .5rem;
    }
  }
`,dr=e=>(0,a.h)("div",{class:(0,re.cx)(e.class,"login-status")},e.children);function pr(){return(pr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const hr=e=>re.css`
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    .horiz {
      display: none;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    }

    .vert {
      @media (min-width: 992px) {
        display: block;
        height: 72px;
        width: auto;
        margin: 1.5rem 1rem 1.5rem 0;
      }
    }

    img {
      height: 80px;
    }

    @media (max-width: ${e}) {
      img {
        float: none;
        height: 32px;
      }

      .vert {
        display: none;
      }
      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
  }

  &.scrolled .primary-nav .navbar-brand d img {
    height: 64px;
  }

  @media (max-width: ${e}) {
    &.scrolled .primary-nav .navbar-brand d img {
      height: 28px;
    }

    &.scrolled .navbar-brand .horiz {
      margin-bottom: 0.5rem;
    }
  }
`,mr=T((({brandLink:e,src:n,mobileSrc:t,alt:r,...o},i)=>(0,a.h)("a",pr({href:e,class:"navbar-brand",ref:i},o),(0,a.h)("img",{class:"vert",src:n,alt:r}),(0,a.h)("img",{class:"horiz",src:t,alt:r})))),gr=e=>re.css`
  .title {
    line-height: 1;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 2rem 1.5rem 2rem;
    letter-spacing: -1px;
    background-image: linear-gradient(to right,transparent 51%,#FFC626 51%,95%,transparent);
    background-position: 0 0;
    background-size: 200%;
    display: inline-block;
    /*padding-right: 4px;*/
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    transition-duration: 1s;

    &.active {
      background-position: -200%;
    }

    > .unit-name {
      display: none;
    }

    .unit-name,
    .subunit-name,
    &.subunit-name {
      color: #191919;
    }

    @media (min-width: ${e}) {
      line-height: 1;
      font-weight: 700;
      padding: 0;
      margin: 1rem 0 0.5rem 0;

      > .unit-name {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: block;
      }

      &.subunit-name {
        font-size: 2rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 700;
      }

      .subunit-name {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }

  &.scrolled .title {
    padding-bottom: 1rem;
  }

  @media (min-width: ${e}) {
    &.scrolled .title.subunit-name {
      font-size: 1.5rem;
    }

    &.scrolled .title {
      padding-bottom: 0;
    }
  }
`,br=T((({children:e,parentOrg:n,baseUrl:t,parentOrgUrl:r,...o},i)=>n?(0,a.h)("div",{class:(0,re.cx)("title",o.class),ref:i},(0,a.h)("a",{class:"unit-name",href:r},n),(0,a.h)("a",{class:"subunit-name",href:t},e)):(0,a.h)("a",{class:(0,re.cx)("title","subunit-name",o.class),href:t,ref:i},e)));function yr(){return(yr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const vr=e=>re.css`
  .navlink,
  .navicon,
  .navbutton {
    padding: 0;
    margin: 0;

    > a {
      padding: .5rem;
      position: relative;

      &.nav-item {
        display: block;
      }
    }

    @media (max-width: ${e}) {
      border-bottom: 1px solid #cccccc;

      .icon-nav-item {
        ${Oe}
      }
    }
  }

  .navlink {

    > a {
      color: #191919;
    }


    @media (min-width: ${e}) {
      > a {
        padding: 0.5rem 0;
        white-space: normal;

        :visited {
          color: #191919;
        }

        :hover {
          color: #8c1d40;
          text-decoration: underline;
        }
      }
    }
  }

  .navbutton {
    margin-top: auto;

    @media (min-width: ${e}) {
      order: 1;
    }

    @media (max-width: ${e}) {
      margin-top: .5rem;
    }
  }
`,_r=T((({onFocus:e,text:n,...t},r)=>(0,a.h)("li",{class:"navlink"},(0,a.h)("a",yr({},t,{class:(0,re.cx)("nav-item",t.class)},e?{onFocus:e}:"",{ref:r}),n)))),wr=T((({children:e,onFocus:n,type:t,...r},o)=>(0,a.h)("li",{class:"navicon"},(0,a.h)("a",yr({},r,{class:r.class?r.class:""},n?{onFocus:n}:"",{ref:o}),(0,a.h)(Yt,{type:t,className:"icon-nav-item"}),(0,a.h)("span",{class:"mobile-only"},e))))),xr=T((({children:e,...n},t)=>(0,a.h)("li",{class:(0,re.cx)("navbutton",n.class)},(0,a.h)(Ee,yr({},n,{ref:t,medium:!0,dark:!0}),e))));function kr(){return(kr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Or=e=>re.css`
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border-radius: 400rem;
    outline: 0;
    color: #191919;
    border: 0;
    margin-right: 2rem;
    cursor: pointer;
    align-self: flex-start;

    @media (min-width: ${e}) {
      display: none;
    }
  }
`,zr=({mobileOpen:e,...n})=>(0,a.h)("button",kr({},n,{class:(0,re.cx)(re.css`
          .fa-circle {
            color: #e8e8e8;
            font-size: 1rem;
            margin-left: -12px;
            height: 2em;
            width: 2.5em;
          }

          svg.svg-inline--fa.fa-times {
            height: 1em;
            width: 1.25em;
            margin-left: 7px;
          }
        `,"navbar-toggler")}),e?(0,a.h)(Yt,{type:"circle-close"}):(0,a.h)(Yt,{type:"bars",href:"#asu-header-nav"})),jr=e=>re.css`
  .navbar-component {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: ${je};

    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      position: relative;
      align-items: flex-end;
    }

    @media (max-width: ${e}) {
      order: -1;
      display: flex;
      top: 0;
      width: 100%;
      height: auto;
      background-color: #ffffff;
      padding: 0;
      z-index: 1600;
      padding: ${Pe} 0 0 0;

      > div {
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`,Pr=({children:e,...n})=>(0,a.h)("div",{class:(0,re.cx)("navbar-component",n.class)},(0,a.h)("div",null,e)),Sr=e=>re.css`
  .navbar-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${e}) {
      width: 100%;
    }
  }
`,$r=e=>(0,a.h)("div",{class:(0,re.cx)("navbar-container",e.class)},e.children);function Cr(){return(Cr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Tr=({children:e,breakpoint:n,...t})=>(0,a.h)(a.Fragment,null,(0,a.h)("div",{id:"asu-report-accessiblity"},(0,a.h)("a",{href:"https://www.asu.edu/accessibility/",class:re.css`
            ${ze}
          `},"Report an accessibility problem")),(0,a.h)("header",Cr({},t,{class:(0,re.cx)(t.class,re.css`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }

            :focus {
              outline: 0;
              box-shadow: 0 0 8px #00baff !important;
            }

            a {
              cursor: pointer;
              text-decoration: none;
            }

            padding: 0;
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            z-index: 999;
            background: #ffffff;
            border-bottom: 1px solid #d0d0d0;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            top: 0;
            left: 0;

            div,
            h1 {
              font-family: Arial, sans-serif;
            }

            &.scrolled {
              transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            }

            @media (max-width: ${n}) {
              &.scrolled .primary-nav .header-title h1 {
                font-size: 1rem;
              }
            }
          `,jr(n),ar(n),Ce,Sr(n),hr(n),Er(n),lr(n),gr(n),ur(n),Or(n),vr(n))}),e)),Er=e=>re.css`
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${je};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      > div {
        > a {
          display: inline-flex;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          color: #484848;
          margin: 0;
        }
      }
    }

    @media (max-width: ${e}) {
      display: none;
      padding: 0;
      transition: none;
      height: auto;


      &.mobile-open {
        z-index: 998;
        width 100%;
        display: flex;
        justify-content: center;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        > a, div {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          display:block;

          :nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }
        }
      }

    }
  }

  @media (min-width: ${e}) {
    &.scrolled .universal-nav {
      height: 0;
      overflow: hidden;
    }

    .universal-nav {
      &.search-open {
        height: 48px;
      }

      .nav-grid {
        display: flex;
      }
    }
  }
`,Mr=T(((e,n)=>(0,a.h)("div",{class:(0,re.cx)("universal-nav",e.open?"mobile-open":"",e.searchOpen?"search-open":""),ref:n},(0,a.h)("div",null,e.children)))),Lr=({children:e,...n})=>(0,a.h)("div",{class:(0,re.cx)("nav-grid",n.class)},e);function Ar(){return(Ar=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Nr=re.css`
  font-weight: 700;
  text-align: left;
  opacity: 1;
  margin: 1rem 0;
  line-height: calc(100% + 0.12em);
`,Ir=({children:e,...n})=>(0,a.h)("h4",Ar({},n,{class:(0,re.cx)(re.css`
          ${Nr}
          font-size: 1.25rem;
          letter-spacing: -0.025em;
        `,n.class)}),e),Fr=({children:e,...n})=>(0,a.h)("h3",Ar({},n,{class:(0,re.cx)(re.css`
          ${Nr}
          font-size: 1.5rem;
          letter-spacing: -0.035em;
        `,n.class)}),e),Hr=({type:e,...n})=>{switch(e){case"h4":return(0,a.h)(Ir,{class:n.class},n.children);case"h3":return(0,a.h)(Fr,{class:n.class},n.children);default:return""}};function Rr(){return(Rr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}Hr.propTypes={type:ie().string.isRequired},Hr.defaultProps={};const Ur=T((({onFocus:e,type:n,children:t,href:r,...o},i)=>{switch(n){case"button":return(0,a.h)(xr,Rr({},o,{ref:i,href:r},e?{onFocus:e}:"",{medium:!0,dark:!0}),t);case"icon":return(0,a.h)(wr,Rr({},o,{href:r},e?{onFocus:e}:"",{ref:i,type:o.class}),t);case"heading":return(0,a.h)(Hr,{type:"h3"},t);default:return(0,a.h)(_r,Rr({href:r},e?{onFocus:e}:"",{ref:i},o),t)}}));Ur.propTypes={location:ie().array,onFocus:ie().func,type:ie().string,href:ie().string,children:ie().string.isRequired,icon:ie().string},Ur.defaultProps={};const Dr=Ur;function Wr(){return(Wr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const qr=T((({text:e,setFocus:n,pIndex:t,isOpen:r,setOpen:o,children:i,mega:s,buttons:c,href:l,...f},u)=>{const d=e=>{o(r?-1:e)};return(0,a.h)("li",{class:r?"dropdown-open":""},(0,a.h)("a",Wr({},f,{role:"button","aria-expanded":r,onMouseDown:e=>{e.preventDefault(),d(t)},onKeyDown:e=>{const n=e.keyCode;32!=n&&13!=n||d(t)},onFocus:e=>{n([t,-1,-1])},tabIndex:"0",ref:u}),e," ",(0,a.h)(Nt,{sr:e,className:r?"open":""})),(0,a.h)(rr,Wr({open:r},{class:s?"mega":""},c?{buttons:c.map(((e,n)=>(0,a.h)(Ee,Wr({href:e.href},e.color?{[e.color]:!0}:{},{medium:!0}),e.text)))}:{}),i))}));qr.propTypes={setFocus:ie().func.isRequired,pIndex:ie().number.isRequired,isOpen:ie().bool,setOpen:ie().func.isRequired,buttons:ie().arrayOf(ie().object),mega:ie().bool,text:ie().string},qr.defaultProps={isOpen:!1};const Vr=qr;function Yr(){return(Yr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Xr=({navTree:e,width:n,mobileOpen:t,maxMobileHeight:r,buttons:o,injectStyles:i,breakpoint:s})=>{const[c,l]=h([-1,-1,-1]),[f,u]=h(-1),d=e=>{l(e)},p=parseInt("Xl"===s?se:ae,10),m=v((()=>Array.isArray(e)&&0!=e.length?e.map((e=>{const n=(0,a.createRef)();let t=[],{items:r,...o}=e;if(r&&r[0].length>0)for(let e=0;e<r.length;e++)for(let n=0;n<r[e].length;n++)if(t[e]||(t[e]=[]),t[e][n]=Object.assign({},r[e][n]),"heading"!=r[e][n].type){const r=(0,a.createRef)();t[e][n].ref=r}return{ref:n,item:o,menus:t}})):[]),[e]);g((()=>{const e=Br(c,m);if(e.hasFocus){const[n,t,r]=c;e.isTop?(m[n].ref&&m[n].ref.current!==document.activeElement&&m[n].ref.current.focus(),f!==n&&u(-1)):m[n].menus[t][r].ref&&m[n].menus[t][r].ref.current!==document.activeElement&&m[n].menus[t][r].ref.current.focus()}else-1!==f&&u(-1)}),[c,m]);const b=y(null);g((()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&u(-1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[b]);return(0,a.h)(sr,{open:t,maxMobileHeight:r,injectStyles:i,breakpoint:s},(0,a.h)(nr,Yr({},n>p?{onfocusout:e=>{e.currentTarget.contains(e.relatedTarget)||d([-1,-1,-1])}}:{},{onKeyDown:e=>{const n=Br(c,m);if(n.hasFocus)switch(e.keyCode){case 37:e.preventDefault(),d(Gr(c,n,m));break;case 39:e.preventDefault(),d(Kr(c,n,m));break;case 38:e.preventDefault(),d(Zr(c,n,m));break;case 40:if(n.isTop&&n.hasSubs&&f!=c[0])return void u(c[0]);e.preventDefault(),d(Jr(c,n,m));break;case 27:n.isTop||d([c[0],-1,-1])}},ref:b}),m.map(((e,n)=>{const t=e.item,r=e.menus;return r&&r.length>0&&r[0].length>0?(0,a.h)(Vr,Yr({},t,{pIndex:n,setFocus:d,ref:e.ref,isOpen:f==n,setOpen:u,mega:r.length>2}),r.map(((e,t)=>(0,a.h)(or,null,e.map(((e,o)=>(0,a.h)(Dr,{onFocus:()=>{l([n,t,o]),u(n)},ref:r[t][o].ref,type:e.hasOwnProperty("type")?e.type:void 0,color:e.hasOwnProperty("color")?e.color:void 0,class:e.hasOwnProperty("class")?e.class:void 0,href:e.hasOwnProperty("href")?e.href:void 0},e.text))))))):(0,a.h)(Dr,{onFocus:()=>{d([n,-1,-1])},ref:e.ref,type:t.hasOwnProperty("type")?t.type:void 0,color:t.hasOwnProperty("color")?t.color:void 0,class:t.hasOwnProperty("class")?t.class:"",href:t.hasOwnProperty("href")?t.href:void 0},t.text)}))),o.length>0&&(0,a.h)(tr,null,o.map((e=>{let n=e.color?e.color:"maroon";return(0,a.h)(Ee,Yr({href:e.href},{[n]:!0},{medium:!0}),e.text)}))))};Xr.propTypes={navTree:ie().arrayOf(ie().object),buttons:ie().arrayOf(ie().object),mobileOpen:ie().bool,width:ie().number,height:ie().number,maxMobileHeight:ie().number,injectStyles:ie().bool,breakpoint:ie().oneOf(["Lg","Xl"])},Xr.defaultProps={navTree:[],mobileOpen:!1,width:1920,height:1080,maxMobileHeight:-1,buttons:[],injectStyles:!1};const Br=(e,n)=>{const[t,r,o]=e;let i=!1,a=!1,s=!1,c=!1,l=!1;return-1==t&&-1==r&&-1==o?{hasFocus:i}:(i=!0,n[t].menus.length>0&&(s=!0),a=-1===r||-1===o,a&&t===n.length-1&&(c=!0),a&&0===t&&(l=!0),{hasFocus:i,isTop:a,hasSubs:s,isLast:c,isFirst:l})},Gr=(e,n,t)=>{const[r,o,i]=e;let a=e;return n.isTop?(a=void 0!==t[r-1]?[r-1,-1,-1]:[0,-1,-1],!1===Qr(a,t)?Gr(a,Br(a,t),t):a):void 0!==t[r].menus[o-1]?t[r].menus[o-1][0].ref?[r,o-1,0]:[r,o-1,1]:[r,-1,-1]},Kr=(e,n,t)=>{const[r,o,i]=e;let a=e;return n.isTop?(a=void 0!==t[r+1]?[r+1,-1,-1]:[t.length-1,-1,-1],!1===Qr(a,t)?Kr(a,Br(a,t),t):a):void 0!==t[r].menus[o+1]?t[r].menus[o+1][0].ref?[r,o+1,0]:[r,o+1,1]:[r,-1,-1]},Zr=(e,n,t)=>{const[r,o,i]=e;let a=[],s=e;return n.hasSubs&&(a=t[r].menus),s=n.isTop?Gr(e,n,t):void 0!==a[o][i-1]?[r,o,i-1]:[r,-1,-1],!1===Qr(s,t)?Zr(s,Br(s,t),t):s},Jr=(e,n,t)=>{const[r,o,i]=e;let a=[],s=e;return n.hasSubs&&(a=t[r].menus),s=n.isTop&&n.hasSubs?[r,0,0]:n.isTop?Kr(e,n,t):void 0!==a[o][i+1]?[r,o,i+1]:Kr(e,n,t),!1===Qr(s,t)?Jr(s,Br(s,t),t):s},Qr=(e,n)=>{const t=Br(e,n);if(!t.hasFocus)return!1;if(t.isTop){if(n[e[0]].ref)return!0}else if(n[e[0]].menus[e[1]][e[2]].ref)return!0;return!1};function eo(){return(eo=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const no=({type:e,open:n,inputRef:t,mobile:r,...o})=>{switch(e){case"d7":return(0,a.h)("div",null,"Drupal 7");default:return(0,a.h)("form",eo({action:"https://search.asu.edu/search",method:"get",role:"search",class:n?"show-search-input":""},o),(0,a.h)("input",eo({name:"q",type:"search"},t?{ref:t}:{},{"aria-labelledby":"asu-search-label"},r?{placeHolder:"Search ASU"}:{},{required:!0})),(0,a.h)("label",{class:"univeral-search",id:"asu-search-label"},"Search ASU"))}};no.propTypes={type:ie().string,open:ie().bool,inputRef:ie().oneOfType([ie().func,ie().shape({current:ie().instanceOf(ie().element)})]),mobile:ie().bool},no.defaultProps={};const to=({type:e,open:n,setOpen:t,mobile:r})=>{const o=y(null);g((()=>{o.current.value&&t(!0)}),[]);return(0,a.h)(fr,{onfocusin:()=>t(!0),onfocusout:e=>{o.current.value||e.currentTarget.contains(e.relatedTarget)||t(!1)},onClick:()=>{t(!0),o.current.focus()}},(0,a.h)(no,{open:n,type:e,inputRef:o,mobile:r}))};to.propTypes={type:ie().string,open:ie().bool,setOpen:ie().func,mobile:ie().bool},to.defaultProps={open:!1};const ro=({loggedIn:e,loginLink:n,logoutLink:t,userName:r,...o})=>(0,a.h)(dr,{class:o.class},e?(0,a.h)(a.Fragment,null,r?(0,a.h)("span",{class:"name"},r):"",(0,a.h)("a",{class:"signout",href:t},"Sign Out")):(0,a.h)("a",{href:n},"Sign in"));function oo(){return(oo=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}ro.propTypes={class:ie().string,loggedIn:ie().bool.isRequired,loginLink:ie().string,logoutLink:ie().string,userName:ie().string},ro.defaultProps={logoutLink:"https://webapp4.asu.edu/myasu/Signout",loginLink:"https://weblogin.asu.edu/cgi-bin/login",loggedIn:!1};const io=({children:e,mobileOpen:n,logo:t,...r})=>(0,a.h)(Pr,{mobileOpen:n},t,(0,a.h)(zr,oo({},r,{mobileOpen:n})),(0,a.h)($r,null,e));function ao(){return(ao=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}io.propTypes={mobileOpen:ie().bool,logo:ie().node,children:ie().node},io.defaultProps={mobileOpen:!1};const so=T(((e,n)=>(0,a.h)(mr,ao({ref:n},e))));so.propTypes={alt:ie().string,src:ie().string,mobileSrc:ie().string,brandLink:ie().string},so.defaultProps={alt:"Arizona State University",src:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo-vertical.png",mobileSrc:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo.png",brandLink:"https://asu.edu"};const co=(e,n,t)=>(0,a.hydrate)((0,a.h)(e,n),t),lo=(e,n,t)=>(0,a.render)((0,a.h)(e,n),t),fo=()=>{let e={userName:"",loggedIn:!1};const n=document.cookie.split(";");for(let t=0;t<n.length;t++)if(n[t].indexOf("SSONAME")>0){if(""==n[t].substring(9))break;e.userName=n[t].substring(9),e.loggedIn=!0;break}return e},uo=e=>{let n;const t=window.location.toString();return n=decodeURI(e),n=n.replace("/login","/login?callapp="+t),n},po=e=>{const n=e||window.location.hostname,t=document.cookie.split("; ").find((e=>e.startsWith("title_loaded")));return!document.referrer.includes(n)&&!t&&(document.cookie="title_loaded=true;max-age=600",!0)},ho=(e,n="headerContainer",t=!1)=>{const{loggedIn:r,userName:o,loginLink:i,...a}=e,s=i||uo(ro.defaultProps.loginLink),c={...r&&o?{loggedIn:r,userName:o}:fo(),...a,loginLink:s};t?co(vo,c,document.getElementById(n)):lo(vo,c,document.getElementById(n))};function mo(){return(mo=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const go=T((({children:e,baseUrl:n,animate:t,...r},o)=>{const[i,s]=h(!1);return g((()=>{if(!0!==t&&!1!==t){if(!1!==t){let e="/"==n?window.location.hostname:n;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),po(e)&&s(!0)}}else s(t)}),[i,t,n]),(0,a.h)(br,mo({ref:o},r,{class:i?"active":"",baseUrl:n}),e)}));function bo(){const e="undefined"!=typeof window,{innerWidth:n,innerHeight:t}=e?window:{innerWidth:1920,innerHeight:1080};return{width:n,height:t}}function yo(){return(yo=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}go.propTypes={baseUrl:ie().string,parentOrg:ie().string,parentOrgUrl:ie().string,animate:ie().bool},go.defaultProps={baseUrl:"/",parentOrgUrl:"/"};const vo=({navTree:e,title:n,baseUrl:t,parentOrg:r,parentOrgUrl:o,logo:i,loggedIn:s,userName:c,loginLink:l,logoutLink:f,buttons:u,breakpoint:d,animateTitle:p,...m})=>{const[b,v]=h(!1),[_,w]=h(!1),[x,k]=h(-1),O="Xl"===d?se:ae,z=parseInt(O,10),{height:j,width:P}=function(){const[e,n]=h(bo());return g((()=>{function e(){n(bo())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}(),[S,$]=h(0),C=()=>{const e=window.pageYOffset;$(e)};g((()=>(window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C)})),[]);const T=y(null),E=y(null),M=y(null);return g((()=>{if(P<z&&b){const e=T.current.clientHeight,n=E.current.clientHeight,t=M.current.clientHeight,r=parseInt(Pe,10);k(j-e-(n+t+2*r))}}),[j,P,b,z]),(0,a.h)(Tr,{breakpoint:O,class:S>0||b&&P<z?"scrolled":""},(0,a.h)(Mr,yo({open:b,ref:T},{searchOpen:_}),(0,a.h)(Lr,null,(0,a.h)("a",{href:"https://www.asu.edu/"},"ASU home"),(0,a.h)("a",{href:"https://my.asu.edu/"},"My ASU"),(0,a.h)("a",{href:"https://www.asu.edu/colleges/"},"Colleges and schools"),(0,a.h)(ro,{loggedIn:s,loginLink:l,logoutLink:f,userName:c})),(0,a.h)(to,{open:_,setOpen:w,mobile:P<z})),(0,a.h)(io,{onClick:e=>{e.preventDefault(),v((e=>!e))},mobileOpen:b,logo:(0,a.h)(so,yo({},i,{ref:E}))},m.dangerouslyGenerateStub?(0,a.h)("div",{id:"asu-generated-stub"}):(0,a.h)(a.Fragment,null,(0,a.h)(go,yo({parentOrg:r,parentOrgUrl:o,baseUrl:t,animate:p},{ref:M}),n),(0,a.h)(Xr,{navTree:e,mobileOpen:b,height:j,width:P,buttons:u,maxMobileHeight:x,breakpoint:d}))))};vo.propTypes={navTree:ie().arrayOf(ie().object),logo:ie().shape(so.propTypes),title:go.propTypes.title,parentOrg:go.propTypes.parentOrg,parentOrgUrl:go.propTypes.parentOrgUrl,baseUrl:go.propTypes.baseUrl,loggedIn:ro.propTypes.loggedIn,userName:ro.propTypes.userName,loginLink:ro.propTypes.loginLink,logoutLink:ro.propTypes.logoutLink,buttons:ie().arrayOf(ie().object),breakpoint:ie().oneOf(["Lg","Xl"]),animateTitle:ie().bool},vo.defaultProps={navTree:[],dangerouslyGenerateStub:!1,title:"",buttons:[],breakpoint:"Lg"};const _o=e=>(0,a.h)("div",{class:(0,re.cx)(e.class,re.css`
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.3rem;
          border: 1px solid #dee2e6;
        `)},e.children),wo=e=>(0,a.h)(_o,{class:e.class},e.children);wo.propTypes={class:ie().string},wo.defaultProps={}},572:e=>{e.exports=n},555:n=>{n.exports=e},24:e=>{e.exports=t}},o={};function i(e){if(o[e])return o[e].exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}return i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(281)})()}));