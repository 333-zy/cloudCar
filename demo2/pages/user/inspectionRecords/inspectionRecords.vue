<template>
	<view class="content">
		<view class="search" @click="inquire">
			<input v-if="isShow==true" :focus='true' type="text" value="" autofocus="autofocus" placeholder="搜索宝宝" />
			<view v-if="isShow==false" class="text">搜索宝宝</view>
			<text>查询</text>
		</view>
		<view class="list" v-for="i in 13" hover-class="uni-list-cell-hover">
			<view class="list-top">
				<view class="name">
					小明
				</view>
				<view class="sex">
					男
				</view>
				<text>|</text>
				<view class="day">
					10天
				</view>
			</view>
			<view class="list-bottom">
				啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
			</view>
			<view class="time">
				2019-10-10 10:10:10
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			inquire(){
				this.isShow=true
			}
		}
	}
</script>

<style>
.search{
	position: relative;
	border: 20upx solid #EFEFF4;
}
.search text{
	position: absolute;
	right: 0;
	top: -14upx;
	padding: 0 10upx;
}
.text{
	text-align: center;
	height: 45upx;
	line-height: 45upx;
	color: #808080;
	font-size: 32upx;
}
.list{
	padding: 0 20upx;
	border-top: 1upx solid #F2F2F2;
}
.list-top{
	display: flex;
}
.name{
	width: 130upx;
	color: #3BCEBE;
}
.sex,.day{
	padding: 0 10upx;
}
.list-bottom{
	height: 100upx;
	line-height: 50upx;
	color: #999999;
}
.time{
	color: #999999;
	text-align: right;
	font-size: 22upx;
}
</style>
