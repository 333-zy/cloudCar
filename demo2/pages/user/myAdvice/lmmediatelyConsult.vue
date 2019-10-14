<template>
	<view class="content">
		<view class="inputs">
			<text>咨询主题</text>
			<view class="">
				<input type="text" value="" placeholder="请输入宝宝姓名" />
			</view>
		</view>
		<view class="li">
			<view style="border-bottom: 1px solid #ECECEC;">咨询内容</view>
			<view>
				<view class="uni-textarea">
					<textarea placeholder-style="color:#A9A9A9" placeholder="请输入内容" maxlength="500" v-model="text" />
					</view>
				<view class="wordCount">{{500-text.length}}/500</view>
			</view>
		</view>
		<view class="li">
			<view style="border-bottom: 1px solid #ECECEC;">请上传图片进行症状描述</view>
			<button type="primary" style="background-color: #0FAEFF;">图片上传</button>
			<!-- <view ref="input" class="input"></view> -->
		</view>
		<view class="li">
			<view style="border-bottom: 1px solid #ECECEC;">
				打开匿名分享，您的咨询问题将会展示到咨询案例。
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">匿名分享</view>
				<view class="cryptonymSwitch">
					{{cryptonymSwitch?'开':'关'}}
				</view>
				<switch checked @change="switchChange"/>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="submit">提交咨询</button>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				text: '',
				cryptonymSwitch:true
			}
		},
		methods:{
			switchChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
				this.cryptonymSwitch=e.target.value
			},
			submit(){
				uni.navigateBack({
					url:'../../interaction/interactionIndex'
				})
			}
		},
		mounted() {  
			var input = document.createElement('input')  
			input.type = 'file'  
			input.onchange = (event) => {  
				console.log(event)  
			}  
			this.$refs.input.$el.appendChild(input)  
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
	.li{
		padding: 10upx 30upx;
		border-bottom: 1upx solid #ECECEC;
	}

	.inputs input {
		height: 100%;
		line-height: 2em;
		padding: 0 20upx;
	}
	.uni-textarea uni-textarea{
		padding: 0;
		height: 250upx;
	}
	.wordCount{
		text-align: right;
		color: #B2B2B2;
	}
	.uni-list-cell::after{
		background-color: #FFFFFF;
	}
	.uni-list-cell-pd{
		padding: 0;
	}
	.cryptonymSwitch{
		padding: 0 20upx;
	}
</style>
