<template>
    <div  class="goodscontent">
      <div class="goodsbody" v-for="(item,ind) in goods" :key="ind">
        <div class="goodscont">
      <div class="goodsimg">
        <img src="" alt="">
        <div class="jdlogo"><span>京东</span></div>
      </div>
      <div class="pricecontent">
        <div class="goodsname">
          <span>{{item.goodsname}}</span>
          <div class="pinkage"><p>包邮</p></div>
        </div>
        <div class="goodsprice">
          <div>
          <span class="newprice">¥<span> {{item.newprice}}</span></span>
          <span class="beforeprice">¥<span>{{item.beforeprice}}</span></span>
          </div>
          <div>
          <span class="remain">剩余<span>{{item.remain}}</span>件</span>
          </div>
        </div>
        <div class="getcoupon">
          <div class="getcouponl">
            <p>¥<span >{{item.newprice}}</span></p>
          </div>
            <div class="getcouponr"><p>立即领券</p></div>
        </div>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        goods:{
          type:Array
        }
      },
        name: "limittime",
        data(){
          return{

          }
        },
        methods:{

        }
    }
</script>

<style scoped>
  .beforeprice{
    display: inline-block;
    position: relative;
    height: 9px;
  }
  .getcouponr{
    width: 50%;
    font-size: 10px;
    color:#B9473D;
    text-align: center;
    line-height: 28px;
    border: 1px solid #B9473D;
    border-left: 0;
  }
  .getcouponl span{
    font-size: 12px;
    margin-left: 1px;
  }
  .getcouponl{
    width: 50%;
    height: 100%;
    font-size: 10px;
    color: white;
    text-align: center;
    line-height: 28px;
    background: #B9473D;
  }
  .getcoupon{
    width: 100%;
    height: 28px;
    display: flex;
    margin-top: 5px;
    justify-content: space-around;
  }
  .remain span{
    color:#B9473D;
  }
  .remain{
    font-size: 9px;
    color:#333333;

  }
  .beforeprice{
    margin-left: 7px;
    color:#999999;
    font-size: 9px;
    text-decoration: line-through;
  }
  .newprice span{
    font-size: 12px;
  }
  .newprice{
    color:#B9473D;
    font-size: 10px;
  }
  .goodsprice{
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  .goodsname{
    font-size: 12px;
    color:#333333;
    display: flex;
    align-items: center;
  }
  .pinkage{
    display: inline-block;
    margin-left: 10px;
    width: 19px;
    height: 12px;
    border-radius: 7px;
    font-size: 7px;
    color: white;
    text-align: center;
    line-height: 12px;
    background: #E06C3F;
  }
  .pricecontent{
    padding: 8px 8px 0 8px;
  }
  .jdlogo span {
    font-size: 10px;
    margin-left: 7px;
    line-height: 25px;
    color:white;
  }
  .jdlogo{
    width: 39px;
    height: 28px;
    background-image: url("../static/hongjd.png");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  .goodsimg{
    width: 100%;
    height: 119px;
    background: #BFBFBF;
  }
  .goodsimg img{
    width: 100%;
    height: 100%;
  }
  .goodscont{
    width: 100%;
    height: 100%;

    height: 216px;
    background: white;
    position: relative;
  }
  .goodsbody{
    width: 50%;
    padding: 0 5px 10px 5px;
    display: inline-block;
  }
  .goodscontent{
    width: 100%;
    height: 100%;
  }
</style>
