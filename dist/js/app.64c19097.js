(function(){"use strict";var n={2139:function(n,t,e){var r=e(144),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-app",[e("v-container",[e("h2",[n._v("网易云音乐解析")]),e("v-text-field",{attrs:{label:"请输入歌曲id"},model:{value:n.n,callback:function(t){n.n=t},expression:"n"}}),e("p",[n._v("例如：https://music.163.com/#/song?id=1855080368 后面的“1855080368”就是歌曲id，只支持非会员歌曲，不提供破解服务")]),e("v-btn",{on:{click:n.getLyric}},[n._v("解析")]),e("a"),e("br"),e("br"),e("audio",{attrs:{src:n.url,controls:""}}),n.lyric?e("p",[n._v(n._s(n.lyric))]):n._e()],1)],1)},i=[],u={data(){return{lyric:"",n:"",url:""}},methods:{getLyric(){this.url=`http://music.163.com/song/media/outer/url?id=${this.n}`;const n=new XMLHttpRequest;n.open("GET",`https://cors-anywhere.wuyuan.dev/music.163.com/api/song/lyric?os=pc&id=${this.n}&lv=-1&kv=-1&tv=-1`,!0),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){const t=JSON.parse(n.responseText);this.lyric=t.lrc.lyric.replace(/\n/g,"\n"),this.lyric=this.lyric.replace(/\[.*?\]/g,"")}}.bind(this),n.send()}}},c=u,l=e(1001),a=e(3453),s=e.n(a),f=e(7524),d=e(3077),p=e(2255),v=e(1141),h=(0,l.Z)(c,o,i,!1,null,null,null),y=h.exports;s()(h,{VApp:f.Z,VBtn:d.Z,VContainer:p.Z,VTextField:v.Z});var b=e(1910);r.Z.use(b.Z);var g=new b.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:g,render:n=>n(y)}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[l])}))?r.splice(l--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],c=r[1],l=r[2],a=0;if(u.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(l)var s=l(e)}for(t&&t(r);a<u.length;a++)i=u[a],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},r=self["webpackChunkCloudMusicDownload"]=self["webpackChunkCloudMusicDownload"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2139)}));r=e.O(r)})();
//# sourceMappingURL=app.64c19097.js.map