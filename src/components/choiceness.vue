<template>
    <div>
      <div class="conten" v-for="(item,ind) in goods" :key="ind">
        <div class="goodscont">
          <div class="jdlogo"><span>京东</span></div>
          <div class="goodscontent">
            <img :src="item.goodsimage" alt="" class="goodsimg">
            <div>
            <p class="goodsname">{{item.goodsname}}</p>
            <p class="goodsdescription">{{item.title}}</p>
            <div class="price">
              <div class="aftercoupon"><span>券后</span></div>
              <span class="newprice"> ¥<span>{{item.newprice}}</span></span>
              <span class="beforeprice">¥<span>{{item.beforeprice}}</span></span>
            </div>
            <p ><span class="crazy">疯抢中，手慢无，<span>{{item.remain}}</span>笔成交</span></p>
            <div class="getcoupon">
              <div class="getcouponl">
                <div>
                <p class="lastprice">¥<span>{{item.newprice}}</span></p>
                <p class="overtime">过期时间:<span>{{item.date}}</span></p>
                </div>
              </div>
              <div class="getcouponr">
                <p>立即领券下单</p>
              </div>
            </div>
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
        name: "choiceness",
      data(){
          return{
          }
      },
      created(){
      },
      methods:{
        
      }
    }
</script>

<style scoped>
  .getcouponl{
    height: 100%;
    padding-top: 3px;
    width: 50%;
    border: 1px solid #B9473D;
    border-right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .goodscontent{
    display: flex;
    justify-content: space-between;
  }
  .beforeprice{
    display: inline-block;
    position: relative;
    height: 9px;
  }
  .price{
    display: flex;
    align-items: center;
  }
  .lastprice{
    color:#B9473D;
    font-size: 9px;
    text-align: center;
    font-weight: 600;
    line-height: 12px;
  }
  .lastprice span{
    font-size: 15px;
  }
  .overtime{
    font-size: 8px;
    color:#777777;
    text-align: center;
    line-height: 8px;
  }
  .getcouponr{
    width: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    background: #B9473D;
    color:white;
  }
  .getcoupon{
    display: flex;
    position: relative;
    width: 200px;
    height: 30px;
  }
  .jdlogo span{
    line-height: 23px;
    font-size: 10px;
    color:white;
  }
  .beforeprice{
    color:#999999;
    font-size: 8px;
    text-decoration: line-through;
    margin-left: 12px;
  }
  .newprice{
    color:#B9473D;
    font-size:10px;
  }
  .newprice span{
    font-size: 15px;
  }
  .aftercoupon{
    width: 21px;
    height: 12px;
    background: #E06C3F;
    font-size: 8px;
    color:white;
    text-align: center;
    line-height: 12px;
    border-radius: 10px;
    display: inline-block;
  }
  .price{
    margin-top: 10px;
  }
  .crazy{
    font-size: 8px;
    color:#333333;
    margin: 5px 0;
    float: right;
  }
  .crazy  span{
    color:#BB4D43;
  }
  .goodsname{
    font-size: 15px;
    color:#333333;
    /* font-weight: 600; */
    line-height: 15px;
  }
  .goodsdescription{
    font-size: 12px;
    color:#777777;
    margin-top: 8px;
    line-height: 12px;
    width: 165px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap
  }
  .goodsimg{
    width: 116px;
    height: 116px;
  }
  .jdlogo{
    text-align: center;
    position: absolute;
    font-size: 10px;
    color:white;
    line-height: 21px;
    top: 0;
    left: 0;
    width: 33px;
    height: 21px;
    background:#E83632;
    border-radius: 0 20px 20px 0;
  }
  .goodscont{
    width: 100%;
    height: 144px;
    background: white;
    padding: 13px 11px 15px 9px;
    position: relative;
  }
.conten{
  width: 100%;
  padding: 0 6px 10px 6px;
}
</style>
