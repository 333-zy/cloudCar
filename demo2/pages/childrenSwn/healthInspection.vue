<template>
	<view class="content">
		<image class="image" src="../../static/img/20191016134200.png" mode="widthFix"></image>
		<view class="contentButtom">
			<view class="">
				<text class="round"></text>
				<text class="">小明</text>
				<text class="">2天</text>
				<text class="">男</text>
			</view>
			<view class="describe">
				<text style="color: #999999;">宝宝正处于<text style="color: #339999;font-weight: bold;">2天</text>，已为您自动匹配自查量表，</text>为保证自查结果的准确性，请选择符合宝宝当前情况的选项。
			</view>
			<view class="list" v-for="(item,index) in list" :key="index">
				<view class="title">
					{{item.title}}
				</view>
				<view class="titleName">
					{{item.name}}
				</view>
				<view class="">
					<radio-group name="">
						<label>
							<radio value="1" /><text>是</text>
							<radio value="2" /><text>否</text>
						</label>
					</radio-group>
				</view>
			</view>
		</view>
		<button type="primary" class="primary" @click="toInspectionResults()">确认提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '大运动',
						name: '无规律、不协调动作'
					},
					{
						title: '精细运动',
						name: '紧握拳'
					},
					{
						title: '语言发育',
						name: '能哭叫'
					}
				]
			}
		},
		methods:{
			toInspectionResults(){
				uni.navigateTo({
					url:'inspectionResults'
				})
			}
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.round {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #00A0E9;
		margin-right: 10upx;
	}

	.contentButtom text {
		display: inline-block;
		margin-right: 20upx;
	}

	.describe {
		height: 3em;
		line-height: 1.5em;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #EFEFF4;
		color: #FF6600;
	}

	.contentButtom {
		padding: 20upx;
	}

	.list .title {
		color: #66CFCF;
		font-size: 30upx;
		font-weight: bold;
	}

	.list:not(:last-child) {
		padding-bottom: 10upx;
		border-bottom: 20upx solid #EFEFF4;
	}

	/* .list:last-child {
		border-bottom: 1upx solid #EFEFF4;
		padding-bottom: 20upx;
	} */

	.primary {
		width: 95%;
		margin: 20upx auto;
	}
</style>
