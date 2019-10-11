<template>
	<view class="content">
		<ul>
			 <li class="headPortrait">
			 	<view class="">
			 		头像
			 	</view>
			 </li>
			<li>
				<view class="">
					图标
				</view>
				<view class="link">
					宝宝信息
				</view>
				<view class="">
					>
				</view>
			</li>
			<li>
				<view class="">
					图标
				</view>
				<view class="link">
					我的信息
				</view>
				<view class="">
					>
				</view>
			</li>
			<li>
				<view class="">
					图标
				</view>
				<view class="link">
					我的咨询
				</view>
				<view class="">
					>
				</view>
			</li>
			<li>
				<view class="">
					图标
				</view>
				<view class="link">
					自查记录
				</view>
				<view class="">
					>
				</view>
			</li>
			<li>
				<view class="">
					图标
				</view>
				<view class="link">
					意见反馈
				</view>
				<view class="">
					>
				</view>
			</li>
		</ul>
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
			}
		}
	}
</script>

<style>
	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1upx solid #D9D9D9;
		height: 70upx;
		line-height: 70upx;
		padding: 0 20upx;
	}

	.link {
		width: 80%;
	}
</style>
