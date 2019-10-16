<template>
	<view class="content">
		<navigator v-for="i in 5" url="healthInspection">
			<view class="">
				小明{{i}}
			</view>
			<view class="">
				点击修改
			</view>
		</navigator>
			<button class="button primary" @tap="add">添加宝宝</button>
	</view>
</template>

<script>
	let content =`1、本自查内容含儿童发育里程碑、儿童心理行为发育问题预警征象、ADHD自测题、ASD筛查等，自查对象为0至18岁未成年儿童；
2、通过自查可以判断宝宝是否存在生长发育偏离风险，自查结果仅供参考，如需详细诊断请带宝宝前往医院检查；
3、本平台自查内容由重庆医科大学附属儿童医院儿童青少年生长发育与心理健康中心提供，自查结果可以作为医生诊断依据。`;
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.showModal({
				showCancel: false,
				title: '提示',
				content: content,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		methods: {
			add(){
				uni.navigateTo({
					url: 'addBabyInformation',
				});
			}
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
		padding: 0 20upx;
	}
	.button{
		margin-top: 20upx;
		width: 90%;
		color: #FFF5F6;
	}
</style>
