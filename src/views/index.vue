<template>
  <div class="">
    <headers></headers>
    <div id="scroll">
      <img :src="this.png[this.banner]" id="pic" alt="" >
      <ul>
          <li class=""></li>
          <li class=""></li>
      </ul>
  </div>
  <!--精选商品-->
<div class="products-cards " style="padding-top:0px">
    <section class="accessory-list-section">

        <div class="accessory-list-cards">
            <div class="accessory-list-card" v-for="(item,i) in goodslist" :key="i">
                <router-link :to="{path:'/good/'+item.id}" class="accessory-card">
                    <div class="product-tags">
                        <span class="product-tag">
                            <span class="tag-text">{{item.discount}}</span>
                        </span>
                    </div>
                    <div class="card-image">
                        <div class="image-slides-carousel">
                            <div class="hide-scrollbar">
                                <div class="carousel-container">
                                    <div class="carousel-list">
                                        <div class="carousel-slide">
                                            <div class="carousel-image-placeholder">
                                                <img :src="item.img[0].imglists[0]" class="accessory-image" alt="">
                                            </div>
                                        </div>
                                        <button class="carousel-arrow-left"></button>
                                        <button class="carousel-arrow-right"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="version-dots">
                        <span class="version-dot">
                            <img :src="require('@/assets/images/shop/3.jpg')" class="version-dot-image" alt="">
                        </span>
                        <span class="version-dot">
                            <img :src="require('@/assets/images/shop/4.jpg')" class="version-dot-image" alt="">
                        </span>
                        <span class="version-dot">
                            <img :src="require('@/assets/images/shop/5.jpg')" class="version-dot-image" alt="">
                        </span>
                    </span>
                    <span class="accessory-name">{{item.name}}</span>
                    <span class="accessory-price">
                        <del class="price">¥{{item.price[0]*1+500}}</del>
                        <span class="discounted">最低价¥{{item.price[0]}}</span>
                    </span>
                </router-link>
            </div>

        </div>
    </section>
</div>
    <footers></footers>
    
  </div>
</template>

<script>


import headers from "./../components/header";
import footers from "./../components/footer";

export default {
  
  components: { headers, footers },
  data() {
    
    return {
      banner:0,
      png:[
        require("@/assets/images/shop/1.jpg"),
        require("@/assets/images/shop/2.jpg")
      ],
      goodslist:[]
    };
  },
  
  methods: {
    /* 轮播图 */
    change(){
      const _this = this;
        setInterval(function(){
         if(_this.banner<_this.png.length-1){
         ++_this.banner ;
         }else{
           _this.banner = 0;
         };
        },1000)
      },
      /* 加载列表数据 */
      data() {
        this.$http.get('/json/1.json')
        .then((res) => {
          this.goodslist  = res.data.goodslist;
        })
        .catch((error) =>{
          console.log(error);
        });  
      }
  },
  created() {
  },
  
  mounted() {
    this.change()
    this.data()
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
@import url('./../assets/css/shopping.css'); 
</style>