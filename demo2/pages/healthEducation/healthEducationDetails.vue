<template>
	<view class="content">
		<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
			<rich-text :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.name=e.name;
			uni.setNavigationBarTitle({
				title:e.name
			})
		},
		data() {
			return {
				name:'',
				strings: `<p style="text-align:left"><span style="font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)">一．</span><span
						 style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">感知觉的发育</span></span></p>
					<p style="text-align:left"><span style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)">1.视感知发育：新生儿已有视觉感应功能，瞳孔有对光反射，在安静清醒状态下可短暂注视物体，但只能看清15-20cm内的事物。第2个月起可协调地注视物体，开始有头眼协调；3-4个月时喜看自己的手，头眼协调较好；6-7个月时目光可随上下移动的物体垂直方向转动；8-9个月时开始出现视深度感觉，能看到小物体；18个月时已能区别各种形状；2岁时可区别垂直线与横线；5岁时已可区别各种颜色；6岁时视深度已充分发育。</span></p>
					<p style="line-height: 150%; text-align: center;text-indent: 0em;"><img src="/bd/upload/image/20170523/1495525371940009887.jpg"
						 style="text-align: center;width:100%;"></p>
					<p style="text-align:left"><span style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)">2.听感知发育：出生时鼓室无空气，听力差；生后3-7日听觉已相当良好；3-4个月时头可转向声源，听到悦耳声时会微笑；7-9个月时能确定声源，区别语言的意义；13-16个月时可寻找不同响度的声源，听懂自己的名字；4岁时听觉发育已经完善。听感知发育和儿童的语言发育直接相关，听力障碍如果不能在语言发育的关键时期内（6个月内）或之前得到确诊和干预，则可因聋致哑。</span></p>
					<p style="line-height: 150%; text-align: center;text-indent: 0em;"><img src="/bd/upload/image/20170523/1495525398448062204.jpg"
						 style="text-align: center;width:100%;height:300px"></p>
					<p style="text-align:left"><span style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)">3.味觉和嗅觉发育</span></p>
					<p style="text-align:left"><span style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)"><span
							 style="font-family:宋体">（</span>1）味觉：出生时味觉发育已很完善；4-5个月时甚至对食物轻微的味道改变已很敏感，为味觉发育关键期，此时应适时添加各类转乳期食物。</span></p>
					<p style="text-align:left"><span style="color: rgb(51, 51, 51); font-family: 宋体; font-size: 14px;">（</span><span
						 style="color: rgb(51, 51, 51); font-family: 宋体; font-size: 14px; background-color: rgb(255, 255, 255);">2）嗅觉：出生时嗅觉中枢与神经末梢已基本发育成熟；3-4个月时能区别愉快与不愉快的气味；7-8个月开始对芳香气味有反应。</span></p>
					<p style="line-height: 150%; text-align: center;text-indent: 0em;"><img src="/bd/upload/image/20170523/1495525439339027537.jpg"
						 style="text-align: center;width:100%;"></p>
					<p style="text-align:left"><span style="color: rgb(51, 51, 51); font-family: 宋体; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">4.皮肤感觉的发育：皮肤感觉包括触觉、痛觉、温度觉及深感觉等。触觉是引起某些反射的基础。新生儿眼、口周、手掌、足底等部位的触觉已很灵敏，而前臂、大腿、躯干的触觉则较迟钝。新生儿已有痛觉，但较迟钝；第2个月起才逐渐改善。出生时温度觉已很灵敏。</span></p>
					<p style="text-indent: 28px;"><span style=";font-family:宋体;color:rgb(51,51,51);font-size:14px;background:rgb(255,255,255)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
							 style="font-family:宋体">（文章摘自《儿科学》第八版）</span></span></p>`
			}
		},
	}
</script>

<style>
	.content {
		padding: 20upx;
	}
</style>
