// ==UserScript==
// @name         掘金代码社区签到
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  one plugin!
// @author       lzx
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
// @exportValue  掘金.aid,掘金.uuid,掘金._signature
// @match https://juejin.cn/
// ==/UserScript==

(function () {
  "use strict";
  const storageKey = "last_sign_timestamp";
  // 获取上一次签到的日子
  const lastSignNumberOfDays = GM_getValue(storageKey, 0);
  // 计算现在所在的日子
  const currentNumberOfDays = Math.floor(
    new Date().valueOf() / 1000 / 60 / 60 / 24
  );

  // 如果今天已经请求过，不再请求
  if (currentNumberOfDays !== lastSignNumberOfDays) {
    GM_xmlhttpRequest({
      url: "https://api.juejin.cn/growth_api/v1/check_in",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "user-agent": navigator.userAgent,
      },
      responseType: "json",
      onload(response) {
        if (response.status === 200) {
          const data = response.response;
          if (data.data === "success") {
            alert("签到成功");
          } else {
            alert(data.err_msg);
          }
          // 更新最近一次签到的日子
          GM_setValue(storageKey, currentNumberOfDays);
        }
      },
    });
  }
})();
