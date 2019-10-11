<template>
	<view class="content">
		<view class="babyInfo">
			<view class="">
				儿童姓名
			</view>
			<view class="">
				小明
			</view>
		</view>
		<view class="babyInfo">
			<view class="">
				性别
			</view>
			<view class="">
				男
			</view>
		</view>
		<view class="babyInfo">
			<view class="">
				年龄
			</view>
			<view class="">
				1天
			</view>
		</view>
		<view class="tab">
			<view :class="{active:isActive==1}" @click="handleSwitch(1)">
				记录列表
			</view>
			<view :class="{active:isActive==2}" @click="handleSwitch(2)">
				身高曲线
			</view>
			<view :class="{active:isActive==3}" @click="handleSwitch(3)">
				体重曲线
			</view>
			<view :class="{active:isActive==4}" @click="handleSwitch(4)">
				头围曲线
			</view>
		</view>
		<view class="dataGraph">
			数据图表
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	export default {
		data() {
			return {
				isActive:1
			}
		},
		methods: {
			handleSwitch(e) {
				this.isActive=e
			}
		}
	}
</script>

<style>
	.babyInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1upx solid #D9D9D9;
		height: 70upx;
		line-height: 70upx;
		padding: 0 20upx;
	}

	.tab {
		display: flex;
		justify-content: space-around;
		height: 70upx;
		line-height: 70upx;
		font-size: 28upx;
	}
	.active{
		border-bottom: 4upx solid #F1CA73;
		color: #EFA601;
	}
	.dataGraph{
		padding: 20upx;
	}
</style>
