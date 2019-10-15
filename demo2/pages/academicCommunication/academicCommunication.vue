<template>
	<view class="content">
		<view class="title">
			学术会议
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-if="index<2" v-for="(item,index) in 13" :key="index" @click="toHealthEducationDetails('标题')">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
						<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>
		</view>
		<navigator url="../healthEducation/healthEducationList?name=学术会议">
			<view class="">
				查看更多
			</view>
			<view class="">
				>
			</view>
		</navigator>

		<view class="title">
			学术进展
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-if="index<2" v-for="(item,index) in 13" :key="index" @click="toHealthEducationDetails('标题')">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
						<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>
		</view>
		<navigator url="../healthEducation/healthEducationList?name=学术进展">
			<view class="">
				查看更多
			</view>
			<view class="">
				>
			</view>
		</navigator>
	</view>
</template>

	<script>
		export default{
			methods:{
				toHealthEducationDetails(e){
					uni.navigateTo({
						url:'../healthEducation/healthEducationDetails?name='+e
					})
				}
			}
		}
	</script>

<style>
	.content {
		padding: 20upx;
	}
	
	.title{
		color: #3CC51F;
	}

	.uni-media-list-text-top,
	.uni-media-list-text-bottom {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	navigator{
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #EFEFF4;
		margin-bottom: 50upx;
		color: #0FAEFF;
	}
</style>
