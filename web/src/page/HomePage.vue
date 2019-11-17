<template>
  <div>
    <div class="top">
      <div class="navigation-bar">
        <div class="logo">
          <img class="logo-img" src="../../static/img/矢量智能对象@2x(1).png" />
          <img class="logo-text" src="../../static/img/矢量智能对象@2x.png" />
        </div>
        <div class="navigation">
          <div class="navigation-item" v-for="(item,index) in navigationBars" :key="index">
            {{item.name}}
            <div class="navigation-item-underline"></div>
          </div>
        </div>
        <div class="login">
          <span>登录</span>
          <span class="register">快速注册</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="../../static/img/banner.png" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default{
    data() {
      return {
        navigationBars: [
          {name:'我要下单'},
          {name:'运价查询'},
          {name:'业务范围'},
          {name:'运输案列'},
          {name:'投运必读'},
          {name:'关于我们'},
        ]
      }
    },
  }
</script>

<style>
  .top{
    min-width: 1200px;
    width: 70%;
    margin: auto;
  }
  .navigation-bar{
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
  .navigation-item{
    position: relative;
    width: 16.6%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navigation-item-underline{
    position: absolute;
    bottom: -5px;
    width: 40%;
    height: 4px;
    background: #4F0071;
  }
  .logo,.navigation,.login{
    display: flex;
    align-items: center;
  }
  .logo-img{
    width: 48px;
    height: 48px;
    margin-right: 6px;
  }
  .logo-text{
    height: 17px;
  }
  .navigation{
    flex: 1;
    justify-content: space-around;
    font-size: 8px;
    font-weight:400;
    color: #060606;
    padding: 5px 60px 0 80px;
  }
  .login{
    padding-top: 5px;
    font-size: 7px;
  }
  .register{
    margin-left: 10px;
    align-items: center;
    padding: 10px 4px;
    color: #FEFEFE;
    background: #4F0071;
  }

  .banner{
    height: 500px;
  }
  .banner img{
    width: 100%;
    height: 100%;
  }
</style>
