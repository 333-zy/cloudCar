<template>
	<view class="content">
		<view class="contentTop">
			<view class="headPortrait">
				头像
			</view>
			<view class="name">
				匿名用戶
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
		</view>
			<view class="reply">
			<view class="hint">
				医生暂未回复，请耐心等待~
			</view>
				<view class="replyContent">
					<text style="color:#33CC99;">儿保科医生</text>：宝宝添加辅食很容易造成胃肠道的变化，可以给宝宝吃点益生菌缓解肠道症状。
				</view>
				<view class="time">
					2019-10-15 11:02:07
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

.name{
	padding: 0 20upx;
}
	.time {
		flex: 1;
		color: #999999;
		line-height: 2.7em;
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
		text-align: justify;
		color: #999999;
	}
	.hint{
		text-align: center;
		color: #999999;
		padding: 10upx;
	}
	.reply{
		margin-top: 20upx;
		padding: 0 20upx;
		border-top: 10upx solid #F5F5F5;
	}
	.replyContent{
		height: 60upx;
		line-height: 40upx;
		text-align: justify;
		color: #999999;
	}
	.reply .time{
		text-align: right;
		color: #999999;
		padding: 10upx 0;
	}
</style>
