(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,8],{266:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1c6c4fa4",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(266)},268:function(t,e,n){var r=n(57)(!1);r.push([t.i,"\n.search[data-v-6edcd55e]{\n  transform: translateY(64px);\n}\n\n",""]),t.exports=r},269:function(t,e,n){"use strict";n.r(e);var r={},l=(n(267),n(34)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-5 py-8 mx-auto nuxt-bg"},[n("div",{staticClass:"flex flex-col text-center mb-4"},[n("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-gray-200 text-xl"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"search sm:px-16 px-4 flex z-0"},[t._t("search")],2)])])}),[],!1,null,"6edcd55e",null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var r={},l=n(34),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-600 body-font rounded bg-gray-900 mx-4 sm:mx-8 my-8 py-6 px-6"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex flex-wrap -m-4"},[n("div",{staticClass:"w-full background-articles"},[n("div",{staticClass:"h-full flex sm:flex-row flex-col items-center sm:justify-start text-justify sm:text-left"},[n("div",{staticClass:"flex-shrink-0 sm:w-64 w-full object-cover object-center mb-4 sm:mb-0"},[t._t("img")],2),t._v(" "),n("div",{staticClass:"flex-grow sm:pl-2"},[n("h2",{staticClass:"title-font font-medium text-lg text-gray-400"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"mb-4"},[t._t("default")],2),t._v(" "),n("span",{staticClass:"inline-flex"},[t._t("tag")],2)])])])])])])}),[],!1,null,"12214342",null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(70),n(142),n(40),n(99)),o={components:{blogArticles:n(274).default},filters:{formatDate:function(){return Object(l.a)(new Date,"dd-MM-yyyy")}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return l=e.sent,e.abrupt("return",{blogs:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{query:"",result:[],nosearch:!0}},head:function(){var title="NuxtLover | Blog",t="Awesome blog build by NuxtLover for Nuxters";return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t}]}},watch:{query:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.result=[],n.abrupt("return");case 3:return n.next=5,e.$content("blog").only(["title","slug","description"]).sortBy("createdAt","asc").limit(12).search(t).fetch();case 5:e.result=n.sent;case 6:case"end":return n.stop()}}),n)})))()}},methods:{reset:function(){this.query=""}}},c=n(34),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Theheader",{scopedSlots:t._u([{key:"search",fn:function(){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"w-full h-16 shadow-lg bg-gray-900 rounded border border-gray-900 focus:shadow-2xl focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",attrs:{id:"search",type:"search",placeholder:"Search by title",autocomplete:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]},proxy:!0}])},[t._v("\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae inventore repellendus praesentium dolores minus, accusantium, necessitatibus autem quia sit voluptatum molestiae eveniet qui veritatis nemo eligendi sapiente alias ipsum rerum.\n    ")]),t._v(" "),t.result.length?[n("ul",{staticClass:"border border-gray-800 mt-6 shadow-lg rounded bg-gray-900 text-gray-400 sm:mx-16 mx-4 mt-10 mb-10 py-1 pl-2"},[n("span",{staticClass:"mb-4"},[n("button",{staticClass:"cancel font-extrabold text-2xl",on:{click:t.reset}},[t._v("\n          X\n        ")])]),t._v(" "),t._l(t.result,(function(e){return n("li",{key:e.slug,staticClass:"px-4"},[n("div",{staticClass:"h-full items-center sm:justify-start text-justify sm:text-left"},[n("h2",{staticClass:"title-font font-medium text-lg text-white text-xl"},[n("nuxt-link",{attrs:{to:e.slug}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1),t._v(" "),n("p",{staticClass:"mb-4 text-gray-400 text-base"},[t._v("\n            "+t._s(e.description)+"\n          ")])])])}))],2)]:t._l(t.blogs,(function(e){return n("blogArticles",{key:e.id,staticClass:"content",scopedSlots:t._u([{key:"img",fn:function(){return[n("nuxt-link",{attrs:{to:e.slug}},[n("img",{staticClass:"rounded-lg",attrs:{alt:"team",src:e.img}})])]},proxy:!0},{key:"title",fn:function(){return[n("nuxt-link",{attrs:{to:e.slug}},[t._v("\n          "+t._s(e.title)+"\n        ")])]},proxy:!0},{key:"tag",fn:function(){return[t._l(e.tag,(function(e){return n("div",{key:e.id},[n("span",{staticClass:"mr-3"},[t._v("\n            #"+t._s(e)+"\n          ")])])})),t._v("\n        •\n        "),n("span",{staticClass:"ml-3"},[t._v("\n          "+t._s(t._f("formatDate")(e.createdAt))+"\n        ")])]},proxy:!0}],null,!0)},[t._v(" "),t._v("\n      "+t._s(e.description)+"\n      ")])}))],2)}),[],!1,null,"f6bb0570",null);e.default=component.exports;installComponents(component,{Theheader:n(269).default})}}]);