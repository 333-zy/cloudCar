<template>
	<view class="content">
		<view class="advisory" id="animat" @tap="toLmmediatelyConsult">
			咨询
		</view>
		<view class="list" hover-class="uni-list-cell-hover" v-for="i in 13" :key="i" @click="toDetailsOfInquiryReply()">
			<view class="contentTop">
				<view class="headPortrait">
					头像
				</view>
				<view class="time">
					2019-10-10 10:10:10
				</view>
				<view class="">
					未回复
				</view>
			</view>
			<view class="contentButtom">
				<view class="title">
					标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
				</view>
				<view class="details">
					内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		//下拉刷新
		onPullDownRefresh() {
			console.log('下拉刷新');
			setTimeout(function() {
				uni.stopPullDownRefresh({
					success(){
						console.log('下拉刷新结束')
					}
				});
			}, 1000);
		},
		methods: {
			toDetailsOfInquiryReply() {
				uni.navigateTo({
					url: '../user/myAdvice/detailsOfInquiryReply',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			},
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
	.contentTop {
		display: flex;
		padding: 0 20upx;
		border-bottom: 1upx solid #F2F2F2;
	}

	.headPortrait {
		margin-right: 20upx;
	}

	.time {
		flex: 1;
	}

	.contentButtom {
		padding: 0 20upx;
		border-bottom: 26upx solid #EFEFF4;
	}

	.title {
		font-size: 34upx;
	}

	.details {
		height: 100upx;
		line-height: 50upx;
	}

	.title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.details {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
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
