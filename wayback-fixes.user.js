// ==UserScript==
// @name        Wayback Machine QOL Fixes
// @namespace   n0samu.github.io
// @icon
// @version     1.0
//
// @match       *://web.archive.org/*
// @grant       none
//
// @author      nosamu
// @description Minor improvements to Wayback Machine.
// ==/UserScript==

// Add a button to go back to the captures list when a page is redirecting
let impElem = document.querySelector("#positionHome #error .impatient");
if (impElem) {
  let calUrl = document.location.href.split("/").toSpliced(4, 1, "*").join("/");
  let newElem = impElem.cloneNode(true);
  newElem.classList.add("calLink");
  let newLink = newElem.querySelector("a");
  newLink.textContent = "View all captures";
  newLink.href = calUrl;
  impElem.parentNode.appendChild(newElem);
}
