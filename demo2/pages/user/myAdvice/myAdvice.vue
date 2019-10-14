<template>
	<view class="content">
		<advisoryButton url="lmmediatelyConsult"></advisoryButton>
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
	import advisoryButton from '@/components/advisoryButton.vue';
	export default {
		components:{
			advisoryButton
		},
		data() {
			return {

			}
		},
		methods: {
			toDetailsOfInquiryReply() {
				uni.navigateTo({
					url: 'detailsOfInquiryReply',
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
</style>
