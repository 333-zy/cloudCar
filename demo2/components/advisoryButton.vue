<template>
	<view class="advisory" id="animat" @tap="toLmmediatelyConsult">
		咨询
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['url'],
		methods: {
			toLmmediatelyConsult() {
				uni.navigateTo({
					url: this.url,
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
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
