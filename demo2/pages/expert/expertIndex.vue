<template>
	<view class="uni-list">
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in 13" :key="index" @click="toExpertDetails()">
			<view class="uni-media-list">
				<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
				<view class="uni-media-list-body">
					<view class="uni-media-list-text-top">
						<text class="name">李时珍</text><text class="title">明朝医药学家</text>
					</view>
					<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			toExpertDetails(){
				uni.navigateTo({
					url:'expertDetails'
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
	.name{
		
	}
	.title{
		color: #3CC51F;
		font-size: 16upx;
		padding: 0 20upx;
	}
</style>
