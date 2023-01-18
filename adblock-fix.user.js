// ==UserScript==
// @name        Adblock Fix for Game Sites
// @namespace   n0samu.github.io
// @include     https://www.play-games.com/game/*
// @include     https://www.jogos360.com.br/*
// @grant       none
// @version     1.0
// @author      nosamu
// @description Fix games on Play-Games.com and jogos360.com.br not starting with adblock enabled.
// @run-at document-idle
// ==/UserScript==

let elName, fnName;
switch (document.domain) {
	case 'www.play-games.com':
		elName = 'loadthegame';
		fnName = 'loadGame';
		break;
	case 'www.jogos360.com.br':
		elName = 'preload-start-ad';
		fnName = 'cleanUp';
		break;
}

let el = document.getElementById(elName);
el.setAttribute('onclick', (el.getAttribute('onclick') || '') + fnName + '();');