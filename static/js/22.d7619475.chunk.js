(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[22],{1105:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(2);function u(t,e,r){var u=void 0===r?{}:r,i=u.leading,s=void 0===i||i,o=u.trailing;return function(t,e,r){var u=this,i=Object(n.useRef)(null),s=Object(n.useRef)(0),o=Object(n.useRef)(null),c=Object(n.useRef)([]),a=Object(n.useRef)(),l=Object(n.useRef)(),h=Object(n.useRef)(t),f=Object(n.useRef)(!0);h.current=t;var d=!e&&0!==e&&"undefined"!==typeof window;if("function"!==typeof t)throw new TypeError("Expected a function");e=+e||0;var p=!!(r=r||{}).leading,v=!("trailing"in r)||!!r.trailing,b="maxWait"in r,y=b?Math.max(+r.maxWait||0,e):null;return Object(n.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),Object(n.useMemo)((function(){var t=function(t){var e=c.current,r=a.current;return c.current=a.current=null,s.current=t,l.current=h.current.apply(r,e)},r=function(t,e){d&&cancelAnimationFrame(o.current),o.current=d?requestAnimationFrame(t):setTimeout(t,e)},n=function(t){if(!f.current)return!1;var r=t-i.current,n=t-s.current;return!i.current||r>=e||r<0||b&&n>=y},O=function(e){return o.current=null,v&&c.current?t(e):(c.current=a.current=null,l.current)},R=function t(){var u=Date.now();if(n(u))return O(u);if(f.current){var o=u-i.current,c=u-s.current,a=e-o,l=b?Math.min(a,y-c):a;r(t,l)}},m=function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];var v=Date.now(),y=n(v);if(c.current=h,a.current=u,i.current=v,y){if(!o.current&&f.current)return s.current=i.current,r(R,e),p?t(i.current):l.current;if(b)return r(R,e),t(i.current)}return o.current||r(R,e),l.current};return m.cancel=function(){o.current&&(d?cancelAnimationFrame(o.current):clearTimeout(o.current)),s.current=0,c.current=i.current=a.current=o.current=null},m.isPending=function(){return!!o.current},m.flush=function(){return o.current?O(Date.now()):l.current},m}),[p,b,e,y,v,d])}(t,e,{maxWait:e,leading:s,trailing:void 0===o||o})}},904:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(2),u=r.n(n),i=r(25);function s(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var o=u.a.createContext(s()),c=r(267);function a(t,e){var r=u.a.useRef(!1),n=u.a.useState(0)[1],s=Object(c.b)(),a=u.a.useContext(o),l=s.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=i.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=i.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=i.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var h=u.a.useState((function(){return new e(s,l)}))[0],f=h.getOptimisticResult(l);if(u.a.useEffect((function(){r.current=!0,a.clearReset();var t=h.subscribe(i.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return h.updateResult(),function(){r.current=!1,t()}}),[a,h]),u.a.useEffect((function(){h.setOptions(l,{listeners:!1})}),[l,h]),l.suspense&&f.isLoading)throw h.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){a.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&f.isError&&!f.isFetching)throw f.error;return"tracked"===l.notifyOnChangeProps&&(f=h.trackResult(f)),f}},909:function(t,e,r){var n=r(389),u=r(926),i=r(380),s=r(61);t.exports=function(t,e){return(s(t)?n:u)(t,i(e,3))}},924:function(t,e){t.exports=function(t,e,r,n){for(var u=t.length,i=r+(n?1:-1);n?i--:++i<u;)if(e(t[i],i,t))return i;return-1}},926:function(t,e,r){var n=r(387);t.exports=function(t,e){var r=[];return n(t,(function(t,n,u){e(t,n,u)&&r.push(t)})),r}},928:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(944),u=r(5),i=r(904);function s(t,e,r){var s=Object(u.l)(t,e,r);return Object(i.a)(s,n.a)}},944:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(7),u=r(31),i=r(5),s=r(25),o=r(120),c=r(73),a=r(159),l=r(74),h=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(u.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),f(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&p(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&p(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var u=this.hasListeners();u&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!u||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!u||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var u=e.subscribe((function(e){e.isFetching||(u(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(Object(n.a)({},t,{meta:{refetchPage:null==t?void 0:t.refetchPage}}))},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.i)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var e=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||o.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n=this.currentQuery,u=this.options,s=this.currentResult,o=this.currentResultState,c=this.currentResultOptions,l=t!==n,h=l?t.state:this.currentQueryInitialState,v=l?this.currentResult:this.previousQueryResult,b=t.state,y=b.dataUpdatedAt,O=b.error,R=b.errorUpdatedAt,m=b.isFetching,S=b.status,g=!1,Q=!1;if(e.optimisticResults){var E=this.hasListeners(),j=!E&&f(t,e),w=E&&d(t,n,e,u);(j||w)&&(m=!0,y||(S="loading"))}if(e.keepPreviousData&&!b.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==S)r=v.data,y=v.dataUpdatedAt,S=v.status,g=!0;else if(e.select&&"undefined"!==typeof b.data)if(s&&b.data===(null==o?void 0:o.data)&&e.select===(null==c?void 0:c.select)&&!this.previousSelectError)r=s.data;else try{r=e.select(b.data),!1!==e.structuralSharing&&(r=Object(i.n)(null==s?void 0:s.data,r)),this.previousSelectError=null}catch(T){Object(a.a)().error(T),O=T,this.previousSelectError=T,R=Date.now(),S="error"}else r=b.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&("loading"===S||"idle"===S)){var I;if((null==s?void 0:s.isPlaceholderData)&&e.placeholderData===(null==c?void 0:c.placeholderData))I=s.data;else if(I="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof I)try{I=e.select(I),!1!==e.structuralSharing&&(I=Object(i.n)(null==s?void 0:s.data,I)),this.previousSelectError=null}catch(T){Object(a.a)().error(T),O=T,this.previousSelectError=T,R=Date.now(),S="error"}"undefined"!==typeof I&&(S="success",r=I,Q=!0)}return{status:S,isLoading:"loading"===S,isSuccess:"success"===S,isError:"error"===S,isIdle:"idle"===S,data:r,dataUpdatedAt:y,error:O,errorUpdatedAt:R,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>h.dataUpdateCount||b.errorUpdateCount>h.errorUpdateCount,isFetching:m,isLoadingError:"error"===S&&0===b.dataUpdatedAt,isPlaceholderData:Q,isPreviousData:g,isRefetchError:"error"===S&&0!==b.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,u=r.notifyOnChangePropsExclusions;if(!n&&!u)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,s=t[n]!==e[n],o=null==i?void 0:i.some((function(t){return t===r})),c=null==u?void 0:u.some((function(t){return t===r}));return s&&!c&&(!i||o)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;s.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(c.a);function f(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&p(t,e))}(t,e)}function d(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&("error"!==t.state.status||!1===n.enabled)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}},952:function(t,e,r){var n=r(953),u=1/0;t.exports=function(t){return t?(t=n(t))===u||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}},953:function(t,e,r){var n=r(954),u=r(200),i=r(199),s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(u(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=u(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=o.test(t);return r||c.test(t)?a(t.slice(2),r?2:8):s.test(t)?NaN:+t}},954:function(t,e,r){var n=r(955),u=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(u,""):t}},955:function(t,e){var r=/\s/;t.exports=function(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}},979:function(t,e,r){var n=r(924),u=r(380),i=r(980),s=Math.max;t.exports=function(t,e,r){var o=null==t?0:t.length;if(!o)return-1;var c=null==r?0:i(r);return c<0&&(c=s(o+c,0)),n(t,u(e,3),c)}},980:function(t,e,r){var n=r(952);t.exports=function(t){var e=n(t),r=e%1;return e===e?r?e-r:e:0}}}]);
//# sourceMappingURL=22.d7619475.chunk.js.map