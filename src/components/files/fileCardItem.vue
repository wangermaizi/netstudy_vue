<template>
	<div class="card-list-item">
		<h3>
			{{fileObj.fileName}}
		</h3>
		<span class="node-type"> {{fileObj.type}} </span>
	</div>
</template>

<script>
	/* 文档信息卡片 */
	export default {
		name: "fileCardItem",
		props: {
			"fileObj": {
				type: String,
				required: true
			},
		}
	}
</script>

<style lang="less" scoped>
	.card-list-item {
		width: 146px;
		height: 87px;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		background: #f2f4f7;
		color: #666666;
		position: relative;
		border-radius: 5px;
		margin-left: 0.4rem;
		overflow-y: hidden;
		h3 {
			padding: 0.03rem 0;
			font-size: 13px;
			color: #666;
			position: relative;
			display: block;
			width: 90%;
			height: 1.5rem;
			top: 0.92rem;
			max-width: 100%;
			text-align: left;
			-webkit-transition: all 0.4s ease;
			overflow-wrap: break-word;
			white-space: normal;
		}
		span.node-type {
			left: 0;
			top: 10px;
			padding: 0 6px 0 3px;
			background-color: #b7b7c1;
			color: #fff;
			width: 36px;
			text-align: center;
			border-radius: 0 2px 2px 0;
		}
		span.free-info {
			right: 0.2rem;
			top: .3rem;
			color: #2c879b;
		}
	}
	.card-list-item.active {
		background: #fff;
		border: 1px solid #00CC99;
	}
	.card-list-item.active h3 {
		color: #00CC99;
	}
	.card-list-item.active .node-type {
		background-color: #00CC99;
	}
</style>
