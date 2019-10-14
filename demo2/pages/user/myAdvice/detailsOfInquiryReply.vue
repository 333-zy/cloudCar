<template>
	<view class="content">
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
				标题标题标题标题标题标题标题标
			</view>
			<view class="content">
				内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
				内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
				内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
				内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
			</view>
			<view class="hint">
				医生暂未回复，请耐心等待~
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
		methods: {
			toDetailsOfInquiryReply() {
				uni.navigateTo({
					url: 'detailsOfInquiryReply'
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
	}

	.title {
		font-size: 34upx;
		line-height: 50upx;
		padding: 10upx 0;
	}

	.contentButtom .content {
		line-height: 40upx;
		text-indent: 2em;
	}
	.hint{
		text-align: center;
		color: #999999;
		padding: 10upx;
	}
</style>
