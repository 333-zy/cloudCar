<template>
	<view class="content">
		<view class="contentTop">
			<view class="contentTopImg">
				<image src="../../../static/img/20191015112444.jpg" mode=""></image>
			</view>
			<view class="contentTopInfo">
				<view class="name">
					姓名:<text>小明</text>
				</view>
				<view class="sex">
					性别:<text>男</text>
				</view>
				<view class="age">
					自查月龄:<text>9</text>
				</view>
			</view>
		</view>
		<view class="contentButtom">
			<view class="title">
				小儿神经精神发育进展里程碑
			</view>
			<view class="list" v-for="i in 3">
				<view class="">
					大运动
				</view>
				<view class="listTitle li">
					1.紧握拳
				</view>
				<view class="listTitle if">
					<text></text>否
				</view>
			</view>
			<view class="result">
				<text class="resultTitle">自查结果:</text>您的宝宝现阶段发育正常，如果您想了解宝宝现阶段护理建议，可以点击首页咨询按钮快速问医生。
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.contentTop {
		display: flex;
		padding: 40upx;
		height: 150upx;
		border-bottom: 1upx solid #CCCCCC;
	}

	.contentTopImg {
		margin-right: 80upx;
	}

	.contentTopImg image {
		width: 150upx;
		height: 150upx;
		border-radius: 16upx;
		box-shadow: 15upx 15upx 5upx #CCCCCC;
	}

	.contentTopInfo {
		display: flex;
		flex-direction: column;
	}

	.contentTopInfo text {
		padding: 0 20upx;
		font-weight: 500;
	}

	.name,
	.sex,
	.age {
		font-weight: bold;
		height: 33%;
	}

.title{
	color: #666666;
	font-size: 24upx;
}
	.title,.list,.result {
		padding: 10upx 40upx;
	}
	.title,.list {
		border-bottom: 1upx solid #CCCCCC;
	}
	.list .li{
		color: #999999;
		font-size: 26upx;
	}
	.list .if{
		color: #FF9999;
		font-size: 26upx;
	}
	.listTitle{
		padding: 0 20upx;
	}
	.listTitle text{
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #3CC51F;
		margin-right: 10upx;
	}
	.result{
		font-size: 24upx;
		color: #009966;
	}
	.resultTitle{
		color: #0033B2;
		font-size: 26upx;
		font-weight: bold;
	}
</style>
