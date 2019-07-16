<template>
    <div>
      <div ref="warpper" class="topall">
        <div>
          <div class="picture">
            <div class="back" @click="back"><i class="iconfont icon-fanhui4"></i></div>
            <div class="more" @click="homeback"><i class="iconfont icon-shouye6"></i></div>
          </div>
          <div class="pricecont">
            <div class="goods-one">
              <div class="aftercoupon"><span>券后</span></div>
              <span class="newprice">¥<span style="font-size:17px;">39</span></span>
              <span class="beforeprice">¥<span>59.9</span></span>
              <span class="goods-crazy">疯抢中，手慢无，<span style="color:#E06C3F;">78</span>笔成交</span>
            </div>
            <div class="goods-two">
              <div class="jd-logo"><span>京东</span></div>
              <span class="goods-title">titletitletitletitletitletitletitle</span>
            </div>
            <div class="goods-three">
              <p>datailsdat
                ails datai
                lsdata ilsda tailsd
                atail sdatail sdatai
                lsdat
                ailsda
                tail
                sdatail
                sdatailsd
                atail
                sdatails
                datails</p>
            </div>
          </div>
          <div class="goodspic"></div>
          <div class="recommend">
            <div class="recommend-pic">
              <div class="hot">
              <img src="../../static/limitimg.png" alt="">
              </div>
              <div class="recommend-more"><span >更多</span><img src="../../static/morejian.png" alt=""></div>
            </div>
            <goodsdiv></goodsdiv>
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li class="price"><span>¥30元</span></li>
          <li class="coupon"><span>立即领券下单</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Scroll from 'better-scroll'
  import goodsdiv from  '@/components/onegoods'
    export default {
        name: "detials",
      data(){
          return{

          }
      },
      components:{
        goodsdiv
      },
      methods:{
        initscroll(){
          this.all = new Scroll(this.$refs.warpper,{click:true})
        },
        back(){
          this.$router.go(-1);
        },
        homeback(){
          this.$router.push('/home')
        }
      },
      created() {
          this.$nextTick(()=>{
            this.initscroll()
          })
      }
    }
</script>

<style scoped>
  .icon-fanhui4{
    font-size: 15px;
  }
  .more{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .icon-shouye6{
    font-size: 15px;
  }
  .recommend-pic .recommend-more img{
    width: 9px;
    height: 9px;
    margin-left: 4px;
  }
  .hot{
    position: relative;
    margin-bottom: 15px;
  }
  .recommend-more{
    position: absolute;
    right: 12px;
    top: 0px;
    font-size: 12px;
    color:#333333;
    display: flex;
    align-items: center;
  }
  .recommend-pic{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .recommend-pic img{
    width: 110px;
    height: 16px;
  }
  .goods-one{
    display: flex;
    align-items: center;
    position: relative;
  }
  .goods-crazy{
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .jd-logo{
    width:32px;
    height: 16px;
    font-size: 10px;
    color:white;
    text-align: center;
    line-height: 16px;
    background: #ED2A2A;
    border-radius: 10px;
    display: inline-block;
    margin-right: 10px;
  }
  .goods-two{
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  .aftercoupon{
    width: 35px;
    height: 22px;
    background:#E06C3F;
    font-size: 11px;
    color:white;
    border-radius: 20px;
    text-align: center;
    line-height: 22px;
    display: inline-block;
  }
  .newprice{
    color:#E06C3F;
    font-size:15px;
    margin-left: 10px;
  }
  .beforeprice{
    color:#999999;
    font-size: 11px;
    margin-left:9px;
    text-decoration: line-through;
  }
  .goods-crazy{
    float: right;
    font-size: 11px;
    color: #333333;

  }
  .goods-three p{
    width: 335px;
    font-size: 14px;
    color:#777777;
  }
  .goods-title{
    font-size: 14px;
    color:#414141;
  }
  .recommend{
    padding: 12px 3px 10px 3px;
  }
  .pricecont{
    width: 100%;
    background: white;
    margin-bottom: 10px;
    padding: 13px 12px;
  }
  .back{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    left: 10px;
  }
  .back i{
    /*font-size: 15px;*/
    color:white;
  }
  .more i{
    /*font-size: 18px;*/
    color:white;
  }
  .more{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 10px;
  }
  .goodspic{
    width: 100%;
    height: 1800px;
    background-image: url("../../static/xiangqing.png");
    background-size: cover;
  }
  .picture{
    width: 100%;
    height: 375px;
    position: relative;
    background: #5491A4;
  }
  .topall{
    position: absolute;
    top: 0;
    bottom: 50px;
    overflow: hidden;
    width: 100%;
  }
  .price{
    background: white;
    border: 1px solid #B9473D;
    border-right: 0;
    font-size: 17px;
    text-align: center;
    line-height: 50px;
    color:#B9473D;
  }
  .coupon{
    background: #B9473D;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    color:white;
  }
.bottom{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
}
  .bottom ul li{
    float: left;
    width: 50%;
    height: 50px;
  }
</style>
