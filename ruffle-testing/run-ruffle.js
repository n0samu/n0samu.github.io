function createParam(name, value) {
	const param = document.createElement('param');
	param.setAttribute('name', name);
	param.setAttribute('value', value);
	return param;
}
function fillGame() {
	const game = document.createElement('object');
	game.setAttribute('data', swfName);
	game.setAttribute('type', 'application/x-shockwave-flash');
	game.setAttribute('width', '100%');
	game.setAttribute('height', '100%');
	game.appendChild(createParam('wmode', 'direct'));
	game.appendChild(createParam('allowscriptaccess', 'always'));
	game.appendChild(createParam('allowfullscreen', 'true'));
	game.appendChild(createParam('allowfullscreeninteractive', 'true'));
	game.appendChild(createParam('allownetworking', 'all'));
	document.body.appendChild(game);
}
if (document.readyState != 'loading') {
	fillGame();
} else {
	document.addEventListener("DOMContentLoaded", fillGame)
}