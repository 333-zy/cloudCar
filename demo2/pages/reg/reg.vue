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
            <view class="input-row border">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="affirmPassword" placeholder="请输入密码"></m-input>
            </view>
			<view class="input-row">
			    <text class="title">确认密码：</text>
			    <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
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
				password:'',
				affirmPassword:'',
                code: '',
            }
        },
        methods: {
			getCode(){
				if(this.mobile.length<1)
				return uni.showToast({
					icon:'none',
					title:'请输入手机号'
				})
			},
			
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                // if (this.account.length < 5) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '账号最短为 5 个字符'
                //     });
                //     return;
                // }
                // if (this.code.length < 6) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '密码最短为 6 个字符'
                //     });
                //     return;
                // }
                // if (this.email.length < 3 || !~this.email.indexOf('@')) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '邮箱地址不合法'
                //     });
                //     return;
                // }

                const data = {
                    mobile: this.mobile,
					password:this.password,
					affirmPassword:this.affirmPassword,
                    code: this.code
                }
                service.addUser(data);
                uni.showToast({
                    title: '注册成功'
                });
                uni.navigateBack({
                    delta: 1
                });
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
