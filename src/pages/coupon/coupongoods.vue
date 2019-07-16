<template>
    <div class="content">
      <div class="goodscontent">
      <div class="goodsimg">
        <div class="jdlogo"><span>京东</span></div>
        <img src="../../static/qqq.png" alt="">
      </div>
      <div class="goodsprice">
        <div class="goodsname">
          <span>森女系外套</span>
          <div class="pinkage"><p>包邮</p></div>
        </div>
        <div class="price">
          <div>
          <span class="newprice">¥ <span>9.99</span></span>
          <span class="beforeprice">¥<span>29.90</span></span>
          </div>
          <div>
          <span class="remain">剩余<span>107</span>件</span>
          </div>
        </div>
        <div class="getcoupon">
          <div class="couponl"><p class="sureprice">¥ <span>80</span></p></div>
          <div class="couponr"><p>立即领券</p></div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "coupongoods"
    }
</script>

<style scoped>
  .beforeprice{
    display: inline-block;
    position: relative;
    height: 9px;
    font-size: 8px;
    text-decoration: line-through;
  }
  .sureprice span{
    font-size: 16px;
  }
  .sureprice{
    color:white;
    text-align: center;
    line-height: 28px;
  }
  .couponl{
    width:50%;
    height: 100%;
    background: #B9473D;
  }
  .couponr{
    width: 50%;
    height: 100%;
    border:1px solid #B9473D;
    border-left: 0;
    font-size: 9px;
    font-weight: 600;
    color:#B9473D;
    text-align: center;
    line-height: 28px;
  }
  .getcoupon{
    width: 100%;
    height: 28px;
    display: flex;
    margin-top: 8px;
  }
  .remain span{
    color:#B9473D;
  }
  .remain{
    font-size: 9px;
    color:#333333;
  }
  .beforeprice{
    margin-left: 10px;
    font-size: 8px;
    color:#999999;
  }
  .newprice{
    font-size: 8px;
    color:#B9473D;
  }
  .newprice span{
    font-size: 12px;
  }
  .price{
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
  }
  .pinkage{
    display: inline-block;
    width: 25px;
    height: 14px;
    text-align: center;
    line-height: 14px;
    color: white;
    font-size: 9px;
    border-radius: 10px;
    background: #E06C3F;
    margin-left: 6px;

  }
  .goodsname span{
    font-size: 12px;
    color: #333333;
  }
  .goodsname{
    display: flex;
    align-items: center;
  }
  .goodsprice{
    padding: 8px;
  }
  .jdlogo span{
    font-size:10px ;
    color:white;
    margin-left: 6px;
    line-height: 25px;
  }
  .jdlogo{
    width: 39px;
    height: 28px;
    background-image: url("../../static/hongjd.png");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  .goodsimg{
    width: 171px;
    height: 119px;
    position: relative;
  }
  .goodsimg img{
    width: 100%;
    height: 100%;
  }
  .goodscontent{
    background: white;
    border-radius: 4px;
    overflow: hidden;
  }
  .content{
    padding: 0 5px 10px 5px;
    width: 50%;
    height: 216px;
    display: inline-block;
  }
</style>
