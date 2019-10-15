<template>
	<view class="content">
		<view class="uni-title uni-common-mt">
			<!-- <view class="name">
				李时珍
			</view>
			<view class="sex">
				男
			</view> -->
			<view class="">
				<image src="../../static/img/7e3e6709c93d70cf533dd29ef2dcd100bba12b59.jpg" mode="widthFix"></image>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				strings: `李时珍（1518—1593），字东璧，晚年自号濒湖山人，湖北蕲春县蕲州镇东长街之瓦屑坝（今博士街）人，明代著名医药学家。后为楚王府奉祠正、皇家太医院判，去世后明朝廷敕封为“文林郎”。 [1]
				李时珍自1565年起，先后到武当山、庐山、茅山、牛首山及湖广、安徽、河南、河北等地收集药物标本和处方，并拜渔人、樵夫、农民、车夫、药工、捕蛇者为师，参考历代医药等方面书籍925种，考古证今、穷究物理”，记录上千万字札记，弄清许多疑难问题，历经27个寒暑，三易其稿，于明万历十八年（1590年）完成了192万字的巨著《本草纲目》，此外对脉学及奇经八脉也有研究。著述有《奇经八脉考》《濒湖脉学》等多种。
				[2-3] 被后世尊为 “药圣”
				1982年，其墓地李时珍陵园（李时珍墓）被国务院列为第二批“全国重点文物保护单位”。 [2] [4]`
			}
		},
	}
</script>

<style>
	.content {
		padding: 0 20upx;
	}
</style>
