(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);s&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",d="quarter",u="year",c="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,o=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:c,h:r,m:i,s,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=v;var g=function(t){return t instanceof C},b=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,i=a}return!s&&i&&(y=i),i||!s&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new C(n)},w=_;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var C=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,d=!!w.u(e)||e,f=w.p(t),p=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?s:s.endOf(o)},h=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return d?p(1,0):p(31,11);case l:return d?p(1,m):p(0,m+1);case a:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return p(d?_-g:_+(6-g),m);case o:case c:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,d=w.p(t),f="set"+(this.$u?"UTC":""),p=(a={},a[o]=f+"Date",a[c]=f+"Date",a[l]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[i]=f+"Minutes",a[s]=f+"Seconds",a[n]=f+"Milliseconds",a)[d],h=d===o?this.$D+(e-this.$W):e;if(d===l||d===u){var v=this.clone().set(c,1);v.$d[p](h),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[w.p(t)]()},m.add=function(n,d){var c,f=this;n=Number(n);var p=w.p(d),h=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return h(1);if(p===a)return h(7);var v=(c={},c[i]=t,c[r]=e,c[s]=1e3,c)[p]||1,m=this.$d.getTime()+n*v;return w.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,u=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},c=function(t){return w.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:u(n.monthsShort,a,d,3),MMMM:u(d,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:c(1),hh:c(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(h,(function(t,e){return e||v[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,c,f){var p,h=w.p(c),v=M(n),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,y=w.m(this,v);return y=(p={},p[u]=y/12,p[l]=y,p[d]=y/3,p[a]=(_-m)/6048e5,p[o]=(_-m)/864e5,p[r]=_/e,p[i]=_/t,p[s]=_/1e3,p)[h]||_,f?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=b(t,e,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=C.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",u],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,C,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof y},f=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},v=function(t){return h(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(d);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/a),t%=a,this.$d.months=v(t/l),t%=l,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/i),t%=i,this.$d.minutes=v(t/s),t%=s,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,d=i.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+s.format+d+i.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},m.as=function(t){return this.$ms/u[p(t)]},m.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/u[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var s;return s=e?t*u[p(e)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return f(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=c;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return c(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var s=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(t,e,n,i){return s.fromToBase(t,e,n,i)}n.en.relativeTime=i,s.fromToBase=function(e,s,r,o,a){for(var l,d,u,c=r.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,h=0;h<p;h+=1){var v=f[h];v.d&&(l=o?n(e).diff(r,v.d,!0):r.diff(e,v.d,!0));var m=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=v.r||!v.r){m<=1&&h>0&&(v=f[h-1]);var _=c[v.l];a&&(m=a(""+m)),d="string"==typeof _?_.replace("%d",m):_(m,s,v.l,u);break}}if(s)return d;var y=u?c.future:c.past;return"function"==typeof y?y(d):y.replace("%s",d)},s.to=function(t,e){return r(t,e,this,!0)},s.from=function(t,e){return r(t,e,this)};var o=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(o(this),t)},s.fromNow=function(t){return this.from(o(this),t)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],d=s.base?l[0]+s.base:l[0],u=r[d]||0,c="".concat(d," ").concat(u);r[d]=u+1;var f=n(c),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=i(p,s);s.byIndex=a,e.splice(a,0,{identifier:c,updater:h,references:1})}o.push(c)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=s(t,i),d=0;d<r.length;d++){var u=n(r[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],e=t[5];var s=n(484),i=n.n(s),r=n(646),o=n.n(r),a=n(110),l=n.n(a);i().extend(o()),i().extend(l());const d=t=>t?i()(t).format("DD/MM/YY hh:mm"):"",u=t=>t?i()(t).format("HH:mm"):"",c=(t,e="MMM DD")=>t?i()(t).format(e):"",f=t=>t[Math.floor(Math.random()*t.length)],p=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],h=["Amsterdam","Chamonix","Geneva","Sofia"],v=[{id:"00",basePrice:0,dateFrom:"2019-07-10T11:22Z",dateTo:"2019-07-10T11:45Z",destination:"dest0",isFavorite:!1,offers:["offer01"],type:t[0]},{id:"11",basePrice:1100,dateFrom:"2019-07-12T10:55Z",dateTo:"2019-07-12T12:55Z",destination:"dest1",isFavorite:!0,offers:[],type:t[1]},{id:"22",basePrice:2200,dateFrom:"2019-07-14T09:22Z",dateTo:"2019-07-15T09:22Z",destination:"dest2",isFavorite:!1,offers:["offer21","offer23"],type:t[2]},{id:"33",basePrice:3300,dateFrom:"2019-07-14T09:50Z",dateTo:"2019-07-16T10:55Z",destination:"dest3",isFavorite:!0,offers:["offer31"],type:t[3]}],m=[{id:"dest0",description:f(p),name:h[0],pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]},{id:"dest1",description:f(p),name:h[1],pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]},{id:"dest2",description:f(p)+f(p),name:h[2],pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]},{id:"dest3",description:f(p),name:h[3],pictures:[{src:`https://loremflickr.com/248/152?random=${Math.random()}`,description:"Chamonix parliament building"}]}],_=[{type:t[0],offers:[{id:"offer01",title:"Upgrade to a business class",price:10},{id:"offer02",title:"Upgrade to a business class",price:20}]},{type:t[1],offers:[{id:"offer11",title:"Upgrade to a business class",price:110}]},{type:t[2],offers:[{id:"offer21",title:"Upgrade to",price:21},{id:"offer22",title:"Upgrade to a business",price:22},{id:"offer23",title:"Upgrade to a business class",price:23}]},{type:t[3],offers:[{id:"offer31",title:"Upgrade to a business class",price:31}]},{type:t[5],offers:[{id:"offer51",title:"Upgrade to a business class",price:51},{id:"offer52",title:"Upgrade to",price:52},{id:"offer53",title:"Upgrade to a business",price:53},{id:"offer54",title:"Upgrade to a business class",price:54}]}],y=()=>f(v);var $=n(379),g=n.n($),b=n(795),M=n.n(b),w=n(569),C=n.n(w),S=n(565),D=n.n(S),x=n(216),A=n.n(x),T=n(589),k=n.n(T),E=n(10),O={};O.styleTagTransform=k(),O.setAttributes=D(),O.insert=C().bind(null,"head"),O.domAPI=M(),O.insertStyleElement=A(),g()(E.Z,O),E.Z&&E.Z.locals&&E.Z.locals;const H="shake";class B{#t=null;constructor(){if(new.target===B)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(H),setTimeout((()=>{this.element.classList.remove(H),t?.()}),600)}}function Y(t,e,n="beforeend"){if(!(t instanceof B))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}class F extends B{get template(){return'\n  <ul class="trip-events__list"></ul>\n'}}class I extends B{get template(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>\n'}}class L extends B{get template(){return'\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>\n'}}class N extends B{#e=null;#n=null;#s=null;constructor({event:t,destination:e,offers:n}){super(),this.#e=t,this.#n=e,this.#s=n}get template(){return(({event:t,destination:e,offers:n})=>{const{dateFrom:s,dateTo:r,type:o,basePrice:a,isFavorite:l}=t,d=e?.name??"";return`\n  <li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${s}">\n      ${c(s)}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${o} ${d}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${s}">\n          ${u(s)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${r}">\n          ${u(r)}</time>\n        </p>\n        <p class="event__duration">\n          ${(({dateFrom:t,dateTo:e})=>{const n=i()(e).diff(i()(t));return n>=864e5?i().duration(n).format("DD[D] HH[H] mm[M]"):n>=36e5?i().duration(n).format("HH[H] mm[M]"):i().duration(n).format("mm[M]")})({dateFrom:s,dateTo:r})}\n        </p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">\n        ${a+(t=>t.length?t.reduce(((t,e)=>t+e.price),0):0)(n)}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      ${(t=>t.length?`\n    <ul class="event__selected-offers">\n      ${t.map((({title:t,price:e})=>`\n          <li class="event__offer">\n            <span class="event__offer-title">${t}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${e}</span>\n          </li>`)).join("")}\n    </ul>\n  `:"")(n)}\n      <button class="event__favorite-btn\n      ${l?" event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>\n`})({event:this.#e,destination:this.#n,offers:this.#s})}}const P=({offers:t,event:e})=>t&&t.length?`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n\t\t\t\t${t.map((t=>(({title:t,price:n,id:s})=>`\n\t\t<div class="event__offer-selector">\n\t\t\t<input class="event__offer-checkbox  visually-hidden"\n      id="event-offer-${s.slice(0,7)}"\n      type="checkbox" name="event-offer-${s.slice(0,7)}"\n      ${(t=>"offers"in e&&e.offers.includes(t))(s)?"checked":""}>\n\t\t\t<label class="event__offer-label" for="event-offer-${s.slice(0,7)}">\n\t\t\t\t<span class="event__offer-title">${t}</span>\n\t\t\t\t&plus;&euro;&nbsp;\n\t\t\t\t<span class="event__offer-price">${n}</span>\n\t\t\t</label>\n\t\t</div>\n  `)(t))).join("")}\n      </div>\n    </section>\n  `:"";class U extends B{#i=null;#n=null;#s=null;#e=null;constructor({titles:t,destination:e,offers:n,event:s}){super(),this.#i=t,this.#n=e,this.#s=n,this.#e=s}get template(){return(({titles:n,destination:s,offers:i,event:r})=>{const{dateFrom:o,dateTo:a,type:l}=r??{};return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n          ${((n=e)=>`\n  <div class="event__type-list">\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${t.map((t=>(t=>`\n  <div class="event__type-item">\n    <input id="event-type-${t.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.toLowerCase()}"\n    ${t===n?"checked":""}>\n    <label class="event__type-label  event__type-label--${t.toLowerCase()}" for="event-type-${t.toLowerCase()}-1">${t}</label>\n  </div>\n  `)(t))).join("")}\n    </fieldset>\n  </div>`)(l)}\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${l||e}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"\n          value="${s?s.name:""}"\n          list="destination-list-1">\n          ${(t=>t?`\n    <datalist id="destination-list-1">\n      ${t.map((t=>`<option value="${t}"></option>`)).join("")}\n    </datalist>\n  `:"")(n)}\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"\n          value="${d(o)}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"\n          value="${d(a)}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"\n          value="${(({offers:t,event:e})=>{if(!("offers"in e))return 0;const n=t.reduce(((t,{id:n,price:s})=>t+(e.offers.includes(n)?s:0)),0);return e.basePrice+n})({offers:i,event:r})}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n      ${P({offers:i,event:r})}\n      ${(t=>{if(!t)return"";const{description:e,pictures:n=[]}=t;return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">\n        Destination\n      </h3>\n      <p class="event__destination-description">${e}</p>\n      ${s=n,s.length?`\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${s.map((({src:t,description:e})=>`<img class="event__photo" src="${t}" alt="${e}">`)).join("")}\n      </div>\n    </div>\n  `:""}\n    </section>\n  `;var s})(s)}\n      </section>\n    </form>\n  </li>\n`})({titles:this.#i,destination:this.#n,offers:this.#s,event:this.#e})}}class j extends B{#s=[];#r=[];#o=[];constructor({events:t,destinations:e,offers:n}){super(),this.#r=t,this.#s=n,this.#o=e}get template(){return(({events:t,offers:e,destinations:n})=>{const s=0===t.length,i=s?0:t[t.length-1].dateTo,r=s?"":c(t[0].dateFrom,"DD"),o=s?"":c(i,"DD MMM");return`\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">${(({events:t,destinations:e})=>{const n=({event:t,points:e})=>e.find((({id:e})=>e===t.destination)).name;if(!t.length)return"";const s=n({event:t[0],points:e});if(1===t.length)return s;const i=n({event:t[t.length-1],points:e});return 2===t.length?`${s} — ${i}`:`${s} — ... — ${i}`})({events:t,destinations:n})}</h1>\n        <p class="trip-info__dates">\n        ${r}\n        &nbsp;—&nbsp;\n        ${o}\n        </p>\n      </div>\n      <p class="trip-info__cost">\n        Total: €&nbsp;<span class="trip-info__cost-value">\n        ${(({events:t,offers:e})=>t.length?t.reduce(((t,{basePrice:n,type:s,offers:i})=>t+n+(({type:t,eventIdOffers:e,allOffers:n})=>{const s=n.find((({type:e})=>e===t));return s?s.offers.filter((({id:t})=>e.includes(t))).reduce(((t,{price:e})=>t+e),0):0})({type:s,eventIdOffers:i,allOffers:e})),0):0)({events:t,offers:e})}</span>\n      </p>\n    </section>`})({events:this.#r,offers:this.#s,destinations:this.#o})}}const Z=document.querySelector(".trip-main"),W=Z.querySelector(".trip-controls__filters"),q=document.querySelector(".trip-events"),z=new class{#r=null;constructor(){do{this.#r=Array.from({length:5},y)}while(!this.#r.find((({id:t})=>"22"===t)))}get all(){return this.#r}getById=t=>this.#r.find((({id:e})=>e===t))},J=new class{#o=null;constructor(){this.#o=m}get all(){return this.#o}get names(){return this.#o.map((({name:t})=>t))}getById=t=>this.#o.find((({id:e})=>e===t))},R=new class{#s=null;constructor(){this.#s=_}get all(){return this.#s}getByType=(t=e)=>this.#s.find((({type:e})=>e===t)).offers;getSelectedOnes=({eventType:t,eventOffers:e})=>this.getByType(t).filter((({id:t})=>e.includes(t)))},X=new class{#a=null;#l=null;#d=null;#u=null;#c=null;#f=null;#p=new F;#h=[];constructor(t){const{boardContainer:e,eventsModel:n,destinationsModel:s,offerrsModel:i}=t;this.#a=e,this.#l=n,this.#d=s,this.#u=i}init(){this.#f=Z,this.#c=W,this.#h=this.#l.all,Y(new j({events:this.#h,offers:this.#u.all,destinations:this.#d.all}),this.#f,"afterbegin"),Y(new I,this.#c),Y(new L,this.#a),Y(this.#p,this.#a);const t={};Y(new U({titles:this.#d.names,event:t,offers:this.#u.getByType(t?.type),destination:this.#d.getById(t?.destination)}),this.#p.element),this.#h.forEach((t=>this.#v(t)));const e=this.#l.getById("22"),n=this.#d.getById(e?.destination);Y(new U({titles:this.#d.names,event:e,offers:this.#u.getByType(e?.type),destination:n}),this.#p.element)}#v=t=>{const e=this.#d.getById(t.destination),n=this.#u.getSelectedOnes({eventType:t.type,eventOffers:t.offers});Y(new N({event:t,destination:e,offers:n}),this.#p.element)}}({boardContainer:q,eventsModel:z,destinationsModel:J,offerrsModel:R});X.init()})()})();
//# sourceMappingURL=bundle.0e79191f3ccb48194615.js.map