<template>
	<view class="content">
		<view class="top-img">
			<image src="../../static/img/qq.png" mode="aspectFit"></image>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="toUserBabyInfo(item.url)" v-for="(item,index) in list" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/homeHL.png"></image>
					<view class="uni-media-list-body">
						{{item.name}}
					</view>
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
				</view>
			</view>
		</view>
		<view class="btn-row">
			<!-- <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button> -->
			<button type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		data() {
			return {
				list: [{
						name: '宝宝信息',
						url: 'userBabyInfo/userBabyInfo',
						imgUrl: ''
					},
					{
						name: '我的信息',
						url: 'myInformation/myInformation',
						imgUrl: ''
					},
					{
						name: '我的咨询',
						url: 'myAdvice/myAdvice',
						imgUrl: ''
					},
					{
						name: '自查记录',
						url: 'inspectionRecords/inspectionRecords',
						imgUrl: ''
					},
					{
						name: '意见反馈',
						url: 'feedback/feedback',
						imgUrl: ''
					},
				]
			}
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				// this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				this.$store.state.forcedLogin = true;
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			},
			toUserBabyInfo(e){
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style>
	.top-img{
		text-align: center;
		padding: 20upx;
		height: 200upx;
	}
	
	.top-img image{
		margin-top: 30upx;
		width: 150upx;
		height: 150upx;
		border: 1upx solid #C0C0C0;
		border-radius: 50%;
	}
	.uni-media-list {
		padding: 5upx 20upx;
	}

	.uni-media-list-body {
		line-height: 3em;
	}
</style>
