(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3l3q":function(e,t,r){"use strict";var n=r("wTIg"),a=(r("q1tI"),r("qKvR")),o=Object(n.a)("span",{target:"e11g0dyf0"})({name:"d37ui5",styles:"font-size:14px;color:#721c24;background-color:#f8d7da;border-color:#f5c6cb;padding:0.25rem 0.5rem;margin-bottom:1rem;border:1px solid transparent;border-radius:0.25rem;"});t.a=function(){return Object(a.b)(o,null,"L")}},"7zIB":function(e,t,r){"use strict";var n=r("wTIg"),a=(r("q1tI"),r("qKvR")),o=Object(n.a)("div",{target:"e11nt1gl0"})("background-image:url('",(function(e){return e.logoUrl}),"');background-repeat:no-repeat;background-position:50% 50%;background-size:cover;height:30px;width:30px;margin-right:15px;display:inline-block;");t.a=function(e){var t=e.logoUrl;return Object(a.b)(o,{logoUrl:t})}},FbJT:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("YwZP"),i=r("soUV"),l=(r("SRfc"),r("f3/d"),r("wTIg")),s=r("Wbzz"),c=r("WSxS"),u=r("7zIB"),d=r("ZMLh"),p=r("3l3q"),b=r("qKvR"),f=["Player","Kills","Deaths","Assists","Last Hits","Denies","Damage"],m=Object(l.a)("div",{target:"e8vgxi0"})({name:"1nllisj",styles:"display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;background:#242b31;color:white;padding:0.75rem 1.5rem;font-size:18.5px;"}),g=Object(l.a)("span",{target:"e8vgxi1"})({name:"1rki72k",styles:"margin:'0 25px',fontWeight:'bold',fontSize:'1.5rem'"}),v=function(e){var t=e.players;return Object(b.b)(c.a,null,Object(b.b)("thead",null,Object(b.b)("tr",null,f.map((function(e){return Object(b.b)("td",{key:e},e)})))),Object(b.b)("tbody",null,t.map((function(e){var t=e.account_id,r=e.name,n=e.kills,a=e.deaths,o=e.assists,i=e.last_hits,l=e.denies,c=e.hero_damage;return Object(b.b)("tr",{key:r},Object(b.b)("td",null,Object(b.b)(s.a,{to:"/players/"+t},r)),Object(b.b)("td",null,n),Object(b.b)("td",null,a),Object(b.b)("td",null,o),Object(b.b)("td",null,i),Object(b.b)("td",null,l),Object(b.b)("td",null,c))}))))},h=function(e){var t=e.match,r=t.radiant_team,n=t.dire_team,o=t.players,i=r,l=o.slice(0,5),s=n,c=o.slice(5,10);return Object(b.b)(a.a.Fragment,null,Object(b.b)(m,null,Object(b.b)("div",{className:"flex align-center"},Object(b.b)(u.a,{logoUrl:i.logo_url}),Object(b.b)("span",null,i.name)),Object(b.b)(g,null,"vs."),Object(b.b)("div",{className:"flex align-center"},Object(b.b)(u.a,{logoUrl:s.logo_url}),Object(b.b)("span",null,s.name))),Object(b.b)("div",{style:{marginBottom:"10px"}},Object(b.b)("span",{style:{marginRight:"7.5px"}},i.name),Object(b.b)(d.a,null)),Object(b.b)(v,{players:l}),Object(b.b)("div",{style:{margin:"25px 0 10px "}},Object(b.b)("span",{style:{marginRight:"7.5px"}},s.name),Object(b.b)(p.a,null)),Object(b.b)(v,{players:c}))};r.d(t,"query",(function(){return y}));t.default=function(e){var t=e.data.allMatchJson;return Object(b.b)(i.a,null,Object(b.b)(o.Router,null,Object(b.b)(h,{path:"matches/:matchId",match:t.edges[0].node})))};var y="3884987656"},QA0p:function(e,t,r){"use strict";r("91GP"),r("f3/d"),t.__esModule=!0,t.default=function(e,t){var r=void 0===t?{}:t,n=r.propTypes,o=r.defaultProps,i=r.allowFallback,l=void 0!==i&&i,s=r.displayName,c=void 0===s?e.name||e.displayName:s,u=function(t,r){return e(t,r)};return Object.assign(a.default.forwardRef||!l?a.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:n,defaultProps:o})};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n}},TSYQ:function(e,t,r){var n;r("LK8F"),function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},WSxS:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("wx14"),i=r("zLVn"),l=r("TSYQ"),s=r.n(l),c=r("vUet"),u=a.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,l=e.striped,u=e.bordered,d=e.borderless,p=e.hover,b=e.size,f=e.variant,m=e.responsive,g=Object(i.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(c.a)(r,"table"),h=s()(n,v,f&&v+"-"+f,b&&v+"-"+b,l&&v+"-striped",u&&v+"-bordered",d&&v+"-borderless",p&&v+"-hover"),y=a.a.createElement("table",Object(o.a)({},g,{className:h,ref:t}));if(m){var O=v+"-responsive";return"string"==typeof m&&(O=O+"-"+m),a.a.createElement("div",{className:O},y)}return y})),d=r("qKvR");t.a=function(e){var t=e.children;return Object(d.b)(u,{bordered:!0,striped:!0,responsive:!0,hover:!0},t)}},Wbzz:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("+ZDr"),i=r.n(o);r.d(t,"a",(function(){return i.a}));r("lw3w");var l=r("emEt");r("qKvR"),l.default.enqueue,a.a.createContext({})},ZMLh:function(e,t,r){"use strict";var n=r("wTIg"),a=(r("q1tI"),r("qKvR")),o=Object(n.a)("span",{target:"e6y4oa40"})({name:"3h6jsg",styles:"font-size:14px;color:#155724;background-color:#d4edda;border-color:#c3e6cb;padding:0.3rem;margin-bottom:1rem;border:1px solid transparent;border-radius:0.25rem;"});t.a=function(){return Object(a.b)(o,null,"W")}},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("q1tI"),a=r.n(n),o=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null}},soUV:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("wx14"),l=r("zLVn"),s=r("TSYQ"),c=r.n(s),u=r("vUet"),d=a.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.fluid,o=e.as,s=void 0===o?"div":o,d=e.className,p=Object(l.a)(e,["bsPrefix","fluid","as","className"]),b=Object(u.a)(r,"container");return a.a.createElement(s,Object(i.a)({ref:t},p,{className:c()(d,n?b+"-fluid":b)}))}));d.displayName="Container",d.defaultProps={fluid:!1};var p=d,b=(r("gcSU"),r("rMck"),r("qKvR"));t.a=function(e){var t=e.children;return Object(b.b)(a.a.Fragment,null,Object(b.b)("header",null,Object(b.b)("nav",{className:"flex justify-between",style:{padding:"20px 40px",background:"#242b31"}},Object(b.b)(o.a,{to:"/"},"Dota 2 Demo"),Object(b.b)(o.a,{to:"/"},"Teams"))),Object(b.b)("main",null,Object(b.b)(p,null,t)))}},vUet:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("f3/d"),r("wx14"),r("QA0p");var n=r("q1tI"),a=r.n(n),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var r=Object(n.useContext)(o);return e||r[t]||t}},wTIg:function(e,t,r){"use strict";r("f3/d"),r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("lSNA"),a=r.n(n),o=r("q1tI"),i=r("4qRI"),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(i.a)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=r("qKvR"),u=r("SIPS"),d=r("MiSq"),p=s,b=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:b};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function e(t,r){var n,a,i;void 0!==r&&(n=r.label,i=r.target,a=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var l=t.__emotion_real===t,s=l&&t.__emotion_base||t;"function"!=typeof a&&l&&(a=t.__emotion_forwardProp);var p=a||f(s),b=!p("as");return function(){var m=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&v.push("label:"+n+";"),null==m[0]||void 0===m[0].raw)v.push.apply(v,m);else{0,v.push(m[0][0]);for(var h=m.length,y=1;y<h;y++)v.push(m[y],m[0][y])}var O=Object(c.c)((function(e,t,r){return Object(o.createElement)(c.a.Consumer,null,(function(n){var l=b&&e.as||s,c="",m=[],g=e;if(null==e.theme){for(var h in g={},e)g[h]=e[h];g.theme=n}"string"==typeof e.className?c=Object(u.a)(t.registered,m,e.className):null!=e.className&&(c=e.className+" ");var y=Object(d.a)(v.concat(m),t.registered,g);Object(u.b)(t,y,"string"==typeof l);c+=t.key+"-"+y.name,void 0!==i&&(c+=" "+i);var O=b&&void 0===a?f(l):p,j={};for(var x in e)b&&"as"===x||O(x)&&(j[x]=e[x]);return j.className=c,j.ref=r||e.innerRef,Object(o.createElement)(l,j)}))}));return O.displayName=void 0!==n?n:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",O.defaultProps=t.defaultProps,O.__emotion_real=O,O.__emotion_base=s,O.__emotion_styles=v,O.__emotion_forwardProp=a,Object.defineProperty(O,"toString",{value:function(){return"."+i}}),O.withComponent=function(t,n){return e(t,void 0!==n?g({},r||{},{},n):r).apply(void 0,v)},O}}}}]);
//# sourceMappingURL=component---src-pages-matches-tsx-646eec31c5d3a76b724a.js.map