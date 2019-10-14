<template>
	<view class="uni-list">
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="toUserBabyInfo" v-for="(item,index) in 5" :key="index">
			<view class="uni-media-list">
				<view class="uni-media-list-body">
					小明{{item.name}}
				</view>
				<view class="sex">
					男
				</view>
				<image class="uni-media-list-logo" src="../../../static/img/user.png"></image>
			</view>
		</view>
		<navigator url="../../childrenSwn/addBabyInformation">
		<button type="primary">添加宝宝</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		methods:{
			toUserBabyInfo(){
				uni.navigateTo({
					url:'basicInformationOfBaby'
				})
			}
		}
	}
</script>

<style>
	.uni-media-list-body,.sex {
		line-height: 3em;
	}
	.uni-media-list {
		padding: 5upx 20upx;
	}
	button{
		margin-top: 20upx;
		width: 90%;
		background: #0FAEFF;
	}
</style>
