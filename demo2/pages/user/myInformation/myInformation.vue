<template>
	<view class="uni-list">
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
			<navigator url="setMyInformation">
			<button type="default">修改我的信息</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{name:'我的姓名',value:'小明'},
					{name:'我的电话',value:'13038303891'},
					{name:'身份证号',value:'无'},
					{name:'性别',value:'男'},
					{name:'年龄',value:'99'},
					{name:'家庭住址',value:'重庆市'}
				]
			}
		},
		methods:{
			toUserBabyInfo(){
				uni.navigateTo({
					url:'basicInformationOfBaby'
				})
			},
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
