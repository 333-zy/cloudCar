<template>
	<view class="content">
		<view class="babyInfo">
			<view class="">
				儿童姓名
			</view>
			<view class="">
				小明
			</view>
		</view>
		<view class="babyInfo">
			<view class="">
				性别
			</view>
			<view class="">
				男
			</view>
		</view>
		<view class="babyInfo">
			<view class="">
				年龄
			</view>
			<view class="">
				1天
			</view>
		</view>
		<view class="tab">
			<view :class="{active:isActive==1}" @click="handleSwitch(1)">
				记录列表
			</view>
			<view :class="{active:isActive==2}" @click="handleSwitch(2)">
				身高曲线
			</view>
			<view :class="{active:isActive==3}" @click="handleSwitch(3)">
				体重曲线
			</view>
			<view :class="{active:isActive==4}" @click="handleSwitch(4)">
				头围曲线
			</view>
		</view>
		<view class="theHistoricalData" v-show="isActive==1">
			<view class="title">
				历史数据
			</view>
			<view class="describe">
				小宝贝正在一天天长大呢，到医院检查时可以把这些给医生看哦
			</view>
			<view class="list">
				<view class="li">
					<view class="">
						1天
					</view>
					<view class="">
						测评时间：2019-10-16
					</view>
				</view>
				<view class="li">
					<view class="">
						身高:2cm
					</view>
					<view class="">
						体重:2kg
					</view>
					<view class="">
						头围:2cm
					</view>
				</view>
				<view class="li">
					<view class="time">
						记录时间:2019-10-16 15:05:04
					</view>
					<view class="">
						<button type="primary" class="primary" @click="set()">修改</button>
					</view>
					<view class="">
						<button type="primary" class="primary" @click="remove()">删除</button>
					</view>
				</view>
			</view>
		</view>
		<view class="dataGraph" v-show="isActive!=1">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">基本曲线图</view>
			</view>
			<view class="qiun-charts" >
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchLineA"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
				<!--#endif-->
			</view>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				isActive:1,
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(700);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			remove(){
				uni.showModal({
				    title: '提示',
				    content: '确认删除吗?',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			handleSwitch(e) {
				this.isActive=e
			},
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let LineA={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						LineA.categories=res.data.data.LineA.categories;
						LineA.series=res.data.data.LineA.series;
						_self.textarea = JSON.stringify(res.data.data.LineA);
						_self.showLineA("canvasLineA",LineA);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					padding:[15,20,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					dataLabel:true,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
			boundaryGap:'justify'
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'curve'
						}
					}
				});
				
			},
			touchLineA(e) {
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaLineA.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	.babyInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1upx solid #D9D9D9;
		height: 70upx;
		line-height: 70upx;
		padding: 0 20upx;
	}

	.tab {
		display: flex;
		justify-content: space-around;
		height: 70upx;
		line-height: 70upx;
		font-size: 28upx;
	}
	.active{
		border-bottom: 4upx solid #F1CA73;
		color: #EFA601;
	}
	.dataGraph,.theHistoricalData{
		padding: 20upx;
	}
	.theHistoricalData .title{
		background-color: #EFEFF4;
		text-align: center;
	}
	.theHistoricalData .describe{
		height: 2em;
		line-height: 2em;
		padding: 20upx 0;
		border-bottom: 1upx solid #EFEFF4;
		color: #00A0E9;
		font-size: 24upx;
	}
	.li{
		display: flex;
		justify-content: space-between;
	}
	.li:not(:last-child) {
		padding-bottom: 10upx;
		border-bottom: 1upx solid #EFEFF4;
	}
	.li .time{
		flex: 1;
	}
	.primary{
		height: 50upx;
		line-height: 50upx;
		font-size: 28upx;
		margin-top: 10upx;
		margin-left: 10upx;
	}
	
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 700upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 700upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
