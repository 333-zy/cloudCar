<template>
	<view class="uni-list">
		<view class="uni-list-cell" hover-class="uni-list-cell-hover">
			<view class="uni-media-list">
				<view class="uni-media-list-body">
					宝宝头像
				</view>
				<image class="uni-media-list-logo" src="../../../static/img/user.png"></image>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="toUserBabyInfo" v-for="(item,index) in data" :key="index">
			<view class="uni-media-list">
				<view class="uni-media-list-body">
					{{item.name}}
				</view>
				<view class="sex">
					{{item.value}}
				</view>
			</view>
		</view>
		<view class="btn-row">
			<navigator url="setBabyInfo">
			<button type="default">修改基本信息</button>
			</navigator>
			<button type="warn" @click="remove">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{name:'姓名',value:'小明'},
					{name:'性别',value:'男'},
					{name:'身份证',value:'无'},
					{name:'生日',value:'2019-10-10'},
					{name:'关系',value:'本人'},
					{name:'出生体重',value:'1kg'},
					{name:'出生身长',value:'1cm'},
				]
			}
		},
		methods:{
			toUserBabyInfo(){
				uni.navigateTo({
					url:'basicInformationOfBaby'
				})
			},
			remove(){
				uni.showModal({
					title: '提示',
					content: '是否删除该宝贝信息?',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'userBabyInfo'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
		margin-bottom: 20upx;
	}
	.uni-media-list-logo{
		margin-right: 0;
	}
</style>
