<template>
	<view class="content">
		<view class="title">{{name}}</view>
		<view class="introduce">
			中华预防医学会儿童保健分会（China PreventiveMedicine Association,Society of Chind Health)是中华预防医学会领导下的全国性学术团体，成立于1989年11月。本分会致力于预防儿童疾病，保护儿童身心健康、促进儿童体格、心理行为、潜能发育。分会成立以来，在国家卫生部和中华预防医学会的领导下，开展各种形式的学术交流活动，定期举办国家级继续医学教育培训，积极参与健康教育活动，为全国儿童保健事业作出了很大的贡献。
		</view>
	</view>
</template>

<script>
	export default{
		onLoad(e) {
			this.name=e.name;
			// 动态更改页面标题
			uni.setNavigationBarTitle({
			　　title:e.name
			})
		},
		data() {
			return {
				name: ''
			}
		},
	}
</script>

<style>
	.content{
		padding: 0 20upx;
	}
	.title{
		color: #289428;
		font-size: 34upx;
		font-weight: bold;
	}
	.introduce{
		text-indent: 2em;
	}
</style>
