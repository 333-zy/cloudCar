<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @click="toPartnersDetails(item.name)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="../../static/img/home.png"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'中华医学会儿科分会发育行为儿科学组',url:'',imgUrl:''},
					{name:'中华预防医学会儿童保健分会',url:'',imgUrl:''},
					{name:'中国妇女儿童医疗卫生基金会',url:'',imgUrl:''},
					{name:'重庆医学会儿科分会',url:'',imgUrl:''},
					{name:'重庆医师协会儿科分会',url:'',imgUrl:''},
					{name:'中国医师协会儿科医师分会儿童保健专业委员会',url:'',imgUrl:''}
				]
			}
		},
		methods: {
			toPartnersDetails(e){
				uni.navigateTo({
					url:`partnersDetails?name=${e}`
				})
			}
		}
	}
</script>

<style>
.uni-media-list-text-top{
	height: 100%;
	line-height: 3em;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
</style>
