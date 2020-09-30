<template>
    <div>
        <div class="nav">
            <div class="left" @click="back">
                <i :class=LeftClass></i>
            </div>
            <div class="center-text" :class=CenterClass >{{text}}</div>
            <div class="right">
                <i :class="[currentRightClass,{active: isActive}]" @click="icon2"></i>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        text:String,//居中的标题
        LeftClass:{
        	type: String, 
			default: "fa fa-angle-left"
		},//左的图标，使用class，图标类
		CenterClass:String,//居中的类,当类里的样式在当前页面存在时，传进来的类会无作用，里面的类优先级高一些
        RightClass:String,//右的图标，使用class，图标类
		activeRightClass: String, // 图标处于激活状态时的样式
        router:String,//左边点击时跳转的路由，默认为my
    },
	data() {
		return {
			isActive: false,
			currentRightClass: "",
		}
	},
    mounted(){
        // this.data = this.text;
        // this.data = this.LeftClass;
		// this.data = this.CenterClass;
        // this.data = this.RightClass;
		this.currentRightClass = this.RightClass ? this.RightClass : ""
    },
    methods:{
		// left路由跳转
        back(){
            if(!this.LeftClass){

            }else if(this.router=='/my'){
                this.$router.push(this.router)
            }else{
                this.$router.back()
            }
        },
		// right点击的时候执行的事件
        icon2(){
			console.log(1000);
            if(!this.RightClass){
                console.log('no right part eventListening')
            }else{
            	console.log(1001);
				if (this.isActive && this.activeRightClass) {
					this.isActive = !this.isActive;
					this.currentRightClass = this.RightClass
					console.log()
				} else if (!this.isActive && this.activeRightClass) {
					console.log(1111);
					this.isActive = !this.isActive;
					this.currentRightClass = this.activeRightClass
				}
            	this.$emit('change');
            }
        }
    }
}
</script>

<style lang="less" >
	.nav {
	    width: 100%;
	    height: 49px;
	    line-height: 49px;
	    background: #fff;
	    box-sizing: border-box;
	    padding: 0 15px;
	    display: flex;
	    position: fixed;
	    z-index: 100;
	    top: 0;
		border-bottom: 1px solid #f2f2f2;
	    .left,.right {
	        height: 49px;
	        width: 30px;
	        color: #000 !important;
	        line-height: 49px;
	        i {
	            display: block;
	            line-height: 49px;
	            height: 49px;
	        }
	    }

	    .left {
	        text-align: left;
	    }

	    .right {
	        text-align: right;
	    }
	    .center-text {
	        flex: 1;
	        height: 49px;
	        line-height: 49px;
	        text-align: center;
	        font-size: 16px;
	        font-weight: bold;
	    }
	}
</style>
