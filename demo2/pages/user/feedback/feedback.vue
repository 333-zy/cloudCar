<template>
	<view class="content">
		<view class="inputs">
			<text>姓&emsp;&emsp;名：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入姓名" />
			</view>
		</view>
		<view class="inputs">
			<text>电&emsp;&emsp;话：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入电话" />
			</view>
		</view>
		<view class="inputs">
			<text>类&emsp;&emsp;型：</text>
			<view class="uni-list-cell-db">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
		</view>
		<view class="li">
			<view style="border-bottom: 1px solid #ECECEC;">请上传图片进行症状描述</view>
			<button type="primary" style="background-color: #0FAEFF;">图片上传</button>
			<!-- <view ref="input" class="input"></view> -->
		</view>
		<view class="li">
			<view style="border-bottom: 1px solid #ECECEC;">意见反馈</view>
			<view>
				<view class="uni-textarea">
					<textarea placeholder-style="color:#A9A9A9" placeholder="请输入您的意见反馈..." maxlength="200" v-model="text" />
					</view>
				<view class="wordCount">{{200-text.length}}/200</view>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="determine">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'picker',
				array: ['儿童自查', '日常监测', '互动咨询', '其他问题'],
				index: 0,
				text: '',
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			determine(){
				uni.switchTab({
					url:'../../main/main'
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindPickerChangeHospitals: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.indexHospitals = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	.inputs {
		display: flex;
		height: 70upx;
		line-height: 70upx;
		padding: 10upx 30upx;
		border-bottom: 1upx solid #ECECEC;
	}

	.inputs input {
		height: 100%;
		line-height: 2em;
	}

	.inputs view {
		flex: 1;
	}

	.uni-list::before,
	.uni-list::after {
		background-color: #FFFFFF;
	}

	.uni-input {
		padding: 12upx 0;
	}

	.unit {
		padding: 0 10upx;
	}

	.radio2 {
		margin-left: 20upx;
	}
	.li{
		padding: 10upx 30upx;
		border-bottom: 1upx solid #ECECEC;
	}
	.wordCount{
		text-align: right;
		color: #B2B2B2;
	}
	.uni-textarea uni-textarea{
		padding: 0;
		height: 100upx;
	}
</style>
