<!--  -->
<template>
<div class=''>
    <headers/>
    <div class="bp-main-container">
        <!--购买左-->
        <div class="bp-side-l" style="position: absolute;left: 37px;top: 160px;">
            <div class="phone-container">
                <div class="phone-display-container">
                    <div class="full-view" style="cursor: zoom-in">
                        <a href="#" v-show="this.pro.img[0].imglists[0]!=undefined">
                            <img :src="this.pro.img[this.select].imglists[0]" class="change-image" alt="">
                        </a>



                    </div>
                    <ul class="img-block">
                        <li class="li-block" v-for="(item,i) in this.pro.img" :key="i" @click="select=i">
                            <div class="img-gallery">
                                <img :src="item.imglists[0]" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--购买右-->
        <div class="bp-side-r">
            <div class="main-tit-head">
                <div class="pc-head-title" style="overflow: hidden">
                    <h1 class="bp-maintit">购买 {{pro.name}}</h1>
                    <h4 class="big-price">¥ {{pro.price[0]}}</h4>
                </div>
                <div class="ad-main-container">
                    <div class="link">
                        <a href="#">
                            <div class="ad-item">
                                <span class="font-body-1">购买 OnePlus 7 Pro，3999元起</span>
                            </div>
                        </a>
                    </div>
                    <div class="info">
                        <div class="red-color">
                            <span class="font-body-1">限时优惠200元</span>
                        </div>
                    </div>
                    <div class="info">
                        <div class="red-color">
                            <span class="font-body-1">随机购一年屏碎保（139元），限时免费</span>
                        </div>
                    </div>
                    <div class="info">
                        <div class="red-color">
                            <span class="font-body-1">白条6期免息(每日限1单)</span>
                        </div>
                    </div>
                </div>
                <div class="phone-gift-wrapper">
                    <div class="bp-container">
                        <div class="bp-cm-tit">名称</div>
                        <ul class="clearfix chooselist">
                            <li class="bp-cm-button active selected">{{pro.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="phone-gift-wrapper">
                    <div class="bp-container">
                        <div class="bp-cm-tit">颜色</div>
                        <ul class="clearfix chooselist">
                            <div  v-for="(item,i) in this.pro.types" :key="i">
                                <li :class="[select==i?'bp-cm-button active selected':'bp-cm-button']" @click="select=i">{{item}}</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div id="insurance">
                    <div class="bp-sub-container">
                        <div class="bp-sub-tit" style="text-align: left"></div>
                        <div class="jdb-container-box">
                            <div class="pbottom20">

                            </div>
                            <p class="jdb-law-desc">
                                * 加多保服务保障范围请阅读
                                <a class="show-jdb"
                                    href="https://www.oneplus.com/cn/jdb/agreement-v4">《加多保服务保障条款V4》</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group">
                <div class="row row-btns">
                    <div class="col-md-6 col-xs-12 btn-container">
                        <button type="button" class="btn-add-to-cart" @click="buy()">加入购物车</button>
                        <router-link to="/card" class="gotobtn">购物车结算</router-link>
                    </div>
                </div>
            </div>
            <p class="text-black">
                <span>库存：有货</span>
            </p>
            <div class="guarantee-list">
                <div class="guarantee-item">
                    <div class="title-box">
                        <h5 class="text-black">售后政策</h5>
                    </div>
                    <div class="detail">
                        <span class="text">
                            7 天无理由退货
                            <div class="question-area">
                                <i class="ico-help_v2"></i>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="guarantee-item">
                    <div class="title-box">
                        <h5 class="text-black">物流信息</h5>
                    </div>
                    <div class="detail">
                        <span class="text">
                            全场满99元包邮，当天18点前支付24小时内发货
                            <div class="question-area">
                                <i class="ico-help_v2"></i>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id="phone-benefit">
            <div id="packing-list">
                <h3 class="font-title">包装清单</h3>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="img">
                                <img :src="require('./../assets/images/shop/24.png')" alt="">
                            </div>
                            <p class="font-body-2">OnePlus 7</p>
                        </div>
                        <div class="swiper-slide">
                            <div class="img">
                                <img :src="require('./../assets/images/shop/25.png')" alt="">
                            </div>
                            <p class="font-body-2">WARP Type-C 数据线</p>
                        </div>
                        <div class="swiper-slide">
                            <div class="img">
                                <img :src="require('./../assets/images/shop/26.png')" alt="">
                            </div>
                            <p class="font-body-2">WARP 30 闪充适配器</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="user-talk">
                <h3 class="font-title">OnePlus 7 用户评价</h3>
                <div class="user-talk-list">
                    <div class="user-talk1">
                        <img :src="require('./../assets/images/shop/18.jpg')" alt="">
                    </div>
                    <div class="user-talk2">
                        <img :src="require('./../assets/images/shop/19.jpg')" alt="">
                    </div>
                    <div class="user-talk3">
                        <img :src="require('./../assets/images/shop/20.jpg')" alt="">
                    </div>
                </div>
            </div>
            <div id="img-benefit">
                <h3 class="font-title">选择 OnePlus 7 的 7 大理由</h3>
                <ul>
                    <li>
                        <img :src="require('./../assets/images/shop/21.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/22.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/23.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/24.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/25.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/26.jpg')" alt="">
                    </li>
                    <li>
                        <img :src="require('./../assets/images/shop/27.jpg')" alt="">
                    </li>
                </ul>
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
    components: {headers,footers},
    data() {
    return {
        select:0,
        pro:{
            id:'',
            img:[{imglists:''}],
            discount:"",
            name:"",
            price:[],
            select:'',
            typename:"",
            types:[],
        }
    };
},

setup(){},

methods: {
    /* 加入购物车 */
    buy() {
        var goods = localStorage.getItem('goods');
        var username = localStorage.getItem('username')
        console.log(goods);
        console.log(username);
        if(username==null){
            alert('请先登录')
            this.$router.push('/login')
        }else{
            if(goods==null){
                /* 没数据构造数组添加 */
                var data = [
                    {
                        'username':username,
                        'goods':[{
                            'pro_img':this.pro.img[this.select].imglists[0],
                            'pro_name':this.pro.name,
                            'pro_price':this.pro.price[0],
                            'pro_purity':this.pro.types[this.select],
                        }]

                    }
                ]
                localStorage.setItem('goods',JSON.stringify(data));
                alert('添加成功')
            }else{
                const _this = this;
                var userdata = JSON.parse(goods);
                var exit = userdata.filter((ele)=>{
                    return ele.username==username
                })
                console.log(exit)
                
                if(exit.length!=0){
                    var IndexUsername = userdata.findIndex(function(item) {
                        return item.username == username;
                    });
                    console.log(IndexUsername)
                        /* 商品存在购物车内 */
                        /* 获得商品用户在数组中的索引值 */
                        var IndexExitgood = userdata[IndexUsername].goods.findIndex(function(ele) {
                            return ele.pro_name==_this.pro.name&&ele.pro_purity == _this.pro.types[_this.select]
                        });
                        console.log(IndexExitgood)
                        if(IndexExitgood!=-1){
                            
                            ++userdata[IndexUsername].goods[IndexExitgood].pro_number;
                        }else{
                            var choosedata = {
                                'pro_img':this.pro.img[this.select].imglists[0],
                                'pro_name':this.pro.name,
                                'pro_price':this.pro.price[0],
                                'pro_purity':this.pro.types[this.select],
                                'pro_number':1,
                            };
                            userdata[IndexUsername].goods.push(choosedata)
                        }
                }else{
                    /* 没有当前用户的数据 */
                    var data  = {
                        'username':username,
                        'goods':[{
                            'pro_img':this.pro.img[this.select].imglists[0],
                            'pro_name':this.pro.name,
                            'pro_price':this.pro.price[0],
                            'pro_purity':this.pro.types[this.select],
                            'pro_number':1,
                        }]

                    }
                    userdata.push(data)
                    

                }
                localStorage.setItem('goods',JSON.stringify(userdata));
                alert('添加成功')
                
            }   
        }
        
    }

},
created() {
    const _this = this;
    this.$http.get('/json/1.json')
    .then((res) => {
        var mydata = res.data.goodslist;
        var con = mydata.filter((ele)=>{
            return ele.id == _this.$route.params.id
        })
        console.log(con[0])
        
        if(con&&con.length!=0){
             _this.pro = con[0];
             _this.selectName = _this.pro.types[0]
        }
        
    })
    .catch((error) =>{
        console.log(error);
    });  
},

onMounted() {},
beforeCreate() {}, 
onBeforeMount() {}, 
onBeforeUpdate() {}, 
onUpdated() {}, 
onBeforeDestroy() {}, 
onUnmounted() {}, 
activated() {}, 
onErrorCaptured() {}, 
}
</script>
<style lang='less' scoped>
@import url('./../assets/css/goods.css');
</style>