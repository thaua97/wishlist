(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f682e378"],{"6cd7":function(t,e,n){"use strict";n("e658")},"857a":function(t,e,n){var r=n("e330"),u=n("1d80"),a=n("577e"),c=/"/g,i=r("".replace);t.exports=function(t,e,n,r){var s=a(u(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+i(a(r),c,"&quot;")+'"'),o+">"+s+"</"+e+">"}},9911:function(t,e,n){"use strict";var r=n("23e7"),u=n("857a"),a=n("af03");r({target:"String",proto:!0,forced:a("link")},{link:function(t){return u(this,"a","href",t)}})},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},e658:function(t,e,n){},e712:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"mn-breadcrumbs"},t._l(t.breadcrumbsList,(function(e,r){return n("li",{key:r,class:["mn-breadcrumbs__item",{"mn-breadcrumbs__item--linked":e.link}],on:{click:function(e){return t.navegateTo(r)}}},[t._v(" "+t._s(e.name)+" ")])})),0)},u=[],a=(n("9911"),{name:"MnBreadcrumbs",data:function(){return{breadcrumbsList:[]}},watch:{$route:function(){this.updateBreadcrumb()}},created:function(){this.updateBreadcrumb()},methods:{navegateTo:function(t){this.breadcrumbsList[t].link&&this.$router.push({name:this.breadcrumbsList[t].link})},updateBreadcrumb:function(){this.breadcrumbsList=this.$route.meta.breadcrumbs}}}),c=a,i=(n("6cd7"),n("2877")),s=Object(i["a"])(c,r,u,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-f682e378.1564f668.js.map