<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in 13" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/home.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">1</view>
					</view>
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
		methods: {
			
		}
	}
</script>

<style>
.uni-media-list-text-top{
	height: 100%;
}
</style>
