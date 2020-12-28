
<template>
  <div class="">
    <headers></headers>
    <div class="wrap">
        <div class="layui-container">
            <div class="sign-in">
                <form class="layui-form signin-form" action="">
                    <h5>用户注册</h5>
                    <div class="signin-t">
                        <input type="text" placeholder="手机／邮箱／用户名" id="userName" v-model="name" maxlength="11">
                    </div>
                    <div class="signin-s">
                        <input type="password" placeholder="密码" v-model="pwd" id="pwd">
                    </div>
                        <div class="signin-s">
                        <input type="password" placeholder="再次输入密码" v-model="yzpwd" id="pwd">
                    </div>
                    <div class="slider">
                        <div class="slider-bg"></div>
                        <div class="slider-text">请按住滑块，拖动到最右边</div>
                        <div class="slider-btn">>></div>
                    </div>
                    <div class="signin-btn">
                        <button @click="getLogin()" type="button">立即注册</button>
                    </div>
                </form>
                <div class="login">
                    <ul>
                        <li><a href="#">手机短信登录</a></li>
                        <li><router-link to="/register" class="join">登录</router-link></li>
                        <li><a href="#" class="lose">忘记密码</a></li>
                    </ul>
                </div>
                <div class="login-other">
                    <p>选择其它方式登录</p>
                </div>
                <div class="login-type">
                    <a href="" class="weibo-login"><img :src="require('@/assets/images/login/weibo.png')" alt=""></a>
                    <a href="" class="qq-login"><img :src="require('@/assets/images/login/qq.png')" alt=""></a>
                    <a href="" class="wechat-login"><img :src="require('@/assets/images/login/wechat.png')" alt=""></a>
                </div>
            </div>
        </div>
    </div>
    <footers/>
  </div>
</template>

<script>


import headers from "./../components/header";
import footers from "./../components/footer";
export default {
  
  components: {
    headers,footers
  },
  directives: {
  },
  data() {
    
    return {
      name:'',
      pwd:'',
      yzpwd:'',
      status:false,
    };
  },
  
  methods: {
    getLogin(){
        if(this.name==''||this.pwd==''||this.status==false){
          console.log(this.name)
          console.log(this.pwd)
          alert('请将内容填写完整')
        }else if(this.yzpwd!=this.pwd){
          alert('密码输入不一致请重新输入')
        }else{
          alert('注册成功')
          this.$router.push({path:'/login'});
        };
    }
  },
  
  created() {},
  
  mounted() {
    let _this = this;
    var slider = document.getElementsByClassName('slider')[0]; 
    var sliderBg = document.getElementsByClassName('slider-bg')[0]; 
    var sliderText = document.getElementsByClassName('slider-text')[0]; 
    var sliderBtn = document.getElementsByClassName('slider-btn')[0]; 
    var success = false; 
    var distance = slider.offsetWidth - sliderBtn.offsetWidth; 

    sliderBtn.onmousedown = function (e) {
        sliderBtn.style.transition = ''
        sliderBg.style.transition = ''
        
        var downX = e.clientX

        //给文档注册鼠标移动事件
        document.onmousemove = function (e) {
            
            var moveX = e.clientX
            
            var offsetX = moveX - downX

            if (offsetX > distance) {
                offsetX = distance; 
            } else if (offsetX < 0) {
                offsetX = 0 
            }
           
            sliderBtn.style.left = offsetX + "px"
            sliderBg.style.width = offsetX + "px"

            
            if (offsetX == distance) {

                
                sliderText.innerHTML = "验证通过";
                sliderText.style.color = "#fff";
                sliderBtn.innerHTML = "&radic;";
                sliderBtn.style.color = "#76c61d";
                sliderBg.style.backgroundColor = "#7ac23c";
                _this.status = true;
                
                success = true;
                //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                sliderBtn.onmousedown = null;
                document.onmousemove = null;
            }
        }
        //给文档注册鼠标松开事件
        document.onmouseup = function (e) {
            
            if (success) {
                return;
            } else {
                
                sliderBtn.style.left = 0;
                sliderBg.style.width = 0;
                sliderBtn.style.transition = "left 1s ease";
                sliderBg.style.transition = "width 1s ease";
            }
            
            document.onmousemove = null;
            document.onmouseup = null;
        }
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
@import url('./../assets/layui/css/layui.css'); 


* {
  box-sizing: border-box;
  outline: none;
}
::-webkit-input-placeholder {
  color: #828282;
}
.wrap {
  width: 100vw;
  min-height: 81vh;
  background-color: #f9f9f9;
  margin: auto;
}
.wrap .sign-in {
  width: 350px;
  margin: 0 auto;
  padding: 50px 20px 100px;
}
.wrap .sign-in .signin-form {
  text-align: center;
}
.wrap .sign-in .signin-form h5 {
  font-size: 20px;
  color: #101920;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 30px;
}
.wrap .sign-in .signin-form .signin-t,
.wrap .sign-in .signin-form .signin-s {
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  background: #fff;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  cursor: pointer;
  line-height: 24px;
  color: #101920;
  font-size: 16px;
  text-align: left;
}
.wrap .sign-in .signin-form .signin-t input,
.wrap .sign-in .signin-form .signin-s input {
  border: none;
  cursor: pointer;
}
.wrap .sign-in .signin-form .signin-t:hover,
.wrap .sign-in .signin-form .signin-s:hover {
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.wrap .sign-in .signin-form .signin-s {
  margin-bottom: 22px;
}
.wrap .sign-in .signin-form .slider {
  width: 100%;
  height: 34px;
  line-height: 34px;
  background: #e8e8e8;
  position: relative;
  color: #828282;
  font-size: 12px;
  cursor: pointer;
}
.wrap .sign-in .signin-form .slider .slider-bg {
  width: 40px;
  height: 100%;
  position: absolute;
  background-color: #7ac23c;
}
.wrap .sign-in .signin-form .slider .slider-text {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
}
.wrap .sign-in .signin-form .slider .slider-btn {
  width: 40px;
  height: 36px;
  position: absolute;
  border: 1px solid #ccc;
  cursor: move;
  text-align: center;
  background-color: #fff;
  user-select: none;
  color: #737383;
}
.wrap .sign-in .signin-form .signin-btn button {
  height: 40px;
  line-height: 40px;
  background: #eb0028;
  color: #fff;
  font-size: 14px;
  width: 100%;
  font-weight: 300;
  border: none;
  margin: 40px 0 20px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  z-index: 0;
}
.wrap .sign-in .signin-form .signin-btn button:after {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 0;
  height: 100%;
  transition: 0.25s;
  background: #b8001f;
  border-radius: 2px;
}
.wrap .sign-in .signin-form .signin-btn button:hover:after {
  background: #b8001f;
  width: 100%;
}
.wrap .sign-in .login {
  margin-top: 20px;
  margin-bottom: 40px;
}
.wrap .sign-in .login ul {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.wrap .sign-in .login ul li a {
  color: #09c;
  font-size: 14px;
  cursor: pointer;
}
.wrap .sign-in .login ul li a:hover {
  text-decoration: underline;
}
.wrap .sign-in .login ul li:nth-of-type(1):after,
.wrap .sign-in .login ul li:nth-of-type(2):after {
  content: '';
  width: 1px;
  height: 1em;
  background: #dfdfdf;
  position: absolute;
  top: 4px;
  margin: 0 1em;
}
.wrap .sign-in .login ul li:nth-of-type(1):after {
  left: 118px;
}
.wrap .sign-in .login ul li:nth-of-type(2):after {
  left: 195px;
}
.wrap .sign-in .login-other {
  font-size: 12px;
  color: #666;
  text-align: center;
  position: relative;
  margin: 20px 0;
}
.wrap .sign-in .login-other p {
  padding: 0 10px;
}
.wrap .sign-in .login-other p:before,
.wrap .sign-in .login-other p:after {
  content: '';
  width: 95px;
  display: inline-block;
  height: 1px;
  background: #e6e6e6;
  position: absolute;
  top: 10px;
}
.wrap .sign-in .login-other p:before {
  left: 0;
}
.wrap .sign-in .login-other p:after {
  right: 0;
}
.wrap .sign-in .login-type {
  display: flex;
  justify-content: space-around;
}
.wrap .sign-in .login-type a {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
}
.wrap .sign-in .login-type a img {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrap .sign-in .login-type a:first-of-type {
  background: #EA0027;
}
.wrap .sign-in .login-type a:nth-of-type(2) {
  background: #12B7F5;
}
.wrap .sign-in .login-type a:last-of-type {
  background: #1aad19;
}
.wrap .sign-in .login-type a:first-of-type:hover {
  background: #d70226;
}
.wrap .sign-in .login-type a:nth-of-type(2):hover {
  background: #15a2c9;
}
.wrap .sign-in .login-type a:last-of-type:hover {
  background: #00a90c;
}
</style>