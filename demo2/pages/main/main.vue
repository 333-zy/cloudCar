<template>
	<view class="content">
		<!-- <view v-if="hasLogin" class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view> -->
		<view class="content">
			<view class="top-img">

			</view>
			<view class="navigation-function">
				<view class="navigation-function-top">
					<view class="navigation-function-top-left li">
						<view class="icon">
							图标
						</view>
						<view class="text">
							儿童自查
						</view>
					</view>
					<navigator class="navigation-function-top-right li" url="../rowthRecord/babyInfo">
						<view class="icon">
							图标
						</view>
						<view class="text">
							生长记录
						</view>
					</navigator>
				</view>
				<view class="navigation-function-buttom">
					<view class="navigation-function-buttom-1 li">
						<view class="icon">
							图标
						</view>
						<view class="text">
							健康宣教
						</view>
					</view>
					<view class="navigation-function-buttom-2 li">
						<view class="icon">
							图标
						</view>
						<view class="text">
							学术交流
						</view>
					</view>
					<view class="navigation-function-buttom-3 li">
						<view class="icon">
							图标
						</view>
						<view class="text">
							附近医院
						</view>
					</view>
					<view class="navigation-function-buttom-4 li">
						<view class="icon">
							图标
						</view>
						<view class="text">
							合作伙伴
						</view>
					</view>
				</view>
			</view>
			<view class="buttomList">
				<view class="">
					最新资讯
				</view>
				<ul>
					<li v-for="i in 10">
						<view class="newImg">
							图片
						</view>
						<view class="buttomListRighr">
							<view class="newTitie">
								大撒大撒大撒大撒大
							</view>
						</view>
					</li>
				</ul>
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
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		}
	}
</script>

<style>
	.newImg {
		margin-right: 20upx;
	}

	li {
		display: flex;
		flex-direction: row;
		border-top: 1upx solid #D9D9D9;
		height: 100upx;
		line-height: 100upx;
		padding: 20upx;
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}

	.top-img {
		height: 400upx;
		background: #C8C7CC;
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

	.navigation-function-top-left {
		width: 100%;
		height: 150upx;
		background: #EB6DA5;
	}

	.navigation-function-top-right {
		width: 100%;
		height: 150upx;
		background: #4FC1E9;
	}

	.navigation-function-buttom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.navigation-function-buttom-1 {
		width: 100%;
		height: 150upx;
		background: #307DC1;
	}

	.navigation-function-buttom-2 {
		width: 100%;
		height: 150upx;
		background: #BAA8EB;
	}

	.navigation-function-buttom-3 {
		width: 100%;
		height: 150upx;
		background: #3BCEAC;
	}

	.navigation-function-buttom-4 {
		width: 100%;
		height: 150upx;
		background: #6BD425;
	}

	.li {
		margin: 0 5upx;
	}

	.icon {
		margin-top: 50upx;
	}

	.icon,
	.text {
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	}

	.buttomList {
		padding: 15upx;
	}
</style>
