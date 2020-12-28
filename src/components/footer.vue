<!--  -->
<template>
<footer>
    <div class="container-text">
        <nav>
            <ul>
                <p>一加产品</p>
                <li>
                    <a href="#">OnePlus 7 Pro</a>
                </li>
                <li>
                    <a href="#">OnePlus 7</a>
                </li>
                <li>
                    <a href="#">OnePlus 6T</a>
                </li>
                <li>
                    <a href="#">OnePlus 6</a>
                </li>
                <li>
                    <a href="#">OnePlus 5T</a>
                </li>


            </ul>
            <ul>
                <p>热门活动</p>
                <li>
                    <a href="#">推荐有礼</a>
                </li>
                <li>
                    <a href="#">以旧换新</a>
                </li>
                <li>
                    <a href="#">Shot on OnePlus</a>
                </li>
                <li>
                    <a href="#">邀请码购买</a>
                </li>
                <li>
                    <a href="#">教育优惠</a>
                </li>


            </ul>
            <ul>
                <p>关于一加</p>
                <li>
                    <a href="#">了解一加</a>
                </li>
                <li>
                    <a href="#">加入一加</a>
                </li>
                <li>
                    <a href="#">H2OS</a>
                </li>
                <li>
                    <a href="#">云服务</a>
                </li>
                <li>
                    <a href="#">预置应用公示</a>
                </li>


            </ul>
            <ul>
                <p>服务支持</p>
                <li>
                    <a href="#">购买帮助</a>
                </li>
                <li>
                    <a href="#">用户手册</a>
                </li>
                <li>
                    <a href="#">寄修服务</a>
                </li>
                <li>
                    <a href="#">服务中心</a>
                </li>
                <li>
                    <a href="#">联系我们</a>
                </li>


            </ul>
        </nav>
        <div class="contact">
            <a href="#">
                <i class="icon iconfont iconiphonekefu"></i>
                400-888-1111
            </a>
            <a href="#" id="buyS">
                <div class="buyShow"></div>
                <div class="buyHide"></div>
                <span style="position: relative">在线客服</span>

            </a>
            <p>周一至周日 9:00 - 22:00</p>
            <div class="social">
                <a href="#" class="code">
                    <img :src="require('@/assets/images/footer/wechat.png')">
                    <img :src="require('@/assets/images/footer/code.png')" class="codes">
                </a>
                <a href="#">
                    <img :src="require('@/assets/images/footer/weibo.png')">
                </a>
            </div>
        </div>
    </div>
    <div class="container-infinite">
        <div class="container-text">
            <div class="contact-us">
                <div class="current">
                    <i></i>
                    中国大陆( 简体中文/CNY )
                </div>
                <div class="retailer">更多选购方式，请
                    <a href="#" style="color: #09c;"> 查找零售店 </a>
                    或
                    <a href="#" style="color: #09c;">  一加服务中心 </a>
                </div>
            </div>
            <div class="footer-tail">
                <div class="response">
                    <p style="    margin: 0 0 35px 0;">© 2013-2019 OnePlus. All Rights Reserved.</p>
                    <p>粤ICP备13080605号-4 | 备案主体编号:44201910955995</p>
                    <a href="#">
                        粤公网安备 44030402001407号
                    </a>
                </div>
                <div class="auto">
                    <ul>
                        <li>
                            <a href="#">隐私政策</a>
                        </li>
                        <li>
                            <a href="#">用户协议</a>
                        </li>
                        <li>
                            <a href="#">竞赛规则</a>
                        </li>
                        <li>
                            <a href="#">知识产权政策</a>
                        </li>
                        <li>
                            <a href="#">安全问题反馈</a>
                        </li>
                        <li style="border: none">
                            <a href="#">站点地图</a>
                        </li>
                    </ul>
                    <div class="cer">
                        <a href="#">
                            <img :src="require('@/assets/images/footer/certificate.png')" style="height: 28px;">
                        </a>
                        <a href="#">
                            <img :src="require('@/assets/images/footer/cnnic.png')" style="height: 28px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>


export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
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
footer {
  background-color: #fcfcfc;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

footer>.container-text {
  width: 100%;
  min-width: 300px;
  height: 312px;
  display: flex;
}

footer>.container-text>nav {
  padding-right: 15px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 163px;
}

footer>.container-text>nav>ul {
  width: 20%;
}

footer>.container-text>nav>ul>p {
  padding: 0 20px;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  position: relative;
  color: #101920;
  box-sizing: border-box;
}

footer>.container-text>nav>ul>li {
  padding: 8px 20px;
  box-sizing: border-box;
}

footer>.container-text>nav>ul>li>a {
  color: #828282;
  display: block;
  font-size: 14px;
}

footer>.container-text>.contact {
  margin: 40px 0 0 -37px;
  height: 160px;
  width: 16%;
}

footer>.container-text>.contact>a {
  text-align: right;
  color: #09c;
  font-size: 14px;
  display: block;
}

footer>.container-text>.contact>a>i {
  font-size: 1em;
  margin-bottom: -0.25em;
  line-height: 1;
  height: 1em;
  display: inline-block;
}

footer>.container-text>.contact>a:nth-of-type(2) {
  text-align: center;
  margin: 15px 0 15px 132px;
  height: 40px;
  line-height: 40px;
  width: 120px;
  color: #101920;
  display: block;
  font-size: 17px;
  border: 1px solid #101920;
  position: relative;
  box-sizing: border-box;
}

footer>.container-text>.contact>a:nth-of-type(2)>.buyShow {
  animation: addBg linear 0.2s;
  animation-fill-mode: both;
}
#buyS:hover{
  color: #fff;
  z-index: 9;
  .buyShow{
    display: block;
  };
  .buyHide{
    display: none
  };
}
.cer img{
  display: inline-block;
}

footer>.container-text>.contact>a:nth-of-type(2)>.buyHide {
  animation: removeBg linear 0.2s;
  animation-fill-mode: both;
}

footer>.container-text>.contact>p {
  text-align: right;
  color: #999;
  font-size: 12px;
  line-height: 1.5;
}

footer>.container-text>.contact>.social {
  margin-right: -6px;
  text-align: right;
  margin-top: 10px;
}

footer>.container-text>.contact>.social>a:first-of-type {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  vertical-align: top;
}

footer>.container-text>.contact>.social>a:first-of-type>img:first-of-type {
  display: inline-block;
  height: 50%;
}

footer>.container-text>.contact>.social>a:first-of-type>img:last-of-type {
  height: 300%;
  position: absolute;
  bottom: 40px;
  left: -45px;
  display: none;
}

footer>.container-text>.contact>.social>a:last-of-type {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  vertical-align: top;
}

footer>.container-text>.contact>.social>a:last-of-type>img:first-of-type {
  display: inline-block;
  height: 50%;
}

footer>.container-infinite {
  width: 100%;
  height: 213px;
}

footer>.container-infinite>.container-text {
  width: 80%;
  height: 213px;
  margin: 0 auto;
}

footer>.container-infinite>.container-text>.contact-us {
  width: 100%;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

footer>.container-infinite>.container-text>.contact-us>.current {
  color: rgba(0, 0, 0, 0.8);
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}

footer>.container-infinite>.container-text>.contact-us>.current>i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: -0.2em;
  background-image: url('/images/current.png');
  background-position: -31px -63px;
  width: 31px;
  height: 21px;
}

footer>.container-infinite>.container-text>.contact-us>.retailer {
  height: 50px;
  line-height: 50px;
  text-align: right;
  background-color: initial;
  font-size: 12px;
}

footer>.container-infinite>.container-text>.footer-tail {
  width: 100%;
  padding-bottom: 30px;
  padding-top: 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

footer>.container-infinite>.container-text>.footer-tail>.response {
  width: 41.66667%;
  color: #999;
}

footer>.container-infinite>.container-text>.footer-tail>.response>p {
  padding: 0 20px;
  line-height: 30px;
  border: 0;
  font-size: 12px;
  box-sizing: border-box;
}

footer>.container-infinite>.container-text>.footer-tail>.response>a {
  padding: 0 20px;
  line-height: 30px;
  display: inline-block;
  white-space: nowrap;
  border: 0;
  font-size: 12px;
  box-sizing: border-box;
  color: #10181f;
}

footer>.container-infinite>.container-text>.footer-tail>.response>a>img {
  margin-top: -5px;
  vertical-align: middle;
}

footer>.container-infinite>.container-text>.footer-tail>.auto {
  width: 503px;
  padding-right: 15px;
  padding-top: 10px;
  box-sizing: border-box;
}

footer>.container-infinite>.container-text>.footer-tail>.auto>ul {
  text-align: right;
  color: #666;
  margin-left: 0;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}

footer>.container-infinite>.container-text>.footer-tail>.auto>ul>li {
  padding: 0 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 12px;
  box-sizing: border-box;
}

footer>.container-infinite>.container-text>.footer-tail>.auto>ul>li>a {
  color: #666;
}

footer>.container-infinite>.container-text>.footer-tail>.auto>.cer {
  text-align: right;
}

footer>.container-infinite>.container-text>.footer-tail>.auto>.cer>a {
  margin: 0 10px;
}

footer>.container-text>.contact>a:nth-of-type(2)>.buyShow,
footer>.container-text>.contact>a:nth-of-type(2)>.buyHide {
  height: 40px;
  border-radius: 2px;
  background: #101920;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

@keyframes active {
  0% {
    opacity: 0;
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes addBg {
  0% {
    width: 0%;
  }

  100% {
    width: 101%;
  }
}

@keyframes removeBg {
  0% {
    width: 101%;
  }

  100% {
    width: 0%;
  }
}
</style>