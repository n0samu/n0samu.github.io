// ==UserScript==
// @name        Play-Games.com Fix
// @namespace   n0samu.github.io
// @include     https://www.play-games.com/game/*
// @grant       none
// @version     1.0
// @author      nosamu
// @description Fix games on Play-Games.com not starting with adblock enabled.
// @run-at document-idle
// ==/UserScript==

var el = document.getElementById("loadthegame");
el.setAttribute("onclick", el.getAttribute("onclick") + " loadGame();");