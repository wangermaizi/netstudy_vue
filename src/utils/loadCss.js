/* 动态导入远端css文件或者打包生成的静态文件 */
/* 由于是默认导出, 其实可以不用加上函数名 */
export default function asyncLoadCss (url) {
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
