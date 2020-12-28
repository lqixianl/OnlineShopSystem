<template>
<div class=''>
    <headers/>
        <div class="page-shopping-cart" id="shopping-cart">
        <h4 class="cart-title">购物清单</h4>
        <div class="cart-product-title clearfix">
            <div class="td-check fl"><span class="check-span fl check-all" :class="{'check-true':isSelectAll}"
                    @click="selectProduct(isSelectAll)"></span>全选</div>
            <div class="td-product fl">商品</div>
            <div class="td-num fl">数量</div>
            <div class="td-price fl">单价(元)</div>
            <div class="td-total fl">金额(元)</div>
            <div class="td-do fl">操作</div>
        </div>
        <div class="cart-product clearfix">
            <table>
                <tbody>
                    <!--遍历的时候带上索引-->
                    <tr v-for="(item,index) in productList" :key="index">
                        <td class="td-check"><span class="check-span" @click="item.select=!item.select"
                                :class="{'check-true':item.select}"></span></td>
                        <td class="td-product"><img :src="item.pro_img" width="98" height="98">
                            <div class="product-info">
                                <h6>{{item.pro_name}}</h6>
                                <p>规格/纯度:{{item.pro_purity}}&nbsp;&nbsp;</p>
                            </div>
                            <div class="clearfix"></div>
                        </td>
                        <td class="td-num">
                            <div class="product-num">
                                <a href="javascript:;" class="num-reduce num-do fl"
                                    @click="item.pro_number>0?item.pro_number--:''"><span></span></a>
                                <input type="text" class="num-input" v-model="item.pro_number">
                                <a href="javascript:;" class="num-add num-do fr"
                                    @click="item.pro_number++"><span></span></a>
                            </div>
                        </td>
                        <td class="td-price">
                            <p class="red-text">￥<span class="price-text">{{item.pro_price}}</span></p>
                        </td>
                        <td class="td-total">
                            <p class="red-text">￥<span class="total-text">{{item.pro_price*item.pro_number}}</span>.00</p>
                        </td>
                        <td class="td-do"><a href="javascript:;" class="product-delect"
                                @click="deleteOneProduct(index)">删除</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="cart-product-info">
            <a class="delect-product" href="javascript:;" @click="deleteProduct"><span></span>删除所选商品</a>
            
            <router-link class="keep-shopping" to="/index"><span></span>继续购物</router-link>&nbsp;&nbsp;&nbsp;
            <a class="btn-buy fr" href="javascript:;" @click="buy()">去结算</a>
            <a class="btn-buy fr" href="javascript:;" @click="save()">保存修改</a>
            <p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
            <p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计（不含运费）：</p>
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
data() {
//这里存放数据
return {
            productList: [
            ]
};
},

setup(){},

        computed: {
            //检测是否全选
            isSelectAll: function () {               
                return this.productList.every(function (val) {
                    return val.select
                });
            },
            //获取总价和产品总件数
            getTotal: function () {
                
                var _proList = this.productList.filter(function (val) {
                        return val.select
                    }),
                    totalPrice = 0;
                for (var i = 0, len = _proList.length; i < len; i++) {
                    totalPrice += _proList[i].pro_number * _proList[i].pro_price;
                }
                return {
                    totalNum: _proList.length,
                    totalPrice: totalPrice
                }
            }
        },

        methods: {
            //全选与取消全选
            selectProduct: function (_isSelect) {
                for (var i = 0, len = this.productList.length; i < len; i++) {
                    this.productList[i].select = !_isSelect;
                }
            },
            //删除已经选中(select=true)的产品
            deleteProduct: function () {
                this.productList = this.productList.filter(function (item) {
                    return !item.select
                })
            },
            //删除单条产品
            deleteOneProduct: function (index) {
                this.productList.splice(index, 1);
            },
            /* 结算完成删除数据 */
            buy(){
                    var goods = localStorage.getItem('goods');
                    var username = localStorage.getItem('username')
                    var userdata = JSON.parse(goods);
                    /* 获得当前用户在数组中的索引值 */
                    var IndexUsername = userdata.findIndex(function(item) {
                        return item.username == username;
                    });
                    userdata[IndexUsername].goods=[];
                    localStorage.setItem('goods',JSON.stringify(userdata));
                    alert('支付成功');
                    this.$router.push('/index');
            },
            /* 保存修改 */
            save(){
                var goods = localStorage.getItem('goods');
                var username = localStorage.getItem('username');
                var userdata = JSON.parse(goods);
                var IndexUsername = userdata.findIndex(function(item) {
                    return item.username == username;
                });
                userdata[IndexUsername].goods=this.productList;
                localStorage.setItem('goods',JSON.stringify(userdata));
                alert('保存成功');
            }
        },

created() {
        var goods = localStorage.getItem('goods');
        var username = localStorage.getItem('username')
        if(username==null){
            alert('请先登录')
            this.$router.push('/login')
        }else{
            if(goods!=null){
                var userdata = JSON.parse(goods).filter((ele)=>{
                    return ele.username==username
                })
                this.productList = userdata[0].goods;
                console.log(this.productList)
            }
        }
},

        mounted: function () {
            var _this = this;
            this.productList.map(function (item) {
                _this.$set(item, 'select',
                    true
                ); 
            })
        },
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
@import url('./../assets/css/card.css'); 
</style>