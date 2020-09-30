export default function (url) {
	return new Promise((resolve, reject)=>{
		let css = document.createElement('link');
		css.href = url;
		css.rel = 'stylesheet';
		css.type = 'text/css';
		css.onload = function() {
			document.head.appendChild(css);
			resolve();
		};
		css.onerror = function() {
			reject();
		};
	});

}
