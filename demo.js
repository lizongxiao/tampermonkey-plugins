// ==UserScript==
// @name         学习助手
// @namespace    https://www.cnblogs.com/zhengzhijian/p/16599154.html
// @version      0.5
// @description  测试
// @author       宽于律己、严于律人
// @crontab      * 1-23 once * *
// @match        *://*.zte.com.cn/*
// ==/UserScript==

(function () {
  "use strict";
  var aside_Area = document.getElementsByClassName("el-play-area-right");
  aside_Area.style.display = 'none';
})();
