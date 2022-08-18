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
  var button = document.createElement("button"); //创建一个按钮
  button.textContent = "一键点赞评论"; //按钮内容
  button.style.width = "90px"; //按钮宽度
  button.style.height = "28px"; //按钮高度
  button.style.align = "center"; //文本居中
  button.style.color = "white"; //按钮文字颜色
  button.style.background = "#e33e33"; //按钮底色
  button.style.border = "1px solid #e33e33"; //边框属性
  button.style.borderRadius = "4px"; //按钮四个角弧度
  button.addEventListener("click", clickBotton); //监听按钮点击事件
  function clickBotton() {
    document.getElementsByClassName("el-play-area-right").style.display =
      "none";
  }
  var like_comment = document.getElementById("divHead2"); //getElementsByClassName 返回的是数组，所以要用[] 下标
    like_comment.appendChild(button); //把按钮加入到 x 的子节点中
})();
