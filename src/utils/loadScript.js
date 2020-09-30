/* 动态加载远端 js 一次效果 */
// 此处引用 Q 第三包
// Q是nodeJs中实现promise的包之一，是nodexJs中比较常用的一个库。
const Q = require("q");
export default function asyncLoadJs (url) {
	// return new Promise((resolve, reject)=> {
	// 	// <script src="https://cdn.bootcdn.net/ajax/libs/prefixfree/1.0.6/prefixfree.min.js"></script>
	// 	const s = document.createElement('script');
	// 	s.type = 'text/javascript';
	// 	s.src = url;
	// 	s.onload = function() {
	// 		document.body.appendChild(s);
	// 		resolve()
	// 	};
	// 	s.onerror = function() {
	// 		reject()
	// 	};
	//
	// })
	return Q.Promise((resolve, reject) => {
		let srcArr = document.getElementsByTagName("script");
		let hasLoaded = false;
		for (let i=0;i<srcArr.length;i++){//判断当前js是否加载上
			hasLoaded = (srcArr[i].src === url);
		}
		if (hasLoaded) {
			resolve();
			return;
		}
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		document.body.appendChild(script);
		script.onload = () => {
			resolve();
		};
		script.onerror = () => {
			reject();
		}
	})
}
