// ==UserScript==
// @name         myplugins
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  one plugin!
// @author       lzx
// @match        https://juejin.cn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @license       AGPL -3.0
// @grant        none
// @require      http://code.jquery.com/jquery-migrate-1.2.1.min.js
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
