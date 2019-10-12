<template>
	<view class="content">
		<view class="inputs">
			<text>姓&emsp;&emsp;名：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入宝宝姓名" />
			</view>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text>性&emsp;&emsp;别：</text>
			<view class="">
				<radio-group name="" class="radio">
					<label>
						<radio value="1" checked="true" /><text>男</text>
						<radio class="radio2" value="2" /><text>女</text>
					</label>
				</radio-group>
			</view>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text>生&emsp;&emsp;日：</text>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text>关&emsp;&emsp;系：</text>
			<view class="uni-list-cell-db">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text style="width: 140upx;">ID：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入ID" />
			</view>
		</view>
		<view class="inputs">
			<text>出身身长：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入身高" />
			</view>
			<text class="unit">cm</text>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text>出身体重：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入体重" />
			</view>
			<text class="unit">kg</text>
			<text class="icon">*</text>
		</view>
		<view class="inputs">
			<text>出身头围：</text>
			<view class="">
				<input type="text" value="" placeholder="请输入头围" />
			</view>
			<text class="unit">cm</text>
			<text class="icon" style="opacity: 0;">*</text>
		</view>
		<view class="inputs">
			<text>筛查地点：</text>
			<view class="uni-list-cell-db">
				<picker @change="bindPickerChangeHospitals" :value="indexHospitals" :range="hospitals">
					<view class="uni-input">{{hospitals[indexHospitals]}}</view>
				</picker>
			</view>
			<text class="icon">*</text>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">新建并进行各项筛查</button>
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
				array: ['本人', '父亲', '母亲', '祖父母', '外祖父母', '叔叔姑姑', '兄弟姐妹', '舅舅阿姨', '其他', '亲属', '父母'],
				index: 0,
				hospitals: ['重庆医科大学附属儿童医院儿保科', '重庆妇幼保健院儿保科', '涪陵区妇幼保健院儿保科', '万州区妇幼保健院儿保科', '长寿区妇幼保健院儿保科',
					'沙坪坝区小龙坎社区卫生服务中心', '大溪沟街道社区卫生服务中心', '渝中区两路口街道社区卫生服务中心', '宜宾长宁县长宁填社区卫生中心', '其它'
				],
				indexHospitals: 0,
				date: currentDate,
				time: '12:01'
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

	.icon {
		color: red;
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
</style>
