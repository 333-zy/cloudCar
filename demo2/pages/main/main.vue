<template>
	<view class="content">
		<image class="image" src="../../static/img/20191015112444.jpg" mode="widthFix"></image>
		<view class="navigation-function">
			<view class="navigation-function-top">
				<navigator v-if="index<2" v-for="(item,index) in list" :key="index" :style="{'background':item.color}" :url="item.url"
				 class="navigation-function-button">
					<view class="icon">
						{{item.inco}}
					</view>
					<view class="text">
						{{item.name}}
					</view>
				</navigator>
			</view>
			<view class="navigation-function-buttom">
				<navigator v-if="index>1" v-for="(item,index) in list" :key="index" :style="{'background':item.color}" :url="item.url"
				 class="navigation-function-button">
					<view class="icon">
						{{item.inco}}
					</view>
					<view class="text">
						{{item.name}}
					</view>
				</navigator>
			</view>
		</view>
		<view class="newConsulting">
			最新咨询
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in 13" :key="index" @click="toMainDetails('什么是自闭症?'+index)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/user.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">什么是自闭症?</view>
						<view class="uni-media-list-text-bottom">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				list: [{
						inco: '图标',
						name: '儿童自查',
						color: '#EB6DA5',
						url: '../childrenSwn/babyInformation'
					},
					{
						inco: '图标',
						name: '生长记录',
						color: '#4FC1E9',
						url: '../rowthRecord/babyInfo'
					},
					{
						inco: '图标',
						name: '健康宣教',
						color: '#307DC1',
						url: '../healthEducation/healthEducation'
					},
					{
						inco: '图标',
						name: '学术交流',
						color: '#BAA8EB',
						url: '../academicCommunication/academicCommunication'
					},
					{
						inco: '图标',
						name: '附近医院',
						color: '#3BCEAC',
						url: '../nearHospital/nearHospital'
					},
					{
						inco: '图标',
						name: '合作伙伴',
						color: '#6BD425',
						url: '../partners/partners'
					}
				]
			}
		},
		methods: {
			toMainDetails(e) {
				uni.navigateTo({
					url: 'mainDetails?name=' + e
				})
			}
		}
		// onLoad() {
		// 	if (!this.hasLogin) {
		// 		uni.showModal({
		// 			title: '未登录',
		// 			content: '您未登录，需要登录后才能继续',
		// 			/**
		// 			 * 如果需要强制登录，不显示取消按钮
		// 			 */
		// 			showCancel: !this.forcedLogin,
		// 			success: (res) => {
		// 				if (res.confirm) {
		// 					/**
		// 					 * 如果需要强制登录，使用reLaunch方式
		// 					 */
		// 					if (this.forcedLogin) {
		// 						uni.reLaunch({
		// 							url: '../login/login'
		// 						});
		// 					} else {
		// 						uni.navigateTo({
		// 							url: '../login/login'
		// 						});
		// 					}
		// 				}
		// 			}
		// 		});
		// 	}
		// }
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.navigation-function {
		padding: 10upx;
	}

	.navigation-function-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10upx;
	}

	.navigation-function-button {
		width: 100%;
		height: 150upx;
		margin: 0 5upx;
	}

	.navigation-function-buttom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.icon,
	.text {
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	}

	.newConsulting {
		padding: 0 20upx;
	}

	.uni-media-list-text-top,
	.uni-media-list-text-bottom {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
