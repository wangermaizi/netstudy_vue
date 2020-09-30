<script>
	//导出使用的函数,用组件方式保存复用函数,可以在只需要用的页面引入,保存数据
	function timehandle(Time){
		if(String(Time).length===13){
			var date = new Date(Number(Time)); //获取一个时间对象
			let f = date.getFullYear();  // 获取完整的年份(4位,1970)
			let m = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
			let d = date.getDate();  // 获取日(1-31)
			return `${f}-${m}-${d}`
		}else if(String(Time).length===10){
			var date = new Date((Number(Time)*1000)); //获取一个时间对象
			let f = date.getFullYear();  // 获取完整的年份(4位,1970)
			let m = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
			let d = date.getDate();  // 获取日(1-31)
			return `${f}-${m}-${d}`
		}else{
			let newsdate = Time.substring(0, 19).replace('T', ' ')//去除可能有的T
			let fmd = new Date(newsdate.replace(/\-/g, "/")).getTime()//兼容ios把-转为/
			var date = new Date(Number(Time)); //获取一个时间对象
			let f = date.getFullYear();  // 获取完整的年份(4位,1970)
			let m = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
			let d = date.getDate();  // 获取日(1-31)
			return `${f}-${m}-${d}`
		}
	}
	export default {
		timehandle
	}
</script>
