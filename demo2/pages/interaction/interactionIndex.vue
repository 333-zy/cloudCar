<template>
	<view class="content">
		<view class="advisory" id="animat" @tap="toLmmediatelyConsult">
			咨询
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in 13" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
						<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			toLmmediatelyConsult() {
				uni.navigateTo({
					url: '../user/myAdvice/lmmediatelyConsult',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
	.uni-media-list-text-top,
	.uni-media-list-text-bottom {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	
	.advisory {
		position: fixed;
		bottom: 120upx;
		right: 40upx;
		border-radius: 50%;
		background: #33CC99;
		width: 80upx;
		height: 80upx;
		line-height: 80upx;
		border: 10upx solid #F5F5F5;
		text-align: center;
		color: #F5F5F5;
		z-index: 999;
	}
	
	#animat {
		animation: mymove 3s infinite;
		-webkit-animation: mymove 3s infinite;
		/*Safari and Chrome*/
		animation-direction: alternate;
		/*轮流反向播放动画。*/
		animation-timing-function: ease-in-out;
		/*动画的速度曲线*/
		/* Safari 和 Chrome */
		-webkit-animation: mymove 3s infinite;
		-webkit-animation-direction: alternate;
		/*轮流反向播放动画。*/
		-webkit-animation-timing-function: ease-in-out;
		/*动画的速度曲线*/
	}
	
	@keyframes mymove {
		0% {
			transform: scale(1);
			/*开始为原始大小*/
		}
	
		25% {
			transform: scale(1.2);
			/*放大1.2倍*/
		}
	
		50% {
			transform: scale(1);
		}
	
		75% {
			transform: scale(1.2);
		}
	
	}
	
	@-webkit-keyframes mymove
	
	/*Safari and Chrome*/
		{
		0% {
			transform: scale(1);
			/*开始为原始大小*/
		}
	
		25% {
			transform: scale(1.2);
			/*放大1.2倍*/
		}
	
		50% {
			transform: scale(1);
		}
	
		75% {
			transform: scale(1.2);
		}
	}
</style>
