// ==UserScript==
// @name         掘金代码社区签到
// @namespace    https://www.cnblogs.com/zhengzhijian/p/16599154.html
// @version      0.5
// @description  测试
// @author       宽于律己、严于律人
// @crontab      * 1-23 once * *
// @grant GM_xmlhttpRequest
// @grant GM_notification
// @grant GM_getValue
// @connect api.juejin.cn
// @grant GM_xmlhttpRequest
// @require https://cdn.jsdelivr.net/npm/scriptcat-lib@1.1.3/dist/gm.js
// @definition https://cdn.jsdelivr.net/npm/scriptcat-lib@1.1.3/src/types/gm.d.ts
// @cloudCat
// @exportCookie domain=.juejin.cn
// @match https://euniv.zte.com.cn/kng/plan/video
// ==/UserScript==

(function () {
  "use strict";
  var aside_Area = document.getElementsByClassName("el-play-area-right");
  aside_Area.style.display = 'none';
})();
