<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">手机号：</text>
                <m-input type="text" focus clearable v-model="mobile" placeholder="请输入手机号"></m-input>
            </view>
            <view class="input-row border">
                <text class="title">验证码：</text>
                <m-input type="text" clearable v-model="code" placeholder="请输入验证码"></m-input>
            	<button type="primary" @click="getCode">获取验证码</button>
            </view>
        </view>

        <view class="btn-row">
            <button type="primary" class="primary" @tap="findPassword">提交</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                mobile: '',
				code:''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.mobile.length < 1 ) 
                    return uni.showToast({
                        icon: 'none',
                        title: '请输入手机号',
                    });
                // uni.showToast({
                //     icon: 'none',
                //     title: '已发送重置邮件至注册邮箱，请注意查收。',
                //     duration: 3000
                // });
            }
        }
    }
</script>

<style>
.input-row button{
	height: 60upx;
	line-height: 60upx;
	margin-top: 8upx;
	background-color: #0faeff;
	margin-right: 10upx;
	font-size: 26upx;
}
</style>
