<template>
	<view class="content">
		<map :show-location="true" id="uniMap" style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude"
		 :controls="controls" @controltap="handleClick"></map>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.createMapContext()
		},
		data() {
			return {
				title: 'map',
				latitude: 29.60661,
				longitude: 106.57439,
				controls: [{ //在地图上显示控件，控件不随着地图移动
					id: 1, //控件id,
					// iconPath: '/static/img/qq.png',
					clickable: true,
					position: { //控件在地图的位置
						left: 10,
						top: 10,
						width: 100,
						height: 100
					},
				}]
			}
		},
		onReady() {
			var umap = uni.createMapContext('uniMap', this);
			umap.getCenterLocation({
				type: 'wgs84',
				success: function(res) {
					console.log(res);
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});
			umap.includePoints({
				points: [
					{
						latitude: 29.1211,
						longitude: 106.7897
					},
					{
						latitude: 29.3333,
						longitude: 106.3333
					}
				]
			})
		},
		methods: {
			handleClick() {
				console.log(1)
			}
		}
	}
</script>

<style>

</style>
