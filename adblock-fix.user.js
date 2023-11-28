// ==UserScript==
// @name        Adblock Fix for Game Sites
// @namespace   n0samu.github.io
// @include     https://www.play-games.com/game/*
// @include     https://www.flashgamesplayer.com/free/*
// @grant       none
// @version     1.2
// @author      nosamu
// @description Fix Play button not working on various game sites with adblock enabled.
// @run-at document-idle
// ==/UserScript==

function addButtonAction(elName, fnName) {
	let btn = document.getElementById(elName);
	btn.setAttribute('onclick', (btn.getAttribute('onclick') || '') + fnName + '();');
}

switch (document.domain) {
	case 'www.play-games.com':
		addButtonAction('loadthegame', 'loadGame');
		break;
	case 'www.flashgamesplayer.com':
		document.getElementById('player')?.click();
		break;
}
