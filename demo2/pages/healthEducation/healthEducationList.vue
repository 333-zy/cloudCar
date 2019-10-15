<template>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in 13" :key="index" @click="toHealthEducationDetails('什么是自闭症?'+index)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">什么是自闭症?</view>
						<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default{
		onLoad(e) {
			uni.setNavigationBarTitle({
				title:e.name
			})
		},
		methods:{
			toHealthEducationDetails(){
				uni.navigateTo({
					url:'healthEducationDetails'
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
</style>
