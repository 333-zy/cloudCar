<template>
	<view class="content">
		<navigator v-for="i in 5" url="rowthRecord">
				<view class="">
					小明
				</view>
				<view class="">
					点击进入
				</view>
		</navigator>
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
navigator {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1upx solid #D9D9D9;
		height: 70upx;
		line-height: 70upx;
		padding: 0 20upx;
	}
</style>
