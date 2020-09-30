<template>
	<div class="bottomContainerNew">
		<div class="box">
			<div class="goToChannel more">
				<router-link :to="moreRouter" id="more_courinfo" title="全部课程">
					<i v-if="moreIcon" :class="moreIcon"></i>
					{{moreTitle}}
				</router-link>
			</div>
		</div>
		<div class="box">
			<div class="goToChannel change" @click="changeEvent">
				<a href="javascript:void(0)" title="换一换" id="changeRandom">
					<i class="fa fa-refresh"></i>
					换一换
				</a>
			</div>
		</div>
	</div>
</template>

<script>
  	export default {
    	name: "moreChangeBtn",
		props: {
    		"moreTitle": {
    			type: String,
				required: true
			},
			"moreIcon": {
    			type: String,
				default: "fa fa-play-circle-o"
			},
			"moreRouter": {
    			type: String,
				required: true
			}
		},
		data() {
			return {
				key: ""
			}
		},
		methods: {
			changeEvent() {
				this.$emit("change")
			}
		},
  	}
</script>

<style lang="less" scoped>
	.bottomContainerNew {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.box {
			width: 48%;
			display: flex;
			justify-content: center;
		}

		.goToChannel {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 85px;
			padding: 0 24px;
			height: 39px;
			line-height: 39px;
			border-radius: 4px;
			font-size: 13px;
			color: #666;
			background: #fff;
			a {
				color: #666;
				display: flex;
				align-items: center;
				text-decoration: none;
				i {
					margin-right: 8px;
				}
				.fa-play-circle-o {
					font-size: 19px;
				}
				.fa-refresh {
					font-size: 15px;
				}
			}
		}

	}

</style>
