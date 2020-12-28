
<!--  -->
<template>
<!--头部导航-->
<header>
    <nav>
        <ul class="nav-left">
            <li><a href="home.html">
                <i class="icon iconfont icononeplus"></i>
            </a></li>
        </ul>
        <ul class="nav-pages">
            <li id="show">
                <router-link to="index">商城</router-link>
            </li>
            <li>
                <router-link to="index">品牌</router-link>
            </li>
            <li>
               <router-link to="/card">购物车</router-link>
            </li>
            <li>
                <router-link to="index">论坛</router-link>
            </li>
            <li>
               <router-link to="index">零售店</router-link>
            </li>
        </ul>
        <ul class="nav-right">
            <li class="first">
                <i class="icon iconfont iconus" @click="line = !line"></i>
                <nav class="user-info" v-show="line">
                    <ul>
                        <li>
                            <a href="javascript:void (0)" id="reorder">订单</a>
                        </li>
                        <li>
                            <a href="#">账户</a>
                        </li>
                        <li>
                            <a href="#">推荐有礼</a>
                        </li>
                        <li>
                          <router-link v-show="this.username==''" to='./login'>登录</router-link>
                          <a @click="quit()"  v-show="this.username!=''">退出登录</a>
                        </li>
                    </ul>
                </nav>
            </li>
            <li v-show="this.username!=''">{{username}}</li>
            <li class="second" style="position: relative;">
                <i class="icon iconfont iconbag">
                    <a href="./cart.html" style="display:inline-block;width: 20px;height: 20px;position: absolute;top: 21px;right: 10px;">

                    </a>
                </i>
            </li>
            <li>
                <i class="icon iconfont iconsearch"></i>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>

export default {
  data() {
    return {
      line:false,
      username:'',
    };
  },
  methods: {
    quit(){
      localStorage.removeItem("username");
      this.$router.push('/login')
    }
  },
  created() {
  },
  
  mounted() {
    /* 显示登录的用户名 */
    var data = localStorage.getItem('username');
    if (data != undefined) {
      this.username =data
    }
  },
  beforeCreate() {}, 
  beforeMount() {}, 
  beforeUpdate() {}, 
  updated() {}, 
  beforeDestroy() {}, 
  destroyed() {}, 
  activated() {}, 
};
</script>
<style lang='less' scoped>
header {
  height: 60px;
  position: relative;
  z-index: 99;
  background: #fff;
  max-width: 100%;
  overflow: visible;
}

header nav {
  position: relative;
  text-align: center;
  background-color: #fff;
  width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

header nav .nav-left {
  height: 60px;
  line-height: 60px;
}

header nav .nav-left i {
  font-size: 35px;
  font-weight: 400;
  color: #eb0028;
}

header nav .nav-pages {
  width: 612px;
  height: 60px;
  display: flex;
  cursor: pointer;
}

header nav .nav-pages>li {
  font-size: 14px;
  line-height: 60px;
  height: 60px;
  min-width: 60px;
  padding: 0 1.5em;
  box-sizing: border-box;
}
header nav .nav-pages>li:hover{
  border-bottom: 2px solid #eb0028;
}
header nav .nav-pages>li>a {
  color: #000;
}


header nav .nav-right {
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

header nav .nav-right>li {
  font-size: 14px;
  line-height: 60px;
  height: 58px;
  width: 45px;
}

header nav .nav-right>li>i {
  font-size: 25px;
}

header nav .nav-right>li .info-nav {
  width: 400px;
  font-size: 14px;
  text-align: left;
  position: absolute;
  right: -60px;
  background-color: #fff;
  top: 60px;
  display: none;
}

header nav .nav-right>li .info-nav:before {
  content: "";
  display: block;
  height: 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid #dfdfdf;
}

header nav .nav-right>li .info-nav>.cart {
  position: relative;
  padding: 7.023% 20px;
  margin-top: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.56;
  color: #999;
  border-bottom: 1px solid #dfdfdf;
}

header nav .nav-right>li .info-nav>.cart>p {
  font-size: 14px;
}

header nav .nav-right>li .info-nav .cart-info {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 109px;
  background-color: #fff;
}

header nav .nav-right>li .info-nav .cart-info>a {
  width: 86%;
  display: block;
  height: 40px;
  background-color: #eb0028;
  color: #fff;
  font-size: 14px;
  line-height: 40px;
  margin: 21px auto;
  border-radius: 2px;
  text-align: center;
  position: relative;
}

header nav .nav-right>li .info-nav .cart-info>a>.shopshow {
  animation: addBg linear 0.2s;
  animation-fill-mode: both;
}

header nav .nav-right>li .info-nav .cart-info>a>.shophide {
  animation: removeBg linear 0.2s;
  animation-fill-mode: both;
}

header nav .nav-right>li .info-nav .cart-info>a>.shopshow,
header nav .nav-right>li .info-nav .cart-info>a>.shophide {
  height: 40px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.user-info{
  width: 120px;
 ul{
  width: 120px;
   li{
  width: 100%;
    a{
      text-align: center;
      color: #333;
      display: block;
    }
    a:hover{
      background-color: #eb0028;
      color:#fff
    };
  }
}

}
</style>