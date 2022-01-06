const bs = require('browser-sync').create();
bs.init({
	watch: true,
	server: "",
	files: ['index.html', 'style.css'],
	port: 8000,
	browser: "firefox",

	ui: {
		port:8001
	},

	watchOptions: {
		ignoreInitial: true,
		ignored: '*.txt'
	}
});
bs.watch(['index.html', 'style.css'], {ignored: '*.map.css'});
