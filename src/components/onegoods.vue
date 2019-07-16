<template>
  <div class="div" >
    <div class="divcont" v-for="(item,index) in goods" :key="index">
    <div class="divgoods">
    <div class="pic">
      <img :src="item.goodsimage" alt="">
      <div class="jdlogo"><p>京东</p></div>
      <div class="price">
        <div>
          <p class="topnewprice">¥<span> {{item.newprice}}</span></p>
        </div>
        <div class="topbeforeprice">
          <div >
            <div class="presellprice">
            ¥{{item.beforeprice}}
            <div class="presell">预售</div>
            </div>
          <div class="paid">
            <p>{{item.soldgoods}}件已付款</p>
          </div>
          </div>
        </div>
        <div class="rob">
          <span>抢！</span>
        </div>
      </div>
    </div>
    <div class="goodsbody">
      <div class="goodstitle"><p>{{item.goodsname}}</p></div>
      <div class="goodsdescription">
        <p style="width: 100%">{{item.title.slice(0,20) + '...'}}</p>
      </div>
      <p><span class="remain">剩余<span>{{item.remain}}</span>件</span></p>
      <div style="clear: both;"></div>
      <div class="goodsprice">
        <div class="aftercoupon"><p>券后</p></div>
          <span class="newprice">¥<span> {{item.newprice}}</span></span>
          <span class="beforeprice">¥<span >{{item.beforeprice}}</span></span>
      </div>
      <div class="goodsgo" @click="go(index)"><p>领&nbsp&nbsp&nbsp&nbsp券</p></div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        goods:{
          type:Array,
        }
      },
        name: "productlist",
      data(){
          return{
            cont:'美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场',
            nprice:0,
          }
      },
      created(){
        this.slh();
      },
      methods:{
          slh(){

          },
          go(){
            this.$router.push('details')
          }
      }
    }
</script>

<style scoped>
  .pic img{
    width: 100%;
    height: 100%;
  }
  .rob span{
    margin-left: 12px;
  }
  .rob{
    width: 39px;
    height: 31px;
    background: url("../static/y.png");
    background-size: cover;
    color:#E06C3F;
    text-align: center;
    line-height: 31px;
  }
  .paid{
    width: 55px;
    height: 10px;
    background: rgba(0,0,0,0.1);
    font-size: 8px;
    color:white;
    text-align: center;
    line-height: 10px;
    margin-top: 4px;
  }
  .presellprice{
    color:white;
    text-decoration: line-through;
    font-size: 8px;
    display: flex;
    justify-content: space-between;
  }
  .presell{
    display: inline-block;
    width: 21px;
    height: 11px;
    border-radius: 20px;
    background: rgba(0,0,0,0.1);
    text-align: center;
    line-height: 11px;
    font-size: 7px;
    color:white;
  }
  .topbeforeprice{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .topnewprice{
    font-size: 10px;
    color:white;
    line-height: 31px;
  }
  .topnewprice span{
    font-size: 14px;
  }
  .beforeprice{
    margin-left: 10px;
    color:#999999;
    text-decoration: line-through;
    font-size: 8px;
  }
  .newprice span{
    font-size: 15px;
  }
  .newprice{
    font-size: 10px;
    color: #B9473D;
    margin-left: 6px;
  }
  .remain span{
    color:#BE564D;
  }
  .remain{
    font-size: 9px;
    color:#333333;
    float: right;
  }
  .goodsbody{
    padding: 8px;
    padding-bottom:20px;
  }
  .goodsgo{
    width: 141px;
    height: 22px;
    margin: 0 auto;
    text-align: center;
    font-size: 10px;
    line-height: 22px;
    color:white;
    background:#B9473D;
    margin-top: 10px;
  }
  .aftercoupon{
    width: 23px;
    height: 13px;
    background:#E06C3F;
    font-size: 8px;
    color:white;
    border-radius: 10px;
    text-align: center;
    line-height: 13px;
    display: inline-block;
  }
  .goodsprice{
    width: 100%;
  }
  .goodsdescription{
    width: 143px;
    height: 24px;
    font-size: 11px;
    color: #333333;
    margin-top: 8px;
    margin-bottom: 5px;
  }
  .goodstitle{
    font-size: 13px;
    color:#333333;
    font-weight: 600;
  }
  .pricesure span{
    width: 100%;
    margin-left: 14px;
    font-size: 11px;
    color:#FD1760;
    line-height: 32px;
    font-weight: 600;
  }
  .price{
    width: 100%;
    height: 31px;
    position: absolute;
    bottom: 0;
    background:#E06C3F;
    display: flex;
    justify-content: space-between;
    padding-left: 13px;
  }
  .jdlogo p{
    font-size: 12px;
    color: white;
    text-align: center;
   line-height: 30px;
  }
  .jdlogo{
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 30px;
    background:#E83632;
    background-size: cover;
  }
  .pic{
    width: 100%;
    height: 175px;
    position: relative;
    background: #BFBFBF;
  }
  .divcont{
    width: 50%;
    height: 320px;
    display: inline-block;
    padding: 0 5px 10px 5px;
    margin-bottom: 10px;
  }
  .divgoods{
    background: white;
    width:100%;
    display: inline-block;
  }
 .div{
  width: 100%;

}
</style>
