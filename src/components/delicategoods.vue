<template>
    <div class="content">
      <div class="goodscontent">
      <div class="goodsimg">
        <div class="jdlogo"><p>京东</p></div>
        <div class="bottombar">
          <div class="imgbottom">
          <div><span class="imgnewprice">¥ <span>88</span></span></div>
          <div class="imgbottomr">
            <div class="yushou">预售</div>
            <p class="imgbeforeprice">¥<span>129</span></p>
            <p class="yifukuan"><span>1378</span>件已付款</p>
          </div>
          </div>
          <div class="justdo"><div>抢！</div></div>
        </div>
      </div>
        <div class="bottom">
          <div class="goodstitle">
            <div class="goodsname"><p>{{cont}}</p></div>
            <div>
              <div class="aftercoupon"><p>券后</p></div>
              <span class="newprice">¥<span>9.99</span></span>
              <span class="beforeprice">¥<span>29.90</span></span>
              <span class="remain">剩余<span>107</span>件</span>
            </div>
          </div>
          <div>
            <p class="description">{{contt}}</p>
          </div>
          <div class="getcoupon"><p>领&nbsp&nbsp&nbsp&nbsp券</p></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "delicategoods",
      data(){
          return{
            cont:'迪奥口红',
            contt:'美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场美妆专场'
          }
      },
      created() {
        this.slh()
      },
      methods:{
          slh(){
            let s = '';
            if(this.contt.length>30){
              s = this.contt.substring(0,30) + '...';
              this.contt = s
            }

          }
      }
    }
</script>

<style scoped>
  .yushou{
    position: absolute;
    top: 4px;
    left: 90px;
    z-index: 11;
    width: 21px;
    height: 11px;
    border-radius: 10px;
    font-size: 7px;
    color: white;
    background: #FD7613;
    text-align: center;
    line-height: 11px;
  }
  .yifukuan{
    margin-top: 3px;
    color: white;
    width: 55px;
    height: 10px;
    font-size: 8px;
    text-align: center;
    line-height: 10px;
    background: rgba(0,0,0,0.1);
  }
  .imgbeforeprice{
    font-size: 9px;
    color:white;
    text-decoration: line-through;
  }
  .imgbottomr{
    margin-left: 15px;
  }
  .imgnewprice span{
    font-size: 17px;
  }
  .imgnewprice{
    font-size: 11px;
    color: white;
  }
  .imgbottom div{
    display: inline-block;
  }
  .imgbottom{
    margin-left: 13px;
    display: flex;
    align-items: center;
    height: 31px;
  }
  .description{
    width: 298px;
    font-size: 12px;
    color:#777777;
    margin-top: 8px;
  }
  .remain span{
    color: #E06C3F;
  }
  .remain{
    margin-left: 9px;
    font-size: 9px;
    color: #333333;
  }
  .beforeprice{
    font-size: 9px;
    color:#999999;
    margin-left: 2px;
    text-decoration: line-through;
  }
  .newprice{
    margin-left: 4px;
    color:#E06C3F;
    font-size: 8px;
  }
  .newprice span{
    font-size: 12px;
  }
  .aftercoupon{
    width: 23px;
    height: 13px;
    border-radius: 10px;
    background: #E06C3F;
    color:white;
    font-size: 8px;
    text-align: center;
    line-height: 13px;
  }
  .goodsname{
    font-size: 14px;
    color:#333333;
    font-weight: 600;
    /*line-height: 14px;*/
  }
  .goodstitle div{
    display: inline-block;
  }
  .goodstitle{
    width: 100%;
    display: flex;
    padding-right: 16px;
    justify-content: space-between;
  }
  .getcoupon{
    width: 141px;
    height: 22px;
    background:#B9473D;
    position: absolute;
    bottom: 7px;
    right: 7px;
    text-align: center;
    color:white;
    font-size: 10px;
    line-height: 22px;
  }
  .bottom{
    width: 100%;
    height: 89px;
    position: relative;
    padding: 13px 0 0 10px;
  }
  .bottombar{
    background:#E06C3F;
  }
  .justdo{
    width: 39px;
    height: 100%;
    background-image: url("../static/y.png");
    background-size: cover;
    color:#E06C3F;
    position: absolute;
    right: -1px;
    top: 0;
    font-size: 10px;
  }
  .justdo div{
    margin: 11px 0 0 15px;
    line-height: 10px;
  }
  .jdlogo p{
    font-size: 12px;
    color:white;
  }
  .jdlogo{
    width: 45px;
    height: 30px;
    background: #E83632;
    text-align: center;
    line-height: 30px;
  }
  .goodscontent{
    width: 100%;
    height: 250px;
    background: white;
  }
  .bottombar{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 31px;
  }
  .goodsimg{
    width: 100%;
    height: 161px;
    position: relative;
  }
.content{
  width: 100%;
  padding: 0 12px 10px 12px;
}
</style>
