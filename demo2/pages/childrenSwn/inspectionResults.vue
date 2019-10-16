<template>
	<view class="content">
		<view class="img">
			<image src="../../static/img/qq.png" mode="widthFix"></image>
		</view>
		<view class="results">
			您的宝宝现阶段发育正常，如果您想了解宝宝现阶段护理建议，可以点击首页咨询按钮快速问医生。
		</view>
		<button type="primary" class="primary" @click="toRowthRecord">进入生长曲线</button>
	</view>
</template>

<script>
	export default{
		methods:{
			toRowthRecord(){
				uni.navigateTo({
					url:'../rowthRecord/rowthRecord'
				})
			}
		}
	}
</script>

<style>
	.img{
		text-align: center;
	}
	.img image{
		width: 150upx;
		height: 150upx;
		padding: 100upx 0;
	}
	.results{
		padding: 20upx 40upx;
		color: #888888;
		height: 3em;
		line-height: 1.5em;
		text-align: center;
	}
	.primary{
		margin-top: 200upx;
	}
</style>
