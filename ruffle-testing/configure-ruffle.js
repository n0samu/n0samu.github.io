const configMap = {
	"autoplay": {true: "on", false: "off"},
	"unmuteOverlay": {true: "visible", false: "hidden"},
	"letterbox": {true: "on", false: "off"}
};
const defaultConfig = {
	"letterbox": "on",
	"showSwfDownload": true,
	"forceScale": true,
	"forceAlign": true,
};
const defaultSWF = 'logo-anim.swf';
const urlParams = new URLSearchParams(window.location.search);
const swfName = urlParams.get('swf') || defaultSWF;
urlParams.delete('swf'); // Not part of Ruffle config object
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = defaultConfig;
for (opt of urlParams.keys()) {
	let val = urlParams.get(opt);
	try {
		val = JSON.parse(val);
		val = configMap[opt][Boolean(val)];
	} catch {}
	window.RufflePlayer.config[opt] = val;
}