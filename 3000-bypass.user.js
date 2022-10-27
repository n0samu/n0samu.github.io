// ==UserScript==
// @name        3000.com Login Bypass
// @namespace   n0samu.github.io
// @include     https://www.3000.com/work/*
// @grant       none
// @version     1.0
// @author      nosamu
// @description Play games on 3000.com without logging in!
// @run-at document-idle
// ==/UserScript==

var id = setInterval(function() {
	var loginOverlay = document.querySelector(".nightlimitTips");
	if (loginOverlay) {
		var loginBtn = loginOverlay.querySelector(".btn");
		var cfg = unsafeWindow.userLoginCfg;
		if (loginBtn && cfg && cfg.isLogin == false) {
			cfg.isLogin = true;
			loginOverlay.remove();
			clearInterval(id);
		}
	}
}, 200);
